import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, changeCategory } from '../../actions/categoriesActions';
import { fetchProductList } from '../../actions/productListActions';
import { changeFilter } from '../../actions/filtersActions';

class CategoryFilter extends Component {
    componentDidMount() {
        const { fetchCategories, selectedCategory } = this.props;
        const parent =
            !!selectedCategory && selectedCategory.category ? selectedCategory.category.id : 0;
        fetchCategories(parent);
    }

    render() {
        const { selectedCategory } = this.props;
        return (
            <div className={'sidebar__filter'}>
                <div className="filter">
                    {!!selectedCategory && selectedCategory.category ? (
                        <div className={'filter__selected'} onClick={() => this.removeCategory()}>
                            <h3 className={'filter__title'}>{selectedCategory.category.name}</h3>
                        </div>
                    ) : (
                        <h3 className={'filter__title'}>Categorías</h3>
                    )}
                    <ul className="filter__list">{this.renderCategories()}</ul>
                </div>
            </div>
        );
    }

    renderCategories() {
        const { categories } = this.props;

        if (categories && categories.length > 0) {
            return categories.map(category => {
                const { id, name, count } = category;
                return (
                    <li key={id}>
                        <a onClick={() => this.filterCategory(category)}>{`${name} (${count})`}</a>
                    </li>
                );
            });
        }
    }

    filterCategory(category) {
        const {
            fetchProductList,
            changeFilter,
            selectedFilters,
            changeCategory,
            fetchCategories,
        } = this.props;

        const newParams = { ...selectedFilters, category: category.id };

        changeFilter(newParams);
        fetchProductList(newParams);

        if (category.parent === 0) {
            fetchCategories(category.id);
            changeCategory({ category });
        }
    }

    removeCategory() {
        const {
            fetchProductList,
            changeFilter,
            selectedFilters,
            changeCategory,
            fetchCategories,
        } = this.props;

        delete selectedFilters.category;
        changeCategory({});
        changeFilter(selectedFilters);
        fetchProductList(selectedFilters);
        fetchCategories();
    }
}
const mapStateToProps = state => {
    const { products_categories, selected_category } = state.categories;
    const { selected_filters } = state.filtersItems;

    return {
        categories: products_categories,
        selectedFilters: selected_filters,
        selectedCategory: selected_category,
    };
};
export default connect(mapStateToProps, {
    fetchCategories,
    fetchProductList,
    changeFilter,
    changeCategory,
})(CategoryFilter);
