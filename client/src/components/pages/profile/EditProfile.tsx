// EditProfile.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import './styles.scss';

export const EditProfile = () => {
  // Sample user data (initial data for display)
  const initialUserData = {
    username: 'JaneDoe',
    email: 'jane.doe@example.com',
    profilePicture: 'https://example.com/profile-picture-jane.jpg',
    bio: 'Passionate about various hobbies and interests.',
  };

  const [userData, setUserData] = useState({ ...initialUserData });

  const handleSaveChanges = () => {
    // Implement logic to save changes to the user profile
    console.log('Saving changes to the user profile:', userData);
    // You can make an API call or perform other actions here
  };

  const handleChange = (field: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="editProfileContainer">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Edit Profile
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={userData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            className="inputField"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={userData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="inputField"
          />
          <TextField
            label="Profile Picture URL"
            variant="outlined"
            fullWidth
            value={userData.profilePicture}
            onChange={(e) => handleChange('profilePicture', e.target.value)}
            className="inputField"
          />
          <TextField
            label="Bio"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={userData.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="inputField"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSaveChanges}
            className="saveChangesButton"
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
