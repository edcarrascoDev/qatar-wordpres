'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [1028],
  {
    1579: (t, o, e) => {
      e.r(o), e.d(o, { Block: () => u, default: () => d });
      var n = e(1609),
        l = e(9019),
        r = e.n(l),
        s = e(2796),
        a = e(3566),
        c = e(7723),
        i = e(1616);
      const u = t => {
          const { textAlign: o } = t,
            e = (0, a.p)(t),
            { product: l } = (0, s.useProductDataContext)(),
            i = r()(e.className, 'wc-block-components-product-average-rating', {
              [`has-text-align-${o}`]: o,
            });
          return (0, n.createElement)(
            'div',
            { className: i, style: e.style },
            Number(l.average_rating) > 0
              ? l.average_rating
              : (0, c.__)('No ratings', 'woocommerce'),
          );
        },
        d = (0, i.withProductDataContext)(u);
    },
    3566: (t, o, e) => {
      e.d(o, { p: () => c });
      var n = e(9019),
        l = e.n(n),
        r = e(3993),
        s = e(92),
        a = e(6032);
      const c = t => {
        const o = (t => {
            const o = (0, r.isObject)(t) ? t : { style: {} };
            let e = o.style;
            return (
              (0, r.isString)(e) && (e = JSON.parse(e) || {}),
              (0, r.isObject)(e) || (e = {}),
              { ...o, style: e }
            );
          })(t),
          e = (0, a.BK)(o),
          n = (0, a.aR)(o),
          c = (0, a.fo)(o),
          i = (0, s.x)(o);
        return {
          className: l()(i.className, e.className, n.className, c.className),
          style: { ...i.style, ...e.style, ...n.style, ...c.style },
        };
      };
    },
    92: (t, o, e) => {
      e.d(o, { x: () => l });
      var n = e(3993);
      const l = t => {
        const o = (0, n.isObject)(t.style.typography) ? t.style.typography : {},
          e = (0, n.isString)(o.fontFamily) ? o.fontFamily : '';
        return {
          className: t.fontFamily ? `has-${t.fontFamily}-font-family` : e,
          style: {
            fontSize: t.fontSize ? `var(--wp--preset--font-size--${t.fontSize})` : o.fontSize,
            fontStyle: o.fontStyle,
            fontWeight: o.fontWeight,
            letterSpacing: o.letterSpacing,
            lineHeight: o.lineHeight,
            textDecoration: o.textDecoration,
            textTransform: o.textTransform,
          },
        };
      };
    },
    6032: (t, o, e) => {
      e.d(o, { BK: () => u, aR: () => d, fo: () => v });
      var n = e(9019),
        l = e.n(n),
        r = e(1194),
        s = e(9786),
        a = e(3993);
      function c(t = {}) {
        const o = {};
        return (
          (0, s.getCSSRules)(t, { selector: '' }).forEach(t => {
            o[t.key] = t.value;
          }),
          o
        );
      }
      function i(t, o) {
        return t && o ? `has-${(0, r.c)(o)}-${t}` : '';
      }
      function u(t) {
        var o, e, n, r, s, u, d;
        const { backgroundColor: v, textColor: y, gradient: f, style: g } = t,
          m = i('background-color', v),
          p = i('color', y),
          b = (function(t) {
            if (t) return `has-${t}-gradient-background`;
          })(f),
          h = b || (null == g || null === (o = g.color) || void 0 === o ? void 0 : o.gradient);
        return {
          className: l()(p, b, {
            [m]: !h && !!m,
            'has-text-color':
              y || (null == g || null === (e = g.color) || void 0 === e ? void 0 : e.text),
            'has-background':
              v ||
              (null == g || null === (n = g.color) || void 0 === n ? void 0 : n.background) ||
              f ||
              (null == g || null === (r = g.color) || void 0 === r ? void 0 : r.gradient),
            'has-link-color': (0, a.isObject)(
              null == g || null === (s = g.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == g ||
                null === (u = g.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: c({ color: (null == g ? void 0 : g.color) || {} }),
        };
      }
      function d(t) {
        var o;
        const e = (null === (o = t.style) || void 0 === o ? void 0 : o.border) || {};
        return {
          className: (function(t) {
            var o;
            const { borderColor: e, style: n } = t,
              r = e ? i('border-color', e) : '';
            return l()({
              'has-border-color':
                !!e || !(null == n || null === (o = n.border) || void 0 === o || !o.color),
              [r]: !!r,
            });
          })(t),
          style: c({ border: e }),
        };
      }
      function v(t) {
        var o;
        return {
          className: void 0,
          style: c({
            spacing: (null === (o = t.style) || void 0 === o ? void 0 : o.spacing) || {},
          }),
        };
      }
    },
  },
]);
