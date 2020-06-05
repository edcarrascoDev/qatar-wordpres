import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter, Route } from 'react-router-dom';

import Loader from './components/Loader';

import store from './store';
import Categories from './components/categories/Categories';
import ContactUsForm from './components/contact-us-form/ContactUsForm';
import Product from './components/product/Product';
import ProductInquiryForm from './components/product-inquiry-form/ProductInquiryForm';

const componentContainersById = [
    'reactContactForm',
    'reactProductForm',
    'reactCategories',
    'reactProductDescription',
    'reactLoader',
];

componentContainersById.forEach(container => {
    const htmlContainer = document.getElementById(container);

    if (htmlContainer) {
        switch (container) {
            case 'reactCategories':
                renderCategories(htmlContainer);
                break;
            case 'reactProductDescription':
                renderProduct(htmlContainer);
                break;
            case 'reactContactForm':
                renderContactUsForm(htmlContainer);
                break;
            case 'reactProductForm':
                renderProductForm(htmlContainer);
                break;
            case 'reactLoader':
                renderMainLoader(htmlContainer);
                break;
        }
    }
});

function renderCategories(htmlElement) {
    const categories = (
        <Provider store={store}>
            <Categories />
        </Provider>
    );
    ReactDOM.render(categories, htmlElement);
}

function renderProduct(htmlElement) {
    const product = (
        <Provider store={store}>
            <Product />
        </Provider>
    );
    ReactDOM.render(product, htmlElement);
}

function renderContactUsForm(htmlElement) {
    const contactUs = (
        <Provider store={store}>
            <ContactUsForm />
        </Provider>
    );
    ReactDOM.render(contactUs, htmlElement);
}

function renderProductForm(htmlElement) {
    const productInquiry = (
        <Provider store={store}>
            <ProductInquiryForm />
        </Provider>
    );
    ReactDOM.render(productInquiry, htmlElement);
}

function renderMainLoader(htmlElement) {
    const loader = (
        <Provider store={store}>
            <Loader />
        </Provider>
    );
    ReactDOM.render(loader, htmlElement);
}
