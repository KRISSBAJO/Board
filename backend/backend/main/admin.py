from django.contrib import admin
from django.contrib import admin
from .models import (Role, DocumentType, Tag, Document, DocumentPermission,
                     Subscription, ClientSubscription, Comment, DocumentVersion,
                     DocumentCollaborator, KnowledgeBase, ForumPost, ForumComment)

admin.site.register(Role)
admin.site.register(DocumentType)
admin.site.register(Tag)
admin.site.register(Document)
admin.site.register(DocumentPermission)
admin.site.register(Subscription)
admin.site.register(ClientSubscription)
admin.site.register(Comment)
admin.site.register(DocumentVersion)
admin.site.register(DocumentCollaborator)
admin.site.register(KnowledgeBase)
admin.site.register(ForumPost)
admin.site.register(ForumComment)

# 
# 
# from .models import Bookmark, DocumentAccessLog
from .models import Bookmark, DocumentAccessLog

@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ['user', 'document', 'knowledge_base', 'forum_post', 'created_at']

@admin.register(DocumentAccessLog)
class DocumentAccessLogAdmin(admin.ModelAdmin):
    list_display = ['document', 'accessed_by', 'access_time', 'action']

from django.contrib import admin
from .models import Permission

@admin.register(Permission)
class PermissionAdmin(admin.ModelAdmin):
    list_display = ['code', 'name', 'description']
    search_fields = ['name', 'code']
