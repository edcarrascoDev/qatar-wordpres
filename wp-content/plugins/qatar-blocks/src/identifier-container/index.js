import BaseBlock from '../base-block';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { PlainText } from '@wordpress/block-editor';
import { ContainerBlock } from '../container-block';

class IdentifierContainer extends BaseBlock {
  title = __('Identifier container');
  category = 'qatar';
  attributes = {
    identifier: {},
  };

  edit = params => {
    const { attributes, setAttributes, className } = params;
    return (
      <ContainerBlock title={this.title}>
        <div className={className}>
          <div className={UTILS.FORM_GROUP}>
            <label htmlFor="identifier" className={'label'}>
              Identificador
            </label>
            <PlainText
              value={attributes.identifier}
              id={'identifier'}
              onChange={content => setAttributes({ identifier: content })}
              placeholder={__('ej: mainProductId')}
            />
            <small>No usar espacios</small>
          </div>
        </div>
      </ContainerBlock>
    );
  };

  save = params => {
    const { attributes } = params;
    return <div id={attributes.identifier} />;
  };
}

registerBlockType('qatar/identifier-container', new IdentifierContainer());
