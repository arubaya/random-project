import { BaguntasInitialState } from '../';
import {
  YOUR_CHOICE,
  YOUR_NAME,
  IS_RESULT,
  PLAYERS_CHOICE,
  WINNER_NAME,
  COUNT_DOWN,
  GAME_MODE,
  IS_LOBBY,
  ROOM_DATA,
  IS_STARTED,
} from './types';

const initialState: BaguntasInitialState = {
  isStarted: false,
  yourChoice: '-',
  yourName: 'You',
  winnerName: '',
  isLobby: true,
  roomData: {
    roomId: '',
    roomPlayers: 0,
  },
  countDown: 3,
  isResultDisplay: false,
  gameMode: 'single',
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
    case GAME_MODE:
      return {
        ...state,
        gameMode: action.payload as typeof state.gameMode,
      };
    case IS_LOBBY:
      return {
        ...state,
        isLobby: action.payload as typeof state.isLobby,
      };
    case ROOM_DATA:
      return {
        ...state,
        roomData: action.payload as typeof state.roomData,
      };
    case IS_STARTED:
      return {
        ...state,
        isStarted: action.payload as typeof state.isStarted,
      };
    default:
      return state;
  }
};

export default reducer;
