'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [7054],
  {
    49343: (c, s, a) => {
      a.r(s), a.d(s, { default: () => k });
      var e = a(51609),
        l = a(36561),
        n = a.n(l),
        t = a(67518),
        r = a(88605),
        o = a(85202);
      const k = ({ children: c, className: s }) => {
        const { cartItems: a, cartIsLoading: l } = (0, r.V)(),
          { hasDarkControls: k } = (0, o.Y)();
        return l || a.length >= 1
          ? (0, e.createElement)(
              t.A,
              { className: n()('wc-block-cart', s, { 'has-dark-controls': k }) },
              c,
            )
          : null;
      };
    },
  },
]);
