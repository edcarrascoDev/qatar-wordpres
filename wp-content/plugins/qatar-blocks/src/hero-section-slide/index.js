import BaseBlock from '../base-block';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
  InspectorControls,
  PlainText,
  RichText,
  MediaPlaceholder,
  __experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { BaseControl, PanelBody, FormToggle, SelectControl } from '@wordpress/components';
import { ContainerBlock } from '../container-block';
import { ImagePreview, UTILS } from '../utils';

class HeroSectionSlide extends BaseBlock {
  title = __('Item');
  parent = ['qatar/hero-section'];
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
    urlObject: {},
  };

  edit = params => {
    const { attributes, setAttributes, className } = params;
    return (
      <ContainerBlock title={this.title}>
        <div className={className}>
          <div className={UTILS.FORM_GROUP}>
            <MediaPlaceholder
              onSelect={el => setAttributes({ imageUrl: el.url, imageAlt: el.alt })}
              allowedTypes={['image']}
              multiple={false}
              mediaPreview={<ImagePreview url={attributes.imageUrl} />}
              labels={{ title: '', instructions: '' }}
            />
          </div>
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
          </div>{' '}
          <div className={UTILS.FORM_GROUP}>
            <label htmlFor="linkUrl" className={'label'}>
              link del botón
            </label>
            <LinkControl
              value={attributes.urlObject}
              onChange={content => setAttributes({ urlObject: content })}
            />
          </div>
        </div>
        {this.renderInspector(params)}
      </ContainerBlock>
    );
  };

  renderInspector = ({ attributes, setAttributes }) => (
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
        <BaseControl label={'Imagen para móviles'}>
          <div className={UTILS.FORM_GROUP}>
            <MediaPlaceholder
              onSelect={el => setAttributes({ mobileImageUrl: el.url, mobileImageAlt: el.alt })}
              allowedTypes={['image']}
              multiple={false}
              mediaPreview={<ImagePreview url={attributes.mobileImageUrl} />}
              labels={{ title: '', instructions: '' }}
            />
          </div>
        </BaseControl>
      </PanelBody>
    </InspectorControls>
  );

  save = params => {
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
            className={`headline headline--${headline} ${!isDarkText ? 'headline--light' : ''}`}
            tagName={headline}
            value={attributes.title}
          />
          <RichText.Content tagName={'p'} value={attributes.content} />

          <a href={attributes.urlObject?.url} className="mdc-button mdc-button--raised">
            {attributes.linkText}
          </a>
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/hero-section-slide', new HeroSectionSlide());
