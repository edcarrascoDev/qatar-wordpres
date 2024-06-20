'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  i18n_1 = require('@wordpress/i18n'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  validation_context_1 = require('../../../contexts/validation-context'),
  number_control_1 = require('../../../components/number-control'),
  use_product_edits_1 = require('../../../hooks/use-product-edits');
function Edit({ attributes: e, context: { postType: t } }) {
  const o = (0, block_templates_1.useWooBlockProps)(e),
    {
      label: r,
      property: i,
      suffix: u,
      placeholder: n,
      help: l,
      min: s,
      max: _,
      required: a,
      tooltip: p,
      disabled: d,
      step: c,
    } = e,
    [m, f] = (0, use_product_entity_prop_1.default)(i, { postType: t, fallbackValue: '' }),
    { hasEdit: b } = (0, use_product_edits_1.useProductEdits)(),
    { error: h, validate: q } = (0, validation_context_1.useValidation)(
      i,
      async function() {
        return 'number' == typeof s && m && parseFloat(m) < s
          ? (0, i18n_1.sprintf)(
              (0, i18n_1.__)('Value must be greater than or equal to %d', 'woocommerce'),
              s,
            )
          : 'number' == typeof _ && m && parseFloat(m) > _
          ? (0, i18n_1.sprintf)(
              (0, i18n_1.__)('Value must be less than or equal to %d', 'woocommerce'),
              _,
            )
          : a && !m
          ? (0, i18n_1.__)('This field is required.', 'woocommerce')
          : void 0;
      },
      [m],
    );
  return (0, element_1.createElement)(
    'div',
    { ...o },
    (0, element_1.createElement)(number_control_1.NumberControl, {
      label: r,
      onChange: f,
      value: m || '',
      help: l,
      suffix: u,
      placeholder: n,
      error: h,
      onBlur: () => {
        b(i) && q();
      },
      required: a,
      tooltip: p,
      disabled: d,
      step: c,
      min: s,
      max: _,
    }),
  );
}
exports.Edit = Edit;
