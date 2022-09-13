import { WinCloneInitialState } from '../';
import { HOME_POPUP } from './types';

const initialState: WinCloneInitialState = {
  isHomePopup: false,
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
    default:
      return state;
  }
};

export default reducer;
