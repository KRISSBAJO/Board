# serializers.py


from rest_framework import serializers
from .models import CustomUser
import re
from .models import UserRole


class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'phone_number', 'password', 'role', 'client_name', 'profile_picture', 'onboarded', 'reporting_to']

    # Field-level validation for email
    def validate_email(self, value):
        # Check if email is unique
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
        return value.lower()  # return email in lowercase

    # Field-level validation for phone_number
    def validate_phone_number(self, value):
        # This regex matches phone numbers that may start with an optional + and country code, followed by digits. 
        # It also allows spaces, hyphens, and parentheses.
        if not re.match(r"^\+?[\d\s\-\(\)]+$", value):
            raise serializers.ValidationError("Invalid phone number format")
        return value


    # Field-level validation for password
    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long")
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError("Password must contain at least one number.")
        if not any(char.isalpha() for char in value):
            raise serializers.ValidationError("Password must contain at least one letter.")
        return value

    # Field-level validation for role
    def validate_role(self, value):
        allowed_roles = [role.value for role in UserRole]
        if value not in allowed_roles:
            raise serializers.ValidationError(f"Role must be one of {', '.join(allowed_roles)}")
        return value


    # Object-level validation
    def validate(self, data):
        # Only do the email check if 'email' is in the data
        if 'email' in data and "@specialdomain.com" in data['email']:
            if not data['phone_number'].startswith('+'):
                raise serializers.ValidationError({"phone_number": "Users from specialdomain.com must have phone numbers starting with '+'"})
        return data


    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


# serializers.py
from rest_framework import serializers
from .models import Invitation

class InvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation
        fields = '__all__'

from rest_framework import serializers
from django.contrib.auth import authenticate

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data['email'], password=data['password'])
        if user and user.is_active:
            # You can include additional user information here
            return {
                "user": user,
                "role": user.role  # Assuming your CustomUser model has a 'role' field
            }
        raise serializers.ValidationError("Incorrect Credentials")
    
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Agent

# This will fetch your custom user model
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'phone_number', 'role']

class AgentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Agent
        fields = ['user', 'company_name', 'website', 'npn']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        
        # Provide default values for required fields if not present
        user_data.setdefault('client_name', 'Default Client')
        user_data.setdefault('job_position', 'Agent')

        user = User.objects.create(**user_data)
        agent = Agent.objects.create(user=user, **validated_data)
        return agent

