import re
from rest_framework import status,serializers
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from products.permissions import IsSeller
from products.serializers import GetAllProductsSerializer,ProductBySellerSerializer,SellerProductSerializer
from products.models import Products,SellerProduct
from accounts.models import User
# Create your views here.

#get all products list
class ProductView(GenericAPIView):
    permission_classes = (IsSeller,)
    serializer_class=GetAllProductsSerializer
    def get(self,request):
        product=Products.objects.all()
        try:
            serializer=self.serializer_class(product,many=True)

            return Response(serializer.data,status=status.HTTP_200_OK)
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)

#seller's products CRUD
class SellerProductSelectView(GenericAPIView):
    permission_classes=(IsSeller,)
    serializer_class=ProductBySellerSerializer
    def get(self,request,user_id):
        try:
            seller_products=SellerProduct.objects.filter(user_id=user_id)
            print(seller_products)
            if seller_products.exists():
                serializer = SellerProductSerializer(seller_products, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'msg': 'seller product not found'}, status=status.HTTP_404_NOT_FOUND)
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)

    def post(self,request):
        # print(request.user.id)
        try:
            req_user=User.objects.filter(id=request.user.id)
            if not req_user:
                raise serializers.ValidationError('User Id doesnot exist', status=status.HTTP_404_NOT_FOUND)
            
            # try:
            #     if SellerProduct.objects.filter(user=request.user.id).exists():
            #         return Response({"msg": "Products already selected for this user"}, status=status.HTTP_401_UNAUTHORIZED)
            # except SellerProduct.DoesNotExist:
            #     pass
            
            serializer = ProductBySellerSerializer(data=request.data,many=True )
            if serializer.is_valid():
                # print(serializer.data)
                serializer.save()
                return Response({"msg": "Products added successfully."}, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,product_id):
        try:
            product=SellerProduct.objects.get(product_id=product_id)
            # print('Product data:', product.__dict__) 
            
            if product.user_id != request.user.id:
                return Response({"msg":"You are not authorized to delete this product."},status=status.HTTP_401_UNAUTHORIZED)

            product.delete()
            return Response({"msg": "Product deleted successfully."}, status=status.HTTP_200_OK)
        except SellerProduct.DoesNotExist:
            return Response({'msg': 'Product does not exist'}, status=status.HTTP_404_NOT_FOUND)
        except:
            return Response({'msg': 'sth went wrong'}, status=status.HTTP_403_FORBIDDEN)