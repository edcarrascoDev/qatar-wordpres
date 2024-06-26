(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3982],
  {
    4845: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => m });
      var s = n(1609),
        a = n(8165),
        r = n(6087),
        c = n(9019),
        o = n.n(c),
        i = n(4040),
        l = n.n(i),
        u = (n(2080), n(8730));
      const m = (0, r.forwardRef)((e, t) => {
        'showSpinner' in e &&
          l()('showSpinner prop', {
            version: '8.9.0',
            alternative: 'Render a spinner in the button children instead.',
            plugin: 'WooCommerce',
          });
        const {
            className: n,
            showSpinner: r = !1,
            children: c,
            variant: i = 'contained',
            removeTextWrap: m = !1,
            ...d
          } = e,
          p = o()('wc-block-components-button', 'wp-element-button', n, i, {
            'wc-block-components-button--loading': r,
          });
        if ('href' in e)
          return (0, s.createElement)(a.$, {
            render: (0, s.createElement)(
              'a',
              { ref: t, href: e.href },
              r && (0, s.createElement)(u.A, null),
              (0, s.createElement)('span', { className: 'wc-block-components-button__text' }, c),
            ),
            className: p,
            ...d,
          });
        const h = m
          ? e.children
          : (0, s.createElement)(
              'span',
              { className: 'wc-block-components-button__text' },
              e.children,
            );
        return (0, s.createElement)(
          a.$,
          { ref: t, className: p, ...d },
          r && (0, s.createElement)(u.A, null),
          h,
        );
      });
    },
    6379: (e, t, n) => {
      'use strict';
      n.d(t, { m: () => i, u: () => l });
      var s = n(1573),
        a = n(4083),
        r = n(7143),
        c = n(7594);
      const o = (e = !1) => {
          const {
              paymentMethodsInitialized: t,
              expressPaymentMethodsInitialized: n,
              availablePaymentMethods: o,
              availableExpressPaymentMethods: i,
            } = (0, r.useSelect)(e => {
              const t = e(c.PAYMENT_STORE_KEY);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
              };
            }),
            l = Object.values(o).map(({ name: e }) => e),
            u = Object.values(i).map(({ name: e }) => e),
            m = (0, a.getPaymentMethods)(),
            d = (0, a.getExpressPaymentMethods)(),
            p = Object.keys(m).reduce((e, t) => (l.includes(t) && (e[t] = m[t]), e), {}),
            h = Object.keys(d).reduce((e, t) => (u.includes(t) && (e[t] = d[t]), e), {}),
            b = (0, s.c)(p),
            E = (0, s.c)(h);
          return { paymentMethods: e ? E : b, isInitialized: e ? n : t };
        },
        i = () => o(!1),
        l = () => o(!0);
    },
    6777: (e, t, n) => {
      'use strict';
      n.d(t, { w: () => o });
      var s = n(7594),
        a = n(7143),
        r = n(1614),
        c = n(6379);
      const o = () => {
        const {
            isCalculating: e,
            isBeforeProcessing: t,
            isProcessing: n,
            isAfterProcessing: o,
            isComplete: i,
            hasError: l,
          } = (0, a.useSelect)(e => {
            const t = e(s.CHECKOUT_STORE_KEY);
            return {
              isCalculating: t.isCalculating(),
              isBeforeProcessing: t.isBeforeProcessing(),
              isProcessing: t.isProcessing(),
              isAfterProcessing: t.isAfterProcessing(),
              isComplete: t.isComplete(),
              hasError: t.hasError(),
            };
          }),
          { activePaymentMethod: u, isExpressPaymentMethodActive: m } = (0, a.useSelect)(e => {
            const t = e(s.PAYMENT_STORE_KEY);
            return {
              activePaymentMethod: t.getActivePaymentMethod(),
              isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
            };
          }),
          { onSubmit: d } = (0, r.E)(),
          { paymentMethods: p = {} } = (0, c.m)(),
          h = n || o || t,
          b = i && !l;
        return {
          paymentMethodButtonLabel: (p[u] || {}).placeOrderButtonLabel,
          onSubmit: d,
          isCalculating: e,
          isDisabled: n || m,
          waitingForProcessing: h,
          waitingForRedirect: b,
        };
      };
    },
    1573: (e, t, n) => {
      'use strict';
      n.d(t, { c: () => c });
      var s = n(6087),
        a = n(923),
        r = n.n(a);
      function c(e) {
        const t = (0, s.useRef)(e);
        return r()(e, t.current) || (t.current = e), t.current;
      }
    },
    4794: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => k });
      var s = n(1616),
        a = n(1609),
        r = n(9019),
        c = n.n(r),
        o = n(5703),
        i = n(7723),
        l = n(812),
        u = n(7104),
        m = n(1387);
      n(718);
      const d = ({ link: e }) => {
        const t = e || l.Vo;
        return t
          ? (0, a.createElement)(
              'a',
              { href: t, className: 'wc-block-components-checkout-return-to-cart-button' },
              (0, a.createElement)(u.A, { icon: m.A }),
              (0, i.__)('Return to Cart', 'woocommerce'),
            )
          : null;
      };
      var p = n(6777),
        h = n(2900),
        b = n(4845);
      const E = ({ label: e, fullWidth: t = !1 }) => {
        const {
          onSubmit: n,
          isCalculating: s,
          isDisabled: r,
          waitingForProcessing: o,
          waitingForRedirect: i,
        } = (0, p.w)();
        return (0, a.createElement)(
          b.A,
          {
            className: c()('wc-block-components-checkout-place-order-button', {
              'wc-block-components-checkout-place-order-button--full-width': t,
            }),
            onClick: n,
            disabled: s || r || o || i,
            showSpinner: o,
          },
          i ? (0, a.createElement)(u.A, { icon: h.A }) : e,
        );
      };
      var g = n(2379),
        w = n(4656),
        P = n(1e3);
      const y = (0, i.__)('Place Order', 'woocommerce');
      n(5089);
      const f = {
          cartPageId: { type: 'number', default: 0 },
          showReturnToCart: { type: 'boolean', default: !0 },
          className: { type: 'string', default: '' },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
          placeOrderButtonLabel: { type: 'string', default: y },
        },
        k = (0, s.withFilteredAttributes)(f)(
          ({ cartPageId: e, showReturnToCart: t, className: n, placeOrderButtonLabel: s }) => {
            const { paymentMethodButtonLabel: r } = (0, p.w)(),
              i = (0, P.applyCheckoutFilter)({
                filterName: 'placeOrderButtonLabel',
                defaultValue: r || s || y,
              });
            return (0, a.createElement)(
              'div',
              { className: c()('wc-block-checkout__actions', n) },
              (0, a.createElement)(w.StoreNoticesContainer, { context: g.tG.CHECKOUT_ACTIONS }),
              (0, a.createElement)(
                'div',
                { className: 'wc-block-checkout__actions_row' },
                t && (0, a.createElement)(d, { link: (0, o.getSetting)('page-' + e, !1) }),
                (0, a.createElement)(E, { label: i, fullWidth: !t }),
              ),
            );
          },
        );
    },
    8730: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      var s = n(1609);
      n(7791);
      const a = () =>
        (0, s.createElement)('span', {
          className: 'wc-block-components-spinner',
          'aria-hidden': 'true',
        });
    },
    2080: () => {},
    718: () => {},
    5089: () => {},
    7791: () => {},
  },
]);
