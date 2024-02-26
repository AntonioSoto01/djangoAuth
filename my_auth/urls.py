from rest_framework import routers
from django.urls import path, include
from my_auth.views import ActorViewSet, PeliculaViewSet, register_user

router = routers.DefaultRouter()

router.register(r'peliculas', PeliculaViewSet)
router.register(r'actores', ActorViewSet)

from . import views

urlpatterns = [
    path('', include(router.urls)),
path('register/', register_user, name='register'),
]