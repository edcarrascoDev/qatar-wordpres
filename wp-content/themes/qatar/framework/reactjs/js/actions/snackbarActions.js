import {
    OPEN_SNACKBAR,
    SET_SNACKBAR_MESSAGE,
    SET_SNACKBAR_DURATION,
    SET_SNACKBAR_ORIGIN,
    SET_SNACKBAR_LINK_TEXT,
    SET_SNACKBAR_LINK_URL,
} from './types';

export const openSnackbar = value => dispatch => {
    dispatch({
        type: OPEN_SNACKBAR,
        payload: value,
    });
};

export const setSnackbarMessage = value => dispatch => {
    dispatch({
        type: SET_SNACKBAR_MESSAGE,
        payload: value,
    });
};

export const setSnackbarDuration = value => dispatch => {
    dispatch({
        type: SET_SNACKBAR_DURATION,
        payload: value,
    });
};

export const setSnackbarOrigin = value => dispatch => {
    dispatch({
        type: SET_SNACKBAR_ORIGIN,
        payload: value,
    });
};

export const resetSnackbarState = () => dispatch => {
    dispatch({
        type: OPEN_SNACKBAR,
        payload: false,
    });

    dispatch({
        type: SET_SNACKBAR_MESSAGE,
        payload: '',
    });

    dispatch({
        type: SET_SNACKBAR_DURATION,
        payload: 6000,
    });

    dispatch({
        type: SET_SNACKBAR_ORIGIN,
        payload: {
            vertical: 'top',
            horizontal: 'center',
        },
    });

    dispatch({
        type: SET_SNACKBAR_LINK_TEXT,
        payload: 'Ir Allá',
    });

    dispatch({
        type: SET_SNACKBAR_LINK_URL,
        payload: null,
    });
};
