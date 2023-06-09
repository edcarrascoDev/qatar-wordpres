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
import {
  PanelRow,
  PanelBody,
  SelectControl,
  RadioControl,
  FormToggle,
} from '@wordpress/components';
import { ContainerBlock } from '../container-block';
import { ImagePreview, UTILS } from '../utils';
class Review extends BaseBlock {
  title = __('Review');
  parent = ['qatar/single-container'];
  attributes = {
    title: {},
    content: {},
    headline: {
      default: 'h3',
    },
    linkText: {
      default: 'ver reviews',
    },
    urlObject: {},
    rating: {},
    imageUrl: {},
    imageId: {},
    imageName: {},
    isLightText: {
      default: false,
    },
    textAligned: {
      default: 'left',
    },
    buttonClasses: {},
  };
  edit = params => {
    const { attributes, setAttributes } = params;

    return (
      <ContainerBlock>
        <div className={UTILS.FORM_GROUP}>
          <label htmlFor="title" className={'label'}>
            Calificación promedio
          </label>
          <PlainText
            value={attributes.rating}
            id={'rating'}
            onChange={content => setAttributes({ rating: content })}
            placeholder={__('ej: 4.8')}
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
            placeholder={__('ej: Descargar')}
          />
        </div>

        <div className={UTILS.FORM_GROUP}>
          <label className={'label'}>link</label>
          <LinkControl
            value={attributes.urlObject}
            onChange={content => setAttributes({ urlObject: content })}
          />
        </div>

        <MediaPlaceholder
          onSelect={el => setAttributes({ imageUrl: el.url, imageAlt: el.alt })}
          allowedTypes={['image']}
          multiple={false}
          mediaPreview={<ImagePreview url={attributes.imageUrl} />}
          labels={{ title: '', instructions: '' }}
        />
        {this.renderInspector(params)}
      </ContainerBlock>
    );
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Ajuste de textos'}>
        <PanelRow>
          <div className="toggle">
            <FormToggle
              id={'isLightText'}
              value={attributes.isLightText}
              checked={attributes.isLightText}
              onChange={() => setAttributes({ isLightText: !attributes.isLightText })}
            />
            <label htmlFor={'isLightText'}>Usar textos claros</label>
          </div>
        </PanelRow>

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
    const { headline, buttonClasses, isLightText, textAligned } = attributes;

    return (
      <div className={'review'}>
        <div className="review-section__container">
          <div className={`review-section__description text-${textAligned}`}>
            <RichText.Content
              className={`headline headline--${headline} ${isLightText ? 'headline--light ' : ''}`}
              tagName={headline}
              value={attributes.title}
            />
            <div className={`separator separator--secondary separator--${textAligned}`} />
            <RichText.Content
              className={`mb-50 ${isLightText ? 'text-light' : ''}`}
              tagName={'p'}
              value={attributes.content}
            />

            <a
              href={attributes.linkUrl}
              target={'_blank'}
              className={`mdc-button ${buttonClasses}`}
              rel="noopener noreferrer"
            >
              {attributes.linkText}
            </a>
          </div>

          <div className="review-section__content">
            <div className="review-section__rating">
              <span>{attributes.rating}</span>
            </div>

            <div className="review-section__image">
              <img src={attributes.imageUrl} alt={attributes.imageAlt} id={attributes.imageId} />
            </div>

            <a
              href={attributes.urlObject?.url}
              target={'_blank'}
              className={`mdc-button ${buttonClasses}`}
              rel="noopener noreferrer"
            >
              {attributes.linkText}
            </a>
          </div>
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/review', new Review());
