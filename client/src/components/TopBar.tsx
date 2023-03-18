import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from 'tss-react/mui';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
// import { useApolloClient } from '@apollo/client';

const Search = styled('div')(({ theme }) => ({
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
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
}));

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
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for listings"
                        value={searchValue}
                        onChange={handleSearchChange}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Button color="inherit" component={Link} to="/listings" className={cx(classes.button)}>
                    Listings
                </Button>
                <Button color="inherit" component={Link} to="/profile" className={cx(classes.button)}>
                    Profile
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
