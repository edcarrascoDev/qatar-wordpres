export const addItemToCart = request => dispatch => {
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Basic ${wp_qatar_reactjs.consumer_base_code}`,
        },
        body: JSON.stringify(request),
    }).then(response => {});
};
