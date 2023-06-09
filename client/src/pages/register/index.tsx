import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "tss-react/mui";
import {
    TextField,
    Button,
    Typography,
    Grid,
    Avatar,
    CssBaseline,
    Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {useMutation} from "@apollo/client";
import {RegisterUserDocument, RegisterUserMutation, RegisterUserMutationVariables} from "../../generated/graphql";


const useStyles = makeStyles()((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const RegisterForm = () => {
    const { classes, cx } = useStyles();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>,) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMessage('');
        console.log(formData);
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match. Please try again.");
            setFormData(
                {
                    name: "",
                    email: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: "",
                }
            )
        } else {

            await register({variables: formData})
        }
    };

    const [register, {loading}] = useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, {
        onCompleted() {
            navigate('/login');
        },
        onError(error) {
          setErrorMessage(error.message);
        }
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={cx(classes.paper)}>
                <Avatar className={cx(classes.avatar)}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                <form
                    className={cx(classes.form)}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        required
                        id="name"
                        autoFocus
                        label="Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="email"
                        autoComplete="email"
                        autoFocus
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="phoneNumber"
                        autoComplete="tel"
                        autoFocus
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="password"
                        autoFocus
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="confirm-password"
                        autoFocus
                        label="ConfirmPassword"
                        variant="outlined"
                        fullWidth
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errorMessage && (
                        <Typography color="error">
                            {errorMessage}
                        </Typography>
                    )}
                    <Button
                        disableRipple = {true}
                        type="submit"
                        variant="contained"
                        fullWidth
                        color={"primary"}
                        className={cx(classes.submit)}
                        disabled={loading}
                    >
                        Register
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link
                                to="/login"
                            >
                                {"Already have an account?"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default RegisterForm;