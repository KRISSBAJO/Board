from rest_framework import permissions

class SoftDeletePermissionMixin(permissions.BasePermission):
    """
    Permission mixin to allow only certain roles and group members to see soft-deleted records.
    """

    def has_permission(self, request, view):
        # If the user is an admin, manager, or belongs to the CAN_DELETE group, grant full access.
        if request.user.role in ['Admin', 'Manager'] or request.user.groups.filter(name='CAN_DELETE').exists():
            return True

        # For other users, we filter out the soft-deleted records in the queryset.
        # Note: Actual filtering logic should be in the queryset of the view, this just provides permission.
        return not getattr(view, 'soft_delete_check', False)

    def has_object_permission(self, request, view, obj):
        # For individual object checks, return True for non-deleted records for all users.
        if not obj.is_deleted:
            return True
        
        # If the object is soft-deleted, only allow if the user has the right roles or group.
        return request.user.role in ['Admin', 'Manager'] or request.user.groups.filter(name='CAN_DELETE').exists()
