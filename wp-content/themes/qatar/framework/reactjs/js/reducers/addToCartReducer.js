import { REQUESTING_ADD_TO_CART, SET_ADD_TO_CART_FORM_FEEDBACK } from '../actions/types';

const initialState = {
    requestingInfo: false,
    formFeedback: '',
    formSuccessful: false,
};

const addToCartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REQUESTING_ADD_TO_CART:
            return { ...state, requestingInfo: payload };
        case SET_ADD_TO_CART_FORM_FEEDBACK:
            return { ...state, formFeedback: payload };
        default:
            return state;
    }
};

export default addToCartReducer;
