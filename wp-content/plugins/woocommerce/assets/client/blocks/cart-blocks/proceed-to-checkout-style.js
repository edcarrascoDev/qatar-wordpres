'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [9936],
  {
    12854: (e, t, n) => {
      n.r(t), n.d(t, { default: () => v });
      var c = n(41616),
        o = n(51609),
        r = n(36561),
        a = n.n(r),
        s = n(86087),
        l = n(74845),
        u = n(40812);
      const i = {
        bottom: 0,
        left: 0,
        opacity: 0,
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: -1,
      };
      var b = n(15703),
        d = n(47143),
        p = n(47594),
        k = n(71e3),
        m = n(72379),
        f = n(68939),
        g = n(46170);
      var h = n(59726);
      const v = (0, c.withFilteredAttributes)(h.A)(
        ({ checkoutPageId: e, className: t, buttonLabel: c }) => {
          const r = (0, b.getSetting)('page-' + e, !1),
            h = (0, d.useSelect)(e => e(p.CHECKOUT_STORE_KEY).isCalculating()),
            [v, C] = (() => {
              const [e, t] = (0, s.useState)(''),
                n = (0, s.useRef)(null),
                c = (0, s.useRef)(
                  new IntersectionObserver(
                    e => {
                      e[0].isIntersecting
                        ? t('visible')
                        : t(e[0].boundingClientRect.top > 0 ? 'below' : 'above');
                    },
                    { threshold: 1 },
                  ),
                );
              return (
                (0, s.useLayoutEffect)(() => {
                  const e = n.current,
                    t = c.current;
                  return (
                    e && t.observe(e),
                    () => {
                      t.unobserve(e);
                    }
                  );
                }, []),
                [(0, o.createElement)('div', { 'aria-hidden': !0, ref: n, style: i }), e]
              );
            })(),
            [E, w] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            if (
              'function' != typeof n.g.addEventListener ||
              'function' != typeof n.g.removeEventListener
            )
              return;
            const e = () => {
              w(!1);
            };
            return (
              n.g.addEventListener('pageshow', e),
              () => {
                n.g.removeEventListener('pageshow', e);
              }
            );
          }, []);
          const _ = (0, d.useSelect)(e => e(p.CART_STORE_KEY).getCartData()),
            y = (0, k.applyCheckoutFilter)({
              filterName: 'proceedToCheckoutButtonLabel',
              defaultValue: c || g.G,
              arg: { cart: _ },
            }),
            S = (0, k.applyCheckoutFilter)({
              filterName: 'proceedToCheckoutButtonLink',
              defaultValue: r || u.tn,
              arg: { cart: _ },
            }),
            { dispatchOnProceedToCheckout: L } = (0, f.e)(),
            N = (0, o.createElement)(
              l.A,
              {
                className: 'wc-block-cart__submit-button',
                href: S,
                disabled: h,
                onClick: e => {
                  L().then(t => {
                    t.some(m.CR) ? e.preventDefault() : w(!0);
                  });
                },
                showSpinner: E,
              },
              y,
            ),
            R = (0, s.useMemo)(() => getComputedStyle(document.body).backgroundColor, []);
          return (0, o.createElement)(
            'div',
            { className: a()('wc-block-cart__submit', t) },
            v,
            (0, o.createElement)('div', { className: 'wc-block-cart__submit-container' }, N),
            'below' === C &&
              (0, o.createElement)(
                'div',
                {
                  className:
                    'wc-block-cart__submit-container wc-block-cart__submit-container--sticky',
                  style: { backgroundColor: R },
                },
                N,
              ),
          );
        },
      );
    },
  },
]);
