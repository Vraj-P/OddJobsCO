import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@mui/material";

const useStyles = makeStyles()((theme) => ({
  container: {
    // Make column
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formContent: {
    padding: "1rem",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const CreateEditPage = (editFlag: boolean) => {
  const { classes, cx } = useStyles();
  const [listingData, setListingData] = useState({
    title: "",
    description: "",
  });

  const handleListingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "title: " + listingData.title + " description: " + listingData.description
    );
  };

  const handleListingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListingData({ ...listingData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={cx(classes.paper)}>
        <Typography component="h1" variant="h5">
          {editFlag ? "Edit Listing" : "Create a New Listing"}
        </Typography>
        <form className={cx(classes.form)} onSubmit={handleListingSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Listing Title"
            name="title"
            value={listingData.title}
            onChange={handleListingChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Listing Description"
            type="description"
            id="description"
            value={listingData.description}
            onChange={handleListingChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={cx(classes.submit)}
          >
            {editFlag ? "Edit" : "Create"}
          </Button>
        </form>
      </div>
    </Container>
  );
};
