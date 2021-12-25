import { combineReducers } from "redux";
import { productsReducer } from "./products";
const reducers = {
  products: productsReducer,
};

export default combineReducers(reducers);