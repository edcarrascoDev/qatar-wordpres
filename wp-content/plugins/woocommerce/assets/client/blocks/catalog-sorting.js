(() => {
  var e,
    t,
    o,
    r = {
      5218: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const n = window.wp.blocks;
        var c = o(7104),
          l = o(5573);
        const a = (0, r.createElement)(
            l.SVG,
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
            '{"name":"woocommerce/catalog-sorting","version":"1.0.0","title":"Catalog Sorting","description":"Enable customers to change the sorting order of the products.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"color":{"text":true,"background":false},"typography":{"fontSize":true}},"attributes":{"fontSize":{"type":"string","default":"small"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          i = window.wp.blockEditor,
          p = window.wp.components;
        var u = o(7723);
        const v = () =>
          (0, r.createElement)(
            'select',
            { className: 'orderby' },
            (0, r.createElement)('option', null, (0, u.__)('Default sorting', 'woocommerce')),
          );
        o(8528),
          (0, n.registerBlockType)(s, {
            icon: {
              src: (0, r.createElement)(c.A, {
                icon: a,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            attributes: { ...s.attributes },
            edit: () => {
              const e = (0, i.useBlockProps)({ className: 'woocommerce wc-block-catalog-sorting' });
              return (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  'div',
                  { ...e },
                  (0, r.createElement)(p.Disabled, null, (0, r.createElement)(v, null)),
                ),
              );
            },
            save: () => null,
          });
      },
      8528: () => {},
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
        for (p = 0; p < e.length; p++) {
          for (var [o, r, n] = e[p], a = !0, s = 0; s < o.length; s++)
            (!1 & n || l >= n) && Object.keys(c.O).every(e => c.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), n < l && (l = n));
          if (a) {
            e.splice(p--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [o, r, n];
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
    (c.j = 7619),
    (() => {
      var e = { 7619: 0 };
      c.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [l, a, s] = o,
            i = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in a) c.o(a, r) && (c.m[r] = a[r]);
            if (s) var p = s(c);
          }
          for (t && t(o); i < l.length; i++) (n = l[i]), c.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return c.O(p);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = c.O(void 0, [94], () => c(5218));
  (l = c.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['catalog-sorting'] = l);
})();
