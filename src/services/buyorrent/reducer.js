import {CHANGE_FILTER,FILTERS} from "./actionsTypes";

const initialState = {
  filter: FILTERS.BUY
};

export default function BuyOrRent (state = initialState, action) {
  switch(action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.data
      };
    default:
      return state;
  };
};
