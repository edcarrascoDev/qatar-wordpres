'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [5806],
  {
    42510: (e, t, s) => {
      s.r(t), s.d(t, { default: () => k });
      var i = s(51609),
        c = s(36561),
        n = s.n(c),
        l = s(41616),
        o = s(14656),
        p = s(25251),
        r = s(47143),
        a = s(47594),
        h = s(99292),
        u = s(77939),
        d = s(32161);
      const k = (0, l.withFilteredAttributes)(d.A)(
        ({ title: e, description: t, children: s, className: c }) => {
          const { showFormStepNumbers: l } = (0, h.Oy)(),
            d = (0, r.useSelect)(e => e(a.CHECKOUT_STORE_KEY).isProcessing()),
            { showShippingMethods: k } = (0, p.C)();
          return k
            ? (0, i.createElement)(
                o.FormStep,
                {
                  id: 'shipping-option',
                  disabled: d,
                  className: n()('wc-block-checkout__shipping-option', c),
                  title: e,
                  description: t,
                  showStepNumber: l,
                },
                (0, i.createElement)(u.A, null),
                s,
              )
            : null;
        },
      );
    },
  },
]);
