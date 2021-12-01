import React, { useState } from "react";

import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN } from '../utils/mutations';
import { SET_USER } from '../utils/actions';
import Auth from '../utils/auth';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [formState, setFormState] = useState({
    email: '', 
    password: '' 
  });
  const [login, { error }] = useMutation(LOGIN);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  

  const handleFormSubmit = async (event) => {
    
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { 
          email: formState.email,
          password: formState.password },
      });
      
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      
      dispatch({
        type: SET_USER,
        payload: mutationResponse.data.login.user
      })
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Link href="/signup">Click here to Sign Up!</Link>
      <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
        <Grid container alignItems="center" justifyContent="center"  direction="column">
          {/* <Grid item>
            <TextField
            id="username"
            name="username"
            label="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
            />
          </Grid> */}
          <Grid item>
            <TextField
            id="email"
            name="email"
            label="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
            id="password"
            name="password"
            label="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Sign In
          </Button>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
