import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ResultDisplay() {
  const { playersChoice, winnerName } = useSelector(
    (state: RootState) => state.baguntasReducer
  );

  return (
    <Box className="w-full flex flex-col items-center ">
      <Box className="flex items-center">
        <Box className="min-w-[80px] min-h-[80px] flex flex-col items-center justify-center p-4">
          <Typography className="font-semibold text-lg">
            {playersChoice.player1.name}
          </Typography>
          <Typography className="text-2xl mt-2">
            {playersChoice.player1.choice}
          </Typography>
        </Box>
        <Typography className="font-bold text-xl mx-3">VS</Typography>
        <Box className="min-w-[80px] min-h-[80px] flex flex-col items-center justify-center p-4">
          <Typography className="font-semibold text-lg">
            {playersChoice.player2.name}
          </Typography>
          <Typography className="text-2xl mt-2">
            {playersChoice.player2.choice}
          </Typography>
        </Box>
      </Box>
      <Box className="mt-4 flex flex-col items-center mb-3">
        <Typography className="text-3xl font-bold">Winner</Typography>
        <Typography color="secondary" className="text-2xl font-semibold">
          {winnerName}
        </Typography>
      </Box>
    </Box>
  );
}
