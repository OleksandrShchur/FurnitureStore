# Generated by Django 4.0.2 on 2022-11-01 17:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storeApp', '0006_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='imagePath',
            field=models.FileField(upload_to='static/images/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['png', 'jpg'])]),
        ),
    ]
