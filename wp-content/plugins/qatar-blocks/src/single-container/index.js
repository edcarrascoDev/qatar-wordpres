import BaseBlock from '../base-block';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PlainText, InnerBlocks } from '@wordpress/block-editor';
import { PanelRow, PanelBody, ColorPicker, FormToggle } from '@wordpress/components';
import { UTILS } from '../utils';

class SingleContainer extends BaseBlock {
  title = __('Contenedor de secciones Sencillo');

  attributes = {
    containerClasses: {},
    backgroundColor: {
      default: '#ffffff',
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
          <div className="toggle">
            <FormToggle
              id={'isLightText'}
              value={attributes.isLightText}
              checked={attributes.isLightText}
              onChange={() => setAttributes({ isLightText: !attributes.isLightText })}
            />
            <label htmlFor="isLightText">Aplicar textos claros</label>
          </div>
        </PanelRow>

        <PanelRow>
          <div className="input__group">
            <label htmlFor="backgroundColor">Color de fondo</label>
            <ColorPicker
              color={attributes.backgroundColor}
              onChangeComplete={value => setAttributes({ backgroundColor: value })}
              disableAlpha
            />
          </div>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );

  edit = params => {
    return (
      <div className={UTILS.MAIN_CONTAINER}>
        <InnerBlocks />
        {this.renderInspector(params)}
      </div>
    );
  };

  save = ({ attributes }) => (
    <section className="section" style={{ backgroundColor: attributes.backgroundColor.hex }}>
      <div className={`container ${attributes.containerClasses}`}>
        <InnerBlocks.Content />
      </div>
    </section>
  );
}

registerBlockType('qatar/single-container', new SingleContainer());
