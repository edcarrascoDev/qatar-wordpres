(() => {
  'use strict';
  var e,
    t,
    o,
    r = {
      4768: (e, t, o) => {
        o.r(t);
        const r = window.wp.blocks;
        var n = o(4552);
        const c = JSON.parse(
          '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woocommerce/product-collection-no-results","title":"No results","version":"1.0.0","category":"woocommerce","description":"The contents of this block will display when there are no products found.","textdomain":"woocommerce","keywords":["Product Collection"],"usesContext":["queryId","query"],"ancestor":["woocommerce/product-collection"],"supports":{"align":true,"reusable":false,"html":false,"color":{"gradients":true,"link":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}}}',
        );
        var l = o(1609);
        const a = window.wp.blockEditor;
        var s = o(7723);
        const i = [
          [
            'core/group',
            {
              layout: {
                type: 'flex',
                orientation: 'vertical',
                justifyContent: 'center',
                flexWrap: 'wrap',
              },
            },
            [
              [
                'core/paragraph',
                {
                  textAlign: 'center',
                  fontSize: 'medium',
                  content: `<strong>${(0, s.__)('No results found', 'woocommerce')}</strong>`,
                },
              ],
              [
                'core/paragraph',
                {
                  content: `${(0, s.__)(
                    'You can try',
                    'woocommerce',
                  )} <a href="#" class="wc-link-clear-any-filters">${(0, s.__)(
                    'clearing any filters',
                    'woocommerce',
                  )}</a> ${(0, s.__)(
                    'or head to our',
                    'woocommerce',
                  )} <a href="#" class="wc-link-stores-home">${(0, s.__)(
                    "store's home",
                    'woocommerce',
                  )}</a>`,
                },
              ],
            ],
          ],
        ];
        (0, r.registerBlockType)(c, {
          icon: n.A,
          supports: { ...c.supports },
          edit: () => {
            const e = (0, a.useBlockProps)({ className: 'wc-block-product-collection-no-results' });
            return (0, l.createElement)(
              'div',
              { ...e },
              (0, l.createElement)(a.InnerBlocks, { template: i }),
            );
          },
          save: function() {
            return (0, l.createElement)(a.InnerBlocks.Content, null);
          },
        });
      },
      1609: e => {
        e.exports = window.React;
      },
      7723: e => {
        e.exports = window.wp.i18n;
      },
      5573: e => {
        e.exports = window.wp.primitives;
      },
    },
    n = {};
  function c(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, c), o.exports;
  }
  (c.m = r),
    (e = []),
    (c.O = (t, o, r, n) => {
      if (!o) {
        var l = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [o, r, n] = e[u], a = !0, s = 0; s < o.length; s++)
            (!1 & n || l >= n) && Object.keys(c.O).every(e => c.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), n < l && (l = n));
          if (a) {
            e.splice(u--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [o, r, n];
    }),
    (c.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (c.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      c.r(n);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), c.d(n, l), n;
    }),
    (c.d = (e, t) => {
      for (var o in t)
        c.o(t, o) && !c.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (c.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.j = 5838),
    (() => {
      var e = { 5838: 0 };
      c.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [l, a, s] = o,
            i = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in a) c.o(a, r) && (c.m[r] = a[r]);
            if (s) var u = s(c);
          }
          for (t && t(o); i < l.length; i++) (n = l[i]), c.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return c.O(u);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = c.O(void 0, [94], () => c(4768));
  (l = c.O(l)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'product-collection-no-results'
    ] = l);
})();
