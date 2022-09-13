import { combineReducers } from 'redux';

import baguntasReducer from '../baguntas/redux/reducer';
import winCloneReducer from '../win-clone/redux/reducer';

// Combine all reducers into one reducer
const reducers = combineReducers({
  baguntasReducer,
  winCloneReducer,
});

export default reducers;
