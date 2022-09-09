import React from 'react';
import { Box } from '@mui/material';
import CanvasPlay from './components/CanvasPlay';
import Lobby from './components/Lobby';
import { useSelector } from 'react-redux';

export default function BaguntasPage() {
  const { isLobby } = useSelector((state: RootState) => state.baguntasReducer);

  return (
    <Box className="w-full h-full flex flex-col p-6">
      {isLobby ? <Lobby /> : <CanvasPlay />}
    </Box>
  );
}
