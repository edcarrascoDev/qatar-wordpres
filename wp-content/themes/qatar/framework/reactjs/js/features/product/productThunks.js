import { requestProduct, requestProductFailure, requestProductSuccess } from './productSlice';
import { fetchWCApi } from '../../utils/fetchWCApi';

export const fetchProduct =
  ({ productId }) =>
  async (dispatch) => {
    dispatch(requestProduct());
    try {
      let productVariations = [];
      const product = await fetchWCApi(`products/${productId}`);

      if (product.variations.length > 0) {
        productVariations = await fetchWCApi(`products/${productId}/variations`);
      }
      dispatch(requestProductSuccess({ ...product, productVariations }));
    } catch (error) {
      console.error(error);
      dispatch(requestProductFailure(error));
    }
  };
