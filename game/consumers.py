from django.conf import settings

from channels.generic.websocket import AsyncJsonWebsocketConsumer

from .exceptions import ClientError
from .utils import get_room_or_error
from game.models import Level
from game.game import move


class ChatConsumer(AsyncJsonWebsocketConsumer):
    """
    This chat consumer handles websocket connections for chat clients.
    It uses AsyncJsonWebsocketConsumer, which means all the handling functions
    must be async functions, and any sync work (like ORM access) has to be
    behind database_sync_to_async or sync_to_async. For more, read
    http://channels.readthedocs.io/en/latest/topics/consumers.html
    """

    async def connect(self):
        """ Called when the websocket is handshaking as part of initial connection. """

        if self.scope["user"].is_anonymous:  # Are they logged in?
            await self.close()  # Reject the connection
        else:
            await self.accept()  # Accept the connection
        self.rooms = set()  # Store which rooms the user has joined on this connection

    async def receive_json(self, content):
        """
        Called when we get a text frame. Channels will JSON-decode the payload
        for us and pass it as the first argument.
        """

        # Messages will have a "command" key we can switch on
        command = content.get("command", None)
        try:
            if command == "join":
                await self.join_room(content["room"])
            elif command == "leave":
                await self.leave_room(content["room"])
            elif command == "send":
                await self.send_room(content["room"], content["message"])
        except ClientError as e:
            await self.send_json({"error": e.code})

    async def disconnect(self, code):
        """ Called when the WebSocket closes for any reason. """

        # Leave all the rooms we are still in
        for room_id in list(self.rooms):
            try:
                await self.leave_room(room_id)
            except ClientError:
                pass

    ##### Command helper methods called by receive_json

    async def join_room(self, room_id):
        """ Called by receive_json when someone sent a join command. """

        # The logged-in user is in our scope thanks to the authentication ASGI middleware
        room = await get_room_or_error(room_id, self.scope["user"])

        level = Level.objects.get(room=room, number=1)
        field = level.field
        start_x = level.start_x
        start_y = level.start_y
        await self.channel_layer.group_send(  # Send a join message if it's turned on
            room.group_name,
            {
                "type": "chat.join",
                "room_id": room_id,
                "username": self.scope["user"].username,
            }
        )

        self.rooms.add(room_id)  # Store that we're in the room

        await self.channel_layer.group_add(  # Add them to the group so they get room messages
            room.group_name,
            self.channel_name,
        )
        # import ipdb; ipdb.set_trace()
        await self.send_json({  # Instruct their client to finish opening the room
            "join": str(room.id),
            "title": room.title,
            'message': {
                'start_x': start_x, 'start_y': start_y,
                'field': field,
                'username': self.scope["user"].username
            }
        })

    async def leave_room(self, room_id):
        """ Called by receive_json when someone sent a leave command. """

        # The logged-in user is in our scope thanks to the authentication ASGI middleware
        room = await get_room_or_error(room_id, self.scope["user"])
        # Send a leave message if it's turned on
        await self.channel_layer.group_send(
            room.group_name,
            {
                "type": "chat.leave",
                "room_id": room_id,
                "username": self.scope["user"].username,
            }
        )

        self.rooms.discard(room_id)  # Remove that we're in the room
        # Remove them from the group so they no longer get room messages
        await self.channel_layer.group_discard(
            room.group_name,
            self.channel_name,
        )

        await self.send_json({  # Instruct their client to finish closing the room
            "leave": str(room.id),
        })

    async def send_room(self, room_id, message):
        """ Called by receive_json when someone sends a message to a room. """

        print('>>> message', message)
        new_x, new_y = move(message)
        if room_id not in self.rooms:  # Check they are in this room
            raise ClientError("ROOM_ACCESS_DENIED")
        # Get the room and send to the group about it
        room = await get_room_or_error(room_id, self.scope["user"])
        await self.channel_layer.group_send(
            room.group_name,
            {
                "type": "chat.message",
                "room_id": room_id,
                "username": self.scope["user"].username,
                "message": {'username': message['username'], 'new_x': new_x, 'new_y': new_y},
            }
        )

    ##### Handlers for messages sent over the channel layer

    # These helper methods are named by the types we send - so chat.join becomes chat_join
    async def chat_join(self, event):
        """ Called when someone has joined our chat. """
        room = await get_room_or_error(event["room_id"], self.scope["user"])
        level = Level.objects.get(room=room, number=1)
        await self.send_json(  # Send a message down to the client
            {
                "msg_type": settings.MSG_TYPE_ENTER,
                "room": event["room_id"],
                "username": event["username"],
                'x': level.start_x,
                'y': level.start_y
            },
        )

    async def chat_leave(self, event):
        """ Called when someone has left our chat. """

        await self.send_json(  # Send a message down to the client
            {
                "msg_type": settings.MSG_TYPE_LEAVE,
                "room": event["room_id"],
                "username": event["username"],
            },
        )

    async def chat_message(self, event):
        """ Called when someone has messaged our chat. """

        await self.send_json(  # Send a message down to the client
            {
                "msg_type": settings.MSG_TYPE_MESSAGE,
                "room": event["room_id"],
                "username": event["username"],
                "message": event["message"],
            },
        )
