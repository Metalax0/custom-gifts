from django.shortcuts import render
from rest_framework import status,serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from products.permissions import IsSeller
from products.serializers import GetAllProductsSerializer
from products.models import Products
# Create your views here.
class GetAllProductView(GenericAPIView):
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
    pass