import { WinCloneInitialState } from '../';
import { HOME_POPUP, TASK_MANAGER } from './types';

const initialState: WinCloneInitialState = {
  isHomePopup: false,
  tasksManager: [],
};

const reducer = (
  state: WinCloneInitialState = initialState,
  action: Action
) => {
  switch (action.type) {
    case HOME_POPUP:
      return {
        ...state,
        isHomePopup: action.payload as typeof state.isHomePopup,
      };
    case TASK_MANAGER:
      return {
        ...state,
        tasksManager: action.payload as typeof state.tasksManager,
      };
    default:
      return state;
  }
};

export default reducer;
