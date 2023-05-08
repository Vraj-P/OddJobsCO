import graphene
from .models import User, Listing, Filter
from .mutations.userMutations import RegisterUser, LoginUser
from .types.filterType import FilterType
from .types.listingType import ListingType
from .types.userType import UserType
from .mutations.listingMutations import CreateListing, UpdateListing, DeleteListing
from graphql_jwt.decorators import login_required


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    user = graphene.Field(UserType, id=graphene.Int(required=True))
    listings = graphene.List(ListingType)
    listing = graphene.Field(ListingType, listing_id=graphene.Int(required=True))
    filters = graphene.List(FilterType, listing_id=graphene.Int())
    listings_by_title = graphene.List(ListingType, title=graphene.String())
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
            return User.objects.get(user_id=id)
        except User.DoesNotExist:
            return None

    @login_required
    def resolve_listings(self, info):
        return Listing.objects.all()

    @login_required
    def resolve_listing(self, info, listing_id):
        try:
            return Listing.objects.get(listing_id=listing_id)
        except Listing.DoesNotExist:
            return None

    @login_required
    def resolve_filters(self, info, listing_id=None):
        filters = Filter.objects.filter(listingfilter__listing_id=listing_id).distinct()
        if not filters:
            return []
        return filters

    @login_required
    def resolve_listings_by_title(self, info, title):
        try:
            return Listing.objects.filter(title=title)
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
