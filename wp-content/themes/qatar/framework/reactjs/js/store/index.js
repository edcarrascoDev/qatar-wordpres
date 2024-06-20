import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const preloadedState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
