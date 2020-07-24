import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRelatedProductList } from '../../actions/productListActions';
import ProductLoop from '../product-list/ProductLoop';

class relatedProductList extends Component {
    constructor(props) {
        super(props);

        const { fetchRelatedProductList, productsId } = this.props;

        fetchRelatedProductList(productsId);
    }
    render() {
        const { relatedProducts } = this.props;

        return (
            <div className={'products__list products__list--no-sidebar'}>
                <ProductLoop productsToShow={4} productList={relatedProducts} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { related_product_list } = state.productList;

    return {
        relatedProducts: related_product_list,
    };
};

export default connect(mapStateToProps, { fetchRelatedProductList })(relatedProductList);
