'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [8262],
  {
    5299: (e, t, a) => {
      a.r(t), a.d(t, { default: () => p });
      var s = a(1616),
        r = a(1609),
        c = a(4656),
        n = a(8529),
        l = a(8605),
        o = a(5703);
      const u = {
          showRateAfterTaxName: {
            type: 'boolean',
            default: (0, o.getSetting)('displayCartPricesIncludingTax', !1),
          },
          lock: { type: 'object', default: { remove: !0, move: !1 } },
        },
        p = (0, s.withFilteredAttributes)(u)(({ className: e, showRateAfterTaxName: t }) => {
          const { cartTotals: a } = (0, l.V)();
          if (
            (0, o.getSetting)('displayCartPricesIncludingTax', !1) ||
            parseInt(a.total_tax, 10) <= 0
          )
            return null;
          const s = (0, n.getCurrencyFromPriceResponse)(a);
          return (0, r.createElement)(
            c.TotalsWrapper,
            { className: e },
            (0, r.createElement)(c.TotalsTaxes, {
              showRateAfterTaxName: t,
              currency: s,
              values: a,
            }),
          );
        });
    },
  },
]);
