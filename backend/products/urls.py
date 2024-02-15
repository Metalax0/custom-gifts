from django.contrib import admin
from django.urls import path,include
from products.views import ProductView,SellerProductSelectView

urlpatterns = [
    path('ppp',ProductView.as_view(),name='product'),
    path('sp',SellerProductSelectView.as_view(),name='sellerproduct'),

]