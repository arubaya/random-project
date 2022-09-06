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
    const canvasEl = document.getElementById('canvas');
    setInterval(
      () =>
        setRandomMove(
          animateDiv(
            canvasEl?.offsetWidth as number,
            canvasEl?.offsetHeight as number
          )
        ),
      1000
    );
  }, []);

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center p-6">
      <Typography variant="h2" className="font-bold mb-4">
        Just fly free
      </Typography>
      <Box id="canvas" className="w-full h-full">
        <Box
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
