# Generated by Django 5.0.1 on 2024-01-26 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0002_alter_sellerprofile_table'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sellerprofile',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
    ]
