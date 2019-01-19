from django.shortcuts import render
from django.views.generic import TemplateView


class GameView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'game.html', context=None)


class MenuView(TemplateView):
    def get(self, request, **kwargs):
        # import ipdb; ipdb.set_trace()
        context = {
            'username': request.user.username
        }
        return render(request, 'menu.html', context=context)
