'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  components_1 = require('@wordpress/components'),
  block_templates_1 = require('@woocommerce/block-templates'),
  navigation_1 = require('@woocommerce/navigation'),
  core_data_1 = require('@wordpress/core-data'),
  notice_1 = require('../../../components/notice'),
  utils_1 = require('../../../utils');
function Edit({ attributes: e }) {
  const t = (0, block_templates_1.useWooBlockProps)(e),
    { buttonText: o, content: r, title: n, type: i = 'info' } = e,
    [s] = (0, core_data_1.useEntityProp)('postType', 'product', 'attributes'),
    a = (0, utils_1.hasAttributesUsedForVariations)(s);
  return (0, element_1.createElement)(
    'div',
    { ...t },
    a &&
      (0, element_1.createElement)(
        notice_1.Notice,
        { content: r, title: n, type: i },
        (0, element_1.createElement)(
          components_1.Button,
          {
            isSecondary: !0,
            onClick: () =>
              (0, navigation_1.navigateTo)({
                url: (0, navigation_1.getNewPath)({ tab: 'variations' }),
              }),
          },
          o,
        ),
      ),
  );
}
exports.Edit = Edit;
