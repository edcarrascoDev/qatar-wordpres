import { getFromSessionStorage } from '../utils';
import { CHANGE_FILTER } from '../actions/types';

const initialState = {
    selected_filters: getFromSessionStorage('selected_filters') || [],
};

const filtersReducer = (state = initialState, action) => {
    const { type, payload } = action;

    if (type === CHANGE_FILTER) {
        return { ...state, selected_filters: payload };
    }
    return state;
};

export default filtersReducer;
