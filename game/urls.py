from django.urls import path
from game import views
from django.contrib.auth.decorators import login_required

app_name = 'game'
urlpatterns = [
    path('signup/', views.RegistrationView.as_view(), name='signup'),
    path('', login_required(views.MenuView.as_view())),
    path('game/', login_required(views.GameView.as_view())),
]
