'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [4951],
  {
    43919: (t, e, c) => {
      c.r(e), c.d(e, { default: () => r });
      var s = c(41616),
        a = c(51609),
        l = c(36561),
        o = c.n(l);
      const n = {
          content: { type: 'string', default: (0, c(27723).__)('Cart totals', 'woocommerce') },
          lock: { type: 'object', default: { remove: !1, move: !1 } },
        },
        r = (0, s.withFilteredAttributes)(n)(({ className: t, content: e = '' }) =>
          (0, a.createElement)('span', { className: o()(t, 'wc-block-cart__totals-title') }, e),
        );
    },
  },
]);
