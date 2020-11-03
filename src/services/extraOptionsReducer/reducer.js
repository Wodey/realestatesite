import {OPEN_EXTRA_OPTIONS, OPEN_EXTRA_OPTION, CLOSE_EXTRA_OPTIONS} from "./actionsTypes";

const initialState = {
  isOpen: false,
  price: false,
  square: false,
  bedrooms: false,
  bathrooms: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case OPEN_EXTRA_OPTIONS:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case OPEN_EXTRA_OPTION:
      const data = state;
      data[action.payload] = !data[action.payload];
      return {
        ...data
      }
    case CLOSE_EXTRA_OPTIONS:
      return {
        ...state,
        isOpen: false,
        price: false,
        square: false,
        bedrooms: false,
        bathrooms: false
      }
    default:
      return state;
  };
};
