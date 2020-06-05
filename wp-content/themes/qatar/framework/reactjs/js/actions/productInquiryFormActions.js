import { SET_PRODUCT_FORM_FEEDBACK, REQUESTING_PRODUCT_INFORMATION } from './types';

export const setProductFormFeedback = message => dispatch => {
    dispatch({
        type: SET_PRODUCT_FORM_FEEDBACK,
        payload: message,
    });
};

export const requestProductInformation = request => dispatch => {
    dispatch({
        type: REQUESTING_PRODUCT_INFORMATION,
        payload: true,
    });

    fetch(`${wp_qatar_reactjs.rest_url}/request-product-information`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(request),
    })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                dispatch({
                    type: SET_PRODUCT_FORM_FEEDBACK,
                    payload: 'Gracias por tu solicitud, en breve te estaremos respondiendo',
                });

                window.location.href = request.redirectTo;
            } else {
                dispatch({
                    type: REQUESTING_PRODUCT_INFORMATION,
                    payload: false,
                });

                dispatch({
                    type: SET_PRODUCT_FORM_FEEDBACK,
                    payload:
                        'Hubo un error mientras se generaba la solicitud, intenta más tarde o comunícate con nosotros',
                });
            }
        });
};
