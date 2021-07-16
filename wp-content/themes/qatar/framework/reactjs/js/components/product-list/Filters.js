import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories, changeCategory } from '../../actions/categoriesActions';
import { fetchProductList } from '../../actions/productListActions';
import { changeFilter } from '../../actions/filtersActions';
import { Snackbar } from '@material-ui/core';

class Filters extends Component {
    constructor(props) {
        super(props);

        const { fetchCategories, selectedCategory, selectedFilters } = this.props;

        const filters = !!selectedFilters
            ? selectedFilters
            : {
                  min_price: 0,
                  max_price: 10000000,
                  category: '',
              };

        this.state = {
            filters,
            openSnackbar: false,
        };

        const parent =
            !!selectedCategory && selectedCategory.category ? selectedCategory.category.id : 0;
        fetchCategories(parent);
    }

    render() {
        const { selectedCategory } = this.props;
        const { filters } = this.state;
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
                <div className="filter">
                    <h3 className="filter__title">Precio</h3>
                    <div className="filter__price">
                        <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--compact">
                            <span className="mdc-notched-outline">
                                <span className="mdc-notched-outline__leading" />
                                <span className="mdc-notched-outline__notch">
                                    <span className="mdc-floating-label" id="my-label-id">
                                        Mínimo
                                    </span>
                                </span>
                                <span className="mdc-notched-outline__trailing" />
                            </span>

                            <span className="mdc-text-field__affix mdc-text-field__affix--prefix">
                                $
                            </span>
                            <input
                                type={'number'}
                                className={'mdc-text-field__input'}
                                value={filters.min_price}
                                id="min_price"
                                min={10000}
                                max={filters.max_price}
                                onInput={event =>
                                    this.setState({
                                        filters: { ...filters, min_price: event.target.value },
                                    })
                                }
                            />
                        </label>
                        <label className="mdc-text-field mdc-text-field--outlined mdc-text-field--compact">
                            <span className="mdc-notched-outline">
                                <span className="mdc-notched-outline__leading" />
                                <span className="mdc-notched-outline__notch">
                                    <span className="mdc-floating-label" id="my-label-id">
                                        Máximo
                                    </span>
                                </span>
                                <span className="mdc-notched-outline__trailing" />
                            </span>
                            <span className="mdc-text-field__affix mdc-text-field__affix--prefix">
                                $
                            </span>
                            <input
                                type={'number'}
                                className={'mdc-text-field__input'}
                                id="max_price"
                                value={filters.max_price}
                                min={filters.min_price}
                                max={10000000}
                                onInput={event =>
                                    this.setState({
                                        filters: { ...filters, max_price: event.target.value },
                                    })
                                }
                            />
                        </label>

                        <button className={'mdc-button'} onClick={() => this.filterPrice()}>
                            Aplicar precios
                            <span className="mdc-button__ripple" />
                        </button>
                        <Snackbar
                            open={this.state.openSnackbar}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            autoHideDuration={5000}
                            onClose={() => this.closeSnackbar()}
                            message={'El precio mínimo no puede ser mayor al precio máximo'}
                            color={'error'}
                        >
                        </Snackbar>
                    </div>
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
                        <a onClick={() => this.filterCategory(category)}>
                            <span>{name} </span>
                            <b>({count})</b>
                        </a>
                    </li>
                );
            });
        }
    }

    filterCategory(category) {
        const { changeCategory, fetchCategories } = this.props;
        const { filters } = this.state;
        this.setState({ filters: { ...filters, category: category.id } }, () =>
            this.changeFilter(),
        );

        if (category.parent === 0) {
            fetchCategories(category.id);
            changeCategory({ category });
        }
    }

    filterPrice() {
        const { filters } = this.state;
        const { min_price, max_price } = filters;
        if (min_price <= max_price) {
            this.changeFilter();
        } else {
            this.setState({ openSnackbar: true });
        }
    }

    changeFilter() {
        const { fetchProductList, changeFilter, selectedFilters } = this.props;

        const params = { ...selectedFilters, ...this.state.filters };

        changeFilter(params);
        fetchProductList(params);
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

    closeSnackbar() {
        this.setState({ openSnackbar: false })
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
})(Filters);
