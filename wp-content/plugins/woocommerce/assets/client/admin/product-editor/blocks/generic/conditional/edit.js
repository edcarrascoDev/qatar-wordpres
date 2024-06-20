'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const data_1 = require('@wordpress/data'),
  deprecated_1 = __importDefault(require('@wordpress/deprecated')),
  element_1 = require('@wordpress/element'),
  block_editor_1 = require('@wordpress/block-editor'),
  block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@woocommerce/components'),
  core_data_1 = require('@wordpress/core-data');
function Edit({ attributes: e, context: t }) {
  (0, deprecated_1.default)('`woocommerce/conditional` block', {
    alternative: '`hideConditions` attribute on any block',
  });
  const { postType: o } = t,
    r = (0, block_templates_1.useWooBlockProps)(e),
    { mustMatch: s } = e,
    c = (0, core_data_1.useEntityId)('postType', o),
    i = (0, data_1.useSelect)(
      e => {
        const t = e('core').getEditedEntityRecord('postType', o, c);
        for (const [e, o] of Object.entries(s)) if (!o.includes(t[e])) return !1;
        return !0;
      },
      [o, c, s],
    );
  return (0, element_1.createElement)(
    components_1.DisplayState,
    { ...r, state: i ? 'visible' : 'visually-hidden' },
    (0, element_1.createElement)(block_editor_1.InnerBlocks, { templateLock: 'all' }),
  );
}
exports.Edit = Edit;
