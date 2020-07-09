import {
    OPEN_SNACKBAR,
    SET_SNACKBAR_DURATION,
    SET_SNACKBAR_MESSAGE,
    SET_SNACKBAR_ORIGIN,
    SET_SNACKBAR_LINK_URL,
    SET_SNACKBAR_LINK_TEXT,
} from '../actions/types';

const initialState = {
    open: false,
    hideDuration: 6000,
    message: '',
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
    },
    linkUrl: null,
    linkText: 'Ir Allá',
};

const snackbarReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case OPEN_SNACKBAR:
            return { ...state, open: payload };
        case SET_SNACKBAR_DURATION:
            return { ...state, hideDuration: payload };
        case SET_SNACKBAR_MESSAGE:
            return { ...state, message: payload };
        case SET_SNACKBAR_ORIGIN:
            return { ...state, anchorOrigin: payload };
        case SET_SNACKBAR_LINK_URL:
            return { ...state, linkUrl: payload };
        case SET_SNACKBAR_LINK_TEXT:
            return { ...state, linkText: payload };
        default:
            return state;
    }
};

export default snackbarReducer;
