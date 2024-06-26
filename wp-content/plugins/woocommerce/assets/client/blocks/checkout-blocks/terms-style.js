'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [4654],
  {
    66777: (e, s, t) => {
      t.d(s, { w: () => c });
      var n = t(47594),
        r = t(47143),
        i = t(1614),
        a = t(66379);
      const c = () => {
        const {
            isCalculating: e,
            isBeforeProcessing: s,
            isProcessing: t,
            isAfterProcessing: c,
            isComplete: o,
            hasError: l,
          } = (0, r.useSelect)(e => {
            const s = e(n.CHECKOUT_STORE_KEY);
            return {
              isCalculating: s.isCalculating(),
              isBeforeProcessing: s.isBeforeProcessing(),
              isProcessing: s.isProcessing(),
              isAfterProcessing: s.isAfterProcessing(),
              isComplete: s.isComplete(),
              hasError: s.hasError(),
            };
          }),
          { activePaymentMethod: d, isExpressPaymentMethodActive: m } = (0, r.useSelect)(e => {
            const s = e(n.PAYMENT_STORE_KEY);
            return {
              activePaymentMethod: s.getActivePaymentMethod(),
              isExpressPaymentMethodActive: s.isExpressPaymentMethodActive(),
            };
          }),
          { onSubmit: u } = (0, i.E)(),
          { paymentMethods: h = {} } = (0, a.m)(),
          E = t || c || s,
          g = o && !l;
        return {
          paymentMethodButtonLabel: (h[d] || {}).placeOrderButtonLabel,
          onSubmit: u,
          isCalculating: e,
          isDisabled: t || m,
          waitingForProcessing: E,
          waitingForRedirect: g,
        };
      };
    },
    7214: (e, s, t) => {
      t.r(s), t.d(s, { default: () => E });
      var n = t(51609),
        r = t(27723),
        i = t(36561),
        a = t.n(i),
        c = t(86087),
        o = t(14656),
        l = t(66777),
        d = t(29491),
        m = t(47143),
        u = t(47594),
        h = t(15995);
      const E = (0, d.withInstanceId)(({ text: e, checkbox: s, instanceId: t, className: i }) => {
        const [d, E] = (0, c.useState)(!1),
          { isDisabled: g } = (0, l.w)(),
          p = 'terms-and-conditions-' + t,
          { setValidationErrors: P, clearValidationError: _ } = (0, m.useDispatch)(
            u.VALIDATION_STORE_KEY,
          ),
          b = (0, m.useSelect)(e => e(u.VALIDATION_STORE_KEY).getValidationError(p)),
          k = !(null == b || !b.message || (null != b && b.hidden));
        return (
          (0, c.useEffect)(() => {
            if (s)
              return (
                d
                  ? _(p)
                  : P({
                      [p]: {
                        message: (0, r.__)(
                          'Please read and accept the terms and conditions.',
                          'woocommerce',
                        ),
                        hidden: !0,
                      },
                    }),
                () => {
                  _(p);
                }
              );
          }, [s, d, p, _, P]),
          (0, n.createElement)(
            'div',
            {
              className: a()(
                'wc-block-checkout__terms',
                { 'wc-block-checkout__terms--disabled': g },
                i,
              ),
            },
            s
              ? (0, n.createElement)(
                  n.Fragment,
                  null,
                  (0, n.createElement)(
                    o.CheckboxControl,
                    {
                      id: 'terms-and-conditions',
                      checked: d,
                      onChange: () => E(e => !e),
                      hasError: k,
                      disabled: g,
                    },
                    (0, n.createElement)('span', { dangerouslySetInnerHTML: { __html: e || h.R } }),
                  ),
                )
              : (0, n.createElement)('span', { dangerouslySetInnerHTML: { __html: e || h.G } }),
          )
        );
      });
    },
  },
]);
