from django import forms


class ContactForm(forms.Form):

    content = forms.CharField(
        label='Content',
        max_length=1000,
        min_length=3,
        required=True,
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'placeholder': 'What would you like to tell ',
                'name': "Content",
                'id': "Content"

            }
        )
    )

    name = forms.CharField(
        label='name',
        max_length=100,
        min_length=3,
        required=True,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
                'placeholder': 'Your Name here',
                'name': "Name",
                'id': "Name"
            }
        )

    )

    email = forms.EmailField(
        label='Email',
        max_length=100,
        min_length=10,
        required=True,
        widget=forms.EmailInput(
            attrs={
                'class': 'form-control',
                'placeholder': 'Your Email here ',
                'name': "Email",
                'id': "Email"
            }
        )
    )

    
