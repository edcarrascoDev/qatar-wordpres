(() => {
  var e,
    t,
    r,
    o = {
      9875: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const n = window.wp.blocks;
        var i = r(7104),
          l = r(601);
        const a = JSON.parse(
            '{"name":"woocommerce/order-confirmation-billing-address","version":"1.0.0","title":"Billing Address","description":"Display the order confirmation billing address.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"inserter":false,"html":false,"color":{"text":true,"background":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalBorder":{"color":true,"radius":true,"width":true,"style":true,"__experimentalDefaultControls":{"width":true,"color":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"attributes":{"align":{"type":"string","default":"wide"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          s = window.wp.blockEditor;
        var c = r(7723);
        r(6091);
        const d = ({ additionalFields: e = [] }) =>
            (0, o.createElement)(
              'dl',
              { className: 'wc-block-components-additional-fields-list' },
              Object.entries(e).map(([, e]) => {
                const { label: t, type: r, options: n } = e;
                let i = (0, c.__)('Placeholder', 'woocommerce');
                return (
                  'checkbox' === r && (i = (0, c.__)('Yes', 'woocommerce')),
                  'select' === r && (i = n[0].label),
                  (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)('dt', null, t),
                    (0, o.createElement)('dd', null, i),
                  )
                );
              }),
            ),
          u = window.wc.wcSettings;
        var p, m, g, f, b, w, _, S, O, v;
        const y = (0, u.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          E =
            (y.pluginUrl,
            y.pluginUrl,
            y.buildPhase,
            null === (p = u.STORE_PAGES.shop) || void 0 === p || p.permalink,
            null === (m = u.STORE_PAGES.checkout) || void 0 === m || m.id,
            null === (g = u.STORE_PAGES.checkout) || void 0 === g || g.permalink,
            null === (f = u.STORE_PAGES.privacy) || void 0 === f || f.permalink,
            null === (b = u.STORE_PAGES.privacy) || void 0 === b || b.title,
            null === (w = u.STORE_PAGES.terms) || void 0 === w || w.permalink,
            null === (_ = u.STORE_PAGES.terms) || void 0 === _ || _.title,
            null === (S = u.STORE_PAGES.cart) || void 0 === S || S.id,
            null === (O = u.STORE_PAGES.cart) || void 0 === O || O.permalink,
            null !== (v = u.STORE_PAGES.myaccount) && void 0 !== v && v.permalink
              ? u.STORE_PAGES.myaccount.permalink
              : (0, u.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, u.getSetting)('localPickupEnabled', !1),
            (0, u.getSetting)('countries', {})),
          k = (0, u.getSetting)('countryData', {}),
          h =
            (Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowBilling)
                .map(e => [e, k[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(k)
                .filter(e => !0 === k[e].allowShipping)
                .map(e => [e, E[e] || '']),
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
          x =
            ((0, u.getSetting)('addressFieldsLocations', h).address,
            (0, u.getSetting)('addressFieldsLocations', h).contact,
            (0, u.getSetting)('addressFieldsLocations', h).order,
            (0, u.getSetting)('additionalOrderFields', {}),
            (0, u.getSetting)('additionalContactFields', {}),
            (0, u.getSetting)('additionalAddressFields', {}));
        r(9333);
        (0, n.registerBlockType)(a, {
          icon: {
            src: (0, o.createElement)(i.A, {
              icon: l.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...a.attributes },
          edit: () => {
            const e = (0, s.useBlockProps)({
              className: 'wc-block-order-confirmation-billing-address',
            });
            return (0, o.createElement)(
              'div',
              { ...e },
              (0, o.createElement)(
                'address',
                null,
                'Test address 1',
                (0, o.createElement)('br', null),
                'Test address 2',
                (0, o.createElement)('br', null),
                'San Francisco, CA 94110',
                (0, o.createElement)('br', null),
                'United States',
                (0, o.createElement)(d, { additionalFields: x }),
              ),
            );
          },
          save: () => null,
        });
      },
      6091: () => {},
      9333: () => {},
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
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = o),
    (e = []),
    (i.O = (t, r, o, n) => {
      if (!r) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, o, n] = e[d], a = !0, s = 0; s < r.length; s++)
            (!1 & n || l >= n) && Object.keys(i.O).every(e => i.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((a = !1), n < l && (l = n));
          if (a) {
            e.splice(d--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [r, o, n];
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
      var n = Object.create(null);
      i.r(n);
      var l = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), i.d(n, l), n;
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
    (i.j = 7492),
    (() => {
      var e = { 7492: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [l, a, s] = r,
            c = 0;
          if (l.some(t => 0 !== e[t])) {
            for (o in a) i.o(a, o) && (i.m[o] = a[o]);
            if (s) var d = s(i);
          }
          for (t && t(r); c < l.length; c++) (n = l[c]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var l = i.O(void 0, [94], () => i(9875));
  (l = i.O(l)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'order-confirmation-billing-address'
    ] = l);
})();
