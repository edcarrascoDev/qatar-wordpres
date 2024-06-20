(() => {
  var e,
    t,
    o,
    r = {
      3391: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const i = window.wp.blocks;
        var l = o(7104),
          n = o(2478);
        const a = JSON.parse(
            '{"name":"woocommerce/order-confirmation-additional-fields","version":"1.0.0","title":"Additional Field List","description":"Display the list of additional field values from the current order.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"html":false,"__experimentalBorder":{"color":true,"radius":true,"width":true,"style":true,"__experimentalDefaultControls":{"width":true,"color":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}}},"attributes":{"align":{"type":"string","default":"wide"},"className":{"type":"string","default":""}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          s = window.wp.blockEditor,
          c = window.wc.wcSettings;
        var d, p, u, m, f, g, w, b, v, O;
        const S = (0, c.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          k =
            (S.pluginUrl,
            S.pluginUrl,
            S.buildPhase,
            null === (d = c.STORE_PAGES.shop) || void 0 === d || d.permalink,
            null === (p = c.STORE_PAGES.checkout) || void 0 === p || p.id,
            null === (u = c.STORE_PAGES.checkout) || void 0 === u || u.permalink,
            null === (m = c.STORE_PAGES.privacy) || void 0 === m || m.permalink,
            null === (f = c.STORE_PAGES.privacy) || void 0 === f || f.title,
            null === (g = c.STORE_PAGES.terms) || void 0 === g || g.permalink,
            null === (w = c.STORE_PAGES.terms) || void 0 === w || w.title,
            null === (b = c.STORE_PAGES.cart) || void 0 === b || b.id,
            null === (v = c.STORE_PAGES.cart) || void 0 === v || v.permalink,
            null !== (O = c.STORE_PAGES.myaccount) && void 0 !== O && O.permalink
              ? c.STORE_PAGES.myaccount.permalink
              : (0, c.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, c.getSetting)('localPickupEnabled', !1),
            (0, c.getSetting)('countries', {})),
          y = (0, c.getSetting)('countryData', {}),
          E =
            (Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, k[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, k[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(Object.keys(y).map(e => [e, y[e].locale || []])),
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
          h =
            ((0, c.getSetting)('addressFieldsLocations', E).address,
            (0, c.getSetting)('addressFieldsLocations', E).contact,
            (0, c.getSetting)('addressFieldsLocations', E).order,
            (0, c.getSetting)('additionalOrderFields', {})),
          _ = (0, c.getSetting)('additionalContactFields', {});
        (0, c.getSetting)('additionalAddressFields', {});
        var j = o(7723);
        o(6091);
        const P = ({ additionalFields: e = [] }) =>
          (0, r.createElement)(
            'dl',
            { className: 'wc-block-components-additional-fields-list' },
            Object.entries(e).map(([, e]) => {
              const { label: t, type: o, options: i } = e;
              let l = (0, j.__)('Placeholder', 'woocommerce');
              return (
                'checkbox' === o && (l = (0, j.__)('Yes', 'woocommerce')),
                'select' === o && (l = i[0].label),
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)('dt', null, t),
                  (0, r.createElement)('dd', null, l),
                )
              );
            }),
          );
        o(7842);
        (0, i.registerBlockType)(a, {
          icon: {
            src: (0, r.createElement)(l.A, {
              icon: n.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...a.attributes },
          edit: () => {
            const e = (0, s.useBlockProps)({
                className: 'wc-block-order-confirmation-additional-fields',
              }),
              t = { ...h, ..._ };
            return (0, r.createElement)(
              'div',
              { ...e },
              (0, r.createElement)(P, { additionalFields: t }),
            );
          },
          save: () => null,
        });
      },
      6091: () => {},
      7842: () => {},
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
  function l(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var o = (i[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, l), o.exports;
  }
  (l.m = r),
    (e = []),
    (l.O = (t, o, r, i) => {
      if (!o) {
        var n = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, i] = e[d], a = !0, s = 0; s < o.length; s++)
            (!1 & i || n >= i) && Object.keys(l.O).every(e => l.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), i < n && (n = i));
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
    (l.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return l.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (l.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var i = Object.create(null);
      l.r(i);
      var n = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), l.d(i, n), i;
    }),
    (l.d = (e, t) => {
      for (var o in t)
        l.o(t, o) && !l.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (l.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.j = 7341),
    (() => {
      var e = { 7341: 0 };
      l.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            i,
            [n, a, s] = o,
            c = 0;
          if (n.some(t => 0 !== e[t])) {
            for (r in a) l.o(a, r) && (l.m[r] = a[r]);
            if (s) var d = s(l);
          }
          for (t && t(o); c < n.length; c++) (i = n[c]), l.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return l.O(d);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var n = l.O(void 0, [94], () => l(3391));
  (n = l.O(n)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})[
      'order-confirmation-additional-fields'
    ] = n);
})();
