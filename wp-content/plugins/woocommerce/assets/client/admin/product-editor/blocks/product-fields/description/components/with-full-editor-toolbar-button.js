'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 });
const element_1 = require('@wordpress/element'),
  compose_1 = require('@wordpress/compose'),
  block_editor_1 = require('@wordpress/block-editor'),
  full_editor_toolbar_button_1 = __importDefault(require('./full-editor-toolbar-button')),
  wooBlockwithFullEditorToolbarButton = (0, compose_1.createHigherOrderComponent)(
    e => t => {
      var o;
      return 'woocommerce/product-summary-field' !== (null == t ? void 0 : t.name) ||
        'product-description__content' !==
          (null === (o = null == t ? void 0 : t.attributes) || void 0 === o
            ? void 0
            : o._templateBlockId)
        ? (0, element_1.createElement)(e, { ...t })
        : (0, element_1.createElement)(
            element_1.Fragment,
            null,
            (0, element_1.createElement)(
              block_editor_1.BlockControls,
              { group: 'other' },
              (0, element_1.createElement)(full_editor_toolbar_button_1.default, null),
            ),
            (0, element_1.createElement)(e, { ...t }),
          );
    },
    'wooBlockwithFullEditorToolbarButton',
  );
exports.default = wooBlockwithFullEditorToolbarButton;