'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ParagraphRTLControl = void 0);
const element_1 = require('@wordpress/element'),
  components_1 = require('@wordpress/components'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons');
function ParagraphRTLControl({ direction: e, onChange: r }) {
  return (0, element_1.createElement)(
    element_1.Fragment,
    null,
    (0, i18n_1.isRTL)() &&
      (0, element_1.createElement)(components_1.ToolbarButton, {
        icon: icons_1.formatLtr,
        title: (0, i18n_1._x)('Left to right', 'editor button', 'woocommerce'),
        isActive: 'ltr' === e,
        onClick: function() {
          'function' == typeof r && r('ltr' === e ? void 0 : 'ltr');
        },
      }),
  );
}
exports.ParagraphRTLControl = ParagraphRTLControl;
