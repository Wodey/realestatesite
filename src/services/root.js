import {combineReducers} from 'redux';
import BuyRentReducer from './buyorrent/reducer';
import ItemsReducer from './itemsreducer/reducer';

export default combineReducers({
  buyrent: BuyRentReducer,
  homes: ItemsReducer
});
