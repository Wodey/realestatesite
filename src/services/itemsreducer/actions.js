import {GET_ITEMS} from './actionsTypes';
import firebase from "firebase";

export const getItems = (type) => async dispatch => {
  let homes = await firebase.database().ref("homes").orderByChild('type').equalTo(type).limitToFirst(15).once('value');
  homes = Object.values(homes.val()) || [];
  dispatch({
      type: GET_ITEMS,
      payload: homes
    });
};
