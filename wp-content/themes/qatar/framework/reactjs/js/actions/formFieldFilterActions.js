import { CHANGE_BILLING_CITIES, CHANGE_SHIPPING_CITIES, RESET_BILLING_CITY } from './types';

export const changeBillingCities = value => dispatch => {
    dispatch({
        type: CHANGE_BILLING_CITIES,
        payload: value,
    });
};
export const changeShippingCities = value => dispatch => {
    dispatch({
        type: CHANGE_SHIPPING_CITIES,
        payload: value,
    });
};
