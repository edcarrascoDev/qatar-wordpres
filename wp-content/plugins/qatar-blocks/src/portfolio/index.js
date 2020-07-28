import BaseBlock from '../base-block';
import getFileButton from '../common/get-file-button';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, RichText, MediaUpload } = wp.blockEditor;
const { PanelRow, PanelBody, SelectControl, RadioControl, FormToggle } = wp.components;

class Portfolio extends BaseBlock {
    title = __('sección de pdf');
    category = 'qatar';
    parent = ['qatar/single-container'];
    supports = {
        align: ['full'],
    };

    attributes = {
        title: {},
        content: {},
        headline: {
            default: 'h3',
        },
        linkText: {
            default: 'descargar',
        },
        fileUrl: {},
        fileId: {},
        fileName: {},
        isLightText: {
            default: false,
        },
        textAligned: {
            default: 'center',
        },
        buttonClasses: {},
    };

    selectFile(media, params) {
        const { setAttributes } = params;
        setAttributes({
            fileUrl: media.url,
            fileId: media.id,
            fileName: media.filename,
        });
    }

    edit(params) {
        const { attributes, setAttributes, className } = params;

        return (
            <div className={className}>
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
                        placeholder={__('ej: Descargar')}
                    />
                </div>

                <MediaUpload
                    onSelect={media => this.selectFile(media, params)}
                    type={'file'}
                    value={attributes.fileId}
                    allowedTypes={'application/pdf'}
                    render={({ open }) =>
                        getFileButton(
                            {
                                fileName: attributes.fileName,
                                placeholder: __('Subir PDF'),
                            },
                            open,
                        )
                    }
                />
                {this.renderInspector(params)}
            </div>
        );
    }

    renderInspector(params) {
        const { attributes, setAttributes } = params;

        return (
            <InspectorControls>
                <PanelBody title={'Ajuste de textos'}>
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
                            <label htmlFor={'isLightText'}>Usar textos claros</label>
                        </div>
                    </PanelRow>

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

                    <PanelRow>
                        <RadioControl
                            label="Aliniamiento del texto"
                            selected={attributes.textAligned}
                            options={[
                                { label: 'Centro', value: 'center' },
                                { label: 'Izquiera', value: 'left' },
                                { label: 'Derecha', value: 'right' },
                            ]}
                            onChange={option => {
                                setAttributes({ textAligned: option });
                            }}
                        />
                    </PanelRow>
                </PanelBody>

                <PanelBody title={'Otros Ajustes'}>
                    <PanelRow>
                        <div className="input__group">
                            <label htmlFor="buttonClasses">Classes para el Botón</label>
                            <PlainText
                                value={attributes.buttonClasses}
                                id={'buttonClasses'}
                                onChange={content => setAttributes({ buttonClasses: content })}
                                placeholder={__('ej: mdc-button--secondary')}
                            />
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        );
    }

    save(params) {
        const { attributes } = params;
        const { headline, buttonClasses, isLightText, textAligned } = attributes;

        return (
            <div className={`text-${textAligned}`}>
                <RichText.Content
                    className={`headline headline--${headline} ${
                        isLightText ? 'headline--light ' : ''
                    }`}
                    tagName={headline}
                    value={attributes.title}
                />
                <RichText.Content
                    className={`${isLightText ? 'text-light' : ''}`}
                    tagName={'p'}
                    value={attributes.content}
                />

                <a
                    href={attributes.fileUrl}
                    target={'_blank'}
                    className={`mdc-button ${buttonClasses}`}
                    rel="noopener noreferrer"
                >
                    {attributes.linkText}
                </a>
            </div>
        );
    }
}

registerBlockType('qatar/portfolio', new Portfolio());
