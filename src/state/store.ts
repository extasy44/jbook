import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import reducer from './reducers/cellsReducers';

export const store = createStore(reducer, {}, applyMiddleware);
