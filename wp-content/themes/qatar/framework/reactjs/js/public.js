import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Loader from './components/Loader';

import store from './store';
import Categories from './components/categories/Categories';
import ContactUsForm from './components/contact-us-form/ContactUsForm';
import Product from './components/product/Product';
import ProductInquiryForm from './components/product-inquiry-form/ProductInquiryForm';
import ReviewForm from './components/review-form/ReviewForm';
import ProductList from './components/product-list/ProductList';
import AddToCartForm from './components/add-to-cart-form/AddToCart';

const componentContainersById = [
    'reactContactForm',
    'reactProductForm',
    'reactCategories',
    'reactProductDescription',
    'reactReviewForm',
    'reactProductList',
    'reactAddToCartForm',
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
            case 'reactReviewForm':
                renderReviewForm(htmlContainer);
                break;
            case 'reactProductList':
                renderProductList(htmlContainer);
                break;
            case 'reactAddToCartForm':
                renderAddToCartForm(htmlContainer);
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

function renderReviewForm(htmlElement) {
    const productInquiry = (
        <Provider store={store}>
            <ReviewForm
                productId={htmlElement.dataset.productId}
                reviewCount={htmlElement.dataset.reviewCount}
            />
        </Provider>
    );
    ReactDOM.render(productInquiry, htmlElement);
}

function renderProductList(htmlElement) {
    const ProductListRender = (
        <Provider store={store}>
            <ProductList categoryId={htmlElement.dataset.categoryId} />
        </Provider>
    );
    ReactDOM.render(ProductListRender, htmlElement);
}

function renderAddToCartForm(htmlElement) {
    const addToCart = (
        <Provider store={store}>
            <AddToCartForm
                productId={htmlElement.dataset.productId}
                minValue={htmlElement.dataset.minValue}
                maxValue={htmlElement.dataset.maxValue}
                inputValue={htmlElement.dataset.inputValue}
                productVariations={htmlElement.dataset.productVariations}
                attributes={htmlElement.dataset.attributes}
            />
        </Provider>
    );
    ReactDOM.render(addToCart, htmlElement);
}

function renderMainLoader(htmlElement) {
    const loader = (
        <Provider store={store}>
            <Loader />
        </Provider>
    );
    ReactDOM.render(loader, htmlElement);
}
