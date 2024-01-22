from rest_framework import serializers

from accounts.models import User


# Seller registration
class SellerUserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=('name','email','password','confirm_password')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if  password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        return data

    def create(self,validated_data):
        validated_data.pop('confirm_password', None)
        user = User.objects.create_seller(**validated_data)
        return user
        
#customer registration
class CustomerUserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=('name','email','password','confirm_password')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if  password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        return data

    def create(self,validated_data):
        validated_data.pop('confirm_password', None)
        user = User.objects.create_customer(**validated_data)
        return user

#login 
class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=255)
    class Meta:
        model=User
        fields=['email','password']

#ME 
class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = '__all__'