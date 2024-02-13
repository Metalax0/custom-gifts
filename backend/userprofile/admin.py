from django.contrib import admin
from .models import SellerProfile
# Register your models here.

# admin.site.register(SellerProfile)

class SellerProfileAdmin(admin.ModelAdmin):
    list_display = ['phone_no', 'dob', 'bio', 'address', 'gender']
    readonly_fields = ['user']

    def save_model(self, request, obj, form, change):
        # Assign the currently logged-in user to the user field
        if not obj.user_id:
            obj.user = request.user
        super().save_model(request, obj, form, change)

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser and hasattr(request.user, 'is_seller'):
            # If the user is a seller, show only their profile
            qs = qs.filter(user=request.user)
        else:
            # If the user is not a seller or is a superuser, show all profiles
            qs = super().get_queryset(request)
        return qs
    
    def has_add_permission(self, request):
        return True
    
    def has_change_permission(self, request,obj=None):
        return True
    
    def has_module_permission(self, request):
        return True


admin.site.register(SellerProfile, SellerProfileAdmin)