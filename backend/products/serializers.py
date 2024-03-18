from rest_framework import serializers, fields
from accounts.models import User
from products.models import Products,SellerProduct


class GetAllProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class ProductBySellerSerializer(serializers.Serializer):
    user_id = serializers.UUIDField()
    product_id = serializers.IntegerField()

    def create(self, validated_data):
        user_id = validated_data.pop('user_id')
        product_id = validated_data.pop('product_id')
        return SellerProduct.objects.create(user_id=user_id, product_id=product_id)

class SellerProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=SellerProduct
        fields='__all__'