from django.contrib import admin
from django.urls import path,include
from .views import SellerProfileView,CustomerProfileView

urlpatterns = [
    path('updateseller',SellerProfileView.as_view(),name="sellerprofile"),
    path('updatecustomer',CustomerProfileView.as_view(),name="customerprofile")
]
