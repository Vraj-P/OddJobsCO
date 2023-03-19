interface ListingData {
    title: string;
    id: number;
    name: string;
    phone: string;
    email: string;
    description: string;
}

interface ListingCardData {
    title: string;
    id: number;
}

interface UserData {
    title: string;
    id: number;
    name: string;
    phone: string;
    email: string;
}

export const TestListingData: ListingData[] = [
    {
        id: 1,
        title: 'Listing 1',
        name: "Name",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
        description: "Lorem ipsum dolor sit amet, mazim mandamus pri id, deserunt persequeris has et, eu scripta vivendum cum. Cu modus suscipiantur est. Ne eos odio dicit iriure, oratio laudem erroribus an vis. Alterum constituam ex has, eu duo detracto patrioque. In mandamus dissentiunt mea, duo ea mutat postea accumsan. Minimum adipiscing nam in, facilis blandit prodesset ea eos.",
    },
    {
        id: 2,
        title: 'Listing 2',
        name: "Name",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
        description: "Lorem ipsum dolor sit amet, mazim mandamus pri id, deserunt persequeris has et, eu scripta vivendum cum. Cu modus suscipiantur est. Ne eos odio dicit iriure, oratio laudem erroribus an vis. Alterum constituam ex has, eu duo detracto patrioque. In mandamus dissentiunt mea, duo ea mutat postea accumsan. Minimum adipiscing nam in, facilis blandit prodesset ea eos.",
    },
    {
        id: 3,
        title: 'Listing 3',
        name: "Name",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
        description: "Lorem ipsum dolor sit amet, mazim mandamus pri id, deserunt persequeris has et, eu scripta vivendum cum. Cu modus suscipiantur est. Ne eos odio dicit iriure, oratio laudem erroribus an vis. Alterum constituam ex has, eu duo detracto patrioque. In mandamus dissentiunt mea, duo ea mutat postea accumsan. Minimum adipiscing nam in, facilis blandit prodesset ea eos.",
    },
];

export const TestUserData: UserData[] = [
    {
        id: 1,
        title: 'Listing 1',
        name: "Name",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
    },
    {
        id: 2,
        title: 'Listing 2',
        name: "Name",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
    },
    {
        id: 3,
        title: 'Listing 3',
        name: "Name",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
    },
];

export const GetUser = (id: number) => {
    return TestUserData[id];
}

// export const CurrentUserData: ListingData

export const TestListingCardData: ListingCardData[] = [
    { id: 1, title: 'Listing 1' },
    { id: 2, title: 'Listing 2' },
    { id: 3, title: 'Listing 3' },
];

export const TestFilterGroups = [
    {
        label: 'Job Type',
        options: [
            { label: 'Cleaning', value: 'cleaning' },
            { label: 'Gardening', value: 'gardening' },
            { label: 'Handyman', value: 'handyman' },
            { label: 'Moving', value: 'moving' },
            { label: 'Painting', value: 'painting' },
        ],
    },
    {
        label: 'Location',
        options: [
            { label: 'New York', value: 'ny' },
            { label: 'Los Angeles', value: 'la' },
            { label: 'Chicago', value: 'ch' },
            { label: 'Houston', value: 'hou' },
            { label: 'Miami', value: 'mia' },
        ],
    },
    {
        label: 'Price',
        options: [
            { label: '$50 or less', value: '0-50' },
            { label: '$50-$100', value: '50-100' },
            { label: '$100-$200', value: '100-200' },
            { label: '$200 or more', value: '200-' },
        ],
    },
    {
        label: 'Availability',
        options: [
            { label: 'Now', value: 'now' },
            { label: 'Today', value: 'today' },
            { label: 'Tomorrow', value: 'tomorrow' },
        ],
    },
    {
        label: 'Rating',
        options: [
            { label: '4 stars or more', value: '4-' },
            { label: '3 stars or more', value: '3-' },
            { label: '2 stars or more', value: '2-' },
            { label: '1 star or more', value: '1-' },
        ],
    },
    {
        label: 'Experience Level',
        options: [
            { label: 'Beginner', value: 'beginner' },
            { label: 'Intermediate', value: 'intermediate' },
            { label: 'Expert', value: 'expert' },
        ],
    },
    {
        label: 'Specializations',
        options: [
            { label: 'Plumbing', value: 'plumbing' },
            { label: 'Electrical', value: 'electrical' },
            { label: 'Carpentry', value: 'carpentry' },
            { label: 'Masonry', value: 'masonry' },
        ],
    },
];

const TestData = {
    TestFilterGroups,
    TestListingCardData,
    TestListingData,
    TestUserData,
    GetUser,
};

export default TestData;
