import React from "react";
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
  button_create: {
    margin: theme.spacing(1),
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    borderRadius: 100,
  },
}));

const UserProfile = () => {
  const { classes, cx } = useStyles();
  // we would take this id and pass it in  a get query to get the listing data
  const { id } = useParams();

  const { title, name, phone, email } = TestUserData[Number(id) - 1];

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
                <Typography variant="body2" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {phone}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  disableRipple={true}
                  variant="contained"
                  color="primary"
                  className={cx(classes.button_profile)}
                >
                  Edit Profile
                </Button>
                <Button
                  disableRipple={true}
                  variant="contained"
                  color="secondary"
                  className={cx(classes.button_profile)}
                >
                  Delete Profile
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {TestListingCardData.map((listing) => (
            <Grid item xs={12} sm={12} md={12} id={String(listing.id)}>
              <ListingCard id={listing.id} title={listing.title} />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className={classes.button_create}
        component={Link}
        to={"/create/"}
      >
        Create
      </Button>
    </div>
  );
};

export default UserProfile;
