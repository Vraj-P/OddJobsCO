// ForgotPassword.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss'; // Import the SCSS file

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Sending password reset email to:', email);
  };

  return (
    <Card className="forgotPasswordCard" variant="outlined">
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <form className="forgotPasswordForm">
          <Grid container spacing={1}>
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleForgotPassword}
              >
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container className="linkContainer">
          <Grid item xs={12}>
            <Link component={RouterLink} to="/login">
              Back to Login
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
