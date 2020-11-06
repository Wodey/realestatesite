import {GET_ITEMS} from './actionsTypes';
import {SORT_TYPES} from '../sortReducer/actionsTypes';

import firebase from "firebase";

export const getItems = (type,typeword, sort, priceLimit, squareLimit, bedrooms, bathrooms ) => async dispatch => {
  let snapshoot = await firebase.firestore().collection("homes").where('type', '==', type).get();

  const homes = [];
  snapshoot.forEach((item, i) => {
    homes.push(item.data());
  });


  /* homes = Object.values(homes.val()) || [];
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
