import React from 'react';
import InputLabel from '@mui/material/InputLabel';
const Input = ({ title, ...rest }) => {
  return (
    <InputLabel {...rest} shrink htmlFor="bootstrap-input">
      {title}
    </InputLabel>
  );
};

export default Input;
