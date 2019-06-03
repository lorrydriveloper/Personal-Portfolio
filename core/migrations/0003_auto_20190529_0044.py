# Generated by Django 2.2 on 2019-05-28 23:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_certification_organization'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='certification',
            name='organization',
        ),
        migrations.AddField(
            model_name='certification',
            name='organization',
            field=models.ManyToManyField(to='core.Organization', verbose_name='Organizations'),
        ),
    ]
