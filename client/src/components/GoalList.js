import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GOAL_STEP } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import GoalStepList from "./GoalStepList";

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
import Card from "@mui/material/Card"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme();

const GoalList = () => {
  const { data } = useQuery(QUERY_ME);

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
          <Typography component="h1" variant="h4">
            Current Goals
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            wrap:"no-wrap"
          }}
        >
          {data &&
            data.me.goals.map((goal) => (
              <div key={goal._id} className="card mb-3">
                <Typography component="h1" variant="h5">
                  {goal.name}
                </Typography>
                <Typography component="h1" variant="subtitle1">
                  End Date: {goal.goalEndDate}
                </Typography>
                <div>
                  <GoalStepList />
                </div>
              </div>
            ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default GoalList;
