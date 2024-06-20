'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const classnames_1 = __importDefault(require('classnames')),
  block_templates_1 = require('@woocommerce/block-templates'),
  compose_1 = require('@wordpress/compose'),
  core_data_1 = require('@wordpress/core-data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  components_1 = require('@wordpress/components'),
  label_1 = require('../../../components/label/label'),
  validation_context_1 = require('../../../contexts/validation-context'),
  use_currency_input_props_1 = require('../../../hooks/use-currency-input-props'),
  sanitize_html_1 = require('../../../utils/sanitize-html');
function Edit({ attributes: e, clientId: r, context: t }) {
  const o = (0, block_templates_1.useWooBlockProps)(e),
    { label: n, help: s, isRequired: i, tooltip: a, disabled: l } = e,
    [c, u] = (0, core_data_1.useEntityProp)('postType', t.postType || 'product', 'regular_price'),
    [_] = (0, core_data_1.useEntityProp)('postType', t.postType || 'product', 'sale_price'),
    p = (0, use_currency_input_props_1.useCurrencyInputProps)({ value: c, onChange: u }),
    m = (0, compose_1.useInstanceId)(
      components_1.BaseControl,
      'wp-block-woocommerce-product-regular-price-field',
    ),
    { ref: d, error: f, validate: b } = (0, validation_context_1.useValidation)(
      `regular_price-${r}`,
      async function() {
        const e = Number.parseFloat(c);
        if (e) {
          if (e < 0)
            return (0, i18n_1.__)(
              'Regular price must be greater than or equals to zero.',
              'woocommerce',
            );
          if (_ && e <= Number.parseFloat(_))
            return (0, i18n_1.__)(
              'Regular price must be greater than the sale price.',
              'woocommerce',
            );
        } else if (i)
          return (0, i18n_1.sprintf)((0, i18n_1.__)('%s is required.', 'woocommerce'), n);
      },
      [c, _],
    );
  return (
    (0, element_1.useEffect)(() => {
      i && b();
    }, []),
    (0, element_1.createElement)(
      'div',
      { ...o },
      (0, element_1.createElement)(
        components_1.BaseControl,
        {
          id: m,
          help:
            f ||
            (function() {
              if (s)
                return (0, element_1.createElement)('span', {
                  dangerouslySetInnerHTML: (0, sanitize_html_1.sanitizeHTML)(s),
                });
            })(),
          className: (0, classnames_1.default)({ 'has-error': f }),
        },
        (0, element_1.createElement)(components_1.__experimentalInputControl, {
          ...p,
          id: m,
          name: 'regular_price',
          ref: d,
          label: a ? (0, element_1.createElement)(label_1.Label, { label: n, tooltip: a }) : n,
          disabled: l,
          onBlur: b,
        }),
      ),
    )
  );
}
exports.Edit = Edit;
