from django.contrib import admin
from .models import Learning

# Register your models here.


@admin.register(Learning)
class LearningAdmin(admin.ModelAdmin):
    pass
