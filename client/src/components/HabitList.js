import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { LIST_HABIT } from '../utils/actions'
import { QUERY_ME } from '../utils/queries'
import SingleHabit from './SingleHabit';

const theme = createTheme();

const HabitList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { habits } = state;


  const { loading, data } = useQuery(QUERY_ME);

  

  useEffect(() => {
    if ( data ) {
      dispatch({
        type: LIST_HABIT,
        habits: data.me.habits,
      });
    }
  }, [data, dispatch])

  
  // const habitsArray = data.me.habits;
  


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={3}>
         {habits && habits.map((habit) => (
              <Grid item key={habit._id} xs={12} >
                <SingleHabit habit={habit} />
              </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default HabitList;