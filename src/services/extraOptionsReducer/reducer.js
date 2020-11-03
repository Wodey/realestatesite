import {OPEN_EXTRA_OPTIONS} from "./actionsTypes";

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
    default:
      return state;
  };
};
