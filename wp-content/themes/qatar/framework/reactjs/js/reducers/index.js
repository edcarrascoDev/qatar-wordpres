import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';

import addToCartReducer from './addToCartReducer';
import categoriesReducer from './categoriesReducer';
import contactUsReducer from './contactUsReducer';
import filtersReducer from './filtersReducer';
import formFieldFilterReducer from './formFieldFilterReducer';
import productInquiryFormReducer from './productInquiryFormReducer';
import productListReducer from './productListReducer';
import productsReducer from './productsReducer';
import qatarOptionsReducer from './qatarOptionsReducer';
import reviewUsReducer from './reviewUsReducer';

import contactFormReducer from './contactFormReducer';
import reviewFormReducer from './reviewFormReducer';
import productFormReducer from './productFormReducer';
import addToCartFormReducer from './addToCartFormReducer';

export default combineReducers({
    addToCart: addToCartReducer,
    categories: categoriesReducer,
    contactUs: contactUsReducer,
    filtersItems: filtersReducer,
    formFieldFilter: formFieldFilterReducer,
    productInquiry: productInquiryFormReducer,
    productList: productListReducer,
    products: productsReducer,
    qatarOptions: qatarOptionsReducer,
    reviewUs: reviewUsReducer,
    ...createForms({
        contactInfo: contactFormReducer,
        productInfo: productFormReducer,
        reviewInfo: reviewFormReducer,
        addToCartItem: addToCartFormReducer,
    }),
});
