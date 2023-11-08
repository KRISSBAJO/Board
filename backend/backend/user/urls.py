from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import InvitationViewSet, validate_invitation_token, CustomUserViewSet, UserLoginView, validate_and_register, LogoutView

router = DefaultRouter()
router.register(r'users', CustomUserViewSet) 
router.register(r'invitations', InvitationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('validate-invitation-token/', validate_invitation_token, name='validate-invitation-token'),
    path('register/', validate_and_register, name='validate-and-register'),
    path('login/', UserLoginView.as_view(), name='login'),
     path('logout/', LogoutView.as_view(), name='logout'),
]
