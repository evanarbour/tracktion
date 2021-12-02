import React, { useState } from "react";
import GoalStepForm from "./GoalStepForm";
import GoalStep from "./GoalStep";

function StepList() {
  const [steplist, setStepList] = useState([]);

  const addGoalStepItem = (item) => {
    if (!item.text) {
      return;
    }

    const newGoalStepItem = [item, ...steplist];

    setStepList(newGoalStepItem);
  };

  const completeGoalStepItem = (id) => {
    let updatedGoalStepItem = steplist.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setStepList(updatedGoalStepItem);
  };

  const removeGoalStepItem = (id) => {
    const updatedGoalStepItem = [...steplist].filter((item) => item.id !== id);

    setStepList(updatedGoalStepItem);
  };

  const editGoalStepItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setStepList((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <GoalStepForm onSubmit={addGoalStepItem} />
      <GoalStep
        steplist={steplist}
        completeGoalStepItem={completeGoalStepItem}
        removeGoalStepItem={removeGoalStepItem}
        editGoalStepItem={editGoalStepItem}
      >
          
      </GoalStep>
    </div>
  );
}

export default StepList;
