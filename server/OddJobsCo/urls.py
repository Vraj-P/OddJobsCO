from django.urls import path
from graphene_django.views import GraphQLView
from .schema import schema
from .views import login_view, register_view

urlpatterns = [
    path('graphql/', GraphQLView.as_view(graphiql=True, schema=schema)),
    path('login/', login_view, name='login'),
    path('register/', register_view, name='register'),
]