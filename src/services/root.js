import {combineReducers} from 'redux';
import BuyRentReducer from './buyorrent/reducer';
import ItemsReducer from './itemsreducer/reducer';
import TypePlaceReducer from './typeplace/reducer';
import SortReducer from './sortReducer/reducer';
import ExtraOptions from './extraOptionsReducer/reducer';
import ExtraOptionsFunctions from './extraOptionsFunctionsReducer/reducer';
import PagesReducer from "./pagesReducer/reducer";
import OneItemReducer from "./oneitemreducer/reducer";

export default combineReducers({
  buyrent: BuyRentReducer,
  homes: ItemsReducer,
  type: TypePlaceReducer,
  sort: SortReducer,
  extraOptions: ExtraOptions,
  extraOptionsFunc: ExtraOptionsFunctions,
  pages: PagesReducer,
  item: OneItemReducer
});
