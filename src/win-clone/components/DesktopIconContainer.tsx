import React from 'react';
import { Box, Typography } from '@mui/material';

interface DesktopIconContainerProps {
  icon: string;
  title: string;
  isForHome?: boolean;
}

export default function DesktopIconContainer({
  icon,
  title,
  isForHome,
}: DesktopIconContainerProps) {
  return (
    <Box className="w-20 h-16 flex flex-col items-center justify-center my-2 mx-1 hover:bg-white/10 border hover:border-white/20 hover:border-solid select-none">
      <Box className={`${isForHome ? 'h-6' : 'h-8'} flex`}>
        <img src={icon} alt={title} className="h-full" />
      </Box>
      <Typography
        variant="caption"
        sx={{
          ...(isForHome
            ? {
                textShadow: 'none',
                color: 'black',
                fontSize: '10px',
              }
            : {
                textShadow: '1px 1px 2px #000',
                color: 'white',
                fontSize: '12px',
              }),
        }}
        className="truncate w-full mt-1 text-center"
      >
        {title}
      </Typography>
    </Box>
  );
}
