import React, { useState } from 'react';
import GoalStepForm from './GoalStepForm';
import ColorCheckboxes from './Checkbox';
import Typography from '@mui/material/Typography'

function GoalStep(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    props.editGoalStepItem(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <GoalStepForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.steplist.map((item, i) => (
    <div

    >
      <div key={item.id} onClick={() => props.completeGoalStepItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <Typography alignLeft>
        <p onClick={() => setEdit({ id: item.id, value: item.text, priority: item.priority })}> ✏️</p>
        <p onClick={() => props.removeGoalStepItem(item.id)}> 🗑️ </p>
        <ColorCheckboxes />
        </Typography>
      </div>
    </div>
  ));
}

export default GoalStep;
