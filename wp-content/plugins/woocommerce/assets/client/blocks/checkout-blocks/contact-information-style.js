'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [3398],
  {
    65534: (e, t, c) => {
      c.r(t), c.d(t, { default: () => E });
      var n = c(51609),
        o = c(36561),
        l = c.n(o),
        r = c(41616),
        s = c(14656),
        a = c(47143),
        i = c(47594),
        u = c(99292),
        m = c(26411),
        d = c(80745),
        p = c(27723),
        h = c(15703);
      const w = `${c(40812).aW}?redirect_to=${encodeURIComponent(window.location.href)}`,
        k = () => {
          const e = (0, a.useSelect)(e => e(i.CHECKOUT_STORE_KEY).getCustomerId());
          return !(0, h.getSetting)('checkoutShowLoginReminder', !0) || e
            ? null
            : (0, n.createElement)(
                n.Fragment,
                null,
                (0, p.__)('Already have an account? ', 'woocommerce'),
                (0, n.createElement)('a', { href: w }, (0, p.__)('Log in.', 'woocommerce')),
              );
        },
        E = (0, r.withFilteredAttributes)(d.A)(
          ({ title: e, description: t, children: c, className: o }) => {
            const r = (0, a.useSelect)(e => e(i.CHECKOUT_STORE_KEY).isProcessing()),
              { showFormStepNumbers: d } = (0, u.Oy)();
            return (0, n.createElement)(
              s.FormStep,
              {
                id: 'contact-fields',
                disabled: r,
                className: l()('wc-block-checkout__contact-fields', o),
                title: e,
                description: t,
                showStepNumber: d,
                stepHeadingContent: () => (0, n.createElement)(k, null),
              },
              (0, n.createElement)(m.A, null),
              c,
            );
          },
        );
    },
  },
]);
