
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email,name, password=None,**extra_fields):

        if not email:
            raise ValueError("Users must have an email address")

        email=self.normalize_email(email)
        email=email.lower()
        user = self.model(
            email=email,
            name=name,
            **extra_fields
            
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_seller(self, email,name, password=None,**extra_fields):
        user=self.create_user(email,name,password,**extra_fields)

        user.is_seller=True
        user.save(using=self._db)
        return user

    def create_superuser(self, email,name,password=None):
        user=self.create_user(email,name, password)

        user.is_superuser = True
        user.is_staff=True

        user.save(using=self._db)
        return user

# USER 
class User(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(max_length=255,unique=True)
    name=models.CharField(max_length=255)
    avatar = models.ImageField(upload_to='static/', blank=True, null=True)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=255, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_seller = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    objects = UserManager()

    def __str__(self):
        return self.email
