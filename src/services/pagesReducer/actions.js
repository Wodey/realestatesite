import {NEXT, PREV, SET_PAGE} from './actionsTypes';

export const nextPage = () => {
  return {
    type: NEXT
  }
};

export const prevPage = () => {
  return {
    type: PREV
  }
};

export const setPage = (data) => {
  return {
    type: SET_PAGE,
    payload: data
  }
};
