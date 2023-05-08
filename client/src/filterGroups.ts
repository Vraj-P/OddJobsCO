import {FilterGroup} from "./types";

export const FilterGroups: FilterGroup[] = [
    {
        label: 'Job Type',
        options: [
            {label: 'Cleaning', value: 'cleaning'},
            {label: 'Gardening', value: 'gardening'},
            {label: 'Handyman', value: 'handyman'},
            {label: 'Moving', value: 'moving'},
            {label: 'Painting', value: 'painting'},
        ],
    },
    {
        label: 'Location',
        options: [
            {label: 'New York', value: 'ny'},
            {label: 'Los Angeles', value: 'la'},
            {label: 'Chicago', value: 'ch'},
            {label: 'Houston', value: 'hou'},
            {label: 'Miami', value: 'mia'},
        ],
    },
    {
        label: 'Price',
        options: [
            {label: '$50 or less', value: '0-50'},
            {label: '$50-$100', value: '50-100'},
            {label: '$100-$200', value: '100-200'},
            {label: '$200 or more', value: '200-'},
        ],
    },
    {
        label: 'Availability',
        options: [
            {label: 'Now', value: 'now'},
            {label: 'Today', value: 'today'},
            {label: 'Tomorrow', value: 'tomorrow'},
        ],
    },
    {
        label: 'Rating',
        options: [
            {label: '4 stars or more', value: '4-'},
            {label: '3 stars or more', value: '3-'},
            {label: '2 stars or more', value: '2-'},
            {label: '1 star or more', value: '1-'},
        ],
    },
    {
        label: 'Experience Level',
        options: [
            {label: 'Beginner', value: 'beginner'},
            {label: 'Intermediate', value: 'intermediate'},
            {label: 'Expert', value: 'expert'},
        ],
    },
    {
        label: 'Specializations',
        options: [
            {label: 'Plumbing', value: 'plumbing'},
            {label: 'Electrical', value: 'electrical'},
            {label: 'Carpentry', value: 'carpentry'},
            {label: 'Masonry', value: 'masonry'},
        ],
    },
];