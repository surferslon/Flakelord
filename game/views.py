from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from .models import Room
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponseRedirect


def user_signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/', args=[request.user.username])
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})


class GameView(TemplateView):
    template_name = 'game.html'


class MenuView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        rooms = Room.objects.order_by("title")
        return {
            'username': self.request.user.username,
            "rooms": rooms,
        }
