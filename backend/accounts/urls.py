from django.contrib import admin
from django.urls import path,include
from .views import SellerRegisterView,CustomerRegisterView,UserLoginView


urlpatterns = [
    path('seller.register',SellerRegisterView.as_view(),name='seller_register'),
    path('customer.register',CustomerRegisterView.as_view(),name='customer_register'),
    path('login',UserLoginView.as_view(),name='login'),


]



