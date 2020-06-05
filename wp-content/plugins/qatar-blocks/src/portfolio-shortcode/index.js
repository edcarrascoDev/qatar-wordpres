import BaseBlock from '../base-block';
const { __ } = wp.i18n;
const { Fragment } = wp.element;

class PortfolioShortcode extends BaseBlock {
    title = __('Portafolio');
    category = 'qatar';
    parent = ['qatar/single-container'];
    supports = {
        align: ['full'],
    };
    edit(params) {
        return (
            <Fragment>
                <h2>Portafolio</h2>
            </Fragment>
        );
    }

    save(params) {
        return <Fragment>[portafolio]</Fragment>;
    }
}
registerBlockType('qatar/portfolio-shortcode', new PortfolioShortcode());
