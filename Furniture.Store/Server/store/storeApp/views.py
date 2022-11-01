from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from .serializers import CategorySerializer, ProductSerializer
from .models import Category, Product
from .paginations import CustomPagination


class ListCategories(APIView):

    permission_classes = [permissions.BasePermission]

    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response({"results": serializer.data}, status=200)


class ListProducts(APIView, CustomPagination):

    #authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.BasePermission]
    serializer_class = ProductSerializer
    pagination_class = CustomPagination

    def get(self, request, format=None):
        if request.GET.get('categoryId') is not None:
            category_id = request.GET.get('categoryId')
            try:
                category_id = int(category_id)
            except ValueError:
                return Response({"error": "categoryId invalid"}, status=400)
            products = Product.objects.filter(categoryId=category_id).order_by('id')
        else:
            products = Product.objects.all().order_by('id')
        results = self.paginate_queryset(products, request, view=self)
        serializer = ProductSerializer(results, many=True)
        return self.get_paginated_response(serializer.data)

