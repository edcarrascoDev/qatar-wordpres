import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, RichText, MediaUpload } = wp.blockEditor;
const { BaseControl, PanelBody, FormToggle, SelectControl } = wp.components;

class HeroSectionSlide extends BaseBlock {
    title = __('Item');
    category = 'qatar';
    parent = ['qatar/hero-section'];
    supports = {
        align: ['full'],
    };

    attributes = {
        imageUrl: {
            attribute: 'srcset',
            selector: '.hero__background source',
        },
        imageId: {
            attribute: 'data-id',
            selector: '.hero__background source',
        },
        imageAlt: {
            attribute: 'alt',
            selector: '.hero__background img',
        },
        mobileImageUrl: {
            attribute: 'src',
            selector: '.hero__background img',
        },
        mobileImageId: {
            attribute: 'id',
            selector: '.hero__background img',
        },
        headline: {
            default: 'h2',
        },
        isDarkText: {
            default: false,
        },
        title: {},
        content: {},
        linkText: {},
        linkUrl: {},
    };

    constructor() {
        super();
    }

    selectImage(media, params) {
        const { sizes } = media;
        const { attributes, setAttributes } = params;
        setAttributes({
            mobileImageUrl:
                attributes.mobileImageUrl || sizes['header-mobile']
                    ? sizes['header-mobile'].url
                    : media.url,
            imageId: media.id,
            mobileImageId: attributes.mobileImageId || media.id,
            imageUrl: media.url,
            imageAlt: media.alt,
        });
    }

    edit(params) {
        const { attributes, setAttributes, className } = params;
        return (
            <div>
                <div className={className}>
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
                    <div className="row mt-2">
                        <div className="col-md-6">
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
                        </div>
                        <div className="col-md-6">
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
                    <div className="toggle">
                        <FormToggle
                            id={'isDarkText'}
                            value={attributes.isDarkText}
                            checked={attributes.isDarkText}
                            onChange={() => setAttributes({ isDarkText: !attributes.isDarkText })}
                        />
                        <label htmlFor="isDarkText">Aplicar textos oscuros</label>
                    </div>

                    <div className="input__group">
                        <label htmlFor="headline">Seleccionar tipo de encabezado (título)</label>
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
                    <BaseControl label={'Imagen para móviles'}>
                        <MediaUpload
                            onSelect={media => {
                                setAttributes({
                                    mobileImageUrl: media.sizes['header-mobile']
                                        ? media.sizes['header-mobile'].url
                                        : media.url,
                                });
                            }}
                            type={'image'}
                            value={attributes.mobileImageId}
                            render={({ open }) =>
                                getImageButton(
                                    {
                                        imageUrl: attributes.mobileImageUrl,
                                        placeholder: __('Choose an Image for Mobile'),
                                    },
                                    open,
                                )
                            }
                        />
                    </BaseControl>
                </PanelBody>
            </InspectorControls>
        );
    }

    save(params) {
        const { attributes } = params;
        const { headline, isDarkText } = attributes;
        return (
            <div className={'swiper-slide'}>
                <div className="hero__background">
                    <picture>
                        <source
                            media="(min-width:650px)"
                            data-id={attributes.imageId}
                            srcSet={attributes.imageUrl}
                        />
                        <img
                            id={attributes.mobileImageId}
                            src={attributes.mobileImageUrl}
                            alt={attributes.imageAlt}
                        />
                    </picture>
                </div>
                <div className={`hero__content ${isDarkText ? 'hero__content--dark' : ''}`}>
                    <RichText.Content
                        className={`headline headline--${headline} ${
                            !isDarkText ? 'headline--light' : ''
                        }`}
                        tagName={headline}
                        value={attributes.title}
                    />
                    <RichText.Content tagName={'p'} value={attributes.content} />

                    <a href={attributes.linkUrl} className="mdc-button mdc-button--raised">
                        {attributes.linkText}
                    </a>
                </div>
            </div>
        );
    }
}

registerBlockType('qatar/hero-section-slide', new HeroSectionSlide());
