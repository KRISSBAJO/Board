from django.contrib import admin

# Regfrom django.contrib import admin
from .models import CustomUser

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name', 'client_name', 'job_position', 'onboarded']
    search_fields = ['email', 'first_name', 'last_name']
    list_filter = ['onboarded', 'client_name', 'job_position']



# admin.py
from django.contrib import admin
from .models import Invitation

@admin.register(Invitation)
class InvitationAdmin(admin.ModelAdmin):
    list_display = ['email', 'inviter', 'date_sent', 'used']
