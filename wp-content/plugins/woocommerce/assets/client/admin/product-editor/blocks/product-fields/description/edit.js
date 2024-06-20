'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.DescriptionBlockEdit = exports.getContentFromFreeform = void 0);
const element_1 = require('@wordpress/element'),
  blocks_1 = require('@wordpress/blocks'),
  data_1 = require('@wordpress/data'),
  classnames_1 = __importDefault(require('classnames')),
  block_templates_1 = require('@woocommerce/block-templates'),
  core_data_1 = require('@wordpress/core-data'),
  i18n_1 = require('@wordpress/i18n'),
  block_editor_1 = require('@wordpress/block-editor'),
  modal_editor_welcome_guide_1 = __importDefault(
    require('../../../components/modal-editor-welcome-guide'),
  ),
  product_editor_ui_1 = require('../../../store/product-editor-ui'),
  full_editor_toolbar_button_1 = __importDefault(
    require('./components/full-editor-toolbar-button'),
  );
function getContentFromFreeform(e) {
  return !(1 !== e.length || 'core/freeform' !== e[0].name) && e[0].attributes.content;
}
function clearDescriptionIfEmpty(e) {
  if (1 === e.length) {
    const { content: t } = e[0].attributes;
    if (!t || !t.trim()) return [];
  }
  return e;
}
function DescriptionBlockEdit({ attributes: e }) {
  const [t, o] = (0, core_data_1.useEntityProp)('postType', 'product', 'description'),
    [r, l] = (0, element_1.useState)([]),
    { isModalEditorOpen: i, modalEditorBlocks: n, hasChanged: s } = (0, data_1.useSelect)(
      e => ({
        isModalEditorOpen: e(product_editor_ui_1.store).isModalEditorOpen(),
        modalEditorBlocks: e(product_editor_ui_1.store).getModalEditorBlocks(),
        hasChanged: e(product_editor_ui_1.store).getModalEditorContentHasChanged(),
      }),
      [],
    );
  (0, element_1.useEffect)(() => {
    if (!t) return void l([]);
    if (-1 === t.indexOf('\x3c!-- wp:')) return;
    const e = (0, blocks_1.parse)(t);
    getContentFromFreeform(e) || l(e);
  }, [t]),
    (0, element_1.useEffect)(() => {
      if (!s) return;
      (null == n ? void 0 : n.length) || o('');
      const e = (0, blocks_1.serialize)(clearDescriptionIfEmpty(n));
      o(e);
    }, [n, o, s]);
  const c = (0, block_templates_1.useWooBlockProps)(e, {
      className: (0, classnames_1.default)({ 'has-blocks': !!t.length }),
      tabIndex: 0,
    }),
    d = (0, block_editor_1.useInnerBlocksProps)(
      {},
      { templateLock: 'contentOnly', allowedBlocks: ['woocommerce/product-summary-field'] },
    );
  return (0, element_1.createElement)(
    'div',
    { ...c },
    (null == r
    ? void 0
    : r.length)
      ? (0, element_1.createElement)(
          element_1.Fragment,
          null,
          (0, element_1.createElement)(
            block_editor_1.BlockControls,
            null,
            (0, element_1.createElement)(full_editor_toolbar_button_1.default, {
              text: (0, i18n_1.__)('Edit in full editor', 'woocommerce'),
            }),
          ),
          (0, element_1.createElement)(block_editor_1.BlockPreview, {
            blocks: r,
            viewportWidth: 800,
            additionalStyles: [{ css: 'body { padding: 32px; height: 10000px }' }],
          }),
        )
      : (0, element_1.createElement)('div', { ...d }),
    i && (0, element_1.createElement)(modal_editor_welcome_guide_1.default, null),
  );
}
(exports.getContentFromFreeform = getContentFromFreeform),
  (exports.DescriptionBlockEdit = DescriptionBlockEdit);
