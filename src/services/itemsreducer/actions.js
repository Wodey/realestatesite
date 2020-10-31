import {GET_ITEMS} from './actionsTypes';
import firebase from "firebase";

export const getItems = () => async dispatch => {
  const homes = await firebase.database().ref().once('value');
  dispatch({
      type: GET_ITEMS,
      payload: homes.val()
    });
};
