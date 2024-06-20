'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.ALIGNMENT_CONTROLS = void 0);
const element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  block_editor_1 = require('@wordpress/block-editor');
function AligmentToolbarButton({ align: e, setAlignment: t }) {
  return (0, element_1.createElement)(block_editor_1.AlignmentControl, {
    alignmentControls: exports.ALIGNMENT_CONTROLS,
    value: e,
    onChange: t,
  });
}
(exports.ALIGNMENT_CONTROLS = [
  {
    icon: icons_1.alignLeft,
    title: (0, i18n_1.__)('Align text left', 'woocommerce'),
    align: 'left',
  },
  {
    icon: icons_1.alignCenter,
    title: (0, i18n_1.__)('Align text center', 'woocommerce'),
    align: 'center',
  },
  {
    icon: icons_1.alignRight,
    title: (0, i18n_1.__)('Align text right', 'woocommerce'),
    align: 'right',
  },
  {
    icon: icons_1.alignJustify,
    title: (0, i18n_1.__)('Align text justify', 'woocommerce'),
    align: 'justify',
  },
]),
  (exports.default = AligmentToolbarButton);
