'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [8268],
  {
    5455: (e, t, n) => {
      n.r(t), n.d(t, { default: () => h });
      var r = n(1609),
        o = n(9019),
        c = n.n(o),
        i = n(6087);
      const s = (0, i.forwardRef)(({ children: e, className: t = '' }, n) =>
        (0, r.createElement)(
          'div',
          { ref: n, className: c()('wc-block-components-sidebar', t) },
          e,
        ),
      );
      var a = n(4656);
      const h = ({ children: e, className: t }) => {
        const [n, o, h] = (function() {
            const [e, t] = (0, i.useState)({ height: 0, width: 0 }),
              [n, r] = (0, i.useState)({ height: 0, width: 0 }),
              o = (0, i.useRef)(null);
            return (
              (0, i.useEffect)(() => {
                if (!o.current) return;
                const e = o.current,
                  n = new ResizeObserver(n => {
                    n.forEach(n => {
                      if (n.target === e) {
                        var r;
                        const { height: o, width: c } = n.contentRect,
                          i =
                            (null === (r = e.computedStyleMap().get('top')) || void 0 === r
                              ? void 0
                              : r.toString()) || '0';
                        t({ height: o + parseInt(i, 10), width: c });
                      }
                    });
                  }),
                  c = new IntersectionObserver(
                    e => {
                      e.forEach(e => {
                        const { height: n, width: o } = e.boundingClientRect;
                        var c, i;
                        t({ height: n, width: o }),
                          e.target.ownerDocument.defaultView &&
                            r({
                              height:
                                null === (c = e.target.ownerDocument.defaultView) || void 0 === c
                                  ? void 0
                                  : c.innerHeight,
                              width:
                                null === (i = e.target.ownerDocument.defaultView) || void 0 === i
                                  ? void 0
                                  : i.innerWidth,
                            });
                      });
                    },
                    { root: null, rootMargin: '0px', threshold: 1 },
                  );
                return (
                  n.observe(e),
                  c.observe(e),
                  () => {
                    e && (n.unobserve(e), c.unobserve(e));
                  }
                );
              }, []),
              [o, e, n]
            );
          })(),
          l = o.height < h.height;
        return (0, r.createElement)(
          s,
          { ref: n, className: c()('wc-block-checkout__sidebar', t, { 'is-sticky': l }) },
          (0, r.createElement)(a.StoreNoticesContainer, {
            context: 'woocommerce/checkout-totals-block',
          }),
          e,
        );
      };
    },
  },
]);
