import { GameMode, PlayersChoiceData, RoomData } from '..';
import {
  YOUR_CHOICE,
  YOUR_NAME,
  PLAYERS_CHOICE,
  WINNER_NAME,
  IS_RESULT,
  COUNT_DOWN,
  GAME_MODE,
  IS_LOBBY,
  ROOM_DATA,
  IS_STARTED,
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

export const setGameMode = (data: GameMode) => ({
  type: GAME_MODE,
  payload: data,
});

export const setIsLobby = (data: boolean) => ({
  type: IS_LOBBY,
  payload: data,
});

export const setRoomData = (data: RoomData) => ({
  type: ROOM_DATA,
  payload: data,
});

export const setIsStarted = (data: boolean) => ({
  type: IS_STARTED,
  payload: data,
});
