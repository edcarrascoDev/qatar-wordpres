'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [149],
  {
    9397: (e, c, n) => {
      n.r(c), n.d(c, { default: () => l });
      var t = n(1609),
        a = n(8605),
        s = n(6087);
      const l = ({ children: e, className: c }) => {
        const { cartItems: n, cartIsLoading: l } = (0, a.V)(),
          r = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            var e;
            0 !== n.length || l || null === (e = r.current) || void 0 === e || e.focus();
          }, [n, l]),
          l || n.length > 0
            ? null
            : (0, t.createElement)(
                'div',
                { tabIndex: -1, ref: r, className: c },
                (0, t.createElement)(
                  'div',
                  { className: 'wc-block-mini-cart__empty-cart-wrapper' },
                  e,
                ),
              )
        );
      };
    },
  },
]);
