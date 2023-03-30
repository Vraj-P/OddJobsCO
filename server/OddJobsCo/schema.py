import graphene
from graphene_django import DjangoObjectType
from .models import User, Listing
from graphql_jwt.decorators import login_required


class UserType(DjangoObjectType):
    class Meta:
        model = User


class ListingType(DjangoObjectType):
    class Meta:
        model = Listing


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    listings = graphene.List(ListingType)

    # so when users is requested, the resolve function below gets the data from the db and sets it to
    # the users field above.
    @login_required
    def resolve_users(self, info):
        return User.objects.all()

    @login_required
    def resolve_listings(self, info):
        return Listing.objects.all()


schema = graphene.Schema(query=Query)
