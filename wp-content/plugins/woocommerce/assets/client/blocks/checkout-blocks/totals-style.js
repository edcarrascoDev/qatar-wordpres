'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [8268],
  {
    93373: (e, t, n) => {
      n.r(t), n.d(t, { default: () => u });
      var o = n(51609),
        r = n(36561),
        i = n.n(r),
        c = n(36610),
        s = n(14656),
        h = n(86087);
      const u = ({ children: e, className: t }) => {
        const [n, r, u] = (function() {
            const [e, t] = (0, h.useState)({ height: 0, width: 0 }),
              [n, o] = (0, h.useState)({ height: 0, width: 0 }),
              r = (0, h.useRef)(null);
            return (
              (0, h.useEffect)(() => {
                if (!r.current) return;
                const e = r.current,
                  n = new ResizeObserver(n => {
                    n.forEach(n => {
                      if (n.target === e) {
                        var o;
                        const { height: r, width: i } = n.contentRect,
                          c =
                            (null === (o = e.computedStyleMap().get('top')) || void 0 === o
                              ? void 0
                              : o.toString()) || '0';
                        t({ height: r + parseInt(c, 10), width: i });
                      }
                    });
                  }),
                  i = new IntersectionObserver(
                    e => {
                      e.forEach(e => {
                        const { height: n, width: r } = e.boundingClientRect;
                        var i, c;
                        t({ height: n, width: r }),
                          e.target.ownerDocument.defaultView &&
                            o({
                              height:
                                null === (i = e.target.ownerDocument.defaultView) || void 0 === i
                                  ? void 0
                                  : i.innerHeight,
                              width:
                                null === (c = e.target.ownerDocument.defaultView) || void 0 === c
                                  ? void 0
                                  : c.innerWidth,
                            });
                      });
                    },
                    { root: null, rootMargin: '0px', threshold: 1 },
                  );
                return (
                  n.observe(e),
                  i.observe(e),
                  () => {
                    e && (n.unobserve(e), i.unobserve(e));
                  }
                );
              }, []),
              [r, e, n]
            );
          })(),
          a = r.height < u.height;
        return (0, o.createElement)(
          c.A,
          { ref: n, className: i()('wc-block-checkout__sidebar', t, { 'is-sticky': a }) },
          (0, o.createElement)(s.StoreNoticesContainer, {
            context: 'woocommerce/checkout-totals-block',
          }),
          e,
        );
      };
    },
  },
]);
