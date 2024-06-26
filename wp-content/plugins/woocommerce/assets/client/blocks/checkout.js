(() => {
  var e,
    t,
    o,
    r = {
      7431: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609),
          c = o(9019),
          n = o.n(c),
          s = o(5573);
        const a = (0, r.createElement)(
          s.SVG,
          { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24', fill: 'none' },
          (0, r.createElement)('path', {
            stroke: 'currentColor',
            strokeWidth: '1.5',
            fill: 'none',
            d:
              'M5 3.75h14c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z',
          }),
          (0, r.createElement)('path', {
            fill: 'currentColor',
            fillRule: 'evenodd',
            d:
              'M6.4 10.75c0-.47.38-.85.85-.85h9.5c.47 0 .85.38.85.85v1.5c0 .47-.38.85-.85.85h-9.5a.85.85 0 01-.85-.85v-1.5zm1.2.35v.8h8.8v-.8H7.6zM12.4 15.25c0-.47.38-.85.85-.85h3.5c.47 0 .85.38.85.85v1.5c0 .47-.38.85-.85.85h-3.5a.85.85 0 01-.85-.85v-1.5zm1.2.35v.8h2.8v-.8h-2.8zM6.5 15.9a.6.6 0 01.6-.6h2.8a.6.6 0 010 1.2H7.1a.6.6 0 01-.6-.6zM6.5 7.9a.6.6 0 01.6-.6h9.8a.6.6 0 110 1.2H7.1a.6.6 0 01-.6-.6z',
            clipRule: 'evenodd',
          }),
        );
        var i = o(7104);
        const l = window.wp.blocks;
        var m = o(7723);
        const d = window.wp.blockEditor;
        var u = o(6087),
          p = o(9491);
        const h = (0, u.createContext)({
            hasContainerWidth: !1,
            containerClassName: '',
            isMobile: !1,
            isSmall: !1,
            isMedium: !1,
            isLarge: !1,
          }),
          _ = ({ children: e, className: t = '' }) => {
            const [o, c] = (() => {
                const [e, { width: t }] = (0, p.useResizeObserver)();
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
              s = {
                hasContainerWidth: '' !== c,
                containerClassName: c,
                isMobile: 'is-mobile' === c,
                isSmall: 'is-small' === c,
                isMedium: 'is-medium' === c,
                isLarge: 'is-large' === c,
              };
            return (0, r.createElement)(
              h.Provider,
              { value: s },
              (0, r.createElement)('div', { className: n()(t, c) }, o, e),
            );
          };
        o(1221);
        const g = ({ children: e, className: t }) =>
            (0, r.createElement)(_, { className: n()('wc-block-components-sidebar-layout', t) }, e),
          k = window.wp.data,
          E = (0, u.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: '',
            previewData: {},
            getPreviewData: () => ({}),
          }),
          w = () => (0, u.useContext)(E),
          b = ({
            children: e,
            currentPostId: t = 0,
            previewData: o = {},
            currentView: c = '',
            isPreview: n = !1,
          }) => {
            const s = (0, k.useSelect)(e => t || e('core/editor').getCurrentPostId(), [t]),
              a = (0, u.useCallback)(e => (o && e in o ? o[e] : {}), [o]),
              i = {
                isEditor: !0,
                currentPostId: s,
                currentView: c,
                previewData: o,
                getPreviewData: a,
                isPreview: n,
              };
            return (0, r.createElement)(E.Provider, { value: i }, e);
          },
          y = window.wp.plugins,
          v = window.wc.wcSettings;
        var f,
          C,
          S,
          P,
          N,
          A,
          T,
          x,
          R,
          I,
          O = o(2294);
        const M = (0, v.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          B = M.pluginUrl + 'assets/images/',
          D =
            (M.pluginUrl,
            M.buildPhase,
            null === (f = v.STORE_PAGES.shop) || void 0 === f || f.permalink,
            null === (C = v.STORE_PAGES.checkout) || void 0 === C ? void 0 : C.id),
          F =
            (null === (S = v.STORE_PAGES.checkout) || void 0 === S || S.permalink,
            null === (P = v.STORE_PAGES.privacy) || void 0 === P ? void 0 : P.permalink),
          L =
            (null === (N = v.STORE_PAGES.privacy) || void 0 === N || N.title,
            null === (A = v.STORE_PAGES.terms) || void 0 === A ? void 0 : A.permalink),
          U =
            (null === (T = v.STORE_PAGES.terms) || void 0 === T || T.title,
            null === (x = v.STORE_PAGES.cart) || void 0 === x ? void 0 : x.id),
          j = null === (R = v.STORE_PAGES.cart) || void 0 === R ? void 0 : R.permalink,
          Y =
            (null !== (I = v.STORE_PAGES.myaccount) && void 0 !== I && I.permalink
              ? v.STORE_PAGES.myaccount.permalink
              : (0, v.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, v.getSetting)('localPickupEnabled', !1)),
          V = (0, v.getSetting)('countries', {}),
          K = (0, v.getSetting)('countryData', {}),
          H = Object.fromEntries(
            Object.keys(K)
              .filter(e => !0 === K[e].allowBilling)
              .map(e => [e, V[e] || '']),
          ),
          $ = Object.fromEntries(
            Object.keys(K)
              .filter(e => !0 === K[e].allowBilling)
              .map(e => [e, K[e].states || []]),
          ),
          q = Object.fromEntries(
            Object.keys(K)
              .filter(e => !0 === K[e].allowShipping)
              .map(e => [e, V[e] || '']),
          ),
          z = Object.fromEntries(
            Object.keys(K)
              .filter(e => !0 === K[e].allowShipping)
              .map(e => [e, K[e].states || []]),
          ),
          W = Object.fromEntries(Object.keys(K).map(e => [e, K[e].locale || []])),
          G = {
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
          Z = (0, v.getSetting)('addressFieldsLocations', G).address,
          X = (0, v.getSetting)('addressFieldsLocations', G).contact,
          J = (0, v.getSetting)('addressFieldsLocations', G).order,
          Q =
            ((0, v.getSetting)('additionalOrderFields', {}),
            (0, v.getSetting)('additionalContactFields', {}),
            (0, v.getSetting)('additionalAddressFields', {}),
            ({
              imageUrl: e = `${B}/block-error.svg`,
              header: t = (0, m.__)('Oops!', 'woocommerce'),
              text: o = (0, m.__)('There was an error loading the content.', 'woocommerce'),
              errorMessage: c,
              errorMessagePrefix: n = (0, m.__)('Error:', 'woocommerce'),
              button: s,
              showErrorBlock: a = !0,
            }) =>
              a
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
                      c &&
                        (0, r.createElement)(
                          'p',
                          {
                            className: 'wc-block-error__message wc-block-components-error__message',
                          },
                          n ? n + ' ' : '',
                          c,
                        ),
                      s &&
                        (0, r.createElement)(
                          'p',
                          { className: 'wc-block-error__button wc-block-components-error__button' },
                          s,
                        ),
                    ),
                  )
                : null);
        o(9407);
        class ee extends u.Component {
          constructor(...e) {
            super(...e), (0, O.A)(this, 'state', { errorMessage: '', hasError: !1 });
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
                errorMessagePrefix: s,
                renderError: a,
                button: i,
              } = this.props,
              { errorMessage: l, hasError: m } = this.state;
            return m
              ? 'function' == typeof a
                ? a({ errorMessage: l })
                : (0, r.createElement)(Q, {
                    showErrorBlock: c,
                    errorMessage: o ? l : null,
                    header: e,
                    imageUrl: t,
                    text: n,
                    errorMessagePrefix: s,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const te = ee,
          oe = window.wc.wcBlocksData;
        var re = o(4040),
          ce = o.n(re);
        let ne = (function(e) {
          return (
            (e.ADD_EVENT_CALLBACK = 'add_event_callback'),
            (e.REMOVE_EVENT_CALLBACK = 'remove_event_callback'),
            e
          );
        })({});
        const se = {},
          ae = (e = se, { type: t, eventType: o, id: r, callback: c, priority: n }) => {
            const s = e.hasOwnProperty(o) ? new Map(e[o]) : new Map();
            switch (t) {
              case ne.ADD_EVENT_CALLBACK:
                return s.set(r, { priority: n, callback: c }), { ...e, [o]: s };
              case ne.REMOVE_EVENT_CALLBACK:
                return s.delete(r), { ...e, [o]: s };
            }
          },
          ie = (e, t) => (o, r = 10) => {
            const c = ((e, t, o = 10) => ({
              id: Math.floor(Math.random() * Date.now()).toString(),
              type: ne.ADD_EVENT_CALLBACK,
              eventType: e,
              callback: t,
              priority: o,
            }))(e, o, r);
            return (
              t(c),
              () => {
                var o;
                t(((o = e), { id: c.id, type: ne.REMOVE_EVENT_CALLBACK, eventType: o }));
              }
            );
          },
          le = (0, u.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          me = ({ children: e }) => {
            const { isProcessing: t, isIdle: o, isCalculating: c, hasError: n } = (0, k.useSelect)(
                e => {
                  const t = e(oe.CHECKOUT_STORE_KEY);
                  return {
                    isProcessing: t.isProcessing(),
                    isIdle: t.isIdle(),
                    hasError: t.hasError(),
                    isCalculating: t.isCalculating(),
                  };
                },
              ),
              { isPaymentReady: s } = (0, k.useSelect)(e => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: a } = (0, k.useDispatch)(oe.VALIDATION_STORE_KEY),
              [i, l] = (0, u.useReducer)(ae, {}),
              { onPaymentSetup: m } = (e =>
                (0, u.useMemo)(() => ({ onPaymentSetup: ie('payment_setup', e) }), [e]))(l),
              d = (0, u.useRef)(i);
            (0, u.useEffect)(() => {
              d.current = i;
            }, [i]);
            const {
              __internalSetPaymentProcessing: p,
              __internalSetPaymentIdle: h,
              __internalEmitPaymentProcessingEvent: _,
            } = (0, k.useDispatch)(oe.PAYMENT_STORE_KEY);
            (0, u.useEffect)(() => {
              !t || n || c || (p(), _(d.current, a));
            }, [t, n, c, p, _, a]),
              (0, u.useEffect)(() => {
                o && !s && h();
              }, [o, s, h]),
              (0, u.useEffect)(() => {
                n && s && h();
              }, [n, s, h]);
            const g = {
              onPaymentProcessing: (0, u.useMemo)(
                () =>
                  function(...e) {
                    return (
                      ce()('onPaymentProcessing', {
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
            return (0, r.createElement)(le.Provider, { value: g }, e);
          },
          de = { NONE: 'none', INVALID_ADDRESS: 'invalid_address', UNKNOWN: 'unknown_error' },
          ue = {
            INVALID_COUNTRY: 'woocommerce_rest_cart_shipping_rates_invalid_country',
            MISSING_COUNTRY: 'woocommerce_rest_cart_shipping_rates_missing_country',
            INVALID_STATE: 'woocommerce_rest_cart_shipping_rates_invalid_state',
          },
          pe = {
            shippingErrorStatus: {
              isPristine: !0,
              isValid: !1,
              hasInvalidAddress: !1,
              hasError: !1,
            },
            dispatchErrorStatus: e => e,
            shippingErrorTypes: de,
            onShippingRateSuccess: () => () => {},
            onShippingRateFail: () => () => {},
            onShippingRateSelectSuccess: () => () => {},
            onShippingRateSelectFail: () => () => {},
          },
          he = (e, { type: t }) => (Object.values(de).includes(t) ? t : e),
          _e = 'shipping_rates_success',
          ge = 'shipping_rates_fail',
          ke = 'shipping_rate_select_success',
          Ee = 'shipping_rate_select_fail',
          we = e => ({
            onSuccess: ie(_e, e),
            onFail: ie(ge, e),
            onSelectSuccess: ie(ke, e),
            onSelectFail: ie(Ee, e),
          }),
          be = window.wc.wcTypes;
        let ye = (function(e) {
            return (e.SUCCESS = 'success'), (e.FAIL = 'failure'), (e.ERROR = 'error'), e;
          })({}),
          ve = (function(e) {
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
        const fe = async (e, t, o) => {
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
        var Ce = o(458),
          Se = o.n(Ce);
        const Pe = window.wp.htmlEntities,
          Ne = e => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, m.sprintf) /* translators: %s Field label. */(
                  /* translators: %s Field label. */
                  (0, m.__)('%s (optional)', 'woocommerce'),
                  e.label,
                )),
              e.priority &&
                ((0, be.isNumber)(e.priority) && (t.index = e.priority),
                (0, be.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          Ae = Object.entries(W)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, Ne(t)])
                .reduce((e, [t, o]) => ((e[t] = o), e), {}),
            ])
            .reduce((e, [t, o]) => ((e[t] = o), e), {}),
          Te = (e, t, o = '') => {
            const r = o && void 0 !== Ae[o] ? Ae[o] : {};
            return e
              .map(e => ({
                key: e,
                ...(v.defaultFields[e] || {}),
                ...(r[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          },
          xe = window.wp.url,
          Re = (e, t) => e in t,
          Ie = e => {
            const t = Te(Z, {}, e.country),
              o = Object.assign({}, e);
            return (
              t.forEach(({ key: t = '', hidden: r = !1 }) => {
                r && Re(t, e) && (o[t] = '');
              }),
              o
            );
          },
          Oe = e => {
            if (0 === Object.values(e).length) return null;
            const t = (0, be.isString)(q[e.country]) ? (0, Pe.decodeEntities)(q[e.country]) : '',
              o =
                (0, be.isObject)(z[e.country]) && (0, be.isString)(z[e.country][e.state])
                  ? (0, Pe.decodeEntities)(z[e.country][e.state])
                  : e.state,
              r = [];
            r.push(e.postcode.toUpperCase()), r.push(e.city), r.push(o), r.push(t);
            return r.filter(Boolean).join(', ') || null;
          },
          Me = e =>
            !!e.country &&
            Te(Z, {}, e.country).every(
              ({ key: t = '', hidden: o = !1, required: r = !1 }) =>
                !(!o && r) || (Re(t, e) && '' !== e[t]),
            ),
          Be = window.CustomEvent || null,
          De = (e, t, o = !1, r = !1) => {
            if ('function' != typeof jQuery) return () => {};
            const c = () => {
              ((e, { bubbles: t = !1, cancelable: o = !1, element: r, detail: c = {} }) => {
                if (!Be) return;
                r || (r = document.body);
                const n = new Be(e, { bubbles: t, cancelable: o, detail: c });
                r.dispatchEvent(n);
              })(t, { bubbles: o, cancelable: r });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          },
          Fe = e => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, k.dispatch)(oe.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Le = e => {
            ((null != e && e.persisted) ||
              'back_forward' ===
                (window.performance && window.performance.getEntriesByType('navigation').length
                  ? window.performance.getEntriesByType('navigation')[0].type
                  : '')) &&
              (0, k.dispatch)(oe.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Ue = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          je = {
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
          Ye = { ...je, email: '' },
          Ve = {
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
            tax_lines: oe.EMPTY_TAX_LINES,
            currency_code: '',
            currency_symbol: '',
            currency_minor_unit: 2,
            currency_decimal_separator: '',
            currency_thousand_separator: '',
            currency_prefix: '',
            currency_suffix: '',
          },
          Ke = e =>
            Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (0, Pe.decodeEntities)(t)])),
          He = {
            cartCoupons: oe.EMPTY_CART_COUPONS,
            cartItems: oe.EMPTY_CART_ITEMS,
            cartFees: oe.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: oe.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: oe.EMPTY_CART_ITEM_ERRORS,
            cartTotals: Ve,
            cartIsLoading: !0,
            cartErrors: oe.EMPTY_CART_ERRORS,
            billingAddress: Ye,
            shippingAddress: je,
            shippingRates: oe.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: oe.EMPTY_PAYMENT_METHODS,
            paymentRequirements: oe.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: oe.EMPTY_EXTENSIONS,
          },
          $e = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: o } = w(),
              r = null == o ? void 0 : o.previewCart,
              { shouldSelect: c } = e,
              n = (0, u.useRef)();
            (0, u.useEffect)(
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
                  document.body.addEventListener('wc-blocks_added_to_cart', Fe),
                    document.body.addEventListener('wc-blocks_removed_from_cart', Fe),
                    window.addEventListener('pageshow', Le);
                  const t = De('added_to_cart', 'wc-blocks_added_to_cart'),
                    o = De('removed_from_cart', 'wc-blocks_removed_from_cart');
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener('wc-blocks_added_to_cart', Fe),
                        document.body.removeEventListener('wc-blocks_removed_from_cart', Fe),
                        window.removeEventListener('pageshow', Le),
                        t(),
                        o();
                    });
                })(),
                Ue
              ),
              [],
            );
            const s = (0, k.useSelect)(
              (e, { dispatch: o }) => {
                if (!c) return He;
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
                    cartItemErrors: oe.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: r.totals,
                    cartIsLoading: !1,
                    cartErrors: oe.EMPTY_CART_ERRORS,
                    billingData: Ye,
                    billingAddress: Ye,
                    shippingAddress: je,
                    extensions: oe.EMPTY_EXTENSIONS,
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
                const n = e(oe.CART_STORE_KEY),
                  s = n.getCartData(),
                  a = n.getCartErrors(),
                  i = n.getCartTotals(),
                  l = !n.hasFinishedResolution('getCartData'),
                  m = n.isCustomerDataUpdating(),
                  { receiveCart: d, receiveCartContents: u } = o(oe.CART_STORE_KEY),
                  p = Ke(s.billingAddress),
                  h = s.needsShipping ? Ke(s.shippingAddress) : p,
                  _ = s.fees.length > 0 ? s.fees.map(e => Ke(e)) : oe.EMPTY_CART_FEES,
                  g =
                    s.coupons.length > 0
                      ? s.coupons.map(e => ({ ...e, label: e.code }))
                      : oe.EMPTY_CART_COUPONS;
                return {
                  cartCoupons: g,
                  cartItems: s.items,
                  crossSellsProducts: s.crossSells,
                  cartFees: _,
                  cartItemsCount: s.itemsCount,
                  cartItemsWeight: s.itemsWeight,
                  cartNeedsPayment: s.needsPayment,
                  cartNeedsShipping: s.needsShipping,
                  cartItemErrors: s.errors,
                  cartTotals: i,
                  cartIsLoading: l,
                  cartErrors: a,
                  billingData: Ie(p),
                  billingAddress: Ie(p),
                  shippingAddress: Ie(h),
                  extensions: s.extensions,
                  shippingRates: s.shippingRates,
                  isLoadingRates: m,
                  cartHasCalculatedShipping: s.hasCalculatedShipping,
                  paymentRequirements: s.paymentRequirements,
                  receiveCart: d,
                  receiveCartContents: u,
                };
              },
              [c],
            );
            return (n.current && Se()(n.current, s)) || (n.current = s), n.current;
          },
          qe = e => e.length,
          ze = (0, v.getSetting)('collectableMethodIds', []),
          We = e => ze.includes(e.method_id),
          Ge = e => !!Y && (Array.isArray(e) ? !!e.find(e => ze.includes(e)) : ze.includes(e)),
          Ze = e =>
            Object.fromEntries(
              e.map(({ package_id: e, shipping_rates: t }) => {
                var o;
                return [
                  e,
                  (null === (o = t.find(e => e.selected)) || void 0 === o ? void 0 : o.rate_id) ||
                    '',
                ];
              }),
            );
        var Xe = o(923),
          Je = o.n(Xe);
        const Qe = [
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
              name: (0, m.__)('Shipping', 'woocommerce'),
              items: [
                {
                  key: '33e75ff09dd601bbe69f351039152189',
                  name: (0, m._x)(
                    'Beanie with Logo',
                    'example product in Cart Block',
                    'woocommerce',
                  ),
                  quantity: 2,
                },
                {
                  key: '6512bd43d9caa6e02c990b0a82652dca',
                  name: (0, m._x)('Beanie', 'example product in Cart Block', 'woocommerce'),
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
                  name: (0, m.__)('Flat rate shipping', 'woocommerce'),
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
                  name: (0, m.__)('Free shipping', 'woocommerce'),
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
                  name: (0, m.__)('Local pickup', 'woocommerce'),
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
                  name: (0, m.__)('Local pickup', 'woocommerce'),
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
          et = (0, v.getSetting)('displayCartPricesIncludingTax', !1),
          tt = {
            coupons: [],
            shipping_rates:
              (0, v.getSetting)('shippingMethodsExist', !1) ||
              (0, v.getSetting)('localPickupEnabled', !1)
                ? Qe
                : [],
            items: [
              {
                key: '1',
                id: 1,
                type: 'simple',
                quantity: 2,
                catalog_visibility: 'visible',
                name: (0, m.__)('Beanie', 'woocommerce'),
                summary: (0, m.__)('Beanie', 'woocommerce'),
                short_description: (0, m.__)('Warm hat for winter', 'woocommerce'),
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
                    src: B + 'previews/beanie.jpg',
                    thumbnail: B + 'previews/beanie.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, m.__)('Color', 'woocommerce'),
                    value: (0, m.__)('Yellow', 'woocommerce'),
                  },
                  {
                    attribute: (0, m.__)('Size', 'woocommerce'),
                    value: (0, m.__)('Small', 'woocommerce'),
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
                  price: et ? '12000' : '10000',
                  regular_price: et ? '12000' : '10000',
                  sale_price: et ? '12000' : '10000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: et ? '12000000' : '10000000',
                    regular_price: et ? '12000000' : '10000000',
                    sale_price: et ? '12000000' : '10000000',
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
                name: (0, m.__)('Cap', 'woocommerce'),
                summary: (0, m.__)('Cap', 'woocommerce'),
                short_description: (0, m.__)('Lightweight baseball cap', 'woocommerce'),
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
                    src: B + 'previews/cap.jpg',
                    thumbnail: B + 'previews/cap.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, m.__)('Color', 'woocommerce'),
                    value: (0, m.__)('Orange', 'woocommerce'),
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
                  price: et ? '2400' : '2000',
                  regular_price: et ? '2400' : '2000',
                  sale_price: et ? '2400' : '2000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: et ? '24000000' : '20000000',
                    regular_price: et ? '24000000' : '20000000',
                    sale_price: et ? '24000000' : '20000000',
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
                name: (0, m.__)('Polo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-polo',
                short_description: (0, m.__)('Polo', 'woocommerce'),
                description: (0, m.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: et ? '24000' : '20000',
                  regular_price: et ? '24000' : '20000',
                  sale_price: et ? '12000' : '10000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4.5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + 'previews/polo.jpg',
                    thumbnail: B + 'previews/polo.jpg',
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
                name: (0, m.__)('Long Sleeve Tee', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-long-sleeve-tee',
                short_description: (0, m.__)('Long Sleeve Tee', 'woocommerce'),
                description: (0, m.__)('Long Sleeve Tee', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: et ? '30000' : '25000',
                  regular_price: et ? '30000' : '25000',
                  sale_price: et ? '30000' : '25000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + 'previews/long-sleeve-tee.jpg',
                    thumbnail: B + 'previews/long-sleeve-tee.jpg',
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
                name: (0, m.__)('Hoodie with Zipper', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-zipper',
                short_description: (0, m.__)('Hoodie with Zipper', 'woocommerce'),
                description: (0, m.__)('Hoodie with Zipper', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: et ? '15000' : '12500',
                  regular_price: et ? '30000' : '25000',
                  sale_price: et ? '15000' : '12500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '1',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + 'previews/hoodie-with-zipper.jpg',
                    thumbnail: B + 'previews/hoodie-with-zipper.jpg',
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
                name: (0, m.__)('Hoodie with Logo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-logo',
                short_description: (0, m.__)('Polo', 'woocommerce'),
                description: (0, m.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: et ? '4500' : '4250',
                  regular_price: et ? '4500' : '4250',
                  sale_price: et ? '4500' : '4250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + 'previews/hoodie-with-logo.jpg',
                    thumbnail: B + 'previews/hoodie-with-logo.jpg',
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
                name: (0, m.__)('Hoodie with Pocket', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-pocket',
                short_description: (0, m.__)('Hoodie with Pocket', 'woocommerce'),
                description: (0, m.__)('Hoodie with Pocket', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: et ? '3500' : '3250',
                  regular_price: et ? '4500' : '4250',
                  sale_price: et ? '3500' : '3250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3.75',
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: B + 'previews/hoodie-with-pocket.jpg',
                    thumbnail: B + 'previews/hoodie-with-pocket.jpg',
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
                name: (0, m.__)('T-Shirt', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-t-shirt',
                short_description: (0, m.__)('T-Shirt', 'woocommerce'),
                description: (0, m.__)('T-Shirt', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: et ? '1800' : '1500',
                  regular_price: et ? '1800' : '1500',
                  sale_price: et ? '1800' : '1500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: B + 'previews/tshirt.jpg',
                    thumbnail: B + 'previews/tshirt.jpg',
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
                name: (0, m.__)('Fee', 'woocommerce'),
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
            needs_shipping: (0, v.getSetting)('shippingEnabled', !0),
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
                { name: (0, m.__)('Sales tax', 'woocommerce'), rate: '20%', price: '820' },
              ],
            },
            errors: [],
            payment_methods: ['cod', 'bacs', 'cheque'],
            payment_requirements: ['products'],
            extensions: {},
          },
          ot = window.wp.hooks,
          rt = () => ({
            dispatchStoreEvent: (0, u.useCallback)((e, t = {}) => {
              try {
                (0, ot.doAction)(`experimental__woocommerce_blocks-${e}`, t);
              } catch (e) {
                console.error(e);
              }
            }, []),
            dispatchCheckoutEvent: (0, u.useCallback)((e, t = {}) => {
              try {
                (0, ot.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
                  ...t,
                  storeCart: (0, k.select)('wc/store/cart').getCartData(),
                });
              } catch (e) {
                console.error(e);
              }
            }, []),
          }),
          ct = () => {
            const {
                shippingRates: e,
                needsShipping: t,
                hasCalculatedShipping: o,
                isLoadingRates: r,
                isCollectable: c,
                isSelectingRate: n,
              } = (0, k.useSelect)(e => {
                const t = !!e('core/editor'),
                  o = e(oe.CART_STORE_KEY),
                  r = t ? tt.shipping_rates : o.getShippingRates();
                return {
                  shippingRates: r,
                  needsShipping: t ? tt.needs_shipping : o.getNeedsShipping(),
                  hasCalculatedShipping: t
                    ? tt.has_calculated_shipping
                    : o.getHasCalculatedShipping(),
                  isLoadingRates: !t && o.isCustomerDataUpdating(),
                  isCollectable: r.every(({ shipping_rates: e }) =>
                    e.find(({ method_id: e }) => Ge(e)),
                  ),
                  isSelectingRate: !t && o.isShippingRateBeingSelected(),
                };
              }),
              s = (0, u.useRef)({});
            (0, u.useEffect)(() => {
              const t = Ze(e);
              (0, be.isObject)(t) && !Je()(s.current, t) && (s.current = t);
            }, [e]);
            const { selectShippingRate: a } = (0, k.useDispatch)(oe.CART_STORE_KEY),
              i = Ge(Object.values(s.current).map(e => e.split(':')[0])),
              { dispatchCheckoutEvent: l } = rt(),
              m = (0, u.useCallback)(
                (e, t) => {
                  let o;
                  void 0 !== e &&
                    ((o = Ge(e.split(':')[0]) ? a(e, null) : a(e, t)),
                    o
                      .then(() => {
                        l('set-selected-shipping-rate', { shippingRateId: e });
                      })
                      .catch(e => {
                        (0, oe.processErrorResponse)(e);
                      }));
                },
                [a, l],
              );
            return {
              isSelectingRate: n,
              selectedRates: s.current,
              selectShippingRate: m,
              shippingRates: e,
              needsShipping: t,
              hasCalculatedShipping: o,
              isLoadingRates: r,
              isCollectable: c,
              hasSelectedLocalPickup: i,
            };
          },
          { NONE: nt, INVALID_ADDRESS: st, UNKNOWN: at } = de,
          it = (0, u.createContext)(pe),
          lt = () => (0, u.useContext)(it),
          mt = ({ children: e }) => {
            const { __internalIncrementCalculating: t, __internalDecrementCalculating: o } = (0,
              k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              { shippingRates: c, isLoadingRates: n, cartErrors: s } = $e(),
              { selectedRates: a, isSelectingRate: i } = ct(),
              [l, m] = (0, u.useReducer)(he, nt),
              [d, p] = (0, u.useReducer)(ae, {}),
              h = (0, u.useRef)(d),
              _ = (0, u.useMemo)(
                () => ({
                  onShippingRateSuccess: we(p).onSuccess,
                  onShippingRateFail: we(p).onFail,
                  onShippingRateSelectSuccess: we(p).onSelectSuccess,
                  onShippingRateSelectFail: we(p).onSelectFail,
                }),
                [p],
              );
            (0, u.useEffect)(() => {
              h.current = d;
            }, [d]),
              (0, u.useEffect)(() => {
                n ? t() : o();
              }, [n, t, o]),
              (0, u.useEffect)(() => {
                i ? t() : o();
              }, [t, o, i]),
              (0, u.useEffect)(() => {
                s.length > 0 && s.some(e => !(!e.code || !Object.values(ue).includes(e.code)))
                  ? m({ type: st })
                  : m({ type: nt });
              }, [s]);
            const g = (0, u.useMemo)(
              () => ({
                isPristine: l === nt,
                isValid: l === nt,
                hasInvalidAddress: l === st,
                hasError: l === at || l === st,
              }),
              [l],
            );
            (0, u.useEffect)(() => {
              n ||
                (0 !== c.length && !g.hasError) ||
                fe(h.current, ge, { hasInvalidAddress: g.hasInvalidAddress, hasError: g.hasError });
            }, [c, n, g.hasError, g.hasInvalidAddress]),
              (0, u.useEffect)(() => {
                !n && c.length > 0 && !g.hasError && fe(h.current, _e, c);
              }, [c, n, g.hasError]),
              (0, u.useEffect)(() => {
                i ||
                  (g.hasError
                    ? fe(h.current, Ee, {
                        hasError: g.hasError,
                        hasInvalidAddress: g.hasInvalidAddress,
                      })
                    : fe(h.current, ke, a.current));
              }, [a, i, g.hasError, g.hasInvalidAddress]);
            const E = {
              shippingErrorStatus: g,
              dispatchErrorStatus: m,
              shippingErrorTypes: de,
              ..._,
            };
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(it.Provider, { value: E }, e),
            );
          };
        function dt(e, t) {
          const o = (0, u.useRef)();
          return (
            (0, u.useEffect)(() => {
              o.current === e || (t && !t(e, o.current)) || (o.current = e);
            }, [e, t]),
            o.current
          );
        }
        const ut = {},
          pt = {},
          ht = () => ut,
          _t = () => pt,
          gt = (0, u.createContext)({
            onSubmit: () => {},
            onCheckoutAfterProcessingWithSuccess: () => () => {},
            onCheckoutAfterProcessingWithError: () => () => {},
            onCheckoutBeforeProcessing: () => () => {},
            onCheckoutValidationBeforeProcessing: () => () => {},
            onCheckoutSuccess: () => () => {},
            onCheckoutFail: () => () => {},
            onCheckoutValidation: () => () => {},
          }),
          kt = () => (0, u.useContext)(gt),
          Et = ({ children: e, redirectUrl: t }) => {
            const o = ht(),
              c = _t(),
              { isEditor: n } = w(),
              { __internalUpdateAvailablePaymentMethods: s } = (0, k.useDispatch)(
                oe.PAYMENT_STORE_KEY,
              );
            (0, u.useEffect)(() => {
              (n || 0 !== Object.keys(o).length || 0 !== Object.keys(c).length) && s();
            }, [n, o, c, s]);
            const {
                __internalSetRedirectUrl: a,
                __internalEmitValidateEvent: i,
                __internalEmitAfterProcessingEvents: l,
                __internalSetBeforeProcessing: m,
              } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              {
                checkoutRedirectUrl: d,
                checkoutStatus: p,
                isCheckoutBeforeProcessing: h,
                isCheckoutAfterProcessing: _,
                checkoutHasError: g,
                checkoutOrderId: E,
                checkoutOrderNotes: b,
                checkoutCustomerId: y,
              } = (0, k.useSelect)(e => {
                const t = e(oe.CHECKOUT_STORE_KEY);
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
            t && t !== d && a(t);
            const { setValidationErrors: v } = (0, k.useDispatch)(oe.VALIDATION_STORE_KEY),
              { dispatchCheckoutEvent: f } = rt(),
              { checkoutNotices: C, paymentNotices: S, expressPaymentNotices: P } = (0,
              k.useSelect)(e => {
                const { getNotices: t } = e('core/notices');
                return {
                  checkoutNotices: Object.values(ve)
                    .filter(e => e !== ve.PAYMENTS && e !== ve.EXPRESS_PAYMENTS)
                    .reduce((e, o) => [...e, ...t(o)], []),
                  paymentNotices: t(ve.PAYMENTS),
                  expressPaymentNotices: t(ve.EXPRESS_PAYMENTS),
                };
              }, []),
              [N, A] = (0, u.useReducer)(ae, {}),
              T = (0, u.useRef)(N),
              { onCheckoutValidation: x, onCheckoutSuccess: R, onCheckoutFail: I } = (e =>
                (0, u.useMemo)(
                  () => ({
                    onCheckoutSuccess: ie('checkout_success', e),
                    onCheckoutFail: ie('checkout_fail', e),
                    onCheckoutValidation: ie('checkout_validation', e),
                  }),
                  [e],
                ))(A);
            (0, u.useEffect)(() => {
              T.current = N;
            }, [N]);
            const O = (0, u.useMemo)(
                () =>
                  function(...e) {
                    return (
                      ce()('onCheckoutBeforeProcessing', {
                        alternative: 'onCheckoutValidation',
                        plugin: 'WooCommerce Blocks',
                      }),
                      x(...e)
                    );
                  },
                [x],
              ),
              M = (0, u.useMemo)(
                () =>
                  function(...e) {
                    return (
                      ce()('onCheckoutValidationBeforeProcessing', {
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
              B = (0, u.useMemo)(
                () =>
                  function(...e) {
                    return (
                      ce()('onCheckoutAfterProcessingWithSuccess', {
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
              D = (0, u.useMemo)(
                () =>
                  function(...e) {
                    return (
                      ce()('onCheckoutAfterProcessingWithError', {
                        since: '9.7.0',
                        alternative: 'onCheckoutFail',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8381',
                      }),
                      I(...e)
                    );
                  },
                [I],
              );
            (0, u.useEffect)(() => {
              h && i({ observers: T.current, setValidationErrors: v });
            }, [h, v, i]);
            const F = dt(p),
              L = dt(g);
            (0, u.useEffect)(() => {
              (p === F && g === L) ||
                (_ &&
                  l({
                    observers: T.current,
                    notices: { checkoutNotices: C, paymentNotices: S, expressPaymentNotices: P },
                  }));
            }, [p, g, d, E, y, b, _, h, F, L, C, P, S, i, l]);
            const U = {
              onSubmit: (0, u.useCallback)(() => {
                f('submit'), m();
              }, [f, m]),
              onCheckoutBeforeProcessing: O,
              onCheckoutValidationBeforeProcessing: M,
              onCheckoutAfterProcessingWithSuccess: B,
              onCheckoutAfterProcessingWithError: D,
              onCheckoutSuccess: R,
              onCheckoutFail: I,
              onCheckoutValidation: x,
            };
            return (0, r.createElement)(gt.Provider, { value: U }, e);
          },
          wt = window.wp.apiFetch;
        var bt = o.n(wt);
        (0, m.__)('Something went wrong. Please contact us to get assistance.', 'woocommerce');
        const yt = window.wc.wcBlocksRegistry,
          vt = (e, t, o) => {
            const r = Object.keys(e).map(t => ({ key: t, value: e[t] }), []),
              c = `wc-${o}-new-payment-method`;
            return r.push({ key: c, value: t }), r;
          },
          ft = e => {
            if (!e) return;
            const { __internalSetCustomerId: t } = (0, k.dispatch)(oe.CHECKOUT_STORE_KEY);
            bt().setNonce && 'function' == typeof bt().setNonce && bt().setNonce(e),
              null != e && e.get('User-ID') && t(parseInt(e.get('User-ID') || '0', 10));
          },
          Ct = () => {
            const { onCheckoutValidation: e } = kt(),
              {
                hasError: t,
                redirectUrl: o,
                isProcessing: r,
                isBeforeProcessing: c,
                isComplete: n,
                orderNotes: s,
                shouldCreateAccount: a,
                extensionData: i,
                customerId: l,
                additionalFields: d,
              } = (0, k.useSelect)(e => {
                const t = e(oe.CHECKOUT_STORE_KEY);
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
              { __internalSetHasError: p, __internalProcessCheckoutResponse: h } = (0,
              k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              _ = (0, k.useSelect)(e => e(oe.VALIDATION_STORE_KEY).hasValidationErrors),
              { shippingErrorStatus: g } = lt(),
              { billingAddress: E, shippingAddress: w } = (0, k.useSelect)(e =>
                e(oe.CART_STORE_KEY).getCustomerData(),
              ),
              { cartNeedsPayment: b, cartNeedsShipping: y, receiveCartContents: v } = $e(),
              {
                activePaymentMethod: f,
                paymentMethodData: C,
                isExpressPaymentMethodActive: S,
                hasPaymentError: P,
                isPaymentReady: N,
                shouldSavePayment: A,
              } = (0, k.useSelect)(e => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                  isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
                  hasPaymentError: t.hasPaymentError(),
                  isPaymentReady: t.isPaymentReady(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }, []),
              T = (0, yt.getPaymentMethods)(),
              x = (0, yt.getExpressPaymentMethods)(),
              R = (0, u.useRef)(E),
              I = (0, u.useRef)(w),
              O = (0, u.useRef)(o),
              [M, B] = (0, u.useState)(!1),
              D = (0, u.useMemo)(() => {
                var e;
                const t = { ...x, ...T };
                return null == t || null === (e = t[f]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [f, x, T]),
              F = (_() && !S) || P || g.hasError,
              L = !t && !F && (N || !b) && r;
            (0, u.useEffect)(() => {
              F === t || (!r && !c) || S || p(F);
            }, [F, t, r, c, S, p]),
              (0, u.useEffect)(() => {
                (R.current = E), (I.current = w), (O.current = o);
              }, [E, w, o]);
            const U = (0, u.useCallback)(
              () =>
                _()
                  ? void 0 !==
                      (0, k.select)(oe.VALIDATION_STORE_KEY).getValidationError(
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
                  : !g.hasError || {
                      errorMessage: (0, m.__)(
                        'There was a problem with your shipping option.',
                        'woocommerce',
                      ),
                      context: 'wc/checkout/shipping-methods',
                    },
              [_, P, g.hasError],
            );
            (0, u.useEffect)(() => {
              let t;
              return (
                S || (t = e(U, 0)),
                () => {
                  S || 'function' != typeof t || t();
                }
              );
            }, [e, U, S]),
              (0, u.useEffect)(() => {
                O.current && (window.location.href = O.current);
              }, [n]);
            const j = (0, u.useCallback)(async () => {
              if (M) return;
              B(!0),
                (() => {
                  const e = (0, k.select)('wc/store/store-notices').getRegisteredContainers(),
                    { removeNotice: t } = (0, k.dispatch)('core/notices'),
                    { getNotices: o } = (0, k.select)('core/notices');
                  e.forEach(e => {
                    o(e).forEach(o => {
                      t(o.id, e);
                    });
                  });
                })();
              const e = b ? { payment_method: D, payment_data: vt(C, A, f) } : {},
                t = {
                  shipping_address: y ? Ie(I.current) : void 0,
                  billing_address: Ie(R.current),
                  additional_fields: d,
                  customer_note: s,
                  create_account: a,
                  ...e,
                  extensions: { ...i },
                };
              bt()({
                path: '/wc/store/v1/checkout',
                method: 'POST',
                data: t,
                cache: 'no-store',
                parse: !1,
              })
                .then(e => {
                  if (((0, be.assertResponseIsValid)(e), ft(e.headers), !e.ok)) throw e;
                  return e.json();
                })
                .then(e => {
                  h(e), B(!1);
                })
                .catch(e => {
                  ft(null == e ? void 0 : e.headers);
                  try {
                    e.json()
                      .then(e => e)
                      .then(e => {
                        var t;
                        null !== (t = e.data) && void 0 !== t && t.cart && v(e.data.cart),
                          (0, oe.processErrorResponse)(e),
                          h(e);
                      });
                  } catch {
                    let e = (0, m.__)(
                      'Something went wrong when placing the order. Check your email for order updates before retrying.',
                      'woocommerce',
                    );
                    0 !== l &&
                      (e = (0, m.__)(
                        "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                        'woocommerce',
                      )),
                      (0, oe.processErrorResponse)({
                        code: 'unknown_error',
                        message: e,
                        data: null,
                      });
                  }
                  p(!0), B(!1);
                });
            }, [M, b, D, C, A, f, s, a, i, d, y, v, p, h]);
            return (
              (0, u.useEffect)(() => {
                L && !M && j();
              }, [j, L, M]),
              null
            );
          },
          St = ({ children: e, redirectUrl: t }) =>
            (0, r.createElement)(
              Et,
              { redirectUrl: t },
              (0, r.createElement)(
                mt,
                null,
                (0, r.createElement)(
                  me,
                  null,
                  e,
                  (0, r.createElement)(
                    te,
                    { renderError: v.CURRENT_USER_IS_ADMIN ? null : () => null },
                    (0, r.createElement)(y.PluginArea, { scope: 'woocommerce-checkout' }),
                  ),
                  (0, r.createElement)(Ct, null),
                ),
              ),
            ),
          Pt = {
            cc: [
              {
                method: { gateway: 'credit-card', last4: '5678', brand: 'Visa' },
                expires: '12/20',
                is_default: !1,
                tokenId: '1',
              },
            ],
          },
          Nt = window.wp.components,
          At = window.wc.blocksCheckout;
        var Tt = o(2172);
        const xt = (0, u.forwardRef)(({ children: e, className: t = '' }, o) =>
            (0, r.createElement)(
              'div',
              { ref: o, className: n()('wc-block-components-main', t) },
              e,
            ),
          ),
          Rt = (0, u.createContext)({
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
          It = (0, u.createContext)({ addressFieldControls: () => null }),
          Ot = () => (0, u.useContext)(Rt),
          Mt = () => (0, u.useContext)(It),
          Bt = ['core/paragraph', 'core/image', 'core/separator'],
          Dt = e => {
            const t = (0, At.applyCheckoutFilter)({
              filterName: 'additionalCartCheckoutInnerBlockTypes',
              defaultValue: [],
              extensions: (0, k.select)(oe.CART_STORE_KEY).getCartData().extensions,
              arg: { block: e },
              validation: e => {
                if (Array.isArray(e) && e.every(e => 'string' == typeof e)) return !0;
                throw new Error('allowedBlockTypes filters must return an array of strings.');
              },
            });
            return Array.from(
              new Set([
                ...(0, l.getBlockTypes)()
                  .filter(t => ((null == t ? void 0 : t.parent) || []).includes(e))
                  .map(({ name: e }) => e),
                ...Bt,
                ...t,
              ]),
            );
          },
          Ft = ({ clientId: e, registeredBlocks: t, defaultTemplate: o = [] }) => {
            const r = (0, u.useRef)(t),
              c = (0, u.useRef)(o),
              n = (0, k.useRegistry)(),
              { isPreview: s } = w();
            (0, u.useEffect)(() => {
              let t = !1;
              if (s) return;
              const { replaceInnerBlocks: o } = (0, k.dispatch)('core/block-editor');
              return n.subscribe(() => {
                if (!n.select('core/block-editor').getBlock(e)) return;
                const s = n.select('core/block-editor').getBlocks(e);
                if (0 === s.length && c.current.length > 0 && !t) {
                  const r = (0, l.createBlocksFromInnerBlocksTemplate)(c.current);
                  if (0 !== r.length) return (t = !0), void o(e, r);
                }
                const a = r.current.map(e => (0, l.getBlockType)(e)),
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
                  })(s, a);
                if (0 === i.length) return;
                let m = -1;
                const d = i.map(e => {
                  const t = c.current.findIndex(([t]) => t === e.name),
                    o = (0, l.createBlock)(e.name);
                  return (
                    -1 === m &&
                      (m = (({
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
                        innerBlocks: s,
                        currentDefaultTemplate: c,
                      })),
                    o
                  );
                });
                n.batch(() => {
                  n.dispatch('core/block-editor').insertBlocks(d, m, e);
                });
              }, 'core/block-editor');
            }, [e, s, n]);
          };
        o(6619),
          (0, l.registerBlockType)('woocommerce/checkout-fields-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: Tt.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ clientId: e, attributes: t }) => {
              const o = (0, d.useBlockProps)({
                  className: n()('wc-block-checkout__main', null == t ? void 0 : t.className),
                }),
                c = Dt(At.innerBlockAreas.CHECKOUT_FIELDS),
                { showFormStepNumbers: s } = Ot(),
                { addressFieldControls: a } = Mt(),
                i = [
                  ['woocommerce/checkout-express-payment-block', {}, []],
                  ['woocommerce/checkout-contact-information-block', {}, []],
                  ['woocommerce/checkout-shipping-method-block', {}, []],
                  ['woocommerce/checkout-pickup-options-block', {}, []],
                  ['woocommerce/checkout-shipping-address-block', {}, []],
                  ['woocommerce/checkout-billing-address-block', {}, []],
                  ['woocommerce/checkout-shipping-methods-block', {}, []],
                  ['woocommerce/checkout-payment-block', {}, []],
                  ['woocommerce/checkout-additional-information-block', {}, []],
                  ['woocommerce/checkout-order-note-block', {}, []],
                  ['woocommerce/checkout-terms-block', {}, []],
                  ['woocommerce/checkout-actions-block', {}, []],
                ].filter(Boolean);
              return (
                Ft({ clientId: e, registeredBlocks: c, defaultTemplate: i }),
                (0, r.createElement)(
                  xt,
                  { ...o },
                  (0, r.createElement)(a, null),
                  (0, r.createElement)(
                    'form',
                    {
                      className: n()('wc-block-components-form wc-block-checkout__form', {
                        'wc-block-checkout__form--with-step-numbers': s,
                      }),
                    },
                    (0, r.createElement)(d.InnerBlocks, {
                      allowedBlocks: c,
                      templateLock: !1,
                      template: i,
                      renderAppender: d.InnerBlocks.ButtonBlockAppender,
                    }),
                  ),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...d.useBlockProps.save() },
                (0, r.createElement)(d.InnerBlocks.Content, null),
              ),
          });
        const Lt = (0, u.forwardRef)(({ children: e, className: t = '' }, o) =>
          (0, r.createElement)(
            'div',
            { ref: o, className: n()('wc-block-components-sidebar', t) },
            e,
          ),
        );
        o(7765),
          (0, l.registerBlockType)('woocommerce/checkout-totals-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: Tt.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ clientId: e, attributes: t }) => {
              const o = (0, d.useBlockProps)({
                  className: n()('wc-block-checkout__sidebar', null == t ? void 0 : t.className),
                }),
                c = Dt(At.innerBlockAreas.CHECKOUT_TOTALS),
                s = [['woocommerce/checkout-order-summary-block', {}, []]];
              return (
                Ft({ clientId: e, registeredBlocks: c, defaultTemplate: s }),
                (0, r.createElement)(
                  Lt,
                  { ...o },
                  (0, r.createElement)(d.InnerBlocks, {
                    allowedBlocks: c,
                    templateLock: !1,
                    template: s,
                    renderAppender: d.InnerBlocks.ButtonBlockAppender,
                  }),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...d.useBlockProps.save() },
                (0, r.createElement)(d.InnerBlocks.Content, null),
              ),
          });
        var Ut = o(601);
        const jt = () => {
            const { customerData: e, isInitialized: t } = (0, k.useSelect)(e => {
                const t = e(oe.CART_STORE_KEY);
                return {
                  customerData: t.getCustomerData(),
                  isInitialized: t.hasFinishedResolution('getCartData'),
                };
              }),
              { setShippingAddress: o, setBillingAddress: r } = (0, k.useDispatch)(
                oe.CART_STORE_KEY,
              );
            return {
              isInitialized: t,
              billingAddress: e.billingAddress,
              shippingAddress: e.shippingAddress,
              setBillingAddress: r,
              setShippingAddress: o,
            };
          },
          Yt = () => {
            const { needsShipping: e } = ct(),
              { useShippingAsBilling: t, prefersCollection: o } = (0, k.useSelect)(e => ({
                useShippingAsBilling: e(oe.CHECKOUT_STORE_KEY).getUseShippingAsBilling(),
                prefersCollection: e(oe.CHECKOUT_STORE_KEY).prefersCollection(),
              })),
              { __internalSetUseShippingAsBilling: r } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              {
                billingAddress: c,
                setBillingAddress: n,
                shippingAddress: s,
                setShippingAddress: a,
              } = jt(),
              i = (0, u.useCallback)(
                e => {
                  n({ email: e });
                },
                [n],
              ),
              l = (0, v.getSetting)('forcedBillingAddress', !1);
            return {
              shippingAddress: s,
              billingAddress: c,
              setShippingAddress: a,
              setBillingAddress: n,
              setEmail: i,
              defaultFields: v.defaultFields,
              useShippingAsBilling: t,
              setUseShippingAsBilling: r,
              needsShipping: e,
              showShippingFields: !l && e && !o,
              showShippingMethods: e && !o,
              showBillingFields: !e || !t || !!o,
              forcedBillingAddress: l,
              useBillingAsShipping: l || !!o,
            };
          },
          Vt = window.wc.blocksComponents,
          Kt = ({ children: e, stepHeadingContent: t }) =>
            (0, r.createElement)(
              'div',
              { className: 'wc-block-components-checkout-step__heading' },
              (0, r.createElement)(
                Vt.Title,
                {
                  'aria-hidden': 'true',
                  className: 'wc-block-components-checkout-step__title',
                  headingLevel: '2',
                },
                e,
              ),
              !!t &&
                (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-checkout-step__heading-content' },
                  t,
                ),
            ),
          Ht = ({ attributes: e, setAttributes: t, className: o = '', children: c }) => {
            const { showFormStepNumbers: s } = Ot(),
              { title: a = '', description: i = '' } = e,
              l = (0, d.useBlockProps)({
                className: n()('wc-block-components-checkout-step', o, {
                  'wc-block-components-checkout-step--with-step-number': s,
                }),
              });
            return (0, r.createElement)(
              'div',
              { ...l },
              (0, r.createElement)(
                Kt,
                null,
                (0, r.createElement)(d.PlainText, {
                  className: '',
                  value: a,
                  onChange: e => t({ title: e }),
                  style: { backgroundColor: 'transparent' },
                }),
              ),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-checkout-step__container' },
                (0, r.createElement)(
                  'p',
                  { className: 'wc-block-components-checkout-step__description' },
                  (0, r.createElement)(d.PlainText, {
                    className: i
                      ? ''
                      : 'wc-block-components-checkout-step__description-placeholder',
                    value: i,
                    placeholder: (0, m.__)('Optional text for this form step.', 'woocommerce'),
                    onChange: e => t({ description: e }),
                    style: { backgroundColor: 'transparent' },
                  }),
                ),
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-checkout-step__content' },
                  c,
                ),
              ),
            );
          };
        o(6664);
        const $t = ({ block: e }) => {
            const { 'data-block': t } = (0, d.useBlockProps)(),
              o = Dt(e);
            return (
              Ft({ clientId: t, registeredBlocks: o }),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-checkout__additional_fields' },
                (0, r.createElement)(d.InnerBlocks, { allowedBlocks: o }),
              )
            );
          },
          qt = () => (0, r.createElement)(d.InnerBlocks.Content, null);
        var zt = o(4375),
          Wt = o(8107),
          Gt = o(4717);
        const Zt = ['BUTTON', 'FIELDSET', 'INPUT', 'OPTGROUP', 'OPTION', 'SELECT', 'TEXTAREA', 'A'],
          Xt = ({ children: e, style: t = {}, ...o }) => {
            const c = (0, u.useRef)(null),
              n = () => {
                c.current &&
                  Wt.focus.focusable.find(c.current).forEach(e => {
                    Zt.includes(e.nodeName) && e.setAttribute('tabindex', '-1'),
                      e.hasAttribute('contenteditable') &&
                        e.setAttribute('contenteditable', 'false');
                  });
              },
              s = (0, Gt.YQ)(n, 0, { leading: !0 });
            return (
              (0, u.useLayoutEffect)(() => {
                let e;
                return (
                  n(),
                  c.current &&
                    ((e = new window.MutationObserver(s)),
                    e.observe(c.current, { childList: !0, attributes: !0, subtree: !0 })),
                  () => {
                    e && e.disconnect(), s.cancel();
                  }
                );
              }, [s]),
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
        var Jt = o(332);
        o(1707);
        const Qt = ({
          id: e,
          className: t,
          label: o,
          onChange: c,
          options: s,
          value: a,
          required: i = !1,
          errorId: l,
          autoComplete: d = 'off',
          errorMessage: p = (0, m.__)('Please select a valid option', 'woocommerce'),
        }) => {
          const h = (0, u.useRef)(null),
            _ = (0, u.useId)(),
            g = e || 'control-' + _,
            E = l || g,
            { setValidationErrors: w, clearValidationError: b } = (0, k.useDispatch)(
              oe.VALIDATION_STORE_KEY,
            ),
            { error: y, validationErrorId: v } = (0, k.useSelect)(e => {
              const t = e(oe.VALIDATION_STORE_KEY);
              return {
                error: t.getValidationError(E),
                validationErrorId: t.getValidationErrorId(E),
              };
            });
          return (
            (0, u.useEffect)(
              () => (
                !i || a ? b(E) : w({ [E]: { message: p, hidden: !0 } }),
                () => {
                  b(E);
                }
              ),
              [b, a, E, p, i, w],
            ),
            (0, r.createElement)(
              'div',
              {
                id: g,
                className: n()('wc-block-components-combobox', t, {
                  'is-active': a,
                  'has-error': (null == y ? void 0 : y.message) && !(null != y && y.hidden),
                }),
                ref: h,
              },
              (0, r.createElement)(Jt.A, {
                className: 'wc-block-components-combobox-control',
                label: o,
                onChange: c,
                onFilterValueChange: e => {
                  if (e.length) {
                    const t = (0, be.isObject)(h.current)
                      ? h.current.ownerDocument.activeElement
                      : void 0;
                    if (t && (0, be.isObject)(h.current) && h.current.contains(t)) return;
                    const o = e.toLocaleUpperCase(),
                      r = s.find(e => e.value.toLocaleUpperCase() === o);
                    if (r) return void c(r.value);
                    const n = s.find(e => e.label.toLocaleUpperCase().startsWith(o));
                    n && c(n.value);
                  }
                },
                options: s,
                value: a || '',
                allowReset: !1,
                autoComplete: d,
                'aria-invalid': (null == y ? void 0 : y.message) && !(null != y && y.hidden),
                'aria-errormessage': v,
              }),
              (0, r.createElement)(Vt.ValidationInputError, { propertyName: E }),
            )
          );
        };
        o(2931);
        const eo = ({
            className: e,
            countries: t,
            id: o,
            label: c,
            onChange: s,
            value: a = '',
            autoComplete: i = 'off',
            required: l = !1,
            errorId: d,
            errorMessage: p = (0, m.__)('Please select a country', 'woocommerce'),
          }) => {
            const h = (0, u.useMemo)(
              () =>
                Object.entries(t).map(([e, t]) => ({ value: e, label: (0, Pe.decodeEntities)(t) })),
              [t],
            );
            return (0, r.createElement)(
              'div',
              { className: n()(e, 'wc-block-components-country-input') },
              (0, r.createElement)(Qt, {
                id: o,
                label: c,
                onChange: s,
                options: h,
                value: a,
                errorId: d,
                errorMessage: p,
                required: l,
                autoComplete: i,
              }),
            );
          },
          to = e => (0, r.createElement)(eo, { countries: H, ...e }),
          oo = e => (0, r.createElement)(eo, { countries: q, ...e });
        o(8824);
        const ro = (e, t) => {
            const o = t.find(
              t =>
                t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
                t.value.toLocaleUpperCase() === e.toLocaleUpperCase(),
            );
            return o ? o.value : '';
          },
          co = ({
            className: e,
            id: t,
            states: o,
            country: c,
            label: s,
            onChange: a,
            autoComplete: i = 'off',
            value: l = '',
            required: d = !1,
            errorId: p = '',
          }) => {
            const h = o[c],
              _ = (0, u.useMemo)(
                () =>
                  h
                    ? Object.keys(h).map(e => ({ value: e, label: (0, Pe.decodeEntities)(h[e]) }))
                    : [],
                [h],
              ),
              g = (0, u.useCallback)(
                e => {
                  const t = _.length > 0 ? ro(e, _) : e;
                  t !== l && a(t);
                },
                [a, _, l],
              ),
              k = (0, u.useRef)(l);
            return (
              (0, u.useEffect)(() => {
                k.current !== l && (k.current = l);
              }, [l]),
              (0, u.useEffect)(() => {
                if (_.length > 0 && k.current) {
                  const e = ro(k.current, _);
                  e !== k.current && g(e);
                }
              }, [_, g]),
              _.length > 0
                ? (0, r.createElement)(Qt, {
                    className: n()(e, 'wc-block-components-state-input'),
                    id: t,
                    label: s,
                    onChange: g,
                    options: _,
                    value: l,
                    errorMessage: (0, m.__)('Please select a state.', 'woocommerce'),
                    errorId: p,
                    required: d,
                    autoComplete: i,
                  })
                : (0, r.createElement)(Vt.ValidatedTextInput, {
                    className: e,
                    id: t,
                    label: s,
                    onChange: g,
                    autoComplete: i,
                    value: l,
                    required: d,
                  })
            );
          },
          no = e => (0, r.createElement)(co, { states: $, ...e }),
          so = e => (0, r.createElement)(co, { states: z, ...e });
        function ao(e) {
          const t = (0, u.useRef)(e);
          return Je()(e, t.current) || (t.current = e), t.current;
        }
        const io = ({ field: e, props: t, onChange: o, value: c }) => {
            var n;
            const s = null !== (n = null == e ? void 0 : e.required) && void 0 !== n && n,
              [a, i] = (0, u.useState)(() => Boolean(c) || s);
            return (0, r.createElement)(
              u.Fragment,
              null,
              a
                ? (0, r.createElement)(Vt.ValidatedTextInput, {
                    ...t,
                    type: e.type,
                    label: s ? e.label : e.optionalLabel,
                    className: `wc-block-components-address-form__${e.key}`,
                    value: c,
                    onChange: t => o(e.key, t),
                  })
                : (0, r.createElement)(
                    'button',
                    {
                      className: 'wc-block-components-address-form__address_2-toggle',
                      onClick: () => i(!0),
                    },
                    (0, m.sprintf)(
                      // translators: %s: address 2 field label.
                      // translators: %s: address 2 field label.
                      (0, m.__)('+ Add %s', 'woocommerce'),
                      e.label.toLowerCase(),
                    ),
                  ),
            );
          },
          lo = (e, t, o) => ({
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
          mo = (e, t, o) => ({
            field: t.find(t => t.key === e),
            value: (0, be.objectHasProp)(o, e) ? o[e] : void 0,
          }),
          uo = ({ formId: e, address1: t, address2: o, addressType: c, onChange: n }) => {
            var s, a, i, l;
            const m = t ? lo(t.field, e, c) : void 0,
              d = o ? lo(o.field, e, c) : void 0;
            return (0, r.createElement)(
              r.Fragment,
              null,
              t &&
                (0, r.createElement)(Vt.ValidatedTextInput, {
                  ...m,
                  type: null === (s = t.field) || void 0 === s ? void 0 : s.type,
                  label: null === (a = t.field) || void 0 === a ? void 0 : a.label,
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
                (0, r.createElement)(io, {
                  field: o.field,
                  props: d,
                  onChange: n,
                  value: null == o ? void 0 : o.value,
                }),
            );
          },
          po = ({
            id: e = '',
            fields: t,
            fieldConfig: o = {},
            onChange: c,
            addressType: s = 'shipping',
            values: a,
            children: i,
          }) => {
            const l = (0, p.useInstanceId)(po),
              d = ao(t),
              h = ao(o),
              _ = ao((0, be.objectHasProp)(a, 'country') ? a.country : ''),
              g = (0, u.useMemo)(() => {
                const e = Te(d, h, _);
                return {
                  fields: e,
                  addressType: s,
                  required: e.filter(e => e.required),
                  hidden: e.filter(e => e.hidden),
                };
              }, [d, h, _, s]),
              E = (0, u.useRef)({});
            return (
              (0, u.useEffect)(() => {
                const e = { ...a, ...Object.fromEntries(g.hidden.map(e => [e.key, ''])) };
                Je()(a, e) || c(e);
              }, [c, g, a]),
              (0, u.useEffect)(() => {
                'shipping' === s &&
                  (0, be.objectHasProp)(a, 'country') &&
                  (e => {
                    const t = 'shipping_country',
                      o = (0, k.select)(oe.VALIDATION_STORE_KEY).getValidationError(t);
                    !e.country &&
                      (e.city || e.state || e.postcode) &&
                      (o
                        ? (0, k.dispatch)(oe.VALIDATION_STORE_KEY).showValidationError(t)
                        : (0, k.dispatch)(oe.VALIDATION_STORE_KEY).setValidationErrors({
                            [t]: {
                              message: (0, m.__)('Please select your country', 'woocommerce'),
                              hidden: !1,
                            },
                          })),
                      o &&
                        e.country &&
                        (0, k.dispatch)(oe.VALIDATION_STORE_KEY).clearValidationError(t);
                  })(a);
              }, [a, s]),
              (0, u.useEffect)(() => {
                var e, t;
                null === (e = E.current) ||
                  void 0 === e ||
                  null === (t = e.postcode) ||
                  void 0 === t ||
                  t.revalidate();
              }, [_]),
              (e = e || `${l}`),
              (0, r.createElement)(
                'div',
                { id: e, className: 'wc-block-components-address-form' },
                g.fields.map(t => {
                  if (t.hidden) return null;
                  const o = lo(t, e, s);
                  if (
                    ('email' === t.key && ((o.id = 'email'), (o.errorId = 'billing_email')),
                    'checkbox' === t.type)
                  )
                    return (0, r.createElement)(Vt.CheckboxControl, {
                      key: t.key,
                      checked: Boolean(a[t.key]),
                      onChange: e => {
                        c({ ...a, [t.key]: e });
                      },
                      ...o,
                    });
                  if ('address_1' === t.key) {
                    const o = mo('address_1', g.fields, a),
                      n = mo('address_2', g.fields, a);
                    return (0, r.createElement)(uo, {
                      address1: o,
                      address2: n,
                      addressType: s,
                      formId: e,
                      key: t.key,
                      onChange: (e, t) => {
                        c({ ...a, [e]: t });
                      },
                    });
                  }
                  if ('address_2' === t.key) return null;
                  if ('country' === t.key && (0, be.objectHasProp)(a, 'country')) {
                    const e = 'shipping' === s ? oo : to;
                    return (0, r.createElement)(e, {
                      key: t.key,
                      ...o,
                      value: a.country,
                      onChange: e => {
                        c({ ...a, country: e, state: '', postcode: '' });
                      },
                    });
                  }
                  if ('state' === t.key && (0, be.objectHasProp)(a, 'state')) {
                    const e = 'shipping' === s ? so : no;
                    return (0, r.createElement)(e, {
                      key: t.key,
                      ...o,
                      country: a.country,
                      value: a.state,
                      onChange: e => c({ ...a, state: e }),
                    });
                  }
                  return 'select' === t.type
                    ? void 0 === t.options
                      ? null
                      : (0, r.createElement)(Qt, {
                          key: t.key,
                          ...o,
                          className: n()(
                            'wc-block-components-select-input',
                            `wc-block-components-select-input-${t.key}`.replaceAll('/', '-'),
                          ),
                          value: a[t.key],
                          onChange: e => {
                            c({ ...a, [t.key]: e });
                          },
                          options: t.options,
                        })
                    : (0, r.createElement)(Vt.ValidatedTextInput, {
                        key: t.key,
                        ref: e => (E.current[t.key] = e),
                        ...o,
                        type: t.type,
                        value: a[t.key],
                        onChange: e => c({ ...a, [t.key]: e }),
                        customFormatter: e =>
                          'postcode' === t.key ? e.trimStart().toUpperCase() : e,
                        customValidation: e =>
                          ((e, t, o) =>
                            !(
                              (e.required || e.value) &&
                              ('postcode' === t &&
                              o &&
                              !(0, At.isPostcode)({ postcode: e.value, country: o })
                                ? (e.setCustomValidity(
                                    (0, m.__)('Please enter a valid postcode', 'woocommerce'),
                                  ),
                                  1)
                                : 'email' === t &&
                                  !(0, xe.isEmail)(e.value) &&
                                  (e.setCustomValidity(
                                    (0, m.__)('Please enter a valid email address', 'woocommerce'),
                                  ),
                                  1))
                            ))(e, t.key, (0, be.objectHasProp)(a, 'country') ? a.country : ''),
                      });
                }),
                i,
              )
            );
          },
          ho = po;
        o(7259);
        const _o = ({ isEditing: e = !1, addressCard: t, addressForm: o }) => {
            const c = n()('wc-block-components-address-address-wrapper', { 'is-editing': e });
            return (0, r.createElement)(
              'div',
              { className: c },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-address-card-wrapper' },
                t(),
              ),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-address-form-wrapper' },
                o(),
              ),
            );
          },
          go = e =>
            (0, be.isObject)($[e.country]) && (0, be.isString)($[e.country][e.state])
              ? (0, Pe.decodeEntities)($[e.country][e.state])
              : e.state,
          ko = e =>
            (0, be.isString)(H[e.country]) ? (0, Pe.decodeEntities)(H[e.country]) : e.country;
        o(1094);
        const Eo = ({ address: e, onEdit: t, target: o, fieldConfig: c }) => {
            const n = (0, v.getSetting)('countryData', {});
            let s = (0, v.getSetting)(
              'defaultAddressFormat',
              '{name}\n{company}\n{address_1}\n{address_2}\n{city}\n{state}\n{postcode}\n{country}',
            );
            (0, be.objectHasProp)(n, null == e ? void 0 : e.country) &&
              (0, be.objectHasProp)(n[e.country], 'format') &&
              (0, be.isString)(n[e.country].format) &&
              (s = n[e.country].format);
            const { name: a, address: i } = ((e, t) => {
              const o = (e =>
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
                r = t.replace(`${o}\n`, ''),
                c = [
                  ['{company}', (null == e ? void 0 : e.company) || ''],
                  ['{address_1}', (null == e ? void 0 : e.address_1) || ''],
                  ['{address_2}', (null == e ? void 0 : e.address_2) || ''],
                  ['{city}', (null == e ? void 0 : e.city) || ''],
                  ['{state}', go(e)],
                  ['{postcode}', (null == e ? void 0 : e.postcode) || ''],
                  ['{country}', ko(e)],
                  ['{company_upper}', ((null == e ? void 0 : e.company) || '').toUpperCase()],
                  ['{address_1_upper}', ((null == e ? void 0 : e.address_1) || '').toUpperCase()],
                  ['{address_2_upper}', ((null == e ? void 0 : e.address_2) || '').toUpperCase()],
                  ['{city_upper}', ((null == e ? void 0 : e.city) || '').toUpperCase()],
                  ['{state_upper}', go(e).toUpperCase()],
                  ['{state_code}', (null == e ? void 0 : e.state) || ''],
                  ['{postcode_upper}', ((null == e ? void 0 : e.postcode) || '').toUpperCase()],
                  ['{country_upper}', ko(e).toUpperCase()],
                ],
                n = [
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
              let s = o;
              n.forEach(([e, t]) => {
                s = s.replace(e, t);
              });
              let a = r;
              c.forEach(([e, t]) => {
                a = a.replace(e, t);
              });
              const i = a
                .replace(/^,\s|,\s$/g, '')
                .replace(/\n{2,}/, '\n')
                .split('\n')
                .filter(Boolean);
              return { name: s, address: i };
            })(e, s);
            return (0, r.createElement)(
              'div',
              { className: 'wc-block-components-address-card' },
              (0, r.createElement)(
                'address',
                null,
                (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-address-card__address-section' },
                  a,
                ),
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-address-card__address-section' },
                  i
                    .filter(e => !!e)
                    .map((e, t) => (0, r.createElement)('span', { key: 'address-' + t }, e)),
                ),
                e.phone && !c.phone.hidden
                  ? (0, r.createElement)(
                      'div',
                      {
                        key: 'address-phone',
                        className: 'wc-block-components-address-card__address-section',
                      },
                      e.phone,
                    )
                  : '',
              ),
              t &&
                (0, r.createElement)(
                  'a',
                  {
                    role: 'button',
                    href: '#' + o,
                    className: 'wc-block-components-address-card__edit',
                    'aria-label': (0, m.__)('Edit address', 'woocommerce'),
                    onClick: e => {
                      t(), e.preventDefault();
                    },
                  },
                  (0, m.__)('Edit', 'woocommerce'),
                ),
            );
          },
          wo = ({ addressFieldsConfig: e, defaultEditing: t = !1 }) => {
            const {
                shippingAddress: o,
                setShippingAddress: c,
                setBillingAddress: n,
                useShippingAsBilling: s,
              } = Yt(),
              { dispatchCheckoutEvent: a } = rt(),
              [i, l] = (0, u.useState)(t),
              { hasValidationErrors: m, invalidProps: d } = (0, k.useSelect)(e => {
                const t = e(oe.VALIDATION_STORE_KEY);
                return {
                  hasValidationErrors: t.hasValidationErrors(),
                  invalidProps: Object.keys(o)
                    .filter(e => void 0 !== t.getValidationError('shipping_' + e))
                    .filter(Boolean),
                };
              });
            (0, u.useEffect)(() => {
              d.length > 0 && !1 === i && l(!0);
            }, [i, m, d.length]);
            const p = (0, u.useCallback)(
                e => {
                  c(e), s && (n(e), a('set-billing-address')), a('set-shipping-address');
                },
                [a, n, c, s],
              ),
              h = (0, u.useCallback)(
                () =>
                  (0, r.createElement)(Eo, {
                    address: o,
                    target: 'shipping',
                    onEdit: () => {
                      l(!0);
                    },
                    fieldConfig: e,
                  }),
                [o, e],
              ),
              _ = (0, u.useCallback)(
                () =>
                  (0, r.createElement)(ho, {
                    id: 'shipping',
                    addressType: 'shipping',
                    onChange: p,
                    values: o,
                    fields: Z,
                    fieldConfig: e,
                  }),
                [e, p, o],
              );
            return (0, r.createElement)(_o, { isEditing: i, addressCard: h, addressForm: _ });
          },
          bo = ({
            showCompanyField: e = !1,
            requireCompanyField: t = !1,
            showApartmentField: o = !1,
            requireApartmentField: c = !1,
            showPhoneField: n = !1,
            requirePhoneField: s = !1,
          }) => {
            const {
                setBillingAddress: a,
                shippingAddress: i,
                billingAddress: l,
                useShippingAsBilling: d,
                setUseShippingAsBilling: p,
              } = Yt(),
              { isEditor: h } = w(),
              _ = 0 === (0, v.getSetting)('currentUserId'),
              g = () => {
                const t = { ...i };
                n || delete t.phone, e && delete t.company, a(t);
              };
            (0, zt.Su)(() => {
              d && g();
            });
            const E = (0, u.useMemo)(
                () => ({
                  company: { hidden: !e, required: t },
                  address_2: { hidden: !o, required: c },
                  phone: { hidden: !n, required: s },
                }),
                [e, t, o, c, n, s],
              ),
              b = h ? Xt : u.Fragment,
              y = d ? [ve.SHIPPING_ADDRESS, ve.BILLING_ADDRESS] : [ve.SHIPPING_ADDRESS],
              f = !(!i.address_1 || (!i.first_name && !i.last_name)),
              { cartDataLoaded: C } = (0, k.useSelect)(e => ({
                cartDataLoaded: e(oe.CART_STORE_KEY).hasFinishedResolution('getCartData'),
              })),
              S = h || !f;
            return (0, r.createElement)(
              u.Fragment,
              null,
              (0, r.createElement)(Vt.StoreNoticesContainer, { context: y }),
              (0, r.createElement)(
                b,
                null,
                C ? (0, r.createElement)(wo, { addressFieldsConfig: E, defaultEditing: S }) : null,
              ),
              (0, r.createElement)(Vt.CheckboxControl, {
                className: 'wc-block-checkout__use-address-for-billing',
                label: (0, m.__)('Use same address for billing', 'woocommerce'),
                checked: d,
                onChange: e => {
                  p(e),
                    e
                      ? g()
                      : (e => {
                          if (!e || !_) return;
                          const t = (e => {
                            const t = Te(Z, {}, e.country),
                              o = Object.assign({}, e);
                            return (
                              t.forEach(({ key: t = '' }) => {
                                'country' !== t && 'state' !== t && Re(t, e) && (o[t] = '');
                              }),
                              o
                            );
                          })(e);
                          a(t);
                        })(l);
                },
              }),
            );
          },
          yo = ({
            defaultTitle: e = (0, m.__)('Step', 'woocommerce'),
            defaultDescription: t = (0, m.__)('Step description text.', 'woocommerce'),
            defaultShowStepNumber: o = !0,
          }) => ({
            title: { type: 'string', default: e },
            description: { type: 'string', default: t },
            showStepNumber: { type: 'boolean', default: o },
          }),
          vo = {
            ...yo({
              defaultTitle: (0, m.__)('Shipping address', 'woocommerce'),
              defaultDescription: (0, m.__)(
                'Enter the address where you want your order delivered.',
                'woocommerce',
              ),
            }),
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)('woocommerce/checkout-shipping-address-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: Ut.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: vo,
          edit: ({ attributes: e, setAttributes: t }) => {
            const {
                showCompanyField: o,
                requireCompanyField: c,
                showApartmentField: s,
                requireApartmentField: a,
                showPhoneField: i,
                requirePhoneField: l,
              } = Ot(),
              { addressFieldControls: m } = Mt(),
              { showShippingFields: d } = Yt();
            if (!d) return null;
            const u = `shipping-address-${a ? 'visible' : 'hidden'}-address-2`;
            return (0, r.createElement)(
              Ht,
              {
                setAttributes: t,
                attributes: e,
                className: n()(
                  'wc-block-checkout__shipping-fields',
                  null == e ? void 0 : e.className,
                ),
              },
              (0, r.createElement)(m, null),
              (0, r.createElement)(bo, {
                key: u,
                showCompanyField: o,
                requireCompanyField: c,
                showApartmentField: s,
                requireApartmentField: a,
                showPhoneField: i,
                requirePhoneField: l,
              }),
              (0, r.createElement)($t, { block: At.innerBlockAreas.SHIPPING_ADDRESS }),
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...d.useBlockProps.save() },
              (0, r.createElement)(qt, null),
            ),
        });
        var fo = o(3813);
        o(8845);
        const Co = L
            ? `<a href="${L}" target="_blank">${(0, m.__)(
                'Terms and Conditions',
                'woocommerce',
              )}</a>`
            : (0, m.__)('Terms and Conditions', 'woocommerce'),
          So = F
            ? `<a href="${F}" target="_blank">${(0, m.__)('Privacy Policy', 'woocommerce')}</a>`
            : (0, m.__)('Privacy Policy', 'woocommerce'),
          Po = (0, m.sprintf) /* translators: %1$s terms page link, %2$s privacy page link. */(
            /* translators: %1$s terms page link, %2$s privacy page link. */
            (0, m.__)(
              'By proceeding with your purchase you agree to our %1$s and %2$s',
              'woocommerce',
            ),
            Co,
            So,
          ),
          No = (0, m.sprintf) /* translators: %1$s terms page link, %2$s privacy page link. */(
            /* translators: %1$s terms page link, %2$s privacy page link. */
            (0, m.__)(
              'You must accept our %1$s and %2$s to continue with your purchase.',
              'woocommerce',
            ),
            Co,
            So,
          );
        o(5609),
          (0, l.registerBlockType)('woocommerce/checkout-terms-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: fo.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ attributes: { checkbox: e, text: t }, setAttributes: o }) => {
              const c = (0, d.useBlockProps)(),
                n = t || (e ? No : Po);
              return (0, r.createElement)(
                'div',
                { ...c },
                (0, r.createElement)(
                  d.InspectorControls,
                  null,
                  (!L || !F) &&
                    (0, r.createElement)(
                      Nt.Notice,
                      {
                        className: 'wc-block-checkout__terms_notice',
                        status: 'warning',
                        isDismissible: !1,
                      },
                      (0, m.__)(
                        "Link to your store's Terms and Conditions and Privacy Policy pages by creating pages for them.",
                        'woocommerce',
                      ),
                      (0, r.createElement)('br', null),
                      !L &&
                        (0, r.createElement)(
                          r.Fragment,
                          null,
                          (0, r.createElement)('br', null),
                          (0, r.createElement)(
                            Nt.ExternalLink,
                            { href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=advanced` },
                            (0, m.__)('Setup a Terms and Conditions page', 'woocommerce'),
                          ),
                        ),
                      !F &&
                        (0, r.createElement)(
                          r.Fragment,
                          null,
                          (0, r.createElement)('br', null),
                          (0, r.createElement)(
                            Nt.ExternalLink,
                            { href: `${v.ADMIN_URL}options-privacy.php` },
                            (0, m.__)('Setup a Privacy Policy page', 'woocommerce'),
                          ),
                        ),
                    ),
                  L &&
                    F &&
                    !(n.includes(L) && n.includes(F)) &&
                    (0, r.createElement)(
                      Nt.Notice,
                      {
                        className: 'wc-block-checkout__terms_notice',
                        status: 'warning',
                        isDismissible: !1,
                        actions:
                          Po !== t
                            ? [
                                {
                                  label: (0, m.__)('Restore default text', 'woocommerce'),
                                  onClick: () => o({ text: '' }),
                                },
                              ]
                            : [],
                      },
                      (0, r.createElement)(
                        'p',
                        null,
                        (0, m.__)(
                          'Ensure you add links to your policy pages in this section.',
                          'woocommerce',
                        ),
                      ),
                    ),
                  (0, r.createElement)(
                    Nt.PanelBody,
                    { title: (0, m.__)('Display options', 'woocommerce') },
                    (0, r.createElement)(Nt.ToggleControl, {
                      label: (0, m.__)('Require checkbox', 'woocommerce'),
                      checked: e,
                      onChange: () => o({ checkbox: !e }),
                    }),
                  ),
                ),
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-checkout__terms' },
                  e
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(Vt.CheckboxControl, {
                          id: 'terms-condition',
                          checked: !1,
                        }),
                        (0, r.createElement)(d.RichText, {
                          value: n,
                          onChange: e => o({ text: e }),
                        }),
                      )
                    : (0, r.createElement)(d.RichText, {
                        tagName: 'span',
                        value: n,
                        onChange: e => o({ text: e }),
                      }),
                ),
              );
            },
            save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
          });
        var Ao = o(2596);
        const To = () => {
            const { customerId: e, shouldCreateAccount: t, additionalFields: o } = (0, k.useSelect)(
                e => {
                  const t = e(oe.CHECKOUT_STORE_KEY);
                  return {
                    customerId: t.getCustomerId(),
                    shouldCreateAccount: t.getShouldCreateAccount(),
                    additionalFields: t.getAdditionalFields(),
                  };
                },
              ),
              { __internalSetShouldCreateAccount: c, setAdditionalFields: n } = (0, k.useDispatch)(
                oe.CHECKOUT_STORE_KEY,
              ),
              { billingAddress: s, setEmail: a } = Yt(),
              { dispatchCheckoutEvent: i } = rt(),
              l =
                !e &&
                (0, v.getSetting)('checkoutAllowsGuest', !1) &&
                (0, v.getSetting)('checkoutAllowsSignup', !1) &&
                (0, r.createElement)(Vt.CheckboxControl, {
                  className: 'wc-block-checkout__create-account',
                  label: (0, m.__)('Create an account?', 'woocommerce'),
                  checked: t,
                  onChange: e => c(e),
                }),
              d = { email: s.email, ...o };
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(Vt.StoreNoticesContainer, { context: ve.CONTACT_INFORMATION }),
              (0, r.createElement)(
                ho,
                {
                  id: 'contact',
                  addressType: 'contact',
                  onChange: e => {
                    const { email: t, ...o } = e;
                    a(t), i('set-email-address'), n(o);
                  },
                  values: d,
                  fields: X,
                },
                l,
              ),
            );
          },
          xo = {
            ...yo({
              defaultTitle: (0, m.__)('Contact information', 'woocommerce'),
              defaultDescription: (0, m.__)(
                "We'll use this email to send you details and updates about your order.",
                'woocommerce',
              ),
            }),
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { remove: !0, move: !0 } },
          };
        (0, l.registerBlockType)('woocommerce/checkout-contact-information-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: Ao.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: xo,
          edit: ({ attributes: e, setAttributes: t }) =>
            (0, r.createElement)(
              Ht,
              {
                attributes: e,
                setAttributes: t,
                className: n()(
                  'wc-block-checkout__contact-fields',
                  null == e ? void 0 : e.className,
                ),
              },
              (0, r.createElement)(
                d.InspectorControls,
                null,
                (0, r.createElement)(
                  Nt.PanelBody,
                  { title: (0, m.__)('Account creation and guest checkout', 'woocommerce') },
                  (0, r.createElement)(
                    'p',
                    { className: 'wc-block-checkout__controls-text' },
                    (0, m.__)(
                      'Account creation and guest checkout settings can be managed in your store settings.',
                      'woocommerce',
                    ),
                  ),
                  (0, r.createElement)(
                    Nt.ExternalLink,
                    { href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=account` },
                    (0, m.__)('Manage account settings', 'woocommerce'),
                  ),
                ),
              ),
              (0, r.createElement)(Xt, null, (0, r.createElement)(To, null)),
              (0, r.createElement)($t, { block: At.innerBlockAreas.CONTACT_INFORMATION }),
            ),
          save: () =>
            (0, r.createElement)(
              'div',
              { ...d.useBlockProps.save() },
              (0, r.createElement)(qt, null),
            ),
        });
        const Ro = ({ addressFieldsConfig: e, defaultEditing: t = !1 }) => {
            const {
                billingAddress: o,
                setShippingAddress: c,
                setBillingAddress: n,
                useBillingAsShipping: s,
              } = Yt(),
              { dispatchCheckoutEvent: a } = rt(),
              [i, l] = (0, u.useState)(t),
              { hasValidationErrors: m, invalidProps: d } = (0, k.useSelect)(e => {
                const t = e(oe.VALIDATION_STORE_KEY);
                return {
                  hasValidationErrors: t.hasValidationErrors(),
                  invalidProps: Object.keys(o)
                    .filter(e => 'email' !== e && void 0 !== t.getValidationError('billing_' + e))
                    .filter(Boolean),
                };
              });
            (0, u.useEffect)(() => {
              d.length > 0 && !1 === i && l(!0);
            }, [i, m, d.length]);
            const p = (0, u.useCallback)(
                e => {
                  n(e), s && (c(e), a('set-shipping-address')), a('set-billing-address');
                },
                [a, n, c, s],
              ),
              h = (0, u.useCallback)(
                () =>
                  (0, r.createElement)(Eo, {
                    address: o,
                    target: 'billing',
                    onEdit: () => {
                      l(!0);
                    },
                    fieldConfig: e,
                  }),
                [o, e],
              ),
              _ = (0, u.useCallback)(
                () =>
                  (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(ho, {
                      id: 'billing',
                      addressType: 'billing',
                      onChange: p,
                      values: o,
                      fields: Z,
                      fieldConfig: e,
                    }),
                  ),
                [e, o, p],
              );
            return (0, r.createElement)(_o, { isEditing: i, addressCard: h, addressForm: _ });
          },
          Io = ({
            showCompanyField: e = !1,
            requireCompanyField: t = !1,
            showApartmentField: o = !1,
            requireApartmentField: c = !1,
            showPhoneField: n = !1,
            requirePhoneField: s = !1,
          }) => {
            const {
                shippingAddress: a,
                billingAddress: i,
                setShippingAddress: l,
                useBillingAsShipping: m,
              } = Yt(),
              { isEditor: d } = w();
            (0, zt.Su)(() => {
              if (m) {
                const { email: t, ...o } = i,
                  r = { ...o };
                n || delete r.phone, e && delete r.company, l(r);
              }
            });
            const p = (0, u.useMemo)(
                () => ({
                  company: { hidden: !e, required: t },
                  address_2: { hidden: !o, required: c },
                  phone: { hidden: !n, required: s },
                }),
                [e, t, o, c, n, s],
              ),
              h = d ? Xt : u.Fragment,
              _ = m ? [ve.BILLING_ADDRESS, ve.SHIPPING_ADDRESS] : [ve.BILLING_ADDRESS],
              { cartDataLoaded: g } = (0, k.useSelect)(e => ({
                cartDataLoaded: e(oe.CART_STORE_KEY).hasFinishedResolution('getCartData'),
              })),
              E = !(!i.address_1 || (!i.first_name && !i.last_name)),
              { email: b, ...y } = i,
              v = Je()(y, a),
              f = d || !E || v;
            return (0, r.createElement)(
              u.Fragment,
              null,
              (0, r.createElement)(Vt.StoreNoticesContainer, { context: _ }),
              (0, r.createElement)(
                h,
                null,
                g ? (0, r.createElement)(Ro, { addressFieldsConfig: p, defaultEditing: f }) : null,
              ),
            );
          },
          Oo = (0, m.__)('Billing address', 'woocommerce'),
          Mo = (0, m.__)(
            'Enter the billing address that matches your payment method.',
            'woocommerce',
          ),
          Bo = (0, m.__)('Billing and shipping address', 'woocommerce'),
          Do = (0, m.__)(
            'Enter the billing and shipping address that matches your payment method.',
            'woocommerce',
          ),
          Fo = {
            ...yo({ defaultTitle: Oo, defaultDescription: Mo }),
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)('woocommerce/checkout-billing-address-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: Ut.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: Fo,
          edit: ({ attributes: e, setAttributes: t }) => {
            const {
                showCompanyField: o,
                requireCompanyField: c,
                showApartmentField: s,
                requireApartmentField: a,
                showPhoneField: i,
                requirePhoneField: l,
              } = Ot(),
              { addressFieldControls: m } = Mt(),
              { showBillingFields: d, forcedBillingAddress: u, useBillingAsShipping: p } = Yt();
            if (!d && !p) return null;
            (e.title = ((e, t) => (t ? (e === Oo ? Bo : e) : e === Bo ? Oo : e))(e.title, u)),
              (e.description = ((e, t) => (t ? (e === Mo ? Do : e) : e === Do ? Mo : e))(
                e.description,
                u,
              ));
            const h = `billing-address-${a ? 'visible' : 'hidden'}-address-2`;
            return (0, r.createElement)(
              Ht,
              {
                setAttributes: t,
                attributes: e,
                className: n()(
                  'wc-block-checkout__billing-fields',
                  null == e ? void 0 : e.className,
                ),
              },
              (0, r.createElement)(m, null),
              (0, r.createElement)(Io, {
                key: h,
                showCompanyField: o,
                requireCompanyField: c,
                showApartmentField: s,
                requireApartmentField: a,
                showPhoneField: i,
                requirePhoneField: l,
              }),
              (0, r.createElement)($t, { block: At.innerBlockAreas.BILLING_ADDRESS }),
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...d.useBlockProps.save() },
              (0, r.createElement)(qt, null),
            ),
        });
        var Lo = o(498);
        const Uo = (0, m.__)('Place Order', 'woocommerce'),
          jo = {
            cartPageId: { type: 'number', default: 0 },
            showReturnToCart: { type: 'boolean', default: !0 },
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
            placeOrderButtonLabel: { type: 'string', default: Uo },
          },
          Yo = (e, t) => {
            if (!e.title.raw) return e.slug;
            const o = 1 === t.filter(t => t.title.raw === e.title.raw).length;
            return e.title.raw + (o ? '' : ` - ${e.slug}`);
          },
          Vo = ({ setPageId: e, pageId: t, labels: o }) => {
            const c =
              (0, k.useSelect)(
                e =>
                  e('core').getEntityRecords('postType', 'page', {
                    status: 'publish',
                    orderby: 'title',
                    order: 'asc',
                    per_page: 100,
                  }),
                [],
              ) || null;
            return c
              ? (0, r.createElement)(
                  Nt.PanelBody,
                  { title: o.title },
                  (0, r.createElement)(Nt.SelectControl, {
                    label: (0, m.__)('Link to', 'woocommerce'),
                    value: t,
                    options: [
                      { label: o.default, value: 0 },
                      ...c.map(e => ({ label: Yo(e, c), value: parseInt(e.id, 10) })),
                    ],
                    onChange: t => e(parseInt(t, 10)),
                  }),
                )
              : null;
          };
        var Ko = o(1387);
        o(718);
        const Ho = ({ link: e }) => {
          const t = e || j;
          return t
            ? (0, r.createElement)(
                'a',
                { href: t, className: 'wc-block-components-checkout-return-to-cart-button' },
                (0, r.createElement)(i.A, { icon: Ko.A }),
                (0, m.__)('Return to Cart', 'woocommerce'),
              )
            : null;
        };
        var $o = o(1777);
        o(2080), o(7791);
        const qo = () =>
            (0, r.createElement)('span', {
              className: 'wc-block-components-spinner',
              'aria-hidden': 'true',
            }),
          zo = (0, u.forwardRef)((e, t) => {
            'showSpinner' in e &&
              ce()('showSpinner prop', {
                version: '8.9.0',
                alternative: 'Render a spinner in the button children instead.',
                plugin: 'WooCommerce',
              });
            const {
                className: o,
                showSpinner: c = !1,
                children: s,
                variant: a = 'contained',
                removeTextWrap: i = !1,
                ...l
              } = e,
              m = n()('wc-block-components-button', 'wp-element-button', o, a, {
                'wc-block-components-button--loading': c,
              });
            if ('href' in e)
              return (0, r.createElement)($o.$, {
                render: (0, r.createElement)(
                  'a',
                  { ref: t, href: e.href },
                  c && (0, r.createElement)(qo, null),
                  (0, r.createElement)(
                    'span',
                    { className: 'wc-block-components-button__text' },
                    s,
                  ),
                ),
                className: m,
                ...l,
              });
            const d = i
              ? e.children
              : (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-button__text' },
                  e.children,
                );
            return (0, r.createElement)(
              $o.$,
              { ref: t, className: m, ...l },
              c && (0, r.createElement)(qo, null),
              d,
            );
          }),
          Wo = ({ onChange: e, placeholder: t, value: o, ...c }) =>
            (0, r.createElement)(
              zo,
              { ...c },
              (0, r.createElement)(d.RichText, {
                multiline: !1,
                allowedFormats: [],
                value: o,
                placeholder: t,
                onChange: e,
              }),
            );
        o(5089);
        const Go = {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: Lo.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: jo,
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
          edit: ({ attributes: e, setAttributes: t }) => {
            const o = (0, d.useBlockProps)(),
              { cartPageId: c = 0, showReturnToCart: s = !0, placeOrderButtonLabel: a } = e,
              { current: i } = (0, u.useRef)(c),
              l = (0, k.useSelect)(e => i || e('core/editor').getCurrentPostId(), [i]);
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(
                d.InspectorControls,
                null,
                (0, r.createElement)(
                  Nt.PanelBody,
                  { title: (0, m.__)('Account options', 'woocommerce') },
                  (0, r.createElement)(Nt.ToggleControl, {
                    label: (0, m.__)('Show a "Return to Cart" link', 'woocommerce'),
                    checked: s,
                    onChange: () => t({ showReturnToCart: !s }),
                  }),
                ),
                s &&
                  !(l === D && 0 === i) &&
                  (0, r.createElement)(Vo, {
                    pageId: c,
                    setPageId: e => t({ cartPageId: e }),
                    labels: {
                      title: (0, m.__)('Return to Cart button', 'woocommerce'),
                      default: (0, m.__)('WooCommerce Cart Page', 'woocommerce'),
                    },
                  }),
              ),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-checkout__actions' },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-checkout__actions_row' },
                  (0, r.createElement)(
                    Xt,
                    null,
                    s && (0, r.createElement)(Ho, { link: (0, v.getSetting)('page-' + c, !1) }),
                  ),
                  (0, r.createElement)(Wo, {
                    className: n()(
                      'wc-block-cart__submit-button',
                      'wc-block-components-checkout-place-order-button',
                      { 'wc-block-components-checkout-place-order-button--full-width': !s },
                    ),
                    value: a,
                    placeholder: Uo,
                    onChange: e => {
                      t({ placeOrderButtonLabel: e });
                    },
                  }),
                ),
              ),
            );
          },
        };
        (0, l.registerBlockType)('woocommerce/checkout-actions-block', Go);
        const Zo = () => {
          const { additionalFields: e } = (0, k.useSelect)(e => ({
              additionalFields: e(oe.CHECKOUT_STORE_KEY).getAdditionalFields(),
            })),
            { setAdditionalFields: t } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
            o = { ...e };
          return 0 === J.length
            ? null
            : (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(Vt.StoreNoticesContainer, { context: ve.ORDER_INFORMATION }),
                (0, r.createElement)(ho, {
                  id: 'additional-information',
                  addressType: 'additional-information',
                  onChange: e => {
                    t(e);
                  },
                  values: o,
                  fields: J,
                }),
              );
        };
        o(6426), o(5676);
        const Xo = {
          ...yo({
            defaultTitle: (0, m.__)('Additional order information', 'woocommerce'),
            defaultDescription: '',
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !1, remove: !0 } },
        };
        (0, l.registerBlockType)('woocommerce/checkout-additional-information-block', {
          attributes: Xo,
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: fo.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e, setAttributes: t }) =>
            0 === J.length
              ? null
              : (0, r.createElement)(
                  Ht,
                  {
                    setAttributes: t,
                    attributes: e,
                    className: n()(
                      'wc-block-checkout__additional-information-fields',
                      null == e ? void 0 : e.className,
                    ),
                  },
                  (0, r.createElement)(Zo, null),
                ),
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        var Jo = o(6465);
        const Qo = ({ disabled: e, onChange: t, placeholder: o, value: c }) => {
            const [n, s] = (0, u.useState)(!1),
              [a, i] = (0, u.useState)('');
            return (0, r.createElement)(
              'div',
              { className: 'wc-block-checkout__add-note' },
              (0, r.createElement)(Vt.CheckboxControl, {
                disabled: e,
                label: (0, m.__)('Add a note to your order', 'woocommerce'),
                checked: n,
                onChange: e => {
                  s(e), e ? c !== a && t(a) : (t(''), i(c));
                },
              }),
              n &&
                (0, r.createElement)(Vt.Textarea, {
                  disabled: e,
                  onTextChange: t,
                  placeholder: o,
                  value: c,
                }),
            );
          },
          er = ({ className: e }) => {
            const { needsShipping: t } = ct(),
              { isProcessing: o, orderNotes: c } = (0, k.useSelect)(e => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return { isProcessing: t.isProcessing(), orderNotes: t.getOrderNotes() };
              }),
              { __internalSetOrderNotes: s } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY);
            return (0, r.createElement)(
              Vt.FormStep,
              {
                id: 'order-notes',
                showStepNumber: !1,
                className: n()('wc-block-checkout__order-notes', e),
                disabled: o,
              },
              (0, r.createElement)(Qo, {
                disabled: o,
                onChange: s,
                placeholder: t
                  ? (0, m.__)(
                      'Notes about your order, e.g. special notes for delivery.',
                      'woocommerce',
                    )
                  : (0, m.__)('Notes about your order.', 'woocommerce'),
                value: c,
              }),
            );
          };
        o(377),
          o(7797),
          (0, l.registerBlockType)('woocommerce/checkout-order-note-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: Jo.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: () => {
              const e = (0, d.useBlockProps)();
              return (0, r.createElement)(
                'div',
                { ...e },
                (0, r.createElement)(Xt, null, (0, r.createElement)(er, null)),
              );
            },
            save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
          });
        const tr = (0, r.createElement)(
          s.SVG,
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
        o(8375);
        const or = ({
          children: e,
          className: t,
          screenReaderLabel: o,
          showSpinner: c = !1,
          isLoading: s = !0,
        }) =>
          (0, r.createElement)(
            'div',
            { className: n()(t, { 'wc-block-components-loading-mask': s }) },
            s && c && (0, r.createElement)(Vt.Spinner, null),
            (0, r.createElement)(
              'div',
              {
                className: n()({ 'wc-block-components-loading-mask__children': s }),
                'aria-hidden': s,
              },
              e,
            ),
            s &&
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                o || (0, m.__)('Loading…', 'woocommerce'),
              ),
          );
        o(3048);
        const rr = (0, p.withInstanceId)(
          ({ instanceId: e, isLoading: t = !1, onSubmit: o, displayCouponForm: c = !1 }) => {
            const [n, s] = (0, u.useState)(''),
              [a, i] = (0, u.useState)(c),
              l = `wc-block-components-totals-coupon__input-${e}`,
              { validationErrorId: d } = (0, k.useSelect)(e => ({
                validationErrorId: e(oe.VALIDATION_STORE_KEY).getValidationErrorId(l),
              }));
            return (0, r.createElement)(
              Vt.Panel,
              {
                className: 'wc-block-components-totals-coupon',
                initialOpen: a,
                hasBorder: !1,
                title: (0, m.__)('Add a coupon', 'woocommerce'),
                state: [a, i],
              },
              (0, r.createElement)(
                or,
                {
                  screenReaderLabel: (0, m.__)('Applying coupon…', 'woocommerce'),
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
                      id: l,
                      errorId: 'coupon',
                      className: 'wc-block-components-totals-coupon__input',
                      label: (0, m.__)('Enter code', 'woocommerce'),
                      value: n,
                      ariaDescribedBy: d,
                      onChange: e => {
                        s(e);
                      },
                      focusOnMount: !0,
                      validateOnMount: !1,
                      showError: !1,
                    }),
                    (0, r.createElement)(
                      zo,
                      {
                        className: 'wc-block-components-totals-coupon__button',
                        disabled: t || !n,
                        showSpinner: t,
                        onClick: e => {
                          var t;
                          e.preventDefault(),
                            void 0 !== o
                              ? null === (t = o(n)) ||
                                void 0 === t ||
                                t.then(e => {
                                  e && (s(''), i(!1));
                                })
                              : (s(''), i(!0));
                        },
                        type: 'submit',
                      },
                      (0, m.__)('Apply', 'woocommerce'),
                    ),
                  ),
                  (0, r.createElement)(Vt.ValidationInputError, {
                    propertyName: 'coupon',
                    elementId: l,
                  }),
                ),
              ),
            );
          },
        );
        o(265);
        const cr = { context: 'summary' },
          nr = ({
            cartCoupons: e = [],
            currency: t,
            isRemovingCoupon: o,
            removeCoupon: c,
            values: n,
          }) => {
            const { total_discount: s, total_discount_tax: a } = n,
              i = parseInt(s, 10);
            if (!i && 0 === e.length) return null;
            const l = parseInt(a, 10),
              d = (0, v.getSetting)('displayCartPricesIncludingTax', !1) ? i + l : i,
              u = (0, At.applyCheckoutFilter)({ arg: cr, filterName: 'coupons', defaultValue: e });
            return (0, r.createElement)(Vt.TotalsItem, {
              className: 'wc-block-components-totals-discount',
              currency: t,
              description:
                0 !== u.length &&
                (0, r.createElement)(
                  or,
                  {
                    screenReaderLabel: (0, m.__)('Removing coupon…', 'woocommerce'),
                    isLoading: o,
                    showSpinner: !1,
                  },
                  (0, r.createElement)(
                    'ul',
                    { className: 'wc-block-components-totals-discount__coupon-list' },
                    u.map(e =>
                      (0, r.createElement)(Vt.RemovableChip, {
                        key: 'coupon-' + e.code,
                        className: 'wc-block-components-totals-discount__coupon-list-item',
                        text: e.label,
                        screenReaderText: (0, m.sprintf) /* translators: %s Coupon code. */(
                          /* translators: %s Coupon code. */
                          (0, m.__)('Coupon: %s', 'woocommerce'),
                          e.label,
                        ),
                        disabled: o,
                        onRemove: () => {
                          c(e.code);
                        },
                        radius: 'large',
                        ariaLabel: (0, m.sprintf) /* translators: %s is a coupon code. */(
                          /* translators: %s is a coupon code. */
                          (0, m.__)('Remove coupon "%s"', 'woocommerce'),
                          e.label,
                        ),
                      }),
                    ),
                  ),
                ),
              label: d ? (0, m.__)('Discount', 'woocommerce') : (0, m.__)('Coupons', 'woocommerce'),
              value: d ? -1 * d : '-',
            });
          },
          sr = window.wc.priceFormat;
        o(7919);
        const ar = ({ currency: e, values: t, className: o }) => {
            const c =
                (0, v.getSetting)('taxesEnabled', !0) &&
                (0, v.getSetting)('displayCartPricesIncludingTax', !1),
              { total_price: s, total_tax: a, tax_lines: i } = t,
              { receiveCart: l, ...d } = $e(),
              p = (0, At.applyCheckoutFilter)({
                filterName: 'totalLabel',
                defaultValue: (0, m.__)('Total', 'woocommerce'),
                extensions: d.extensions,
                arg: { cart: d },
              }),
              h = (0, At.applyCheckoutFilter)({
                filterName: 'totalValue',
                defaultValue: '<price/>',
                extensions: d.extensions,
                arg: { cart: d },
                validation: At.productPriceValidation,
              }),
              _ = (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                className: 'wc-block-components-totals-footer-item-tax-value',
                currency: e,
                value: parseInt(s, 10),
              }),
              g = (0, u.createInterpolateElement)(h, { price: _ }),
              k = parseInt(a, 10),
              E =
                i && i.length > 0
                  ? (0, m.sprintf) /* translators: %s is a list of tax rates */(
                      /* translators: %s is a list of tax rates */
                      (0, m.__)('Including %s', 'woocommerce'),
                      i
                        .map(({ name: t, price: o }) => `${(0, sr.formatPrice)(o, e)} ${t}`)
                        .join(', '),
                    )
                  : (0, m.__)('Including <TaxAmount/> in taxes', 'woocommerce');
            return (0, r.createElement)(Vt.TotalsItem, {
              className: n()('wc-block-components-totals-footer-item', o),
              currency: e,
              label: p,
              value: g,
              description:
                c &&
                0 !== k &&
                (0, r.createElement)(
                  'p',
                  { className: 'wc-block-components-totals-footer-item-tax' },
                  (0, u.createInterpolateElement)(E, {
                    TaxAmount: (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                      className: 'wc-block-components-totals-footer-item-tax-value',
                      currency: e,
                      value: k,
                    }),
                  }),
                ),
            });
          },
          ir = ({ selectedShippingRates: e }) =>
            (0, r.createElement)(
              'div',
              {
                className:
                  'wc-block-components-totals-item__description wc-block-components-totals-shipping__via',
              },
              (0, Pe.decodeEntities)(e.filter((t, o) => e.indexOf(t) === o).join(', ')),
            );
        let lr = null;
        o(7051);
        const mr = ({ address: e, onUpdate: t, onCancel: o, addressFields: c }) => {
            const [n, s] = (0, u.useState)(e),
              { showAllValidationErrors: a } = (0, k.useDispatch)(oe.VALIDATION_STORE_KEY),
              i = (function(e) {
                const t = (0, u.useRef)(null),
                  o = (0, u.useRef)(null),
                  r = (0, u.useRef)(e);
                return (
                  (0, u.useEffect)(() => {
                    r.current = e;
                  }, [e]),
                  (0, u.useCallback)(e => {
                    if (e) (t.current = e), (o.current = e.ownerDocument.activeElement);
                    else if (o.current) {
                      var c, n, s;
                      const e =
                        null === (c = t.current) || void 0 === c
                          ? void 0
                          : c.contains(
                              null === (n = t.current) || void 0 === n
                                ? void 0
                                : n.ownerDocument.activeElement,
                            );
                      var a;
                      if (
                        (null !== (s = t.current) &&
                          void 0 !== s &&
                          s.isConnected &&
                          !e &&
                          ((null !== (a = lr) && void 0 !== a) || (lr = o.current)),
                        r.current)
                      )
                        r.current();
                      else {
                        var i;
                        const e = o.current;
                        null === (i = null != e && e.isConnected ? e : lr) ||
                          void 0 === i ||
                          i.focus();
                      }
                      lr = null;
                    }
                  }, [])
                );
              })(),
              { hasValidationErrors: l, isCustomerDataUpdating: d } = (0, k.useSelect)(e => ({
                hasValidationErrors: e(oe.VALIDATION_STORE_KEY).hasValidationErrors,
                isCustomerDataUpdating: e(oe.CART_STORE_KEY).isCustomerDataUpdating(),
              }));
            return (0, r.createElement)(
              'form',
              { className: 'wc-block-components-shipping-calculator-address', ref: i },
              (0, r.createElement)(ho, { fields: c, onChange: s, values: n }),
              (0, r.createElement)(
                zo,
                {
                  className: 'wc-block-components-shipping-calculator-address__button',
                  disabled: d,
                  onClick: r => (r.preventDefault(), Je()(n, e) ? o() : (a(), l() ? void 0 : t(n))),
                  type: 'submit',
                },
                (0, m.__)('Update', 'woocommerce'),
              ),
            );
          },
          dr = ({
            onUpdate: e = () => {},
            onCancel: t = () => {},
            addressFields: o = ['country', 'state', 'city', 'postcode'],
          }) => {
            const { shippingAddress: c } = jt(),
              n = 'wc/cart/shipping-calculator';
            return (0, r.createElement)(
              'div',
              { className: 'wc-block-components-shipping-calculator' },
              (0, r.createElement)(Vt.StoreNoticesContainer, { context: n }),
              (0, r.createElement)(mr, {
                address: c,
                addressFields: o,
                onCancel: t,
                onUpdate: t => {
                  (0, k.dispatch)(oe.CART_STORE_KEY)
                    .updateCustomerData({ shipping_address: t }, !1)
                    .then(() => {
                      (e => {
                        const { removeNotice: t } = (0, k.dispatch)('core/notices'),
                          { getNotices: o } = (0, k.select)('core/notices');
                        o(e).forEach(o => {
                          t(o.id, e);
                        });
                      })(n),
                        e(t);
                    })
                    .catch(e => {
                      (0, oe.processErrorResponse)(e, n);
                    });
                },
              }),
            );
          },
          ur = ({
            label: e = (0, m.__)('Calculate', 'woocommerce'),
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
          pr = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            isCheckout: c = !1,
          }) =>
            e
              ? (0, r.createElement)(ur, {
                  label: (0, m.__)('Add an address for shipping options', 'woocommerce'),
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                })
              : (0, r.createElement)(
                  'em',
                  null,
                  c
                    ? (0, m.__)('No shipping options available', 'woocommerce')
                    : (0, m.__)('Calculated during checkout', 'woocommerce'),
                ),
          hr = () => {
            const { pickupAddress: e } = (0, k.useSelect)(e => {
              const t = e('wc/store/cart')
                .getShippingRates()
                .flatMap(e => e.shipping_rates)
                .find(e => e.selected && We(e));
              if ((0, be.isObject)(t) && (0, be.objectHasProp)(t, 'meta_data')) {
                const e = t.meta_data.find(e => 'pickup_address' === e.key);
                if ((0, be.isObject)(e) && (0, be.objectHasProp)(e, 'value') && e.value)
                  return { pickupAddress: e.value };
              }
              return (0, be.isObject)(t), { pickupAddress: void 0 };
            });
            return void 0 === e
              ? null
              : (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-shipping-address' },
                  (0, m.sprintf) /* translators: %s: shipping method name, e.g. "Amazon Locker" */(
                    /* translators: %s: shipping method name, e.g. "Amazon Locker" */
                    (0, m.__)('Collection from %s', 'woocommerce'),
                    e,
                  ) + ' ',
                );
          },
          _r = ({ formattedLocation: e }) =>
            e
              ? (0, r.createElement)(
                  'span',
                  { className: 'wc-block-components-shipping-address' },
                  (0, m.sprintf) /* translators: %s location. */(
                    /* translators: %s location. */
                    (0, m.__)('Shipping to %s', 'woocommerce'),
                    e,
                  ) + ' ',
                )
              : null,
          gr = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            shippingAddress: c,
          }) => {
            const { isEditor: n } = w(),
              s = (0, k.useSelect)(e => e(oe.CHECKOUT_STORE_KEY).prefersCollection()),
              a = (0, v.getSetting)('activeShippingZones'),
              i =
                a.length > 1 &&
                a.some(
                  e =>
                    'Everywhere' === e.description ||
                    'Locations outside all other zones' === e.description,
                ),
              l = !!Oe(c);
            if (!l && !n && !i) return null;
            const d = l
                ? (0, m.__)('Change address', 'woocommerce')
                : (0, m.__)('Calculate shipping for your location', 'woocommerce'),
              u = Oe(c);
            return (0, r.createElement)(
              r.Fragment,
              null,
              s
                ? (0, r.createElement)(hr, null)
                : (0, r.createElement)(_r, { formattedLocation: u }),
              e &&
                (0, r.createElement)(ur, {
                  label: d,
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                }),
            );
          };
        var kr = o(1208),
          Er = (o(9345), o(2900)),
          wr = o(2478),
          br = o(8306);
        const yr = e => {
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
          vr = e => {
            switch (e) {
              case 'success':
                return Er.A;
              case 'warning':
              case 'info':
              case 'error':
                return wr.A;
              default:
                return br.A;
            }
          };
        var fr = o(195);
        const Cr = ({
          className: e,
          status: t = 'default',
          children: o,
          spokenMessage: c = o,
          onRemove: s = () => {},
          isDismissible: a = !0,
          politeness: l = yr(t),
          summary: d,
        }) => (
          ((e, t) => {
            const o = 'string' == typeof e ? e : (0, u.renderToString)(e);
            (0, u.useEffect)(() => {
              o && (0, fr.speak)(o, t);
            }, [o, t]);
          })(c, l),
          (0, r.createElement)(
            'div',
            {
              className: n()(e, 'wc-block-components-notice-banner', 'is-' + t, {
                'is-dismissible': a,
              }),
            },
            (0, r.createElement)(i.A, { icon: vr(t) }),
            (0, r.createElement)(
              'div',
              { className: 'wc-block-components-notice-banner__content' },
              d &&
                (0, r.createElement)(
                  'p',
                  { className: 'wc-block-components-notice-banner__summary' },
                  d,
                ),
              o,
            ),
            !!a &&
              (0, r.createElement)(
                zo,
                {
                  className: 'wc-block-components-notice-banner__dismiss',
                  'aria-label': (0, m.__)('Dismiss this notice', 'woocommerce'),
                  onClick: e => {
                    'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                      e.preventDefault &&
                      e.preventDefault(),
                      s();
                  },
                  removeTextWrap: !0,
                },
                (0, r.createElement)(i.A, { icon: kr.A }),
              ),
          )
        );
        var Sr = o(1359),
          Pr = o.n(Sr);
        const Nr = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
          Ar = ['target', 'href', 'rel', 'name', 'download'],
          Tr = (e, t) => {
            const o = (null == t ? void 0 : t.tags) || Nr,
              r = (null == t ? void 0 : t.attr) || Ar;
            return Pr().sanitize(e, { ALLOWED_TAGS: o, ALLOWED_ATTR: r });
          },
          xr = e => {
            const t = (0, v.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10);
            let o = (0, r.createElement)(
              r.Fragment,
              null,
              Number.isFinite(t) &&
                (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                  currency: (0, sr.getCurrencyFromPriceResponse)(e),
                  value: t,
                }),
              Number.isFinite(t) && e.delivery_time ? ' — ' : null,
              (0, Pe.decodeEntities)(e.delivery_time),
            );
            return (
              0 === t &&
                (o = (0, r.createElement)(
                  'span',
                  {
                    className:
                      'wc-block-components-shipping-rates-control__package__description--free',
                  },
                  (0, m.__)('Free', 'woocommerce'),
                )),
              { label: (0, Pe.decodeEntities)(e.name), value: e.rate_id, description: o }
            );
          },
          Rr = ({
            className: e = '',
            noResultsMessage: t,
            onSelectRate: o,
            rates: c,
            renderOption: n = xr,
            selectedRate: s,
            disabled: a = !1,
            highlightChecked: i = !1,
          }) => {
            const l = (null == s ? void 0 : s.rate_id) || '',
              m = dt(l),
              [d, p] = (0, u.useState)(() => l || (c.length > 0 ? c[0].rate_id : void 0));
            return (
              (0, u.useEffect)(() => {
                l && l !== m && l !== d && p(l);
              }, [l, d, m]),
              (0, u.useEffect)(() => {
                !d && c.length > 0 && (p(c[0].rate_id), o(c[0].rate_id));
              }, [o, c, d]),
              (0, u.useEffect)(() => {
                d && o(d);
              }, [o, d]),
              0 === c.length
                ? t
                : (0, r.createElement)(Vt.RadioControl, {
                    className: e,
                    onChange: e => {
                      p(e), o(e);
                    },
                    highlightChecked: i,
                    disabled: a,
                    selected: d,
                    options: c.map(n),
                  })
            );
          };
        o(2867);
        const Ir = ({
            packageId: e,
            className: t = '',
            noResultsMessage: o,
            renderOption: c,
            packageData: s,
            collapsible: a,
            showItems: i,
            highlightChecked: l = !1,
          }) => {
            var d;
            const { selectShippingRate: p, isSelectingRate: h } = ct(),
              _ =
                (0, k.useSelect)(e => {
                  var t, o, r;
                  return null === (t = e(oe.CART_STORE_KEY)) ||
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
              g = null != i ? i : _,
              E = null != a ? a : _,
              w = (0, r.createElement)(
                r.Fragment,
                null,
                (E || g) &&
                  (0, r.createElement)('div', {
                    className: 'wc-block-components-shipping-rates-control__package-title',
                    dangerouslySetInnerHTML: { __html: Tr(s.name) },
                  }),
                g &&
                  (0, r.createElement)(
                    'ul',
                    { className: 'wc-block-components-shipping-rates-control__package-items' },
                    Object.values(s.items).map(e => {
                      const t = (0, Pe.decodeEntities)(e.name),
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
                          m.sprintf) /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */(
                            /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                            (0, m._n)('%1$s (%2$d unit)', '%1$s (%2$d units)', o, 'woocommerce'),
                            t,
                            o,
                          ),
                        }),
                      );
                    }),
                  ),
              ),
              b = (0, u.useCallback)(
                t => {
                  p(t, e);
                },
                [e, p],
              ),
              y = {
                className: t,
                noResultsMessage: o,
                rates: s.shipping_rates,
                onSelectRate: b,
                selectedRate: s.shipping_rates.find(e => e.selected),
                renderOption: c,
                disabled: h,
                highlightChecked: l,
              },
              v = (0, u.useMemo)(() => {
                var e;
                return null == s || null === (e = s.shipping_rates) || void 0 === e
                  ? void 0
                  : e.findIndex(e => (null == e ? void 0 : e.selected));
              }, [null == s ? void 0 : s.shipping_rates]);
            return E
              ? (0, r.createElement)(
                  Vt.Panel,
                  {
                    className: n()('wc-block-components-shipping-rates-control__package', t, {
                      'wc-block-components-shipping-rates-control__package--disabled': h,
                    }),
                    initialOpen: !1,
                    title: w,
                  },
                  (0, r.createElement)(Rr, { ...y }),
                )
              : (0, r.createElement)(
                  'div',
                  {
                    className: n()('wc-block-components-shipping-rates-control__package', t, {
                      'wc-block-components-shipping-rates-control__package--disabled': h,
                      'wc-block-components-shipping-rates-control__package--first-selected':
                        !h && 0 === v,
                      'wc-block-components-shipping-rates-control__package--last-selected':
                        !h &&
                        v ===
                          (null == s || null === (d = s.shipping_rates) || void 0 === d
                            ? void 0
                            : d.length) -
                            1,
                    }),
                  },
                  w,
                  (0, r.createElement)(Rr, { ...y }),
                );
          },
          Or = ({
            packages: e,
            showItems: t,
            collapsible: o,
            noResultsMessage: c,
            renderOption: n,
            context: s = '',
          }) =>
            e.length
              ? (0, r.createElement)(
                  r.Fragment,
                  null,
                  e.map(({ package_id: e, ...a }) =>
                    (0, r.createElement)(Ir, {
                      highlightChecked: 'woocommerce/cart' !== s,
                      key: e,
                      packageId: e,
                      packageData: a,
                      collapsible: o,
                      showItems: t,
                      noResultsMessage: c,
                      renderOption: n,
                    }),
                  ),
                )
              : null,
          Mr = ({
            shippingRates: e,
            isLoadingRates: t,
            className: o,
            collapsible: c,
            showItems: n,
            noResultsMessage: s,
            renderOption: a,
            context: i,
          }) => {
            (0, u.useEffect)(() => {
              var o, r;
              t ||
                ((o = qe(e)),
                (r = (e =>
                  e.reduce(function(e, t) {
                    return e + t.shipping_rates.length;
                  }, 0))(e)),
                1 === o
                  ? (0, fr.speak)(
                      (0, m.sprintf) /* translators: %d number of shipping options found. */(
                        /* translators: %d number of shipping options found. */
                        (0, m._n)(
                          '%d shipping option was found.',
                          '%d shipping options were found.',
                          r,
                          'woocommerce',
                        ),
                        r,
                      ),
                    )
                  : (0, fr.speak)(
                      (0, m.sprintf) /* translators: %d number of shipping packages packages. */(
                        /* translators: %d number of shipping packages packages. */
                        (0, m._n)(
                          'Shipping option searched for %d package.',
                          'Shipping options searched for %d packages.',
                          o,
                          'woocommerce',
                        ),
                        o,
                      ) +
                        ' ' +
                        (0, m.sprintf) /* translators: %d number of shipping options available. */(
                          /* translators: %d number of shipping options available. */
                          (0, m._n)(
                            '%d shipping option was found',
                            '%d shipping options were found',
                            r,
                            'woocommerce',
                          ),
                          r,
                        ),
                    ));
            }, [t, e]);
            const { extensions: l, receiveCart: d, ...p } = $e(),
              h = {
                className: o,
                collapsible: c,
                showItems: n,
                noResultsMessage: s,
                renderOption: a,
                extensions: l,
                cart: p,
                components: { ShippingRatesControlPackage: Ir },
                context: i,
              },
              { isEditor: _ } = w(),
              { hasSelectedLocalPickup: g, selectedRates: k } = ct(),
              E = (0, be.isObject)(k) ? Object.values(k) : [],
              b = E.every(e => e === E[0]);
            return (0, r.createElement)(
              or,
              {
                isLoading: t,
                screenReaderLabel: (0, m.__)('Loading shipping rates…', 'woocommerce'),
                showSpinner: !0,
              },
              g &&
                'woocommerce/cart' === i &&
                e.length > 1 &&
                !b &&
                !_ &&
                (0, r.createElement)(
                  Cr,
                  { className: 'wc-block-components-notice', isDismissible: !1, status: 'warning' },
                  (0, m.__)('Multiple shipments must have the same pickup location', 'woocommerce'),
                ),
              (0, r.createElement)(At.ExperimentalOrderShippingPackages.Slot, { ...h }),
              (0, r.createElement)(
                At.ExperimentalOrderShippingPackages,
                null,
                (0, r.createElement)(Or, { packages: e, noResultsMessage: s, renderOption: a }),
              ),
            );
          },
          Br = ({ hasRates: e, shippingRates: t, isLoadingRates: o, isAddressComplete: c }) => {
            const n = e
              ? (0, m.__)('Shipping options', 'woocommerce')
              : (0, m.__)('Choose a shipping option', 'woocommerce');
            return (0, r.createElement)(
              'fieldset',
              { className: 'wc-block-components-totals-shipping__fieldset' },
              (0, r.createElement)('legend', { className: 'screen-reader-text' }, n),
              (0, r.createElement)(Mr, {
                className: 'wc-block-components-totals-shipping__options',
                noResultsMessage: (0, r.createElement)(
                  r.Fragment,
                  null,
                  c &&
                    (0, r.createElement)(
                      Cr,
                      {
                        isDismissible: !1,
                        className: 'wc-block-components-shipping-rates-control__no-results-notice',
                        status: 'warning',
                      },
                      (0, m.__)(
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
        const Dr = ({
            currency: e,
            values: t,
            showCalculator: o = !0,
            showRateSelector: c = !0,
            isCheckout: s = !1,
            className: a,
          }) => {
            const [i, l] = (0, u.useState)(!1),
              {
                shippingAddress: d,
                cartHasCalculatedShipping: p,
                shippingRates: h,
                isLoadingRates: _,
              } = $e(),
              g = (e =>
                (0, v.getSetting)('displayCartPricesIncludingTax', !1)
                  ? parseInt(e.total_shipping, 10) + parseInt(e.total_shipping_tax, 10)
                  : parseInt(e.total_shipping, 10))(t),
              E = h.some(e => e.shipping_rates.length) || g > 0,
              w = o && i,
              b = (0, k.useSelect)(e => e(oe.CHECKOUT_STORE_KEY).prefersCollection()),
              y = h.flatMap(e =>
                e.shipping_rates
                  .filter(e => (b && We(e) && e.selected) || (!b && e.selected))
                  .flatMap(e => e.name),
              ),
              f = Me(d),
              C = ((e, t, o) =>
                !e || (!t && o.some(e => !e.shipping_rates.some(e => !Ge(e.method_id)))))(E, b, h),
              S =
                0 === g
                  ? (0, r.createElement)('strong', null, (0, m.__)('Free', 'woocommerce'))
                  : g;
            return (0, r.createElement)(
              'div',
              { className: n()('wc-block-components-totals-shipping', a) },
              (0, r.createElement)(Vt.TotalsItem, {
                label: (0, m.__)('Shipping', 'woocommerce'),
                value:
                  !C && p
                    ? S
                    : (!f || s) &&
                      (0, r.createElement)(pr, {
                        showCalculator: o,
                        isCheckout: s,
                        isShippingCalculatorOpen: i,
                        setIsShippingCalculatorOpen: l,
                      }),
                description:
                  (!C && p) || (f && !s)
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(ir, { selectedShippingRates: y }),
                        (0, r.createElement)(gr, {
                          shippingAddress: d,
                          showCalculator: o,
                          isShippingCalculatorOpen: i,
                          setIsShippingCalculatorOpen: l,
                        }),
                      )
                    : null,
                currency: e,
              }),
              w &&
                (0, r.createElement)(dr, {
                  onUpdate: () => {
                    l(!1);
                  },
                  onCancel: () => {
                    l(!1);
                  },
                }),
              c &&
                p &&
                !w &&
                (0, r.createElement)(Br, {
                  hasRates: E,
                  shippingRates: h,
                  isLoadingRates: _,
                  isAddressComplete: f,
                }),
            );
          },
          Fr = () => {
            const { extensions: e, receiveCart: t, ...o } = $e(),
              c = { extensions: e, cart: o, context: 'woocommerce/checkout' };
            return (0, r.createElement)(At.ExperimentalOrderMeta.Slot, { ...c });
          },
          Lr = JSON.parse(
            '{"xY":{"align":false,"html":false,"multiple":false,"reusable":false,"inserter":false,"lock":false},"uK":{"lock":{"type":"object","default":{"remove":true}}}}',
          ),
          Ur = [
            {
              attributes: Lr.uK,
              save: () =>
                (0, r.createElement)(
                  'div',
                  { ...d.useBlockProps.save() },
                  (0, r.createElement)(d.InnerBlocks.Content, null),
                ),
              supports: Lr.xY,
              migrate: ({ attributes: e }) => [
                e,
                [
                  (0, l.createBlock)('woocommerce/checkout-order-summary-cart-items-block', {}, []),
                  (0, l.createBlock)(
                    'woocommerce/checkout-order-summary-coupon-form-block',
                    {},
                    [],
                  ),
                  (0, l.createBlock)('woocommerce/checkout-order-summary-totals-block', {}, [
                    (0, l.createBlock)('woocommerce/checkout-order-summary-subtotal-block', {}, []),
                    (0, l.createBlock)('woocommerce/checkout-order-summary-fee-block', {}, []),
                    (0, l.createBlock)('woocommerce/checkout-order-summary-discount-block', {}, []),
                    (0, l.createBlock)('woocommerce/checkout-order-summary-shipping-block', {}, []),
                    (0, l.createBlock)('woocommerce/checkout-order-summary-taxes-block', {}, []),
                  ]),
                ],
              ],
              isEligible: (e, t) =>
                !t.some(e => 'woocommerce/checkout-order-summary-totals-block' === e.name),
            },
          ],
          jr = Ur;
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: tr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: {
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
          },
          edit: ({ clientId: e }) => {
            const t = (0, d.useBlockProps)(),
              { cartTotals: o } = $e(),
              c = (0, sr.getCurrencyFromPriceResponse)(o),
              n = Dt(At.innerBlockAreas.CHECKOUT_ORDER_SUMMARY),
              s = [
                ['woocommerce/checkout-order-summary-cart-items-block', {}, []],
                ['woocommerce/checkout-order-summary-coupon-form-block', {}, []],
                ['woocommerce/checkout-order-summary-totals-block', {}, []],
              ];
            return (
              Ft({ clientId: e, registeredBlocks: n, defaultTemplate: s }),
              (0, r.createElement)(
                'div',
                { ...t },
                (0, r.createElement)(d.InnerBlocks, { allowedBlocks: n, template: s }),
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-totals-wrapper' },
                  (0, r.createElement)(ar, { currency: c, values: o }),
                ),
                (0, r.createElement)(Fr, null),
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...d.useBlockProps.save() },
              (0, r.createElement)(d.InnerBlocks.Content, null),
            ),
          deprecated: jr,
        });
        var Yr = o(8994),
          Vr = o(4133);
        const Kr = { warning: '#F0B849', error: '#CC1818', success: '#46B450', info: '#0073AA' },
          Hr = ({ status: e = 'warning', ...t }) =>
            (0, r.createElement)(
              s.SVG,
              { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...t },
              (0, r.createElement)('path', {
                d:
                  'M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z',
                stroke: Kr[e],
                strokeWidth: '1.5',
              }),
              (0, r.createElement)('path', { d: 'M13 7H11V13H13V7Z', fill: Kr[e] }),
              (0, r.createElement)('path', { d: 'M13 15H11V17H13V15Z', fill: Kr[e] }),
            );
        o(9705);
        const $r = ({ href: e, title: t, description: o, warning: c }) =>
            (0, r.createElement)(
              'a',
              {
                href: e,
                className: 'wc-block-editor-components-external-link-card',
                target: '_blank',
                rel: 'noreferrer',
              },
              (0, r.createElement)(
                'span',
                { className: 'wc-block-editor-components-external-link-card__content' },
                (0, r.createElement)(
                  'strong',
                  { className: 'wc-block-editor-components-external-link-card__title' },
                  t,
                ),
                o &&
                  (0, r.createElement)('span', {
                    className: 'wc-block-editor-components-external-link-card__description',
                    dangerouslySetInnerHTML: { __html: Tr(o) },
                  }),
                c
                  ? (0, r.createElement)(
                      'span',
                      { className: 'wc-block-editor-components-external-link-card__warning' },
                      (0, r.createElement)(i.A, {
                        icon: (0, r.createElement)(Hr, { status: 'error' }),
                      }),
                      (0, r.createElement)('span', null, c),
                    )
                  : null,
              ),
              (0, r.createElement)(
                Nt.VisuallyHidden,
                {
                  as: 'span',
                } /* translators: accessibility text */ /* translators: accessibility text */,
                (0, m.__)('(opens in a new tab)', 'woocommerce'),
              ),
              (0, r.createElement)(i.A, {
                icon: Vr.A,
                className: 'wc-block-editor-components-external-link-card__icon',
              }),
            ),
          qr = window.wp.autop,
          zr = e => e.replace(/<\/?[a-z][^>]*?>/gi, ''),
          Wr = (e, t) => e.replace(/[\s|\.\,]+$/i, '') + t,
          Gr = (e, t, o = '&hellip;', r = !0) => {
            const c = zr(e),
              n = c
                .split(' ')
                .splice(0, t)
                .join(' ');
            return n === c ? (r ? (0, qr.autop)(c) : c) : r ? (0, qr.autop)(Wr(n, o)) : Wr(n, o);
          },
          Zr = (e, t, o = !0, r = '&hellip;', c = !0) => {
            const n = zr(e),
              s = n.slice(0, t);
            if (s === n) return c ? (0, qr.autop)(n) : n;
            if (o) return (0, qr.autop)(Wr(s, r));
            const a = s.match(/([\s]+)/g),
              i = a ? a.length : 0,
              l = n.slice(0, t + i);
            return c ? (0, qr.autop)(Wr(l, r)) : Wr(l, r);
          };
        o(1637);
        const Xr = () =>
            (0, r.createElement)(
              Cr,
              {
                isDismissible: !1,
                className: 'wc-block-checkout__no-payment-methods-notice',
                status: 'error',
              },
              (0, m.__)(
                'There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.',
                'woocommerce',
              ),
            ),
          Jr = (0, r.createElement)(
            s.SVG,
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
        var Qr = o(4166),
          ec = o(3576);
        o(777);
        const tc = { bank: Qr.A, bill: ec.A, card: Yr.A, checkPayment: Jr },
          oc = ({ icon: e = '', text: t = '' }) => {
            const o = !!e,
              c = (0, u.useCallback)(
                e => o && (0, be.isString)(e) && (0, be.objectHasProp)(tc, e),
                [o],
              ),
              s = n()('wc-block-components-payment-method-label', {
                'wc-block-components-payment-method-label--with-icon': o,
              });
            return (0, r.createElement)(
              'span',
              { className: s },
              c(e) ? (0, r.createElement)(i.A, { icon: tc[e] }) : e,
              t,
            );
          },
          rc = e =>
            `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
          cc = ({ id: e, src: t = null, alt: o = '' }) =>
            t ? (0, r.createElement)('img', { className: rc(e), src: t, alt: o }) : null,
          nc = [
            { id: 'alipay', alt: 'Alipay', src: B + 'payment-methods/alipay.svg' },
            { id: 'amex', alt: 'American Express', src: B + 'payment-methods/amex.svg' },
            { id: 'bancontact', alt: 'Bancontact', src: B + 'payment-methods/bancontact.svg' },
            { id: 'diners', alt: 'Diners Club', src: B + 'payment-methods/diners.svg' },
            { id: 'discover', alt: 'Discover', src: B + 'payment-methods/discover.svg' },
            { id: 'eps', alt: 'EPS', src: B + 'payment-methods/eps.svg' },
            { id: 'giropay', alt: 'Giropay', src: B + 'payment-methods/giropay.svg' },
            { id: 'ideal', alt: 'iDeal', src: B + 'payment-methods/ideal.svg' },
            { id: 'jcb', alt: 'JCB', src: B + 'payment-methods/jcb.svg' },
            { id: 'laser', alt: 'Laser', src: B + 'payment-methods/laser.svg' },
            { id: 'maestro', alt: 'Maestro', src: B + 'payment-methods/maestro.svg' },
            { id: 'mastercard', alt: 'Mastercard', src: B + 'payment-methods/mastercard.svg' },
            { id: 'multibanco', alt: 'Multibanco', src: B + 'payment-methods/multibanco.svg' },
            { id: 'p24', alt: 'Przelewy24', src: B + 'payment-methods/p24.svg' },
            { id: 'sepa', alt: 'Sepa', src: B + 'payment-methods/sepa.svg' },
            { id: 'sofort', alt: 'Sofort', src: B + 'payment-methods/sofort.svg' },
            { id: 'unionpay', alt: 'Union Pay', src: B + 'payment-methods/unionpay.svg' },
            { id: 'visa', alt: 'Visa', src: B + 'payment-methods/visa.svg' },
            { id: 'wechat', alt: 'WeChat', src: B + 'payment-methods/wechat.svg' },
          ];
        o(4957);
        const sc = ({ icons: e = [], align: t = 'center', className: o }) => {
            const c = (e => {
              const t = {};
              return (
                e.forEach(e => {
                  let o = {};
                  'string' == typeof e && (o = { id: e, alt: e, src: null }),
                    'object' == typeof e &&
                      (o = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
                    o.id && (0, be.isString)(o.id) && !t[o.id] && (t[o.id] = o);
                }),
                Object.values(t)
              );
            })(e);
            if (0 === c.length) return null;
            const s = n()(
              'wc-block-components-payment-method-icons',
              {
                'wc-block-components-payment-method-icons--align-left': 'left' === t,
                'wc-block-components-payment-method-icons--align-right': 'right' === t,
              },
              o,
            );
            return (0, r.createElement)(
              'div',
              { className: s },
              c.map(e => {
                const t = { ...e, ...((o = e.id), nc.find(e => e.id === o) || {}) };
                var o;
                return (0, r.createElement)(cc, { key: 'payment-method-icon-' + e.id, ...t });
              }),
            );
          },
          ac = (e = '') => {
            const { cartCoupons: t, cartIsLoading: o } = $e(),
              { createErrorNotice: r } = (0, k.useDispatch)('core/notices'),
              { createNotice: c } = (0, k.useDispatch)('core/notices'),
              { setValidationErrors: n } = (0, k.useDispatch)(oe.VALIDATION_STORE_KEY),
              { isApplyingCoupon: s, isRemovingCoupon: a } = (0, k.useSelect)(
                e => {
                  const t = e(oe.CART_STORE_KEY);
                  return {
                    isApplyingCoupon: t.isApplyingCoupon(),
                    isRemovingCoupon: t.isRemovingCoupon(),
                  };
                },
                [r, c],
              ),
              { applyCoupon: i, removeCoupon: l } = (0, k.useDispatch)(oe.CART_STORE_KEY),
              d = (0, k.useSelect)(e => e(oe.CHECKOUT_STORE_KEY).getOrderId());
            return {
              appliedCoupons: t,
              isLoading: o,
              applyCoupon: t =>
                i(t)
                  .then(
                    () => (
                      (0, At.applyCheckoutFilter)({
                        filterName: 'showApplyCouponNotice',
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        c(
                          'info',
                          (0, m.sprintf) /* translators: %s coupon code. */(
                            /* translators: %s coupon code. */
                            (0, m.__)(
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
                      return d &&
                        d > 0 &&
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
                      n({ coupon: { message: (0, Pe.decodeEntities)(t), hidden: !1 } }),
                      Promise.resolve(!1)
                    );
                  }),
              removeCoupon: t =>
                l(t)
                  .then(
                    () => (
                      (0, At.applyCheckoutFilter)({
                        filterName: 'showRemoveCouponNotice',
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        c(
                          'info',
                          (0, m.sprintf) /* translators: %s coupon code. */(
                            /* translators: %s coupon code. */
                            (0, m.__)(
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
              isRemovingCoupon: a,
            };
          },
          ic = (e, t) => {
            const o = [],
              r = (t, o) => {
                const r = o + '_tax',
                  c =
                    (0, be.objectHasProp)(e, o) && (0, be.isString)(e[o]) ? parseInt(e[o], 10) : 0;
                return {
                  key: o,
                  label: t,
                  value: c,
                  valueWithTax:
                    c +
                    ((0, be.objectHasProp)(e, r) && (0, be.isString)(e[r])
                      ? parseInt(e[r], 10)
                      : 0),
                };
              };
            return (
              o.push(r((0, m.__)('Subtotal:', 'woocommerce'), 'total_items')),
              o.push(r((0, m.__)('Fees:', 'woocommerce'), 'total_fees')),
              o.push(r((0, m.__)('Discount:', 'woocommerce'), 'total_discount')),
              o.push({
                key: 'total_tax',
                label: (0, m.__)('Taxes:', 'woocommerce'),
                value: parseInt(e.total_tax, 10),
                valueWithTax: parseInt(e.total_tax, 10),
              }),
              t && o.push(r((0, m.__)('Shipping:', 'woocommerce'), 'total_shipping')),
              o
            );
          },
          lc = () => {
            const {
                onCheckoutBeforeProcessing: e,
                onCheckoutValidationBeforeProcessing: t,
                onCheckoutAfterProcessingWithSuccess: o,
                onCheckoutAfterProcessingWithError: r,
                onSubmit: c,
                onCheckoutSuccess: n,
                onCheckoutFail: s,
                onCheckoutValidation: a,
              } = kt(),
              { isCalculating: i, isComplete: l, isIdle: d, isProcessing: p, customerId: h } = (0,
              k.useSelect)(e => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  isComplete: t.isComplete(),
                  isIdle: t.isIdle(),
                  isProcessing: t.isProcessing(),
                  customerId: t.getCustomerId(),
                  isCalculating: t.isCalculating(),
                };
              }),
              { paymentStatus: _, activePaymentMethod: g, shouldSavePayment: E } = (0, k.useSelect)(
                e => {
                  const t = e(oe.PAYMENT_STORE_KEY);
                  return {
                    paymentStatus: {
                      get isPristine() {
                        return (
                          ce()('isPristine', {
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
                          ce()('isFinished', {
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
                          ce()('hasFailed', {
                            since: '9.6.0',
                            plugin: 'WooCommerce Blocks',
                            link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
                          }),
                          t.hasPaymentError()
                        );
                      },
                      get isSuccessful() {
                        return (
                          ce()('isSuccessful', {
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
                },
              ),
              { __internalSetExpressPaymentError: w } = (0, k.useDispatch)(oe.PAYMENT_STORE_KEY),
              { onPaymentProcessing: b, onPaymentSetup: y } = (0, u.useContext)(le),
              {
                shippingErrorStatus: f,
                shippingErrorTypes: C,
                onShippingRateSuccess: S,
                onShippingRateFail: P,
                onShippingRateSelectSuccess: N,
                onShippingRateSelectFail: A,
              } = lt(),
              {
                shippingRates: T,
                isLoadingRates: x,
                selectedRates: R,
                isSelectingRate: I,
                selectShippingRate: O,
                needsShipping: M,
              } = ct(),
              { billingAddress: B, shippingAddress: D } = (0, k.useSelect)(e =>
                e(oe.CART_STORE_KEY).getCustomerData(),
              ),
              { setShippingAddress: F } = (0, k.useDispatch)(oe.CART_STORE_KEY),
              { cartItems: L, cartFees: U, cartTotals: j, extensions: Y } = $e(),
              { appliedCoupons: V } = ac(),
              K = (0, u.useRef)(ic(j, M)),
              H = (0, u.useRef)({
                label: (0, m.__)('Total', 'woocommerce'),
                value: parseInt(j.total_price, 10),
              });
            (0, u.useEffect)(() => {
              (K.current = ic(j, M)),
                (H.current = {
                  label: (0, m.__)('Total', 'woocommerce'),
                  value: parseInt(j.total_price, 10),
                });
            }, [j, M]);
            const $ = (0, u.useCallback)(
              (e = '') => {
                ce()(
                  'setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).',
                  {
                    alternative: '',
                    plugin: 'woocommerce-gutenberg-products-block',
                    link:
                      'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228',
                  },
                ),
                  w(e);
              },
              [w],
            );
            return {
              activePaymentMethod: g,
              billing: {
                appliedCoupons: V,
                billingAddress: B,
                billingData: B,
                cartTotal: H.current,
                cartTotalItems: K.current,
                currency: (0, sr.getCurrencyFromPriceResponse)(j),
                customerId: h,
                displayPricesIncludingTax: (0, v.getSetting)('displayCartPricesIncludingTax', !1),
              },
              cartData: { cartItems: L, cartFees: U, extensions: Y },
              checkoutStatus: { isCalculating: i, isComplete: l, isIdle: d, isProcessing: p },
              components: {
                LoadingMask: or,
                PaymentMethodIcons: sc,
                PaymentMethodLabel: oc,
                ValidationInputError: Vt.ValidationInputError,
              },
              emitResponse: { noticeContexts: ve, responseTypes: ye },
              eventRegistration: {
                onCheckoutAfterProcessingWithError: r,
                onCheckoutAfterProcessingWithSuccess: o,
                onCheckoutBeforeProcessing: e,
                onCheckoutValidationBeforeProcessing: t,
                onCheckoutSuccess: n,
                onCheckoutFail: s,
                onCheckoutValidation: a,
                onPaymentProcessing: b,
                onPaymentSetup: y,
                onShippingRateFail: P,
                onShippingRateSelectFail: A,
                onShippingRateSelectSuccess: N,
                onShippingRateSuccess: S,
              },
              onSubmit: c,
              paymentStatus: _,
              setExpressPaymentError: $,
              shippingData: {
                isSelectingRate: I,
                needsShipping: M,
                selectedRates: R,
                setSelectedRates: O,
                setShippingAddress: F,
                shippingAddress: D,
                shippingRates: T,
                shippingRatesLoading: x,
              },
              shippingStatus: { shippingErrorStatus: f, shippingErrorTypes: C },
              shouldSavePayment: E,
            };
          };
        class mc extends u.Component {
          constructor(...e) {
            super(...e), (0, O.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const { hasError: e, errorMessage: t } = this.state,
              { isEditor: o } = this.props;
            if (e) {
              let e = (0, m.__)(
                'We are experiencing difficulties with this payment method. Please contact us for assistance.',
                'woocommerce',
              );
              (o || v.CURRENT_USER_IS_ADMIN) &&
                (e =
                  t ||
                  (0, m.__)(
                    "There was an error with this payment method. Please verify it's configured correctly.",
                    'woocommerce',
                  ));
              const c = [{ id: '0', content: e, isDismissible: !1, status: 'error' }];
              return (0, r.createElement)(Vt.StoreNoticesContainer, {
                additionalNotices: c,
                context: ve.PAYMENTS,
              });
            }
            return this.props.children;
          }
        }
        const dc = mc,
          uc = ({ children: e, showSaveOption: t }) => {
            const { isEditor: o } = w(),
              { shouldSavePaymentMethod: c, customerId: n } = (0, k.useSelect)(e => {
                const t = e(oe.PAYMENT_STORE_KEY),
                  o = e(oe.CHECKOUT_STORE_KEY);
                return {
                  shouldSavePaymentMethod: t.getShouldSavePaymentMethod(),
                  customerId: o.getCustomerId(),
                };
              }),
              { __internalSetShouldSavePaymentMethod: s } = (0, k.useDispatch)(
                oe.PAYMENT_STORE_KEY,
              );
            return (0, r.createElement)(
              dc,
              { isEditor: o },
              e,
              n > 0 &&
                t &&
                (0, r.createElement)(Vt.CheckboxControl, {
                  className: 'wc-block-components-payment-methods__save-card-info',
                  label: (0, m.__)(
                    'Save payment information to my account for future purchases.',
                    'woocommerce',
                  ),
                  checked: c,
                  onChange: () => s(!c),
                }),
            );
          },
          pc = 'wc/store/payment',
          hc = () => {
            const {
                activeSavedToken: e,
                activePaymentMethod: t,
                isExpressPaymentMethodActive: o,
                savedPaymentMethods: c,
                availablePaymentMethods: s,
              } = (0, k.useSelect)(e => {
                const t = e(pc);
                return {
                  activeSavedToken: t.getActiveSavedToken(),
                  activePaymentMethod: t.getActivePaymentMethod(),
                  isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
                  savedPaymentMethods: t.getSavedPaymentMethods(),
                  availablePaymentMethods: t.getAvailablePaymentMethods(),
                };
              }),
              { __internalSetActivePaymentMethod: a } = (0, k.useDispatch)(pc),
              i = (0, yt.getPaymentMethods)(),
              { ...l } = lc(),
              { removeNotice: m } = (0, k.useDispatch)('core/notices'),
              { dispatchCheckoutEvent: d } = rt(),
              { isEditor: p } = w(),
              h = Object.keys(s).map(e => {
                const { edit: t, content: o, label: c, supports: n } = i[e],
                  s = p ? t : o;
                return {
                  value: e,
                  label:
                    'string' == typeof c ? c : (0, u.cloneElement)(c, { components: l.components }),
                  name: `wc-saved-payment-method-token-${e}`,
                  content: (0, r.createElement)(
                    uc,
                    { showSaveOption: n.showSaveOption },
                    (0, u.cloneElement)(s, { __internalSetActivePaymentMethod: a, ...l }),
                  ),
                };
              }),
              _ = (0, u.useCallback)(
                e => {
                  a(e),
                    m('wc-payment-error', ve.PAYMENTS),
                    d('set-active-payment-method', { value: e });
                },
                [d, m, a],
              ),
              g = 0 === Object.keys(c).length && 1 === Object.keys(i).length,
              E = n()({ 'disable-radio-control': g });
            return o
              ? null
              : (0, r.createElement)(Vt.RadioControlAccordion, {
                  highlightChecked: !0,
                  id: 'wc-payment-method-options',
                  className: E,
                  selected: e ? null : t,
                  onChange: _,
                  options: h,
                });
          },
          _c = 'wc/store/cart',
          gc = ((0, m.__)('Unable to get cart data from the API.', 'woocommerce'), []),
          kc = [],
          Ec = {},
          wc = {};
        Object.keys(v.defaultFields).forEach(e => {
          wc[e] = '';
        }),
          delete wc.email;
        const bc = {};
        Object.keys(v.defaultFields).forEach(e => {
          bc[e] = '';
        });
        const yc = {
            cartItemsPendingQuantity: [],
            cartItemsPendingDelete: [],
            cartData: {
              coupons: [],
              shippingRates: [],
              shippingAddress: wc,
              billingAddress: bc,
              items: [],
              itemsCount: 0,
              itemsWeight: 0,
              crossSells: [],
              needsShipping: !0,
              needsPayment: !1,
              hasCalculatedShipping: !0,
              fees: [],
              totals: {
                currency_code: '',
                currency_symbol: '',
                currency_minor_unit: 2,
                currency_decimal_separator: '.',
                currency_thousand_separator: ',',
                currency_prefix: '',
                currency_suffix: '',
                total_items: '0',
                total_items_tax: '0',
                total_fees: '0',
                total_fees_tax: '0',
                total_discount: '0',
                total_discount_tax: '0',
                total_shipping: '0',
                total_shipping_tax: '0',
                total_price: '0',
                total_tax: '0',
                tax_lines: [],
              },
              errors: gc,
              paymentMethods: [],
              paymentRequirements: [],
              extensions: Ec,
            },
            metaData: {
              updatingCustomerData: !1,
              updatingSelectedRate: !1,
              applyingCoupon: '',
              removingCoupon: '',
              isCartDataStale: !1,
            },
            errors: kc,
          },
          vc = ({ method: e, expires: t }) => {
            var o, r, c;
            return (0,
            m.sprintf) /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */(
              /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
              (0, m.__)('%1$s ending in %2$s (expires %3$s)', 'woocommerce'),
              null !==
                (o =
                  null !== (r = null == e ? void 0 : e.display_brand) && void 0 !== r
                    ? r
                    : null == e || null === (c = e.networks) || void 0 === c
                    ? void 0
                    : c.preferred) && void 0 !== o
                ? o
                : e.brand,
              e.last4,
              t,
            );
          },
          fc = ({ method: e }) =>
            e.brand && e.last4
              ? (0,
                m.sprintf) /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */(
                  /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */
                  (0, m.__)('%1$s ending in %2$s', 'woocommerce'),
                  e.brand,
                  e.last4,
                )
              : (0, m.sprintf) /* translators: %s is the name of the payment method gateway. */(
                  /* translators: %s is the name of the payment method gateway. */
                  (0, m.__)('Saved token for %s', 'woocommerce'),
                  e.gateway,
                ),
          Cc = () => {
            var e;
            const { activeSavedToken: t, activePaymentMethod: o, savedPaymentMethods: c } = (0,
              k.useSelect)(e => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  activeSavedToken: t.getActiveSavedToken(),
                  activePaymentMethod: t.getActivePaymentMethod(),
                  savedPaymentMethods: t.getSavedPaymentMethods(),
                };
              }),
              { __internalSetActivePaymentMethod: n } = (0, k.useDispatch)(oe.PAYMENT_STORE_KEY),
              s = (() => {
                let e;
                if ((0, k.select)('core/editor')) {
                  const t = {
                    cartCoupons: tt.coupons,
                    cartItems: tt.items,
                    crossSellsProducts: tt.cross_sells,
                    cartFees: tt.fees,
                    cartItemsCount: tt.items_count,
                    cartItemsWeight: tt.items_weight,
                    cartNeedsPayment: tt.needs_payment,
                    cartNeedsShipping: tt.needs_shipping,
                    cartItemErrors: gc,
                    cartTotals: tt.totals,
                    cartIsLoading: !1,
                    cartErrors: kc,
                    billingData: yc.cartData.billingAddress,
                    billingAddress: yc.cartData.billingAddress,
                    shippingAddress: yc.cartData.shippingAddress,
                    extensions: Ec,
                    shippingRates: tt.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: tt.has_calculated_shipping,
                    paymentRequirements: tt.payment_requirements,
                    receiveCart: () => {},
                  };
                  e = {
                    cart: t,
                    cartTotals: t.cartTotals,
                    cartNeedsShipping: t.cartNeedsShipping,
                    billingData: t.billingAddress,
                    billingAddress: t.billingAddress,
                    shippingAddress: t.shippingAddress,
                    selectedShippingMethods: Ze(t.shippingRates),
                    paymentMethods: tt.payment_methods,
                    paymentRequirements: t.paymentRequirements,
                  };
                } else {
                  const t = (0, k.select)(_c),
                    o = t.getCartData(),
                    r = t.getCartErrors(),
                    c = t.getCartTotals(),
                    n = !t.hasFinishedResolution('getCartData'),
                    s = t.isCustomerDataUpdating(),
                    a = Ze(o.shippingRates);
                  e = {
                    cart: {
                      cartCoupons: o.coupons,
                      cartItems: o.items,
                      crossSellsProducts: o.crossSells,
                      cartFees: o.fees,
                      cartItemsCount: o.itemsCount,
                      cartItemsWeight: o.itemsWeight,
                      cartNeedsPayment: o.needsPayment,
                      cartNeedsShipping: o.needsShipping,
                      cartItemErrors: o.errors,
                      cartTotals: c,
                      cartIsLoading: n,
                      cartErrors: r,
                      billingData: Ie(o.billingAddress),
                      billingAddress: Ie(o.billingAddress),
                      shippingAddress: Ie(o.shippingAddress),
                      extensions: o.extensions,
                      shippingRates: o.shippingRates,
                      isLoadingRates: s,
                      cartHasCalculatedShipping: o.hasCalculatedShipping,
                      paymentRequirements: o.paymentRequirements,
                      receiveCart: (0, k.dispatch)(_c).receiveCart,
                    },
                    cartTotals: o.totals,
                    cartNeedsShipping: o.needsShipping,
                    billingData: o.billingAddress,
                    billingAddress: o.billingAddress,
                    shippingAddress: o.shippingAddress,
                    selectedShippingMethods: a,
                    paymentMethods: o.paymentMethods,
                    paymentRequirements: o.paymentRequirements,
                  };
                }
                return e;
              })(),
              a = (0, yt.getPaymentMethods)(),
              i = lc(),
              { removeNotice: l } = (0, k.useDispatch)('core/notices'),
              { dispatchCheckoutEvent: m } = rt(),
              d = (0, u.useMemo)(() => {
                const e = Object.keys(c),
                  t = new Set(e.flatMap(e => c[e].map(e => e.method.gateway))),
                  o = Array.from(t).filter(e => {
                    var t;
                    return null === (t = a[e]) || void 0 === t ? void 0 : t.canMakePayment(s);
                  });
                return e
                  .flatMap(e =>
                    c[e].map(t => {
                      if (!o.includes(t.method.gateway)) return;
                      const r = 'cc' === e || 'echeck' === e,
                        c = t.method.gateway;
                      return {
                        name: `wc-saved-payment-method-token-${c}`,
                        label: r ? vc(t) : fc(t),
                        value: t.tokenId.toString(),
                        onChange: e => {
                          n(c, {
                            token: e,
                            payment_method: c,
                            [`wc-${c}-payment-token`]: e.toString(),
                            isSavedToken: !0,
                          }),
                            l('wc-payment-error', ve.PAYMENTS),
                            m('set-active-payment-method', { paymentMethodSlug: c });
                        },
                      };
                    }),
                  )
                  .filter(e => void 0 !== e);
              }, [c, a, n, l, m, s]),
              p =
                t &&
                a[o] &&
                void 0 !== (null === (e = a[o]) || void 0 === e ? void 0 : e.savedTokenComponent) &&
                !(0, be.isNull)(a[o].savedTokenComponent)
                  ? (0, u.cloneElement)(a[o].savedTokenComponent, { token: t, ...i })
                  : null;
            return d.length > 0
              ? (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(Vt.RadioControl, {
                    highlightChecked: !0,
                    id: 'wc-payment-method-saved-tokens',
                    selected: t,
                    options: d,
                    onChange: () => {},
                  }),
                  p,
                )
              : null;
          };
        o(181);
        const Sc = () => {
            const {
              paymentMethodsInitialized: e,
              availablePaymentMethods: t,
              savedPaymentMethods: o,
            } = (0, k.useSelect)(e => {
              const t = e(oe.PAYMENT_STORE_KEY);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
                savedPaymentMethods: t.getSavedPaymentMethods(),
              };
            });
            return e && 0 === Object.keys(t).length
              ? (0, r.createElement)(Xr, null)
              : (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(Cc, null),
                  Object.keys(o).length > 0 &&
                    (0, r.createElement)(Vt.Label, {
                      label: (0, m.__)('Use another payment method.', 'woocommerce'),
                      screenReaderLabel: (0, m.__)(
                        'Other available payment methods',
                        'woocommerce',
                      ),
                      wrapperElement: 'p',
                      wrapperProps: {
                        className: [
                          'wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned',
                        ],
                      },
                    }),
                  (0, r.createElement)(hc, null),
                );
          },
          Pc = () => (0, r.createElement)(Sc, null),
          Nc = {
            ...yo({
              defaultTitle: (0, m.__)('Payment options', 'woocommerce'),
              defaultDescription: '',
            }),
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)('woocommerce/checkout-payment-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: Yr.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: Nc,
          edit: ({ attributes: e, setAttributes: t }) => {
            const o = (0, v.getSetting)('globalPaymentMethods'),
              { incompatiblePaymentMethods: c } = (0, k.useSelect)(e => {
                const { getIncompatiblePaymentMethods: t } = e(oe.PAYMENT_STORE_KEY);
                return { incompatiblePaymentMethods: t() };
              }, []),
              s = (0, m.__)('Incompatible with block-based checkout', 'woocommerce'),
              a = M.wordCountType;
            return (0, r.createElement)(
              Ht,
              {
                attributes: e,
                setAttributes: t,
                className: n()(
                  'wc-block-checkout__payment-method',
                  null == e ? void 0 : e.className,
                ),
              },
              (0, r.createElement)(
                d.InspectorControls,
                null,
                o.length > 0 &&
                  (0, r.createElement)(
                    Nt.PanelBody,
                    { title: (0, m.__)('Methods', 'woocommerce') },
                    (0, r.createElement)(
                      'p',
                      { className: 'wc-block-checkout__controls-text' },
                      (0, m.__)(
                        'You currently have the following payment integrations active.',
                        'woocommerce',
                      ),
                    ),
                    o.map(e => {
                      const t = !!c[e.id];
                      let o;
                      return (
                        (o =
                          'words' === a
                            ? Gr(e.description, 30, void 0, !1)
                            : Zr(
                                e.description,
                                30,
                                'characters_including_spaces' === a,
                                void 0,
                                !1,
                              )),
                        (0, r.createElement)($r, {
                          key: e.id,
                          href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=checkout&section=${e.id}`,
                          title: e.title,
                          description: o,
                          ...(t ? { warning: s } : {}),
                        })
                      );
                    }),
                    (0, r.createElement)(
                      Nt.ExternalLink,
                      { href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=checkout` },
                      (0, m.__)('Manage payment methods', 'woocommerce'),
                    ),
                  ),
              ),
              (0, r.createElement)(Xt, null, (0, r.createElement)(Pc, null)),
              (0, r.createElement)($t, { block: At.innerBlockAreas.PAYMENT_METHODS }),
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...d.useBlockProps.save() },
              (0, r.createElement)(qt, null),
            ),
        });
        const Ac = (0, r.createElement)(
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
          ),
          Tc = () =>
            ((e = !1) => {
              const {
                  paymentMethodsInitialized: t,
                  expressPaymentMethodsInitialized: o,
                  availablePaymentMethods: r,
                  availableExpressPaymentMethods: c,
                } = (0, k.useSelect)(e => {
                  const t = e(oe.PAYMENT_STORE_KEY);
                  return {
                    paymentMethodsInitialized: t.paymentMethodsInitialized(),
                    expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                    availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                    availablePaymentMethods: t.getAvailablePaymentMethods(),
                  };
                }),
                n = Object.values(r).map(({ name: e }) => e),
                s = Object.values(c).map(({ name: e }) => e),
                a = (0, yt.getPaymentMethods)(),
                i = (0, yt.getExpressPaymentMethods)(),
                l = Object.keys(a).reduce((e, t) => (n.includes(t) && (e[t] = a[t]), e), {}),
                m = Object.keys(i).reduce((e, t) => (s.includes(t) && (e[t] = i[t]), e), {}),
                d = ao(l),
                u = ao(m);
              return { paymentMethods: e ? u : d, isInitialized: e ? o : t };
            })(!0),
          xc = () => {
            const { isEditor: e } = w(),
              { activePaymentMethod: t, paymentMethodData: o } = (0, k.useSelect)(e => {
                const t = e(pc);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                };
              }),
              {
                __internalSetActivePaymentMethod: c,
                __internalSetExpressPaymentStarted: n,
                __internalSetPaymentIdle: s,
                __internalSetPaymentError: a,
                __internalSetPaymentMethodData: i,
                __internalSetExpressPaymentError: l,
              } = (0, k.useDispatch)(pc),
              { paymentMethods: d } = Tc(),
              p = lc(),
              h = (0, u.useRef)(t),
              _ = (0, u.useRef)(o),
              g = (0, u.useCallback)(
                e => () => {
                  (h.current = t), (_.current = o), n(), c(e);
                },
                [t, o, c, n],
              ),
              E = (0, u.useCallback)(() => {
                s(), c(h.current, _.current);
              }, [c, s]),
              b = (0, u.useCallback)(
                e => {
                  a(), i(e), l(e), c(h.current, _.current);
                },
                [c, a, i, l],
              ),
              y = (0, u.useCallback)(
                (e = '') => {
                  ce()('Express Payment Methods should use the provided onError handler instead.', {
                    alternative: 'onError',
                    plugin: 'woocommerce-gutenberg-products-block',
                    link:
                      'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228',
                  }),
                    e ? b(e) : l('');
                },
                [l, b],
              ),
              v = Object.entries(d),
              f =
                v.length > 0
                  ? v.map(([t, o]) => {
                      const c = e ? o.edit : o.content;
                      return (0, u.isValidElement)(c)
                        ? (0, r.createElement)(
                            'li',
                            { key: t, id: `express-payment-method-${t}` },
                            (0, u.cloneElement)(c, {
                              ...p,
                              onClick: g(t),
                              onClose: E,
                              onError: b,
                              setExpressPaymentError: y,
                            }),
                          )
                        : null;
                    })
                  : (0, r.createElement)(
                      'li',
                      { key: 'noneRegistered' },
                      (0, m.__)('No registered Payment Methods', 'woocommerce'),
                    );
            return (0, r.createElement)(
              dc,
              { isEditor: e },
              (0, r.createElement)(
                'ul',
                { className: 'wc-block-components-express-payment__event-buttons' },
                f,
              ),
            );
          };
        o(9569);
        const Rc = () => {
            const {
                isCalculating: e,
                isProcessing: t,
                isAfterProcessing: o,
                isBeforeProcessing: c,
                isComplete: n,
                hasError: s,
              } = (0, k.useSelect)(e => {
                const t = e(oe.CHECKOUT_STORE_KEY);
                return {
                  isCalculating: t.isCalculating(),
                  isProcessing: t.isProcessing(),
                  isAfterProcessing: t.isAfterProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  hasError: t.hasError(),
                };
              }),
              {
                availableExpressPaymentMethods: a,
                expressPaymentMethodsInitialized: i,
                isExpressPaymentMethodActive: l,
              } = (0, k.useSelect)(e => {
                const t = e(oe.PAYMENT_STORE_KEY);
                return {
                  availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                  expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                  isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
                };
              }),
              { isEditor: d } = w();
            if (!i || (i && 0 === Object.keys(a).length))
              return d || v.CURRENT_USER_IS_ADMIN
                ? (0, r.createElement)(Vt.StoreNoticesContainer, { context: ve.EXPRESS_PAYMENTS })
                : null;
            const u = t || o || c || (n && !s);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                or,
                { isLoading: e || u || l },
                (0, r.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-components-express-payment wc-block-components-express-payment--checkout',
                  },
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-components-express-payment__title-container' },
                    (0, r.createElement)(
                      Vt.Title,
                      {
                        className: 'wc-block-components-express-payment__title',
                        headingLevel: '2',
                      },
                      (0, m.__)('Express Checkout', 'woocommerce'),
                    ),
                  ),
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-components-express-payment__content' },
                    (0, r.createElement)(Vt.StoreNoticesContainer, {
                      context: ve.EXPRESS_PAYMENTS,
                    }),
                    (0, r.createElement)(xc, null),
                  ),
                ),
              ),
              (0, r.createElement)(
                'div',
                {
                  className:
                    'wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--checkout',
                },
                (0, m.__)('Or continue below', 'woocommerce'),
              ),
            );
          },
          Ic = ({ className: e }) => {
            const { cartNeedsPayment: t } = $e();
            return t
              ? (0, r.createElement)('div', { className: e }, (0, r.createElement)(Rc, null))
              : null;
          };
        o(9865),
          (0, l.registerBlockType)('woocommerce/checkout-express-payment-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                style: { fill: 'none' },
                icon: Ac,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ attributes: e }) => {
              const { paymentMethods: t, isInitialized: o } = Tc(),
                c = Object.keys(t).length > 0,
                s = (0, d.useBlockProps)({
                  className: n()(
                    {
                      'wp-block-woocommerce-checkout-express-payment-block--has-express-payment-methods': c,
                    },
                    null == e ? void 0 : e.className,
                  ),
                  attributes: e,
                });
              return o && c
                ? (0, r.createElement)('div', { ...s }, (0, r.createElement)(Ic, null))
                : null;
            },
            save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
          });
        var Oc = o(1176),
          Mc = o(3705);
        const Bc = ({ minRate: e, maxRate: t, multiple: o = !1 }) => {
          if (void 0 === e || void 0 === t) return null;
          const c = (0, v.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10),
            n = (0, v.getSetting)('displayCartPricesIncludingTax', !1)
              ? parseInt(t.price, 10) + parseInt(t.taxes, 10)
              : parseInt(t.price, 10),
            s =
              0 === c
                ? (0, r.createElement)('em', null, (0, m.__)('free', 'woocommerce'))
                : (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                    currency: (0, sr.getCurrencyFromPriceResponse)(e),
                    value: c,
                  });
          return (0, r.createElement)(
            'span',
            { className: 'wc-block-checkout__shipping-method-option-price' },
            c !== n || o
              ? (0, u.createInterpolateElement)(
                  0 === c && 0 === n ? '<price />' : (0, m.__)('from <price />', 'woocommerce'),
                  { price: s },
                )
              : s,
          );
        };
        function Dc(e) {
          return e
            ? {
                min: e.reduce(
                  (e, t) =>
                    Ge(t.method_id)
                      ? e
                      : void 0 === e || parseInt(t.price, 10) < parseInt(e.price, 10)
                      ? t
                      : e,
                  void 0,
                ),
                max: e.reduce(
                  (e, t) =>
                    Ge(t.method_id)
                      ? e
                      : void 0 === e || parseInt(t.price, 10) > parseInt(e.price, 10)
                      ? t
                      : e,
                  void 0,
                ),
              }
            : { min: void 0, max: void 0 };
        }
        function Fc(e) {
          return e
            ? {
                min: e.reduce(
                  (e, t) => (Ge(t.method_id) && (void 0 === e || t.price < e.price) ? t : e),
                  void 0,
                ),
                max: e.reduce(
                  (e, t) => (Ge(t.method_id) && (void 0 === e || t.price > e.price) ? t : e),
                  void 0,
                ),
              }
            : { min: void 0, max: void 0 };
        }
        o(7694);
        const Lc = (0, m.__)('Pickup', 'woocommerce'),
          Uc = (0, m.__)('Ship', 'woocommerce'),
          jc = ({
            checked: e,
            rate: t,
            showPrice: o,
            showIcon: c,
            toggleText: s,
            setAttributes: a,
            onClick: l,
          }) =>
            (0, r.createElement)(
              zo,
              {
                className: n()('wc-block-checkout__shipping-method-option', {
                  'wc-block-checkout__shipping-method-option--selected': 'pickup' === e,
                }),
                onClick: l,
                removeTextWrap: !0,
              },
              !0 === c &&
                (0, r.createElement)(i.A, {
                  icon: Mc.A,
                  size: 28,
                  className: 'wc-block-checkout__shipping-method-option-icon',
                }),
              (0, r.createElement)(d.RichText, {
                value: s,
                placeholder: Lc,
                tagName: 'span',
                className: 'wc-block-checkout__shipping-method-option-title',
                onChange: e => a({ localPickupText: e }),
                __unstableDisableFormats: !0,
                preserveWhiteSpace: !0,
              }),
              !0 === o && (0, r.createElement)(Bc, { minRate: t.min, maxRate: t.max }),
            ),
          Yc = ({
            checked: e,
            rate: t,
            showPrice: o,
            showIcon: c,
            toggleText: s,
            setAttributes: a,
            onClick: l,
          }) => {
            const u =
              void 0 === t.min
                ? (0, r.createElement)(
                    'span',
                    { className: 'wc-block-checkout__shipping-method-option-price' },
                    (0, m.__)('calculated with an address', 'woocommerce'),
                  )
                : (0, r.createElement)(Bc, { minRate: t.min, maxRate: t.max });
            return (0, r.createElement)(
              zo,
              {
                className: n()('wc-block-checkout__shipping-method-option', {
                  'wc-block-checkout__shipping-method-option--selected': 'shipping' === e,
                }),
                onClick: l,
                removeTextWrap: !0,
              },
              !0 === c &&
                (0, r.createElement)(i.A, {
                  icon: Oc.A,
                  size: 28,
                  className: 'wc-block-checkout__shipping-method-option-icon',
                }),
              (0, r.createElement)(d.RichText, {
                value: s,
                placeholder: Uc,
                tagName: 'span',
                className: 'wc-block-checkout__shipping-method-option-title',
                onChange: e => a({ shippingText: e }),
                __unstableDisableFormats: !0,
                preserveWhiteSpace: !0,
              }),
              !0 === o && u,
            );
          },
          Vc = {
            ...yo({
              defaultTitle: (0, m.__)('Delivery', 'woocommerce'),
              defaultDescription: (0, m.__)(
                'Select how you would like to receive your order.',
                'woocommerce',
              ),
            }),
            className: { type: 'string', default: '' },
            showIcon: { type: 'boolean', default: !0 },
            showPrice: { type: 'boolean', default: !1 },
            localPickupText: { type: 'string', default: Lc },
            shippingText: { type: 'string', default: Uc },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
          };
        (0, l.registerBlockType)('woocommerce/checkout-shipping-method-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: Oc.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: Vc,
          edit: ({ attributes: e, setAttributes: t }) => {
            var o, c;
            (0, u.useEffect)(() => {
              const o = (0, v.getSetting)('localPickupText', e.localPickupText);
              t({ localPickupText: o });
            }, [t]);
            const { setPrefersCollection: s } = (0, k.useDispatch)(oe.CHECKOUT_STORE_KEY),
              { prefersCollection: a } = (0, k.useSelect)(e => ({
                prefersCollection: e(oe.CHECKOUT_STORE_KEY).prefersCollection(),
              })),
              { showPrice: i, showIcon: l, className: p, localPickupText: h, shippingText: _ } = e,
              {
                shippingRates: g,
                needsShipping: E,
                hasCalculatedShipping: w,
                isCollectable: b,
              } = ct();
            if (!(E && w && g && b && Y)) return null;
            const y = e => {
              s('pickup' === e);
            };
            return (0, r.createElement)(
              Ht,
              {
                attributes: e,
                setAttributes: t,
                className: n()('wc-block-checkout__shipping-method', p),
              },
              (0, r.createElement)(
                d.InspectorControls,
                null,
                (0, r.createElement)(
                  Nt.PanelBody,
                  { title: (0, m.__)('Appearance', 'woocommerce') },
                  (0, r.createElement)(
                    'p',
                    { className: 'wc-block-checkout__controls-text' },
                    (0, m.__)(
                      'Choose how this block is displayed to your customers.',
                      'woocommerce',
                    ),
                  ),
                  (0, r.createElement)(Nt.ToggleControl, {
                    label: (0, m.__)('Show icon', 'woocommerce'),
                    checked: l,
                    onChange: () => t({ showIcon: !l }),
                  }),
                  (0, r.createElement)(Nt.ToggleControl, {
                    label: (0, m.__)('Show costs', 'woocommerce'),
                    checked: i,
                    onChange: () => t({ showPrice: !i }),
                  }),
                ),
                (0, r.createElement)(
                  Nt.PanelBody,
                  { title: (0, m.__)('Shipping Methods', 'woocommerce') },
                  (0, r.createElement)(
                    'p',
                    { className: 'wc-block-checkout__controls-text' },
                    (0, m.__)('Methods can be made managed in your store settings.', 'woocommerce'),
                  ),
                  (0, r.createElement)($r, {
                    key: 'shipping_methods',
                    href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping`,
                    title: (0, m.__)('Shipping', 'woocommerce'),
                    description: (0, m.__)(
                      'Manage your shipping zones, methods, and rates.',
                      'woocommerce',
                    ),
                  }),
                  (0, r.createElement)($r, {
                    key: 'pickup_location',
                    href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=pickup_location`,
                    title: (0, m.__)('Pickup', 'woocommerce'),
                    description: (0, m.__)(
                      'Allow customers to choose a local pickup location during checkout.',
                      'woocommerce',
                    ),
                  }),
                ),
              ),
              (0, r.createElement)(
                'div',
                {
                  id: 'shipping-method',
                  className: 'wc-block-checkout__shipping-method-container',
                  role: 'radiogroup',
                },
                (0, r.createElement)(Yc, {
                  checked: a ? 'pickup' : 'shipping',
                  rate: Dc(null === (o = g[0]) || void 0 === o ? void 0 : o.shipping_rates),
                  onClick: () => {
                    y('shipping');
                  },
                  showPrice: i,
                  showIcon: l,
                  setAttributes: t,
                  toggleText: _,
                }),
                (0, r.createElement)(jc, {
                  checked: a ? 'pickup' : 'shipping',
                  rate: Fc(null === (c = g[0]) || void 0 === c ? void 0 : c.shipping_rates),
                  showPrice: i,
                  onClick: () => {
                    y('pickup');
                  },
                  showIcon: l,
                  setAttributes: t,
                  toggleText: h,
                }),
              ),
              (0, r.createElement)($t, { block: At.innerBlockAreas.SHIPPING_METHOD }),
            );
          },
          save: () =>
            (0, r.createElement)(
              'div',
              { ...d.useBlockProps.save() },
              (0, r.createElement)(qt, null),
            ),
        }),
          o(8024);
        const Kc = () =>
            (0, r.createElement)(
              Nt.Placeholder,
              {
                icon: (0, r.createElement)(i.A, { icon: Oc.A }),
                label: (0, m.__)('Shipping options', 'woocommerce'),
                className: 'wc-block-checkout__no-shipping-placeholder',
              },
              (0, r.createElement)(
                'span',
                { className: 'wc-block-checkout__no-shipping-placeholder-description' },
                (0, m.__)(
                  'Your store does not have any Shipping Options configured. Once you have added your Shipping Options they will appear here.',
                  'woocommerce',
                ),
              ),
              (0, r.createElement)(
                Nt.Button,
                {
                  variant: 'secondary',
                  href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping`,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                (0, m.__)('Configure Shipping Options', 'woocommerce'),
              ),
            ),
          Hc = e => {
            const t = (0, v.getSetting)('displayCartPricesIncludingTax', !1)
                ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
                : parseInt(e.price, 10),
              o =
                0 === t
                  ? (0, r.createElement)(
                      'span',
                      { className: 'wc-block-checkout__shipping-option--free' },
                      (0, m.__)('Free', 'woocommerce'),
                    )
                  : (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                      currency: (0, sr.getCurrencyFromPriceResponse)(e),
                      value: t,
                    });
            return {
              label: (0, Pe.decodeEntities)(e.name),
              value: e.rate_id,
              description: (0, Pe.decodeEntities)(e.description),
              secondaryLabel: o,
              secondaryDescription: (0, Pe.decodeEntities)(e.delivery_time),
            };
          },
          $c = ({ noShippingPlaceholder: e = null }) => {
            const { isEditor: t } = w(),
              {
                shippingRates: o,
                needsShipping: c,
                isLoadingRates: n,
                hasCalculatedShipping: s,
                isCollectable: a,
              } = ct(),
              { shippingAddress: i } = jt(),
              l = a
                ? o.map(e => ({
                    ...e,
                    shipping_rates: e.shipping_rates.filter(e => !Ge(e.method_id)),
                  }))
                : o;
            if (!c) return null;
            const d = qe(o);
            if (!s && !d)
              return (0, r.createElement)(
                'p',
                null,
                (0, m.__)(
                  'Shipping options will be displayed here after entering your full shipping address.',
                  'woocommerce',
                ),
              );
            const u = Me(i);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(Vt.StoreNoticesContainer, { context: ve.SHIPPING_METHODS }),
              t && !d
                ? e
                : (0, r.createElement)(Mr, {
                    noResultsMessage: (0, r.createElement)(
                      r.Fragment,
                      null,
                      u
                        ? (0, r.createElement)(
                            Cr,
                            {
                              isDismissible: !1,
                              className:
                                'wc-block-components-shipping-rates-control__no-results-notice',
                              status: 'warning',
                            },
                            (0, m.__)(
                              'There are no shipping options available. Please check your shipping address.',
                              'woocommerce',
                            ),
                          )
                        : (0, m.__)(
                            'Add a shipping address to view shipping options.',
                            'woocommerce',
                          ),
                    ),
                    renderOption: Hc,
                    collapsible: !1,
                    shippingRates: l,
                    isLoadingRates: n,
                    context: 'woocommerce/checkout',
                  }),
            );
          };
        o(2255);
        const qc = {
          ...yo({
            defaultTitle: (0, m.__)('Shipping options', 'woocommerce'),
            defaultDescription: '',
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
        };
        o(1299),
          (0, l.registerBlockType)('woocommerce/checkout-shipping-methods-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: Oc.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            attributes: qc,
            edit: ({ attributes: e, setAttributes: t }) => {
              const o = (0, v.getSetting)('globalShippingMethods'),
                c = (0, v.getSetting)('activeShippingZones'),
                { showShippingMethods: s } = Yt();
              return s
                ? (0, r.createElement)(
                    Ht,
                    {
                      attributes: e,
                      setAttributes: t,
                      className: n()(
                        'wc-block-checkout__shipping-option',
                        null == e ? void 0 : e.className,
                      ),
                    },
                    (0, r.createElement)(
                      d.InspectorControls,
                      null,
                      (0, r.createElement)(
                        Nt.PanelBody,
                        { title: (0, m.__)('Shipping Calculations', 'woocommerce') },
                        (0, r.createElement)(
                          'p',
                          { className: 'wc-block-checkout__controls-text' },
                          (0, m.__)(
                            'Options that control shipping can be managed in your store settings.',
                            'woocommerce',
                          ),
                        ),
                        (0, r.createElement)(
                          Nt.ExternalLink,
                          {
                            href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=options`,
                          },
                          (0, m.__)('Manage shipping options', 'woocommerce'),
                        ),
                        ' ',
                      ),
                      o.length > 0 &&
                        (0, r.createElement)(
                          Nt.PanelBody,
                          { title: (0, m.__)('Methods', 'woocommerce') },
                          (0, r.createElement)(
                            'p',
                            { className: 'wc-block-checkout__controls-text' },
                            (0, m.__)(
                              'The following shipping integrations are active on your store.',
                              'woocommerce',
                            ),
                          ),
                          o.map(e =>
                            (0, r.createElement)($r, {
                              key: e.id,
                              href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=${e.id}`,
                              title: e.title,
                              description: e.description,
                            }),
                          ),
                          (0, r.createElement)(
                            Nt.ExternalLink,
                            { href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping` },
                            (0, m.__)('Manage shipping methods', 'woocommerce'),
                          ),
                        ),
                      c.length &&
                        (0, r.createElement)(
                          Nt.PanelBody,
                          { title: (0, m.__)('Shipping Zones', 'woocommerce') },
                          (0, r.createElement)(
                            'p',
                            { className: 'wc-block-checkout__controls-text' },
                            (0, m.__)(
                              'Shipping Zones can be made managed in your store settings.',
                              'woocommerce',
                            ),
                          ),
                          c.map(e =>
                            (0, r.createElement)($r, {
                              key: e.id,
                              href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&zone_id=${e.id}`,
                              title: e.title,
                              description: e.description,
                            }),
                          ),
                        ),
                    ),
                    (0, r.createElement)(
                      Xt,
                      null,
                      (0, r.createElement)($c, {
                        noShippingPlaceholder: (0, r.createElement)(Kc, null),
                      }),
                    ),
                    (0, r.createElement)($t, { block: At.innerBlockAreas.SHIPPING_METHODS }),
                  )
                : null;
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...d.useBlockProps.save() },
                (0, r.createElement)(qt, null),
              ),
          });
        const zc = ({
          title: e,
          setSelectedOption: t,
          selectedOption: o,
          pickupLocations: c,
          onSelectRate: n,
          renderPickupLocation: s,
          packageCount: a,
        }) => {
          const i =
            (0, k.useSelect)(e => {
              var t, o, r;
              return null === (t = e(oe.CART_STORE_KEY)) ||
                void 0 === t ||
                null === (o = t.getCartData()) ||
                void 0 === o ||
                null === (r = o.shippingRates) ||
                void 0 === r
                ? void 0
                : r.length;
            }) > 1 ||
            document.querySelectorAll(
              '.wc-block-components-local-pickup-select .wc-block-components-radio-control',
            ).length > 1;
          return (0, r.createElement)(
            'div',
            { className: 'wc-block-components-local-pickup-select' },
            !(!i || !e) && (0, r.createElement)('div', null, e),
            (0, r.createElement)(Vt.RadioControl, {
              onChange: e => {
                t(e), n(e);
              },
              highlightChecked: !0,
              selected: o,
              options: c.map(e => s(e, a)),
            }),
          );
        };
        function Wc(e) {
          let t,
            o,
            r,
            c = [];
          for (let n = 0; n < e.length; n++)
            (t = e.substring(n)),
              (o = t.match(/^&[a-z0-9#]+;/)),
              o ? ((r = o[0]), c.push(r), (n += r.length - 1)) : c.push(e[n]);
          return c;
        }
        const Gc = (e, t, o = '...') => {
            const r = (function(e, t) {
              const o = (t = t || {}).limit || 100,
                r = void 0 === t.preserveTags || t.preserveTags,
                c = void 0 !== t.wordBreak && t.wordBreak,
                n = t.suffix || '...',
                s = t.moreLink || '',
                a = t.moreText || '»',
                i = t.preserveWhiteSpace || !1,
                l = e
                  .replace(/</g, '\n<')
                  .replace(/>/g, '>\n')
                  .replace(/\n\n/g, '\n')
                  .replace(/^\n/g, '')
                  .replace(/\n$/g, '')
                  .split('\n');
              let m,
                d,
                u,
                p,
                h,
                _,
                g = 0,
                k = [],
                E = !1;
              for (let e = 0; e < l.length; e++) {
                if (((m = l[e]), (p = i ? m : m.replace(/[ ]+/g, ' ')), !m.length)) continue;
                const t = Wc(p);
                if ('<' !== m[0])
                  if (g >= o) m = '';
                  else if (g + t.length >= o) {
                    if (((d = o - g), ' ' === t[d - 1]))
                      for (; d && ((d -= 1), ' ' === t[d - 1]); );
                    else (u = t.slice(d).indexOf(' ')), c || (-1 !== u ? (d += u) : (d = m.length));
                    (m = t.slice(0, d).join('') + n),
                      s && (m += '<a href="' + s + '" style="display:inline">' + a + '</a>'),
                      (g = o),
                      (E = !0);
                  } else g += t.length;
                else if (r) {
                  if (g >= o)
                    if (((h = m.match(/[a-zA-Z]+/)), (_ = h ? h[0] : ''), _))
                      if ('</' !== m.substring(0, 2)) k.push(_), (m = '');
                      else {
                        for (; k[k.length - 1] !== _ && k.length; ) k.pop();
                        k.length && (m = ''), k.pop();
                      }
                    else m = '';
                } else m = '';
                l[e] = m;
              }
              return { html: l.join('\n').replace(/\n/g, ''), more: E };
            })(e, { suffix: o, limit: t });
            return r.html;
          },
          Zc = (e, t, o) => (t <= o ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e),
          Xc = (e, t, o, r) => {
            const c = ((e, t, o) => {
              let r = { start: 0, middle: 0, end: e.length };
              for (; r.start <= r.end; )
                (r.middle = Math.floor((r.start + r.end) / 2)),
                  (t.innerHTML = Gc(e, r.middle)),
                  (r = Zc(r, t.clientHeight, o));
              return r.middle;
            })(e, t, o);
            return Gc(e, c - r.length, r);
          },
          Jc = {
            className: 'read-more-content',
            ellipsis: '&hellip;',
            lessText: (0, m.__)('Read less', 'woocommerce'),
            maxLines: 3,
            moreText: (0, m.__)('Read more', 'woocommerce'),
          };
        class Qc extends u.Component {
          constructor(e) {
            super(e),
              (0, O.A)(this, 'reviewSummary', void 0),
              (0, O.A)(this, 'reviewContent', void 0),
              (this.state = {
                isExpanded: !1,
                clampEnabled: null,
                content: e.children,
                summary: '.',
              }),
              (this.reviewContent = (0, u.createRef)()),
              (this.reviewSummary = (0, u.createRef)()),
              (this.getButton = this.getButton.bind(this)),
              (this.onClick = this.onClick.bind(this));
          }
          componentDidMount() {
            this.setSummary();
          }
          componentDidUpdate(e) {
            (e.maxLines === this.props.maxLines && e.children === this.props.children) ||
              this.setState({ clampEnabled: null, summary: '.' }, this.setSummary);
          }
          setSummary() {
            if (this.props.children) {
              const { maxLines: e, ellipsis: t } = this.props;
              if (!this.reviewSummary.current || !this.reviewContent.current) return;
              const o = (this.reviewSummary.current.clientHeight + 1) * e + 1,
                r = this.reviewContent.current.clientHeight + 1 > o;
              this.setState({ clampEnabled: r }),
                r &&
                  this.setState({
                    summary: Xc(
                      this.reviewContent.current.innerHTML,
                      this.reviewSummary.current,
                      o,
                      t,
                    ),
                  });
            }
          }
          getButton() {
            const { isExpanded: e } = this.state,
              { className: t, lessText: o, moreText: c } = this.props,
              n = e ? o : c;
            if (n)
              return (0, r.createElement)(
                'a',
                {
                  href: '#more',
                  className: t + '__read_more',
                  onClick: this.onClick,
                  'aria-expanded': !e,
                  role: 'button',
                },
                n,
              );
          }
          onClick(e) {
            e.preventDefault();
            const { isExpanded: t } = this.state;
            this.setState({ isExpanded: !t });
          }
          render() {
            const { className: e } = this.props,
              { content: t, summary: o, clampEnabled: c, isExpanded: n } = this.state;
            return t
              ? !1 === c
                ? (0, r.createElement)(
                    'div',
                    { className: e },
                    (0, r.createElement)('div', { ref: this.reviewContent }, t),
                  )
                : (0, r.createElement)(
                    'div',
                    { className: e },
                    (!n || null === c) &&
                      (0, r.createElement)('div', {
                        ref: this.reviewSummary,
                        'aria-hidden': n,
                        dangerouslySetInnerHTML: { __html: o },
                      }),
                    (n || null === c) &&
                      (0, r.createElement)(
                        'div',
                        { ref: this.reviewContent, 'aria-hidden': !n },
                        t,
                      ),
                    this.getButton(),
                  )
              : null;
          }
        }
        (0, O.A)(Qc, 'defaultProps', Jc);
        const en = Qc,
          tn = (e, t) => {
            const o = (0, v.getSetting)('displayCartPricesIncludingTax', !1)
                ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
                : e.price,
              c = (e => {
                if (null != e && e.meta_data) {
                  const t = e.meta_data.find(e => 'pickup_location' === e.key);
                  return t ? t.value : '';
                }
                return '';
              })(e),
              n = (e => {
                if (null != e && e.meta_data) {
                  const t = e.meta_data.find(e => 'pickup_address' === e.key);
                  return t ? t.value : '';
                }
                return '';
              })(e),
              s = (e => {
                if (null != e && e.meta_data) {
                  const t = e.meta_data.find(e => 'pickup_details' === e.key);
                  return t ? t.value : '';
                }
                return '';
              })(e);
            let a = (0, r.createElement)('em', null, (0, m.__)('free', 'woocommerce'));
            return (
              parseInt(o, 10) > 0 &&
                (a =
                  1 === t
                    ? (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                        currency: (0, sr.getCurrencyFromPriceResponse)(e),
                        value: o,
                      })
                    : (0,
                      u.createInterpolateElement) /* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */(
                        /* translators: <price/> is the price of the package, <packageCount/> is the number of packages. These must appear in the translated string. */
                        (0, m._n)(
                          '<price/> x <packageCount/> package',
                          '<price/> x <packageCount/> packages',
                          t,
                          'woocommerce',
                        ),
                        {
                          price: (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                            currency: (0, sr.getCurrencyFromPriceResponse)(e),
                            value: o,
                          }),
                          packageCount: (0, r.createElement)(r.Fragment, null, t),
                        },
                      )),
              {
                value: e.rate_id,
                label: c ? (0, Pe.decodeEntities)(c) : (0, Pe.decodeEntities)(e.name),
                secondaryLabel: a,
                description: n
                  ? (0, r.createElement)(
                      r.Fragment,
                      null,
                      (0, r.createElement)(i.A, {
                        icon: Ut.A,
                        className: 'wc-block-editor-components-block-icon',
                      }),
                      (0, Pe.decodeEntities)(n),
                    )
                  : void 0,
                secondaryDescription: (0, r.createElement)(
                  en,
                  { maxLines: 2 },
                  (0, Pe.decodeEntities)(s),
                ),
              }
            );
          },
          on = () => {
            var e;
            const { shippingRates: t, selectShippingRate: o } = ct(),
              c = ((null === (e = t[0]) || void 0 === e ? void 0 : e.shipping_rates) || []).filter(
                We,
              ),
              [n, s] = (0, u.useState)(() => {
                var e;
                return (
                  (null === (e = c.find(e => e.selected)) || void 0 === e ? void 0 : e.rate_id) ||
                  ''
                );
              }),
              a = (0, u.useCallback)(
                e => {
                  o(e);
                },
                [o],
              ),
              { extensions: i, receiveCart: l, ...m } = $e(),
              d = {
                extensions: i,
                cart: m,
                components: { ShippingRatesControlPackage: Ir, LocalPickupSelect: zc },
                renderPickupLocation: tn,
              };
            (0, u.useEffect)(() => {
              !n && c[0] && (s(c[0].rate_id), a(c[0].rate_id));
            }, [a, c, n]);
            const p = qe(t);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(At.ExperimentalOrderLocalPickupPackages.Slot, { ...d }),
              (0, r.createElement)(
                At.ExperimentalOrderLocalPickupPackages,
                null,
                (0, r.createElement)(zc, {
                  title: t[0].name,
                  setSelectedOption: s,
                  onSelectRate: a,
                  selectedOption: n,
                  renderPickupLocation: tn,
                  pickupLocations: c,
                  packageCount: p,
                }),
              ),
            );
          },
          rn = {
            ...yo({
              defaultTitle: (0, m.__)('Pickup locations', 'woocommerce'),
              defaultDescription: '',
            }),
            className: { type: 'string', default: '' },
            lock: { type: 'object', default: { move: !0, remove: !0 } },
          };
        o(3425),
          (0, l.registerBlockType)('woocommerce/checkout-pickup-options-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: Mc.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            attributes: rn,
            edit: ({ attributes: e, setAttributes: t }) => {
              const { prefersCollection: o } = (0, k.useSelect)(e => ({
                  prefersCollection: e(oe.CHECKOUT_STORE_KEY).prefersCollection(),
                })),
                { className: c } = e;
              return o && Y
                ? (0, r.createElement)(
                    Ht,
                    {
                      attributes: e,
                      setAttributes: t,
                      className: n()('wc-block-checkout__shipping-method', c),
                    },
                    (0, r.createElement)(on, null),
                    (0, r.createElement)($t, { block: At.innerBlockAreas.PICKUP_LOCATION }),
                  )
                : null;
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...d.useBlockProps.save() },
                (0, r.createElement)(qt, null),
              ),
          });
        const cn = ({ className: e = '' }) => {
          const { cartTotals: t } = $e(),
            o = (0, sr.getCurrencyFromPriceResponse)(t);
          return (0, r.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, r.createElement)(Vt.Subtotal, { currency: o, values: t }),
          );
        };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-subtotal-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: tr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, d.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(cn, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        const nn = ({ className: e = '' }) => {
          const { cartFees: t, cartTotals: o } = $e(),
            c = (0, sr.getCurrencyFromPriceResponse)(o);
          return (0, r.createElement)(
            Vt.TotalsWrapper,
            { className: e },
            (0, r.createElement)(Vt.TotalsFees, { currency: c, cartFees: t }),
          );
        };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-fee-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: tr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, d.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(nn, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        const sn = () => {
            const { extensions: e, receiveCart: t, ...o } = $e(),
              c = { extensions: e, cart: o, context: 'woocommerce/checkout' };
            return (0, r.createElement)(At.ExperimentalDiscountsMeta.Slot, { ...c });
          },
          an = ({ className: e = '' }) => {
            const { cartTotals: t, cartCoupons: o } = $e(),
              { removeCoupon: c, isRemovingCoupon: n } = ac('wc/checkout'),
              s = (0, sr.getCurrencyFromPriceResponse)(t);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                Vt.TotalsWrapper,
                { className: e },
                (0, r.createElement)(nr, {
                  cartCoupons: o,
                  currency: s,
                  isRemovingCoupon: n,
                  removeCoupon: c,
                  values: t,
                }),
              ),
              (0, r.createElement)(sn, null),
            );
          };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-discount-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: tr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, d.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(an, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        const ln = ({ className: e = '' }) => {
          const { cartTotals: t, cartNeedsShipping: o } = $e();
          if (!o) return null;
          const c = (0, sr.getCurrencyFromPriceResponse)(t);
          return (0, r.createElement)(
            At.TotalsWrapper,
            { className: e },
            (0, r.createElement)(Dr, {
              showCalculator: !1,
              showRateSelector: !1,
              values: t,
              currency: c,
              isCheckout: !0,
            }),
          );
        };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-shipping-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: tr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, d.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(Xt, null, (0, r.createElement)(ln, { className: t })),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        var mn = o(8848);
        const dn = ({ className: e = '' }) => {
          const t = (0, v.getSetting)('couponsEnabled', !0),
            { applyCoupon: o, isApplyingCoupon: c } = ac('wc/checkout');
          return t
            ? (0, r.createElement)(
                Vt.TotalsWrapper,
                { className: e },
                (0, r.createElement)(rr, { onSubmit: o, isLoading: c }),
              )
            : null;
        };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-coupon-form-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: mn.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, d.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(Xt, null, (0, r.createElement)(dn, { className: t })),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        const un = ({ className: e, showRateAfterTaxName: t }) => {
            const { cartTotals: o } = $e();
            if (
              (0, v.getSetting)('displayCartPricesIncludingTax', !1) ||
              parseInt(o.total_tax, 10) <= 0
            )
              return null;
            const c = (0, sr.getCurrencyFromPriceResponse)(o);
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
          pn = {
            showRateAfterTaxName: {
              type: 'boolean',
              default: (0, v.getSetting)('displayCartPricesIncludingTax', !1),
            },
            lock: { type: 'object', default: { remove: !0, move: !0 } },
          };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-taxes-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: tr,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: pn,
          edit: ({ attributes: e, setAttributes: t }) => {
            const { className: o, showRateAfterTaxName: c } = e,
              n = (0, d.useBlockProps)(),
              s = (0, v.getSetting)('taxesEnabled'),
              a = (0, v.getSetting)('displayItemizedTaxes', !1),
              i = (0, v.getSetting)('displayCartPricesIncludingTax', !1);
            return (0, r.createElement)(
              'div',
              { ...n },
              (0, r.createElement)(
                d.InspectorControls,
                null,
                s &&
                  a &&
                  !i &&
                  (0, r.createElement)(
                    Nt.PanelBody,
                    { title: (0, m.__)('Taxes', 'woocommerce') },
                    (0, r.createElement)(Nt.ToggleControl, {
                      label: (0, m.__)('Show rate after tax name', 'woocommerce'),
                      help: (0, m.__)(
                        'Show the percentage rate alongside each tax line in the summary.',
                        'woocommerce',
                      ),
                      checked: c,
                      onChange: () => t({ showRateAfterTaxName: !c }),
                    }),
                  ),
              ),
              (0, r.createElement)(un, { className: o, showRateAfterTaxName: c }),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        });
        const hn = (0, r.createElement)(
          s.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, r.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
          (0, r.createElement)('path', {
            d:
              'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
          }),
        );
        o(4567);
        const gn = ({
            currency: e,
            maxPrice: t,
            minPrice: o,
            priceClassName: c,
            priceStyle: s = {},
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, m.sprintf) /* translators: %1$s min price, %2$s max price */(
                  /* translators: %1$s min price, %2$s max price */
                  (0, m.__)('Price between %1$s and %2$s', 'woocommerce'),
                  (0, sr.formatPrice)(o),
                  (0, sr.formatPrice)(t),
                ),
              ),
              (0, r.createElement)(
                'span',
                { 'aria-hidden': !0 },
                (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                  className: n()('wc-block-components-product-price__value', c),
                  currency: e,
                  value: o,
                  style: s,
                }),
                ' — ',
                (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                  className: n()('wc-block-components-product-price__value', c),
                  currency: e,
                  value: t,
                  style: s,
                }),
              ),
            ),
          kn = ({
            currency: e,
            regularPriceClassName: t,
            regularPriceStyle: o,
            regularPrice: c,
            priceClassName: s,
            priceStyle: a,
            price: i,
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, m.__)('Previous price:', 'woocommerce'),
              ),
              (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, r.createElement)(
                    'del',
                    { className: n()('wc-block-components-product-price__regular', t), style: o },
                    e,
                  ),
                value: c,
              }),
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, m.__)('Discounted price:', 'woocommerce'),
              ),
              (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, r.createElement)(
                    'ins',
                    {
                      className: n()(
                        'wc-block-components-product-price__value',
                        'is-discounted',
                        s,
                      ),
                      style: a,
                    },
                    e,
                  ),
                value: i,
              }),
            ),
          En = ({
            align: e,
            className: t,
            currency: o,
            format: c = '<price/>',
            maxPrice: s,
            minPrice: a,
            price: i,
            priceClassName: l,
            priceStyle: m,
            regularPrice: d,
            regularPriceClassName: p,
            regularPriceStyle: h,
            style: _,
          }) => {
            const g = n()(t, 'price', 'wc-block-components-product-price', {
              [`wc-block-components-product-price--align-${e}`]: e,
            });
            c.includes('<price/>') ||
              ((c = '<price/>'),
              console.error('Price formats need to include the `<price/>` tag.'));
            const k = d && i && i < d;
            let E = (0, r.createElement)('span', {
              className: n()('wc-block-components-product-price__value', l),
            });
            return (
              k
                ? (E = (0, r.createElement)(kn, {
                    currency: o,
                    price: i,
                    priceClassName: l,
                    priceStyle: m,
                    regularPrice: d,
                    regularPriceClassName: p,
                    regularPriceStyle: h,
                  }))
                : void 0 !== a && void 0 !== s
                ? (E = (0, r.createElement)(gn, {
                    currency: o,
                    maxPrice: s,
                    minPrice: a,
                    priceClassName: l,
                    priceStyle: m,
                  }))
                : i &&
                  (E = (0, r.createElement)(Vt.FormattedMonetaryAmount, {
                    className: n()('wc-block-components-product-price__value', l),
                    currency: o,
                    value: i,
                    style: m,
                  })),
              (0, r.createElement)(
                'span',
                { className: g, style: _ },
                (0, u.createInterpolateElement)(c, { price: E }),
              )
            );
          };
        o(6625);
        const wn = ({
          className: e = '',
          disabled: t = !1,
          name: o,
          permalink: c = '',
          target: s,
          rel: a,
          style: i,
          onClick: l,
          ...m
        }) => {
          const d = n()('wc-block-components-product-name', e);
          if (t) {
            const e = m;
            return (0, r.createElement)('span', {
              className: d,
              ...e,
              dangerouslySetInnerHTML: { __html: (0, Pe.decodeEntities)(o) },
            });
          }
          return (0, r.createElement)('a', {
            className: d,
            href: c,
            target: s,
            ...m,
            dangerouslySetInnerHTML: { __html: (0, Pe.decodeEntities)(o) },
            style: i,
          });
        };
        var bn = o(131);
        o(9507);
        const yn = ({ children: e, className: t }) =>
            (0, r.createElement)(
              'div',
              { className: n()('wc-block-components-product-badge', t) },
              e,
            ),
          vn = () =>
            (0, r.createElement)(
              yn,
              { className: 'wc-block-components-product-backorder-badge' },
              (0, m.__)('Available on backorder', 'woocommerce'),
            ),
          fn = ({ image: e = {}, fallbackAlt: t = '' }) => {
            const o = e.thumbnail
              ? { src: e.thumbnail, alt: (0, Pe.decodeEntities)(e.alt) || t || 'Product Image' }
              : { src: v.PLACEHOLDER_IMG_SRC, alt: '' };
            return (0, r.createElement)('img', { ...o, alt: o.alt });
          },
          Cn = ({ lowStockRemaining: e }) =>
            e
              ? (0, r.createElement)(
                  yn,
                  { className: 'wc-block-components-product-low-stock-badge' },
                  (0,
                  m.sprintf) /* translators: %d stock amount (number of items in stock for product) */(
                    /* translators: %d stock amount (number of items in stock for product) */
                    (0, m.__)('%d left in stock', 'woocommerce'),
                    e,
                  ),
                )
              : null;
        var Sn = o(1194);
        o(4982);
        const Pn = ({ details: e = [] }) =>
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
                          (t ? `wc-block-components-product-details__${(0, Sn.c)(t)}` : '');
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
                              (0, Pe.decodeEntities)(t),
                              ':',
                            ),
                            ' ',
                          ),
                        (0, r.createElement)(
                          'span',
                          { className: 'wc-block-components-product-details__value' },
                          (0, Pe.decodeEntities)(e.display || e.value),
                        ),
                      );
                    }),
                  )
              : null,
          Nn = window.wp.wordcount,
          An = ({
            source: e,
            maxLength: t = 15,
            countType: o = 'words',
            className: c = '',
            style: n = {},
          }) => {
            const s = (0, u.useMemo)(
              () =>
                ((e, t = 15, o = 'words') => {
                  const r = (0, qr.autop)(e);
                  if ((0, Nn.count)(r, o) <= t) return r;
                  const c = (e => {
                    const t = e.indexOf('</p>');
                    return -1 === t ? e : e.substr(0, t + 4);
                  })(r);
                  return (0, Nn.count)(c, o) <= t
                    ? c
                    : 'words' === o
                    ? Gr(c, t)
                    : Zr(c, t, 'characters_including_spaces' === o);
                })(e, t, o),
              [e, t, o],
            );
            return (0, r.createElement)(u.RawHTML, { style: n, className: c }, s);
          },
          Tn = ({ className: e, shortDescription: t = '', fullDescription: o = '' }) => {
            const c = t || o;
            return c
              ? (0, r.createElement)(An, {
                  className: e,
                  source: c,
                  maxLength: 15,
                  countType: M.wordCountType || 'words',
                })
              : null;
          };
        o(401);
        const xn = ({
            shortDescription: e = '',
            fullDescription: t = '',
            itemData: o = [],
            variation: c = [],
          }) =>
            (0, r.createElement)(
              'div',
              { className: 'wc-block-components-product-metadata' },
              (0, r.createElement)(Tn, {
                className: 'wc-block-components-product-metadata__description',
                shortDescription: e,
                fullDescription: t,
              }),
              (0, r.createElement)(Pn, { details: o }),
              (0, r.createElement)(Pn, {
                details: c.map(({ attribute: e = '', value: t }) => ({ key: e, value: t })),
              }),
            ),
          Rn = ({ cartItem: e }) => {
            const {
                images: t,
                low_stock_remaining: o,
                show_backorder_badge: c,
                name: s,
                permalink: a,
                prices: i,
                quantity: l,
                short_description: d,
                description: p,
                item_data: h,
                variation: _,
                totals: g,
                extensions: k,
              } = e,
              { receiveCart: E, ...w } = $e(),
              b = (0, u.useMemo)(() => ({ context: 'summary', cartItem: e, cart: w }), [e, w]),
              y = (0, sr.getCurrencyFromPriceResponse)(i),
              f = (0, At.applyCheckoutFilter)({
                filterName: 'itemName',
                defaultValue: s,
                extensions: k,
                arg: b,
              }),
              C = (0, bn.A)({
                amount: parseInt(i.raw_prices.regular_price, 10),
                precision: (0, be.isString)(i.raw_prices.precision)
                  ? parseInt(i.raw_prices.precision, 10)
                  : i.raw_prices.precision,
              })
                .convertPrecision(y.minorUnit)
                .getAmount(),
              S = (0, bn.A)({
                amount: parseInt(i.raw_prices.price, 10),
                precision: (0, be.isString)(i.raw_prices.precision)
                  ? parseInt(i.raw_prices.precision, 10)
                  : i.raw_prices.precision,
              })
                .convertPrecision(y.minorUnit)
                .getAmount(),
              P = (0, sr.getCurrencyFromPriceResponse)(g);
            let N = parseInt(g.line_subtotal, 10);
            (0, v.getSetting)('displayCartPricesIncludingTax', !1) &&
              (N += parseInt(g.line_subtotal_tax, 10));
            const A = (0, bn.A)({ amount: N, precision: P.minorUnit }).getAmount(),
              T = (0, At.applyCheckoutFilter)({
                filterName: 'subtotalPriceFormat',
                defaultValue: '<price/>',
                extensions: k,
                arg: b,
                validation: At.productPriceValidation,
              }),
              x = (0, At.applyCheckoutFilter)({
                filterName: 'cartItemPrice',
                defaultValue: '<price/>',
                extensions: k,
                arg: b,
                validation: At.productPriceValidation,
              }),
              R = (0, At.applyCheckoutFilter)({
                filterName: 'cartItemClass',
                defaultValue: '',
                extensions: k,
                arg: b,
              });
            return (0, r.createElement)(
              'div',
              { className: n()('wc-block-components-order-summary-item', R) },
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-order-summary-item__image' },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-components-order-summary-item__quantity' },
                  (0, r.createElement)(Vt.Label, {
                    label: l.toString(),
                    screenReaderLabel: (0,
                    m.sprintf) /* translators: %d number of products of the same type in the cart */(
                      /* translators: %d number of products of the same type in the cart */
                      (0, m._n)('%d item', '%d items', l, 'woocommerce'),
                      l,
                    ),
                  }),
                ),
                (0, r.createElement)(fn, { image: t.length ? t[0] : {}, fallbackAlt: f }),
              ),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-components-order-summary-item__description' },
                (0, r.createElement)(wn, { disabled: !0, name: f, permalink: a }),
                (0, r.createElement)(En, {
                  currency: y,
                  price: S,
                  regularPrice: C,
                  className: 'wc-block-components-order-summary-item__individual-prices',
                  priceClassName: 'wc-block-components-order-summary-item__individual-price',
                  regularPriceClassName:
                    'wc-block-components-order-summary-item__regular-individual-price',
                  format: T,
                }),
                c
                  ? (0, r.createElement)(vn, null)
                  : !!o && (0, r.createElement)(Cn, { lowStockRemaining: o }),
                (0, r.createElement)(xn, {
                  shortDescription: d,
                  fullDescription: p,
                  itemData: h,
                  variation: _,
                }),
              ),
              (0, r.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0,
                m.sprintf) /* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */(
                  /* translators: %1$d is the number of items, %2$s is the item name and %3$s is the total price including the currency symbol. */
                  (0, m._n)(
                    'Total price for %1$d %2$s item: %3$s',
                    'Total price for %1$d %2$s items: %3$s',
                    l,
                    'woocommerce',
                  ),
                  l,
                  f,
                  (0, sr.formatPrice)(A, P),
                ),
              ),
              (0, r.createElement)(
                'div',
                {
                  className: 'wc-block-components-order-summary-item__total-price',
                  'aria-hidden': 'true',
                },
                (0, r.createElement)(En, { currency: P, format: x, price: A }),
              ),
            );
          };
        o(5415);
        const In = ({ cartItems: e = [] }) => {
            const { isLarge: t, hasContainerWidth: o } = (0, u.useContext)(h);
            return o
              ? (0, r.createElement)(
                  Vt.Panel,
                  {
                    className: 'wc-block-components-order-summary',
                    initialOpen: t,
                    hasBorder: !1,
                    title: (0, r.createElement)(
                      'span',
                      { className: 'wc-block-components-order-summary__button-text' },
                      (0, m.__)('Order summary', 'woocommerce'),
                    ),
                  },
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-components-order-summary__content' },
                    e.map(e => (0, r.createElement)(Rn, { key: e.key, cartItem: e })),
                  ),
                )
              : null;
          },
          On = ({ className: e = '' }) => {
            const { cartItems: t } = $e();
            return (0, r.createElement)(
              Vt.TotalsWrapper,
              { className: e },
              (0, r.createElement)(In, { cartItems: t }),
            );
          };
        (0, l.registerBlockType)('woocommerce/checkout-order-summary-cart-items-block', {
          icon: {
            src: (0, r.createElement)(i.A, {
              icon: hn,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, d.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(On, { className: t }),
            );
          },
          save: () => (0, r.createElement)('div', { ...d.useBlockProps.save() }),
        }),
          o(5681),
          (0, l.registerBlockType)('woocommerce/checkout-order-summary-totals-block', {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: tr,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ clientId: e }) => {
              const t = (0, d.useBlockProps)(),
                o = Dt(At.innerBlockAreas.CHECKOUT_ORDER_SUMMARY_TOTALS),
                c = [
                  ['woocommerce/checkout-order-summary-subtotal-block', {}, []],
                  ['woocommerce/checkout-order-summary-fee-block', {}, []],
                  ['woocommerce/checkout-order-summary-discount-block', {}, []],
                  ['woocommerce/checkout-order-summary-shipping-block', {}, []],
                  ['woocommerce/checkout-order-summary-taxes-block', {}, []],
                ];
              return (
                Ft({ clientId: e, registeredBlocks: o, defaultTemplate: c }),
                (0, r.createElement)(
                  'div',
                  { ...t },
                  (0, r.createElement)(d.InnerBlocks, { allowedBlocks: o, template: c }),
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...d.useBlockProps.save() },
                (0, r.createElement)(d.InnerBlocks.Content, null),
              ),
          }),
          o(6201);
        var Mn = o(8558);
        const Bn = (e, t = !0) => {
            t ? window.document.body.classList.add(e) : window.document.body.classList.remove(e);
          },
          Dn = ({ attributes: e, setAttributes: t }) => {
            const { hasDarkControls: o } = e;
            return (0, r.createElement)(
              d.InspectorControls,
              null,
              (0, r.createElement)(
                Nt.PanelBody,
                { title: (0, m.__)('Style', 'woocommerce') },
                (0, r.createElement)(Nt.ToggleControl, {
                  label: (0, m.__)('Dark mode inputs', 'woocommerce'),
                  help: (0, m.__)(
                    'Inputs styled specifically for use on dark background colors.',
                    'woocommerce',
                  ),
                  checked: o,
                  onChange: () => t({ hasDarkControls: !o }),
                }),
              ),
            );
          };
        function Fn() {
          const e = (0, m.__)(
            'Your store does not have any payment methods that support the Checkout block. Once you have configured a compatible payment method it will be displayed here.',
            'woocommerce',
          );
          return (0, r.createElement)(
            Nt.Notice,
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
                Nt.ExternalLink,
                { href: `${v.ADMIN_URL}admin.php?page=wc-settings&tab=checkout` },
                (0, m.__)('Configure Payment Methods', 'woocommerce'),
              ),
            ),
          );
        }
        o(7414);
        const Ln = window.wp.editor,
          Un = window.wp.coreData;
        function jn({ block: e }) {
          const t = 'checkout' === e ? D : U,
            o = 'checkout' === e ? 'woocommerce_checkout_page_id' : 'woocommerce_cart_page_id',
            { saveEntityRecord: c } = (0, k.useDispatch)(Un.store),
            { editPost: n, savePost: s } = (0, k.useDispatch)(Ln.store),
            { slug: a, postPublished: i, currentPostId: l } = (0, k.useSelect)(o => {
              var r;
              const { getEntityRecord: c } = o(Un.store),
                { isCurrentPostPublished: n, getCurrentPostId: s } = o(Ln.store);
              return {
                slug:
                  (null === (r = c('postType', 'page', t)) || void 0 === r ? void 0 : r.slug) || e,
                postPublished: n(),
                currentPostId: s(),
              };
            }, []),
            [d, p] = (0, u.useState)('pristine'),
            h = (0, u.useCallback)(() => {
              p('updating'),
                Promise.resolve()
                  .then(() => bt()({ path: `/wc/v3/settings/advanced/${o}`, method: 'GET' }))
                  .catch(e => {
                    'rest_setting_setting_invalid' === e.code && p('error');
                  })
                  .then(() => {
                    if (!i) return n({ status: 'publish' }), s();
                  })
                  .then(() =>
                    bt()({
                      path: `/wc/v3/settings/advanced/${o}`,
                      method: 'POST',
                      data: { value: l.toString() },
                    }),
                  )
                  .then(() => {
                    if (0 !== t) return c('postType', 'page', { id: t, slug: `${a}-2` });
                  })
                  .then(() => n({ slug: a }))
                  .then(() => s())
                  .then(() => p('updated'));
            }, [i, n, s, o, l, t, c, a]);
          let _;
          return (
            (_ =
              'checkout' === e
                ? (0, u.createInterpolateElement)(
                    (0, m.__)(
                      'If you would like to use this block as your default checkout, <a>update your page settings</a>.',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)(
                        'a',
                        { href: '#', onClick: h },
                        (0, m.__)('update your page settings', 'woocommerce'),
                      ),
                    },
                  )
                : (0, u.createInterpolateElement)(
                    (0, m.__)(
                      'If you would like to use this block as your default cart, <a>update your page settings</a>.',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)(
                        'a',
                        { href: '#', onClick: h },
                        (0, m.__)('update your page settings', 'woocommerce'),
                      ),
                    },
                  )),
            ('string' == typeof pagenow && 'site-editor' === pagenow) ||
            l === t ||
            'dismissed' === d
              ? null
              : (0, r.createElement)(
                  Nt.Notice,
                  {
                    className: 'wc-default-page-notice',
                    status: 'updated' === d ? 'success' : 'info',
                    onRemove: () => p('dismissed'),
                    spokenMessage:
                      'updated' === d ? (0, m.__)('Page settings updated', 'woocommerce') : _,
                  },
                  'updated' === d
                    ? (0, m.__)('Page settings updated', 'woocommerce')
                    : (0, r.createElement)(r.Fragment, null, (0, r.createElement)('p', null, _)),
                )
          );
        }
        o(4688);
        var Yn = o(224);
        const Vn = [],
          Kn = e => {
            const [t, o, r] = (() => {
                const e = {};
                (0, v.getSetting)('incompatibleExtensions') &&
                  (0, v.getSetting)('incompatibleExtensions').forEach(t => {
                    e[t.id] = t.title;
                  });
                const t = Object.keys(e),
                  o = t.length;
                return [e, t, o];
              })(),
              [c, n, s] = (() => {
                const { incompatiblePaymentMethods: e } = (0, k.useSelect)(e => {
                    const { getIncompatiblePaymentMethods: t } = e(pc);
                    return { incompatiblePaymentMethods: t() };
                  }, []),
                  t = Object.keys(e);
                return [e, t, t.length];
              })(),
              a = { ...t, ...c },
              i = [...o, ...n],
              l = r + s,
              [m, d] = ((e, t) => {
                const [o, r] = (0, u.useState)(() => {
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
                  (0, u.useEffect)(() => {
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
              })('wc-blocks_dismissed_incompatible_extensions_notices', Vn),
              [p, h] = (0, u.useState)(!1),
              _ = m.some(t => {
                return (
                  Object.keys(t).includes(e) &&
                  ((o = t[e]),
                  (r = i),
                  o.length === r.length && new Set([...o, ...r]).size === o.length)
                );
                var o, r;
              }),
              g = 0 === l || _;
            return (
              (0, u.useEffect)(() => {
                h(!g),
                  g ||
                    _ ||
                    d(t => t.reduce((t, o) => (Object.keys(o).includes(e) || t.push(o), t), []));
              }, [g, _, d, e]),
              [
                p,
                () => {
                  const t = new Set(m);
                  t.add({ [e]: i }), d([...t]);
                },
                ((E = a),
                Object.fromEntries(Object.entries(E).sort(([, e], [, t]) => e.localeCompare(t)))),
                l,
              ]
            );
            var E;
          },
          Hn = window.wp.notices;
        var $n = o(4922);
        const qn = !1,
          zn = o.n($n)()('wc-admin:tracks');
        function Wn(e, t) {
          return (
            zn('recordevent %s %o', 'wcadmin_' + e, t, {
              _tqk: window._tkq,
              shouldRecord: !(qn || !window._tkq || !window.wcTracks || !window.wcTracks.isEnabled),
            }),
            !(!window.wcTracks || 'function' != typeof window.wcTracks.recordEvent) &&
              (qn
                ? (window.wcTracks.validateEvent(e, t), !1)
                : void window.wcTracks.recordEvent(e, t))
          );
        }
        const Gn = ({ blocks: e, findCondition: t }) => {
            for (const o of e) {
              if (t(o)) return o;
              if (o.innerBlocks) {
                const e = Gn({ blocks: o.innerBlocks, findCondition: t });
                if (e) return e;
              }
            }
          },
          Zn = ({ blockType: e = 'woocommerce/cart' }) =>
            'woocommerce/cart' === e
              ? (0, r.createElement)(
                  'p',
                  null,
                  (0, m.__)(
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
                    (0, m.__)(
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
                      (0, m.__)('Customizations and updates to the block', 'woocommerce'),
                    ),
                    (0, r.createElement)(
                      'li',
                      null,
                      (0, m.__)(
                        'Additional local pickup options created for the new checkout',
                        'woocommerce',
                      ),
                    ),
                  ),
                );
        function Xn({ block: e, clientId: t, type: o }) {
          const { createInfoNotice: c } = (0, k.useDispatch)(Hn.store),
            { replaceBlock: n, selectBlock: s } = (0, k.useDispatch)(d.store),
            [a, i] = (0, u.useState)(!1),
            p = () => i(!1),
            { undo: h } = (0, k.useDispatch)(Un.store),
            [, , _, g] = Kn(e),
            E = 'woocommerce/cart' === e,
            w = E
              ? (0, m.__)('Switch to classic cart', 'woocommerce')
              : (0, m.__)('Switch to classic checkout', 'woocommerce'),
            b = E
              ? (0, m.__)('Switched to classic cart.', 'woocommerce')
              : (0, m.__)('Switched to classic checkout.', 'woocommerce'),
            y = E ? 'cart' : 'checkout',
            v = {
              shortcode: y,
              notice: 'incompatible' === o ? 'incompatible_notice' : 'generic_notice',
              incompatible_extensions_count: g,
              incompatible_extensions_names: JSON.stringify(_),
            },
            { getBlocks: f } = (0, k.useSelect)(e => ({ getBlocks: e(d.store).getBlocks }), []),
            C = () => {
              h(), Wn('switch_to_classic_shortcode_undo', v);
            };
          return (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(
              Nt.Button,
              {
                variant: 'secondary',
                onClick: () => {
                  Wn('switch_to_classic_shortcode_click', v), i(!0);
                },
              },
              w,
            ),
            a &&
              (0, r.createElement)(
                Nt.Modal,
                {
                  size: 'medium',
                  title: w,
                  onRequestClose: p,
                  className: 'wc-blocks-switch-to-classic-shortcode-modal-content',
                },
                (0, r.createElement)(Zn, { blockType: e }),
                (0, r.createElement)(
                  Nt.TabbableContainer,
                  { className: 'wc-blocks-switch-to-classic-shortcode-modal-actions' },
                  (0, r.createElement)(
                    Nt.Button,
                    {
                      variant: 'primary',
                      isDestructive: !0,
                      onClick: () => {
                        n(t, (0, l.createBlock)('woocommerce/classic-shortcode', { shortcode: y })),
                          Wn('switch_to_classic_shortcode_confirm', v),
                          (() => {
                            const e = Gn({
                              blocks: f(),
                              findCondition: e => 'woocommerce/classic-shortcode' === e.name,
                            });
                            e && s(e.clientId);
                          })(),
                          c(b, {
                            actions: [{ label: (0, m.__)('Undo', 'woocommerce'), onClick: C }],
                            type: 'snackbar',
                          }),
                          p();
                      },
                    },
                    (0, m.__)('Switch', 'woocommerce'),
                  ),
                  ' ',
                  (0, r.createElement)(
                    Nt.Button,
                    {
                      variant: 'secondary',
                      onClick: () => {
                        Wn('switch_to_classic_shortcode_cancel', v), p();
                      },
                    },
                    (0, m.__)('Cancel', 'woocommerce'),
                  ),
                ),
              ),
          );
        }
        function Jn({ block: e, clientId: t }) {
          const [o, c, n, s] = Kn(e);
          if (!o) return null;
          const a = (0, r.createElement)(
              r.Fragment,
              null,
              s > 1
                ? (0, u.createInterpolateElement)(
                    (0, m.__)(
                      'Some active extensions do not yet support this block. This may impact the shopper experience. <a>Learn more</a>',
                      'woocommerce',
                    ),
                    {
                      a: (0, r.createElement)(Nt.ExternalLink, {
                        href: 'https://woocommerce.com/document/cart-checkout-blocks-status/',
                      }),
                    },
                  )
                : (0, u.createInterpolateElement)(
                    (0, m.sprintf)(
                      // translators: %s is the name of the extension.
                      // translators: %s is the name of the extension.
                      (0, m.__)(
                        '<strong>%s</strong> does not yet support this block. This may impact the shopper experience. <a>Learn more</a>',
                        'woocommerce',
                      ),
                      Object.values(n)[0],
                    ),
                    {
                      strong: (0, r.createElement)('strong', null),
                      a: (0, r.createElement)(Nt.ExternalLink, {
                        href: 'https://woocommerce.com/document/cart-checkout-blocks-status/',
                      }),
                    },
                  ),
            ),
            l = Object.entries(n),
            d = l.length - 2;
          return (0, r.createElement)(
            Nt.Notice,
            {
              className: 'wc-blocks-incompatible-extensions-notice',
              status: 'warning',
              onRemove: c,
              spokenMessage: a,
            },
            (0, r.createElement)(
              'div',
              { className: 'wc-blocks-incompatible-extensions-notice__content' },
              (0, r.createElement)(i.A, {
                className: 'wc-blocks-incompatible-extensions-notice__warning-icon',
                icon: (0, r.createElement)(Hr, null),
              }),
              (0, r.createElement)(
                'div',
                null,
                (0, r.createElement)('p', null, a),
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
                        (0, m.sprintf)(
                          // translators: %s is the number of incompatible extensions.
                          // translators: %s is the number of incompatible extensions.
                          (0, m._n)(
                            '%s more incompatibility',
                            '%s more incompatibilites',
                            d,
                            'woocommerce',
                          ),
                          d,
                        ),
                      ),
                      (0, r.createElement)(i.A, { icon: Yn.A }),
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
                (0, r.createElement)(Xn, { block: e, clientId: t, type: 'incompatible' }),
              ),
            ),
          );
        }
        o(7840), o(1212);
        var Qn = o(361);
        o(1598);
        const es = ({ text: e, title: t = (0, m.__)('Feedback?', 'woocommerce'), url: o }) => {
            const [c, n] = (0, u.useState)(!1);
            return (
              (0, u.useEffect)(() => {
                n(!0);
              }, []),
              (0, r.createElement)(
                r.Fragment,
                null,
                c &&
                  (0, r.createElement)(
                    'div',
                    { className: 'wc-block-feedback-prompt' },
                    (0, r.createElement)(i.A, { icon: Qn.A }),
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
                      (0, m.__)('Give us your feedback.', 'woocommerce'),
                      (0, r.createElement)(i.A, { icon: Vr.A, size: 16 }),
                    ),
                  ),
              )
            );
          },
          ts = () =>
            (0, r.createElement)(es, {
              text: (0, m.__)(
                'We are currently working on improving our cart and checkout blocks to provide merchants with the tools and customization options they need.',
                'woocommerce',
              ),
              url:
                'https://github.com/woocommerce/woocommerce/discussions/new?category=checkout-flow&labels=type%3A+product%20feedback',
            }),
          os = (0, p.createHigherOrderComponent)(
            e => t => {
              const { clientId: o, name: c, isSelected: n } = t,
                {
                  isCart: s,
                  isCheckout: a,
                  isPaymentMethodsBlock: i,
                  hasPaymentMethods: l,
                  parentId: m,
                } = (0, k.useSelect)(e => {
                  const { getBlockParentsByBlockName: t, getBlockName: r } = e(d.store),
                    c = t(o, ['woocommerce/cart', 'woocommerce/checkout']).reduce(
                      (e, t) => ((e[r(t)] = t), e),
                      {},
                    ),
                    n = r(o),
                    s = Object.keys(c).includes('woocommerce/cart'),
                    a = Object.keys(c).includes('woocommerce/checkout'),
                    i = 'woocommerce/cart' === n || s,
                    l = i ? 'woocommerce/cart' : 'woocommerce/checkout';
                  return {
                    isCart: i,
                    isCheckout: 'woocommerce/checkout' === n || a,
                    parentId: n === l ? o : c[l],
                    isPaymentMethodsBlock: 'woocommerce/checkout-payment-block' === n,
                    hasPaymentMethods:
                      e(oe.PAYMENT_STORE_KEY).paymentMethodsInitialized() &&
                      Object.keys(e(oe.PAYMENT_STORE_KEY).getAvailablePaymentMethods()).length > 0,
                  };
                });
              return c.startsWith('woocommerce/') && n && (s || a)
                ? (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(
                      d.InspectorControls,
                      null,
                      (0, r.createElement)(Jn, {
                        block: s ? 'woocommerce/cart' : 'woocommerce/checkout',
                        clientId: m,
                      }),
                      (0, r.createElement)(jn, { block: a ? 'checkout' : 'cart' }),
                      i && !l && (0, r.createElement)(Fn, null),
                      (0, r.createElement)(ts, null),
                    ),
                    (0, r.createElement)(e, { key: 'edit', ...t }),
                  )
                : (0, r.createElement)(e, { key: 'edit', ...t });
            },
            'withSidebarNotices',
          );
        (0, ot.hasFilter)('editor.BlockEdit', 'woocommerce/add/sidebar-compatibility-notice') ||
          (0, ot.addFilter)(
            'editor.BlockEdit',
            'woocommerce/add/sidebar-compatibility-notice',
            os,
            11,
          ),
          (0, ot.hasFilter)('blocks.registerBlockType', 'core/lock/addAttribute') ||
            (0, k.subscribe)(() => {
              var e, t, o, r;
              const c = (0, k.select)(d.store);
              if (!c) return;
              const n = c.getSelectedBlock();
              n &&
                (Bn(
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
                Bn(
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
        const rs = ['woocommerce/checkout-fields-block', 'woocommerce/checkout-totals-block'],
          cs = {
            hasDarkControls: {
              type: 'boolean',
              default: (0, v.getSetting)('hasDarkEditorStyleSupport', !1),
            },
            showRateAfterTaxName: {
              type: 'boolean',
              default: (0, v.getSetting)('displayCartPricesIncludingTax', !1),
            },
          },
          ns = {
            showOrderNotes: { type: 'boolean', default: !0 },
            showPolicyLinks: { type: 'boolean', default: !0 },
            showReturnToCart: { type: 'boolean', default: !0 },
            cartPageId: { type: 'number', default: 0 },
          },
          ss = JSON.parse(
            '{"name":"woocommerce/checkout","version":"1.0.0","title":"Checkout","description":"Display a checkout form so your customers can submit orders.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide"],"html":false,"multiple":false},"example":{"attributes":{"isPreview":true},"viewportWidth":800},"attributes":{"isPreview":{"type":"boolean","default":false,"save":false},"showCompanyField":{"type":"boolean","default":false},"requireCompanyField":{"type":"boolean","default":false},"showApartmentField":{"type":"boolean","default":true},"requireApartmentField":{"type":"boolean","default":false},"showPhoneField":{"type":"boolean","default":true},"requirePhoneField":{"type":"boolean","default":false},"align":{"type":"string","default":"wide"},"showFormStepNumbers":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          as = {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: a,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            attributes: { ...ss.attributes, ...cs, ...ns },
            edit: ({ clientId: e, attributes: t, setAttributes: o }) => {
              const {
                  showCompanyField: c,
                  requireCompanyField: s,
                  showApartmentField: a,
                  requireApartmentField: i,
                  showPhoneField: p,
                  requirePhoneField: h,
                  showOrderNotes: _,
                  showPolicyLinks: E,
                  showReturnToCart: w,
                  showRateAfterTaxName: y,
                  cartPageId: v,
                  isPreview: f = !1,
                  showFormStepNumbers: C = !1,
                } = t,
                S = (0, u.useRef)((0, xe.getQueryArg)(window.location.href, 'focus'));
              (0, u.useEffect)(() => {
                'checkout' !== S.current ||
                  (0, k.select)('core/block-editor').hasSelectedBlock() ||
                  ((0, k.dispatch)('core/block-editor').selectBlock(e),
                  (0, k.dispatch)('core/interface').enableComplementaryArea(
                    'core/edit-site',
                    'edit-site/block-inspector',
                  ));
              }, [e]);
              const P = e => {
                  const r = {};
                  (r[e] = !t[e]), o(r);
                },
                N = ((e = {}) => {
                  const t = (0, u.useRef)(),
                    o = (0, d.useBlockProps)({ ref: t, ...e });
                  return (
                    (({ ref: e }) => {
                      const t = (0, ot.hasFilter)(
                          'blocks.registerBlockType',
                          'core/lock/addAttribute',
                        ),
                        o = e.current;
                      (0, u.useEffect)(() => {
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
                          if (t !== Mn.BACKSPACE && t !== Mn.DELETE) return;
                          if ((0, Wt.isTextField)(o)) return;
                          const r = o;
                          if (void 0 === r.dataset.block) return;
                          const c = (e => {
                            var t, o, r, c, n;
                            if (!e) return !1;
                            const { getBlock: s } = (0, k.select)(d.store),
                              a = s(e);
                            if (
                              'boolean' ==
                              typeof (null == a ||
                              null === (t = a.attributes) ||
                              void 0 === t ||
                              null === (o = t.lock) ||
                              void 0 === o
                                ? void 0
                                : o.remove)
                            )
                              return a.attributes.lock.remove;
                            const i = (0, l.getBlockType)(a.name);
                            var m, u, p;
                            return (
                              'boolean' ==
                                typeof (null == i ||
                                null === (r = i.attributes) ||
                                void 0 === r ||
                                null === (c = r.lock) ||
                                void 0 === c ||
                                null === (n = c.default) ||
                                void 0 === n
                                  ? void 0
                                  : n.remove) &&
                              (null == i ||
                              null === (m = i.attributes) ||
                              void 0 === m ||
                              null === (u = m.lock) ||
                              void 0 === u ||
                              null === (p = u.default) ||
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
                })();
              return (0, r.createElement)(
                'div',
                { ...N },
                (0, r.createElement)(
                  d.InspectorControls,
                  null,
                  (0, r.createElement)(Dn, { attributes: t, setAttributes: o }),
                ),
                (0, r.createElement)(
                  b,
                  {
                    isPreview: f,
                    previewData: { previewCart: tt, previewSavedPaymentMethods: Pt },
                  },
                  (0, r.createElement)(
                    At.SlotFillProvider,
                    null,
                    (0, r.createElement)(
                      St,
                      null,
                      (0, r.createElement)(
                        g,
                        {
                          className: n()('wc-block-checkout', {
                            'has-dark-controls': t.hasDarkControls,
                          }),
                        },
                        (0, r.createElement)(
                          It.Provider,
                          {
                            value: {
                              addressFieldControls: () =>
                                (0, r.createElement)(
                                  d.InspectorControls,
                                  null,
                                  (0, r.createElement)(
                                    Nt.PanelBody,
                                    { title: (0, m.__)('Form Step Options', 'woocommerce') },
                                    (0, r.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)('Show form step numbers', 'woocommerce'),
                                      checked: C,
                                      onChange: () => o({ showFormStepNumbers: !C }),
                                    }),
                                  ),
                                  (0, r.createElement)(
                                    Nt.PanelBody,
                                    { title: (0, m.__)('Address Fields', 'woocommerce') },
                                    (0, r.createElement)(
                                      'p',
                                      { className: 'wc-block-checkout__controls-text' },
                                      (0, m.__)(
                                        'Show or hide fields in the checkout address forms.',
                                        'woocommerce',
                                      ),
                                    ),
                                    (0, r.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)('Company', 'woocommerce'),
                                      checked: c,
                                      onChange: () => P('showCompanyField'),
                                    }),
                                    c &&
                                      (0, r.createElement)(Nt.RadioControl, {
                                        selected: s,
                                        options: [
                                          {
                                            label: (0, m.__)('Optional', 'woocommerce'),
                                            value: !1,
                                          },
                                          {
                                            label: (0, m.__)('Required', 'woocommerce'),
                                            value: !0,
                                          },
                                        ],
                                        onChange: () => P('requireCompanyField'),
                                        className:
                                          'components-base-control--nested wc-block-components-require-company-field',
                                      }),
                                    (0, r.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)('Address line 2', 'woocommerce'),
                                      checked: a,
                                      onChange: () => P('showApartmentField'),
                                    }),
                                    a &&
                                      (0, r.createElement)(Nt.RadioControl, {
                                        selected: i,
                                        options: [
                                          {
                                            label: (0, m.__)('Optional', 'woocommerce'),
                                            value: !1,
                                          },
                                          {
                                            label: (0, m.__)('Required', 'woocommerce'),
                                            value: !0,
                                          },
                                        ],
                                        onChange: () => P('requireApartmentField'),
                                        className:
                                          'components-base-control--nested wc-block-components-require-apartment-field',
                                      }),
                                    (0, r.createElement)(Nt.ToggleControl, {
                                      label: (0, m.__)('Phone', 'woocommerce'),
                                      checked: p,
                                      onChange: () => P('showPhoneField'),
                                    }),
                                    p &&
                                      (0, r.createElement)(Nt.RadioControl, {
                                        selected: h,
                                        options: [
                                          {
                                            label: (0, m.__)('Optional', 'woocommerce'),
                                            value: !1,
                                          },
                                          {
                                            label: (0, m.__)('Required', 'woocommerce'),
                                            value: !0,
                                          },
                                        ],
                                        onChange: () => P('requirePhoneField'),
                                        className:
                                          'components-base-control--nested wc-block-components-require-phone-field',
                                      }),
                                  ),
                                ),
                            },
                          },
                          (0, r.createElement)(
                            Rt.Provider,
                            {
                              value: {
                                showApartmentField: a,
                                showCompanyField: c,
                                showPhoneField: p,
                                requireApartmentField: i,
                                requireCompanyField: s,
                                requirePhoneField: h,
                                showOrderNotes: _,
                                showPolicyLinks: E,
                                showReturnToCart: w,
                                cartPageId: v,
                                showRateAfterTaxName: y,
                                showFormStepNumbers: C,
                              },
                            },
                            (0, r.createElement)(d.InnerBlocks, {
                              allowedBlocks: rs,
                              template: [
                                ['woocommerce/checkout-fields-block', {}, []],
                                ['woocommerce/checkout-totals-block', {}, []],
                              ],
                              templateLock: 'insert',
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              );
            },
            save: () =>
              (0, r.createElement)(
                'div',
                { ...d.useBlockProps.save({ className: 'wc-block-checkout is-loading' }) },
                (0, r.createElement)(d.InnerBlocks.Content, null),
              ),
            transforms: {
              to: [
                {
                  type: 'block',
                  blocks: ['woocommerce/classic-shortcode'],
                  transform: e =>
                    (0, l.createBlock)(
                      'woocommerce/classic-shortcode',
                      { shortcode: 'checkout', align: e.align },
                      [],
                    ),
                },
              ],
            },
            deprecated: [
              {
                attributes: { ...ss.attributes, ...cs, ...ns },
                save: ({ attributes: e }) =>
                  (0, r.createElement)('div', { className: n()('is-loading', e.className) }),
                migrate: e => {
                  const {
                    showOrderNotes: t,
                    showPolicyLinks: o,
                    showReturnToCart: r,
                    cartPageId: c,
                  } = e;
                  return [
                    e,
                    [
                      (0, l.createBlock)(
                        'woocommerce/checkout-fields-block',
                        {},
                        [
                          (0, l.createBlock)('woocommerce/checkout-express-payment-block', {}, []),
                          (0, l.createBlock)(
                            'woocommerce/checkout-contact-information-block',
                            {},
                            [],
                          ),
                          (0, l.createBlock)('woocommerce/checkout-shipping-address-block', {}, []),
                          (0, l.createBlock)('woocommerce/checkout-billing-address-block', {}, []),
                          (0, l.createBlock)('woocommerce/checkout-shipping-methods-block', {}, []),
                          (0, l.createBlock)('woocommerce/checkout-payment-block', {}, []),
                          (0, l.createBlock)(
                            'woocommerce/checkout-additional-information-block',
                            {},
                            [],
                          ),
                          !!t &&
                            (0, l.createBlock)('woocommerce/checkout-order-note-block', {}, []),
                          !!o && (0, l.createBlock)('woocommerce/checkout-terms-block', {}, []),
                          (0, l.createBlock)(
                            'woocommerce/checkout-actions-block',
                            { showReturnToCart: r, cartPageId: c },
                            [],
                          ),
                        ].filter(Boolean),
                      ),
                      (0, l.createBlock)('woocommerce/checkout-totals-block', {}),
                    ],
                  ];
                },
                isEligible: (e, t) => !t.some(e => 'woocommerce/checkout-fields-block' === e.name),
              },
              {
                save: ({ attributes: e }) =>
                  (0, r.createElement)('div', { className: n()('is-loading', e.className) }),
                isEligible: (e, t) => {
                  const o = t.find(e => 'woocommerce/checkout-fields-block' === e.name);
                  return (
                    !!o &&
                    !o.innerBlocks.some(
                      e => 'woocommerce/checkout-additional-information-block' === e.name,
                    )
                  );
                },
                migrate: (e, t) => {
                  const o = t.findIndex(e => 'woocommerce/checkout-fields-block' === e.name);
                  if (-1 === o) return !1;
                  const r = t[o],
                    c = r.innerBlocks.findIndex(
                      e => 'wp-block-woocommerce-checkout-payment-block' === e.name,
                    );
                  return (
                    -1 !== c &&
                    ((t[o] = r.innerBlocks
                      .slice(0, c)
                      .concat(
                        (0, l.createBlock)(
                          'woocommerce/checkout-additional-information-block',
                          {},
                          [],
                        ),
                      )
                      .concat(t.slice(c + 1, t.length))),
                    [e, t])
                  );
                },
              },
            ],
          };
        (0, l.registerBlockType)(ss, as);
      },
      9407: () => {},
      2080: () => {},
      5415: () => {},
      4957: () => {},
      777: () => {},
      9507: () => {},
      4982: () => {},
      401: () => {},
      718: () => {},
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
      1221: () => {},
      8824: () => {},
      9569: () => {},
      1637: () => {},
      181: () => {},
      1094: () => {},
      7259: () => {},
      6664: () => {},
      5089: () => {},
      6426: () => {},
      5676: () => {},
      9865: () => {},
      6619: () => {},
      377: () => {},
      7797: () => {},
      5681: () => {},
      3425: () => {},
      7694: () => {},
      2255: () => {},
      8024: () => {},
      1299: () => {},
      8845: () => {},
      5609: () => {},
      7765: () => {},
      6201: () => {},
      4688: () => {},
      9705: () => {},
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
        var s = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, c] = e[m], a = !0, i = 0; i < o.length; i++)
            (!1 & c || s >= c) && Object.keys(n.O).every(e => n.O[e](o[i]))
              ? o.splice(i--, 1)
              : ((a = !1), c < s && (s = c));
          if (a) {
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
      var s = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (s[t] = () => e[t]));
      return (s.default = () => e), n.d(c, s), c;
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
    (n.j = 251),
    (() => {
      var e = { 251: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [s, a, i] = o,
            l = 0;
          if (s.some(t => 0 !== e[t])) {
            for (r in a) n.o(a, r) && (n.m[r] = a[r]);
            if (i) var m = i(n);
          }
          for (t && t(o); l < s.length; l++) (c = s[l]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var s = n.O(void 0, [94], () => n(7431));
  (s = n.O(s)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {}).checkout = s);
})();
