import * as React from "react";
import { Link } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Dashboard() {
    
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid container sx={{ textAlign: 'left' }}>
                    tracktion
                </Grid>
                <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center' }}>
                    <Grid item xs={5}>
                            <Box sx={{ p: 2, m: 5,  bgcolor: 'primary.main', borderRadius: 4 }}>
                                <Typography component="h1" variant="h5">
                                    Current Goals:
                                </Typography>
                            </Box>
                            <Box sx={{ p: 2, m: 2, bgcolor: '#f5f5f5', borderRadius: 4 }}>
                                <Button component={Link} to="/goals" color="primary">
                                    Goal ONE
                                </Button>
                            </Box>
                            <Box sx={{ p: 2, m: 2, bgcolor: '#f5f5f5', borderRadius: 4 }}>
                                <Button component={Link} to="/goals" color="primary">
                                    Goal TWO
                                </Button>
                            </Box>
                            <Box sx={{ p: 2, m: 2, bgcolor: '#f5f5f5', borderRadius: 4 }}>
                                <Button component={Link} to="/goals" color="primary">
                                    Goal THREE
                                </Button>
                            </Box>
                    </Grid>
                    <Grid item xs={5}>
                            <Box sx={{ p: 2, m: 5,  bgcolor: 'primary.main', borderRadius: 4 }}>
                                <Typography component="h1" variant="h5">
                                    Current Habits:
                                </Typography>
                            </Box>
                            <Box sx={{ p: 2, m: 2, bgcolor: '#f5f5f5', borderRadius: 4 }}>
                                <Button component={Link} to="/goals" color="primary">
                                    Habit ONE
                                </Button>
                            </Box>
                            <Box sx={{ p: 2, m: 2, bgcolor: '#f5f5f5', borderRadius: 4 }}>
                                <Button component={Link} to="/goals" color="primary">
                                    Habit TWO
                                </Button>
                            </Box>
                            <Box sx={{ p: 2, m: 2, bgcolor: '#f5f5f5', borderRadius: 4 }}>
                                <Button component={Link} to="/goals" color="primary">
                                    Habit THREE
                                </Button>
                            </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>





    )
}
