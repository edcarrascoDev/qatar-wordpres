const initialState = {
    isLessThan966: window.screen.width < 992,
    isLessThan768: window.screen.width < 768,
};

const breakpointsReducer = (state = initialState) => {
    return state;
};

export default breakpointsReducer;
