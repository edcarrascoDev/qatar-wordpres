import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, InnerBlocks, MediaUpload } = wp.blockEditor;
const { PanelRow, PanelBody, BaseControl } = wp.components;
const { Fragment } = wp.element;

const ALLOWED_BLOCKS = ['qatar/cover-content'];

class CoverContainer extends BaseBlock {
    title = __('Contenedor con Imagen de fondo');
    category = 'qatar';
    supports = {
        align: ['full'],
    };

    attributes = {
        imageUrl: {
            attribute: 'src',
            selector: '.cover__image img',
        },
        imageId: {
            attribute: 'id',
            selector: '.cover__image img',
        },
        imageAlt: {
            attribute: 'alt',
            selector: '.cover__image img',
        },
        containerClasses: {},
    };

    constructor() {
        super();
    }

    selectImage(media, params) {
        const { setAttributes } = params;
        setAttributes({
            imageId: media.id,
            imageUrl: media.url,
            imageAlt: media.alt,
        });
    }

    renderInspector(params) {
        const { attributes, setAttributes } = params;
        return (
            <InspectorControls>
                <PanelBody title={'Otros Ajustes'}>
                    <PanelRow>
                        <BaseControl label={'Imagen de fondo'}>
                            <MediaUpload
                                onSelect={media => this.selectImage(media, params)}
                                type={'image'}
                                value={attributes.imageId}
                                render={({ open }) =>
                                    getImageButton(
                                        {
                                            imageUrl: attributes.imageUrl,
                                            placeholder: __('Selecciona una imagen'),
                                        },
                                        open,
                                    )
                                }
                            />
                        </BaseControl>
                    </PanelRow>
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
                </PanelBody>
            </InspectorControls>
        );
    }

    edit(params) {
        return (
            <Fragment>
                <InnerBlocks
                    template={[ALLOWED_BLOCKS]}
                    allowedBlocks={ALLOWED_BLOCKS}
                    templateLock={true}
                />
                {this.renderInspector(params)}
            </Fragment>
        );
    }

    save(params) {
        const { attributes } = params;
        return (
            <section className="section">
                <div className="cover">
                    <div className="cover__image">
                        <img
                            id={attributes.imageId}
                            src={attributes.imageUrl}
                            alt={attributes.imageAlt}
                        />
                    </div>
                    <div className={`container ${attributes.containerClasses}`}>
                        <InnerBlocks.Content />
                    </div>
                </div>
            </section>
        );
    }
}

registerBlockType('qatar/cover-container', new CoverContainer());
