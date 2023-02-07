from rest_framework import viewsets
from product.api import serializers
from product import models
from rest_framework import generics


class ProductViewSets(viewsets.ModelViewSet):
    serializer_class = serializers.ProductSrializer
    queryset = models.Product.objects.all()
