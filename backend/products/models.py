from django.db import models
import uuid
from accounts.models import User
# Create your models here.
class Products(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=255)
    class Meta:
        db_table = "Products"

class Customization(models.Model):
    customization_id = models.AutoField(primary_key=True)
    customization_name = models.CharField(max_length=255)

    class Meta:
        db_table = "Customization"

class SellerProduct(models.Model):
    seller_product_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)

    class Meta:
        db_table = "SellerProduct"

class SellerProductCustomization(models.Model):
    seller_product = models.ForeignKey(SellerProduct, on_delete=models.CASCADE)
    customization = models.ForeignKey(Customization, on_delete=models.CASCADE)
    allowed_customization = models.BooleanField(default=True)

    class Meta:
        db_table = "SellerProductCustomization"