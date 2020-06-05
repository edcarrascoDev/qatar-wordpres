import { saveInLocalStorage, saveInSessionStorage } from '../utils';
import { CHANGE_CATEGORY, FETCH_CATEGORIES, FETCH_CATEGORIES_SYNC } from './types';

export const fetchCategories = () => dispatch => {
    fetch(`${wp_qatar_reactjs.rest_url}/qatar-categories`)
        .then(response => response.json())
        .then(response => {
            const { categories } = response.data;

            const orderedCategories = categories.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }

                if (a.name < b.name) {
                    return -1;
                }

                return 0;
            });

            saveInLocalStorage('qatar_categories', orderedCategories);

            dispatch({
                type: FETCH_CATEGORIES,
                payload: orderedCategories,
            });
        });
};

export const changeCategory = categories => dispatch => {
    saveInSessionStorage('selected_categories', categories);

    dispatch({
        type: CHANGE_CATEGORY,
        payload: categories,
    });
};
