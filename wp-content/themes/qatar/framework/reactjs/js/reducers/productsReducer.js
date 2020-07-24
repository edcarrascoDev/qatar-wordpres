import { CHANGE_PRODUCT_VARIATION, CHANGE_TAB } from '../actions/types';

const initialState = {
    selected_tab: 'description',
    product_variation: {},
};

const productsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_TAB:
            return { ...state, selected_tab: payload };
        case CHANGE_PRODUCT_VARIATION:
            return { ...state, product_variation: payload };
        default:
            return state;
    }
};

export default productsReducer;
