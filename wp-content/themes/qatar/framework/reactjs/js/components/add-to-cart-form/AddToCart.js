import { useEffect, useState } from 'react';
import { Control, actions } from 'react-redux-form';
import { addItemToCart } from '../../actions/addToCartActions';
import { changeProductVariation } from '../../actions/productsActions';
import { useDispatch } from 'react-redux';
import { Field, Formik, useFormik, Form } from 'formik';
import * as Yup from 'yup';

export const AddToCart = ({
  minValue,
  maxValue,
  inputValue,
  attributes,
  productVariations,
  productId,
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [emptyOptions, setEmptyOptions] = useState(false);
  const [isInStock, setIsInStock] = useState(true);

  const dispatch = useDispatch();

  const getVariationId = (updatedOptions) => {
    const variation = productVariations.find(
      (item) => JSON.stringify(item.attributes) === JSON.stringify(updatedOptions),
    );

    console.log(variation);

    setIsInStock(variation && variation.is_in_stock);

    return variation?.variation_id || null;

    //
    // // TODO
    // // changeProductVariation(variation);
    //
    // if (variation && variation.is_in_stock) {
    //   //TODO
    //   // setVariationIdValue(variation.variation_id);
    //   setIsInStock(true);
    // } else {
    //   setIsInStock(false);
    // }
  };

  const handleFormikSubmit = (val) => {
    addItemToCart({ ...val, product_id: productId, variation: selectedOptions });
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
      Object.keys(attributes).length > 0
        ? Yup.number().required('Selecciona una opción')
        : Yup.number().notRequired(),
  });

  return (
    <>
      <Formik
        initialValues={{
          quantity: inputValue,
          variation_id: null,
        }}
        validationSchema={validationSchema}
        validateOnChange={true}
        onSubmit={(values, { setSubmitting }) => {
          console.log('test');
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isValid, errors, touched, setFieldValue }) => (
          <Form>
            <>
              {Object.keys(attributes).map((key) => (
                <div className="form__group" key={key}>
                  <div className="mdc-select">
                    <div className="mdc-select__anchor">
                      <i className="mdc-select__dropdown-icon" />
                      <div className="mdc-select__selected-text" />
                      <span className="mdc-floating-label">{key}</span>
                      <div className="mdc-line-ripple" />
                    </div>
                    <div className="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                      <ul className="mdc-list">
                        {attributes[key].map((option, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setSelectedOptions((prevSelectedOptions) => {
                                const updatedOptions = {
                                  ...prevSelectedOptions,
                                  [`attribute_${key.toLowerCase()}`]: option,
                                };
                                setFieldValue('variation_id', getVariationId(updatedOptions));

                                return updatedOptions;
                              });
                            }}
                            className="mdc-list-item"
                            data-value={option}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <small>
                    {!Object.keys(selectedOptions).includes(`attribute_${key.toLowerCase()}`) &&
                      errors.variation_id &&
                      touched.variation_id &&
                      errors.variation_id}
                  </small>
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
        )}
      </Formik>
    </>
  );
};
