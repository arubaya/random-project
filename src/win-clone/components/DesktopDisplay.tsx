import React from 'react';
import { Box } from '@mui/material';
import DesktopIconContainer from './DesktopIconContainer';

import desktopIconList from './defaultDesktopIconList';
import HomePopup from './HomePopup';

interface DesktopDisplayProps {
  taskbarHeight: number;
}

export default function DesktopDisplay({ taskbarHeight }: DesktopDisplayProps) {
  return (
    <Box
      sx={{ height: `calc(100vh - ${taskbarHeight}px)` }}
      className="w-full relative flex justify-center items-center"
    >
      {/* Desktop icons container */}
      <Box id="" className="w-full min-w-[60px] h-full absolute px-2 py-1 z-10">
        {desktopIconList.map((data) => (
          <DesktopIconContainer
            key={data.icon}
            icon={data.icon}
            title={data.title}
          />
        ))}
      </Box>

      <HomePopup />
    </Box>
  );
}
