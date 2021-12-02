import React, { useState } from "react";

import Button from "@mui/material/Button";

function GoalStepForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !props.edit ? (
    <div>
      <form className="step-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a step"
          value={input}
          name="text"
          className="step-input"
          onChange={handleChange}
        ></input>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add
        </Button>
      </form>
    </div>
  ) : (
    <div>
      <h3>{props.edit.value}</h3>
      <form className="step-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="step-input"
          onChange={handleChange}
        ></input>
                <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default GoalStepForm;
