(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [4857],
  {
    8152: (e, c, n) => {
      'use strict';
      n.r(c), n.d(c, { default: () => r });
      var t = n(1609),
        s = n(8605),
        o = n(6087),
        l = n(4956);
      n(6611);
      const r = ({ children: e, className: c }) => {
        const { cartItems: n, cartIsLoading: r } = (0, s.V)();
        return (
          (0, o.useEffect)(() => {
            0 !== n.length ||
              r ||
              (0, l.Pt)('wc-blocks_render_blocks_frontend', {
                element: document.body.querySelector('.wp-block-woocommerce-cart'),
              });
          }, [r, n]),
          r || 0 !== n.length ? null : (0, t.createElement)('div', { className: c }, e)
        );
      };
    },
    6611: () => {},
  },
]);
