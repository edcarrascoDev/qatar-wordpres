import BaseBlock from '../base-block';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, PlainText, InnerBlocks } = wp.editor;
const { PanelRow, PanelBody, RangeControl } = wp.components;
const { Fragment } = wp.element;

class Columns extends BaseBlock {
    title = __('Columnas de texto');
    category = 'qatar';
    parent = ['qatar/single-container'];
    supports = {
        align: ['full'],
    };

    attributes = {
        containerClasses: {},
        columns: {
            default: 2,
        },
    };

    constructor() {
        super();
    }

    renderInspector(params) {
        const { attributes, setAttributes } = params;
        return (
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
    }

    edit(params) {
        return (
            <Fragment>
                <InnerBlocks />
                {this.renderInspector(params)}
            </Fragment>
        );
    }

    save(params) {
        const { attributes } = params;
        return (
            <div className={`column column--${attributes.columns}`}>
                <InnerBlocks.Content />
            </div>
        );
    }
}

registerBlockType('qatar/columns', new Columns());
