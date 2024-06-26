'use strict';
(self.webpackChunkwebpackWcBlocksMainJsonp = self.webpackChunkwebpackWcBlocksMainJsonp || []).push([
  [8553],
  {
    8614: (e, t, o) => {
      o.r(t), o.d(t, { Block: () => m, default: () => f });
      var n = o(1609),
        r = o(7723),
        l = o(9019),
        s = o.n(l),
        c = o(2796),
        a = o(3566),
        i = o(1616),
        u = o(3993),
        d = o(6427);
      const v = e => {
          const { reviews: t } = e,
            o = t
              ? (0,
                r.sprintf) /* translators: %s is referring to the total of reviews for a product */(
                  /* translators: %s is referring to the total of reviews for a product */
                  (0, r._n)('(%s customer review)', '(%s customer reviews)', t, 'woocommerce'),
                  t,
                )
              : (0, r.__)('(X customer reviews)', 'woocommerce');
          return (0, n.createElement)(
            'span',
            { className: 'wc-block-components-product-rating-counter__reviews_count' },
            (0, n.createElement)(d.Disabled, null, (0, n.createElement)('a', { href: '/' }, o)),
          );
        },
        m = e => {
          const { textAlign: t, shouldDisplayMockedReviewsWhenProductHasNoReviews: o } = e,
            r = (0, a.p)(e),
            { parentClassName: l } = (0, c.useInnerBlockLayoutContext)(),
            { product: i } = (0, c.useProductDataContext)(),
            d = (e => {
              const t = (0, u.isNumber)(e.review_count)
                ? e.review_count
                : parseInt(e.review_count, 10);
              return Number.isFinite(t) && t > 0 ? t : 0;
            })(i),
            m = s()(r.className, 'wc-block-components-product-rating-counter', {
              [`${l}__product-rating`]: l,
              [`has-text-align-${t}`]: t,
            });
          if (d || o)
            return (0, n.createElement)(
              'div',
              { className: m, style: r.style },
              (0, n.createElement)(
                'div',
                { className: 'wc-block-components-product-rating-counter__container' },
                (0, n.createElement)(v, { reviews: d }),
              ),
            );
        },
        f = (0, i.withProductDataContext)(m);
    },
    3566: (e, t, o) => {
      o.d(t, { p: () => a });
      var n = o(9019),
        r = o.n(n),
        l = o(3993),
        s = o(92),
        c = o(6032);
      const a = e => {
        const t = (e => {
            const t = (0, l.isObject)(e) ? e : { style: {} };
            let o = t.style;
            return (
              (0, l.isString)(o) && (o = JSON.parse(o) || {}),
              (0, l.isObject)(o) || (o = {}),
              { ...t, style: o }
            );
          })(e),
          o = (0, c.BK)(t),
          n = (0, c.aR)(t),
          a = (0, c.fo)(t),
          i = (0, s.x)(t);
        return {
          className: r()(i.className, o.className, n.className, a.className),
          style: { ...i.style, ...o.style, ...n.style, ...a.style },
        };
      };
    },
    92: (e, t, o) => {
      o.d(t, { x: () => r });
      var n = o(3993);
      const r = e => {
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
      o.d(t, { BK: () => u, aR: () => d, fo: () => v });
      var n = o(9019),
        r = o.n(n),
        l = o(1194),
        s = o(9786),
        c = o(3993);
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
        return e && t ? `has-${(0, l.c)(t)}-${e}` : '';
      }
      function u(e) {
        var t, o, n, l, s, u, d;
        const { backgroundColor: v, textColor: m, gradient: f, style: y } = e,
          p = i('background-color', v),
          g = i('color', m),
          b = (function(e) {
            if (e) return `has-${e}-gradient-background`;
          })(f),
          k = b || (null == y || null === (t = y.color) || void 0 === t ? void 0 : t.gradient);
        return {
          className: r()(g, b, {
            [p]: !k && !!p,
            'has-text-color':
              m || (null == y || null === (o = y.color) || void 0 === o ? void 0 : o.text),
            'has-background':
              v ||
              (null == y || null === (n = y.color) || void 0 === n ? void 0 : n.background) ||
              f ||
              (null == y || null === (l = y.color) || void 0 === l ? void 0 : l.gradient),
            'has-link-color': (0, c.isObject)(
              null == y || null === (s = y.elements) || void 0 === s ? void 0 : s.link,
            )
              ? null == y ||
                null === (u = y.elements) ||
                void 0 === u ||
                null === (d = u.link) ||
                void 0 === d
                ? void 0
                : d.color
              : void 0,
          }),
          style: a({ color: (null == y ? void 0 : y.color) || {} }),
        };
      }
      function d(e) {
        var t;
        const o = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
        return {
          className: (function(e) {
            var t;
            const { borderColor: o, style: n } = e,
              l = o ? i('border-color', o) : '';
            return r()({
              'has-border-color':
                !!o || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
              [l]: !!l,
            });
          })(e),
          style: a({ border: o }),
        };
      }
      function v(e) {
        var t;
        return {
          className: void 0,
          style: a({
            spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {},
          }),
        };
      }
    },
  },
]);
