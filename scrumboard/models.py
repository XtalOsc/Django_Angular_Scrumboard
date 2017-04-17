from django.db import models

#list of scrum cards
class List(models.Model):
    name =  models.CharField(max_length=50)

#scrum card
class Card(models.Model):
    title =  models.CharField(max_length=100)
    description = models.TextField(blank=True)
    list_id = models.ForeignKey(List, related_name="cards")
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)
    
