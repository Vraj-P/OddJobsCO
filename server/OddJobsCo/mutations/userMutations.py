import graphene
from django.contrib.auth import authenticate, login
from graphql_jwt.shortcuts import get_token
from ..models import User


class LoginUser(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    token = graphene.String()

    @staticmethod
    def mutate(self, info, email, password):
        user = authenticate(info.context, email=email, password=password)

        if user is not None:
            login(info.context, user)
            token = get_token(user)
            return LoginUser(token=token)
        else:
            raise Exception('Invalid credentials')


class RegisterUser(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        phone_number = graphene.String(required=True)

    token = graphene.String()

    @staticmethod
    def mutate(self, info, name, password, email, phone_number):
        if User.objects.filter(email=email).exists():
            raise Exception('Email is taken')

        user = User.objects.create_user(name=name, password=password, email=email, phone_number=phone_number)
        token = get_token(user)
        return RegisterUser(token=token)
