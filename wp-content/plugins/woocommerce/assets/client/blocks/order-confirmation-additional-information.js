(() => {
  var e,
    r,
    t,
    o = {
      8042: (e, r, t) => {
        'use strict';
        t.r(r);
        var o = t(1609);
        const i = window.wp.blocks;
        var n = t(7104),
          a = t(2478);
        const s = JSON.parse(
            '{"name":"woocommerce/order-confirmation-additional-information","version":"1.0.0","title":"Additional Information","description":"Displays additional information provided by third-party extensions for the current order.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"html":false,"__experimentalBorder":{"color":true,"radius":true,"width":true,"style":true,"__experimentalDefaultControls":{"width":true,"color":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"attributes":{"align":{"type":"string","default":"wide"},"className":{"type":"string","default":""}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          c = window.wp.blockEditor;
        var l = t(7723);
        t(9479);
        (0, i.registerBlockType)(s, {
          icon: {
            src: (0, o.createElement)(n.A, {
              icon: a.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...s.attributes },
          edit: () => {
            const e = (0, c.useBlockProps)({
              className: 'wc-block-order-confirmation-additional-information',
            });
            return (0, o.createElement)(
              'div',
              { ...e },
              (0, o.createElement)(
                'div',
                { className: 'wc-block-order-confirmation-additional-information-placeholder' },
                (0, l.__)('Additional Information for your order', 'woocommerce'),
              ),
            );
          },
          save: () => null,
        });
      },
      9479: () => {},
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
    i = {};
  function n(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var t = (i[e] = { exports: {} });
    return o[e].call(t.exports, t, t.exports, n), t.exports;
  }
  (n.m = o),
    (e = []),
    (n.O = (r, t, o, i) => {
      if (!t) {
        var a = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [t, o, i] = e[d], s = !0, c = 0; c < t.length; c++)
            (!1 & i || a >= i) && Object.keys(n.O).every(e => n.O[e](t[c]))
              ? t.splice(c--, 1)
              : ((s = !1), i < a && (a = i));
          if (s) {
            e.splice(d--, 1);
            var l = o();
            void 0 !== l && (r = l);
          }
        }
        return r;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [t, o, i];
    }),
    (n.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return n.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var i = Object.create(null);
      n.r(i);
      var a = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var s = 2 & o && e; 'object' == typeof s && !~r.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach(r => (a[r] = () => e[r]));
      return (a.default = () => e), n.d(i, a), i;
    }),
    (n.d = (e, r) => {
      for (var t in r)
        n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 3068),
    (() => {
      var e = { 3068: 0 };
      n.O.j = r => 0 === e[r];
      var r = (r, t) => {
          var o,
            i,
            [a, s, c] = t,
            l = 0;
          if (a.some(r => 0 !== e[r])) {
            for (o in s) n.o(s, o) && (n.m[o] = s[o]);
            if (c) var d = c(n);
          }
          for (r && r(t); l < a.length; l++) (i = a[l]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(d);
        },
        t = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var a = n.O(void 0, [94], () => n(8042));
  (a = n.O(a)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'order-confirmation-additional-information'
    ] = a);
})();
