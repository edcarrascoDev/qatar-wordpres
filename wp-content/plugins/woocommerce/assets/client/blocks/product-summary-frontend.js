(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [3895],
  {
    3326: (t, e, o) => {
      'use strict';
      o.r(e), o.d(e, { default: () => v });
      var n = o(1609),
        r = o(9019),
        s = o.n(r),
        l = o(6087),
        c = o(6004);
      const a = t => t.replace(/<\/?[a-z][^>]*?>/gi, ''),
        i = (t, e) => t.replace(/[\s|\.\,]+$/i, '') + e;
      var u = o(9446);
      const d = ({
        source: t,
        maxLength: e = 15,
        countType: o = 'words',
        className: r = '',
        style: s = {},
      }) => {
        const d = (0, l.useMemo)(
          () =>
            ((t, e = 15, o = 'words') => {
              const n = (0, c.autop)(t);
              if ((0, u.count)(n, o) <= e) return n;
              const r = (t => {
                const e = t.indexOf('</p>');
                return -1 === e ? t : t.substr(0, e + 4);
              })(n);
              return (0, u.count)(r, o) <= e
                ? r
                : 'words' === o
                ? ((t, e, o = '&hellip;', n = !0) => {
                    const r = a(t),
                      s = r
                        .split(' ')
                        .splice(0, e)
                        .join(' ');
                    return s === r
                      ? n
                        ? (0, c.autop)(r)
                        : r
                      : n
                      ? (0, c.autop)(i(s, o))
                      : i(s, o);
                  })(r, e)
                : ((t, e, o = !0, n = '&hellip;', r = !0) => {
                    const s = a(t),
                      l = s.slice(0, e);
                    if (l === s) return r ? (0, c.autop)(s) : s;
                    if (o) return (0, c.autop)(i(l, n));
                    const u = l.match(/([\s]+)/g),
                      d = u ? u.length : 0,
                      p = s.slice(0, e + d);
                    return r ? (0, c.autop)(i(p, n)) : i(p, n);
                  })(r, e, 'characters_including_spaces' === o);
            })(t, e, o),
          [t, e, o],
        );
        return (0, n.createElement)(l.RawHTML, { style: s, className: r }, d);
      };
      var p = o(812),
        m = o(2796),
        y = o(3566),
        f = o(1616);
      o(7766);
      const v = (0, f.withProductDataContext)(t => {
        const { className: e } = t,
          { parentClassName: o } = (0, m.useInnerBlockLayoutContext)(),
          { product: r } = (0, m.useProductDataContext)(),
          l = (0, y.p)(t);
        if (!r)
          return (0, n.createElement)('div', {
            className: s()(e, 'wc-block-components-product-summary', {
              [`${o}__product-summary`]: o,
            }),
          });
        const c = r.short_description ? r.short_description : r.description;
        return c
          ? (0, n.createElement)(d, {
              className: s()(e, l.className, 'wc-block-components-product-summary', {
                [`${o}__product-summary`]: o,
              }),
              source: c,
              maxLength: 150,
              countType: p.r7.wordCountType || 'words',
              style: l.style,
            })
          : null;
      });
    },
    3566: (t, e, o) => {
      'use strict';
      o.d(e, { p: () => a });
      var n = o(9019),
        r = o.n(n),
        s = o(3993),
        l = o(92),
        c = o(6032);
      const a = t => {
        const e = (t => {
            const e = (0, s.isObject)(t) ? t : { style: {} };
            let o = e.style;
            return (
              (0, s.isString)(o) && (o = JSON.parse(o) || {}),
              (0, s.isObject)(o) || (o = {}),
              { ...e, style: o }
            );
          })(t),
          o = (0, c.BK)(e),
          n = (0, c.aR)(e),
          a = (0, c.fo)(e),
          i = (0, l.x)(e);
        return {
          className: r()(i.className, o.className, n.className, a.className),
          style: { ...i.style, ...o.style, ...n.style, ...a.style },
        };
      };
    },
    92: (t, e, o) => {
      'use strict';
      o.d(e, { x: () => r });
      var n = o(3993);
      const r = t => {
        const e = (0, n.isObject)(t.style.typography) ? t.style.typography : {},
          o = (0, n.isString)(e.fontFamily) ? e.fontFamily : '';
        return {
          className: t.fontFamily ? `has-${t.fontFamily}-font-family` : o,
          style: {
            fontSize: t.fontSize ? `var(--wp--preset--font-size--${t.fontSize})` : e.fontSize,
            fontStyle: e.fontStyle,
            fontWeight: e.fontWeight,
            letterSpacing: e.letterSpacing,
            lineHeight: e.lineHeight,
            textDecoration: e.textDecoration,
            textTransform: e.textTransform,
          },
        };
      };
    },
    6032: (t, e, o) => {
      'use strict';
      o.d(e, { BK: () => u, aR: () => d, fo: () => p });
      var n = o(9019),
        r = o.n(n),
        s = o(1194),
        l = o(9786),
        c = o(3993);
      function a(t = {}) {
        const e = {};
        return (
          (0, l.getCSSRules)(t, { selector: '' }).forEach(t => {
            e[t.key] = t.value;
          }),
          e
        );
      }
      function i(t, e) {
        return t && e ? `has-${(0, s.c)(e)}-${t}` : '';
      }
      function u(t) {
        var e, o, n, s, l, u, d;
        const { backgroundColor: p, textColor: m, gradient: y, style: f } = t,
          v = i('background-color', p),
          g = i('color', m),
          h = (function(t) {
            if (t) return `has-${t}-gradient-background`;
          })(y),
          b = h || (null == f || null === (e = f.color) || void 0 === e ? void 0 : e.gradient);
        return {
          className: r()(g, h, {
            [v]: !b && !!v,
            'has-text-color':
              m || (null == f || null === (o = f.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              p ||
              (null == f || null === (n = f.color) || void 0 === n ? void 0 : n.background) ||
              y ||
              (null == f || null === (s = f.color) || void 0 === s ? void 0 : s.gradient),
            'has-link-color': (0, c.isObject)(
              null == f || null === (l = f.elements) || void 0 === l ? void 0 : l.link,
            )
              ? null == f ||
                null === (u = f.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: a({ color: (null == f ? void 0 : f.color) || {} }),
        };
      }
      function d(t) {
        var e;
        const o = (null === (e = t.style) || void 0 === e ? void 0 : e.border) || {};
        return {
          className: (function(t) {
            var e;
            const { borderColor: o, style: n } = t,
              s = o ? i('border-color', o) : '';
            return r()({
              'has-border-color':
                !!o || !(null == n || null === (e = n.border) || void 0 === e || !e.color),
              [s]: !!s,
            });
          })(t),
          style: a({ border: o }),
        };
      }
      function p(t) {
        var e;
        return {
          className: void 0,
          style: a({
            spacing: (null === (e = t.style) || void 0 === e ? void 0 : e.spacing) || {},
          }),
        };
      }
    },
    7766: () => {},
  },
]);
