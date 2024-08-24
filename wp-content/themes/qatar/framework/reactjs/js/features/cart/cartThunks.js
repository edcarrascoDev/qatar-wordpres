import { fetchCoCartApi } from '../../utils/fetchCoCartApi';

export const addToCart = ({ id, quantity = 1, variation }) => {
  fetchCoCartApi('cart/add-item', { id: `${id}`, quantity })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
