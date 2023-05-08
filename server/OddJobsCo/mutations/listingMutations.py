import graphene
import logging
from ..models import User, Listing, Filter, Option, ListingFilter, FilterOption
from ..types.filterType import FilterType
from ..types.listingType import ListingType
from graphql_jwt.decorators import login_required


def update_filters(listing_data, listing):
    # Create the associated filters
    logging.info(listing_data.filters)
    if listing_data.filters:
        for filter_input in listing_data.filters:
            filter_name = filter_input.name
            new_filter = Filter.objects.filter(name=filter_input.name).first()
            if not new_filter:
                new_filter = Filter(name=filter_name)
                new_filter.save()

            if filter_input.options:
                for option_input in filter_input.options:
                    option_name = option_input.name
                    new_option = Option.objects.filter(name=option_name).first()
                    if not new_option:
                        new_option = Option(name=option_name)
                        new_option.save()
                    new_filter_option = FilterOption(option=new_option, filter=new_filter)
                    new_filter_option.save()

            # Create the ListingFilter object that associates the listing with the filter
            new_listing_filter = ListingFilter(listing=listing, filter=new_filter)
            new_listing_filter.save()


def delete_listing_filters(listing_id):
    listing = Listing.objects.get(listing_id=listing_id)
    filters = ListingFilter.objects.filter(listing=listing)
    filters.delete()


class FilterOptionInput(graphene.InputObjectType):
    name = graphene.String(required=True)


class FilterInput(graphene.InputObjectType):
    name = graphene.String(required=True)
    options = graphene.List(FilterOptionInput)


class ListingInput(graphene.InputObjectType):
    listing_id = graphene.ID(required=False)
    title = graphene.String(required=True)
    description = graphene.String(required=True)
    completed = graphene.Boolean(required=False)
    filters = graphene.List(FilterInput)


class CreateListing(graphene.Mutation):
    title = graphene.String()
    description = graphene.String()
    completed = graphene.Boolean()
    filters = graphene.List(FilterType)
    listing_id = graphene.ID()

    class Arguments:
        listing_data = ListingInput(required=True)

    listing = graphene.Field(ListingType)

    @login_required
    def mutate(self, info, listing_data=None):
        user = info.context.user
        title = listing_data.title
        description = listing_data.description
        completed = False

        # Create the new listing object
        listing = Listing(user=user, title=title, description=description, completed=completed)
        listing.save()

        update_filters(listing_data, listing)

        return CreateListing(
            title=listing.title,
            description=listing.description,
            listing_id=listing.listing_id
        )


class UpdateListing(graphene.Mutation):
    listing_id = graphene.ID()
    title = graphene.String()
    description = graphene.String()
    completed = graphene.Boolean()
    filters = graphene.List(FilterType)

    class Arguments:
        listing_data = ListingInput(required=True)

    @login_required
    def mutate(self, info, listing_data=None):
        user = info.context.user
        listing = Listing.objects.get(listing_id=listing_data.listing_id)
        listing.title = listing_data.title
        listing.description = listing_data.description
        listing.completed = listing_data.completed
        listing.user = user
        listing.save()

        return UpdateListing(
            listing_id=listing.listing_id,
            title=listing.title,
            description=listing.description,
            completed=listing.completed,
        )


class DeleteListing(graphene.Mutation):
    id = graphene.ID()
    listings = graphene.List(ListingType)

    class Arguments:
        listing_id = graphene.ID()

    @login_required
    def mutate(self, info, id):
        listing = Listing.objects.get(id=id)
        delete_listing_filters(listing.listing_id)
        listing.delete()

        return DeleteListing(
            listing_id=listing.id
        )
