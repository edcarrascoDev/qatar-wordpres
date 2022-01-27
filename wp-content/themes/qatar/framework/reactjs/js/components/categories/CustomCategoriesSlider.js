import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../../actions/categoriesActions';
import Category from './Category';

class CustomCategoriesSlider extends Component {
    constructor(props) {
        super(props);
        const { fetchCategories, categoriesId } = this.props;
        fetchCategories(0, JSON.parse(categoriesId));
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="categories-slider swiper">
                <div className="swiper-wrapper">
                    {categories.map(category => {
                        return (
                            <div className="swiper-slide auto-height" key={category.id}>
                                <Category category={category} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { custom_categories } = state.categories;

    return {
        categories: custom_categories,
    };
};

export default connect(mapStateToProps, { fetchCategories })(CustomCategoriesSlider);
