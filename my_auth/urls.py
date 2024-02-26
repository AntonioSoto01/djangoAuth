from rest_framework import routers
from django.urls import path, include
from my_auth.views import ActorViewSet, PeliculaViewSet

router = routers.DefaultRouter()

router.register(r'peliculas', PeliculaViewSet)
router.register(r'actores', ActorViewSet)

from . import views

urlpatterns = [
    path('', include(router.urls)),
]