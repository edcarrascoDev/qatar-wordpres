(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [4855],
  {
    7102: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => s });
      var a = r(1609),
        c = r(8537),
        n = r(9019),
        l = r.n(n);
      r(6625);
      const s = ({
        className: e = '',
        disabled: t = !1,
        name: r,
        permalink: n = '',
        target: s,
        rel: o,
        style: i,
        onClick: m,
        ...u
      }) => {
        const p = l()('wc-block-components-product-name', e);
        if (t) {
          const e = u;
          return (0, a.createElement)('span', {
            className: p,
            ...e,
            dangerouslySetInnerHTML: { __html: (0, c.decodeEntities)(r) },
          });
        }
        return (0, a.createElement)('a', {
          className: p,
          href: n,
          target: s,
          ...u,
          dangerouslySetInnerHTML: { __html: (0, c.decodeEntities)(r) },
          style: i,
        });
      };
    },
    6042: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => p });
      var a = r(1609),
        c = r(7723),
        n = r(4656),
        l = r(9019),
        s = r.n(l),
        o = r(8529),
        i = r(6087);
      r(4567);
      const m = ({
          currency: e,
          maxPrice: t,
          minPrice: r,
          priceClassName: l,
          priceStyle: i = {},
        }) =>
          (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, c.sprintf) /* translators: %1$s min price, %2$s max price */(
                /* translators: %1$s min price, %2$s max price */
                (0, c.__)('Price between %1$s and %2$s', 'woocommerce'),
                (0, o.formatPrice)(r),
                (0, o.formatPrice)(t),
              ),
            ),
            (0, a.createElement)(
              'span',
              { 'aria-hidden': !0 },
              (0, a.createElement)(n.FormattedMonetaryAmount, {
                className: s()('wc-block-components-product-price__value', l),
                currency: e,
                value: r,
                style: i,
              }),
              ' — ',
              (0, a.createElement)(n.FormattedMonetaryAmount, {
                className: s()('wc-block-components-product-price__value', l),
                currency: e,
                value: t,
                style: i,
              }),
            ),
          ),
        u = ({
          currency: e,
          regularPriceClassName: t,
          regularPriceStyle: r,
          regularPrice: l,
          priceClassName: o,
          priceStyle: i,
          price: m,
        }) =>
          (0, a.createElement)(
            a.Fragment,
            null,
            (0, a.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, c.__)('Previous price:', 'woocommerce'),
            ),
            (0, a.createElement)(n.FormattedMonetaryAmount, {
              currency: e,
              renderText: e =>
                (0, a.createElement)(
                  'del',
                  { className: s()('wc-block-components-product-price__regular', t), style: r },
                  e,
                ),
              value: l,
            }),
            (0, a.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, c.__)('Discounted price:', 'woocommerce'),
            ),
            (0, a.createElement)(n.FormattedMonetaryAmount, {
              currency: e,
              renderText: e =>
                (0, a.createElement)(
                  'ins',
                  {
                    className: s()('wc-block-components-product-price__value', 'is-discounted', o),
                    style: i,
                  },
                  e,
                ),
              value: m,
            }),
          ),
        p = ({
          align: e,
          className: t,
          currency: r,
          format: c = '<price/>',
          maxPrice: l,
          minPrice: o,
          price: p,
          priceClassName: d,
          priceStyle: _,
          regularPrice: y,
          regularPriceClassName: b,
          regularPriceStyle: E,
          style: f,
        }) => {
          const k = s()(t, 'price', 'wc-block-components-product-price', {
            [`wc-block-components-product-price--align-${e}`]: e,
          });
          c.includes('<price/>') ||
            ((c = '<price/>'), console.error('Price formats need to include the `<price/>` tag.'));
          const w = y && p && p < y;
          let g = (0, a.createElement)('span', {
            className: s()('wc-block-components-product-price__value', d),
          });
          return (
            w
              ? (g = (0, a.createElement)(u, {
                  currency: r,
                  price: p,
                  priceClassName: d,
                  priceStyle: _,
                  regularPrice: y,
                  regularPriceClassName: b,
                  regularPriceStyle: E,
                }))
              : void 0 !== o && void 0 !== l
              ? (g = (0, a.createElement)(m, {
                  currency: r,
                  maxPrice: l,
                  minPrice: o,
                  priceClassName: d,
                  priceStyle: _,
                }))
              : p &&
                (g = (0, a.createElement)(n.FormattedMonetaryAmount, {
                  className: s()('wc-block-components-product-price__value', d),
                  currency: r,
                  value: p,
                  style: _,
                })),
            (0, a.createElement)(
              'span',
              { className: k, style: f },
              (0, i.createInterpolateElement)(c, { price: g }),
            )
          );
        };
    },
    4041: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => Y });
      var a = r(1609),
        c = r(8605),
        n = r(9019),
        l = r.n(n),
        s = r(7723),
        o = r(6087),
        i = r(195),
        m = r(8558),
        u = r(4717);
      r(5193);
      const p = ({
        className: e,
        quantity: t = 1,
        minimum: r = 1,
        maximum: c,
        onChange: n = () => {},
        step: p = 1,
        itemName: d = '',
        disabled: _,
      }) => {
        const y = l()('wc-block-components-quantity-selector', e),
          b = (0, o.useRef)(null),
          E = (0, o.useRef)(null),
          f = (0, o.useRef)(null),
          k = void 0 !== c,
          w = !_ && t - p >= r,
          g = !_ && (!k || t + p <= c),
          N = (0, o.useCallback)(
            e => {
              let t = e;
              k && (t = Math.min(t, Math.floor(c / p) * p)),
                (t = Math.max(t, Math.ceil(r / p) * p)),
                (t = Math.floor(t / p) * p),
                t !== e && n(t);
            },
            [k, c, r, n, p],
          ),
          v = (0, u.YQ)(N, 300);
        (0, o.useLayoutEffect)(() => {
          N(t);
        }, [t, N]);
        const h = (0, o.useCallback)(
          e => {
            const r = void 0 !== typeof e.key ? 'ArrowDown' === e.key : e.keyCode === m.DOWN,
              a = void 0 !== typeof e.key ? 'ArrowUp' === e.key : e.keyCode === m.UP;
            r && w && (e.preventDefault(), n(t - p)), a && g && (e.preventDefault(), n(t + p));
          },
          [t, n, g, w, p],
        );
        return (0, a.createElement)(
          'div',
          { className: y },
          (0, a.createElement)('input', {
            ref: b,
            className: 'wc-block-components-quantity-selector__input',
            disabled: _,
            type: 'number',
            step: p,
            min: r,
            max: c,
            value: t,
            onKeyDown: h,
            onChange: e => {
              let r = parseInt(e.target.value, 10);
              (r = isNaN(r) ? t : r), r !== t && (n(r), v(r));
            },
            'aria-label': (0, s.sprintf) /* translators: %s refers to the item name in the cart. */(
              /* translators: %s refers to the item name in the cart. */
              (0, s.__)('Quantity of %s in your cart.', 'woocommerce'),
              d,
            ),
          }),
          (0, a.createElement)(
            'button',
            {
              ref: E,
              'aria-label': (0,
              s.sprintf) /* translators: %s refers to the item name in the cart. */(
                /* translators: %s refers to the item name in the cart. */
                (0, s.__)('Reduce quantity of %s', 'woocommerce'),
                d,
              ),
              className:
                'wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus',
              disabled: !w,
              onClick: () => {
                const e = t - p;
                n(e),
                  (0, i.speak)(
                    (0,
                    s.sprintf) /* translators: %s refers to the item's new quantity in the cart. */(
                      /* translators: %s refers to the item's new quantity in the cart. */
                      (0, s.__)('Quantity reduced to %s.', 'woocommerce'),
                      e,
                    ),
                  ),
                  N(e);
              },
            },
            '－',
          ),
          (0, a.createElement)(
            'button',
            {
              ref: f,
              'aria-label': (0,
              s.sprintf) /* translators: %s refers to the item's name in the cart. */(
                /* translators: %s refers to the item's name in the cart. */
                (0, s.__)('Increase quantity of %s', 'woocommerce'),
                d,
              ),
              disabled: !g,
              className:
                'wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus',
              onClick: () => {
                const e = t + p;
                n(e),
                  (0, i.speak)(
                    (0,
                    s.sprintf) /* translators: %s refers to the item's new quantity in the cart. */(
                      /* translators: %s refers to the item's new quantity in the cart. */
                      (0, s.__)('Quantity increased to %s.', 'woocommerce'),
                      e,
                    ),
                  ),
                  N(e);
              },
            },
            '＋',
          ),
        );
      };
      var d = r(6042),
        _ = r(7102),
        y = r(7143),
        b = r(7594),
        E = r(9095),
        f = r(3993);
      var k = r(3603),
        w = r(8529),
        g = r(1e3),
        N = r(131),
        v = r(5703);
      r(9507);
      const h = ({ children: e, className: t }) =>
          (0, a.createElement)(
            'div',
            { className: l()('wc-block-components-product-badge', t) },
            e,
          ),
        C = () =>
          (0, a.createElement)(
            h,
            { className: 'wc-block-components-product-backorder-badge' },
            (0, s.__)('Available on backorder', 'woocommerce'),
          );
      var P = r(8537);
      const I = ({ image: e = {}, fallbackAlt: t = '' }) => {
          const r = e.thumbnail
            ? { src: e.thumbnail, alt: (0, P.decodeEntities)(e.alt) || t || 'Product Image' }
            : { src: v.PLACEHOLDER_IMG_SRC, alt: '' };
          return (0, a.createElement)('img', { ...r, alt: r.alt });
        },
        x = ({ lowStockRemaining: e }) =>
          e
            ? (0, a.createElement)(
                h,
                { className: 'wc-block-components-product-low-stock-badge' },
                (0,
                s.sprintf) /* translators: %d stock amount (number of items in stock for product) */(
                  /* translators: %d stock amount (number of items in stock for product) */
                  (0, s.__)('%d left in stock', 'woocommerce'),
                  e,
                ),
              )
            : null;
      var A = r(1194);
      r(4982);
      const q = ({ details: e = [] }) =>
        Array.isArray(e)
          ? 0 === (e = e.filter(e => !e.hidden)).length
            ? null
            : (0, a.createElement)(
                'ul',
                { className: 'wc-block-components-product-details' },
                e.map(e => {
                  const t = (null == e ? void 0 : e.key) || e.name || '',
                    r =
                      (null == e ? void 0 : e.className) ||
                      (t ? `wc-block-components-product-details__${(0, A.c)(t)}` : '');
                  return (0, a.createElement)(
                    'li',
                    { key: t + (e.display || e.value), className: r },
                    t &&
                      (0, a.createElement)(
                        a.Fragment,
                        null,
                        (0, a.createElement)(
                          'span',
                          { className: 'wc-block-components-product-details__name' },
                          (0, P.decodeEntities)(t),
                          ':',
                        ),
                        ' ',
                      ),
                    (0, a.createElement)(
                      'span',
                      { className: 'wc-block-components-product-details__value' },
                      (0, P.decodeEntities)(e.display || e.value),
                    ),
                  );
                }),
              )
          : null;
      var R = r(6004);
      const D = e => e.replace(/<\/?[a-z][^>]*?>/gi, ''),
        S = (e, t) => e.replace(/[\s|\.\,]+$/i, '') + t;
      var F = r(9446);
      const M = ({
        source: e,
        maxLength: t = 15,
        countType: r = 'words',
        className: c = '',
        style: n = {},
      }) => {
        const l = (0, o.useMemo)(
          () =>
            ((e, t = 15, r = 'words') => {
              const a = (0, R.autop)(e);
              if ((0, F.count)(a, r) <= t) return a;
              const c = (e => {
                const t = e.indexOf('</p>');
                return -1 === t ? e : e.substr(0, t + 4);
              })(a);
              return (0, F.count)(c, r) <= t
                ? c
                : 'words' === r
                ? ((e, t, r = '&hellip;', a = !0) => {
                    const c = D(e),
                      n = c
                        .split(' ')
                        .splice(0, t)
                        .join(' ');
                    return n === c
                      ? a
                        ? (0, R.autop)(c)
                        : c
                      : a
                      ? (0, R.autop)(S(n, r))
                      : S(n, r);
                  })(c, t)
                : ((e, t, r = !0, a = '&hellip;', c = !0) => {
                    const n = D(e),
                      l = n.slice(0, t);
                    if (l === n) return c ? (0, R.autop)(n) : n;
                    if (r) return (0, R.autop)(S(l, a));
                    const s = l.match(/([\s]+)/g),
                      o = s ? s.length : 0,
                      i = n.slice(0, t + o);
                    return c ? (0, R.autop)(S(i, a)) : S(i, a);
                  })(c, t, 'characters_including_spaces' === r);
            })(e, t, r),
          [e, t, r],
        );
        return (0, a.createElement)(o.RawHTML, { style: n, className: c }, l);
      };
      var T = r(812);
      const L = ({ className: e, shortDescription: t = '', fullDescription: r = '' }) => {
        const c = t || r;
        return c
          ? (0, a.createElement)(M, {
              className: e,
              source: c,
              maxLength: 15,
              countType: T.r7.wordCountType || 'words',
            })
          : null;
      };
      r(401);
      const V = ({
        shortDescription: e = '',
        fullDescription: t = '',
        itemData: r = [],
        variation: c = [],
      }) =>
        (0, a.createElement)(
          'div',
          { className: 'wc-block-components-product-metadata' },
          (0, a.createElement)(L, {
            className: 'wc-block-components-product-metadata__description',
            shortDescription: e,
            fullDescription: t,
          }),
          (0, a.createElement)(q, { details: r }),
          (0, a.createElement)(q, {
            details: c.map(({ attribute: e = '', value: t }) => ({ key: e, value: t })),
          }),
        );
      var H = r(4656);
      const Q = ({ currency: e, saleAmount: t, format: r = '<price/>' }) => {
          if (!t || t <= 0) return null;
          r.includes('<price/>') ||
            ((r = '<price/>'), console.error('Price formats need to include the `<price/>` tag.'));
          const c = (0, s.sprintf) /* translators: %s will be replaced by the discount amount */(
            /* translators: %s will be replaced by the discount amount */
            (0, s.__)('Save %s', 'woocommerce'),
            r,
          );
          return (0, a.createElement)(
            h,
            { className: 'wc-block-components-sale-badge' },
            (0, o.createInterpolateElement)(c, {
              price: (0, a.createElement)(H.FormattedMonetaryAmount, { currency: e, value: t }),
            }),
          );
        },
        $ = (e, t) => e.convertPrecision(t.minorUnit).getAmount(),
        O = (0, o.forwardRef)(({ lineItem: e, onRemove: t = () => {}, tabIndex: r }, n) => {
          const {
              name: m = '',
              catalog_visibility: h = 'visible',
              short_description: P = '',
              description: A = '',
              low_stock_remaining: q = null,
              show_backorder_badge: R = !1,
              quantity_limits: D = { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
              sold_individually: S = !1,
              permalink: F = '',
              images: M = [],
              variation: T = [],
              item_data: L = [],
              prices: H = {
                currency_code: 'USD',
                currency_minor_unit: 2,
                currency_symbol: '$',
                currency_prefix: '$',
                currency_suffix: '',
                currency_decimal_separator: '.',
                currency_thousand_separator: ',',
                price: '0',
                regular_price: '0',
                sale_price: '0',
                price_range: null,
                raw_prices: { precision: 6, price: '0', regular_price: '0', sale_price: '0' },
              },
              totals: O = {
                currency_code: 'USD',
                currency_minor_unit: 2,
                currency_symbol: '$',
                currency_prefix: '$',
                currency_suffix: '',
                currency_decimal_separator: '.',
                currency_thousand_separator: ',',
                line_subtotal: '0',
                line_subtotal_tax: '0',
              },
              extensions: U,
            } = e,
            { quantity: j, setItemQuantity: K, removeItem: Y, isPendingDelete: B } = (e => {
              const t = { key: '', quantity: 1 };
              (e =>
                (0, f.isObject)(e) &&
                (0, f.objectHasProp)(e, 'key') &&
                (0, f.objectHasProp)(e, 'quantity') &&
                (0, f.isString)(e.key) &&
                (0, f.isNumber)(e.quantity))(e) && ((t.key = e.key), (t.quantity = e.quantity));
              const { key: r = '', quantity: a = 1 } = t,
                { cartErrors: n } = (0, c.V)(),
                { __internalIncrementCalculating: l, __internalDecrementCalculating: s } = (0,
                y.useDispatch)(b.CHECKOUT_STORE_KEY),
                [i, m] = (0, o.useState)(a),
                [p] = (0, u.d7)(i, 400),
                d = (0, E.Z)(p),
                { removeItemFromCart: _, changeCartItemQuantity: k } = (0, y.useDispatch)(
                  b.CART_STORE_KEY,
                );
              (0, o.useEffect)(() => m(a), [a]);
              const w = (0, y.useSelect)(
                  e => {
                    if (!r) return { quantity: !1, delete: !1 };
                    const t = e(b.CART_STORE_KEY);
                    return {
                      quantity: t.isItemPendingQuantity(r),
                      delete: t.isItemPendingDelete(r),
                    };
                  },
                  [r],
                ),
                g = (0, o.useCallback)(
                  () =>
                    r
                      ? _(r).catch(e => {
                          (0, b.processErrorResponse)(e);
                        })
                      : Promise.resolve(!1),
                  [r, _],
                );
              return (
                (0, o.useEffect)(() => {
                  r &&
                    (0, f.isNumber)(d) &&
                    Number.isFinite(d) &&
                    d !== p &&
                    k(r, p).catch(e => {
                      (0, b.processErrorResponse)(e);
                    });
                }, [r, k, p, d]),
                (0, o.useEffect)(
                  () => (
                    w.delete ? l() : s(),
                    () => {
                      w.delete && s();
                    }
                  ),
                  [s, l, w.delete],
                ),
                (0, o.useEffect)(
                  () => (
                    w.quantity || p !== i ? l() : s(),
                    () => {
                      (w.quantity || p !== i) && s();
                    }
                  ),
                  [l, s, w.quantity, p, i],
                ),
                {
                  isPendingDelete: w.delete,
                  quantity: i,
                  setItemQuantity: m,
                  removeItem: g,
                  cartItemQuantityErrors: n,
                }
              );
            })(e),
            { dispatchStoreEvent: W } = (0, k.y)(),
            { receiveCart: J, ...z } = (0, c.V)(),
            G = (0, o.useMemo)(() => ({ context: 'cart', cartItem: e, cart: z }), [e, z]),
            Z = (0, w.getCurrencyFromPriceResponse)(H),
            X = (0, g.applyCheckoutFilter)({
              filterName: 'itemName',
              defaultValue: m,
              extensions: U,
              arg: G,
            }),
            ee = (0, N.A)({
              amount: parseInt(H.raw_prices.regular_price, 10),
              precision: H.raw_prices.precision,
            }),
            te = (0, N.A)({
              amount: parseInt(H.raw_prices.price, 10),
              precision: H.raw_prices.precision,
            }),
            re = ee.subtract(te),
            ae = re.multiply(j),
            ce = (0, w.getCurrencyFromPriceResponse)(O);
          let ne = parseInt(O.line_subtotal, 10);
          (0, v.getSetting)('displayCartPricesIncludingTax', !1) &&
            (ne += parseInt(O.line_subtotal_tax, 10));
          const le = (0, N.A)({ amount: ne, precision: ce.minorUnit }),
            se = M.length ? M[0] : {},
            oe = 'hidden' === h || 'search' === h,
            ie = (0, g.applyCheckoutFilter)({
              filterName: 'cartItemClass',
              defaultValue: '',
              extensions: U,
              arg: G,
            }),
            me = (0, g.applyCheckoutFilter)({
              filterName: 'cartItemPrice',
              defaultValue: '<price/>',
              extensions: U,
              arg: G,
              validation: g.productPriceValidation,
            }),
            ue = (0, g.applyCheckoutFilter)({
              filterName: 'subtotalPriceFormat',
              defaultValue: '<price/>',
              extensions: U,
              arg: G,
              validation: g.productPriceValidation,
            }),
            pe = (0, g.applyCheckoutFilter)({
              filterName: 'saleBadgePriceFormat',
              defaultValue: '<price/>',
              extensions: U,
              arg: G,
              validation: g.productPriceValidation,
            }),
            de = (0, g.applyCheckoutFilter)({
              filterName: 'showRemoveItemLink',
              defaultValue: !0,
              extensions: U,
              arg: G,
            });
          return (0, a.createElement)(
            'tr',
            {
              className: l()('wc-block-cart-items__row', ie, { 'is-disabled': B }),
              ref: n,
              tabIndex: r,
            },
            (0, a.createElement)(
              'td',
              {
                className: 'wc-block-cart-item__image',
                'aria-hidden': !(0, f.objectHasProp)(se, 'alt') || !se.alt,
              },
              oe
                ? (0, a.createElement)(I, { image: se, fallbackAlt: X })
                : (0, a.createElement)(
                    'a',
                    { href: F, tabIndex: -1 },
                    (0, a.createElement)(I, { image: se, fallbackAlt: X }),
                  ),
            ),
            (0, a.createElement)(
              'td',
              { className: 'wc-block-cart-item__product' },
              (0, a.createElement)(
                'div',
                { className: 'wc-block-cart-item__wrap' },
                (0, a.createElement)(_.A, { disabled: B || oe, name: X, permalink: F }),
                R
                  ? (0, a.createElement)(C, null)
                  : !!q && (0, a.createElement)(x, { lowStockRemaining: q }),
                (0, a.createElement)(
                  'div',
                  { className: 'wc-block-cart-item__prices' },
                  (0, a.createElement)(d.A, {
                    currency: Z,
                    regularPrice: $(ee, Z),
                    price: $(te, Z),
                    format: ue,
                  }),
                ),
                (0, a.createElement)(Q, { currency: Z, saleAmount: $(re, Z), format: pe }),
                (0, a.createElement)(V, {
                  shortDescription: P,
                  fullDescription: A,
                  itemData: L,
                  variation: T,
                }),
                (0, a.createElement)(
                  'div',
                  { className: 'wc-block-cart-item__quantity' },
                  !S &&
                    !!D.editable &&
                    (0, a.createElement)(p, {
                      disabled: B,
                      quantity: j,
                      minimum: D.minimum,
                      maximum: D.maximum,
                      step: D.multiple_of,
                      onChange: t => {
                        K(t), W('cart-set-item-quantity', { product: e, quantity: t });
                      },
                      itemName: X,
                    }),
                  de &&
                    (0, a.createElement)(
                      'button',
                      {
                        className: 'wc-block-cart-item__remove-link',
                        'aria-label': (0,
                        s.sprintf) /* translators: %s refers to the item's name in the cart. */(
                          /* translators: %s refers to the item's name in the cart. */
                          (0, s.__)('Remove %s from cart', 'woocommerce'),
                          X,
                        ),
                        onClick: () => {
                          t(),
                            Y(),
                            W('cart-remove-item', { product: e, quantity: j }),
                            (0, i.speak)(
                              (0,
                              s.sprintf) /* translators: %s refers to the item name in the cart. */(
                                /* translators: %s refers to the item name in the cart. */
                                (0, s.__)('%s has been removed from your cart.', 'woocommerce'),
                                X,
                              ),
                            );
                        },
                        disabled: B,
                      },
                      (0, s.__)('Remove item', 'woocommerce'),
                    ),
                ),
              ),
            ),
            (0, a.createElement)(
              'td',
              { className: 'wc-block-cart-item__total' },
              (0, a.createElement)(
                'div',
                { className: 'wc-block-cart-item__total-price-and-sale-badge-wrapper' },
                (0, a.createElement)(d.A, { currency: ce, format: me, price: le.getAmount() }),
                j > 1 && (0, a.createElement)(Q, { currency: Z, saleAmount: $(ae, Z), format: pe }),
              ),
            ),
          );
        });
      r(1045);
      const U = [...Array(3)].map((_x, e) => (0, a.createElement)(O, { lineItem: {}, key: e })),
        j = e => {
          const t = {};
          return (
            e.forEach(({ key: e }) => {
              t[e] = (0, o.createRef)();
            }),
            t
          );
        },
        K = ({ lineItems: e = [], isLoading: t = !1, className: r }) => {
          const c = (0, o.useRef)(null),
            n = (0, o.useRef)(j(e));
          (0, o.useEffect)(() => {
            n.current = j(e);
          }, [e]);
          const i = e => () => {
              null != n && n.current && e && n.current[e].current instanceof HTMLElement
                ? n.current[e].current.focus()
                : c.current instanceof HTMLElement && c.current.focus();
            },
            m = t
              ? U
              : e.map((t, r) => {
                  const c = e.length > r + 1 ? e[r + 1].key : null;
                  return (0, a.createElement)(O, {
                    key: t.key,
                    lineItem: t,
                    onRemove: i(c),
                    ref: n.current[t.key],
                    tabIndex: -1,
                  });
                });
          return (0, a.createElement)(
            'table',
            { className: l()('wc-block-cart-items', r), ref: c, tabIndex: -1 },
            (0, a.createElement)(
              'thead',
              null,
              (0, a.createElement)(
                'tr',
                { className: 'wc-block-cart-items__header' },
                (0, a.createElement)(
                  'th',
                  { className: 'wc-block-cart-items__header-image' },
                  (0, a.createElement)('span', null, (0, s.__)('Product', 'woocommerce')),
                ),
                (0, a.createElement)(
                  'th',
                  { className: 'wc-block-cart-items__header-product' },
                  (0, a.createElement)('span', null, (0, s.__)('Details', 'woocommerce')),
                ),
                (0, a.createElement)(
                  'th',
                  { className: 'wc-block-cart-items__header-total' },
                  (0, a.createElement)('span', null, (0, s.__)('Total', 'woocommerce')),
                ),
              ),
            ),
            (0, a.createElement)('tbody', null, m),
          );
        },
        Y = ({ className: e }) => {
          const { cartItems: t, cartIsLoading: r } = (0, c.V)();
          return (0, a.createElement)(K, { className: e, lineItems: t, isLoading: r });
        };
    },
    1045: () => {},
    9507: () => {},
    4982: () => {},
    401: () => {},
    6625: () => {},
    4567: () => {},
    5193: () => {},
  },
]);
