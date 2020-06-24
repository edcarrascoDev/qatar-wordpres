import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import { isEmpty, isNumeric } from 'validator';

const required = str => (Number.isInteger(str) ? !isEmpty(str.toString()) : !isEmpty(str));

class AddToCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValidity: {
                quantity: true,
            },
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
        const { minValue, maxValue, inputValue, requestingInfo } = this.props;
        return (
            <Form
                className="form"
                model="addToCartItem"
                onSubmit={val => this.handleSubmit(val)}
                onSubmitFailed={val => this.updateValidity(val)}
                onUpdate={val => this.updateValidity(val)}
                validators={{
                    quantity: { required, isNumeric },
                }}
            >
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
                        disabled={requestingInfo}
                    >
                        Añadir al Carrito
                    </button>
                </div>
            </Form>
        );
    }

    handleSubmit(val) {
        const { productId } = this.props;
        console.log(val);
    }
}

const mapStateToProps = state => {
    return {
        requestingInfo: state.addToCart.requestingInfo,
        formFeedback: state.addToCart.formFeedback,
    };
};

export default connect(mapStateToProps)(AddToCart);
