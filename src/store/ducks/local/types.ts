/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/**
 * Action types
 */
export enum LocalTypes {
  SET_SEARCH_LOCAL = '@Localactive/SET_SEARCH_LOCAL',
}

export interface LocalSearch {
  name: string;
  url: string;
}
/**
 * Data types
 */
export interface Local {
  search: LocalSearch;
}

/**
 * State type
 */
export interface LocalState {
  search: {
    name: string;
    url: string;
  };
}
