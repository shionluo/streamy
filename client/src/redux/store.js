// Import
import { createStore, applyMiddleware } from 'redux';

// Import - Reducers
import rootReducer from './root.reducer';

// ----------------------------------------------------------------------------------------- //

const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
