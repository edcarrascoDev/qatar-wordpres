(() => {
  var e,
    t,
    r,
    o = {
      6989: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const a = window.wp.blocks;
        var i = r(7104),
          n = r(2984);
        const c = JSON.parse(
            '{"name":"woocommerce/order-confirmation-summary","version":"1.0.0","title":"Order Summary","description":"Display the order summary on the order confirmation page.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"color":{"background":true,"text":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalDefaultControls":{"width":true,"color":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"attributes":{"align":{"type":"string","default":"wide"},"className":{"type":"string","default":""}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          m = window.wp.blockEditor,
          l = window.wp.components;
        var s = r(7723);
        const u = window.wc.priceFormat,
          p = window.wp.date,
          d = window.wc.wcSettings;
        r(5915);
        (0, a.registerBlockType)(c, {
          icon: {
            src: (0, o.createElement)(i.A, {
              icon: n.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...c.attributes },
          edit: () => {
            const e = (0, m.useBlockProps)({ className: 'wc-block-order-confirmation-summary' });
            return (0, o.createElement)(
              'div',
              { ...e },
              (0, o.createElement)(
                l.Disabled,
                null,
                (0, o.createElement)(
                  'ul',
                  { className: 'wc-block-order-confirmation-summary-list' },
                  (0, o.createElement)(
                    'li',
                    { className: 'wc-block-order-confirmation-summary-list-item' },
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__key' },
                      (0, s.__)('Order number:', 'woocommerce'),
                    ),
                    ' ',
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__value' },
                      '123',
                    ),
                  ),
                  (0, o.createElement)(
                    'li',
                    { className: 'wc-block-order-confirmation-summary-list-item' },
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__key' },
                      (0, s.__)('Date:', 'woocommerce'),
                    ),
                    ' ',
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__value' },
                      (0, p.date)((0, d.getSetting)('dateFormat'), new Date(), void 0),
                    ),
                  ),
                  (0, o.createElement)(
                    'li',
                    { className: 'wc-block-order-confirmation-summary-list-item' },
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__key' },
                      (0, s.__)('Total:', 'woocommerce'),
                    ),
                    ' ',
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__value' },
                      (0, u.formatPrice)(4e3),
                    ),
                  ),
                  (0, o.createElement)(
                    'li',
                    { className: 'wc-block-order-confirmation-summary-list-item' },
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__key' },
                      (0, s.__)('Email:', 'woocommerce'),
                    ),
                    ' ',
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__value' },
                      'test@test.com',
                    ),
                  ),
                  (0, o.createElement)(
                    'li',
                    { className: 'wc-block-order-confirmation-summary-list-item' },
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__key' },
                      (0, s.__)('Payment method:', 'woocommerce'),
                    ),
                    ' ',
                    (0, o.createElement)(
                      'span',
                      { className: 'wc-block-order-confirmation-summary-list-item__value' },
                      (0, s.__)('Credit Card', 'woocommerce'),
                    ),
                  ),
                ),
              ),
            );
          },
          save: () => null,
        });
      },
      5915: () => {},
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
  function i(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = o),
    (e = []),
    (i.O = (t, r, o, a) => {
      if (!r) {
        var n = 1 / 0;
        for (s = 0; s < e.length; s++) {
          for (var [r, o, a] = e[s], c = !0, m = 0; m < r.length; m++)
            (!1 & a || n >= a) && Object.keys(i.O).every(e => i.O[e](r[m]))
              ? r.splice(m--, 1)
              : ((c = !1), a < n && (n = a));
          if (c) {
            e.splice(s--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      a = a || 0;
      for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
      e[s] = [r, o, a];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var a = Object.create(null);
      i.r(a);
      var n = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var c = 2 & o && e; 'object' == typeof c && !~t.indexOf(c); c = r(c))
        Object.getOwnPropertyNames(c).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), i.d(a, n), a;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 4118),
    (() => {
      var e = { 4118: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            a,
            [n, c, m] = r,
            l = 0;
          if (n.some(t => 0 !== e[t])) {
            for (o in c) i.o(c, o) && (i.m[o] = c[o]);
            if (m) var s = m(i);
          }
          for (t && t(r); l < n.length; l++) (a = n[l]), i.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return i.O(s);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = i.O(void 0, [94], () => i(6989));
  (n = i.O(n)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['order-confirmation-summary'] = n);
})();
