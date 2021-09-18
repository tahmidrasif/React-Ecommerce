import { combineReducers } from "redux";
import UserReducer from "../reducers/userReducer/userReducer";
import CategoryReducer from "../reducers/categoryReducer/categoryReducer";
import ProductReducer from "./productReducer/productReducer";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import CartReducer from "./cartReducer/cartReducer";
import OtherReducer from "./otherReducer/otherReducer";

const persistConfig={
    key:'root',
    storage: storage
}


const combinePersistReducer = combineReducers({
    UserReducer,
    CartReducer
  })

  export const persistedStore=persistReducer(persistConfig, combinePersistReducer)

export const AppReducer= combineReducers({
    persistedStore,
    CategoryReducer,
    ProductReducer,
    OtherReducer
})


