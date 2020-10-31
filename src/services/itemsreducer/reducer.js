import {GET_ITEMS} from './actionsTypes';

const initialState = {
  homes: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        homes: action.payload
      }
    default:
      return state;
  }
}
