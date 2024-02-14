from django.contrib import admin
from django.urls import path,include
from products.views import GetAllProductView

urlpatterns = [
    path('ppp',GetAllProductView.as_view(),name='product'),

]