import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  token: '',
  likedComic: [{ comicId: '' }],
  likedChar: [{ charId: '' }],
  auth: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.TOGGLE_REGISTER:
      return { ...state, token: action.payload, auth: true };
    case UserTypes.TOGGLE_LOGIN:
      return { ...state, token: action.payload, auth: true };
    case UserTypes.TOGGLE_LOGOUT:
      return { ...state, token: action.payload, auth: false };
    case UserTypes.TOGGLE_CHAR_LIKE:
      return { ...state, likedChar: action.payload };
    case UserTypes.TOGGLE_COMIC_LIKE:
      return { ...state, likedComic: action.payload };
    default:
      return state;
  }
};

export default reducer;
