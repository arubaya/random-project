import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ResultDisplay from './ResultDisplay';
import ButtonItem from './ButtonItem';
import ChooseDisplay from './ChooseDisplay';
import { dispatch } from '../../store';
import { setIsLobby, setIsStarted, setYourChoice } from '../redux/actions';
import {
  handlePlayerMultiChoice,
  handleStartGame,
  restartGame,
  withBotGameplayMode,
} from '../services';
import { PeopleRounded } from '@mui/icons-material';
import { disconectSocket, socketRestartGame } from '../services/socketHandler';

export default function CanvasPlay() {
  const CHOICE_OPTION = [
    {
      display: '✊',
      value: '✊',
    },
    {
      display: '✌',
      value: '✌',
    },
    {
      display: '🖐',
      value: '🖐',
    },
  ];

  const { isResultDisplay, gameMode, roomData, isStarted } = useSelector(
    (state: RootState) => state.baguntasReducer
  );
  const [isWaitGame, setIsWaitGame] = React.useState(false);

  React.useEffect(() => {
    setIsWaitGame(false);
    if (!isResultDisplay) {
      dispatch(setIsStarted(false));
    }
  }, [isResultDisplay]);

  const handleChoose = (choice: string) => {
    if (!isWaitGame) {
      if (gameMode === 'single') {
        dispatch(setYourChoice(choice));
        withBotGameplayMode();
      } else {
        dispatch(setYourChoice(choice));
        handlePlayerMultiChoice(choice);
      }
      setIsWaitGame(true);
    }
  };

  const handleBackToLobby = () => {
    if (!isWaitGame) {
      if (gameMode === 'multi') {
        disconectSocket();
      }
      dispatch(setIsLobby(true));
    }
  };

  const handleRestartGame = () => {
    if (gameMode === 'multi') {
      socketRestartGame();
    }
    restartGame();
  };

  return (
    <Box className="w-full flex flex-col justify-center items-center">
      <Box
        className="flex flex-col min-w-[300px] w-fit p-5 rounded-3xl"
        sx={{
          boxShadow: '15px 15px 20px rgba(0,0,0,0.1), -15px -15px 20px #fffb',
        }}
      >
        <Box className="w-full flex flex-col items-center">
          <Typography variant="h2" className="font-bold mb-1">
            Baguntas
          </Typography>
          <Box
            sx={{
              boxShadow:
                'inset 5px 5px 10px rgba(0,0,0,0.2), inset -5px -5px 10px #fff',
            }}
            className="w-32 h-2 mt-2 rounded-full"
          />
        </Box>

        {/* Display Container */}
        <Box
          className="w-full flex flex-col p-4 mt-6 rounded-md"
          sx={{
            color: '#5166d6',
            boxShadow:
              'inset 5px 5px 10px rgba(0,0,0,0.1), inset -5px -5px 10px #fff',
          }}
        >
          {gameMode === 'multi' ? (
            <Box className="w-full flex justify-between mb-6 items-center">
              <Box className="w-fit flex items-center">
                <Typography variant="caption" color="text.secondary">
                  Room id:
                </Typography>
                <Typography variant="caption" className="ml-1 font-semibold">
                  {roomData.roomId}
                </Typography>
              </Box>
              <Box className="w-fit flex items-center">
                <PeopleRounded fontSize="small" color="secondary" />
                <Typography variant="caption" className="ml-1 font-semibold">
                  {roomData.roomPlayers}
                </Typography>
              </Box>
            </Box>
          ) : null}
          {isResultDisplay ? <ResultDisplay /> : <ChooseDisplay />}
        </Box>

        <Box className="mt-10" />
        {!isStarted && gameMode === 'multi' ? (
          <Box className="w-full flex mb-5">
            <ButtonItem
              isRestartButton={true}
              display="Start"
              onClick={() => handleStartGame()}
            />
          </Box>
        ) : null}

        {/* Button Reset Container */}
        {isResultDisplay ? (
          <Box className="w-full flex">
            <ButtonItem
              isRestartButton={true}
              display="Restart"
              onClick={() => handleRestartGame()}
            />
          </Box>
        ) : (
          <Box className="w-full flex justify-center items-center ">
            {/* Button Container */}
            {CHOICE_OPTION.map((data) => (
              <ButtonItem
                key={data.display}
                display={data.display}
                onClick={() => handleChoose(data.value)}
              />
            ))}
          </Box>
        )}
        <Box className="w-full flex mt-6">
          <ButtonItem
            isRestartButton={true}
            display="Back to Lobby"
            onClick={() => handleBackToLobby()}
          />
        </Box>
      </Box>
    </Box>
  );
}
