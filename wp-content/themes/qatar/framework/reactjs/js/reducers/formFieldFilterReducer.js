import { CHANGE_BILLING_CITIES, CHANGE_SHIPPING_CITIES } from '../actions/types';

const initialState = {
    billingCities: [],
    shippingCities: [],
};

const formFieldFilterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_BILLING_CITIES:
            return { ...state, billingCities: payload };
        case CHANGE_SHIPPING_CITIES:
            return { ...state, shippingCities: payload };
        default:
            return state;
    }
};

export default formFieldFilterReducer;
