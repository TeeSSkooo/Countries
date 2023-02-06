import { configureStore, combineReducers } from '@reduxjs/toolkit';

import countriesApi from '../api/countriesApi';

const rootReducer = combineReducers({
  [countriesApi.reducerPath]: countriesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
