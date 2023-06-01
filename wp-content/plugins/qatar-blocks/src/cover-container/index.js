import BaseBlock from '../base-block';
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';
import {
  InspectorControls,
  PlainText,
  InnerBlocks,
  MediaPlaceholder,
} from '@wordpress/block-editor';
import { PanelRow, PanelBody, BaseControl } from '@wordpress/components';

import { UTILS, ImagePreview } from '../utils';

const ALLOWED_BLOCKS = ['qatar/cover-content'];

class CoverContainer extends BaseBlock {
  title = __('Contenedor con Imagen de fondo');
  attributes = {
    imageUrl: {
      attribute: 'src',
      selector: '.cover__image img',
    },
    imageId: {
      attribute: 'id',
      selector: '.cover__image img',
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.cover__image img',
    },
    containerClasses: {},
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
        <PanelRow>
          <BaseControl label={'Imagen de fondo'}>
            <div className={UTILS.FORM_GROUP}>
              <MediaPlaceholder
                onSelect={el => setAttributes({ imageUrl: el.url, imageAlt: el.alt })}
                allowedTypes={['image']}
                multiple={false}
                mediaPreview={<ImagePreview url={attributes.imageUrl} />}
                labels={{ title: '', instructions: '' }}
              />
            </div>
          </BaseControl>
        </PanelRow>
        <PanelRow>
          <div className="input__group">
            <label htmlFor="containerClasses">Classes para del contenedor</label>
            <PlainText
              value={attributes.containerClasses}
              id={'containerClasses'}
              onChange={content => setAttributes({ containerClasses: content })}
              placeholder={__('ej: container--reduce')}
            />
          </div>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );

  edit = params => {
    return (
      <div className={UTILS.MAIN_CONTAINER}>
        <InnerBlocks
          template={[ALLOWED_BLOCKS]}
          allowedBlocks={ALLOWED_BLOCKS}
          templateLock={true}
        />
        {this.renderInspector(params)}
      </div>
    );
  };

  save = params => {
    const { attributes } = params;
    return (
      <section className="section">
        <div className="cover">
          <div className="cover__image">
            <img id={attributes.imageId} src={attributes.imageUrl} alt={attributes.imageAlt} />
          </div>
          <div className={`container ${attributes.containerClasses}`}>
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    );
  };
}

registerBlockType('qatar/cover-container', new CoverContainer());
