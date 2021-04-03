import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { UserTypes, User, UserResponse } from './types';
import { NotifyTypes } from '../notify/types';
import { sendRegister, sendLogin } from './service';
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
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: { severity: 'error', active: true, message: error },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};

export const sendLoginAction = (data: User) => async (dispatch: Dispatch) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    const respData: UserResponse = await sendLogin(data);
    dispatch({ type: UserTypes.TOGGLE_MENU, payload: respData.token });
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        message: error.response.data.error.message,
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};
