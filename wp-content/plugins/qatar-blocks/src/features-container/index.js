import BaseBlock from '../base-block';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;
const { select } = wp.data;

const ALLOWED_BLOCKS = ['qatar/feature-item'];

class FeaturesContainer extends BaseBlock {
    title = __('Sección de destacados');
    category = 'qatar';
    supports = {
        align: ['full'],
    };

    attributes = {
        numberOfItems: {},
    };

    constructor() {
        super();
    }

    edit(params) {
        const { clientId, attributes, setAttributes } = params;
        /**
         * return the childBlocks to know how many slides has the parent
         */
        const parentBlock = select('core/editor').getBlocksByClientId(clientId)[0];
        setAttributes({ numberOfItems: parentBlock.innerBlocks.length });

        return (
            <div className={'three-columns'}>
                <InnerBlocks
                    template={[ALLOWED_BLOCKS, ALLOWED_BLOCKS, ALLOWED_BLOCKS]}
                    allowedBlocks={ALLOWED_BLOCKS}
                    templateLock={attributes.numberOfItems > 3 ? 'insert' : false}
                    renderAppender={() => (
                        <button className="bespoke-appender" type="button">
                            Some Special Appender
                        </button>
                    )}
                />
            </div>
        );
    }

    save(params) {
        const { attributes } = params;
        const { numberOfItems } = attributes;
        return (
            <section className="section">
                <div className={'features'}>
                    <div className={`features__list features__list--col-${numberOfItems}`}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        );
    }
}

registerBlockType('qatar/features-container', new FeaturesContainer());
