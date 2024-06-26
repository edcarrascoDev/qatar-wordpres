(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [2388],
  {
    2519: (e, r, c) => {
      'use strict';
      c.r(r), c.d(r, { Block: () => m, default: () => p });
      var t = c(1609),
        l = c(9019),
        n = c.n(l),
        a = c(6042),
        o = c(8529),
        s = c(2796),
        i = c(3566),
        u = c(1616);
      const m = e => {
          var r, c;
          const { className: l, textAlign: u, isDescendentOfSingleProductTemplate: m } = e,
            p = (0, i.p)(e),
            { parentName: d, parentClassName: y } = (0, s.useInnerBlockLayoutContext)(),
            { product: v } = (0, s.useProductDataContext)(),
            g = 'woocommerce/all-products' === d,
            f = n()('wc-block-components-product-price', l, p.className, {
              [`${y}__product-price`]: y,
            });
          if (!v.id && !m) {
            const e = (0, t.createElement)(a.A, { align: u, className: f });
            return g
              ? (0, t.createElement)('div', { className: 'wp-block-woocommerce-product-price' }, e)
              : e;
          }
          const N = v.prices,
            _ = m ? (0, o.getCurrencyFromPriceResponse)() : (0, o.getCurrencyFromPriceResponse)(N),
            b = '5000',
            P = N.price !== N.regular_price,
            k = n()({
              [`${y}__product-price__value`]: y,
              [`${y}__product-price__value--on-sale`]: P,
            }),
            S = (0, t.createElement)(a.A, {
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
                null == N || null === (c = N.price_range) || void 0 === c ? void 0 : c.max_amount,
              regularPrice: m ? b : N.regular_price,
              regularPriceClassName: n()({ [`${y}__product-price__regular`]: y }),
            });
          return g
            ? (0, t.createElement)('div', { className: 'wp-block-woocommerce-product-price' }, S)
            : S;
        },
        p = e =>
          e.isDescendentOfSingleProductTemplate
            ? (0, t.createElement)(m, { ...e })
            : (0, u.withProductDataContext)(m)(e);
    },
    6042: (e, r, c) => {
      'use strict';
      c.d(r, { A: () => p });
      var t = c(1609),
        l = c(7723),
        n = c(4656),
        a = c(9019),
        o = c.n(a),
        s = c(8529),
        i = c(6087);
      c(4567);
      const u = ({
          currency: e,
          maxPrice: r,
          minPrice: c,
          priceClassName: a,
          priceStyle: i = {},
        }) =>
          (0, t.createElement)(
            t.Fragment,
            null,
            (0, t.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, l.sprintf) /* translators: %1$s min price, %2$s max price */(
                /* translators: %1$s min price, %2$s max price */
                (0, l.__)('Price between %1$s and %2$s', 'woocommerce'),
                (0, s.formatPrice)(c),
                (0, s.formatPrice)(r),
              ),
            ),
            (0, t.createElement)(
              'span',
              { 'aria-hidden': !0 },
              (0, t.createElement)(n.FormattedMonetaryAmount, {
                className: o()('wc-block-components-product-price__value', a),
                currency: e,
                value: c,
                style: i,
              }),
              ' — ',
              (0, t.createElement)(n.FormattedMonetaryAmount, {
                className: o()('wc-block-components-product-price__value', a),
                currency: e,
                value: r,
                style: i,
              }),
            ),
          ),
        m = ({
          currency: e,
          regularPriceClassName: r,
          regularPriceStyle: c,
          regularPrice: a,
          priceClassName: s,
          priceStyle: i,
          price: u,
        }) =>
          (0, t.createElement)(
            t.Fragment,
            null,
            (0, t.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, l.__)('Previous price:', 'woocommerce'),
            ),
            (0, t.createElement)(n.FormattedMonetaryAmount, {
              currency: e,
              renderText: e =>
                (0, t.createElement)(
                  'del',
                  { className: o()('wc-block-components-product-price__regular', r), style: c },
                  e,
                ),
              value: a,
            }),
            (0, t.createElement)(
              'span',
              { className: 'screen-reader-text' },
              (0, l.__)('Discounted price:', 'woocommerce'),
            ),
            (0, t.createElement)(n.FormattedMonetaryAmount, {
              currency: e,
              renderText: e =>
                (0, t.createElement)(
                  'ins',
                  {
                    className: o()('wc-block-components-product-price__value', 'is-discounted', s),
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
          currency: c,
          format: l = '<price/>',
          maxPrice: a,
          minPrice: s,
          price: p,
          priceClassName: d,
          priceStyle: y,
          regularPrice: v,
          regularPriceClassName: g,
          regularPriceStyle: f,
          style: N,
        }) => {
          const _ = o()(r, 'price', 'wc-block-components-product-price', {
            [`wc-block-components-product-price--align-${e}`]: e,
          });
          l.includes('<price/>') ||
            ((l = '<price/>'), console.error('Price formats need to include the `<price/>` tag.'));
          const b = v && p && p < v;
          let P = (0, t.createElement)('span', {
            className: o()('wc-block-components-product-price__value', d),
          });
          return (
            b
              ? (P = (0, t.createElement)(m, {
                  currency: c,
                  price: p,
                  priceClassName: d,
                  priceStyle: y,
                  regularPrice: v,
                  regularPriceClassName: g,
                  regularPriceStyle: f,
                }))
              : void 0 !== s && void 0 !== a
              ? (P = (0, t.createElement)(u, {
                  currency: c,
                  maxPrice: a,
                  minPrice: s,
                  priceClassName: d,
                  priceStyle: y,
                }))
              : p &&
                (P = (0, t.createElement)(n.FormattedMonetaryAmount, {
                  className: o()('wc-block-components-product-price__value', d),
                  currency: c,
                  value: p,
                  style: y,
                })),
            (0, t.createElement)(
              'span',
              { className: _, style: N },
              (0, i.createInterpolateElement)(l, { price: P }),
            )
          );
        };
    },
    3566: (e, r, c) => {
      'use strict';
      c.d(r, { p: () => s });
      var t = c(9019),
        l = c.n(t),
        n = c(3993),
        a = c(92),
        o = c(6032);
      const s = e => {
        const r = (e => {
            const r = (0, n.isObject)(e) ? e : { style: {} };
            let c = r.style;
            return (
              (0, n.isString)(c) && (c = JSON.parse(c) || {}),
              (0, n.isObject)(c) || (c = {}),
              { ...r, style: c }
            );
          })(e),
          c = (0, o.BK)(r),
          t = (0, o.aR)(r),
          s = (0, o.fo)(r),
          i = (0, a.x)(r);
        return {
          className: l()(i.className, c.className, t.className, s.className),
          style: { ...i.style, ...c.style, ...t.style, ...s.style },
        };
      };
    },
    92: (e, r, c) => {
      'use strict';
      c.d(r, { x: () => l });
      var t = c(3993);
      const l = e => {
        const r = (0, t.isObject)(e.style.typography) ? e.style.typography : {},
          c = (0, t.isString)(r.fontFamily) ? r.fontFamily : '';
        return {
          className: e.fontFamily ? `has-${e.fontFamily}-font-family` : c,
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
    6032: (e, r, c) => {
      'use strict';
      c.d(r, { BK: () => u, aR: () => m, fo: () => p });
      var t = c(9019),
        l = c.n(t),
        n = c(1194),
        a = c(9786),
        o = c(3993);
      function s(e = {}) {
        const r = {};
        return (
          (0, a.getCSSRules)(e, { selector: '' }).forEach(e => {
            r[e.key] = e.value;
          }),
          r
        );
      }
      function i(e, r) {
        return e && r ? `has-${(0, n.c)(r)}-${e}` : '';
      }
      function u(e) {
        var r, c, t, n, a, u, m;
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
              d || (null == v || null === (c = v.color) || void 0 === c ? void 0 : c.text),
            'has-background':
              p ||
              (null == v || null === (t = v.color) || void 0 === t ? void 0 : t.background) ||
              y ||
              (null == v || null === (n = v.color) || void 0 === n ? void 0 : n.gradient),
            'has-link-color': (0, o.isObject)(
              null == v || null === (a = v.elements) || void 0 === a ? void 0 : a.link,
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
        const c = (null === (r = e.style) || void 0 === r ? void 0 : r.border) || {};
        return {
          className: (function(e) {
            var r;
            const { borderColor: c, style: t } = e,
              n = c ? i('border-color', c) : '';
            return l()({
              'has-border-color':
                !!c || !(null == t || null === (r = t.border) || void 0 === r || !r.color),
              [n]: !!n,
            });
          })(e),
          style: s({ border: c }),
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
