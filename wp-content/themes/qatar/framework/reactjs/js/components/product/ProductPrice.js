import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeProductVariation } from '../../actions/productsActions';

class ProductPrice extends Component {
    constructor(props) {
        super(props);
        const { defaultProductPrice, defaultProductGallery, changeProductVariation } = this.props;

        changeProductVariation({
            price_html: defaultProductPrice,
            variation_gallery_images: defaultProductGallery,
        });
    }

    render() {
        const { productVariation } = this.props;
        return (
            <div
                className="single-product__price"
                dangerouslySetInnerHTML={{ __html: productVariation.price_html }}
            />
        );
    }
}
const mapStateToProps = state => {
    const { product_variation } = state.products;

    return {
        productVariation: product_variation,
    };
};

export default connect(mapStateToProps, { changeProductVariation })(ProductPrice);
