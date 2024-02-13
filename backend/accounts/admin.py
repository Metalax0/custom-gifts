from django.contrib import admin
from accounts.models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class SellerAdmin(UserAdmin):
    list_display = ('email', 'name', 'is_active', 'is_staff','is_seller','is_customer')
    list_filter = ('is_seller','is_staff')
    fieldsets = (
        ('User Data', {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('name',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'groups')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2', 'is_staff')}
        ),
    )
    search_fields = ('email', 'name')
    ordering = ('email',)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.filter(is_seller=True)
    
    # def has_add_permission(self, request):
    #     return True
    
    def has_change_permission(self, request, obj=None):
        return True

    def has_module_permission(self, request):
        return True


admin.site.register(User, SellerAdmin)

