(() => {
  'use strict';
  var e,
    o,
    t,
    r = {
      3387: (e, o, t) => {
        t.r(o);
        var r = t(1609);
        const n = window.wp.blocks,
          i = window.wp.blockEditor;
        var a = t(7104),
          l = t(601);
        const c = JSON.parse(
            '{"name":"woocommerce/order-confirmation-billing-wrapper","version":"1.0.0","title":"Billing Address Section","description":"Display the order confirmation billing section.","category":"woocommerce","keywords":["WooCommerce"],"attributes":{"heading":{"type":"string"}},"supports":{"multiple":false,"align":["wide","full"],"html":false,"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          s = {
            heading: { type: 'string', default: (0, t(7723).__)('Billing address', 'woocommerce') },
          };
        (0, n.registerBlockType)(c, {
          icon: {
            src: (0, r.createElement)(a.A, {
              icon: l.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e, setAttributes: o }) => {
            const t = (0, i.useBlockProps)();
            return (0, r.createElement)(
              'div',
              { ...t },
              (0, r.createElement)(i.InnerBlocks, {
                allowedBlocks: ['core/heading'],
                template: [
                  [
                    'core/heading',
                    {
                      level: 3,
                      style: { typography: { fontSize: '24px' } },
                      content: e.heading || '',
                      onChangeContent: e => o({ heading: e }),
                    },
                  ],
                  ['woocommerce/order-confirmation-billing-address', { lock: { remove: !0 } }],
                ],
              }),
            );
          },
          save: () => (0, r.createElement)(i.InnerBlocks.Content, null),
          attributes: s,
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
  function i(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var t = (n[e] = { exports: {} });
    return r[e].call(t.exports, t, t.exports, i), t.exports;
  }
  (i.m = r),
    (e = []),
    (i.O = (o, t, r, n) => {
      if (!t) {
        var a = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [t, r, n] = e[p], l = !0, c = 0; c < t.length; c++)
            (!1 & n || a >= n) && Object.keys(i.O).every(e => i.O[e](t[c]))
              ? t.splice(c--, 1)
              : ((l = !1), n < a && (a = n));
          if (l) {
            e.splice(p--, 1);
            var s = r();
            void 0 !== s && (o = s);
          }
        }
        return o;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [t, r, n];
    }),
    (i.n = e => {
      var o = e && e.__esModule ? () => e.default : () => e;
      return i.d(o, { a: o }), o;
    }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      i.r(n);
      var a = {};
      o = o || [null, t({}), t([]), t(t)];
      for (var l = 2 & r && e; 'object' == typeof l && !~o.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach(o => (a[o] = () => e[o]));
      return (a.default = () => e), i.d(n, a), n;
    }),
    (i.d = (e, o) => {
      for (var t in o)
        i.o(o, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
    (i.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 7293),
    (() => {
      var e = { 7293: 0 };
      i.O.j = o => 0 === e[o];
      var o = (o, t) => {
          var r,
            n,
            [a, l, c] = t,
            s = 0;
          if (a.some(o => 0 !== e[o])) {
            for (r in l) i.o(l, r) && (i.m[r] = l[r]);
            if (c) var p = c(i);
          }
          for (o && o(t); s < a.length; s++) (n = a[s]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(p);
        },
        t = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t)));
    })();
  var a = i.O(void 0, [94], () => i(3387));
  (a = i.O(a)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'order-confirmation-billing-wrapper'
    ] = a);
})();
