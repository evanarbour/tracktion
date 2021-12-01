import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GOAL } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

import AdapterDateFns from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const GoalForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    steps: [],
    endDate: "",
  });

  const [addGoal, { error }] = useMutation(ADD_GOAL, {
    update(cache, { data: { addGoal } }) {
      try {
        const { goals } = cache.readQuery({ query: QUERY_USER });

        cache.writeQuery({
          query: QUERY_USER,
          data: { goals: [addGoal, ...goals] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Execute mutation and pass in defined parameter data as variables
      const { data } = await addGoal({
        variables: { ...formState },
      });

      setFormState({
        name: "",
        steps: [],
        endDate: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

const handleChange = (event) => {
  const { name, value } = event.target;
  if (name === 'steps') {
    setFormState({ ...formState, [name]: [value] })
  } else {
    setFormState({ ...formState, [name]: value });
  }
}

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          ...
        </LocalizationProvider>

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
              id="name"
              placeholder="New Goal"
              value={formState.name}
              onChange={handleChange}
              name="name"
              autoComplete="name"
              autoFocus
            />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              label="Goal End Date"
                value={formState.endDate}
                onChange={(event) => setFormState(event.target.value)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}

            <TextField
              margin="normal"
              fullWidth
              id="date"
              placeholder="Goal End Date"
              value={formState.endDate}
              onChange={handleChange}
              name="endDate"
              autoComplete="endDate"
              autoFocus
            />

            <TextField
              margin="normal"
              fullWidth
              id="goal"
              label="First Step"
              value={formState.steps}
              onChange={handleChange}
              name="steps"
              autoComplete="steps"
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
};

export default GoalForm;
