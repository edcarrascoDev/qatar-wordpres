import BaseBlock from '../base-block';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { PanelRow, PanelBody, RangeControl } from '@wordpress/components';

import { ContainerBlock } from '../container-block';
import { UTILS } from '../utils';

class Columns extends BaseBlock {
  title = __('Columnas de texto');
  parent = ['qatar/single-container'];

  attributes = {
    containerClasses: {},
    columns: {
      default: 2,
    },
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
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
        <PanelRow>
          <RangeControl
            value={attributes.columns}
            onChange={content => setAttributes({ columns: Number(content) })}
            label={__('número de columnas')}
            min={1}
            max={4}
          />
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );

  edit = params => {
    return (
      <ContainerBlock title={this.title}>
        <div className={`${UTILS.INTERNAL_ROW} ${UTILS.INTERNAL_ROW}--2`}>
          <InnerBlocks />
        </div>
        {this.renderInspector(params)}
      </ContainerBlock>
    );
  };

  save = params => {
    const { attributes } = params;
    return (
      <div className={`column column--${attributes.columns}`}>
        <InnerBlocks.Content />
      </div>
    );
  };
}

registerBlockType('qatar/columns', new Columns());
