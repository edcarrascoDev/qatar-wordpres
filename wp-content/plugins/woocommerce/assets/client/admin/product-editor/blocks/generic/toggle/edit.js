'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const element_1 = require('@wordpress/element'),
  components_1 = require('@wordpress/components'),
  block_templates_1 = require('@woocommerce/block-templates'),
  tracks_1 = require('@woocommerce/tracks'),
  core_data_1 = require('@wordpress/core-data'),
  sanitize_html_1 = require('../../../utils/sanitize-html'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  constants_1 = require('../../../constants');
function Edit({ attributes: e, context: { postType: t } }) {
  var o, l, n;
  const r = (0, block_templates_1.useWooBlockProps)(e),
    {
      _templateBlockId: i,
      label: _,
      property: c,
      disabled: s,
      disabledCopy: d,
      checkedValue: a,
      uncheckedValue: u,
    } = e,
    [p, m] = (0, use_product_entity_prop_1.default)(c, { postType: t, fallbackValue: !1 }),
    h = (0, core_data_1.useEntityId)('postType', t),
    [v] = (0, core_data_1.useEntityProp)('postType', t, 'parent_id');
  function k() {
    return void 0 !== a ? a === p : p;
  }
  let y = null;
  return (
    (null == e ? void 0 : e.help) &&
      (y = (0, element_1.createElement)('div', {
        dangerouslySetInnerHTML: {
          __html:
            null === (o = (0, sanitize_html_1.sanitizeHTML)(e.help)) || void 0 === o
              ? void 0
              : o.__html,
        },
      })),
    (null == e ? void 0 : e.checkedHelp) &&
      k() &&
      (y = (0, element_1.createElement)('div', {
        dangerouslySetInnerHTML: {
          __html:
            null === (l = (0, sanitize_html_1.sanitizeHTML)(e.checkedHelp)) || void 0 === l
              ? void 0
              : l.__html,
        },
      })),
    (null == e ? void 0 : e.uncheckedHelp) &&
      !k() &&
      (y = (0, element_1.createElement)('div', {
        dangerouslySetInnerHTML: {
          __html:
            null === (n = (0, sanitize_html_1.sanitizeHTML)(e.uncheckedHelp)) || void 0 === n
              ? void 0
              : n.__html,
        },
      })),
    (0, element_1.createElement)(
      'div',
      { ...r },
      (0, element_1.createElement)(components_1.ToggleControl, {
        label: _,
        checked: k(),
        disabled: s,
        onChange: function(e) {
          (0, tracks_1.recordEvent)('product_toggle_click', {
            block_id: i,
            source: constants_1.TRACKS_SOURCE,
            product_id: v > 0 ? v : h,
          }),
            m(e ? (void 0 !== a ? a : e) : void 0 !== u ? u : e);
        },
        help: y,
      }),
      s &&
        (0, element_1.createElement)('p', {
          className: 'wp-block-woocommerce-product-toggle__disable-copy',
          dangerouslySetInnerHTML: (0, sanitize_html_1.sanitizeHTML)(d),
        }),
    )
  );
}
exports.Edit = Edit;
