import { CHANGE_TAB } from './types';

export const changeTab = tab => dispatch => {
    dispatch({
        type: CHANGE_TAB,
        payload: tab,
    });
};
