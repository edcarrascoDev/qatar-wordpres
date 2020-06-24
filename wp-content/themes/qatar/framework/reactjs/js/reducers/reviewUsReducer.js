import {
    REQUESTING_REVIEW_COMMENT,
    SET_REVIEW_FORM_FEEDBACK,
    SET_REVIEW_FORM_SUCCESSFUL,
} from '../actions/types';

const initialState = {
    requestingInfo: false,
    formFeedback: '',
    formSuccessful: false,
};

const reviewUsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REQUESTING_REVIEW_COMMENT:
            return { ...state, requestingInfo: payload };
        case SET_REVIEW_FORM_FEEDBACK:
            return { ...state, formFeedback: payload };
        case SET_REVIEW_FORM_SUCCESSFUL:
            return { ...state, formSuccessful: payload };
        default:
            return state;
    }
};

export default reviewUsReducer;
