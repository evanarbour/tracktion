import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_GOAL } from '../utils/mutations';


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

const GoalForm = () => {
    const [name, setName] = useState('');

    const [addGoal, { error }] = useMutation(ADD_GOAL);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // Execute mutation and pass in defined parameter data as variables
            const { data } = await addGoal({
              variables: { name },
            });
        
            window.location.reload();
            console.log(data);
          } catch (err) {
            console.error(err);
          }

    }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Goal
          </Typography>
          <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="goal"
              label="New Goal"
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="goal"
              autoComplete="goal"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Goal
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default GoalForm;