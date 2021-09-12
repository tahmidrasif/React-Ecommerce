import { combineReducers } from "redux";
import UserReducer from "../reducers/userReducer/userReducer";
import CategoryReducer from "../reducers/categoryReducer/categoryReducer";
import ProductReducer from "./productReducer/productReducer";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage: storage
}
export const persistedUserStore=persistReducer(persistConfig, UserReducer)


export const AppReducer= combineReducers({
    UserReducer:persistedUserStore,
    CategoryReducer,
    ProductReducer,

})


