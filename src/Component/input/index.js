import React from 'react';
import TextField from '@mui/material/TextField';

function Input({ label, disable, ...rest }) {
  return (
    <div className="input-wrapper">
      <TextField
        id="outlined-basic"
        label={label}
        size="small"
        variant="outlined"
        className="input"
        disabled={disable}
        {...rest}
      />
    </div>
  );
}

export default Input;
