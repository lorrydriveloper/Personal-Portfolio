from django.shortcuts import render
from django.views.generic import FormView
from .models import Learning, Certification, Project
from .forms import ContactForm
from django.urls import reverse_lazy
from django.core.mail import EmailMessage, send_mail
# Create your views here.


class IndexView(FormView):
    template_name = "index.html"
    form_class = ContactForm

    model = Learning

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["learning"] = Learning.objects.all()
        context['certifications'] = Certification.objects.all()
        context['projects'] = Project.objects.all()
        return context

    def form_valid(self, form):
            # This method is called when valid form data has been POSTed.
            # It should return an HttpResponse.

            message = '{name} / {email} said:\n{content}'.format(
                name=form.cleaned_data.get('name'),
                email=form.cleaned_data.get('email'),
                content=form.cleaned_data.get('content')
                )

            email = EmailMessage(
                form.cleaned_data.get('name'),
                message,
                'lorryDriveloper@gmail.com',
                ['lorryDriveloper@gmail.com'],  # list of email receptors
                headers={'Reply-To': form.cleaned_data.get('email')}
            )
            email.send()
            return super(IndexView, self).form_valid(form)

    def get_success_url(self):
        return reverse_lazy('index')+'#Contact'
