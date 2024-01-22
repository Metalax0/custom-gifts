from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
import uuid
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
    
    def create_seller(self, email,name, password,**extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        
        if not password :
            raise ValueError("Users must have a password")
        
        email=self.normalize_email(email)
        email=email.lower()
        
        user=self.create_user(email,name,password,**extra_fields)
        user.is_seller=True
        user.save(using=self._db)
        return user
    
    def create_customer(self, email,name, password,**extra_fields):
        if not email :
            raise ValueError("Users must have an email address")
        
        if not password :
            raise ValueError("Users must have a password")
        
        email=self.normalize_email(email)
        email=email.lower()
        
        user=self.create_user(email,name,password,**extra_fields)
        user.is_customer=True
        user.save(using=self._db)
        return user

    def create_superuser(self, email,name,password):
        if password is None:
            raise TypeError('Superusers must have a password.')
        
        user=self.create_user(email,name, password)

        user.is_superuser = True
        user.is_staff=True

        user.save(using=self._db)
        return user

# USER 
class User(AbstractBaseUser,PermissionsMixin):
    id = models.UUIDField( 
        primary_key = True, 
        default = uuid.uuid4, 
        editable = False)
    email = models.EmailField(max_length=255,unique=True)
    name=models.CharField(max_length=255)
    avatar = models.ImageField(upload_to='static/', blank=True, null=True)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=255, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    is_seller = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name","password"]

    objects = UserManager()

    def __str__(self):
        return self.email
