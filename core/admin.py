from django.contrib import admin
from .models import Learning, Organization, Certification

# Register your models here.


@admin.register(Learning)
class LearningAdmin(admin.ModelAdmin):
    pass


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    pass


@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    pass