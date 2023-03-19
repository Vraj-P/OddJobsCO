import React, { useState } from "react";
import ListingCard from "./components/ListingCard";
import { makeStyles } from "tss-react/mui";
import { Grid, Typography } from "@mui/material";
import { TestListingCardData, TestFilterGroups } from "../../testingData";
import FilterButton from "./components/FilterButton";

const useStyles = makeStyles()({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  filterBtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

function ListingsPage() {
  const { classes, cx } = useStyles();

  const [filterState, setFilterState] = useState({});

  const handleApplyFilter = (newFilterState: any) => {
    setFilterState(newFilterState);
    console.log(filterState);
  };

  return (
    <div>
      <div className={cx(classes.container)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container>
              <Grid item xs={6} sm={6} md={6}>
                <Typography variant="h5" component="h2">
                  Showing {TestListingCardData.length} listings
                </Typography>
              </Grid>
              <Grid
                item
                className={cx(classes.filterBtnContainer)}
                xs={6}
                sm={6}
                md={6}
              >
                <FilterButton
                  filterGroups={TestFilterGroups}
                  onApplyFilter={handleApplyFilter}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={2}>
              {TestListingCardData.map((listing) => (
                <Grid item xs={12} sm={12} md={12}>
                  <ListingCard id={listing.id} title={listing.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default ListingsPage;
