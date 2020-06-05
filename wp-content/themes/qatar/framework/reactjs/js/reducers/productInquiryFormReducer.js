import { REQUESTING_PRODUCT_INFORMATION, SET_PRODUCT_FORM_FEEDBACK } from '../actions/types';

const initialState = {
    requestingInfo: false,
    formFeedback: '',
};

const productInquiryFormReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REQUESTING_PRODUCT_INFORMATION:
            return { ...state, requestingInfo: payload };
        case SET_PRODUCT_FORM_FEEDBACK:
            return { ...state, formFeedback: payload };
        default:
            return state;
    }
};

export default productInquiryFormReducer;
