'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [2974],
  {
    93566: (t, o, l) => {
      l.d(o, { p: () => c });
      var e = l(36561),
        n = l.n(e),
        r = l(73993),
        s = l(90092),
        a = l(66032);
      const c = t => {
        const o = (t => {
            const o = (0, r.isObject)(t) ? t : { style: {} };
            let l = o.style;
            return (
              (0, r.isString)(l) && (l = JSON.parse(l) || {}),
              (0, r.isObject)(l) || (l = {}),
              { ...o, style: l }
            );
          })(t),
          l = (0, a.BK)(o),
          e = (0, a.aR)(o),
          c = (0, a.fo)(o),
          i = (0, s.x)(o);
        return {
          className: n()(i.className, l.className, e.className, c.className),
          style: { ...i.style, ...l.style, ...e.style, ...c.style },
        };
      };
    },
    90092: (t, o, l) => {
      l.d(o, { x: () => n });
      var e = l(73993);
      const n = t => {
        const o = (0, e.isObject)(t.style.typography) ? t.style.typography : {},
          l = (0, e.isString)(o.fontFamily) ? o.fontFamily : '';
        return {
          className: t.fontFamily ? `has-${t.fontFamily}-font-family` : l,
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
    66032: (t, o, l) => {
      l.d(o, { BK: () => u, aR: () => d, fo: () => y });
      var e = l(36561),
        n = l.n(e),
        r = l(5932),
        s = l(49786),
        a = l(73993);
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
        var o, l, e, r, s, u, d;
        const { backgroundColor: y, textColor: f, gradient: v, style: g } = t,
          m = i('background-color', y),
          b = i('color', f),
          p = (function(t) {
            if (t) return `has-${t}-gradient-background`;
          })(v),
          h = p || (null == g || null === (o = g.color) || void 0 === o ? void 0 : o.gradient);
        return {
          className: n()(b, p, {
            [m]: !h && !!m,
            'has-text-color':
              f || (null == g || null === (l = g.color) || void 0 === l ? void 0 : l.text),
            'has-background':
              y ||
              (null == g || null === (e = g.color) || void 0 === e ? void 0 : e.background) ||
              v ||
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
        const l = (null === (o = t.style) || void 0 === o ? void 0 : o.border) || {};
        return {
          className: (function(t) {
            var o;
            const { borderColor: l, style: e } = t,
              r = l ? i('border-color', l) : '';
            return n()({
              'has-border-color':
                !!l || !(null == e || null === (o = e.border) || void 0 === o || !o.color),
              [r]: !!r,
            });
          })(t),
          style: c({ border: l }),
        };
      }
      function y(t) {
        var o;
        return {
          className: void 0,
          style: c({
            spacing: (null === (o = t.style) || void 0 === o ? void 0 : o.spacing) || {},
          }),
        };
      }
    },
    26893: (t, o, l) => {
      l.r(o), l.d(o, { default: () => d });
      var e = l(51609),
        n = l(40812),
        r = l(74845),
        s = l(36561),
        a = l.n(s),
        c = l(93566),
        i = l(31877),
        u = l(11692);
      const d = ({ className: t, cartButtonLabel: o, style: l }) => {
        const s = (0, c.p)({ style: l });
        return n.Vo
          ? (0, e.createElement)(
              r.A,
              {
                className: a()(t, s.className, 'wc-block-mini-cart__footer-cart'),
                style: s.style,
                href: n.Vo,
                variant: (0, u.I)(t, 'outlined'),
              },
              o || i.G,
            )
          : null;
      };
    },
  },
]);
