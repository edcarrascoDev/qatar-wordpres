(() => {
  var e,
    t,
    o,
    r = {
      2605: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const c = window.wp.blocks;
        var n = o(7104),
          s = o(5573);
        const l = (0, r.createElement)(
            s.SVG,
            { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24', fill: 'none' },
            (0, r.createElement)('path', {
              stroke: 'currentColor',
              strokeWidth: '1.5',
              fill: 'none',
              d:
                'M6 3.75h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z',
            }),
            (0, r.createElement)('path', {
              fill: 'currentColor',
              fillRule: 'evenodd',
              d:
                'M6.9 7.5A1.1 1.1 0 018 6.4h8a1.1 1.1 0 011.1 1.1v2a1.1 1.1 0 01-1.1 1.1H8a1.1 1.1 0 01-1.1-1.1v-2zm1.2.1v1.8h7.8V7.6H8.1z',
              clipRule: 'evenodd',
            }),
            (0, r.createElement)('path', {
              fill: 'currentColor',
              d:
                'M8.5 12h1v1h-1v-1zM8.5 14h1v1h-1v-1zM8.5 16h1v1h-1v-1zM11.5 12h1v1h-1v-1zM11.5 14h1v1h-1v-1zM11.5 16h1v1h-1v-1zM14.5 12h1v1h-1v-1zM14.5 14h1v1h-1v-1zM14.5 16h1v1h-1v-1z',
            }),
          ),
          a = JSON.parse(
            '{"name":"woocommerce/product-results-count","version":"1.0.0","title":"Product Results Count","description":"Display the number of products on the archive page or search result page.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"color":{"text":true,"background":false},"typography":{"fontSize":true}},"attributes":{},"usesContext":["queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          i = window.wp.blockEditor;
        var u = o(7723);
        o(5855),
          (0, c.registerBlockType)(a, {
            icon: {
              src: (0, r.createElement)(n.A, {
                icon: l,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            attributes: { ...a.attributes },
            edit: () => {
              const e = (0, i.useBlockProps)({
                className: 'woocommerce wc-block-product-results-count',
              });
              return (0, r.createElement)(
                'div',
                { ...e },
                (0, r.createElement)(
                  'p',
                  { className: 'woocommerce-result-count' },
                  (0, u.__)('Showing 1-X of X results', 'woocommerce'),
                ),
              );
            },
            save: () => null,
          });
      },
      5855: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
    },
    c = {};
  function n(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var o = (c[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, c) => {
      if (!o) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [o, r, c] = e[u], l = !0, a = 0; a < o.length; a++)
            (!1 & c || s >= c) && Object.keys(n.O).every(e => n.O[e](o[a]))
              ? o.splice(a--, 1)
              : ((l = !1), c < s && (s = c));
          if (l) {
            e.splice(u--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      c = c || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > c; u--) e[u] = e[u - 1];
      e[u] = [o, r, c];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var c = Object.create(null);
      n.r(c);
      var s = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var l = 2 & r && e; 'object' == typeof l && !~t.indexOf(l); l = o(l))
        Object.getOwnPropertyNames(l).forEach(t => (s[t] = () => e[t]));
      return (s.default = () => e), n.d(c, s), c;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 5867),
    (() => {
      var e = { 5867: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [s, l, a] = o,
            i = 0;
          if (s.some(t => 0 !== e[t])) {
            for (r in l) n.o(l, r) && (n.m[r] = l[r]);
            if (a) var u = a(n);
          }
          for (t && t(o); i < s.length; i++) (c = s[i]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(u);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var s = n.O(void 0, [94], () => n(2605));
  (s = n.O(s)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-results-count'] = s);
})();
