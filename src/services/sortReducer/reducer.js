import {CHANGE_SORT} from './actionsTypes';

const initialState = {
  sort: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      };
    default:
      return state;
  };
};
