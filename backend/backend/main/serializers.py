from rest_framework import serializers
from .models import (Role, DocumentType, Tag, Document, DocumentPermission,
                     Subscription, ClientSubscription, Comment, DocumentVersion,
                     DocumentCollaborator, KnowledgeBase, ForumPost, ForumComment, Permission)


from rest_framework import serializers
from .models import Permission

class PermissionSerializer(serializers.ModelSerializer):
    related_permissions = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Permission.objects.all(),
        required=False
    )

    class Meta:
        model = Permission
        fields = ['id', 'code', 'name', 'description', 'related_permissions']
        
from rest_framework import serializers
from .models import Permission

class PermissionOptionSerializer(serializers.ModelSerializer):
    value = serializers.CharField(source='id')
    label = serializers.CharField(source='name')

    class Meta:
        model = Permission
        fields = ('value', 'label')


from rest_framework import serializers
from .models import Role

class RoleSerializer(serializers.ModelSerializer):
    permissions = PermissionSerializer(many=True, read_only=True)
    parent_name = serializers.SerializerMethodField()

    class Meta:
        model = Role
        fields = ['id', 'name', 'description', 'permissions', 'parent', 'parent_name', 'is_default', 'is_active', 'created_at', 'updated_at']

    def get_parent_name(self, obj):
        return obj.parent.name if obj.parent else None

class DocumentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentType
        fields = ['id', 'name', 'description']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name', 'description']
        
from user.serializers import CustomUserSerializer

class DocumentSerializer(serializers.ModelSerializer):
    # Read operations
    document_type = DocumentTypeSerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    created_by = CustomUserSerializer(read_only=True)

    # Write operations
    document_type_id = serializers.PrimaryKeyRelatedField(
        write_only=True,
        queryset=DocumentType.objects.all(),
        source='document_type'
    )

    class Meta:
        model = Document
        fields = [
            'id', 'document_type', 'document_type_id', 'title', 'content', 
            'created_by', 'tags', 'file', 'status', 'last_updated'
        ]
        extra_kwargs = {
            'created_by': {'read_only': True},
        }

    def create(self, validated_data):
        # You can now create a document instance with the document_type foreign key.
        return Document.objects.create(**validated_data)

    
class DocumentPermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentPermission
        fields = '__all__'

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = '__all__'

class ClientSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClientSubscription
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class DocumentVersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentVersion
        fields = '__all__'

class DocumentCollaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentCollaborator
        fields = '__all__'

class KnowledgeBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeBase
        fields = '__all__'

class ForumPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumPost
        fields = '__all__'

class ForumCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumComment
        fields = '__all__'


from .models import Notification

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'


from .models import Bookmark, Notification, DocumentAccessLog

class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = '__all__'

class DocumentAccessLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentAccessLog
        fields = '__all__'
