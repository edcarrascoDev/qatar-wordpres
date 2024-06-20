(() => {
  'use strict';
  var e,
    t,
    o,
    r = {
      2052: (e, t, o) => {
        o.r(t);
        var r = o(1609);
        const n = window.wp.blocks,
          l = window.wp.blockEditor;
        var a = o(7104),
          i = o(5573);
        const c = (0, r.createElement)(
            i.SVG,
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
          s = JSON.parse(
            '{"name":"woocommerce/order-confirmation-totals-wrapper","version":"1.0.0","title":"Order Totals Section","description":"Display the order details section.","category":"woocommerce","keywords":["WooCommerce"],"attributes":{"heading":{"type":"string"}},"supports":{"multiple":false,"align":["wide","full"],"html":false,"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          p = {
            heading: { type: 'string', default: (0, o(7723).__)('Order details', 'woocommerce') },
          };
        (0, n.registerBlockType)(s, {
          icon: {
            src: (0, r.createElement)(a.A, {
              icon: c,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e, setAttributes: t }) => {
            const o = (0, l.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...o },
              (0, r.createElement)(l.InnerBlocks, {
                allowedBlocks: ['core/heading'],
                template: [
                  [
                    'core/heading',
                    {
                      level: 3,
                      style: { typography: { fontSize: '24px' } },
                      content: e.heading || '',
                      onChangeContent: e => t({ heading: e }),
                    },
                  ],
                  ['woocommerce/order-confirmation-totals', { lock: { remove: !0 } }],
                ],
              }),
            );
          },
          save: () => (0, r.createElement)(l.InnerBlocks.Content, null),
          attributes: p,
        });
      },
      1609: e => {
        e.exports = window.React;
      },
      6087: e => {
        e.exports = window.wp.element;
      },
      7723: e => {
        e.exports = window.wp.i18n;
      },
      5573: e => {
        e.exports = window.wp.primitives;
      },
    },
    n = {};
  function l(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, l), o.exports;
  }
  (l.m = r),
    (e = []),
    (l.O = (t, o, r, n) => {
      if (!o) {
        var a = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [o, r, n] = e[p], i = !0, c = 0; c < o.length; c++)
            (!1 & n || a >= n) && Object.keys(l.O).every(e => l.O[e](o[c]))
              ? o.splice(c--, 1)
              : ((i = !1), n < a && (a = n));
          if (i) {
            e.splice(p--, 1);
            var s = r();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [o, r, n];
    }),
    (l.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return l.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (l.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      l.r(n);
      var a = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var i = 2 & r && e; 'object' == typeof i && !~t.indexOf(i); i = o(i))
        Object.getOwnPropertyNames(i).forEach(t => (a[t] = () => e[t]));
      return (a.default = () => e), l.d(n, a), n;
    }),
    (l.d = (e, t) => {
      for (var o in t)
        l.o(t, o) && !l.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (l.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.j = 2085),
    (() => {
      var e = { 2085: 0 };
      l.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [a, i, c] = o,
            s = 0;
          if (a.some(t => 0 !== e[t])) {
            for (r in i) l.o(i, r) && (l.m[r] = i[r]);
            if (c) var p = c(l);
          }
          for (t && t(o); s < a.length; s++) (n = a[s]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return l.O(p);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var a = l.O(void 0, [94], () => l(2052));
  (a = l.O(a)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'order-confirmation-totals-wrapper'
    ] = a);
})();
