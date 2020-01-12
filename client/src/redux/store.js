// Import
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Import - Reducers
import rootReducer from './root.reducer';

// ----------------------------------------------------------------------------------------- //

// Add Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// List of middlewares
const middlewares = [thunk];

// Import middlewares if in development environment
// if (process.env.NODE_ENV === 'development') {
//   middlewares.push();
// }

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
