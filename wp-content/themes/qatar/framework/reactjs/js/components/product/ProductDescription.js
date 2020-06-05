import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { activeTabClass } = this.props;
        return (
            <section className={`tab__container ${activeTabClass}`}>
                <div className="tab__content">
                    <div className="single-product__description">
                        <h4 className={'headline headline--h5'}>Descripción del producto</h4>
                        <p>
                            Sabemos que en esta temporada no puedes salir de casa a entrenar como
                            más te gusta, por eso para que no dejes tu pasión por el ciclismo, Qatar
                            trae para ti el artículo esencial para la cuarentena. Un rodillo fácil y
                            práctico para usar y puedas ejercitarte en casa.
                            <br />
                            <br />
                            El rodillo Qatar tiene una resistencia progresiva que es ajustable. Lo
                            cual significa que el usuario podrá ser libre de elegir qué tan fácil o
                            difícil será su entrenamiento. Su construcción es resistente y robusta
                            para un peso máximo de 150kg. Tiene función plegable para que sea fácil
                            su almacenamiento.
                            <br />
                            <br />
                            Este rodillo entrenador para la casa tiene brochetas de liberación
                            rápida para ayudar al montaje de la bicicleta sin desmontar piezas,
                            además de sujetarla con facilidad.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProductDescription);
