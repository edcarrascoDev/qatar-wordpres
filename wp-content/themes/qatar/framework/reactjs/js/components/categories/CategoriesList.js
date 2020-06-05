import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImageUrl } from '../../common/getImageUrl';

class CategoriesLis extends Component {
    render() {
        return <section>{this.categoriesList()}</section>;
    }

    categoriesList() {
        const { categories, qatarOptions } = this.props;
        return categories.map((category, index) => {
            return (
                <div key={index} className={'product product--simple'}>
                    <a href="" />
                    <div className="product__image">
                        <img
                            src={getImageUrl(category.mainImage, qatarOptions.not_available_image)}
                            title={category.name}
                            alt={category.name}
                        />
                    </div>
                    <h4 className={'headline headline--h6'}>{category.name}</h4>
                </div>
            );
        });
    }
}

const mapStateToProps = state => {
    console.log(state);
    const { qatar_categories } = state.categories;
    const { qatarOptions } = state.qatarOptions;

    return {
        categories: qatar_categories,
        qatarOptions,
    };
};

export default connect(mapStateToProps)(CategoriesLis);
