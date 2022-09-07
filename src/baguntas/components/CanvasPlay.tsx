import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ResultDisplay from './ResultDisplay';
import ButtonItem from './ButtonItem';
import ChooseDisplay from './ChooseDisplay';
import { dispatch } from '../../store';
import { setYourChoice } from '../redux/actions';
import { restartGame, withBotGameplayMode } from '../services';

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

  const { isResultDisplay } = useSelector(
    (state: RootState) => state.baguntasReducer
  );
  const [isWaitGame, setIsWaitGame] = React.useState(false);

  React.useEffect(() => {
    setIsWaitGame(false);
  }, [isResultDisplay]);

  const handleChoose = (choice: string) => {
    if (!isWaitGame) {
      dispatch(setYourChoice(choice));
      withBotGameplayMode();
      setIsWaitGame(true);
    }
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
          {isResultDisplay ? <ResultDisplay /> : <ChooseDisplay />}
        </Box>

        <Box className="mt-10" />
        {/* Button Reset Container */}
        {isResultDisplay ? (
          <Box className="w-full flex justify-end">
            <ButtonItem
              isRestartButton={true}
              display="Restart"
              onClick={() => restartGame()}
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
      </Box>
    </Box>
  );
}
