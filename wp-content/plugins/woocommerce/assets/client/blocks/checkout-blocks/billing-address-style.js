'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [4037],
  {
    57539: (e, i, l) => {
      l.r(i), l.d(i, { default: () => F });
      var s = l(51609),
        t = l(36561),
        n = l.n(t),
        r = l(41616),
        o = l(14656),
        d = l(25251),
        c = l(47143),
        p = l(47594),
        a = l(54108),
        h = l(17364),
        u = l(99292),
        m = l(79672);
      const F = (0, r.withFilteredAttributes)(h.A)(
        ({ title: e, description: i, children: l, className: t }) => {
          const { showFormStepNumbers: r } = (0, u.Oy)(),
            h = (0, c.useSelect)(e => e(p.CHECKOUT_STORE_KEY).isProcessing()),
            {
              showCompanyField: F,
              requireCompanyField: w,
              showApartmentField: b,
              requireApartmentField: k,
              showPhoneField: g,
              requirePhoneField: y,
            } = (0, u.Oy)(),
            { showBillingFields: A, forcedBillingAddress: C, useBillingAsShipping: S } = (0, d.C)();
          return A || S
            ? ((e = (0, m.y)(e, C)),
              (i = (0, m.q)(i, C)),
              (0, s.createElement)(
                o.FormStep,
                {
                  id: 'billing-fields',
                  disabled: h,
                  className: n()('wc-block-checkout__billing-fields', t),
                  title: e,
                  description: i,
                  showStepNumber: r,
                },
                (0, s.createElement)(a.A, {
                  showCompanyField: F,
                  requireCompanyField: w,
                  showApartmentField: b,
                  requireApartmentField: k,
                  showPhoneField: g,
                  requirePhoneField: y,
                }),
                l,
              ))
            : null;
        },
      );
    },
  },
]);
