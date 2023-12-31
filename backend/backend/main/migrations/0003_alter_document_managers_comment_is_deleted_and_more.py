# Generated by Django 4.2.6 on 2023-11-01 14:42

from django.db import migrations, models
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_document_date_modified_forumpost_date_modified_and_more'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='document',
            managers=[
                ('active_permissions', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='documentaccesslog',
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
        migrations.AddField(
            model_name='forumpost',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='knowledgebase',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
    ]
