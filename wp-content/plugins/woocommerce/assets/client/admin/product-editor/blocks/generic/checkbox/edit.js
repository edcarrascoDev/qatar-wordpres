'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  checkbox_control_1 = require('../../../components/checkbox-control');
function Edit({ attributes: e, context: { postType: t } }) {
  const {
      property: o,
      title: l,
      label: r,
      tooltip: c,
      checkedValue: u,
      uncheckedValue: p,
      disabled: i,
    } = e,
    _ = (0, block_templates_1.useWooBlockProps)(e),
    [n, s] = (0, use_product_entity_prop_1.default)(o, { postType: t, fallbackValue: !1 });
  return (0, element_1.createElement)(
    'div',
    { ..._ },
    (0, element_1.createElement)(checkbox_control_1.Checkbox, {
      value: n || !1,
      onChange: s,
      label: r || '',
      title: l,
      tooltip: c,
      checkedValue: u,
      uncheckedValue: p,
      disabled: i,
    }),
  );
}
exports.Edit = Edit;
