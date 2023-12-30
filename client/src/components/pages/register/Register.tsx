// Register.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss'; // Import the SCSS file

export const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Registering with:', username, email, password);
  };

  return (
    <Card className="registerCard" variant="outlined">
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        <form className="registerForm">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleRegister}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container className="linkContainer">
          <Grid item xs={12}>
            <Link component={RouterLink} to="/login">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
