import { getFromLocalStorage, getFromSessionStorage } from '../utils';
import { FETCH_CATEGORIES, CHANGE_CATEGORY, FETCH_CUSTOM_CATEGORIES } from '../actions/types';

const initialState = {
    products_categories: getFromLocalStorage('products_categories') || [],
    custom_categories: getFromLocalStorage('custom_categories') || [],
    selected_category: getFromSessionStorage('selected_category') || { all: true },
};

const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CATEGORIES:
            return { ...state, products_categories: payload };
        case FETCH_CUSTOM_CATEGORIES:
            return { ...state, custom_categories: payload };
        case CHANGE_CATEGORY:
            return { ...state, selected_category: payload };
        default:
            return state;
    }
};

export default categoriesReducer;
