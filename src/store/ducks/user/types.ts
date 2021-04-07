/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum UserTypes {
  TOGGLE_REGISTER = '@useractive/TOGGLE_REGISTER',
  TOGGLE_LOGIN = '@useractive/TOGGLE_LOGIN',
  TOGGLE_LOGOUT = '@useractive/TOGGLE_LOGOUT',
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
export interface UserLogin {
  email: string;
  password: string;
}

/**
 * Data types
 */
export interface UserResponse {
  data: {
    token: string;
  };
}

/**
 * State type
 */
export interface UserState {
  token: string;
  auth: boolean;
}
