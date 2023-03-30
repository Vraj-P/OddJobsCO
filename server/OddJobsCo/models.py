from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    use_in_migrations = True
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=120)
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True, max_length=120)
    password = models.CharField(max_length=128)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    bio = models.TextField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'password']

    @property
    def is_anonymous(self):
        return False

    @property
    def is_authenticated(self):
        return True

    objects = UserManager()

    def __str__(self):
        return self.email


class Listing(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)


class Filters(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=120)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)

    def _str_(self):
        return self.title
