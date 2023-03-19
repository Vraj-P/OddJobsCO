import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useParams } from "react-router-dom";
import { TestListingData } from '../../testingData';

const useStyles = makeStyles()((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: 1000,
    minWidth: 275,
    margin: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 12,
  },
  userInfo: {
    fontSize: 14,
    marginTop: -3,
    marginBottom: -3,
  },
  button: {
    marginTop: 10,
  },
}));

function Listing() {
  const { classes, cx } = useStyles();
  // we would take this id and pass it in  a get query to get the listing data
  const { id } = useParams();

  // error checking must be done
  const { title, name, phone, email, description } = TestListingData[Number(id)-1];

  const handleClick = () => {
    alert("Contact Creator");
  };

  return (
    <div className={cx(classes.container)}>
      <Card className={cx(classes.root)}>
        <CardContent>
          <Typography className={cx(classes.title)} variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={cx(classes.subtitle)}>
            <Typography
              className={cx(classes.userInfo)}
              color="textSecondary"
              gutterBottom
            >
              Creator: {name}
            </Typography>
            <Typography
              className={cx(classes.userInfo)}
              color="textSecondary"
              gutterBottom
            >
              Phone: {phone}
            </Typography>
            <Typography
              className={cx(classes.userInfo)}
              color="textSecondary"
              gutterBottom
            >
              Email: {email}
            </Typography>
          </Typography>

          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <Button
            disableRipple = {true}
            className={cx(classes.button)}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Contact Creator
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Listing;
