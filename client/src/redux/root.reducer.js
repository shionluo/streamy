// Import
import { combineReducers } from 'redux';

// Import - Reducers
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/auth.reducer';
import streamsReducer from './stream/stream.reducer';

// ----------------------------------------------------------------------------------------- //

const rootReducer = combineReducers({
  auth: authReducer,
  streams: streamsReducer,
  form: formReducer,
});

export default rootReducer;
