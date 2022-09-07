import React from 'react';
import { Box, Typography } from '@mui/material';
import { animateDiv } from './services';

import CanvasPlay from './components/CanvasPlay';
import Lobby from './components/Lobby';

export default function SimpleAimLabPage() {
  const LEVEL_OPT = [
    {
      display: '-',
      value: 0,
    },
    {
      display: 'Easy',
      value: 1000,
    },
    {
      display: 'Medium',
      value: 700,
    },
    {
      display: 'Hard',
      value: 500,
    },
  ];
  const [intervalTime, setIntervalTime] = React.useState(1000);
  const [shootCount, setShootCount] = React.useState(0);
  const [missCount, setMissCount] = React.useState(0);
  const [hide, setHide] = React.useState(false);
  const [start, setStart] = React.useState(false);

  const [randomMove, setRandomMove] = React.useState({
    top: 0,
    left: 0,
  });

  React.useEffect(() => {
    let interval: NodeJS.Timer;
    if (start) {
      setShootCount(0);
      setMissCount(0);
      interval = setInterval(() => handleRandomMove(), intervalTime);
    }
    return () => {
      clearInterval(interval);
    };
  }, [intervalTime, start]);

  const handleRandomMove = () => {
    const canvasEl = document.getElementById('canvas');
    setRandomMove(
      animateDiv(
        canvasEl?.offsetWidth as number,
        canvasEl?.offsetHeight as number
      )
    );
    setHide(false);
  };

  const handleClickTarget = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const el = e.currentTarget.id;
    if (el === 'target-miss') {
      setMissCount(missCount + 1);
    } else {
      setShootCount(shootCount + 1);
      setHide(true);
      // handleRandomMove();
    }
  };

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center p-6">
      <Typography variant="h2" className="font-bold mb-4">
        Simple Aim Lab
      </Typography>
      {start ? (
        <CanvasPlay
          handleClickTarget={handleClickTarget}
          hide={hide}
          missCount={missCount}
          move={randomMove}
          setStart={setStart}
          shootCount={shootCount}
        />
      ) : (
        <Lobby
          levelData={LEVEL_OPT}
          setIntervalTime={setIntervalTime}
          setStart={setStart}
          missCount={missCount}
          shootCount={shootCount}
        />
      )}
    </Box>
  );
}
