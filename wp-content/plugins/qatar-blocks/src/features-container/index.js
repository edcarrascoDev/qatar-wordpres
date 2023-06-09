import BaseBlock from '../base-block';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import { UTILS } from '../utils';

const ALLOWED_BLOCKS = ['qatar/feature-item'];

class FeaturesContainer extends BaseBlock {
  title = __('Sección de destacados');
  attributes = {
    numberOfItems: {},
  };

  edit = params => {
    const { clientId, attributes, setAttributes } = params;
    /**
     * return the childBlocks to know how many slides has the parent
     */
    const parentBlock = select('core/editor').getBlocksByClientId(clientId)[0];
    setAttributes({ numberOfItems: parentBlock.innerBlocks.length });

    return (
      <div className={UTILS.MAIN_CONTAINER}>
        <InnerBlocks
          template={[ALLOWED_BLOCKS, ALLOWED_BLOCKS, ALLOWED_BLOCKS]}
          allowedBlocks={ALLOWED_BLOCKS}
          templateLock={attributes.numberOfItems > 3 ? 'insert' : false}
        />
      </div>
    );
  };

  save = params => {
    const { attributes } = params;
    const { numberOfItems } = attributes;
    return (
      <section className="section">
        <div className={'features'}>
          <div className={`features__list features__list--col-${numberOfItems}`}>
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    );
  };
}

registerBlockType('qatar/features-container', new FeaturesContainer());
