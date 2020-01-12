// Import
import { createSelector } from 'reselect';

// ----------------------------------------------------------------------------------------- //

const streamsSelector = state => state.streams;

export const streamSelector = id =>
  createSelector([streamsSelector], streams => streams[id]);

export const streamsArraySelector = createSelector([streamsSelector], streams =>
  Object.values(streams),
);
