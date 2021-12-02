import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_GOAL_STEP } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import ColorCheckboxes from "./Checkbox";
import { useState } from "react";
import StepList from "./StepList";

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

const GoalStepList = () => {
  const { data } = useQuery(QUERY_ME);

  //   const [name, setName] = useState("");

  //   const [addGoalStep, { error }] = useMutation(ADD_GOAL_STEP);

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const { data } = await addGoalStep({
  //         variables: { name },
  //       });
  //       window.location.reload();
  //       console.log(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div>
      {data &&
        data.me.goals.map((goal) => (
          <div key={goal._id}>
            {goal.goalSteps.map((goalStep) => (
              <div key={goalStep._id}>
                    <StepList/>
                    <p>
                    {goalStep.name} <br/>
                    ✏️ <br/>
                    🗑️
                    <ColorCheckboxes />
                    </p>

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
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add Step
                  </Button>
                </Box> */}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default GoalStepList;
