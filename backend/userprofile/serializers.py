from rest_framework import serializers, fields
from accounts.models import User
from userprofile.models import CustomerProfile,SellerProfile
from datetime import date


class SellerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerProfile
        fields = '__all__'

class CustomerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerProfile
        fields = '__all__'