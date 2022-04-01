import { combineReducers } from "redux";
import { productsReducer,selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    productsReducer:productsReducer,
    product:selectedProductReducer
})

export default reducers