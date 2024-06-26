'use strict';
(self.webpackChunkwebpackWcBlocksStylingJsonp =
  self.webpackChunkwebpackWcBlocksStylingJsonp || []).push([
  [6476],
  {
    93566: (e, t, o) => {
      o.d(t, { p: () => a });
      var n = o(36561),
        l = o.n(n),
        r = o(73993),
        s = o(90092),
        c = o(66032);
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
          n = (0, c.aR)(t),
          a = (0, c.fo)(t),
          i = (0, s.x)(t);
        return {
          className: l()(i.className, o.className, n.className, a.className),
          style: { ...i.style, ...o.style, ...n.style, ...a.style },
        };
      };
    },
    90092: (e, t, o) => {
      o.d(t, { x: () => l });
      var n = o(73993);
      const l = e => {
        const t = (0, n.isObject)(e.style.typography) ? e.style.typography : {},
          o = (0, n.isString)(t.fontFamily) ? t.fontFamily : '';
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
    66032: (e, t, o) => {
      o.d(t, { BK: () => u, aR: () => d, fo: () => y });
      var n = o(36561),
        l = o.n(n),
        r = o(5932),
        s = o(49786),
        c = o(73993);
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
        var t, o, n, r, s, u, d;
        const { backgroundColor: y, textColor: f, gradient: v, style: h } = e,
          m = i('background-color', y),
          p = i('color', f),
          g = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(v),
          k = g || (null == h || null === (t = h.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: l()(p, g, {
            [m]: !k && !!m,
            'has-text-color':
              f || (null == h || null === (o = h.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              y ||
              (null == h || null === (n = h.color) || void 0 === n ? void 0 : n.background) ||
              v ||
              (null == h || null === (r = h.color) || void 0 === r ? void 0 : r.gradient),
            'has-link-color': (0, c.isObject)(
              null == h || null === (s = h.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == h ||
                null === (u = h.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: a({ color: (null == h ? void 0 : h.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: o, style: n } = e,
              r = o ? i('border-color', o) : '';
            return l()({
              'has-border-color':
                !!o || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
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
    31176: (e, t, o) => {
      o.r(t), o.d(t, { default: () => m });
      var n = o(51609),
        l = o(40812),
        r = o(74845),
        s = o(36561),
        c = o.n(s),
        a = o(93566),
        i = o(86087);
      const u = (0, i.createContext)({
        onProceedToCheckout: () => () => {},
        dispatchOnProceedToCheckout: () => new Promise(() => {}),
      });
      var d = o(73993);
      let y = (function(e) {
        return (e.SUCCESS = 'success'), (e.FAIL = 'failure'), (e.ERROR = 'error'), e;
      })({});
      const f = e => ((e, t) => (0, d.isObject)(e) && 'type' in e && e.type === t)(e, y.ERROR);
      var v = o(26647),
        h = o(11692);
      const m = ({ className: e, checkoutButtonLabel: t, style: o }) => {
        const s = (0, a.p)({ style: o }),
          { dispatchOnProceedToCheckout: d } = (0, i.useContext)(u);
        return l.tn
          ? (0, n.createElement)(
              r.A,
              {
                className: c()(e, s.className, 'wc-block-mini-cart__footer-checkout'),
                variant: (0, h.I)(e, 'contained'),
                style: s.style,
                href: l.tn,
                onClick: e => {
                  d().then(t => {
                    t.some(f) && e.preventDefault();
                  });
                },
              },
              t || v.c,
            )
          : null;
      };
    },
  },
]);
