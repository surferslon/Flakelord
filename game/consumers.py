import redis
from django.conf import settings
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from .exceptions import ClientError
from .models import Level, User
from .utils import get_room_or_error
from .game import move, get_redis


class GameConsumer(AsyncJsonWebsocketConsumer):

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
        command = content.get("command", None)  # Messages will have a "command" key we can switch on
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
        for room_id in list(self.rooms):  # Leave all the rooms we are still in
            try:
                await self.leave_room(room_id)
            except ClientError:
                pass


    # Command helper methods called by receive_json

    async def join_room(self, room_id):
        """ Called by receive_json when someone sent a join command. """

        # The logged-in user is in our scope thanks to the authentication ASGI middleware
        room = await get_room_or_error(room_id, self.scope["user"])

        username = self.scope["user"].username
        level = Level.objects.get(room=room, number=1)
        field = level.field
        start_x = level.start_x
        start_y = level.start_y

        await self.channel_layer.group_send(  # Send a join message if it's turned on
            room.group_name,
            {
                "type": "game.join",
                "room_id": room_id,
                "username": username,
            }
        )

        self.rooms.add(room_id)  # Store that we're in the room

        redis_server = get_redis()
        redis_server.hmset(
            username,
            {
                'x': start_x,
                'y': start_y,
                'health': 100,
                'accuracy': 1,
                'damage_mult': '2',
                'damage_max': '3',
                'damage_bonus': 1,
                'DV': 3,
                'PV': 1,
            }
        )
        redis_server.sadd('room_%s' % room_id, username)

        await self.channel_layer.group_add(  # Add them to the group so they get room messages
            room.group_name,
            self.channel_name,
        )

        mob_list = []
        for room_member in redis_server.smembers('room_%s' % room_id):
            if room_member == username:
                continue
            member_data = redis_server.hgetall(room_member)
            mob_list.append({room_member: member_data})

        await self.send_json({  # Instruct their client to finish opening the room
            "join": str(room.id),
            "title": room.title,
            'message': {
                'start_x': start_x,
                'start_y': start_y,
                'field': field,
                'health': 100,
                'accuracy': 1,
                'damage_mult': '2',
                'damage_max': '3',
                'damage_bonus': 1,
                'DV': 3,
                'PV': 1,
                'username': self.scope["user"].username,
                'mob_list': mob_list
            }
        })

    async def leave_room(self, room_id):
        """ Called by receive_json when someone sent a leave command. """

        # The logged-in user is in our scope thanks to the authentication ASGI middleware
        room = await get_room_or_error(room_id, self.scope["user"])
        username = self.scope["user"].username
        await self.channel_layer.group_send(  # Send a leave message if it's turned on
            room.group_name,
            {
                "type": "game.leave",
                "room_id": room_id,
                "username": username,
            }
        )

        redis_server = get_redis()
        redis_server.delete(username)
        redis_server.srem('room_%s' % room_id, username)

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
        if room_id not in self.rooms:
            raise ClientError("ROOM_ACCESS_DENIED")
        # Get the room and send to the group about it
        room = await get_room_or_error(room_id, self.scope["user"])
        username = self.scope["user"].username

        if isinstance(message, dict):
            new_x, new_y, text, new_values = move(message, room_id)
            response = {'username': username, 'new_x': new_x, 'new_y': new_y, 'resp_type': 'move', 'text': text}
            # import ipdb; ipdb.set_trace(context=16)
            if new_values:
                response.update(new_values)
            msg_type = 'chat.message'
        else:
            response = {'text': message, 'resp_type': 'message'}
            msg_type = 'game.move'

        await self.channel_layer.group_send(
            room.group_name,
            {
                "type": msg_type,
                "room_id": room_id,
                "username": username,
                "message": response,
            }
        )

    # Handlers for messages sent over the channel layer

    # These helper methods are named by the types we send - so chat.join becomes chat_join
    async def game_join(self, event):
        """ Called when someone has joined our chat. """
        room = await get_room_or_error(event["room_id"], self.scope["user"])
        level = Level.objects.get(room=room, number=1)
        await self.send_json(
            {
                "msg_type": settings.MSG_TYPE_ENTER,
                "room": event["room_id"],
                "username": event["username"],
                'x': level.start_x,
                'y': level.start_y
            },
        )

    async def game_leave(self, event):
        """ Called when someone has left our chat. """

        await self.send_json(
            {
                "msg_type": settings.MSG_TYPE_LEAVE,
                "room": event["room_id"],
                "username": event["username"],
            },
        )

    async def game_move(self, event):
        """ Called when someone has messaged our chat. """
        await self.send_json(
            {
                "msg_type": settings.MSG_TYPE_MESSAGE,
                "room": event["room_id"],
                "username": event["username"],
                "message": event["message"],
            },
        )

    async def chat_message(self, event):
        """ Called when someone has messaged our chat. """
        await self.send_json(
            {
                "msg_type": settings.MSG_TYPE_MESSAGE,
                "room": event["room_id"],
                "username": event["username"],
                "message": event["message"],
            },
        )
