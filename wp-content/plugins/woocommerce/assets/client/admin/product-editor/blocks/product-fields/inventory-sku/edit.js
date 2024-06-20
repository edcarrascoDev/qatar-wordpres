'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const i18n_1 = require('@wordpress/i18n'),
  element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@wordpress/components'),
  core_data_1 = require('@wordpress/core-data');
function Edit({ attributes: e, context: o }) {
  const t = (0, block_templates_1.useWooBlockProps)(e),
    [r, n] = (0, core_data_1.useEntityProp)('postType', o.postType, 'sku');
  return (0, element_1.createElement)(
    'div',
    { ...t },
    (0, element_1.createElement)(
      components_1.BaseControl,
      {
        id: 'product_sku',
        className: 'woocommerce-product-form_inventory-sku',
        label: (0, element_1.createInterpolateElement)(
          (0, i18n_1.__)('Sku <description />', 'woocommerce'),
          {
            description: (0, element_1.createElement)(
              'span',
              { className: 'woocommerce-product-form__optional-input' },
              (0, i18n_1.__)('(STOCK KEEPING UNIT)', 'woocommerce'),
            ),
          },
        ),
      },
      (0, element_1.createElement)(components_1.__experimentalInputControl, {
        name: 'woocommerce-product-sku',
        onChange: n,
        value: r || '',
        disabled: e.disabled,
      }),
    ),
  );
}
exports.Edit = Edit;
