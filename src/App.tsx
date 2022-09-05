/**
 * Node module import
 */
import React from 'react';
import { Box, Button } from '@mui/material';

/**
 * Local module import
 */
import Router from './navigation';

function App() {
  return (
    <Box className="min-w-screen min-h-screen">
      <Router />
    </Box>
  );
}

export default App;
