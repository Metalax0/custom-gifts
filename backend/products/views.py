import re
from tempfile import TemporaryFile
from django.shortcuts import render
from rest_framework import status,serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from products.permissions import IsSeller
from products.serializers import GetAllProductsSerializer,ProductBySellerSerializer
from products.models import Products
from accounts.models import User
# Create your views here.
class ProductView(GenericAPIView):
    permission_classes = (IsSeller,)
    serializer_class=GetAllProductsSerializer
    def get(self,request):
        product=Products.objects.all()
        try:
            serializer=self.serializer_class(product,many=True)

            return Response({"data":serializer.data},status=status.HTTP_200_OK)
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)

class SellerProductSelectView(GenericAPIView):
    permission_classes=(IsSeller,)
    serializer_class=ProductBySellerSerializer
    def post(self,request):
        print(request.user.id)
        try:
            req_user=User.objects.filter(id=request.user.id)
            if not req_user:
                raise serializers.ValidationError('User Id doesnot exist', status=status.HTTP_404_NOT_FOUND)
            
            data = request.data.copy()
            data['user_id'] = request.user.id
            
            serializer = ProductBySellerSerializer(data=data, context={'request': request})
            print(serializer)
            if serializer.is_valid():
                # print(serializer.data)
                serializer.save()
                return Response({"msg": "Products added successfully."}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)