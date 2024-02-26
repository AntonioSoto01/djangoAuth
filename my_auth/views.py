from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from my_auth.models import Actor, Pelicula
from my_auth.serializers import ActorSerializer, PeliculaDetailSerializer, PeliculaListSerializer


class ActorViewSet(viewsets.ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticated]
class PeliculaViewSet(viewsets.ModelViewSet):
    queryset = Pelicula.objects.all()
    serializer_class = PeliculaListSerializer

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PeliculaDetailSerializer
        else:
            return PeliculaListSerializer

