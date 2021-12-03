import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";
import GoalForm from "../components/GoalForm";
import GoalList from "../components/GoalList";

import { QUERY_ME } from "../utils/queries";

const theme = createTheme();

const Dashboard = () => {
   const { loading, data } = useQuery(QUERY_ME);

  
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", textAlign: "center" }}
        >
          <Grid item xs={5}>
            <Box sx={{ p: 2, m: 5, bgcolor: "primary.main", borderRadius: 4 }}>
              <Typography component="h1" variant="h5">
                Current Goals:
              </Typography>
            </Box>

            <Card sx={{ p: 2, m: 2, bgcolor: "#f5f5f5", borderRadius: 4 }}>
              <Button component={Link} to="/goals" color="primary">
                <ul>
                  {data &&
                    data.me.goals.map((goal) => (
                      <div key={goal._id}>
                        <h5>{goal.name}</h5>
                      </div>
                    ))}
                </ul>
              </Button>
            </Card>
            <Box>
              <GoalForm />
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ p: 2, m: 5, bgcolor: "primary.main", borderRadius: 4 }}>
              <Typography component="h1" variant="h5">
                Current Habits:
              </Typography>
            </Box>
            <Box>
              <HabitForm />
            </Box>
            <Box>
              {loading ? <h2> loading... </h2> : <HabitList loading={loading} />}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Dashboard;
