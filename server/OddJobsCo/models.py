from django.db import models
from django.core.validators import RegexValidator

# Create your models here.


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    bio = models.TextField()


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