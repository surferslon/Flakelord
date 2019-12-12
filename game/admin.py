from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Room, User




admin.site.register(User, UserAdmin)
admin.site.register(
    Room,
    list_display=["id", "title", "staff_only"],
    list_display_links=["id", "title"],
)
