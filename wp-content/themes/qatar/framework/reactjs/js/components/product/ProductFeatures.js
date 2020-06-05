import React, { Component } from 'react';
import { connect } from 'react-redux';
class ProductFeatures extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeTabClass } = this.props;
        return (
            <section className={`tab__container ${activeTabClass}`}>
                <div className="tab__content">
                    <div className="single-product__features">
                        <h2 className="headline headline--h5">Características Principales</h2>
                        <ul className={'list'}>
                            <li>
                                Material del que está compuesto: hierro y accesorios en caucho y
                                plástico.
                            </li>
                            <li>
                                Compatible para bicicletas de ruta y montaña rin 26”, 27.5” y 29”.
                            </li>
                        </ul>

                        <p>
                            <strong>Nota:</strong> Recuerda que tenemos disponible domicilio en la
                            ciudad de Bogotá y hacemos envíos nacionales a todo el país
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProductFeatures);
