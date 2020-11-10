import {CHANGE_FILTER} from './actionsTypes';

export const changeRentOrBuy = (f) => {
  return {
    type: CHANGE_FILTER,
    data: f
  };
};
