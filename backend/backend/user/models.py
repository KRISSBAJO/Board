from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
import base64

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)
from django.db import models
from enum import Enum

class UserRole(Enum):
    USER = 'User'
    PROVIDER = 'Provider'
    ADMIN = 'Admin'
    EMPLOYEE = 'Employee'
    MANAGER = 'Manager'
    
    # Add more roles if needed

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]

class ActiveUserManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)

class AllUserManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset()

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # New field
    role = models.CharField(
    max_length=100, 
    choices=UserRole.choices(), 
    blank=False,   # Role must be provided
    null=False    # It can't be null
)

    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    
    # Additional fields
    client_name = models.CharField(max_length=100)
    job_position = models.CharField(max_length=100)
    onboarded = models.BooleanField(default=True)  # True for onboarded, False for offboarded
    reporting_to = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    objects = CustomUserManager()
    active_users = ActiveUserManager()
    all_users = AllUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'client_name']
    
    @property
    def full_name(self):
        """Return the user's full name."""
        return f'{self.first_name} {self.last_name}'

    def __str__(self):
        return self.email
from datetime import timedelta

# Create your models here.
from django.core.mail import send_mail
from django.db import models
from django.utils.crypto import get_random_string

class Invitation(models.Model):
    email = models.EmailField(unique=True)
    inviter = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    token = models.CharField(max_length=100, unique=True, default=get_random_string(100))
    used = models.BooleanField(default=False)
    date_sent = models.DateTimeField(auto_now_add=True)
    expiry_date = models.DateTimeField()

    def save(self, *args, **kwargs):
        is_new = not self.pk  # Check if the object is new
        
        if is_new:  # Only set the expiry_date and send the email when the object is first created
            self.expiry_date = timezone.now() + timedelta(hours=24)
            super().save(*args, **kwargs)  # Save the instance first
            
            inviter_client_name = self.inviter.client_name
            encoded_client_name = base64.urlsafe_b64encode(inviter_client_name.encode()).decode()

            # Encode the email
            encoded_email = base64.urlsafe_b64encode(self.email.encode()).decode()
            
            subject = 'Invitation to Join [Your Platform Name]'
            FRONTEND_BASE_URL = settings.FRONTEND_URL
            REGISTER_ENDPOINT = '/register'
            message_template = """
                Dear [Recipient's Name],

                You have been invited by {inviter_name} to join [Your Platform Name].

                To complete your registration and set up your account, please click on the link below:

                {registration_link}

                This invitation link will expire in 24 hours, so we encourage you to complete your registration as soon as possible.

                If you have any questions or require assistance, please reply to this email or contact our support team at [Support Email Address].

                Thank you for joining us!

                Warm regards,
                [Your Platform Name] Team
                """
            registration_link = f'{FRONTEND_BASE_URL}{REGISTER_ENDPOINT}?token={self.token}&code={encoded_client_name}&email={encoded_email}'
            formatted_message = message_template.format(inviter_name=self.inviter.client_name, registration_link=registration_link)
            send_mail(subject, formatted_message, 'krissbajo@hotmail.com', [self.email])
        else:
            super().save(*args, **kwargs)  # If the object is not new, simply save the instance without sending the email



    def __str__(self):
        return self.email
    
    
@receiver(post_save, sender=CustomUser)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
