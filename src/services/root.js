import {combineReducers} from 'redux';
import BuyRentReducer from './buyorrent/reducer';

export default combineReducers({
  buyrent: BuyRentReducer
});
