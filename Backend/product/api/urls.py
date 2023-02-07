from django.urls import path, include
from product.api import viewsets 
from rest_framework import routers


router = routers.DefaultRouter()
router.register('product', viewsets.ProductViewSets, basename='product')


urlpatterns = [
    path('', include(router.urls))
]
