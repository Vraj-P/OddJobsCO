import React from "react";
import ListingCard from "./components/ListingCard";
import { makeStyles } from 'tss-react/mui';
import { Grid } from '@mui/material';

interface ListingCardData {
    name: string;
}

const testListings: ListingCardData[] = [
    { name: 'Listing 1' },
    { name: 'Listing 2' },
    { name: 'Listing 3' },
];

const useStyles = makeStyles()({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    },
});

function ListingsPage() {
    const { classes, cx } = useStyles();

    return (
        <div>
            <div className={cx(classes.container)}>
                <Grid container spacing={2}>
                    {testListings.map((listing) => (
                        <Grid item xs={12} sm={12} md={12}>
                            <ListingCard name={listing.name} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}
export default ListingsPage;
