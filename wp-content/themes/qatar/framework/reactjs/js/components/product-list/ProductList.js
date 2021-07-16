import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeProductPage, fetchProductList } from '../../actions/productListActions';
import ProductLoop from './ProductLoop';
import Filters from './Filters';
import Toolbar from './Toolbar';
import Paginator from "./Paginator";

class ProductList extends Component {
    constructor(props) {
        super(props);
        const { fetchProductList, selectedFilters } = this.props;

        fetchProductList({ ...selectedFilters });

        this.state = {
            sidebarOpen: false,
        };
    }

    render() {
        const {
            productList,
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
                    <Filters />
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
                    <Paginator />
                </div>
            </div>
        );
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
    const { selected_filters } = state.filtersItems;
    const { product_list } = state.productList;

    return {
        productList: product_list.data,
        selectedFilters: selected_filters,
        productsPerPage: Number(products_per_page),
    };
};

export default connect(mapStateToProps, { fetchProductList, changeProductPage })(ProductList);
