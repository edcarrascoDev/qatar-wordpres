import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductTabs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mdc-tab-bar" role="tablist">
                <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content">{this.getOptions()}</div>
                    </div>
                </div>
            </div>
        );
    }

    getOptions() {
        const tabOptions = [
            { name: 'Descripción', value: 'description' },
            { name: 'Características', value: 'features' },
            { name: 'Especificaciones', value: 'specs' },
        ];
        return tabOptions.map((option, index) => {
            return (
                <button
                    className={`mdc-tab ${index === 0 ? 'mdc-tab--active' : ''}`}
                    key={option.value}
                    role="tab"
                    aria-selected="true"
                    tabIndex="0"
                    onClick={() => this.handleChange(option.value)}
                >
                    <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">{option.name}</span>
                    </span>
                    <span
                        className={`mdc-tab-indicator ${
                            index === 0 ? 'mdc-tab-indicator--active' : ''
                        }`}
                    >
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                    <span className="mdc-tab__ripple" />
                </button>
            );
        });
    }

    handleChange(event, tab) {
        const { onChange } = this.props;
        onChange(tab);
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProductTabs);
