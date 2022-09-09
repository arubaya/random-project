import React from 'react';
import { Box, BoxProps, styled, TextField, Typography } from '@mui/material';
import { GameMode, MultiPlayerMode } from '..';
import store, { dispatch } from '../../store';
import { setGameMode, setIsLobby, setRoomData } from '../redux/actions';
import { multiPlayerGameMode } from '../services';

const StyledButton = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '16px',
  borderRadius: '6px',
  minWidth: '40px',
  cursor: 'pointer',
  userSelect: 'none',
  width: '100%',
  textAlign: 'center',
  fontWeight: 600,
  boxShadow: '5px 5px 10px rgba(0,0,0,0.1), -5px -5px 10px #fff',
  '&:active': {
    boxShadow: 'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px #fff',
    color: '#f44336',
  },
}));

export default function Lobby() {
  const { roomData } = store.getState().baguntasReducer;

  const handleGameModeChoice = (gameMode: GameMode) => {
    dispatch(setGameMode(gameMode));
    dispatch(setIsLobby(false));
  };

  const handleMultiPlayerMode = (multiMode: MultiPlayerMode) => {
    multiPlayerGameMode(multiMode, handleGameModeChoice);
  };

  const handleChangeRoomName = (value: string) => {
    dispatch(setRoomData({ ...roomData, roomId: value }));
  };

  return (
    <Box className="w-full h-full flex flex-col justify-center items-center">
      <Box
        className="flex flex-col min-w-[300px] w-fit p-5 rounded-3xl items-center"
        sx={{
          boxShadow: '15px 15px 20px rgba(0,0,0,0.1), -15px -15px 20px #fffb',
        }}
      >
        <Typography variant="h2" className="font-bold text-2xl mt-2">
          BAGUNTAS
        </Typography>
        <Typography color="text.secondary" className="font-semibold mt-1 mb-6">
          Batu-Gunting-Kertas
        </Typography>
        <StyledButton
          onClick={() => handleGameModeChoice('single')}
          className="my-2"
        >
          Just Play
        </StyledButton>
        <StyledButton
          onClick={() => handleMultiPlayerMode('create')}
          className="my-2"
        >
          Create Room
        </StyledButton>
        <Box
          className="w-full flex flex-col p-4 mt-10 rounded-md mb-2"
          sx={{
            color: '#5166d6',
            boxShadow:
              'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px #fff',
          }}
        >
          <TextField
            value={roomData.roomId}
            onChange={({ target }) => handleChangeRoomName(target.value)}
            placeholder="Room Id"
            variant="standard"
          />
        </Box>
        <StyledButton
          onClick={() => handleMultiPlayerMode('join')}
          className="my-2"
        >
          Join Room
        </StyledButton>
      </Box>
    </Box>
  );
}
