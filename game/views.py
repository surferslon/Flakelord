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
