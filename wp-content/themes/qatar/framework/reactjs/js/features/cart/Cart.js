import { CartEmpty } from './components/CartEmpty';

export const Cart = ({ items }) => {
  return items.length > 0 ? <div>is not empty</div> : <CartEmpty />;
};
