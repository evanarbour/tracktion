import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GOAL_STEP } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme();

const GoalList = ({ goals }) => {
  // if (!goals.length) {
  //   return <h3>No Goals Yet</h3>;
  // }
  const [name, setName] = useState("");

  const [addGoalStep, { error }] = useMutation(ADD_GOAL_STEP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addGoalStep({
        variables: { name },
      });
      window.location.reload();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

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
            <ListAltIcon />
          </Avatar>

          {/* <div>
            <Box sx={{ p: 2, m: 2, bgcolor: "#f5f5f5", borderRadius: 4 }}>
              Goals:
              {goals &&
                goals.map((goal) => (
                  <div key={goal._id}>
                    <h4>
                      Goal One:
                      {goal.name}
                    </h4>
                    <ul> {goal.steps} </ul>
                  </div>
                ))}
            </Box>
          </div> */}

          <div>
      <h3 className="text-primary">goals</h3>
      <div className="flex-row justify-space-between my-4">
        {goals &&
          goals.map((goal) => (
            <div key={goal._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {goal.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {goal.steps}{' '}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
          {/* <Box
            component="form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="step"
              label="Add Step"
              value={name}
              onChange={(event) => setName(event.target.value)}
              name="step"
              autoComplete="step"
              autoFocus
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add Step
            </Button>
          </Box> */}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default GoalList;
