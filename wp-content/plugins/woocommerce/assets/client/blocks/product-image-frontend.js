(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [4232, 4442],
  {
    8415: (e, t, l) => {
      'use strict';
      l.r(t), l.d(t, { default: () => v });
      var o = l(1616),
        n = l(1609),
        a = l(6087),
        s = l(7723),
        r = l(9019),
        c = l.n(r),
        i = l(5703),
        d = l(2796),
        u = l(3566),
        m = l(3603),
        g = l(6809);
      l(5183);
      let p = (function(e) {
        return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
      })({});
      const y = e =>
          (0, n.createElement)('img', {
            ...e,
            src: i.PLACEHOLDER_IMG_SRC,
            alt: '',
            width: void 0,
            height: void 0,
          }),
        f = ({
          image: e,
          loaded: t,
          showFullSize: l,
          fallbackAlt: o,
          width: s,
          scale: r,
          height: c,
          aspectRatio: i,
        }) => {
          const { thumbnail: d, src: u, srcset: m, sizes: g, alt: p } = e || {},
            f = { alt: p || o, hidden: !t, src: d, ...(l && { src: u, srcSet: m, sizes: g }) },
            h = { height: c, width: s, objectFit: r, aspectRatio: i };
          return (0, n.createElement)(
            a.Fragment,
            null,
            f.src &&
              (0, n.createElement)('img', { style: h, 'data-testid': 'product-image', ...f }),
            !e && (0, n.createElement)(y, { style: h }),
          );
        },
        h = (0, o.withProductDataContext)(e => {
          const {
              className: t,
              imageSizing: l = p.SINGLE,
              showProductLink: o = !0,
              showSaleBadge: r,
              saleBadgeAlign: i = 'right',
              height: h,
              width: b,
              scale: v,
              aspectRatio: k,
              ...w
            } = e,
            S = (0, u.p)(e),
            { parentClassName: N } = (0, d.useInnerBlockLayoutContext)(),
            { product: E, isLoading: C } = (0, d.useProductDataContext)(),
            { dispatchStoreEvent: L } = (0, m.y)();
          if (!E.id)
            return (0, n.createElement)(
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
              (0, n.createElement)(y, null),
            );
          const x = !!E.images.length,
            _ = x ? E.images[0] : null,
            B = o ? 'a' : a.Fragment,
            F = (0, s.sprintf) /* translators: %s is referring to the product name */(
              /* translators: %s is referring to the product name */
              (0, s.__)('Link to %s', 'woocommerce'),
              E.name,
            ),
            z = {
              href: E.permalink,
              ...(!x && { 'aria-label': F }),
              onClick: () => {
                L('product-view-link', { product: E });
              },
            };
          return (
            delete w.style,
            (0, n.createElement)(
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
              (0, n.createElement)(
                B,
                { ...(o && z) },
                !!r && (0, n.createElement)(g.default, { align: i, ...w }),
                (0, n.createElement)(f, {
                  fallbackAlt: E.name,
                  image: _,
                  loaded: !C,
                  showFullSize: l !== p.THUMBNAIL,
                  width: b,
                  height: h,
                  scale: v,
                  aspectRatio: k,
                }),
              ),
            )
          );
        }),
        b = {
          showProductLink: { type: 'boolean', default: !0 },
          showSaleBadge: { type: 'boolean', default: !0 },
          saleBadgeAlign: { type: 'string', default: 'right' },
          imageSizing: { type: 'string', default: p.SINGLE },
          productId: { type: 'number', default: 0 },
          isDescendentOfQueryLoop: { type: 'boolean', default: !1 },
          isDescendentOfSingleProductBlock: { type: 'boolean', default: !1 },
          width: { type: 'string' },
          height: { type: 'string' },
          scale: { type: 'string', default: 'cover' },
          aspectRatio: { type: 'string' },
        },
        v = (0, o.withFilteredAttributes)(b)(h);
    },
    6809: (e, t, l) => {
      'use strict';
      l.r(t), l.d(t, { Block: () => u, default: () => m });
      var o = l(1609),
        n = l(7723),
        a = l(9019),
        s = l.n(a),
        r = l(4656),
        c = l(2796),
        i = l(3566),
        d = l(1616);
      l(6007);
      const u = e => {
          const { className: t, align: l } = e,
            a = (0, i.p)(e),
            { parentClassName: d } = (0, c.useInnerBlockLayoutContext)(),
            { product: u } = (0, c.useProductDataContext)();
          if (!((u.id && u.on_sale) || e.isDescendentOfSingleProductTemplate)) return null;
          const m =
            'string' == typeof l ? `wc-block-components-product-sale-badge--align-${l}` : '';
          return (0, o.createElement)(
            'div',
            {
              className: s()(
                'wc-block-components-product-sale-badge',
                t,
                m,
                { [`${d}__product-onsale`]: d },
                a.className,
              ),
              style: a.style,
            },
            (0, o.createElement)(r.Label, {
              label: (0, n.__)('Sale', 'woocommerce'),
              screenReaderLabel: (0, n.__)('Product on sale', 'woocommerce'),
            }),
          );
        },
        m = (0, d.withProductDataContext)(u);
    },
    3566: (e, t, l) => {
      'use strict';
      l.d(t, { p: () => c });
      var o = l(9019),
        n = l.n(o),
        a = l(3993),
        s = l(92),
        r = l(6032);
      const c = e => {
        const t = (e => {
            const t = (0, a.isObject)(e) ? e : { style: {} };
            let l = t.style;
            return (
              (0, a.isString)(l) && (l = JSON.parse(l) || {}),
              (0, a.isObject)(l) || (l = {}),
              { ...t, style: l }
            );
          })(e),
          l = (0, r.BK)(t),
          o = (0, r.aR)(t),
          c = (0, r.fo)(t),
          i = (0, s.x)(t);
        return {
          className: n()(i.className, l.className, o.className, c.className),
          style: { ...i.style, ...l.style, ...o.style, ...c.style },
        };
      };
    },
    92: (e, t, l) => {
      'use strict';
      l.d(t, { x: () => n });
      var o = l(3993);
      const n = e => {
        const t = (0, o.isObject)(e.style.typography) ? e.style.typography : {},
          l = (0, o.isString)(t.fontFamily) ? t.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : l,
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
    6032: (e, t, l) => {
      'use strict';
      l.d(t, { BK: () => d, aR: () => u, fo: () => m });
      var o = l(9019),
        n = l.n(o),
        a = l(1194),
        s = l(9786),
        r = l(3993);
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
        return e && t ? `has-${(0, a.c)(t)}-${e}` : '';
      }
      function d(e) {
        var t, l, o, a, s, d, u;
        const { backgroundColor: m, textColor: g, gradient: p, style: y } = e,
          f = i('background-color', m),
          h = i('color', g),
          b = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(p),
          v = b || (null == y || null === (t = y.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: n()(h, b, {
            [f]: !v && !!f,
            'has-text-color':
              g || (null == y || null === (l = y.color) || void 0 === l ? void 0 : l.text),
            'has-background':
              m ||
              (null == y || null === (o = y.color) || void 0 === o ? void 0 : o.background) ||
              p ||
              (null == y || null === (a = y.color) || void 0 === a ? void 0 : a.gradient),
            'has-link-color': (0, r.isObject)(
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
          style: c({ color: (null == y ? void 0 : y.color) || {} }),
        };
      }
      function u(e) {
        var t;
        const l = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: l, style: o } = e,
              a = l ? i('border-color', l) : '';
            return n()({
              'has-border-color':
                !!l || !(null == o || null === (t = o.border) || void 0 === t || !t.color),
              [a]: !!a,
            });
          })(e),
          style: c({ border: l }),
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
    5183: () => {},
    6007: () => {},
  },
]);
