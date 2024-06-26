(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [2105],
  {
    1812: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => k });
      var l = n(1616),
        o = n(1609),
        r = n(9019),
        s = n.n(r),
        a = n(2796),
        c = n(812),
        i = n(8537);
      n(6625);
      const d = ({
        className: e = '',
        disabled: t = !1,
        name: n,
        permalink: l = '',
        target: r,
        rel: a,
        style: c,
        onClick: d,
        ...u
      }) => {
        const m = s()('wc-block-components-product-name', e);
        if (t) {
          const e = u;
          return (0, o.createElement)('span', {
            className: m,
            ...e,
            dangerouslySetInnerHTML: { __html: (0, i.decodeEntities)(n) },
          });
        }
        return (0, o.createElement)('a', {
          className: m,
          href: l,
          target: r,
          ...u,
          dangerouslySetInnerHTML: { __html: (0, i.decodeEntities)(n) },
          style: c,
        });
      };
      var u = n(3603),
        m = n(3566);
      n(7128);
      const p = ({ children: e, headingLevel: t, elementType: n = `h${t}`, ...l }) =>
          (0, o.createElement)(n, { ...l }, e),
        y = (0, l.withProductDataContext)(e => {
          const {
              className: t,
              headingLevel: n = 2,
              showProductLink: l = !0,
              linkTarget: r,
              align: i,
            } = e,
            y = (0, m.p)(e),
            { parentClassName: g } = (0, a.useInnerBlockLayoutContext)(),
            { product: v } = (0, a.useProductDataContext)(),
            { dispatchStoreEvent: k } = (0, u.y)();
          return v.id
            ? (0, o.createElement)(
                p,
                {
                  headingLevel: n,
                  className: s()(t, y.className, 'wc-block-components-product-title', {
                    [`${g}__product-title`]: g,
                    [`wc-block-components-product-title--align-${i}`]: i && (0, c.kM)(),
                  }),
                  style: (0, c.kM)() ? y.style : {},
                },
                (0, o.createElement)(d, {
                  disabled: !l,
                  name: v.name,
                  permalink: v.permalink,
                  target: r,
                  onClick: () => {
                    k('product-view-link', { product: v });
                  },
                }),
              )
            : (0, o.createElement)(p, {
                headingLevel: n,
                className: s()(t, y.className, 'wc-block-components-product-title', {
                  [`${g}__product-title`]: g,
                  [`wc-block-components-product-title--align-${i}`]: i && (0, c.kM)(),
                }),
                style: (0, c.kM)() ? y.style : {},
              });
        });
      let g = {
        headingLevel: { type: 'number', default: 2 },
        showProductLink: { type: 'boolean', default: !0 },
        linkTarget: { type: 'string' },
        productId: { type: 'number', default: 0 },
      };
      (0, c.kM)() && (g = { ...g, align: { type: 'string' } });
      const v = g,
        k = (0, l.withFilteredAttributes)(v)(y);
    },
    3566: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => c });
      var l = n(9019),
        o = n.n(l),
        r = n(3993),
        s = n(92),
        a = n(6032);
      const c = e => {
        const t = (e => {
            const t = (0, r.isObject)(e) ? e : { style: {} };
            let n = t.style;
            return (
              (0, r.isString)(n) && (n = JSON.parse(n) || {}),
              (0, r.isObject)(n) || (n = {}),
              { ...t, style: n }
            );
          })(e),
          n = (0, a.BK)(t),
          l = (0, a.aR)(t),
          c = (0, a.fo)(t),
          i = (0, s.x)(t);
        return {
          className: o()(i.className, n.className, l.className, c.className),
          style: { ...i.style, ...n.style, ...l.style, ...c.style },
        };
      };
    },
    92: (e, t, n) => {
      'use strict';
      n.d(t, { x: () => o });
      var l = n(3993);
      const o = e => {
        const t = (0, l.isObject)(e.style.typography) ? e.style.typography : {},
          n = (0, l.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : n,
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
    6032: (e, t, n) => {
      'use strict';
      n.d(t, { BK: () => d, aR: () => u, fo: () => m });
      var l = n(9019),
        o = n.n(l),
        r = n(1194),
        s = n(9786),
        a = n(3993);
      function c(e = {}) {
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
      function d(e) {
        var t, n, l, r, s, d, u;
        const { backgroundColor: m, textColor: p, gradient: y, style: g } = e,
          v = i('background-color', m),
          k = i('color', p),
          f = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(y),
          h = f || (null == g || null === (t = g.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: o()(k, f, {
            [v]: !h && !!v,
            'has-text-color':
              p || (null == g || null === (n = g.color) || void 0 === n ? void 0 : n.text),
            'has-background':
              m ||
              (null == g || null === (l = g.color) || void 0 === l ? void 0 : l.background) ||
              y ||
              (null == g || null === (r = g.color) || void 0 === r ? void 0 : r.gradient),
            'has-link-color': (0, a.isObject)(
              null == g || null === (s = g.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == g ||
                null === (d = g.elements) ||
                void 0 === d ||
                null === (u = d.link) ||
                void 0 === u
                ? void 0
                : u.color
              : void 0,
          }),
          style: c({ color: (null == g ? void 0 : g.color) || {} }),
        };
      }
      function u(e) {
        var t;
        const n = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: n, style: l } = e,
              r = n ? i('border-color', n) : '';
            return o()({
              'has-border-color':
                !!n || !(null == l || null === (t = l.border) || void 0 === t || !t.color),
              [r]: !!r,
            });
          })(e),
          style: c({ border: n }),
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
    7128: () => {},
    6625: () => {},
  },
]);
