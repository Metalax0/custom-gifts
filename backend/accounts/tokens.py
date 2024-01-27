from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
User=get_user_model()

def get_tokens_for_user(user:User):
    refresh = RefreshToken.for_user(user)

    tokens={
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
    return tokens