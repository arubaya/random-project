import { BaguntasInitialState } from '../';
import {
  YOUR_CHOICE,
  YOUR_NAME,
  IS_RESULT,
  PLAYERS_CHOICE,
  WINNER_NAME,
  COUNT_DOWN,
} from './types';

const initialState: BaguntasInitialState = {
  yourChoice: '-',
  yourName: 'Player 1',
  winnerName: '',
  countDown: 3,
  isResultDisplay: false,
  playersChoice: {
    player1: {
      choice: '',
      name: '',
    },
    player2: {
      choice: '',
      name: '',
    },
  },
};

const reducer = (
  state: BaguntasInitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    case YOUR_CHOICE:
      return {
        ...state,
        yourChoice: action.payload as typeof state.yourChoice,
      };
    case YOUR_NAME:
      return {
        ...state,
        yourName: action.payload as typeof state.yourName,
      };
    case IS_RESULT:
      return {
        ...state,
        isResultDisplay: action.payload as typeof state.isResultDisplay,
      };
    case PLAYERS_CHOICE:
      return {
        ...state,
        playersChoice: action.payload as typeof state.playersChoice,
      };
    case WINNER_NAME:
      return {
        ...state,
        winnerName: action.payload as typeof state.winnerName,
      };
    case COUNT_DOWN:
      return {
        ...state,
        countDown: action.payload as typeof state.countDown,
      };
    default:
      return state;
  }
};

export default reducer;
