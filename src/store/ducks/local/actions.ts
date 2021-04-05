import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { LocalSearch, LocalTypes } from './types';
import { ApplicationState } from '../../index';

export type AppThunk = ThunkAction<
  void,
  ApplicationState,
  null,
  Action<string>
>;
export const setLocalSearch = (data: LocalSearch) => async (
  dispatch: Dispatch,
) => {
  dispatch({ type: LocalTypes.SET_SEARCH_LOCAL, payload: data });
};
