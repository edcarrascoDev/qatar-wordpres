import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import { isEmail, isEmpty, isLength, isNumeric } from 'validator';

import {
    requestContactInformation,
    setContactFormFeedback,
} from '../../actions/contactFormActions';

const required = str => !isEmpty(str);
const minLength = str => isLength(str, { min: 9 });

class ContactUsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValidity: {
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
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
        const { requestingInfo, formFeedback } = this.props;

        return (
            <Fragment>
                <h2 className="headline headline--h4 pt-40 mb-25">Envíanos un mensaje</h2>
                <Form
                    className="form"
                    model="contactInfo"
                    onSubmit={val => this.handleSubmit(val)}
                    onSubmitFailed={val => this.updateValidity(val)}
                    onUpdate={val => this.updateValidity(val)}
                    validators={{
                        firstName: { required },
                        lastName: { required },
                        phone: { required, minLength, isNumeric },
                        message: { required },
                        email: { required, isEmail },
                    }}
                >
                    <div className="form__container">
                        <div className="form__group">
                            <div className={this.getControlClass('firstName')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="contactInfo.firstName"
                                    model="contactInfo.firstName"
                                    disabled={requestingInfo}
                                />
                                <label
                                    className="mdc-floating-label"
                                    htmlFor="contactInfo.firstName"
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
                                    id="contactInfo.lastName"
                                    model="contactInfo.lastName"
                                    disabled={requestingInfo}
                                />
                                <label
                                    className="mdc-floating-label"
                                    htmlFor="contactInfo.lastName"
                                >
                                    Apellido
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className={this.getControlClass('phone')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="contactInfo.phone"
                                    model="contactInfo.phone"
                                    disabled={requestingInfo}
                                />
                                <label className="mdc-floating-label" htmlFor="contactInfo.phone">
                                    Teléfono
                                </label>
                                <div className="mdc-line-ripple" />
                            </div>
                        </div>

                        <div className="form__group">
                            <div className={this.getControlClass('email')}>
                                <Control.text
                                    className={'mdc-text-field__input'}
                                    id="contactInfo.email"
                                    model="contactInfo.email"
                                    placeholder="e-mail"
                                    disabled={requestingInfo}
                                />
                                <label className="mdc-floating-label" htmlFor="contactInfo.email">
                                    Correo Electrónico
                                </label>
                                <div className="mdc-line-ripple" />
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
                                    id="contactInfo.message"
                                    model="contactInfo.message"
                                    rows="3"
                                    cols="40"
                                    disabled={requestingInfo}
                                />
                                <label className="mdc-floating-label" htmlFor="contactInfo.message">
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
            requestContactInformation,
            thank_you_page_url,
            setContactFormFeedback,
        } = this.props;

        const request = {
            ...value,
            redirectTo: thank_you_page_url,
        };

        setContactFormFeedback('Processing request');

        requestContactInformation(request);
    }
}

const mapStateToProps = state => {
    const { qatarOptions } = state.qatarOptions;

    return {
        thank_you_page_url: qatarOptions.thank_you_page_url,
        theme_url: qatarOptions.theme_url,
        qatar_options: qatarOptions,
        requestingInfo: state.contactUs.requestingInfo,
        formFeedback: state.contactUs.formFeedback,
    };
};

export default connect(mapStateToProps, { requestContactInformation, setContactFormFeedback })(
    ContactUsForm,
);
