import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Control, actions } from 'react-redux-form';
import { isEmail, isEmpty, isLength, isNumeric } from 'validator';

import {
    requestProductInformation,
    setProductFormFeedback,
} from '../../actions/productInquiryFormActions';

const required = str => !isEmpty(str);
const minLength = str => isLength(str, { min: 9 });
class ProductInquiryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValidity: {
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
                variant: true,
                city: true,
                message: true,
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
        const { requestingInfo, formFeedback, setVariantValue } = this.props;

        return (
            <Fragment>
                <h2 className="headline headline--h4 pt-40 mb-25">Solicita acá tu rodillo</h2>
                <Form
                    className="form"
                    model="productInfo"
                    onSubmit={val => this.handleSubmit(val)}
                    onSubmitFailed={val => this.updateValidity(val)}
                    onUpdate={val => this.updateValidity(val)}
                    validators={{
                        firstName: { required },
                        lastName: { required },
                        phone: { required, minLength, isNumeric },
                        message: { required },
                        variant: { required },
                        city: { required },
                        email: { required, isEmail },
                    }}
                >
                    <div className="form__container">
                        <div className="form__group">
                            <div className={this.getControlClass('firstName')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="productInfo.firstName"
                                    model="productInfo.firstName"
                                    disabled={requestingInfo}
                                />
                                <label
                                    className="mdc-floating-label"
                                    htmlFor="productInfo.firstName"
                                >
                                    Nombre
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className={this.getControlClass('lastName')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="productInfo.lastName"
                                    model="productInfo.lastName"
                                    disabled={requestingInfo}
                                />
                                <label
                                    className="mdc-floating-label"
                                    htmlFor="productInfo.lastName"
                                >
                                    Apellido
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className={this.getControlClass('city')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="productInfo.city"
                                    model="productInfo.city"
                                    disabled={requestingInfo}
                                    placeholder={'ciudad/localidad/municipio'}
                                />
                                <label className="mdc-floating-label" htmlFor="productInfo.city">
                                    Ciudad
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className={this.getControlClass('phone')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="productInfo.phone"
                                    model="productInfo.phone"
                                    disabled={requestingInfo}
                                />
                                <label className="mdc-floating-label" htmlFor="productInfo.phone">
                                    Teléfono
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className={this.getControlClass('email')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="productInfo.email"
                                    model="productInfo.email"
                                    placeholder="e-mail"
                                    disabled={requestingInfo}
                                />
                                <label className="mdc-floating-label" htmlFor="productInfo.email">
                                    Correo Electrónico
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className="mdc-select">
                                <div className="mdc-select__anchor demo-width-class">
                                    <i className="mdc-select__dropdown-icon" />
                                    <div className="mdc-select__selected-text" />
                                    <span className="mdc-floating-label">Tamaño de llanta</span>
                                    <div className="mdc-line-ripple" />
                                </div>

                                <div className="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                                    <ul className="mdc-list">
                                        <li
                                            className="mdc-list-item mdc-list-item--selected"
                                            data-value=""
                                            aria-selected="true"
                                        />
                                        <li
                                            className="mdc-list-item"
                                            onClick={() => setVariantValue('26 pulgadas')}
                                            data-value="26 pulgadas"
                                        >
                                            26 pulgadas
                                        </li>
                                        <li
                                            className="mdc-list-item"
                                            onClick={() => setVariantValue('27.5 pulgadas')}
                                            data-value="27.5 pulgadas"
                                        >
                                            27.5 pulgadas
                                        </li>
                                        <li
                                            className="mdc-list-item"
                                            onClick={() => setVariantValue('29 pulgadas')}
                                            data-value="29 pulgadas"
                                        >
                                            29 pulgadas
                                        </li>
                                        <li
                                            className="mdc-list-item"
                                            onClick={() => setVariantValue('otra medida')}
                                            data-value="otro"
                                        >
                                            Otro medida
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="form__group form__group--full-width">
                            <div
                                className={`mdc-text-field--textarea ${this.getControlClass(
                                    'message',
                                )}`}
                            >
                                <Control.textarea
                                    className={'mdc-text-field__input'}
                                    id="productInfo.message"
                                    model="productInfo.message"
                                    rows="3"
                                    cols="40"
                                    disabled={requestingInfo}
                                />
                                <label className="mdc-floating-label" htmlFor="productInfo.message">
                                    Mensaje
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group form__group--full-width">
                            <div className="form-group col-md-6">{formFeedback}</div>

                            <button
                                type="submit"
                                className="mdc-button mdc-button--raised mdc-button--secondary"
                                disabled={requestingInfo}
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </Form>
            </Fragment>
        );
    }

    getControlClass(controlName) {
        const { formValidity } = this.state;
        const isValid = formValidity[controlName];
        return isValid ? 'mdc-text-field' : 'mdc-text-field mdc-text-field--invalid';
    }
    handleSubmit(value) {
        const {
            requestProductInformation,
            thank_you_page_url,
            setProductFormFeedback,
        } = this.props;

        const request = {
            ...value,
            redirectTo: thank_you_page_url,
        };

        setProductFormFeedback('Procesando Solicitud');

        requestProductInformation(request);
    }
}

const mapStateToProps = state => {
    const { qatarOptions } = state.qatarOptions;

    return {
        thank_you_page_url: qatarOptions.thank_you_page_url,
        theme_url: qatarOptions.theme_url,
        qatar_options: qatarOptions,
        requestingInfo: state.productInquiry.requestingInfo,
        formFeedback: state.productInquiry.formFeedback,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setVariantValue: value => {
            dispatch(actions.change('productInfo.variant', value));
        },
        requestProductInformation: request => dispatch(requestProductInformation(request)),
        setProductFormFeedback: message => dispatch(setProductFormFeedback(message)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductInquiryForm);
