// TopBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link as RouterLink } from 'react-router-dom';
import './styles.scss';

export const TopBar = () => {
  return (
    <AppBar position="static" className="topBar">
      <Toolbar>
        <Typography variant="h3" component="div" className="logo">
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            OddJobsCo.
          </Link>
        </Typography>
        <div className="search">
          <IconButton disableRipple className="searchIcon">
            <SearchIcon fontSize="large" />
          </IconButton>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            className="searchInput"
          />
        </div>
        <div className="profileButtons">
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <Button color="inherit">Home</Button>
          </Link>
          <Link component={RouterLink} to="/profile" color="inherit" underline="none">
            <Button color="inherit">Profile</Button>
          </Link>
          <Link component={RouterLink} to="/login" color="inherit" underline="none">
            <Button color="inherit">Login</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
