import {SET_PRICE_LIMIT, SET_SQUARE_LIMIT, SET_BEDROOMS_LIMIT, SET_BATHROOMS_LIMIT} from './actionsTypes';

const initialState = {
  price: [null, null],
  square: [null, null],
  bedrooms: null,
  bathrooms: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_PRICE_LIMIT:
      return {
        ...state,
        price: action.payload
      };
    case SET_SQUARE_LIMIT:
      return {
        ...state,
        square: action.payload
      };
    case SET_BEDROOMS_LIMIT:
      return {
        ...state,
        bedrooms: action.payload
      };
    case SET_BATHROOMS_LIMIT:
      return {
        ...state,
        bathrooms: action.payload
      };
    default:
      return state;
  }
}
