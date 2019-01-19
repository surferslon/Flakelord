from django.urls import path
from game import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('', login_required(views.MenuView.as_view())),
    path('game/', login_required(views.GameView.as_view())),
]
