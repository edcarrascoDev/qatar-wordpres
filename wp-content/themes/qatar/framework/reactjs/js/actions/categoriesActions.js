import { saveInLocalStorage, saveInSessionStorage } from '../utils';
import { CHANGE_CATEGORY, FETCH_CATEGORIES, FETCH_CUSTOM_CATEGORIES } from './types';

export const fetchCategories =
  (parent = 0, include = []) =>
  (dispatch) => {
    const params = new URLSearchParams({
      hide_empty: true,
      parent,
      include,
    });

    const urlRequest = `${wp_qatar_reactjs.wc_rest_url}/products/categories?${params.toString()}`;

    fetch(urlRequest, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (include.length > 0) {
          saveInLocalStorage('custom_categories', data);

          dispatch({
            type: FETCH_CUSTOM_CATEGORIES,
            payload: data,
          });
        } else {
          saveInLocalStorage('products_categories', data);

          dispatch({
            type: FETCH_CATEGORIES,
            payload: data,
          });
        }
      });
  };

export const changeCategory = (category) => (dispatch) => {
  saveInSessionStorage('selected_category', category);

  dispatch({
    type: CHANGE_CATEGORY,
    payload: category,
  });
};
