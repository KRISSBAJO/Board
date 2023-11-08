from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoleViewSet, DocumentTypeViewSet, TagViewSet, DocumentViewSet, DocumentPermissionViewSet, SubscriptionViewSet, ClientSubscriptionViewSet, CommentViewSet, DocumentVersionViewSet, DocumentCollaboratorViewSet, KnowledgeBaseViewSet, ForumPostViewSet, ForumCommentViewSet
from .views import BookmarkViewSet, DocumentAccessLogViewSet, NotificationViewSet, simple_mail, PermissionViewSet, PermissionOptionsView

router = DefaultRouter()
router.register(r'permissions', PermissionViewSet)
router.register(r'roles', RoleViewSet)
router.register(r'document_types', DocumentTypeViewSet)
router.register(r'tags', TagViewSet)
router.register(r'documents', DocumentViewSet, basename='document')
router.register(r'document_permissions', DocumentPermissionViewSet)
router.register(r'subscriptions', SubscriptionViewSet)
router.register(r'client_subscriptions', ClientSubscriptionViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'document_versions', DocumentVersionViewSet)
router.register(r'document_collaborators', DocumentCollaboratorViewSet)
router.register(r'knowledge_bases', KnowledgeBaseViewSet)
router.register(r'forum_posts', ForumPostViewSet)
router.register(r'forum_comments', ForumCommentViewSet)
router.register(r'bookmarks', BookmarkViewSet)
router.register(r'document-access-logs', DocumentAccessLogViewSet)
router.register(r'notifications', NotificationViewSet)


urlpatterns = [
    path('', include(router.urls)),
   path('mail', simple_mail, name='mail'),
path('permission_options/', PermissionOptionsView.as_view(), name='permission-options'),

]
