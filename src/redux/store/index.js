import { configureStore, combineReducers } from '@reduxjs/toolkit'
import fetchPersonalReduce from '../reducers/fetchPersonalReduce'

// 
// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
// 

// const unifiedReducer = combineReducers({
//     user: fetchPersonalReduce, // ricostruisce la fetta user
//     // cart: cartReducer, // ricostruisce la fetta cart
//     // book: bookReducer, // ricostruisce la fetta book
//   })

//   const store = configureStore({
//     reducer: unifiedReducer, // questo reducer risultante è la "somma" di tutte le slices
//   })
  
//   export default store

  // 
