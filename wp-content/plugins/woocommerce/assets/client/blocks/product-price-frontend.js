(self.webpackChunkwebpackWcBlocksFrontendJsonp =
  self.webpackChunkwebpackWcBlocksFrontendJsonp || []).push([
  [2388],
  {
    2519: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { Block: () => m, default: () => p });
      var c = t(1609),
        l = t(9019),
        n = t.n(l),
        o = t(6042),
        a = t(8529),
        s = t(2796),
        i = t(3566),
        u = t(1616);
      const m = e => {
          var r, t;
          const { className: l, textAlign: u, isDescendentOfSingleProductTemplate: m } = e,
            p = (0, i.p)(e),
            { parentName: d, parentClassName: y } = (0, s.useInnerBlockLayoutContext)(),
            { product: v } = (0, s.useProductDataContext)(),
            g = 'woocommerce/all-products' === d,
            f = n()('wc-block-components-product-price', l, p.className, {
              [`${y}__product-price`]: y,
            });
          if (!v.id && !m) {
            const e = (0, c.createElement)(o.A, { align: u, className: f });
            return g
              ? (0, c.createElement)('div', { className: 'wp-block-woocommerce-product-price' }, e)
              : e;
          }
          const N = v.prices,
            _ = m ? (0, a.getCurrencyFromPriceResponse)() : (0, a.getCurrencyFromPriceResponse)(N),
            b = '5000',
            P = N.price !== N.regular_price,
            k = n()({
              [`${y}__product-price__value`]: y,
              [`${y}__product-price__value--on-sale`]: P,
            }),
            S = (0, c.createElement)(o.A, {
              align: u,
              className: f,
              style: p.style,
              regularPriceStyle: p.style,
              priceStyle: p.style,
              priceClassName: k,
              currency: _,
              price: m ? b : N.price,
              minPrice:
                null == N || null === (r = N.price_range) || void 0 === r ? void 0 : r.min_amount,
              maxPrice:
                null == N || null === (t = N.price_range) || void 0 === t ? void 0 : t.max_amount,
              regularPrice: m ? b : N.regular_price,
              regularPriceClassName: n()({ [`${y}__product-price__regular`]: y }),
            });
          return g
            ? (0, c.createElement)('div', { className: 'wp-block-woocommerce-product-price' }, S)
            : S;
        },
        p = e =>
          e.isDescendentOfSingleProductTemplate
            ? (0, c.createElement)(m, { ...e })
            : (0, u.withProductDataContext)(m)(e);
    },
    6042: (e, r, t) => {
      'use strict';
      t.d(r, { A: () => p });
      var c = t(1609),
        l = t(7723),
        n = t(4656),
        o = t(9019),
        a = t.n(o),
        s = t(8529),
        i = t(6087);
      t(4567);
      const u = ({
          currency: e,
          maxPrice: r,
          minPrice: t,
          priceClassName: o,
          priceStyle: i = {},
        }) =>
          (0, c.createElement)(
            c.Fragment,
            null,
            (0, c.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, l.sprintf) /* translators: %1$s min price, %2$s max price */(
                /* translators: %1$s min price, %2$s max price */
                (0, l.__)('Price between %1$s and %2$s', 'woocommerce'),
                (0, s.formatPrice)(t),
                (0, s.formatPrice)(r),
              ),
            ),
            (0, c.createElement)(
              'span',
              { 'aria-hidden': !0 },
              (0, c.createElement)(n.FormattedMonetaryAmount, {
                className: a()('wc-block-components-product-price__value', o),
                currency: e,
                value: t,
                style: i,
              }),
              ' — ',
              (0, c.createElement)(n.FormattedMonetaryAmount, {
                className: a()('wc-block-components-product-price__value', o),
                currency: e,
                value: r,
                style: i,
              }),
            ),
          ),
        m = ({
          currency: e,
          regularPriceClassName: r,
          regularPriceStyle: t,
          regularPrice: o,
          priceClassName: s,
          priceStyle: i,
          price: u,
        }) =>
          (0, c.createElement)(
            c.Fragment,
            null,
            (0, c.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, l.__)('Previous price:', 'woocommerce'),
            ),
            (0, c.createElement)(n.FormattedMonetaryAmount, {
              currency: e,
              renderText: e =>
                (0, c.createElement)(
                  'del',
                  { className: a()('wc-block-components-product-price__regular', r), style: t },
                  e,
                ),
              value: o,
            }),
            (0, c.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, l.__)('Discounted price:', 'woocommerce'),
            ),
            (0, c.createElement)(n.FormattedMonetaryAmount, {
              currency: e,
              renderText: e =>
                (0, c.createElement)(
                  'ins',
                  {
                    className: a()('wc-block-components-product-price__value', 'is-discounted', s),
                    style: i,
                  },
                  e,
                ),
              value: u,
            }),
          ),
        p = ({
          align: e,
          className: r,
          currency: t,
          format: l = '<price/>',
          maxPrice: o,
          minPrice: s,
          price: p,
          priceClassName: d,
          priceStyle: y,
          regularPrice: v,
          regularPriceClassName: g,
          regularPriceStyle: f,
          style: N,
        }) => {
          const _ = a()(r, 'price', 'wc-block-components-product-price', {
            [`wc-block-components-product-price--align-${e}`]: e,
          });
          l.includes('<price/>') ||
            ((l = '<price/>'), console.error('Price formats need to include the `<price/>` tag.'));
          const b = v && p && p < v;
          let P = (0, c.createElement)('span', {
            className: a()('wc-block-components-product-price__value', d),
          });
          return (
            b
              ? (P = (0, c.createElement)(m, {
                  currency: t,
                  price: p,
                  priceClassName: d,
                  priceStyle: y,
                  regularPrice: v,
                  regularPriceClassName: g,
                  regularPriceStyle: f,
                }))
              : void 0 !== s && void 0 !== o
              ? (P = (0, c.createElement)(u, {
                  currency: t,
                  maxPrice: o,
                  minPrice: s,
                  priceClassName: d,
                  priceStyle: y,
                }))
              : p &&
                (P = (0, c.createElement)(n.FormattedMonetaryAmount, {
                  className: a()('wc-block-components-product-price__value', d),
                  currency: t,
                  value: p,
                  style: y,
                })),
            (0, c.createElement)(
              'span',
              { className: _, style: N },
              (0, i.createInterpolateElement)(l, { price: P }),
            )
          );
        };
    },
    3566: (e, r, t) => {
      'use strict';
      t.d(r, { p: () => s });
      var c = t(9019),
        l = t.n(c),
        n = t(3993),
        o = t(92),
        a = t(6032);
      const s = e => {
        const r = (e => {
            const r = (0, n.isObject)(e) ? e : { style: {} };
            let t = r.style;
            return (
              (0, n.isString)(t) && (t = JSON.parse(t) || {}),
              (0, n.isObject)(t) || (t = {}),
              { ...r, style: t }
            );
          })(e),
          t = (0, a.BK)(r),
          c = (0, a.aR)(r),
          s = (0, a.fo)(r),
          i = (0, o.x)(r);
        return {
          className: l()(i.className, t.className, c.className, s.className),
          style: { ...i.style, ...t.style, ...c.style, ...s.style },
        };
      };
    },
    92: (e, r, t) => {
      'use strict';
      t.d(r, { x: () => l });
      var c = t(3993);
      const l = e => {
        const r = (0, c.isObject)(e.style.typography) ? e.style.typography : {},
          t = (0, c.isString)(r.fontFamily) ? r.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : t,
          style: {
            fontSize: e.fontSize ? `var(--wp--preset--font-size--${e.fontSize})` : r.fontSize,
            fontStyle: r.fontStyle,
            fontWeight: r.fontWeight,
            letterSpacing: r.letterSpacing,
            lineHeight: r.lineHeight,
            textDecoration: r.textDecoration,
            textTransform: r.textTransform,
          },
        };
      };
    },
    6032: (e, r, t) => {
      'use strict';
      t.d(r, { BK: () => u, aR: () => m, fo: () => p });
      var c = t(9019),
        l = t.n(c),
        n = t(1194),
        o = t(9786),
        a = t(3993);
      function s(e = {}) {
        const r = {};
        return (
          (0, o.getCSSRules)(e, { selector: '' }).forEach(e => {
            r[e.key] = e.value;
          }),
          r
        );
      }
      function i(e, r) {
        return e && r ? `has-${(0, n.c)(r)}-${e}` : '';
      }
      function u(e) {
        var r, t, c, n, o, u, m;
        const { backgroundColor: p, textColor: d, gradient: y, style: v } = e,
          g = i('background-color', p),
          f = i('color', d),
          N = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(y),
          _ = N || (null == v || null === (r = v.color) || void 0 === r ? void 0 : r.gradient);
        return {
          className: l()(f, N, {
            [g]: !_ && !!g,
            'has-text-color':
              d || (null == v || null === (t = v.color) || void 0 === t ? void 0 : t.text),
            'has-background':
              p ||
              (null == v || null === (c = v.color) || void 0 === c ? void 0 : c.background) ||
              y ||
              (null == v || null === (n = v.color) || void 0 === n ? void 0 : n.gradient),
            'has-link-color': (0, a.isObject)(
              null == v || null === (o = v.elements) || void 0 === o ? void 0 : o.link,
            )
              ? null == v ||
                null === (u = v.elements) ||
                void 0 === u ||
                null === (m = u.link) ||
                void 0 === m
                ? void 0
                : m.color
              : void 0,
          }),
          style: s({ color: (null == v ? void 0 : v.color) || {} }),
        };
      }
      function m(e) {
        var r;
        const t = (null === (r = e.style) || void 0 === r ? void 0 : r.border) || {};
        return {
          className: (function(e) {
            var r;
            const { borderColor: t, style: c } = e,
              n = t ? i('border-color', t) : '';
            return l()({
              'has-border-color':
                !!t || !(null == c || null === (r = c.border) || void 0 === r || !r.color),
              [n]: !!n,
            });
          })(e),
          style: s({ border: t }),
        };
      }
      function p(e) {
        var r;
        return {
          className: void 0,
          style: s({
            spacing: (null === (r = e.style) || void 0 === r ? void 0 : r.spacing) || {},
          }),
        };
      }
    },
    4567: () => {},
  },
]);
