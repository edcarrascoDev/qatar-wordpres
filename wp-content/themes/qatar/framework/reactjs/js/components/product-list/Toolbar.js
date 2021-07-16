import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProductList } from '../../actions/productListActions';
import { changeSearchValue } from '../../actions/filtersActions';

class Toolbar extends Component {
    constructor(props) {
        super(props);

        this.timeout = 0;
    }

    render() {
        const { totalCount, showingCount, openFilter } = this.props;
        return (
            <div className={'quick-actions'}>
                <button
                    onClick={event => openFilter(event)}
                    className="icon-button mdc-ripple-upgraded"
                >
                    <i className="icon icon--options-outline" />
                </button>
                <div className="quick-actions__description">
                    <span>{`Mostrando ${showingCount} de ${
                        !!totalCount ? totalCount : 0
                    } Productos`}</span>
                </div>
                <div className="spacer" />
                <div className="quick-actions__content">
                    <label className="mdc-text-field">
                        <span className="mdc-floating-label">Buscar</span>
                        <input
                            className={'mdc-text-field__input'}
                            id="searchProduct"
                            placeholder="ej: portabicicletas"
                            onChange={event => this.handleChange(event)}
                        />
                        <div className="mdc-line-ripple" />
                    </label>
                </div>
            </div>
        );
    }

    handleChange(event) {
        const { fetchProductList, changeSearchValue } = this.props;
        const { value } = event.target;
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            changeSearchValue(value);
            fetchProductList({ search: value });
        }, 1000);
    }
}

const mapStateToProps = state => {
    const { selected_filters } = state.filtersItems;
    const { product_list } = state.productList;

    return {
        selectedFilters: selected_filters,
        totalCount: product_list.total_count,
        showingCount: product_list.data ? product_list.data.length : 0,
    };
};

export default connect(mapStateToProps, { fetchProductList, changeSearchValue })(
    Toolbar,
);
