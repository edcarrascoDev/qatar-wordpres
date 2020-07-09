import { getFromLocalStorage } from '../utils';
import {
    CHANGE_PRODUCT_PAGE,
    FETCH_PRODUCT_LIST,
    FETCH_RELATED_PRODUCT_LIST,
    PRODUCTS_LOADING,
} from '../actions/types';

const initialState = {
    product_list: getFromLocalStorage('product_list') || [],
    related_product_list: [],
    product_loading: false,
    product_page: 1,
};

const productListReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PRODUCT_LIST:
            return { ...state, product_list: payload };
        case FETCH_RELATED_PRODUCT_LIST:
            return { ...state, related_product_list: payload };
        case PRODUCTS_LOADING:
            return { ...state, product_loading: payload };
        case CHANGE_PRODUCT_PAGE:
            return { ...state, product_page: payload };
        default:
            return state;
    }
};

export default productListReducer;
