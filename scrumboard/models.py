from django.db import models

#scrum card
class Card(models.Model):
    title =  models.CharField(max_length=100)
    description = models.TextField(blank=True)

#list of scrum cards
class List(models.Model):
    name =  models.CharField(max_length=50)
