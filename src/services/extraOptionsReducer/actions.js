import {OPEN_EXTRA_OPTIONS, OPEN_EXTRA_OPTION, CLOSE_EXTRA_OPTIONS} from "./actionsTypes";

export const openExtraOptions = () => {
  return {
    type: OPEN_EXTRA_OPTIONS
  };
};

export const openExtraOption = (data) => {
  return {
    type: OPEN_EXTRA_OPTION,
    payload: data
  };
};

export const closeExtraOptions = () => {
  return {
    type: CLOSE_EXTRA_OPTIONS,
  }
}
