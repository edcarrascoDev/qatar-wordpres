import { createSlice } from '@reduxjs/toolkit';
import { processStatus } from '../../utils/processStatus';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: null,
    processStatus: processStatus.notLoaded,
    error: null,
    productVariation: null,
  },
  reducers: {
    setProductVariation: (state, action) => {
      state.productVariation = action.payload;
    },
    requestProduct: (state) => {
      state.processStatus = processStatus.loading;
      state.product = null;
      state.error = null;
    },
    requestProductSuccess: (state, action) => {
      state.processStatus = processStatus.loaded;
      state.product = action.payload;
    },
    requestProductFailure: (state) => {
      state.processStatus = processStatus.failed;
      state.error = action.payload;
    },
  },
});

export const { setProductVariation, requestProduct, requestProductSuccess, requestProductFailure } =
  productSlice.actions;

export default productSlice.reducer;
