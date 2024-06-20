'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SummaryBlockEdit = void 0);
const i18n_1 = require('@wordpress/i18n'),
  block_templates_1 = require('@woocommerce/block-templates'),
  element_1 = require('@wordpress/element'),
  components_1 = require('@wordpress/components'),
  core_data_1 = require('@wordpress/core-data'),
  compose_1 = require('@wordpress/compose'),
  classnames_1 = __importDefault(require('classnames')),
  block_editor_1 = require('@wordpress/block-editor'),
  paragraph_rtl_control_1 = require('./paragraph-rtl-control'),
  constants_1 = require('./constants'),
  use_clear_selected_block_on_blur_1 = require('../../../hooks/use-clear-selected-block-on-blur');
function SummaryBlockEdit({ attributes: e, setAttributes: o, context: t }) {
  const { align: r, allowedFormats: l, direction: n, label: c, helpText: a } = e,
    s = (0, block_templates_1.useWooBlockProps)(e, { style: { direction: n } }),
    m = (0, compose_1.useInstanceId)(
      SummaryBlockEdit,
      'wp-block-woocommerce-product-summary-field__content',
    ),
    [_, i] = (0, core_data_1.useEntityProp)('postType', t.postType || 'product', e.property),
    { handleBlur: p } = (0, use_clear_selected_block_on_blur_1.useClearSelectedBlockOnBlur)();
  return (0, element_1.createElement)(
    'div',
    { className: 'wp-block wp-block-woocommerce-product-summary-field-wrapper' },
    (0, element_1.createElement)(
      block_editor_1.BlockControls,
      { group: 'block' },
      (0, element_1.createElement)(block_editor_1.AlignmentControl, {
        alignmentControls: constants_1.ALIGNMENT_CONTROLS,
        value: r,
        onChange: function(e) {
          o({ align: e });
        },
      }),
      (0, element_1.createElement)(paragraph_rtl_control_1.ParagraphRTLControl, {
        direction: n,
        onChange: function(e) {
          o({ direction: e });
        },
      }),
    ),
    (0, element_1.createElement)(
      components_1.BaseControl,
      {
        id: m.toString(),
        label:
          void 0 === c
            ? (0, element_1.createInterpolateElement)((0, i18n_1.__)('Summary', 'woocommerce'), {
                optional: (0, element_1.createElement)(
                  'span',
                  { className: 'woocommerce-product-form__optional-input' },
                  (0, i18n_1.__)('(OPTIONAL)', 'woocommerce'),
                ),
              })
            : c,
        help:
          void 0 === a
            ? (0, i18n_1.__)(
                "Summarize this product in 1-2 short sentences. We'll show it at the top of the page.",
                'woocommerce',
              )
            : a,
      },
      (0, element_1.createElement)(
        'div',
        { ...s },
        (0, element_1.createElement)(block_editor_1.RichText, {
          id: m.toString(),
          identifier: 'content',
          tagName: 'p',
          value: _,
          onChange: i,
          'data-empty': Boolean(_),
          className: (0, classnames_1.default)('components-summary-control', {
            [`has-text-align-${r}`]: r,
          }),
          dir: n,
          allowedFormats: l,
          onBlur: p,
        }),
      ),
    ),
  );
}
exports.SummaryBlockEdit = SummaryBlockEdit;