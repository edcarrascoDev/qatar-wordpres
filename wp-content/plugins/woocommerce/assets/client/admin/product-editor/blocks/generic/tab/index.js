'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.init = exports.settings = exports.name = exports.metadata = void 0);
const utils_1 = require('../../../utils'),
  block_json_1 = __importDefault(require('./block.json')),
  edit_1 = require('./edit'),
  { name, ...metadata } = block_json_1.default;
function init() {
  return (0, utils_1.registerProductEditorBlockType)({
    name,
    metadata,
    settings: exports.settings,
  });
}
(exports.name = name),
  (exports.metadata = metadata),
  (exports.settings = { example: {}, edit: edit_1.TabBlockEdit }),
  (exports.init = init);
