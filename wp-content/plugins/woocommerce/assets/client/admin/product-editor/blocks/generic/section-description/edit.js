'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.SectionDescriptionBlockEdit = void 0);
const element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  block_slot_fill_1 = require('../../../components/block-slot-fill');
function SectionDescriptionBlockEdit({ attributes: e }) {
  const { content: o } = e,
    t = (0, block_templates_1.useWooBlockProps)(e);
  return (0, element_1.createElement)(
    block_slot_fill_1.BlockFill,
    { ...t, name: 'section-description', slotContainerBlockName: 'woocommerce/product-section' },
    (0, element_1.createElement)('div', null, o),
  );
}
exports.SectionDescriptionBlockEdit = SectionDescriptionBlockEdit;
