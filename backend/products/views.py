from django.shortcuts import render
from rest_framework import status,serializers
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
class ProductView(APIView):
    def get(self,request):
        return Response({'msg':'product page'},status=status.HTTP_200_OK)
