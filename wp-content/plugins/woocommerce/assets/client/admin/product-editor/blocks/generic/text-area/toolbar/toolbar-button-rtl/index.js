'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.RTLToolbarButton = void 0);
const element_1 = require('@wordpress/element'),
  components_1 = require('@wordpress/components'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons');
function RTLToolbarButton({ direction: o, onChange: e }) {
  return (0, i18n_1.isRTL)()
    ? (0, element_1.createElement)(components_1.ToolbarButton, {
        icon: icons_1.formatLtr,
        title: (0, i18n_1._x)('Left to right', 'editor button', 'woocommerce'),
        isActive: 'ltr' === o,
        onClick: () => (null == e ? void 0 : e('ltr' === o ? void 0 : 'ltr')),
      })
    : null;
}
exports.RTLToolbarButton = RTLToolbarButton;