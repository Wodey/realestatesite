import {GET_ITEM,CLEAR_ITEM} from "./actionsTypes";

const initialState = {
  item: null
};

export default function onItemReducer(state = initialState, action) {
  switch(action.type) {
    case GET_ITEM:
      return {
        ...state,
        item: action.payload
      };
    case CLEAR_ITEM:
      return {
        ...state,
        item: null
      }
    default:
      return state;
  }
};
