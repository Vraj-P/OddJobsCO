import graphene
from graphene_django import DjangoObjectType
from .optionType import OptionType
from ..models import Filter, FilterOption, Option


class FilterType(DjangoObjectType):
    class Meta:
        model = Filter

    options = graphene.List(OptionType)

    def resolve_options(self, info):
        filter_options = FilterOption.objects.filter(filter=self)
        option_ids = [fo.option_id for fo in filter_options]
        options = Option.objects.filter(option_id__in=option_ids)
        return options
