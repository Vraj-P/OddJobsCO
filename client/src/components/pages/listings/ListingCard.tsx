import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

interface ListingCardProps {
  title: string;
  description: string;
  price: number;
  onButtonClick: () => void;
}

export const ListingCard = ({ title, description, price, onButtonClick }: ListingCardProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onButtonClick} variant="contained" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};
