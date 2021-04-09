/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum UserTypes {
  TOGGLE_REGISTER = '@useractive/TOGGLE_REGISTER',
  TOGGLE_LOGIN = '@useractive/TOGGLE_LOGIN',
  TOGGLE_LOGOUT = '@useractive/TOGGLE_LOGOUT',
  TOGGLE_CHAR_LIKE = '@useractive/TOGGLE_CHAR_LIKE',
  TOGGLE_COMIC_LIKE = '@useractive/TOGGLE_COMIC_LIKE',
  TOGGLE_CHAR_LIKE_LOCAL = '@useractive/TOGGLE_CHAR_LIKE_LOCAL',
  TOGGLE_COMIC_LIKE_LOCAL = '@useractive/TOGGLE_COMIC_LIKE_LOCAL',
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
export interface likeCharComics {
  type: 'comics' | 'characters';
  like: boolean;
  id: string;
  thumb: string;
  name: string;
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
    likedChar: [];
    likedComic: [];
  };
}
export interface likeCharComicsResponse {
  data: {
    sucess: boolean;
  };
}
/**
 * State type
 */
export interface UserState {
  token: string;
  likedChar: [{ charId: string; charThumb: string; charName: string }];
  likedComic: [{ comicId: string; comicThumb: string; comicName: string }];
  auth: boolean;
}
