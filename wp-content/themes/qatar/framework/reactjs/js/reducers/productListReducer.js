import { getFromLocalStorage } from '../utils';
import { FETCH_PRODUCT_LIST, PRODUCTS_LOADING } from '../actions/types';

const initialState = {
    product_list: getFromLocalStorage('product_list') || [],
    product_loading: false,
};

const productListReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_PRODUCT_LIST:
            return { ...state, product_list: payload };
        case PRODUCTS_LOADING:
            return { ...state, product_loading: payload };
        default:
            return state;
    }
};

export default productListReducer;
