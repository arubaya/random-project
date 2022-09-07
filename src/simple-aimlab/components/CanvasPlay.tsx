import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import Elon from '../../assets/images/elon.png';

interface CanvasPlayProps {
  shootCount: number;
  missCount: number;
  setStart: any;
  handleClickTarget: any;
  move: { top: number; left: number };
  hide: boolean;
}

export default function CanvasPlay({
  handleClickTarget,
  setStart,
  shootCount,
  missCount,
  hide,
  move,
}: CanvasPlayProps) {
  return (
    <Box className="w-full h-full flex flex-col justify-center items-center">
      <Box className="flex items-center mb-4">
        <Typography variant="h5" className="font-bold">
          {`Target Hit: ${shootCount}`}
        </Typography>
        <Typography variant="h5" className="font-bold ml-3">
          {`Target Miss: ${missCount}`}
        </Typography>
        <Button color="error" className="ml-3" onClick={() => setStart(false)}>
          Stop
        </Button>
      </Box>
      <Box id="canvas" className="relative w-full h-full cursor-crosshair">
        <Box
          onMouseDown={(e) => handleClickTarget(e)}
          onTouchStart={(e) => handleClickTarget(e)}
          id="target-miss"
          className="z-10 w-full h-full absolute"
        />
        <Box
          id="target"
          onMouseDown={(e) => handleClickTarget(e)}
          onTouchStart={(e) => handleClickTarget(e)}
          sx={{
            ...move,
            display: hide ? 'none' : 'block',
            backgroundImage: `url(${Elon})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
          className="rounded-full w-14 h-14 m-0 z-20 relative"
        ></Box>
      </Box>
    </Box>
  );
}
