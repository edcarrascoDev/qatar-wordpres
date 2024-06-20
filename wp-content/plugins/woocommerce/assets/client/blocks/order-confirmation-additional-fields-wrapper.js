(() => {
  var e,
    t,
    o,
    r = {
      5538: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const i = window.wp.blocks,
          n = window.wp.blockEditor;
        var l = o(7104),
          a = o(2478);
        const s = window.wc.wcSettings;
        var c, d, p, u, m, f, g, w, b, v;
        const O = (0, s.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          S =
            (O.pluginUrl,
            O.pluginUrl,
            O.buildPhase,
            null === (c = s.STORE_PAGES.shop) || void 0 === c || c.permalink,
            null === (d = s.STORE_PAGES.checkout) || void 0 === d || d.id,
            null === (p = s.STORE_PAGES.checkout) || void 0 === p || p.permalink,
            null === (u = s.STORE_PAGES.privacy) || void 0 === u || u.permalink,
            null === (m = s.STORE_PAGES.privacy) || void 0 === m || m.title,
            null === (f = s.STORE_PAGES.terms) || void 0 === f || f.permalink,
            null === (g = s.STORE_PAGES.terms) || void 0 === g || g.title,
            null === (w = s.STORE_PAGES.cart) || void 0 === w || w.id,
            null === (b = s.STORE_PAGES.cart) || void 0 === b || b.permalink,
            null !== (v = s.STORE_PAGES.myaccount) && void 0 !== v && v.permalink
              ? s.STORE_PAGES.myaccount.permalink
              : (0, s.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, s.getSetting)('localPickupEnabled', !1),
            (0, s.getSetting)('countries', {})),
          k = (0, s.getSetting)('countryData', {}),
          h =
            (Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, S[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, S[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(Object.keys(k).map(e => [e, k[e].locale || []])),
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
            ((0, s.getSetting)('addressFieldsLocations', h).address,
            (0, s.getSetting)('addressFieldsLocations', h).contact,
            (0, s.getSetting)('addressFieldsLocations', h).order,
            (0, s.getSetting)('additionalOrderFields', {})),
          E = (0, s.getSetting)('additionalContactFields', {});
        (0, s.getSetting)('additionalAddressFields', {}), o(5440);
        const _ = JSON.parse(
            '{"name":"woocommerce/order-confirmation-additional-fields-wrapper","version":"1.0.0","title":"Additional Fields","description":"Display additional checkout fields from the \'contact\' and \'order\' locations.","category":"woocommerce","keywords":["WooCommerce"],"attributes":{"heading":{"type":"string"}},"supports":{"multiple":false,"align":["wide","full"],"html":false,"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          j = {
            heading: {
              type: 'string',
              default: (0, o(7723).__)('Additional Information', 'woocommerce'),
            },
          };
        (0, i.registerBlockType)(_, {
          icon: {
            src: (0, r.createElement)(l.A, {
              icon: a.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ attributes: e, setAttributes: t }) => {
            const o = (0, n.useBlockProps)({
                className: 'wc-block-order-confirmation-additional-fields-wrapper',
              }),
              i = { ...y, ...E };
            return 0 === Object.entries(i).length
              ? null
              : (0, r.createElement)(
                  'div',
                  { ...o },
                  (0, r.createElement)(n.InnerBlocks, {
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
                      [
                        'woocommerce/order-confirmation-additional-fields',
                        { lock: { remove: !0 } },
                      ],
                    ],
                  }),
                );
          },
          save: () => (0, r.createElement)(n.InnerBlocks.Content, null),
          attributes: j,
        });
      },
      5440: () => {},
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
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var o = (i[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, i) => {
      if (!o) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, i] = e[d], a = !0, s = 0; s < o.length; s++)
            (!1 & i || l >= i) && Object.keys(n.O).every(e => n.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), i < l && (l = i));
          if (a) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
      e[d] = [o, r, i];
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
      var i = Object.create(null);
      n.r(i);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), n.d(i, l), i;
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
    (n.j = 7155),
    (() => {
      var e = { 7155: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            i,
            [l, a, s] = o,
            c = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in a) n.o(a, r) && (n.m[r] = a[r]);
            if (s) var d = s(n);
          }
          for (t && t(o); c < l.length; c++) (i = l[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(d);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = n.O(void 0, [94], () => n(5538));
  (l = n.O(l)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'order-confirmation-additional-fields-wrapper'
    ] = l);
})();
