# Generated by Django 4.0.2 on 2022-11-01 08:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storeApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='countOfOrders',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='createdDate',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]