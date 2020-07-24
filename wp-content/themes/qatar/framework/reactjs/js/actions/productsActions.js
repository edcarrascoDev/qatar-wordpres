import { CHANGE_TAB, CHANGE_PRODUCT_VARIATION } from './types';

export const changeTab = tab => dispatch => {
    dispatch({
        type: CHANGE_TAB,
        payload: tab,
    });
};

export const changeProductVariation = variation => dispatch => {
    dispatch({
        type: CHANGE_PRODUCT_VARIATION,
        payload: variation,
    });
};
