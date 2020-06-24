import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Control, actions } from 'react-redux-form';
import { isEmail, isEmpty } from 'validator';

import { requestReviewComment, setReviewFormFeedback } from '../../actions/reviewFormActions';

const required = str => (Number.isInteger(str) ? !isEmpty(str.toString()) : !isEmpty(str));

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValidity: {
                reviewer: true,
                reviewer_email: true,
                rating: true,
                review: true,
            },
            formShowed: false,
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
        const { requestingInfo, formFeedback, setRatingValue, formSuccessful } = this.props;

        const { formShowed } = this.state;

        return (
            <Fragment>
                <div className="mb-25">
                    <a
                        className={`link ${formSuccessful ? 'visually-hidden' : ''} `}
                        onClick={() => this.setState({ formShowed: !formShowed })}
                    >
                        {formShowed ? 'Cancelar' : 'Agregar comentario'}
                    </a>
                </div>
                <Form
                    className={`form ${!formShowed || formSuccessful ? 'visually-hidden' : ''}`}
                    model="reviewInfo"
                    onSubmit={val => this.handleSubmit(val)}
                    onSubmitFailed={val => this.updateValidity(val)}
                    onUpdate={val => this.updateValidity(val)}
                    validators={{
                        reviewer: { required },
                        reviewer_email: { required, isEmail },
                        rating: { required },
                        review: { required },
                    }}
                >
                    <div className="form__group">
                        <h2 className="headline headline--h6">Añade un commentario</h2>
                        <div
                            className="mdc-select "
                            data-valid={this.getControlValidation('rating')}
                        >
                            <div className="mdc-select__anchor">
                                <i className="mdc-select__dropdown-icon" />
                                <div className="mdc-select__selected-text" />
                                <span className="mdc-floating-label">Tu Calificación</span>
                                <div className="mdc-line-ripple" />
                            </div>

                            <div className="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                                <ul className="mdc-list">
                                    <li
                                        className="mdc-list-item"
                                        onClick={() => setRatingValue(5)}
                                        data-value={5}
                                    >
                                        Perfecto
                                    </li>
                                    <li
                                        className="mdc-list-item"
                                        onClick={() => setRatingValue(4)}
                                        data-value={4}
                                    >
                                        Bueno
                                    </li>
                                    <li
                                        className="mdc-list-item"
                                        onClick={() => setRatingValue(3)}
                                        data-value={3}
                                    >
                                        Normal
                                    </li>
                                    <li
                                        className="mdc-list-item"
                                        onClick={() => setRatingValue(2)}
                                        data-value={2}
                                    >
                                        regular
                                    </li>
                                    <li
                                        className="mdc-list-item"
                                        onClick={() => setRatingValue(1)}
                                        data-value={1}
                                    >
                                        Malo
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="form__group">
                        <div
                            className={'mdc-text-field'}
                            data-valid={this.getControlValidation('reviewer')}
                        >
                            <Control.text
                                className={'mdc-text-field__input'}
                                id="reviewInfo.reviewer"
                                model="reviewInfo.reviewer"
                                disabled={requestingInfo}
                            />
                            <label className="mdc-floating-label" htmlFor="reviewInfo.reviewer">
                                Nombre
                            </label>
                            <div className="mdc-line-ripple" />
                        </div>
                    </div>

                    <div className="form__group">
                        <div
                            className={'mdc-text-field'}
                            data-valid={this.getControlValidation('phreviewer_emailone')}
                        >
                            <Control.text
                                className={'mdc-text-field__input'}
                                id="reviewInfo.reviewer_email"
                                model="reviewInfo.reviewer_email"
                                placeholder="e-mail"
                                disabled={requestingInfo}
                            />
                            <label
                                className="mdc-floating-label"
                                htmlFor="reviewInfo.reviewer_email"
                            >
                                Correo Electrónico
                            </label>
                            <div className="mdc-line-ripple" />
                        </div>
                    </div>

                    <div className="form__group form__group--full-width">
                        <div
                            className={
                                'mdc-text-field mdc-text-field--no-label mdc-text-field--textarea'
                            }
                            data-valid={this.getControlValidation('review')}
                        >
                            <Control.textarea
                                className={'mdc-text-field__input'}
                                id="reviewInfo.review"
                                model="reviewInfo.review"
                                rows="6"
                                disabled={requestingInfo}
                            />
                            <label className="mdc-floating-label" htmlFor="reviewInfo.review">
                                Mensaje
                            </label>
                            <div className="mdc-line-ripple" />
                        </div>
                    </div>
                    <div className="form__group form__group--full-width">
                        <button
                            type="submit"
                            className="mdc-button mdc-button--raised mdc-button--secondary"
                            disabled={requestingInfo}
                        >
                            Enviar
                        </button>
                    </div>
                </Form>

                {!!formFeedback ? this.getAlert() : ''}
            </Fragment>
        );
    }

    getAlert() {
        const { formFeedback, formSuccessful } = this.props;
        return (
            <div className={`alert alert--${formSuccessful ? 'success' : 'warn'}`}>
                {formFeedback}
            </div>
        );
    }
    getControlValidation(controlName) {
        const { formValidity } = this.state;
        return formValidity[controlName];
    }

    handleSubmit(values) {
        const { requestReviewComment, setReviewFormFeedback, productId } = this.props;

        const requestValues = {
            ...values,
            status: 'hold',
            product_id: productId,
        };

        setReviewFormFeedback('Procesando solicitud');

        requestReviewComment(requestValues);
    }
}

const mapStateToProps = state => {
    return {
        requestingInfo: state.reviewUs.requestingInfo,
        formFeedback: state.reviewUs.formFeedback,
        formSuccessful: state.reviewUs.formSuccessful,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setRatingValue: value => {
            dispatch(actions.change('reviewInfo.rating', value));
        },
        requestReviewComment: values => dispatch(requestReviewComment(values)),
        setReviewFormFeedback: message => dispatch(setReviewFormFeedback(message)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
