import { PlayersChoiceData } from '..';
import {
  YOUR_CHOICE,
  YOUR_NAME,
  PLAYERS_CHOICE,
  WINNER_NAME,
  IS_RESULT,
  COUNT_DOWN,
} from './types';

export const setYourChoice = (data: string) => ({
  type: YOUR_CHOICE,
  payload: data,
});

export const setYourName = (data: string) => ({
  type: YOUR_NAME,
  payload: data,
});

export const setWinnerName = (data: string) => ({
  type: WINNER_NAME,
  payload: data,
});

export const setPlayersChoice = (data: PlayersChoiceData) => ({
  type: PLAYERS_CHOICE,
  payload: data,
});

export const setIsResultDisplay = (data: boolean) => ({
  type: IS_RESULT,
  payload: data,
});

export const setCountingDown = (data: number) => ({
  type: COUNT_DOWN,
  payload: data,
});
