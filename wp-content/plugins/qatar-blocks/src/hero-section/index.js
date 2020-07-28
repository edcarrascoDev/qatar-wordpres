import BaseBlock from '../base-block';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.blockEditor;
const { PanelBody, FormToggle } = wp.components;
const { select } = wp.data;
const { Fragment } = wp.element;

const ALLOWED_BLOCKS = ['qatar/hero-section-slide'];

class HeroSection extends BaseBlock {
    title = __('Sección principal');
    category = 'qatar';
    supports = {
        align: ['full'],
    };

    attributes = {
        isExtended: {
            default: false,
        },
        numberOfItems: {},
    };

    constructor() {
        super();
    }

    edit(params) {
        const { attributes } = params;
        const { isExtended } = attributes;

        const classes = `hero ${isExtended ? 'hero--extended' : ''}`;
        return (
            <div className={classes}>
                <InnerBlocks
                    template={[ALLOWED_BLOCKS]}
                    allowedBlocks={ALLOWED_BLOCKS}
                    templateLock={false}
                />
                {this.renderInspector(params)}
            </div>
        );
    }

    renderInspector(params) {
        const { attributes, setAttributes, clientId } = params;
        /**
         * return the childBlocks to know how many slides has the parent
         */
        const parentBlock = select('core/editor').getBlocksByClientId(clientId)[0];
        setAttributes({ numberOfItems: parentBlock.innerBlocks.length });

        return (
            <InspectorControls>
                <PanelBody title={'Otros Ajustes'}>
                    <div className="toggle">
                        <FormToggle
                            id={'isExtended'}
                            value={attributes.isExtended}
                            checked={attributes.isExtended}
                            onChange={() => setAttributes({ isExtended: !attributes.isExtended })}
                        />
                        <label htmlFor={'isExtended'}>Ajustar a pantalla completa</label>
                    </div>
                </PanelBody>
            </InspectorControls>
        );
    }

    save(params) {
        const { attributes } = params;
        const { isExtended, numberOfItems } = attributes;
        const classes = `hero ${isExtended ? 'hero--extended' : ''}`;
        return (
            <div className={classes}>
                <div className={`swiper-container ${numberOfItems > 1 ? 'hero__slider' : null}`}>
                    <div className="swiper-wrapper">
                        <InnerBlocks.Content />
                    </div>
                    {numberOfItems > 1 ? (
                        <Fragment>
                            <div className="swiper-pagination swiper-pagination-black" />
                            <div className="swiper-button-next swiper-button-black" />
                            <div className="swiper-button-prev swiper-button-black" />
                        </Fragment>
                    ) : null}
                </div>
            </div>
        );
    }
}

registerBlockType('qatar/hero-section', new HeroSection());
