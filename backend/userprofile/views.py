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
    def get(self,request):
        return Response({'msg':"customer profile"})

class CustomerProfileView(APIView):
    def get(self,request):
        return Response({'msg':"customer profile"})