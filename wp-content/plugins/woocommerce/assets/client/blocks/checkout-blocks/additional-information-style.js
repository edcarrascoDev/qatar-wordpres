'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [2227],
  {
    35893: (e, t, s) => {
      s.r(t), s.d(t, { default: () => m });
      var i = s(51609),
        l = s(36561),
        n = s.n(l),
        c = s(14656),
        o = s(40812),
        a = s(47143),
        r = s(47594),
        d = s(41616),
        p = s(99292),
        u = s(7337),
        k = s(39494);
      const m = (0, d.withFilteredAttributes)(k.A)(
        ({ title: e, description: t, children: s, className: l }) => {
          const { showFormStepNumbers: d } = (0, p.Oy)(),
            k = (0, a.useSelect)(e => e(r.CHECKOUT_STORE_KEY).isProcessing());
          return 0 === o.pt.length
            ? null
            : (0, i.createElement)(
                c.FormStep,
                {
                  id: 'additional-information-fields',
                  disabled: k,
                  className: n()('wc-block-checkout__additional-information-fields', l),
                  title: e,
                  description: t,
                  showStepNumber: d,
                },
                (0, i.createElement)(u.A, null),
                s,
              );
        },
      );
    },
  },
]);
