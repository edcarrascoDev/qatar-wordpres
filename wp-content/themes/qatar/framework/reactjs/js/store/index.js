import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cartReducer from '../features/cart/cartSlice';
import snackbarReducer from '../features/snackbar/snackbarSlice';
import productReducer from '../features/product/productSlice';
import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import addToCartFormReducer from '../reducers/addToCartFormReducer';

const preloadedState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: combineReducers({
    cart: cartReducer,
    snackbar: snackbarReducer,
    product: productReducer,
    form: combineForms({
      addToCartItem: addToCartFormReducer,
    }),
  }),
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;
