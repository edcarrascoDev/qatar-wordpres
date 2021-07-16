import BaseBlock from '../base-block';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, InnerBlocks } = wp.blockEditor;
const { PanelRow, PanelBody, ColorPicker, FormToggle } = wp.components;
const { Fragment } = wp.element;

class SingleContainer extends BaseBlock {
    title = __('Contenedor de secciones Sencillo');
    category = 'qatar';
    supports = {
        align: ['full'],
    };

    attributes = {
        containerClasses: {},
        backgroundColor: {
            default: '#ffffff',
        },
    };

    constructor() {
        super();
    }

    renderInspector(params) {
        const { attributes, setAttributes } = params;

        return (
            <InspectorControls>
                <PanelBody title={'Otros Ajustes'}>
                    <PanelRow>
                        <div className="input__group">
                            <label htmlFor="containerClasses">Classes para del contenedor</label>
                            <PlainText
                                value={attributes.containerClasses}
                                id={'containerClasses'}
                                onChange={content => setAttributes({ containerClasses: content })}
                                placeholder={__('ej: container--reduce')}
                            />
                        </div>
                    </PanelRow>
                    <PanelRow>
                        <div className="toggle">
                            <FormToggle
                                id={'isLightText'}
                                value={attributes.isLightText}
                                checked={attributes.isLightText}
                                onChange={() =>
                                    setAttributes({ isLightText: !attributes.isLightText })
                                }
                            />
                            <label htmlFor="isLightText">Aplicar textos claros</label>
                        </div>
                    </PanelRow>

                    <PanelRow>
                        <div className="input__group">
                            <label htmlFor="backgroundColor">Color de fondo</label>
                            <ColorPicker
                                color={attributes.backgroundColor}
                                onChangeComplete={value =>
                                    setAttributes({ backgroundColor: value })
                                }
                                disableAlpha
                            />
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        );
    }

    edit(params) {
        return (
            <Fragment>
                <InnerBlocks />
                {this.renderInspector(params)}
            </Fragment>
        );
    }

    save(params) {
        const { attributes } = params;
        return (
            <section
                className="section"
                style={`background-color: ${attributes.backgroundColor.hex}`}
            >
                <div className={`container ${attributes.containerClasses}`}>
                    <InnerBlocks.Content />
                </div>
            </section>
        );
    }
}

registerBlockType('qatar/single-container', new SingleContainer());
