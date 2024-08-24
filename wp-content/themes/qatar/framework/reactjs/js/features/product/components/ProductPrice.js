import { shallowEqual, useSelector } from 'react-redux';
import { useMemo } from 'react';

export const ProductPrice = () => {
  const { product, productVariation } = useSelector(
    (state) => ({
      product: state.product.product,
      productVariation: state.product.productVariation,
    }),
    shallowEqual,
  );

  const price = useMemo(() => {
    return Number(
      productVariation ? productVariation.price : product ? product.price : 0,
    ).toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }, [product, productVariation]);

  return (
    <div className="single-product__price">
      <span>{price}</span>
    </div>
  );
};
