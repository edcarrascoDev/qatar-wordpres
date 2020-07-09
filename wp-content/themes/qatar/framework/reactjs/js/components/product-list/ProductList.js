import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeProductPage, fetchProductList } from '../../actions/productListActions';
import ProductLoop from './ProductLoop';
import CategoryFilter from './CategoryFilter';
import Toolbar from './Toolbar';

class ProductList extends Component {
    constructor(props) {
        super(props);
        const { fetchProductList, categoryId, selectedCategory } = this.props;

        const id = !!categoryId
            ? categoryId
            : !!selectedCategory && selectedCategory.category
            ? selectedCategory.category.id
            : '';

        fetchProductList({ category: id });

        this.state = {
            sidebarOpen: false,
        };
    }

    render() {
        const {
            paginatorCount,
            productList,
            productPage,
            isLessThan768,
            productsPerPage,
        } = this.props;
        const { sidebarOpen } = this.state;

        return (
            <div className={'products__container'}>
                <section className={'toolbar'}>
                    <Toolbar openFilter={event => this.toggleTab(event)} />
                </section>
                <aside className={`sidebar sidebar--${sidebarOpen ? 'open' : 'close'}`}>
                    <div className="sidebar__title">
                        <h2 className="headline headline--h5">Filtros</h2>
                        <button
                            onClick={event => this.toggleTab(event)}
                            className={'icon-button mdc-ripple-upgraded'}
                        >
                            <i className="icon icon--close-outline" />
                        </button>
                    </div>
                    <CategoryFilter />
                    <div className="sidebar__actions">
                        <button
                            onClick={event => this.toggleTab(event)}
                            className={'mdc-button mdc-button--raised'}
                        >
                            Aplicar
                        </button>
                    </div>
                </aside>
                <div className="content">
                    <div className={'products__list'}>
                        <ProductLoop productsToShow={productsPerPage} productList={productList} />
                    </div>
                    <div className="paginator">
                        <button
                            disabled={productPage === 1}
                            onClick={() => this.goToPage(productPage - 1)}
                            className={`mdc-fab mdc-fab--mini ${
                                !isLessThan768 ? 'mdc-fab--extended' : ''
                            }`}
                        >
                            <div className="mdc-fab__ripple" />
                            <span className="icon icon--back-outline mdc-fab__icon" />
                            {!isLessThan768 ? (
                                <span className="mdc-fab__label">Anterior</span>
                            ) : null}
                        </button>
                        {this.getPaginatorCount()}
                        <button
                            disabled={paginatorCount === productPage}
                            onClick={() => this.goToPage(productPage + 1)}
                            className={`mdc-fab mdc-fab--mini ${
                                !isLessThan768 ? 'mdc-fab--extended' : ''
                            }`}
                        >
                            <div className="mdc-fab__ripple" />
                            {!isLessThan768 ? (
                                <span className="mdc-fab__label">Siguiente</span>
                            ) : null}
                            <span className="icon icon--forward-outline mdc-fab__icon" />
                        </button>
                    </div>
                </div>
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
        const { changeProductPage, fetchProductList } = this.props;
        changeProductPage(page);
        fetchProductList({ page: page });
    }

    toggleTab(event) {
        event.preventDefault();
        const { sidebarOpen } = this.state;
        document.body.style.overflowY = !sidebarOpen ? 'hidden' : 'auto';

        this.setState({ sidebarOpen: !sidebarOpen });
    }
}

const mapStateToProps = state => {
    const { products_per_page } = state.qatarOptions.qatarOptions;
    const { selected_category } = state.categories;
    const { product_list, product_page } = state.productList;
    const { isLessThan768 } = state.breakpoints;

    return {
        productList: product_list.data,
        totalCount: product_list.total_count,
        paginatorCount: product_list.paginator_count,
        productPage: product_page,
        selectedCategory: selected_category,
        productsPerPage: Number(products_per_page),
        isLessThan768,
    };
};

export default connect(mapStateToProps, { fetchProductList, changeProductPage })(ProductList);
