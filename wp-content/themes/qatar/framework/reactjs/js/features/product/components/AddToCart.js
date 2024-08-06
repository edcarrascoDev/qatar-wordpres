import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import { addItemToCart } from '../../../actions/addToCartActions';
import { fetchProduct } from '../productThunks';
import { setProductVariation } from '../productSlice';

export const AddToCart = ({ minValue, maxValue, inputValue, productId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ productId })).then();
  }, []);

  const product = useSelector((state) => state.product.product);

  return product ? (
    <>
      <AddToCartForm
        product={product}
        minValue={minValue}
        maxValue={maxValue}
        inputValue={inputValue}
        dispatch={dispatch}
      />
    </>
  ) : (
    <Skeleton variant="rectangular" width={'100%'} height={60} />
  );
};

const AddToCartForm = ({ minValue, maxValue, inputValue, product, dispatch }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isInStock, setIsInStock] = useState(true);

  const getVariationId = (updatedOptions) => {
    const variation = product.productVariations.find(
      (item) => item.name === updatedOptions.join(', ').toString(),
    );

    setIsInStock(variation && variation.stock_status === 'instock');

    if (variation) dispatch(setProductVariation(variation));

    return variation?.id || null;
  };

  const handleFormikSubmit = (val) => {
    addItemToCart({ ...val, product_id: product.id, variation: selectedOptions });
  };

  const validationSchema = Yup.object().shape({
    quantity: Yup.number()
      .min(minValue, 'Agrega al menos un producto.')
      .max(
        maxValue > 0 ? maxValue : Number.MAX_SAFE_INTEGER,
        'Lo sentimos, no puede agregar más productos. Ha alcanzado el límite disponible en stock.',
      )
      .required('Agrega al menos un producto.'),
    variation_id:
      product.attributes.length > 0
        ? Yup.number().required('Selecciona una opción')
        : Yup.number().notRequired(),
  });

  return product ? (
    <>
      <Formik
        initialValues={{
          quantity: inputValue,
          variation_id: null,
        }}
        validationSchema={validationSchema}
        validateOnChange={true}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isValid, errors, touched, setFieldValue, values }) => {
          const hasError = (attribute, index) => {
            return !Boolean(selectedOptions[index]) && errors.variation_id && touched.variation_id;
          };

          return (
            <Form>
              <>
                {product.attributes.map((attribute, index) => (
                  <div className="form__group" key={attribute.slug}>
                    <FormControl fullWidth error={hasError(attribute, index)}>
                      <InputLabel id={`${attribute.slug}_label`}>{attribute.name}</InputLabel>
                      <Select
                        labelId={`${attribute.slug}_label`}
                        label={attribute.name}
                        error={hasError(attribute, index)}
                        defaultValue={''}
                        onChange={(event) => {
                          const updatedOptions = [...selectedOptions];
                          updatedOptions[index] = event.target.value;
                          setSelectedOptions(updatedOptions);
                          setFieldValue('variation_id', getVariationId(updatedOptions)).then();
                        }}
                      >
                        {attribute.options.map((option, optionIndex) => (
                          <MenuItem key={optionIndex} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                ))}
              </>
              <div className="single-product__actions">
                <div className="quantity">
                  <Field name={'quantity'} id="add_to_cart_quantity" />
                </div>
                <button
                  type="submit"
                  className="mdc-button mdc-button--raised"
                  disabled={isValid && !isInStock}
                >
                  Añadir al Carrito
                </button>
              </div>
              <small>{errors.quantity && touched.quantity && errors.quantity}</small>
              {!isInStock && isValid && (
                <small>Lo sentimos, no tenemos disponibilidad para esta Variación</small>
              )}
            </Form>
          );
        }}
      </Formik>
    </>
  ) : (
    <span>Cargando</span>
  );
};
