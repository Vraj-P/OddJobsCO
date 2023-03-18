import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

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

function ListingCard() {
  const { classes } = useStyles();

  const title = "Title";
  const name = "Name";
  const phone = "+1-xxx-xxx-xxxx";
  const email = "xxxxx@xxx.com";
  const description =
    "Lorem ipsum dolor sit amet, mazim mandamus pri id, deserunt persequeris has et, eu scripta vivendum cum. Cu modus suscipiantur est. Ne eos odio dicit iriure, oratio laudem erroribus an vis. Alterum constituam ex has, eu duo detracto patrioque. In mandamus dissentiunt mea, duo ea mutat postea accumsan. Minimum adipiscing nam in, facilis blandit prodesset ea eos.";

  const handleClick = () => {
    alert("Contact Creator");
  };

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.subtitle}>
            <Typography
              className={classes.userInfo}
              color="textSecondary"
              gutterBottom
            >
              Creator: {name}
            </Typography>
            <Typography
              className={classes.userInfo}
              color="textSecondary"
              gutterBottom
            >
              Phone: {phone}
            </Typography>
            <Typography
              className={classes.userInfo}
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
            className={classes.button}
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

export default ListingCard;
