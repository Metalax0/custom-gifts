from django.contrib import admin
from django.urls import path,include
from products.views import ProductView,GetSellerProductView,AddSellerProductView,DeleteSelectProductView

urlpatterns = [
    # GET all products
    path('getallproducts',ProductView.as_view(),name='get_all_products'),

    # GET seller products by user_id of the specific seller
    path('sellerproducts/<uuid:user_id>/',GetSellerProductView.as_view(),name='get-seller-products'),

    # DELETE to delete a seller product by product_id
    path('sellerproducts/<int:product_id>/',DeleteSelectProductView.as_view(),name='delete-seller-products'),

    # POST to add a seller product
    path('sellerproducts/', AddSellerProductView.as_view(), name='add-seller-products'),
]