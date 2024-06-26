(() => {
  var e,
    t,
    o,
    r = {
      9626: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const c = window.wp.blocks;
        var i = o(7104),
          l = o(6215),
          n = o(3576),
          a = o(885),
          s = o(6378),
          d = o(846);
        const m = window.wc.wcSettings;
        var p, u, f, b, w, g, k, y, v, h;
        const _ = (0, m.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          E = (_.pluginUrl, _.pluginUrl, _.buildPhase),
          S =
            (null === (p = m.STORE_PAGES.shop) || void 0 === p || p.permalink,
            null === (u = m.STORE_PAGES.checkout) || void 0 === u || u.id,
            null === (f = m.STORE_PAGES.checkout) || void 0 === f || f.permalink,
            null === (b = m.STORE_PAGES.privacy) || void 0 === b || b.permalink,
            null === (w = m.STORE_PAGES.privacy) || void 0 === w || w.title,
            null === (g = m.STORE_PAGES.terms) || void 0 === g || g.permalink,
            null === (k = m.STORE_PAGES.terms) || void 0 === k || k.title,
            null === (y = m.STORE_PAGES.cart) || void 0 === y || y.id,
            null === (v = m.STORE_PAGES.cart) || void 0 === v || v.permalink,
            null !== (h = m.STORE_PAGES.myaccount) && void 0 !== h && h.permalink
              ? m.STORE_PAGES.myaccount.permalink
              : (0, m.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, m.getSetting)('localPickupEnabled', !1),
            (0, m.getSetting)('countries', {})),
          O = (0, m.getSetting)('countryData', {}),
          P =
            (Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowBilling)
                .map(e => [e, S[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowBilling)
                .map(e => [e, O[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(O)
                .filter(e => !0 === O[e].allowShipping)
                .map(e => [e, S[e] || '']),
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
            });
        (0, m.getSetting)('addressFieldsLocations', P).address,
          (0, m.getSetting)('addressFieldsLocations', P).contact,
          (0, m.getSetting)('addressFieldsLocations', P).order,
          (0, m.getSetting)('additionalOrderFields', {}),
          (0, m.getSetting)('additionalContactFields', {}),
          (0, m.getSetting)('additionalAddressFields', {});
        var A = o(7723),
          T = o(5573);
        const j = (0, r.createElement)(
            T.SVG,
            { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
            (0, r.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
            (0, r.createElement)('path', {
              d:
                'M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            }),
          ),
          B = JSON.parse(
            '{"name":"woocommerce/product-filter","version":"1.0.0","title":"Product Filter","description":"A block that adds product filters to the product collection.","category":"woocommerce","keywords":["WooCommerce","Filters"],"textdomain":"woocommerce","supports":{"html":false,"reusable":false},"usesContext":["query","queryId"],"attributes":{"filterType":{"type":"string"},"heading":{"type":"string"},"isPreview":{"type":"boolean","default":false},"attributeId":{"type":"number","default":0}},"example":{"attributes":{"isPreview":true}},"apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          F = window.wp.blockEditor,
          x = window.wp.data,
          R = window.wp.components,
          G = () =>
            (0, m.getSetting)('isWidgetEditor')
              ? (0, r.createElement)(
                  R.Notice,
                  { status: 'info', isDismissible: !1 },
                  (0, A.__)(
                    'The widget area containing Collection Filters block needs to be placed on a product archive page for filters to function properly.',
                    'woocommerce',
                  ),
                )
              : (0, m.getSetting)('isSiteEditor')
              ? null
              : (0, r.createElement)(
                  R.Notice,
                  { status: 'warning', isDismissible: !1 },
                  (0, A.__)(
                    'When added to a post or page, Collection Filters block needs to be nested inside a Product Collection block to function properly.',
                    'woocommerce',
                  ),
                );
        o(1472);
        const C = {
          'active-filters': 'woocommerce/product-filter-active',
          'price-filter': 'woocommerce/product-filter-price',
          'stock-filter': 'woocommerce/product-filter-stock-status',
          'rating-filter': 'woocommerce/product-filter-rating',
          'attribute-filter': 'woocommerce/product-filter-attribute',
        };
        E > 2 &&
          (0, c.registerBlockType)(B, {
            icon: {
              src: (0, r.createElement)(i.A, {
                icon: l.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: ({ attributes: e, clientId: t }) => {
              const o = (0, F.useBlockProps)(),
                i = (0, x.useSelect)(e => {
                  const { getBlockParentsByBlockName: o } = e('core/block-editor');
                  return !!o(t, 'woocommerce/product-collection').length;
                });
              return (0, r.createElement)(
                'nav',
                { ...o },
                !i && (0, r.createElement)(G, null),
                (0, r.createElement)(F.InnerBlocks, {
                  allowedBlocks:
                    ((l = [
                      ...Object.values(C),
                      'woocommerce/product-filter',
                      'woocommerce/filter-wrapper',
                      'woocommerce/product-collection',
                      'core/query',
                    ]),
                    (0, c.getBlockTypes)()
                      .map(e => e.name)
                      .filter(e => !l.includes(e))),
                  template: [
                    'active-filters' === e.filterType
                      ? ['core/heading', { level: 3, content: e.heading || '' }]
                      : [
                          'core/group',
                          {
                            layout: { type: 'flex', flexWrap: 'nowrap' },
                            metadata: { name: (0, A.__)('Header', 'woocommerce') },
                            style: { spacing: { blockGap: '0' } },
                          },
                          [
                            ['core/heading', { level: 3, content: e.heading || '' }],
                            [
                              'woocommerce/product-filter-clear-button',
                              { lock: { remove: !0, move: !1 } },
                            ],
                          ],
                        ],
                    [
                      C[e.filterType],
                      {
                        lock: { remove: !0 },
                        isPreview: e.isPreview,
                        attributeId:
                          'attribute-filter' === e.filterType && e.attributeId
                            ? e.attributeId
                            : void 0,
                      },
                    ],
                  ],
                }),
              );
              var l;
            },
            save: function() {
              return (0, r.createElement)(F.InnerBlocks.Content, null);
            },
            variations: [
              {
                name: 'product-filter-active',
                title: (0, A.__)('Product Filter: Active Filters (Beta)', 'woocommerce'),
                description: (0, A.__)('Display the currently active filters.', 'woocommerce'),
                attributes: {
                  heading: (0, A.__)('Active filters', 'woocommerce'),
                  filterType: 'active-filters',
                },
                icon: {
                  src: (0, r.createElement)(i.A, {
                    icon: j,
                    className: 'wc-block-editor-components-block-icon',
                  }),
                },
                isDefault: !0,
              },
              {
                name: 'product-filter-price',
                title: (0, A.__)('Product Filter: Price (Beta)', 'woocommerce'),
                description: (0, A.__)(
                  'Enable customers to filter the product collection by choosing a price range.',
                  'woocommerce',
                ),
                attributes: {
                  filterType: 'price-filter',
                  heading: (0, A.__)('Filter by Price', 'woocommerce'),
                },
                icon: {
                  src: (0, r.createElement)(i.A, {
                    icon: n.A,
                    className: 'wc-block-editor-components-block-icon',
                  }),
                },
              },
              {
                name: 'product-filter-stock-status',
                title: (0, A.__)('Product Filter: Stock Status (Beta)', 'woocommerce'),
                description: (0, A.__)(
                  'Enable customers to filter the product collection by stock status.',
                  'woocommerce',
                ),
                attributes: {
                  filterType: 'stock-filter',
                  heading: (0, A.__)('Filter by Stock Status', 'woocommerce'),
                },
                icon: {
                  src: (0, r.createElement)(i.A, {
                    icon: a.A,
                    className: 'wc-block-editor-components-block-icon',
                  }),
                },
              },
              {
                name: 'product-filter-attribute',
                title: (0, A.__)('Product Filter: Attribute (Beta)', 'woocommerce'),
                description: (0, A.__)(
                  'Enable customers to filter the product collection by selecting one or more attributes, such as color.',
                  'woocommerce',
                ),
                attributes: {
                  filterType: 'attribute-filter',
                  heading: (0, A.__)('Filter by Attribute', 'woocommerce'),
                },
                icon: {
                  src: (0, r.createElement)(i.A, {
                    icon: s.A,
                    className: 'wc-block-editor-components-block-icon',
                  }),
                },
              },
              {
                name: 'product-filter-rating',
                title: (0, A.__)('Product Filter: Rating (Beta)', 'woocommerce'),
                description: (0, A.__)(
                  'Enable customers to filter the product collection by rating.',
                  'woocommerce',
                ),
                attributes: {
                  filterType: 'rating-filter',
                  heading: (0, A.__)('Filter by Rating', 'woocommerce'),
                },
                icon: {
                  src: (0, r.createElement)(i.A, {
                    icon: d.A,
                    className: 'wc-block-editor-components-block-icon',
                  }),
                },
              },
            ],
            transforms: {
              from: [
                {
                  type: 'block',
                  blocks: ['woocommerce/filter-wrapper'],
                  transform: (e, t) => {
                    const o = [];
                    return (
                      t.forEach(t => {
                        t.name === `woocommerce/${e.filterType}` &&
                          o.push((0, c.createBlock)(C[e.filterType], t.attributes)),
                          'core/heading' === t.name && o.push(t);
                      }),
                      (0, c.createBlock)('woocommerce/product-filter', e, o)
                    );
                  },
                },
              ],
            },
          });
      },
      1472: () => {},
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
    c = {};
  function i(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var o = (c[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.m = r),
    (e = []),
    (i.O = (t, o, r, c) => {
      if (!o) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, c] = e[d], n = !0, a = 0; a < o.length; a++)
            (!1 & c || l >= c) && Object.keys(i.O).every(e => i.O[e](o[a]))
              ? o.splice(a--, 1)
              : ((n = !1), c < l && (l = c));
          if (n) {
            e.splice(d--, 1);
            var s = r();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      c = c || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > c; d--) e[d] = e[d - 1];
      e[d] = [o, r, c];
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
      var c = Object.create(null);
      i.r(c);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var n = 2 & r && e; 'object' == typeof n && !~t.indexOf(n); n = o(n))
        Object.getOwnPropertyNames(n).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), i.d(c, l), c;
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
    (i.j = 7719),
    (() => {
      var e = { 7719: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [l, n, a] = o,
            s = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in n) i.o(n, r) && (i.m[r] = n[r]);
            if (a) var d = a(i);
          }
          for (t && t(o); s < l.length; s++) (c = l[s]), i.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return i.O(d);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = i.O(void 0, [94], () => i(9626));
  (l = i.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter'] = l);
})();
