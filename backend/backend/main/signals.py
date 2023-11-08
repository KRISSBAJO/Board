from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from .models import Comment, Document, Notification, DocumentVersion

# Notification when a Comment is added on a Document
@receiver(post_save, sender=Comment)
def send_notification(sender, instance, created, **kwargs):
    if created:  # Ensures this is a new comment
        Notification.objects.create(
            user=instance.document.created_by,
            content=f"A new comment was added on your document '{instance.document.title}' by {instance.user.username}",
            seen=False
        )

# Versioning for Document
@receiver(pre_save, sender=Document)
def save_version(sender, instance, **kwargs):
    try:
        # Fetch the old version from the database
        old_version = Document.objects.get(id=instance.id)
        # Compare if the content has changed
        if old_version.content != instance.content:
            DocumentVersion.objects.create(
                document=old_version,
                content=old_version.content,
                created_by=old_version.created_by
            )
    except Document.DoesNotExist:
        # This is for when a new Document is being created for the first time
        pass
