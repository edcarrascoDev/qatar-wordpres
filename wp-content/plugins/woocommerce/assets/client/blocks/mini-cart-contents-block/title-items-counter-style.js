'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [319],
  {
    93566: (t, o, e) => {
      e.d(o, { p: () => c });
      var l = e(36561),
        n = e.n(l),
        s = e(73993),
        r = e(90092),
        a = e(66032);
      const c = t => {
        const o = (t => {
            const o = (0, s.isObject)(t) ? t : { style: {} };
            let e = o.style;
            return (
              (0, s.isString)(e) && (e = JSON.parse(e) || {}),
              (0, s.isObject)(e) || (e = {}),
              { ...o, style: e }
            );
          })(t),
          e = (0, a.BK)(o),
          l = (0, a.aR)(o),
          c = (0, a.fo)(o),
          i = (0, r.x)(o);
        return {
          className: n()(i.className, e.className, l.className, c.className),
          style: { ...i.style, ...e.style, ...l.style, ...c.style },
        };
      };
    },
    90092: (t, o, e) => {
      e.d(o, { x: () => n });
      var l = e(73993);
      const n = t => {
        const o = (0, l.isObject)(t.style.typography) ? t.style.typography : {},
          e = (0, l.isString)(o.fontFamily) ? o.fontFamily : '';
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
    66032: (t, o, e) => {
      e.d(o, { BK: () => u, aR: () => d, fo: () => y });
      var l = e(36561),
        n = e.n(l),
        s = e(5932),
        r = e(49786),
        a = e(73993);
      function c(t = {}) {
        const o = {};
        return (
          (0, r.getCSSRules)(t, { selector: '' }).forEach(t => {
            o[t.key] = t.value;
          }),
          o
        );
      }
      function i(t, o) {
        return t && o ? `has-${(0, s.c)(o)}-${t}` : '';
      }
      function u(t) {
        var o, e, l, s, r, u, d;
        const { backgroundColor: y, textColor: f, gradient: v, style: m } = t,
          g = i('background-color', y),
          p = i('color', f),
          b = (function(t) {
            if (t) return `has-${t}-gradient-background`;
          })(v),
          h = b || (null == m || null === (o = m.color) || void 0 === o ? void 0 : o.gradient);
        return {
          className: n()(p, b, {
            [g]: !h && !!g,
            'has-text-color':
              f || (null == m || null === (e = m.color) || void 0 === e ? void 0 : e.text),
            'has-background':
              y ||
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
      function d(t) {
        var o;
        const e = (null === (o = t.style) || void 0 === o ? void 0 : o.border) || {};
        return {
          className: (function(t) {
            var o;
            const { borderColor: e, style: l } = t,
              s = e ? i('border-color', e) : '';
            return n()({
              'has-border-color':
                !!e || !(null == l || null === (o = l.border) || void 0 === o || !o.color),
              [s]: !!s,
            });
          })(t),
          style: c({ border: e }),
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
    12500: (t, o, e) => {
      e.r(o), e.d(o, { default: () => i });
      var l = e(51609),
        n = e(88605),
        s = e(36561),
        r = e.n(s),
        a = e(27723),
        c = e(93566);
      const i = t => {
        const { cartItemsCount: o } = (0, n.V)(),
          e = (0, c.p)(t);
        return (0, l.createElement)(
          'span',
          { className: r()(t.className, e.className), style: e.style },
          (0, a.sprintf)((0, a._n)('(%d item)', '(%d items)', o, 'woocommerce'), o),
        );
      };
    },
  },
]);
