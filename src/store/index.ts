/**
 * Node module import
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Local module import
 */
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export const dispatch = store.dispatch;
export default store;
