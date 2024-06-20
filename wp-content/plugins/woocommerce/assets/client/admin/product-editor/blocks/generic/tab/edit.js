'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.TabBlockEdit = void 0);
const block_editor_1 = require('@wordpress/block-editor'),
  classnames_1 = __importDefault(require('classnames')),
  element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  tab_button_1 = require('./tab-button');
function TabBlockEdit({ setAttributes: e, attributes: t, context: o }) {
  const l = (0, block_templates_1.useWooBlockProps)(t),
    { id: r, title: c, _templateBlockOrder: a, isSelected: s } = t,
    n = o.selectedTab === r;
  n !== s && e({ isSelected: n });
  const _ = (0, classnames_1.default)('wp-block-woocommerce-product-tab__content', {
    'is-selected': n,
  });
  return (0, element_1.createElement)(
    'div',
    { ...l },
    (0, element_1.createElement)(tab_button_1.TabButton, { id: r, selected: n, order: a }, c),
    (0, element_1.createElement)(
      'div',
      {
        id: `woocommerce-product-tab__${r}-content`,
        'aria-labelledby': `woocommerce-product-tab__${r}`,
        role: 'tabpanel',
        className: _,
      },
      (0, element_1.createElement)(block_editor_1.InnerBlocks, { templateLock: 'contentOnly' }),
    ),
  );
}
exports.TabBlockEdit = TabBlockEdit;
