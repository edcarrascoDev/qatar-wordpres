import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import contactUsReducer from './contactUsReducer';
import qatarOptionsReducer from './qatarOptionsReducer';
import productInquiryFormReducer from './productInquiryFormReducer';

import contactFormReducer from './contactFormReducer';
import productFormReducer from './productFormReducer';

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    qatarOptions: qatarOptionsReducer,
    contactUs: contactUsReducer,
    productInquiry: productInquiryFormReducer,
    ...createForms({
        contactInfo: contactFormReducer,
        productInfo: productFormReducer,
    }),
});
