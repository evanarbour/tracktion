import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { ADD_HABIT } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries'
import { ADD_HABIT_TO_USER } from '../utils/actions'


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

  const { habits } = state;
  console.log(habits);

  

  const { data }  = useQuery(QUERY_ME);
  
  const [newHabit, setNewHabit] = useState({name: ''});

  const [addHabit] = useMutation(ADD_HABIT);

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        // Execute mutation and pass in defined parameter data as variables
        const { data } = await addHabit({
          variables: { ...newHabit},
        });
          
        

        setNewHabit({
          name: '',
        });
      } catch (err) {
        console.error(err);
      }
      
      
      

    };
    
    // useEffect(() => {
    //   if ( data ) {
    //     dispatch({
    //       type: ADD_HABIT_TO_USER,
    //       habit: data.me.habits
    //     }, [data, dispatch]);
    //   }
    // });

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
      <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
      </Box>
      </Container>
    </ThemeProvider>
  );
};