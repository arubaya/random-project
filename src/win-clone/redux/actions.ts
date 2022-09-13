// import { GameMode, PlayersChoiceData, RoomData } from '..';
import { HOME_POPUP } from './types';

export const setIsHomePopup = (data: boolean) => ({
  type: HOME_POPUP,
  payload: data,
});
