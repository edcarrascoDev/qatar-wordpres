'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [149],
  {
    99397: (e, c, t) => {
      t.r(c), t.d(c, { default: () => n });
      var a = t(51609),
        l = t(88605),
        s = t(86087);
      const n = ({ children: e, className: c }) => {
        const { cartItems: t, cartIsLoading: n } = (0, l.V)(),
          r = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            var e;
            0 !== t.length || n || null === (e = r.current) || void 0 === e || e.focus();
          }, [t, n]),
          n || t.length > 0
            ? null
            : (0, a.createElement)(
                'div',
                { tabIndex: -1, ref: r, className: c },
                (0, a.createElement)(
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
