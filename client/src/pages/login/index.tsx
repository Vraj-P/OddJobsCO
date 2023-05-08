import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "tss-react/mui";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material//LockOutlined";
import {useMutation} from "@apollo/client";
import {LoginUserDocument, LoginUserMutation, LoginUserMutationVariables} from "../../generated/graphql";
import {loggedInUserEmail} from "../../cachedVariables";
import {client} from "../../client";
import jwtDecode from "jwt-decode";

const useStyles = makeStyles()((theme) => ({
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

const LoginForm = () => {
  const { classes, cx } = useStyles();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    console.log(formData);
    await login({variables: formData});
  };

  const [login, { loading }] = useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, {
    onCompleted({loginUser}) {
      if (loginUser && loginUser.token){
        localStorage.setItem('token', loginUser.token);
        const decodedToken = jwtDecode<{ email: string }>(loginUser.token);
        client.clearStore().then(() => {
          loggedInUserEmail(decodedToken.email);
          navigate('/');
        });
      }
    },
    onError(error) {
      setErrorMessage(error.message);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={cx(classes.paper)}>
        <Avatar className={cx(classes.avatar)}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={cx(classes.form)} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )}
          <Button
            disableRipple = {true}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={cx(classes.submit)}
            disabled={loading}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
