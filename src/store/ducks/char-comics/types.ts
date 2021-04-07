/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { Char } from '../../../components/MainPage/card-char-mapped';
/**
 * Action types
 */
export enum CharComicsTypes {
  TOGGLE_COMICS = '@CharComicsractive/TOGGLE_COMICS',
  TOGGLE_CHAR = '@CharComicsactive/TOGGLE_CHAR',
  TOGGLE_CHAR_BY_ID = '@CharComicsactive/TOGGLE_CHAR_BY_ID',
}

/**
 * Data types
 */
export interface SearchType {
  searchType: string;
  searchUrl: string;
  valueSearch: string;
}

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
  charById: Char;
  comicsById: { results: [{}] };
  comics: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [];
  };
  char: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: [];
  };
}
