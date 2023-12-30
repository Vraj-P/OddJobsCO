import React from 'react';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import './styles.scss';

export const ServiceProviderProfile = () => {
  // Sample user data
  const userData = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    profilePicture: 'https://example.com/profile-picture.jpg',
    skills: ['Plumbing', 'Electrical', 'Carpentry'],
    bio: 'Experienced handyman offering a variety of odd jobs services.',
  };

  return (
    <div className="profileContainer">
      <Card variant="outlined">
        <CardContent>
          <Avatar alt="Profile Picture" src={userData.profilePicture} className="profilePicture" />
          <Typography variant="h5" align="center" gutterBottom>
            {userData.username}
          </Typography>
          <Typography variant="body1" paragraph>
            Email: {userData.email}
          </Typography>
          <Typography variant="body1" paragraph>
            Skills: {userData.skills.join(', ')}
          </Typography>
          <Typography variant="body1" paragraph>
            Bio: {userData.bio}
          </Typography>
          <Button variant="contained" color="primary" fullWidth className="editProfileButton">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
