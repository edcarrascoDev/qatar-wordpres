import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, RichText, MediaUpload } = wp.editor;
const { PanelRow, PanelBody, SelectControl } = wp.components;

class FeatureItem extends BaseBlock {
    title = __('Item');
    category = 'qatar';
    parent = ['qatar/features-container'];
    supports = {
        align: ['full'],
    };

    attributes = {
        imageUrl: {
            attribute: 'style',
            selector: '.feature',
        },
        imageId: {
            attribute: 'id',
            selector: '.feature',
        },
        imageAlt: {},
        headline: {
            default: 'h5',
        },
        title: {},
        content: {},
        linkText: {
            default: 'Ver más',
        },
        linkUrl: {},
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

    edit(params) {
        const { attributes, setAttributes, className } = params;
        return (
            <div>
                <div className={className}>
                    <div className="input__group">
                        <label className={'label'}>Imagen de fondo</label>
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
                    </div>
                    <div className="input__group">
                        <label htmlFor="title" className={'label'}>
                            Título
                        </label>
                        <PlainText
                            value={attributes.title}
                            id={'title'}
                            onChange={content => setAttributes({ title: content })}
                            placeholder={__('Título')}
                        />
                    </div>
                    <div className="input__group">
                        <label htmlFor="content" className={'label'}>
                            Descripción
                        </label>
                        <RichText
                            id={'content'}
                            multine={'br'}
                            value={attributes.content}
                            tagName={'span'}
                            onChange={content => setAttributes({ content: content })}
                            placeholder={__('Descripción')}
                        />
                    </div>
                    <div className="input__group">
                        <label htmlFor="linkText" className={'label'}>
                            Texto en el botón
                        </label>
                        <PlainText
                            value={attributes.linkText}
                            id={'linkText'}
                            onChange={content => setAttributes({ linkText: content })}
                            placeholder={__('ej: conocer más')}
                        />
                    </div>

                    <div className="input__group">
                        <label htmlFor="linkUrl" className={'label'}>
                            link del botón
                        </label>
                        <PlainText
                            value={attributes.linkUrl}
                            id={'linkUrl'}
                            onChange={content => setAttributes({ linkUrl: content })}
                            placeholder={__('ej: /tiros-de-arrastre')}
                        />
                    </div>
                </div>
                {this.renderInspector(params)}
            </div>
        );
    }

    renderInspector(params) {
        const { attributes, setAttributes } = params;

        return (
            <InspectorControls>
                <PanelBody title={'Otros Ajustes'}>
                    <PanelRow>
                        <div className="input__group">
                            <label htmlFor="headline">
                                Seleccionar tipo de encabezado (título)
                            </label>
                            <SelectControl
                                id={'headline'}
                                value={attributes.headline}
                                options={[
                                    { label: 'headline 1', value: 'h1' },
                                    { label: 'headline 2', value: 'h2' },
                                    { label: 'headline 3', value: 'h3' },
                                    { label: 'headline 4', value: 'h4' },
                                    { label: 'headline 5', value: 'h5' },
                                    { label: 'headline 6', value: 'h6' },
                                ]}
                                onChange={value => {
                                    setAttributes({ headline: value });
                                }}
                            />
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        );
    }

    save(params) {
        const { attributes } = params;
        const { headline } = attributes;
        return (
            <div className={'feature'} style={`background-image: url(${attributes.imageUrl})`}>
                <a href={attributes.linkText} />
                <div className={`feature__description`}>
                    <RichText.Content
                        className={`headline headline--${headline}`}
                        tagName={headline}
                        value={attributes.title}
                    />
                    <RichText.Content tagName={'p'} value={attributes.content} />

                    <a href={attributes.linkText} className="link link--light">
                        {attributes.linkText}
                    </a>
                </div>
            </div>
        );
    }
}

registerBlockType('qatar/feature-item', new FeatureItem());
