(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [345],
  {
    2686: (o, t, e) => {
      'use strict';
      e.r(t), e.d(t, { Block: () => u, default: () => d });
      var n = e(1609),
        c = e(7723),
        l = e(9019),
        s = e.n(l),
        r = e(2796),
        i = e(3566),
        a = e(1616);
      e(9644);
      const u = o => {
          const { className: t } = o,
            e = (0, i.p)(o),
            { parentClassName: l } = (0, r.useInnerBlockLayoutContext)(),
            { product: a } = (0, r.useProductDataContext)();
          if (!a.id) return null;
          const u = !!a.is_in_stock,
            d = a.low_stock_remaining,
            k = a.is_on_backorder;
          return (0, n.createElement)(
            'div',
            {
              className: s()(t, {
                [`${l}__stock-indicator`]: l,
                'wc-block-components-product-stock-indicator--in-stock': u,
                'wc-block-components-product-stock-indicator--out-of-stock': !u,
                'wc-block-components-product-stock-indicator--low-stock': !!d,
                'wc-block-components-product-stock-indicator--available-on-backorder': !!k,
                ...(o.isDescendantOfAllProducts && {
                  [e.className]: e.className,
                  'wc-block-components-product-stock-indicator wp-block-woocommerce-product-stock-indicator': !0,
                }),
              }),
              ...(o.isDescendantOfAllProducts && { style: e.style }),
            },
            (({
              isInStock: o = !1,
              isLowStock: t = !1,
              lowStockAmount: e = null,
              isOnBackorder: n = !1,
            }) =>
              t && null !== e
                ? (0,
                  c.sprintf) /* translators: %d stock amount (number of items in stock for product) */(
                    /* translators: %d stock amount (number of items in stock for product) */
                    (0, c.__)('%d left in stock', 'woocommerce'),
                    e,
                  )
                : n
                ? (0, c.__)('Available on backorder', 'woocommerce')
                : o
                ? (0, c.__)('In stock', 'woocommerce')
                : (0, c.__)('Out of stock', 'woocommerce'))({
              isInStock: u,
              isLowStock: !!d,
              lowStockAmount: d,
              isOnBackorder: k,
            }),
          );
        },
        d = (0, a.withProductDataContext)(u);
    },
    3566: (o, t, e) => {
      'use strict';
      e.d(t, { p: () => i });
      var n = e(9019),
        c = e.n(n),
        l = e(3993),
        s = e(92),
        r = e(6032);
      const i = o => {
        const t = (o => {
            const t = (0, l.isObject)(o) ? o : { style: {} };
            let e = t.style;
            return (
              (0, l.isString)(e) && (e = JSON.parse(e) || {}),
              (0, l.isObject)(e) || (e = {}),
              { ...t, style: e }
            );
          })(o),
          e = (0, r.BK)(t),
          n = (0, r.aR)(t),
          i = (0, r.fo)(t),
          a = (0, s.x)(t);
        return {
          className: c()(a.className, e.className, n.className, i.className),
          style: { ...a.style, ...e.style, ...n.style, ...i.style },
        };
      };
    },
    92: (o, t, e) => {
      'use strict';
      e.d(t, { x: () => c });
      var n = e(3993);
      const c = o => {
        const t = (0, n.isObject)(o.style.typography) ? o.style.typography : {},
          e = (0, n.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: o.fontFamily ? `has-${o.fontFamily}-font-family` : e,
          style: {
            fontSize: o.fontSize ? `var(--wp--preset--font-size--${o.fontSize})` : t.fontSize,
            fontStyle: t.fontStyle,
            fontWeight: t.fontWeight,
            letterSpacing: t.letterSpacing,
            lineHeight: t.lineHeight,
            textDecoration: t.textDecoration,
            textTransform: t.textTransform,
          },
        };
      };
    },
    6032: (o, t, e) => {
      'use strict';
      e.d(t, { BK: () => u, aR: () => d, fo: () => k });
      var n = e(9019),
        c = e.n(n),
        l = e(1194),
        s = e(9786),
        r = e(3993);
      function i(o = {}) {
        const t = {};
        return (
          (0, s.getCSSRules)(o, { selector: '' }).forEach(o => {
            t[o.key] = o.value;
          }),
          t
        );
      }
      function a(o, t) {
        return o && t ? `has-${(0, l.c)(t)}-${o}` : '';
      }
      function u(o) {
        var t, e, n, l, s, u, d;
        const { backgroundColor: k, textColor: m, gradient: f, style: p } = o,
          v = a('background-color', k),
          y = a('color', m),
          b = (function(o) {
            if (o) return `has-${o}-gradient-background`;
          })(f),
          g = b || (null == p || null === (t = p.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: c()(y, b, {
            [v]: !g && !!v,
            'has-text-color':
              m || (null == p || null === (e = p.color) || void 0 === e ? void 0 : e.text),
            'has-background':
              k ||
              (null == p || null === (n = p.color) || void 0 === n ? void 0 : n.background) ||
              f ||
              (null == p || null === (l = p.color) || void 0 === l ? void 0 : l.gradient),
            'has-link-color': (0, r.isObject)(
              null == p || null === (s = p.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == p ||
                null === (u = p.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: i({ color: (null == p ? void 0 : p.color) || {} }),
        };
      }
      function d(o) {
        var t;
        const e = (null === (t = o.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(o) {
            var t;
            const { borderColor: e, style: n } = o,
              l = e ? a('border-color', e) : '';
            return c()({
              'has-border-color':
                !!e || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
              [l]: !!l,
            });
          })(o),
          style: i({ border: e }),
        };
      }
      function k(o) {
        var t;
        return {
          className: void 0,
          style: i({
            spacing: (null === (t = o.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    9644: () => {},
  },
]);
