import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProductImage } from '../../common/getImageUrl';

class ProductLoop extends Component {
    render() {
        const { productLoading } = this.props;
        return <Fragment>{productLoading ? this.renderLoading() : this.renderProducts()}</Fragment>;
    }

    renderProducts() {
        const { productList, noAvailableImage } = this.props;

        if (!!productList && productList.length > 0) {
            return productList.map((product, index) => {
                const {
                    name,
                    permalink,
                    images,
                    sale_price,
                    regular_price,
                    price_html,
                    on_sale,
                } = product;
                return (
                    <div key={index} className={'product'}>
                        {on_sale
                            ? this.getDiscount(Number(sale_price), Number(regular_price))
                            : null}
                        <div className="product__image">
                            <a href={permalink} />
                            {images.length > 0 ? (
                                <img
                                    name={images[0].name}
                                    alt={images[0].alt}
                                    src={getProductImage(images[0])}
                                />
                            ) : (
                                <img
                                    name={noAvailableImage.name}
                                    alt={noAvailableImage.alt}
                                    src={noAvailableImage.url}
                                />
                            )}
                        </div>
                        <div className="product__row">
                            <a href={permalink} className={'product__name'}>
                                {name}
                            </a>
                        </div>
                        <div className="spacer" />
                        <div className="product__row">
                            <div
                                className={'product__price'}
                                dangerouslySetInnerHTML={{ __html: price_html }}
                            />
                        </div>
                        <div className="product__row product__row--last">
                            <a
                                className={'mdc-button mdc-button--raised mdc-button--full'}
                                href={permalink}
                            >
                                Ver producto
                            </a>
                        </div>
                    </div>
                );
            });
        }

        return <p>No se encontró ningún producto para esta búsqueda</p>;
    }

    renderLoading() {
        const { productsToShow } = this.props;
        return Array.from(Array(productsToShow).keys()).map(key => {
            return (
                <div key={key} className="product product--on-load">
                    <div className="product__loading" />
                    <div className="product__loading" />
                    <div className="product__loading" />
                </div>
            );
        });
    }

    getDiscount(sale_price, regular_price) {
        const discount = (100 * (regular_price - sale_price)) / regular_price;
        return (
            <span className="on-sale">-{Math.round((discount + Number.EPSILON) * 10) / 10}%</span>
        );
    }
}

const mapStateToProps = state => {
    const { product_loading } = state.productList;
    const { qatarOptions } = state.qatarOptions;

    return {
        productLoading: product_loading,
        noAvailableImage: qatarOptions.not_available_image,
    };
};

export default connect(mapStateToProps)(ProductLoop);
