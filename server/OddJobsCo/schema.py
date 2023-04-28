import graphene
from .models import User, Listing
from .mutations.userMutations import RegisterUser, LoginUser
from .types.listingType import ListingType
from .types.userType import UserType
from .mutations.listingMutations import CreateListing, UpdateListing, DeleteListing
from graphql_jwt.decorators import login_required


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    listings = graphene.List(ListingType)
    listing = graphene.Field(ListingType, id=graphene.Int(required=True))
    user_listings = graphene.List(
        ListingType, user_id=graphene.Int(required=True))

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

    @login_required
    def resolve_listing(self, info, id):
        try:
            return Listing.objects.get(id=id)
        except Listing.DoesNotExist:
            return None

    @login_required
    def resolve_user_listings(self, info, user_id):
        try:
            return Listing.objects.filter(user_id=user_id)
        except Listing.DoesNotExist:
            return None

    @staticmethod
    def resolve_logged_in_user(self, info):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in')
        return user


class Mutation(graphene.ObjectType):
    create_listing = CreateListing.Field()
    update_listing = UpdateListing.Field()
    delete_listing = DeleteListing.Field()
    register_user = RegisterUser.Field()
    login_user = LoginUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
