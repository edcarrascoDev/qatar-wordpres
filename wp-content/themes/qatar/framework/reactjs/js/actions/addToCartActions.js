import {
    OPEN_SNACKBAR,
    REQUESTING_ADD_TO_CART,
    SET_SNACKBAR_LINK_URL,
    SET_SNACKBAR_MESSAGE,
} from './types';

export const addItemToCart = request => dispatch => {
    dispatch({
        type: REQUESTING_ADD_TO_CART,
        payload: true,
    });

    fetch(`${wp_qatar_reactjs.cocart_rest_url}/add-item`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
        },
        body: JSON.stringify(request),
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const { product_name } = response;
            dispatch({
                type: REQUESTING_ADD_TO_CART,
                payload: false,
            });

            dispatch({
                type: OPEN_SNACKBAR,
                payload: true,
            });

            dispatch({
                type: SET_SNACKBAR_MESSAGE,
                payload: `El producto ${product_name} se ha agreado al carrito de compras`,
            });

            dispatch({
                type: SET_SNACKBAR_LINK_URL,
                payload: wp_qatar_reactjs.cart_page,
            });
        })
        .catch(err => {
            console.error(err);
            dispatch({
                type: REQUESTING_ADD_TO_CART,
                payload: false,
            });

            dispatch({
                type: OPEN_SNACKBAR,
                payload: true,
            });

            dispatch({
                type: SET_SNACKBAR_MESSAGE,
                payload: 'Ha ocurrido un error en el proceso, por favor inténtalo más tarde',
            });
        });
};
