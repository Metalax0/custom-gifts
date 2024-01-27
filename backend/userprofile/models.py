from django.db import models
import uuid
from accounts.models import User

# Create your models here.
class SellerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    phone_no = models.CharField(max_length=15)
    dob = models.DateField(null=True, blank=True)
    bio = models.TextField()
    avatar = models.ImageField(upload_to='seller_avatars/', null=True, blank=True)
    address = models.TextField()
    GENDER_CHOICES = (
		('M', 'Male'),
		('F', 'Female'),
	)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    class Meta:
        db_table = "seller_profile"


class CustomerProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    phone_no = models.CharField(max_length=15)
    gender = models.CharField(max_length=10)
    dob = models.DateField(null=True,blank=True)
    bio = models.TextField()
    avatar = models.ImageField(upload_to='customer_avatars/', null=True, blank=True)
    address = models.TextField()
    shipping_address = models.TextField()
    GENDER_CHOICES = (
		('M', 'Male'),
		('F', 'Female'),
	)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    class Meta:
        db_table = "customer_profile"

