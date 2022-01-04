import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MyCard = ({ label, data, ...rest }) => {
  return (
    <Card {...rest} align="center">
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
          style={{ fontSize: '13px' }}
        >
          {label}
        </Typography>
        <Typography variant="h4" component="h2">
          <Box fontWeight="fontWeightBold" m={1}>
            {data}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyCard;
