from django.db import models
from django.contrib.postgres.fields import JSONField
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from .game import generate_field, get_redis


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

    @property
    def members(self):
        redis = get_redis()
        return redis.scard('room_%s' % self.id)


class Level(models.Model):
    number = models.IntegerField()
    name = models.CharField(max_length=255)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    field = JSONField()
    start_x = models.IntegerField()
    start_y = models.IntegerField()

    def __str__(self):
        return self.name


class User(AbstractUser):
    char = models.CharField(max_length=255, choices=settings.AVAILABLE_CHARACTERS, default='rogue')
