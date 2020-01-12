// Import
import _ from 'lodash';

// Import - Types
import StreamTypes from './stream.types';

// ----------------------------------------------------------------------------------------- //

const {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} = StreamTypes;

const INITIAL_STATE = {};

const streamsReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  const { id } = payload;

  const reducer = {
    [CREATE_STREAM]: {
      ...state,
      [id]: payload,
    },
    [FETCH_STREAMS]: {
      ...state,
      ..._.mapKeys(payload, 'id'),
    },
    [FETCH_STREAM]: {
      ...state,
      [id]: payload,
    },
    [EDIT_STREAM]: {
      ...state,
      [id]: payload,
    },
    [DELETE_STREAM]: _.omit(state, payload),
  };

  return reducer[type] || state;
};

export default streamsReducer;
