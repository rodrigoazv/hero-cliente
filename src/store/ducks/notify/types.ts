/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum NotifyTypes {
  SET_LOADING = '@Notifyactive/SET_LOADING',
  SET_MESSAGE = '@Notifyactive/SET_MESSAGE',
}

/**
 * Data types
 */
export interface Notify {
  active: boolean;
}

/**
 * State type
 */
export interface NotifyState {
  active: boolean;
}
