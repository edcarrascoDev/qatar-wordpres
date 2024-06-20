'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  tracks_1 = require('@woocommerce/tracks'),
  components_1 = require('@wordpress/components'),
  element_1 = require('@wordpress/element'),
  block_editor_1 = require('@wordpress/block-editor'),
  constants_1 = require('../../../constants'),
  use_metabox_hidden_product_1 = require('../../../hooks/use-metabox-hidden-product'),
  METABOX_HIDDEN_VALUE = 'postcustom';
function Edit({ attributes: e }) {
  const { label: o, _templateBlockId: t } = e,
    c = (0, block_templates_1.useWooBlockProps)(e),
    s = (0, block_editor_1.useInnerBlocksProps)(
      { className: 'wp-block-woocommerce-product-custom-fields-toggle-field__inner-blocks' },
      { templateLock: 'all', renderAppender: !1 },
    ),
    { isLoading: r, metaboxhiddenProduct: n, saveMetaboxhiddenProduct: l } = (0,
    use_metabox_hidden_product_1.useMetaboxHiddenProduct)(),
    d = (0, element_1.useMemo)(() => n && !n.some(e => 'postcustom' === e), [n]);
  return (0, element_1.createElement)(
    'div',
    { ...c },
    (0, element_1.createElement)(
      'div',
      { className: 'wp-block-woocommerce-product-custom-fields-toggle-field__content' },
      (0, element_1.createElement)(components_1.ToggleControl, {
        label: o,
        checked: d,
        disabled: r,
        onChange: async function(e) {
          const o = e ? n.filter(e => 'postcustom' !== e) : [...n, 'postcustom'];
          (0, tracks_1.recordEvent)('product_custom_fields_toggle_click', {
            block_id: t,
            source: constants_1.TRACKS_SOURCE,
            metaboxhidden_product: o,
          }),
            await l(o);
        },
      }),
      r && (0, element_1.createElement)(components_1.Spinner, null),
    ),
    d && (0, element_1.createElement)('div', { ...s }),
  );
}
exports.Edit = Edit;