'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [3982],
  {
    66777: (e, t, s) => {
      s.d(t, { w: () => r });
      var c = s(47594),
        i = s(47143),
        n = s(1614),
        o = s(66379);
      const r = () => {
        const {
            isCalculating: e,
            isBeforeProcessing: t,
            isProcessing: s,
            isAfterProcessing: r,
            isComplete: a,
            hasError: l,
          } = (0, i.useSelect)(e => {
            const t = e(c.CHECKOUT_STORE_KEY);
            return {
              isCalculating: t.isCalculating(),
              isBeforeProcessing: t.isBeforeProcessing(),
              isProcessing: t.isProcessing(),
              isAfterProcessing: t.isAfterProcessing(),
              isComplete: t.isComplete(),
              hasError: t.hasError(),
            };
          }),
          { activePaymentMethod: u, isExpressPaymentMethodActive: d } = (0, i.useSelect)(e => {
            const t = e(c.PAYMENT_STORE_KEY);
            return {
              activePaymentMethod: t.getActivePaymentMethod(),
              isExpressPaymentMethodActive: t.isExpressPaymentMethodActive(),
            };
          }),
          { onSubmit: m } = (0, n.E)(),
          { paymentMethods: g = {} } = (0, o.m)(),
          p = s || r || t,
          h = a && !l;
        return {
          paymentMethodButtonLabel: (g[u] || {}).placeOrderButtonLabel,
          onSubmit: m,
          isCalculating: e,
          isDisabled: s || d,
          waitingForProcessing: p,
          waitingForRedirect: h,
        };
      };
    },
    73526: (e, t, s) => {
      s.r(t), s.d(t, { default: () => k });
      var c = s(41616),
        i = s(51609),
        n = s(36561),
        o = s.n(n),
        r = s(15703),
        a = s(60453),
        l = s(66777),
        u = s(90770),
        d = s(81570),
        m = s(74845);
      const g = ({ label: e, fullWidth: t = !1 }) => {
        const {
          onSubmit: s,
          isCalculating: c,
          isDisabled: n,
          waitingForProcessing: r,
          waitingForRedirect: a,
        } = (0, l.w)();
        return (0, i.createElement)(
          m.A,
          {
            className: o()('wc-block-components-checkout-place-order-button', {
              'wc-block-components-checkout-place-order-button--full-width': t,
            }),
            onClick: s,
            disabled: c || n || r || a,
            showSpinner: r,
          },
          a ? (0, i.createElement)(u.A, { icon: d.A }) : e,
        );
      };
      var p = s(72379),
        h = s(14656),
        b = s(71e3),
        E = s(83291);
      s(8199);
      var w = s(76577);
      const k = (0, c.withFilteredAttributes)(w.A)(
        ({ cartPageId: e, showReturnToCart: t, className: s, placeOrderButtonLabel: c }) => {
          const { paymentMethodButtonLabel: n } = (0, l.w)(),
            u = (0, b.applyCheckoutFilter)({
              filterName: 'placeOrderButtonLabel',
              defaultValue: n || c || E.H,
            });
          return (0, i.createElement)(
            'div',
            { className: o()('wc-block-checkout__actions', s) },
            (0, i.createElement)(h.StoreNoticesContainer, { context: p.tG.CHECKOUT_ACTIONS }),
            (0, i.createElement)(
              'div',
              { className: 'wc-block-checkout__actions_row' },
              t && (0, i.createElement)(a.A, { link: (0, r.getSetting)('page-' + e, !1) }),
              (0, i.createElement)(g, { label: u, fullWidth: !t }),
            ),
          );
        },
      );
    },
  },
]);
