import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProductList } from '../../actions/productListActions';
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
        const { sidebarOpen } = this.state;

        return (
            <div className={'products__container'}>
                <section className="toolbar">
                    <Toolbar openFilter={event => this.toggleTab(event)} />
                </section>
                <aside className={`sidebar sidebar--${sidebarOpen ? 'open' : 'close'}`}>
                    <div className="sidebar__title">
                        <h2 className="headline headline--h5">Filtros</h2>
                        <button onClick={event => this.toggleTab(event)} className={'icon-button'}>
                            <span>&times;</span>
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
                    <ProductLoop />
                </div>
            </div>
        );
    }

    toggleTab(event) {
        event.preventDefault();
        const { sidebarOpen } = this.state;

        document.body.style.overflowY = sidebarOpen ? 'hidden' : 'auto';

        this.setState({ sidebarOpen: !sidebarOpen });
    }
}

const mapStateToProps = state => {
    const { selected_category } = state.categories;

    return {
        selectedCategory: selected_category,
    };
};

export default connect(mapStateToProps, { fetchProductList })(ProductList);
