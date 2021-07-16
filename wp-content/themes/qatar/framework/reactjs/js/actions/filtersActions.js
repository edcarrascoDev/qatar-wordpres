import { CHANGE_FILTER, CHANGE_SEARCH_VALUE } from './types';
import { saveInSessionStorage } from '../utils';

export const changeFilter = filters => dispatch => {
    saveInSessionStorage('selected_filters', filters);

    dispatch({
        type: CHANGE_FILTER,
        payload: filters,
    });
};


export const changeSearchValue = value => dispatch => {
    dispatch({
        type: CHANGE_SEARCH_VALUE,
        payload: value,
    });
};