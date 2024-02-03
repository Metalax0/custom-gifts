from django.shortcuts import render
from rest_framework import status,serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated

# Create your views here.
class ProductView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self,request):
        return Response({'msg':'product page'},status=status.HTTP_200_OK)
