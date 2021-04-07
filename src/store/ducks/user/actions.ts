import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { UserTypes, User, UserResponse, UserLogin } from './types';
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
    dispatch({ type: UserTypes.TOGGLE_REGISTER, payload: respData.data.token });
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        errorType: error.response.data.error.type,
        message: error.response.data.error.message,
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};

export const sendLoginAction = (data: UserLogin) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });

  try {
    const respData: UserResponse = await sendLogin(data);
    dispatch({ type: UserTypes.TOGGLE_LOGIN, payload: respData.data.token });
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        errorType: error.response.data.error.type,
        message: error.response.data.error.message,
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};

export const setAuth = () => async (dispatch: Dispatch) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });

  try {
    dispatch({ type: UserTypes.TOGGLE_LOGOUT, payload: '' });
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        errorType: error.response.data.error.type,
        message: error.response.data.error.message,
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};
