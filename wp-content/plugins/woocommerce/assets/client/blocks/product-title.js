(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [2105],
  {
    6154: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => l });
      let n = {
        headingLevel: { type: 'number', default: 2 },
        showProductLink: { type: 'boolean', default: !0 },
        linkTarget: { type: 'string' },
        productId: { type: 'number', default: 0 },
      };
      (0, o(812).kM)() && (n = { ...n, align: { type: 'string' } });
      const l = n;
    },
    1318: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => p });
      var n = o(1609),
        l = o(9019),
        r = o.n(l),
        c = o(2796),
        s = o(812),
        a = o(1616),
        i = o(7102),
        d = o(3603),
        u = o(3566);
      o(7128);
      const m = ({ children: e, headingLevel: t, elementType: o = `h${t}`, ...l }) =>
          (0, n.createElement)(o, { ...l }, e),
        p = (0, a.withProductDataContext)(e => {
          const {
              className: t,
              headingLevel: o = 2,
              showProductLink: l = !0,
              linkTarget: a,
              align: p,
            } = e,
            y = (0, u.p)(e),
            { parentClassName: k } = (0, c.useInnerBlockLayoutContext)(),
            { product: v } = (0, c.useProductDataContext)(),
            { dispatchStoreEvent: g } = (0, d.y)();
          return v.id
            ? (0, n.createElement)(
                m,
                {
                  headingLevel: o,
                  className: r()(t, y.className, 'wc-block-components-product-title', {
                    [`${k}__product-title`]: k,
                    [`wc-block-components-product-title--align-${p}`]: p && (0, s.kM)(),
                  }),
                  style: (0, s.kM)() ? y.style : {},
                },
                (0, n.createElement)(i.A, {
                  disabled: !l,
                  name: v.name,
                  permalink: v.permalink,
                  target: a,
                  onClick: () => {
                    g('product-view-link', { product: v });
                  },
                }),
              )
            : (0, n.createElement)(m, {
                headingLevel: o,
                className: r()(t, y.className, 'wc-block-components-product-title', {
                  [`${k}__product-title`]: k,
                  [`wc-block-components-product-title--align-${p}`]: p && (0, s.kM)(),
                }),
                style: (0, s.kM)() ? y.style : {},
              });
        });
    },
    6143: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => c });
      var n = o(1616),
        l = o(1318),
        r = o(6154);
      const c = (0, n.withFilteredAttributes)(r.A)(l.A);
    },
    7102: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => s });
      var n = o(1609),
        l = o(8537),
        r = o(9019),
        c = o.n(r);
      o(6625);
      const s = ({
        className: e = '',
        disabled: t = !1,
        name: o,
        permalink: r = '',
        target: s,
        rel: a,
        style: i,
        onClick: d,
        ...u
      }) => {
        const m = c()('wc-block-components-product-name', e);
        if (t) {
          const e = u;
          return (0, n.createElement)('span', {
            className: m,
            ...e,
            dangerouslySetInnerHTML: { __html: (0, l.decodeEntities)(o) },
          });
        }
        return (0, n.createElement)('a', {
          className: m,
          href: r,
          target: s,
          ...u,
          dangerouslySetInnerHTML: { __html: (0, l.decodeEntities)(o) },
          style: i,
        });
      };
    },
    3603: (e, t, o) => {
      'use strict';
      o.d(t, { y: () => c });
      var n = o(2619),
        l = o(7143),
        r = o(6087);
      const c = () => ({
        dispatchStoreEvent: (0, r.useCallback)((e, t = {}) => {
          try {
            (0, n.doAction)(`experimental__woocommerce_blocks-${e}`, t);
          } catch (e) {
            console.error(e);
          }
        }, []),
        dispatchCheckoutEvent: (0, r.useCallback)((e, t = {}) => {
          try {
            (0, n.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
              ...t,
              storeCart: (0, l.select)('wc/store/cart').getCartData(),
            });
          } catch (e) {
            console.error(e);
          }
        }, []),
      });
    },
    3566: (e, t, o) => {
      'use strict';
      o.d(t, { p: () => a });
      var n = o(9019),
        l = o.n(n),
        r = o(3993),
        c = o(92),
        s = o(6032);
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
          o = (0, s.BK)(t),
          n = (0, s.aR)(t),
          a = (0, s.fo)(t),
          i = (0, c.x)(t);
        return {
          className: l()(i.className, o.className, n.className, a.className),
          style: { ...i.style, ...o.style, ...n.style, ...a.style },
        };
      };
    },
    92: (e, t, o) => {
      'use strict';
      o.d(t, { x: () => l });
      var n = o(3993);
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
    6032: (e, t, o) => {
      'use strict';
      o.d(t, { BK: () => d, aR: () => u, fo: () => m });
      var n = o(9019),
        l = o.n(n),
        r = o(1194),
        c = o(9786),
        s = o(3993);
      function a(e = {}) {
        const t = {};
        return (
          (0, c.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, r.c)(t)}-${e}` : '';
      }
      function d(e) {
        var t, o, n, r, c, d, u;
        const { backgroundColor: m, textColor: p, gradient: y, style: k } = e,
          v = i('background-color', m),
          g = i('color', p),
          h = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(y),
          f = h || (null == k || null === (t = k.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: l()(g, h, {
            [v]: !f && !!v,
            'has-text-color':
              p || (null == k || null === (o = k.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              m ||
              (null == k || null === (n = k.color) || void 0 === n ? void 0 : n.background) ||
              y ||
              (null == k || null === (r = k.color) || void 0 === r ? void 0 : r.gradient),
            'has-link-color': (0, s.isObject)(
              null == k || null === (c = k.elements) || void 0 === c ? void 0 : c.link,
            )
              ? null == k ||
                null === (d = k.elements) ||
                void 0 === d ||
                null === (u = d.link) ||
                void 0 === u
                ? void 0
                : u.color
              : void 0,
          }),
          style: a({ color: (null == k ? void 0 : k.color) || {} }),
        };
      }
      function u(e) {
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
      function m(e) {
        var t;
        return {
          className: void 0,
          style: a({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    7128: () => {},
    6625: () => {},
  },
]);
