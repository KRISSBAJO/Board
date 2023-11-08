# Generated by Django 4.2.6 on 2023-11-01 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_remove_comment_is_deleted_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='documentpermission',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='documentversion',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]