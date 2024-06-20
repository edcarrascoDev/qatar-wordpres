'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.Edit = void 0);
const i18n_1 = require('@wordpress/i18n'),
  data_1 = require('@woocommerce/data'),
  block_templates_1 = require('@woocommerce/block-templates'),
  tracks_1 = require('@woocommerce/tracks'),
  element_1 = require('@wordpress/element'),
  data_2 = require('@wordpress/data'),
  core_data_1 = require('@wordpress/core-data'),
  variations_table_1 = require('../../../components/variations-table'),
  validation_context_1 = require('../../../contexts/validation-context'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  variable_product_tour_1 = require('./variable-product-tour'),
  constants_1 = require('../../../constants'),
  handle_prompt_1 = require('../../../utils/handle-prompt'),
  empty_state_1 = require('../../../components/empty-state');
function Edit({ attributes: e, context: { isInSelectedTab: t } }) {
  const r = (0, element_1.useRef)(!1),
    { invalidateResolution: o } = (0, data_2.useDispatch)(
      data_1.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
    ),
    i = (0, core_data_1.useEntityId)('postType', 'product'),
    a = (0, block_templates_1.useWooBlockProps)(e),
    [s] = (0, core_data_1.useEntityProp)('postType', 'product', 'status'),
    [_] = (0, core_data_1.useEntityProp)('postType', 'product', 'has_options'),
    [n] = (0, use_product_entity_prop_1.default)('attributes'),
    c = (0, element_1.useMemo)(
      function() {
        return null == n ? void 0 : n.some(e => e.variation);
      },
      [n],
    ),
    u = (0, element_1.useMemo)(
      () => ({ product_id: i, order: 'asc', orderby: 'menu_order', has_price: !1 }),
      [i],
    ),
    { totalCountWithoutPrice: d } = (0, data_2.useSelect)(
      e => {
        const { getProductVariationsTotalCount: r } = e(
          data_1.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
        );
        return { totalCountWithoutPrice: t && _ ? r(u) : 0 };
      },
      [t, _, u],
    ),
    { updateUserPreferences: l, variable_items_without_price_notice_dismissed: p } = (0,
    data_1.useUserPreferences)(),
    { ref: m } = (0, validation_context_1.useValidation)(
      'variations',
      async function(e, t) {
        if (d > 0 && !r.current && 'publish' !== s && 'publish' === (null == t ? void 0 : t.status))
          return (
            'yes' !== p &&
              l({ variable_items_without_price_notice_dismissed: { ...(p || {}), [i]: 'no' } }),
            (0, i18n_1.__)('Set variation prices before adding this product.', 'woocommerce')
          );
      },
      [d],
    ),
    v = !p || 'yes' !== p[i],
    E =
      d > 0 && v
        ? (0, i18n_1.sprintf)(
            (0, i18n_1.__)(
              '%d variations do not have prices. Variations that do not have prices will not be visible to customers.',
              'woocommerce',
            ),
            d,
          )
        : '';
  return c
    ? (0, element_1.createElement)(
        'div',
        { ...a },
        (0, element_1.createElement)(variations_table_1.VariationsTable, {
          isVisible: t,
          ref: m,
          noticeText: E,
          onNoticeDismiss: () => {
            (r.current = !0),
              l({ variable_items_without_price_notice_dismissed: { ...(p || {}), [i]: 'yes' } });
          },
          noticeActions: [
            {
              label: (0, i18n_1.__)('Set prices', 'woocommerce'),
              onClick: function(e) {
                (0, tracks_1.recordEvent)('product_variations_set_prices_select', {
                  source: constants_1.TRACKS_SOURCE,
                });
                const t = (0, data_2.resolveSelect)(
                  data_1.EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME,
                ).getProductVariations({
                  product_id: i,
                  order: 'asc',
                  orderby: 'menu_order',
                  has_price: !1,
                  _fields: ['id'],
                  per_page: d,
                });
                (0, handle_prompt_1.handlePrompt)({
                  onOk(r) {
                    (0, tracks_1.recordEvent)('product_variations_set_prices_update', {
                      source: constants_1.TRACKS_SOURCE,
                    }),
                      t.then(t => {
                        e(t.map(({ id: e }) => ({ id: e, regular_price: r })));
                      });
                  },
                });
              },
              className: 'is-destructive',
            },
          ],
          onVariationTableChange: (e, t) => {
            ('delete' === e ||
              ('update' === e && t && t.find(e => 'regular_price' in e || 'sale_price' in e))) &&
              o('getProductVariationsTotalCount', [u]);
          },
        }),
        t && (0, element_1.createElement)(variable_product_tour_1.VariableProductTour, null),
      )
    : (0, element_1.createElement)(empty_state_1.EmptyState, {
        names: [
          (0, i18n_1.__)('Variation', 'woocommerce'),
          (0, i18n_1.__)('Colors', 'woocommerce'),
          (0, i18n_1.__)('Sizes', 'woocommerce'),
        ],
      });
}
exports.Edit = Edit;
