# Generated by Django 4.2.6 on 2023-10-30 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_alter_invitation_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.CharField(choices=[('User', 'USER'), ('Provider', 'PROVIDER')], default=False, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='invitation',
            name='token',
            field=models.CharField(default='8hKKVinl2Xg1Y1xbGJUzhr6qzi1f9RKQqm2nQAuAn7kk5sHSBNXLCvlpiPlEeU8jBw1meWFk23G37z4Tzl51dBrJgbzgnTOUoDZD', max_length=100, unique=True),
        ),
    ]
