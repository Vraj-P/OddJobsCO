import React from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ListingCard from "../listings/components/ListingCard";

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface ListingCardData {
  name: string;
}

const testListings: ListingCardData[] = [
  { name: "Listing 1" },
  { name: "Listing 2" },
  { name: "Listing 3" },
];

const UserProfile = () => {
  const { classes } = useStyles();

  const name = "Name";
  const title = "developer";
  const email = "xxxxx@xxx.com";
  const phone = "+1-xxx-xxx-xxxx";

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar}>{name[0]}</Avatar>
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
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Delete Profile
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {testListings.map((listing) => (
            <Grid item xs={12} sm={12} md={12}>
              <ListingCard name={listing.name} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default UserProfile;
