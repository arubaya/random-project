import { PlayerData, PlayersChoiceData } from '..';
import store, { dispatch } from '../../store';
import {
  setCountingDown,
  setIsResultDisplay,
  setPlayersChoice,
  setWinnerName,
  setYourChoice,
} from '../redux/actions';

const botChoiceBrain = () => {
  const option = ['🖐', '✌', '✊'];
  const randomChoice = option[Math.floor(Math.random() * option.length)];
  return randomChoice;
};

const handleGameWinner = ({ player1, player2 }: PlayersChoiceData) => {
  let winnerPlayer: string;

  if (player1.choice == '🖐' && player2.choice == '✌') {
    return (winnerPlayer = player2.name);
  } else if (player1.choice == '🖐' && player2.choice == '✊') {
    return (winnerPlayer = player1.name);
  } else if (player1.choice == '✌' && player2.choice == '🖐') {
    return (winnerPlayer = player1.name);
  } else if (player1.choice == '✌' && player2.choice == '✊') {
    return (winnerPlayer = player2.name);
  } else if (player1.choice == '✊' && player2.choice == '🖐') {
    return (winnerPlayer = player2.name);
  } else if (player1.choice == '✊' && player2.choice == '✌') {
    return (winnerPlayer = player1.name);
  } else {
    return (winnerPlayer = 'SERI');
  }
};

export const withBotGameplayMode = () => {
  const { yourChoice, yourName } = store.getState().baguntasReducer;
  const botChoice = botChoiceBrain();
  const botName = 'Bot';

  let countDownNum = 2;
  let interval: NodeJS.Timer;

  interval = setInterval(() => {
    if (countDownNum === 0) {
      dispatch(
        setPlayersChoice({
          player1: {
            choice: yourChoice,
            name: yourName,
          },
          player2: {
            choice: botChoice,
            name: botName,
          },
        })
      );

      dispatch(
        setWinnerName(
          handleGameWinner({
            player1: {
              choice: yourChoice,
              name: yourName,
            },
            player2: {
              choice: botChoice,
              name: botName,
            },
          })
        )
      );

      dispatch(setIsResultDisplay(true));
      clearInterval(interval);
    } else {
      dispatch(setCountingDown(countDownNum));
      countDownNum--;
    }
  }, 1000);
};

export const restartGame = () => {
  dispatch(
    setPlayersChoice({
      player1: {
        choice: '',
        name: '',
      },
      player2: {
        choice: '',
        name: '',
      },
    })
  );

  dispatch(setWinnerName(''));
  dispatch(setIsResultDisplay(false));
  dispatch(setYourChoice('-'));
  dispatch(setCountingDown(3));
};
