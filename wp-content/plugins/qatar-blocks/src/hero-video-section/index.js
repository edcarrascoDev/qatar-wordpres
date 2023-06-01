import BaseBlock from '../base-block';
import getImageButton from '../common/get-image-button';
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PlainText, RichText, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, FormToggle, SelectControl } from '@wordpress/components';

class HeroVideoSection extends BaseBlock {
  title = __('Sección principal con Video');
  category = 'qatar';
  supports = {
    align: ['full'],
  };

  attributes = {
    videoUrl: {
      attribute: 'src',
      selector: '.hero__background video',
    },
    videoId: {
      attribute: 'id',
      selector: '.hero__background video',
    },
    headline: {
      default: 'h2',
    },
    isDarkText: {
      default: false,
    },
    title: {},
    content: {},
    nextSectionId: {},
  };

  constructor() {
    super();
  }

  selectVideo(media, params) {
    const { setAttributes } = params;
    setAttributes({
      videoId: media.id,
      videoUrl: media.url,
    });
  }

  edit = params => {
    const { attributes, setAttributes } = params;

    return (
      <div className={'hero'}>
        <MediaUpload
          onSelect={media => this.selectVideo(media, params)}
          type={'video'}
          value={attributes.videoId}
          render={({ open }) =>
            getImageButton(
              {
                videoUrl: attributes.videoUrl,
                placeholder: __('Selecciona un Video'),
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
        {this.renderInspector(params)}
      </div>
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

        <div className="input__group">
          <label htmlFor="title" className={'label'}>
            Id de la siguiente sección
          </label>
          <PlainText
            value={attributes.nextSectionId}
            id={'nextSectionId'}
            onChange={content => setAttributes({ title: content })}
            placeholder={__('nextSectionId')}
          />
        </div>
      </PanelBody>
    </InspectorControls>
  );

  save = params => {
    const { attributes } = params;
    const { headline, isDarkText } = attributes;
    const classes = `hero hero--video`;
    return (
      <div className={classes}>
        <div className={`hero__background ${!isDarkText ? 'hero__background--dark' : ''}`}>
          <video src={attributes.videoUrl} id={attributes.videoId} autoPlay loop muted>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>
        <div className={`hero__content ${isDarkText ? 'hero__content--dark' : ''}`}>
          <RichText.Content
            className={`headline headline--${headline} ${!isDarkText ? 'headline--light' : ''}`}
            tagName={headline}
            value={attributes.title}
          />
          {!!attributes.content ? (
            <RichText.Content tagName={'p'} value={attributes.content} />
          ) : null}

          {!!attributes.linkText && !!attributes.linkUrl ? (
            <a href={attributes.linkUrl} className="mdc-button mdc-button--raised">
              {attributes.linkText}
            </a>
          ) : null}
        </div>
        <div data-target={attributes.nextSectionId} className="hero__action">
          <span />
          <span />
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/hero-video-section', new HeroVideoSection());
