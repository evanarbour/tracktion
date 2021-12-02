import React, { useState } from "react";
import { ADD_HABIT } from '../utils/actions';
import { useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries'
// import { ADD_HABIT } from '../utils/mutations'


// import redux elements 
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-apollo';



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
    // const { data } = useQuery(QUERY_ME);
    const [newHabit, setNewHabit] = useState({name: ''});
    const dispatch = useDispatch();
    
    // talk to Aaron: how to connect and access info from redux store in various components
  
    const handleFormSubmit = () => {
      dispatch({
        type: ADD_HABIT,
        payload: {
          newHabit
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