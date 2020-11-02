import {TYPE_TEXT} from './actionsTypes';

const initialState = {
  type: ""
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TYPE_TEXT:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  };
};
