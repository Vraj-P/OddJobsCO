import React, {useState} from "react";
import ListingCard from "./components/ListingCard";
import { makeStyles } from 'tss-react/mui';
import { Grid } from '@mui/material';
import { TestListingCardData, TestFilterGroups } from '../../testingData';
import FilterButton from "./components/FilterButton";

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

    const [filterState, setFilterState] = useState({});

    const handleApplyFilter = (newFilterState: any) => {
        console.log(newFilterState)
        setFilterState(newFilterState);
    };

    return (
        <div>
            <FilterButton filterGroups={TestFilterGroups} onApplyFilter={handleApplyFilter}/>
            <div className={cx(classes.container)}>
                <Grid container spacing={2}>
                    {TestListingCardData.map((listing) => (
                        <Grid item xs={12} sm={12} md={12}>
                            <ListingCard id={listing.id} title={listing.title} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}
export default ListingsPage;
