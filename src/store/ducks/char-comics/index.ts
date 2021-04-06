import { Reducer } from 'redux';
import { CharComicsTypes, CharComicsState } from './types';

const INITIAL_STATE: CharComicsState = {
  comics: { offset: 1, limit: 1, total: 0, count: 0, results: [] },
  char: { offset: 1, limit: 1, total: 0, count: 0, results: [] },
};

const reducer: Reducer<CharComicsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CharComicsTypes.TOGGLE_COMICS:
      return { ...state, comics: action.payload };
    case CharComicsTypes.TOGGLE_CHAR:
      return { ...state, char: action.payload };
    default:
      return state;
  }
};

export default reducer;
