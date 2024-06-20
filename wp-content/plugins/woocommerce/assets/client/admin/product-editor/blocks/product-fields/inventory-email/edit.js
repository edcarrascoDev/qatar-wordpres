'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const i18n_1 = require('@wordpress/i18n'),
  block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@woocommerce/components'),
  element_1 = require('@wordpress/element'),
  settings_1 = require('@woocommerce/settings'),
  compose_1 = require('@wordpress/compose'),
  components_2 = require('@wordpress/components'),
  core_data_1 = require('@wordpress/core-data'),
  validation_context_1 = require('../../../contexts/validation-context');
function Edit({ attributes: e, clientId: t }) {
  const o = (0, block_templates_1.useWooBlockProps)(e),
    n = (0, settings_1.getSetting)('notifyLowStockAmount', 2),
    [r, s] = (0, core_data_1.useEntityProp)('postType', 'product', 'low_stock_amount'),
    c = (0, compose_1.useInstanceId)(components_2.BaseControl, 'low_stock_amount'),
    { ref: l, error: i, validate: m } = (0, validation_context_1.useValidation)(
      `low_stock_amount-${t}`,
      async function() {
        if (r && r < 0)
          return (0, i18n_1.__)('This field must be a positive number.', 'woocommerce');
      },
      [r],
    );
  return (0, element_1.createElement)(
    element_1.Fragment,
    null,
    (0, element_1.createElement)(
      'div',
      { ...o },
      (0, element_1.createElement)(
        'div',
        { className: 'wp-block-columns' },
        (0, element_1.createElement)(
          'div',
          { className: 'wp-block-column' },
          (0, element_1.createElement)(
            components_2.BaseControl,
            {
              id: c,
              label: (0, i18n_1.__)('Email me when stock reaches', 'woocommerce'),
              help:
                i ||
                (0, element_1.createInterpolateElement)(
                  (0, i18n_1.__)(
                    'Make sure to enable notifications in <link>store settings.</link>',
                    'woocommerce',
                  ),
                  {
                    link: (0, element_1.createElement)(components_1.Link, {
                      href: `${(0, settings_1.getSetting)(
                        'adminUrl',
                      )}admin.php?page=wc-settings&tab=products&section=inventory`,
                      target: '_blank',
                      type: 'external',
                    }),
                  },
                ),
              className: i && 'has-error',
            },
            (0, element_1.createElement)(components_2.__experimentalInputControl, {
              id: c,
              ref: l,
              name: 'low_stock_amount',
              placeholder: (0, i18n_1.sprintf)(
                (0, i18n_1.__)('%d (store default)', 'woocommerce'),
                n,
              ),
              onChange: s,
              onBlur: m,
              value: r,
              type: 'number',
              min: 0,
            }),
          ),
        ),
        (0, element_1.createElement)('div', { className: 'wp-block-column' }),
      ),
    ),
  );
}
exports.Edit = Edit;