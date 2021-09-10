import { combineReducers } from "redux";
import UserReducer from "../reducers/userReducer/userReducer";
import CategoryReducer from "../reducers/categoryReducer/categoryReducer";
import ProductReducer from "./productReducer/productReducer";

export const AppReducer= combineReducers({
    UserReducer,
    CategoryReducer,
    ProductReducer
})


