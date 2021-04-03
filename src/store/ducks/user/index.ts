import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  token: '',
  auth: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.TOGGLE_MENU:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

export default reducer;
