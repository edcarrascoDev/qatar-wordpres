'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(t) {
    return t && t.__esModule ? t : { default: t };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.init = exports.settings = exports.name = exports.metadata = void 0);
const block_json_1 = __importDefault(require('./block.json'));
exports.metadata = block_json_1.default;
const edit_1 = require('./edit'),
  utils_1 = require('../../../utils'),
  { name } = block_json_1.default;
(exports.name = name), (exports.settings = { example: {}, edit: edit_1.NameBlockEdit });
const init = () =>
  (0, utils_1.registerProductEditorBlockType)({
    name,
    metadata: block_json_1.default,
    settings: exports.settings,
  });
exports.init = init;
