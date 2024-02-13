
from django.contrib import admin
from products.models import Customization, Products,SellerProduct,SellerProductCustomization
from accounts.models import User
# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ['product_name']

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)
    
class CustomizationAdmin(admin.ModelAdmin):
    list_display = ['customization_name']

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)
    
admin.site.register(Products,ProductAdmin)
admin.site.register(Customization,CustomizationAdmin)
