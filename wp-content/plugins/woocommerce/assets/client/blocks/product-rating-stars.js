(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [8578],
  {
    9549: (t, e, n) => {
      'use strict';
      n.r(e), n.d(e, { Block: () => g, default: () => v });
      var o = n(1609),
        r = n(7723),
        s = n(9019),
        a = n.n(s),
        l = n(2796),
        c = n(3566),
        i = n(1616),
        u = n(3993);
      n(7195);
      const d = t => ({ width: (t / 5) * 100 + '%' }),
        m = ({ parentClassName: t }) => {
          const e = d(0);
          return (0, o.createElement)(
            'div',
            {
              className: a()(
                'wc-block-components-product-rating-stars__norating-container',
                `${t}-product-rating-stars__norating-container`,
              ),
            },
            (0, o.createElement)(
              'div',
              { className: 'wc-block-components-product-rating-stars__norating', role: 'img' },
              (0, o.createElement)('span', { style: e }),
            ),
            (0, o.createElement)('span', null, (0, r.__)('No Reviews', 'woocommerce')),
          );
        },
        p = t => {
          const { rating: e, reviews: n, parentClassName: s } = t,
            l = d(e),
            c = (0, r.sprintf) /* translators: %f is referring to the average rating value */(
              /* translators: %f is referring to the average rating value */
              (0, r.__)('Rated %f out of 5', 'woocommerce'),
              e,
            ),
            i = {
              __html: (0,
              r.sprintf) /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */(
                /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                (0, r._n)(
                  'Rated %1$s out of 5 based on %2$s customer rating',
                  'Rated %1$s out of 5 based on %2$s customer ratings',
                  n,
                  'woocommerce',
                ),
                (0, r.sprintf)('<strong class="rating">%f</strong>', e),
                (0, r.sprintf)('<span class="rating">%d</span>', n),
              ),
            };
          return (0, o.createElement)(
            'div',
            {
              className: a()(
                'wc-block-components-product-rating-stars__stars',
                `${s}__product-rating-stars__stars`,
              ),
              role: 'img',
              'aria-label': c,
            },
            (0, o.createElement)('span', { style: l, dangerouslySetInnerHTML: i }),
          );
        },
        g = t => {
          const { textAlign: e, shouldDisplayMockedReviewsWhenProductHasNoReviews: n } = t,
            r = (0, c.p)(t),
            { parentClassName: s } = (0, l.useInnerBlockLayoutContext)(),
            { product: i } = (0, l.useProductDataContext)(),
            d = (t => {
              const e = parseFloat(t.average_rating);
              return Number.isFinite(e) && e > 0 ? e : 0;
            })(i),
            g = (t => {
              const e = (0, u.isNumber)(t.review_count)
                ? t.review_count
                : parseInt(t.review_count, 10);
              return Number.isFinite(e) && e > 0 ? e : 0;
            })(i),
            v = a()(r.className, 'wc-block-components-product-rating-stars', {
              [`${s}__product-rating`]: s,
              [`has-text-align-${e}`]: e,
            }),
            f = n ? (0, o.createElement)(m, { parentClassName: s }) : null,
            y = g ? (0, o.createElement)(p, { rating: d, reviews: g, parentClassName: s }) : f;
          return (0, o.createElement)(
            'div',
            { className: v, style: r.style },
            (0, o.createElement)(
              'div',
              { className: 'wc-block-components-product-rating-stars__container' },
              y,
            ),
          );
        },
        v = (0, i.withProductDataContext)(g);
    },
    3566: (t, e, n) => {
      'use strict';
      n.d(e, { p: () => c });
      var o = n(9019),
        r = n.n(o),
        s = n(3993),
        a = n(92),
        l = n(6032);
      const c = t => {
        const e = (t => {
            const e = (0, s.isObject)(t) ? t : { style: {} };
            let n = e.style;
            return (
              (0, s.isString)(n) && (n = JSON.parse(n) || {}),
              (0, s.isObject)(n) || (n = {}),
              { ...e, style: n }
            );
          })(t),
          n = (0, l.BK)(e),
          o = (0, l.aR)(e),
          c = (0, l.fo)(e),
          i = (0, a.x)(e);
        return {
          className: r()(i.className, n.className, o.className, c.className),
          style: { ...i.style, ...n.style, ...o.style, ...c.style },
        };
      };
    },
    92: (t, e, n) => {
      'use strict';
      n.d(e, { x: () => r });
      var o = n(3993);
      const r = t => {
        const e = (0, o.isObject)(t.style.typography) ? t.style.typography : {},
          n = (0, o.isString)(e.fontFamily) ? e.fontFamily : '';
        return {
          className: t.fontFamily ? `has-${t.fontFamily}-font-family` : n,
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
    6032: (t, e, n) => {
      'use strict';
      n.d(e, { BK: () => u, aR: () => d, fo: () => m });
      var o = n(9019),
        r = n.n(o),
        s = n(1194),
        a = n(9786),
        l = n(3993);
      function c(t = {}) {
        const e = {};
        return (
          (0, a.getCSSRules)(t, { selector: '' }).forEach(t => {
            e[t.key] = t.value;
          }),
          e
        );
      }
      function i(t, e) {
        return t && e ? `has-${(0, s.c)(e)}-${t}` : '';
      }
      function u(t) {
        var e, n, o, s, a, u, d;
        const { backgroundColor: m, textColor: p, gradient: g, style: v } = t,
          f = i('background-color', m),
          y = i('color', p),
          b = (function(t) {
            if (t) return `has-${t}-gradient-background`;
          })(g),
          _ = b || (null == v || null === (e = v.color) || void 0 === e ? void 0 : e.gradient);
        return {
          className: r()(y, b, {
            [f]: !_ && !!f,
            'has-text-color':
              p || (null == v || null === (n = v.color) || void 0 === n ? void 0 : n.text),
            'has-background':
              m ||
              (null == v || null === (o = v.color) || void 0 === o ? void 0 : o.background) ||
              g ||
              (null == v || null === (s = v.color) || void 0 === s ? void 0 : s.gradient),
            'has-link-color': (0, l.isObject)(
              null == v || null === (a = v.elements) || void 0 === a ? void 0 : a.link,
            )
              ? null == v ||
                null === (u = v.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: c({ color: (null == v ? void 0 : v.color) || {} }),
        };
      }
      function d(t) {
        var e;
        const n = (null === (e = t.style) || void 0 === e ? void 0 : e.border) || {};
        return {
          className: (function(t) {
            var e;
            const { borderColor: n, style: o } = t,
              s = n ? i('border-color', n) : '';
            return r()({
              'has-border-color':
                !!n || !(null == o || null === (e = o.border) || void 0 === e || !e.color),
              [s]: !!s,
            });
          })(t),
          style: c({ border: n }),
        };
      }
      function m(t) {
        var e;
        return {
          className: void 0,
          style: c({
            spacing: (null === (e = t.style) || void 0 === e ? void 0 : e.spacing) || {},
          }),
        };
      }
    },
    7195: () => {},
  },
]);
