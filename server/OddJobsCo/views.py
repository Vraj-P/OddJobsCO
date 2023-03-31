from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from graphql_jwt.shortcuts import get_token
from .models import User, Listing


def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            token = get_token(user)
            return JsonResponse({'token': token}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)


def register_view(request):
    if request.method == 'POST':
        name = request.POST['name']
        password = request.POST['password']
        email = request.POST['email']
        phone_number = request.POST['phone_number']

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email is taken'}, status=400)

        user = User.objects.create_user(name=name, password=password, email=email, phone_number=phone_number)
        token = get_token(user)
        return JsonResponse({'token': token}, status=200)

def create_view(request):
    if request.method == 'POST':
        title = request.POST['title']
        description = request.POST['description']
        completed = False
        price = request.POST['price']
        user_id = request.POST['user_id']

        listing = Listing.objects.create_listing(title=title, description=description, completed=completed, price=price, user_id=user_id)

        return JsonResponse({'listing': listing.id}, status=200)