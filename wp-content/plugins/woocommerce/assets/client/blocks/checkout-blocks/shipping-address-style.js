'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [636],
  {
    44432: (e, i, s) => {
      s.r(i), s.d(i, { default: () => m });
      var t = s(51609),
        l = s(36561),
        r = s.n(l),
        n = s(41616),
        o = s(14656),
        p = s(25251),
        c = s(47143),
        d = s(47594),
        h = s(15583),
        a = s(45347),
        u = s(99292);
      const m = (0, n.withFilteredAttributes)(a.A)(
        ({ title: e, description: i, children: s, className: l }) => {
          const n = (0, c.useSelect)(e => e(d.CHECKOUT_STORE_KEY).isProcessing()),
            { showShippingFields: a } = (0, p.C)(),
            {
              showCompanyField: m,
              requireCompanyField: F,
              showApartmentField: w,
              requireApartmentField: k,
              showPhoneField: b,
              requirePhoneField: C,
              showFormStepNumbers: S,
            } = (0, u.Oy)();
          return a
            ? (0, t.createElement)(
                o.FormStep,
                {
                  id: 'shipping-fields',
                  disabled: n,
                  className: r()('wc-block-checkout__shipping-fields', l),
                  title: e,
                  description: i,
                  showStepNumber: S,
                },
                (0, t.createElement)(h.A, {
                  showCompanyField: m,
                  requireCompanyField: F,
                  showApartmentField: w,
                  requireApartmentField: k,
                  showPhoneField: b,
                  requirePhoneField: C,
                }),
                s,
              )
            : null;
        },
      );
    },
  },
]);
