'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [4654],
  {
    6379: (e, t, s) => {
      s.d(t, { m: () => c, u: () => l });
      var n = s(1573),
        a = s(4083),
        r = s(7143),
        o = s(7594);
      const i = (e = !1) => {
          const {
              paymentMethodsInitialized: t,
              expressPaymentMethodsInitialized: s,
              availablePaymentMethods: i,
              availableExpressPaymentMethods: c,
            } = (0, r.useSelect)(e => {
              const t = e(o.PAYMENT_STORE_KEY);
              return {
                paymentMethodsInitialized: t.paymentMethodsInitialized(),
                expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                availablePaymentMethods: t.getAvailablePaymentMethods(),
              };
            }),
            l = Object.values(i).map(({ name: e }) => e),
            d = Object.values(c).map(({ name: e }) => e),
            m = (0, a.getPaymentMethods)(),
            u = (0, a.getExpressPaymentMethods)(),
            h = Object.keys(m).reduce((e, t) => (l.includes(t) && (e[t] = m[t]), e), {}),
            p = Object.keys(u).reduce((e, t) => (d.includes(t) && (e[t] = u[t]), e), {}),
            y = (0, n.c)(h),
            g = (0, n.c)(p);
          return { paymentMethods: e ? g : y, isInitialized: e ? s : t };
        },
        c = () => i(!1),
        l = () => i(!0);
    },
    6777: (e, t, s) => {
      s.d(t, { w: () => i });
      var n = s(7594),
        a = s(7143),
        r = s(1614),
        o = s(6379);
      const i = () => {
        const {
            isCalculating: e,
            isBeforeProcessing: t,
            isProcessing: s,
            isAfterProcessing: i,
            isComplete: c,
            hasError: l,
          } = (0, a.useSelect)(e => {
            const t = e(n.CHECKOUT_STORE_KEY);
            return {
              isCalculating: t.isCalculating(),
              isBeforeProcessing: t.isBeforeProcessing(),
              isProcessing: t.isProcessing(),
              isAfterProcessing: t.isAfterProcessing(),
              isComplete: t.isComplete(),
              hasError: t.hasError(),
            };
          }),
          { activePaymentMethod: d, isExpressPaymentMethodActive: m } = (0, a.useSelect)(e => {
            const t = e(n.PAYMENT_STORE_KEY);
            return {
              activePaymentMethod: t.getActivePaymentMethod(),
              isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
            };
          }),
          { onSubmit: u } = (0, r.E)(),
          { paymentMethods: h = {} } = (0, o.m)(),
          p = s || i || t,
          y = c && !l;
        return {
          paymentMethodButtonLabel: (h[d] || {}).placeOrderButtonLabel,
          onSubmit: u,
          isCalculating: e,
          isDisabled: s || m,
          waitingForProcessing: p,
          waitingForRedirect: y,
        };
      };
    },
    1573: (e, t, s) => {
      s.d(t, { c: () => o });
      var n = s(6087),
        a = s(923),
        r = s.n(a);
      function o(e) {
        const t = (0, n.useRef)(e);
        return r()(e, t.current) || (t.current = e), t.current;
      }
    },
    6564: (e, t, s) => {
      s.r(t), s.d(t, { default: () => P });
      var n = s(1609),
        a = s(7723),
        r = s(9019),
        o = s.n(r),
        i = s(6087),
        c = s(4656),
        l = s(6777),
        d = s(9491),
        m = s(7143),
        u = s(7594),
        h = s(812);
      const p = h.gu
          ? `<a href="${h.gu}" target="_blank">${(0, a.__)(
              'Terms and Conditions',
              'woocommerce',
            )}</a>`
          : (0, a.__)('Terms and Conditions', 'woocommerce'),
        y = h.pk
          ? `<a href="${h.pk}" target="_blank">${(0, a.__)('Privacy Policy', 'woocommerce')}</a>`
          : (0, a.__)('Privacy Policy', 'woocommerce'),
        g = (0, a.sprintf) /* translators: %1$s terms page link, %2$s privacy page link. */(
          /* translators: %1$s terms page link, %2$s privacy page link. */
          (0, a.__)(
            'By proceeding with your purchase you agree to our %1$s and %2$s',
            'woocommerce',
          ),
          p,
          y,
        ),
        E = (0, a.sprintf) /* translators: %1$s terms page link, %2$s privacy page link. */(
          /* translators: %1$s terms page link, %2$s privacy page link. */
          (0, a.__)(
            'You must accept our %1$s and %2$s to continue with your purchase.',
            'woocommerce',
          ),
          p,
          y,
        ),
        P = (0, d.withInstanceId)(({ text: e, checkbox: t, instanceId: s, className: r }) => {
          const [d, h] = (0, i.useState)(!1),
            { isDisabled: p } = (0, l.w)(),
            y = 'terms-and-conditions-' + s,
            { setValidationErrors: P, clearValidationError: _ } = (0, m.useDispatch)(
              u.VALIDATION_STORE_KEY,
            ),
            b = (0, m.useSelect)(e => e(u.VALIDATION_STORE_KEY).getValidationError(y)),
            M = !(null == b || !b.message || (null != b && b.hidden));
          return (
            (0, i.useEffect)(() => {
              if (t)
                return (
                  d
                    ? _(y)
                    : P({
                        [y]: {
                          message: (0, a.__)(
                            'Please read and accept the terms and conditions.',
                            'woocommerce',
                          ),
                          hidden: !0,
                        },
                      }),
                  () => {
                    _(y);
                  }
                );
            }, [t, d, y, _, P]),
            (0, n.createElement)(
              'div',
              {
                className: o()(
                  'wc-block-checkout__terms',
                  { 'wc-block-checkout__terms--disabled': p },
                  r,
                ),
              },
              t
                ? (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)(
                      c.CheckboxControl,
                      {
                        id: 'terms-and-conditions',
                        checked: d,
                        onChange: () => h(e => !e),
                        hasError: M,
                        disabled: p,
                      },
                      (0, n.createElement)('span', { dangerouslySetInnerHTML: { __html: e || E } }),
                    ),
                  )
                : (0, n.createElement)('span', { dangerouslySetInnerHTML: { __html: e || g } }),
            )
          );
        });
    },
  },
]);
