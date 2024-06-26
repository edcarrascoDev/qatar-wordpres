(() => {
  var e,
    t,
    o,
    r = {
      2326: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609),
          c = o(7723),
          n = o(9019),
          a = o.n(n);
        const s = window.wp.blockEditor;
        var i = o(5573);
        const l = (0, r.createElement)(
          i.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, r.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
          (0, r.createElement)('path', {
            d:
              'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
          }),
        );
        var m = o(7104);
        const u = window.wp.blocks;
        var d = o(2294),
          p = o(6087);
        const _ = window.wc.wcSettings;
        var h, g, w, k, E, y, b, v, f, C;
        const S = (0, _.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          P = S.pluginUrl + 'assets/images/',
          N = (S.pluginUrl, S.buildPhase),
          x = null === (h = _.STORE_PAGES.shop) || void 0 === h ? void 0 : h.permalink,
          R = null === (g = _.STORE_PAGES.checkout) || void 0 === g ? void 0 : g.id,
          T =
            (null === (w = _.STORE_PAGES.checkout) || void 0 === w || w.permalink,
            null === (k = _.STORE_PAGES.privacy) || void 0 === k || k.permalink,
            null === (E = _.STORE_PAGES.privacy) || void 0 === E || E.title,
            null === (y = _.STORE_PAGES.terms) || void 0 === y || y.permalink,
            null === (b = _.STORE_PAGES.terms) || void 0 === b || b.title,
            null === (v = _.STORE_PAGES.cart) || void 0 === v ? void 0 : v.id),
          A = null === (f = _.STORE_PAGES.cart) || void 0 === f ? void 0 : f.permalink,
          I =
            (null !== (C = _.STORE_PAGES.myaccount) && void 0 !== C && C.permalink
              ? _.STORE_PAGES.myaccount.permalink
              : (0, _.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, _.getSetting)('localPickupEnabled', !1)),
          B = (0, _.getSetting)('countries', {}),
          O = (0, _.getSetting)('countryData', {}),
          M = Object.fromEntries(
            Object.keys(O)
              .filter(e => !0 === O[e].allowBilling)
              .map(e => [e, B[e] || '']),
          ),
          D = Object.fromEntries(
            Object.keys(O)
              .filter(e => !0 === O[e].allowBilling)
              .map(e => [e, O[e].states || []]),
          ),
          L = Object.fromEntries(
            Object.keys(O)
              .filter(e => !0 === O[e].allowShipping)
              .map(e => [e, B[e] || '']),
          ),
          F = Object.fromEntries(
            Object.keys(O)
              .filter(e => !0 === O[e].allowShipping)
              .map(e => [e, O[e].states || []]),
          ),
          V = Object.fromEntries(Object.keys(O).map(e => [e, O[e].locale || []])),
          j = {
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
          Y = (0, _.getSetting)('addressFieldsLocations', j).address,
          $ =
            ((0, _.getSetting)('addressFieldsLocations', j).contact,
            (0, _.getSetting)('addressFieldsLocations', j).order,
            (0, _.getSetting)('additionalOrderFields', {}),
            (0, _.getSetting)('additionalContactFields', {}),
            (0, _.getSetting)('additionalAddressFields', {}),
            () => N > 1),
          U = ({
            imageUrl: e = `${P}/block-error.svg`,
            header: t = (0, c.__)('Oops!', 'woocommerce'),
            text: o = (0, c.__)('There was an error loading the content.', 'woocommerce'),
            errorMessage: n,
            errorMessagePrefix: a = (0, c.__)('Error:', 'woocommerce'),
            button: s,
            showErrorBlock: i = !0,
          }) =>
            i
              ? (0, r.createElement)(
                  'div',
                  { className: 'wc-block-error wc-block-components-error' },
                  e &&
                    (0, r.createElement)('img', {
                      className: 'wc-block-error__image wc-block-components-error__image',
                      src: e,
                      alt: '',
                    }),
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-error__content wc-block-components-error__content' },
                    t &&
                      (0, r.createElement)(
                        'p',
                        { className: 'wc-block-error__header wc-block-components-error__header' },
                        t,
                      ),
                    o &&
                      (0, r.createElement)(
                        'p',
                        { className: 'wc-block-error__text wc-block-components-error__text' },
                        o,
                      ),
                    n &&
                      (0, r.createElement)(
                        'p',
                        { className: 'wc-block-error__message wc-block-components-error__message' },
                        a ? a + ' ' : '',
                        n,
                      ),
                    s &&
                      (0, r.createElement)(
                        'p',
                        { className: 'wc-block-error__button wc-block-components-error__button' },
                        s,
                      ),
                  ),
                )
              : null;
        o(9407);
        class H extends p.Component {
          constructor(...e) {
            super(...e), (0, d.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)('strong', null, e.status),
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
                showErrorMessage: o = !0,
                showErrorBlock: c = !0,
                text: n,
                errorMessagePrefix: a,
                renderError: s,
                button: i,
              } = this.props,
              { errorMessage: l, hasError: m } = this.state;
            return m
              ? 'function' == typeof s
                ? s({ errorMessage: l })
                : (0, r.createElement)(U, {
                    showErrorBlock: c,
                    errorMessage: o ? l : null,
                    header: e,
                    imageUrl: t,
                    text: n,
                    errorMessagePrefix: a,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const z = H,
          K = window.wp.data,
          q = (0, p.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: '',
            previewData: {},
            getPreviewData: () => ({}),
          }),
          W = () => (0, p.useContext)(q),
          G = ({
            children: e,
            currentPostId: t = 0,
            previewData: o = {},
            currentView: c = '',
            isPreview: n = !1,
          }) => {
            const a = (0, K.useSelect)(e => t || e('core/editor').getCurrentPostId(), [t]),
              s = (0, p.useCallback)(e => (o && e in o ? o[e] : {}), [o]),
              i = {
                isEditor: !0,
                currentPostId: a,
                currentView: c,
                previewData: o,
                getPreviewData: s,
                isPreview: n,
              };
            return (0, r.createElement)(q.Provider, { value: i }, e);
          },
          Q = window.wp.plugins,
          Z = window.wc.wcBlocksData;
        var J = o(4040),
          X = o.n(J);
        let ee = (function(e) {
          return (
            (e.ADD_EVENT_CALLBACK = 'add_event_callback'),
            (e.REMOVE_EVENT_CALLBACK = 'remove_event_callback'),
            e
          );
        })({});
        const te = {},
          oe = (e = te, { type: t, eventType: o, id: r, callback: c, priority: n }) => {
            const a = e.hasOwnProperty(o) ? new Map(e[o]) : new Map();
            switch (t) {
              case ee.ADD_EVENT_CALLBACK:
                return a.set(r, { priority: n, callback: c }), { ...e, [o]: a };
              case ee.REMOVE_EVENT_CALLBACK:
                return a.delete(r), { ...e, [o]: a };
            }
          },
          re = (e, t) => (o, r = 10) => {
            const c = ((e, t, o = 10) => ({
              id: Math.floor(Math.random() * Date.now()).toString(),
              type: ee.ADD_EVENT_CALLBACK,
              eventType: e,
              callback: t,
              priority: o,
            }))(e, o, r);
            return (
              t(c),
              () => {
                var o;
                t(((o = e), { id: c.id, type: ee.REMOVE_EVENT_CALLBACK, eventType: o }));
              }
            );
          },
          ce = (0, p.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          ne = ({ children: e }) => {
            const { isProcessing: t, isIdle: o, isCalculating: c, hasError: n } = (0, K.useSelect)(
                e => {
                  const t = e(Z.CHECKOUT_STORE_KEY);
                  return {
                    isProcessing: t.isProcessing(),
                    isIdle: t.isIdle(),
                    hasError: t.hasError(),
                    isCalculating: t.isCalculating(),
                  };
                },
              ),
              { isPaymentReady: a } = (0, K.useSelect)(e => {
                const t = e(Z.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: s } = (0, K.useDispatch)(Z.VALIDATION_STORE_KEY),
              [i, l] = (0, p.useReducer)(oe, {}),
              { onPaymentSetup: m } = (e =>
                (0, p.useMemo)(() => ({ onPaymentSetup: re('payment_setup', e) }), [e]))(l),
              u = (0, p.useRef)(i);
            (0, p.useEffect)(() => {
              u.current = i;
            }, [i]);
            const {
              __internalSetPaymentProcessing: d,
              __internalSetPaymentIdle: _,
              __internalEmitPaymentProcessingEvent: h,
            } = (0, K.useDispatch)(Z.PAYMENT_STORE_KEY);
            (0, p.useEffect)(() => {
              !t || n || c || (d(), h(u.current, s));
            }, [t, n, c, d, h, s]),
              (0, p.useEffect)(() => {
                o && !a && _();
              }, [o, a, _]),
              (0, p.useEffect)(() => {
                n && a && _();
              }, [n, a, _]);
            const g = {
              onPaymentProcessing: (0, p.useMemo)(
                () =>
                  function(...e) {
                    return (
                      X()('onPaymentProcessing', {
                        alternative: 'onPaymentSetup',
                        plugin: 'WooCommerce Blocks',
                      }),
                      m(...e)
                    );
                  },
                [m],
              ),
              onPaymentSetup: m,
            };
            return (0, r.createElement)(ce.Provider, { value: g }, e);
          },
          ae = { NONE: 'none', INVALID_ADDRESS: 'invalid_address', UNKNOWN: 'unknown_error' },
          se = {
            INVALID_COUNTRY: 'woocommerce_rest_cart_shipping_rates_invalid_country',
            MISSING_COUNTRY: 'woocommerce_rest_cart_shipping_rates_missing_country',
            INVALID_STATE: 'woocommerce_rest_cart_shipping_rates_invalid_state',
          },
          ie = {
            shippingErrorStatus: {
              isPristine: !0,
              isValid: !1,
              hasInvalidAddress: !1,
              hasError: !1,
            },
            dispatchErrorStatus: e => e,
            shippingErrorTypes: ae,
            onShippingRateSuccess: () => () => {},
            onShippingRateFail: () => () => {},
            onShippingRateSelectSuccess: () => () => {},
            onShippingRateSelectFail: () => () => {},
          },
          le = (e, { type: t }) => (Object.values(ae).includes(t) ? t : e),
          me = 'shipping_rates_success',
          ue = 'shipping_rates_fail',
          de = 'shipping_rate_select_success',
          pe = 'shipping_rate_select_fail',
          _e = e => ({
            onSuccess: re(me, e),
            onFail: re(ue, e),
            onSelectSuccess: re(de, e),
            onSelectFail: re(pe, e),
          }),
          he = window.wc.wcTypes;
        let ge = (function(e) {
            return (e.SUCCESS = 'success'), (e.FAIL = 'failure'), (e.ERROR = 'error'), e;
          })({}),
          we = (function(e) {
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
        const ke = async (e, t, o) => {
          const r = ((e, t) =>
              e[t] ? Array.from(e[t].values()).sort((e, t) => e.priority - t.priority) : [])(e, t),
            c = [];
          for (const e of r)
            try {
              const t = await Promise.resolve(e.callback(o));
              'object' == typeof t && c.push(t);
            } catch (e) {
              console.error(e);
            }
          return !c.length || c;
        };
        var Ee = o(458),
          ye = o.n(Ee);
        const be = window.wp.htmlEntities,
          ve = e => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, c.sprintf) /* translators: %s Field label. */(
                  /* translators: %s Field label. */
                  (0, c.__)('%s (optional)', 'woocommerce'),
                  e.label,
                )),
              e.priority &&
                ((0, he.isNumber)(e.priority) && (t.index = e.priority),
                (0, he.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          fe = Object.entries(V)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, ve(t)])
                .reduce((e, [t, o]) => ((e[t] = o), e), {}),
            ])
            .reduce((e, [t, o]) => ((e[t] = o), e), {}),
          Ce = (e, t, o = '') => {
            const r = o && void 0 !== fe[o] ? fe[o] : {};
            return e
              .map(e => ({
                key: e,
                ...(_.defaultFields[e] || {}),
                ...(r[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          },
          Se = window.wp.url,
          Pe = (e, t) => e in t,
          Ne = e => {
            const t = Ce(Y, {}, e.country),
              o = Object.assign({}, e);
            return (
              t.forEach(({ key: t = '', hidden: r = !1 }) => {
                r && Pe(t, e) && (o[t] = '');
              }),
              o
            );
          },
          xe = e => {
            if (0 === Object.values(e).length) return null;
            const t = (0, he.isString)(L[e.country]) ? (0, be.decodeEntities)(L[e.country]) : '',
              o =
                (0, he.isObject)(F[e.country]) && (0, he.isString)(F[e.country][e.state])
                  ? (0, be.decodeEntities)(F[e.country][e.state])
                  : e.state,
              r = [];
            r.push(e.postcode.toUpperCase()), r.push(e.city), r.push(o), r.push(t);
            return r.filter(Boolean).join(', ') || null;
          },
          Re = window.CustomEvent || null,
          Te = (e, t, o = !1, r = !1) => {
            if ('function' != typeof jQuery) return () => {};
            const c = () => {
              ((e, { bubbles: t = !1, cancelable: o = !1, element: r, detail: c = {} }) => {
                if (!Re) return;
                r || (r = document.body);
                const n = new Re(e, { bubbles: t, cancelable: o, detail: c });
                r.dispatchEvent(n);
              })(t, { bubbles: o, cancelable: r });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          },
          Ae = e => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, K.dispatch)(Z.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Ie = e => {
            ((null != e && e.persisted) ||
              'back_forward' ===
                (window.performance && window.performance.getEntriesByType('navigation').length
                  ? window.performance.getEntriesByType('navigation')[0].type
                  : '')) &&
              (0, K.dispatch)(Z.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Be = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          Oe = {
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
          Me = { ...Oe, email: '' },
          De = {
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
            tax_lines: Z.EMPTY_TAX_LINES,
            currency_code: '',
            currency_symbol: '',
            currency_minor_unit: 2,
            currency_decimal_separator: '',
            currency_thousand_separator: '',
            currency_prefix: '',
            currency_suffix: '',
          },
          Le = e =>
            Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (0, be.decodeEntities)(t)])),
          Fe = {
            cartCoupons: Z.EMPTY_CART_COUPONS,
            cartItems: Z.EMPTY_CART_ITEMS,
            cartFees: Z.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: Z.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: Z.EMPTY_CART_ITEM_ERRORS,
            cartTotals: De,
            cartIsLoading: !0,
            cartErrors: Z.EMPTY_CART_ERRORS,
            billingAddress: Me,
            shippingAddress: Oe,
            shippingRates: Z.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: Z.EMPTY_PAYMENT_METHODS,
            paymentRequirements: Z.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: Z.EMPTY_EXTENSIONS,
          },
          Ve = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: o } = W(),
              r = null == o ? void 0 : o.previewCart,
              { shouldSelect: c } = e,
              n = (0, p.useRef)();
            (0, p.useEffect)(
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
                  document.body.addEventListener('wc-blocks_added_to_cart', Ae),
                    document.body.addEventListener('wc-blocks_removed_from_cart', Ae),
                    window.addEventListener('pageshow', Ie);
                  const t = Te('added_to_cart', 'wc-blocks_added_to_cart'),
                    o = Te('removed_from_cart', 'wc-blocks_removed_from_cart');
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener('wc-blocks_added_to_cart', Ae),
                        document.body.removeEventListener('wc-blocks_removed_from_cart', Ae),
                        window.removeEventListener('pageshow', Ie),
                        t(),
                        o();
                    });
                })(),
                Be
              ),
              [],
            );
            const a = (0, K.useSelect)(
              (e, { dispatch: o }) => {
                if (!c) return Fe;
                if (t)
                  return {
                    cartCoupons: r.coupons,
                    cartItems: r.items,
                    crossSellsProducts: r.cross_sells,
                    cartFees: r.fees,
                    cartItemsCount: r.items_count,
                    cartItemsWeight: r.items_weight,
                    cartNeedsPayment: r.needs_payment,
                    cartNeedsShipping: r.needs_shipping,
                    cartItemErrors: Z.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: r.totals,
                    cartIsLoading: !1,
                    cartErrors: Z.EMPTY_CART_ERRORS,
                    billingData: Me,
                    billingAddress: Me,
                    shippingAddress: Oe,
                    extensions: Z.EMPTY_EXTENSIONS,
                    shippingRates: r.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: r.has_calculated_shipping,
                    paymentRequirements: r.paymentRequirements,
                    receiveCart:
                      'function' == typeof (null == r ? void 0 : r.receiveCart)
                        ? r.receiveCart
                        : () => {},
                    receiveCartContents:
                      'function' == typeof (null == r ? void 0 : r.receiveCartContents)
                        ? r.receiveCartContents
                        : () => {},
                  };
                const n = e(Z.CART_STORE_KEY),
                  a = n.getCartData(),
                  s = n.getCartErrors(),
                  i = n.getCartTotals(),
                  l = !n.hasFinishedResolution('getCartData'),
                  m = n.isCustomerDataUpdating(),
                  { receiveCart: u, receiveCartContents: d } = o(Z.CART_STORE_KEY),
                  p = Le(a.billingAddress),
                  _ = a.needsShipping ? Le(a.shippingAddress) : p,
                  h = a.fees.length > 0 ? a.fees.map(e => Le(e)) : Z.EMPTY_CART_FEES,
                  g =
                    a.coupons.length > 0
                      ? a.coupons.map(e => ({ ...e, label: e.code }))
                      : Z.EMPTY_CART_COUPONS;
                return {
                  cartCoupons: g,
                  cartItems: a.items,
                  crossSellsProducts: a.crossSells,
                  cartFees: h,
                  cartItemsCount: a.itemsCount,
                  cartItemsWeight: a.itemsWeight,
                  cartNeedsPayment: a.needsPayment,
                  cartNeedsShipping: a.needsShipping,
                  cartItemErrors: a.errors,
                  cartTotals: i,
                  cartIsLoading: l,
                  cartErrors: s,
                  billingData: Ne(p),
                  billingAddress: Ne(p),
                  shippingAddress: Ne(_),
                  extensions: a.extensions,
                  shippingRates: a.shippingRates,
                  isLoadingRates: m,
                  cartHasCalculatedShipping: a.hasCalculatedShipping,
                  paymentRequirements: a.paymentRequirements,
                  receiveCart: u,
                  receiveCartContents: d,
                };
              },
              [c],
            );
            return (n.current && ye()(n.current, a)) || (n.current = a), n.current;
          },
          je = e => e.length,
          Ye = (0, _.getSetting)('collectableMethodIds', []),
          $e = e => Ye.includes(e.method_id),
          Ue = e => !!I && (Array.isArray(e) ? !!e.find(e => Ye.includes(e)) : Ye.includes(e));
        var He = o(923),
          ze = o.n(He);
        const Ke = [
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
              name: (0, c.__)('Shipping', 'woocommerce'),
              items: [
                {
                  key: '33e75ff09dd601bbe69f351039152189',
                  name: (0, c._x)(
                    'Beanie with Logo',
                    'example product in Cart Block',
                    'woocommerce',
                  ),
                  quantity: 2,
                },
                {
                  key: '6512bd43d9caa6e02c990b0a82652dca',
                  name: (0, c._x)('Beanie', 'example product in Cart Block', 'woocommerce'),
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
                  name: (0, c.__)('Flat rate shipping', 'woocommerce'),
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
                  name: (0, c.__)('Free shipping', 'woocommerce'),
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
                  name: (0, c.__)('Local pickup', 'woocommerce'),
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
                  name: (0, c.__)('Local pickup', 'woocommerce'),
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
          qe = (0, _.getSetting)('displayCartPricesIncludingTax', !1),
          We = {
            coupons: [],
            shipping_rates:
              (0, _.getSetting)('shippingMethodsExist', !1) ||
              (0, _.getSetting)('localPickupEnabled', !1)
                ? Ke
                : [],
            items: [
              {
                key: '1',
                id: 1,
                type: 'simple',
                quantity: 2,
                catalog_visibility: 'visible',
                name: (0, c.__)('Beanie', 'woocommerce'),
                summary: (0, c.__)('Beanie', 'woocommerce'),
                short_description: (0, c.__)('Warm hat for winter', 'woocommerce'),
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
                    src: P + 'previews/beanie.jpg',
                    thumbnail: P + 'previews/beanie.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, c.__)('Color', 'woocommerce'),
                    value: (0, c.__)('Yellow', 'woocommerce'),
                  },
                  {
                    attribute: (0, c.__)('Size', 'woocommerce'),
                    value: (0, c.__)('Small', 'woocommerce'),
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
                  price: qe ? '12000' : '10000',
                  regular_price: qe ? '12000' : '10000',
                  sale_price: qe ? '12000' : '10000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: qe ? '12000000' : '10000000',
                    regular_price: qe ? '12000000' : '10000000',
                    sale_price: qe ? '12000000' : '10000000',
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
                name: (0, c.__)('Cap', 'woocommerce'),
                summary: (0, c.__)('Cap', 'woocommerce'),
                short_description: (0, c.__)('Lightweight baseball cap', 'woocommerce'),
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
                    src: P + 'previews/cap.jpg',
                    thumbnail: P + 'previews/cap.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, c.__)('Color', 'woocommerce'),
                    value: (0, c.__)('Orange', 'woocommerce'),
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
                  price: qe ? '2400' : '2000',
                  regular_price: qe ? '2400' : '2000',
                  sale_price: qe ? '2400' : '2000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: qe ? '24000000' : '20000000',
                    regular_price: qe ? '24000000' : '20000000',
                    sale_price: qe ? '24000000' : '20000000',
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
                name: (0, c.__)('Polo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-polo',
                short_description: (0, c.__)('Polo', 'woocommerce'),
                description: (0, c.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: qe ? '24000' : '20000',
                  regular_price: qe ? '24000' : '20000',
                  sale_price: qe ? '12000' : '10000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4.5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: P + 'previews/polo.jpg',
                    thumbnail: P + 'previews/polo.jpg',
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
                name: (0, c.__)('Long Sleeve Tee', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-long-sleeve-tee',
                short_description: (0, c.__)('Long Sleeve Tee', 'woocommerce'),
                description: (0, c.__)('Long Sleeve Tee', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: qe ? '30000' : '25000',
                  regular_price: qe ? '30000' : '25000',
                  sale_price: qe ? '30000' : '25000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: P + 'previews/long-sleeve-tee.jpg',
                    thumbnail: P + 'previews/long-sleeve-tee.jpg',
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
                name: (0, c.__)('Hoodie with Zipper', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-zipper',
                short_description: (0, c.__)('Hoodie with Zipper', 'woocommerce'),
                description: (0, c.__)('Hoodie with Zipper', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: qe ? '15000' : '12500',
                  regular_price: qe ? '30000' : '25000',
                  sale_price: qe ? '15000' : '12500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '1',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: P + 'previews/hoodie-with-zipper.jpg',
                    thumbnail: P + 'previews/hoodie-with-zipper.jpg',
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
                name: (0, c.__)('Hoodie with Logo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-logo',
                short_description: (0, c.__)('Polo', 'woocommerce'),
                description: (0, c.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: qe ? '4500' : '4250',
                  regular_price: qe ? '4500' : '4250',
                  sale_price: qe ? '4500' : '4250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: P + 'previews/hoodie-with-logo.jpg',
                    thumbnail: P + 'previews/hoodie-with-logo.jpg',
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
                name: (0, c.__)('Hoodie with Pocket', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-pocket',
                short_description: (0, c.__)('Hoodie with Pocket', 'woocommerce'),
                description: (0, c.__)('Hoodie with Pocket', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: qe ? '3500' : '3250',
                  regular_price: qe ? '4500' : '4250',
                  sale_price: qe ? '3500' : '3250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3.75',
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: P + 'previews/hoodie-with-pocket.jpg',
                    thumbnail: P + 'previews/hoodie-with-pocket.jpg',
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
                name: (0, c.__)('T-Shirt', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-t-shirt',
                short_description: (0, c.__)('T-Shirt', 'woocommerce'),
                description: (0, c.__)('T-Shirt', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: qe ? '1800' : '1500',
                  regular_price: qe ? '1800' : '1500',
                  sale_price: qe ? '1800' : '1500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: P + 'previews/tshirt.jpg',
                    thumbnail: P + 'previews/tshirt.jpg',
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
                name: (0, c.__)('Fee', 'woocommerce'),
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
            needs_shipping: (0, _.getSetting)('shippingEnabled', !0),
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
                { name: (0, c.__)('Sales tax', 'woocommerce'), rate: '20%', price: '820' },
              ],
            },
            errors: [],
            payment_methods: ['cod', 'bacs', 'cheque'],
            payment_requirements: ['products'],
            extensions: {},
          },
          Ge = window.wp.hooks,
          Qe = () => ({
            dispatchStoreEvent: (0, p.useCallback)((e, t = {}) => {
              try {
                (0, Ge.doAction)(`experimental__woocommerce_blocks-${e}`, t);
              } catch (e) {
                console.error(e);
              }
            }, []),
            dispatchCheckoutEvent: (0, p.useCallback)((e, t = {}) => {
              try {
                (0, Ge.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
                  ...t,
                  storeCart: (0, K.select)('wc/store/cart').getCartData(),
                });
              } catch (e) {
                console.error(e);
              }
            }, []),
          }),
          Ze = () => {
            const {
                shippingRates: e,
                needsShipping: t,
                hasCalculatedShipping: o,
                isLoadingRates: r,
                isCollectable: c,
                isSelectingRate: n,
              } = (0, K.useSelect)(e => {
                const t = !!e('core/editor'),
                  o = e(Z.CART_STORE_KEY),
                  r = t ? We.shipping_rates : o.getShippingRates();
                return {
                  shippingRates: r,
                  needsShipping: t ? We.needs_shipping : o.getNeedsShipping(),
                  hasCalculatedShipping: t
                    ? We.has_calculated_shipping
                    : o.getHasCalculatedShipping(),
                  isLoadingRates: !t && o.isCustomerDataUpdating(),
                  isCollectable: r.every(({ shipping_rates: e }) =>
                    e.find(({ method_id: e }) => Ue(e)),
                  ),
                  isSelectingRate: !t && o.isShippingRateBeingSelected(),
                };
              }),
              a = (0, p.useRef)({});
            (0, p.useEffect)(() => {
              const t = (e =>
                Object.fromEntries(
                  e.map(({ package_id: e, shipping_rates: t }) => {
                    var o;
                    return [
                      e,
                      (null === (o = t.find(e => e.selected)) || void 0 === o
                        ? void 0
                        : o.rate_id) || '',
                    ];
                  }),
                ))(e);
              (0, he.isObject)(t) && !ze()(a.current, t) && (a.current = t);
            }, [e]);
            const { selectShippingRate: s } = (0, K.useDispatch)(Z.CART_STORE_KEY),
              i = Ue(Object.values(a.current).map(e => e.split(':')[0])),
              { dispatchCheckoutEvent: l } = Qe(),
              m = (0, p.useCallback)(
                (e, t) => {
                  let o;
                  void 0 !== e &&
                    ((o = Ue(e.split(':')[0]) ? s(e, null) : s(e, t)),
                    o
                      .then(() => {
                        l('set-selected-shipping-rate', { shippingRateId: e });
                      })
                      .catch(e => {
                        (0, Z.processErrorResponse)(e);
                      }));
                },
                [s, l],
              );
            return {
              isSelectingRate: n,
              selectedRates: a.current,
              selectShippingRate: m,
              shippingRates: e,
              needsShipping: t,
              hasCalculatedShipping: o,
              isLoadingRates: r,
              isCollectable: c,
              hasSelectedLocalPickup: i,
            };
          },
          { NONE: Je, INVALID_ADDRESS: Xe, UNKNOWN: et } = ae,
          tt = (0, p.createContext)(ie),
          ot = () => (0, p.useContext)(tt),
          rt = ({ children: e }) => {
            const { __internalIncrementCalculating: t, __internalDecrementCalculating: o } = (0,
              K.useDispatch)(Z.CHECKOUT_STORE_KEY),
              { shippingRates: c, isLoadingRates: n, cartErrors: a } = Ve(),
              { selectedRates: s, isSelectingRate: i } = Ze(),
              [l, m] = (0, p.useReducer)(le, Je),
              [u, d] = (0, p.useReducer)(oe, {}),
              _ = (0, p.useRef)(u),
              h = (0, p.useMemo)(
                () => ({
                  onShippingRateSuccess: _e(d).onSuccess,
                  onShippingRateFail: _e(d).onFail,
                  onShippingRateSelectSuccess: _e(d).onSelectSuccess,
                  onShippingRateSelectFail: _e(d).onSelectFail,
                }),
                [d],
              );
            (0, p.useEffect)(() => {
              _.current = u;
            }, [u]),
              (0, p.useEffect)(() => {
                n ? t() : o();
              }, [n, t, o]),
              (0, p.useEffect)(() => {
                i ? t() : o();
              }, [t, o, i]),
              (0, p.useEffect)(() => {
                a.length > 0 && a.some(e => !(!e.code || !Object.values(se).includes(e.code)))
                  ? m({ type: Xe })
                  : m({ type: Je });
              }, [a]);
            const g = (0, p.useMemo)(
              () => ({
                isPristine: l === Je,
                isValid: l === Je,
                hasInvalidAddress: l === Xe,
                hasError: l === et || l === Xe,
              }),
              [l],
            );
            (0, p.useEffect)(() => {
              n ||
                (0 !== c.length && !g.hasError) ||
                ke(_.current, ue, { hasInvalidAddress: g.hasInvalidAddress, hasError: g.hasError });
            }, [c, n, g.hasError, g.hasInvalidAddress]),
              (0, p.useEffect)(() => {
                !n && c.length > 0 && !g.hasError && ke(_.current, me, c);
              }, [c, n, g.hasError]),
              (0, p.useEffect)(() => {
                i ||
                  (g.hasError
                    ? ke(_.current, pe, {
                        hasError: g.hasError,
                        hasInvalidAddress: g.hasInvalidAddress,
                      })
                    : ke(_.current, de, s.current));
              }, [s, i, g.hasError, g.hasInvalidAddress]);
            const w = {
              shippingErrorStatus: g,
              dispatchErrorStatus: m,
              shippingErrorTypes: ae,
              ...h,
            };
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(tt.Provider, { value: w }, e),
            );
          };
        function ct(e, t) {
          const o = (0, p.useRef)();
          return (
            (0, p.useEffect)(() => {
              o.current === e || (t && !t(e, o.current)) || (o.current = e);
            }, [e, t]),
            o.current
          );
        }
        const nt = {},
          at = {},
          st = () => nt,
          it = () => at,
          lt = (0, p.createContext)({
            onSubmit: () => {},
            onCheckoutAfterProcessingWithSuccess: () => () => {},
            onCheckoutAfterProcessingWithError: () => () => {},
            onCheckoutBeforeProcessing: () => () => {},
            onCheckoutValidationBeforeProcessing: () => () => {},
            onCheckoutSuccess: () => () => {},
            onCheckoutFail: () => () => {},
            onCheckoutValidation: () => () => {},
          }),
          mt = () => (0, p.useContext)(lt),
          ut = ({ children: e, redirectUrl: t }) => {
            const o = st(),
              c = it(),
              { isEditor: n } = W(),
              { __internalUpdateAvailablePaymentMethods: a } = (0, K.useDispatch)(
                Z.PAYMENT_STORE_KEY,
              );
            (0, p.useEffect)(() => {
              (n || 0 !== Object.keys(o).length || 0 !== Object.keys(c).length) && a();
            }, [n, o, c, a]);
            const {
                __internalSetRedirectUrl: s,
                __internalEmitValidateEvent: i,
                __internalEmitAfterProcessingEvents: l,
                __internalSetBeforeProcessing: m,
              } = (0, K.useDispatch)(Z.CHECKOUT_STORE_KEY),
              {
                checkoutRedirectUrl: u,
                checkoutStatus: d,
                isCheckoutBeforeProcessing: _,
                isCheckoutAfterProcessing: h,
                checkoutHasError: g,
                checkoutOrderId: w,
                checkoutOrderNotes: k,
                checkoutCustomerId: E,
              } = (0, K.useSelect)(e => {
                const t = e(Z.CHECKOUT_STORE_KEY);
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
            t && t !== u && s(t);
            const { setValidationErrors: y } = (0, K.useDispatch)(Z.VALIDATION_STORE_KEY),
              { dispatchCheckoutEvent: b } = Qe(),
              { checkoutNotices: v, paymentNotices: f, expressPaymentNotices: C } = (0,
              K.useSelect)(e => {
                const { getNotices: t } = e('core/notices');
                return {
                  checkoutNotices: Object.values(we)
                    .filter(e => e !== we.PAYMENTS && e !== we.EXPRESS_PAYMENTS)
                    .reduce((e, o) => [...e, ...t(o)], []),
                  paymentNotices: t(we.PAYMENTS),
                  expressPaymentNotices: t(we.EXPRESS_PAYMENTS),
                };
              }, []),
              [S, P] = (0, p.useReducer)(oe, {}),
              N = (0, p.useRef)(S),
              { onCheckoutValidation: x, onCheckoutSuccess: R, onCheckoutFail: T } = (e =>
                (0, p.useMemo)(
                  () => ({
                    onCheckoutSuccess: re('checkout_success', e),
                    onCheckoutFail: re('checkout_fail', e),
                    onCheckoutValidation: re('checkout_validation', e),
                  }),
                  [e],
                ))(P);
            (0, p.useEffect)(() => {
              N.current = S;
            }, [S]);
            const A = (0, p.useMemo)(
                () =>
                  function(...e) {
                    return (
                      X()('onCheckoutBeforeProcessing', {
                        alternative: 'onCheckoutValidation',
                        plugin: 'WooCommerce Blocks',
                      }),
                      x(...e)
                    );
                  },
                [x],
              ),
              I = (0, p.useMemo)(
                () =>
                  function(...e) {
                    return (
                      X()('onCheckoutValidationBeforeProcessing', {
                        since: '9.7.0',
                        alternative: 'onCheckoutValidation',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      x(...e)
                    );
                  },
                [x],
              ),
              B = (0, p.useMemo)(
                () =>
                  function(...e) {
                    return (
                      X()('onCheckoutAfterProcessingWithSuccess', {
                        since: '9.7.0',
                        alternative: 'onCheckoutSuccess',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      R(...e)
                    );
                  },
                [R],
              ),
              O = (0, p.useMemo)(
                () =>
                  function(...e) {
                    return (
                      X()('onCheckoutAfterProcessingWithError', {
                        since: '9.7.0',
                        alternative: 'onCheckoutFail',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      T(...e)
                    );
                  },
                [T],
              );
            (0, p.useEffect)(() => {
              _ && i({ observers: N.current, setValidationErrors: y });
            }, [_, y, i]);
            const M = ct(d),
              D = ct(g);
            (0, p.useEffect)(() => {
              (d === M && g === D) ||
                (h &&
                  l({
                    observers: N.current,
                    notices: { checkoutNotices: v, paymentNotices: f, expressPaymentNotices: C },
                  }));
            }, [d, g, u, w, E, k, h, _, M, D, v, C, f, i, l]);
            const L = {
              onSubmit: (0, p.useCallback)(() => {
                b('submit'), m();
              }, [b, m]),
              onCheckoutBeforeProcessing: A,
              onCheckoutValidationBeforeProcessing: I,
              onCheckoutAfterProcessingWithSuccess: B,
              onCheckoutAfterProcessingWithError: O,
              onCheckoutSuccess: R,
              onCheckoutFail: T,
              onCheckoutValidation: x,
            };
            return (0, r.createElement)(lt.Provider, { value: L }, e);
          },
          dt = window.wp.apiFetch;
        var pt = o.n(dt);
        (0, c.__)('Something went wrong. Please contact us to get assistance.', 'woocommerce');
        const _t = window.wc.wcBlocksRegistry,
          ht = (e, t, o) => {
            const r = Object.keys(e).map(t => ({ key: t, value: e[t] }), []),
              c = `wc-${o}-new-payment-method`;
            return r.push({ key: c, value: t }), r;
          },
          gt = e => {
            if (!e) return;
            const { __internalSetCustomerId: t } = (0, K.dispatch)(Z.CHECKOUT_STORE_KEY);
            pt().setNonce && 'function' == typeof pt().setNonce && pt().setNonce(e),
              null != e && e.get('User-ID') && t(parseInt(e.get('User-ID') || '0', 10));
          },
          wt = () => {
            const { onCheckoutValidation: e } = mt(),
              {
                hasError: t,
                redirectUrl: o,
                isProcessing: r,
                isBeforeProcessing: n,
                isComplete: a,
                orderNotes: s,
                shouldCreateAccount: i,
                extensionData: l,
                customerId: m,
                additionalFields: u,
              } = (0, K.useSelect)(e => {
                const t = e(Z.CHECKOUT_STORE_KEY);
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
              { __internalSetHasError: d, __internalProcessCheckoutResponse: _ } = (0,
              K.useDispatch)(Z.CHECKOUT_STORE_KEY),
              h = (0, K.useSelect)(e => e(Z.VALIDATION_STORE_KEY).hasValidationErrors),
              { shippingErrorStatus: g } = ot(),
              { billingAddress: w, shippingAddress: k } = (0, K.useSelect)(e =>
                e(Z.CART_STORE_KEY).getCustomerData(),
              ),
              { cartNeedsPayment: E, cartNeedsShipping: y, receiveCartContents: b } = Ve(),
              {
                activePaymentMethod: v,
                paymentMethodData: f,
                isExpressPaymentMethodActive: C,
                hasPaymentError: S,
                isPaymentReady: P,
                shouldSavePayment: N,
              } = (0, K.useSelect)(e => {
                const t = e(Z.PAYMENT_STORE_KEY);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                  isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
                  hasPaymentError: t.hasPaymentError(),
                  isPaymentReady: t.isPaymentReady(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }, []),
              x = (0, _t.getPaymentMethods)(),
              R = (0, _t.getExpressPaymentMethods)(),
              T = (0, p.useRef)(w),
              A = (0, p.useRef)(k),
              I = (0, p.useRef)(o),
              [B, O] = (0, p.useState)(!1),
              M = (0, p.useMemo)(() => {
                var e;
                const t = { ...R, ...x };
                return null == t || null === (e = t[v]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [v, R, x]),
              D = (h() && !C) || S || g.hasError,
              L = !t && !D && (P || !E) && r;
            (0, p.useEffect)(() => {
              D === t || (!r && !n) || C || d(D);
            }, [D, t, r, n, C, d]),
              (0, p.useEffect)(() => {
                (T.current = w), (A.current = k), (I.current = o);
              }, [w, k, o]);
            const F = (0, p.useCallback)(
              () =>
                h()
                  ? void 0 !==
                      (0, K.select)(Z.VALIDATION_STORE_KEY).getValidationError(
                        'shipping-rates-error',
                      ) && {
                      errorMessage: (0, c.__)(
                        'Sorry, this order requires a shipping option.',
                        'woocommerce',
                      ),
                    }
                  : S
                  ? {
                      errorMessage: (0, c.__)(
                        'There was a problem with your payment option.',
                        'woocommerce',
                      ),
                      context: 'wc/checkout/payments',
                    }
                  : !g.hasError || {
                      errorMessage: (0, c.__)(
                        'There was a problem with your shipping option.',
                        'woocommerce',
                      ),
                      context: 'wc/checkout/shipping-methods',
                    },
              [h, S, g.hasError],
            );
            (0, p.useEffect)(() => {
              let t;
              return (
                C || (t = e(F, 0)),
                () => {
                  C || 'function' != typeof t || t();
                }
              );
            }, [e, F, C]),
              (0, p.useEffect)(() => {
                I.current && (window.location.href = I.current);
              }, [a]);
            const V = (0, p.useCallback)(async () => {
              if (B) return;
              O(!0),
                (() => {
                  const e = (0, K.select)('wc/store/store-notices').getRegisteredContainers(),
                    { removeNotice: t } = (0, K.dispatch)('core/notices'),
                    { getNotices: o } = (0, K.select)('core/notices');
                  e.forEach(e => {
                    o(e).forEach(o => {
                      t(o.id, e);
                    });
                  });
                })();
              const e = E ? { payment_method: M, payment_data: ht(f, N, v) } : {},
                t = {
                  shipping_address: y ? Ne(A.current) : void 0,
                  billing_address: Ne(T.current),
                  additional_fields: u,
                  customer_note: s,
                  create_account: i,
                  ...e,
                  extensions: { ...l },
                };
              pt()({
                path: '/wc/store/v1/checkout',
                method: 'POST',
                data: t,
                cache: 'no-store',
                parse: !1,
              })
                .then(e => {
                  if (((0, he.assertResponseIsValid)(e), gt(e.headers), !e.ok)) throw e;
                  return e.json();
                })
                .then(e => {
                  _(e), O(!1);
                })
                .catch(e => {
                  gt(null == e ? void 0 : e.headers);
                  try {
                    e.json()
                      .then(e => e)
                      .then(e => {
                        var t;
                        null !== (t = e.data) && void 0 !== t && t.cart && b(e.data.cart),
                          (0, Z.processErrorResponse)(e),
                          _(e);
                      });
                  } catch {
                    let e = (0, c.__)(
                      'Something went wrong when placing the order. Check your email for order updates before retrying.',
                      'woocommerce',
                    );
                    0 !== m &&
                      (e = (0, c.__)(
                        "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                        'woocommerce',
                      )),
                      (0, Z.processErrorResponse)({
                        code: 'unknown_error',
                        message: e,
                        data: null,
                      });
                  }
                  d(!0), O(!1);
                });
            }, [B, E, M, f, N, v, s, i, l, u, y, b, d, _]);
            return (
              (0, p.useEffect)(() => {
                L && !B && V();
              }, [V, L, B]),
              null
            );
          },
          kt = ({ children: e, redirectUrl: t }) =>
            (0, r.createElement)(
              ut,
              { redirectUrl: t },
              (0, r.createElement)(
                rt,
                null,
                (0, r.createElement)(
                  ne,
                  null,
                  e,
                  (0, r.createElement)(
                    z,
                    { renderError: _.CURRENT_USER_IS_ADMIN ? null : () => null },
                    (0, r.createElement)(Q.PluginArea, { scope: 'woocommerce-checkout' }),
                  ),
                  (0, r.createElement)(wt, null),
                ),
              ),
            ),
          Et = ({ children: e, redirectUrl: t }) => (0, r.createElement)(kt, { redirectUrl: t }, e),
          yt = window.wc.blocksCheckout,
          bt = (0, r.createElement)(
            i.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, r.createElement)(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              (0, r.createElement)('path', { d: 'M0 0h24v24H0z' }),
              (0, r.createElement)('path', {
                fill: 'currentColor',
                fillRule: 'nonzero',
                d:
                  'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45ZM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z',
              }),
            ),
            ' ',
          );
        var vt = o(9491);
        const ft = (0, p.createContext)({
            hasContainerWidth: !1,
            containerClassName: '',
            isMobile: !1,
            isSmall: !1,
            isMedium: !1,
            isLarge: !1,
          }),
          Ct = ({ children: e, className: t = '' }) => {
            const [o, c] = (() => {
                const [e, { width: t }] = (0, vt.useResizeObserver)();
                let o = '';
                return (
                  t > 700
                    ? (o = 'is-large')
                    : t > 520
                    ? (o = 'is-medium')
                    : t > 400
                    ? (o = 'is-small')
                    : t && (o = 'is-mobile'),
                  [e, o]
                );
              })(),
              n = {
                hasContainerWidth: '' !== c,
                containerClassName: c,
                isMobile: 'is-mobile' === c,
                isSmall: 'is-small' === c,
                isMedium: 'is-medium' === c,
                isLarge: 'is-large' === c,
              };
            return (0, r.createElement)(
              ft.Provider,
              { value: n },
              (0, r.createElement)('div', { className: a()(t, c) }, o, e),
            );
          };
        o(1221);
        const St = ({ children: e, className: t }) =>
            (0, r.createElement)(
              Ct,
              { className: a()('wc-block-components-sidebar-layout', t) },
              e,
            ),
          Pt = ['core/paragraph', 'core/image', 'core/separator'],
          Nt = e => {
            const t = (0, yt.applyCheckoutFilter)({
              filterName: 'additionalCartCheckoutInnerBlockTypes',
              defaultValue: [],
              extensions: (0, K.select)(Z.CART_STORE_KEY).getCartData().extensions,
              arg: { block: e },
              validation: e => {
                if (Array.isArray(e) && e.every(e => 'string' == typeof e)) return !0;
                throw new Error('allowedBlockTypes filters must return an array of strings.');
              },
            });
            return Array.from(
              new Set([
                ...(0, u.getBlockTypes)()
                  .filter(t => ((null == t ? void 0 : t.parent) || []).includes(e))
                  .map(({ name: e }) => e),
                ...Pt,
                ...t,
              ]),
            );
          },
          xt = ({ clientId: e, registeredBlocks: t, defaultTemplate: o = [] }) => {
            const r = (0, p.useRef)(t),
              c = (0, p.useRef)(o),
              n = (0, K.useRegistry)(),
              { isPreview: a } = W();
            (0, p.useEffect)(() => {
              let t = !1;
              if (a) return;
              const { replaceInnerBlocks: o } = (0, K.dispatch)('core/block-editor');
              return n.subscribe(() => {
                if (!n.select('core/block-editor').getBlock(e)) return;
                const a = n.select('core/block-editor').getBlocks(e);
                if (0 === a.length && c.current.length > 0 && !t) {
                  const r = (0, u.createBlocksFromInnerBlocksTemplate)(c.current);
                  if (0 !== r.length) return (t = !0), void o(e, r);
                }
                const s = r.current.map(e => (0, u.getBlockType)(e)),
                  i = ((e, t) => {
                    const o = t.filter(
                        e =>
                          e &&
                          (({ attributes: e }) => {
                            var t, o, r;
                            return Boolean(
                              (null === (t = e.lock) || void 0 === t ? void 0 : t.remove) ||
                                (null === (o = e.lock) ||
                                void 0 === o ||
                                null === (r = o.default) ||
                                void 0 === r
                                  ? void 0
                                  : r.remove),
                            );
                          })(e),
                      ),
                      r = [];
                    return (
                      o.forEach(t => {
                        if (void 0 === t) return;
                        const o = e.find(e => e.name === t.name);
                        o || r.push(t);
                      }),
                      r
                    );
                  })(a, s);
                if (0 === i.length) return;
                let l = -1;
                const m = i.map(e => {
                  const t = c.current.findIndex(([t]) => t === e.name),
                    o = (0, u.createBlock)(e.name);
                  return (
                    -1 === l &&
                      (l = (({
                        defaultTemplatePosition: e,
                        innerBlocks: t,
                        currentDefaultTemplate: o,
                      }) => {
                        switch (e) {
                          case -1:
                            return t.length;
                          case 0:
                            return 0;
                          default:
                            const r = o.current[e - 1],
                              c = t.findIndex(({ name: e }) => e === r[0]);
                            return -1 === c ? e : c + 1;
                        }
                      })({
                        defaultTemplatePosition: t,
                        innerBlocks: a,
                        currentDefaultTemplate: c,
                      })),
                    o
                  );
                });
                n.batch(() => {
                  n.dispatch('core/block-editor').insertBlocks(m, l, e);
                });
              }, 'core/block-editor');
            }, [e, a, n]);
          };
        o(1876);
        const Rt = (0, p.createContext)({ hasDarkControls: !1 });
        (0, u.registerBlockType)('woocommerce/filled-cart-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: bt,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, s.useBlockProps)(),
              { currentView: o } = W(),
              { hasDarkControls: c } = (0, p.useContext)(Rt),
              n = Nt(yt.innerBlockAreas.FILLED_CART),
              i = [
                ['woocommerce/cart-items-block', {}, []],
                ['woocommerce/cart-totals-block', {}, []],
              ];
            return (
              xt({ clientId: e, registeredBlocks: n, defaultTemplate: i }),
              (0, r.createElement)(
                'div',
                { ...t, hidden: 'woocommerce/filled-cart-block' !== o },
                (0, r.createElement)(
                  St,
                  { className: a()('wc-block-cart', { 'has-dark-controls': c }) },
                  (0, r.createElement)(s.InnerBlocks, {
                    allowedBlocks: n,
                    template: i,
                    templateLock: 'insert',
                  }),
                ),
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...s.useBlockProps.save() },
              (0, r.createElement)(s.InnerBlocks.Content, null),
            ),
        });
        var Tt = o(2172);
        const At = (0, p.forwardRef)(({ children: e, className: t = '' }, o) =>
          (0, r.createElement)('div', { ref: o, className: a()('wc-block-components-main', t) }, e),
        );
        (0, u.registerBlockType)('woocommerce/cart-items-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Tt.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, s.useBlockProps)({ className: 'wc-block-cart__main' }),
              o = Nt(yt.innerBlockAreas.CART_ITEMS),
              c = [
                ['woocommerce/cart-line-items-block', {}, []],
                ['woocommerce/cart-cross-sells-block', {}, []],
              ];
            return (
              xt({ clientId: e, registeredBlocks: o, defaultTemplate: c }),
              (0, r.createElement)(
                At,
                { ...t },
                (0, r.createElement)(s.InnerBlocks, {
                  allowedBlocks: o,
                  template: c,
                  templateLock: !1,
                  renderAppender: s.InnerBlocks.ButtonBlockAppender,
                }),
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...s.useBlockProps.save() },
              (0, r.createElement)(s.InnerBlocks.Content, null),
            ),
        });
        var It = o(8107),
          Bt = o(4717);
        const Ot = ['BUTTON', 'FIELDSET', 'INPUT', 'OPTGROUP', 'OPTION', 'SELECT', 'TEXTAREA', 'A'],
          Mt = ({ children: e, style: t = {}, ...o }) => {
            const c = (0, p.useRef)(null),
              n = () => {
                c.current &&
                  It.focus.focusable.find(c.current).forEach(e => {
                    Ot.includes(e.nodeName) && e.setAttribute('tabindex', '-1'),
                      e.hasAttribute('contenteditable') &&
                        e.setAttribute('contenteditable', 'false');
                  });
              },
              a = (0, Bt.YQ)(n, 0, { leading: !0 });
            return (
              (0, p.useLayoutEffect)(() => {
                let e;
                return (
                  n(),
                  c.current &&
                    ((e = new window.MutationObserver(a)),
                    e.observe(c.current, { childList: !0, attributes: !0, subtree: !0 })),
                  () => {
                    e && e.disconnect(), a.cancel();
                  }
                );
              }, [a]),
              (0, r.createElement)(
                'div',
                {
                  ref: c,
                  'aria-disabled': 'true',
                  style: { userSelect: 'none', pointerEvents: 'none', cursor: 'normal', ...t },
                  ...o,
                },
                e,
              )
            );
          };
        var Dt = o(195),
          Lt = o(8558);
        o(5193);
        const Ft = ({
            className: e,
            quantity: t = 1,
            minimum: o = 1,
            maximum: n,
            onChange: s = () => {},
            step: i = 1,
            itemName: l = '',
            disabled: m,
          }) => {
            const u = a()('wc-block-components-quantity-selector', e),
              d = (0, p.useRef)(null),
              _ = (0, p.useRef)(null),
              h = (0, p.useRef)(null),
              g = void 0 !== n,
              w = !m && t - i >= o,
              k = !m && (!g || t + i <= n),
              E = (0, p.useCallback)(
                e => {
                  let t = e;
                  g && (t = Math.min(t, Math.floor(n / i) * i)),
                    (t = Math.max(t, Math.ceil(o / i) * i)),
                    (t = Math.floor(t / i) * i),
                    t !== e && s(t);
                },
                [g, n, o, s, i],
              ),
              y = (0, Bt.YQ)(E, 300);
            (0, p.useLayoutEffect)(() => {
              E(t);
            }, [t, E]);
            const b = (0, p.useCallback)(
              e => {
                const o = void 0 !== typeof e.key ? 'ArrowDown' === e.key : e.keyCode === Lt.DOWN,
                  r = void 0 !== typeof e.key ? 'ArrowUp' === e.key : e.keyCode === Lt.UP;
                o && w && (e.preventDefault(), s(t - i)), r && k && (e.preventDefault(), s(t + i));
              },
              [t, s, k, w, i],
            );
            return (0, r.createElement)(
              'div',
              { className: u },
              (0, r.createElement)('input', {
                ref: d,
                className: 'wc-block-components-quantity-selector__input',
                disabled: m,
                type: 'number',
                step: i,
                min: o,
                max: n,
                value: t,
                onKeyDown: b,
                onChange: e => {
                  let o = parseInt(e.target.value, 10);
                  (o = isNaN(o) ? t : o), o !== t && (s(o), y(o));
                },
                'aria-label': (0,
                c.sprintf) /* translators: %s refers to the item name in the cart. */(
                  /* translators: %s refers to the item name in the cart. */
                  (0, c.__)('Quantity of %s in your cart.', 'woocommerce'),
                  l,
                ),
              }),
              (0, r.createElement)(
                'button',
                {
                  ref: _,
                  'aria-label': (0,
                  c.sprintf) /* translators: %s refers to the item name in the cart. */(
                    /* translators: %s refers to the item name in the cart. */
                    (0, c.__)('Reduce quantity of %s', 'woocommerce'),
                    l,
                  ),
                  className:
                    'wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus',
                  disabled: !w,
                  onClick: () => {
                    const e = t - i;
                    s(e),
                      (0, Dt.speak)(
                        (0,
                        c.sprintf) /* translators: %s refers to the item's new quantity in the cart. */(
                          /* translators: %s refers to the item's new quantity in the cart. */
                          (0, c.__)('Quantity reduced to %s.', 'woocommerce'),
                          e,
                        ),
                      ),
                      E(e);
                  },
                },
                '－',
              ),
              (0, r.createElement)(
                'button',
                {
                  ref: h,
                  'aria-label': (0,
                  c.sprintf) /* translators: %s refers to the item's name in the cart. */(
                    /* translators: %s refers to the item's name in the cart. */
                    (0, c.__)('Increase quantity of %s', 'woocommerce'),
                    l,
                  ),
                  disabled: !k,
                  className:
                    'wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus',
                  onClick: () => {
                    const e = t + i;
                    s(e),
                      (0, Dt.speak)(
                        (0,
                        c.sprintf) /* translators: %s refers to the item's new quantity in the cart. */(
                          /* translators: %s refers to the item's new quantity in the cart. */
                          (0, c.__)('Quantity increased to %s.', 'woocommerce'),
                          e,
                        ),
                      ),
                      E(e);
                  },
                },
                '＋',
              ),
            );
          },
          Vt = window.wc.blocksComponents,
          jt = window.wc.priceFormat;
        o(4567);
        const Yt = ({
            currency: e,
            maxPrice: t,
            minPrice: o,
            priceClassName: n,
            priceStyle: s = {},
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, c.sprintf) /* translators: %1$s min price, %2$s max price */(
                  /* translators: %1$s min price, %2$s max price */
                  (0, c.__)('Price between %1$s and %2$s', 'woocommerce'),
                  (0, jt.formatPrice)(o),
                  (0, jt.formatPrice)(t),
                ),
              ),
              (0, r.createElement)(
                'span',
                { 'aria-hidden': !0 },
                (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                  className: a()('wc-block-components-product-price__value', n),
                  currency: e,
                  value: o,
                  style: s,
                }),
                ' — ',
                (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                  className: a()('wc-block-components-product-price__value', n),
                  currency: e,
                  value: t,
                  style: s,
                }),
              ),
            ),
          $t = ({
            currency: e,
            regularPriceClassName: t,
            regularPriceStyle: o,
            regularPrice: n,
            priceClassName: s,
            priceStyle: i,
            price: l,
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, c.__)('Previous price:', 'woocommerce'),
              ),
              (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, r.createElement)(
                    'del',
                    { className: a()('wc-block-components-product-price__regular', t), style: o },
                    e,
                  ),
                value: n,
              }),
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, c.__)('Discounted price:', 'woocommerce'),
              ),
              (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, r.createElement)(
                    'ins',
                    {
                      className: a()(
                        'wc-block-components-product-price__value',
                        'is-discounted',
                        s,
                      ),
                      style: i,
                    },
                    e,
                  ),
                value: l,
              }),
            ),
          Ut = ({
            align: e,
            className: t,
            currency: o,
            format: c = '<price/>',
            maxPrice: n,
            minPrice: s,
            price: i,
            priceClassName: l,
            priceStyle: m,
            regularPrice: u,
            regularPriceClassName: d,
            regularPriceStyle: _,
            style: h,
          }) => {
            const g = a()(t, 'price', 'wc-block-components-product-price', {
              [`wc-block-components-product-price--align-${e}`]: e,
            });
            c.includes('<price/>') ||
              ((c = '<price/>'),
              console.error('Price formats need to include the `<price/>` tag.'));
            const w = u && i && i < u;
            let k = (0, r.createElement)('span', {
              className: a()('wc-block-components-product-price__value', l),
            });
            return (
              w
                ? (k = (0, r.createElement)($t, {
                    currency: o,
                    price: i,
                    priceClassName: l,
                    priceStyle: m,
                    regularPrice: u,
                    regularPriceClassName: d,
                    regularPriceStyle: _,
                  }))
                : void 0 !== s && void 0 !== n
                ? (k = (0, r.createElement)(Yt, {
                    currency: o,
                    maxPrice: n,
                    minPrice: s,
                    priceClassName: l,
                    priceStyle: m,
                  }))
                : i &&
                  (k = (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                    className: a()('wc-block-components-product-price__value', l),
                    currency: o,
                    value: i,
                    style: m,
                  })),
              (0, r.createElement)(
                'span',
                { className: g, style: h },
                (0, p.createInterpolateElement)(c, { price: k }),
              )
            );
          };
        o(6625);
        const Ht = ({
          className: e = '',
          disabled: t = !1,
          name: o,
          permalink: c = '',
          target: n,
          rel: s,
          style: i,
          onClick: l,
          ...m
        }) => {
          const u = a()('wc-block-components-product-name', e);
          if (t) {
            const e = m;
            return (0, r.createElement)('span', {
              className: u,
              ...e,
              dangerouslySetInnerHTML: { __html: (0, be.decodeEntities)(o) },
            });
          }
          return (0, r.createElement)('a', {
            className: u,
            href: c,
            target: n,
            ...m,
            dangerouslySetInnerHTML: { __html: (0, be.decodeEntities)(o) },
            style: i,
          });
        };
        var zt = o(131);
        o(9507);
        const Kt = ({ children: e, className: t }) =>
            (0, r.createElement)(
              'div',
              { className: a()('wc-block-components-product-badge', t) },
              e,
            ),
          qt = () =>
            (0, r.createElement)(
              Kt,
              { className: 'wc-block-components-product-backorder-badge' },
              (0, c.__)('Available on backorder', 'woocommerce'),
            ),
          Wt = ({ image: e = {}, fallbackAlt: t = '' }) => {
            const o = e.thumbnail
              ? { src: e.thumbnail, alt: (0, be.decodeEntities)(e.alt) || t || 'Product Image' }
              : { src: _.PLACEHOLDER_IMG_SRC, alt: '' };
            return (0, r.createElement)('img', { ...o, alt: o.alt });
          },
          Gt = ({ lowStockRemaining: e }) =>
            e
              ? (0, r.createElement)(
                  Kt,
                  { className: 'wc-block-components-product-low-stock-badge' },
                  (0,
                  c.sprintf) /* translators: %d stock amount (number of items in stock for product) */(
                    /* translators: %d stock amount (number of items in stock for product) */
                    (0, c.__)('%d left in stock', 'woocommerce'),
                    e,
                  ),
                )
              : null;
        var Qt = o(1194);
        o(4982);
        const Zt = ({ details: e = [] }) =>
            Array.isArray(e)
              ? 0 === (e = e.filter(e => !e.hidden)).length
                ? null
                : (0, r.createElement)(
                    'ul',
                    { className: 'wc-block-components-product-details' },
                    e.map(e => {
                      const t = (null == e ? void 0 : e.key) || e.name || '',
                        o =
                          (null == e ? void 0 : e.className) ||
                          (t ? `wc-block-components-product-details__${(0, Qt.c)(t)}` : '');
                      return (0, r.createElement)(
                        'li',
                        { key: t + (e.display || e.value), className: o },
                        t &&
                          (0, r.createElement)(
                            r.Fragment,
                            null,
                            (0, r.createElement)(
                              'span',
                              { className: 'wc-block-components-product-details__name' },
                              (0, be.decodeEntities)(t),
                              ':',
                            ),
                            ' ',
                          ),
                        (0, r.createElement)(
                          'span',
                          { className: 'wc-block-components-product-details__value' },
                          (0, be.decodeEntities)(e.display || e.value),
                        ),
                      );
                    }),
                  )
              : null,
          Jt = window.wp.autop,
          Xt = e => e.replace(/<\/?[a-z][^>]*?>/gi, ''),
          eo = (e, t) => e.replace(/[\s|\.\,]+$/i, '') + t,
          to = window.wp.wordcount,
          oo = ({
            source: e,
            maxLength: t = 15,
            countType: o = 'words',
            className: c = '',
            style: n = {},
          }) => {
            const a = (0, p.useMemo)(
              () =>
                ((e, t = 15, o = 'words') => {
                  const r = (0, Jt.autop)(e);
                  if ((0, to.count)(r, o) <= t) return r;
                  const c = (e => {
                    const t = e.indexOf('</p>');
                    return -1 === t ? e : e.substr(0, t + 4);
                  })(r);
                  return (0, to.count)(c, o) <= t
                    ? c
                    : 'words' === o
                    ? ((e, t, o = '&hellip;', r = !0) => {
                        const c = Xt(e),
                          n = c
                            .split(' ')
                            .splice(0, t)
                            .join(' ');
                        return n === c
                          ? r
                            ? (0, Jt.autop)(c)
                            : c
                          : r
                          ? (0, Jt.autop)(eo(n, o))
                          : eo(n, o);
                      })(c, t)
                    : ((e, t, o = !0, r = '&hellip;', c = !0) => {
                        const n = Xt(e),
                          a = n.slice(0, t);
                        if (a === n) return c ? (0, Jt.autop)(n) : n;
                        if (o) return (0, Jt.autop)(eo(a, r));
                        const s = a.match(/([\s]+)/g),
                          i = s ? s.length : 0,
                          l = n.slice(0, t + i);
                        return c ? (0, Jt.autop)(eo(l, r)) : eo(l, r);
                      })(c, t, 'characters_including_spaces' === o);
                })(e, t, o),
              [e, t, o],
            );
            return (0, r.createElement)(p.RawHTML, { style: n, className: c }, a);
          },
          ro = ({ className: e, shortDescription: t = '', fullDescription: o = '' }) => {
            const c = t || o;
            return c
              ? (0, r.createElement)(oo, {
                  className: e,
                  source: c,
                  maxLength: 15,
                  countType: S.wordCountType || 'words',
                })
              : null;
          };
        o(401);
        const co = ({
            shortDescription: e = '',
            fullDescription: t = '',
            itemData: o = [],
            variation: c = [],
          }) =>
            (0, r.createElement)(
              'div',
              { className: 'wc-block-components-product-metadata' },
              (0, r.createElement)(ro, {
                className: 'wc-block-components-product-metadata__description',
                shortDescription: e,
                fullDescription: t,
              }),
              (0, r.createElement)(Zt, { details: o }),
              (0, r.createElement)(Zt, {
                details: c.map(({ attribute: e = '', value: t }) => ({ key: e, value: t })),
              }),
            ),
          no = ({ currency: e, saleAmount: t, format: o = '<price/>' }) => {
            if (!t || t <= 0) return null;
            o.includes('<price/>') ||
              ((o = '<price/>'),
              console.error('Price formats need to include the `<price/>` tag.'));
            const n = (0, c.sprintf) /* translators: %s will be replaced by the discount amount */(
              /* translators: %s will be replaced by the discount amount */
              (0, c.__)('Save %s', 'woocommerce'),
              o,
            );
            return (0, r.createElement)(
              Kt,
              { className: 'wc-block-components-sale-badge' },
              (0, p.createInterpolateElement)(n, {
                price: (0, r.createElement)(Vt.FormattedMonetaryAmount, { currency: e, value: t }),
              }),
            );
          },
          ao = (e, t) => e.convertPrecision(t.minorUnit).getAmount(),
          so = (0, p.forwardRef)(({ lineItem: e, onRemove: t = () => {}, tabIndex: o }, n) => {
            const {
                name: s = '',
                catalog_visibility: i = 'visible',
                short_description: l = '',
                description: m = '',
                low_stock_remaining: u = null,
                show_backorder_badge: d = !1,
                quantity_limits: h = { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
                sold_individually: g = !1,
                permalink: w = '',
                images: k = [],
                variation: E = [],
                item_data: y = [],
                prices: b = {
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
                totals: v = {
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
                extensions: f,
              } = e,
              { quantity: C, setItemQuantity: S, removeItem: P, isPendingDelete: N } = (e => {
                const t = { key: '', quantity: 1 };
                (e =>
                  (0, he.isObject)(e) &&
                  (0, he.objectHasProp)(e, 'key') &&
                  (0, he.objectHasProp)(e, 'quantity') &&
                  (0, he.isString)(e.key) &&
                  (0, he.isNumber)(e.quantity))(e) && ((t.key = e.key), (t.quantity = e.quantity));
                const { key: o = '', quantity: r = 1 } = t,
                  { cartErrors: c } = Ve(),
                  { __internalIncrementCalculating: n, __internalDecrementCalculating: a } = (0,
                  K.useDispatch)(Z.CHECKOUT_STORE_KEY),
                  [s, i] = (0, p.useState)(r),
                  [l] = (0, Bt.d7)(s, 400),
                  m = ct(l),
                  { removeItemFromCart: u, changeCartItemQuantity: d } = (0, K.useDispatch)(
                    Z.CART_STORE_KEY,
                  );
                (0, p.useEffect)(() => i(r), [r]);
                const _ = (0, K.useSelect)(
                    e => {
                      if (!o) return { quantity: !1, delete: !1 };
                      const t = e(Z.CART_STORE_KEY);
                      return {
                        quantity: t.isItemPendingQuantity(o),
                        delete: t.isItemPendingDelete(o),
                      };
                    },
                    [o],
                  ),
                  h = (0, p.useCallback)(
                    () =>
                      o
                        ? u(o).catch(e => {
                            (0, Z.processErrorResponse)(e);
                          })
                        : Promise.resolve(!1),
                    [o, u],
                  );
                return (
                  (0, p.useEffect)(() => {
                    o &&
                      (0, he.isNumber)(m) &&
                      Number.isFinite(m) &&
                      m !== l &&
                      d(o, l).catch(e => {
                        (0, Z.processErrorResponse)(e);
                      });
                  }, [o, d, l, m]),
                  (0, p.useEffect)(
                    () => (
                      _.delete ? n() : a(),
                      () => {
                        _.delete && a();
                      }
                    ),
                    [a, n, _.delete],
                  ),
                  (0, p.useEffect)(
                    () => (
                      _.quantity || l !== s ? n() : a(),
                      () => {
                        (_.quantity || l !== s) && a();
                      }
                    ),
                    [n, a, _.quantity, l, s],
                  ),
                  {
                    isPendingDelete: _.delete,
                    quantity: s,
                    setItemQuantity: i,
                    removeItem: h,
                    cartItemQuantityErrors: c,
                  }
                );
              })(e),
              { dispatchStoreEvent: x } = Qe(),
              { receiveCart: R, ...T } = Ve(),
              A = (0, p.useMemo)(() => ({ context: 'cart', cartItem: e, cart: T }), [e, T]),
              I = (0, jt.getCurrencyFromPriceResponse)(b),
              B = (0, yt.applyCheckoutFilter)({
                filterName: 'itemName',
                defaultValue: s,
                extensions: f,
                arg: A,
              }),
              O = (0, zt.A)({
                amount: parseInt(b.raw_prices.regular_price, 10),
                precision: b.raw_prices.precision,
              }),
              M = (0, zt.A)({
                amount: parseInt(b.raw_prices.price, 10),
                precision: b.raw_prices.precision,
              }),
              D = O.subtract(M),
              L = D.multiply(C),
              F = (0, jt.getCurrencyFromPriceResponse)(v);
            let V = parseInt(v.line_subtotal, 10);
            (0, _.getSetting)('displayCartPricesIncludingTax', !1) &&
              (V += parseInt(v.line_subtotal_tax, 10));
            const j = (0, zt.A)({ amount: V, precision: F.minorUnit }),
              Y = k.length ? k[0] : {},
              $ = 'hidden' === i || 'search' === i,
              U = (0, yt.applyCheckoutFilter)({
                filterName: 'cartItemClass',
                defaultValue: '',
                extensions: f,
                arg: A,
              }),
              H = (0, yt.applyCheckoutFilter)({
                filterName: 'cartItemPrice',
                defaultValue: '<price/>',
                extensions: f,
                arg: A,
                validation: yt.productPriceValidation,
              }),
              z = (0, yt.applyCheckoutFilter)({
                filterName: 'subtotalPriceFormat',
                defaultValue: '<price/>',
                extensions: f,
                arg: A,
                validation: yt.productPriceValidation,
              }),
              q = (0, yt.applyCheckoutFilter)({
                filterName: 'saleBadgePriceFormat',
                defaultValue: '<price/>',
                extensions: f,
                arg: A,
                validation: yt.productPriceValidation,
              }),
              W = (0, yt.applyCheckoutFilter)({
                filterName: 'showRemoveItemLink',
                defaultValue: !0,
                extensions: f,
                arg: A,
              });
            return (0, r.createElement)(
              'tr',
              {
                className: a()('wc-block-cart-items__row', U, { 'is-disabled': N }),
                ref: n,
                tabIndex: o,
              },
              (0, r.createElement)(
                'td',
                {
                  className: 'wc-block-cart-item__image',
                  'aria-hidden': !(0, he.objectHasProp)(Y, 'alt') || !Y.alt,
                },
                $
                  ? (0, r.createElement)(Wt, { image: Y, fallbackAlt: B })
                  : (0, r.createElement)(
                      'a',
                      { href: w, tabIndex: -1 },
                      (0, r.createElement)(Wt, { image: Y, fallbackAlt: B }),
                    ),
              ),
              (0, r.createElement)(
                'td',
                { className: 'wc-block-cart-item__product' },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-cart-item__wrap' },
                  (0, r.createElement)(Ht, { disabled: N || $, name: B, permalink: w }),
                  d
                    ? (0, r.createElement)(qt, null)
                    : !!u && (0, r.createElement)(Gt, { lowStockRemaining: u }),
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-cart-item__prices' },
                    (0, r.createElement)(Ut, {
                      currency: I,
                      regularPrice: ao(O, I),
                      price: ao(M, I),
                      format: z,
                    }),
                  ),
                  (0, r.createElement)(no, { currency: I, saleAmount: ao(D, I), format: q }),
                  (0, r.createElement)(co, {
                    shortDescription: l,
                    fullDescription: m,
                    itemData: y,
                    variation: E,
                  }),
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-cart-item__quantity' },
                    !g &&
                      !!h.editable &&
                      (0, r.createElement)(Ft, {
                        disabled: N,
                        quantity: C,
                        minimum: h.minimum,
                        maximum: h.maximum,
                        step: h.multiple_of,
                        onChange: t => {
                          S(t), x('cart-set-item-quantity', { product: e, quantity: t });
                        },
                        itemName: B,
                      }),
                    W &&
                      (0, r.createElement)(
                        'button',
                        {
                          className: 'wc-block-cart-item__remove-link',
                          'aria-label': (0,
                          c.sprintf) /* translators: %s refers to the item's name in the cart. */(
                            /* translators: %s refers to the item's name in the cart. */
                            (0, c.__)('Remove %s from cart', 'woocommerce'),
                            B,
                          ),
                          onClick: () => {
                            t(),
                              P(),
                              x('cart-remove-item', { product: e, quantity: C }),
                              (0, Dt.speak)(
                                (0,
                                c.sprintf) /* translators: %s refers to the item name in the cart. */(
                                  /* translators: %s refers to the item name in the cart. */
                                  (0, c.__)('%s has been removed from your cart.', 'woocommerce'),
                                  B,
                                ),
                              );
                          },
                          disabled: N,
                        },
                        (0, c.__)('Remove item', 'woocommerce'),
                      ),
                  ),
                ),
              ),
              (0, r.createElement)(
                'td',
                { className: 'wc-block-cart-item__total' },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-cart-item__total-price-and-sale-badge-wrapper' },
                  (0, r.createElement)(Ut, { currency: F, format: H, price: j.getAmount() }),
                  C > 1 &&
                    (0, r.createElement)(no, { currency: I, saleAmount: ao(L, I), format: q }),
                ),
              ),
            );
          });
        o(1045);
        const io = [...Array(3)].map((_x, e) => (0, r.createElement)(so, { lineItem: {}, key: e })),
          lo = e => {
            const t = {};
            return (
              e.forEach(({ key: e }) => {
                t[e] = (0, p.createRef)();
              }),
              t
            );
          },
          mo = ({ lineItems: e = [], isLoading: t = !1, className: o }) => {
            const n = (0, p.useRef)(null),
              s = (0, p.useRef)(lo(e));
            (0, p.useEffect)(() => {
              s.current = lo(e);
            }, [e]);
            const i = e => () => {
                null != s && s.current && e && s.current[e].current instanceof HTMLElement
                  ? s.current[e].current.focus()
                  : n.current instanceof HTMLElement && n.current.focus();
              },
              l = t
                ? io
                : e.map((t, o) => {
                    const c = e.length > o + 1 ? e[o + 1].key : null;
                    return (0, r.createElement)(so, {
                      key: t.key,
                      lineItem: t,
                      onRemove: i(c),
                      ref: s.current[t.key],
                      tabIndex: -1,
                    });
                  });
            return (0, r.createElement)(
              'table',
              { className: a()('wc-block-cart-items', o), ref: n, tabIndex: -1 },
              (0, r.createElement)(
                'thead',
                null,
                (0, r.createElement)(
                  'tr',
                  { className: 'wc-block-cart-items__header' },
                  (0, r.createElement)(
                    'th',
                    { className: 'wc-block-cart-items__header-image' },
                    (0, r.createElement)('span', null, (0, c.__)('Product', 'woocommerce')),
                  ),
                  (0, r.createElement)(
                    'th',
                    { className: 'wc-block-cart-items__header-product' },
                    (0, r.createElement)('span', null, (0, c.__)('Details', 'woocommerce')),
                  ),
                  (0, r.createElement)(
                    'th',
                    { className: 'wc-block-cart-items__header-total' },
                    (0, r.createElement)('span', null, (0, c.__)('Total', 'woocommerce')),
                  ),
                ),
              ),
              (0, r.createElement)('tbody', null, l),
            );
          },
          uo = ({ className: e }) => {
            const { cartItems: t, cartIsLoading: o } = Ve();
            return (0, r.createElement)(mo, { className: e, lineItems: t, isLoading: o });
          };
        (0, u.registerBlockType)('woocommerce/cart-line-items-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Tt.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(Mt, null, (0, r.createElement)(uo, { className: t })),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        }),
          (0, u.registerBlockType)('woocommerce/cart-cross-sells-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: Tt.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: () => {
              const e = (0, s.useBlockProps)({ className: 'wc-block-cart__cross-sells' }),
                t = [
                  [
                    'core/heading',
                    {
                      content: (0, c.__)('You may be interested in…', 'woocommerce'),
                      level: 2,
                      fontSize: 'large',
                    },
                    [],
                  ],
                  ['woocommerce/cart-cross-sells-products-block', {}, []],
                ];
              return (0, r.createElement)(
                'div',
                { ...e },
                (0, r.createElement)(s.InnerBlocks, { template: t, templateLock: !1 }),
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...s.useBlockProps.save() },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              ),
          });
        const po = window.wp.components,
          _o = window.wc.wcBlocksSharedContext,
          ho = window.wp.styleEngine;
        function go(e = {}) {
          const t = {};
          return (
            (0, ho.getCSSRules)(e, { selector: '' }).forEach(e => {
              t[e.key] = e.value;
            }),
            t
          );
        }
        function wo(e, t) {
          return e && t ? `has-${(0, Qt.c)(t)}-${e}` : '';
        }
        const ko = e => {
            const t = (e => {
                const t = (0, he.isObject)(e) ? e : { style: {} };
                let o = t.style;
                return (
                  (0, he.isString)(o) && (o = JSON.parse(o) || {}),
                  (0, he.isObject)(o) || (o = {}),
                  { ...t, style: o }
                );
              })(e),
              o = (function(e) {
                var t, o, r, c, n, s, i;
                const { backgroundColor: l, textColor: m, gradient: u, style: d } = e,
                  p = wo('background-color', l),
                  _ = wo('color', m),
                  h = (function(e) {
                    if (e) return `has-${e}-gradient-background`;
                  })(u),
                  g =
                    h ||
                    (null == d || null === (t = d.color) || void 0 === t ? void 0 : t.gradient);
                return {
                  className: a()(_, h, {
                    [p]: !g && !!p,
                    'has-text-color':
                      m || (null == d || null === (o = d.color) || void 0 === o ? void 0 : o.text),
                    'has-background':
                      l ||
                      (null == d || null === (r = d.color) || void 0 === r
                        ? void 0
                        : r.background) ||
                      u ||
                      (null == d || null === (c = d.color) || void 0 === c ? void 0 : c.gradient),
                    'has-link-color': (0, he.isObject)(
                      null == d || null === (n = d.elements) || void 0 === n ? void 0 : n.link,
                    )
                      ? null == d ||
                        null === (s = d.elements) ||
                        void 0 === s ||
                        null === (i = s.link) ||
                        void 0 === i
                        ? void 0
                        : i.color
                      : void 0,
                  }),
                  style: go({ color: (null == d ? void 0 : d.color) || {} }),
                };
              })(t),
              r = (function(e) {
                var t;
                const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {},
                  r = (function(e) {
                    var t;
                    const { borderColor: o, style: r } = e,
                      c = o ? wo('border-color', o) : '';
                    return a()({
                      'has-border-color':
                        !!o || !(null == r || null === (t = r.border) || void 0 === t || !t.color),
                      [c]: !!c,
                    });
                  })(e);
                return { className: r, style: go({ border: o }) };
              })(t),
              c = (function(e) {
                var t;
                return {
                  className: void 0,
                  style: go({
                    spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
                  }),
                };
              })(t),
              n = (e => {
                const t = (0, he.isObject)(e.style.typography) ? e.style.typography : {},
                  o = (0, he.isString)(t.fontFamily) ? t.fontFamily : '';
                return {
                  className: e.fontFamily ? `has-${e.fontFamily}-font-family` : o,
                  style: {
                    fontSize: e.fontSize
                      ? `var(--wp--preset--font-size--${e.fontSize})`
                      : t.fontSize,
                    fontStyle: t.fontStyle,
                    fontWeight: t.fontWeight,
                    letterSpacing: t.letterSpacing,
                    lineHeight: t.lineHeight,
                    textDecoration: t.textDecoration,
                    textTransform: t.textTransform,
                  },
                };
              })(t);
            return {
              className: a()(n.className, o.className, r.className, c.className),
              style: { ...n.style, ...o.style, ...r.style, ...c.style },
            };
          },
          Eo = window.wc.wcBlocksSharedHocs;
        o(6007);
        const yo = (0, Eo.withProductDataContext)(e => {
          const { className: t, align: o } = e,
            n = ko(e),
            { parentClassName: s } = (0, _o.useInnerBlockLayoutContext)(),
            { product: i } = (0, _o.useProductDataContext)();
          if (!((i.id && i.on_sale) || e.isDescendentOfSingleProductTemplate)) return null;
          const l =
            'string' == typeof o ? `wc-block-components-product-sale-badge--align-${o}` : '';
          return (0, r.createElement)(
            'div',
            {
              className: a()(
                'wc-block-components-product-sale-badge',
                t,
                l,
                { [`${s}__product-onsale`]: s },
                n.className,
              ),
              style: n.style,
            },
            (0, r.createElement)(Vt.Label, {
              label: (0, c.__)('Sale', 'woocommerce'),
              screenReaderLabel: (0, c.__)('Product on sale', 'woocommerce'),
            }),
          );
        });
        o(5183);
        let bo = (function(e) {
          return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
        })({});
        const vo = e =>
            (0, r.createElement)('img', {
              ...e,
              src: _.PLACEHOLDER_IMG_SRC,
              alt: '',
              width: void 0,
              height: void 0,
            }),
          fo = ({
            image: e,
            loaded: t,
            showFullSize: o,
            fallbackAlt: c,
            width: n,
            scale: a,
            height: s,
            aspectRatio: i,
          }) => {
            const { thumbnail: l, src: m, srcset: u, sizes: d, alt: _ } = e || {},
              h = { alt: _ || c, hidden: !t, src: l, ...(o && { src: m, srcSet: u, sizes: d }) },
              g = { height: s, width: n, objectFit: a, aspectRatio: i };
            return (0, r.createElement)(
              p.Fragment,
              null,
              h.src &&
                (0, r.createElement)('img', { style: g, 'data-testid': 'product-image', ...h }),
              !e && (0, r.createElement)(vo, { style: g }),
            );
          },
          Co = e => {
            const {
                className: t,
                imageSizing: o = bo.SINGLE,
                showProductLink: n = !0,
                showSaleBadge: s,
                saleBadgeAlign: i = 'right',
                height: l,
                width: m,
                scale: u,
                aspectRatio: d,
                ..._
              } = e,
              h = ko(e),
              { parentClassName: g } = (0, _o.useInnerBlockLayoutContext)(),
              { product: w, isLoading: k } = (0, _o.useProductDataContext)(),
              { dispatchStoreEvent: E } = Qe();
            if (!w.id)
              return (0, r.createElement)(
                'div',
                {
                  className: a()(
                    t,
                    'wc-block-components-product-image',
                    { [`${g}__product-image`]: g },
                    h.className,
                  ),
                  style: h.style,
                },
                (0, r.createElement)(vo, null),
              );
            const y = !!w.images.length,
              b = y ? w.images[0] : null,
              v = n ? 'a' : p.Fragment,
              f = (0, c.sprintf) /* translators: %s is referring to the product name */(
                /* translators: %s is referring to the product name */
                (0, c.__)('Link to %s', 'woocommerce'),
                w.name,
              ),
              C = {
                href: w.permalink,
                ...(!y && { 'aria-label': f }),
                onClick: () => {
                  E('product-view-link', { product: w });
                },
              };
            return (
              delete _.style,
              (0, r.createElement)(
                'div',
                {
                  className: a()(
                    t,
                    'wc-block-components-product-image',
                    { [`${g}__product-image`]: g },
                    h.className,
                  ),
                  style: h.style,
                },
                (0, r.createElement)(
                  v,
                  { ...(n && C) },
                  !!s && (0, r.createElement)(yo, { align: i, ..._ }),
                  (0, r.createElement)(fo, {
                    fallbackAlt: w.name,
                    image: b,
                    loaded: !k,
                    showFullSize: o !== bo.THUMBNAIL,
                    width: m,
                    height: l,
                    scale: u,
                    aspectRatio: d,
                  }),
                ),
              )
            );
          };
        (0, Eo.withProductDataContext)(Co), o(7128);
        const So = ({ children: e, headingLevel: t, elementType: o = `h${t}`, ...c }) =>
            (0, r.createElement)(o, { ...c }, e),
          Po = e => {
            const {
                className: t,
                headingLevel: o = 2,
                showProductLink: c = !0,
                linkTarget: n,
                align: s,
              } = e,
              i = ko(e),
              { parentClassName: l } = (0, _o.useInnerBlockLayoutContext)(),
              { product: m } = (0, _o.useProductDataContext)(),
              { dispatchStoreEvent: u } = Qe();
            return m.id
              ? (0, r.createElement)(
                  So,
                  {
                    headingLevel: o,
                    className: a()(t, i.className, 'wc-block-components-product-title', {
                      [`${l}__product-title`]: l,
                      [`wc-block-components-product-title--align-${s}`]: s && $(),
                    }),
                    style: $() ? i.style : {},
                  },
                  (0, r.createElement)(Ht, {
                    disabled: !c,
                    name: m.name,
                    permalink: m.permalink,
                    target: n,
                    onClick: () => {
                      u('product-view-link', { product: m });
                    },
                  }),
                )
              : (0, r.createElement)(So, {
                  headingLevel: o,
                  className: a()(t, i.className, 'wc-block-components-product-title', {
                    [`${l}__product-title`]: l,
                    [`wc-block-components-product-title--align-${s}`]: s && $(),
                  }),
                  style: $() ? i.style : {},
                });
          };
        (0, Eo.withProductDataContext)(Po), o(7195);
        const No = e => ({ width: (e / 5) * 100 + '%' }),
          xo = ({ parentClassName: e }) => {
            const t = No(0);
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-rating-stars__norating-container',
                  `${e}-product-rating-stars__norating-container`,
                ),
              },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-product-rating-stars__norating', role: 'img' },
                (0, r.createElement)('span', { style: t }),
              ),
              (0, r.createElement)('span', null, (0, c.__)('No Reviews', 'woocommerce')),
            );
          },
          Ro = e => {
            const { rating: t, reviews: o, parentClassName: n } = e,
              s = No(t),
              i = (0, c.sprintf) /* translators: %f is referring to the average rating value */(
                /* translators: %f is referring to the average rating value */
                (0, c.__)('Rated %f out of 5', 'woocommerce'),
                t,
              ),
              l = {
                __html: (0,
                c.sprintf) /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */(
                  /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                  (0, c._n)(
                    'Rated %1$s out of 5 based on %2$s customer rating',
                    'Rated %1$s out of 5 based on %2$s customer ratings',
                    o,
                    'woocommerce',
                  ),
                  (0, c.sprintf)('<strong class="rating">%f</strong>', t),
                  (0, c.sprintf)('<span class="rating">%d</span>', o),
                ),
              };
            return (0, r.createElement)(
              'div',
              {
                className: a()(
                  'wc-block-components-product-rating-stars__stars',
                  `${n}__product-rating-stars__stars`,
                ),
                role: 'img',
                'aria-label': i,
              },
              (0, r.createElement)('span', { style: s, dangerouslySetInnerHTML: l }),
            );
          },
          To = e => {
            const { textAlign: t, shouldDisplayMockedReviewsWhenProductHasNoReviews: o } = e,
              c = ko(e),
              { parentClassName: n } = (0, _o.useInnerBlockLayoutContext)(),
              { product: s } = (0, _o.useProductDataContext)(),
              i = (e => {
                const t = parseFloat(e.average_rating);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(s),
              l = (e => {
                const t = (0, he.isNumber)(e.review_count)
                  ? e.review_count
                  : parseInt(e.review_count, 10);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(s),
              m = a()(c.className, 'wc-block-components-product-rating-stars', {
                [`${n}__product-rating`]: n,
                [`has-text-align-${t}`]: t,
              }),
              u = o ? (0, r.createElement)(xo, { parentClassName: n }) : null,
              d = l ? (0, r.createElement)(Ro, { rating: i, reviews: l, parentClassName: n }) : u;
            return (0, r.createElement)(
              'div',
              { className: m, style: c.style },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-product-rating-stars__container' },
                d,
              ),
            );
          },
          Ao =
            ((0, Eo.withProductDataContext)(To),
            e => {
              var t, o;
              const { className: c, textAlign: n, isDescendentOfSingleProductTemplate: s } = e,
                i = ko(e),
                { parentName: l, parentClassName: m } = (0, _o.useInnerBlockLayoutContext)(),
                { product: u } = (0, _o.useProductDataContext)(),
                d = 'woocommerce/all-products' === l,
                p = a()('wc-block-components-product-price', c, i.className, {
                  [`${m}__product-price`]: m,
                });
              if (!u.id && !s) {
                const e = (0, r.createElement)(Ut, { align: n, className: p });
                return d
                  ? (0, r.createElement)(
                      'div',
                      { className: 'wp-block-woocommerce-product-price' },
                      e,
                    )
                  : e;
              }
              const _ = u.prices,
                h = s
                  ? (0, jt.getCurrencyFromPriceResponse)()
                  : (0, jt.getCurrencyFromPriceResponse)(_),
                g = '5000',
                w = _.price !== _.regular_price,
                k = a()({
                  [`${m}__product-price__value`]: m,
                  [`${m}__product-price__value--on-sale`]: w,
                }),
                E = (0, r.createElement)(Ut, {
                  align: n,
                  className: p,
                  style: i.style,
                  regularPriceStyle: i.style,
                  priceStyle: i.style,
                  priceClassName: k,
                  currency: h,
                  price: s ? g : _.price,
                  minPrice:
                    null == _ || null === (t = _.price_range) || void 0 === t
                      ? void 0
                      : t.min_amount,
                  maxPrice:
                    null == _ || null === (o = _.price_range) || void 0 === o
                      ? void 0
                      : o.max_amount,
                  regularPrice: s ? g : _.regular_price,
                  regularPriceClassName: a()({ [`${m}__product-price__regular`]: m }),
                });
              return d
                ? (0, r.createElement)(
                    'div',
                    { className: 'wp-block-woocommerce-product-price' },
                    E,
                  )
                : E;
            }),
          Io = (e, t) => {
            const o = e.find(({ id: e }) => e === t);
            return o ? o.quantity : 0;
          };
        o(1546);
        const Bo = ({ product: e, className: t, style: o }) => {
            const {
                id: n,
                permalink: s,
                add_to_cart: i,
                has_options: l,
                is_purchasable: m,
                is_in_stock: u,
              } = e,
              { dispatchStoreEvent: d } = Qe(),
              { cartQuantity: h, addingToCart: g, addToCart: w } = (e => {
                const { addItemToCart: t } = (0, K.useDispatch)(Z.CART_STORE_KEY),
                  { cartItems: o, cartIsLoading: r } = Ve(),
                  { createErrorNotice: c, removeNotice: n } = (0, K.useDispatch)('core/notices'),
                  [a, s] = (0, p.useState)(!1),
                  i = (0, p.useRef)(Io(o, e));
                return (
                  (0, p.useEffect)(() => {
                    const t = Io(o, e);
                    t !== i.current && (i.current = t);
                  }, [o, e]),
                  {
                    cartQuantity: Number.isFinite(i.current) ? i.current : 0,
                    addingToCart: a,
                    cartIsLoading: r,
                    addToCart: (o = 1) => (
                      s(!0),
                      t(e, o)
                        .then(() => {
                          n('add-to-cart');
                        })
                        .catch(e => {
                          c((0, be.decodeEntities)(e.message), {
                            id: 'add-to-cart',
                            context: 'wc/all-products',
                            isDismissible: !0,
                          });
                        })
                        .finally(() => {
                          s(!1);
                        })
                    ),
                  }
                );
              })(n),
              k = Number.isFinite(h) && h > 0,
              E = !l && m && u,
              y = (0, be.decodeEntities)((null == i ? void 0 : i.description) || ''),
              b = k
                ? (0, c.sprintf) /* translators: %s number of products in cart. */(
                    /* translators: %s number of products in cart. */
                    (0, c._n)('%d in cart', '%d in cart', h, 'woocommerce'),
                    h,
                  )
                : (0, be.decodeEntities)(
                    (null == i ? void 0 : i.text) || (0, c.__)('Add to cart', 'woocommerce'),
                  ),
              v = E ? 'button' : 'a',
              f = {};
            return (
              E
                ? (f.onClick = async () => {
                    await w(), d('cart-add-item', { product: e });
                    const { cartRedirectAfterAdd: t } = (0, _.getSetting)('productsSettings');
                    t && (window.location.href = A);
                  })
                : ((f.href = s),
                  (f.rel = 'nofollow'),
                  (f.onClick = () => {
                    d('product-view-link', { product: e });
                  })),
              (0, r.createElement)(
                v,
                {
                  ...f,
                  'aria-label': y,
                  disabled: g,
                  className: a()(
                    t,
                    'wp-block-button__link',
                    'wp-element-button',
                    'add_to_cart_button',
                    'wc-block-components-product-button__button',
                    { loading: g, added: k },
                  ),
                  style: o,
                },
                b,
              )
            );
          },
          Oo = ({ className: e, style: t }) =>
            (0, r.createElement)('button', {
              className: a()(
                'wp-block-button__link',
                'wp-element-button',
                'add_to_cart_button',
                'wc-block-components-product-button__button',
                'wc-block-components-product-button__button--placeholder',
                e,
              ),
              style: t,
              disabled: !0,
            }),
          Mo = e => {
            const { className: t, textAlign: o } = e,
              c = ko(e),
              { parentClassName: n } = (0, _o.useInnerBlockLayoutContext)(),
              { product: s } = (0, _o.useProductDataContext)();
            return (0, r.createElement)(
              'div',
              {
                className: a()(t, 'wp-block-button', 'wc-block-components-product-button', {
                  [`${n}__product-add-to-cart`]: n,
                  [`align-${o}`]: o,
                }),
              },
              s.id
                ? (0, r.createElement)(Bo, { product: s, style: c.style, className: c.className })
                : (0, r.createElement)(Oo, { style: c.style, className: c.className }),
            );
          },
          Do =
            ((0, Eo.withProductDataContext)(Mo),
            ({ product: e }) =>
              (0, r.createElement)(
                'div',
                { className: 'cross-sells-product' },
                (0, r.createElement)(
                  _o.InnerBlockLayoutContextProvider,
                  {
                    parentName: 'woocommerce/cart-cross-sells-block',
                    parentClassName: 'wp-block-cart-cross-sells-product',
                  },
                  (0, r.createElement)(
                    _o.ProductDataContextProvider,
                    { isLoading: !1, product: e },
                    (0, r.createElement)(
                      'div',
                      null,
                      (0, r.createElement)(Co, {
                        className: '',
                        showSaleBadge: !0,
                        productId: e.id,
                        showProductLink: !0,
                        saleBadgeAlign: 'left',
                        imageSizing: bo.SINGLE,
                        isDescendentOfQueryLoop: !1,
                        scale: 'cover',
                        aspectRatio: '1:1',
                      }),
                      (0, r.createElement)(Po, { align: '', headingLevel: 3, showProductLink: !0 }),
                      (0, r.createElement)(To, {
                        isDescendentOfQueryLoop: !1,
                        isDescendentOfSingleProductBlock: !1,
                        productId: e.id,
                        postId: 0,
                        shouldDisplayMockedReviewsWhenProductHasNoReviews: !1,
                      }),
                      (0, r.createElement)(Ao, null),
                    ),
                    (0, r.createElement)(Mo, null),
                  ),
                ),
              )),
          Lo = ({ products: e, columns: t }) => {
            const o = e.map((e, o) =>
              o >= t ? null : (0, r.createElement)(Do, { isLoading: !1, product: e, key: e.id }),
            );
            return (0, r.createElement)('div', null, o);
          },
          Fo = { A: 3 },
          Vo = ({ className: e, columns: t }) => {
            const { crossSellsProducts: o } = Ve();
            return (
              void 0 === t && (t = Fo.A),
              (0, r.createElement)(Lo, { className: e, columns: t, products: o })
            );
          };
        o(9085),
          o(5049),
          (0, u.registerBlockType)('woocommerce/cart-cross-sells-products-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: Tt.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ attributes: e, setAttributes: t }) => {
              const { className: o, columns: n } = e,
                a = (0, s.useBlockProps)();
              return (0, r.createElement)(
                'div',
                { ...a },
                (0, r.createElement)(
                  s.InspectorControls,
                  null,
                  (0, r.createElement)(
                    po.PanelBody,
                    { title: (0, c.__)('Settings', 'woocommerce') },
                    (0, r.createElement)(po.RangeControl, {
                      label: (0, c.__)('Cross-Sells products to show', 'woocommerce'),
                      value: n,
                      onChange: e => t({ columns: e }),
                      min: (0, _.getSetting)('minColumns', 1),
                      max: (0, _.getSetting)('maxColumns', 6),
                    }),
                  ),
                ),
                (0, r.createElement)(
                  Mt,
                  null,
                  (0, r.createElement)(Vo, { columns: n, className: o }),
                ),
              );
            },
            save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
          });
        const jo = (0, p.forwardRef)(({ children: e, className: t = '' }, o) =>
          (0, r.createElement)(
            'div',
            { ref: o, className: a()('wc-block-components-sidebar', t) },
            e,
          ),
        );
        function Yo(e) {
          const t = (0, p.useRef)(e);
          return ze()(e, t.current) || (t.current = e), t.current;
        }
        o(6229),
          (0, u.registerBlockType)('woocommerce/cart-totals-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: Tt.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ clientId: e }) => {
              const t = (0, s.useBlockProps)({ className: 'wc-block-cart__sidebar' }),
                o = Nt(yt.innerBlockAreas.CART_TOTALS),
                c = [
                  ['woocommerce/cart-order-summary-block', {}, []],
                  ['woocommerce/cart-express-payment-block', {}, []],
                  ['woocommerce/proceed-to-checkout-block', {}, []],
                  ['woocommerce/cart-accepted-payment-methods-block', {}, []],
                ];
              return (
                xt({ clientId: e, registeredBlocks: o, defaultTemplate: c }),
                (0, r.createElement)(
                  jo,
                  { ...t },
                  (0, r.createElement)(s.InnerBlocks, {
                    allowedBlocks: o,
                    template: c,
                    templateLock: !1,
                    renderAppender: s.InnerBlocks.ButtonBlockAppender,
                  }),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...s.useBlockProps.save() },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              ),
          });
        const $o = (e = !1) => {
            const {
                paymentMethodsInitialized: t,
                expressPaymentMethodsInitialized: o,
                availablePaymentMethods: r,
                availableExpressPaymentMethods: c,
              } = (0, K.useSelect)(e => {
                const t = e(Z.PAYMENT_STORE_KEY);
                return {
                  paymentMethodsInitialized: t.paymentMethodsInitialized(),
                  expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                  availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                  availablePaymentMethods: t.getAvailablePaymentMethods(),
                };
              }),
              n = Object.values(r).map(({ name: e }) => e),
              a = Object.values(c).map(({ name: e }) => e),
              s = (0, _t.getPaymentMethods)(),
              i = (0, _t.getExpressPaymentMethods)(),
              l = Object.keys(s).reduce((e, t) => (n.includes(t) && (e[t] = s[t]), e), {}),
              m = Object.keys(i).reduce((e, t) => (a.includes(t) && (e[t] = i[t]), e), {}),
              u = Yo(l),
              d = Yo(m);
            return { paymentMethods: e ? d : u, isInitialized: e ? o : t };
          },
          Uo = () => $o(!0);
        o(8375);
        const Ho = ({
            children: e,
            className: t,
            screenReaderLabel: o,
            showSpinner: n = !1,
            isLoading: s = !0,
          }) =>
            (0, r.createElement)(
              'div',
              { className: a()(t, { 'wc-block-components-loading-mask': s }) },
              s && n && (0, r.createElement)(Vt.Spinner, null),
              (0, r.createElement)(
                'div',
                {
                  className: a()({ 'wc-block-components-loading-mask__children': s }),
                  'aria-hidden': s,
                },
                e,
              ),
              s &&
                (0, r.createElement)(
                  'span',
                  { className: 'screen-reader-text' },
                  o || (0, c.__)('Loading…', 'woocommerce'),
                ),
            ),
          zo = (0, r.createElement)(
            i.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, r.createElement)(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              (0, r.createElement)('path', { d: 'M0 0h24v24H0z' }),
              (0, r.createElement)('path', {
                fill: '#000',
                fillRule: 'nonzero',
                d:
                  'M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z',
              }),
              (0, r.createElement)('path', {
                stroke: '#000',
                strokeLinecap: 'round',
                d: 'M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8',
              }),
            ),
          );
        var Ko = o(4166),
          qo = o(3576),
          Wo = o(8994);
        o(777);
        const Go = { bank: Ko.A, bill: qo.A, card: Wo.A, checkPayment: zo },
          Qo = ({ icon: e = '', text: t = '' }) => {
            const o = !!e,
              c = (0, p.useCallback)(
                e => o && (0, he.isString)(e) && (0, he.objectHasProp)(Go, e),
                [o],
              ),
              n = a()('wc-block-components-payment-method-label', {
                'wc-block-components-payment-method-label--with-icon': o,
              });
            return (0, r.createElement)(
              'span',
              { className: n },
              c(e) ? (0, r.createElement)(m.A, { icon: Go[e] }) : e,
              t,
            );
          },
          Zo = e =>
            `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
          Jo = ({ id: e, src: t = null, alt: o = '' }) =>
            t ? (0, r.createElement)('img', { className: Zo(e), src: t, alt: o }) : null,
          Xo = [
            { id: 'alipay', alt: 'Alipay', src: P + 'payment-methods/alipay.svg' },
            { id: 'amex', alt: 'American Express', src: P + 'payment-methods/amex.svg' },
            { id: 'bancontact', alt: 'Bancontact', src: P + 'payment-methods/bancontact.svg' },
            { id: 'diners', alt: 'Diners Club', src: P + 'payment-methods/diners.svg' },
            { id: 'discover', alt: 'Discover', src: P + 'payment-methods/discover.svg' },
            { id: 'eps', alt: 'EPS', src: P + 'payment-methods/eps.svg' },
            { id: 'giropay', alt: 'Giropay', src: P + 'payment-methods/giropay.svg' },
            { id: 'ideal', alt: 'iDeal', src: P + 'payment-methods/ideal.svg' },
            { id: 'jcb', alt: 'JCB', src: P + 'payment-methods/jcb.svg' },
            { id: 'laser', alt: 'Laser', src: P + 'payment-methods/laser.svg' },
            { id: 'maestro', alt: 'Maestro', src: P + 'payment-methods/maestro.svg' },
            { id: 'mastercard', alt: 'Mastercard', src: P + 'payment-methods/mastercard.svg' },
            { id: 'multibanco', alt: 'Multibanco', src: P + 'payment-methods/multibanco.svg' },
            { id: 'p24', alt: 'Przelewy24', src: P + 'payment-methods/p24.svg' },
            { id: 'sepa', alt: 'Sepa', src: P + 'payment-methods/sepa.svg' },
            { id: 'sofort', alt: 'Sofort', src: P + 'payment-methods/sofort.svg' },
            { id: 'unionpay', alt: 'Union Pay', src: P + 'payment-methods/unionpay.svg' },
            { id: 'visa', alt: 'Visa', src: P + 'payment-methods/visa.svg' },
            { id: 'wechat', alt: 'WeChat', src: P + 'payment-methods/wechat.svg' },
          ];
        o(4957);
        const er = ({ icons: e = [], align: t = 'center', className: o }) => {
            const c = (e => {
              const t = {};
              return (
                e.forEach(e => {
                  let o = {};
                  'string' == typeof e && (o = { id: e, alt: e, src: null }),
                    'object' == typeof e &&
                      (o = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
                    o.id && (0, he.isString)(o.id) && !t[o.id] && (t[o.id] = o);
                }),
                Object.values(t)
              );
            })(e);
            if (0 === c.length) return null;
            const n = a()(
              'wc-block-components-payment-method-icons',
              {
                'wc-block-components-payment-method-icons--align-left': 'left' === t,
                'wc-block-components-payment-method-icons--align-right': 'right' === t,
              },
              o,
            );
            return (0, r.createElement)(
              'div',
              { className: n },
              c.map(e => {
                const t = { ...e, ...((o = e.id), Xo.find(e => e.id === o) || {}) };
                var o;
                return (0, r.createElement)(Jo, { key: 'payment-method-icon-' + e.id, ...t });
              }),
            );
          },
          tr = (e = '') => {
            const { cartCoupons: t, cartIsLoading: o } = Ve(),
              { createErrorNotice: r } = (0, K.useDispatch)('core/notices'),
              { createNotice: n } = (0, K.useDispatch)('core/notices'),
              { setValidationErrors: a } = (0, K.useDispatch)(Z.VALIDATION_STORE_KEY),
              { isApplyingCoupon: s, isRemovingCoupon: i } = (0, K.useSelect)(
                e => {
                  const t = e(Z.CART_STORE_KEY);
                  return {
                    isApplyingCoupon: t.isApplyingCoupon(),
                    isRemovingCoupon: t.isRemovingCoupon(),
                  };
                },
                [r, n],
              ),
              { applyCoupon: l, removeCoupon: m } = (0, K.useDispatch)(Z.CART_STORE_KEY),
              u = (0, K.useSelect)(e => e(Z.CHECKOUT_STORE_KEY).getOrderId());
            return {
              appliedCoupons: t,
              isLoading: o,
              applyCoupon: t =>
                l(t)
                  .then(
                    () => (
                      (0, yt.applyCheckoutFilter)({
                        filterName: 'showApplyCouponNotice',
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        n(
                          'info',
                          (0, c.sprintf) /* translators: %s coupon code. */(
                            /* translators: %s coupon code. */
                            (0, c.__)(
                              'Coupon code "%s" has been applied to your cart.',
                              'woocommerce',
                            ),
                            t,
                          ),
                          { id: 'coupon-form', type: 'snackbar', context: e },
                        ),
                      Promise.resolve(!0)
                    ),
                  )
                  .catch(e => {
                    const t = (e => {
                      var t, o, r, c;
                      return u &&
                        u > 0 &&
                        null != e &&
                        null !== (t = e.data) &&
                        void 0 !== t &&
                        null !== (o = t.details) &&
                        void 0 !== o &&
                        o.checkout
                        ? e.data.details.checkout
                        : null != e &&
                          null !== (r = e.data) &&
                          void 0 !== r &&
                          null !== (c = r.details) &&
                          void 0 !== c &&
                          c.cart
                        ? e.data.details.cart
                        : e.message;
                    })(e);
                    return (
                      a({ coupon: { message: (0, be.decodeEntities)(t), hidden: !1 } }),
                      Promise.resolve(!1)
                    );
                  }),
              removeCoupon: t =>
                m(t)
                  .then(
                    () => (
                      (0, yt.applyCheckoutFilter)({
                        filterName: 'showRemoveCouponNotice',
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        n(
                          'info',
                          (0, c.sprintf) /* translators: %s coupon code. */(
                            /* translators: %s coupon code. */
                            (0, c.__)(
                              'Coupon code "%s" has been removed from your cart.',
                              'woocommerce',
                            ),
                            t,
                          ),
                          { id: 'coupon-form', type: 'snackbar', context: e },
                        ),
                      Promise.resolve(!0)
                    ),
                  )
                  .catch(
                    t => (r(t.message, { id: 'coupon-form', context: e }), Promise.resolve(!1)),
                  ),
              isApplyingCoupon: s,
              isRemovingCoupon: i,
            };
          },
          or = (e, t) => {
            const o = [],
              r = (t, o) => {
                const r = o + '_tax',
                  c =
                    (0, he.objectHasProp)(e, o) && (0, he.isString)(e[o]) ? parseInt(e[o], 10) : 0;
                return {
                  key: o,
                  label: t,
                  value: c,
                  valueWithTax:
                    c +
                    ((0, he.objectHasProp)(e, r) && (0, he.isString)(e[r])
                      ? parseInt(e[r], 10)
                      : 0),
                };
              };
            return (
              o.push(r((0, c.__)('Subtotal:', 'woocommerce'), 'total_items')),
              o.push(r((0, c.__)('Fees:', 'woocommerce'), 'total_fees')),
              o.push(r((0, c.__)('Discount:', 'woocommerce'), 'total_discount')),
              o.push({
                key: 'total_tax',
                label: (0, c.__)('Taxes:', 'woocommerce'),
                value: parseInt(e.total_tax, 10),
                valueWithTax: parseInt(e.total_tax, 10),
              }),
              t && o.push(r((0, c.__)('Shipping:', 'woocommerce'), 'total_shipping')),
              o
            );
          };
        class rr extends p.Component {
          constructor(...e) {
            super(...e), (0, d.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const { hasError: e, errorMessage: t } = this.state,
              { isEditor: o } = this.props;
            if (e) {
              let e = (0, c.__)(
                'We are experiencing difficulties with this payment method. Please contact us for assistance.',
                'woocommerce',
              );
              (o || _.CURRENT_USER_IS_ADMIN) &&
                (e =
                  t ||
                  (0, c.__)(
                    "There was an error with this payment method. Please verify it's configured correctly.",
                    'woocommerce',
                  ));
              const n = [{ id: '0', content: e, isDismissible: !1, status: 'error' }];
              return (0, r.createElement)(Vt.StoreNoticesContainer, {
                additionalNotices: n,
                context: we.PAYMENTS,
              });
            }
            return this.props.children;
          }
        }
        const cr = rr,
          nr = 'wc/store/payment',
          ar = () => {
            const { isEditor: e } = W(),
              { activePaymentMethod: t, paymentMethodData: o } = (0, K.useSelect)(e => {
                const t = e(nr);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                };
              }),
              {
                __internalSetActivePaymentMethod: n,
                __internalSetExpressPaymentStarted: a,
                __internalSetPaymentIdle: s,
                __internalSetPaymentError: i,
                __internalSetPaymentMethodData: l,
                __internalSetExpressPaymentError: m,
              } = (0, K.useDispatch)(nr),
              { paymentMethods: u } = Uo(),
              d = (() => {
                const {
                    onCheckoutBeforeProcessing: e,
                    onCheckoutValidationBeforeProcessing: t,
                    onCheckoutAfterProcessingWithSuccess: o,
                    onCheckoutAfterProcessingWithError: r,
                    onSubmit: n,
                    onCheckoutSuccess: a,
                    onCheckoutFail: s,
                    onCheckoutValidation: i,
                  } = mt(),
                  {
                    isCalculating: l,
                    isComplete: m,
                    isIdle: u,
                    isProcessing: d,
                    customerId: h,
                  } = (0, K.useSelect)(e => {
                    const t = e(Z.CHECKOUT_STORE_KEY);
                    return {
                      isComplete: t.isComplete(),
                      isIdle: t.isIdle(),
                      isProcessing: t.isProcessing(),
                      customerId: t.getCustomerId(),
                      isCalculating: t.isCalculating(),
                    };
                  }),
                  { paymentStatus: g, activePaymentMethod: w, shouldSavePayment: k } = (0,
                  K.useSelect)(e => {
                    const t = e(Z.PAYMENT_STORE_KEY);
                    return {
                      paymentStatus: {
                        get isPristine() {
                          return (
                            X()('isPristine', {
                              since: '9.6.0',
                              alternative: 'isIdle',
                              plugin: 'WooCommerce Blocks',
                              link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
                            }),
                            t.isPaymentIdle()
                          );
                        },
                        isIdle: t.isPaymentIdle(),
                        isStarted: t.isExpressPaymentStarted(),
                        isProcessing: t.isPaymentProcessing(),
                        get isFinished() {
                          return (
                            X()('isFinished', {
                              since: '9.6.0',
                              plugin: 'WooCommerce Blocks',
                              link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
                            }),
                            t.hasPaymentError() || t.isPaymentReady()
                          );
                        },
                        hasError: t.hasPaymentError(),
                        get hasFailed() {
                          return (
                            X()('hasFailed', {
                              since: '9.6.0',
                              plugin: 'WooCommerce Blocks',
                              link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
                            }),
                            t.hasPaymentError()
                          );
                        },
                        get isSuccessful() {
                          return (
                            X()('isSuccessful', {
                              since: '9.6.0',
                              plugin: 'WooCommerce Blocks',
                              link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
                            }),
                            t.isPaymentReady()
                          );
                        },
                        isReady: t.isPaymentReady(),
                        isDoingExpressPayment: t.isExpressPaymentMethodActive(),
                      },
                      activePaymentMethod: t.getActivePaymentMethod(),
                      shouldSavePayment: t.getShouldSavePaymentMethod(),
                    };
                  }),
                  { __internalSetExpressPaymentError: E } = (0, K.useDispatch)(Z.PAYMENT_STORE_KEY),
                  { onPaymentProcessing: y, onPaymentSetup: b } = (0, p.useContext)(ce),
                  {
                    shippingErrorStatus: v,
                    shippingErrorTypes: f,
                    onShippingRateSuccess: C,
                    onShippingRateFail: S,
                    onShippingRateSelectSuccess: P,
                    onShippingRateSelectFail: N,
                  } = ot(),
                  {
                    shippingRates: x,
                    isLoadingRates: R,
                    selectedRates: T,
                    isSelectingRate: A,
                    selectShippingRate: I,
                    needsShipping: B,
                  } = Ze(),
                  { billingAddress: O, shippingAddress: M } = (0, K.useSelect)(e =>
                    e(Z.CART_STORE_KEY).getCustomerData(),
                  ),
                  { setShippingAddress: D } = (0, K.useDispatch)(Z.CART_STORE_KEY),
                  { cartItems: L, cartFees: F, cartTotals: V, extensions: j } = Ve(),
                  { appliedCoupons: Y } = tr(),
                  $ = (0, p.useRef)(or(V, B)),
                  U = (0, p.useRef)({
                    label: (0, c.__)('Total', 'woocommerce'),
                    value: parseInt(V.total_price, 10),
                  });
                (0, p.useEffect)(() => {
                  ($.current = or(V, B)),
                    (U.current = {
                      label: (0, c.__)('Total', 'woocommerce'),
                      value: parseInt(V.total_price, 10),
                    });
                }, [V, B]);
                const H = (0, p.useCallback)(
                  (e = '') => {
                    X()(
                      'setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).',
                      {
                        alternative: '',
                        plugin: 'woocommerce-gutenberg-products-block',
                        link:
                          'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228',
                      },
                    ),
                      E(e);
                  },
                  [E],
                );
                return {
                  activePaymentMethod: w,
                  billing: {
                    appliedCoupons: Y,
                    billingAddress: O,
                    billingData: O,
                    cartTotal: U.current,
                    cartTotalItems: $.current,
                    currency: (0, jt.getCurrencyFromPriceResponse)(V),
                    customerId: h,
                    displayPricesIncludingTax: (0, _.getSetting)(
                      'displayCartPricesIncludingTax',
                      !1,
                    ),
                  },
                  cartData: { cartItems: L, cartFees: F, extensions: j },
                  checkoutStatus: { isCalculating: l, isComplete: m, isIdle: u, isProcessing: d },
                  components: {
                    LoadingMask: Ho,
                    PaymentMethodIcons: er,
                    PaymentMethodLabel: Qo,
                    ValidationInputError: Vt.ValidationInputError,
                  },
                  emitResponse: { noticeContexts: we, responseTypes: ge },
                  eventRegistration: {
                    onCheckoutAfterProcessingWithError: r,
                    onCheckoutAfterProcessingWithSuccess: o,
                    onCheckoutBeforeProcessing: e,
                    onCheckoutValidationBeforeProcessing: t,
                    onCheckoutSuccess: a,
                    onCheckoutFail: s,
                    onCheckoutValidation: i,
                    onPaymentProcessing: y,
                    onPaymentSetup: b,
                    onShippingRateFail: S,
                    onShippingRateSelectFail: N,
                    onShippingRateSelectSuccess: P,
                    onShippingRateSuccess: C,
                  },
                  onSubmit: n,
                  paymentStatus: g,
                  setExpressPaymentError: H,
                  shippingData: {
                    isSelectingRate: A,
                    needsShipping: B,
                    selectedRates: T,
                    setSelectedRates: I,
                    setShippingAddress: D,
                    shippingAddress: M,
                    shippingRates: x,
                    shippingRatesLoading: R,
                  },
                  shippingStatus: { shippingErrorStatus: v, shippingErrorTypes: f },
                  shouldSavePayment: k,
                };
              })(),
              h = (0, p.useRef)(t),
              g = (0, p.useRef)(o),
              w = (0, p.useCallback)(
                e => () => {
                  (h.current = t), (g.current = o), a(), n(e);
                },
                [t, o, n, a],
              ),
              k = (0, p.useCallback)(() => {
                s(), n(h.current, g.current);
              }, [n, s]),
              E = (0, p.useCallback)(
                e => {
                  i(), l(e), m(e), n(h.current, g.current);
                },
                [n, i, l, m],
              ),
              y = (0, p.useCallback)(
                (e = '') => {
                  X()('Express Payment Methods should use the provided onError handler instead.', {
                    alternative: 'onError',
                    plugin: 'woocommerce-gutenberg-products-block',
                    link:
                      'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228',
                  }),
                    e ? E(e) : m('');
                },
                [m, E],
              ),
              b = Object.entries(u),
              v =
                b.length > 0
                  ? b.map(([t, o]) => {
                      const c = e ? o.edit : o.content;
                      return (0, p.isValidElement)(c)
                        ? (0, r.createElement)(
                            'li',
                            { key: t, id: `express-payment-method-${t}` },
                            (0, p.cloneElement)(c, {
                              ...d,
                              onClick: w(t),
                              onClose: k,
                              onError: E,
                              setExpressPaymentError: y,
                            }),
                          )
                        : null;
                    })
                  : (0, r.createElement)(
                      'li',
                      { key: 'noneRegistered' },
                      (0, c.__)('No registered Payment Methods', 'woocommerce'),
                    );
            return (0, r.createElement)(
              cr,
              { isEditor: e },
              (0, r.createElement)(
                'ul',
                { className: 'wc-block-components-express-payment__event-buttons' },
                v,
              ),
            );
          };
        o(9569);
        const sr = () => {
            const { paymentMethods: e, isInitialized: t } = Uo(),
              {
                isCalculating: o,
                isProcessing: n,
                isAfterProcessing: a,
                isBeforeProcessing: s,
                isComplete: i,
                hasError: l,
              } = (0, K.useSelect)(e => {
                const t = e(Z.CHECKOUT_STORE_KEY);
                return {
                  isCalculating: t.isCalculating(),
                  isProcessing: t.isProcessing(),
                  isAfterProcessing: t.isAfterProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  hasError: t.hasError(),
                };
              }),
              m = (0, K.useSelect)(e => e(Z.PAYMENT_STORE_KEY).isExpressPaymentMethodActive());
            if (!t || (t && 0 === Object.keys(e).length)) return null;
            const u = n || a || s || (i && !l);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                Ho,
                { isLoading: o || u || m },
                (0, r.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-components-express-payment wc-block-components-express-payment--cart',
                  },
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-components-express-payment__content' },
                    (0, r.createElement)(Vt.StoreNoticesContainer, {
                      context: we.EXPRESS_PAYMENTS,
                    }),
                    (0, r.createElement)(ar, null),
                  ),
                ),
              ),
              (0, r.createElement)(
                'div',
                {
                  className:
                    'wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--cart',
                },
                (0, c.__)('Or', 'woocommerce'),
              ),
            );
          },
          ir = ({ className: e }) => {
            const { cartNeedsPayment: t } = Ve();
            return t
              ? (0, r.createElement)(
                  'div',
                  { className: a()('wc-block-cart__payment-options', e) },
                  (0, r.createElement)(sr, null),
                )
              : null;
          };
        o(5913);
        const lr = (0, r.createElement)(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            fill: 'currentColor',
            viewBox: '0 0 24 24',
          },
          (0, r.createElement)('path', {
            stroke: '#1E1E1E',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            d: 'M18.25 12a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z',
          }),
          (0, r.createElement)('path', { fill: '#1E1E1E', d: 'M10 3h4v3h-4z' }),
          (0, r.createElement)('rect', {
            width: '1.5',
            height: '5',
            x: '11.25',
            y: '8',
            fill: '#1E1E1E',
            rx: '.75',
          }),
          (0, r.createElement)('path', {
            fill: '#1E1E1E',
            d: 'm15.7 4.816 1.66 1.078-1.114 1.718-1.661-1.078z',
          }),
        );
        (0, u.registerBlockType)('woocommerce/cart-express-payment-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              style: { fill: 'none' },
              icon: lr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { paymentMethods: t, isInitialized: o } = Uo(),
              c = Object.keys(t).length > 0,
              n = (0, s.useBlockProps)({
                className: a()({
                  'wp-block-woocommerce-cart-express-payment-block--has-express-payment-methods': c,
                }),
              }),
              { className: i } = e;
            return o && c
              ? (0, r.createElement)('div', { ...n }, (0, r.createElement)(ir, { className: i }))
              : null;
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        });
        var mr = o(498);
        const ur = (0, c.__)('Proceed to Checkout', 'woocommerce'),
          dr = {
            checkoutPageId: { type: 'number', default: 0 },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
            buttonLabel: { type: 'string', default: ur },
          };
        var pr = o(1777);
        o(2080), o(7791);
        const _r = () =>
            (0, r.createElement)('span', {
              className: 'wc-block-components-spinner',
              'aria-hidden': 'true',
            }),
          hr = (0, p.forwardRef)((e, t) => {
            'showSpinner' in e &&
              X()('showSpinner prop', {
                version: '8.9.0',
                alternative: 'Render a spinner in the button children instead.',
                plugin: 'WooCommerce',
              });
            const {
                className: o,
                showSpinner: c = !1,
                children: n,
                variant: s = 'contained',
                removeTextWrap: i = !1,
                ...l
              } = e,
              m = a()('wc-block-components-button', 'wp-element-button', o, s, {
                'wc-block-components-button--loading': c,
              });
            if ('href' in e)
              return (0, r.createElement)(pr.$, {
                render: (0, r.createElement)(
                  'a',
                  { ref: t, href: e.href },
                  c && (0, r.createElement)(_r, null),
                  (0, r.createElement)(
                    'span',
                    { className: 'wc-block-components-button__text' },
                    n,
                  ),
                ),
                className: m,
                ...l,
              });
            const u = i
              ? e.children
              : (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-button__text' },
                  e.children,
                );
            return (0, r.createElement)(
              pr.$,
              { ref: t, className: m, ...l },
              c && (0, r.createElement)(_r, null),
              u,
            );
          }),
          gr = ({ onChange: e, placeholder: t, value: o, ...c }) =>
            (0, r.createElement)(
              hr,
              { ...c },
              (0, r.createElement)(s.RichText, {
                multiline: !1,
                allowedFormats: [],
                value: o,
                placeholder: t,
                onChange: e,
              }),
            ),
          wr = (e, t) => {
            if (!e.title.raw) return e.slug;
            const o = 1 === t.filter(t => t.title.raw === e.title.raw).length;
            return e.title.raw + (o ? '' : ` - ${e.slug}`);
          },
          kr = ({ setPageId: e, pageId: t, labels: o }) => {
            const n =
              (0, K.useSelect)(
                e =>
                  e('core').getEntityRecords('postType', 'page', {
                    status: 'publish',
                    orderby: 'title',
                    order: 'asc',
                    per_page: 100,
                  }),
                [],
              ) || null;
            return n
              ? (0, r.createElement)(
                  po.PanelBody,
                  { title: o.title },
                  (0, r.createElement)(po.SelectControl, {
                    label: (0, c.__)('Link to', 'woocommerce'),
                    value: t,
                    options: [
                      { label: o.default, value: 0 },
                      ...n.map(e => ({ label: wr(e, n), value: parseInt(e.id, 10) })),
                    ],
                    onChange: t => e(parseInt(t, 10)),
                  }),
                )
              : null;
          };
        o(6080),
          (0, u.registerBlockType)('woocommerce/proceed-to-checkout-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: mr.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            attributes: dr,
            edit: ({ attributes: e, setAttributes: t }) => {
              const o = (0, s.useBlockProps)(),
                { checkoutPageId: n = 0, buttonLabel: a } = e,
                { current: i } = (0, p.useRef)(n),
                l = (0, K.useSelect)(e => i || e('core/editor').getCurrentPostId(), [i]);
              return (0, r.createElement)(
                'div',
                { ...o },
                (0, r.createElement)(
                  s.InspectorControls,
                  null,
                  !(l === T && 0 === i) &&
                    (0, r.createElement)(kr, {
                      pageId: n,
                      setPageId: e => t({ checkoutPageId: e }),
                      labels: {
                        title: (0, c.__)('Proceed to Checkout button', 'woocommerce'),
                        default: (0, c.__)('WooCommerce Checkout Page', 'woocommerce'),
                      },
                    }),
                ),
                (0, r.createElement)(gr, {
                  className: 'wc-block-cart__submit-button',
                  value: a,
                  placeholder: ur,
                  onChange: e => {
                    t({ buttonLabel: e });
                  },
                }),
              );
            },
            save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
          });
        const Er = (0, r.createElement)(
            i.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, r.createElement)('path', {
              d:
                'M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z',
            }),
            (0, r.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
          ),
          yr = x
            ? [
                'core/paragraph',
                {
                  align: 'center',
                  content: (0,
                  c.sprintf) /* translators: %s is the link to the store product directory. */(
                    /* translators: %s is the link to the store product directory. */
                    (0, c.__)('<a href="%s">Browse store</a>', 'woocommerce'),
                    x,
                  ),
                  dropCap: !1,
                },
              ]
            : null,
          br = [
            [
              'core/heading',
              {
                textAlign: 'center',
                content: (0, c.__)('Your cart is currently empty!', 'woocommerce'),
                level: 2,
                className: 'with-empty-cart-icon wc-block-cart__empty-cart__title',
              },
            ],
            yr,
            ['core/separator', { className: 'is-style-dots' }],
            [
              'core/heading',
              { textAlign: 'center', content: (0, c.__)('New in store', 'woocommerce'), level: 2 },
            ],
            ['woocommerce/product-new', { columns: 4, rows: 1 }],
          ].filter(Boolean);
        o(6611),
          (0, u.registerBlockType)('woocommerce/empty-cart-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: Er,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ clientId: e }) => {
              const t = (0, s.useBlockProps)(),
                { currentView: o } = W(),
                c = Nt(yt.innerBlockAreas.EMPTY_CART);
              return (
                xt({ clientId: e, registeredBlocks: c, defaultTemplate: br }),
                (0, r.createElement)(
                  'div',
                  { ...t, hidden: 'woocommerce/empty-cart-block' !== o },
                  (0, r.createElement)(s.InnerBlocks, {
                    template: br,
                    templateLock: !1,
                    renderAppender: s.InnerBlocks.ButtonBlockAppender,
                  }),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...s.useBlockProps.save() },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              ),
          });
        const vr = e =>
            Object.values(e).reduce((e, t) => (null !== t.icons && (e = e.concat(t.icons)), e), []),
          fr = ({ className: e }) => {
            const { paymentMethods: t } = $o(!1);
            return (0, r.createElement)(er, { className: e, icons: vr(t) });
          };
        (0, u.registerBlockType)('woocommerce/cart-accepted-payment-methods-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Wo.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(fr, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        });
        const Cr = (0, r.createElement)(
          i.SVG,
          { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24', fill: 'none' },
          (0, r.createElement)('path', {
            stroke: 'currentColor',
            strokeWidth: '1.5',
            fill: 'none',
            d:
              'M6 3.75h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z',
          }),
          (0, r.createElement)('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d:
              'M6.9 7.5A1.1 1.1 0 018 6.4h8a1.1 1.1 0 011.1 1.1v2a1.1 1.1 0 01-1.1 1.1H8a1.1 1.1 0 01-1.1-1.1v-2zm1.2.1v1.8h7.8V7.6H8.1z',
            clipRule: 'evenodd',
          }),
          (0, r.createElement)('path', {
            fill: 'currentColor',
            d:
              'M8.5 12h1v1h-1v-1zM8.5 14h1v1h-1v-1zM8.5 16h1v1h-1v-1zM11.5 12h1v1h-1v-1zM11.5 14h1v1h-1v-1zM11.5 16h1v1h-1v-1zM14.5 12h1v1h-1v-1zM14.5 14h1v1h-1v-1zM14.5 16h1v1h-1v-1z',
          }),
        );
        o(3048);
        const Sr = (0, vt.withInstanceId)(
          ({ instanceId: e, isLoading: t = !1, onSubmit: o, displayCouponForm: n = !1 }) => {
            const [a, s] = (0, p.useState)(''),
              [i, l] = (0, p.useState)(n),
              m = `wc-block-components-totals-coupon__input-${e}`,
              { validationErrorId: u } = (0, K.useSelect)(e => ({
                validationErrorId: e(Z.VALIDATION_STORE_KEY).getValidationErrorId(m),
              }));
            return (0, r.createElement)(
              Vt.Panel,
              {
                className: 'wc-block-components-totals-coupon',
                initialOpen: i,
                hasBorder: !1,
                title: (0, c.__)('Add a coupon', 'woocommerce'),
                state: [i, l],
              },
              (0, r.createElement)(
                Ho,
                {
                  screenReaderLabel: (0, c.__)('Applying coupon…', 'woocommerce'),
                  isLoading: t,
                  showSpinner: !1,
                },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-totals-coupon__content' },
                  (0, r.createElement)(
                    'form',
                    {
                      className: 'wc-block-components-totals-coupon__form',
                      id: 'wc-block-components-totals-coupon__form',
                    },
                    (0, r.createElement)(Vt.ValidatedTextInput, {
                      id: m,
                      errorId: 'coupon',
                      className: 'wc-block-components-totals-coupon__input',
                      label: (0, c.__)('Enter code', 'woocommerce'),
                      value: a,
                      ariaDescribedBy: u,
                      onChange: e => {
                        s(e);
                      },
                      focusOnMount: !0,
                      validateOnMount: !1,
                      showError: !1,
                    }),
                    (0, r.createElement)(
                      hr,
                      {
                        className: 'wc-block-components-totals-coupon__button',
                        disabled: t || !a,
                        showSpinner: t,
                        onClick: e => {
                          var t;
                          e.preventDefault(),
                            void 0 !== o
                              ? null === (t = o(a)) ||
                                void 0 === t ||
                                t.then(e => {
                                  e && (s(''), l(!1));
                                })
                              : (s(''), l(!0));
                        },
                        type: 'submit',
                      },
                      (0, c.__)('Apply', 'woocommerce'),
                    ),
                  ),
                  (0, r.createElement)(Vt.ValidationInputError, {
                    propertyName: 'coupon',
                    elementId: m,
                  }),
                ),
              ),
            );
          },
        );
        o(265);
        const Pr = { context: 'summary' },
          Nr = ({
            cartCoupons: e = [],
            currency: t,
            isRemovingCoupon: o,
            removeCoupon: n,
            values: a,
          }) => {
            const { total_discount: s, total_discount_tax: i } = a,
              l = parseInt(s, 10);
            if (!l && 0 === e.length) return null;
            const m = parseInt(i, 10),
              u = (0, _.getSetting)('displayCartPricesIncludingTax', !1) ? l + m : l,
              d = (0, yt.applyCheckoutFilter)({ arg: Pr, filterName: 'coupons', defaultValue: e });
            return (0, r.createElement)(Vt.TotalsItem, {
              className: 'wc-block-components-totals-discount',
              currency: t,
              description:
                0 !== d.length &&
                (0, r.createElement)(
                  Ho,
                  {
                    screenReaderLabel: (0, c.__)('Removing coupon…', 'woocommerce'),
                    isLoading: o,
                    showSpinner: !1,
                  },
                  (0, r.createElement)(
                    'ul',
                    { className: 'wc-block-components-totals-discount__coupon-list' },
                    d.map(e =>
                      (0, r.createElement)(Vt.RemovableChip, {
                        key: 'coupon-' + e.code,
                        className: 'wc-block-components-totals-discount__coupon-list-item',
                        text: e.label,
                        screenReaderText: (0, c.sprintf) /* translators: %s Coupon code. */(
                          /* translators: %s Coupon code. */
                          (0, c.__)('Coupon: %s', 'woocommerce'),
                          e.label,
                        ),
                        disabled: o,
                        onRemove: () => {
                          n(e.code);
                        },
                        radius: 'large',
                        ariaLabel: (0, c.sprintf) /* translators: %s is a coupon code. */(
                          /* translators: %s is a coupon code. */
                          (0, c.__)('Remove coupon "%s"', 'woocommerce'),
                          e.label,
                        ),
                      }),
                    ),
                  ),
                ),
              label: u ? (0, c.__)('Discount', 'woocommerce') : (0, c.__)('Coupons', 'woocommerce'),
              value: u ? -1 * u : '-',
            });
          };
        o(7919);
        const xr = ({ currency: e, values: t, className: o }) => {
            const n =
                (0, _.getSetting)('taxesEnabled', !0) &&
                (0, _.getSetting)('displayCartPricesIncludingTax', !1),
              { total_price: s, total_tax: i, tax_lines: l } = t,
              { receiveCart: m, ...u } = Ve(),
              d = (0, yt.applyCheckoutFilter)({
                filterName: 'totalLabel',
                defaultValue: (0, c.__)('Total', 'woocommerce'),
                extensions: u.extensions,
                arg: { cart: u },
              }),
              h = (0, yt.applyCheckoutFilter)({
                filterName: 'totalValue',
                defaultValue: '<price/>',
                extensions: u.extensions,
                arg: { cart: u },
                validation: yt.productPriceValidation,
              }),
              g = (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                className: 'wc-block-components-totals-footer-item-tax-value',
                currency: e,
                value: parseInt(s, 10),
              }),
              w = (0, p.createInterpolateElement)(h, { price: g }),
              k = parseInt(i, 10),
              E =
                l && l.length > 0
                  ? (0, c.sprintf) /* translators: %s is a list of tax rates */(
                      /* translators: %s is a list of tax rates */
                      (0, c.__)('Including %s', 'woocommerce'),
                      l
                        .map(({ name: t, price: o }) => `${(0, jt.formatPrice)(o, e)} ${t}`)
                        .join(', '),
                    )
                  : (0, c.__)('Including <TaxAmount/> in taxes', 'woocommerce');
            return (0, r.createElement)(Vt.TotalsItem, {
              className: a()('wc-block-components-totals-footer-item', o),
              currency: e,
              label: d,
              value: w,
              description:
                n &&
                0 !== k &&
                (0, r.createElement)(
                  'p',
                  { className: 'wc-block-components-totals-footer-item-tax' },
                  (0, p.createInterpolateElement)(E, {
                    TaxAmount: (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                      className: 'wc-block-components-totals-footer-item-tax-value',
                      currency: e,
                      value: k,
                    }),
                  }),
                ),
            });
          },
          Rr = ({ selectedShippingRates: e }) =>
            (0, r.createElement)(
              'div',
              {
                className:
                  'wc-block-components-totals-item__description wc-block-components-totals-shipping__via',
              },
              (0, be.decodeEntities)(e.filter((t, o) => e.indexOf(t) === o).join(', ')),
            );
        let Tr = null;
        o(7051);
        var Ar = o(332);
        o(1707);
        const Ir = ({
          id: e,
          className: t,
          label: o,
          onChange: n,
          options: s,
          value: i,
          required: l = !1,
          errorId: m,
          autoComplete: u = 'off',
          errorMessage: d = (0, c.__)('Please select a valid option', 'woocommerce'),
        }) => {
          const _ = (0, p.useRef)(null),
            h = (0, p.useId)(),
            g = e || 'control-' + h,
            w = m || g,
            { setValidationErrors: k, clearValidationError: E } = (0, K.useDispatch)(
              Z.VALIDATION_STORE_KEY,
            ),
            { error: y, validationErrorId: b } = (0, K.useSelect)(e => {
              const t = e(Z.VALIDATION_STORE_KEY);
              return {
                error: t.getValidationError(w),
                validationErrorId: t.getValidationErrorId(w),
              };
            });
          return (
            (0, p.useEffect)(
              () => (
                !l || i ? E(w) : k({ [w]: { message: d, hidden: !0 } }),
                () => {
                  E(w);
                }
              ),
              [E, i, w, d, l, k],
            ),
            (0, r.createElement)(
              'div',
              {
                id: g,
                className: a()('wc-block-components-combobox', t, {
                  'is-active': i,
                  'has-error': (null == y ? void 0 : y.message) && !(null != y && y.hidden),
                }),
                ref: _,
              },
              (0, r.createElement)(Ar.A, {
                className: 'wc-block-components-combobox-control',
                label: o,
                onChange: n,
                onFilterValueChange: e => {
                  if (e.length) {
                    const t = (0, he.isObject)(_.current)
                      ? _.current.ownerDocument.activeElement
                      : void 0;
                    if (t && (0, he.isObject)(_.current) && _.current.contains(t)) return;
                    const o = e.toLocaleUpperCase(),
                      r = s.find(e => e.value.toLocaleUpperCase() === o);
                    if (r) return void n(r.value);
                    const c = s.find(e => e.label.toLocaleUpperCase().startsWith(o));
                    c && n(c.value);
                  }
                },
                options: s,
                value: i || '',
                allowReset: !1,
                autoComplete: u,
                'aria-invalid': (null == y ? void 0 : y.message) && !(null != y && y.hidden),
                'aria-errormessage': b,
              }),
              (0, r.createElement)(Vt.ValidationInputError, { propertyName: w }),
            )
          );
        };
        o(2931);
        const Br = ({
            className: e,
            countries: t,
            id: o,
            label: n,
            onChange: s,
            value: i = '',
            autoComplete: l = 'off',
            required: m = !1,
            errorId: u,
            errorMessage: d = (0, c.__)('Please select a country', 'woocommerce'),
          }) => {
            const _ = (0, p.useMemo)(
              () =>
                Object.entries(t).map(([e, t]) => ({ value: e, label: (0, be.decodeEntities)(t) })),
              [t],
            );
            return (0, r.createElement)(
              'div',
              { className: a()(e, 'wc-block-components-country-input') },
              (0, r.createElement)(Ir, {
                id: o,
                label: n,
                onChange: s,
                options: _,
                value: i,
                errorId: u,
                errorMessage: d,
                required: m,
                autoComplete: l,
              }),
            );
          },
          Or = e => (0, r.createElement)(Br, { countries: M, ...e }),
          Mr = e => (0, r.createElement)(Br, { countries: L, ...e });
        o(8824);
        const Dr = (e, t) => {
            const o = t.find(
              t =>
                t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
                t.value.toLocaleUpperCase() === e.toLocaleUpperCase(),
            );
            return o ? o.value : '';
          },
          Lr = ({
            className: e,
            id: t,
            states: o,
            country: n,
            label: s,
            onChange: i,
            autoComplete: l = 'off',
            value: m = '',
            required: u = !1,
            errorId: d = '',
          }) => {
            const _ = o[n],
              h = (0, p.useMemo)(
                () =>
                  _
                    ? Object.keys(_).map(e => ({ value: e, label: (0, be.decodeEntities)(_[e]) }))
                    : [],
                [_],
              ),
              g = (0, p.useCallback)(
                e => {
                  const t = h.length > 0 ? Dr(e, h) : e;
                  t !== m && i(t);
                },
                [i, h, m],
              ),
              w = (0, p.useRef)(m);
            return (
              (0, p.useEffect)(() => {
                w.current !== m && (w.current = m);
              }, [m]),
              (0, p.useEffect)(() => {
                if (h.length > 0 && w.current) {
                  const e = Dr(w.current, h);
                  e !== w.current && g(e);
                }
              }, [h, g]),
              h.length > 0
                ? (0, r.createElement)(Ir, {
                    className: a()(e, 'wc-block-components-state-input'),
                    id: t,
                    label: s,
                    onChange: g,
                    options: h,
                    value: m,
                    errorMessage: (0, c.__)('Please select a state.', 'woocommerce'),
                    errorId: d,
                    required: u,
                    autoComplete: l,
                  })
                : (0, r.createElement)(Vt.ValidatedTextInput, {
                    className: e,
                    id: t,
                    label: s,
                    onChange: g,
                    autoComplete: l,
                    value: m,
                    required: u,
                  })
            );
          },
          Fr = e => (0, r.createElement)(Lr, { states: D, ...e }),
          Vr = e => (0, r.createElement)(Lr, { states: F, ...e }),
          jr = ({ field: e, props: t, onChange: o, value: n }) => {
            var a;
            const s = null !== (a = null == e ? void 0 : e.required) && void 0 !== a && a,
              [i, l] = (0, p.useState)(() => Boolean(n) || s);
            return (0, r.createElement)(
              p.Fragment,
              null,
              i
                ? (0, r.createElement)(Vt.ValidatedTextInput, {
                    ...t,
                    type: e.type,
                    label: s ? e.label : e.optionalLabel,
                    className: `wc-block-components-address-form__${e.key}`,
                    value: n,
                    onChange: t => o(e.key, t),
                  })
                : (0, r.createElement)(
                    'button',
                    {
                      className: 'wc-block-components-address-form__address_2-toggle',
                      onClick: () => l(!0),
                    },
                    (0, c.sprintf)(
                      // translators: %s: address 2 field label.
                      // translators: %s: address 2 field label.
                      (0, c.__)('+ Add %s', 'woocommerce'),
                      e.label.toLowerCase(),
                    ),
                  ),
            );
          },
          Yr = (e, t, o) => ({
            id: `${t}-${null == e ? void 0 : e.key}`.replaceAll('/', '-'),
            errorId: `${o}_${null == e ? void 0 : e.key}`,
            label:
              null != e && e.required
                ? null == e
                  ? void 0
                  : e.label
                : null == e
                ? void 0
                : e.optionalLabel,
            autoCapitalize: null == e ? void 0 : e.autocapitalize,
            autoComplete: null == e ? void 0 : e.autocomplete,
            errorMessage: null == e ? void 0 : e.errorMessage,
            required: null == e ? void 0 : e.required,
            className: `wc-block-components-address-form__${null == e ? void 0 : e.key}`.replaceAll(
              '/',
              '-',
            ),
            ...(null == e ? void 0 : e.attributes),
          }),
          $r = (e, t, o) => ({
            field: t.find(t => t.key === e),
            value: (0, he.objectHasProp)(o, e) ? o[e] : void 0,
          }),
          Ur = ({ formId: e, address1: t, address2: o, addressType: c, onChange: n }) => {
            var a, s, i, l;
            const m = t ? Yr(t.field, e, c) : void 0,
              u = o ? Yr(o.field, e, c) : void 0;
            return (0, r.createElement)(
              r.Fragment,
              null,
              t &&
                (0, r.createElement)(Vt.ValidatedTextInput, {
                  ...m,
                  type: null === (a = t.field) || void 0 === a ? void 0 : a.type,
                  label: null === (s = t.field) || void 0 === s ? void 0 : s.label,
                  className: `wc-block-components-address-form__${
                    null === (i = t.field) || void 0 === i ? void 0 : i.key
                  }`,
                  value: t.value,
                  onChange: e => {
                    var o;
                    return n(null === (o = t.field) || void 0 === o ? void 0 : o.key, e);
                  },
                }),
              (null == o ? void 0 : o.field) &&
                !(null != o && null !== (l = o.field) && void 0 !== l && l.hidden) &&
                (0, r.createElement)(jr, {
                  field: o.field,
                  props: u,
                  onChange: n,
                  value: null == o ? void 0 : o.value,
                }),
            );
          },
          Hr = ({
            id: e = '',
            fields: t,
            fieldConfig: o = {},
            onChange: n,
            addressType: s = 'shipping',
            values: i,
            children: l,
          }) => {
            const m = (0, vt.useInstanceId)(Hr),
              u = Yo(t),
              d = Yo(o),
              _ = Yo((0, he.objectHasProp)(i, 'country') ? i.country : ''),
              h = (0, p.useMemo)(() => {
                const e = Ce(u, d, _);
                return {
                  fields: e,
                  addressType: s,
                  required: e.filter(e => e.required),
                  hidden: e.filter(e => e.hidden),
                };
              }, [u, d, _, s]),
              g = (0, p.useRef)({});
            return (
              (0, p.useEffect)(() => {
                const e = { ...i, ...Object.fromEntries(h.hidden.map(e => [e.key, ''])) };
                ze()(i, e) || n(e);
              }, [n, h, i]),
              (0, p.useEffect)(() => {
                'shipping' === s &&
                  (0, he.objectHasProp)(i, 'country') &&
                  (e => {
                    const t = 'shipping_country',
                      o = (0, K.select)(Z.VALIDATION_STORE_KEY).getValidationError(t);
                    !e.country &&
                      (e.city || e.state || e.postcode) &&
                      (o
                        ? (0, K.dispatch)(Z.VALIDATION_STORE_KEY).showValidationError(t)
                        : (0, K.dispatch)(Z.VALIDATION_STORE_KEY).setValidationErrors({
                            [t]: {
                              message: (0, c.__)('Please select your country', 'woocommerce'),
                              hidden: !1,
                            },
                          })),
                      o &&
                        e.country &&
                        (0, K.dispatch)(Z.VALIDATION_STORE_KEY).clearValidationError(t);
                  })(i);
              }, [i, s]),
              (0, p.useEffect)(() => {
                var e, t;
                null === (e = g.current) ||
                  void 0 === e ||
                  null === (t = e.postcode) ||
                  void 0 === t ||
                  t.revalidate();
              }, [_]),
              (e = e || `${m}`),
              (0, r.createElement)(
                'div',
                { id: e, className: 'wc-block-components-address-form' },
                h.fields.map(t => {
                  if (t.hidden) return null;
                  const o = Yr(t, e, s);
                  if (
                    ('email' === t.key && ((o.id = 'email'), (o.errorId = 'billing_email')),
                    'checkbox' === t.type)
                  )
                    return (0, r.createElement)(Vt.CheckboxControl, {
                      key: t.key,
                      checked: Boolean(i[t.key]),
                      onChange: e => {
                        n({ ...i, [t.key]: e });
                      },
                      ...o,
                    });
                  if ('address_1' === t.key) {
                    const o = $r('address_1', h.fields, i),
                      c = $r('address_2', h.fields, i);
                    return (0, r.createElement)(Ur, {
                      address1: o,
                      address2: c,
                      addressType: s,
                      formId: e,
                      key: t.key,
                      onChange: (e, t) => {
                        n({ ...i, [e]: t });
                      },
                    });
                  }
                  if ('address_2' === t.key) return null;
                  if ('country' === t.key && (0, he.objectHasProp)(i, 'country')) {
                    const e = 'shipping' === s ? Mr : Or;
                    return (0, r.createElement)(e, {
                      key: t.key,
                      ...o,
                      value: i.country,
                      onChange: e => {
                        n({ ...i, country: e, state: '', postcode: '' });
                      },
                    });
                  }
                  if ('state' === t.key && (0, he.objectHasProp)(i, 'state')) {
                    const e = 'shipping' === s ? Vr : Fr;
                    return (0, r.createElement)(e, {
                      key: t.key,
                      ...o,
                      country: i.country,
                      value: i.state,
                      onChange: e => n({ ...i, state: e }),
                    });
                  }
                  return 'select' === t.type
                    ? void 0 === t.options
                      ? null
                      : (0, r.createElement)(Ir, {
                          key: t.key,
                          ...o,
                          className: a()(
                            'wc-block-components-select-input',
                            `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                          ),
                          value: i[t.key],
                          onChange: e => {
                            n({ ...i, [t.key]: e });
                          },
                          options: t.options,
                        })
                    : (0, r.createElement)(Vt.ValidatedTextInput, {
                        key: t.key,
                        ref: e => (g.current[t.key] = e),
                        ...o,
                        type: t.type,
                        value: i[t.key],
                        onChange: e => n({ ...i, [t.key]: e }),
                        customFormatter: e =>
                          'postcode' === t.key ? e.trimStart().toUpperCase() : e,
                        customValidation: e =>
                          ((e, t, o) =>
                            !(
                              (e.required || e.value) &&
                              ('postcode' === t &&
                              o &&
                              !(0, yt.isPostcode)({ postcode: e.value, country: o })
                                ? (e.setCustomValidity(
                                    (0, c.__)('Please enter a valid postcode', 'woocommerce'),
                                  ),
                                  1)
                                : 'email' === t &&
                                  !(0, Se.isEmail)(e.value) &&
                                  (e.setCustomValidity(
                                    (0, c.__)('Please enter a valid email address', 'woocommerce'),
                                  ),
                                  1))
                            ))(e, t.key, (0, he.objectHasProp)(i, 'country') ? i.country : ''),
                      });
                }),
                l,
              )
            );
          },
          zr = Hr,
          Kr = ({ address: e, onUpdate: t, onCancel: o, addressFields: n }) => {
            const [a, s] = (0, p.useState)(e),
              { showAllValidationErrors: i } = (0, K.useDispatch)(Z.VALIDATION_STORE_KEY),
              l = (function(e) {
                const t = (0, p.useRef)(null),
                  o = (0, p.useRef)(null),
                  r = (0, p.useRef)(e);
                return (
                  (0, p.useEffect)(() => {
                    r.current = e;
                  }, [e]),
                  (0, p.useCallback)(e => {
                    if (e) (t.current = e), (o.current = e.ownerDocument.activeElement);
                    else if (o.current) {
                      var c, n, a;
                      const e =
                        null === (c = t.current) || void 0 === c
                          ? void 0
                          : c.contains(
                              null === (n = t.current) || void 0 === n
                                ? void 0
                                : n.ownerDocument.activeElement,
                            );
                      var s;
                      if (
                        (null !== (a = t.current) &&
                          void 0 !== a &&
                          a.isConnected &&
                          !e &&
                          ((null !== (s = Tr) && void 0 !== s) || (Tr = o.current)),
                        r.current)
                      )
                        r.current();
                      else {
                        var i;
                        const e = o.current;
                        null === (i = null != e && e.isConnected ? e : Tr) ||
                          void 0 === i ||
                          i.focus();
                      }
                      Tr = null;
                    }
                  }, [])
                );
              })(),
              { hasValidationErrors: m, isCustomerDataUpdating: u } = (0, K.useSelect)(e => ({
                hasValidationErrors: e(Z.VALIDATION_STORE_KEY).hasValidationErrors,
                isCustomerDataUpdating: e(Z.CART_STORE_KEY).isCustomerDataUpdating(),
              }));
            return (0, r.createElement)(
              'form',
              { className: 'wc-block-components-shipping-calculator-address', ref: l },
              (0, r.createElement)(zr, { fields: n, onChange: s, values: a }),
              (0, r.createElement)(
                hr,
                {
                  className: 'wc-block-components-shipping-calculator-address__button',
                  disabled: u,
                  onClick: r => (r.preventDefault(), ze()(a, e) ? o() : (i(), m() ? void 0 : t(a))),
                  type: 'submit',
                },
                (0, c.__)('Update', 'woocommerce'),
              ),
            );
          },
          qr = ({
            onUpdate: e = () => {},
            onCancel: t = () => {},
            addressFields: o = ['country', 'state', 'city', 'postcode'],
          }) => {
            const { shippingAddress: c } = (() => {
                const { customerData: e, isInitialized: t } = (0, K.useSelect)(e => {
                    const t = e(Z.CART_STORE_KEY);
                    return {
                      customerData: t.getCustomerData(),
                      isInitialized: t.hasFinishedResolution('getCartData'),
                    };
                  }),
                  { setShippingAddress: o, setBillingAddress: r } = (0, K.useDispatch)(
                    Z.CART_STORE_KEY,
                  );
                return {
                  isInitialized: t,
                  billingAddress: e.billingAddress,
                  shippingAddress: e.shippingAddress,
                  setBillingAddress: r,
                  setShippingAddress: o,
                };
              })(),
              n = 'wc/cart/shipping-calculator';
            return (0, r.createElement)(
              'div',
              { className: 'wc-block-components-shipping-calculator' },
              (0, r.createElement)(Vt.StoreNoticesContainer, { context: n }),
              (0, r.createElement)(Kr, {
                address: c,
                addressFields: o,
                onCancel: t,
                onUpdate: t => {
                  (0, K.dispatch)(Z.CART_STORE_KEY)
                    .updateCustomerData({ shipping_address: t }, !1)
                    .then(() => {
                      (e => {
                        const { removeNotice: t } = (0, K.dispatch)('core/notices'),
                          { getNotices: o } = (0, K.select)('core/notices');
                        o(e).forEach(o => {
                          t(o.id, e);
                        });
                      })(n),
                        e(t);
                    })
                    .catch(e => {
                      (0, Z.processErrorResponse)(e, n);
                    });
                },
              }),
            );
          },
          Wr = ({
            label: e = (0, c.__)('Calculate', 'woocommerce'),
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
          }) =>
            (0, r.createElement)(
              'button',
              {
                className: 'wc-block-components-totals-shipping__change-address__link',
                id: 'wc-block-components-totals-shipping__change-address__link',
                onClick: e => {
                  e.preventDefault(), o(!t);
                },
                'aria-label': e,
                'aria-expanded': t,
              },
              e,
            ),
          Gr = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            isCheckout: n = !1,
          }) =>
            e
              ? (0, r.createElement)(Wr, {
                  label: (0, c.__)('Add an address for shipping options', 'woocommerce'),
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                })
              : (0, r.createElement)(
                  'em',
                  null,
                  n
                    ? (0, c.__)('No shipping options available', 'woocommerce')
                    : (0, c.__)('Calculated during checkout', 'woocommerce'),
                ),
          Qr = () => {
            const { pickupAddress: e } = (0, K.useSelect)(e => {
              const t = e('wc/store/cart')
                .getShippingRates()
                .flatMap(e => e.shipping_rates)
                .find(e => e.selected && $e(e));
              if ((0, he.isObject)(t) && (0, he.objectHasProp)(t, 'meta_data')) {
                const e = t.meta_data.find(e => 'pickup_address' === e.key);
                if ((0, he.isObject)(e) && (0, he.objectHasProp)(e, 'value') && e.value)
                  return { pickupAddress: e.value };
              }
              return (0, he.isObject)(t), { pickupAddress: void 0 };
            });
            return void 0 === e
              ? null
              : (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-shipping-address' },
                  (0, c.sprintf) /* translators: %s: shipping method name, e.g. "Amazon Locker" */(
                    /* translators: %s: shipping method name, e.g. "Amazon Locker" */
                    (0, c.__)('Collection from %s', 'woocommerce'),
                    e,
                  ) + ' ',
                );
          },
          Zr = ({ formattedLocation: e }) =>
            e
              ? (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-shipping-address' },
                  (0, c.sprintf) /* translators: %s location. */(
                    /* translators: %s location. */
                    (0, c.__)('Shipping to %s', 'woocommerce'),
                    e,
                  ) + ' ',
                )
              : null,
          Jr = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            shippingAddress: n,
          }) => {
            const { isEditor: a } = W(),
              s = (0, K.useSelect)(e => e(Z.CHECKOUT_STORE_KEY).prefersCollection()),
              i = (0, _.getSetting)('activeShippingZones'),
              l =
                i.length > 1 &&
                i.some(
                  e =>
                    'Everywhere' === e.description ||
                    'Locations outside all other zones' === e.description,
                ),
              m = !!xe(n);
            if (!m && !a && !l) return null;
            const u = m
                ? (0, c.__)('Change address', 'woocommerce')
                : (0, c.__)('Calculate shipping for your location', 'woocommerce'),
              d = xe(n);
            return (0, r.createElement)(
              r.Fragment,
              null,
              s
                ? (0, r.createElement)(Qr, null)
                : (0, r.createElement)(Zr, { formattedLocation: d }),
              e &&
                (0, r.createElement)(Wr, {
                  label: u,
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                }),
            );
          };
        var Xr = o(1208),
          ec = (o(9345), o(2900)),
          tc = o(2478),
          oc = o(8306);
        const rc = e => {
            switch (e) {
              case 'success':
              case 'warning':
              case 'info':
              case 'default':
                return 'polite';
              default:
                return 'assertive';
            }
          },
          cc = e => {
            switch (e) {
              case 'success':
                return ec.A;
              case 'warning':
              case 'info':
              case 'error':
                return tc.A;
              default:
                return oc.A;
            }
          },
          nc = ({
            className: e,
            status: t = 'default',
            children: o,
            spokenMessage: n = o,
            onRemove: s = () => {},
            isDismissible: i = !0,
            politeness: l = rc(t),
            summary: u,
          }) => (
            ((e, t) => {
              const o = 'string' == typeof e ? e : (0, p.renderToString)(e);
              (0, p.useEffect)(() => {
                o && (0, Dt.speak)(o, t);
              }, [o, t]);
            })(n, l),
            (0, r.createElement)(
              'div',
              {
                className: a()(e, 'wc-block-components-notice-banner', 'is-' + t, {
                  'is-dismissible': i,
                }),
              },
              (0, r.createElement)(m.A, { icon: cc(t) }),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-notice-banner__content' },
                u &&
                  (0, r.createElement)(
                    'p',
                    { className: 'wc-block-components-notice-banner__summary' },
                    u,
                  ),
                o,
              ),
              !!i &&
                (0, r.createElement)(
                  hr,
                  {
                    className: 'wc-block-components-notice-banner__dismiss',
                    'aria-label': (0, c.__)('Dismiss this notice', 'woocommerce'),
                    onClick: e => {
                      'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                        e.preventDefault &&
                        e.preventDefault(),
                        s();
                    },
                    removeTextWrap: !0,
                  },
                  (0, r.createElement)(m.A, { icon: Xr.A }),
                ),
            )
          );
        var ac = o(1359),
          sc = o.n(ac);
        const ic = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
          lc = ['target', 'href', 'rel', 'name', 'download'],
          mc = (e, t) => {
            const o = (null == t ? void 0 : t.tags) || ic,
              r = (null == t ? void 0 : t.attr) || lc;
            return sc().sanitize(e, { ALLOWED_TAGS: o, ALLOWED_ATTR: r });
          },
          uc = e => {
            const t = (0, _.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10);
            let o = (0, r.createElement)(
              r.Fragment,
              null,
              Number.isFinite(t) &&
                (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                  currency: (0, jt.getCurrencyFromPriceResponse)(e),
                  value: t,
                }),
              Number.isFinite(t) && e.delivery_time ? ' — ' : null,
              (0, be.decodeEntities)(e.delivery_time),
            );
            return (
              0 === t &&
                (o = (0, r.createElement)(
                  'span',
                  {
                    className:
                      'wc-block-components-shipping-rates-control__package__description--free',
                  },
                  (0, c.__)('Free', 'woocommerce'),
                )),
              { label: (0, be.decodeEntities)(e.name), value: e.rate_id, description: o }
            );
          },
          dc = ({
            className: e = '',
            noResultsMessage: t,
            onSelectRate: o,
            rates: c,
            renderOption: n = uc,
            selectedRate: a,
            disabled: s = !1,
            highlightChecked: i = !1,
          }) => {
            const l = (null == a ? void 0 : a.rate_id) || '',
              m = ct(l),
              [u, d] = (0, p.useState)(() => l || (c.length > 0 ? c[0].rate_id : void 0));
            return (
              (0, p.useEffect)(() => {
                l && l !== m && l !== u && d(l);
              }, [l, u, m]),
              (0, p.useEffect)(() => {
                !u && c.length > 0 && (d(c[0].rate_id), o(c[0].rate_id));
              }, [o, c, u]),
              (0, p.useEffect)(() => {
                u && o(u);
              }, [o, u]),
              0 === c.length
                ? t
                : (0, r.createElement)(Vt.RadioControl, {
                    className: e,
                    onChange: e => {
                      d(e), o(e);
                    },
                    highlightChecked: i,
                    disabled: s,
                    selected: u,
                    options: c.map(n),
                  })
            );
          };
        o(2867);
        const pc = ({
            packageId: e,
            className: t = '',
            noResultsMessage: o,
            renderOption: n,
            packageData: s,
            collapsible: i,
            showItems: l,
            highlightChecked: m = !1,
          }) => {
            var u;
            const { selectShippingRate: d, isSelectingRate: _ } = Ze(),
              h =
                (0, K.useSelect)(e => {
                  var t, o, r;
                  return null === (t = e(Z.CART_STORE_KEY)) ||
                    void 0 === t ||
                    null === (o = t.getCartData()) ||
                    void 0 === o ||
                    null === (r = o.shippingRates) ||
                    void 0 === r
                    ? void 0
                    : r.length;
                }) > 1 ||
                document.querySelectorAll('.wc-block-components-shipping-rates-control__package')
                  .length > 1,
              g = null != l ? l : h,
              w = null != i ? i : h,
              k = (0, r.createElement)(
                r.Fragment,
                null,
                (w || g) &&
                  (0, r.createElement)('div', {
                    className: 'wc-block-components-shipping-rates-control__package-title',
                    dangerouslySetInnerHTML: { __html: mc(s.name) },
                  }),
                g &&
                  (0, r.createElement)(
                    'ul',
                    { className: 'wc-block-components-shipping-rates-control__package-items' },
                    Object.values(s.items).map(e => {
                      const t = (0, be.decodeEntities)(e.name),
                        o = e.quantity;
                      return (0, r.createElement)(
                        'li',
                        {
                          key: e.key,
                          className: 'wc-block-components-shipping-rates-control__package-item',
                        },
                        (0, r.createElement)(Vt.Label, {
                          label: o > 1 ? `${t} × ${o}` : `${t}`,
                          screenReaderLabel: (0,
                          c.sprintf) /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */(
                            /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                            (0, c._n)('%1$s (%2$d unit)', '%1$s (%2$d units)', o, 'woocommerce'),
                            t,
                            o,
                          ),
                        }),
                      );
                    }),
                  ),
              ),
              E = (0, p.useCallback)(
                t => {
                  d(t, e);
                },
                [e, d],
              ),
              y = {
                className: t,
                noResultsMessage: o,
                rates: s.shipping_rates,
                onSelectRate: E,
                selectedRate: s.shipping_rates.find(e => e.selected),
                renderOption: n,
                disabled: _,
                highlightChecked: m,
              },
              b = (0, p.useMemo)(() => {
                var e;
                return null == s || null === (e = s.shipping_rates) || void 0 === e
                  ? void 0
                  : e.findIndex(e => (null == e ? void 0 : e.selected));
              }, [null == s ? void 0 : s.shipping_rates]);
            return w
              ? (0, r.createElement)(
                  Vt.Panel,
                  {
                    className: a()('wc-block-components-shipping-rates-control__package', t, {
                      'wc-block-components-shipping-rates-control__package--disabled': _,
                    }),
                    initialOpen: !1,
                    title: k,
                  },
                  (0, r.createElement)(dc, { ...y }),
                )
              : (0, r.createElement)(
                  'div',
                  {
                    className: a()('wc-block-components-shipping-rates-control__package', t, {
                      'wc-block-components-shipping-rates-control__package--disabled': _,
                      'wc-block-components-shipping-rates-control__package--first-selected':
                        !_ && 0 === b,
                      'wc-block-components-shipping-rates-control__package--last-selected':
                        !_ &&
                        b ===
                          (null == s || null === (u = s.shipping_rates) || void 0 === u
                            ? void 0
                            : u.length) -
                            1,
                    }),
                  },
                  k,
                  (0, r.createElement)(dc, { ...y }),
                );
          },
          _c = ({
            packages: e,
            showItems: t,
            collapsible: o,
            noResultsMessage: c,
            renderOption: n,
            context: a = '',
          }) =>
            e.length
              ? (0, r.createElement)(
                  r.Fragment,
                  null,
                  e.map(({ package_id: e, ...s }) =>
                    (0, r.createElement)(pc, {
                      highlightChecked: 'woocommerce/cart' !== a,
                      key: e,
                      packageId: e,
                      packageData: s,
                      collapsible: o,
                      showItems: t,
                      noResultsMessage: c,
                      renderOption: n,
                    }),
                  ),
                )
              : null,
          hc = ({
            shippingRates: e,
            isLoadingRates: t,
            className: o,
            collapsible: n,
            showItems: a,
            noResultsMessage: s,
            renderOption: i,
            context: l,
          }) => {
            (0, p.useEffect)(() => {
              var o, r;
              t ||
                ((o = je(e)),
                (r = (e =>
                  e.reduce(function(e, t) {
                    return e + t.shipping_rates.length;
                  }, 0))(e)),
                1 === o
                  ? (0, Dt.speak)(
                      (0, c.sprintf) /* translators: %d number of shipping options found. */(
                        /* translators: %d number of shipping options found. */
                        (0, c._n)(
                          '%d shipping option was found.',
                          '%d shipping options were found.',
                          r,
                          'woocommerce',
                        ),
                        r,
                      ),
                    )
                  : (0, Dt.speak)(
                      (0, c.sprintf) /* translators: %d number of shipping packages packages. */(
                        /* translators: %d number of shipping packages packages. */
                        (0, c._n)(
                          'Shipping option searched for %d package.',
                          'Shipping options searched for %d packages.',
                          o,
                          'woocommerce',
                        ),
                        o,
                      ) +
                        ' ' +
                        (0, c.sprintf) /* translators: %d number of shipping options available. */(
                          /* translators: %d number of shipping options available. */
                          (0, c._n)(
                            '%d shipping option was found',
                            '%d shipping options were found',
                            r,
                            'woocommerce',
                          ),
                          r,
                        ),
                    ));
            }, [t, e]);
            const { extensions: m, receiveCart: u, ...d } = Ve(),
              _ = {
                className: o,
                collapsible: n,
                showItems: a,
                noResultsMessage: s,
                renderOption: i,
                extensions: m,
                cart: d,
                components: { ShippingRatesControlPackage: pc },
                context: l,
              },
              { isEditor: h } = W(),
              { hasSelectedLocalPickup: g, selectedRates: w } = Ze(),
              k = (0, he.isObject)(w) ? Object.values(w) : [],
              E = k.every(e => e === k[0]);
            return (0, r.createElement)(
              Ho,
              {
                isLoading: t,
                screenReaderLabel: (0, c.__)('Loading shipping rates…', 'woocommerce'),
                showSpinner: !0,
              },
              g &&
                'woocommerce/cart' === l &&
                e.length > 1 &&
                !E &&
                !h &&
                (0, r.createElement)(
                  nc,
                  { className: 'wc-block-components-notice', isDismissible: !1, status: 'warning' },
                  (0, c.__)('Multiple shipments must have the same pickup location', 'woocommerce'),
                ),
              (0, r.createElement)(yt.ExperimentalOrderShippingPackages.Slot, { ..._ }),
              (0, r.createElement)(
                yt.ExperimentalOrderShippingPackages,
                null,
                (0, r.createElement)(_c, { packages: e, noResultsMessage: s, renderOption: i }),
              ),
            );
          },
          gc = ({ hasRates: e, shippingRates: t, isLoadingRates: o, isAddressComplete: n }) => {
            const a = e
              ? (0, c.__)('Shipping options', 'woocommerce')
              : (0, c.__)('Choose a shipping option', 'woocommerce');
            return (0, r.createElement)(
              'fieldset',
              { className: 'wc-block-components-totals-shipping__fieldset' },
              (0, r.createElement)('legend', { className: 'screen-reader-text' }, a),
              (0, r.createElement)(hc, {
                className: 'wc-block-components-totals-shipping__options',
                noResultsMessage: (0, r.createElement)(
                  r.Fragment,
                  null,
                  n &&
                    (0, r.createElement)(
                      nc,
                      {
                        isDismissible: !1,
                        className: 'wc-block-components-shipping-rates-control__no-results-notice',
                        status: 'warning',
                      },
                      (0, c.__)(
                        'There are no shipping options available. Please check your shipping address.',
                        'woocommerce',
                      ),
                    ),
                ),
                shippingRates: t,
                isLoadingRates: o,
                context: 'woocommerce/cart',
              }),
            );
          };
        o(8399);
        const wc = ({
            currency: e,
            values: t,
            showCalculator: o = !0,
            showRateSelector: n = !0,
            isCheckout: s = !1,
            className: i,
          }) => {
            const [l, m] = (0, p.useState)(!1),
              {
                shippingAddress: u,
                cartHasCalculatedShipping: d,
                shippingRates: h,
                isLoadingRates: g,
              } = Ve(),
              w = (e =>
                (0, _.getSetting)('displayCartPricesIncludingTax', !1)
                  ? parseInt(e.total_shipping, 10) + parseInt(e.total_shipping_tax, 10)
                  : parseInt(e.total_shipping, 10))(t),
              k = h.some(e => e.shipping_rates.length) || w > 0,
              E = o && l,
              y = (0, K.useSelect)(e => e(Z.CHECKOUT_STORE_KEY).prefersCollection()),
              b = h.flatMap(e =>
                e.shipping_rates
                  .filter(e => (y && $e(e) && e.selected) || (!y && e.selected))
                  .flatMap(e => e.name),
              ),
              v = (e =>
                !!e.country &&
                Ce(Y, {}, e.country).every(
                  ({ key: t = '', hidden: o = !1, required: r = !1 }) =>
                    !(!o && r) || (Pe(t, e) && '' !== e[t]),
                ))(u),
              f = ((e, t, o) =>
                !e || (!t && o.some(e => !e.shipping_rates.some(e => !Ue(e.method_id)))))(k, y, h),
              C =
                0 === w
                  ? (0, r.createElement)('strong', null, (0, c.__)('Free', 'woocommerce'))
                  : w;
            return (0, r.createElement)(
              'div',
              { className: a()('wc-block-components-totals-shipping', i) },
              (0, r.createElement)(Vt.TotalsItem, {
                label: (0, c.__)('Shipping', 'woocommerce'),
                value:
                  !f && d
                    ? C
                    : (!v || s) &&
                      (0, r.createElement)(Gr, {
                        showCalculator: o,
                        isCheckout: s,
                        isShippingCalculatorOpen: l,
                        setIsShippingCalculatorOpen: m,
                      }),
                description:
                  (!f && d) || (v && !s)
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(Rr, { selectedShippingRates: b }),
                        (0, r.createElement)(Jr, {
                          shippingAddress: u,
                          showCalculator: o,
                          isShippingCalculatorOpen: l,
                          setIsShippingCalculatorOpen: m,
                        }),
                      )
                    : null,
                currency: e,
              }),
              E &&
                (0, r.createElement)(qr, {
                  onUpdate: () => {
                    m(!1);
                  },
                  onCancel: () => {
                    m(!1);
                  },
                }),
              n &&
                d &&
                !E &&
                (0, r.createElement)(gc, {
                  hasRates: k,
                  shippingRates: h,
                  isLoadingRates: g,
                  isAddressComplete: v,
                }),
            );
          },
          kc = () => {
            const { extensions: e, receiveCart: t, ...o } = Ve(),
              c = { extensions: e, cart: o, context: 'woocommerce/cart' };
            return (0, r.createElement)(yt.ExperimentalOrderMeta.Slot, { ...c });
          },
          Ec = JSON.parse(
            '{"xY":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"uK":{"lock":{"type":"object","default":{"remove":true,"move":true}}}}',
          ),
          yc = [
            {
              attributes: Ec.uK,
              save: () =>
                (0, r.createElement)(
                  'div',
                  { ...s.useBlockProps.save() },
                  (0, r.createElement)(s.InnerBlocks.Content, null),
                ),
              supports: Ec.xY,
              migrate: ({ attributes: e }) => [
                e,
                [
                  (0, u.createBlock)(
                    'woocommerce/cart-order-summary-heading-block',
                    { content: (0, c.__)('Cart totals', 'woocommerce') },
                    [],
                  ),
                  (0, u.createBlock)('woocommerce/cart-order-summary-coupon-form-block', {}, []),
                  (0, u.createBlock)('woocommerce/cart-order-summary-totals-block', {}, [
                    (0, u.createBlock)('woocommerce/cart-order-summary-subtotal-block', {}, []),
                    (0, u.createBlock)('woocommerce/cart-order-summary-fee-block', {}, []),
                    (0, u.createBlock)('woocommerce/cart-order-summary-discount-block', {}, []),
                    (0, u.createBlock)('woocommerce/cart-order-summary-shipping-block', {}, []),
                    (0, u.createBlock)('woocommerce/cart-order-summary-taxes-block', {}, []),
                  ]),
                ],
              ],
              isEligible: (e, t) =>
                !t.some(e => 'woocommerce/cart-order-summary-totals-block' === e.name),
            },
          ],
          bc = yc;
        (0, u.registerBlockType)('woocommerce/cart-order-summary-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Cr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, s.useBlockProps)(),
              { cartTotals: o } = Ve(),
              n = (0, jt.getCurrencyFromPriceResponse)(o),
              a = Nt(yt.innerBlockAreas.CART_ORDER_SUMMARY),
              i = [
                [
                  'woocommerce/cart-order-summary-heading-block',
                  { content: (0, c.__)('Cart totals', 'woocommerce') },
                  [],
                ],
                ['woocommerce/cart-order-summary-coupon-form-block', {}, []],
                ['woocommerce/cart-order-summary-totals-block', {}, []],
              ];
            return (
              xt({ clientId: e, registeredBlocks: a, defaultTemplate: i }),
              (0, r.createElement)(
                'div',
                { ...t },
                (0, r.createElement)(s.InnerBlocks, { allowedBlocks: a, template: i }),
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-totals-wrapper' },
                  (0, r.createElement)(xr, { currency: n, values: o }),
                ),
                (0, r.createElement)(kc, null),
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...s.useBlockProps.save() },
              (0, r.createElement)(s.InnerBlocks.Content, null),
            ),
          deprecated: bc,
        });
        const vc = ({ className: e = '' }) => {
          const { cartTotals: t } = Ve(),
            o = (0, jt.getCurrencyFromPriceResponse)(t);
          return (0, r.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, r.createElement)(Vt.Subtotal, { currency: o, values: t }),
          );
        };
        (0, u.registerBlockType)('woocommerce/cart-order-summary-subtotal-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Cr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(vc, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        }),
          o(2961),
          (0, u.registerBlockType)('woocommerce/cart-order-summary-totals-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: Cr,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ clientId: e }) => {
              const t = (0, s.useBlockProps)(),
                o = Nt(yt.innerBlockAreas.CART_ORDER_SUMMARY_TOTALS),
                c = [
                  ['woocommerce/cart-order-summary-subtotal-block', {}, []],
                  ['woocommerce/cart-order-summary-fee-block', {}, []],
                  ['woocommerce/cart-order-summary-discount-block', {}, []],
                  ['woocommerce/cart-order-summary-shipping-block', {}, []],
                  ['woocommerce/cart-order-summary-taxes-block', {}, []],
                ];
              return (
                xt({ clientId: e, registeredBlocks: o, defaultTemplate: c }),
                (0, r.createElement)(
                  'div',
                  { ...t },
                  (0, r.createElement)(s.InnerBlocks, { allowedBlocks: o, template: c }),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...s.useBlockProps.save() },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              ),
          });
        const fc = ({ className: e }) => {
          const { cartFees: t, cartTotals: o } = Ve(),
            c = (0, jt.getCurrencyFromPriceResponse)(o);
          return (0, r.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, r.createElement)(Vt.TotalsFees, { currency: c, cartFees: t }),
          );
        };
        (0, u.registerBlockType)('woocommerce/cart-order-summary-fee-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Cr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(fc, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        });
        const Cc = () => {
            const { extensions: e, receiveCart: t, ...o } = Ve(),
              c = { extensions: e, cart: o, context: 'woocommerce/cart' };
            return (0, r.createElement)(yt.ExperimentalDiscountsMeta.Slot, { ...c });
          },
          Sc = ({ className: e }) => {
            const { cartTotals: t, cartCoupons: o } = Ve(),
              { removeCoupon: c, isRemovingCoupon: n } = tr('wc/cart'),
              a = (0, jt.getCurrencyFromPriceResponse)(t);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                Vt.TotalsWrapper,
                { className: e },
                (0, r.createElement)(Nr, {
                  cartCoupons: o,
                  currency: a,
                  isRemovingCoupon: n,
                  removeCoupon: c,
                  values: t,
                }),
              ),
              (0, r.createElement)(Cc, null),
            );
          };
        (0, u.registerBlockType)('woocommerce/cart-order-summary-discount-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Cr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(Sc, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        });
        const Pc = ({ className: e }) => {
          const { cartTotals: t, cartNeedsShipping: o } = Ve(),
            { isEditor: c } = W();
          if (!o) return null;
          const n = (0, K.select)('wc/store/cart').getShippingRates();
          if (!je(n) && c) return null;
          const a = (0, jt.getCurrencyFromPriceResponse)(t);
          return (0, r.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, r.createElement)(wc, {
              showCalculator: (0, _.getSetting)('isShippingCalculatorEnabled', !0),
              showRateSelector: !0,
              values: t,
              currency: a,
            }),
          );
        };
        (0, u.registerBlockType)('woocommerce/cart-order-summary-shipping-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Cr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, _.getSetting)('shippingEnabled', !0),
              n = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...n },
              (0, r.createElement)(
                s.InspectorControls,
                null,
                !!o &&
                  (0, r.createElement)(
                    po.PanelBody,
                    { title: (0, c.__)('Shipping Calculations', 'woocommerce') },
                    (0, r.createElement)(
                      'p',
                      { className: 'wc-block-checkout__controls-text' },
                      (0, c.__)(
                        'Options that control shipping can be managed in your store settings.',
                        'woocommerce',
                      ),
                    ),
                    (0, r.createElement)(
                      po.ExternalLink,
                      {
                        href: `${_.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=options`,
                      },
                      (0, c.__)('Manage shipping options', 'woocommerce'),
                    ),
                    ' ',
                  ),
              ),
              (0, r.createElement)(Mt, null, (0, r.createElement)(Pc, { className: t })),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        });
        var Nc = o(8848);
        const xc = ({ className: e }) => {
          const t = (0, _.getSetting)('couponsEnabled', !0),
            { applyCoupon: o, isApplyingCoupon: c } = tr('wc/cart');
          return t
            ? (0, r.createElement)(
                Vt.TotalsWrapper,
                { className: e },
                (0, r.createElement)(Sr, { onSubmit: o, isLoading: c }),
              )
            : null;
        };
        (0, u.registerBlockType)('woocommerce/cart-order-summary-coupon-form-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Nc.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, s.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(Mt, null, (0, r.createElement)(xc, { className: t })),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        });
        const Rc = ({ className: e, showRateAfterTaxName: t }) => {
            const { cartTotals: o } = Ve();
            if (
              (0, _.getSetting)('displayCartPricesIncludingTax', !1) ||
              parseInt(o.total_tax, 10) <= 0
            )
              return null;
            const c = (0, jt.getCurrencyFromPriceResponse)(o);
            return (0, r.createElement)(
              Vt.TotalsWrapper,
              { className: e },
              (0, r.createElement)(Vt.TotalsTaxes, {
                showRateAfterTaxName: t,
                currency: c,
                values: o,
              }),
            );
          },
          Tc = {
            showRateAfterTaxName: {
              type: 'boolean',
              default: (0, _.getSetting)('displayCartPricesIncludingTax', !1),
            },
            lock: { type: 'object', default: { remove: !0, move: !1 } },
          };
        (0, u.registerBlockType)('woocommerce/cart-order-summary-taxes-block', {
          icon: {
            src: (0, r.createElement)(m.A, {
              icon: Cr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: Tc,
          edit: ({ attributes: e, setAttributes: t }) => {
            const { className: o, showRateAfterTaxName: n } = e,
              a = (0, s.useBlockProps)(),
              i = (0, _.getSetting)('taxesEnabled'),
              l = (0, _.getSetting)('displayItemizedTaxes', !1),
              m = (0, _.getSetting)('displayCartPricesIncludingTax', !1);
            return (0, r.createElement)(
              'div',
              { ...a },
              (0, r.createElement)(
                s.InspectorControls,
                null,
                i &&
                  l &&
                  !m &&
                  (0, r.createElement)(
                    po.PanelBody,
                    { title: (0, c.__)('Taxes', 'woocommerce') },
                    (0, r.createElement)(po.ToggleControl, {
                      label: (0, c.__)('Show rate after tax name', 'woocommerce'),
                      help: (0, c.__)(
                        'Show the percentage rate alongside each tax line in the summary.',
                        'woocommerce',
                      ),
                      checked: n,
                      onChange: () => t({ showRateAfterTaxName: !n }),
                    }),
                  ),
              ),
              (0, r.createElement)(Rc, { className: o, showRateAfterTaxName: n }),
            );
          },
          save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
        }),
          o(5966),
          (0, u.registerBlockType)('woocommerce/cart-order-summary-heading-block', {
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: Cr,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ attributes: e, setAttributes: t }) => {
              const { content: o = '', className: c = '' } = e,
                n = (0, s.useBlockProps)();
              return (0, r.createElement)(
                'div',
                { ...n },
                (0, r.createElement)(
                  'span',
                  { className: a()(c, 'wc-block-cart__totals-title') },
                  (0, r.createElement)(s.PlainText, {
                    className: '',
                    value: o,
                    onChange: e => t({ content: e }),
                    style: { backgroundColor: 'transparent' },
                  }),
                ),
              );
            },
            save: () => (0, r.createElement)('div', { ...s.useBlockProps.save() }),
          }),
          o(2838);
        const Ac = (e, t = !0) => {
            t ? window.document.body.classList.add(e) : window.document.body.classList.remove(e);
          },
          Ic = ({ attributes: e, setAttributes: t }) => {
            const { hasDarkControls: o } = e;
            return (0, r.createElement)(
              s.InspectorControls,
              null,
              (0, r.createElement)(
                po.PanelBody,
                { title: (0, c.__)('Style', 'woocommerce') },
                (0, r.createElement)(po.ToggleControl, {
                  label: (0, c.__)('Dark mode inputs', 'woocommerce'),
                  help: (0, c.__)(
                    'Inputs styled specifically for use on dark background colors.',
                    'woocommerce',
                  ),
                  checked: o,
                  onChange: () => t({ hasDarkControls: !o }),
                }),
              ),
            );
          };
        function Bc() {
          const e = (0, c.__)(
            'Your store does not have any payment methods that support the Checkout block. Once you have configured a compatible payment method it will be displayed here.',
            'woocommerce',
          );
          return (0, r.createElement)(
            po.Notice,
            {
              className: 'wc-blocks-no-payment-methods-notice',
              status: 'warning',
              spokenMessage: e,
              isDismissible: !1,
            },
            (0, r.createElement)(
              'div',
              { className: 'wc-blocks-no-payment-methods-notice__content' },
              e,
              ' ',
              (0, r.createElement)(
                po.ExternalLink,
                { href: `${_.ADMIN_URL}admin.php?page=wc-settings&tab=checkout` },
                (0, c.__)('Configure Payment Methods', 'woocommerce'),
              ),
            ),
          );
        }
        o(7414);
        const Oc = window.wp.editor,
          Mc = window.wp.coreData;
        function Dc({ block: e }) {
          const t = 'checkout' === e ? R : T,
            o = 'checkout' === e ? 'woocommerce_checkout_page_id' : 'woocommerce_cart_page_id',
            { saveEntityRecord: n } = (0, K.useDispatch)(Mc.store),
            { editPost: a, savePost: s } = (0, K.useDispatch)(Oc.store),
            { slug: i, postPublished: l, currentPostId: m } = (0, K.useSelect)(o => {
              var r;
              const { getEntityRecord: c } = o(Mc.store),
                { isCurrentPostPublished: n, getCurrentPostId: a } = o(Oc.store);
              return {
                slug:
                  (null === (r = c('postType', 'page', t)) || void 0 === r ? void 0 : r.slug) || e,
                postPublished: n(),
                currentPostId: a(),
              };
            }, []),
            [u, d] = (0, p.useState)('pristine'),
            _ = (0, p.useCallback)(() => {
              d('updating'),
                Promise.resolve()
                  .then(() => pt()({ path: `/wc/v3/settings/advanced/${o}`, method: 'GET' }))
                  .catch(e => {
                    'rest_setting_setting_invalid' === e.code && d('error');
                  })
                  .then(() => {
                    if (!l) return a({ status: 'publish' }), s();
                  })
                  .then(() =>
                    pt()({
                      path: `/wc/v3/settings/advanced/${o}`,
                      method: 'POST',
                      data: { value: m.toString() },
                    }),
                  )
                  .then(() => {
                    if (0 !== t) return n('postType', 'page', { id: t, slug: `${i}-2` });
                  })
                  .then(() => a({ slug: i }))
                  .then(() => s())
                  .then(() => d('updated'));
            }, [l, a, s, o, m, t, n, i]);
          let h;
          return (
            (h =
              'checkout' === e
                ? (0, p.createInterpolateElement)(
                    (0, c.__)(
                      'If you would like to use this block as your default checkout, <a>update your page settings</a>.',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)(
                        'a',
                        { href: '#', onClick: _ },
                        (0, c.__)('update your page settings', 'woocommerce'),
                      ),
                    },
                  )
                : (0, p.createInterpolateElement)(
                    (0, c.__)(
                      'If you would like to use this block as your default cart, <a>update your page settings</a>.',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)(
                        'a',
                        { href: '#', onClick: _ },
                        (0, c.__)('update your page settings', 'woocommerce'),
                      ),
                    },
                  )),
            ('string' == typeof pagenow && 'site-editor' === pagenow) ||
            m === t ||
            'dismissed' === u
              ? null
              : (0, r.createElement)(
                  po.Notice,
                  {
                    className: 'wc-default-page-notice',
                    status: 'updated' === u ? 'success' : 'info',
                    onRemove: () => d('dismissed'),
                    spokenMessage:
                      'updated' === u ? (0, c.__)('Page settings updated', 'woocommerce') : h,
                  },
                  'updated' === u
                    ? (0, c.__)('Page settings updated', 'woocommerce')
                    : (0, r.createElement)(r.Fragment, null, (0, r.createElement)('p', null, h)),
                )
          );
        }
        o(4688);
        const Lc = { warning: '#F0B849', error: '#CC1818', success: '#46B450', info: '#0073AA' },
          Fc = ({ status: e = 'warning', ...t }) =>
            (0, r.createElement)(
              i.SVG,
              { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...t },
              (0, r.createElement)('path', {
                d:
                  'M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z',
                stroke: Lc[e],
                strokeWidth: '1.5',
              }),
              (0, r.createElement)('path', { d: 'M13 7H11V13H13V7Z', fill: Lc[e] }),
              (0, r.createElement)('path', { d: 'M13 15H11V17H13V15Z', fill: Lc[e] }),
            );
        var Vc = o(224);
        const jc = [],
          Yc = e => {
            const [t, o, r] = (() => {
                const e = {};
                (0, _.getSetting)('incompatibleExtensions') &&
                  (0, _.getSetting)('incompatibleExtensions').forEach(t => {
                    e[t.id] = t.title;
                  });
                const t = Object.keys(e),
                  o = t.length;
                return [e, t, o];
              })(),
              [c, n, a] = (() => {
                const { incompatiblePaymentMethods: e } = (0, K.useSelect)(e => {
                    const { getIncompatiblePaymentMethods: t } = e(nr);
                    return { incompatiblePaymentMethods: t() };
                  }, []),
                  t = Object.keys(e);
                return [e, t, t.length];
              })(),
              s = { ...t, ...c },
              i = [...o, ...n],
              l = r + a,
              [m, u] = ((e, t) => {
                const [o, r] = (0, p.useState)(() => {
                  const o = window.localStorage.getItem(e);
                  if (o)
                    try {
                      return JSON.parse(o);
                    } catch {
                      console.error(
                        `Value for key '${e}' could not be retrieved from localStorage because it can't be parsed.`,
                      );
                    }
                  return t;
                });
                return (
                  (0, p.useEffect)(() => {
                    try {
                      window.localStorage.setItem(e, JSON.stringify(o));
                    } catch {
                      console.error(
                        `Value for key '${e}' could not be saved in localStorage because it can't be converted into a string.`,
                      );
                    }
                  }, [e, o]),
                  [o, r]
                );
              })('wc-blocks_dismissed_incompatible_extensions_notices', jc),
              [d, h] = (0, p.useState)(!1),
              g = m.some(t => {
                return (
                  Object.keys(t).includes(e) &&
                  ((o = t[e]),
                  (r = i),
                  o.length === r.length && new Set([...o, ...r]).size === o.length)
                );
                var o, r;
              }),
              w = 0 === l || g;
            return (
              (0, p.useEffect)(() => {
                h(!w),
                  w ||
                    g ||
                    u(t => t.reduce((t, o) => (Object.keys(o).includes(e) || t.push(o), t), []));
              }, [w, g, u, e]),
              [
                d,
                () => {
                  const t = new Set(m);
                  t.add({ [e]: i }), u([...t]);
                },
                ((k = s),
                Object.fromEntries(Object.entries(k).sort(([, e], [, t]) => e.localeCompare(t)))),
                l,
              ]
            );
            var k;
          },
          $c = window.wp.notices;
        var Uc = o(4922);
        const Hc = !1,
          zc = o.n(Uc)()('wc-admin:tracks');
        function Kc(e, t) {
          return (
            zc('recordevent %s %o', 'wcadmin_' + e, t, {
              _tqk: window._tkq,
              shouldRecord: !(Hc || !window._tkq || !window.wcTracks || !window.wcTracks.isEnabled),
            }),
            !(!window.wcTracks || 'function' != typeof window.wcTracks.recordEvent) &&
              (Hc
                ? (window.wcTracks.validateEvent(e, t), !1)
                : void window.wcTracks.recordEvent(e, t))
          );
        }
        const qc = ({ blocks: e, findCondition: t }) => {
            for (const o of e) {
              if (t(o)) return o;
              if (o.innerBlocks) {
                const e = qc({ blocks: o.innerBlocks, findCondition: t });
                if (e) return e;
              }
            }
          },
          Wc = ({ blockType: e = 'woocommerce/cart' }) =>
            'woocommerce/cart' === e
              ? (0, r.createElement)(
                  'p',
                  null,
                  (0, c.__)(
                    'If you continue, the cart block will be replaced with the classic experience powered by shortcodes. This means that you may lose customizations that you made to the cart block.',
                    'woocommerce',
                  ),
                )
              : (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    'p',
                    null,
                    (0, c.__)(
                      'If you continue, the checkout block will be replaced with the classic experience powered by shortcodes. This means that you may lose:',
                      'woocommerce',
                    ),
                  ),
                  (0, r.createElement)(
                    'ul',
                    { className: 'cross-list' },
                    (0, r.createElement)(
                      'li',
                      null,
                      (0, c.__)('Customizations and updates to the block', 'woocommerce'),
                    ),
                    (0, r.createElement)(
                      'li',
                      null,
                      (0, c.__)(
                        'Additional local pickup options created for the new checkout',
                        'woocommerce',
                      ),
                    ),
                  ),
                );
        function Gc({ block: e, clientId: t, type: o }) {
          const { createInfoNotice: n } = (0, K.useDispatch)($c.store),
            { replaceBlock: a, selectBlock: i } = (0, K.useDispatch)(s.store),
            [l, m] = (0, p.useState)(!1),
            d = () => m(!1),
            { undo: _ } = (0, K.useDispatch)(Mc.store),
            [, , h, g] = Yc(e),
            w = 'woocommerce/cart' === e,
            k = w
              ? (0, c.__)('Switch to classic cart', 'woocommerce')
              : (0, c.__)('Switch to classic checkout', 'woocommerce'),
            E = w
              ? (0, c.__)('Switched to classic cart.', 'woocommerce')
              : (0, c.__)('Switched to classic checkout.', 'woocommerce'),
            y = w ? 'cart' : 'checkout',
            b = {
              shortcode: y,
              notice: 'incompatible' === o ? 'incompatible_notice' : 'generic_notice',
              incompatible_extensions_count: g,
              incompatible_extensions_names: JSON.stringify(h),
            },
            { getBlocks: v } = (0, K.useSelect)(e => ({ getBlocks: e(s.store).getBlocks }), []),
            f = () => {
              _(), Kc('switch_to_classic_shortcode_undo', b);
            };
          return (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(
              po.Button,
              {
                variant: 'secondary',
                onClick: () => {
                  Kc('switch_to_classic_shortcode_click', b), m(!0);
                },
              },
              k,
            ),
            l &&
              (0, r.createElement)(
                po.Modal,
                {
                  size: 'medium',
                  title: k,
                  onRequestClose: d,
                  className: 'wc-blocks-switch-to-classic-shortcode-modal-content',
                },
                (0, r.createElement)(Wc, { blockType: e }),
                (0, r.createElement)(
                  po.TabbableContainer,
                  { className: 'wc-blocks-switch-to-classic-shortcode-modal-actions' },
                  (0, r.createElement)(
                    po.Button,
                    {
                      variant: 'primary',
                      isDestructive: !0,
                      onClick: () => {
                        a(t, (0, u.createBlock)('woocommerce/classic-shortcode', { shortcode: y })),
                          Kc('switch_to_classic_shortcode_confirm', b),
                          (() => {
                            const e = qc({
                              blocks: v(),
                              findCondition: e => 'woocommerce/classic-shortcode' === e.name,
                            });
                            e && i(e.clientId);
                          })(),
                          n(E, {
                            actions: [{ label: (0, c.__)('Undo', 'woocommerce'), onClick: f }],
                            type: 'snackbar',
                          }),
                          d();
                      },
                    },
                    (0, c.__)('Switch', 'woocommerce'),
                  ),
                  ' ',
                  (0, r.createElement)(
                    po.Button,
                    {
                      variant: 'secondary',
                      onClick: () => {
                        Kc('switch_to_classic_shortcode_cancel', b), d();
                      },
                    },
                    (0, c.__)('Cancel', 'woocommerce'),
                  ),
                ),
              ),
          );
        }
        function Qc({ block: e, clientId: t }) {
          const [o, n, a, s] = Yc(e);
          if (!o) return null;
          const i = (0, r.createElement)(
              r.Fragment,
              null,
              s > 1
                ? (0, p.createInterpolateElement)(
                    (0, c.__)(
                      'Some active extensions do not yet support this block. This may impact the shopper experience. <a>Learn more</a>',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)(po.ExternalLink, {
                        href: 'https://woocommerce.com/document/cart-checkout-blocks-status/',
                      }),
                    },
                  )
                : (0, p.createInterpolateElement)(
                    (0, c.sprintf)(
                      // translators: %s is the name of the extension.
                      // translators: %s is the name of the extension.
                      (0, c.__)(
                        '<strong>%s</strong> does not yet support this block. This may impact the shopper experience. <a>Learn more</a>',
                        'woocommerce',
                      ),
                      Object.values(a)[0],
                    ),
                    {
                      strong: (0, r.createElement)('strong', null),
                      a: (0, r.createElement)(po.ExternalLink, {
                        href: 'https://woocommerce.com/document/cart-checkout-blocks-status/',
                      }),
                    },
                  ),
            ),
            l = Object.entries(a),
            u = l.length - 2;
          return (0, r.createElement)(
            po.Notice,
            {
              className: 'wc-blocks-incompatible-extensions-notice',
              status: 'warning',
              onRemove: n,
              spokenMessage: i,
            },
            (0, r.createElement)(
              'div',
              { className: 'wc-blocks-incompatible-extensions-notice__content' },
              (0, r.createElement)(m.A, {
                className: 'wc-blocks-incompatible-extensions-notice__warning-icon',
                icon: (0, r.createElement)(Fc, null),
              }),
              (0, r.createElement)(
                'div',
                null,
                (0, r.createElement)('p', null, i),
                s > 1 &&
                  (0, r.createElement)(
                    'ul',
                    null,
                    l.slice(0, 2).map(([e, t]) =>
                      (0, r.createElement)(
                        'li',
                        {
                          key: e,
                          className: 'wc-blocks-incompatible-extensions-notice__element',
                        },
                        t,
                      ),
                    ),
                  ),
                l.length > 2 &&
                  (0, r.createElement)(
                    'details',
                    null,
                    (0, r.createElement)(
                      'summary',
                      null,
                      (0, r.createElement)(
                        'span',
                        null,
                        (0, c.sprintf)(
                          // translators: %s is the number of incompatible extensions.
                          // translators: %s is the number of incompatible extensions.
                          (0, c._n)(
                            '%s more incompatibility',
                            '%s more incompatibilites',
                            u,
                            'woocommerce',
                          ),
                          u,
                        ),
                      ),
                      (0, r.createElement)(m.A, { icon: Vc.A }),
                    ),
                    (0, r.createElement)(
                      'ul',
                      null,
                      l.slice(2).map(([e, t]) =>
                        (0, r.createElement)(
                          'li',
                          {
                            key: e,
                            className: 'wc-blocks-incompatible-extensions-notice__element',
                          },
                          t,
                        ),
                      ),
                    ),
                  ),
                (0, r.createElement)(Gc, { block: e, clientId: t, type: 'incompatible' }),
              ),
            ),
          );
        }
        o(7840), o(1212);
        var Zc = o(361),
          Jc = o(4133);
        o(1598);
        const Xc = ({ text: e, title: t = (0, c.__)('Feedback?', 'woocommerce'), url: o }) => {
            const [n, a] = (0, p.useState)(!1);
            return (
              (0, p.useEffect)(() => {
                a(!0);
              }, []),
              (0, r.createElement)(
                r.Fragment,
                null,
                n &&
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-feedback-prompt' },
                    (0, r.createElement)(m.A, { icon: Zc.A }),
                    (0, r.createElement)('h2', { className: 'wc-block-feedback-prompt__title' }, t),
                    (0, r.createElement)('p', { className: 'wc-block-feedback-prompt__text' }, e),
                    (0, r.createElement)(
                      'a',
                      {
                        href: o,
                        className: 'wc-block-feedback-prompt__link',
                        rel: 'noreferrer noopener',
                        target: '_blank',
                      },
                      (0, c.__)('Give us your feedback.', 'woocommerce'),
                      (0, r.createElement)(m.A, { icon: Jc.A, size: 16 }),
                    ),
                  ),
              )
            );
          },
          en = () =>
            (0, r.createElement)(Xc, {
              text: (0, c.__)(
                'We are currently working on improving our cart and checkout blocks to provide merchants with the tools and customization options they need.',
                'woocommerce',
              ),
              url:
                'https://github.com/woocommerce/woocommerce/discussions/new?category=checkout-flow&labels=type%3A+product%20feedback',
            }),
          tn = (0, vt.createHigherOrderComponent)(
            e => t => {
              const { clientId: o, name: c, isSelected: n } = t,
                {
                  isCart: a,
                  isCheckout: i,
                  isPaymentMethodsBlock: l,
                  hasPaymentMethods: m,
                  parentId: u,
                } = (0, K.useSelect)(e => {
                  const { getBlockParentsByBlockName: t, getBlockName: r } = e(s.store),
                    c = t(o, ['woocommerce/cart', 'woocommerce/checkout']).reduce(
                      (e, t) => ((e[r(t)] = t), e),
                      {},
                    ),
                    n = r(o),
                    a = Object.keys(c).includes('woocommerce/cart'),
                    i = Object.keys(c).includes('woocommerce/checkout'),
                    l = 'woocommerce/cart' === n || a,
                    m = l ? 'woocommerce/cart' : 'woocommerce/checkout';
                  return {
                    isCart: l,
                    isCheckout: 'woocommerce/checkout' === n || i,
                    parentId: n === m ? o : c[m],
                    isPaymentMethodsBlock: 'woocommerce/checkout-payment-block' === n,
                    hasPaymentMethods:
                      e(Z.PAYMENT_STORE_KEY).paymentMethodsInitialized() &&
                      Object.keys(e(Z.PAYMENT_STORE_KEY).getAvailablePaymentMethods()).length > 0,
                  };
                });
              return c.startsWith('woocommerce/') && n && (a || i)
                ? (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(
                      s.InspectorControls,
                      null,
                      (0, r.createElement)(Qc, {
                        block: a ? 'woocommerce/cart' : 'woocommerce/checkout',
                        clientId: u,
                      }),
                      (0, r.createElement)(Dc, { block: i ? 'checkout' : 'cart' }),
                      l && !m && (0, r.createElement)(Bc, null),
                      (0, r.createElement)(en, null),
                    ),
                    (0, r.createElement)(e, { key: 'edit', ...t }),
                  )
                : (0, r.createElement)(e, { key: 'edit', ...t });
            },
            'withSidebarNotices',
          );
        (0, Ge.hasFilter)('editor.BlockEdit', 'woocommerce/add/sidebar-compatibility-notice') ||
          (0, Ge.addFilter)(
            'editor.BlockEdit',
            'woocommerce/add/sidebar-compatibility-notice',
            tn,
            11,
          );
        const on = (0, r.createElement)(
            i.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, r.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
            (0, r.createElement)('path', {
              d:
                'M12 6a9.77 9.77 0 0 1 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0 1 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z',
            }),
          ),
          rn = (e, t, o = !0) => {
            const { updateBlockAttributes: r, selectBlock: c } = (0, K.dispatch)(
              'core/block-editor',
            );
            var n, a;
            r(e, { currentView: t }),
              o &&
                c(
                  (null === (n = (0, K.select)('core/block-editor').getBlock(e)) ||
                  void 0 === n ||
                  null === (a = n.innerBlocks.find(e => e.name === t)) ||
                  void 0 === a
                    ? void 0
                    : a.clientId) || e,
                );
          },
          cn = { views: [], currentView: '', viewClientId: '' },
          nn = (e, t = 10, o = 0) => {
            const r = o + 1;
            if (r > t) return cn;
            const { getBlockAttributes: c, getBlockRootClientId: n } = (0, K.select)(
                'core/block-editor',
              ),
              a = n(e);
            if (null === a || '' === a) return cn;
            const s = c(a);
            return s
              ? void 0 !== s.editorViews
                ? {
                    views: s.editorViews,
                    currentView: s.currentView || s.editorViews[0].view,
                    viewClientId: a,
                  }
                : nn(a, t, r)
              : cn;
          },
          an = ({ currentView: e, views: t, clientId: o }) => {
            const {
                getBlockName: n,
                getSelectedBlockClientId: a,
                getBlockParentsByBlockName: i,
              } = (0, K.useSelect)(e => {
                const t = e('core/block-editor');
                return {
                  getBlockName: t.getBlockName,
                  getSelectedBlockClientId: t.getSelectedBlockClientId,
                  getBlockParentsByBlockName: t.getBlockParentsByBlockName,
                };
              }, []),
              l = a(),
              u = ((e, t) => t.find(t => t.view === e))(e, t) || t[0],
              d = u.label;
            return (
              (0, p.useLayoutEffect)(() => {
                const r = l ? n(l) : null;
                if (!r || e === r) return;
                const c = t.map(e => e.view);
                if (c.includes(r)) return void rn(o, r);
                const a = i(l, c),
                  s = 1 === a.length ? n(a[0]) : null;
                s && e !== s && rn(o, s, !1);
              }, [o, e, n, i, l, t]),
              (0, r.createElement)(
                s.BlockControls,
                null,
                (0, r.createElement)(
                  po.ToolbarGroup,
                  null,
                  (0, r.createElement)(po.ToolbarDropdownMenu, {
                    label: (0, c.__)('Switch view', 'woocommerce'),
                    text: d,
                    icon: (0, r.createElement)(m.A, { icon: on, style: { marginRight: '8px' } }),
                    controls: t.map(t => ({
                      ...t,
                      title: (0, r.createElement)(
                        'span',
                        { style: { marginLeft: '8px' } },
                        t.label,
                      ),
                      isActive: t.view === e,
                      onClick: () => {
                        rn(o, t.view);
                      },
                    })),
                  }),
                ),
              )
            );
          };
        (0, Ge.hasFilter)('editor.BlockEdit', 'woocommerce/with-view-switcher') ||
          (0, Ge.addFilter)(
            'editor.BlockEdit',
            'woocommerce/with-view-switcher',
            e => t => {
              const { clientId: o } = t,
                { views: c, currentView: n, viewClientId: a } = (0, K.useSelect)(e => {
                  const t = e('core/block-editor').getBlockAttributes(o);
                  return null != t && t.editorViews
                    ? { views: t.editorViews, currentView: t.currentView, viewClientId: o }
                    : nn(o);
                });
              return 0 === c.length
                ? (0, r.createElement)(e, { ...t })
                : (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(an, { currentView: n, views: c, clientId: a }),
                    (0, r.createElement)(e, { ...t }),
                  );
            },
            11,
          ),
          (0, Ge.hasFilter)('blocks.registerBlockType', 'core/lock/addAttribute') ||
            (0, K.subscribe)(() => {
              var e, t, o, r;
              const c = (0, K.select)(s.store);
              if (!c) return;
              const n = c.getSelectedBlock();
              n &&
                (Ac(
                  'wc-lock-selected-block--remove',
                  !(
                    null == n ||
                    null === (e = n.attributes) ||
                    void 0 === e ||
                    null === (t = e.lock) ||
                    void 0 === t ||
                    !t.remove
                  ),
                ),
                Ac(
                  'wc-lock-selected-block--move',
                  !(
                    null == n ||
                    null === (o = n.attributes) ||
                    void 0 === o ||
                    null === (r = o.lock) ||
                    void 0 === r ||
                    !r.move
                  ),
                ));
            });
        const sn = ['woocommerce/filled-cart-block', 'woocommerce/empty-cart-block'];
        o(2584);
        const ln = {
            isPreview: { type: 'boolean', default: !1 },
            currentView: {
              type: 'string',
              default: 'woocommerce/filled-cart-block',
              source: 'readonly',
            },
            editorViews: {
              type: 'object',
              default: [
                {
                  view: 'woocommerce/filled-cart-block',
                  label: (0, c.__)('Filled Cart', 'woocommerce'),
                  icon: (0, r.createElement)(m.A, { icon: bt }),
                },
                {
                  view: 'woocommerce/empty-cart-block',
                  label: (0, c.__)('Empty Cart', 'woocommerce'),
                  icon: (0, r.createElement)(m.A, { icon: Er }),
                },
              ],
            },
            hasDarkControls: {
              type: 'boolean',
              default: (0, _.getSetting)('hasDarkEditorStyleSupport', !1),
            },
            isShippingCalculatorEnabled: {
              type: 'boolean',
              default: (0, _.getSetting)('isShippingCalculatorEnabled', !0),
            },
            checkoutPageId: { type: 'number', default: 0 },
            showRateAfterTaxName: { type: 'boolean', default: !0 },
            align: { type: 'string', default: 'wide' },
          },
          mn = {
            title: (0, c.__)('Cart', 'woocommerce'),
            icon: {
              src: (0, r.createElement)(m.A, {
                icon: l,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            category: 'woocommerce',
            keywords: [(0, c.__)('WooCommerce', 'woocommerce')],
            description: (0, c.__)('Shopping cart.', 'woocommerce'),
            supports: { align: ['wide'], html: !1, multiple: !1 },
            example: { attributes: { isPreview: !0 }, viewportWidth: 800 },
            attributes: ln,
            edit: ({ clientId: e, className: t, attributes: o, setAttributes: n }) => {
              const { hasDarkControls: i, currentView: l, isPreview: m = !1 } = o,
                d = ((e = {}) => {
                  const t = (0, p.useRef)(),
                    o = (0, s.useBlockProps)({ ref: t, ...e });
                  return (
                    (({ ref: e }) => {
                      const t = (0, Ge.hasFilter)(
                          'blocks.registerBlockType',
                          'core/lock/addAttribute',
                        ),
                        o = e.current;
                      (0, p.useEffect)(() => {
                        if (o && !t)
                          return (
                            o.addEventListener('keydown', e, { capture: !0, passive: !1 }),
                            () => {
                              o.removeEventListener('keydown', e, { capture: !0 });
                            }
                          );
                        function e(e) {
                          const { keyCode: t, target: o } = e;
                          if (!(o instanceof HTMLElement)) return;
                          if (t !== Lt.BACKSPACE && t !== Lt.DELETE) return;
                          if ((0, It.isTextField)(o)) return;
                          const r = o;
                          if (void 0 === r.dataset.block) return;
                          const c = (e => {
                            var t, o, r, c, n;
                            if (!e) return !1;
                            const { getBlock: a } = (0, K.select)(s.store),
                              i = a(e);
                            if (
                              'boolean' ==
                              typeof (null == i ||
                              null === (t = i.attributes) ||
                              void 0 === t ||
                              null === (o = t.lock) ||
                              void 0 === o
                                ? void 0
                                : o.remove)
                            )
                              return i.attributes.lock.remove;
                            const l = (0, u.getBlockType)(i.name);
                            var m, d, p;
                            return (
                              'boolean' ==
                                typeof (null == l ||
                                null === (r = l.attributes) ||
                                void 0 === r ||
                                null === (c = r.lock) ||
                                void 0 === c ||
                                null === (n = c.default) ||
                                void 0 === n
                                  ? void 0
                                  : n.remove) &&
                              (null == l ||
                              null === (m = l.attributes) ||
                              void 0 === m ||
                              null === (d = m.lock) ||
                              void 0 === d ||
                              null === (p = d.default) ||
                              void 0 === p
                                ? void 0
                                : p.remove)
                            );
                          })(r.dataset.block);
                          c &&
                            (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
                        }
                      }, [o, t]);
                    })({ ref: t }),
                    o
                  );
                })({ className: a()(t, 'wp-block-woocommerce-cart', { 'is-editor-preview': m }) }),
                _ = (0, p.useRef)((0, Se.getQueryArg)(window.location.href, 'focus'));
              return (
                (0, p.useEffect)(() => {
                  'cart' !== _.current ||
                    (0, K.select)('core/block-editor').hasSelectedBlock() ||
                    ((0, K.dispatch)('core/block-editor').selectBlock(e),
                    (0, K.dispatch)('core/interface').enableComplementaryArea(
                      'core/edit-site',
                      'edit-site/block-inspector',
                    ));
                }, [e]),
                (0, r.createElement)(
                  'div',
                  { ...d },
                  (0, r.createElement)(
                    s.InspectorControls,
                    null,
                    (0, r.createElement)(Ic, { attributes: o, setAttributes: n }),
                  ),
                  (0, r.createElement)(
                    z,
                    {
                      header: (0, c.__)('Cart Block Error', 'woocommerce'),
                      text: (0, c.__)(
                        'There was an error whilst rendering the cart block. If this problem continues, try re-creating the block.',
                        'woocommerce',
                      ),
                      showErrorMessage: !0,
                      errorMessagePrefix: (0, c.__)('Error message:', 'woocommerce'),
                    },
                    (0, r.createElement)(
                      G,
                      { previewData: { previewCart: We }, currentView: l, isPreview: m },
                      (0, r.createElement)(
                        Rt.Provider,
                        { value: { hasDarkControls: i } },
                        (0, r.createElement)(
                          yt.SlotFillProvider,
                          null,
                          (0, r.createElement)(
                            Et,
                            null,
                            (0, r.createElement)(s.InnerBlocks, {
                              allowedBlocks: sn,
                              template: [
                                ['woocommerce/filled-cart-block', {}, []],
                                ['woocommerce/empty-cart-block', {}, []],
                              ],
                              templateLock: 'insert',
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...s.useBlockProps.save({ className: 'is-loading' }) },
                (0, r.createElement)(s.InnerBlocks.Content, null),
              ),
            transforms: {
              to: [
                {
                  type: 'block',
                  blocks: ['woocommerce/classic-shortcode'],
                  transform: e =>
                    (0, u.createBlock)(
                      'woocommerce/classic-shortcode',
                      { shortcode: 'cart', align: e.align },
                      [],
                    ),
                },
              ],
            },
            deprecated: [
              {
                attributes: ln,
                save: ({ attributes: e }) =>
                  (0, r.createElement)(
                    'div',
                    { className: a()('is-loading', e.className) },
                    (0, r.createElement)(s.InnerBlocks.Content, null),
                  ),
                migrate: (e, t) => {
                  const { checkoutPageId: o, align: r } = e;
                  return [
                    e,
                    [
                      (0, u.createBlock)('woocommerce/filled-cart-block', { align: r }, [
                        (0, u.createBlock)('woocommerce/cart-items-block'),
                        (0, u.createBlock)('woocommerce/cart-totals-block', {}, [
                          (0, u.createBlock)('woocommerce/cart-order-summary-block', {}),
                          (0, u.createBlock)('woocommerce/cart-express-payment-block'),
                          (0, u.createBlock)('woocommerce/proceed-to-checkout-block', {
                            checkoutPageId: o,
                          }),
                          (0, u.createBlock)('woocommerce/cart-accepted-payment-methods-block'),
                        ]),
                      ]),
                      (0, u.createBlock)('woocommerce/empty-cart-block', { align: r }, t),
                    ],
                  ];
                },
                isEligible: (e, t) => !t.find(e => 'woocommerce/filled-cart-block' === e.name),
              },
            ],
          };
        (0, u.registerBlockType)('woocommerce/cart', mn);
      },
      1546: () => {},
      5183: () => {},
      7195: () => {},
      6007: () => {},
      7128: () => {},
      9407: () => {},
      2080: () => {},
      1045: () => {},
      4957: () => {},
      777: () => {},
      9507: () => {},
      4982: () => {},
      401: () => {},
      7051: () => {},
      2867: () => {},
      3048: () => {},
      265: () => {},
      7919: () => {},
      8399: () => {},
      1707: () => {},
      2931: () => {},
      8375: () => {},
      9345: () => {},
      6625: () => {},
      4567: () => {},
      5193: () => {},
      1221: () => {},
      8824: () => {},
      9569: () => {},
      2838: () => {},
      9085: () => {},
      5049: () => {},
      5913: () => {},
      5966: () => {},
      2961: () => {},
      6229: () => {},
      6611: () => {},
      1876: () => {},
      6080: () => {},
      2584: () => {},
      4688: () => {},
      1598: () => {},
      1212: () => {},
      7414: () => {},
      7840: () => {},
      7791: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      8468: e => {
        'use strict';
        e.exports = window.lodash;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
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
      979: e => {
        'use strict';
        e.exports = window.wp.warning;
      },
    },
    c = {};
  function n(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var o = (c[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, c) => {
      if (!o) {
        var a = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, c] = e[m], s = !0, i = 0; i < o.length; i++)
            (!1 & c || a >= c) && Object.keys(n.O).every(e => n.O[e](o[i]))
              ? o.splice(i--, 1)
              : ((s = !1), c < a && (a = c));
          if (s) {
            e.splice(m--, 1);
            var l = r();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      c = c || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > c; m--) e[m] = e[m - 1];
      e[m] = [o, r, c];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var c = Object.create(null);
      n.r(c);
      var a = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var s = 2 & r && e; 'object' == typeof s && !~t.indexOf(s); s = o(s))
        Object.getOwnPropertyNames(s).forEach(t => (a[t] = () => e[t]));
      return (a.default = () => e), n.d(c, a), c;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 7949),
    (() => {
      var e = { 7949: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [a, s, i] = o,
            l = 0;
          if (a.some(t => 0 !== e[t])) {
            for (r in s) n.o(s, r) && (n.m[r] = s[r]);
            if (i) var m = i(n);
          }
          for (t && t(o); l < a.length; l++) (c = a[l]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var a = n.O(void 0, [94], () => n(2326));
  (a = n.O(a)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {}).cart = a);
})();
