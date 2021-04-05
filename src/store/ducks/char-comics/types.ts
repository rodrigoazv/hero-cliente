/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum CharComicsTypes {
  TOGGLE_COMICS = '@CharComicsractive/TOGGLE_COMICS',
  TOGGLE_CHAR = '@CharComicsactive/TOGGLE_CHAR',
}

/**
 * Data types
 */
export interface CharResponse {
  data: {
    char: {
      offset: Number;
      limit: Number;
      total: Number;
      count: Number;
      results: [];
    };
  };
}
export interface ComicsResponse {
  data: {
    comics: {
      offset: Number;
      limit: Number;
      total: Number;
      count: Number;
      results: [];
    };
  };
}

/**
 * State type
 */
export interface CharComicsState {
  comics: {
    offset: Number;
    limit: Number;
    total: Number;
    count: Number;
    results: [];
  };
  char: {
    offset: Number;
    limit: Number;
    total: Number;
    count: Number;
    results: [];
  };
}
