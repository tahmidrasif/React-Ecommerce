import React from 'react';
import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AppReducer } from "./reducers/appReducer";
import persistStore from 'redux-persist/es/persistStore';


const composeEnhancer=composeWithDevTools(applyMiddleware(thunk))
const store=createStore(AppReducer,composeEnhancer);

export const persistor=persistStore(store)

export default store;





