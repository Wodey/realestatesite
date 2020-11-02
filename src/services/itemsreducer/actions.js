import {GET_ITEMS} from './actionsTypes';
import {SORT_TYPES} from '../sortReducer/actionsTypes';

import firebase from "firebase";

export const getItems = (type,typeword, sort) => async dispatch => {
  let homes = await firebase.database().ref("homes").orderByChild('type').equalTo(type).limitToFirst(15).once('value');
  homes = Object.values(homes.val()) || [];
  if(sort === SORT_TYPES.MAXPRICE) {
    homes.sort((a,b) => {
      if(Number.parseInt(a.price, 10) > Number.parseInt(b.price, 10)) {
        return -1;
      }
      if (Number.parseInt(a.price, 10) < Number.parseInt(b.price, 10)) {
        return 1;
      }
      return 0;
    });
  } else if (sort === SORT_TYPES.MINPRICE) {
    homes.sort((a,b) => {
      if(Number.parseInt(a.price, 10) > Number.parseInt(b.price, 10)) {
        return 1;
      }
      if (Number.parseInt(a.price, 10) < Number.parseInt(b.price, 10)) {
        return -1;
      }
      return 0;
    });
  } else if (sort === SORT_TYPES.SQUARE) {
    homes.sort((a,b) => {
      if(a.square > b.square) {
        return -1;
      }
      if (a.square < b.square) {
        return 1;
      }
      return 0;
    })
  } else if (sort === SORT_TYPES.BEDROOMS) {
    homes.sort((a,b) => {
      if(a.bedrooms > b.bedrooms) {
        return -1;
      }
      if(a.bedrooms < b.bedrooms) {
        return 1;
      }
      return 0;
    });
  }

  if(typeword !== '') {
    homes = homes.filter(i => i.address.toLowerCase().includes(typeword.toLowerCase()));
  };
  dispatch({
      type: GET_ITEMS,
      payload: homes
    });
};
