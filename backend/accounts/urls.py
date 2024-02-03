from django.contrib import admin
from django.urls import path,include
from .views import SellerRegisterView,CustomerRegisterView,UserLoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path('seller.register',SellerRegisterView.as_view(),name='seller_register'),
    path('customer.register',CustomerRegisterView.as_view(),name='customer_register'),
    path('login',UserLoginView.as_view(),name='login'),

    path('refreshtoken/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/verifytoken/', TokenVerifyView.as_view(),name='token_verify')  ,
]



