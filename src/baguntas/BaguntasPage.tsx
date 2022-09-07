import React from 'react';
import { Box } from '@mui/material';
import CanvasPlay from './components/CanvasPlay';

export default function BaguntasPage() {
  return (
    <Box className="w-full h-full flex flex-col p-6">
      <CanvasPlay />
    </Box>
  );
}
