import React, {useState} from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ListingCard from "../listings/components/ListingCard";
import { TestUserData, TestListingCardData } from "../../testingData";
import { useParams, Link } from "react-router-dom";

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    boxShadow: "none",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  button_profile: {
    margin: theme.spacing(1),
  },
}));

export default function UserProfile() {
  const { classes, cx } = useStyles();
  const [editListings, setEditListings] = useState(false);

  const handleSetEditListings = () => {
    setEditListings(!editListings);
  };

  const { id } = useParams();

  const { name, phone, email } = TestUserData[Number(id) - 1];

  return (
    <div className={cx(classes.root)}>
      <Paper className={cx(classes.paper)}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar className={cx(classes.avatar)}>{name[0]}</Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {phone}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
                disableRipple = {true}
                variant="contained"
                color="primary"
                component={Link}
                to="/create"
                className={cx(classes.button_profile)}
            >
              Create Listing
            </Button>
            <Button
                disableRipple={true}
                variant="contained"
                color="primary"
                component={Link}
                to={`/edit-profile/${id}`}
                className={cx(classes.button_profile)}
            >
              Edit Profile
            </Button>
            <Button
                disableRipple={true}
                variant="contained"
                color="primary"
                className={cx(classes.button_profile)}
            >
              Delete Profile
            </Button>
            <Button
                disableRipple={true}
                variant="contained"
                color="primary"
                onClick={handleSetEditListings}
                className={cx(classes.button_profile)}
            >
              Edit Listings
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {TestListingCardData.map((listing) => (
            <Grid item xs={12} sm={12} md={12} id={String(listing.id)}>
              <ListingCard id={listing.id} title={listing.title} edit={editListings} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
