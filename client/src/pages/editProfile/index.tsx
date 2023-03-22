import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import {
    Button,
    CssBaseline,
    TextField,
    Typography,
    Container,
} from "@mui/material";
import {useParams} from "react-router-dom";
import {TestUserData} from "../../testingData";

const useStyles = makeStyles()((theme) => ({
    container: {
        // Make column
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "center",
    },
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "center",
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    formContent: {
        padding: "1rem",
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function EditProfile() {
    const { classes, cx } = useStyles();
    const { id } = useParams();
    const [profileData, setProfileData] = useState({
        name: TestUserData[Number(id)-1].name,
        phone: TestUserData[Number(id)-1].phone,
        email: TestUserData[Number(id)-1].email,
    });

    const handleProfileSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(
            "name: " + profileData.name + " phone: " + profileData.phone + " email: " + profileData.email
        );
    };

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={cx(classes.paper)}>
                <Typography component="h1" variant="h5">
                    Edit Profile
                </Typography>
                <form className={cx(classes.form)} onSubmit={handleProfileSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={profileData.name}
                        onChange={handleProfileChange}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoComplete={"tel"}
                        name="phone"
                        label="Phone Number"
                        id="phoneNumber"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoComplete={"email"}
                        name="email"
                        label="Email"
                        id="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={cx(classes.submit)}
                    >
                        Edit
                    </Button>
                </form>
            </div>
        </Container>
    );
};
