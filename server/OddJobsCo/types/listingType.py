import graphene
from graphene_django import DjangoObjectType
from .filterType import FilterType
from ..models import Listing, Filter


class ListingType(DjangoObjectType):
    class Meta:
        model = Listing

    filters = graphene.List(FilterType, listing_id=graphene.Int(required=True))

    def resolve_filters(self, info, listing_id):
        filters = Filter.objects.filter(listingfilter__listing_id=listing_id).distinct()
        return filters
