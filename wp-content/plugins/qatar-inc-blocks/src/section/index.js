import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
import { UTILS } from '../utils';
import { InnerBlocks, InspectorControls, PlainText } from '@wordpress/block-editor';
import { BaseControl, PanelBody, SelectControl, RangeControl } from '@wordpress/components';

class Section extends BaseBlock {
  title = 'Sección';

  attributes = {
    customId: {},
    sectionId: {},
    background: { default: 'default' },
    paddingTop: { default: 5 },
    paddingBottom: { default: 5 },
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
        </BaseControl>
      </PanelBody>
    </InspectorControls>
  );

  edit = ({ attributes, setAttributes, clientId }) => {
    setAttributes({ sectionId: clientId });
    return (
      <div className={UTILS.MAIN_CONTAINER}>
        {this.renderInspector({ attributes, setAttributes })}
        <InnerBlocks />
      </div>
    );
  };

  save = ({ attributes }) => {
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
        <section id={sectionId} className={`section background--${attributes.background}`}>
          <div className="container">
            <InnerBlocks.Content />
          </div>
        </section>
      </>
    );
  };
}

registerBlockType('qatar-inc/section', new Section());
