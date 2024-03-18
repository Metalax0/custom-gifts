from django.contrib import admin
from django.urls import path,include
from products.views import ProductView,SellerProductSelectView

urlpatterns = [
    path('ppp',ProductView.as_view(),name='product'),
    path('sp/get/<uuid:user_id>/',SellerProductSelectView.as_view(),name='get-seller-products'),
    path('sp/delete/<int:product_id>/',SellerProductSelectView.as_view(),name='delete-seller-products'),
    path('sp/', SellerProductSelectView.as_view(), name='add-seller-products'),
]