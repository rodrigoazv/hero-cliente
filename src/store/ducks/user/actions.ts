import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import {
  UserTypes,
  User,
  UserResponse,
  UserLogin,
  likeCharComics,
} from './types';
import { NotifyTypes } from '../notify/types';
import {
  sendRegister,
  sendLogin,
  likeCharComic,
  refetchLike,
  getUser,
  sendUpdate,
} from './service';
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
export const sendUpdateAction = (data: User) => async (dispatch: Dispatch) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    const respData: UserResponse = await sendUpdate(data);
    dispatch({ type: UserTypes.TOGGLE_REGISTER, payload: respData.data.token });
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'success',
        active: true,
        errorType: '',
        message: 'User updated',
      },
    });
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
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'success',
        active: true,
        successType: 'auth',
        errorType: '',
        message: '',
      },
    });
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

export const getUserAction = () => async (dispatch: Dispatch) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    const respData: UserResponse = await getUser();
    dispatch({ type: UserTypes.TOGGLE_USER, payload: respData.data.user });
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

export const refetchCharComicLikeAction = () => async (dispatch: Dispatch) => {
  try {
    const respData = await refetchLike();
    dispatch({
      type: UserTypes.TOGGLE_CHAR_LIKE,
      payload: respData.data.likedChar,
    });

    dispatch({
      type: UserTypes.TOGGLE_COMIC_LIKE,
      payload: respData.data.likedComic,
    });
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
  }
};

export const likeCharComicAction = (data: likeCharComics) => async (
  dispatch: Dispatch,
) => {
  try {
    await likeCharComic(data);
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'success',
        active: true,
        errorType: '',
        successType: 'like',
        message: !data.like ? 'Like success' : 'Deslike success',
      },
    });
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
  }
};
