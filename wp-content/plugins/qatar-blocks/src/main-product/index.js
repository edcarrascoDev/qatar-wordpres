import BaseBlock from '../base-block';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
  InspectorControls,
  PlainText,
  RichText,
  __experimentalLinkControl as LinkControl,
  MediaPlaceholder,
} from '@wordpress/block-editor';
import { BaseControl, PanelRow, PanelBody, SelectControl } from '@wordpress/components';
import { ContainerBlock } from '../container-block';
import { ImagePreview, UTILS } from '../utils';

class MainProduct extends BaseBlock {
  title = __('Sección de producto principal');
  parent = ['qatar/single-container'];
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
    urlObject: {},
    buttonClasses: {},
  };
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
      <ContainerBlock title={this.title}>
        <div className={UTILS.FORM_GROUP}>
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
        <div className={UTILS.FORM_GROUP}>
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
        <div className={UTILS.FORM_GROUP}>
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
        <div className={UTILS.FORM_GROUP}>
          <label htmlFor="linkUrl" className={'label'}>
            link del botón
          </label>
          <LinkControl
            value={attributes.urlObject}
            onChange={content => setAttributes({ urlObject: content })}
          />
        </div>
        {this.renderInspector(params)}
      </ContainerBlock>
    );
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
        <BaseControl label={'Imagen del producto'}>
          <MediaPlaceholder
            onSelect={el => setAttributes({ imageUrl: el.url, imageAlt: el.alt })}
            allowedTypes={['image']}
            multiple={false}
            mediaPreview={<ImagePreview url={attributes.imageUrl} />}
            labels={{ title: '', instructions: '' }}
          />
        </BaseControl>
        <PanelRow>
          <div className={UTILS.FORM_GROUP}>
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
          <div className={UTILS.FORM_GROUP}>
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
          <a href={attributes.urlObject?.url} className={`mdc-button ${buttonClasses}`}>
            {attributes.linkText}
          </a>
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/main-product', new MainProduct());
