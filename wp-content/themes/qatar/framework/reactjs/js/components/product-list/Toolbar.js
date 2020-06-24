import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProductList } from '../../actions/productListActions';
import { changeFilter } from '../../actions/filtersActions';

class Toolbar extends Component {
    render() {
        const { totalCount, showingCount, openFilter } = this.props;
        return (
            <div className={'quick-actions'}>
                <button onClick={event => openFilter(event)} className="icon-button">
                    <i className="fas fa-filter" />
                </button>
                <div className="quick-actions__description">
                    <span>{`Mostrando ${showingCount} de ${totalCount} Productos`}</span>
                </div>
                <div className="spacer" />
                <div className="quick-actions__content">
                    <div className="mdc-text-field">
                        <input
                            className={'mdc-text-field__input'}
                            id="searchProduct"
                            placeholder="ej: portabicicletas"
                            onChange={event => this.handleChange(event)}
                        />
                        <label className="mdc-floating-label" htmlFor="searchProduct">
                            Buscar
                        </label>
                        <div className="mdc-line-ripple" />
                    </div>
                </div>
            </div>
        );
    }

    handleChange(event) {
        const { fetchProductList } = this.props;
        const { value } = event.target;

        fetchProductList({ search: value });
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

export default connect(mapStateToProps, { fetchProductList, changeFilter })(Toolbar);
