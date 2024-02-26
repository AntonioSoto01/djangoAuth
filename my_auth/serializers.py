from rest_framework import serializers

from my_auth.models import Pelicula, Actor


class ActorSerializer(serializers.HyperlinkedModelSerializer):

   class Meta:
        model = Actor
        fields = '__all__'
class PeliculaDetailSerializer(serializers.HyperlinkedModelSerializer):
    actores=ActorSerializer(many=True)

    class Meta:
        model = Pelicula
        fields = '__all__'


class PeliculaListSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Pelicula
        fields = '__all__'


class PeliculaListRelatedSerializer(serializers.ModelSerializer):
    actores = ActorSerializer(many=True, read_only=True)

    class Meta:
        model = Pelicula
        fields = ['nombre','descripcion', 'estrellas', 'actores']