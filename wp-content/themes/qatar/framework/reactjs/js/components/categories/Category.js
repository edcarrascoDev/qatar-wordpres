import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductImage } from '../../common/getImageUrl';

class Category extends Component {
    render() {
        const { category, noAvailableImage, siteUrl } = this.props;
        const { name, image, slug } = category;
        console.log(category);

        return (
            <div className="product">
                <div className="product__image">
                    <a href={`${siteUrl}/categoria-producto/${slug}`} />
                    {!!image > 0 ? (
                        <img src={getProductImage(image)} alt={image.alt} name={image.name} />
                    ) : (
                        <img
                            name={noAvailableImage.name}
                            alt={noAvailableImage.alt}
                            src={noAvailableImage.url}
                        />
                    )}
                </div>
                <div className="product__row">
                    <h4 className="headline headline--h6">{name}</h4>
                </div>
                <div className="spacer" />
                <div className="product__row product__row--last">
                    <a
                        href={`${siteUrl}/categoria-producto/${slug}`}
                        className="mdc-button mdc-button--secondary mdc-button--outlined"
                    >
                        Ver más
                    </a>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { qatarOptions } = state.qatarOptions;

    return {
        noAvailableImage: qatarOptions.not_available_image,
        siteUrl: qatarOptions.site_url,
    };
};

export default connect(mapStateToProps)(Category);
