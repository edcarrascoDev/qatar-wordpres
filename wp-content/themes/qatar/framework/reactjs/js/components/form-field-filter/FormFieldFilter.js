import React, { Component } from 'react';
import { connect } from 'react-redux';

import { colombiaJson } from '../../definitions/colombia-json';

import { changeBillingCities, changeShippingCities } from '../../actions/formFieldFilterActions';

class FormFieldFilter extends Component {
    constructor(props) {
        super(props);

        const { args, value, keyValue, changeBillingCities, changeShippingCities } = props;

        console.log(args);

        this.state = {
            [keyValue]: value || '',
        };

        if (args.type === 'state' && !!value) {
            const cities = colombiaJson.find(item => item.departamento === value).ciudades;
            keyValue === 'billing_state'
                ? changeBillingCities(cities)
                : changeShippingCities(cities);
        }
    }

    render() {
        const { keyValue, args, shippingCities, billingCities } = this.props;

        switch (args.type) {
            case 'country':
                return this.renderInputField(true);
            case 'state':
                return this.renderSelectField(true, colombiaJson);
            case 'city':
                return this.renderSelectField(
                    false,
                    keyValue === 'billing_city' ? billingCities : shippingCities,
                );
            case 'text':
            case 'password':
            case 'datetime':
            case 'datetime-local':
            case 'date':
            case 'month':
            case 'time':
            case 'week':
            case 'number':
            case 'email':
            case 'url':
            case 'tel':
                return this.renderInputField();
            default:
                return '';
        }
    }

    renderInputField(readOnly = false) {
        const { keyValue, args, value } = this.props;
        const { type, label, placeholder, id, required } = args;
        return (
            <div className={'mdc-text-field'}>
                <input
                    id={id}
                    type={type}
                    name={keyValue}
                    className={'mdc-text-field__input'}
                    defaultValue={value || ''}
                    placeholder={placeholder}
                    required={required}
                    readOnly={readOnly}
                />
                <label htmlFor={keyValue} className={'mdc-floating-label'}>
                    {label}
                </label>
                <div className="mdc-line-ripple" />
            </div>
        );
    }

    renderSelectField(isState = false, listOptions) {
        const { keyValue, args } = this.props;
        const { label, id, required } = args;

        const valueSelected =
            isState || listOptions.includes(this.state[keyValue]) ? this.state[keyValue] : '';

        return (
            <div className={`mdc-select ${required ? 'mdc-select--required' : ''}`}>
                <div className="mdc-select__anchor">
                    <input
                        id={id}
                        name={keyValue}
                        value={valueSelected}
                        required={required}
                        readOnly={true}
                        className={'mdc-select__selected-text'}
                    />
                    <i className="mdc-select__dropdown-icon" />
                    <span className="mdc-floating-label">{label}</span>
                    <div className="mdc-line-ripple" />
                </div>

                <div className="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
                    <ul className="mdc-list">
                        {listOptions.map((item, index) => {
                            const valueItem = isState ? item.departamento : item;

                            return (
                                <li
                                    key={index}
                                    className={`mdc-list-item ${
                                        valueItem === valueSelected ? 'mdc-list-item--selected' : ''
                                    }`}
                                    onClick={() =>
                                        isState
                                            ? this.setStateId(valueItem, item.ciudades)
                                            : this.setValue(item)
                                    }
                                    data-value={valueItem}
                                >
                                    {valueItem}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    setStateId(state, cities) {
        const { keyValue, changeBillingCities, changeShippingCities } = this.props;
        this.setState({ [keyValue]: state });

        keyValue === 'billing_state' ? changeBillingCities(cities) : changeShippingCities(cities);
    }

    setValue(value) {
        const { keyValue } = this.props;
        this.setState({ [keyValue]: value });
    }
}

const mapStateToProps = state => {
    const { billingCities, shippingCities } = state.formFieldFilter;

    return {
        billingCities,
        shippingCities,
    };
};

export default connect(mapStateToProps, {
    changeBillingCities,
    changeShippingCities,
})(FormFieldFilter);
