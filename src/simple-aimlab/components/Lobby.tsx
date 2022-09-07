import React from 'react';
import { PlayCircleFilledRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import SelectInput from '../../components/SelectInput';

interface LobbyProps {
  levelData: {
    display: any;
    value: any;
  }[];
  setIntervalTime: any;
  setStart: any;
  shootCount: number;
  missCount: number;
}

export default function Lobby({
  levelData,
  setIntervalTime,
  setStart,
  missCount,
  shootCount,
}: LobbyProps) {
  const [levelChoose, setLevelChoose] = React.useState(0);

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center">
      <Box
        className="flex w-full flex-col items-center cursor-pointer"
        onClick={() => {
          if (levelChoose !== 0) setStart(true);
        }}
      >
        <PlayCircleFilledRounded sx={{ fontSize: '60px' }} />
        <Typography className="font-bold text-4xl mt-4">Start</Typography>
      </Box>
      <Box className="mt-4">
        <SelectInput
          label="Choose Level"
          datas={levelData}
          value={levelChoose}
          size="small"
          onChange={({ target }) => {
            setLevelChoose(target.value as number);
            setIntervalTime(target.value);
          }}
        />
      </Box>
      <Box className="flex items-center mt-4">
        <Typography variant="h5" className="font-bold">
          {`Last Hit: ${shootCount}`}
        </Typography>
        <Typography variant="h5" className="font-bold ml-3">
          {`Last Miss: ${missCount}`}
        </Typography>
      </Box>
    </Box>
  );
}
