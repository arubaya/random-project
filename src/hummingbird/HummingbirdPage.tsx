import React from 'react';
import { Box, Typography } from '@mui/material';
import LottieAnimation from '../components/LottieAnimation';
import { animateDiv } from './services';

import * as animation from '../assets/animation/bird-flying.json';

export default function HummingbirdPage() {
  const [randomMove, setRandomMove] = React.useState({
    top: 0,
    left: 0,
  });

  React.useEffect(() => {
    setInterval(() => handleMove(), 2000);
  }, []);

  const handleMove = () => {
    const canvasEl = document.getElementById('canvas');
    setRandomMove(
      animateDiv(
        canvasEl?.offsetWidth as number,
        canvasEl?.offsetHeight as number
      )
    );
  };

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center p-6">
      <Typography variant="h2" className="font-bold mb-4">
        Just fly free
      </Typography>
      <Box id="canvas" className="w-full h-full">
        <Box
          onMouseOver={() => handleMove()}
          onClick={() => handleMove()}
          sx={{
            ...randomMove,
          }}
          className="transition-all duration-1000 w-32 h-32 m-0 relative"
        >
          <LottieAnimation animationData={animation} />
        </Box>
      </Box>
    </Box>
  );
}
