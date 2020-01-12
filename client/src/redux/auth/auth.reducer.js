// Import
import AuthTypes from './auth.type';

// ----------------------------------------------------------------------------------------- //

const { SIGN_IN, SIGN_OUT } = AuthTypes;

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  const reducer = {
    [SIGN_IN]: {
      ...state,
      isSignedIn: true,
      userId: payload,
    },
    [SIGN_OUT]: {
      ...state,
      isSignedIn: false,
      userId: null,
    },
  };

  return reducer[type] || state;
};

export default authReducer;
