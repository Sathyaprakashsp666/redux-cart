import { combineReducers } from "redux";
import { productReducer, selectReducer } from "./productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  selectedProducts: selectReducer,
});

export default reducer;
