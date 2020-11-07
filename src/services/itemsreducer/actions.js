import {GET_ITEMS} from './actionsTypes';
import {SORT_TYPES} from '../sortReducer/actionsTypes';

import firebase from "firebase";

export const getItems = (type,typeword, sort, priceLimit, squareLimit, bedrooms, bathrooms ) => async dispatch => {
  let snapshoot = firebase.firestore().collection("homes").where('type', '==', type).orderBy("bedrooms");

  switch (bedrooms) {
    case "+5":
      snapshoot = snapshoot.where("bedrooms", ">=", 5);
      break;
    default:
      snapshoot = snapshoot.where("bedrooms", ">=", bedrooms);
  }
  

  switch(sort) {
    case SORT_TYPES.MAXPRICE:
      snapshoot = snapshoot.orderBy('price', 'desc');
      break;
    case SORT_TYPES.MINPRICE:
      snapshoot = snapshoot.orderBy('price');
      break;
    case SORT_TYPES.SQUARE:
      snapshoot = snapshoot.orderBy('square', 'desc');
      break;
    case SORT_TYPES.BEDROOMS:
      snapshoot = snapshoot.orderBy('bedrooms', "desc");
      break;
  }

  snapshoot = await snapshoot.get();
  const homes = [];
  snapshoot.forEach((item, i) => {
    homes.push(item.data());
  });

  /*
  if(bedrooms === "+5") {
    homes = homes.filter(i => i.bedrooms >= 5);
  } else {
    homes = homes.filter(i => i.bedrooms >= bedrooms);
  }

  if(bathrooms === "+5") {
    homes = homes.filter(i => i.bathrooms >= 5)
  } else {
    homes = homes.filter(i => i.bathrooms >= bathrooms);
  }

  if (priceLimit[0] && priceLimit[0] > 0) {
    homes = homes.filter(i => Number.parseInt(i.price, 10) >= Number.parseInt(priceLimit[0]) * 1000000);
  }

  if (priceLimit[1] && priceLimit[1] > 0) {
    homes = homes.filter(i => Number.parseInt(i.price, 10) <= Number.parseInt(priceLimit[1]) * 1000000);
  }

  if (squareLimit[0] && squareLimit[0] > 1) {
    homes = homes.filter(i => i.square >= Number.parseInt(squareLimit[0]));
  }

  if (squareLimit[1] && squareLimit[1] > 1) {
    homes = homes.filter(i => i.square <= Number.parseInt(squareLimit[1]));
  }

  if(typeword !== '') {
    homes = homes.filter(i => i.address.toLowerCase().includes(typeword.toLowerCase()));
  }; */
  dispatch({
      type: GET_ITEMS,
      payload: homes
    });
};
