# Generated by Django 4.2.6 on 2023-11-06 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_permission_related_permissions'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='slug',
            field=models.SlugField(default='www.google.com', max_length=255, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='document',
            name='status',
            field=models.CharField(choices=[('draft', 'Draft'), ('review', 'Review'), ('published', 'Published'), ('archived', 'Archived')], default='draft', max_length=10),
        ),
    ]
