import graphene
from ..models import User, Listing
from ..types.listingType import ListingType
from graphql_jwt.decorators import login_required


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
        listing = Listing(title=title, description=description,
                          completed=False, price=price, user=user)
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
