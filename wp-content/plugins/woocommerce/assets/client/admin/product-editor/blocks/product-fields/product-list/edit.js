'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ProductListBlockEdit = void 0);
const components_1 = require('@wordpress/components'),
  core_data_1 = require('@wordpress/core-data'),
  data_1 = require('@wordpress/data'),
  element_1 = require('@wordpress/element'),
  i18n_1 = require('@wordpress/i18n'),
  icons_1 = require('@wordpress/icons'),
  block_templates_1 = require('@woocommerce/block-templates'),
  currency_1 = require('@woocommerce/currency'),
  data_2 = require('@woocommerce/data'),
  navigation_1 = require('@woocommerce/navigation'),
  classnames_1 = __importDefault(require('classnames')),
  add_products_modal_1 = require('../../../components/add-products-modal'),
  utils_1 = require('../../../utils'),
  shirt_1 = require('../../../images/shirt'),
  pants_1 = require('../../../images/pants'),
  glasses_1 = require('../../../images/glasses'),
  advice_card_1 = require('../../../components/advice-card'),
  block_slot_fill_1 = require('../../../components/block-slot-fill');
function ProductListBlockEdit({ attributes: e, context: { postType: t } }) {
  const { property: o } = e,
    l = (0, block_templates_1.useWooBlockProps)(e),
    [c, r] = (0, element_1.useState)(!1),
    [a, n] = (0, element_1.useState)(!1),
    [m, s] = (0, element_1.useState)(!1),
    [i, _] = (0, element_1.useState)(!1),
    [d, u] = (0, core_data_1.useEntityProp)('postType', t, o),
    [p, w] = (0, element_1.useState)([]),
    { formatAmount: b } = (0, element_1.useContext)(currency_1.CurrencyContext);
  function f(e) {
    return function() {
      const t = p.filter(t => t.id !== e.id);
      _(!0), w(t), u(t.map(e => e.id));
    };
  }
  return (
    (0, element_1.useEffect)(
      function() {
        i ||
          (d.length
            ? (s(!1),
              (0, data_1.resolveSelect)(data_2.PRODUCTS_STORE_NAME)
                .getProducts({ include: d, orderby: 'include' })
                .then(w)
                .finally(() => s(!1)))
            : w([]));
      },
      [d, i],
    ),
    (0, element_1.createElement)(
      'div',
      { ...l },
      (0, element_1.createElement)(
        block_slot_fill_1.SectionActions,
        null,
        !m &&
          p.length > 0 &&
          (0, element_1.createElement)(
            components_1.Button,
            {
              onClick: function() {
                n(!0);
              },
              variant: 'tertiary',
            },
            (0, i18n_1.__)('Reorder', 'woocommerce'),
          ),
        (0, element_1.createElement)(
          components_1.Button,
          {
            onClick: function() {
              r(!0);
            },
            variant: 'secondary',
          },
          (0, i18n_1.__)('Add products', 'woocommerce'),
        ),
      ),
      (0, element_1.createElement)(
        'div',
        { className: 'wp-block-woocommerce-product-list-field__body' },
        !m &&
          0 === p.length &&
          (0, element_1.createElement)(
            advice_card_1.AdviceCard,
            {
              tip: (0, i18n_1.__)(
                'Tip: Group together items that have a clear relationship or compliment each other well, e.g., garment bundles, camera kits, or skincare product sets.',
                'woocommerce',
              ),
              isDismissible: !1,
            },
            (0, element_1.createElement)(shirt_1.Shirt, null),
            (0, element_1.createElement)(pants_1.Pants, null),
            (0, element_1.createElement)(glasses_1.Glasses, null),
          ),
        !m &&
          p.length > 0 &&
          (0, element_1.createElement)(
            'div',
            { className: 'wp-block-woocommerce-product-list-field__table', role: 'table' },
            (0, element_1.createElement)(
              'div',
              { className: 'wp-block-woocommerce-product-list-field__table-header' },
              (0, element_1.createElement)(
                'div',
                {
                  className: 'wp-block-woocommerce-product-list-field__table-row',
                  role: 'rowheader',
                },
                (0, element_1.createElement)(
                  'div',
                  {
                    className: 'wp-block-woocommerce-product-list-field__table-header-column',
                    role: 'columnheader',
                  },
                  (0, i18n_1.__)('Product', 'woocommerce'),
                ),
                (0, element_1.createElement)(
                  'div',
                  {
                    className: 'wp-block-woocommerce-product-list-field__table-header-column',
                    role: 'columnheader',
                  },
                  (0, i18n_1.__)('Price', 'woocommerce'),
                ),
                (0, element_1.createElement)(
                  'div',
                  {
                    className: 'wp-block-woocommerce-product-list-field__table-header-column',
                    role: 'columnheader',
                  },
                  (0, i18n_1.__)('Stock', 'woocommerce'),
                ),
                (0, element_1.createElement)('div', {
                  className: 'wp-block-woocommerce-product-list-field__table-header-column',
                  role: 'columnheader',
                }),
              ),
            ),
            (0, element_1.createElement)(
              'div',
              {
                className: 'wp-block-woocommerce-product-list-field__table-body',
                role: 'rowgroup',
              },
              p.map(e =>
                (0, element_1.createElement)(
                  'div',
                  {
                    key: e.id,
                    className: 'wp-block-woocommerce-product-list-field__table-row',
                    role: 'row',
                  },
                  (0, element_1.createElement)(
                    'div',
                    {
                      className: 'wp-block-woocommerce-product-list-field__table-cell',
                      role: 'cell',
                    },
                    (0, element_1.createElement)('div', {
                      className: 'wp-block-woocommerce-product-list-field__product-image',
                      style: (0, add_products_modal_1.getProductImageStyle)(e),
                    }),
                    (0, element_1.createElement)(
                      'div',
                      { className: 'wp-block-woocommerce-product-list-field__product-info' },
                      (0, element_1.createElement)(
                        'div',
                        { className: 'wp-block-woocommerce-product-list-field__product-name' },
                        (0, element_1.createElement)(
                          components_1.Button,
                          {
                            variant: 'link',
                            href: (0, navigation_1.getNewPath)({}, `/product/${e.id}`),
                            target: '_blank',
                          },
                          e.name,
                        ),
                      ),
                      (0, element_1.createElement)(
                        'div',
                        { className: 'wp-block-woocommerce-product-list-field__product-sku' },
                        e.sku,
                      ),
                    ),
                  ),
                  (0, element_1.createElement)(
                    'div',
                    {
                      className: 'wp-block-woocommerce-product-list-field__table-cell',
                      role: 'cell',
                    },
                    e.on_sale &&
                      (0, element_1.createElement)(
                        'span',
                        null,
                        e.sale_price ? b(e.sale_price) : b(e.price),
                      ),
                    e.regular_price &&
                      (0, element_1.createElement)(
                        'span',
                        {
                          className: (0, classnames_1.default)({
                            'wp-block-woocommerce-product-list-field__price--on-sale': e.on_sale,
                          }),
                        },
                        b(e.regular_price),
                      ),
                  ),
                  (0, element_1.createElement)(
                    'div',
                    {
                      className: 'wp-block-woocommerce-product-list-field__table-cell',
                      role: 'cell',
                    },
                    (0, element_1.createElement)(
                      'span',
                      {
                        className: (0, classnames_1.default)(
                          'woocommerce-product-variations__status-dot',
                          (0, utils_1.getProductStockStatusClass)(e),
                        ),
                      },
                      '●',
                    ),
                    (0, element_1.createElement)(
                      'span',
                      null,
                      (0, utils_1.getProductStockStatus)(e),
                    ),
                  ),
                  (0, element_1.createElement)(
                    'div',
                    {
                      className: 'wp-block-woocommerce-product-list-field__table-cell',
                      role: 'cell',
                    },
                    (0, element_1.createElement)(components_1.Button, {
                      variant: 'tertiary',
                      icon: icons_1.external,
                      'aria-label': (0, i18n_1.__)('Preview the product', 'woocommerce'),
                      href: e.permalink,
                      target: '_blank',
                    }),
                    (0, element_1.createElement)(components_1.Button, {
                      type: 'button',
                      variant: 'tertiary',
                      icon: icons_1.closeSmall,
                      'aria-label': (0, i18n_1.__)('Remove product', 'woocommerce'),
                      onClick: f(e),
                    }),
                  ),
                ),
              ),
            ),
          ),
      ),
      c &&
        (0, element_1.createElement)(add_products_modal_1.AddProductsModal, {
          initialValue: p,
          onSubmit: function(e) {
            const t = [...p, ...e];
            _(!0), w(t), u(t.map(e => e.id)), r(!1);
          },
          onClose: function() {
            r(!1);
          },
        }),
      a &&
        (0, element_1.createElement)(add_products_modal_1.ReorderProductsModal, {
          products: p,
          onSubmit: function(e) {
            w(e), u(e.map(e => e.id)), n(!1);
          },
          onClose: function() {
            n(!1);
          },
        }),
    )
  );
}
exports.ProductListBlockEdit = ProductListBlockEdit;
