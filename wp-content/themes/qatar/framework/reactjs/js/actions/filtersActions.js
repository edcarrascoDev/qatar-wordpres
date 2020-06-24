import { CHANGE_FILTER, FILTER_SELECTED } from './types';
import { saveInLocalStorage, saveInSessionStorage } from '../utils';

export const changeFilter = filters => dispatch => {
    saveInSessionStorage('selected_filters', filters);

    dispatch({
        type: CHANGE_FILTER,
        payload: filters,
    });
};
