'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [2264],
  {
    801: (e, n, t) => {
      t.r(n), t.d(n, { default: () => p });
      var s = t(1609),
        c = t(812),
        a = t(4845),
        l = t(9019),
        o = t.n(l);
      const i = (0, t(7723).__)('Start shopping', 'woocommerce');
      var r = t(1692);
      const p = ({ className: e, startShoppingButtonLabel: n }) =>
        c.Jn
          ? (0, s.createElement)(
              'div',
              { className: 'wp-block-button has-text-align-center' },
              (0, s.createElement)(
                a.A,
                {
                  className: o()(e, 'wp-block-button__link', 'wc-block-mini-cart__shopping-button'),
                  variant: (0, r.I)(e, 'contained'),
                  href: c.Jn,
                },
                n || i,
              ),
            )
          : null;
    },
    1692: (e, n, t) => {
      t.d(n, { G: () => a, I: () => c });
      var s = t(3993);
      const c = (e = '', n) =>
          e.includes('is-style-outline')
            ? 'outlined'
            : e.includes('is-style-fill')
            ? 'contained'
            : n,
        a = e => e.some(e => (Array.isArray(e) ? a(e) : (0, s.isObject)(e) && null !== e.key));
    },
  },
]);
