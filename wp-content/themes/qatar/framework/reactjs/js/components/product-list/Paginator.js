import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeProductPage, fetchProductList } from '../../actions/productListActions';

class Paginator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { paginatorCount, productPage, isLessThan768 } = this.props;
        return (
            <div className={'paginator'}>
                <button
                    disabled={productPage === 1}
                    onClick={() => this.goToPage(productPage - 1)}
                    className={`mdc-fab mdc-fab--mini ${!isLessThan768 ? 'mdc-fab--extended' : ''}`}
                >
                    <div className="mdc-fab__ripple" />
                    <span className="icon icon--back-outline mdc-fab__icon" />
                    {!isLessThan768 ? <span className="mdc-fab__label">Anterior</span> : null}
                </button>
                {this.getPaginatorCount()}
                <button
                    disabled={paginatorCount === productPage}
                    onClick={() => this.goToPage(productPage + 1)}
                    className={`mdc-fab mdc-fab--mini ${!isLessThan768 ? 'mdc-fab--extended' : ''}`}
                >
                    <div className="mdc-fab__ripple" />
                    {!isLessThan768 ? <span className="mdc-fab__label">Siguiente</span> : null}
                    <span className="icon icon--forward-outline mdc-fab__icon" />
                </button>
            </div>
        );
    }

    getPaginatorCount() {
        const { paginatorCount, productPage, isLessThan768 } = this.props;
        if (isLessThan768) {
            return (
                <div className="paginator__count">
                    <span>{`Página ${productPage} de ${paginatorCount}`}</span>
                </div>
            );
        }
        return Array.apply(null, { length: paginatorCount }).map((item, index) => {
            return (
                <button
                    className="mdc-fab mdc-fab--mini"
                    key={index + 1}
                    disabled={index + 1 === productPage}
                    onClick={() => this.goToPage(index + 1)}
                >
                    <div className="mdc-fab__ripple" />
                    <span className="mdc-fab__label">{index + 1}</span>
                </button>
            );
        });
    }

    goToPage(page) {
        const { changeProductPage, fetchProductList, selectedFilters, searchValue } = this.props;

        const params = !!searchValue ? { search: searchValue } : selectedFilters;
        changeProductPage(page);
        fetchProductList({ ...params, page });
    }
}

const mapStateToProps = state => {
    const { product_list, product_page } = state.productList;
    const { selected_filters, search_value } = state.filtersItems;
    const { isLessThan768 } = state.breakpoints;

    return {
        paginatorCount: product_list.paginator_count,
        searchValue: search_value,
        productPage: product_page,
        selectedFilters: selected_filters,
        isLessThan768,
    };
};

export default connect(mapStateToProps, { fetchProductList, changeProductPage })(Paginator);
