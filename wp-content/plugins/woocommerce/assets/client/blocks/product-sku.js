(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [2724],
  {
    3975: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => d });
      var l = o(1609),
        s = o(7723),
        n = o(9019),
        r = o.n(n),
        a = o(2796),
        c = o(1616),
        i = o(3566);
      o(7663);
      const u = ({ parentClassName: e, sku: t, className: o, style: n }) =>
          (0, l.createElement)(
            'div',
            { className: r()(o, { [`${e}__product-sku`]: e }), style: n },
            (0, s.__)('SKU:', 'woocommerce'),
            ' ',
            (0, l.createElement)('strong', null, t),
          ),
        d = (0, c.withProductDataContext)(e => {
          const { className: t } = e,
            o = (0, i.p)(e),
            { parentClassName: s } = (0, a.useInnerBlockLayoutContext)(),
            { product: n } = (0, a.useProductDataContext)(),
            c = n.sku;
          return e.isDescendentOfSingleProductTemplate
            ? (0, l.createElement)(u, { parentClassName: s, className: t, sku: 'Product SKU' })
            : c
            ? (0, l.createElement)(u, {
                className: t,
                parentClassName: s,
                sku: c,
                ...(e.isDescendantOfAllProducts && {
                  className: r()(
                    t,
                    'wc-block-components-product-sku wp-block-woocommerce-product-sku',
                    o.className,
                  ),
                  style: { ...o.style },
                }),
              })
            : null;
        });
    },
    3566: (e, t, o) => {
      'use strict';
      o.d(t, { p: () => c });
      var l = o(9019),
        s = o.n(l),
        n = o(3993),
        r = o(92),
        a = o(6032);
      const c = e => {
        const t = (e => {
            const t = (0, n.isObject)(e) ? e : { style: {} };
            let o = t.style;
            return (
              (0, n.isString)(o) && (o = JSON.parse(o) || {}),
              (0, n.isObject)(o) || (o = {}),
              { ...t, style: o }
            );
          })(e),
          o = (0, a.BK)(t),
          l = (0, a.aR)(t),
          c = (0, a.fo)(t),
          i = (0, r.x)(t);
        return {
          className: s()(i.className, o.className, l.className, c.className),
          style: { ...i.style, ...o.style, ...l.style, ...c.style },
        };
      };
    },
    92: (e, t, o) => {
      'use strict';
      o.d(t, { x: () => s });
      var l = o(3993);
      const s = e => {
        const t = (0, l.isObject)(e.style.typography) ? e.style.typography : {},
          o = (0, l.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : o,
          style: {
            fontSize: e.fontSize ? `var(--wp--preset--font-size--${e.fontSize})` : t.fontSize,
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
    6032: (e, t, o) => {
      'use strict';
      o.d(t, { BK: () => u, aR: () => d, fo: () => m });
      var l = o(9019),
        s = o.n(l),
        n = o(1194),
        r = o(9786),
        a = o(3993);
      function c(e = {}) {
        const t = {};
        return (
          (0, r.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, n.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, o, l, n, r, u, d;
        const { backgroundColor: m, textColor: y, gradient: f, style: v } = e,
          p = i('background-color', m),
          k = i('color', y),
          g = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(f),
          b = g || (null == v || null === (t = v.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: s()(k, g, {
            [p]: !b && !!p,
            'has-text-color':
              y || (null == v || null === (o = v.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              m ||
              (null == v || null === (l = v.color) || void 0 === l ? void 0 : l.background) ||
              f ||
              (null == v || null === (n = v.color) || void 0 === n ? void 0 : n.gradient),
            'has-link-color': (0, a.isObject)(
              null == v || null === (r = v.elements) || void 0 === r ? void 0 : r.link,
            )
              ? null == v ||
                null === (u = v.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: c({ color: (null == v ? void 0 : v.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: o, style: l } = e,
              n = o ? i('border-color', o) : '';
            return s()({
              'has-border-color':
                !!o || !(null == l || null === (t = l.border) || void 0 === t || !t.color),
              [n]: !!n,
            });
          })(e),
          style: c({ border: o }),
        };
      }
      function m(e) {
        var t;
        return {
          className: void 0,
          style: c({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    7663: () => {},
  },
]);
