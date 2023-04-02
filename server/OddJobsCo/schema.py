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
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    listings = graphene.List(ListingType)

    # so when users is requested, the resolve function below gets the data from the db and sets it to
    # the users field above.
    @login_required
    def resolve_users(self, info):
        return User.objects.all()
    
    @login_required
    def resolve_user(self, info, id):
        try:
            return User.objects.get(id=id)
        except User.DoesNotExist:
            return None

    @login_required
    def resolve_listings(self, info):
        return Listing.objects.all()


class CreateListing(graphene.Mutation):
    id = graphene.Int()
    title = graphene.String()
    description = graphene.String()
    completed = graphene.Boolean()
    price = graphene.Float()
    listings = graphene.List(ListingType)

    class Arguments:
        title = graphene.String()
        description = graphene.String()
        price = graphene.Float()
        user_id = graphene.ID()

    @login_required
    def mutate(self, info, title, description, price, user_id):
        user = User.objects.get(id=user_id)
        listing = Listing(title=title, description=description, completed=False, price=price, user=user)
        listing.save()

        return CreateListing(
            id=listing.id,
            title=listing.title,
            description=listing.description,
            completed=listing.completed,
            price=listing.price
        )
    
class UpdateListing(graphene.Mutation):
    id = graphene.Int()
    title = graphene.String()
    description = graphene.String()
    completed = graphene.Boolean()
    price = graphene.Float()
    listings = graphene.List(ListingType)

    class Arguments:
        id = graphene.ID()
        title = graphene.String()
        description = graphene.String()
        completed = graphene.Boolean()
        price = graphene.Float()
        user_id = graphene.ID()

    @login_required
    def mutate(self, info, id, title, description, completed, price, user_id):
        user = User.objects.get(id=user_id)
        listing = Listing.objects.get(id=id)
        listing.title = title
        listing.description = description
        listing.completed = completed
        listing.price = price
        listing.user = user
        listing.save()

        return UpdateListing(
            id=listing.id,
            title=listing.title,
            description=listing.description,
            completed=listing.completed,
            price=listing.price
        )
    
class DeleteListing(graphene.Mutation):
    id = graphene.ID()
    listings = graphene.List(ListingType)

    class Arguments:
        id = graphene.ID()

    @login_required
    def mutate(self, info, id):
        listing = Listing.objects.get(id=id)
        listing.delete()

        return DeleteListing(
            id=listing.id
        )

class Mutation(graphene.ObjectType):
    create_listing = CreateListing.Field()
    update_listing = UpdateListing.Field()
    delete_listing = DeleteListing.Field()




schema = graphene.Schema(query=Query, mutation=Mutation)
