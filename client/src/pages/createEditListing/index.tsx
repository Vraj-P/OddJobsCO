import React, {useEffect, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import {useParams} from "react-router-dom";
import {TestListingData} from "../../testingData";
import FilterButton from "../listings/components/FilterButton";
import {FilterGroups} from "../../filterGroups";
import {useMutation, useQuery} from "@apollo/client";
import {
  CreateListingDocument,
  CreateListingMutation,
  CreateListingMutationVariables,
  ListingDocument,
  ListingInput,
  ListingQuery,
  ListingQueryVariables,
  UpdateListingDocument,
  UpdateListingMutation,
  UpdateListingMutationVariables
} from "../../generated/graphql";
import {convertToFilterArray, convertToFilterState} from "../../js/objectFormatter";
import {formStyles} from "../../styles/formStyles";

export const CreateEditListing = (editFlag: boolean) => {
  const { classes, cx } = formStyles();
  const { id } = useParams();
  const {error, data} = useQuery<ListingQuery, ListingQueryVariables>(ListingDocument, { variables: { listingId: parseInt(id || '1') } });
  const [listingData, setListingData] = useState<ListingInput>({
    title: "",
    description: "",
    completed: false,
    filters: [],
  });
  const [filterState, setFilterState] = useState({});
  if (error) {
    console.log(error);
  }
  useEffect(() => {
    if (data?.listing && id) {
      setListingData({
        listingId: data.listing.listingId,
        title: data.listing?.title || "",
        description: data.listing?.description || "",
        completed: data.listing?.completed || false,
        filters: data.listing?.filters || [],
      });
      console.log(data.listing?.filters)
      setFilterState(convertToFilterState(data.listing?.filters))
    }
  }, [id, data]);

  const handleFilterSubmit = (newFilterState: React.SetStateAction<{}>) => {
      setListingData( {...listingData, filters: convertToFilterArray(newFilterState)});
  };

  const handleListingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editFlag) {
      setListingData(listingData);
      await create({variables: {listingData}})
    } else {
      setListingData(listingData);
      await edit({variables: {listingData}})
    }
  };

  const [create, {loading: createLoading}] = useMutation<CreateListingMutation, CreateListingMutationVariables>(CreateListingDocument, {
    onCompleted({createListing}) {
      if (createListing){
        console.log(createListing);
      }
    },
    onError(error) {
      console.log(error)
    }
  })

  const [edit, {loading: editLoading}] = useMutation<UpdateListingMutation, UpdateListingMutationVariables>(UpdateListingDocument, {
    onCompleted({updateListing}) {
      if (updateListing){
        console.log(updateListing);
      }
    },
    onError(error) {
      console.log(error)
    }
  })

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
            multiline={true}
            rows={7}
            maxRows={7}
            required
            fullWidth
            name="description"
            label="Listing Description"
            type="description"
            id="description"
            value={listingData.description}
            onChange={handleListingChange}
          />
          <FilterButton
              filterGroups={FilterGroups}
              fullWidth={true}
              onFilterSubmit={handleFilterSubmit}
              defaultFilterState={filterState}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={cx(classes.submit)}
            disableRipple={true}
            disabled={createLoading || editLoading}
          >
            {editFlag ? "Edit" : "Create"}
          </Button>
        </form>
      </div>
    </Container>
  );
};
