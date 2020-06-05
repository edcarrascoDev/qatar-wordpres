import { CHANGE_TAB } from '../actions/types';

const initialState = {
    selected_tab: 'description',
};

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_TAB:
            return { ...state, selected_tab: payload };
        default:
            return state;
    }
};

export default productsReducer;
