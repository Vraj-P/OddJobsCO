// UserProfile.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Avatar } from '@mui/material';
import './styles.scss';

export const UserProfile = () => {
  // Sample user data (initial data for display)
  const initialUserData = {
    username: 'JaneDoe',
    email: 'jane.doe@example.com',
    profilePicture: 'https://example.com/profile-picture-jane.jpg',
    bio: 'Passionate about various hobbies and interests.',
  };

  const [userData, setUserData] = useState({ ...initialUserData });

  const handleEditProfile = () => {
    // Implement logic to navigate to the edit profile page
    console.log('Navigating to edit profile page');
    // You can use a router or other navigation mechanism
  };

  return (
    <div className="userProfileContainer">
      <Card variant="outlined">
        <CardContent>
          <Avatar alt="Profile Picture" src={userData.profilePicture} className="profilePicture" />
          <Typography variant="h5" align="center" gutterBottom>
            {userData.username}'s Profile
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={userData.email}
            InputProps={{ readOnly: true }}
            className="inputField"
          />
          <TextField
            label="Bio"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={userData.bio}
            InputProps={{ readOnly: true }}
            className="inputField"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleEditProfile}
            className="editProfileButton"
          >
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
