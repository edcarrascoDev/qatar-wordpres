'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [8722],
  {
    93566: (l, o, t) => {
      t.d(o, { p: () => c });
      var e = t(36561),
        n = t.n(e),
        s = t(73993),
        r = t(90092),
        a = t(66032);
      const c = l => {
        const o = (l => {
            const o = (0, s.isObject)(l) ? l : { style: {} };
            let t = o.style;
            return (
              (0, s.isString)(t) && (t = JSON.parse(t) || {}),
              (0, s.isObject)(t) || (t = {}),
              { ...o, style: t }
            );
          })(l),
          t = (0, a.BK)(o),
          e = (0, a.aR)(o),
          c = (0, a.fo)(o),
          i = (0, r.x)(o);
        return {
          className: n()(i.className, t.className, e.className, c.className),
          style: { ...i.style, ...t.style, ...e.style, ...c.style },
        };
      };
    },
    90092: (l, o, t) => {
      t.d(o, { x: () => n });
      var e = t(73993);
      const n = l => {
        const o = (0, e.isObject)(l.style.typography) ? l.style.typography : {},
          t = (0, e.isString)(o.fontFamily) ? o.fontFamily : '';
        return {
          className: l.fontFamily ? `has-${l.fontFamily}-font-family` : t,
          style: {
            fontSize: l.fontSize ? `var(--wp--preset--font-size--${l.fontSize})` : o.fontSize,
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
    66032: (l, o, t) => {
      t.d(o, { BK: () => u, aR: () => d, fo: () => y });
      var e = t(36561),
        n = t.n(e),
        s = t(5932),
        r = t(49786),
        a = t(73993);
      function c(l = {}) {
        const o = {};
        return (
          (0, r.getCSSRules)(l, { selector: '' }).forEach(l => {
            o[l.key] = l.value;
          }),
          o
        );
      }
      function i(l, o) {
        return l && o ? `has-${(0, s.c)(o)}-${l}` : '';
      }
      function u(l) {
        var o, t, e, s, r, u, d;
        const { backgroundColor: y, textColor: f, gradient: v, style: g } = l,
          m = i('background-color', y),
          p = i('color', f),
          b = (function(l) {
            if (l) return `has-${l}-gradient-background`;
          })(v),
          h = b || (null == g || null === (o = g.color) || void 0 === o ? void 0 : o.gradient);
        return {
          className: n()(p, b, {
            [m]: !h && !!m,
            'has-text-color':
              f || (null == g || null === (t = g.color) || void 0 === t ? void 0 : t.text),
            'has-background':
              y ||
              (null == g || null === (e = g.color) || void 0 === e ? void 0 : e.background) ||
              v ||
              (null == g || null === (s = g.color) || void 0 === s ? void 0 : s.gradient),
            'has-link-color': (0, a.isObject)(
              null == g || null === (r = g.elements) || void 0 === r ? void 0 : r.link,
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
      function d(l) {
        var o;
        const t = (null === (o = l.style) || void 0 === o ? void 0 : o.border) || {};
        return {
          className: (function(l) {
            var o;
            const { borderColor: t, style: e } = l,
              s = t ? i('border-color', t) : '';
            return n()({
              'has-border-color':
                !!t || !(null == e || null === (o = e.border) || void 0 === o || !o.color),
              [s]: !!s,
            });
          })(l),
          style: c({ border: t }),
        };
      }
      function y(l) {
        var o;
        return {
          className: void 0,
          style: c({
            spacing: (null === (o = l.style) || void 0 === o ? void 0 : o.spacing) || {},
          }),
        };
      }
    },
    46729: (l, o, t) => {
      t.r(o), t.d(o, { default: () => c });
      var e = t(51609),
        n = t(93566),
        s = t(36561),
        r = t.n(s),
        a = t(48635);
      const c = l => {
        const o = (0, n.p)(l);
        return (0, e.createElement)(
          'span',
          { className: r()(l.className, o.className), style: o.style },
          l.label || a.Z,
        );
      };
    },
  },
]);
