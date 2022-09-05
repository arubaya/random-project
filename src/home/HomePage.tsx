import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box>
      <Typography>Menu:</Typography>
      <NavLink to="/neumorphism-calc">Neumorphism Calculator</NavLink>
    </Box>
  );
}
