// EditProfile.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Avatar } from '@mui/material';
import './styles.scss';

export const EditServiceProviderProfile = () => {
  // Sample user data (initial data for edit)
  const initialUserData = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    profilePicture: 'https://example.com/profile-picture.jpg',
    skills: ['Plumbing', 'Electrical', 'Carpentry'],
    bio: 'Experienced handyman offering a variety of odd jobs services.',
  };

  const [userData, setUserData] = useState({ ...initialUserData });

  const handleSaveChanges = () => {
    // Implement logic to save changes to user profile
    console.log('User data saved:', userData);
    // You can make an API call or perform other actions here
  };

  const handleChange = (field: string, value: string | string[]) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="editProfileContainer">
      <Card variant="outlined">
        <CardContent>
          <Avatar alt="Profile Picture" src={userData.profilePicture} className="profilePicture" />
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
            label="Skills"
            variant="outlined"
            fullWidth
            value={userData.skills.join(', ')}
            onChange={(e) => handleChange('skills', e.target.value.split(',').map((skill) => skill.trim()))}
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
