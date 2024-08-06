import { useSelector } from 'react-redux';

export const ProductPrice = () => {
  const { product, productVariation } = useSelector((state) => ({
    product: state.product.product,
    productVariation: state.product.productVariation,
  }));
  const price = Number(
    productVariation ? productVariation.price : product ? product.price : 0,
  ).toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <div className="single-product__price">
      <span>{price}</span>
    </div>
  );
};
