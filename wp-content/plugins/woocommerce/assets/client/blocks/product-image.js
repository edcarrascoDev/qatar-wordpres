(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [4232, 4442],
  {
    6239: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => l });
      const l = {
        showProductLink: { type: 'boolean', default: !0 },
        showSaleBadge: { type: 'boolean', default: !0 },
        saleBadgeAlign: { type: 'string', default: 'right' },
        imageSizing: { type: 'string', default: o(1281).e.SINGLE },
        productId: { type: 'number', default: 0 },
        isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
        isDescendentOfSingleProductBlock: { type: 'boolean', default: !1 },
        width: { type: 'string' },
        height: { type: 'string' },
        scale: { type: 'string', default: 'cover' },
        aspectRatio: { type: 'string' },
      };
    },
    231: (e, t, o) => {
      'use strict';
      o.d(t, { A: () => f });
      var l = o(1609),
        a = o(6087),
        n = o(7723),
        s = o(9019),
        c = o.n(s),
        r = o(5703),
        i = o(2796),
        d = o(3566),
        u = o(1616),
        m = o(3603),
        g = o(6809),
        p = (o(5183), o(1281));
      const y = e =>
          (0, l.createElement)('img', {
            ...e,
            src: r.PLACEHOLDER_IMG_SRC,
            alt: '',
            width: void 0,
            height: void 0,
          }),
        h = ({
          image: e,
          loaded: t,
          showFullSize: o,
          fallbackAlt: n,
          width: s,
          scale: c,
          height: r,
          aspectRatio: i,
        }) => {
          const { thumbnail: d, src: u, srcset: m, sizes: g, alt: p } = e || {},
            h = { alt: p || n, hidden: !t, src: d, ...(o && { src: u, srcSet: m, sizes: g }) },
            f = { height: r, width: s, objectFit: c, aspectRatio: i };
          return (0, l.createElement)(
            a.Fragment,
            null,
            h.src &&
              (0, l.createElement)('img', { style: f, 'data-testid': 'product-image', ...h }),
            !e && (0, l.createElement)(y, { style: f }),
          );
        },
        f = (0, u.withProductDataContext)(e => {
          const {
              className: t,
              imageSizing: o = p.e.SINGLE,
              showProductLink: s = !0,
              showSaleBadge: r,
              saleBadgeAlign: u = 'right',
              height: f,
              width: v,
              scale: b,
              aspectRatio: k,
              ...w
            } = e,
            S = (0, d.p)(e),
            { parentClassName: N } = (0, i.useInnerBlockLayoutContext)(),
            { product: C, isLoading: _ } = (0, i.useProductDataContext)(),
            { dispatchStoreEvent: E } = (0, m.y)();
          if (!C.id)
            return (0, l.createElement)(
              'div',
              {
                className: c()(
                  t,
                  'wc-block-components-product-image',
                  { [`${N}__product-image`]: N },
                  S.className,
                ),
                style: S.style,
              },
              (0, l.createElement)(y, null),
            );
          const x = !!C.images.length,
            L = x ? C.images[0] : null,
            A = s ? 'a' : a.Fragment,
            B = (0, n.sprintf) /* translators: %s is referring to the product name */(
              /* translators: %s is referring to the product name */
              (0, n.__)('Link to %s', 'woocommerce'),
              C.name,
            ),
            z = {
              href: C.permalink,
              ...(!x && { 'aria-label': B }),
              onClick: () => {
                E('product-view-link', { product: C });
              },
            };
          return (
            delete w.style,
            (0, l.createElement)(
              'div',
              {
                className: c()(
                  t,
                  'wc-block-components-product-image',
                  { [`${N}__product-image`]: N },
                  S.className,
                ),
                style: S.style,
              },
              (0, l.createElement)(
                A,
                { ...(s && z) },
                !!r && (0, l.createElement)(g.default, { align: u, ...w }),
                (0, l.createElement)(h, {
                  fallbackAlt: C.name,
                  image: L,
                  loaded: !_,
                  showFullSize: o !== p.e.THUMBNAIL,
                  width: v,
                  height: f,
                  scale: b,
                  aspectRatio: k,
                }),
              ),
            )
          );
        });
    },
    8110: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { default: () => s });
      var l = o(1616),
        a = o(231),
        n = o(6239);
      const s = (0, l.withFilteredAttributes)(n.A)(a.A);
    },
    6809: (e, t, o) => {
      'use strict';
      o.r(t), o.d(t, { Block: () => u, default: () => m });
      var l = o(1609),
        a = o(7723),
        n = o(9019),
        s = o.n(n),
        c = o(4656),
        r = o(2796),
        i = o(3566),
        d = o(1616);
      o(6007);
      const u = e => {
          const { className: t, align: o } = e,
            n = (0, i.p)(e),
            { parentClassName: d } = (0, r.useInnerBlockLayoutContext)(),
            { product: u } = (0, r.useProductDataContext)();
          if (!((u.id && u.on_sale) || e.isDescendentOfSingleProductTemplate)) return null;
          const m =
            'string' == typeof o ? `wc-block-components-product-sale-badge--align-${o}` : '';
          return (0, l.createElement)(
            'div',
            {
              className: s()(
                'wc-block-components-product-sale-badge',
                t,
                m,
                { [`${d}__product-onsale`]: d },
                n.className,
              ),
              style: n.style,
            },
            (0, l.createElement)(c.Label, {
              label: (0, a.__)('Sale', 'woocommerce'),
              screenReaderLabel: (0, a.__)('Product on sale', 'woocommerce'),
            }),
          );
        },
        m = (0, d.withProductDataContext)(u);
    },
    3603: (e, t, o) => {
      'use strict';
      o.d(t, { y: () => s });
      var l = o(2619),
        a = o(7143),
        n = o(6087);
      const s = () => ({
        dispatchStoreEvent: (0, n.useCallback)((e, t = {}) => {
          try {
            (0, l.doAction)(`experimental__woocommerce_blocks-${e}`, t);
          } catch (e) {
            console.error(e);
          }
        }, []),
        dispatchCheckoutEvent: (0, n.useCallback)((e, t = {}) => {
          try {
            (0, l.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
              ...t,
              storeCart: (0, a.select)('wc/store/cart').getCartData(),
            });
          } catch (e) {
            console.error(e);
          }
        }, []),
      });
    },
    3566: (e, t, o) => {
      'use strict';
      o.d(t, { p: () => r });
      var l = o(9019),
        a = o.n(l),
        n = o(3993),
        s = o(92),
        c = o(6032);
      const r = e => {
        const t = (e => {
            const t = (0, n.isObject)(e) ? e : { style: {} };
            let o = t.style;
            return (
              (0, n.isString)(o) && (o = JSON.parse(o) || {}),
              (0, n.isObject)(o) || (o = {}),
              { ...t, style: o }
            );
          })(e),
          o = (0, c.BK)(t),
          l = (0, c.aR)(t),
          r = (0, c.fo)(t),
          i = (0, s.x)(t);
        return {
          className: a()(i.className, o.className, l.className, r.className),
          style: { ...i.style, ...o.style, ...l.style, ...r.style },
        };
      };
    },
    92: (e, t, o) => {
      'use strict';
      o.d(t, { x: () => a });
      var l = o(3993);
      const a = e => {
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
      'use strict';
      o.d(t, { BK: () => d, aR: () => u, fo: () => m });
      var l = o(9019),
        a = o.n(l),
        n = o(1194),
        s = o(9786),
        c = o(3993);
      function r(e = {}) {
        const t = {};
        return (
          (0, s.getCSSRules)(e, { selector: '' }).forEach(e => {
            t[e.key] = e.value;
          }),
          t
        );
      }
      function i(e, t) {
        return e && t ? `has-${(0, n.c)(t)}-${e}` : '';
      }
      function d(e) {
        var t, o, l, n, s, d, u;
        const { backgroundColor: m, textColor: g, gradient: p, style: y } = e,
          h = i('background-color', m),
          f = i('color', g),
          v = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(p),
          b = v || (null == y || null === (t = y.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: a()(f, v, {
            [h]: !b && !!h,
            'has-text-color':
              g || (null == y || null === (o = y.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              m ||
              (null == y || null === (l = y.color) || void 0 === l ? void 0 : l.background) ||
              p ||
              (null == y || null === (n = y.color) || void 0 === n ? void 0 : n.gradient),
            'has-link-color': (0, c.isObject)(
              null == y || null === (s = y.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == y ||
                null === (d = y.elements) ||
                void 0 === d ||
                null === (u = d.link) ||
                void 0 === u
                ? void 0
                : u.color
              : void 0,
          }),
          style: r({ color: (null == y ? void 0 : y.color) || {} }),
        };
      }
      function u(e) {
        var t;
        const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: o, style: l } = e,
              n = o ? i('border-color', o) : '';
            return a()({
              'has-border-color':
                !!o || !(null == l || null === (t = l.border) || void 0 === t || !t.color),
              [n]: !!n,
            });
          })(e),
          style: r({ border: o }),
        };
      }
      function m(e) {
        var t;
        return {
          className: void 0,
          style: r({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
    5183: () => {},
    6007: () => {},
  },
]);
