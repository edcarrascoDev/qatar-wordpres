'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [5057],
  {
    8046: (e, s, c) => {
      c.r(s), c.d(s, { default: () => o });
      var r = c(1609),
        a = c(4656),
        t = c(8529),
        n = c(8605);
      const o = ({ className: e }) => {
        const { cartFees: s, cartTotals: c } = (0, n.V)(),
          o = (0, t.getCurrencyFromPriceResponse)(c);
        return (0, r.createElement)(
          a.TotalsWrapper,
          { className: e },
          (0, r.createElement)(a.TotalsFees, { currency: o, cartFees: s }),
        );
      };
    },
  },
]);
