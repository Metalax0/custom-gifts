from accounts.models import User
from rest_framework.response import Response
from .serializers import SellerUserSerializer,CustomerUserSerializer,UserLoginSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework import status,serializers
from django.contrib.auth import authenticate
from accounts.tokens import get_tokens_for_user

# Create your views here.

# REGISTER USER
class SellerRegisterView(APIView):
    permission_classes = (AllowAny,)
    serializer_class=SellerUserSerializer
    def post (self, request, *args, **kwargs):
        try:
            serializer=self.serializer_class(data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

                return Response({
                    'msg':"seller registration success",
                    'data':serializer.data
                    },status=status.HTTP_201_CREATED)

        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'Something went wrong', 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class CustomerRegisterView(APIView):
    permission_classes = (AllowAny,)
    serializer_class=CustomerUserSerializer
    def post (self, request, *args, **kwargs):
        try:
            serializer=self.serializer_class(data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()

                return Response({
                    'msg':"seller registration success",
                    'data':serializer.data
                    },status=status.HTTP_201_CREATED)

        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'Something went wrong', 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    permission_classes = (AllowAny,)
    serializer_class=UserLoginSerializer
    def post (self,request):
        try:
            serializer=UserLoginSerializer(data=request.data)

            if serializer.is_valid(raise_exception=True):
                email=serializer.validated_data.get('email')
                password=serializer.validated_data.get('password')

                user=authenticate(email=email,password=password)
                if user is not None:
                    tokens=get_tokens_for_user(user)

                    return Response({
                        'msg':"login success",
                        'tokens': tokens,
                        "userInfo":{
                            'id':user.id,
                            'name':user.name,
                        }
                        },status=status.HTTP_200_OK)
                else:
                    return Response({'msg': 'User Not Found'}, status=status.HTTP_401_UNAUTHORIZED)
                
        except serializers.ValidationError as e:
            print(e.detail)
            return Response({'msg': 'Validation error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'Something went wrong', 'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


