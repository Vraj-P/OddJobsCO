import React from 'react';
import { makeStyles } from 'tss-react/mui';
import {
    AccountCircle as AccountCircleIcon,
    ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {IconButton, Menu, MenuItem, ListItemIcon, ListItemText} from '@mui/material';
import { GetUser } from "../testingData";

const useStyles = makeStyles()((theme) => ({
    iconButton: {
        color: theme.palette.common.white,
    },
}));

function ProfileButton() {
    const { classes, cx } = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const id = GetUser(1).id;

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
        console.log('logged out');
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
                <MenuItem onClick={handleLogoutClick}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </MenuItem>
            </Menu>
        </>
    );
}

export default ProfileButton;
