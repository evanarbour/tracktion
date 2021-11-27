import { MDCList } from "@material/list";
// const list = new MDCList(document.getElementById('my-list'));
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function GoalList() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      step: data.get("step"),
    });
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
          <Typography component="h1" variant="h5">
            Goal One
          </Typography>
          <div>
            <ul class="mdc-list">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Step one</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Step two</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Step three</span>
              </li>
            </ul>
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="step"
              label="New Step"
              name="step"
              autoComplete="step"
              autoFocus
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add Step
            </Button>
          </Box>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <ListAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Goal Two
          </Typography>
          <div>
            <ul class="mdc-list">
              <li class="mdc-list-item" tabindex="0">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Step one</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Step two</span>
              </li>
              <li class="mdc-list-item">
                <span class="mdc-list-item__ripple"></span>
                <span class="mdc-list-item__text">Step three</span>
              </li>
            </ul>
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="step"
              label="New Step"
              name="step"
              autoComplete="step"
              autoFocus
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add Step
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
