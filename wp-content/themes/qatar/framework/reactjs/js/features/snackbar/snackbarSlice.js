import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    open: false,
    hideDuration: 6000,
    message: '',
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
    linkUrl: null,
    linkText: 'Ir Allá',
  },
  reducer: {
    openSnackbar: (state, actions) => (state.open = actions.payload),
    setDuration: (state, actions) => {
      state.hideDuration = actions.payload;
    },
    setMessage: (state, actions) => (state.message = actions.payload),
    setAnchorOrigin: (state, actions) => (state.anchorOrigin = actions.payload),
    setLinkText: (state, actions) => (state.linkText = actions.payload),
    setLinkUrl: (state, actions) => (state.linkUrl = actions.payload),
  },
});

export const { openSnackbar, setDuration, setMessage, setAnchorOrigin, setLinkText, setLinkUrl } =
  snackbarSlice.actions;

export default snackbarSlice.reducer;
