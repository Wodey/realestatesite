import {NEXT, PREV, SET_PAGE} from "./actionsTypes";

const initialState = {
  current: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case NEXT:
      return {
        ...state,
        current: state.current + 1
      };
    case PREV:
      return {
        ...state,
        current: state.current - 1
      };
    case SET_PAGE:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state;
  };
};
