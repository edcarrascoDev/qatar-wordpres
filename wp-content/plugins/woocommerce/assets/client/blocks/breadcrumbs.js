(() => {
  var e,
    t,
    r,
    o = {
      8123: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const i = window.wp.blocks,
          n = window.wc.wcSettings;
        var l, a, s, c, p, d, u, m, g, f;
        const w = (0, n.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          b = (w.pluginUrl, w.pluginUrl, w.buildPhase),
          h =
            (null === (l = n.STORE_PAGES.shop) || void 0 === l || l.permalink,
            null === (a = n.STORE_PAGES.checkout) || void 0 === a || a.id,
            null === (s = n.STORE_PAGES.checkout) || void 0 === s || s.permalink,
            null === (c = n.STORE_PAGES.privacy) || void 0 === c || c.permalink,
            null === (p = n.STORE_PAGES.privacy) || void 0 === p || p.title,
            null === (d = n.STORE_PAGES.terms) || void 0 === d || d.permalink,
            null === (u = n.STORE_PAGES.terms) || void 0 === u || u.title,
            null === (m = n.STORE_PAGES.cart) || void 0 === m || m.id,
            null === (g = n.STORE_PAGES.cart) || void 0 === g || g.permalink,
            null !== (f = n.STORE_PAGES.myaccount) && void 0 !== f && f.permalink
              ? n.STORE_PAGES.myaccount.permalink
              : (0, n.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, n.getSetting)('localPickupEnabled', !1),
            (0, n.getSetting)('countries', {})),
          v = (0, n.getSetting)('countryData', {}),
          y =
            (Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, h[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, h[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(Object.keys(v).map(e => [e, v[e].locale || []])),
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
            });
        (0, n.getSetting)('addressFieldsLocations', y).address,
          (0, n.getSetting)('addressFieldsLocations', y).contact,
          (0, n.getSetting)('addressFieldsLocations', y).order,
          (0, n.getSetting)('additionalOrderFields', {}),
          (0, n.getSetting)('additionalContactFields', {}),
          (0, n.getSetting)('additionalAddressFields', {});
        var S = r(7104);
        const O = JSON.parse(
            '{"name":"woocommerce/breadcrumbs","version":"1.0.0","title":"Store Breadcrumbs","description":"Enable customers to keep track of their location within the store and navigate back to parent pages.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","attributes":{"contentJustification":{"type":"string"},"fontSize":{"type":"string","default":"small"},"align":{"type":"string","default":"wide"}},"supports":{"align":["wide","full"],"color":{"background":false,"link":true},"html":false,"typography":{"fontSize":true,"lineHeight":true}},"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          k = window.wp.blockEditor,
          E = window.wp.components;
        var _ = r(7723);
        var x = r(5573);
        const j = (0, o.createElement)(
          x.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, o.createElement)(x.Rect, {
            x: '4',
            y: '10.5',
            width: '6',
            height: '3',
            rx: '1.5',
            fill: 'currentColor',
          }),
          (0, o.createElement)(x.Rect, {
            x: '12',
            y: '10.5',
            width: '3',
            height: '3',
            rx: '1.5',
            fill: 'currentColor',
          }),
          (0, o.createElement)(x.Rect, {
            x: '17',
            y: '10.5',
            width: '3',
            height: '3',
            rx: '1.5',
            fill: 'currentColor',
          }),
        );
        r(5372);
        const P = {
          ...O.supports,
          ...(b > 1 && {
            typography: {
              ...O.supports.typography,
              __experimentalFontFamily: !0,
              __experimentalFontStyle: !0,
              __experimentalFontWeight: !0,
              __experimentalTextTransform: !0,
              __experimentalDefaultControls: { fontSize: !0 },
            },
          }),
        };
        (0, i.registerBlockType)(O, {
          icon: {
            src: (0, o.createElement)(S.A, {
              icon: j,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...O.attributes },
          supports: { ...P },
          edit: () => {
            const e = (0, k.useBlockProps)({ className: 'woocommerce wc-block-breadcrumbs' });
            return (0, o.createElement)(
              'div',
              { ...e },
              (0, o.createElement)(
                E.Disabled,
                null,
                (0, o.createElement)('a', { href: '/' }, (0, _.__)('Breadcrumbs', 'woocommerce')),
                (0, _.__)(' / Navigation / Path', 'woocommerce'),
              ),
            );
          },
          save: () => null,
        });
      },
      5372: () => {},
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
    var r = (i[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = o),
    (e = []),
    (n.O = (t, r, o, i) => {
      if (!r) {
        var l = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [r, o, i] = e[p], a = !0, s = 0; s < r.length; s++)
            (!1 & i || l >= i) && Object.keys(n.O).every(e => n.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((a = !1), i < l && (l = i));
          if (a) {
            e.splice(p--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > i; p--) e[p] = e[p - 1];
      e[p] = [r, o, i];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var i = Object.create(null);
      n.r(i);
      var l = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), n.d(i, l), i;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 5159),
    (() => {
      var e = { 5159: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            i,
            [l, a, s] = r,
            c = 0;
          if (l.some(t => 0 !== e[t])) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (s) var p = s(n);
          }
          for (t && t(r); c < l.length; c++) (i = l[c]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(p);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var l = n.O(void 0, [94], () => n(8123));
  (l = n.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {}).breadcrumbs = l);
})();
