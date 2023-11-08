from django.db import models
from user.models import CustomUser
from django.utils import timezone
from django.utils.text import slugify
from django.template.defaultfilters import slugify


class SoftDeletableModel(models.Model):
    is_deleted = models.BooleanField(default=False)

    def delete(self, using=None, keep_parents=False):
        self.is_deleted = True
        self.save()

    class Meta:
        abstract = True
# Create your models here.
class ActiveDocumentPermissionManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)

class AllDocumentPermissionManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset()
from django.db import models

class Permission(models.Model):
    code = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    related_permissions = models.ManyToManyField('self', blank=True, symmetrical=False)

    def __str__(self):
        return self.name

from django.db import models
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

class Role(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    permissions = models.ManyToManyField('Permission', blank=True) # Assuming you have a Permission model
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='children')
    is_default = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class DocumentType(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Document(SoftDeletableModel):
    document_type = models.ForeignKey(DocumentType, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    tags = models.ManyToManyField(Tag, blank=True)
    file = models.FileField(upload_to='documents/', null=True, blank=True)
    created_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='created_documents')
    last_updated = models.DateTimeField(auto_now=True)
    is_encrypted = models.BooleanField(default=False)
    access_log = models.TextField(blank=True, null=True)
    date_modified = models.DateTimeField(auto_now=True)
    STATUS_CHOICES = [ ('draft', 'Draft'), ('review', 'Review'), ('published', 'Published'),('archived', 'Archived'),]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    slug = models.SlugField(max_length=255, unique=True)
    active_permissions = ActiveDocumentPermissionManager()
    all_permissions = AllDocumentPermissionManager()
    
    
    def _get_unique_slug(self):
        slug = slugify(self.title)
        unique_slug = slug
        num = 1
        while Document.objects.filter(slug=unique_slug).exists():
            unique_slug = f'{slug}-{num}'
            num += 1
        return unique_slug

    def save(self, *args, **kwargs):
        # If the slug doesn't exist, generate one before saving
        if not self.slug:
            self.slug = self._get_unique_slug()

        # Call any pre-save actions here, for example, versioning

        # Now call the 'real' save method.
        super().save(*args, **kwargs)
    objects = models.Manager()
    
    default_manager = models.Manager()
    
    def __str__(self):
        return self.title


class DocumentPermission(SoftDeletableModel):
    # Note: You can now remove the is_deleted field from here as it'll be inherited from SoftDeletableModel
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    
    can_view = models.BooleanField(default=True)
    can_edit = models.BooleanField(default=False)
    can_delete = models.BooleanField(default=False)

    def __str__(self):
        return f"Permission for {self.document.title} - User: {self.user.username if self.user else 'None'}, Role: {self.role.name if self.role else 'None'}"

class Subscription(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name


class ClientSubscription(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.username} - {self.subscription.name}"


class Comment(SoftDeletableModel):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Comment on {self.document.title} by {self.user.username}"


class DocumentVersion(SoftDeletableModel):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    
    def __str__(self):
        return f"Version of {self.document.title} at {self.created_at}"


class DocumentCollaborator(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    collaborator = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    can_edit = models.BooleanField(default=False)
    added_on = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.collaborator.username} collaborating on {self.document.title}"


class KnowledgeBase(SoftDeletableModel):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag, blank=True)
    date_modified = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title


class ForumPost(SoftDeletableModel):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank=True)
    date_modified = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title


class ForumComment(models.Model):
    post = models.ForeignKey(ForumPost, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment on {self.post.title} by {self.user.username}"


class Bookmark(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    document = models.ForeignKey(Document, on_delete=models.CASCADE, null=True, blank=True)
    knowledge_base = models.ForeignKey('KnowledgeBase', on_delete=models.CASCADE, null=True, blank=True)
    forum_post = models.ForeignKey('ForumPost', on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s Bookmark"
    
class Notification(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    seen = models.BooleanField(default=False)

    def __str__(self):
        return f"Notification for {self.user.username}"

class DocumentAccessLog(SoftDeletableModel):
    document = models.ForeignKey('Document', on_delete=models.CASCADE)
    accessed_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    access_time = models.DateTimeField(auto_now_add=True)
    action = models.CharField(max_length=100)  # e.g. "viewed", "edited", etc.

    def __str__(self):
        return f"{self.accessed_by.username} {self.action} {self.document.title} on {self.access_time}"
