'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.LinkedProductListBlockEdit = exports.EmptyStateImage = void 0);
const element_1 = require('@wordpress/element'),
  block_templates_1 = require('@woocommerce/block-templates'),
  components_1 = require('@wordpress/components'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  tracks_1 = require('@woocommerce/tracks'),
  core_data_1 = require('@wordpress/core-data'),
  use_product_entity_prop_1 = __importDefault(require('../../../hooks/use-product-entity-prop')),
  product_list_1 = require('../../../components/product-list'),
  product_select_1 = require('../../../components/product-select'),
  advice_card_1 = require('../../../components/advice-card'),
  constants_1 = require('../../../constants'),
  shopping_bags_1 = require('../../../images/shopping-bags'),
  cash_register_1 = require('../../../images/cash-register'),
  reducer_1 = require('./reducer'),
  get_related_products_1 = require('../../../utils/get-related-products'),
  block_slot_fill_1 = require('../../../components/block-slot-fill');
function EmptyStateImage({ image: e, tip: t }) {
  switch (e) {
    case 'CashRegister':
      return (0, element_1.createElement)(cash_register_1.CashRegister, null);
    case 'ShoppingBags':
      return (0, element_1.createElement)(shopping_bags_1.ShoppingBags, null);
    default:
      return /^https?:\/\//.test(e)
        ? (0, element_1.createElement)('img', { src: e, alt: t, height: 88, width: 88 })
        : null;
  }
}
function LinkedProductListBlockEdit({
  attributes: e,
  context: { postType: t, isInSelectedTab: r },
}) {
  const { property: c, emptyState: o } = e,
    s = (0, block_templates_1.useWooBlockProps)(e),
    [i, d] = (0, element_1.useReducer)(reducer_1.reducer, {
      linkedProducts: [],
      searchedProducts: [],
    }),
    n = (0, core_data_1.useEntityId)('postType', t),
    _ = (0, reducer_1.getLoadLinkedProductsDispatcher)(d),
    l = (0, reducer_1.getSearchProductsDispatcher)(d),
    u = (0, reducer_1.getSelectSearchedProductDispatcher)(d),
    a = (0, reducer_1.getRemoveLinkedProductDispatcher)(d),
    [p, m] = (0, use_product_entity_prop_1.default)(c, { postType: t });
  (0, element_1.useEffect)(() => {
    i.selectedProduct || _(null != p ? p : []);
  }, [p, i.selectedProduct]);
  const k = (0, element_1.useCallback)(
    (e = '') => {
      const t = [n];
      return p && t.push(...p), l(t, e);
    },
    [p],
  );
  (0, element_1.useEffect)(() => {
    r && k();
  }, [k, r]);
  const [g, E] = (0, element_1.useState)(!1);
  return (0, element_1.createElement)(
    'div',
    { ...s },
    (0, element_1.createElement)(
      block_slot_fill_1.SectionActions,
      null,
      (0, element_1.createElement)(
        components_1.Button,
        {
          variant: 'tertiary',
          icon: icons_1.reusableBlock,
          onClick: async function() {
            (0, tracks_1.recordEvent)('linked_products_choose_related_click', {
              source: constants_1.TRACKS_SOURCE,
              field: c,
            }),
              d({ type: 'LOADING_LINKED_PRODUCTS', payload: { isLoading: !0 } }),
              E(!0);
            const e = await (0, get_related_products_1.getSuggestedProductsFor)({
              postId: n,
              forceRequest: !0,
            });
            if ((d({ type: 'LOADING_LINKED_PRODUCTS', payload: { isLoading: !1 } }), E(!1), !e))
              return;
            const t = u(e, []);
            m(t);
          },
          isBusy: g,
          disabled: g,
        },
        (0, i18n_1.__)('Choose products for me', 'woocommerce'),
      ),
    ),
    (0, element_1.createElement)(
      'div',
      { className: 'wp-block-woocommerce-product-linked-list-field__form-group-content' },
      (0, element_1.createElement)(product_select_1.ProductSelect, {
        items: i.searchedProducts,
        selected: null,
        filter: k,
        onSelect: function(e) {
          const t = u(e, i.linkedProducts);
          m(t),
            (0, tracks_1.recordEvent)('linked_products_product_add', {
              source: constants_1.TRACKS_SOURCE,
              field: c,
              product_id: n,
              linked_product_id: e.id,
            });
        },
      }),
    ),
    i.isLoading && (0, element_1.createElement)(product_list_1.Skeleton, null),
    !i.isLoading &&
      0 === i.linkedProducts.length &&
      (0, element_1.createElement)(
        advice_card_1.AdviceCard,
        {
          tip: o.tip,
          dismissPreferenceId: `woocommerce-product-${c}-advice-card-dismissed`,
          isDismissible: o.isDismissible,
          onDismiss: function() {
            (0, tracks_1.recordEvent)('linked_products_placeholder_dismiss', {
              source: constants_1.TRACKS_SOURCE,
              field: c,
            });
          },
        },
        (0, element_1.createElement)(EmptyStateImage, { ...o }),
      ),
    !i.isLoading &&
      i.linkedProducts.length > 0 &&
      (0, element_1.createElement)(product_list_1.ProductList, {
        products: i.linkedProducts,
        onRemove: function(e) {
          const t = a(e, i.linkedProducts);
          m(t),
            (0, tracks_1.recordEvent)('linked_products_product_remove', {
              source: constants_1.TRACKS_SOURCE,
              field: c,
              product_id: n,
              linked_product_id: e.id,
            });
        },
        onEdit: function(e) {
          (0, tracks_1.recordEvent)('linked_products_product_select', {
            source: constants_1.TRACKS_SOURCE,
            field: c,
            product_id: n,
            linked_product_id: e.id,
          });
        },
        onPreview: function(e) {
          (0, tracks_1.recordEvent)('linked_products_product_preview_click', {
            source: constants_1.TRACKS_SOURCE,
            field: c,
            product_id: n,
            linked_product_id: e.id,
          });
        },
      }),
  );
}
(exports.EmptyStateImage = EmptyStateImage),
  (exports.LinkedProductListBlockEdit = LinkedProductListBlockEdit);