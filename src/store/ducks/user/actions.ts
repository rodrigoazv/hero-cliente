import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { UserTypes, User, UserResponse } from './types';
import { NotifyTypes } from '../notify/types';
import { sendRegister } from './service';
import { ApplicationState } from '../../index';

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;
export const sendRegisterAction = (data: User) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    const respData: UserResponse = await sendRegister(data);
    dispatch({ type: UserTypes.TOGGLE_MENU, payload: respData.token });
  } catch (error) {
    dispatch({ type: NotifyTypes.SET_MESSAGE, payload: 'Error' });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};
