// Import
import { createStore, applyMiddleware } from 'redux';

// Import - Reducers
import rootReducer from './root.reducer';

// ----------------------------------------------------------------------------------------- //

const middlewares = [];

// Import middlewares if in development environment
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push();
// }

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
