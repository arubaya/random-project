import React from 'react';
import { Box, Typography } from '@mui/material';

interface RecomendedAppContainerProps {
  icon: string;
  title: string;
  desc: string;
}

export default function RecomendedAppContainer({
  desc,
  icon,
  title,
}: RecomendedAppContainerProps) {
  return (
    <Box className="w-fit h-9 flex items-center justify-between my-2 mx-1 hover:bg-white/10 border hover:border-white/20 hover:border-solid select-none">
      <Box className="h-7 flex">
        <img src={icon} alt={title} className="h-full" />
      </Box>
      <Box className="flex flex-col ml-3">
        <Typography variant="caption" className="text-xs font-medium">
          {title}
        </Typography>
        <Typography variant="caption" className="text-xs text-neutral-600">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
