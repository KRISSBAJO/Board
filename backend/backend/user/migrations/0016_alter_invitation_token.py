# Generated by Django 4.2.6 on 2023-11-05 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0015_alter_invitation_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='token',
            field=models.CharField(default='V6ODRVxtBz1qkkEOnLhas4p5swh5U9dS19Sa4cU4TwOZpS3ob1Ii1ocdnOrXLBdO2OkjjCSadGmcqE4NXtRUveb5leOl6tBUcExG', max_length=100, unique=True),
        ),
    ]
