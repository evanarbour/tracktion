import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { ADD_GOAL_STEP } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";
import Goal from "./Goal";

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

const theme = createTheme();

// export default function GoalList() {
//   const { loading, data } = useQuery(QUERY_USER);
//   const user = data?.user || [];

//   return (
//     <div>
//       <ul>
//         {data &&
//         data.user.goals.map((goal) => (
//           <Goal key={goal.name} goal={goal} />
//         ))}
//       </ul>
//     </div>
//   )
// }

// const GoalList = ({ goals }) => {
//   return (
//     <div>
//       {goals &&
//       goals.map((goal) => (
//         <div key={goal._id}>
//           <div><h4>
//             {goal.name}
//           </h4>
//           <p>{goal.steps}</p>
//           <p>{goal.createdAt}</p>
//           </div>
//           </div>
//       ))}
//     </div>
//   )
// }

const GET_GOALS = gql`
query GetGoals($username:String!) {
  user(username:$username) {
    goals {
      _id
      name
      goalSteps {
        _id
        name
      }
    }
  }
}
`;

const GoalList = () => {

function GoalName ({ onGoalSelected }) {

const { loading, data } = useQuery(GET_GOALS);
  const user = data?.user || [];

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
          <select name="goal" onChange={onGoalSelected}>
            {data.user.goals.map(goal => (
              <option key={goal._id} value={goal.name}>
                {goal.name}</option>
            ))}
          </select>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
}

// const GoalList = () => {
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
//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="lg">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <ListAltIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Goal One
//           </Typography>

//           <Box
//             component="form"
//             onSubmit={handleFormSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               fullWidth
//               id="step"
//               label="Add Step"
//               value={name}
//               onChange={(event) => setName(event.target.value)}
//               name="step"
//               autoComplete="step"
//               autoFocus
//             />
//             <div>
//               <Box sx={{ p: 2, m: 2, bgcolor: "#f5f5f5", borderRadius: 4 }}>
//                 { }
//               </Box>
//             </div>
//             <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
//               Add Step
//             </Button>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

export default GoalList;
