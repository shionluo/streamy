// Import
import { createSelector } from 'reselect';

// ----------------------------------------------------------------------------------------- //

const selectAuth = state => state.auth;

export const authIsSignedInSelector = createSelector(
  [selectAuth],
  auth => auth.isSignedIn,
);

export const userIdSelector = createSelector([selectAuth], auth => auth.userId);
