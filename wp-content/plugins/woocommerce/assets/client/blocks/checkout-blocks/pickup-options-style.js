'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [3024],
  {
    77652: (e, s, t) => {
      t.r(s), t.d(s, { default: () => b });
      var c = t(51609),
        o = t(36561),
        l = t.n(o),
        n = t(41616),
        r = t(14656),
        i = t(47143),
        p = t(47594),
        u = t(40812),
        k = t(99292),
        a = t(54370),
        h = t(53319);
      const b = (0, n.withFilteredAttributes)(h.A)(
        ({ title: e, description: s, children: t, className: o }) => {
          const { checkoutIsProcessing: n, prefersCollection: h } = (0, i.useSelect)(e => {
              const s = e(p.CHECKOUT_STORE_KEY);
              return {
                checkoutIsProcessing: s.isProcessing(),
                prefersCollection: s.prefersCollection(),
              };
            }),
            { showFormStepNumbers: b } = (0, k.Oy)();
          return h && u.F7
            ? (0, c.createElement)(
                r.FormStep,
                {
                  id: 'pickup-options',
                  disabled: n,
                  className: l()('wc-block-checkout__pickup-options', o),
                  title: e,
                  description: s,
                  showStepNumber: b,
                },
                (0, c.createElement)(a.A, null),
                t,
              )
            : null;
        },
      );
    },
  },
]);
