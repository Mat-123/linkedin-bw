import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fetchPersonalReduce from "../reducers/fetchPersonalReduce";

//
// configureStore.js

// import { createStore } from 'redux'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage: storage,
};

const unifiedReducer = combineReducers({
  user: fetchPersonalReduce, // ricostruisce la fetta user
  // cart: cartReducer, // ricostruisce la fetta cart
  // book: bookReducer, // ricostruisce la fetta book
});

const persistedReducer = persistReducer(persistConfig, unifiedReducer);

export const store = configureStore({
  reducer: persistedReducer, // questo reducer risultante è la "somma" di tutte le slices
});

export const persiStore = persistStore(store);

//   export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
