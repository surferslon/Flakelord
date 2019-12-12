from django.views.generic import TemplateView, FormView
from django.views.generic.edit import CreateView
from django.contrib.auth import login
from .models import Room
from .forms import RegistrationForm


class RegistrationView(CreateView):
    template_name = 'registration/signup.html'
    form_class = RegistrationForm
    success_url = '/'

    def get_success_url(self, **kwargs):
        url = super(RegistrationView, self).get_success_url(**kwargs)
        login(self.request, self.object)
        return url


class GameView(TemplateView):
    template_name = 'game.html'


class MenuView(TemplateView):
    template_name = 'menu.html'

    def get_context_data(self, **kwargs):
        rooms = Room.objects.all()
        return {
            'username': self.request.user.username,
            "rooms": rooms,
        }
