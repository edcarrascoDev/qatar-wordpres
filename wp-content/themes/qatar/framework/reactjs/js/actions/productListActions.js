import { saveInLocalStorage } from '../utils';
import { FETCH_PRODUCT_LIST, FETCH_RELATED_PRODUCT_LIST, PRODUCTS_LOADING } from './types';

export const fetchProductList = params => dispatch => {
    dispatch({
        type: PRODUCTS_LOADING,
        payload: true,
    });

    params = { ...params };
    const paramsRequest = new URLSearchParams(params);

    const urlRequest = `${wp_qatar_reactjs.wc_rest_url}/products?${paramsRequest.toString()}`;

    fetch(urlRequest, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
        },
    })
        .then(response => {
            const total_count = response.headers.get('x-wp-total');
            return response.json().then(data => ({
                data,
                total_count,
            }));
        })
        .then(data => {
            saveInLocalStorage('product_list', data);

            dispatch({
                type: FETCH_PRODUCT_LIST,
                payload: data,
            });
            dispatch({
                type: PRODUCTS_LOADING,
                payload: false,
            });
        })
        .catch(err => {
            dispatch({
                type: PRODUCTS_LOADING,
                payload: false,
            });
            console.error(err);
        });
};

export const fetchRelatedProductList = productsId => dispatch => {
    dispatch({
        type: PRODUCTS_LOADING,
        payload: true,
    });

    fetch(`${wp_qatar_reactjs.wc_rest_url}/products?include=${productsId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
        },
    })
        .then(response => response.json())
        .then(data => {
            saveInLocalStorage('product_list', data);

            dispatch({
                type: FETCH_RELATED_PRODUCT_LIST,
                payload: data,
            });
            dispatch({
                type: PRODUCTS_LOADING,
                payload: false,
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: PRODUCTS_LOADING,
                payload: false,
            });
        });
};
