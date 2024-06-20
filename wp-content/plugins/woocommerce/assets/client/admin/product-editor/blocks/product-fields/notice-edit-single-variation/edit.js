'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  data_1 = require('@wordpress/data'),
  block_templates_1 = require('@woocommerce/block-templates'),
  tracks_1 = require('@woocommerce/tracks'),
  components_1 = require('@woocommerce/components'),
  navigation_1 = require('@woocommerce/navigation'),
  core_data_1 = require('@wordpress/core-data'),
  notice_1 = require('../../../components/notice'),
  use_notice_1 = require('../../../hooks/use-notice');
function Edit({ attributes: e }) {
  const t = (0, block_templates_1.useWooBlockProps)(e),
    { content: o, isDismissible: i, title: n, type: r = 'info' } = e,
    [s] = (0, core_data_1.useEntityProp)('postType', 'product_variation', 'parent_id'),
    { dismissedNotices: c, dismissNotice: a, isResolving: l } = (0, use_notice_1.useNotice)(),
    { parentName: _, isParentResolving: d } = (0, data_1.useSelect)(e => {
      const { getEditedEntityRecord: t, hasFinishedResolution: o } = e('core'),
        { name: i } = t('postType', 'product', s);
      return {
        parentName: i || '',
        isParentResolving: !o('getEditedEntityRecord', ['postType', 'product', s]),
      };
    });
  return c.includes(s) || l || d || '' === _
    ? null
    : (0, element_1.createElement)(
        'div',
        { ...t },
        (0, element_1.createElement)(
          notice_1.Notice,
          {
            title: n,
            type: r,
            isDismissible: i,
            handleDismiss: () => {
              (0, tracks_1.recordEvent)('product_single_variation_notice_dismissed'), a(s);
            },
          },
          (0, element_1.createInterpolateElement)(o, {
            strong: (0, element_1.createElement)('strong', null),
            noticeLink: (0, element_1.createElement)(components_1.Link, {
              href: (0, navigation_1.getNewPath)({ tab: 'variations' }, `/product/${s}`),
              onClick: () => {
                (0, tracks_1.recordEvent)('product_single_variation_notice_click');
              },
            }),
            parentProductName: (0, element_1.createElement)('span', null, _),
          }),
        ),
      );
}
exports.Edit = Edit;
