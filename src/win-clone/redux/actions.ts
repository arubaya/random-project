// import { GameMode, PlayersChoiceData, RoomData } from '..';
import { TaskManagerData } from '..';
import { HOME_POPUP, TASK_MANAGER } from './types';

export const setIsHomePopup = (data: boolean) => ({
  type: HOME_POPUP,
  payload: data,
});

export const setTaskManagerData = (data: TaskManagerData[]) => ({
  type: TASK_MANAGER,
  payload: data,
});
