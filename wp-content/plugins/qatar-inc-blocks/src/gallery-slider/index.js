import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
import { UTILS } from '../utils';
import { InnerBlocks, InspectorControls, PlainText, RichText } from '@wordpress/block-editor';
import {
  BaseControl,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';

const ALLOWED_BLOCKS = ['qatar-inc/gallery-slider-item'];

class GallerySlider extends BaseBlock {
  title = 'Carrousel de imágenes';

  attributes = {
    customId: {},
    sectionId: {},
    title: {},
    background: { default: 'default' },
    paddingTop: { default: 5 },
    paddingBottom: { default: 5 },
    onLoad: { default: false },
    version: { default: '1.0.0' },
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Section Options'}>
        <BaseControl>
          <div className={UTILS.FORM_GROUP}>
            <span>Id</span>
            <PlainText
              value={attributes.customId}
              onChange={customId => setAttributes({ customId })}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <RangeControl
              label="Padding Top"
              value={attributes.paddingTop}
              onChange={value => setAttributes({ paddingTop: value })}
              min={0}
              max={10}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <RangeControl
              label="Padding Bottom"
              value={attributes.paddingBottom}
              onChange={value => setAttributes({ paddingBottom: value })}
              min={0}
              max={10}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <SelectControl
              label="Color de fondo"
              value={attributes.background}
              options={[
                { label: 'Blanco', value: 'default' },
                { label: 'Oscuro', value: 'primary' },
                { label: 'Gris claro', value: 'gray' },
              ]}
              onChange={value => setAttributes({ background: value })}
              __nextHasNoMarginBottom
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
      <div className={UTILS.MAIN_CONTAINER}>
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
        {this.renderInspector({ attributes, setAttributes })}
        <div className={`${UTILS.ROW} ${UTILS.ROW}--2`}>
          <InnerBlocks
            template={[ALLOWED_BLOCKS, ALLOWED_BLOCKS, ALLOWED_BLOCKS, ALLOWED_BLOCKS]}
            allowedBlocks={ALLOWED_BLOCKS}
          />
        </div>
      </div>
    );
  };

  save = ({ attributes }) => {
    const { themeUri } = blockVars;
    const sectionId = attributes.customId || `Section-${attributes.sectionId}`;
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
                padding-top: ${attributes.paddingTop}rem;
                padding-bottom: ${attributes.paddingBottom}rem;
              }
            }
          `}
        </style>
        <link
          rel="stylesheet"
          href={`${themeUri}/frontend/dist/gallery-slider.css?ver=${attributes.version}`}
          media="all"
          onLoad={attributes.onLoad ? "this.media='all'" : null}
        />
        <section id={sectionId} className={`gallery-slider background--${attributes.background}`}>
          {attributes.title && (
            <RichText.Content
              className="gallery-slider__title headline headline--h3 text-center"
              tagName={'h3'}
              value={attributes.title}
            />
          )}
          <div className="swiper">
            <div className="swiper-wrapper">
              <InnerBlocks.Content />
            </div>
          </div>
        </section>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: this.swiperMethod(sectionId),
          }}
        />
      </>
    );
  };

  swiperMethod = id => {
    return `
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

    const swiper = new Swiper('#${id} .swiper',{
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1920: {
          slidesPerView: 4,
        },
      },
    })`;
  };
}

registerBlockType('qatar-inc/gallery-slider', new GallerySlider());
