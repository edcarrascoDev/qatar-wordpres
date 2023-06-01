import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';

const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PlainText, RichText, MediaUpload } from '@wordpress/block-editor';
import { BaseControl, PanelRow, PanelBody, SelectControl } from '@wordpress/components';

class MainProduct extends BaseBlock {
  title = __('Sección de producto principal');
  category = 'qatar';
  parent = ['qatar/single-container'];
  supports = {
    align: ['full'],
  };

  attributes = {
    imageUrl: {
      attribute: 'src',
      selector: '.main-product__image img',
    },
    imageId: {
      attribute: 'id',
      selector: '.main-product__image img',
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.main-product__image img',
    },
    headline: {
      default: 'h2',
    },
    title: {},
    content: {},
    linkText: {
      default: 'Conocer más',
    },
    linkUrl: {},
    buttonClasses: {},
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

  edit = params => {
    const { attributes, setAttributes, className } = params;
    return (
      <div>
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
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
        <BaseControl label={'Imagen del producto'}>
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
        <PanelRow>
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
        </PanelRow>

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

  save = params => {
    const { attributes } = params;
    const { headline, buttonClasses } = attributes;

    return (
      <div className={'main-product'}>
        <div className={'main-product__description'}>
          <RichText.Content
            className={`headline headline--${headline}`}
            tagName={headline}
            value={attributes.title}
          />
          <div className="separator separator--secondary" />
          <RichText.Content tagName={'p'} value={attributes.content} />

          <a href={attributes.linkUrl} className={`mdc-button ${buttonClasses}`}>
            {attributes.linkText}
          </a>
        </div>
        <div className="main-product__image">
          <img id={attributes.imageId} src={attributes.imageUrl} alt={attributes.imageAlt} />
          <a href={attributes.linkUrl} className={`mdc-button ${buttonClasses}`}>
            {attributes.linkText}
          </a>
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/main-product', new MainProduct());
