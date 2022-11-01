from django.urls import path
from .views import ListCategories, ListProducts


urlpatterns = [
    path('categories/', ListCategories.as_view()),
    path('products/', ListProducts.as_view()),
]
