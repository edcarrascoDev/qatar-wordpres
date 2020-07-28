import BaseBlock from '../base-block';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { PlainText } = wp.blockEditor;
const { Fragment } = wp.element;

class IdentifierContainer extends BaseBlock {
    title = __('Identifier container');
    category = 'qatar';
    supports = {
        align: ['full'],
    };

    attributes = {
        identifier: {},
    };

    constructor() {
        super();
    }

    edit(params) {
        const { attributes, setAttributes, className } = params;
        return (
            <Fragment>
                <div className={className}>
                    <div className="input__group">
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
            </Fragment>
        );
    }

    save(params) {
        const { attributes } = params;
        return <div id={attributes.identifier} />;
    }
}

registerBlockType('qatar/identifier-container', new IdentifierContainer());
