(() => {
  var e,
    t,
    o,
    r = {
      8080: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const a = window.wp.blocks;
        var n = o(7104),
          l = o(8474);
        const c = JSON.parse(
            '{"name":"woocommerce/order-confirmation-downloads","version":"1.0.0","title":"Order Downloads","description":"Display links to purchased downloads.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"color":{"background":true,"text":true,"link":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}},"__experimentalBorder":{"color":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"style":true,"width":true}},"__experimentalSelector":".wp-block-woocommerce-order-confirmation-totals table"},"attributes":{"align":{"type":"string","default":"wide"},"className":{"type":"string","default":""}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          s = window.wp.blockEditor,
          i = window.wp.components;
        var d = o(7723);
        o(6990);
        (0, a.registerBlockType)(c, {
          icon: {
            src: (0, r.createElement)(n.A, {
              icon: l.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...c.attributes },
          edit: () => {
            const e = (0, s.useBlockProps)({ className: 'wc-block-order-confirmation-downloads' }),
              {
                borderBottomColor: t,
                borderLeftColor: o,
                borderRightColor: a,
                borderTopColor: n,
                borderWidth: l,
              } = e.style,
              c = {
                borderBottomColor: t,
                borderLeftColor: o,
                borderRightColor: a,
                borderTopColor: n,
                borderWidth: l,
              };
            return (0, r.createElement)(
              'div',
              { ...e },
              (0, r.createElement)(
                i.Disabled,
                null,
                (0, r.createElement)(
                  'table',
                  {
                    style: c,
                    cellSpacing: '0',
                    className: 'wc-block-order-confirmation-downloads__table',
                  },
                  (0, r.createElement)(
                    'thead',
                    null,
                    (0, r.createElement)(
                      'tr',
                      null,
                      (0, r.createElement)(
                        'th',
                        { className: 'download-product' },
                        (0, r.createElement)(
                          'span',
                          { className: 'nobr' },
                          (0, d.__)('Product', 'woocommerce'),
                        ),
                      ),
                      (0, r.createElement)(
                        'th',
                        { className: 'download-remaining' },
                        (0, r.createElement)(
                          'span',
                          { className: 'nobr' },
                          (0, d.__)('Downloads remaining', 'woocommerce'),
                        ),
                      ),
                      (0, r.createElement)(
                        'th',
                        { className: 'download-expires' },
                        (0, r.createElement)(
                          'span',
                          { className: 'nobr' },
                          (0, d.__)('Expires', 'woocommerce'),
                        ),
                      ),
                      (0, r.createElement)(
                        'th',
                        { className: 'download-file' },
                        (0, r.createElement)(
                          'span',
                          { className: 'nobr' },
                          (0, d.__)('Download', 'woocommerce'),
                        ),
                      ),
                    ),
                  ),
                  (0, r.createElement)(
                    'tbody',
                    null,
                    (0, r.createElement)(
                      'tr',
                      null,
                      (0, r.createElement)(
                        'td',
                        { className: 'download-product', 'data-title': 'Product' },
                        (0, r.createElement)(
                          'a',
                          { href: 'https://example.com' },
                          (0, d._x)('Test Product', 'sample product name', 'woocommerce'),
                        ),
                      ),
                      (0, r.createElement)(
                        'td',
                        { className: 'download-remaining', 'data-title': 'Downloads remaining' },
                        (0, d._x)('∞', 'infinite downloads remaining', 'woocommerce'),
                      ),
                      (0, r.createElement)(
                        'td',
                        { className: 'download-expires', 'data-title': 'Expires' },
                        (0, d._x)('Never', 'download expires', 'woocommerce'),
                      ),
                      (0, r.createElement)(
                        'td',
                        { className: 'download-file', 'data-title': 'Download' },
                        (0, r.createElement)(
                          'a',
                          {
                            href: 'https://example.com',
                            className: 'woocommerce-MyAccount-downloads-file button alt',
                          },
                          (0, d._x)('Test Download', 'sample download name', 'woocommerce'),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          },
          save: () => null,
        });
      },
      6990: () => {},
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
    a = {};
  function n(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var o = (a[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, a) => {
      if (!o) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, a] = e[d], c = !0, s = 0; s < o.length; s++)
            (!1 & a || l >= a) && Object.keys(n.O).every(e => n.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((c = !1), a < l && (l = a));
          if (c) {
            e.splice(d--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      a = a || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
      e[d] = [o, r, a];
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
      var a = Object.create(null);
      n.r(a);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var c = 2 & r && e; 'object' == typeof c && !~t.indexOf(c); c = o(c))
        Object.getOwnPropertyNames(c).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), n.d(a, l), a;
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
    (n.j = 6181),
    (() => {
      var e = { 6181: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            a,
            [l, c, s] = o,
            i = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in c) n.o(c, r) && (n.m[r] = c[r]);
            if (s) var d = s(n);
          }
          for (t && t(o); i < l.length; i++) (a = l[i]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(d);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = n.O(void 0, [94], () => n(8080));
  (l = n.O(l)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['order-confirmation-downloads'] = l);
})();
