from django.contrib.auth.models import AbstractUser
from django.core.validators import FileExtensionValidator
from django.db import models


class CustomUser(AbstractUser):
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    createdDate = models.DateTimeField(auto_now_add=True)
    countOfOrders = models.IntegerField(default=0)


class Category(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    name = models.CharField(max_length=300, null=False)
    visible = models.BooleanField(null=False)
    description = models.TextField(null=False)

    def __str__(self):
        return str(self.name)


class Product(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    name = models.CharField(max_length=100, null=False)
    price = models.FloatField(null=False)
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)
    visible = models.BooleanField(null=False)
    hasDiscount = models.BooleanField(null=False)
    discountPrice = models.FloatField(null=True, blank=True)
    description = models.TextField(null=False)

    def __str__(self):
        return str(self.name)


class Order(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    createdDate = models.DateTimeField(null=False)
    userId = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    totalPrice = models.FloatField(null=False)
    approved = models.BooleanField(null=False)
    notes = models.TextField()


class Card(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    orderId = models.ForeignKey(Order, on_delete=models.CASCADE)
    productId = models.ForeignKey(Product, on_delete=models.CASCADE)


class Feedback(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    feedback = models.TextField()
    userId = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    dateCreated = models.DateTimeField(null=False)
    rate = models.IntegerField()


class Image(models.Model):
    id = models.AutoField(primary_key=True, null=False)
    imagePath = models.FileField(upload_to='static/images/',
                                 validators=[FileExtensionValidator(allowed_extensions=["png", "jpg"])])
    caption = models.CharField(max_length=500)
    productId = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.caption)
