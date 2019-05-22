from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Learning
# Create your views here.


class IndexView(TemplateView):
    template_name = "index.html"
    model = Learning

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["learning"] = Learning.objects.all()
        context['hola'] = 'hola'
        return context
    
    
