import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, RichText, MediaUpload } = wp.blockEditor;
const { PanelRow, PanelBody, SelectControl, RadioControl, FormToggle } = wp.components;

class LayoutInfoWithMedia extends BaseBlock {
  title = __('Sección de información principal con Imagen');
  category = 'qatar';
  supports = {
    align: ['full'],
  };

  attributes = {
    subtitle: {},
    title: {},
    content: {},
    linkText: {},
    linkUrl: {},
    imageUrl: {},
    onLoad: { default: false },
    version: { default: '1.0.0' },
  };

  selectImage(media, params) {
    const { setAttributes } = params;
    setAttributes({
      imageUrl: media.url,
    });
  }

  edit(params) {
    const { attributes, setAttributes, className } = params;

    return (
      <div className={className}>
        <div className="input__group">
          <label htmlFor="subtitle" className={'label'}>
            Subtítulo
          </label>
          <PlainText
            value={attributes.subtitle}
            id={'subtitle'}
            onChange={content => setAttributes({ subtitle: content })}
            placeholder={__('Subtítulo')}
          />
        </div>
        <div className="input__group">
          <label htmlFor="title" className={'label'}>
            Título
          </label>
          <RichText
            value={attributes.title}
            multine={'br'}
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
        {this.renderInspector(params)}
      </div>
    );
  }

  renderInspector(params) {
    const { attributes, setAttributes } = params;

    return (
      <InspectorControls>
        <PanelBody title={'Opciones de link'}>
          <PanelRow>
            <div className="input__group">
              <label htmlFor="linkText" className={'label'}>
                Texto para el link
              </label>
              <PlainText
                value={attributes.linkText}
                id={'linkText'}
                onChange={content => setAttributes({ linkText: content })}
                placeholder={__('EJ: Solicitar Cotización')}
              />
            </div>
          </PanelRow>
          <PanelRow>
            <div className="input__group">
              <label htmlFor="linkUrl" className={'label'}>
                Id de la sección a ir
              </label>
              <PlainText
                value={attributes.linkUrl}
                id={'linkUrl'}
                onChange={content => setAttributes({ linkUrl: content })}
                placeholder={__('Ej: #mySection')}
              />
            </div>
          </PanelRow>
        </PanelBody>

        <PanelBody title={'Otros Ajustes'}>
          <PanelRow>
            <div className="toggle">
              <FormToggle
                id="onLoad"
                label="Cargar estilos durante la carga"
                checked={attributes.onLoad}
                onChange={value => setAttributes({ onLoad: value })}
              />
              <label htmlFor={'onLoad'}>Cargar estilos durante la carga</label>
            </div>
          </PanelRow>
          <PanelRow>
            <span>Style Version</span>
            <PlainText
              value={attributes.version}
              onChange={version => setAttributes({ version })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    );
  }

  save(params) {
    const { themeUri } = salient_block_vars;
    const { attributes } = params;

    return (
      <div className="custom-post-main" style={{ backgroundImage: attributes.imageUrl }}>
        <div className="container">
          <div className="custom-post-main__wrapper">
            <h4 className="custom-post-main__title headline headline--h5">{attributes.subtitle}</h4>
            <RichText.Content
              className="custom-post-main__title headline headline--h3 headline--light"
              tagName={'h1'}
              value={attributes.title}
            />
            <div className="separator separator--secondary text-light" />
            <RichText.Content tagName={'p mb-50'} value={attributes.content} />
            <a href={attributes.linkUrl} className="link link--white" rel="noopener noreferrer">
              {attributes.linkText}
            </a>
          </div>
        </div>
        <link
          rel="stylesheet"
          href={`${themeUri}/frontend/dist/custom-post-main.css?ver=${attributes.version}`}
          media="all"
          onLoad={attributes.onLoad ? "this.media='all'" : null}
        />
      </div>
    );
  }
}

registerBlockType('qatar/layout-info-with-media', new LayoutInfoWithMedia());
