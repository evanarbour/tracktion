import * as React from 'react';
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ColorCheckboxes() {
  return (
    <div>

      <Checkbox {...label} color="success" />
      
    </div>
  );
}

export default ColorCheckboxes