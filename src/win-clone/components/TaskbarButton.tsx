import React from 'react';
import { Box } from '@mui/material';

interface TaskbarButtonProps {
  icon: string;
}

export default function TaskbarButton({ icon }: TaskbarButtonProps) {
  return (
    <Box className="w-[40px] h-[40px] hover:bg-white active:p-3 p-2 rounded transition-all select-none">
      <img src={icon} alt="widget" className="w-full" />
    </Box>
  );
}
