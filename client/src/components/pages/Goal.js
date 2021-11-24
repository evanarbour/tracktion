import React, { useState } from 'react';
import GoalForm from './GoalForm';

function Goal(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });


  const submitUpdate = (value) => {
    props.editGoalItem(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <GoalForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.goal.map((item, i) => (
    <div>
      <div key={item.id} onClick={() => props.completeGoalItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text })}> ✏️</p>
        <p onClick={() => props.removeGoalItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Goal;
