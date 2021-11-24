import React, { useState } from "react";
import GoalForm from "./GoalForm";
import Goal from "./Goal";

function GoalList() {
  const [goal, setGoal] = useState([]);

  const addGoalItem = (item) => {
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    const newGoal = [item, ...goal];

    setGoal(newGoal);
  };

  // Function to mark bucket list item as complete
  const completeGoalItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedGoal = goal.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    setGoal(updatedGoal);
  };

  const removeGoalItem = (id) => {
    const updatedGoal = [...goal].filter((item) => item.id !== id);

    setGoal(updatedGoal);
  };

  const editGoalItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    setGoal((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is your goal?</h1>
      <GoalForm onSubmit={addGoalItem} />
      <Goal
        goal={goal}
        completeGoalItem={completeGoalItem}
        removeGoalItem={removeGoalItem}
        editGoalItem={editGoalItem}
      ></Goal>
    </div>
  );
}

export default GoalList;
