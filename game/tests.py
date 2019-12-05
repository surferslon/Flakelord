from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse


class RegistrationTests(TestCase):
    def test_authorization(self):
        user = User.objects.create_user('foo', password='bar')
        response = self.client.post(reverse('login'),
                                    {'username': user.username, 'password': user.password})
        self.assertEqual(200, response.status_code)

    def test_registration(self):
        username = 'flake'
        post_response = self.client.post(reverse('game:signup'),
                                         {'username': username, 'password1': 'lord', 'password2': 'lord'})
        get_response = self.client.get('/')
        self.assertEqual(302, post_response.status_code)
        self.assertEqual(200, get_response.status_code)
        self.assertEqual(get_response.context['username'], username)
