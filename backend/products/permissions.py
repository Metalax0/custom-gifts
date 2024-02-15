from rest_framework import permissions

class IsSeller(permissions.BasePermission):
    message = 'User is not seller'
    def has_permission(self, request, view):
        
        # Check if the user is authenticated and is a seller
        return request.user and request.user.is_authenticated and request.user.is_seller
