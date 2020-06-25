import { REQUESTING_ADD_TO_CART, SET_ADD_TO_CART_FORM_FEEDBACK } from './types';

export const addItemToCart = request => dispatch => {
    console.log(request);
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
        .then(response => {
            console.log(response);
            dispatch({
                type: REQUESTING_ADD_TO_CART,
                payload: false,
            });

            dispatch({
                type: SET_ADD_TO_CART_FORM_FEEDBACK,
                payload: 'Se ha añadido a tu carrito',
            });
        })
        .catch(err => {
            dispatch({
                type: REQUESTING_ADD_TO_CART,
                payload: false,
            });
            console.error(err);
        });
};
