'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@woocommerce/components'),
  element_1 = require('@wordpress/element'),
  block_editor_1 = require('@wordpress/block-editor');
function Edit({ attributes: e }) {
  const t = (0, block_templates_1.useWooBlockProps)(e),
    { toggleText: o, initialCollapsed: l, persistRender: r = !0 } = e;
  return (0, element_1.createElement)(
    'div',
    { ...t },
    (0, element_1.createElement)(
      components_1.CollapsibleContent,
      { toggleText: o, initialCollapsed: l, persistRender: r },
      (0, element_1.createElement)(block_editor_1.InnerBlocks, { templateLock: 'all' }),
    ),
  );
}
exports.Edit = Edit;