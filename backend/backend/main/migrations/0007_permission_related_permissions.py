# Generated by Django 4.2.6 on 2023-11-05 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_permission_role_created_at_role_is_active_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='permission',
            name='related_permissions',
            field=models.ManyToManyField(blank=True, to='main.permission'),
        ),
    ]
