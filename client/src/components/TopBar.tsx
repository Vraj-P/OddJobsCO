import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from 'tss-react/mui';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import { useApolloClient } from '@apollo/client';

const useStyles = makeStyles()((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      fontSize: "0.75rem",
    },
  },
  search:{
    color: 'black',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledInputBase: {
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
            width: '30ch',
        },
      },
    },
  },
}));

function TopBar() {
    const { classes, cx } = useStyles();
    const [searchValue, setSearchValue] = React.useState('');

    // const client = useApolloClient();

    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        // const { data } = await client.query({
        //     query: GET_LISTINGS,
        //     variables: { search: event.target.value },
        // });
        // console.log(data);
        setSearchValue(event.target.value);
        console.log(searchValue);
    };

    return (
        <AppBar position="static" className={cx(classes.root)}>
            <Toolbar>
                <Typography variant="h6" className={cx(classes.title)}>
                    Odd Jobs Co.
                </Typography>
                <div className={cx(classes.search)}>
                    <div className={cx(classes.searchIconWrapper)}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        className={cx(classes.styledInputBase)}
                        placeholder="Search for listings"
                        value={searchValue}
                        onChange={handleSearchChange}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <Button disableRipple = {true} color="inherit" component={Link} to="/listings" className={cx(classes.button)}>
                    Listings
                </Button>
                <Button disableRipple = {true} color="inherit" component={Link} to="/profile" className={cx(classes.button)}>
                    Profile
                </Button>
                <Button disableRipple = {true} color="inherit" component={Link} to="/login" className={cx(classes.button)}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
