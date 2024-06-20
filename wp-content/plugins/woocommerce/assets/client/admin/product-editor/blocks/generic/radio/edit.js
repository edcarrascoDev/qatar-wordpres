'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  radio_field_1 = require('../../../components/radio-field'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop'));
function Edit({ attributes: e, context: { postType: t } }) {
  const o = (0, block_templates_1.useWooBlockProps)(e),
    { description: r, options: i, property: l, title: s, disabled: p } = e,
    [d, _] = (0, use_product_entity_prop_1.default)(l, { postType: t, fallbackValue: '' });
  return (0, element_1.createElement)(
    'div',
    { ...o },
    (0, element_1.createElement)(radio_field_1.RadioField, {
      title: s,
      description: r,
      selected: d,
      options: i,
      onChange: e => _(e || ''),
      disabled: p,
    }),
  );
}
exports.Edit = Edit;
