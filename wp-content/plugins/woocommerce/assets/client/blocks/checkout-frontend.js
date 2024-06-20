var wc;
(() => {
  var e,
    t,
    r,
    o,
    s,
    c = {
      8585: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => l });
        var o = r(5703),
          s = r(7723),
          c = r(3993),
          a = r(812);
        const n = e => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, s.sprintf) /* translators: %s Field label. */(
                  /* translators: %s Field label. */
                  (0, s.__)('%s (optional)', 'woocommerce'),
                  e.label,
                )),
              e.priority &&
                ((0, c.isNumber)(e.priority) && (t.index = e.priority),
                (0, c.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          i = Object.entries(a.iI)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, n(t)])
                .reduce((e, [t, r]) => ((e[t] = r), e), {}),
            ])
            .reduce((e, [t, r]) => ((e[t] = r), e), {}),
          l = (e, t, r = '') => {
            const s = r && void 0 !== i[r] ? i[r] : {};
            return e
              .map(e => ({
                key: e,
                ...(o.defaultFields[e] || {}),
                ...(s[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          };
      },
      8156: (e, t, r) => {
        'use strict';
        r.d(t, { HI: () => c, R4: () => n, mH: () => a });
        var o = r(5703),
          s = r(8531);
        const c = e => e.some(e => e.shipping_rates.length),
          a = e =>
            (0, o.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(e.total_shipping, 10) + parseInt(e.total_shipping_tax, 10)
              : parseInt(e.total_shipping, 10),
          n = (e, t, r) =>
            !e || (!t && r.some(e => !e.shipping_rates.some(e => !(0, s.jV)(e.method_id))));
      },
      1334: (e, t, r) => {
        'use strict';
        r.d(t, { Y: () => s });
        var o = r(2452);
        const s = (e, t) => (r, s = 10) => {
          const c = o.o1.addEventCallback(e, r, s);
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
        r.d(t, { c: () => s });
        var o = r(2379);
        r(3993);
        const s = async (e, t, r) => {
          const s = (0, o.fK)(e, t),
            c = [];
          for (const e of s)
            try {
              const t = await Promise.resolve(e.callback(r));
              'object' == typeof t && c.push(t);
            } catch (e) {
              console.error(e);
            }
          return !c.length || c;
        };
      },
      2452: (e, t, r) => {
        'use strict';
        r.d(t, { o1: () => s, Ff: () => a });
        let o = (function(e) {
          return (
            (e.ADD_EVENT_CALLBACK = 'add_event_callback'),
            (e.REMOVE_EVENT_CALLBACK = 'remove_event_callback'),
            e
          );
        })({});
        const s = {
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
          a = (e = c, { type: t, eventType: r, id: s, callback: a, priority: n }) => {
            const i = e.hasOwnProperty(r) ? new Map(e[r]) : new Map();
            switch (t) {
              case o.ADD_EVENT_CALLBACK:
                return i.set(s, { priority: n, callback: a }), { ...e, [r]: i };
              case o.REMOVE_EVENT_CALLBACK:
                return i.delete(s), { ...e, [r]: i };
            }
          };
      },
      2379: (e, t, r) => {
        'use strict';
        r.d(t, { fK: () => o, hT: () => s, tG: () => c }), r(3993);
        const o = (e, t) =>
          e[t] ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority) : [];
        let s = (function(e) {
            return (e.SUCCESS = 'success'), (e.FAIL = 'failure'), (e.ERROR = 'error'), e;
          })({}),
          c = (function(e) {
            return (
              (e.CART = 'wc/cart'),
              (e.CHECKOUT = 'wc/checkout'),
              (e.PAYMENTS = 'wc/checkout/payments'),
              (e.EXPRESS_PAYMENTS = 'wc/checkout/express-payments'),
              (e.CONTACT_INFORMATION = 'wc/checkout/contact-information'),
              (e.SHIPPING_ADDRESS = 'wc/checkout/shipping-address'),
              (e.BILLING_ADDRESS = 'wc/checkout/billing-address'),
              (e.SHIPPING_METHODS = 'wc/checkout/shipping-methods'),
              (e.CHECKOUT_ACTIONS = 'wc/checkout/checkout-actions'),
              (e.ORDER_INFORMATION = 'wc/checkout/additional-information'),
              e
            );
          })({});
      },
      8605: (e, t, r) => {
        'use strict';
        r.d(t, { V: () => y });
        var o = r(458),
          s = r.n(o),
          c = r(6087),
          a = r(7594),
          n = r(7143),
          i = r(8537),
          l = r(5683),
          u = r(2663);
        var m = r(4956);
        const p = e => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, n.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
          },
          d = e => {
            ((null != e && e.persisted) ||
              'back_forward' ===
                (window.performance && window.performance.getEntriesByType('navigation').length
                  ? window.performance.getEntriesByType('navigation')[0].type
                  : '')) &&
              (0, n.dispatch)(a.CART_STORE_KEY).invalidateResolutionForStore();
          },
          _ = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          h = {
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
          g = { ...h, email: '' },
          k = {
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
          f = e =>
            Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (0, i.decodeEntities)(t)])),
          w = {
            cartCoupons: a.EMPTY_CART_COUPONS,
            cartItems: a.EMPTY_CART_ITEMS,
            cartFees: a.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: a.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: a.EMPTY_CART_ITEM_ERRORS,
            cartTotals: k,
            cartIsLoading: !0,
            cartErrors: a.EMPTY_CART_ERRORS,
            billingAddress: g,
            shippingAddress: h,
            shippingRates: a.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: a.EMPTY_PAYMENT_METHODS,
            paymentRequirements: a.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: a.EMPTY_EXTENSIONS,
          },
          y = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: r } = (0, u.m)(),
              o = null == r ? void 0 : r.previewCart,
              { shouldSelect: i } = e,
              k = (0, c.useRef)();
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
                  document.body.addEventListener('wc-blocks_added_to_cart', p),
                    document.body.addEventListener('wc-blocks_removed_from_cart', p),
                    window.addEventListener('pageshow', d);
                  const t = (0, m.f2)('added_to_cart', 'wc-blocks_added_to_cart'),
                    r = (0, m.f2)('removed_from_cart', 'wc-blocks_removed_from_cart');
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener('wc-blocks_added_to_cart', p),
                        document.body.removeEventListener('wc-blocks_removed_from_cart', p),
                        window.removeEventListener('pageshow', d),
                        t(),
                        r();
                    });
                })(),
                _
              ),
              [],
            );
            const y = (0, n.useSelect)(
              (e, { dispatch: r }) => {
                if (!i) return w;
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
                    billingData: g,
                    billingAddress: g,
                    shippingAddress: h,
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
                const s = e(a.CART_STORE_KEY),
                  c = s.getCartData(),
                  n = s.getCartErrors(),
                  u = s.getCartTotals(),
                  m = !s.hasFinishedResolution('getCartData'),
                  p = s.isCustomerDataUpdating(),
                  { receiveCart: d, receiveCartContents: _ } = r(a.CART_STORE_KEY),
                  k = f(c.billingAddress),
                  y = c.needsShipping ? f(c.shippingAddress) : k,
                  b = c.fees.length > 0 ? c.fees.map(e => f(e)) : a.EMPTY_CART_FEES;
                return {
                  cartCoupons:
                    c.coupons.length > 0
                      ? c.coupons.map(e => ({ ...e, label: e.code }))
                      : a.EMPTY_CART_COUPONS,
                  cartItems: c.items,
                  crossSellsProducts: c.crossSells,
                  cartFees: b,
                  cartItemsCount: c.itemsCount,
                  cartItemsWeight: c.itemsWeight,
                  cartNeedsPayment: c.needsPayment,
                  cartNeedsShipping: c.needsShipping,
                  cartItemErrors: c.errors,
                  cartTotals: u,
                  cartIsLoading: m,
                  cartErrors: n,
                  billingData: (0, l.TU)(k),
                  billingAddress: (0, l.TU)(k),
                  shippingAddress: (0, l.TU)(y),
                  extensions: c.extensions,
                  shippingRates: c.shippingRates,
                  isLoadingRates: p,
                  cartHasCalculatedShipping: c.hasCalculatedShipping,
                  paymentRequirements: c.paymentRequirements,
                  receiveCart: d,
                  receiveCartContents: _,
                };
              },
              [i],
            );
            return (k.current && s()(k.current, y)) || (k.current = y), k.current;
          };
      },
      4958: (e, t, r) => {
        'use strict';
        r.d(t, { m: () => d });
        var o = r(7594),
          s = r(7143),
          c = r(3993),
          a = r(6087),
          n = r(8531),
          i = r(4621),
          l = r(923),
          u = r.n(l),
          m = r(1229),
          p = r(3603);
        const d = () => {
          const {
              shippingRates: e,
              needsShipping: t,
              hasCalculatedShipping: r,
              isLoadingRates: l,
              isCollectable: d,
              isSelectingRate: _,
            } = (0, s.useSelect)(e => {
              const t = !!e('core/editor'),
                r = e(o.CART_STORE_KEY),
                s = t ? m.B.shipping_rates : r.getShippingRates();
              return {
                shippingRates: s,
                needsShipping: t ? m.B.needs_shipping : r.getNeedsShipping(),
                hasCalculatedShipping: t
                  ? m.B.has_calculated_shipping
                  : r.getHasCalculatedShipping(),
                isLoadingRates: !t && r.isCustomerDataUpdating(),
                isCollectable: s.every(({ shipping_rates: e }) =>
                  e.find(({ method_id: e }) => (0, n.jV)(e)),
                ),
                isSelectingRate: !t && r.isShippingRateBeingSelected(),
              };
            }),
            h = (0, a.useRef)({});
          (0, a.useEffect)(() => {
            const t = (0, i.k)(e);
            (0, c.isObject)(t) && !u()(h.current, t) && (h.current = t);
          }, [e]);
          const { selectShippingRate: g } = (0, s.useDispatch)(o.CART_STORE_KEY),
            k = (0, n.jV)(Object.values(h.current).map(e => e.split(':')[0])),
            { dispatchCheckoutEvent: f } = (0, p.y)(),
            w = (0, a.useCallback)(
              (e, t) => {
                let r;
                void 0 !== e &&
                  ((r = (0, n.jV)(e.split(':')[0]) ? g(e, null) : g(e, t)),
                  r
                    .then(() => {
                      f('set-selected-shipping-rate', { shippingRateId: e });
                    })
                    .catch(e => {
                      (0, o.processErrorResponse)(e);
                    }));
              },
              [g, f],
            );
          return {
            isSelectingRate: _,
            selectedRates: h.current,
            selectShippingRate: w,
            shippingRates: e,
            needsShipping: t,
            hasCalculatedShipping: r,
            isLoadingRates: l,
            isCollectable: d,
            hasSelectedLocalPickup: k,
          };
        };
      },
      3603: (e, t, r) => {
        'use strict';
        r.d(t, { y: () => a });
        var o = r(2619),
          s = r(7143),
          c = r(6087);
        const a = () => ({
          dispatchStoreEvent: (0, c.useCallback)((e, t = {}) => {
            try {
              (0, o.doAction)(`experimental__woocommerce_blocks-${e}`, t);
            } catch (e) {
              console.error(e);
            }
          }, []),
          dispatchCheckoutEvent: (0, c.useCallback)((e, t = {}) => {
            try {
              (0, o.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
                ...t,
                storeCart: (0, s.select)('wc/store/cart').getCartData(),
              });
            } catch (e) {
              console.error(e);
            }
          }, []),
        });
      },
      1614: (e, t, r) => {
        'use strict';
        r.d(t, { H: () => b, E: () => y });
        var o = r(1609),
          s = r(6087),
          c = r(9095),
          a = r(4040),
          n = r.n(a),
          i = r(7143),
          l = r(7594),
          u = r(2452),
          m = r(1334);
        var p = r(2379),
          d = r(3603);
        const _ = {},
          h = {},
          g = () => _,
          k = () => h;
        var f = r(2663);
        const w = (0, s.createContext)({
            onSubmit: () => {},
            onCheckoutAfterProcessingWithSuccess: () => () => {},
            onCheckoutAfterProcessingWithError: () => () => {},
            onCheckoutBeforeProcessing: () => () => {},
            onCheckoutValidationBeforeProcessing: () => () => {},
            onCheckoutSuccess: () => () => {},
            onCheckoutFail: () => () => {},
            onCheckoutValidation: () => () => {},
          }),
          y = () => (0, s.useContext)(w),
          b = ({ children: e, redirectUrl: t }) => {
            const r = g(),
              a = k(),
              { isEditor: _ } = (0, f.m)(),
              { __internalUpdateAvailablePaymentMethods: h } = (0, i.useDispatch)(
                l.PAYMENT_STORE_KEY,
              );
            (0, s.useEffect)(() => {
              (_ || 0 !== Object.keys(r).length || 0 !== Object.keys(a).length) && h();
            }, [_, r, a, h]);
            const {
                __internalSetRedirectUrl: y,
                __internalEmitValidateEvent: b,
                __internalEmitAfterProcessingEvents: E,
                __internalSetBeforeProcessing: v,
              } = (0, i.useDispatch)(l.CHECKOUT_STORE_KEY),
              {
                checkoutRedirectUrl: S,
                checkoutStatus: C,
                isCheckoutBeforeProcessing: T,
                isCheckoutAfterProcessing: O,
                checkoutHasError: R,
                checkoutOrderId: P,
                checkoutOrderNotes: N,
                checkoutCustomerId: A,
              } = (0, i.useSelect)(e => {
                const t = e(l.CHECKOUT_STORE_KEY);
                return {
                  checkoutRedirectUrl: t.getRedirectUrl(),
                  checkoutStatus: t.getCheckoutStatus(),
                  isCheckoutBeforeProcessing: t.isBeforeProcessing(),
                  isCheckoutAfterProcessing: t.isAfterProcessing(),
                  checkoutHasError: t.hasError(),
                  checkoutOrderId: t.getOrderId(),
                  checkoutOrderNotes: t.getOrderNotes(),
                  checkoutCustomerId: t.getCustomerId(),
                };
              });
            t && t !== S && y(t);
            const { setValidationErrors: x } = (0, i.useDispatch)(l.VALIDATION_STORE_KEY),
              { dispatchCheckoutEvent: I } = (0, d.y)(),
              { checkoutNotices: M, paymentNotices: U, expressPaymentNotices: D } = (0,
              i.useSelect)(e => {
                const { getNotices: t } = e('core/notices');
                return {
                  checkoutNotices: Object.values(p.tG)
                    .filter(e => e !== p.tG.PAYMENTS && e !== p.tG.EXPRESS_PAYMENTS)
                    .reduce((e, r) => [...e, ...t(r)], []),
                  paymentNotices: t(p.tG.PAYMENTS),
                  expressPaymentNotices: t(p.tG.EXPRESS_PAYMENTS),
                };
              }, []),
              [j, B] = (0, s.useReducer)(u.Ff, {}),
              H = (0, s.useRef)(j),
              { onCheckoutValidation: K, onCheckoutSuccess: L, onCheckoutFail: V } = (e =>
                (0, s.useMemo)(
                  () => ({
                    onCheckoutSuccess: (0, m.Y)('checkout_success', e),
                    onCheckoutFail: (0, m.Y)('checkout_fail', e),
                    onCheckoutValidation: (0, m.Y)('checkout_validation', e),
                  }),
                  [e],
                ))(B);
            (0, s.useEffect)(() => {
              H.current = j;
            }, [j]);
            const F = (0, s.useMemo)(
                () =>
                  function(...e) {
                    return (
                      n()('onCheckoutBeforeProcessing', {
                        alternative: 'onCheckoutValidation',
                        plugin: 'WooCommerce Blocks',
                      }),
                      K(...e)
                    );
                  },
                [K],
              ),
              Y = (0, s.useMemo)(
                () =>
                  function(...e) {
                    return (
                      n()('onCheckoutValidationBeforeProcessing', {
                        since: '9.7.0',
                        alternative: 'onCheckoutValidation',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      K(...e)
                    );
                  },
                [K],
              ),
              $ = (0, s.useMemo)(
                () =>
                  function(...e) {
                    return (
                      n()('onCheckoutAfterProcessingWithSuccess', {
                        since: '9.7.0',
                        alternative: 'onCheckoutSuccess',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      L(...e)
                    );
                  },
                [L],
              ),
              z = (0, s.useMemo)(
                () =>
                  function(...e) {
                    return (
                      n()('onCheckoutAfterProcessingWithError', {
                        since: '9.7.0',
                        alternative: 'onCheckoutFail',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      V(...e)
                    );
                  },
                [V],
              );
            (0, s.useEffect)(() => {
              T && b({ observers: H.current, setValidationErrors: x });
            }, [T, x, b]);
            const W = (0, c.Z)(C),
              q = (0, c.Z)(R);
            (0, s.useEffect)(() => {
              (C === W && R === q) ||
                (O &&
                  E({
                    observers: H.current,
                    notices: { checkoutNotices: M, paymentNotices: U, expressPaymentNotices: D },
                  }));
            }, [C, R, S, P, A, N, O, T, W, q, M, D, U, b, E]);
            const G = {
              onSubmit: (0, s.useCallback)(() => {
                I('submit'), v();
              }, [I, v]),
              onCheckoutBeforeProcessing: F,
              onCheckoutValidationBeforeProcessing: Y,
              onCheckoutAfterProcessingWithSuccess: $,
              onCheckoutAfterProcessingWithError: z,
              onCheckoutSuccess: L,
              onCheckoutFail: V,
              onCheckoutValidation: K,
            };
            return (0, o.createElement)(w.Provider, { value: G }, e);
          };
      },
      587: (e, t, r) => {
        'use strict';
        r.d(t, { nE: () => c });
        var o = r(6087),
          s = r(1334);
        const c = e =>
          (0, o.useMemo)(() => ({ onPaymentSetup: (0, s.Y)('payment_setup', e) }), [e]);
      },
      8465: (e, t, r) => {
        'use strict';
        r.d(t, { e: () => p, n: () => d });
        var o = r(1609),
          s = r(6087),
          c = r(7143),
          a = r(7594),
          n = r(4040),
          i = r.n(n),
          l = r(2452),
          u = r(587);
        const m = (0, s.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          p = () => (0, s.useContext)(m),
          d = ({ children: e }) => {
            const { isProcessing: t, isIdle: r, isCalculating: n, hasError: p } = (0, c.useSelect)(
                e => {
                  const t = e(a.CHECKOUT_STORE_KEY);
                  return {
                    isProcessing: t.isProcessing(),
                    isIdle: t.isIdle(),
                    hasError: t.hasError(),
                    isCalculating: t.isCalculating(),
                  };
                },
              ),
              { isPaymentReady: d } = (0, c.useSelect)(e => {
                const t = e(a.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: _ } = (0, c.useDispatch)(a.VALIDATION_STORE_KEY),
              [h, g] = (0, s.useReducer)(l.Ff, {}),
              { onPaymentSetup: k } = (0, u.nE)(g),
              f = (0, s.useRef)(h);
            (0, s.useEffect)(() => {
              f.current = h;
            }, [h]);
            const {
              __internalSetPaymentProcessing: w,
              __internalSetPaymentIdle: y,
              __internalEmitPaymentProcessingEvent: b,
            } = (0, c.useDispatch)(a.PAYMENT_STORE_KEY);
            (0, s.useEffect)(() => {
              !t || p || n || (w(), b(f.current, _));
            }, [t, p, n, w, b, _]),
              (0, s.useEffect)(() => {
                r && !d && y();
              }, [r, d, y]),
              (0, s.useEffect)(() => {
                p && d && y();
              }, [p, d, y]);
            const E = {
              onPaymentProcessing: (0, s.useMemo)(
                () =>
                  function(...e) {
                    return (
                      i()('onPaymentProcessing', {
                        alternative: 'onPaymentSetup',
                        plugin: 'WooCommerce Blocks',
                      }),
                      k(...e)
                    );
                  },
                [k],
              ),
              onPaymentSetup: k,
            };
            return (0, o.createElement)(m.Provider, { value: E }, e);
          };
      },
      5353: (e, t, r) => {
        'use strict';
        r.d(t, { o: () => T, H: () => C });
        var o = r(1609),
          s = r(6087),
          c = r(7143),
          a = r(7594);
        const n = { NONE: 'none', INVALID_ADDRESS: 'invalid_address', UNKNOWN: 'unknown_error' },
          i = {
            INVALID_COUNTRY: 'woocommerce_rest_cart_shipping_rates_invalid_country',
            MISSING_COUNTRY: 'woocommerce_rest_cart_shipping_rates_missing_country',
            INVALID_STATE: 'woocommerce_rest_cart_shipping_rates_invalid_state',
          },
          l = {
            shippingErrorStatus: {
              isPristine: !0,
              isValid: !1,
              hasInvalidAddress: !1,
              hasError: !1,
            },
            dispatchErrorStatus: e => e,
            shippingErrorTypes: n,
            onShippingRateSuccess: () => () => {},
            onShippingRateFail: () => () => {},
            onShippingRateSelectSuccess: () => () => {},
            onShippingRateSelectFail: () => () => {},
          },
          u = (e, { type: t }) => (Object.values(n).includes(t) ? t : e);
        var m = r(2452),
          p = r(1334);
        const d = 'shipping_rates_success',
          _ = 'shipping_rates_fail',
          h = 'shipping_rate_select_success',
          g = 'shipping_rate_select_fail',
          k = e => ({
            onSuccess: (0, p.Y)(d, e),
            onFail: (0, p.Y)(_, e),
            onSelectSuccess: (0, p.Y)(h, e),
            onSelectFail: (0, p.Y)(g, e),
          });
        var f = r(8969),
          w = r(8605),
          y = r(4958);
        const { NONE: b, INVALID_ADDRESS: E, UNKNOWN: v } = n,
          S = (0, s.createContext)(l),
          C = () => (0, s.useContext)(S),
          T = ({ children: e }) => {
            const { __internalIncrementCalculating: t, __internalDecrementCalculating: r } = (0,
              c.useDispatch)(a.CHECKOUT_STORE_KEY),
              { shippingRates: l, isLoadingRates: p, cartErrors: C } = (0, w.V)(),
              { selectedRates: T, isSelectingRate: O } = (0, y.m)(),
              [R, P] = (0, s.useReducer)(u, b),
              [N, A] = (0, s.useReducer)(m.Ff, {}),
              x = (0, s.useRef)(N),
              I = (0, s.useMemo)(
                () => ({
                  onShippingRateSuccess: k(A).onSuccess,
                  onShippingRateFail: k(A).onFail,
                  onShippingRateSelectSuccess: k(A).onSelectSuccess,
                  onShippingRateSelectFail: k(A).onSelectFail,
                }),
                [A],
              );
            (0, s.useEffect)(() => {
              x.current = N;
            }, [N]),
              (0, s.useEffect)(() => {
                p ? t() : r();
              }, [p, t, r]),
              (0, s.useEffect)(() => {
                O ? t() : r();
              }, [t, r, O]),
              (0, s.useEffect)(() => {
                C.length > 0 && C.some(e => !(!e.code || !Object.values(i).includes(e.code)))
                  ? P({ type: E })
                  : P({ type: b });
              }, [C]);
            const M = (0, s.useMemo)(
              () => ({
                isPristine: R === b,
                isValid: R === b,
                hasInvalidAddress: R === E,
                hasError: R === v || R === E,
              }),
              [R],
            );
            (0, s.useEffect)(() => {
              p ||
                (0 !== l.length && !M.hasError) ||
                (0, f.c)(x.current, _, {
                  hasInvalidAddress: M.hasInvalidAddress,
                  hasError: M.hasError,
                });
            }, [l, p, M.hasError, M.hasInvalidAddress]),
              (0, s.useEffect)(() => {
                !p && l.length > 0 && !M.hasError && (0, f.c)(x.current, d, l);
              }, [l, p, M.hasError]),
              (0, s.useEffect)(() => {
                O ||
                  (M.hasError
                    ? (0, f.c)(x.current, g, {
                        hasError: M.hasError,
                        hasInvalidAddress: M.hasInvalidAddress,
                      })
                    : (0, f.c)(x.current, h, T.current));
              }, [T, O, M.hasError, M.hasInvalidAddress]);
            const U = {
              shippingErrorStatus: M,
              dispatchErrorStatus: P,
              shippingErrorTypes: n,
              ...I,
            };
            return (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(S.Provider, { value: U }, e),
            );
          };
      },
      2592: (e, t, r) => {
        'use strict';
        r.d(t, { G: () => l, u: () => u });
        var o = r(1609),
          s = r(6087),
          c = r(3670),
          a = r(9019),
          n = r.n(a);
        const i = (0, s.createContext)({
            hasContainerWidth: !1,
            containerClassName: '',
            isMobile: !1,
            isSmall: !1,
            isMedium: !1,
            isLarge: !1,
          }),
          l = () => (0, s.useContext)(i),
          u = ({ children: e, className: t = '' }) => {
            const [r, s] = (0, c.B)(),
              a = {
                hasContainerWidth: '' !== s,
                containerClassName: s,
                isMobile: 'is-mobile' === s,
                isSmall: 'is-small' === s,
                isMedium: 'is-medium' === s,
                isLarge: 'is-large' === s,
              };
            return (0, o.createElement)(
              i.Provider,
              { value: a },
              (0, o.createElement)('div', { className: n()(t, s) }, r, e),
            );
          };
      },
      2663: (e, t, r) => {
        'use strict';
        r.d(t, { m: () => c }), r(1609);
        var o = r(6087);
        r(7143);
        const s = (0, o.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: '',
            previewData: {},
            getPreviewData: () => ({}),
          }),
          c = () => (0, o.useContext)(s);
      },
      3670: (e, t, r) => {
        'use strict';
        r.d(t, { B: () => s });
        var o = r(9491);
        const s = () => {
          const [e, { width: t }] = (0, o.useResizeObserver)();
          let r = '';
          return (
            t > 700
              ? (r = 'is-large')
              : t > 520
              ? (r = 'is-medium')
              : t > 400
              ? (r = 'is-small')
              : t && (r = 'is-mobile'),
            [e, r]
          );
        };
      },
      9095: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => s });
        var o = r(6087);
        function s(e, t) {
          const r = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              r.current === e || (t && !t(e, r.current)) || (r.current = e);
            }, [e, t]),
            r.current
          );
        }
      },
      5683: (e, t, r) => {
        'use strict';
        r.d(t, { KY: () => m, TU: () => i, i0: () => u, ln: () => l });
        var o = r(8585),
          s = (r(3832), r(3993)),
          c = r(8537),
          a = r(812);
        const n = (e, t) => e in t,
          i = e => {
            const t = (0, o.A)(a.Hw, {}, e.country),
              r = Object.assign({}, e);
            return (
              t.forEach(({ key: t = '', hidden: o = !1 }) => {
                o && n(t, e) && (r[t] = '');
              }),
              r
            );
          },
          l = e => {
            const t = (0, o.A)(a.Hw, {}, e.country),
              r = Object.assign({}, e);
            return (
              t.forEach(({ key: t = '' }) => {
                'country' !== t && 'state' !== t && n(t, e) && (r[t] = '');
              }),
              r
            );
          },
          u = e => {
            if (0 === Object.values(e).length) return null;
            const t = (0, s.isString)(a.G3[e.country])
                ? (0, c.decodeEntities)(a.G3[e.country])
                : '',
              r =
                (0, s.isObject)(a.SL[e.country]) && (0, s.isString)(a.SL[e.country][e.state])
                  ? (0, c.decodeEntities)(a.SL[e.country][e.state])
                  : e.state,
              o = [];
            o.push(e.postcode.toUpperCase()), o.push(e.city), o.push(r), o.push(t);
            return o.filter(Boolean).join(', ') || null;
          },
          m = e =>
            !!e.country &&
            (0, o.A)(a.Hw, {}, e.country).every(
              ({ key: t = '', hidden: r = !1, required: o = !1 }) =>
                !(!r && o) || (n(t, e) && '' !== e[t]),
            );
      },
      7524: (e, t, r) => {
        'use strict';
        r.d(t, { Jq: () => c, jj: () => a });
        var o = r(7723),
          s = r(7143);
        (0, o.__)('Something went wrong. Please contact us to get assistance.', 'woocommerce');
        const c = () => {
            const e = (0, s.select)('wc/store/store-notices').getRegisteredContainers(),
              { removeNotice: t } = (0, s.dispatch)('core/notices'),
              { getNotices: r } = (0, s.select)('core/notices');
            e.forEach(e => {
              r(e).forEach(r => {
                t(r.id, e);
              });
            });
          },
          a = e => {
            const { removeNotice: t } = (0, s.dispatch)('core/notices'),
              { getNotices: r } = (0, s.select)('core/notices');
            r(e).forEach(r => {
              t(r.id, e);
            });
          };
      },
      4621: (e, t, r) => {
        'use strict';
        r.d(t, { k: () => o });
        const o = e =>
          Object.fromEntries(
            e.map(({ package_id: e, shipping_rates: t }) => {
              var r;
              return [
                e,
                (null === (r = t.find(e => e.selected)) || void 0 === r ? void 0 : r.rate_id) || '',
              ];
            }),
          );
      },
      4956: (e, t, r) => {
        'use strict';
        r.d(t, { f2: () => s });
        const o = window.CustomEvent || null,
          s = (e, t, r = !1, s = !1) => {
            if ('function' != typeof jQuery) return () => {};
            const c = () => {
              ((e, { bubbles: t = !1, cancelable: r = !1, element: s, detail: c = {} }) => {
                if (!o) return;
                s || (s = document.body);
                const a = new o(e, { bubbles: t, cancelable: r, detail: c });
                s.dispatchEvent(a);
              })(t, { bubbles: r, cancelable: s });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          };
      },
      8531: (e, t, r) => {
        'use strict';
        r.d(t, { J_: () => n, Lb: () => l, T4: () => c, jV: () => i });
        var o = r(5703),
          s = r(812);
        const c = e => e.length,
          a = (0, o.getSetting)('collectableMethodIds', []),
          n = e => a.includes(e.method_id),
          i = e => !!s.F7 && (Array.isArray(e) ? !!e.find(e => a.includes(e)) : a.includes(e)),
          l = e =>
            e.reduce(function(e, t) {
              return e + t.shipping_rates.length;
            }, 0);
      },
      9292: (e, t, r) => {
        'use strict';
        r.d(t, { LP: () => s, Oy: () => c });
        var o = r(6087);
        const s = (0, o.createContext)({
            showCompanyField: !1,
            requireCompanyField: !1,
            showApartmentField: !1,
            requireApartmentField: !1,
            showPhoneField: !1,
            requirePhoneField: !1,
            showOrderNotes: !0,
            showPolicyLinks: !0,
            showReturnToCart: !0,
            cartPageId: 0,
            showRateAfterTaxName: !1,
            showFormStepNumbers: !1,
          }),
          c =
            ((0, o.createContext)({ addressFieldControls: () => null }),
            () => (0, o.useContext)(s));
      },
      3959: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(6087);
        const s = (e, t) => {
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
        var c = r(8605),
          a = r(7143),
          n = r(7594),
          i = r(4083),
          l = r(1609),
          u = r(2294),
          m = r(7723),
          p = r(812);
        const d = ({
          imageUrl: e = `${p.sW}/block-error.svg`,
          header: t = (0, m.__)('Oops!', 'woocommerce'),
          text: r = (0, m.__)('There was an error loading the content.', 'woocommerce'),
          errorMessage: o,
          errorMessagePrefix: s = (0, m.__)('Error:', 'woocommerce'),
          button: c,
          showErrorBlock: a = !0,
        }) =>
          a
            ? (0, l.createElement)(
                'div',
                { className: 'wc-block-error wc-block-components-error' },
                e &&
                  (0, l.createElement)('img', {
                    className: 'wc-block-error__image wc-block-components-error__image',
                    src: e,
                    alt: '',
                  }),
                (0, l.createElement)(
                  'div',
                  { className: 'wc-block-error__content wc-block-components-error__content' },
                  t &&
                    (0, l.createElement)(
                      'p',
                      { className: 'wc-block-error__header wc-block-components-error__header' },
                      t,
                    ),
                  r &&
                    (0, l.createElement)(
                      'p',
                      { className: 'wc-block-error__text wc-block-components-error__text' },
                      r,
                    ),
                  o &&
                    (0, l.createElement)(
                      'p',
                      { className: 'wc-block-error__message wc-block-components-error__message' },
                      s ? s + ' ' : '',
                      o,
                    ),
                  c &&
                    (0, l.createElement)(
                      'p',
                      { className: 'wc-block-error__button wc-block-components-error__button' },
                      c,
                    ),
                ),
              )
            : null;
        r(9407);
        class _ extends o.Component {
          constructor(...e) {
            super(...e), (0, u.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, l.createElement)(
                    l.Fragment,
                    null,
                    (0, l.createElement)('strong', null, e.status),
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
                showErrorBlock: o = !0,
                text: s,
                errorMessagePrefix: c,
                renderError: a,
                button: n,
              } = this.props,
              { errorMessage: i, hasError: u } = this.state;
            return u
              ? 'function' == typeof a
                ? a({ errorMessage: i })
                : (0, l.createElement)(d, {
                    showErrorBlock: o,
                    errorMessage: r ? i : null,
                    header: e,
                    imageUrl: t,
                    text: s,
                    errorMessagePrefix: c,
                    button: n,
                  })
              : this.props.children;
          }
        }
        const h = _,
          g = ['.wp-block-woocommerce-cart'],
          k = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: s = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, c) => {
                const a = r(t, c),
                  n = s(t, c),
                  i = { ...t.dataset, ...(a.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: s = {},
                  errorBoundaryProps: c = {},
                }) => {
                  (0, o.render)(
                    (0, l.createElement)(
                      h,
                      { ...c },
                      (0, l.createElement)(
                        o.Suspense,
                        {
                          fallback: (0, l.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, l.createElement)(e, { ...s, attributes: r }),
                      ),
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: t, props: a, attributes: i, errorBoundaryProps: n });
              });
          },
          f = e => {
            const t = document.body.querySelectorAll(g.join(',')),
              { Block: r, getProps: o, getErrorBoundaryProps: s, selector: c } = e;
            (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: o, wrappers: s }) => {
              const c = document.body.querySelectorAll(o);
              s &&
                s.length > 0 &&
                Array.prototype.filter.call(
                  c,
                  e =>
                    !((e, t) =>
                      Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(e, s),
                ),
                k({ Block: e, containers: c, getProps: t, getErrorBoundaryProps: r });
            })({ Block: r, getProps: o, getErrorBoundaryProps: s, selector: c, wrappers: t }),
              Array.prototype.forEach.call(t, t => {
                t.addEventListener('wc-blocks_render_blocks_frontend', () => {
                  (({
                    Block: e,
                    getProps: t,
                    getErrorBoundaryProps: r,
                    selector: o,
                    wrapper: s,
                  }) => {
                    const c = s.querySelectorAll(o);
                    k({ Block: e, containers: c, getProps: t, getErrorBoundaryProps: r });
                  })({ ...e, wrapper: t });
                });
              });
          };
        var w = r(5703),
          y = r(4332),
          b = r(1e3);
        const E = (e, t) => (e && t[e] ? t[e] : null),
          v = ({ block: e, blockMap: t, blockWrapper: r, children: s, depth: c = 1 }) =>
            s && 0 !== s.length
              ? Array.from(s).map((s, a) => {
                  const { blockName: n = '', ...i } = {
                      ...(s instanceof HTMLElement ? s.dataset : {}),
                      className: s instanceof Element ? (null == s ? void 0 : s.className) : '',
                    },
                    u = `${e}_${c}_${a}`,
                    m = E(n, t);
                  if (!m) {
                    const a = (0, y.Ay)(
                      (s instanceof Element && (null == s ? void 0 : s.outerHTML)) ||
                        (null == s ? void 0 : s.textContent) ||
                        '',
                    );
                    if ('string' == typeof a && a) return a;
                    if (!(0, o.isValidElement)(a)) return null;
                    const n = s.childNodes.length
                      ? v({
                          block: e,
                          blockMap: t,
                          children: s.childNodes,
                          depth: c + 1,
                          blockWrapper: r,
                        })
                      : void 0;
                    return n
                      ? (0, o.cloneElement)(
                          a,
                          { key: u, ...((null == a ? void 0 : a.props) || {}) },
                          n,
                        )
                      : (0, o.cloneElement)(a, {
                          key: u,
                          ...((null == a ? void 0 : a.props) || {}),
                        });
                  }
                  const p = r || o.Fragment;
                  return (0, l.createElement)(
                    o.Suspense,
                    {
                      key: `${e}_${c}_${a}_suspense`,
                      fallback: (0, l.createElement)('div', { className: 'wc-block-placeholder' }),
                    },
                    (0, l.createElement)(
                      h,
                      {
                        text: `Unexpected error in: ${n}`,
                        showErrorBlock: w.CURRENT_USER_IS_ADMIN,
                      },
                      (0, l.createElement)(
                        p,
                        null,
                        (0, l.createElement)(
                          m,
                          { key: u, ...i },
                          v({
                            block: e,
                            blockMap: t,
                            children: s.childNodes,
                            depth: c + 1,
                            blockWrapper: r,
                          }),
                          ((e, t, r, s) => {
                            if (!(0, b.hasInnerBlocks)(e)) return null;
                            const c = r
                                ? Array.from(r)
                                    .map(
                                      e =>
                                        (e instanceof HTMLElement &&
                                          (null == e ? void 0 : e.dataset.blockName)) ||
                                        null,
                                    )
                                    .filter(Boolean)
                                : [],
                              a = (0, b.getRegisteredBlocks)(e).filter(
                                ({ blockName: e, force: t }) => !0 === t && !c.includes(e),
                              ),
                              n = s || o.Fragment;
                            return (0, l.createElement)(
                              o.Fragment,
                              null,
                              a.map(({ blockName: e, component: r }, o) => {
                                const s = r || E(e, t);
                                return s
                                  ? (0, l.createElement)(
                                      h,
                                      {
                                        key: `${e}_blockerror`,
                                        text: `Unexpected error in: ${e}`,
                                        showErrorBlock: w.CURRENT_USER_IS_ADMIN,
                                      },
                                      (0, l.createElement)(
                                        n,
                                        null,
                                        (0, l.createElement)(s, { key: `${e}_forced_${o}` }),
                                      ),
                                    )
                                  : null;
                              }),
                            );
                          })(n, t, s.childNodes, r),
                        ),
                      ),
                    ),
                  );
                })
              : null,
          S = JSON.parse(
            '{"name":"woocommerce/checkout-actions-block","version":"1.0.0","title":"Actions","description":"Allow customers to place their order.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          C = JSON.parse(
            '{"name":"woocommerce/checkout-additional-information-block","version":"1.0.0","title":"Additional information","description":"Render additional fields in the \'Additional information\' location.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          T = JSON.parse(
            '{"name":"woocommerce/checkout-billing-address-block","version":"1.0.0","title":"Billing Address","description":"Collect your customer\'s billing address.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          O = JSON.parse(
            '{"name":"woocommerce/checkout-contact-information-block","version":"1.0.0","title":"Contact Information","description":"Collect your customer\'s contact information.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          R = JSON.parse(
            '{"name":"woocommerce/checkout-express-payment-block","version":"1.0.0","title":"Express Checkout","description":"Allow customers to breeze through with quick payment options.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          P = JSON.parse(
            '{"name":"woocommerce/checkout-fields-block","version":"1.0.0","title":"Checkout Fields","description":"Column containing checkout address fields.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          N = JSON.parse(
            '{"name":"woocommerce/checkout-order-note-block","version":"1.0.0","title":"Order Note","description":"Allow customers to add a note to their order.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":false,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          A = JSON.parse(
            '{"name":"woocommerce/checkout-payment-block","version":"1.0.0","title":"Payment Options","description":"Payment options for your store.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          x = JSON.parse(
            '{"name":"woocommerce/checkout-shipping-address-block","version":"1.0.0","title":"Shipping Address","description":"Collect your customer\'s shipping address.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
          ),
          I = {
            CHECKOUT_ACTIONS: S,
            CHECKOUT_ORDER_INFORMATION: C,
            CHECKOUT_BILLING_ADDRESS: T,
            CHECKOUT_CONTACT_INFORMATION: O,
            CHECKOUT_EXPRESS_PAYMENT: R,
            CHECKOUT_FIELDS: P,
            CHECKOUT_ORDER_NOTE: N,
            CHECKOUT_PAYMENT: A,
            CHECKOUT_SHIPPING_METHOD: JSON.parse(
              '{"name":"woocommerce/checkout-shipping-method-block","version":"1.0.0","title":"Delivery","description":"Select between shipping or local pickup.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_SHIPPING_ADDRESS: x,
            CHECKOUT_SHIPPING_METHODS: JSON.parse(
              '{"name":"woocommerce/checkout-shipping-methods-block","version":"1.0.0","title":"Shipping Options","description":"Display shipping options and rates for your store.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_PICKUP_LOCATION: JSON.parse(
              '{"name":"woocommerce/checkout-pickup-options-block","version":"1.0.0","title":"Pickup Method","description":"Shows local pickup locations.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_TERMS: JSON.parse(
              '{"name":"woocommerce/checkout-terms-block","version":"1.0.0","title":"Terms and Conditions","description":"Ensure that customers agree to your Terms & Conditions and Privacy Policy.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"checkbox":{"type":"boolean","default":false},"text":{"type":"string","required":false}},"parent":["woocommerce/checkout-fields-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_TOTALS: JSON.parse(
              '{"name":"woocommerce/checkout-totals-block","version":"1.0.0","title":"Checkout Totals","description":"Column containing the checkout totals.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"checkbox":{"type":"boolean","default":false},"text":{"type":"string","required":false}},"parent":["woocommerce/checkout"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-block","version":"1.0.0","title":"Order Summary","description":"Show customers a summary of their order.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true}}},"parent":["woocommerce/checkout-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_SUBTOTAL: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-subtotal-block","version":"1.0.0","title":"Subtotal","description":"Shows the cart subtotal row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_FEE: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-fee-block","version":"1.0.0","title":"Fees","description":"Shows the cart fee row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_DISCOUNT: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-discount-block","version":"1.0.0","title":"Discount","description":"Shows the cart discount row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_SHIPPING: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-shipping-block","version":"1.0.0","title":"Shipping","description":"Shows the cart shipping row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_COUPON_FORM: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-coupon-form-block","version":"1.0.0","title":"Coupon Form","description":"Shows the apply coupon form.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":false,"move":false}}},"parent":["woocommerce/checkout-order-summary-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_TAXES: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-taxes-block","version":"1.0.0","title":"Taxes","description":"Shows the cart taxes row.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":true}}},"parent":["woocommerce/checkout-order-summary-totals-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_CART_ITEMS: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-cart-items-block","version":"1.0.0","title":"Cart Items","description":"Shows cart items.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-order-summary-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
            CHECKOUT_ORDER_SUMMARY_TOTALS: JSON.parse(
              '{"name":"woocommerce/checkout-order-summary-totals-block","version":"1.0.0","title":"Totals","description":"Shows the subtotal, fees, discounts, shipping and taxes.","category":"woocommerce","supports":{"align":false,"html":false,"multiple":false,"reusable":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"lock":{"type":"object","default":{"remove":true,"move":false}}},"parent":["woocommerce/checkout-order-summary-block"],"textdomain":"woocommerce","$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2}',
            ),
          };
        (r.p = p.XK),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_FIELDS,
            component: (0, o.lazy)(() => r.e(8330).then(r.bind(r, 4183))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_EXPRESS_PAYMENT,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(3574)]).then(r.bind(r, 1678))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_CONTACT_INFORMATION,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(3398)]).then(r.bind(r, 6994))),
          }),
          p.F7 &&
            ((0, b.registerCheckoutBlock)({
              metadata: I.CHECKOUT_SHIPPING_METHOD,
              component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(9319)]).then(r.bind(r, 5239))),
            }),
            (0, b.registerCheckoutBlock)({
              metadata: I.CHECKOUT_PICKUP_LOCATION,
              component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(3024)]).then(r.bind(r, 6160))),
            })),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_SHIPPING_ADDRESS,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(636)]).then(r.bind(r, 7275))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_BILLING_ADDRESS,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(4037)]).then(r.bind(r, 9463))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_SHIPPING_METHODS,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(5806)]).then(r.bind(r, 3701))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_PAYMENT,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(6073)]).then(r.bind(r, 3727))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_INFORMATION,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(2227)]).then(r.bind(r, 7912))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_NOTE,
            component: (0, o.lazy)(() => r.e(552).then(r.bind(r, 6094))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_TERMS,
            component: (0, o.lazy)(() => r.e(4654).then(r.bind(r, 6564))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ACTIONS,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(3982)]).then(r.bind(r, 4794))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_TOTALS,
            component: (0, o.lazy)(() => r.e(8268).then(r.bind(r, 5455))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(12)]).then(r.bind(r, 3370))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_CART_ITEMS,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(3644)]).then(r.bind(r, 8593))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_SUBTOTAL,
            component: (0, o.lazy)(() => r.e(133).then(r.bind(r, 316))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_FEE,
            component: (0, o.lazy)(() => r.e(9691).then(r.bind(r, 8118))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_DISCOUNT,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(2996)]).then(r.bind(r, 1533))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_COUPON_FORM,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(6382)]).then(r.bind(r, 747))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_SHIPPING,
            component: (0, o.lazy)(() => Promise.all([r.e(94), r.e(8127)]).then(r.bind(r, 4722))),
          }),
          (0, b.registerCheckoutBlock)({
            metadata: I.CHECKOUT_ORDER_SUMMARY_TAXES,
            component: (0, o.lazy)(() => r.e(4e3).then(r.bind(r, 4507))),
          });
        var M = r(9019),
          U = r.n(M),
          D = r(8156),
          j = r(8531),
          B = r(3993),
          H = r(4958),
          K = r(2379);
        const L = window.wp.plugins;
        var V = r(8465),
          F = r(5353),
          Y = r(1614);
        const $ = window.wp.apiFetch;
        var z = r.n($),
          W = r(7524),
          q = r(5683);
        const G = (e, t, r) => {
            const o = Object.keys(e).map(t => ({ key: t, value: e[t] }), []),
              s = `wc-${r}-new-payment-method`;
            return o.push({ key: s, value: t }), o;
          },
          J = e => {
            if (!e) return;
            const { __internalSetCustomerId: t } = (0, a.dispatch)(n.CHECKOUT_STORE_KEY);
            z().setNonce && 'function' == typeof z().setNonce && z().setNonce(e),
              null != e && e.get('User-ID') && t(parseInt(e.get('User-ID') || '0', 10));
          },
          X = () => {
            const { onCheckoutValidation: e } = (0, Y.E)(),
              {
                hasError: t,
                redirectUrl: r,
                isProcessing: s,
                isBeforeProcessing: l,
                isComplete: u,
                orderNotes: p,
                shouldCreateAccount: d,
                extensionData: _,
                customerId: h,
                additionalFields: g,
              } = (0, a.useSelect)(e => {
                const t = e(n.CHECKOUT_STORE_KEY);
                return {
                  hasError: t.hasError(),
                  redirectUrl: t.getRedirectUrl(),
                  isProcessing: t.isProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  orderNotes: t.getOrderNotes(),
                  shouldCreateAccount: t.getShouldCreateAccount(),
                  extensionData: t.getExtensionData(),
                  customerId: t.getCustomerId(),
                  additionalFields: t.getAdditionalFields(),
                };
              }),
              { __internalSetHasError: k, __internalProcessCheckoutResponse: f } = (0,
              a.useDispatch)(n.CHECKOUT_STORE_KEY),
              w = (0, a.useSelect)(e => e(n.VALIDATION_STORE_KEY).hasValidationErrors),
              { shippingErrorStatus: y } = (0, F.H)(),
              { billingAddress: b, shippingAddress: E } = (0, a.useSelect)(e =>
                e(n.CART_STORE_KEY).getCustomerData(),
              ),
              { cartNeedsPayment: v, cartNeedsShipping: S, receiveCartContents: C } = (0, c.V)(),
              {
                activePaymentMethod: T,
                paymentMethodData: O,
                isExpressPaymentMethodActive: R,
                hasPaymentError: P,
                isPaymentReady: N,
                shouldSavePayment: A,
              } = (0, a.useSelect)(e => {
                const t = e(n.PAYMENT_STORE_KEY);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                  isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
                  hasPaymentError: t.hasPaymentError(),
                  isPaymentReady: t.isPaymentReady(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }, []),
              x = (0, i.getPaymentMethods)(),
              I = (0, i.getExpressPaymentMethods)(),
              M = (0, o.useRef)(b),
              U = (0, o.useRef)(E),
              D = (0, o.useRef)(r),
              [j, H] = (0, o.useState)(!1),
              K = (0, o.useMemo)(() => {
                var e;
                const t = { ...I, ...x };
                return null == t || null === (e = t[T]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [T, I, x]),
              L = (w() && !R) || P || y.hasError,
              V = !t && !L && (N || !v) && s;
            (0, o.useEffect)(() => {
              L === t || (!s && !l) || R || k(L);
            }, [L, t, s, l, R, k]),
              (0, o.useEffect)(() => {
                (M.current = b), (U.current = E), (D.current = r);
              }, [b, E, r]);
            const $ = (0, o.useCallback)(
              () =>
                w()
                  ? void 0 !==
                      (0, a.select)(n.VALIDATION_STORE_KEY).getValidationError(
                        'shipping-rates-error',
                      ) && {
                      errorMessage: (0, m.__)(
                        'Sorry, this order requires a shipping option.',
                        'woocommerce',
                      ),
                    }
                  : P
                  ? {
                      errorMessage: (0, m.__)(
                        'There was a problem with your payment option.',
                        'woocommerce',
                      ),
                      context: 'wc/checkout/payments',
                    }
                  : !y.hasError || {
                      errorMessage: (0, m.__)(
                        'There was a problem with your shipping option.',
                        'woocommerce',
                      ),
                      context: 'wc/checkout/shipping-methods',
                    },
              [w, P, y.hasError],
            );
            (0, o.useEffect)(() => {
              let t;
              return (
                R || (t = e($, 0)),
                () => {
                  R || 'function' != typeof t || t();
                }
              );
            }, [e, $, R]),
              (0, o.useEffect)(() => {
                D.current && (window.location.href = D.current);
              }, [u]);
            const X = (0, o.useCallback)(async () => {
              if (j) return;
              H(!0), (0, W.Jq)();
              const e = v ? { payment_method: K, payment_data: G(O, A, T) } : {},
                t = {
                  shipping_address: S ? (0, q.TU)(U.current) : void 0,
                  billing_address: (0, q.TU)(M.current),
                  additional_fields: g,
                  customer_note: p,
                  create_account: d,
                  ...e,
                  extensions: { ..._ },
                };
              z()({
                path: '/wc/store/v1/checkout',
                method: 'POST',
                data: t,
                cache: 'no-store',
                parse: !1,
              })
                .then(e => {
                  if (((0, B.assertResponseIsValid)(e), J(e.headers), !e.ok)) throw e;
                  return e.json();
                })
                .then(e => {
                  f(e), H(!1);
                })
                .catch(e => {
                  J(null == e ? void 0 : e.headers);
                  try {
                    e.json()
                      .then(e => e)
                      .then(e => {
                        var t;
                        null !== (t = e.data) && void 0 !== t && t.cart && C(e.data.cart),
                          (0, n.processErrorResponse)(e),
                          f(e);
                      });
                  } catch {
                    let e = (0, m.__)(
                      'Something went wrong when placing the order. Check your email for order updates before retrying.',
                      'woocommerce',
                    );
                    0 !== h &&
                      (e = (0, m.__)(
                        "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                        'woocommerce',
                      )),
                      (0, n.processErrorResponse)({
                        code: 'unknown_error',
                        message: e,
                        data: null,
                      });
                  }
                  k(!0), H(!1);
                });
            }, [j, v, K, O, A, T, p, d, _, g, S, C, k, f]);
            return (
              (0, o.useEffect)(() => {
                V && !j && X();
              }, [X, V, j]),
              null
            );
          },
          Z = ({ children: e, redirectUrl: t }) =>
            (0, l.createElement)(
              Y.H,
              { redirectUrl: t },
              (0, l.createElement)(
                F.o,
                null,
                (0, l.createElement)(
                  V.n,
                  null,
                  e,
                  (0, l.createElement)(
                    h,
                    { renderError: w.CURRENT_USER_IS_ADMIN ? null : () => null },
                    (0, l.createElement)(L.PluginArea, { scope: 'woocommerce-checkout' }),
                  ),
                  (0, l.createElement)(X, null),
                ),
              ),
            );
        var Q = r(2592);
        r(1221);
        const ee = ({ children: e, className: t }) =>
          (0, l.createElement)(Q.u, { className: U()('wc-block-components-sidebar-layout', t) }, e);
        var te = r(4656);
        r(3135);
        const re = e => {
          if (!e) return;
          const t = e.getBoundingClientRect().bottom;
          (t >= 0 && t <= window.innerHeight) || e.scrollIntoView();
        };
        r(4229);
        var oe = r(5573);
        const se = (0, l.createElement)(
          oe.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, l.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
          (0, l.createElement)('path', {
            d:
              'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
          }),
        );
        var ce = r(7104);
        r(3465);
        const ae = () =>
            (0, l.createElement)(
              'div',
              { className: 'wc-block-checkout-empty' },
              (0, l.createElement)(ce.A, {
                className: 'wc-block-checkout-empty__image',
                icon: se,
                size: 100,
              }),
              (0, l.createElement)(
                'strong',
                { className: 'wc-block-checkout-empty__title' },
                (0, m.__)('Your cart is currently empty!', 'woocommerce'),
              ),
              (0, l.createElement)(
                'p',
                { className: 'wc-block-checkout-empty__description' },
                (0, m.__)(
                  "Checkout is not available whilst your cart is empty—please take a look through our store and come back when you're ready to place an order.",
                  'woocommerce',
                ),
              ),
              p.Jn &&
                (0, l.createElement)(
                  'span',
                  { className: 'wp-block-button' },
                  (0, l.createElement)(
                    'a',
                    { href: p.Jn, className: 'wp-block-button__link' },
                    (0, m.__)('Browse store', 'woocommerce'),
                  ),
                ),
            ),
          ne = (0, l.createElement)(
            oe.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, l.createElement)('path', {
              d:
                'M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z',
            }),
            (0, l.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
          );
        var ie = r(8537);
        r(2861);
        const le = [
            'woocommerce_rest_product_out_of_stock',
            'woocommerce_rest_product_not_purchasable',
            'woocommerce_rest_product_partially_out_of_stock',
            'woocommerce_rest_product_too_many_in_cart',
            'woocommerce_rest_cart_item_error',
          ],
          ue = (0, w.getSetting)('checkoutData', {}),
          me = ({ errorData: e }) => {
            let t = (0, m.__)('Checkout error', 'woocommerce');
            return (
              le.includes(e.code) &&
                (t = (0, m.__)('There is a problem with your cart', 'woocommerce')),
              (0, l.createElement)('strong', { className: 'wc-block-checkout-error_title' }, t)
            );
          },
          pe = ({ errorData: e }) => {
            let t = e.message;
            return (
              le.includes(e.code) &&
                (t = t + ' ' + (0, m.__)('Please edit your cart and try again.', 'woocommerce')),
              (0, l.createElement)('p', { className: 'wc-block-checkout-error__description' }, t)
            );
          },
          de = ({ errorData: e }) => {
            let t = (0, m.__)('Retry', 'woocommerce'),
              r = 'javascript:window.location.reload(true)';
            return (
              le.includes(e.code) && ((t = (0, m.__)('Edit your cart', 'woocommerce')), (r = p.Vo)),
              (0, l.createElement)(
                'span',
                { className: 'wp-block-button' },
                (0, l.createElement)('a', { href: r, className: 'wp-block-button__link' }, t),
              )
            );
          },
          _e = () => {
            const e = { code: '', message: '', ...(ue || {}) },
              t = {
                code: e.code || 'unknown',
                message:
                  (0, ie.decodeEntities)(e.message) ||
                  (0, m.__)(
                    'There was a problem checking out. Please try again. If the problem persists, please get in touch with us so we can assist.',
                    'woocommerce',
                  ),
              };
            return (0, l.createElement)(
              'div',
              { className: 'wc-block-checkout-error' },
              (0, l.createElement)(ce.A, {
                className: 'wc-block-checkout-error__image',
                icon: ne,
                size: 100,
              }),
              (0, l.createElement)(me, { errorData: t }),
              (0, l.createElement)(pe, { errorData: t }),
              (0, l.createElement)(de, { errorData: t }),
            );
          };
        var he = r(6398),
          ge = r(9292);
        const ke = () =>
            (0, l.createElement)(
              'div',
              { className: 'wc-block-must-login-prompt' },
              (0, m.__)('You must be logged in to checkout.', 'woocommerce'),
              ' ',
              (0, l.createElement)(
                'a',
                { href: he.Jg },
                (0, m.__)('Click here to log in.', 'woocommerce'),
              ),
            ),
          fe = ({ attributes: e, children: t }) => {
            const { hasOrder: r, customerId: o } = (0, a.useSelect)(e => {
                const t = e(n.CHECKOUT_STORE_KEY);
                return { hasOrder: t.hasOrder(), customerId: t.getCustomerId() };
              }),
              { cartItems: s, cartIsLoading: i } = (0, c.V)(),
              {
                showCompanyField: u,
                requireCompanyField: m,
                showApartmentField: p,
                requireApartmentField: d,
                showPhoneField: _,
                requirePhoneField: h,
                showFormStepNumbers: g,
              } = e;
            return i || 0 !== s.length
              ? r
                ? (0, he.R5)(o) && !(0, w.getSetting)('checkoutAllowsSignup', !1)
                  ? (0, l.createElement)(ke, null)
                  : (0, l.createElement)(
                      ge.LP.Provider,
                      {
                        value: {
                          showCompanyField: u,
                          requireCompanyField: m,
                          showApartmentField: p,
                          requireApartmentField: d,
                          showPhoneField: _,
                          requirePhoneField: h,
                          showFormStepNumbers: g,
                        },
                      },
                      t,
                    )
                : (0, l.createElement)(_e, null)
              : (0, l.createElement)(ae, null);
          },
          we = ({ scrollToTop: e }) => {
            const { hasError: t, isIdle: r } = (0, a.useSelect)(e => {
                const t = e(n.CHECKOUT_STORE_KEY);
                return { isIdle: t.isIdle(), hasError: t.hasError() };
              }),
              { hasValidationErrors: s } = (0, a.useSelect)(e => ({
                hasValidationErrors: e(n.VALIDATION_STORE_KEY).hasValidationErrors(),
              })),
              { showAllValidationErrors: c } = (0, a.useDispatch)(n.VALIDATION_STORE_KEY),
              i = r && t && s;
            return (
              (0, o.useEffect)(() => {
                let t;
                return (
                  i &&
                    (c(),
                    (t = window.setTimeout(() => {
                      e({ focusableSelector: 'input:invalid, .has-error input' });
                    }, 50))),
                  () => {
                    clearTimeout(t);
                  }
                );
              }, [i, e, c]),
              null
            );
          },
          ye =
            ((Se = ({ attributes: e, children: t, scrollToTop: r }) => (
              (() => {
                const e = 'woocommerce/checkout-totals-block',
                  { shippingRates: t } = (0, H.m)(),
                  r = (0, D.HI)(t),
                  {
                    prefersCollection: s,
                    isRateBeingSelected: c,
                    shippingNotices: i,
                    cartData: l,
                  } = (0, a.useSelect)(t => ({
                    cartData: t(n.CART_STORE_KEY).getCartData(),
                    prefersCollection: t(n.CHECKOUT_STORE_KEY).prefersCollection(),
                    isRateBeingSelected: t(n.CART_STORE_KEY).isShippingRateBeingSelected(),
                    shippingNotices: t('core/notices').getNotices(e),
                  })),
                  { createInfoNotice: u, removeNotice: p } = (0, a.useDispatch)('core/notices');
                (0, o.useEffect)(() => {
                  var t;
                  if (!r || c) return;
                  const o =
                      null == l || null === (t = l.shippingRates) || void 0 === t
                        ? void 0
                        : t.reduce((e, t) => {
                            const r = t.shipping_rates.find(e => e.selected);
                            return (
                              void 0 !== (null == r ? void 0 : r.method_id) &&
                                e.push(null == r ? void 0 : r.method_id),
                              e
                            );
                          }, []),
                    a = Object.values(o).some(e => !!(0, B.isString)(e) && (0, j.jV)(e));
                  !r || s || c || !a || 0 !== i.length
                    ? (s || !a) && i.length > 0 && p('wc-blocks-totals-shipping-warning', e)
                    : u(
                        (0, m.__)(
                          'Totals will be recalculated when a valid shipping method is selected.',
                          'woocommerce',
                        ),
                        { id: 'wc-blocks-totals-shipping-warning', isDismissible: !1, context: e },
                      );
                }, [null == l ? void 0 : l.shippingRates, u, r, c, s, p, i, t]);
              })(),
              (0, l.createElement)(
                h,
                {
                  header: (0, m.__)(
                    'Something went wrong. Please contact us for assistance.',
                    'woocommerce',
                  ),
                  text: (0, o.createInterpolateElement)(
                    (0, m.__)(
                      'The checkout has encountered an unexpected error. <button>Try reloading the page</button>. If the error persists, please get in touch with us so we can assist.',
                      'woocommerce',
                    ),
                    {
                      button: (0, l.createElement)('button', {
                        className: 'wc-block-link-button',
                        onClick: he.T8,
                      }),
                    },
                  ),
                  showErrorMessage: w.CURRENT_USER_IS_ADMIN,
                },
                (0, l.createElement)(te.StoreNoticesContainer, {
                  context: [K.tG.CHECKOUT, K.tG.CART],
                }),
                (0, l.createElement)(
                  b.SlotFillProvider,
                  null,
                  (0, l.createElement)(
                    Z,
                    null,
                    (0, l.createElement)(
                      ee,
                      {
                        className: U()('wc-block-checkout', {
                          'has-dark-controls': e.hasDarkControls,
                        }),
                      },
                      (0, l.createElement)(fe, { attributes: e }, t),
                      (0, l.createElement)(we, { scrollToTop: r }),
                    ),
                  ),
                ),
              )
            )),
            e => {
              const t = (0, o.useRef)(null);
              return (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)('div', {
                  className: 'with-scroll-to-top__scroll-point',
                  ref: t,
                  'aria-hidden': !0,
                }),
                (0, l.createElement)(Se, {
                  ...e,
                  scrollToTop: e => {
                    null !== t.current &&
                      ((e, t) => {
                        const { focusableSelector: r } = t || {};
                        window &&
                          Number.isFinite(window.innerHeight) &&
                          (r
                            ? ((e, t) => {
                                var r;
                                const o =
                                  (null === (r = e.parentElement) || void 0 === r
                                    ? void 0
                                    : r.querySelectorAll(t)) || [];
                                if (o.length) {
                                  const e = o[0];
                                  re(e), null == e || e.focus();
                                } else re(e);
                              })(e, r)
                            : re(e));
                      })(t.current, e);
                  },
                }),
              );
            }),
          be = 'woocommerce/checkout',
          Ee = {
            hasDarkControls: {
              type: 'boolean',
              default: (0, w.getSetting)('hasDarkEditorStyleSupport', !1),
            },
            showRateAfterTaxName: {
              type: 'boolean',
              default: (0, w.getSetting)('displayCartPricesIncludingTax', !1),
            },
          },
          ve = JSON.parse(
            '{"uK":{"isPreview":{"type":"boolean","default":false,"save":false},"showCompanyField":{"type":"boolean","default":false},"requireCompanyField":{"type":"boolean","default":false},"showApartmentField":{"type":"boolean","default":true},"requireApartmentField":{"type":"boolean","default":false},"showPhoneField":{"type":"boolean","default":true},"requirePhoneField":{"type":"boolean","default":false},"align":{"type":"string","default":"wide"},"showFormStepNumbers":{"type":"boolean","default":false}}}',
          );
        var Se;
        (({
          Block: e,
          selector: t,
          blockName: r,
          getProps: o = () => ({}),
          blockMap: s,
          blockWrapper: c,
        }) => {
          f({
            Block: e,
            selector: t,
            getProps: (e, t) => {
              const a = v({ block: r, blockMap: s, children: e.children || [], blockWrapper: c });
              return { ...o(e, t), children: a };
            },
          });
        })({
          Block: ye,
          blockName: be,
          selector: '.wp-block-woocommerce-checkout',
          getProps: e => ({
            attributes: s({ ...ve.uK, ...Ee }, e instanceof HTMLElement ? e.dataset : {}),
          }),
          blockMap: (0, i.getRegisteredBlockComponents)(be),
          blockWrapper: ({ children: e }) => {
            const { extensions: t, receiveCart: r, ...s } = (0, c.V)(),
              i = (() => {
                const { __internalSetExtensionData: e } = (0, a.useDispatch)(n.CHECKOUT_STORE_KEY),
                  t = (0, a.useSelect)(e => e(n.CHECKOUT_STORE_KEY).getExtensionData()),
                  r = (0, o.useRef)(t),
                  s = (0, o.useCallback)(
                    (t, r, o) => {
                      e(t, { [r]: o });
                    },
                    [e],
                  );
                return { extensionData: r.current, setExtensionData: s };
              })(),
              l = (() => {
                const {
                    clearValidationError: e,
                    hideValidationError: t,
                    setValidationErrors: r,
                  } = (0, a.useDispatch)(n.VALIDATION_STORE_KEY),
                  s = 'extensions-errors',
                  { hasValidationErrors: c, getValidationError: i } = (0, a.useSelect)(e => {
                    const t = e(n.VALIDATION_STORE_KEY);
                    return {
                      hasValidationErrors: t.hasValidationErrors(),
                      getValidationError: e => t.getValidationError(`${s}-${e}`),
                    };
                  });
                return {
                  hasValidationErrors: c,
                  getValidationError: i,
                  clearValidationError: (0, o.useCallback)(t => e(`${s}-${t}`), [e]),
                  hideValidationError: (0, o.useCallback)(e => t(`${s}-${e}`), [t]),
                  setValidationErrors: (0, o.useCallback)(
                    e => r(Object.fromEntries(Object.entries(e).map(([e, t]) => [`${s}-${e}`, t]))),
                    [r],
                  ),
                };
              })();
            return o.Children.map(e, e => {
              if ((0, o.isValidElement)(e)) {
                const r = { extensions: t, cart: s, checkoutExtensionData: i, validation: l };
                return (0, o.cloneElement)(e, r);
              }
              return e;
            });
          },
        });
      },
      6398: (e, t, r) => {
        'use strict';
        r.d(t, { Jg: () => n, M0: () => m, R5: () => i, T8: () => p });
        var o = r(812),
          s = r(5703),
          c = r(3993),
          a = r(8537);
        const n = `${o.aW}?redirect_to=${encodeURIComponent(window.location.href)}`,
          i = e => !e && !(0, s.getSetting)('checkoutAllowsGuest', !1),
          l = e =>
            (0, c.isObject)(o.uz[e.country]) && (0, c.isString)(o.uz[e.country][e.state])
              ? (0, a.decodeEntities)(o.uz[e.country][e.state])
              : e.state,
          u = e =>
            (0, c.isString)(o.AG[e.country]) ? (0, a.decodeEntities)(o.AG[e.country]) : e.country,
          m = (e, t) => {
            const r = (e =>
                [
                  '{name}',
                  '{name_upper}',
                  '{first_name} {last_name}',
                  '{last_name} {first_name}',
                  '{first_name_upper} {last_name_upper}',
                  '{last_name_upper} {first_name_upper}',
                  '{first_name} {last_name_upper}',
                  '{first_name_upper} {last_name}',
                  '{last_name} {first_name_upper}',
                  '{last_name_upper} {first_name}',
                ].find(t => e.indexOf(t) >= 0) || '')(t),
              o = t.replace(`${r}\n`, ''),
              s = [
                ['{company}', (null == e ? void 0 : e.company) || ''],
                ['{address_1}', (null == e ? void 0 : e.address_1) || ''],
                ['{address_2}', (null == e ? void 0 : e.address_2) || ''],
                ['{city}', (null == e ? void 0 : e.city) || ''],
                ['{state}', l(e)],
                ['{postcode}', (null == e ? void 0 : e.postcode) || ''],
                ['{country}', u(e)],
                ['{company_upper}', ((null == e ? void 0 : e.company) || '').toUpperCase()],
                ['{address_1_upper}', ((null == e ? void 0 : e.address_1) || '').toUpperCase()],
                ['{address_2_upper}', ((null == e ? void 0 : e.address_2) || '').toUpperCase()],
                ['{city_upper}', ((null == e ? void 0 : e.city) || '').toUpperCase()],
                ['{state_upper}', l(e).toUpperCase()],
                ['{state_code}', (null == e ? void 0 : e.state) || ''],
                ['{postcode_upper}', ((null == e ? void 0 : e.postcode) || '').toUpperCase()],
                ['{country_upper}', u(e).toUpperCase()],
              ],
              c = [
                [
                  '{name}',
                  (null == e ? void 0 : e.first_name) +
                    (null != e && e.first_name && null != e && e.last_name ? ' ' : '') +
                    (null == e ? void 0 : e.last_name),
                ],
                [
                  '{name_upper}',
                  (
                    (null == e ? void 0 : e.first_name) +
                    (null != e && e.first_name && null != e && e.last_name ? ' ' : '') +
                    (null == e ? void 0 : e.last_name)
                  ).toUpperCase(),
                ],
                ['{first_name}', (null == e ? void 0 : e.first_name) || ''],
                ['{last_name}', (null == e ? void 0 : e.last_name) || ''],
                ['{first_name_upper}', ((null == e ? void 0 : e.first_name) || '').toUpperCase()],
                ['{last_name_upper}', ((null == e ? void 0 : e.last_name) || '').toUpperCase()],
              ];
            let a = r;
            c.forEach(([e, t]) => {
              a = a.replace(e, t);
            });
            let n = o;
            s.forEach(([e, t]) => {
              n = n.replace(e, t);
            });
            const i = n
              .replace(/^,\s|,\s$/g, '')
              .replace(/\n{2,}/, '\n')
              .split('\n')
              .filter(Boolean);
            return { name: a, address: i };
          },
          p = () => {
            window.location.reload(!0);
          };
      },
      1229: (e, t, r) => {
        'use strict';
        r.d(t, { B: () => i });
        var o = r(7723),
          s = r(812),
          c = r(5703);
        const a = [
            {
              destination: {
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                postcode: '',
                country: '',
              },
              package_id: 0,
              name: (0, o.__)('Shipping', 'woocommerce'),
              items: [
                {
                  key: '33e75ff09dd601bbe69f351039152189',
                  name: (0, o._x)(
                    'Beanie with Logo',
                    'example product in Cart Block',
                    'woocommerce',
                  ),
                  quantity: 2,
                },
                {
                  key: '6512bd43d9caa6e02c990b0a82652dca',
                  name: (0, o._x)('Beanie', 'example product in Cart Block', 'woocommerce'),
                  quantity: 1,
                },
              ],
              shipping_rates: [
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Flat rate shipping', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '500',
                  taxes: '0',
                  rate_id: 'flat_rate:0',
                  instance_id: 0,
                  meta_data: [],
                  method_id: 'flat_rate',
                  selected: !0,
                },
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Free shipping', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '0',
                  taxes: '0',
                  rate_id: 'free_shipping:1',
                  instance_id: 0,
                  meta_data: [],
                  method_id: 'flat_rate',
                  selected: !1,
                },
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Local pickup', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '0',
                  taxes: '0',
                  rate_id: 'pickup_location:1',
                  instance_id: 1,
                  meta_data: [
                    { key: 'pickup_location', value: 'New York' },
                    { key: 'pickup_address', value: '123 Easy Street, New York, 12345' },
                  ],
                  method_id: 'pickup_location',
                  selected: !1,
                },
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Local pickup', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '0',
                  taxes: '0',
                  rate_id: 'pickup_location:2',
                  instance_id: 1,
                  meta_data: [
                    { key: 'pickup_location', value: 'Los Angeles' },
                    {
                      key: 'pickup_address',
                      value: '123 Easy Street, Los Angeles, California, 90210',
                    },
                  ],
                  method_id: 'pickup_location',
                  selected: !1,
                },
              ],
            },
          ],
          n = (0, c.getSetting)('displayCartPricesIncludingTax', !1),
          i = {
            coupons: [],
            shipping_rates:
              (0, c.getSetting)('shippingMethodsExist', !1) ||
              (0, c.getSetting)('localPickupEnabled', !1)
                ? a
                : [],
            items: [
              {
                key: '1',
                id: 1,
                type: 'simple',
                quantity: 2,
                catalog_visibility: 'visible',
                name: (0, o.__)('Beanie', 'woocommerce'),
                summary: (0, o.__)('Beanie', 'woocommerce'),
                short_description: (0, o.__)('Warm hat for winter', 'woocommerce'),
                description:
                  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                sku: 'woo-beanie',
                permalink: 'https://example.org',
                low_stock_remaining: 2,
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
                images: [
                  {
                    id: 10,
                    src: s.sW + 'previews/beanie.jpg',
                    thumbnail: s.sW + 'previews/beanie.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, o.__)('Color', 'woocommerce'),
                    value: (0, o.__)('Yellow', 'woocommerce'),
                  },
                  {
                    attribute: (0, o.__)('Size', 'woocommerce'),
                    value: (0, o.__)('Small', 'woocommerce'),
                  },
                ],
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '12000' : '10000',
                  regular_price: n ? '12000' : '10000',
                  sale_price: n ? '12000' : '10000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: n ? '12000000' : '10000000',
                    regular_price: n ? '12000000' : '10000000',
                    sale_price: n ? '12000000' : '10000000',
                  },
                },
                totals: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  line_subtotal: '2000',
                  line_subtotal_tax: '400',
                  line_total: '2000',
                  line_total_tax: '400',
                },
                extensions: {},
                item_data: [],
              },
              {
                key: '2',
                id: 2,
                type: 'simple',
                quantity: 1,
                catalog_visibility: 'visible',
                name: (0, o.__)('Cap', 'woocommerce'),
                summary: (0, o.__)('Cap', 'woocommerce'),
                short_description: (0, o.__)('Lightweight baseball cap', 'woocommerce'),
                description:
                  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                sku: 'woo-cap',
                low_stock_remaining: null,
                permalink: 'https://example.org',
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
                images: [
                  {
                    id: 11,
                    src: s.sW + 'previews/cap.jpg',
                    thumbnail: s.sW + 'previews/cap.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, o.__)('Color', 'woocommerce'),
                    value: (0, o.__)('Orange', 'woocommerce'),
                  },
                ],
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '2400' : '2000',
                  regular_price: n ? '2400' : '2000',
                  sale_price: n ? '2400' : '2000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: n ? '24000000' : '20000000',
                    regular_price: n ? '24000000' : '20000000',
                    sale_price: n ? '24000000' : '20000000',
                  },
                },
                totals: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  line_subtotal: '2000',
                  line_subtotal_tax: '400',
                  line_total: '2000',
                  line_total_tax: '400',
                },
                extensions: {},
                item_data: [],
              },
            ],
            cross_sells: [
              {
                id: 1,
                name: (0, o.__)('Polo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-polo',
                short_description: (0, o.__)('Polo', 'woocommerce'),
                description: (0, o.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '24000' : '20000',
                  regular_price: n ? '24000' : '20000',
                  sale_price: n ? '12000' : '10000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4.5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.sW + 'previews/polo.jpg',
                    thumbnail: s.sW + 'previews/polo.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 2,
                name: (0, o.__)('Long Sleeve Tee', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-long-sleeve-tee',
                short_description: (0, o.__)('Long Sleeve Tee', 'woocommerce'),
                description: (0, o.__)('Long Sleeve Tee', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '30000' : '25000',
                  regular_price: n ? '30000' : '25000',
                  sale_price: n ? '30000' : '25000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.sW + 'previews/long-sleeve-tee.jpg',
                    thumbnail: s.sW + 'previews/long-sleeve-tee.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 3,
                name: (0, o.__)('Hoodie with Zipper', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-zipper',
                short_description: (0, o.__)('Hoodie with Zipper', 'woocommerce'),
                description: (0, o.__)('Hoodie with Zipper', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '15000' : '12500',
                  regular_price: n ? '30000' : '25000',
                  sale_price: n ? '15000' : '12500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '1',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.sW + 'previews/hoodie-with-zipper.jpg',
                    thumbnail: s.sW + 'previews/hoodie-with-zipper.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 4,
                name: (0, o.__)('Hoodie with Logo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-logo',
                short_description: (0, o.__)('Polo', 'woocommerce'),
                description: (0, o.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '4500' : '4250',
                  regular_price: n ? '4500' : '4250',
                  sale_price: n ? '4500' : '4250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.sW + 'previews/hoodie-with-logo.jpg',
                    thumbnail: s.sW + 'previews/hoodie-with-logo.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 5,
                name: (0, o.__)('Hoodie with Pocket', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-pocket',
                short_description: (0, o.__)('Hoodie with Pocket', 'woocommerce'),
                description: (0, o.__)('Hoodie with Pocket', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '3500' : '3250',
                  regular_price: n ? '4500' : '4250',
                  sale_price: n ? '3500' : '3250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3.75',
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: s.sW + 'previews/hoodie-with-pocket.jpg',
                    thumbnail: s.sW + 'previews/hoodie-with-pocket.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 6,
                name: (0, o.__)('T-Shirt', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-t-shirt',
                short_description: (0, o.__)('T-Shirt', 'woocommerce'),
                description: (0, o.__)('T-Shirt', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: n ? '1800' : '1500',
                  regular_price: n ? '1800' : '1500',
                  sale_price: n ? '1800' : '1500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: s.sW + 'previews/tshirt.jpg',
                    thumbnail: s.sW + 'previews/tshirt.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
            ],
            fees: [
              {
                id: 'fee',
                name: (0, o.__)('Fee', 'woocommerce'),
                totals: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  total: '100',
                  total_tax: '20',
                },
              },
            ],
            items_count: 3,
            items_weight: 0,
            needs_payment: !0,
            needs_shipping: (0, c.getSetting)('shippingEnabled', !0),
            has_calculated_shipping: !0,
            shipping_address: {
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
            billing_address: {
              first_name: '',
              last_name: '',
              company: '',
              address_1: '',
              address_2: '',
              city: '',
              state: '',
              postcode: '',
              country: '',
              email: '',
              phone: '',
            },
            totals: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              total_items: '4000',
              total_items_tax: '800',
              total_fees: '100',
              total_fees_tax: '20',
              total_discount: '0',
              total_discount_tax: '0',
              total_shipping: '0',
              total_shipping_tax: '0',
              total_tax: '820',
              total_price: '4920',
              tax_lines: [
                { name: (0, o.__)('Sales tax', 'woocommerce'), rate: '20%', price: '820' },
              ],
            },
            errors: [],
            payment_methods: ['cod', 'bacs', 'cheque'],
            payment_requirements: ['products'],
            extensions: {},
          };
      },
      5849: (e, t, r) => {
        'use strict';
        r.d(t, {
          AG: () => C,
          F7: () => E,
          G3: () => O,
          Hw: () => A,
          Jn: () => k,
          SL: () => R,
          Vo: () => y,
          XK: () => g,
          aW: () => b,
          fO: () => x,
          gu: () => w,
          iI: () => P,
          pk: () => f,
          pt: () => I,
          r7: () => _,
          sW: () => h,
          uz: () => T,
        });
        var o,
          s,
          c,
          a,
          n,
          i,
          l,
          u,
          m,
          p,
          d = r(5703);
        const _ = (0, d.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          h = _.pluginUrl + 'assets/images/',
          g = _.pluginUrl + 'assets/client/blocks/',
          k =
            (_.buildPhase,
            null === (o = d.STORE_PAGES.shop) || void 0 === o ? void 0 : o.permalink),
          f =
            (null === (s = d.STORE_PAGES.checkout) || void 0 === s || s.id,
            null === (c = d.STORE_PAGES.checkout) || void 0 === c || c.permalink,
            null === (a = d.STORE_PAGES.privacy) || void 0 === a ? void 0 : a.permalink),
          w =
            (null === (n = d.STORE_PAGES.privacy) || void 0 === n || n.title,
            null === (i = d.STORE_PAGES.terms) || void 0 === i ? void 0 : i.permalink),
          y =
            (null === (l = d.STORE_PAGES.terms) || void 0 === l || l.title,
            null === (u = d.STORE_PAGES.cart) || void 0 === u || u.id,
            null === (m = d.STORE_PAGES.cart) || void 0 === m ? void 0 : m.permalink),
          b =
            null !== (p = d.STORE_PAGES.myaccount) && void 0 !== p && p.permalink
              ? d.STORE_PAGES.myaccount.permalink
              : (0, d.getSetting)('wpLoginUrl', '/wp-login.php'),
          E = (0, d.getSetting)('localPickupEnabled', !1),
          v = (0, d.getSetting)('countries', {}),
          S = (0, d.getSetting)('countryData', {}),
          C = Object.fromEntries(
            Object.keys(S)
              .filter(e => !0 === S[e].allowBilling)
              .map(e => [e, v[e] || '']),
          ),
          T = Object.fromEntries(
            Object.keys(S)
              .filter(e => !0 === S[e].allowBilling)
              .map(e => [e, S[e].states || []]),
          ),
          O = Object.fromEntries(
            Object.keys(S)
              .filter(e => !0 === S[e].allowShipping)
              .map(e => [e, v[e] || '']),
          ),
          R = Object.fromEntries(
            Object.keys(S)
              .filter(e => !0 === S[e].allowShipping)
              .map(e => [e, S[e].states || []]),
          ),
          P = Object.fromEntries(Object.keys(S).map(e => [e, S[e].locale || []])),
          N = {
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
          A = (0, d.getSetting)('addressFieldsLocations', N).address,
          x = (0, d.getSetting)('addressFieldsLocations', N).contact,
          I = (0, d.getSetting)('addressFieldsLocations', N).order;
        (0, d.getSetting)('additionalOrderFields', {}),
          (0, d.getSetting)('additionalContactFields', {}),
          (0, d.getSetting)('additionalAddressFields', {});
      },
      812: (e, t, r) => {
        'use strict';
        r.d(t, {
          AG: () => o.AG,
          F7: () => o.F7,
          G3: () => o.G3,
          Hw: () => o.Hw,
          Jn: () => o.Jn,
          SL: () => o.SL,
          Vo: () => o.Vo,
          XK: () => o.XK,
          aW: () => o.aW,
          fO: () => o.fO,
          gu: () => o.gu,
          iI: () => o.iI,
          pk: () => o.pk,
          pt: () => o.pt,
          r7: () => o.r7,
          sW: () => o.sW,
          uz: () => o.uz,
        });
        var o = r(5849);
      },
      9407: () => {},
      1221: () => {},
      3135: () => {},
      2861: () => {},
      3465: () => {},
      4229: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      8468: e => {
        'use strict';
        e.exports = window.lodash;
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
      1616: e => {
        'use strict';
        e.exports = window.wc.wcBlocksSharedHocs;
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
      8107: e => {
        'use strict';
        e.exports = window.wp.dom;
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
      3832: e => {
        'use strict';
        e.exports = window.wp.url;
      },
      979: e => {
        'use strict';
        e.exports = window.wp.warning;
      },
      9446: e => {
        'use strict';
        e.exports = window.wp.wordcount;
      },
    },
    a = {};
  function n(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return c[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = c),
    (e = []),
    (n.O = (t, r, o, s) => {
      if (!r) {
        var c = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, s] = e[u], a = !0, i = 0; i < r.length; i++)
            (!1 & s || c >= s) && Object.keys(n.O).every(e => n.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((a = !1), s < c && (c = s));
          if (a) {
            e.splice(u--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      s = s || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > s; u--) e[u] = e[u - 1];
      e[u] = [r, o, s];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var s = Object.create(null);
      n.r(s);
      var c = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (c[t] = () => e[t]));
      return (c.default = () => e), n.d(s, c), s;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = e => Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = e =>
      ({
        12: 'checkout-blocks/order-summary',
        133: 'checkout-blocks/order-summary-subtotal',
        552: 'checkout-blocks/order-note',
        636: 'checkout-blocks/shipping-address',
        2227: 'checkout-blocks/additional-information',
        2996: 'checkout-blocks/order-summary-discount',
        3024: 'checkout-blocks/pickup-options',
        3398: 'checkout-blocks/contact-information',
        3574: 'checkout-blocks/express-payment',
        3644: 'checkout-blocks/order-summary-cart-items',
        3982: 'checkout-blocks/actions',
        4e3: 'checkout-blocks/order-summary-taxes',
        4037: 'checkout-blocks/billing-address',
        4654: 'checkout-blocks/terms',
        5806: 'checkout-blocks/shipping-methods',
        6073: 'checkout-blocks/payment',
        6382: 'checkout-blocks/order-summary-coupon-form',
        8127: 'checkout-blocks/order-summary-shipping',
        8268: 'checkout-blocks/totals',
        8330: 'checkout-blocks/fields',
        9319: 'checkout-blocks/shipping-method',
        9691: 'checkout-blocks/order-summary-fee',
      }[e] +
      '-frontend.js?ver=' +
      {
        12: '479621bffd358654edb1',
        133: '9fcef8de2c84695e4e52',
        552: 'e83f994de705f68d79fe',
        636: '1c32dda0a1023bbe27f2',
        2227: '8e0749cf83c390fdc1cc',
        2996: '4838ed38c2c2aa2bd0ce',
        3024: '097b77f02df149743b4b',
        3398: '2da9bff9f25c6456c2db',
        3574: 'dc22c1bcf81a0d15614c',
        3644: '26c6f9a67745673c4398',
        3982: 'dc8beb759ac2bd0228fc',
        4e3: 'f6b6a5affe4fab2af938',
        4037: 'cafd49e097e9c612d539',
        4654: 'e503abeb7b63db2f934c',
        5806: '00fb41a3cac06a11761e',
        6073: '95b655f4d9610d5895de',
        6382: 'bc54666c7ec99e3811ed',
        8127: 'fa4c57f756511bf5ec1e',
        8268: '546909253bb4edddc82d',
        8330: 'e34f53034125f73a63b9',
        9319: '45d162e4e4a609d542a5',
        9691: '5eea0faa2290637ee975',
      }[e])),
    (n.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o = {}),
    (s = 'webpackWcBlocksFrontendJsonp:'),
    (n.l = (e, t, r, c) => {
      if (o[e]) o[e].push(t);
      else {
        var a, i;
        if (void 0 !== r)
          for (var l = document.getElementsByTagName('script'), u = 0; u < l.length; u++) {
            var m = l[u];
            if (m.getAttribute('src') == e || m.getAttribute('data-webpack') == s + r) {
              a = m;
              break;
            }
          }
        a ||
          ((i = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          n.nc && a.setAttribute('nonce', n.nc),
          a.setAttribute('data-webpack', s + r),
          (a.src = e)),
          (o[e] = [t]);
        var p = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(d);
            var s = o[e];
            if (
              (delete o[e],
              a.parentNode && a.parentNode.removeChild(a),
              s && s.forEach(e => e(r)),
              t)
            )
              return t(r);
          },
          d = setTimeout(p.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
        (a.onerror = p.bind(null, a.onerror)),
          (a.onload = p.bind(null, a.onload)),
          i && document.head.appendChild(a);
      }
    }),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 251),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + '');
      var t = n.g.document;
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
        (n.p = e);
    })(),
    (() => {
      var e = { 251: 0 };
      (n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var s = new Promise((r, s) => (o = e[t] = [r, s]));
            r.push((o[2] = s));
            var c = n.p + n.u(t),
              a = new Error();
            n.l(
              c,
              r => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var s = r && ('load' === r.type ? 'missing' : r.type),
                    c = r && r.target && r.target.src;
                  (a.message = 'Loading chunk ' + t + ' failed.\n(' + s + ': ' + c + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = s),
                    (a.request = c),
                    o[1](a);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      }),
        (n.O.j = t => 0 === e[t]);
      var t = (t, r) => {
          var o,
            s,
            [c, a, i] = r,
            l = 0;
          if (c.some(t => 0 !== e[t])) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (i) var u = i(n);
          }
          for (t && t(r); l < c.length; l++) (s = c[l]), n.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return n.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = n.O(void 0, [94], () => n(3959));
  (i = n.O(i)), ((wc = void 0 === wc ? {} : wc).checkout = i);
})();
