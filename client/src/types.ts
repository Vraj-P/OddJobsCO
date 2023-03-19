export interface ListingData {
    title: string;
    id: number;
    name: string;
    phone: string;
    email: string;
    description: string;
}

export interface ListingCardData {
    title: string;
    id: number;
}

export interface UserData {
    title: string;
    id: number;
    name: string;
    phone: string;
    email: string;
}

export interface FilterGroup {
    label: string,
    options: FilterOption[];
}

export interface FilterOption {
    label: string;
    value: string;
}
