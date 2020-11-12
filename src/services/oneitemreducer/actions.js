import {GET_ITEM, CLEAR_ITEM} from "./actionsTypes";
import firebase from "firebase";

export const getItem = (id) => async dispatch => {
  const query = await firebase.firestore().collection('homes').where('id', '==', id).get();
  if(!query.empty) {
    const snapshoot = query.docs[0];
    const data = snapshoot.data();
    dispatch({
      type: GET_ITEM,
      payload: data
    });
  }
};

export const clearItem = () => {
  return {
    type: CLEAR_ITEM
  }
}
