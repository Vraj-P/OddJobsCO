from django.db import models

# Create your models here.

class User(models.Model):
    u_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120)
    bio = models.TextField()

class Listing(models.Model):
    l_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def _str_(self):
        return self.title