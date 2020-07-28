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
import RelatedProductList from './components/related-product-list/RelatedProductList';
import AddToCartForm from './components/add-to-cart-form/AddToCart';
import FormFieldFilter from './components/form-field-filter/FormFieldFilter';
import ProductPrice from './components/product/ProductPrice';
import CustomCategoriesSlider from './components/categories/CustomCategoriesSlider';

const componentContainersById = [
    'reactContactForm',
    'reactProductForm',
    'reactCategories',
    'reactCustomCategories',
    'reactProductDescription',
    'reactProductPrice',
    'reactReviewForm',
    'reactProductList',
    'reactRelatedProductList',
    'reactUpsellsProductList',
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
            case 'reactCustomCategories':
                renderCustomCategories(htmlContainer);
                break;
            case 'reactProductDescription':
                renderProduct(htmlContainer);
                break;
            case 'reactProductPrice':
                renderProductPrice(htmlContainer);
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
            case 'reactRelatedProductList':
                renderRelatedProductList(htmlContainer);
                break;
            case 'reactUpsellsProductList':
                renderUpsellsProductList(htmlContainer);
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

const componentByClassName = ['reactWCFormField'];

componentByClassName.forEach(className => {
    const htmlContainers = document.getElementsByClassName(className);

    Array.apply(null, { length: htmlContainers.length }).forEach((value, index) => {
        switch (className) {
            case 'reactWCFormField':
                renderFormFieldFilter(htmlContainers.item(index));
                break;
        }
    });
});

function renderCategories(htmlElement) {
    const categories = (
        <Provider store={store}>
            <Categories />
        </Provider>
    );
    ReactDOM.render(categories, htmlElement);
}

function renderCustomCategories(htmlElement) {
    const customCategories = (
        <Provider store={store}>
            <CustomCategoriesSlider categoriesId={htmlElement.dataset.categoriesId} />
        </Provider>
    );
    ReactDOM.render(customCategories, htmlElement);
}

function renderProduct(htmlElement) {
    const product = (
        <Provider store={store}>
            <Product />
        </Provider>
    );
    ReactDOM.render(product, htmlElement);
}

function renderProductPrice(htmlElement) {
    const productPrice = (
        <Provider store={store}>
            <ProductPrice defaultProductPrice={htmlElement.dataset.defaultProductPrice} />
        </Provider>
    );
    ReactDOM.render(productPrice, htmlElement);
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

function renderRelatedProductList(htmlElement) {
    const relateProductListRender = (
        <Provider store={store}>
            <RelatedProductList productsId={htmlElement.dataset.productsId} />
        </Provider>
    );
    ReactDOM.render(relateProductListRender, htmlElement);
}

function renderUpsellsProductList(htmlElement) {
    const upsellsProductListRender = (
        <Provider store={store}>
            <RelatedProductList productsId={htmlElement.dataset.productsId} />
        </Provider>
    );
    ReactDOM.render(upsellsProductListRender, htmlElement);
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

function renderFormFieldFilter(htmlElement) {
    const formFieldFilter = (
        <Provider store={store}>
            <FormFieldFilter
                keyValue={htmlElement.dataset.keyValue}
                args={JSON.parse(htmlElement.dataset.args)}
                value={htmlElement.dataset.value}
            />
        </Provider>
    );
    ReactDOM.render(formFieldFilter, htmlElement);
}

function renderMainLoader(htmlElement) {
    const loader = (
        <Provider store={store}>
            <Loader />
        </Provider>
    );
    ReactDOM.render(loader, htmlElement);
}
