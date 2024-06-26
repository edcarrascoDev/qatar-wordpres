'use strict';
(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [6476],
  {
    3566: (e, t, o) => {
      o.d(t, { p: () => a });
      var l = o(9019),
        n = o.n(l),
        r = o(3993),
        s = o(92),
        c = o(6032);
      const a = e => {
        const t = (e => {
            const t = (0, r.isObject)(e) ? e : { style: {} };
            let o = t.style;
            return (
              (0, r.isString)(o) && (o = JSON.parse(o) || {}),
              (0, r.isObject)(o) || (o = {}),
              { ...t, style: o }
            );
          })(e),
          o = (0, c.BK)(t),
          l = (0, c.aR)(t),
          a = (0, c.fo)(t),
          i = (0, s.x)(t);
        return {
          className: n()(i.className, o.className, l.className, a.className),
          style: { ...i.style, ...o.style, ...l.style, ...a.style },
        };
      };
    },
    92: (e, t, o) => {
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
      o.d(t, { BK: () => u, aR: () => d, fo: () => y });
      var l = o(9019),
        n = o.n(l),
        r = o(1194),
        s = o(9786),
        c = o(3993);
      function a(e = {}) {
        const t = {};
        return (
          (0, s.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, r.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, o, l, r, s, u, d;
        const { backgroundColor: y, textColor: f, gradient: v, style: m } = e,
          h = i('background-color', y),
          k = i('color', f),
          b = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(v),
          g = b || (null == m || null === (t = m.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: n()(k, b, {
            [h]: !g && !!h,
            'has-text-color':
              f || (null == m || null === (o = m.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              y ||
              (null == m || null === (l = m.color) || void 0 === l ? void 0 : l.background) ||
              v ||
              (null == m || null === (r = m.color) || void 0 === r ? void 0 : r.gradient),
            'has-link-color': (0, c.isObject)(
              null == m || null === (s = m.elements) || void 0 === s ? void 0 : s.link,
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
          style: a({ color: (null == m ? void 0 : m.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: o, style: l } = e,
              r = o ? i('border-color', o) : '';
            return n()({
              'has-border-color':
                !!o || !(null == l || null === (t = l.border) || void 0 === t || !t.color),
              [r]: !!r,
            });
          })(e),
          style: a({ border: o }),
        };
      }
      function y(e) {
        var t;
        return {
          className: void 0,
          style: a({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    517: (e, t, o) => {
      o.r(t), o.d(t, { default: () => f });
      var l = o(1609),
        n = o(812),
        r = o(4845),
        s = o(9019),
        c = o.n(s),
        a = o(3566),
        i = o(7902),
        u = o(2379);
      const d = (0, o(7723).__)('Go to checkout', 'woocommerce');
      var y = o(1692);
      const f = ({ className: e, checkoutButtonLabel: t, style: o }) => {
        const s = (0, a.p)({ style: o }),
          { dispatchOnProceedToCheckout: f } = (0, i.e)();
        return n.tn
          ? (0, l.createElement)(
              r.A,
              {
                className: c()(e, s.className, 'wc-block-mini-cart__footer-checkout'),
                variant: (0, y.I)(e, 'contained'),
                style: s.style,
                href: n.tn,
                onClick: e => {
                  f().then(t => {
                    t.some(u.CR) && e.preventDefault();
                  });
                },
              },
              t || d,
            )
          : null;
      };
    },
    1692: (e, t, o) => {
      o.d(t, { G: () => r, I: () => n });
      var l = o(3993);
      const n = (e = '', t) =>
          e.includes('is-style-outline')
            ? 'outlined'
            : e.includes('is-style-fill')
            ? 'contained'
            : t,
        r = e => e.some(e => (Array.isArray(e) ? r(e) : (0, l.isObject)(e) && null !== e.key));
    },
  },
]);
