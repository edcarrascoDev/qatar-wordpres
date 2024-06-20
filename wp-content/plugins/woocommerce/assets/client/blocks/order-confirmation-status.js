(() => {
  var e,
    t,
    r,
    o = {
      8337: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const n = window.wp.blocks;
        var a = r(7104),
          i = r(2478);
        const s = JSON.parse(
            '{"name":"woocommerce/order-confirmation-status","version":"1.0.0","title":"Order Status","description":"Display a \\"thank you\\" message, or a sentence regarding the current order status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"color":{"background":true,"text":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"attributes":{"align":{"type":"string","default":"wide"},"className":{"type":"string","default":""}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          c = window.wp.blockEditor;
        var l = r(7723);
        r(9935);
        (0, n.registerBlockType)(s, {
          icon: {
            src: (0, o.createElement)(a.A, {
              icon: i.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...s.attributes },
          edit: () => {
            const e = (0, c.useBlockProps)({ className: 'wc-block-order-confirmation-status' });
            return (0, o.createElement)(
              'div',
              { ...e },
              (0, o.createElement)(
                'p',
                null,
                (0, l.__)('Thank you. Your order has been received.', 'woocommerce'),
              ),
            );
          },
          save: () => null,
        });
      },
      9935: () => {},
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
    n = {};
  function a(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, a), r.exports;
  }
  (a.m = o),
    (e = []),
    (a.O = (t, r, o, n) => {
      if (!r) {
        var i = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, n] = e[u], s = !0, c = 0; c < r.length; c++)
            (!1 & n || i >= n) && Object.keys(a.O).every(e => a.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((s = !1), n < i && (i = n));
          if (s) {
            e.splice(u--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [r, o, n];
    }),
    (a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (a.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      a.r(n);
      var i = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var s = 2 & o && e; 'object' == typeof s && !~t.indexOf(s); s = r(s))
        Object.getOwnPropertyNames(s).forEach(t => (i[t] = () => e[t]));
      return (i.default = () => e), a.d(n, i), n;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.j = 7064),
    (() => {
      var e = { 7064: 0 };
      a.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [i, s, c] = r,
            l = 0;
          if (i.some(t => 0 !== e[t])) {
            for (o in s) a.o(s, o) && (a.m[o] = s[o]);
            if (c) var u = c(a);
          }
          for (t && t(r); l < i.length; l++) (n = i[l]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return a.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = a.O(void 0, [94], () => a(8337));
  (i = a.O(i)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['order-confirmation-status'] = i);
})();
