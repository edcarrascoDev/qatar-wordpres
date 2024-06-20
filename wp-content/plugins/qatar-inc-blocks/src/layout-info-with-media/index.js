import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
import { ContainerBlock } from '../container-block';
import { ImagePreview, UTILS } from '../utils';
import {
  RichText,
  InspectorControls,
  PlainText,
  __experimentalLinkControl as LinkControl,
  MediaPlaceholder,
} from '@wordpress/block-editor';
import { BaseControl, PanelBody, ToggleControl, RangeControl } from '@wordpress/components';
class LayoutInfoWithMedia extends BaseBlock {
  title = 'Sección de información principal con Imagen';

  attributes = {
    sectionId: {},
    title: {},
    subtitle: {},
    content: {},
    imageUrl: {},
    imageAlt: {},
    linkText: {},
    urlObject: {},
    paddingTop: {},
    paddingBottom: {},
    onLoad: { default: false },
    version: { default: '1.0.0' },
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
        <BaseControl>
          <div className={UTILS.FORM_GROUP}>
            <RangeControl
              label="Padding Top"
              value={attributes.paddingTop}
              onChange={value => setAttributes({ paddingTop: value })}
              min={1}
              max={10}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <RangeControl
              label="Padding Bottom"
              value={attributes.paddingBottom}
              onChange={value => setAttributes({ paddingBottom: value })}
              min={1}
              max={10}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <ToggleControl
              label="Cargar estilos durante la carga"
              checked={attributes.onLoad}
              onChange={value => setAttributes({ onLoad: value })}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <span>Versión de estilos</span>
            <PlainText
              value={attributes.version}
              onChange={version => setAttributes({ version })}
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
          <span>Imagen de fondo</span>
          <MediaPlaceholder
            onSelect={el => setAttributes({ imageUrl: el.url, imageAlt: el.alt })}
            allowedTypes={['image']}
            multiple={false}
            mediaPreview={<ImagePreview url={attributes.imageUrl} />}
            labels={{ title: '', instructions: '' }}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <span>Subtítulo</span>
          <PlainText
            value={attributes.subtitle}
            id={'subtitle'}
            onChange={content => setAttributes({ subtitle: content })}
            placeholder={'Subtítulo'}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <span>Título</span>
          <RichText
            value={attributes.title}
            multine={'br'}
            id={'title'}
            onChange={content => setAttributes({ title: content })}
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
            onChange={content => setAttributes({ content: content })}
            placeholder={'Descripción'}
          />
        </div>
        <div className={UTILS.FORM_GROUP}>
          <span>Link</span>
          <PlainText
            placehoder="Texto del Link"
            value={attributes.linkText}
            onChange={linkText => setAttributes({ linkText })}
          />
          <LinkControl
            value={attributes.urlObject}
            onChange={content => setAttributes({ urlObject: content })}
          />
        </div>
        {this.renderInspector({ attributes, setAttributes })}
      </ContainerBlock>
    );
  };

  save = ({ attributes }) => {
    const { themeUri } = blockVars;
    const sectionId = `Section-${attributes.sectionId}`;
    return (
      <>
        <style>
          {`
            #${sectionId} {
              padding-top: ${(attributes.paddingTop * 75) / 100}rem;
              padding-bottom: ${(attributes.paddingBottom * 75) / 100}rem;
            } 
            @media only screen and (min-width: 992px) {
              #${sectionId} {
                background-image: url('${attributes.imageUrl}');
                padding-top: ${attributes.paddingTop}rem;
                padding-bottom: ${attributes.paddingBottom}rem;
              }
            }
          `}
        </style>
        <div id={sectionId} className="custom-post-main">
          <div className="container">
            <div className="custom-post-main__wrapper">
              <h4 className="custom-post-main__subtitle headline headline--h6">
                {attributes.subtitle}
              </h4>
              <RichText.Content
                className="custom-post-main__title headline headline--h3 headline--light"
                tagName={'h1'}
                value={attributes.title}
              />
              <div className="separator separator--secondary text-light" />
              <RichText.Content tagName={'p'} className="text-light" value={attributes.content} />
              <a
                href={attributes.urlObject?.url}
                className="link link--white"
                rel="noopener noreferrer"
              >
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
      </>
    );
  };
}

registerBlockType('qatar-inc/layout-info-with-media', new LayoutInfoWithMedia());
