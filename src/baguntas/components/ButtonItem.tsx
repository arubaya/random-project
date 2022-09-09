import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface ButtonItemProps extends BoxProps {
  display: string;
  isRestartButton?: boolean;
}

export default function ButtonItem({
  display,
  isRestartButton,
  ...props
}: ButtonItemProps) {
  return (
    <Box
      {...props}
      className={`min-w-[40px] p-4 rounded-md cursor-pointer select-none ${
        isRestartButton
          ? 'text-base text-red-500 font-semibold w-full text-center'
          : 'text-4xl'
      } mx-3`}
      sx={{
        boxShadow: '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px #fff',
        '&:active': {
          boxShadow:
            'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px #fff',
          color: '#f44336',
        },
      }}
    >
      {display}
    </Box>
  );
}
