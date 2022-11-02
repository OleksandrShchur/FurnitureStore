from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(required=True)
    name = serializers.CharField(max_length=100, required=True)
    visible = serializers.BooleanField(required=True)
    description = serializers.CharField(required=True)

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.visible = validated_data.get('visible', instance.visible)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=True)
    name = serializers.CharField(max_length=100, required=True)
    price = serializers.FloatField(required=True)
    categoryId = serializers.PrimaryKeyRelatedField(read_only=True)
    visible = serializers.BooleanField(required=True)
    hasDiscount = serializers.BooleanField(required=True)
    discountPrice = serializers.FloatField()
    description = serializers.CharField(required=True)

    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.price = validated_data.get('price', instance.price)
        instance.categoryId = validated_data.get('categoryId', instance.categoryId)
        instance.visible = validated_data.get('visible', instance.visible)
        instance.hasDiscount = validated_data.get('hasDiscount', instance.hasDiscount)
        instance.discountPrice = validated_data.get('discountPrice', instance.discountPrice)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance

