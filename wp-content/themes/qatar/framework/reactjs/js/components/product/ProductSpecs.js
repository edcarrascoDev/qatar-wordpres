import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductSpecs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeTabClass } = this.props;
        return (
            <section className={`tab__container ${activeTabClass}`}>
                <div className="tab__content">
                    <div className="single-product__specifications">
                        <h2 className="headline headline--h5 mb-40">Especificaciones Técnicas</h2>
                        <div className="table">
                            <div className="table__row">
                                <div className="table__column table__column--accent">
                                    Medidas de llanta
                                </div>
                                <div className="table__column">26" 27.5" 29"</div>
                            </div>
                            <div className="table__row">
                                <div className="table__column table__column--accent">
                                    Carga máxima
                                </div>
                                <div className="table__column">150 Kg</div>
                            </div>
                            <div className="table__row">
                                <div className="table__column table__column--accent">
                                    Medidas del Producto{' '}
                                    <small>
                                        <i>(Alto x Ancho x Largo)</i>
                                    </small>
                                </div>
                                <div className="table__column">50cm x 40cm x 40cm</div>
                            </div>
                            <div className="table__row">
                                <div className="table__column table__column--accent">
                                    Medidas de envío{' '}
                                    <small>
                                        <i>(Alto x Ancho x Largo)</i>
                                    </small>
                                </div>
                                <div className="table__column">10cm x 40cm x 40cm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProductSpecs);
