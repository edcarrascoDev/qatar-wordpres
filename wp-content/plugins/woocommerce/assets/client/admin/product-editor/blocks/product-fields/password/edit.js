'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const core_data_1 = require('@wordpress/core-data'),
  element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  require_password_1 = require('../../../components/require-password');
function Edit({ attributes: e }) {
  const r = (0, block_templates_1.useWooBlockProps)(e),
    { label: t } = e,
    [o, s] = (0, core_data_1.useEntityProp)('postType', 'product', 'post_password');
  return (0, element_1.createElement)(
    'div',
    { ...r },
    (0, element_1.createElement)(require_password_1.RequirePassword, {
      label: t,
      postPassword: o,
      onInputChange: s,
    }),
  );
}
exports.Edit = Edit;
