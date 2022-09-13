import React from 'react';
import { Box } from '@mui/material';
import Taskbar from './components/Taskbar';
import DesktopDisplay from './components/DesktopDisplay';

import BackgroundImage from './assets/images/bg-light.jpg';

export default function WinClonePage() {
  const TASKBAR_HEIGH: number = 48;

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-screen overflow-hidden"
    >
      <DesktopDisplay taskbarHeight={TASKBAR_HEIGH} />
      <Taskbar taskbarHeight={TASKBAR_HEIGH} />
    </Box>
  );
}
