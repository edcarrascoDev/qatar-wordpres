(() => {
  'use strict';
  var e,
    t,
    o,
    r = {
      2586: (e, t, o) => {
        o.r(t);
        const r = window.wp.blocks;
        var n = o(498);
        const i = window.wc.wcSettings;
        var l, a, s, c, d, p, u, f, m, g;
        const b = (0, i.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          w = (b.pluginUrl, b.pluginUrl, b.buildPhase),
          v =
            (null === (l = i.STORE_PAGES.shop) || void 0 === l || l.permalink,
            null === (a = i.STORE_PAGES.checkout) || void 0 === a || a.id,
            null === (s = i.STORE_PAGES.checkout) || void 0 === s || s.permalink,
            null === (c = i.STORE_PAGES.privacy) || void 0 === c || c.permalink,
            null === (d = i.STORE_PAGES.privacy) || void 0 === d || d.title,
            null === (p = i.STORE_PAGES.terms) || void 0 === p || p.permalink,
            null === (u = i.STORE_PAGES.terms) || void 0 === u || u.title,
            null === (f = i.STORE_PAGES.cart) || void 0 === f || f.id,
            null === (m = i.STORE_PAGES.cart) || void 0 === m || m.permalink,
            null !== (g = i.STORE_PAGES.myaccount) && void 0 !== g && g.permalink
              ? i.STORE_PAGES.myaccount.permalink
              : (0, i.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, i.getSetting)('localPickupEnabled', !1),
            (0, i.getSetting)('countries', {})),
          O = (0, i.getSetting)('countryData', {}),
          S =
            (Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowBilling)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowBilling)
                .map(e => [e, O[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowShipping)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowShipping)
                .map(e => [e, O[e].states || []]),
            ),
            Object.fromEntries(Object.keys(O).map(e => [e, O[e].locale || []])),
            {
              address: [
                'first_name',
                'last_name',
                'company',
                'address_1',
                'address_2',
                'city',
                'postcode',
                'country',
                'state',
                'phone',
              ],
              contact: ['email'],
              order: [],
            }),
          y =
            ((0, i.getSetting)('addressFieldsLocations', S).address,
            (0, i.getSetting)('addressFieldsLocations', S).contact,
            (0, i.getSetting)('addressFieldsLocations', S).order,
            (0, i.getSetting)('additionalOrderFields', {}),
            (0, i.getSetting)('additionalContactFields', {}),
            (0, i.getSetting)('additionalAddressFields', {}),
            JSON.parse(
              '{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-clear-button","version":"0.1.0","title":"Clear","description":"Allows shoppers to reset this filter.","category":"woocommerce","keywords":["WooCommerce","reset filter"],"textdomain":"woocommerce","apiVersion":2,"ancestor":["woocommerce/product-filter"],"supports":{"interactivity":true,"inserter":false}}',
            ));
        var k = o(1609);
        const E = window.wp.blockEditor;
        var h = o(7723);
        w > 2 &&
          (0, r.registerBlockType)(y, {
            icon: n.A,
            edit: () =>
              (0, k.createElement)(E.InnerBlocks, {
                template: [
                  [
                    'core/buttons',
                    { layout: { type: 'flex' } },
                    [
                      [
                        'core/button',
                        {
                          text: (0, h.__)('Clear', 'woocommerce'),
                          className: 'wc-block-product-filter-clear-button is-style-outline',
                          style: {
                            border: { width: '0px', style: 'none' },
                            typography: { textDecoration: 'underline' },
                            outline: 'none',
                            fontSize: 'medium',
                          },
                        },
                      ],
                    ],
                  ],
                ],
                templateLock: 'insert',
              }),
            save: function() {
              return (0, k.createElement)(E.InnerBlocks.Content, null);
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
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.m = r),
    (e = []),
    (i.O = (t, o, r, n) => {
      if (!o) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, n] = e[d], a = !0, s = 0; s < o.length; s++)
            (!1 & n || l >= n) && Object.keys(i.O).every(e => i.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), n < l && (l = n));
          if (a) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [o, r, n];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      i.r(n);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), i.d(n, l), n;
    }),
    (i.d = (e, t) => {
      for (var o in t)
        i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 1276),
    (() => {
      var e = { 1276: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [l, a, s] = o,
            c = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in a) i.o(a, r) && (i.m[r] = a[r]);
            if (s) var d = s(i);
          }
          for (t && t(o); c < l.length; c++) (n = l[c]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(d);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = i.O(void 0, [94], () => i(2586));
  (l = i.O(l)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter-clear-button'] = l);
})();
