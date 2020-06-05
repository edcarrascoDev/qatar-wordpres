import { getFromLocalStorage, getFromSessionStorage } from '../utils';
import { FETCH_CATEGORIES, CHANGE_CATEGORY, FETCH_CATEGORIES_SYNC } from '../actions/types';

const initialState = {
    qatar_categories: getFromLocalStorage('qatar_categories') || [],
    qatar_categories_sync: getFromLocalStorage('qatar_categories_sync') || {},
    selected_categories: getFromSessionStorage('selected_categories') || { all: true },
};

const categoriesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CATEGORIES:
            return { ...state, qatar_categories: payload };
        case FETCH_CATEGORIES_SYNC:
            return { ...state, qatar_categories_sync: payload };
        case CHANGE_CATEGORY:
            return { ...state, selected_categories: payload };
        default:
            return state;
    }
};

export default categoriesReducer;
