import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Link } from 'react-router-dom';

const useStyles = makeStyles()((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    button: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(1),
            fontSize: '0.75rem',
        },
    },
}));

function TopBar() {
    const { classes, cx } = useStyles();

    return (
        <AppBar position="static" className={cx(classes.root)}>
            <Toolbar>
                <Typography variant="h6" className={cx(classes.title)}>
                    Odd Jobs Co.
                </Typography>
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