import {CHANGE_SORT} from './actionsTypes';

export const changeSort = (data) => {
  return {
    type: CHANGE_SORT,
    payload: data
  }
}
