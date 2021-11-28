import React from 'react';

const Goal = (props) => {
    const { goal } = props;
    return(
      <div>
          <div> 
        {goal._id} ({goal.name}) ({goal.steps})
        </div>
      </div>
    )
  }

  export default Goal;