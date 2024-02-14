from rest_framework import serializers, fields
from accounts.models import User
from products.models import Products


class GetAllProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'