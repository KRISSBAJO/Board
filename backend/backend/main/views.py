from django.shortcuts import render

from django.core.mail import send_mail
from django.db import models
# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .models import (Role, DocumentType, Tag, Document, DocumentPermission,
                     Subscription, ClientSubscription, Comment, DocumentVersion,
                     DocumentCollaborator, KnowledgeBase, ForumPost, ForumComment)
from .serializers import (RoleSerializer, DocumentTypeSerializer, TagSerializer,
                          DocumentSerializer, DocumentPermissionSerializer,
                          SubscriptionSerializer, ClientSubscriptionSerializer,
                          CommentSerializer, DocumentVersionSerializer,
                          DocumentCollaboratorSerializer, KnowledgeBaseSerializer,
                          ForumPostSerializer, ForumCommentSerializer,BookmarkSerializer, DocumentAccessLogSerializer)

from django.core.mail import send_mail
from django.http import HttpResponse

def simple_mail(request):
    send_mail(
        subject='Here is the message.',
        message=request.user.email,
        from_email='krissbajo@hotmail.com',
        recipient_list=['krissbajo@hotmail.com']
    )

    return HttpResponse('Message sent successfully')

from rest_framework import viewsets
from .models import Permission
from .serializers import PermissionSerializer

from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Permission
from .serializers import PermissionSerializer

class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            permission = serializer.save()
            related_permissions_data = request.data.get('relatedPermissions', [])
            for related_permission_data in related_permissions_data:
                try:
                    # Here you have to convert the incoming data to actual Permission instances
                    related_permission = Permission.objects.get(code=related_permission_data['value'])
                    permission.related_permissions.add(related_permission)
                except Permission.DoesNotExist:
                    # Handle the case where the related permission does not exist
                    return Response(
                        {'error': 'Related permission not found.'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
from .serializers import PermissionOptionSerializer
from rest_framework import generics

class PermissionOptionsView(generics.ListAPIView):
    queryset = Permission.objects.all()
    serializer_class = PermissionOptionSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class DocumentTypeViewSet(viewsets.ModelViewSet):
    queryset = DocumentType.objects.all()
    serializer_class = DocumentTypeSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    
from .permission_mixin import SoftDeletePermissionMixin

class DocumentViewSet(viewsets.ModelViewSet):
    serializer_class = DocumentSerializer
    permission_classes = [SoftDeletePermissionMixin]

    def get_queryset(self):
        # If the user can see soft-deleted records, return all. Else, filter out soft-deleted ones.
        if self.request.user.role in ['Admin', 'Manager'] or self.request.user.groups.filter(name='CAN_DELETE').exists():
            return Document.objects.all()
        return Document.objects.filter(is_deleted=False)
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)



class DocumentPermissionViewSet(viewsets.ModelViewSet):
    queryset = DocumentPermission.objects.all()
    serializer_class = DocumentPermissionSerializer

class SubscriptionViewSet(viewsets.ModelViewSet):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer

class ClientSubscriptionViewSet(viewsets.ModelViewSet):
    queryset = ClientSubscription.objects.all()
    serializer_class = ClientSubscriptionSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class DocumentVersionViewSet(viewsets.ModelViewSet):
    queryset = DocumentVersion.objects.all()
    serializer_class = DocumentVersionSerializer

class DocumentCollaboratorViewSet(viewsets.ModelViewSet):
    queryset = DocumentCollaborator.objects.all()
    serializer_class = DocumentCollaboratorSerializer

class KnowledgeBaseViewSet(viewsets.ModelViewSet):
    queryset = KnowledgeBase.objects.all()
    serializer_class = KnowledgeBaseSerializer

class ForumPostViewSet(viewsets.ModelViewSet):
    queryset = ForumPost.objects.all()
    serializer_class = ForumPostSerializer

class ForumCommentViewSet(viewsets.ModelViewSet):
    queryset = ForumComment.objects.all()
    serializer_class = ForumCommentSerializer


from .models import Bookmark, DocumentAccessLog

class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer

class DocumentAccessLogViewSet(viewsets.ModelViewSet):
    queryset = DocumentAccessLog.objects.all()
    serializer_class = DocumentAccessLogSerializer


from rest_framework import viewsets
from .models import Notification
from .serializers import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer