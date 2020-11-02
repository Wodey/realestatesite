import {TYPE_TEXT} from "./actionsTypes";

export const typeText = (text) => {
  return {
    type: TYPE_TEXT,
    payload: text
  };
};
