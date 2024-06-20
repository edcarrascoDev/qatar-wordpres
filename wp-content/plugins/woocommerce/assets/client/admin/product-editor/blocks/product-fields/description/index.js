'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.init = exports.settings = exports.name = exports.metadata = void 0);
const icons_1 = require('@wordpress/icons'),
  hooks_1 = require('@wordpress/hooks'),
  block_json_1 = __importDefault(require('./block.json')),
  edit_1 = require('./edit'),
  utils_1 = require('../../../utils'),
  with_full_editor_toolbar_button_1 = __importDefault(
    require('./components/with-full-editor-toolbar-button'),
  ),
  { name, ...metadata } = block_json_1.default;
(exports.name = name),
  (exports.metadata = metadata),
  (exports.settings = {
    example: {},
    edit: edit_1.DescriptionBlockEdit,
    icon: icons_1.postContent,
  });
const init = () =>
  (0, utils_1.registerProductEditorBlockType)({ name, metadata, settings: exports.settings });
(exports.init = init),
  (0, hooks_1.addFilter)(
    'editor.BlockEdit',
    'woocommerce/summary-block-with-full-editor-button',
    with_full_editor_toolbar_button_1.default,
  );
