import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Control, actions } from 'react-redux-form';
import { isEmpty, isNumeric } from 'validator';

const required = str => (Number.isInteger(str) ? !isEmpty(str.toString()) : !isEmpty(str));

import { addItemToCart } from '../../actions/addToCartActions';
import { changeProductVariation } from '../../actions/productsActions';

class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValidity: {
                quantity: true,
            },
            filteredOptions: [],
            selectedOptions: {},
            isInStock: true,
            emptyOptions: false,
        };
    }

    updateValidity(values) {
        const { formValidity } = this.state;

        const newValidity = Object.keys(formValidity).reduce((acc, current) => {
            const newValue = values[current].valid || !values[current].touched;
            return { ...acc, [current]: newValue };
        }, {});

        this.setState({
            formValidity: newValidity,
        });
    }

    render() {
        const { minValue, maxValue, inputValue, attributes, requestingInfo } = this.props;
        const { isInStock, emptyOptions } = this.state;

        return (
            <Fragment>

                <Form
                    className="form"
                    model="addToCartItem"
                    onSubmit={val => this.handleSubmit(val)}
                    onSubmitFailed={val => this.updateValidity(val)}
                    onUpdate={val => this.updateValidity(val)}
                    validators={{
                        quantity: { required, isNumeric },
                        variation_id: !!attributes ? required : null,
                    }}
                >
                    {!!attributes
                        ? Object.keys(JSON.parse(attributes)).map(key => {
                              return (
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
                                                  {this.getOptions(
                                                      JSON.parse(attributes)[key],
                                                      key,
                                                  )}
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                        : null}
                    <div className="single-product__actions">
                        <div className="quantity">
                            <Control.input
                                type={'number'}
                                id="addToCartItem.quantity"
                                model="addToCartItem.quantity"
                                disabled={requestingInfo}
                                defaultValue={inputValue}
                                min={minValue}
                                max={maxValue > 0 ? maxValue : null}
                            />
                        </div>

                        <button
                            type="submit"
                            className="mdc-button mdc-button--raised"
                            disabled={requestingInfo || !isInStock}
                        >
                            Añadir al Carrito
                        </button>
                    </div>
                    {!isInStock ? (
                        <span>Lo sentimos, no tenemos disponibilidad para esta Variación</span>
                    ) : null}
                    {emptyOptions ? (
                        <span>
                            Por favor selecciona las opciones de las variantes de este producto
                        </span>
                    ) : null}
                </Form>
            </Fragment>
        );
    }

    getOptions(options, attribute) {
        return options.map((option, index) => {
            return (
                <li
                    key={index}
                    onClick={() => this.filterOptions(option, attribute.toLowerCase())}
                    className="mdc-list-item"
                    data-value={option}
                >
                    {option}
                </li>
            );
        });
    }

    filterOptions(option, attribute) {
        const { productVariations, attributes } = this.props;
        const { filteredOptions, selectedOptions } = this.state;

        const newFilteredOptions = JSON.parse(productVariations)
            .filter(item => item.attributes[`attribute_${attribute}`] === option)
            .map(item => {
                return item.attributes;
            });

        const newSelectedOptions = { ...selectedOptions, [`attribute_${attribute}`]: option };

        this.setState({
            filteredOptions: [...filteredOptions, newFilteredOptions],
            selectedOptions: { ...selectedOptions, [`attribute_${attribute}`]: option },
        });

        if (Object.keys(newSelectedOptions).length === Object.keys(JSON.parse(attributes)).length) {
            this.getVariationId(newSelectedOptions);
        }
    }

    getVariationId(newSelectedOptions) {
        const { productVariations, setVariationIdValue, changeProductVariation } = this.props;

        const variation = JSON.parse(productVariations).find(
            item => JSON.stringify(item.attributes) === JSON.stringify(newSelectedOptions),
        );

        changeProductVariation(variation);

        if (variation && variation.is_in_stock) {
            setVariationIdValue(variation.variation_id);
            this.setState({ isInStock: true });
        } else {
            this.setState({ isInStock: false });
        }
    }

    handleSubmit(val) {
        const { productId, addItemToCart, attributes } = this.props;
        const { selectedOptions } = this.state;

        if (!!attributes && Object.entries(selectedOptions).length === 0) {
            this.setState({ emptyOptions: true });
        } else {
            this.setState({ emptyOptions: false });
            addItemToCart({ ...val, product_id: productId, variation: selectedOptions });
        }
    }
}

const mapStateToProps = state => {
    return {
        requestingInfo: state.addToCart.requestingInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setVariationIdValue: value => {
            dispatch(actions.change('addToCartItem.variation_id', value));
        },
        changeProductVariation: value => dispatch(changeProductVariation(value)),
        addItemToCart: values => dispatch(addItemToCart(values)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
