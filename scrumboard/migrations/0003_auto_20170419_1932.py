# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-04-19 19:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('scrumboard', '0002_auto_20170417_1705'),
    ]

    operations = [
        migrations.RenameField(
            model_name='card',
            old_name='list_id',
            new_name='list',
        ),
    ]
