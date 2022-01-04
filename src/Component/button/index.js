import React from 'react';
import Button from '@mui/material/Button';

function Index({ label, ...rest }) {
  return <Button {...rest}>{label}</Button>;
}

export default Index;
