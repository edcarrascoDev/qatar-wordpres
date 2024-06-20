import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
import { UTILS } from '../utils';
import { InnerBlocks, InspectorControls, PlainText } from '@wordpress/block-editor';
import { BaseControl, PanelBody, ToggleControl } from '@wordpress/components';

const ALLOWED_BLOCKS = ['qatar-inc/icon-text-item'];
const TEMPLATE = [
  ['qatar-inc/icon-text-item', 'qatar-inc/icon-text-item', 'qatar-inc/icon-text-item'],
];
class IconTextList extends BaseBlock {
  title = 'Lista de Íconos con texto';
  parent = ['qatar-inc/section'];

  attributes = {
    sectionId: {},
    onLoad: { default: false },
    version: { default: '1.0.0' },
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Section Options'}>
        <BaseControl>
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
        {this.renderInspector({ attributes, setAttributes })}
        <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
      </div>
    );
  };

  save = ({ attributes }) => {
    const { themeUri } = blockVars;
    return (
      <>
        <div className="icon-text-list">
          <div className="icon-text-list__row">
            <InnerBlocks.Content />
          </div>
        </div>
        <link
          rel="stylesheet"
          href={`${themeUri}/frontend/dist/icon-text-list.css?ver=${attributes.version}`}
          media="all"
          onLoad={attributes.onLoad ? "this.media='all'" : null}
        />
      </>
    );
  };
}
registerBlockType('qatar-inc/icon-text-item', IconTextList);
