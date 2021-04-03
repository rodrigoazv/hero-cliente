/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum UserTypes {
  TOGGLE_MENU = '@menuactive/TOGGLE_MENU',
}

/**
 * Data types
 */
export interface User {
  email: string;
  nickName: string;
  firstName: string;
  lastName: string;
  password: string;
  birthDay: Date;
}

/**
 * Data types
 */
export interface UserResponse {
  token: string;
}

/**
 * State type
 */
export interface UserState {
  token: string;
  auth: boolean;
}
