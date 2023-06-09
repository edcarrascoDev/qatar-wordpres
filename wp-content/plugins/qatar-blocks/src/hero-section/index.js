import BaseBlock from '../base-block';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, FormToggle } from '@wordpress/components';
import { select } from '@wordpress/data';
import { UTILS } from '../utils';

const ALLOWED_BLOCKS = ['qatar/hero-section-slide'];

class HeroSection extends BaseBlock {
  title = __('Sección principal');
  attributes = {
    isExtended: {
      default: false,
    },
    numberOfItems: {},
  };

  edit = params => (
    <div className={UTILS.MAIN_CONTAINER}>
      <InnerBlocks
        template={[ALLOWED_BLOCKS]}
        allowedBlocks={ALLOWED_BLOCKS}
        templateLock={false}
      />
      {this.renderInspector(params)}
    </div>
  );

  renderInspector = ({ attributes, setAttributes, clientId }) => {
    /**
     * return the childBlocks to know how many slides has the parent
     */
    const parentBlock = select('core/editor').getBlocksByClientId(clientId)[0];
    setAttributes({ numberOfItems: parentBlock.innerBlocks.length });

    return (
      <InspectorControls>
        <PanelBody title={'Otros Ajustes'}>
          <div className="toggle">
            <FormToggle
              id={'isExtended'}
              value={attributes.isExtended}
              checked={attributes.isExtended}
              onChange={() => setAttributes({ isExtended: !attributes.isExtended })}
            />
            <label htmlFor={'isExtended'}>Ajustar a pantalla completa</label>
          </div>
        </PanelBody>
      </InspectorControls>
    );
  };

  save = params => {
    const { attributes } = params;
    const { isExtended, numberOfItems } = attributes;
    const classes = `hero ${isExtended ? 'hero--extended' : ''}`;
    return (
      <div className={classes}>
        <div className={`swiper ${numberOfItems > 1 ? 'hero__slider' : null}`}>
          <div className="swiper-wrapper">
            <InnerBlocks.Content />
          </div>
          {numberOfItems > 1 ? (
            <>
              <div className="swiper-pagination swiper-pagination-black" />
              <div className="swiper-button-next swiper-button-black" />
              <div className="swiper-button-prev swiper-button-black" />
            </>
          ) : null}
        </div>
      </div>
    );
  };
}

registerBlockType('qatar/hero-section', new HeroSection());
