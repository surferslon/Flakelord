from django.db import models
from django.contrib.postgres.fields import JSONField
# from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.conf import settings

from game.game import generate_field


# class User(AbstractUser, PermissionsMixin):
#     username = models.CharField(max_length=12)
#     email = models.EmailField('email address', unique=True)
#     character = models.CharField(max_length=255, choices=settings.AVAILABLE_CHARACTERS, default='rogue')

#     class Meta:
#         verbose_name = 'user'
#         verbose_name_plural = 'users'


class Room(models.Model):
    """
    A room for people to chat in.
    """

    title = models.CharField(max_length=255)
    staff_only = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        field, startx, starty = generate_field()
        print('generate x', startx)
        new_level = Level(
            number=1,
            field=field,
            start_x=startx,
            start_y=starty,
            room=self
        )
        new_level.save()

    @property
    def group_name(self):
        """
        Returns the Channels Group name that sockets should subscribe to to get sent messages as they are generated.
        """
        return "room-%s" % self.id


class Level(models.Model):
    number = models.IntegerField()
    name = models.CharField(max_length=255)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    field = JSONField()
    start_x = models.IntegerField()
    start_y = models.IntegerField()

    def __str__(self):
        return self.name
