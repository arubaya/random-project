import { combineReducers } from 'redux';

import baguntasReducer from '../baguntas/redux/reducer';

// Combine all reducers into one reducer
const reducers = combineReducers({
  baguntasReducer,
});

export default reducers;
