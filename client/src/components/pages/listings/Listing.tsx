// ListingDetails.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, TextField } from '@mui/material';
import './styles.scss';

export const Listing = () => {
  const [emailContent, setEmailContent] = useState('');

  const handleContactSeller = () => {
    // Implement contact seller logic (e.g., send an email)
    console.log('Contact seller clicked with email content:', emailContent);
  };

  const handleBackToListings = () => {
    console.log('Back to Listings clicked');
    // Implement navigation logic if needed
  };

  return (
    <div className="listingDetailsContainer">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Handyman Services
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Category: Home Improvement
          </Typography>
          <Typography variant="body1" paragraph>
            Description: Need help with fixing things around the house? I offer a variety of handyman services,
            including plumbing, electrical work, and general repairs. No job is too small!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>
          <Typography variant="body2" paragraph>
            Availability: Flexible schedule, including weekends
          </Typography>
          <Typography variant="body2" paragraph>
            Price: $50 per hour
          </Typography>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body2" paragraph>
            Service Provider: John Handyman
          </Typography>
          <Typography variant="body2" paragraph>
            Email: john.handyman@example.com
          </Typography>
          <Typography variant="body2" paragraph>
            Location: City, Country
          </Typography>
          <TextField
            label="Email Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            className="emailContentInput"
          />
          <Grid container spacing={2} className="buttonContainer">
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleContactSeller}>
                Contact Service Provider
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={handleBackToListings}>
                Back to Listings
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};