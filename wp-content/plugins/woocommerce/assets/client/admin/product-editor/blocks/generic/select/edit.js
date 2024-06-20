'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@wordpress/components'),
  element_1 = require('@wordpress/element'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  sanitize_html_1 = require('../../../utils/sanitize-html'),
  label_1 = require('../../../components/label/label');
function Edit({ attributes: e, context: { postType: t } }) {
  const l = (0, block_templates_1.useWooBlockProps)(e),
    {
      property: o,
      label: r,
      note: n,
      placeholder: i,
      help: p,
      tooltip: s,
      disabled: a,
      options: u,
      multiple: _,
    } = e,
    [c, m] = (0, use_product_entity_prop_1.default)(o, { postType: t, fallbackValue: '' });
  return (0, element_1.createElement)(
    'div',
    { ...l },
    (0, element_1.createElement)(components_1.SelectControl, {
      value: c,
      disabled: a,
      label: (0, element_1.createElement)(label_1.Label, { label: r, note: n, tooltip: s }),
      onChange: m,
      help: (function() {
        if (p)
          return (0, element_1.createElement)('span', {
            dangerouslySetInnerHTML: (0, sanitize_html_1.sanitizeHTML)(p),
          });
      })(),
      placeholder: i,
      options: u,
      multiple: _,
    }),
  );
}
exports.Edit = Edit;
