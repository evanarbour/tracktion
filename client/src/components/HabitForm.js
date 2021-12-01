import React, { useState } from "react";
import { ADD_HABIT } from '../utils/actions';
import { useMutation } from '@apollo/client';
// import { ADD_HABIT } from '../utils/mutations'


// import redux elements 
import { useSelector, useDispatch } from 'react-redux';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function HabitForm() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    // edit the login mutation to include the user info and 
    // set that to the redux store so it's accessible to all pages



    
    const [newHabit, setNewHabit] = useState({name: ''});

    const handleFormSubmit = () => {
      dispatch({
        type: ADD_HABIT,
        payload: {
          name: newHabit
        },
      })
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setNewHabit({
        ...newHabit,
        [name]: value,
      });
    }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
      <form onSubmit={handleFormSubmit}>
        <Grid container alignItems="center" justifyContent="center"  direction="column">
          <Grid item>
            <TextField
            id="habitadd-input"
            name="name"
            label="Enter a new habit.."
            type="text"
            value={newHabit.name}
            onChange={handleChange}
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
          ADD HABIT
        </Button>
        </Grid>
      </form>
      </Container>
    </ThemeProvider>
  );
};