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

export const TestListingCardData: ListingCardData[] = [
    { id: 1, title: 'Listing 1' },
    { id: 2, title: 'Listing 2' },
    { id: 3, title: 'Listing 3' },
];

const TestData = {
    TestListingCardData,
    TestListingData,
};

export default TestData;