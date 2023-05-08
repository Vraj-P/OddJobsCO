export function convertToFilterArray(filterObject) {
  const filterArray = [];
  for (const [filterName, filterValues] of Object.entries(filterObject)) {
    const filterItem = { name: filterName };
    if (filterValues.length > 0) {
      filterItem.options = filterValues.map((value) => ({ name: value }));
    }
    filterArray.push(filterItem);
  }
  return filterArray;
}

export function convertToFilterState(filters) {
  return filters.reduce((acc, filter) => {
    acc[filter.name] = filter.options.map((option) => option.name);
    return acc;
  }, {});
}