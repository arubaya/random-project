import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ChooseDisplay() {
  const { yourChoice, countDown } = useSelector(
    (state: RootState) => state.baguntasReducer
  );

  return (
    <Box className="w-full flex flex-col items-center ">
      <Box className="flex items-center flex-col">
        <Typography className="font-semibold text-lg" color="text.secondary">
          Counting Down
        </Typography>
        <Typography className="font-semibold text-2xl" color="secondary">
          {countDown}
        </Typography>
      </Box>
      <Box className="mt-4 flex flex-col items-center mb-3">
        <Typography className="text-xl font-bold">Your Choice</Typography>
        <Typography
          color="secondary"
          className="text-2xl font-semibold p-2 min-h-[48px]"
        >
          {yourChoice}
        </Typography>
      </Box>
    </Box>
  );
}
