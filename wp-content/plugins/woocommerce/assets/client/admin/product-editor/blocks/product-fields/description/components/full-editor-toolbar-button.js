'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
const element_1 = require('@wordpress/element'),
  components_1 = require('@wordpress/components'),
  i18n_1 = require('@wordpress/i18n'),
  tracks_1 = require('@woocommerce/tracks'),
  data_1 = require('@wordpress/data'),
  core_data_1 = require('@wordpress/core-data'),
  blocks_1 = require('@wordpress/blocks'),
  product_editor_ui_1 = require('../../../../store/product-editor-ui'),
  edit_1 = require('../edit'),
  get_gutenberg_version_1 = require('../../../../utils/get-gutenberg-version');
function isGutenbergVersionWithCrashInFullEditor() {
  const e = (0, get_gutenberg_version_1.getGutenbergVersion)();
  return e >= 17.9 && e < 18;
}
function shouldForceFullEditor() {
  var e;
  return (
    'true' ===
    (null ===
      (e = localStorage.getItem('__unsupported_force_product_editor_description_full_editor')) ||
    void 0 === e
      ? void 0
      : e.trim().toLowerCase())
  );
}
function FullEditorToolbarButton({
  label: e = (0, i18n_1.__)('Edit Product description', 'woocommerce'),
  text: r = (0, i18n_1.__)('Full editor', 'woocommerce'),
}) {
  const { openModalEditor: o, setModalEditorBlocks: t } = (0, data_1.dispatch)(
      product_editor_ui_1.store,
    ),
    [i] = (0, core_data_1.useEntityProp)('postType', 'product', 'description');
  return (0, element_1.createElement)(
    components_1.ToolbarButton,
    {
      label: e,
      onClick: () => {
        if (isGutenbergVersionWithCrashInFullEditor()) {
          if (!shouldForceFullEditor())
            return void alert(
              (0, i18n_1.__)(
                'The version of the Gutenberg plugin installed causes a crash in the full editor. To prevent this, the full editor has been disabled.',
                'woocommerce',
              ),
            );
          alert(
            (0, i18n_1.__)(
              'The version of the Gutenberg plugin installed causes a crash in the full editor. You are proceeding at your own risk and may experience crashes.',
              'woocommerce',
            ),
          );
        }
        let e = (0, blocks_1.parse)(i);
        const r = (0, edit_1.getContentFromFreeform)(e);
        r && (e = (0, blocks_1.rawHandler)({ HTML: r })),
          t(e),
          (0, tracks_1.recordEvent)('product_add_description_click'),
          o();
      },
    },
    r,
  );
}
exports.default = FullEditorToolbarButton;
