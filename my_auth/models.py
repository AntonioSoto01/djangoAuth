from django.db import models


class Pelicula(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=200)
    estrellas = models.IntegerField(default=0)

    def __str__(self):
        return self.nombre
class Actor(models.Model):
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE, related_name='actores')
    nombre = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre