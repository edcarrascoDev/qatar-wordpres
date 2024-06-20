'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  compose_1 = require('@wordpress/compose'),
  core_data_1 = require('@wordpress/core-data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  components_1 = require('@wordpress/components'),
  validation_context_1 = require('../../../contexts/validation-context');
function Edit({ attributes: e, clientId: t, context: o }) {
  const n = (0, block_templates_1.useWooBlockProps)(e),
    [r] = (0, core_data_1.useEntityProp)('postType', o.postType, 'manage_stock'),
    [s, c] = (0, core_data_1.useEntityProp)('postType', o.postType, 'stock_quantity'),
    a = (0, compose_1.useInstanceId)(components_1.BaseControl, 'product_stock_quantity'),
    { ref: l, error: i, validate: m } = (0, validation_context_1.useValidation)(
      `stock_quantity-${t}`,
      async function() {
        if (r && s && s < 0)
          return (0, i18n_1.__)('Stock quantity must be a positive number.', 'woocommerce');
      },
      [r, s],
    );
  return (
    (0, element_1.useEffect)(() => {
      r && null === s && c(1);
    }, [r, s]),
    (0, element_1.createElement)(
      'div',
      { ...n },
      (0, element_1.createElement)(
        'div',
        { className: 'wp-block-columns' },
        (0, element_1.createElement)(
          'div',
          { className: 'wp-block-column' },
          (0, element_1.createElement)(
            components_1.BaseControl,
            { id: a, className: i && 'has-error', help: null != i ? i : '' },
            (0, element_1.createElement)(components_1.__experimentalInputControl, {
              id: a,
              name: 'stock_quantity',
              ref: l,
              label: (0, i18n_1.__)('Available stock', 'woocommerce'),
              value: s,
              onChange: c,
              onBlur: m,
              type: 'number',
              min: 0,
            }),
          ),
        ),
        (0, element_1.createElement)('div', { className: 'wp-block-column' }),
      ),
    )
  );
}
exports.Edit = Edit;
