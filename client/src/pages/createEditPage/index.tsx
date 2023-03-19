import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Button, TextField } from "@mui/material";

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
}));

export const CreateEditPage = (editFlag: boolean) => {
  const { classes } = useStyles();
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
    <div className={classes.container}>
      <form
        onSubmit={handleListingSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={classes.formContent}
          id="outlined-basic"
          label="Add a title"
          variant="outlined"
          name="title"
          value={listingData.title}
          onChange={handleListingChange}
        />
        <TextField
          className={classes.formContent}
          id="outlined-basic"
          label="Add a description"
          variant="outlined"
          name="description"
          value={listingData.description}
          onChange={handleListingChange}
        />
        <Button variant="contained" color="primary" type="submit">
          {editFlag ? "Edit" : "Create"}
        </Button>
      </form>
    </div>
  );
};
