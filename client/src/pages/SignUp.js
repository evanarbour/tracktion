import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [formState, setFormState] = useState({ 
    username: '', 
    email: '', 
    password: ''
  });

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password
        },
      });
      const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
      <Container component="main" maxWidth="xs">
        <Link href="/signin">Already have an account? Login</Link>
        <form onSubmit={handleFormSubmit}>
          <Grid container alignItems="center" justifyContent="center"  direction="column">
            <TextField
              id="username"
              name="username"
              label="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
            />
            <TextField
              id="email"
              name="email"
              label="email"
              type="text"
              value={formState.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              name="password"
              label="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
            Sign In
          </Button>
          </Grid>
        </form>
      </Container>
    </ThemeProvider>
  );
}