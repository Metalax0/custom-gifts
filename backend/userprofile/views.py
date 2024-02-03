from django.shortcuts import render
from rest_framework import status,serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny
from userprofile.serializers import CustomerProfileSerializer,SellerProfileSerializer
from userprofile.models import SellerProfile,CustomerProfile

# Create your views here.
class SellerProfileView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user_profile = SellerProfile.objects.get(user=request.user)
        serializer = SellerProfileSerializer(user_profile)
        return Response(serializer.data)

    def post(self, request):
        user_id=request.user.id

        user = User.objects.get(id=user_id)
        accountuser_id=user.id

        if accountuser_id!=user_id:
            return Response({"error": "User does not exist."},status=status.HTTP_400_BAD_REQUEST)
        try:
            serializer = SellerProfileSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'Something went wrong', 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        user_profile = SellerProfile.objects.get(user=request.user)
        serializer = SellerProfileSerializer(user_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#CUSTOMER PROFILE
class CustomerProfileView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        user_profile = CustomerProfile.objects.get(user=request.user)
        serializer = CustomerProfileSerializer(user_profile)
        return Response(serializer.data)

    def post(self, request):
        user_id=request.user.id

        user = User.objects.get(id=user_id)
        if not user:
            return Response({"error":"user doesnot exist"})
        accountuser_id=user.id

        if accountuser_id!=user_id:
            return Response({"error": "User does not exist."},status=status.HTTP_400_BAD_REQUEST)
        try:
            serializer = CustomerProfileSerializer(data=request.data)
            
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'Something went wrong', 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


    def put(self, request):
        user_profile = CustomerProfile.objects.get(user=request.user)
        serializer = CustomerProfileSerializer(user_profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)