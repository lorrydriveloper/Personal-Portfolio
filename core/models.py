from django.db import models
from django.utils.translation import gettext as _

# Create your models here.


class Learning(models.Model):

    name = models.CharField(_("name"), max_length=50)
    icon = models.ImageField(_("Icon"), upload_to="img/icons")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("learning")
        verbose_name_plural = _("learnings")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("learning_detail", kwargs={"pk": self.pk})
