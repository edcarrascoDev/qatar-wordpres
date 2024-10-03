import BaseBlock from '../base-block';
import {
  __experimentalLinkControl as LinkControl,
  InspectorControls,
  MediaPlaceholder,
  PlainText,
  RichText,
} from '@wordpress/block-editor';
import { BaseControl, PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { ImagePreview, UTILS } from '../utils';
import { ContainerBlock } from '../container-block';
import { registerBlockType } from '@wordpress/blocks';

class TwoColumnTextWithMedia extends BaseBlock {
  title = 'Bloque de dos columnas texto|imagen';

  attributes = {
    imageUrl: {
      attribute: 'src',
      selector: '.two-col-text-img__image img',
    },
    imageId: {
      attribute: 'id',
      selector: '.two-col-text-img__image img',
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.two-col-text-img__image img',
    },
    headline: {
      default: 'h2',
    },
    title: {},
    content: {},
    linkText: {},
    urlObject: {},
    sectionId: {},
    buttonClass: { default: 'primary' },
    onDark: { default: false },
    imageOnLeft: { default: false },
    onLoad: { default: false },
    version: { default: '1.0.0' },
  };

  selectImage = ({ setAttributes, media }) => {
    const { sizes } = media;
    if (sizes && sizes['two-column-image']) {
      setAttributes({
        imageId: media.id,
        imageUrl: sizes['two-column-image'].url,
        imageAlt: media.alt,
      });
    } else {
      alert('La Imagen tiene que ser de minimo 566px de ancho y 364px de alto');
    }
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Ajustes de diseño'}>
        <div className={UTILS.FORM_GROUP}>
          <ToggleControl
            label="Mostrar primero la Imagen"
            checked={attributes.imageOnLeft}
            onChange={(value) => setAttributes({ imageOnLeft: value })}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <SelectControl
            label="Clase de botón"
            value={attributes.buttonClass}
            options={[
              { label: 'Primario', value: 'primary' },
              { label: 'Secundario (Naranja)', value: 'secondary' },
              { label: 'Blanco', value: 'on-primary' },
            ]}
            onChange={(value) => setAttributes({ buttonClass: value })}
            __nextHasNoMarginBottom
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <SelectControl
            label="Tamaño del titulo"
            value={attributes.headline}
            options={[
              { label: 'headline 1', value: 'h1' },
              { label: 'headline 2', value: 'h2' },
              { label: 'headline 3', value: 'h3' },
              { label: 'headline 4', value: 'h4' },
              { label: 'headline 5', value: 'h5' },
              { label: 'headline 6', value: 'h6' },
            ]}
            onChange={(value) => {
              setAttributes({ headline: value });
            }}
            __nextHasNoMarginBottom
          />
        </div>
      </PanelBody>
      <PanelBody title={'Otros Ajustes'}>
        <BaseControl>
          <div className={UTILS.FORM_GROUP}>
            <ToggleControl
              label="Mostrar textos blancos"
              checked={attributes.onDark}
              onChange={(value) => setAttributes({ onDark: value })}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <ToggleControl
              label="Cargar estilos durante la carga"
              checked={attributes.onLoad}
              onChange={(value) => setAttributes({ onLoad: value })}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <span>Versión de estilos</span>
            <PlainText
              value={attributes.version}
              onChange={(version) => setAttributes({ version })}
            />
          </div>
        </BaseControl>
      </PanelBody>
    </InspectorControls>
  );

  edit = ({ attributes, setAttributes, clientId }) => {
    setAttributes({ sectionId: clientId });
    return (
      <ContainerBlock title={this.title}>
        <div className={UTILS.FORM_GROUP}>
          <span>Título</span>
          <RichText
            value={attributes.title}
            multine={'br'}
            id={'title'}
            onChange={(content) => setAttributes({ title: content })}
            placeholder={'Título'}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <span>Descripción</span>
          <RichText
            id={'content'}
            multine={'br'}
            value={attributes.content}
            tagName={'span'}
            onChange={(content) => setAttributes({ content: content })}
            placeholder={'Descripción'}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <span>Link</span>
          <PlainText
            placehoder="Texto del Link"
            value={attributes.linkText}
            onChange={(linkText) => setAttributes({ linkText })}
          />
          <LinkControl
            value={attributes.urlObject}
            onChange={(content) => setAttributes({ urlObject: content })}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <span>Imagen</span>
          <MediaPlaceholder
            onSelect={(media) => this.selectImage({ setAttributes, media })}
            allowedTypes={['image']}
            multiple={false}
            mediaPreview={<ImagePreview url={attributes.imageUrl} />}
            labels={{ title: '', instructions: '' }}
          />
        </div>
        {this.renderInspector({ attributes, setAttributes })}
      </ContainerBlock>
    );
  };

  save = ({ attributes }) => {
    const { themeUri } = blockVars;
    const { onDark, headline } = attributes;
    return (
      <>
        <div
          className={`two-col-text-img ${attributes.imageOnLeft && 'two-col-text-img--inverse'}`}
        >
          <div className={'two-col-text-img__description'}>
            <RichText.Content
              className={`headline headline--${headline} ${onDark && 'headline--light'}`}
              tagName={headline}
              value={attributes.title}
            />
            <div className="separator separator--secondary" />
            <RichText.Content
              className={onDark && 'text-light'}
              tagName={'p'}
              value={attributes.content}
            />

            {attributes.urlObject?.url && attributes.linkUrl && (
              <a
                href={attributes.urlObject?.url}
                className={`mdc-button mdc-button--raised mdc-button--${attributes.buttonClass}`}
              >
                {attributes.linkText}
              </a>
            )}
          </div>
          <div className="two-col-text-img__image">
            <img id={attributes.imageId} src={attributes.imageUrl} alt={attributes.imageAlt} />
            {attributes.urlObject?.url && attributes.linkUrl && (
              <a
                href={attributes.urlObject?.url}
                className={`mdc-button mdc-button--raised mdc-button--${attributes.buttonClass}`}
              >
                {attributes.linkText}
              </a>
            )}
          </div>
        </div>
        <link
          rel="stylesheet"
          href={`${themeUri}/frontend/dist/two-col-text-img.css?ver=${attributes.version}`}
          media="all"
          onLoad={attributes.onLoad ? "this.media='all'" : null}
        />
      </>
    );
  };
}

registerBlockType('qatar-inc/two-column-text-with-media', new TwoColumnTextWithMedia());
