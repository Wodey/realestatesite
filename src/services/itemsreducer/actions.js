import {GET_ITEMS} from './actionsTypes';
import firebase from "firebase";

export const getItems = (type,typeword) => async dispatch => {
  let homes = await firebase.database().ref("homes").orderByChild('type').equalTo(type).limitToFirst(15).once('value');
  homes = Object.values(homes.val()) || [];
  if(typeword !== '') {
    homes = homes.filter(i => i.address.toLowerCase().includes(typeword.toLowerCase()));
  };
  dispatch({
      type: GET_ITEMS,
      payload: homes
    });
};
