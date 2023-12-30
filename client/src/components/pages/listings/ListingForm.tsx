// CreateListingForm.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, TextField } from '@mui/material';
import './styles.scss';

export const CreateListingForm = () => {
  const [listingData, setListingData] = useState({
    title: '',
    category: '',
    description: '',
    availability: '',
    price: '',
    serviceProvider: '',
    email: '',
    location: '',
  });

  const handleCreateListing = () => {
    // Implement logic to submit the listings data
    console.log('Listing data submitted:', listingData);
    // You can make an API call or perform other actions here
  };

  const handleChange = (field: string, value: string) => {
    setListingData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="createListingContainer">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Create Listing
          </Typography>
          <form>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={listingData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              value={listingData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={listingData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Availability"
              variant="outlined"
              fullWidth
              value={listingData.availability}
              onChange={(e) => handleChange('availability', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              value={listingData.price}
              onChange={(e) => handleChange('price', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Service Provider"
              variant="outlined"
              fullWidth
              value={listingData.serviceProvider}
              onChange={(e) => handleChange('serviceProvider', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={listingData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="inputField"
            />
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={listingData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="inputField"
            />
            <Grid container spacing={2} className="buttonContainer">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCreateListing}
                  className="submitButton"
                >
                  Create Listing
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
