(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [9936],
  {
    4845: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => m });
      var o = n(1609),
        c = n(8165),
        r = n(6087),
        a = n(9019),
        s = n.n(a),
        l = n(4040),
        i = n.n(l),
        u = (n(2080), n(8730));
      const m = (0, r.forwardRef)((e, t) => {
        'showSpinner' in e &&
          i()('showSpinner prop', {
            version: '8.9.0',
            alternative: 'Render a spinner in the button children instead.',
            plugin: 'WooCommerce',
          });
        const {
            className: n,
            showSpinner: r = !1,
            children: a,
            variant: l = 'contained',
            removeTextWrap: m = !1,
            ...d
          } = e,
          b = s()('wc-block-components-button', 'wp-element-button', n, l, {
            'wc-block-components-button--loading': r,
          });
        if ('href' in e)
          return (0, o.createElement)(c.$, {
            render: (0, o.createElement)(
              'a',
              { ref: t, href: e.href },
              r && (0, o.createElement)(u.A, null),
              (0, o.createElement)('span', { className: 'wc-block-components-button__text' }, a),
            ),
            className: b,
            ...d,
          });
        const p = m
          ? e.children
          : (0, o.createElement)(
              'span',
              { className: 'wc-block-components-button__text' },
              e.children,
            );
        return (0, o.createElement)(
          c.$,
          { ref: t, className: b, ...d },
          r && (0, o.createElement)(u.A, null),
          p,
        );
      });
    },
    5462: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => w });
      var o = n(1616),
        c = n(1609),
        r = n(9019),
        a = n.n(r),
        s = n(6087),
        l = n(4845),
        i = n(812);
      const u = {
        bottom: 0,
        left: 0,
        opacity: 0,
        pointerEvents: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: -1,
      };
      var m = n(5703),
        d = n(7143),
        b = n(7594),
        p = n(1e3),
        h = n(2379),
        f = n(7902);
      const k = (0, n(7723).__)('Proceed to Checkout', 'woocommerce'),
        v = {
          checkoutPageId: { type: 'number', default: 0 },
          lock: { type: 'object', default: { move: !0, remove: !0 } },
          buttonLabel: { type: 'string', default: k },
        },
        w = (0, o.withFilteredAttributes)(v)(
          ({ checkoutPageId: e, className: t, buttonLabel: o }) => {
            const r = (0, m.getSetting)('page-' + e, !1),
              v = (0, d.useSelect)(e => e(b.CHECKOUT_STORE_KEY).isCalculating()),
              [w, E] = (() => {
                const [e, t] = (0, s.useState)(''),
                  n = (0, s.useRef)(null),
                  o = (0, s.useRef)(
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
                      t = o.current;
                    return (
                      e && t.observe(e),
                      () => {
                        t.unobserve(e);
                      }
                    );
                  }, []),
                  [(0, c.createElement)('div', { 'aria-hidden': !0, ref: n, style: u }), e]
                );
              })(),
              [g, C] = (0, s.useState)(!1);
            (0, s.useEffect)(() => {
              if (
                'function' != typeof n.g.addEventListener ||
                'function' != typeof n.g.removeEventListener
              )
                return;
              const e = () => {
                C(!1);
              };
              return (
                n.g.addEventListener('pageshow', e),
                () => {
                  n.g.removeEventListener('pageshow', e);
                }
              );
            }, []);
            const _ = (0, d.useSelect)(e => e(b.CART_STORE_KEY).getCartData()),
              y = (0, p.applyCheckoutFilter)({
                filterName: 'proceedToCheckoutButtonLabel',
                defaultValue: o || k,
                arg: { cart: _ },
              }),
              N = (0, p.applyCheckoutFilter)({
                filterName: 'proceedToCheckoutButtonLink',
                defaultValue: r || i.tn,
                arg: { cart: _ },
              }),
              { dispatchOnProceedToCheckout: S } = (0, f.e)(),
              L = (0, c.createElement)(
                l.A,
                {
                  className: 'wc-block-cart__submit-button',
                  href: N,
                  disabled: v,
                  onClick: e => {
                    S().then(t => {
                      t.some(h.CR) ? e.preventDefault() : C(!0);
                    });
                  },
                  showSpinner: g,
                },
                y,
              ),
              R = (0, s.useMemo)(() => getComputedStyle(document.body).backgroundColor, []);
            return (0, c.createElement)(
              'div',
              { className: a()('wc-block-cart__submit', t) },
              w,
              (0, c.createElement)('div', { className: 'wc-block-cart__submit-container' }, L),
              'below' === E &&
                (0, c.createElement)(
                  'div',
                  {
                    className:
                      'wc-block-cart__submit-container wc-block-cart__submit-container--sticky',
                    style: { backgroundColor: R },
                  },
                  L,
                ),
            );
          },
        );
    },
    8730: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => c });
      var o = n(1609);
      n(7791);
      const c = () =>
        (0, o.createElement)('span', {
          className: 'wc-block-components-spinner',
          'aria-hidden': 'true',
        });
    },
    2080: () => {},
    7791: () => {},
  },
]);
