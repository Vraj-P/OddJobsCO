from graphene_django import DjangoObjectType
from ..models import Listing


class ListingType(DjangoObjectType):
    class Meta:
        model = Listing
