import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeProductPage, fetchProductList } from '../../actions/productListActions';

class Paginator extends Component {
    constructor(props) {
        super(props);
        const pages = Array.from(Array(props.paginatorCount).keys());

        this.state = {
            pages,
        };
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
        const { pages } = this.state;

        const startItem =
            productPage <= 3
                ? 1
                : productPage > pages[pages.length - 3]
                ? pages[pages.length - 1] - 4
                : productPage - 2;
        const endItem = productPage <= 3 ? 6 : productPage + 3;

        const pagesToShow = paginatorCount > 6 ? pages.slice(startItem, endItem) : pages;

        if (pagesToShow[0] > 1) {
            pagesToShow.unshift(1);
        }
        if (pagesToShow[pagesToShow.length - 1] < pages.length) {
            pagesToShow.push(pages.length);
        }

        if (isLessThan768) {
            return (
                <div className="paginator__count">
                    <span>{`Página ${productPage} de ${paginatorCount}`}</span>
                </div>
            );
        }
        return pagesToShow.map(page => {
            return (
                <React.Fragment key={page}>
                    {pages[pages.length - 1] > pagesToShow[pagesToShow.length - 2] &&
                    page === pages.length ? (
                        <span>...</span>
                    ) : null}
                    <button
                        className="mdc-fab mdc-fab--mini"
                        disabled={page === productPage}
                        onClick={() => this.goToPage(page)}
                    >
                        <div className="mdc-fab__ripple" />
                        <span className="mdc-fab__label">{page}</span>
                    </button>
                    {pagesToShow[1] > 2 && page === 1 ? <span>...</span> : null}
                </React.Fragment>
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
