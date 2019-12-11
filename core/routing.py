from django.urls import path

from channels.http import AsgiHandler
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from game.consumers import GameConsumer


# The channel routing defines what connections get handled by what consumers,
# selecting on either the connection type (ProtocolTypeRouter) or properties
# of the connection's scope (like URLRouter, which looks at scope["path"])
# http://channels.readthedocs.io/en/latest/topics/routing.html
application = ProtocolTypeRouter({
    # Channels will do this for you automatically. It's included here as an example. "http": AsgiHandler,
    # Route all WebSocket requests to our game handler.
    # We actually don't need the URLRouter here.
    # Also note the inclusion of the AuthMiddlewareStack to add users and sessions -
    # http://channels.readthedocs.io/en/latest/topics/authentication.html
    "websocket": AuthMiddlewareStack(
        URLRouter([
            path("stream/", GameConsumer),  # URLRouter just takes standard Django path() or url() entries.

        ]),
    ),
})
