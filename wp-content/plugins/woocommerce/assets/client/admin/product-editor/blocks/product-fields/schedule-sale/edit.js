'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@woocommerce/components'),
  tracks_1 = require('@woocommerce/tracks'),
  components_2 = require('@wordpress/components'),
  core_data_1 = require('@wordpress/core-data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  moment_1 = __importDefault(require('moment')),
  date_1 = require('@wordpress/date'),
  use_product_edits_1 = require('../../../hooks/use-product-edits'),
  validation_context_1 = require('../../../contexts/validation-context');
function Edit({ attributes: e, clientId: t, context: o }) {
  const r = (0, block_templates_1.useWooBlockProps)(e),
    { hasEdit: a } = (0, use_product_edits_1.useProductEdits)(),
    n = (0, date_1.getSettings)().formats.datetime,
    [_, c] = (0, element_1.useState)(!1),
    [s] = (0, core_data_1.useEntityProp)('postType', o.postType || 'product', 'sale_price'),
    l = Number.parseFloat(s || '0') > 0,
    [i, m] = (0, core_data_1.useEntityProp)(
      'postType',
      o.postType || 'product',
      'date_on_sale_from_gmt',
    ),
    [d, u] = (0, core_data_1.useEntityProp)(
      'postType',
      o.postType || 'product',
      'date_on_sale_to_gmt',
    ),
    p = (0, moment_1.default)()
      .startOf('minute')
      .toISOString();
  (0, element_1.useEffect)(() => {
    a('sale_price') && !l && (c(!1), m(''), u(''));
  }, [l]),
    (0, element_1.useEffect)(() => {
      (i || d) && c(!0);
    }, [i, d]);
  const f = (0, moment_1.default)(i, moment_1.default.ISO_8601, !0),
    h = (0, moment_1.default)(d, moment_1.default.ISO_8601, !0),
    { ref: w, error: E, validate: b } = (0, validation_context_1.useValidation)(
      `date_on_sale_from_gmt-${t}`,
      async function() {
        if (_ && i) {
          if (!f.isValid()) return (0, i18n_1.__)('Please enter a valid date.', 'woocommerce');
          if (f.isAfter(h))
            return (0, i18n_1.__)(
              'The start date of the sale must be before the end date.',
              'woocommerce',
            );
        }
      },
      [_, i, f, h],
    ),
    { ref: g, error: k, validate: v } = (0, validation_context_1.useValidation)(
      `date_on_sale_to_gmt-${t}`,
      async function() {
        if (_ && d) {
          if (!h.isValid()) return (0, i18n_1.__)('Please enter a valid date.', 'woocommerce');
          if (h.isBefore(f))
            return (0, i18n_1.__)(
              'The end date of the sale must be after the start date.',
              'woocommerce',
            );
        }
      },
      [_, i, f, h],
    );
  return (0, element_1.createElement)(
    'div',
    { ...r },
    (0, element_1.createElement)(components_2.ToggleControl, {
      label: (0, i18n_1.__)('Schedule sale', 'woocommerce'),
      checked: _,
      onChange: function(e) {
        (0, tracks_1.recordEvent)('product_pricing_schedule_sale_toggle_click', { enabled: e }),
          c(e),
          e ? (m(p), u('')) : (m(''), u(''));
      },
      disabled: !l,
    }),
    _ &&
      (0, element_1.createElement)(
        'div',
        {
          className: 'wp-block-columns wp-block-woocommerce-product-schedule-sale-fields__content',
        },
        (0, element_1.createElement)(
          'div',
          { className: 'wp-block-column' },
          (0, element_1.createElement)(components_1.DateTimePickerControl, {
            ref: w,
            label: (0, i18n_1.__)('From', 'woocommerce'),
            placeholder: (0, i18n_1.__)('Sale start date and time (optional)', 'woocommerce'),
            dateTimeFormat: n,
            currentDate: i,
            onChange: m,
            className: E && 'has-error',
            help: E,
            onBlur: () => b(),
          }),
        ),
        (0, element_1.createElement)(
          'div',
          { className: 'wp-block-column' },
          (0, element_1.createElement)(components_1.DateTimePickerControl, {
            ref: g,
            label: (0, i18n_1.__)('To', 'woocommerce'),
            placeholder: (0, i18n_1.__)('Sale end date and time (optional)', 'woocommerce'),
            dateTimeFormat: n,
            currentDate: d,
            onChange: e =>
              u(
                (0, moment_1.default)(e)
                  .startOf('minute')
                  .toISOString(),
              ),
            onBlur: () => v(),
            className: k && 'has-error',
            help: k,
          }),
        ),
      ),
  );
}
exports.Edit = Edit;
