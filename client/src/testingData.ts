import {ListingCardData, ListingData, UserData} from "./types";

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
        name: "Name 1",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
        bio: "bio 1",
    },
    {
        id: 2,
        name: "Name 2",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
        bio: "bio 2",
    },
    {
        id: 3,
        name: "Name 3",
        phone: "+1-xxx-xxx-xxxx",
        email: "xxxxx@xxx.com",
        bio: "bio 3",
    },
];

export const GetUser = (id: number) => {
    return TestUserData[id];
}

export const TestListingCardData: ListingCardData[] = [
    { id: 1, title: 'Listing 1', edit: false },
    { id: 2, title: 'Listing 2', edit: false },
    { id: 3, title: 'Listing 3', edit: false },
];
