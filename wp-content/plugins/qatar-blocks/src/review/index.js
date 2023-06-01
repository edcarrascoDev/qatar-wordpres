import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';

const { __ } = wp.i18n;

import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PlainText, RichText, MediaUpload } from '@wordpress/block-editor';
import {
  PanelRow,
  PanelBody,
  SelectControl,
  RadioControl,
  FormToggle,
} from '@wordpress/components';

class Review extends BaseBlock {
  title = __('Review');
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
      default: 'ver reviews',
    },
    linkUrl: {},
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

  selectImage(media, params) {
    const { setAttributes } = params;
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
      imageName: media.filename,
    });
  }

  edit = params => {
    const { attributes, setAttributes, className } = params;

    return (
      <div className={className}>
        <div className="input__group">
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

        <div className="input__group">
          <label htmlFor="linkText" className={'label'}>
            link
          </label>
          <PlainText
            value={attributes.linkUrl}
            id={'linkUrl'}
            onChange={content => setAttributes({ linkUrl: content })}
            placeholder={__('ej: https://...')}
          />
        </div>

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
        {this.renderInspector(params)}
      </div>
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
              href={attributes.linkUrl}
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
