(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [6073],
  {
    4845: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => d });
      var n = s(1609),
        o = s(8165),
        a = s(6087),
        r = s(9019),
        i = s.n(r),
        c = s(4040),
        l = s.n(c),
        m = (s(2080), s(8730));
      const d = (0, a.forwardRef)((e, t) => {
        'showSpinner' in e &&
          l()('showSpinner prop', {
            version: '8.9.0',
            alternative: 'Render a spinner in the button children instead.',
            plugin: 'WooCommerce',
          });
        const {
            className: s,
            showSpinner: a = !1,
            children: r,
            variant: c = 'contained',
            removeTextWrap: d = !1,
            ...p
          } = e,
          u = i()('wc-block-components-button', 'wp-element-button', s, c, {
            'wc-block-components-button--loading': a,
          });
        if ('href' in e)
          return (0, n.createElement)(o.$, {
            render: (0, n.createElement)(
              'a',
              { ref: t, href: e.href },
              a && (0, n.createElement)(m.A, null),
              (0, n.createElement)('span', { className: 'wc-block-components-button__text' }, r),
            ),
            className: u,
            ...p,
          });
        const h = d
          ? e.children
          : (0, n.createElement)(
              'span',
              { className: 'wc-block-components-button__text' },
              e.children,
            );
        return (0, n.createElement)(
          o.$,
          { ref: t, className: u, ...p },
          a && (0, n.createElement)(m.A, null),
          h,
        );
      });
    },
    490: (e, t, s) => {
      'use strict';
      s.d(t, { n: () => a });
      var n = s(812);
      const o = [
          { id: 'alipay', alt: 'Alipay', src: n.sW + 'payment-methods/alipay.svg' },
          { id: 'amex', alt: 'American Express', src: n.sW + 'payment-methods/amex.svg' },
          { id: 'bancontact', alt: 'Bancontact', src: n.sW + 'payment-methods/bancontact.svg' },
          { id: 'diners', alt: 'Diners Club', src: n.sW + 'payment-methods/diners.svg' },
          { id: 'discover', alt: 'Discover', src: n.sW + 'payment-methods/discover.svg' },
          { id: 'eps', alt: 'EPS', src: n.sW + 'payment-methods/eps.svg' },
          { id: 'giropay', alt: 'Giropay', src: n.sW + 'payment-methods/giropay.svg' },
          { id: 'ideal', alt: 'iDeal', src: n.sW + 'payment-methods/ideal.svg' },
          { id: 'jcb', alt: 'JCB', src: n.sW + 'payment-methods/jcb.svg' },
          { id: 'laser', alt: 'Laser', src: n.sW + 'payment-methods/laser.svg' },
          { id: 'maestro', alt: 'Maestro', src: n.sW + 'payment-methods/maestro.svg' },
          { id: 'mastercard', alt: 'Mastercard', src: n.sW + 'payment-methods/mastercard.svg' },
          { id: 'multibanco', alt: 'Multibanco', src: n.sW + 'payment-methods/multibanco.svg' },
          { id: 'p24', alt: 'Przelewy24', src: n.sW + 'payment-methods/p24.svg' },
          { id: 'sepa', alt: 'Sepa', src: n.sW + 'payment-methods/sepa.svg' },
          { id: 'sofort', alt: 'Sofort', src: n.sW + 'payment-methods/sofort.svg' },
          { id: 'unionpay', alt: 'Union Pay', src: n.sW + 'payment-methods/unionpay.svg' },
          { id: 'visa', alt: 'Visa', src: n.sW + 'payment-methods/visa.svg' },
          { id: 'wechat', alt: 'WeChat', src: n.sW + 'payment-methods/wechat.svg' },
        ],
        a = e => o.find(t => t.id === e) || {};
    },
    8390: (e, t, s) => {
      'use strict';
      s.d(t, { h: () => l });
      var n = s(1609),
        o = s(9019),
        a = s.n(o),
        r = s(8344),
        i = s(490),
        c = s(6159);
      s(4957);
      const l = ({ icons: e = [], align: t = 'center', className: s }) => {
        const o = (0, c.l)(e);
        if (0 === o.length) return null;
        const l = a()(
          'wc-block-components-payment-method-icons',
          {
            'wc-block-components-payment-method-icons--align-left': 'left' === t,
            'wc-block-components-payment-method-icons--align-right': 'right' === t,
          },
          s,
        );
        return (0, n.createElement)(
          'div',
          { className: l },
          o.map(e => {
            const t = { ...e, ...(0, i.n)(e.id) };
            return (0, n.createElement)(r.A, { key: 'payment-method-icon-' + e.id, ...t });
          }),
        );
      };
    },
    8344: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var n = s(1609);
      const o = e =>
          `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
        a = ({ id: e, src: t = null, alt: s = '' }) =>
          t ? (0, n.createElement)('img', { className: o(e), src: t, alt: s }) : null;
    },
    6159: (e, t, s) => {
      'use strict';
      s.d(t, { l: () => o });
      var n = s(3993);
      const o = e => {
        const t = {};
        return (
          e.forEach(e => {
            let s = {};
            'string' == typeof e && (s = { id: e, alt: e, src: null }),
              'object' == typeof e &&
                (s = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
              s.id && (0, n.isString)(s.id) && !t[s.id] && (t[s.id] = s);
          }),
          Object.values(t)
        );
      };
    },
    2026: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => h });
      var n = s(1609),
        o = s(9019),
        a = s.n(o),
        r = s(8575),
        i = s(4166),
        c = s(3576),
        l = s(8994),
        m = s(7104),
        d = s(3993),
        p = s(6087);
      s(777);
      const u = { bank: i.A, bill: c.A, card: l.A, checkPayment: r.A },
        h = ({ icon: e = '', text: t = '' }) => {
          const s = !!e,
            o = (0, p.useCallback)(e => s && (0, d.isString)(e) && (0, d.objectHasProp)(u, e), [s]),
            r = a()('wc-block-components-payment-method-label', {
              'wc-block-components-payment-method-label--with-icon': s,
            });
          return (0, n.createElement)(
            'span',
            { className: r },
            o(e) ? (0, n.createElement)(m.A, { icon: u[e] }) : e,
            t,
          );
        };
    },
    5416: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => c });
      var n = s(1609),
        o = s(7723),
        a = s(9019),
        r = s.n(a),
        i = s(4656);
      s(8375);
      const c = ({
        children: e,
        className: t,
        screenReaderLabel: s,
        showSpinner: a = !1,
        isLoading: c = !0,
      }) =>
        (0, n.createElement)(
          'div',
          { className: r()(t, { 'wc-block-components-loading-mask': c }) },
          c && a && (0, n.createElement)(i.Spinner, null),
          (0, n.createElement)(
            'div',
            {
              className: r()({ 'wc-block-components-loading-mask__children': c }),
              'aria-hidden': c,
            },
            e,
          ),
          c &&
            (0, n.createElement)(
              'span',
              { className: 'screen-reader-text' },
              s || (0, o.__)('Loading…', 'woocommerce'),
            ),
        );
    },
    6988: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => p });
      var n = s(1609),
        o = s(9019),
        a = s.n(o),
        r = s(7723),
        i = s(7104),
        c = s(1208),
        l = (s(9345), s(9113)),
        m = s(4845),
        d = s(7666);
      const p = ({
        className: e,
        status: t = 'default',
        children: s,
        spokenMessage: o = s,
        onRemove: p = () => {},
        isDismissible: u = !0,
        politeness: h = (0, l.A)(t),
        summary: g,
      }) => (
        (0, d.$)(o, h),
        (0, n.createElement)(
          'div',
          {
            className: a()(e, 'wc-block-components-notice-banner', 'is-' + t, {
              'is-dismissible': u,
            }),
          },
          (0, n.createElement)(i.A, { icon: (0, l.c)(t) }),
          (0, n.createElement)(
            'div',
            { className: 'wc-block-components-notice-banner__content' },
            g &&
              (0, n.createElement)(
                'p',
                { className: 'wc-block-components-notice-banner__summary' },
                g,
              ),
            s,
          ),
          !!u &&
            (0, n.createElement)(
              m.A,
              {
                className: 'wc-block-components-notice-banner__dismiss',
                'aria-label': (0, r.__)('Dismiss this notice', 'woocommerce'),
                onClick: e => {
                  'function' == typeof (null == e ? void 0 : e.preventDefault) &&
                    e.preventDefault &&
                    e.preventDefault(),
                    p();
                },
                removeTextWrap: !0,
              },
              (0, n.createElement)(i.A, { icon: c.A }),
            ),
        )
      );
    },
    9113: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => r, c: () => i });
      var n = s(2900),
        o = s(2478),
        a = s(8306);
      const r = e => {
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
        i = e => {
          switch (e) {
            case 'success':
              return n.A;
            case 'warning':
            case 'info':
            case 'error':
              return o.A;
            default:
              return a.A;
          }
        };
    },
    3551: (e, t, s) => {
      'use strict';
      s.d(t, { k: () => l });
      var n = s(7723),
        o = s(7143),
        a = s(7594),
        r = s(8537),
        i = s(1e3),
        c = s(8605);
      const l = (e = '') => {
        const { cartCoupons: t, cartIsLoading: s } = (0, c.V)(),
          { createErrorNotice: l } = (0, o.useDispatch)('core/notices'),
          { createNotice: m } = (0, o.useDispatch)('core/notices'),
          { setValidationErrors: d } = (0, o.useDispatch)(a.VALIDATION_STORE_KEY),
          { isApplyingCoupon: p, isRemovingCoupon: u } = (0, o.useSelect)(
            e => {
              const t = e(a.CART_STORE_KEY);
              return {
                isApplyingCoupon: t.isApplyingCoupon(),
                isRemovingCoupon: t.isRemovingCoupon(),
              };
            },
            [l, m],
          ),
          { applyCoupon: h, removeCoupon: g } = (0, o.useDispatch)(a.CART_STORE_KEY),
          y = (0, o.useSelect)(e => e(a.CHECKOUT_STORE_KEY).getOrderId());
        return {
          appliedCoupons: t,
          isLoading: s,
          applyCoupon: t =>
            h(t)
              .then(
                () => (
                  (0, i.applyCheckoutFilter)({
                    filterName: 'showApplyCouponNotice',
                    defaultValue: !0,
                    arg: { couponCode: t, context: e },
                  }) &&
                    m(
                      'info',
                      (0, n.sprintf) /* translators: %s coupon code. */(
                        /* translators: %s coupon code. */
                        (0, n.__)('Coupon code "%s" has been applied to your cart.', 'woocommerce'),
                        t,
                      ),
                      { id: 'coupon-form', type: 'snackbar', context: e },
                    ),
                  Promise.resolve(!0)
                ),
              )
              .catch(e => {
                const t = (e => {
                  var t, s, n, o;
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
                      null !== (n = e.data) &&
                      void 0 !== n &&
                      null !== (o = n.details) &&
                      void 0 !== o &&
                      o.cart
                    ? e.data.details.cart
                    : e.message;
                })(e);
                return (
                  d({ coupon: { message: (0, r.decodeEntities)(t), hidden: !1 } }),
                  Promise.resolve(!1)
                );
              }),
          removeCoupon: t =>
            g(t)
              .then(
                () => (
                  (0, i.applyCheckoutFilter)({
                    filterName: 'showRemoveCouponNotice',
                    defaultValue: !0,
                    arg: { couponCode: t, context: e },
                  }) &&
                    m(
                      'info',
                      (0, n.sprintf) /* translators: %s coupon code. */(
                        /* translators: %s coupon code. */
                        (0, n.__)(
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
          isApplyingCoupon: p,
          isRemovingCoupon: u,
        };
      };
    },
    5010: (e, t, s) => {
      'use strict';
      s.d(t, { Y: () => P });
      var n = s(7723),
        o = s(8529),
        a = s(6087),
        r = s(2026),
        i = s(8390),
        c = s(5703),
        l = s(4040),
        m = s.n(l),
        d = s(5416),
        p = s(7143),
        u = s(7594),
        h = s(4656),
        g = s(8605),
        y = s(3551),
        v = s(2379),
        _ = s(1614),
        S = s(8465),
        b = s(5353),
        E = s(9357),
        k = s(4958);
      const P = () => {
        const {
            onCheckoutBeforeProcessing: e,
            onCheckoutValidationBeforeProcessing: t,
            onCheckoutAfterProcessingWithSuccess: s,
            onCheckoutAfterProcessingWithError: l,
            onSubmit: P,
            onCheckoutSuccess: C,
            onCheckoutFail: f,
            onCheckoutValidation: w,
          } = (0, _.E)(),
          { isCalculating: A, isComplete: R, isIdle: M, isProcessing: T, customerId: N } = (0,
          p.useSelect)(e => {
            const t = e(u.CHECKOUT_STORE_KEY);
            return {
              isComplete: t.isComplete(),
              isIdle: t.isIdle(),
              isProcessing: t.isProcessing(),
              customerId: t.getCustomerId(),
              isCalculating: t.isCalculating(),
            };
          }),
          { paymentStatus: x, activePaymentMethod: I, shouldSavePayment: D } = (0, p.useSelect)(
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
          { __internalSetExpressPaymentError: W } = (0, p.useDispatch)(u.PAYMENT_STORE_KEY),
          { onPaymentProcessing: O, onPaymentSetup: Y } = (0, S.e)(),
          {
            shippingErrorStatus: F,
            shippingErrorTypes: B,
            onShippingRateSuccess: K,
            onShippingRateFail: V,
            onShippingRateSelectSuccess: L,
            onShippingRateSelectFail: j,
          } = (0, b.H)(),
          {
            shippingRates: H,
            isLoadingRates: U,
            selectedRates: $,
            isSelectingRate: z,
            selectShippingRate: G,
            needsShipping: q,
          } = (0, k.m)(),
          { billingAddress: J, shippingAddress: Q } = (0, p.useSelect)(e =>
            e(u.CART_STORE_KEY).getCustomerData(),
          ),
          { setShippingAddress: X } = (0, p.useDispatch)(u.CART_STORE_KEY),
          { cartItems: Z, cartFees: ee, cartTotals: te, extensions: se } = (0, g.V)(),
          { appliedCoupons: ne } = (0, y.k)(),
          oe = (0, a.useRef)((0, E.G)(te, q)),
          ae = (0, a.useRef)({
            label: (0, n.__)('Total', 'woocommerce'),
            value: parseInt(te.total_price, 10),
          });
        (0, a.useEffect)(() => {
          (oe.current = (0, E.G)(te, q)),
            (ae.current = {
              label: (0, n.__)('Total', 'woocommerce'),
              value: parseInt(te.total_price, 10),
            });
        }, [te, q]);
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
              W(e);
          },
          [W],
        );
        return {
          activePaymentMethod: I,
          billing: {
            appliedCoupons: ne,
            billingAddress: J,
            billingData: J,
            cartTotal: ae.current,
            cartTotalItems: oe.current,
            currency: (0, o.getCurrencyFromPriceResponse)(te),
            customerId: N,
            displayPricesIncludingTax: (0, c.getSetting)('displayCartPricesIncludingTax', !1),
          },
          cartData: { cartItems: Z, cartFees: ee, extensions: se },
          checkoutStatus: { isCalculating: A, isComplete: R, isIdle: M, isProcessing: T },
          components: {
            LoadingMask: d.A,
            PaymentMethodIcons: i.h,
            PaymentMethodLabel: r.A,
            ValidationInputError: h.ValidationInputError,
          },
          emitResponse: { noticeContexts: v.tG, responseTypes: v.hT },
          eventRegistration: {
            onCheckoutAfterProcessingWithError: l,
            onCheckoutAfterProcessingWithSuccess: s,
            onCheckoutBeforeProcessing: e,
            onCheckoutValidationBeforeProcessing: t,
            onCheckoutSuccess: C,
            onCheckoutFail: f,
            onCheckoutValidation: w,
            onPaymentProcessing: O,
            onPaymentSetup: Y,
            onShippingRateFail: V,
            onShippingRateSelectFail: j,
            onShippingRateSelectSuccess: L,
            onShippingRateSuccess: K,
          },
          onSubmit: P,
          paymentStatus: x,
          setExpressPaymentError: re,
          shippingData: {
            isSelectingRate: z,
            needsShipping: q,
            selectedRates: $,
            setSelectedRates: G,
            setShippingAddress: X,
            shippingAddress: Q,
            shippingRates: H,
            shippingRatesLoading: U,
          },
          shippingStatus: { shippingErrorStatus: F, shippingErrorTypes: B },
          shouldSavePayment: D,
        };
      };
    },
    9357: (e, t, s) => {
      'use strict';
      s.d(t, { G: () => a });
      var n = s(7723),
        o = s(3993);
      const a = (e, t) => {
        const s = [],
          a = (t, s) => {
            const n = s + '_tax',
              a = (0, o.objectHasProp)(e, s) && (0, o.isString)(e[s]) ? parseInt(e[s], 10) : 0;
            return {
              key: s,
              label: t,
              value: a,
              valueWithTax:
                a + ((0, o.objectHasProp)(e, n) && (0, o.isString)(e[n]) ? parseInt(e[n], 10) : 0),
            };
          };
        return (
          s.push(a((0, n.__)('Subtotal:', 'woocommerce'), 'total_items')),
          s.push(a((0, n.__)('Fees:', 'woocommerce'), 'total_fees')),
          s.push(a((0, n.__)('Discount:', 'woocommerce'), 'total_discount')),
          s.push({
            key: 'total_tax',
            label: (0, n.__)('Taxes:', 'woocommerce'),
            value: parseInt(e.total_tax, 10),
            valueWithTax: parseInt(e.total_tax, 10),
          }),
          t && s.push(a((0, n.__)('Shipping:', 'woocommerce'), 'total_shipping')),
          s
        );
      };
    },
    7666: (e, t, s) => {
      'use strict';
      s.d(t, { $: () => a });
      var n = s(6087),
        o = s(195);
      const a = (e, t) => {
        const s = 'string' == typeof e ? e : (0, n.renderToString)(e);
        (0, n.useEffect)(() => {
          s && (0, o.speak)(s, t);
        }, [s, t]);
      };
    },
    8628: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => d });
      var n = s(2294),
        o = s(1609),
        a = s(7723),
        r = s(6087),
        i = s(5703),
        c = s(4656),
        l = s(2379);
      class m extends r.Component {
        constructor(...e) {
          super(...e), (0, n.A)(this, 'state', { errorMessage: '', hasError: !1 });
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
            (s || i.CURRENT_USER_IS_ADMIN) &&
              (e =
                t ||
                (0, a.__)(
                  "There was an error with this payment method. Please verify it's configured correctly.",
                  'woocommerce',
                ));
            const n = [{ id: '0', content: e, isDismissible: !1, status: 'error' }];
            return (0, o.createElement)(c.StoreNoticesContainer, {
              additionalNotices: n,
              context: l.tG.PAYMENTS,
            });
          }
          return this.props.children;
        }
      }
      const d = m;
    },
    9017: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => o });
      var n = s(7723);
      const o = ({
        defaultTitle: e = (0, n.__)('Step', 'woocommerce'),
        defaultDescription: t = (0, n.__)('Step description text.', 'woocommerce'),
        defaultShowStepNumber: s = !0,
      }) => ({
        title: { type: 'string', default: e },
        description: { type: 'string', default: t },
        showStepNumber: { type: 'boolean', default: s },
      });
    },
    3727: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => j });
      var n = s(1609),
        o = s(9019),
        a = s.n(o),
        r = s(8605),
        i = s(1616),
        c = s(4656),
        l = s(7143),
        m = s(7594),
        d = s(2379),
        p = s(9292),
        u = s(7723),
        h = s(6988);
      s(1637);
      const g = () =>
        (0, n.createElement)(
          h.A,
          {
            isDismissible: !1,
            className: 'wc-block-checkout__no-payment-methods-notice',
            status: 'error',
          },
          (0, u.__)(
            'There are no payment methods available. This may be an error on our side. Please contact us if you need any help placing your order.',
            'woocommerce',
          ),
        );
      var y = s(5010),
        v = s(3603),
        _ = s(6087),
        S = s(2663),
        b = s(4083),
        E = s(8628);
      const k = ({ children: e, showSaveOption: t }) => {
        const { isEditor: s } = (0, S.m)(),
          { shouldSavePaymentMethod: o, customerId: a } = (0, l.useSelect)(e => {
            const t = e(m.PAYMENT_STORE_KEY),
              s = e(m.CHECKOUT_STORE_KEY);
            return {
              shouldSavePaymentMethod: t.getShouldSavePaymentMethod(),
              customerId: s.getCustomerId(),
            };
          }),
          { __internalSetShouldSavePaymentMethod: r } = (0, l.useDispatch)(m.PAYMENT_STORE_KEY);
        return (0, n.createElement)(
          E.A,
          { isEditor: s },
          e,
          a > 0 &&
            t &&
            (0, n.createElement)(c.CheckboxControl, {
              className: 'wc-block-components-payment-methods__save-card-info',
              label: (0, u.__)(
                'Save payment information to my account for future purchases.',
                'woocommerce',
              ),
              checked: o,
              onChange: () => r(!o),
            }),
        );
      };
      var P = s(2652);
      const C = () => {
        const {
            activeSavedToken: e,
            activePaymentMethod: t,
            isExpressPaymentMethodActive: s,
            savedPaymentMethods: o,
            availablePaymentMethods: r,
          } = (0, l.useSelect)(e => {
            const t = e(P.U);
            return {
              activeSavedToken: t.getActiveSavedToken(),
              activePaymentMethod: t.getActivePaymentMethod(),
              isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
              savedPaymentMethods: t.getSavedPaymentMethods(),
              availablePaymentMethods: t.getAvailablePaymentMethods(),
            };
          }),
          { __internalSetActivePaymentMethod: i } = (0, l.useDispatch)(P.U),
          m = (0, b.getPaymentMethods)(),
          { ...p } = (0, y.Y)(),
          { removeNotice: u } = (0, l.useDispatch)('core/notices'),
          { dispatchCheckoutEvent: h } = (0, v.y)(),
          { isEditor: g } = (0, S.m)(),
          E = Object.keys(r).map(e => {
            const { edit: t, content: s, label: o, supports: a } = m[e],
              r = g ? t : s;
            return {
              value: e,
              label:
                'string' == typeof o ? o : (0, _.cloneElement)(o, { components: p.components }),
              name: `wc-saved-payment-method-token-${e}`,
              content: (0, n.createElement)(
                k,
                { showSaveOption: a.showSaveOption },
                (0, _.cloneElement)(r, { __internalSetActivePaymentMethod: i, ...p }),
              ),
            };
          }),
          C = (0, _.useCallback)(
            e => {
              i(e),
                u('wc-payment-error', d.tG.PAYMENTS),
                h('set-active-payment-method', { value: e });
            },
            [h, u, i],
          ),
          f = 0 === Object.keys(o).length && 1 === Object.keys(m).length,
          w = a()({ 'disable-radio-control': f });
        return s
          ? null
          : (0, n.createElement)(c.RadioControlAccordion, {
              highlightChecked: !0,
              id: 'wc-payment-method-options',
              className: w,
              selected: e ? null : t,
              onChange: C,
              options: E,
            });
      };
      var f = s(3993),
        w = s(5703),
        A = s(4621),
        R = s(5683),
        M = s(1229);
      const T = 'wc/store/cart',
        N = ((0, u.__)('Unable to get cart data from the API.', 'woocommerce'), []),
        x = [],
        I = {},
        D = {};
      Object.keys(w.defaultFields).forEach(e => {
        D[e] = '';
      }),
        delete D.email;
      const W = {};
      Object.keys(w.defaultFields).forEach(e => {
        W[e] = '';
      });
      const O = {
          cartItemsPendingQuantity: [],
          cartItemsPendingDelete: [],
          cartData: {
            coupons: [],
            shippingRates: [],
            shippingAddress: D,
            billingAddress: W,
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
            errors: N,
            paymentMethods: [],
            paymentRequirements: [],
            extensions: I,
          },
          metaData: {
            updatingCustomerData: !1,
            updatingSelectedRate: !1,
            applyingCoupon: '',
            removingCoupon: '',
            isCartDataStale: !1,
          },
          errors: x,
        },
        Y = ({ method: e, expires: t }) => {
          var s, n, o;
          return (0,
          u.sprintf) /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */(
            /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card, %3$s is referring to the expiry date.  */
            (0, u.__)('%1$s ending in %2$s (expires %3$s)', 'woocommerce'),
            null !==
              (s =
                null !== (n = null == e ? void 0 : e.display_brand) && void 0 !== n
                  ? n
                  : null == e || null === (o = e.networks) || void 0 === o
                  ? void 0
                  : o.preferred) && void 0 !== s
              ? s
              : e.brand,
            e.last4,
            t,
          );
        },
        F = ({ method: e }) =>
          e.brand && e.last4
            ? (0,
              u.sprintf) /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */(
                /* translators: %1$s is referring to the payment method brand, %2$s is referring to the last 4 digits of the payment card. */
                (0, u.__)('%1$s ending in %2$s', 'woocommerce'),
                e.brand,
                e.last4,
              )
            : (0, u.sprintf) /* translators: %s is the name of the payment method gateway. */(
                /* translators: %s is the name of the payment method gateway. */
                (0, u.__)('Saved token for %s', 'woocommerce'),
                e.gateway,
              ),
        B = () => {
          var e;
          const { activeSavedToken: t, activePaymentMethod: s, savedPaymentMethods: o } = (0,
            l.useSelect)(e => {
              const t = e(m.PAYMENT_STORE_KEY);
              return {
                activeSavedToken: t.getActiveSavedToken(),
                activePaymentMethod: t.getActivePaymentMethod(),
                savedPaymentMethods: t.getSavedPaymentMethods(),
              };
            }),
            { __internalSetActivePaymentMethod: a } = (0, l.useDispatch)(m.PAYMENT_STORE_KEY),
            r = (() => {
              let e;
              if ((0, l.select)('core/editor')) {
                const t = {
                  cartCoupons: M.B.coupons,
                  cartItems: M.B.items,
                  crossSellsProducts: M.B.cross_sells,
                  cartFees: M.B.fees,
                  cartItemsCount: M.B.items_count,
                  cartItemsWeight: M.B.items_weight,
                  cartNeedsPayment: M.B.needs_payment,
                  cartNeedsShipping: M.B.needs_shipping,
                  cartItemErrors: N,
                  cartTotals: M.B.totals,
                  cartIsLoading: !1,
                  cartErrors: x,
                  billingData: O.cartData.billingAddress,
                  billingAddress: O.cartData.billingAddress,
                  shippingAddress: O.cartData.shippingAddress,
                  extensions: I,
                  shippingRates: M.B.shipping_rates,
                  isLoadingRates: !1,
                  cartHasCalculatedShipping: M.B.has_calculated_shipping,
                  paymentRequirements: M.B.payment_requirements,
                  receiveCart: () => {},
                };
                e = {
                  cart: t,
                  cartTotals: t.cartTotals,
                  cartNeedsShipping: t.cartNeedsShipping,
                  billingData: t.billingAddress,
                  billingAddress: t.billingAddress,
                  shippingAddress: t.shippingAddress,
                  selectedShippingMethods: (0, A.k)(t.shippingRates),
                  paymentMethods: M.B.payment_methods,
                  paymentRequirements: t.paymentRequirements,
                };
              } else {
                const t = (0, l.select)(T),
                  s = t.getCartData(),
                  n = t.getCartErrors(),
                  o = t.getCartTotals(),
                  a = !t.hasFinishedResolution('getCartData'),
                  r = t.isCustomerDataUpdating(),
                  i = (0, A.k)(s.shippingRates);
                e = {
                  cart: {
                    cartCoupons: s.coupons,
                    cartItems: s.items,
                    crossSellsProducts: s.crossSells,
                    cartFees: s.fees,
                    cartItemsCount: s.itemsCount,
                    cartItemsWeight: s.itemsWeight,
                    cartNeedsPayment: s.needsPayment,
                    cartNeedsShipping: s.needsShipping,
                    cartItemErrors: s.errors,
                    cartTotals: o,
                    cartIsLoading: a,
                    cartErrors: n,
                    billingData: (0, R.TU)(s.billingAddress),
                    billingAddress: (0, R.TU)(s.billingAddress),
                    shippingAddress: (0, R.TU)(s.shippingAddress),
                    extensions: s.extensions,
                    shippingRates: s.shippingRates,
                    isLoadingRates: r,
                    cartHasCalculatedShipping: s.hasCalculatedShipping,
                    paymentRequirements: s.paymentRequirements,
                    receiveCart: (0, l.dispatch)(T).receiveCart,
                  },
                  cartTotals: s.totals,
                  cartNeedsShipping: s.needsShipping,
                  billingData: s.billingAddress,
                  billingAddress: s.billingAddress,
                  shippingAddress: s.shippingAddress,
                  selectedShippingMethods: i,
                  paymentMethods: s.paymentMethods,
                  paymentRequirements: s.paymentRequirements,
                };
              }
              return e;
            })(),
            i = (0, b.getPaymentMethods)(),
            p = (0, y.Y)(),
            { removeNotice: u } = (0, l.useDispatch)('core/notices'),
            { dispatchCheckoutEvent: h } = (0, v.y)(),
            g = (0, _.useMemo)(() => {
              const e = Object.keys(o),
                t = new Set(e.flatMap(e => o[e].map(e => e.method.gateway))),
                s = Array.from(t).filter(e => {
                  var t;
                  return null === (t = i[e]) || void 0 === t ? void 0 : t.canMakePayment(r);
                });
              return e
                .flatMap(e =>
                  o[e].map(t => {
                    if (!s.includes(t.method.gateway)) return;
                    const n = 'cc' === e || 'echeck' === e,
                      o = t.method.gateway;
                    return {
                      name: `wc-saved-payment-method-token-${o}`,
                      label: n ? Y(t) : F(t),
                      value: t.tokenId.toString(),
                      onChange: e => {
                        a(o, {
                          token: e,
                          payment_method: o,
                          [`wc-${o}-payment-token`]: e.toString(),
                          isSavedToken: !0,
                        }),
                          u('wc-payment-error', d.tG.PAYMENTS),
                          h('set-active-payment-method', { paymentMethodSlug: o });
                      },
                    };
                  }),
                )
                .filter(e => void 0 !== e);
            }, [o, i, a, u, h, r]),
            S =
              t &&
              i[s] &&
              void 0 !== (null === (e = i[s]) || void 0 === e ? void 0 : e.savedTokenComponent) &&
              !(0, f.isNull)(i[s].savedTokenComponent)
                ? (0, _.cloneElement)(i[s].savedTokenComponent, { token: t, ...p })
                : null;
          return g.length > 0
            ? (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)(c.RadioControl, {
                  highlightChecked: !0,
                  id: 'wc-payment-method-saved-tokens',
                  selected: t,
                  options: g,
                  onChange: () => {},
                }),
                S,
              )
            : null;
        };
      s(181);
      const K = () => {
          const {
            paymentMethodsInitialized: e,
            availablePaymentMethods: t,
            savedPaymentMethods: s,
          } = (0, l.useSelect)(e => {
            const t = e(m.PAYMENT_STORE_KEY);
            return {
              paymentMethodsInitialized: t.paymentMethodsInitialized(),
              availablePaymentMethods: t.getAvailablePaymentMethods(),
              savedPaymentMethods: t.getSavedPaymentMethods(),
            };
          });
          return e && 0 === Object.keys(t).length
            ? (0, n.createElement)(g, null)
            : (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)(B, null),
                Object.keys(s).length > 0 &&
                  (0, n.createElement)(c.Label, {
                    label: (0, u.__)('Use another payment method.', 'woocommerce'),
                    screenReaderLabel: (0, u.__)('Other available payment methods', 'woocommerce'),
                    wrapperElement: 'p',
                    wrapperProps: {
                      className: [
                        'wc-block-components-checkout-step__description wc-block-components-checkout-step__description-payments-aligned',
                      ],
                    },
                  }),
                (0, n.createElement)(C, null),
              );
        },
        V = () => (0, n.createElement)(K, null),
        L = {
          ...(0, s(9017).A)({
            defaultTitle: (0, u.__)('Payment options', 'woocommerce'),
            defaultDescription: '',
          }),
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
        },
        j = (0, i.withFilteredAttributes)(L)(
          ({ title: e, description: t, children: s, className: o }) => {
            const { showFormStepNumbers: i } = (0, p.Oy)(),
              u = (0, l.useSelect)(e => e(m.CHECKOUT_STORE_KEY).isProcessing()),
              { cartNeedsPayment: h } = (0, r.V)();
            return h
              ? (0, n.createElement)(
                  c.FormStep,
                  {
                    id: 'payment-method',
                    disabled: u,
                    className: a()('wc-block-checkout__payment-method', o),
                    title: e,
                    description: t,
                    showStepNumber: i,
                  },
                  (0, n.createElement)(c.StoreNoticesContainer, { context: d.tG.PAYMENTS }),
                  (0, n.createElement)(V, null),
                  s,
                )
              : null;
          },
        );
    },
    2652: (e, t, s) => {
      'use strict';
      s.d(t, { U: () => n });
      const n = 'wc/store/payment';
    },
    8575: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => a });
      var n = s(1609),
        o = s(5573);
      const a = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(
          'g',
          { fill: 'none', fillRule: 'evenodd' },
          (0, n.createElement)('path', { d: 'M0 0h24v24H0z' }),
          (0, n.createElement)('path', {
            fill: '#000',
            fillRule: 'nonzero',
            d:
              'M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z',
          }),
          (0, n.createElement)('path', {
            stroke: '#000',
            strokeLinecap: 'round',
            d: 'M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8',
          }),
        ),
      );
    },
    8730: (e, t, s) => {
      'use strict';
      s.d(t, { A: () => o });
      var n = s(1609);
      s(7791);
      const o = () =>
        (0, n.createElement)('span', {
          className: 'wc-block-components-spinner',
          'aria-hidden': 'true',
        });
    },
    2080: () => {},
    4957: () => {},
    777: () => {},
    8375: () => {},
    9345: () => {},
    1637: () => {},
    181: () => {},
    7791: () => {},
  },
]);
