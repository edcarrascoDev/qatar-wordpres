import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

class PortfolioShortcode extends BaseBlock {
  title = __('Portafolio');
  parent = ['qatar/single-container'];
  edit = () => <h2>Portafolio</h2>;

  save = () => <>[portafolio]</>;
}
registerBlockType('qatar/portfolio-shortcode', new PortfolioShortcode());
