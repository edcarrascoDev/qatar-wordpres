'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [6073],
  {
    91687: (e, t, c) => {
      c.r(t), c.d(t, { default: () => k });
      var s = c(51609),
        n = c(36561),
        l = c.n(n),
        o = c(88605),
        r = c(41616),
        a = c(14656),
        i = c(47143),
        m = c(47594),
        p = c(72379),
        u = c(99292),
        d = c(22737),
        h = c(64824);
      const k = (0, r.withFilteredAttributes)(h.A)(
        ({ title: e, description: t, children: c, className: n }) => {
          const { showFormStepNumbers: r } = (0, u.Oy)(),
            h = (0, i.useSelect)(e => e(m.CHECKOUT_STORE_KEY).isProcessing()),
            { cartNeedsPayment: k } = (0, o.V)();
          return k
            ? (0, s.createElement)(
                a.FormStep,
                {
                  id: 'payment-method',
                  disabled: h,
                  className: l()('wc-block-checkout__payment-method', n),
                  title: e,
                  description: t,
                  showStepNumber: r,
                },
                (0, s.createElement)(a.StoreNoticesContainer, { context: p.tG.PAYMENTS }),
                (0, s.createElement)(d.A, null),
                c,
              )
            : null;
        },
      );
    },
  },
]);
