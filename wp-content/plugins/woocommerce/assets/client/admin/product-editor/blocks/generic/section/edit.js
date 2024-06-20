'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.SectionBlockEdit = void 0);
const classnames_1 = __importDefault(require('classnames')),
  element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  block_editor_1 = require('@wordpress/block-editor'),
  section_header_1 = require('../../../components/section-header');
function SectionBlockEdit({ attributes: e }) {
  const { description: t, title: o, blockGap: c } = e,
    r = (0, block_templates_1.useWooBlockProps)(e),
    l = (0, block_editor_1.useInnerBlocksProps)(
      {
        className: (0, classnames_1.default)(
          'wp-block-woocommerce-product-section-header__content',
          `wp-block-woocommerce-product-section-header__content--block-gap-${c}`,
        ),
      },
      { templateLock: 'all' },
    ),
    s = o ? 'fieldset' : 'div';
  return (0, element_1.createElement)(
    s,
    { ...r },
    o &&
      (0, element_1.createElement)(section_header_1.SectionHeader, {
        description: t,
        sectionTagName: s,
        title: o,
      }),
    (0, element_1.createElement)('div', { ...l }),
  );
}
exports.SectionBlockEdit = SectionBlockEdit;
