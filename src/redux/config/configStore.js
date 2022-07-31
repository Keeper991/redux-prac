import { createStore } from "redux";
import { combineReducers } from "redux";
import product from "../modules/product";
import user from "../modules/user";

const rootReducer = combineReducers({ product, user });
const store = createStore(rootReducer);

export default store;
