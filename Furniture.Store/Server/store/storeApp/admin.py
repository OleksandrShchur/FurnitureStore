from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser, Category, Card, Product, Feedback, Order, Image


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username', ]


admin.site.register(CustomUser, CustomUserAdmin)

admin.site.site_header = "Furniture admin panel"

# Register your models here.

admin.site.register(Category)
admin.site.register(Card)
admin.site.register(Product)
admin.site.register(Feedback)
admin.site.register(Order)
admin.site.register(Image)

