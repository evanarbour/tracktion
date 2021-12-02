import React, { useState } from "react";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

// import redux 
import { useDispatch, useSelector } from 'react-redux';

const SingleHabit = ({ habit }) => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
    console.log(habit);

    

    return(
        <div>
            <Card>
                <CardHeader
                    title={habit.name}
                    subheader={habit.createdAt}
                >
                </CardHeader>
                <CardContent>
                    {habit.tracktionDays.map((day, index) => (
                        <IconButton key={index} color={toggle ? 'success' : 'error'} onClick={handleClick} >
                        <CircleOutlinedIcon />
                      </IconButton>
                    ))}
                </CardContent>
                
            </Card>
        </div>
        
            
        

    )


}

export default SingleHabit;


// {
//     "me": {
//         "__typename": "User",
//         "_id": "61a5aaa3796bc0f08c2384f6",
//         "username": "evant22",
//         "email": "evant22@mail.com",
//         "habits": [
//             {
//                 "__typename": "Habit",
//                 "_id": "61a7e98b0454e02572b77aed",
//                 "name": "test",
//                 "tracktionDays": [
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false,
//                     false
//                 ],
//                 "createdAt": "Dec 1st, 2021 at 1:30 pm"
//             }
//         ],
//         "sharedHabits": [],
//         "goals": []
//     }
// }

//dashboard.js vvv
// {
//     "__typename": "User",
//     "_id": "61a5aaa3796bc0f08c2384f6",
//     "username": "evant22",
//     "email": "evant22@mail.com",
//     "habits": [
//         {
//             "__typename": "Habit",
//             "_id": "61a7e98b0454e02572b77aed",
//             "name": "test",
//             "tracktionDays": [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             "createdAt": "Dec 1st, 2021 at 1:30 pm"
//         }
//     ],
//     "sharedHabits": [],
//     "goals": []
// }

// SINGLE HABIT
// {
//     "__typename": "Habit",
//     "_id": "61a7e98b0454e02572b77aed",
//     "name": "test",
//     "tracktionDays": [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false
//     ],
//     "createdAt": "Dec 1st, 2021 at 1:30 pm"
// }