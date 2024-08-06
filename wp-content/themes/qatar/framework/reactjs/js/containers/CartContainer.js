import { Cart } from '../features/cart/Cart';

export const CartContainer = () => {
  return (
    <div className="container">
      <Cart items={[]} />
    </div>
  );
};
