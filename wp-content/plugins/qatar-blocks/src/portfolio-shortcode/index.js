import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
const { __ } = wp.i18n;

class PortfolioShortcode extends BaseBlock {
  title = __('Portafolio');
  category = 'qatar';
  parent = ['qatar/single-container'];
  supports = {
    align: ['full'],
  };
  edit = params => {
    return (
      <>
        <h2>Portafolio</h2>
      </>
    );
  };

  save = params => {
    return <>[portafolio]</>;
  };
}
registerBlockType('qatar/portfolio-shortcode', new PortfolioShortcode());
