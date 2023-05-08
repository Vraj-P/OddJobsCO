# Generated by Django 4.1.7 on 2023-05-05 23:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('OddJobsCo', '0008_remove_option_filter_filteroption'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='filteroption',
            name='listing',
        ),
        migrations.AddField(
            model_name='filteroption',
            name='filter',
            field=models.ForeignKey(default=1000000000, on_delete=django.db.models.deletion.CASCADE, to='OddJobsCo.filter'),
            preserve_default=False,
        ),
    ]
