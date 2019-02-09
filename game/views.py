from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Room


class GameView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'game.html', context=None)


class MenuView(TemplateView):
    def get(self, request, **kwargs):
        # import ipdb; ipdb.set_trace()
        rooms = Room.objects.order_by("title")
        context = {
            'username': request.user.username,
            "rooms": rooms,
        }
        return render(request, 'index.html', context=context)
