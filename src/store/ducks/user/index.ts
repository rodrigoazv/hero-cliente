import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  token: '',
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
    default:
      return state;
  }
};

export default reducer;
