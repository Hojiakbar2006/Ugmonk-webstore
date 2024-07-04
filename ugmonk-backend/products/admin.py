from django.contrib import admin
from .models import Product, Category, View, Order


admin.site.register(Product)
admin.site.register(Category)
admin.site.register(View)
admin.site.register(Order)