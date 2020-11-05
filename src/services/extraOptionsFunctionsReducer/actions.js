import {SET_PRICE_LIMIT, SET_SQUARE_LIMIT, SET_BEDROOMS_LIMIT, SET_BATHROOMS_LIMIT} from './actionsTypes';

export const setPriceLimit = (data) => {
  return {
    type: SET_PRICE_LIMIT,
    payload: data
  };
};

export const setSquareLimit = (data) => {
  return {
    type: SET_SQUARE_LIMIT,
    payload: data
  };
};

export const setBedroomsLimit = (data) => {
  return {
    type: SET_BEDROOMS_LIMIT,
    payload: data
  };
};

export const setBathroomsLimit = (data) => {
  return {
    type: SET_BATHROOMS_LIMIT,
    payload: data
  }
}
