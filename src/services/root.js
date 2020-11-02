import {combineReducers} from 'redux';
import BuyRentReducer from './buyorrent/reducer';
import ItemsReducer from './itemsreducer/reducer';
import TypePlaceReducer from './typeplace/reducer';

export default combineReducers({
  buyrent: BuyRentReducer,
  homes: ItemsReducer,
  type: TypePlaceReducer
});
