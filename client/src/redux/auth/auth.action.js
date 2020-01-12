// Import
import AuthTypes from './auth.type';

// ----------------------------------------------------------------------------------------- //

const { SIGN_IN, SIGN_OUT } = AuthTypes;

export const signIn = userId => ({
  type: SIGN_IN,
  payload: userId,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
