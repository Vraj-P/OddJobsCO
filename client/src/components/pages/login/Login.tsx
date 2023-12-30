// Login.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss'; // Import the SCSS file

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <Card className="loginCard" variant="outlined">
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form className="loginForm">
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
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container className="linkContainer">
          <Grid item xs={6}>
            <Link component={RouterLink} to="/register">
              Register
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link component={RouterLink} to="/forgot-password">
              Forgot Password?
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
