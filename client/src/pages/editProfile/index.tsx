import React, { useState } from "react";
import {
    Button,
    CssBaseline,
    TextField,
    Typography,
    Container,
} from "@mui/material";
import {useParams} from "react-router-dom";
import {TestUserData} from "../../testingData";
import {formStyles} from "../../styles/formStyles";

export default function EditProfile() {
    const { classes, cx } = formStyles();
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
