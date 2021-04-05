import { Reducer } from 'redux';
import { LocalState, LocalTypes } from './types';

const INITIAL_STATE: LocalState = {
  search: {
    name: '',
    url: '',
  },
};

const reducer: Reducer<LocalState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LocalTypes.SET_SEARCH_LOCAL:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default reducer;
