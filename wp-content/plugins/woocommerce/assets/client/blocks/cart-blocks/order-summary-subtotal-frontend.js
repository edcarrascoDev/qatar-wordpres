'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [1631],
  {
    6036: (e, c, s) => {
      s.r(c), s.d(c, { default: () => l });
      var a = s(1609),
        r = s(4656),
        t = s(8529),
        n = s(8605);
      const l = ({ className: e = '' }) => {
        const { cartTotals: c } = (0, n.V)(),
          s = (0, t.getCurrencyFromPriceResponse)(c);
        return (0, a.createElement)(
          r.TotalsWrapper,
          { className: e },
          (0, a.createElement)(r.Subtotal, { currency: s, values: c }),
        );
      };
    },
  },
]);
