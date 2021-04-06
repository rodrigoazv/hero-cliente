import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import {
  CharComicsTypes,
  CharResponse,
  ComicsResponse,
  SearchType,
} from './types';
import { NotifyTypes } from '../notify/types';
import { getChars, getComics } from './service';
import { ApplicationState } from '../../index';

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;
export const getCharsAction = (search?: string) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    const respData: CharResponse = await getChars(search);
    dispatch({
      type: CharComicsTypes.TOGGLE_CHAR,
      payload: respData.data.char,
    });
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        message: error.response?.data.error.message || 'opps',
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};

export const getComicsAction = (search?: string) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    const respData: ComicsResponse = await getComics(search);
    dispatch({
      type: CharComicsTypes.TOGGLE_COMICS,
      payload: respData.data.comics,
    });
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        message: error.response?.data.error.message || 'opps',
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};

export const getSearch = (search: SearchType) => async (dispatch: Dispatch) => {
  dispatch({ type: NotifyTypes.SET_LOADING, payload: true });
  try {
    if (search.searchType === 'Char') {
      const respData: CharResponse = await getChars(search.valueSearch);
      dispatch({
        type: CharComicsTypes.TOGGLE_CHAR,
        payload: respData.data.char,
      });
    }
    if (search.searchType === 'Comics') {
      const respData: ComicsResponse = await getComics(search.valueSearch);
      dispatch({
        type: CharComicsTypes.TOGGLE_COMICS,
        payload: respData.data.comics,
      });
    }
  } catch (error) {
    dispatch({
      type: NotifyTypes.SET_MESSAGE,
      payload: {
        severity: 'error',
        active: true,
        message: error.response?.data.error.message || 'opps',
      },
    });
  } finally {
    dispatch({ type: NotifyTypes.SET_LOADING, payload: false });
  }
};
