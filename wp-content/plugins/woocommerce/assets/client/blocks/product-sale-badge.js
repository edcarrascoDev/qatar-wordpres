(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [4442],
  {
    6809: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Block: () => d, default: () => f });
      var l = o(1609),
        n = o(7723),
        s = o(9019),
        r = o.n(s),
        a = o(4656),
        c = o(2796),
        i = o(3566),
        u = o(1616);
      o(6007);
      const d = e => {
          const { className: t, align: o } = e,
            s = (0, i.p)(e),
            { parentClassName: u } = (0, c.useInnerBlockLayoutContext)(),
            { product: d } = (0, c.useProductDataContext)();
          if (!((d.id && d.on_sale) || e.isDescendentOfSingleProductTemplate)) return null;
          const f =
            'string' == typeof o ? `wc-block-components-product-sale-badge--align-${o}` : '';
          return (0, l.createElement)(
            'div',
            {
              className: r()(
                'wc-block-components-product-sale-badge',
                t,
                f,
                { [`${u}__product-onsale`]: u },
                s.className,
              ),
              style: s.style,
            },
            (0, l.createElement)(a.Label, {
              label: (0, n.__)('Sale', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Product on sale', 'woocommerce'),
            }),
          );
        },
        f = (0, u.withProductDataContext)(d);
    },
    3566: (e, t, o) => {
      'use strict';
      o.d(t, { p: () => c });
      var l = o(9019),
        n = o.n(l),
        s = o(3993),
        r = o(92),
        a = o(6032);
      const c = e => {
        const t = (e => {
            const t = (0, s.isObject)(e) ? e : { style: {} };
            let o = t.style;
            return (
              (0, s.isString)(o) && (o = JSON.parse(o) || {}),
              (0, s.isObject)(o) || (o = {}),
              { ...t, style: o }
            );
          })(e),
          o = (0, a.BK)(t),
          l = (0, a.aR)(t),
          c = (0, a.fo)(t),
          i = (0, r.x)(t);
        return {
          className: n()(i.className, o.className, l.className, c.className),
          style: { ...i.style, ...o.style, ...l.style, ...c.style },
        };
      };
    },
    92: (e, t, o) => {
      'use strict';
      o.d(t, { x: () => n });
      var l = o(3993);
      const n = e => {
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
      o.d(t, { BK: () => u, aR: () => d, fo: () => f });
      var l = o(9019),
        n = o.n(l),
        s = o(1194),
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
        return e && t ? `has-${(0, s.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, o, l, s, r, u, d;
        const { backgroundColor: f, textColor: y, gradient: v, style: m } = e,
          p = i('background-color', f),
          g = i('color', y),
          b = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(v),
          k = b || (null == m || null === (t = m.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: n()(g, b, {
            [p]: !k && !!p,
            'has-text-color':
              y || (null == m || null === (o = m.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              f ||
              (null == m || null === (l = m.color) || void 0 === l ? void 0 : l.background) ||
              v ||
              (null == m || null === (s = m.color) || void 0 === s ? void 0 : s.gradient),
            'has-link-color': (0, a.isObject)(
              null == m || null === (r = m.elements) || void 0 === r ? void 0 : r.link,
            )
              ? null == m ||
                null === (u = m.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: c({ color: (null == m ? void 0 : m.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: o, style: l } = e,
              s = o ? i('border-color', o) : '';
            return n()({
              'has-border-color':
                !!o || !(null == l || null === (t = l.border) || void 0 === t || !t.color),
              [s]: !!s,
            });
          })(e),
          style: c({ border: o }),
        };
      }
      function f(e) {
        var t;
        return {
          className: void 0,
          style: c({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    6007: () => {},
  },
]);
