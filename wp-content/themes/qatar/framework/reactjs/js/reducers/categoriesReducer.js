import { getFromLocalStorage, getFromSessionStorage } from '../utils';
import { FETCH_CATEGORIES, CHANGE_CATEGORY } from '../actions/types';

const initialState = {
    products_categories: getFromLocalStorage('products_categories') || [],
    selected_category: getFromSessionStorage('selected_category') || { all: true },
};

const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CATEGORIES:
            return { ...state, products_categories: payload };
        case CHANGE_CATEGORY:
            return { ...state, selected_category: payload };
        default:
            return state;
    }
};

export default categoriesReducer;
