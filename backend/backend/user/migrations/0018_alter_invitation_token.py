# Generated by Django 4.2.6 on 2023-11-06 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0017_customuser_profile_picture_alter_invitation_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='invitation',
            name='token',
            field=models.CharField(default='eyYa6UH73ZOKVfShxHjpe4AT40LAjhAjVLDn0acwfoR2VVLu5YASvOvtgVH7tsBGKPo5atFAY7SpKELUC6ZwPQQlaLMran3qi96m', max_length=100, unique=True),
        ),
    ]
