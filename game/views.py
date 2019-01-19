from django.shortcuts import render
from django.views.generic import TemplateView


class GameView(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'game.html', context=None)
