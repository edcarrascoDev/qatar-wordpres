var wc;
(() => {
  var e,
    t,
    r,
    o,
    n,
    c = {
      4845: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => m });
        var o = r(1609),
          n = r(8165),
          c = r(6087),
          a = r(9019),
          s = r.n(a),
          l = r(4040),
          i = r.n(l),
          d = (r(2080), r(8730));
        const m = (0, c.forwardRef)((e, t) => {
          'showSpinner' in e &&
            i()('showSpinner prop', {
              version: '8.9.0',
              alternative: 'Render a spinner in the button children instead.',
              plugin: 'WooCommerce',
            });
          const {
              className: r,
              showSpinner: c = !1,
              children: a,
              variant: l = 'contained',
              removeTextWrap: m = !1,
              ...u
            } = e,
            p = s()('wc-block-components-button', 'wp-element-button', r, l, {
              'wc-block-components-button--loading': c,
            });
          if ('href' in e)
            return (0, o.createElement)(n.$, {
              render: (0, o.createElement)(
                'a',
                { ref: t, href: e.href },
                c && (0, o.createElement)(d.A, null),
                (0, o.createElement)('span', { className: 'wc-block-components-button__text' }, a),
              ),
              className: p,
              ...u,
            });
          const f = m
            ? e.children
            : (0, o.createElement)(
                'span',
                { className: 'wc-block-components-button__text' },
                e.children,
              );
          return (0, o.createElement)(
            n.$,
            { ref: t, className: p, ...u },
            c && (0, o.createElement)(d.A, null),
            f,
          );
        });
      },
      8585: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => i });
        var o = r(5703),
          n = r(7723),
          c = r(3993),
          a = r(812);
        const s = e => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, n.sprintf) /* translators: %s Field label. */(
                  /* translators: %s Field label. */
                  (0, n.__)('%s (optional)', 'woocommerce'),
                  e.label,
                )),
              e.priority &&
                ((0, c.isNumber)(e.priority) && (t.index = e.priority),
                (0, c.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          l = Object.entries(a.iI)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, s(t)])
                .reduce((e, [t, r]) => ((e[t] = r), e), {}),
            ])
            .reduce((e, [t, r]) => ((e[t] = r), e), {}),
          i = (e, t, r = '') => {
            const n = r && void 0 !== l[r] ? l[r] : {};
            return e
              .map(e => ({
                key: e,
                ...(o.defaultFields[e] || {}),
                ...(n[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          };
      },
      1334: (e, t, r) => {
        'use strict';
        r.d(t, { Y: () => n });
        var o = r(2452);
        const n = (e, t) => (r, n = 10) => {
          const c = o.o1.addEventCallback(e, r, n);
          return (
            t(c),
            () => {
              t(o.o1.removeEventCallback(e, c.id));
            }
          );
        };
      },
      8969: (e, t, r) => {
        'use strict';
        r.d(t, { _: () => a });
        var o = r(2379),
          n = r(3993);
        const c = e => (0, n.isObject)(e) && (0, n.objectHasProp)(e, 'type'),
          a = async (e, t, r) => {
            const n = [],
              a = (0, o.fK)(e, t);
            for (const e of a)
              try {
                const t = await Promise.resolve(e.callback(r));
                if (!c(t)) continue;
                if (!t.hasOwnProperty('type'))
                  throw new Error(
                    'Returned objects from event emitter observers must return an object with a type property',
                  );
                if ((0, o.CR)(t) || (0, o.al)(t)) return n.push(t), n;
                n.push(t);
              } catch (e) {
                return console.error(e), n.push({ type: o.hT.ERROR }), n;
              }
            return n;
          };
      },
      2452: (e, t, r) => {
        'use strict';
        r.d(t, { o1: () => n, Ff: () => a });
        let o = (function(e) {
          return (
            (e.ADD_EVENT_CALLBACK = 'add_event_callback'),
            (e.REMOVE_EVENT_CALLBACK = 'remove_event_callback'),
            e
          );
        })({});
        const n = {
            addEventCallback: (e, t, r = 10) => ({
              id: Math.floor(Math.random() * Date.now()).toString(),
              type: o.ADD_EVENT_CALLBACK,
              eventType: e,
              callback: t,
              priority: r,
            }),
            removeEventCallback: (e, t) => ({ id: t, type: o.REMOVE_EVENT_CALLBACK, eventType: e }),
          },
          c = {},
          a = (e = c, { type: t, eventType: r, id: n, callback: a, priority: s }) => {
            const l = e.hasOwnProperty(r) ? new Map(e[r]) : new Map();
            switch (t) {
              case o.ADD_EVENT_CALLBACK:
                return l.set(n, { priority: s, callback: a }), { ...e, [r]: l };
              case o.REMOVE_EVENT_CALLBACK:
                return l.delete(n), { ...e, [r]: l };
            }
          };
      },
      2379: (e, t, r) => {
        'use strict';
        r.d(t, { CR: () => s, al: () => l, fK: () => n, hT: () => c });
        var o = r(3993);
        const n = (e, t) =>
          e[t] ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority) : [];
        let c = (function(e) {
          return (e.SUCCESS = 'success'), (e.FAIL = 'failure'), (e.ERROR = 'error'), e;
        })({});
        const a = (e, t) => (0, o.isObject)(e) && 'type' in e && e.type === t,
          s = e => a(e, c.ERROR),
          l = e => a(e, c.FAIL);
      },
      8605: (e, t, r) => {
        'use strict';
        r.d(t, { V: () => v });
        var o = r(458),
          n = r.n(o),
          c = r(6087),
          a = r(7594),
          s = r(7143),
          l = r(8537),
          i = r(5683),
          d = r(2663);
        var m = r(4956);
        const u = e => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
          },
          p = e => {
            ((null != e && e.persisted) ||
              'back_forward' ===
                (window.performance && window.performance.getEntriesByType('navigation').length
                  ? window.performance.getEntriesByType('navigation')[0].type
                  : '')) &&
              (0, s.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
          },
          f = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          b = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            phone: '',
          },
          w = { ...b, email: '' },
          h = {
            total_items: '',
            total_items_tax: '',
            total_fees: '',
            total_fees_tax: '',
            total_discount: '',
            total_discount_tax: '',
            total_shipping: '',
            total_shipping_tax: '',
            total_price: '',
            total_tax: '',
            tax_lines: a.EMPTY_TAX_LINES,
            currency_code: '',
            currency_symbol: '',
            currency_minor_unit: 2,
            currency_decimal_separator: '',
            currency_thousand_separator: '',
            currency_prefix: '',
            currency_suffix: '',
          },
          k = e =>
            Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (0, l.decodeEntities)(t)])),
          g = {
            cartCoupons: a.EMPTY_CART_COUPONS,
            cartItems: a.EMPTY_CART_ITEMS,
            cartFees: a.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: a.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
            cartTotals: h,
            cartIsLoading: !0,
            cartErrors: a.EMPTY_CART_ERRORS,
            billingAddress: w,
            shippingAddress: b,
            shippingRates: a.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: a.EMPTY_PAYMENT_METHODS,
            paymentRequirements: a.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: a.EMPTY_EXTENSIONS,
          },
          v = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: r } = (0, d.m)(),
              o = null == r ? void 0 : r.previewCart,
              { shouldSelect: l } = e,
              h = (0, c.useRef)();
            (0, c.useEffect)(
              () => (
                (() => {
                  if (
                    (window.wcBlocksStoreCartListeners ||
                      (window.wcBlocksStoreCartListeners = { count: 0, remove: () => {} }),
                    (null === (e = window.wcBlocksStoreCartListeners) || void 0 === e
                      ? void 0
                      : e.count) > 0)
                  )
                    return void window.wcBlocksStoreCartListeners.count++;
                  var e;
                  document.body.addEventListener('wc-blocks_added_to_cart', u),
                    document.body.addEventListener('wc-blocks_removed_from_cart', u),
                    window.addEventListener('pageshow', p);
                  const t = (0, m.f2)('added_to_cart', 'wc-blocks_added_to_cart'),
                    r = (0, m.f2)('removed_from_cart', 'wc-blocks_removed_from_cart');
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener('wc-blocks_added_to_cart', u),
                        document.body.removeEventListener('wc-blocks_removed_from_cart', u),
                        window.removeEventListener('pageshow', p),
                        t(),
                        r();
                    });
                })(),
                f
              ),
              [],
            );
            const v = (0, s.useSelect)(
              (e, { dispatch: r }) => {
                if (!l) return g;
                if (t)
                  return {
                    cartCoupons: o.coupons,
                    cartItems: o.items,
                    crossSellsProducts: o.cross_sells,
                    cartFees: o.fees,
                    cartItemsCount: o.items_count,
                    cartItemsWeight: o.items_weight,
                    cartNeedsPayment: o.needs_payment,
                    cartNeedsShipping: o.needs_shipping,
                    cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: o.totals,
                    cartIsLoading: !1,
                    cartErrors: a.EMPTY_CART_ERRORS,
                    billingData: w,
                    billingAddress: w,
                    shippingAddress: b,
                    extensions: a.EMPTY_EXTENSIONS,
                    shippingRates: o.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: o.has_calculated_shipping,
                    paymentRequirements: o.paymentRequirements,
                    receiveCart:
                      'function' == typeof (null == o ? void 0 : o.receiveCart)
                        ? o.receiveCart
                        : () => {},
                    receiveCartContents:
                      'function' == typeof (null == o ? void 0 : o.receiveCartContents)
                        ? o.receiveCartContents
                        : () => {},
                  };
                const n = e(a.CART_STORE_KEY),
                  c = n.getCartData(),
                  s = n.getCartErrors(),
                  d = n.getCartTotals(),
                  m = !n.hasFinishedResolution('getCartData'),
                  u = n.isCustomerDataUpdating(),
                  { receiveCart: p, receiveCartContents: f } = r(a.CART_STORE_KEY),
                  h = k(c.billingAddress),
                  v = c.needsShipping ? k(c.shippingAddress) : h,
                  E = c.fees.length > 0 ? c.fees.map(e => k(e)) : a.EMPTY_CART_FEES;
                return {
                  cartCoupons:
                    c.coupons.length > 0
                      ? c.coupons.map(e => ({ ...e, label: e.code }))
                      : a.EMPTY_CART_COUPONS,
                  cartItems: c.items,
                  crossSellsProducts: c.crossSells,
                  cartFees: E,
                  cartItemsCount: c.itemsCount,
                  cartItemsWeight: c.itemsWeight,
                  cartNeedsPayment: c.needsPayment,
                  cartNeedsShipping: c.needsShipping,
                  cartItemErrors: c.errors,
                  cartTotals: d,
                  cartIsLoading: m,
                  cartErrors: s,
                  billingData: (0, i.TU)(h),
                  billingAddress: (0, i.TU)(h),
                  shippingAddress: (0, i.TU)(v),
                  extensions: c.extensions,
                  shippingRates: c.shippingRates,
                  isLoadingRates: u,
                  cartHasCalculatedShipping: c.hasCalculatedShipping,
                  paymentRequirements: c.paymentRequirements,
                  receiveCart: p,
                  receiveCartContents: f,
                };
              },
              [l],
            );
            return (h.current && n()(h.current, v)) || (h.current = v), h.current;
          };
      },
      7902: (e, t, r) => {
        'use strict';
        r.d(t, { r: () => m, e: () => d });
        var o = r(1609),
          n = r(6087),
          c = r(2452),
          a = r(1334);
        const s = 'cart_proceed_to_checkout';
        var l = r(8969);
        const i = (0, n.createContext)({
            onProceedToCheckout: () => () => {},
            dispatchOnProceedToCheckout: () => new Promise(() => {}),
          }),
          d = () => (0, n.useContext)(i),
          m = ({ children: e }) => {
            const [t, r] = (0, n.useReducer)(c.Ff, {}),
              d = (0, n.useRef)(t),
              { onProceedToCheckout: m } = (e =>
                (0, n.useMemo)(() => ({ onProceedToCheckout: (0, a.Y)(s, e) }), [e]))(r);
            (0, n.useEffect)(() => {
              d.current = t;
            }, [t]);
            const u = {
              onProceedToCheckout: m,
              dispatchOnProceedToCheckout: async () => await (0, l._)(d.current, s, null),
            };
            return (0, o.createElement)(i.Provider, { value: u }, e);
          };
      },
      2663: (e, t, r) => {
        'use strict';
        r.d(t, { m: () => c }), r(1609);
        var o = r(6087);
        r(7143);
        const n = (0, o.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: '',
            previewData: {},
            getPreviewData: () => ({}),
          }),
          c = () => (0, o.useContext)(n);
      },
      5683: (e, t, r) => {
        'use strict';
        r.d(t, { TU: () => c });
        var o = r(8585),
          n = (r(3832), r(3993), r(8537), r(812));
        const c = e => {
          const t = (0, o.A)(n.Hw, {}, e.country),
            r = Object.assign({}, e);
          return (
            t.forEach(({ key: t = '', hidden: o = !1 }) => {
              o && ((e, t) => e in t)(t, e) && (r[t] = '');
            }),
            r
          );
        };
      },
      4956: (e, t, r) => {
        'use strict';
        r.d(t, { f2: () => n });
        const o = window.CustomEvent || null,
          n = (e, t, r = !1, n = !1) => {
            if ('function' != typeof jQuery) return () => {};
            const c = () => {
              ((e, { bubbles: t = !1, cancelable: r = !1, element: n, detail: c = {} }) => {
                if (!o) return;
                n || (n = document.body);
                const a = new o(e, { bubbles: t, cancelable: r, detail: c });
                n.dispatchEvent(a);
              })(t, { bubbles: r, cancelable: n });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          };
      },
      9341: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609),
          n = r(6087),
          c = r(2294),
          a = r(7723),
          s = r(812);
        const l = ({
          imageUrl: e = `${s.sW}/block-error.svg`,
          header: t = (0, a.__)('Oops!', 'woocommerce'),
          text: r = (0, a.__)('There was an error loading the content.', 'woocommerce'),
          errorMessage: n,
          errorMessagePrefix: c = (0, a.__)('Error:', 'woocommerce'),
          button: l,
          showErrorBlock: i = !0,
        }) =>
          i
            ? (0, o.createElement)(
                'div',
                { className: 'wc-block-error wc-block-components-error' },
                e &&
                  (0, o.createElement)('img', {
                    className: 'wc-block-error__image wc-block-components-error__image',
                    src: e,
                    alt: '',
                  }),
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-error__content wc-block-components-error__content' },
                  t &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__header wc-block-components-error__header' },
                      t,
                    ),
                  r &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__text wc-block-components-error__text' },
                      r,
                    ),
                  n &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__message wc-block-components-error__message' },
                      c ? c + ' ' : '',
                      n,
                    ),
                  l &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__button wc-block-components-error__button' },
                      l,
                    ),
                ),
              )
            : null;
        r(9407);
        class i extends n.Component {
          constructor(...e) {
            super(...e), (0, c.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)('strong', null, e.status),
                    ': ',
                    e.statusText,
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: t,
                showErrorMessage: r = !0,
                showErrorBlock: n = !0,
                text: c,
                errorMessagePrefix: a,
                renderError: s,
                button: i,
              } = this.props,
              { errorMessage: d, hasError: m } = this.state;
            return m
              ? 'function' == typeof s
                ? s({ errorMessage: d })
                : (0, o.createElement)(l, {
                    showErrorBlock: n,
                    errorMessage: r ? d : null,
                    header: e,
                    imageUrl: t,
                    text: c,
                    errorMessagePrefix: a,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const d = i,
          m = ['.wp-block-woocommerce-cart'],
          u = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: c = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, a) => {
                const s = r(t, a),
                  l = c(t, a),
                  i = { ...t.dataset, ...(s.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: c = {},
                  errorBoundaryProps: a = {},
                }) => {
                  (0, n.render)(
                    (0, o.createElement)(
                      d,
                      { ...a },
                      (0, o.createElement)(
                        n.Suspense,
                        {
                          fallback: (0, o.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, o.createElement)(e, { ...c, attributes: r }),
                      ),
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: t, props: s, attributes: i, errorBoundaryProps: l });
              });
          },
          p = e => {
            const t = document.body.querySelectorAll(m.join(',')),
              { Block: r, getProps: o, getErrorBoundaryProps: n, selector: c } = e;
            (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: o, wrappers: n }) => {
              const c = document.body.querySelectorAll(o);
              n &&
                n.length > 0 &&
                Array.prototype.filter.call(
                  c,
                  e =>
                    !((e, t) =>
                      Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(e, n),
                ),
                u({ Block: e, containers: c, getProps: t, getErrorBoundaryProps: r });
            })({ Block: r, getProps: o, getErrorBoundaryProps: n, selector: c, wrappers: t }),
              Array.prototype.forEach.call(t, t => {
                t.addEventListener('wc-blocks_render_blocks_frontend', () => {
                  (({
                    Block: e,
                    getProps: t,
                    getErrorBoundaryProps: r,
                    selector: o,
                    wrapper: n,
                  }) => {
                    const c = n.querySelectorAll(o);
                    u({ Block: e, containers: c, getProps: t, getErrorBoundaryProps: r });
                  })({ ...e, wrapper: t });
                });
              });
          };
        var f = r(5703),
          b = r(4332),
          w = r(1e3);
        const h = (e, t) => (e && t[e] ? t[e] : null),
          k = ({ block: e, blockMap: t, blockWrapper: r, children: c, depth: a = 1 }) =>
            c && 0 !== c.length
              ? Array.from(c).map((c, s) => {
                  const { blockName: l = '', ...i } = {
                      ...(c instanceof HTMLElement ? c.dataset : {}),
                      className: c instanceof Element ? (null == c ? void 0 : c.className) : '',
                    },
                    m = `${e}_${a}_${s}`,
                    u = h(l, t);
                  if (!u) {
                    const o = (0, b.Ay)(
                      (c instanceof Element && (null == c ? void 0 : c.outerHTML)) ||
                        (null == c ? void 0 : c.textContent) ||
                        '',
                    );
                    if ('string' == typeof o && o) return o;
                    if (!(0, n.isValidElement)(o)) return null;
                    const s = c.childNodes.length
                      ? k({
                          block: e,
                          blockMap: t,
                          children: c.childNodes,
                          depth: a + 1,
                          blockWrapper: r,
                        })
                      : void 0;
                    return s
                      ? (0, n.cloneElement)(
                          o,
                          { key: m, ...((null == o ? void 0 : o.props) || {}) },
                          s,
                        )
                      : (0, n.cloneElement)(o, {
                          key: m,
                          ...((null == o ? void 0 : o.props) || {}),
                        });
                  }
                  const p = r || n.Fragment;
                  return (0, o.createElement)(
                    n.Suspense,
                    {
                      key: `${e}_${a}_${s}_suspense`,
                      fallback: (0, o.createElement)('div', { className: 'wc-block-placeholder' }),
                    },
                    (0, o.createElement)(
                      d,
                      {
                        text: `Unexpected error in: ${l}`,
                        showErrorBlock: f.CURRENT_USER_IS_ADMIN,
                      },
                      (0, o.createElement)(
                        p,
                        null,
                        (0, o.createElement)(
                          u,
                          { key: m, ...i },
                          k({
                            block: e,
                            blockMap: t,
                            children: c.childNodes,
                            depth: a + 1,
                            blockWrapper: r,
                          }),
                          ((e, t, r, c) => {
                            if (!(0, w.hasInnerBlocks)(e)) return null;
                            const a = r
                                ? Array.from(r)
                                    .map(
                                      e =>
                                        (e instanceof HTMLElement &&
                                          (null == e ? void 0 : e.dataset.blockName)) ||
                                        null,
                                    )
                                    .filter(Boolean)
                                : [],
                              s = (0, w.getRegisteredBlocks)(e).filter(
                                ({ blockName: e, force: t }) => !0 === t && !a.includes(e),
                              ),
                              l = c || n.Fragment;
                            return (0, o.createElement)(
                              n.Fragment,
                              null,
                              s.map(({ blockName: e, component: r }, n) => {
                                const c = r || h(e, t);
                                return c
                                  ? (0, o.createElement)(
                                      d,
                                      {
                                        key: `${e}_blockerror`,
                                        text: `Unexpected error in: ${e}`,
                                        showErrorBlock: f.CURRENT_USER_IS_ADMIN,
                                      },
                                      (0, o.createElement)(
                                        l,
                                        null,
                                        (0, o.createElement)(c, { key: `${e}_forced_${n}` }),
                                      ),
                                    )
                                  : null;
                              }),
                            );
                          })(l, t, c.childNodes, r),
                        ),
                      ),
                    ),
                  );
                })
              : null;
        var g = r(9019),
          v = r.n(g),
          E = r(4717),
          C = r(7104),
          _ = r(1208),
          y = r(9491);
        let S = null;
        var T = r(4845);
        const R = new Set(['alert', 'status', 'log', 'marquee', 'timer']);
        let P = [],
          O = !1;
        r(1041);
        const M = () =>
            (0, o.createElement)('div', { className: 'wc-block-components-drawer__close-wrapper' }),
          x = ({ onClick: e, contentRef: t }) => {
            var r;
            const c =
              null == t || null === (r = t.current) || void 0 === r
                ? void 0
                : r.querySelector('.wc-block-components-drawer__close-wrapper');
            return c
              ? (0, n.createPortal)(
                  (0, o.createElement)(
                    T.A,
                    {
                      className: 'wc-block-components-drawer__close',
                      onClick: e,
                      removeTextWrap: !0,
                      'aria-label': (0, a.__)('Close', 'woocommerce'),
                    },
                    (0, o.createElement)(C.A, { icon: _.A }),
                  ),
                  c,
                )
              : null;
          },
          N = (0, n.forwardRef)(
            (
              {
                children: e,
                className: t,
                isOpen: r,
                onClose: c,
                slideIn: a = !0,
                slideOut: s = !0,
              },
              l,
            ) => {
              const [i] = (0, E.d7)(r, 300),
                d = !r && i,
                m = 'drawer-open',
                u = () => {
                  document.body.classList.remove(m),
                    O &&
                      (P.forEach(e => {
                        e.removeAttribute('aria-hidden');
                      }),
                      (P = []),
                      (O = !1)),
                    c();
                },
                p = (0, n.useRef)(),
                f = (0, y.useFocusOnMount)(),
                b = (0, y.useConstrainedTabbing)(),
                w = (function(e) {
                  const t = (0, n.useRef)(null),
                    r = (0, n.useRef)(null),
                    o = (0, n.useRef)(e);
                  return (
                    (0, n.useEffect)(() => {
                      o.current = e;
                    }, [e]),
                    (0, n.useCallback)(e => {
                      if (e) (t.current = e), (r.current = e.ownerDocument.activeElement);
                      else if (r.current) {
                        var n, c, a;
                        const e =
                          null === (n = t.current) || void 0 === n
                            ? void 0
                            : n.contains(
                                null === (c = t.current) || void 0 === c
                                  ? void 0
                                  : c.ownerDocument.activeElement,
                              );
                        var s;
                        if (
                          (null !== (a = t.current) &&
                            void 0 !== a &&
                            a.isConnected &&
                            !e &&
                            ((null !== (s = S) && void 0 !== s) || (S = r.current)),
                          o.current)
                        )
                          o.current();
                        else {
                          var l;
                          const e = r.current;
                          null === (l = null != e && e.isConnected ? e : S) ||
                            void 0 === l ||
                            l.focus();
                        }
                        S = null;
                      }
                    }, [])
                  );
                })(),
                h = (0, n.useRef)(null);
              (0, n.useEffect)(() => {
                var e;
                r &&
                  ((e = p.current),
                  O ||
                    (Array.from(document.body.children).forEach(t => {
                      t !== e &&
                        (function(e) {
                          const t = e.getAttribute('role');
                          return !(
                            'SCRIPT' === e.tagName ||
                            e.hasAttribute('aria-hidden') ||
                            e.hasAttribute('aria-live') ||
                            (t && R.has(t))
                          );
                        })(t) &&
                        (t.setAttribute('aria-hidden', 'true'), P.push(t));
                    }),
                    (O = !0)),
                  document.body.classList.add(m));
              }, [r, m]);
              const k = (0, y.useMergeRefs)([p, l]),
                g = (0, y.useMergeRefs)([b, w, f]);
              return r || d
                ? (0, n.createPortal)(
                    (0, o.createElement)(
                      'div',
                      {
                        ref: k,
                        className: v()('wc-block-components-drawer__screen-overlay', {
                          'wc-block-components-drawer__screen-overlay--is-hidden': !r,
                          'wc-block-components-drawer__screen-overlay--with-slide-in': a,
                          'wc-block-components-drawer__screen-overlay--with-slide-out': s,
                        }),
                        onKeyDown: function(e) {
                          e.nativeEvent.isComposing ||
                            229 === e.keyCode ||
                            'Escape' !== e.code ||
                            e.defaultPrevented ||
                            (e.preventDefault(), u());
                        },
                        onClick: e => {
                          e.target === p.current && u();
                        },
                      },
                      (0, o.createElement)(
                        'div',
                        {
                          className: v()(t, 'wc-block-components-drawer'),
                          ref: g,
                          role: 'dialog',
                          tabIndex: -1,
                        },
                        (0, o.createElement)(
                          'div',
                          {
                            className: 'wc-block-components-drawer__content',
                            role: 'document',
                            ref: h,
                          },
                          (0, o.createElement)(x, { contentRef: h, onClick: u }),
                          e,
                        ),
                      ),
                    ),
                    document.body,
                  )
                : null;
            },
          );
        var A = r(8605);
        const B = (e, t) => {
          const r = [];
          return (
            Object.keys(e).forEach(o => {
              if (void 0 !== t[o])
                switch (e[o].type) {
                  case 'boolean':
                    r[o] = 'false' !== t[o] && !1 !== t[o];
                    break;
                  case 'number':
                    r[o] = parseInt(t[o], 10);
                    break;
                  case 'array':
                  case 'object':
                    r[o] = JSON.parse(t[o]);
                    break;
                  default:
                    r[o] = t[o];
                }
              else r[o] = e[o].default;
            }),
            r
          );
        };
        var L = r(4956),
          j = r(4083),
          I = r(8529),
          H = r(3993),
          V = r(5573);
        const F = (0, o.createElement)(
            V.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', fill: 'none' },
            (0, o.createElement)('circle', {
              cx: '12.6667',
              cy: '24.6667',
              r: '2',
              fill: 'currentColor',
            }),
            (0, o.createElement)('circle', {
              cx: '23.3333',
              cy: '24.6667',
              r: '2',
              fill: 'currentColor',
            }),
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M9.28491 10.0356C9.47481 9.80216 9.75971 9.66667 10.0606 9.66667H25.3333C25.6232 9.66667 25.8989 9.79247 26.0888 10.0115C26.2787 10.2305 26.3643 10.5211 26.3233 10.8081L24.99 20.1414C24.9196 20.6341 24.4977 21 24 21H12C11.5261 21 11.1173 20.6674 11.0209 20.2034L9.08153 10.8701C9.02031 10.5755 9.09501 10.269 9.28491 10.0356ZM11.2898 11.6667L12.8136 19H23.1327L24.1803 11.6667H11.2898Z',
              fill: 'currentColor',
            }),
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M5.66669 6.66667C5.66669 6.11438 6.1144 5.66667 6.66669 5.66667H9.33335C9.81664 5.66667 10.2308 6.01229 10.3172 6.48778L11.0445 10.4878C11.1433 11.0312 10.7829 11.5517 10.2395 11.6505C9.69614 11.7493 9.17555 11.3889 9.07676 10.8456L8.49878 7.66667H6.66669C6.1144 7.66667 5.66669 7.21895 5.66669 6.66667Z',
              fill: 'currentColor',
            }),
          ),
          $ = (0, o.createElement)(
            V.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', fill: 'none' },
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M12.4444 14.2222C12.9354 14.2222 13.3333 14.6202 13.3333 15.1111C13.3333 15.8183 13.6143 16.4966 14.1144 16.9967C14.6145 17.4968 15.2927 17.7778 16 17.7778C16.7072 17.7778 17.3855 17.4968 17.8856 16.9967C18.3857 16.4966 18.6667 15.8183 18.6667 15.1111C18.6667 14.6202 19.0646 14.2222 19.5555 14.2222C20.0465 14.2222 20.4444 14.6202 20.4444 15.1111C20.4444 16.2898 19.9762 17.4203 19.1427 18.2538C18.3092 19.0873 17.1787 19.5555 16 19.5555C14.8212 19.5555 13.6908 19.0873 12.8573 18.2538C12.0238 17.4203 11.5555 16.2898 11.5555 15.1111C11.5555 14.6202 11.9535 14.2222 12.4444 14.2222Z',
              fill: 'currentColor',
            }),
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M11.2408 6.68254C11.4307 6.46089 11.7081 6.33333 12 6.33333H20C20.2919 6.33333 20.5693 6.46089 20.7593 6.68254L24.7593 11.3492C25.0134 11.6457 25.0717 12.0631 24.9085 12.4179C24.7453 12.7727 24.3905 13 24 13H8.00001C7.60948 13 7.25469 12.7727 7.0915 12.4179C6.92832 12.0631 6.9866 11.6457 7.24076 11.3492L11.2408 6.68254ZM12.4599 8.33333L10.1742 11H21.8258L19.5401 8.33333H12.4599Z',
              fill: 'currentColor',
            }),
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M7 12C7 11.4477 7.44772 11 8 11H24C24.5523 11 25 11.4477 25 12V25.3333C25 25.8856 24.5523 26.3333 24 26.3333H8C7.44772 26.3333 7 25.8856 7 25.3333V12ZM9 13V24.3333H23V13H9Z',
              fill: 'currentColor',
            }),
          ),
          D = (0, o.createElement)(
            V.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', fill: 'none' },
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M19.5556 12.3333C19.0646 12.3333 18.6667 11.9354 18.6667 11.4444C18.6667 10.7372 18.3857 8.05893 17.8856 7.55883C17.3855 7.05873 16.7073 6.77778 16 6.77778C15.2928 6.77778 14.6145 7.05873 14.1144 7.55883C13.6143 8.05893 13.3333 10.7372 13.3333 11.4444C13.3333 11.9354 12.9354 12.3333 12.4445 12.3333C11.9535 12.3333 11.5556 11.9354 11.5556 11.4444C11.5556 10.2657 12.0238 7.13524 12.8573 6.30175C13.6908 5.46825 14.8213 5 16 5C17.1788 5 18.3092 5.46825 19.1427 6.30175C19.9762 7.13524 20.4445 10.2657 20.4445 11.4444C20.4445 11.9354 20.0465 12.3333 19.5556 12.3333Z',
              fill: 'currentColor',
            }),
            (0, o.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M7.5 12C7.5 11.4477 7.94772 11 8.5 11H23.5C24.0523 11 24.5 11.4477 24.5 12V25.3333C24.5 25.8856 24.0523 26.3333 23.5 26.3333H8.5C7.94772 26.3333 7.5 25.8856 7.5 25.3333V12ZM9.5 13V24.3333H22.5V13H9.5Z',
              fill: 'currentColor',
            }),
          );
        r(880);
        const Y = ({ count: e, icon: t, iconColor: r, productCountColor: n }) =>
          (0, o.createElement)(
            'span',
            { className: 'wc-block-mini-cart__quantity-badge' },
            (0, o.createElement)(C.A, {
              className: 'wc-block-mini-cart__icon',
              color: r.color,
              size: 20,
              icon: (function(e) {
                switch (e) {
                  case 'cart':
                  default:
                    return F;
                  case 'bag':
                    return $;
                  case 'bag-alt':
                    return D;
                }
              })(t),
            }),
            (0, o.createElement)(
              'span',
              { className: 'wc-block-mini-cart__badge', style: { background: n.color } },
              e > 0 ? e : '',
            ),
          );
        var J = r(7902);
        const q = JSON.parse(
            '{"name":"woocommerce/empty-mini-cart-contents-block","version":"1.0.0","title":"Empty Mini-Cart view","description":"Blocks that are displayed when the Mini-Cart is empty.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/mini-cart-contents"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          W = JSON.parse(
            '{"name":"woocommerce/filled-mini-cart-contents-block","version":"1.0.0","title":"Filled Mini-Cart view","description":"Contains blocks that display the content of the Mini-Cart.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/mini-cart-contents"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          z = JSON.parse(
            '{"name":"woocommerce/mini-cart-title-block","version":"1.0.0","title":"Mini-Cart Title","description":"Block that displays the title of the Mini-Cart block.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false,"color":{"text":true,"background":false},"typography":{"fontSize":true}},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/filled-mini-cart-contents-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          U = JSON.parse(
            '{"name":"woocommerce/mini-cart-title-items-counter-block","version":"1.0.0","title":"Mini-Cart Title Items Counter","description":"Block that displays the items counter part of the Mini-Cart Title block.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false,"color":{"text":true,"background":true},"typography":{"fontSize":true},"spacing":{"padding":true}},"parent":["woocommerce/mini-cart-title-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          G = JSON.parse(
            '{"name":"woocommerce/mini-cart-title-label-block","version":"1.0.0","title":"Mini-Cart Title Label","description":"Block that displays the \'Your cart\' part of the Mini-Cart Title block.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false,"color":{"text":true,"background":true},"typography":{"fontSize":true},"spacing":{"padding":true}},"attributes":{"label":{"type":"string"}},"parent":["woocommerce/mini-cart-title-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          K = JSON.parse(
            '{"name":"woocommerce/mini-cart-products-table-block","version":"1.0.0","title":"Mini-Cart Products Table","description":"Block that displays the products table of the Mini-Cart block.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/mini-cart-items-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          Z = JSON.parse(
            '{"name":"woocommerce/mini-cart-footer-block","version":"1.0.0","title":"Mini-Cart Footer","description":"Block that displays the footer of the Mini-Cart block.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/filled-mini-cart-contents-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          X = JSON.parse(
            '{"name":"woocommerce/mini-cart-items-block","version":"1.0.0","title":"Mini-Cart Items","description":"Contains the products table and other custom blocks of filled mini-cart.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/filled-mini-cart-contents-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          Q = JSON.parse(
            '{"name":"woocommerce/mini-cart-shopping-button-block","version":"1.0.0","title":"Mini-Cart Shopping Button","description":"Block that displays the shopping button when the Mini-Cart is empty.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":true,"color":{"text":true,"background":true}},"attributes":{"lock":{"type":"object","default":{"remove":false,"move":false}}},"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"parent":["woocommerce/empty-mini-cart-contents-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          ee = JSON.parse(
            '{"name":"woocommerce/mini-cart-cart-button-block","version":"1.0.0","title":"Mini-Cart View Cart Button","description":"Block that displays the cart button when the Mini-Cart has products.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":true,"color":{"text":true,"background":true}},"attributes":{"lock":{"type":"object","default":{"remove":false,"move":false}}},"styles":[{"name":"fill","label":"Fill"},{"name":"outline","label":"Outline","isDefault":true}],"parent":["woocommerce/mini-cart-footer-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          te = JSON.parse(
            '{"name":"woocommerce/mini-cart-checkout-button-block","version":"1.0.0","title":"Mini-Cart Proceed to Checkout Button","description":"Block that displays the checkout button when the Mini-Cart has products.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":true,"color":{"text":true,"background":true}},"attributes":{"lock":{"type":"object","default":{"remove":false,"move":false}}},"styles":[{"name":"fill","label":"Fill","isDefault":true},{"name":"outline","label":"Outline"}],"parent":["woocommerce/mini-cart-footer-block"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        (r.p = s.XK),
          (0, w.registerCheckoutBlock)({
            metadata: W,
            component: (0, n.lazy)(() => r.e(9762).then(r.bind(r, 9322))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: q,
            component: (0, n.lazy)(() => r.e(149).then(r.bind(r, 9397))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: z,
            force: !1,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(7311)]).then(r.bind(r, 3488))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: U,
            force: !1,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(319)]).then(r.bind(r, 2500))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: G,
            force: !1,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(8722)]).then(r.bind(r, 9586))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: X,
            component: (0, n.lazy)(() => r.e(4169).then(r.bind(r, 1617))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: K,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(6088)]).then(r.bind(r, 8702))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: Z,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(7850)]).then(r.bind(r, 273))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: Q,
            component: (0, n.lazy)(() => r.e(2264).then(r.bind(r, 801))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: ee,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(2974)]).then(r.bind(r, 7767))),
          }),
          (0, w.registerCheckoutBlock)({
            metadata: te,
            component: (0, n.lazy)(() => Promise.all([r.e(94), r.e(6476)]).then(r.bind(r, 517))),
          });
        const re = e => {
          const { children: t } = e;
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(J.r, null, (0, o.createElement)(M, null), t),
          );
        };
        r(106);
        const oe = (0, o.createElement)(
            V.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, o.createElement)(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              (0, o.createElement)('path', { d: 'M0 0h24v24H0z' }),
              (0, o.createElement)('path', {
                fill: 'currentColor',
                fillRule: 'nonzero',
                d:
                  'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45ZM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z',
              }),
            ),
            ' ',
          ),
          ne = (0, o.createElement)(
            V.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, o.createElement)('path', {
              d:
                'M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z',
            }),
            (0, o.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
          ),
          ce = 'woocommerce/mini-cart-contents',
          ae = {
            isPreview: { type: 'boolean', default: !1 },
            lock: { type: 'object', default: { remove: !0, move: !0 } },
            currentView: {
              type: 'string',
              default: 'woocommerce/filled-mini-cart-contents-block',
              source: 'readonly',
            },
            editorViews: {
              type: 'object',
              default: [
                {
                  view: 'woocommerce/filled-mini-cart-contents-block',
                  label: (0, a.__)('Filled Mini-Cart', 'woocommerce'),
                  icon: (0, o.createElement)(C.A, { icon: oe }),
                },
                {
                  view: 'woocommerce/empty-mini-cart-contents-block',
                  label: (0, a.__)('Empty Mini-Cart', 'woocommerce'),
                  icon: (0, o.createElement)(C.A, { icon: ne }),
                },
              ],
            },
            width: { type: 'string', default: '480px' },
          },
          se = { name: void 0, color: void 0, slug: void 0 },
          le = e => {
            const {
                initialCartItemsCount: t,
                initialCartTotals: r,
                isInitiallyOpen: c = !1,
                colorClassNames: s,
                contents: l = '',
                miniCartIcon: i,
                addToCartBehaviour: d = 'none',
                hasHiddenPrice: m = !0,
                priceColor: u = se,
                iconColor: b = se,
                productCountColor: w = se,
              } = e,
              { cartItemsCount: h, cartIsLoading: g, cartTotals: E } = (0, A.V)(),
              C = (0, n.useRef)(g);
            (0, n.useEffect)(() => {
              C.current && !g && (C.current = !1);
            }, [g, C]),
              (0, n.useEffect)(() => {
                !g &&
                  (0, H.isCartResponseTotals)(E) &&
                  (0, H.isNumber)(h) &&
                  localStorage.setItem(
                    'wc-blocks_mini_cart_totals',
                    JSON.stringify({ totals: E, itemsCount: h }),
                  );
              });
            const [_, y] = (0, n.useState)(c),
              [S, T] = (0, n.useState)(c),
              [R, P] = (0, n.useState)(null),
              O = (0, n.useCallback)(e => {
                P(e);
              }, []);
            (0, n.useEffect)(() => {
              const e = document.querySelector('body');
              if (e) {
                const t = window.innerWidth - document.documentElement.clientWidth;
                _
                  ? Object.assign(e.style, { overflow: 'hidden', paddingRight: t + 'px' })
                  : Object.assign(e.style, { overflow: '', paddingRight: 0 });
              }
            }, [_]),
              (0, n.useEffect)(() => {
                if (R instanceof Element) {
                  if (!R.querySelector('.wp-block-woocommerce-mini-cart-contents')) return;
                  _ &&
                    (({
                      Block: e,
                      selector: t,
                      blockName: r,
                      getProps: o = () => ({}),
                      blockMap: n,
                      blockWrapper: c,
                    }) => {
                      p({
                        Block: e,
                        selector: t,
                        getProps: (e, t) => {
                          const a = k({
                            block: r,
                            blockMap: n,
                            children: e.children || [],
                            blockWrapper: c,
                          });
                          return { ...o(e, t), children: a };
                        },
                      });
                    })({
                      Block: re,
                      blockName: ce,
                      getProps: e => ({
                        attributes: B(ae, e instanceof HTMLElement ? e.dataset : {}),
                      }),
                      selector: '.wp-block-woocommerce-mini-cart-contents',
                      blockMap: (0, j.getRegisteredBlockComponents)(ce),
                    });
                }
                return () => {
                  if (R instanceof Element && _) {
                    const e = R.querySelector('.wp-block-woocommerce-mini-cart-contents');
                    e && (0, n.unmountComponentAtNode)(e);
                  }
                };
              }, [_, R]),
              (0, n.useEffect)(() => {
                const e = () => {
                    'open_drawer' === d && (T(!1), y(!0));
                  },
                  t = (0, L.f2)('added_to_cart', 'wc-blocks_added_to_cart');
                return (
                  document.body.addEventListener('wc-blocks_added_to_cart', e),
                  () => {
                    t(), document.body.removeEventListener('wc-blocks_added_to_cart', e);
                  }
                );
              }, [d]);
            const M = (0, f.getSettingWithCoercion)(
                'displayCartPricesIncludingTax',
                !1,
                H.isBoolean,
              ),
              x = (0, f.getSettingWithCoercion)('taxLabel', '', H.isString),
              V = C.current && (0, H.isCartResponseTotals)(r) ? r : E,
              F = C.current && (0, H.isNumber)(t) ? t : h,
              $ = M
                ? parseInt(V.total_items, 10) + parseInt(V.total_items_tax, 10)
                : parseInt(V.total_items, 10),
              D = m
                ? (0, a.sprintf) /* translators: %1$d is the number of products in the cart. */(
                    /* translators: %1$d is the number of products in the cart. */
                    (0, a._n)('%1$d item in cart', '%1$d items in cart', F, 'woocommerce'),
                    F,
                  )
                : (0,
                  a.sprintf) /* translators: %1$d is the number of products in the cart. %2$s is the cart total */(
                    /* translators: %1$d is the number of products in the cart. %2$s is the cart total */
                    (0, a._n)(
                      '%1$d item in cart, total price of %2$s',
                      '%1$d items in cart, total price of %2$s',
                      F,
                      'woocommerce',
                    ),
                    F,
                    (0, I.formatPrice)($, (0, I.getCurrencyFromPriceResponse)(V)),
                  );
            return (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                'button',
                {
                  className: `wc-block-mini-cart__button ${s}`,
                  onClick: () => {
                    _ || (y(!0), T(!1));
                  },
                  'aria-label': D,
                },
                !m &&
                  (0, o.createElement)(
                    'span',
                    { className: 'wc-block-mini-cart__amount', style: { color: u.color } },
                    (0, I.formatPrice)($, (0, I.getCurrencyFromPriceResponse)(V)),
                  ),
                '' !== x &&
                  0 !== $ &&
                  !m &&
                  (0, o.createElement)(
                    'small',
                    { className: 'wc-block-mini-cart__tax-label', style: { color: u.color } },
                    x,
                  ),
                (0, o.createElement)(Y, { count: F, icon: i, iconColor: b, productCountColor: w }),
              ),
              (0, o.createElement)(
                N,
                {
                  className: v()('wc-block-mini-cart__drawer', 'is-mobile', { 'is-loading': g }),
                  isOpen: _,
                  onClose: () => {
                    y(!1);
                  },
                  slideIn: !S,
                },
                (0, o.createElement)('div', {
                  className: 'wc-block-mini-cart__template-part',
                  ref: O,
                  dangerouslySetInnerHTML: { __html: l },
                }),
              ),
            );
          };
        (() => {
          let e = null;
          if (
            (document.activeElement &&
              document.activeElement.classList.contains('wc-block-mini-cart__button') &&
              document.activeElement.parentNode instanceof HTMLElement &&
              (e = document.activeElement.parentNode),
            p({
              selector: '.wc-block-mini-cart',
              Block: le,
              getProps: e => {
                var t, r;
                let o = '';
                const n = e.querySelector('.wc-block-mini-cart__button');
                return (
                  n instanceof HTMLButtonElement &&
                    (o = n.classList.toString().replace('wc-block-mini-cart__button', '')),
                  {
                    initialCartTotals: e.dataset.cartTotals
                      ? JSON.parse(e.dataset.cartTotals)
                      : null,
                    initialCartItemsCount: e.dataset.cartItemsCount
                      ? parseInt(e.dataset.cartItemsCount, 10)
                      : 0,
                    isInitiallyOpen: 'true' === e.dataset.isInitiallyOpen,
                    colorClassNames: o,
                    style: e.dataset.style ? JSON.parse(e.dataset.style) : {},
                    miniCartIcon: e.dataset.miniCartIcon,
                    addToCartBehaviour: e.dataset.addToCartBehaviour || 'none',
                    hasHiddenPrice: 'false' !== e.dataset.hasHiddenPrice,
                    priceColor: e.dataset.priceColor ? JSON.parse(e.dataset.priceColor) : {},
                    iconColor: e.dataset.iconColor ? JSON.parse(e.dataset.iconColor) : {},
                    productCountColor: e.dataset.productCountColor
                      ? JSON.parse(e.dataset.productCountColor)
                      : {},
                    contents:
                      null !==
                        (t =
                          null === (r = e.querySelector('.wc-block-mini-cart__template-part')) ||
                          void 0 === r
                            ? void 0
                            : r.innerHTML) && void 0 !== t
                        ? t
                        : '',
                  }
                );
              },
            }),
            e instanceof HTMLElement && !e.dataset.isInitiallyOpen)
          ) {
            const t = e.querySelector('.wc-block-mini-cart__button');
            t instanceof HTMLElement && t.focus();
          }
        })();
      },
      5849: (e, t, r) => {
        'use strict';
        r.d(t, {
          Hw: () => y,
          Jn: () => h,
          Vo: () => g,
          XK: () => w,
          iI: () => C,
          r7: () => f,
          sW: () => b,
          tn: () => k,
        });
        var o,
          n,
          c,
          a,
          s,
          l,
          i,
          d,
          m,
          u,
          p = r(5703);
        const f = (0, p.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          b = f.pluginUrl + 'assets/images/',
          w = f.pluginUrl + 'assets/client/blocks/',
          h =
            (f.buildPhase,
            null === (o = p.STORE_PAGES.shop) || void 0 === o ? void 0 : o.permalink),
          k =
            (null === (n = p.STORE_PAGES.checkout) || void 0 === n || n.id,
            null === (c = p.STORE_PAGES.checkout) || void 0 === c ? void 0 : c.permalink),
          g =
            (null === (a = p.STORE_PAGES.privacy) || void 0 === a || a.permalink,
            null === (s = p.STORE_PAGES.privacy) || void 0 === s || s.title,
            null === (l = p.STORE_PAGES.terms) || void 0 === l || l.permalink,
            null === (i = p.STORE_PAGES.terms) || void 0 === i || i.title,
            null === (d = p.STORE_PAGES.cart) || void 0 === d || d.id,
            null === (m = p.STORE_PAGES.cart) || void 0 === m ? void 0 : m.permalink),
          v =
            (null !== (u = p.STORE_PAGES.myaccount) && void 0 !== u && u.permalink
              ? p.STORE_PAGES.myaccount.permalink
              : (0, p.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, p.getSetting)('localPickupEnabled', !1),
            (0, p.getSetting)('countries', {})),
          E = (0, p.getSetting)('countryData', {}),
          C =
            (Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowBilling)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowBilling)
                .map(e => [e, E[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowShipping)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(E)
                .filter(e => !0 === E[e].allowShipping)
                .map(e => [e, E[e].states || []]),
            ),
            Object.fromEntries(Object.keys(E).map(e => [e, E[e].locale || []]))),
          _ = {
            address: [
              'first_name',
              'last_name',
              'company',
              'address_1',
              'address_2',
              'city',
              'postcode',
              'country',
              'state',
              'phone',
            ],
            contact: ['email'],
            order: [],
          },
          y = (0, p.getSetting)('addressFieldsLocations', _).address;
        (0, p.getSetting)('addressFieldsLocations', _).contact,
          (0, p.getSetting)('addressFieldsLocations', _).order,
          (0, p.getSetting)('additionalOrderFields', {}),
          (0, p.getSetting)('additionalContactFields', {}),
          (0, p.getSetting)('additionalAddressFields', {});
      },
      812: (e, t, r) => {
        'use strict';
        r.d(t, {
          Hw: () => o.Hw,
          Jn: () => o.Jn,
          Vo: () => o.Vo,
          XK: () => o.XK,
          iI: () => o.iI,
          r7: () => o.r7,
          sW: () => o.sW,
          tn: () => o.tn,
        });
        var o = r(5849);
      },
      8730: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => n });
        var o = r(1609);
        r(7791);
        const n = () =>
          (0, o.createElement)('span', {
            className: 'wc-block-components-spinner',
            'aria-hidden': 'true',
          });
      },
      9407: () => {},
      2080: () => {},
      1041: () => {},
      880: () => {},
      106: () => {},
      7791: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      1e3: e => {
        'use strict';
        e.exports = window.wc.blocksCheckout;
      },
      4656: e => {
        'use strict';
        e.exports = window.wc.blocksComponents;
      },
      8529: e => {
        'use strict';
        e.exports = window.wc.priceFormat;
      },
      7594: e => {
        'use strict';
        e.exports = window.wc.wcBlocksData;
      },
      4083: e => {
        'use strict';
        e.exports = window.wc.wcBlocksRegistry;
      },
      5703: e => {
        'use strict';
        e.exports = window.wc.wcSettings;
      },
      3993: e => {
        'use strict';
        e.exports = window.wc.wcTypes;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      6004: e => {
        'use strict';
        e.exports = window.wp.autop;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      7143: e => {
        'use strict';
        e.exports = window.wp.data;
      },
      4040: e => {
        'use strict';
        e.exports = window.wp.deprecated;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      2619: e => {
        'use strict';
        e.exports = window.wp.hooks;
      },
      8537: e => {
        'use strict';
        e.exports = window.wp.htmlEntities;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      923: e => {
        'use strict';
        e.exports = window.wp.isShallowEqual;
      },
      8558: e => {
        'use strict';
        e.exports = window.wp.keycodes;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
      9786: e => {
        'use strict';
        e.exports = window.wp.styleEngine;
      },
      3832: e => {
        'use strict';
        e.exports = window.wp.url;
      },
      9446: e => {
        'use strict';
        e.exports = window.wp.wordcount;
      },
    },
    a = {};
  function s(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return c[e].call(r.exports, r, r.exports, s), r.exports;
  }
  (s.m = c),
    (e = []),
    (s.O = (t, r, o, n) => {
      if (!r) {
        var c = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, o, n] = e[d], a = !0, l = 0; l < r.length; l++)
            (!1 & n || c >= n) && Object.keys(s.O).every(e => s.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), n < c && (c = n));
          if (a) {
            e.splice(d--, 1);
            var i = o();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [r, o, n];
    }),
    (s.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (s.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      s.r(n);
      var c = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (c[t] = () => e[t]));
      return (c.default = () => e), s.d(n, c), n;
    }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.f = {}),
    (s.e = e => Promise.all(Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), []))),
    (s.u = e =>
      ({
        149: 'mini-cart-contents-block/empty-cart',
        319: 'mini-cart-contents-block/title-items-counter',
        2264: 'mini-cart-contents-block/shopping-button',
        2974: 'mini-cart-contents-block/cart-button',
        4169: 'mini-cart-contents-block/items',
        6088: 'mini-cart-contents-block/products-table',
        6476: 'mini-cart-contents-block/checkout-button',
        7311: 'mini-cart-contents-block/title',
        7850: 'mini-cart-contents-block/footer',
        8722: 'mini-cart-contents-block/title-label',
        9762: 'mini-cart-contents-block/filled-cart',
      }[e] +
      '-frontend.js?ver=' +
      {
        149: '5769e9f00c9d8f52a440',
        319: '9099c02c77d7cfb4b692',
        2264: 'bf2620744031b341a3d5',
        2974: 'cab493d1a0b346ad196e',
        4169: '5fe82c11dec6551c0c47',
        6088: 'c2805f519db4c61c4005',
        6476: '50c5047fc92f829a97d1',
        7311: '33c1a683ec71a1dd2347',
        7850: 'ff1b58625e33d7d5856a',
        8722: '5eb412801a34e7a2cbff',
        9762: '65f088a764f9ca4503ca',
      }[e])),
    (s.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o = {}),
    (n = 'webpackWcBlocksFrontendJsonp:'),
    (s.l = (e, t, r, c) => {
      if (o[e]) o[e].push(t);
      else {
        var a, l;
        if (void 0 !== r)
          for (var i = document.getElementsByTagName('script'), d = 0; d < i.length; d++) {
            var m = i[d];
            if (m.getAttribute('src') == e || m.getAttribute('data-webpack') == n + r) {
              a = m;
              break;
            }
          }
        a ||
          ((l = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          s.nc && a.setAttribute('nonce', s.nc),
          a.setAttribute('data-webpack', n + r),
          (a.src = e)),
          (o[e] = [t]);
        var u = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var n = o[e];
            if (
              (delete o[e],
              a.parentNode && a.parentNode.removeChild(a),
              n && n.forEach(e => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(u.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
        (a.onerror = u.bind(null, a.onerror)),
          (a.onload = u.bind(null, a.onload)),
          l && document.head.appendChild(a);
      }
    }),
    (s.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.j = 2895),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + '');
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); ) e = r[o--].src;
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (s.p = e);
    })(),
    (() => {
      var e = { 2895: 0 };
      (s.f.j = (t, r) => {
        var o = s.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var n = new Promise((r, n) => (o = e[t] = [r, n]));
            r.push((o[2] = n));
            var c = s.p + s.u(t),
              a = new Error();
            s.l(
              c,
              r => {
                if (s.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var n = r && ('load' === r.type ? 'missing' : r.type),
                    c = r && r.target && r.target.src;
                  (a.message = 'Loading chunk ' + t + ' failed.\n(' + n + ': ' + c + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = n),
                    (a.request = c),
                    o[1](a);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      }),
        (s.O.j = t => 0 === e[t]);
      var t = (t, r) => {
          var o,
            n,
            [c, a, l] = r,
            i = 0;
          if (c.some(t => 0 !== e[t])) {
            for (o in a) s.o(a, o) && (s.m[o] = a[o]);
            if (l) var d = l(s);
          }
          for (t && t(r); i < c.length; i++) (n = c[i]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return s.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var l = s.O(void 0, [94], () => s(9341));
  (l = s.O(l)), ((wc = void 0 === wc ? {} : wc)['mini-cart-component'] = l);
})();
