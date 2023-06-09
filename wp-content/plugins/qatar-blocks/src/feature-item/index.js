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
import { PanelRow, PanelBody, SelectControl } from '@wordpress/components';
import { ImagePreview, UTILS } from '../utils';
import { ContainerBlock } from '../container-block';

class FeatureItem extends BaseBlock {
  title = __('Item');
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
    urlObject: {},
  };

  edit = params => {
    const { attributes, setAttributes, className } = params;
    return (
      <ContainerBlock title={this.title}>
        <div className={className}>
          <div className={UTILS.FORM_GROUP}>
            <span className={'label'}>Imagen de fondo</span>
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
        </div>
        {this.renderInspector(params)}
      </ContainerBlock>
    );
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
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
      </PanelBody>
    </InspectorControls>
  );

  save = params => {
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

          <a href={attributes.urlObject?.url} className="link link--light">
            {attributes.linkText}
          </a>
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/feature-item', new FeatureItem());
