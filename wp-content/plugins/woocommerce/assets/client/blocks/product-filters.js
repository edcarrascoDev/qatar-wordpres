(() => {
  'use strict';
  var e,
    t,
    r,
    o = {
      8343: (e, t, r) => {
        r.r(t);
        const o = window.wp.blocks,
          n = window.wc.wcSettings;
        var i, l, c, s, a, u, d, p, m, w;
        const f = (0, n.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          g = (f.pluginUrl, f.pluginUrl, f.buildPhase),
          h =
            (null === (i = n.STORE_PAGES.shop) || void 0 === i || i.permalink,
            null === (l = n.STORE_PAGES.checkout) || void 0 === l || l.id,
            null === (c = n.STORE_PAGES.checkout) || void 0 === c || c.permalink,
            null === (s = n.STORE_PAGES.privacy) || void 0 === s || s.permalink,
            null === (a = n.STORE_PAGES.privacy) || void 0 === a || a.title,
            null === (u = n.STORE_PAGES.terms) || void 0 === u || u.permalink,
            null === (d = n.STORE_PAGES.terms) || void 0 === d || d.title,
            null === (p = n.STORE_PAGES.cart) || void 0 === p || p.id,
            null === (m = n.STORE_PAGES.cart) || void 0 === m || m.permalink,
            null !== (w = n.STORE_PAGES.myaccount) && void 0 !== w && w.permalink
              ? n.STORE_PAGES.myaccount.permalink
              : (0, n.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, n.getSetting)('localPickupEnabled', !1),
            (0, n.getSetting)('countries', {})),
          v = (0, n.getSetting)('countryData', {}),
          S =
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
            }),
          b =
            ((0, n.getSetting)('addressFieldsLocations', S).address,
            (0, n.getSetting)('addressFieldsLocations', S).contact,
            (0, n.getSetting)('addressFieldsLocations', S).order,
            (0, n.getSetting)('additionalOrderFields', {}),
            (0, n.getSetting)('additionalContactFields', {}),
            (0, n.getSetting)('additionalAddressFields', {}),
            JSON.parse(
              '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-filters","version":"1.0.0","title":"Product Filters (Beta)","description":"Let shoppers filter products displayed on the page.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":true,"multiple":false,"interactivity":true},"textdomain":"woocommerce","usesContext":["postId"],"providesContext":{},"attributes":{},"viewScript":"wc-product-filters-frontend","example":{}}',
            ));
        var y = r(1609);
        const E = window.wp.blockEditor;
        var O = r(7723);
        const k = window.wc.wcBlocksData,
          _ = window.wp.data;
        var j = r(6087),
          P = r(923),
          T = r.n(P);
        function C(e) {
          const t = (0, j.useRef)(e);
          return T()(e, t.current) || (t.current = e), t.current;
        }
        const x = window.wc.wcTypes,
          L = window.wp.components,
          R = [
            [
              'core/heading',
              {
                level: 3,
                style: { typography: { fontSize: '24px' } },
                content: (0, O.__)('Filters', 'woocommerce'),
              },
            ],
            [
              'woocommerce/product-filter',
              { filterType: 'active-filters', heading: (0, O.__)('Active', 'woocommerce') },
            ],
            [
              'woocommerce/product-filter',
              { filterType: 'price-filter', heading: (0, O.__)('Price', 'woocommerce') },
            ],
            [
              'woocommerce/product-filter',
              { filterType: 'stock-filter', heading: (0, O.__)('Status', 'woocommerce') },
            ],
            [
              'woocommerce/product-filter',
              {
                filterType: 'attribute-filter',
                heading: (0, O.__)('Attribute', 'woocommerce'),
                attributeId: 0,
              },
            ],
            [
              'woocommerce/product-filter',
              { filterType: 'rating-filter', heading: (0, O.__)('Rating', 'woocommerce') },
            ],
          ];
        var A = r(9019),
          B = r.n(A);
        const G = {
          icon: () =>
            (0, y.createElement)(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, y.createElement)('path', {
                d:
                  'M19 3H5C4.4 3 4 3.4 4 4V11C4 11.5 4.4 12 5 12H19C19.5 12 20 11.6 20 11V4C20 3.4 19.6 3 19 3ZM5.5 10.5V10.1L7.3 8.8L8.6 9.6C8.9 9.8 9.3 9.8 9.5 9.5L11 8.1L13.4 10.5H5.5ZM18.5 10.5H15.6L11.6 6.5C11.3 6.2 10.8 6.2 10.5 6.5L8.9 8L7.7 7.2C7.4 7 7.1 7 6.8 7.2L5.5 8.2V4.5H18.5V10.5Z',
                fill: 'currentColor',
              }),
              (0, y.createElement)('rect', {
                x: '4.75',
                y: '15.5',
                width: '5',
                height: '4.5',
                rx: '1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                fill: 'none',
              }),
              (0, y.createElement)('rect', {
                x: '12.25',
                y: '15.5',
                width: '5',
                height: '4.5',
                rx: '1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                fill: 'none',
              }),
            ),
          edit: ({}) => {
            const e = (0, E.useBlockProps)(),
              { results: t, isLoading: r } = (e => {
                const {
                  namespace: t,
                  resourceName: r,
                  resourceValues: o = [],
                  query: n = {},
                  shouldSelect: i = !0,
                } = e;
                if (!t || !r)
                  throw new Error(
                    'The options object must have valid values for the namespace and the resource properties.',
                  );
                const l = (0, j.useRef)({ results: [], isLoading: !0 }),
                  c = C(n),
                  s = C(o),
                  a = (() => {
                    const [, e] = (0, j.useState)();
                    return (0, j.useCallback)(t => {
                      e(() => {
                        throw t;
                      });
                    }, []);
                  })(),
                  u = (0, _.useSelect)(
                    e => {
                      if (!i) return null;
                      const o = e(k.COLLECTIONS_STORE_KEY),
                        n = [t, r, c, s],
                        l = o.getCollectionError(...n);
                      if (l) {
                        if (!(0, x.isError)(l))
                          throw new Error(
                            'TypeError: `error` object is not an instance of Error constructor',
                          );
                        a(l);
                      }
                      return {
                        results: o.getCollection(...n),
                        isLoading: !o.hasFinishedResolution('getCollection', n),
                      };
                    },
                    [t, r, s, c, i],
                  );
                return null !== u && (l.current = u), l.current;
              })({ namespace: '/wc/store/v1', resourceName: 'products/attributes' }),
              o = t.reduce((e, t) => (null === e || t.count > e.count ? t : e), null),
              n = ((e, t) =>
                null === t
                  ? e
                  : e.map(e => {
                      const r = e[0],
                        o = e[1];
                      return 'woocommerce/product-filter' === r &&
                        'attribute-filter' === (null == o ? void 0 : o.filterType)
                        ? [r, { ...o, heading: t.name, attributeId: t.id }]
                        : e;
                    }))(R, o);
            return r
              ? (0, y.createElement)(L.Spinner, null)
              : (0, y.createElement)(
                  'div',
                  { ...e },
                  (0, y.createElement)(E.InnerBlocks, { templateLock: !1, template: n }),
                );
          },
          save: () => {
            const e = E.useBlockProps.save({ className: B()('wc-block-product-filters') }),
              t = E.useInnerBlocksProps.save(e);
            return (0, y.createElement)('div', { ...t });
          },
        };
        g > 2 && (0, o.registerBlockType)(b, G);
      },
      1609: e => {
        e.exports = window.React;
      },
      6087: e => {
        e.exports = window.wp.element;
      },
      7723: e => {
        e.exports = window.wp.i18n;
      },
      923: e => {
        e.exports = window.wp.isShallowEqual;
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
        for (u = 0; u < e.length; u++) {
          for (var [r, o, n] = e[u], c = !0, s = 0; s < r.length; s++)
            (!1 & n || l >= n) && Object.keys(i.O).every(e => i.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((c = !1), n < l && (l = n));
          if (c) {
            e.splice(u--, 1);
            var a = o();
            void 0 !== a && (t = a);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [r, o, n];
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
      for (var c = 2 & o && e; 'object' == typeof c && !~t.indexOf(c); c = r(c))
        Object.getOwnPropertyNames(c).forEach(t => (l[t] = () => e[t]));
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
    (i.j = 5870),
    (() => {
      var e = { 5870: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [l, c, s] = r,
            a = 0;
          if (l.some(t => 0 !== e[t])) {
            for (o in c) i.o(c, o) && (i.m[o] = c[o]);
            if (s) var u = s(i);
          }
          for (t && t(r); a < l.length; a++) (n = l[a]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var l = i.O(void 0, [94], () => i(8343));
  (l = i.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filters'] = l);
})();
