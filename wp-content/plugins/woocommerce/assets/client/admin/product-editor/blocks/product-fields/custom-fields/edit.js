'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  block_slot_fill_1 = require('../../../components/block-slot-fill'),
  custom_fields_1 = require('../../../components/custom-fields');
function Edit({ attributes: e }) {
  const t = (0, block_templates_1.useWooBlockProps)(e);
  return (0, element_1.createElement)(
    'div',
    { ...t },
    (0, element_1.createElement)(custom_fields_1.CustomFields, {
      renderActionButtonsWrapper: e =>
        (0, element_1.createElement)(block_slot_fill_1.SectionActions, null, e),
    }),
  );
}
exports.Edit = Edit;
