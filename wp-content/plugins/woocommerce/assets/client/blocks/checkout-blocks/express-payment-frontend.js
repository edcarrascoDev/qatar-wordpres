(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3574],
  {
    490: (e, t, s) => {
      'use strict';
      s.d(t, { n: () => a });
      var o = s(812);
      const n = [
          { id: 'alipay', alt: 'Alipay', src: o.sW + 'payment-methods/alipay.svg' },
          { id: 'amex', alt: 'American Express', src: o.sW + 'payment-methods/amex.svg' },
          { id: 'bancontact', alt: 'Bancontact', src: o.sW + 'payment-methods/bancontact.svg' },
          { id: 'diners', alt: 'Diners Club', src: o.sW + 'payment-methods/diners.svg' },
          { id: 'discover', alt: 'Discover', src: o.sW + 'payment-methods/discover.svg' },
          { id: 'eps', alt: 'EPS', src: o.sW + 'payment-methods/eps.svg' },
          { id: 'giropay', alt: 'Giropay', src: o.sW + 'payment-methods/giropay.svg' },
          { id: 'ideal', alt: 'iDeal', src: o.sW + 'payment-methods/ideal.svg' },
          { id: 'jcb', alt: 'JCB', src: o.sW + 'payment-methods/jcb.svg' },
          { id: 'laser', alt: 'Laser', src: o.sW + 'payment-methods/laser.svg' },
          { id: 'maestro', alt: 'Maestro', src: o.sW + 'payment-methods/maestro.svg' },
          { id: 'mastercard', alt: 'Mastercard', src: o.sW + 'payment-methods/mastercard.svg' },
          { id: 'multibanco', alt: 'Multibanco', src: o.sW + 'payment-methods/multibanco.svg' },
          { id: 'p24', alt: 'Przelewy24', src: o.sW + 'payment-methods/p24.svg' },
          { id: 'sepa', alt: 'Sepa', src: o.sW + 'payment-methods/sepa.svg' },
          { id: 'sofort', alt: 'Sofort', src: o.sW + 'payment-methods/sofort.svg' },
          { id: 'unionpay', alt: 'Union Pay', src: o.sW + 'payment-methods/unionpay.svg' },
          { id: 'visa', alt: 'Visa', src: o.sW + 'payment-methods/visa.svg' },
          { id: 'wechat', alt: 'WeChat', src: o.sW + 'payment-methods/wechat.svg' },
        ],
        a = e => n.find(t => t.id === e) || {};
    },
    8390: (e, t, s) => {
      'use strict';
      s.d(t, { h: () => l });
      var o = s(1609),
        n = s(9019),
        a = s.n(n),
        r = s(8344),
        c = s(490),
        i = s(6159);
      s(4957);
      const l = ({ icons: e = [], align: t = 'center', className: s }) => {
        const n = (0, i.l)(e);
        if (0 === n.length) return null;
        const l = a()(
          'wc-block-components-payment-method-icons',
          {
            'wc-block-components-payment-method-icons--align-left': 'left' === t,
            'wc-block-components-payment-method-icons--align-right': 'right' === t,
          },
          s,
        );
        return (0, o.createElement)(
          'div',
          { className: l },
          n.map(e => {
            const t = { ...e, ...(0, c.n)(e.id) };
            return (0, o.createElement)(r.A, { key: 'payment-method-icon-' + e.id, ...t });
          }),
        );
      };
    },
    8344: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var o = s(1609);
      const n = e =>
          `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
        a = ({ id: e, src: t = null, alt: s = '' }) =>
          t ? (0, o.createElement)('img', { className: n(e), src: t, alt: s }) : null;
    },
    6159: (e, t, s) => {
      'use strict';
      s.d(t, { l: () => n });
      var o = s(3993);
      const n = e => {
        const t = {};
        return (
          e.forEach(e => {
            let s = {};
            'string' == typeof e && (s = { id: e, alt: e, src: null }),
              'object' == typeof e &&
                (s = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
              s.id && (0, o.isString)(s.id) && !t[s.id] && (t[s.id] = s);
          }),
          Object.values(t)
        );
      };
    },
    2026: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => h });
      var o = s(1609),
        n = s(9019),
        a = s.n(n),
        r = s(8575),
        c = s(4166),
        i = s(3576),
        l = s(8994),
        m = s(7104),
        p = s(3993),
        d = s(6087);
      s(777);
      const u = { bank: c.A, bill: i.A, card: l.A, checkPayment: r.A },
        h = ({ icon: e = '', text: t = '' }) => {
          const s = !!e,
            n = (0, d.useCallback)(e => s && (0, p.isString)(e) && (0, p.objectHasProp)(u, e), [s]),
            r = a()('wc-block-components-payment-method-label', {
              'wc-block-components-payment-method-label--with-icon': s,
            });
          return (0, o.createElement)(
            'span',
            { className: r },
            n(e) ? (0, o.createElement)(m.A, { icon: u[e] }) : e,
            t,
          );
        };
    },
    5416: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => i });
      var o = s(1609),
        n = s(7723),
        a = s(9019),
        r = s.n(a),
        c = s(4656);
      s(8375);
      const i = ({
        children: e,
        className: t,
        screenReaderLabel: s,
        showSpinner: a = !1,
        isLoading: i = !0,
      }) =>
        (0, o.createElement)(
          'div',
          { className: r()(t, { 'wc-block-components-loading-mask': i }) },
          i && a && (0, o.createElement)(c.Spinner, null),
          (0, o.createElement)(
            'div',
            {
              className: r()({ 'wc-block-components-loading-mask__children': i }),
              'aria-hidden': i,
            },
            e,
          ),
          i &&
            (0, o.createElement)(
              'span',
              { className: 'screen-reader-text' },
              s || (0, n.__)('Loading…', 'woocommerce'),
            ),
        );
    },
    3551: (e, t, s) => {
      'use strict';
      s.d(t, { k: () => l });
      var o = s(7723),
        n = s(7143),
        a = s(7594),
        r = s(8537),
        c = s(1e3),
        i = s(8605);
      const l = (e = '') => {
        const { cartCoupons: t, cartIsLoading: s } = (0, i.V)(),
          { createErrorNotice: l } = (0, n.useDispatch)('core/notices'),
          { createNotice: m } = (0, n.useDispatch)('core/notices'),
          { setValidationErrors: p } = (0, n.useDispatch)(a.VALIDATION_STORE_KEY),
          { isApplyingCoupon: d, isRemovingCoupon: u } = (0, n.useSelect)(
            e => {
              const t = e(a.CART_STORE_KEY);
              return {
                isApplyingCoupon: t.isApplyingCoupon(),
                isRemovingCoupon: t.isRemovingCoupon(),
              };
            },
            [l, m],
          ),
          { applyCoupon: h, removeCoupon: g } = (0, n.useDispatch)(a.CART_STORE_KEY),
          y = (0, n.useSelect)(e => e(a.CHECKOUT_STORE_KEY).getOrderId());
        return {
          appliedCoupons: t,
          isLoading: s,
          applyCoupon: t =>
            h(t)
              .then(
                () => (
                  (0, c.applyCheckoutFilter)({
                    filterName: 'showApplyCouponNotice',
                    defaultValue: !0,
                    arg: { couponCode: t, context: e },
                  }) &&
                    m(
                      'info',
                      (0, o.sprintf) /* translators: %s coupon code. */(
                        /* translators: %s coupon code. */
                        (0, o.__)('Coupon code "%s" has been applied to your cart.', 'woocommerce'),
                        t,
                      ),
                      { id: 'coupon-form', type: 'snackbar', context: e },
                    ),
                  Promise.resolve(!0)
                ),
              )
              .catch(e => {
                const t = (e => {
                  var t, s, o, n;
                  return y &&
                    y > 0 &&
                    null != e &&
                    null !== (t = e.data) &&
                    void 0 !== t &&
                    null !== (s = t.details) &&
                    void 0 !== s &&
                    s.checkout
                    ? e.data.details.checkout
                    : null != e &&
                      null !== (o = e.data) &&
                      void 0 !== o &&
                      null !== (n = o.details) &&
                      void 0 !== n &&
                      n.cart
                    ? e.data.details.cart
                    : e.message;
                })(e);
                return (
                  p({ coupon: { message: (0, r.decodeEntities)(t), hidden: !1 } }),
                  Promise.resolve(!1)
                );
              }),
          removeCoupon: t =>
            g(t)
              .then(
                () => (
                  (0, c.applyCheckoutFilter)({
                    filterName: 'showRemoveCouponNotice',
                    defaultValue: !0,
                    arg: { couponCode: t, context: e },
                  }) &&
                    m(
                      'info',
                      (0, o.sprintf) /* translators: %s coupon code. */(
                        /* translators: %s coupon code. */
                        (0, o.__)(
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
              .catch(t => (l(t.message, { id: 'coupon-form', context: e }), Promise.resolve(!1))),
          isApplyingCoupon: d,
          isRemovingCoupon: u,
        };
      };
    },
    5010: (e, t, s) => {
      'use strict';
      s.d(t, { Y: () => k });
      var o = s(7723),
        n = s(8529),
        a = s(6087),
        r = s(2026),
        c = s(8390),
        i = s(5703),
        l = s(4040),
        m = s.n(l),
        p = s(5416),
        d = s(7143),
        u = s(7594),
        h = s(4656),
        g = s(8605),
        y = s(3551),
        E = s(2379),
        v = s(1614),
        P = s(8465),
        S = s(5353),
        b = s(9357),
        _ = s(4958);
      const k = () => {
        const {
            onCheckoutBeforeProcessing: e,
            onCheckoutValidationBeforeProcessing: t,
            onCheckoutAfterProcessingWithSuccess: s,
            onCheckoutAfterProcessingWithError: l,
            onSubmit: k,
            onCheckoutSuccess: C,
            onCheckoutFail: w,
            onCheckoutValidation: x,
          } = (0, v.E)(),
          { isCalculating: M, isComplete: R, isIdle: f, isProcessing: A, customerId: I } = (0,
          d.useSelect)(e => {
            const t = e(u.CHECKOUT_STORE_KEY);
            return {
              isComplete: t.isComplete(),
              isIdle: t.isIdle(),
              isProcessing: t.isProcessing(),
              customerId: t.getCustomerId(),
              isCalculating: t.isCalculating(),
            };
          }),
          { paymentStatus: T, activePaymentMethod: N, shouldSavePayment: W } = (0, d.useSelect)(
            e => {
              const t = e(u.PAYMENT_STORE_KEY);
              return {
                paymentStatus: {
                  get isPristine() {
                    return (
                      m()('isPristine', {
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
                      m()('isFinished', {
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
                      m()('hasFailed', {
                        since: '9.6.0',
                        plugin: 'WooCommerce Blocks',
                        link: 'https://github.com/woocommerce/woocommerce-blocks/pull/8110',
                      }),
                      t.hasPaymentError()
                    );
                  },
                  get isSuccessful() {
                    return (
                      m()('isSuccessful', {
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
          { __internalSetExpressPaymentError: D } = (0, d.useDispatch)(u.PAYMENT_STORE_KEY),
          { onPaymentProcessing: O, onPaymentSetup: Y } = (0, P.e)(),
          {
            shippingErrorStatus: F,
            shippingErrorTypes: V,
            onShippingRateSuccess: z,
            onShippingRateFail: B,
            onShippingRateSelectSuccess: K,
            onShippingRateSelectFail: L,
          } = (0, S.H)(),
          {
            shippingRates: j,
            isLoadingRates: H,
            selectedRates: U,
            isSelectingRate: G,
            selectShippingRate: J,
            needsShipping: X,
          } = (0, _.m)(),
          { billingAddress: $, shippingAddress: q } = (0, d.useSelect)(e =>
            e(u.CART_STORE_KEY).getCustomerData(),
          ),
          { setShippingAddress: Q } = (0, d.useDispatch)(u.CART_STORE_KEY),
          { cartItems: Z, cartFees: ee, cartTotals: te, extensions: se } = (0, g.V)(),
          { appliedCoupons: oe } = (0, y.k)(),
          ne = (0, a.useRef)((0, b.G)(te, X)),
          ae = (0, a.useRef)({
            label: (0, o.__)('Total', 'woocommerce'),
            value: parseInt(te.total_price, 10),
          });
        (0, a.useEffect)(() => {
          (ne.current = (0, b.G)(te, X)),
            (ae.current = {
              label: (0, o.__)('Total', 'woocommerce'),
              value: parseInt(te.total_price, 10),
            });
        }, [te, X]);
        const re = (0, a.useCallback)(
          (e = '') => {
            m()(
              'setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).',
              {
                alternative: '',
                plugin: 'woocommerce-gutenberg-products-block',
                link:
                  'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228',
              },
            ),
              D(e);
          },
          [D],
        );
        return {
          activePaymentMethod: N,
          billing: {
            appliedCoupons: oe,
            billingAddress: $,
            billingData: $,
            cartTotal: ae.current,
            cartTotalItems: ne.current,
            currency: (0, n.getCurrencyFromPriceResponse)(te),
            customerId: I,
            displayPricesIncludingTax: (0, i.getSetting)('displayCartPricesIncludingTax', !1),
          },
          cartData: { cartItems: Z, cartFees: ee, extensions: se },
          checkoutStatus: { isCalculating: M, isComplete: R, isIdle: f, isProcessing: A },
          components: {
            LoadingMask: p.A,
            PaymentMethodIcons: c.h,
            PaymentMethodLabel: r.A,
            ValidationInputError: h.ValidationInputError,
          },
          emitResponse: { noticeContexts: E.tG, responseTypes: E.hT },
          eventRegistration: {
            onCheckoutAfterProcessingWithError: l,
            onCheckoutAfterProcessingWithSuccess: s,
            onCheckoutBeforeProcessing: e,
            onCheckoutValidationBeforeProcessing: t,
            onCheckoutSuccess: C,
            onCheckoutFail: w,
            onCheckoutValidation: x,
            onPaymentProcessing: O,
            onPaymentSetup: Y,
            onShippingRateFail: B,
            onShippingRateSelectFail: L,
            onShippingRateSelectSuccess: K,
            onShippingRateSuccess: z,
          },
          onSubmit: k,
          paymentStatus: T,
          setExpressPaymentError: re,
          shippingData: {
            isSelectingRate: G,
            needsShipping: X,
            selectedRates: U,
            setSelectedRates: J,
            setShippingAddress: Q,
            shippingAddress: q,
            shippingRates: j,
            shippingRatesLoading: H,
          },
          shippingStatus: { shippingErrorStatus: F, shippingErrorTypes: V },
          shouldSavePayment: W,
        };
      };
    },
    6379: (e, t, s) => {
      'use strict';
      s.d(t, { m: () => i, u: () => l });
      var o = s(1573),
        n = s(4083),
        a = s(7143),
        r = s(7594);
      const c = (e = !1) => {
          const {
              paymentMethodsInitialized: t,
              expressPaymentMethodsInitialized: s,
              availablePaymentMethods: c,
              availableExpressPaymentMethods: i,
            } = (0, a.useSelect)(e => {
              const t = e(r.PAYMENT_STORE_KEY);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
              };
            }),
            l = Object.values(c).map(({ name: e }) => e),
            m = Object.values(i).map(({ name: e }) => e),
            p = (0, n.getPaymentMethods)(),
            d = (0, n.getExpressPaymentMethods)(),
            u = Object.keys(p).reduce((e, t) => (l.includes(t) && (e[t] = p[t]), e), {}),
            h = Object.keys(d).reduce((e, t) => (m.includes(t) && (e[t] = d[t]), e), {}),
            g = (0, o.c)(u),
            y = (0, o.c)(h);
          return { paymentMethods: e ? y : g, isInitialized: e ? s : t };
        },
        i = () => c(!1),
        l = () => c(!0);
    },
    9357: (e, t, s) => {
      'use strict';
      s.d(t, { G: () => a });
      var o = s(7723),
        n = s(3993);
      const a = (e, t) => {
        const s = [],
          a = (t, s) => {
            const o = s + '_tax',
              a = (0, n.objectHasProp)(e, s) && (0, n.isString)(e[s]) ? parseInt(e[s], 10) : 0;
            return {
              key: s,
              label: t,
              value: a,
              valueWithTax:
                a + ((0, n.objectHasProp)(e, o) && (0, n.isString)(e[o]) ? parseInt(e[o], 10) : 0),
            };
          };
        return (
          s.push(a((0, o.__)('Subtotal:', 'woocommerce'), 'total_items')),
          s.push(a((0, o.__)('Fees:', 'woocommerce'), 'total_fees')),
          s.push(a((0, o.__)('Discount:', 'woocommerce'), 'total_discount')),
          s.push({
            key: 'total_tax',
            label: (0, o.__)('Taxes:', 'woocommerce'),
            value: parseInt(e.total_tax, 10),
            valueWithTax: parseInt(e.total_tax, 10),
          }),
          t && s.push(a((0, o.__)('Shipping:', 'woocommerce'), 'total_shipping')),
          s
        );
      };
    },
    1573: (e, t, s) => {
      'use strict';
      s.d(t, { c: () => r });
      var o = s(6087),
        n = s(923),
        a = s.n(n);
      function r(e) {
        const t = (0, o.useRef)(e);
        return a()(e, t.current) || (t.current = e), t.current;
      }
    },
    8628: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => p });
      var o = s(2294),
        n = s(1609),
        a = s(7723),
        r = s(6087),
        c = s(5703),
        i = s(4656),
        l = s(2379);
      class m extends r.Component {
        constructor(...e) {
          super(...e), (0, o.A)(this, 'state', { errorMessage: '', hasError: !1 });
        }
        static getDerivedStateFromError(e) {
          return { errorMessage: e.message, hasError: !0 };
        }
        render() {
          const { hasError: e, errorMessage: t } = this.state,
            { isEditor: s } = this.props;
          if (e) {
            let e = (0, a.__)(
              'We are experiencing difficulties with this payment method. Please contact us for assistance.',
              'woocommerce',
            );
            (s || c.CURRENT_USER_IS_ADMIN) &&
              (e =
                t ||
                (0, a.__)(
                  "There was an error with this payment method. Please verify it's configured correctly.",
                  'woocommerce',
                ));
            const o = [{ id: '0', content: e, isDismissible: !1, status: 'error' }];
            return (0, n.createElement)(i.StoreNoticesContainer, {
              additionalNotices: o,
              context: l.tG.PAYMENTS,
            });
          }
          return this.props.children;
        }
      }
      const p = m;
    },
    1678: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => _ });
      var o = s(1609),
        n = s(8605),
        a = s(7723),
        r = s(2663),
        c = s(2379),
        i = s(4656),
        l = s(5416),
        m = s(5703),
        p = s(7594),
        d = s(7143),
        u = s(6379),
        h = s(5010),
        g = s(6087),
        y = s(4040),
        E = s.n(y),
        v = s(8628),
        P = s(2652);
      const S = () => {
        const { isEditor: e } = (0, r.m)(),
          { activePaymentMethod: t, paymentMethodData: s } = (0, d.useSelect)(e => {
            const t = e(P.U);
            return {
              activePaymentMethod: t.getActivePaymentMethod(),
              paymentMethodData: t.getPaymentMethodData(),
            };
          }),
          {
            __internalSetActivePaymentMethod: n,
            __internalSetExpressPaymentStarted: c,
            __internalSetPaymentIdle: i,
            __internalSetPaymentError: l,
            __internalSetPaymentMethodData: m,
            __internalSetExpressPaymentError: p,
          } = (0, d.useDispatch)(P.U),
          { paymentMethods: y } = (0, u.u)(),
          S = (0, h.Y)(),
          b = (0, g.useRef)(t),
          _ = (0, g.useRef)(s),
          k = (0, g.useCallback)(
            e => () => {
              (b.current = t), (_.current = s), c(), n(e);
            },
            [t, s, n, c],
          ),
          C = (0, g.useCallback)(() => {
            i(), n(b.current, _.current);
          }, [n, i]),
          w = (0, g.useCallback)(
            e => {
              l(), m(e), p(e), n(b.current, _.current);
            },
            [n, l, m, p],
          ),
          x = (0, g.useCallback)(
            (e = '') => {
              E()('Express Payment Methods should use the provided onError handler instead.', {
                alternative: 'onError',
                plugin: 'woocommerce-gutenberg-products-block',
                link:
                  'https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228',
              }),
                e ? w(e) : p('');
            },
            [p, w],
          ),
          M = Object.entries(y),
          R =
            M.length > 0
              ? M.map(([t, s]) => {
                  const n = e ? s.edit : s.content;
                  return (0, g.isValidElement)(n)
                    ? (0, o.createElement)(
                        'li',
                        { key: t, id: `express-payment-method-${t}` },
                        (0, g.cloneElement)(n, {
                          ...S,
                          onClick: k(t),
                          onClose: C,
                          onError: w,
                          setExpressPaymentError: x,
                        }),
                      )
                    : null;
                })
              : (0, o.createElement)(
                  'li',
                  { key: 'noneRegistered' },
                  (0, a.__)('No registered Payment Methods', 'woocommerce'),
                );
        return (0, o.createElement)(
          v.A,
          { isEditor: e },
          (0, o.createElement)(
            'ul',
            { className: 'wc-block-components-express-payment__event-buttons' },
            R,
          ),
        );
      };
      s(9569);
      const b = () => {
          const {
              isCalculating: e,
              isProcessing: t,
              isAfterProcessing: s,
              isBeforeProcessing: n,
              isComplete: u,
              hasError: h,
            } = (0, d.useSelect)(e => {
              const t = e(p.CHECKOUT_STORE_KEY);
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
              availableExpressPaymentMethods: g,
              expressPaymentMethodsInitialized: y,
              isExpressPaymentMethodActive: E,
            } = (0, d.useSelect)(e => {
              const t = e(p.PAYMENT_STORE_KEY);
              return {
                availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
              };
            }),
            { isEditor: v } = (0, r.m)();
          if (!y || (y && 0 === Object.keys(g).length))
            return v || m.CURRENT_USER_IS_ADMIN
              ? (0, o.createElement)(i.StoreNoticesContainer, { context: c.tG.EXPRESS_PAYMENTS })
              : null;
          const P = t || s || n || (u && !h);
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)(
              l.A,
              { isLoading: e || P || E },
              (0, o.createElement)(
                'div',
                {
                  className:
                    'wc-block-components-express-payment wc-block-components-express-payment--checkout',
                },
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-components-express-payment__title-container' },
                  (0, o.createElement)(
                    i.Title,
                    { className: 'wc-block-components-express-payment__title', headingLevel: '2' },
                    (0, a.__)('Express Checkout', 'woocommerce'),
                  ),
                ),
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-components-express-payment__content' },
                  (0, o.createElement)(i.StoreNoticesContainer, { context: c.tG.EXPRESS_PAYMENTS }),
                  (0, o.createElement)(S, null),
                ),
              ),
            ),
            (0, o.createElement)(
              'div',
              {
                className:
                  'wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--checkout',
              },
              (0, a.__)('Or continue below', 'woocommerce'),
            ),
          );
        },
        _ = ({ className: e }) => {
          const { cartNeedsPayment: t } = (0, n.V)();
          return t
            ? (0, o.createElement)('div', { className: e }, (0, o.createElement)(b, null))
            : null;
        };
    },
    2652: (e, t, s) => {
      'use strict';
      s.d(t, { U: () => o });
      const o = 'wc/store/payment';
    },
    8575: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var o = s(1609),
        n = s(5573);
      const a = (0, o.createElement)(
        n.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, o.createElement)(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          (0, o.createElement)('path', { d: 'M0 0h24v24H0z' }),
          (0, o.createElement)('path', {
            fill: '#000',
            fillRule: 'nonzero',
            d:
              'M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z',
          }),
          (0, o.createElement)('path', {
            stroke: '#000',
            strokeLinecap: 'round',
            d: 'M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8',
          }),
        ),
      );
    },
    4957: () => {},
    777: () => {},
    8375: () => {},
    9569: () => {},
  },
]);
