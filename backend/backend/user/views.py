from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from datetime import datetime

from django.shortcuts import get_object_or_404

from .models import CustomUser, Invitation
from .serializers import CustomUserSerializer, InvitationSerializer

# Custom User ViewSet
from rest_framework import status
from rest_framework.response import Response

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        
        # Validate only if 'profile_picture' is present in the request
        if 'profile_picture' in request.data:
            if serializer.is_valid():
                self.perform_update(serializer)
                
                # After updating, return the updated profile picture URL
                updated_instance = self.get_object()
                return Response({
                    'profile_picture': updated_instance.profile_picture.url
                })
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            # If 'profile_picture' is not in the request, do not proceed with update
            return Response({
                "detail": "Only the profile picture can be updated here."
            }, status=status.HTTP_400_BAD_REQUEST)


# Invitation ViewSet
class InvitationViewSet(viewsets.ModelViewSet):
    queryset = Invitation.objects.all()
    serializer_class = InvitationSerializer





@api_view(['POST'])
@permission_classes([AllowAny])
def validate_invitation_token(request):
    token = request.data.get('token')
    try:
        invitation = Invitation.objects.get(token=token, used=False)
        return Response({'message': 'Token is valid', 'email': invitation.email})
    except Invitation.DoesNotExist:
        return Response({'error': 'Invalid or expired token'}, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def validate_and_register(request):
    token_value = request.data.get('token', None)
    email = request.data.get('email', None)
    password = request.data.get('password', None)
    first_name = request.data.get('first_name', None)
    last_name = request.data.get('last_name', None)
    client_name = request.data.get('client_name', None)
    
    # Validate the token if provided
    if token_value:
        try:
            invitation = Invitation.objects.get(token=token_value)
            if invitation.used:
                return Response({"detail": "This token has already been used."}, status=status.HTTP_400_BAD_REQUEST)
            
            if datetime.now() > invitation.expiry_date:
                return Response({"detail": "This token has expired."}, status=status.HTTP_400_BAD_REQUEST)
            
                        # Check if the token is already used
            if invitation.used:
                return Response({"detail": "This token has already been used."}, status=status.HTTP_400_BAD_REQUEST)

            # If the email from the request does not match the email from the invitation, return an error
            if email != invitation.email:
                return Response({"detail": "The email provided does not match the invitation email."}, status=status.HTTP_400_BAD_REQUEST)

            # Mark the invitation as used
            invitation.used = True
            invitation.save()
        except Invitation.DoesNotExist:
            return Response({"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)

    # Basic validation for user data. Modify as needed.
    if not all([email, password, first_name, last_name, client_name]):
        return Response({"detail": "Incomplete user data."}, status=status.HTTP_400_BAD_REQUEST)
    
    # Create and save the new user
    user = CustomUser.objects.create_user(
        email=email,
        password=password,
        first_name=first_name,
        last_name=last_name,
        client_name=client_name
    )
    user.save()

    # Generate a token for the user
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'message': 'User registration successful.'}, status=status.HTTP_201_CREATED)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import login
from .serializers import UserLoginSerializer

class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data["user"]
            login(request, user)
            
            # Generate or retrieve token
            token, created = Token.objects.get_or_create(user=user)
            
            # Add the user's role to the response
            return Response({
                "token": token.key,
                "userId": user.id,
                "role": serializer.validated_data["role"],  # Include the role in the response
                "message": "Login Successful"
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from django.contrib.auth import logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class LogoutView(APIView):
    def post(self, request):
        # Django's logout function removes the authenticated user's ID from the session and flushes their session data.
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
