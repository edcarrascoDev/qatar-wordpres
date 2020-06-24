import {
    REQUESTING_REVIEW_COMMENT,
    SET_REVIEW_FORM_FEEDBACK,
    SET_REVIEW_FORM_SUCCESSFUL,
} from './types';

export const setReviewFormFeedback = message => dispatch => {
    dispatch({
        type: SET_REVIEW_FORM_FEEDBACK,
        payload: message,
    });
};

export const requestReviewComment = request => dispatch => {
    dispatch({
        type: REQUESTING_REVIEW_COMMENT,
        payload: true,
    });

    fetch(`${wp_qatar_reactjs.wc_rest_url}/products/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
        },
        body: JSON.stringify(request),
    }).then(response => {
        if (response.ok) {
            dispatch({
                type: SET_REVIEW_FORM_SUCCESSFUL,
                payload: true,
            });

            dispatch({
                type: SET_REVIEW_FORM_FEEDBACK,
                payload:
                    'Tu comentario fue recibido y será revisado su veracidad para que sea publicado.',
            });
        } else {
            dispatch({
                type: REQUESTING_REVIEW_COMMENT,
                payload: false,
            });

            dispatch({
                type: SET_REVIEW_FORM_FEEDBACK,
                payload: 'Hubo un error en el proceso, por favor inténtalo más tarde',
            });
        }
    });
};
