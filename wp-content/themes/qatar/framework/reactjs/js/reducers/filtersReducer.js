import { getFromSessionStorage } from '../utils';
import { CHANGE_FILTER, CHANGE_SEARCH_VALUE } from '../actions/types';

const initialState = {
    selected_filters: getFromSessionStorage('selected_filters') || [],
    search_value: '',
};

const filtersReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === CHANGE_FILTER) {
        return { ...state, selected_filters: payload };
    } else if (type === CHANGE_SEARCH_VALUE) {
        return { ...state,  search_value: payload };
    }
    return state;
};

export default filtersReducer;
