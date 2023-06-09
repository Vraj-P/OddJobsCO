import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
    AccountCircle as AccountCircleIcon,
    ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {IconButton, Menu, MenuItem, ListItemIcon, ListItemText} from '@mui/material';
import { GetUser } from "../testingData";
import {loggedInUserEmail} from "../cachedVariables";
import {client} from "../client";
import {useReactiveVar} from "@apollo/client";

const useStyles = makeStyles()((theme) => ({
    iconButton: {
        color: theme.palette.common.white,
    },
}));

function ProfileButton() {
    const { classes, cx } = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const id = GetUser(0).id;
    const isLoggedIn = useReactiveVar(loggedInUserEmail);

    const handleMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        handleMenuClose();
        logout();
    };

    const handleLProfileClick = () => {
        handleMenuClose();
    };

    const logout = () => {
        client.clearStore().then(() => {
            localStorage.removeItem('token');
            loggedInUserEmail('');
        });
    }

    return (
        <>
            <IconButton
                disableRipple = {true}
                className={cx(classes.iconButton)}
                onClick={handleMenuOpen}
                aria-label="Menu"
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleLProfileClick} component={Link} to={`/profile/${id}`}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </MenuItem>
                {isLoggedIn &&
                    <MenuItem onClick={handleLogoutClick}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </MenuItem>
                }
            </Menu>
        </>
    );
}

export default ProfileButton;
