(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [3895],
  {
    3326: (t, e, o) => {
      'use strict';
      o.r(e), o.d(e, { default: () => v });
      var n = o(1609),
        s = o(9019),
        r = o.n(s),
        l = o(6087),
        c = o(6004);
      const a = t => t.replace(/<\/?[a-z][^>]*?>/gi, ''),
        i = (t, e) => t.replace(/[\s|\.\,]+$/i, '') + e;
      var u = o(9446);
      const d = ({
        source: t,
        maxLength: e = 15,
        countType: o = 'words',
        className: s = '',
        style: r = {},
      }) => {
        const d = (0, l.useMemo)(
          () =>
            ((t, e = 15, o = 'words') => {
              const n = (0, c.autop)(t);
              if ((0, u.count)(n, o) <= e) return n;
              const s = (t => {
                const e = t.indexOf('</p>');
                return -1 === e ? t : t.substr(0, e + 4);
              })(n);
              return (0, u.count)(s, o) <= e
                ? s
                : 'words' === o
                ? ((t, e, o = '&hellip;', n = !0) => {
                    const s = a(t),
                      r = s
                        .split(' ')
                        .splice(0, e)
                        .join(' ');
                    return r === s
                      ? n
                        ? (0, c.autop)(s)
                        : s
                      : n
                      ? (0, c.autop)(i(r, o))
                      : i(r, o);
                  })(s, e)
                : ((t, e, o = !0, n = '&hellip;', s = !0) => {
                    const r = a(t),
                      l = r.slice(0, e);
                    if (l === r) return s ? (0, c.autop)(r) : r;
                    if (o) return (0, c.autop)(i(l, n));
                    const u = l.match(/([\s]+)/g),
                      d = u ? u.length : 0,
                      p = r.slice(0, e + d);
                    return s ? (0, c.autop)(i(p, n)) : i(p, n);
                  })(s, e, 'characters_including_spaces' === o);
            })(t, e, o),
          [t, e, o],
        );
        return (0, n.createElement)(l.RawHTML, { style: r, className: s }, d);
      };
      var p = o(812),
        m = o(2796),
        y = o(3566),
        f = o(1616);
      o(7766);
      const v = (0, f.withProductDataContext)(t => {
        const { className: e } = t,
          { parentClassName: o } = (0, m.useInnerBlockLayoutContext)(),
          { product: s } = (0, m.useProductDataContext)(),
          l = (0, y.p)(t);
        if (!s)
          return (0, n.createElement)('div', {
            className: r()(e, 'wc-block-components-product-summary', {
              [`${o}__product-summary`]: o,
            }),
          });
        const c = s.short_description ? s.short_description : s.description;
        return c
          ? (0, n.createElement)(d, {
              className: r()(e, l.className, 'wc-block-components-product-summary', {
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
        s = o.n(n),
        r = o(3993),
        l = o(92),
        c = o(6032);
      const a = t => {
        const e = (t => {
            const e = (0, r.isObject)(t) ? t : { style: {} };
            let o = e.style;
            return (
              (0, r.isString)(o) && (o = JSON.parse(o) || {}),
              (0, r.isObject)(o) || (o = {}),
              { ...e, style: o }
            );
          })(t),
          o = (0, c.BK)(e),
          n = (0, c.aR)(e),
          a = (0, c.fo)(e),
          i = (0, l.x)(e);
        return {
          className: s()(i.className, o.className, n.className, a.className),
          style: { ...i.style, ...o.style, ...n.style, ...a.style },
        };
      };
    },
    92: (t, e, o) => {
      'use strict';
      o.d(e, { x: () => s });
      var n = o(3993);
      const s = t => {
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
        s = o.n(n),
        r = o(1194),
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
        return t && e ? `has-${(0, r.c)(e)}-${t}` : '';
      }
      function u(t) {
        var e, o, n, r, l, u, d;
        const { backgroundColor: p, textColor: m, gradient: y, style: f } = t,
          v = i('background-color', p),
          g = i('color', m),
          h = (function(t) {
            if (t) return `has-${t}-gradient-background`;
          })(y),
          b = h || (null == f || null === (e = f.color) || void 0 === e ? void 0 : e.gradient);
        return {
          className: s()(g, h, {
            [v]: !b && !!v,
            'has-text-color':
              m || (null == f || null === (o = f.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              p ||
              (null == f || null === (n = f.color) || void 0 === n ? void 0 : n.background) ||
              y ||
              (null == f || null === (r = f.color) || void 0 === r ? void 0 : r.gradient),
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
              r = o ? i('border-color', o) : '';
            return s()({
              'has-border-color':
                !!o || !(null == n || null === (e = n.border) || void 0 === e || !e.color),
              [r]: !!r,
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
