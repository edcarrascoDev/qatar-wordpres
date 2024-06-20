(() => {
  'use strict';
  var e,
    t,
    r,
    o = {
      8646: (e, t, r) => {
        r.r(t);
        var o = r(1609),
          i = r(7723);
        const c = window.wp.blocks;
        var l = r(5573);
        const n = (0, o.createElement)(
            l.SVG,
            { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
            (0, o.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
            (0, o.createElement)('path', {
              d:
                'M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            }),
          ),
          a = window.wp.blockEditor;
        var s = r(7104),
          m = r(3576),
          p = r(885),
          d = r(6378),
          f = r(846);
        const u = JSON.parse(
            '{"name":"woocommerce/filter-wrapper","version":"1.0.0","title":"Filter Block","category":"woocommerce","keywords":["WooCommerce"],"attributes":{"filterType":{"type":"string"},"heading":{"type":"string"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          w = [
            {
              widgetId: 'woocommerce_layered_nav_filters',
              name: 'active-filters',
              heading: (0, i.__)('Active filters', 'woocommerce'),
            },
            {
              widgetId: 'woocommerce_price_filter',
              name: 'price-filter',
              heading: (0, i.__)('Filter by price', 'woocommerce'),
            },
            {
              widgetId: 'woocommerce_layered_nav',
              name: 'attribute-filter',
              heading: (0, i.__)('Filter by attribute', 'woocommerce'),
            },
            {
              widgetId: 'woocommerce_rating_filter',
              name: 'rating-filter',
              heading: (0, i.__)('Filter by rating', 'woocommerce'),
            },
          ];
        (0, c.registerBlockType)(u, {
          edit: ({ attributes: e }) => {
            const t = (0, a.useBlockProps)();
            return (0, o.createElement)(
              'div',
              { ...t },
              (0, o.createElement)(a.InnerBlocks, {
                allowedBlocks: ['core/heading'],
                template: [
                  ['core/heading', { level: 3, content: e.heading || '' }],
                  [`woocommerce/${e.filterType}`, { heading: '', lock: { remove: !0 } }],
                ],
              }),
            );
          },
          save: () =>
            (0, o.createElement)(
              'div',
              { ...a.useBlockProps.save() },
              (0, o.createElement)(a.InnerBlocks.Content, null),
            ),
          variations: [
            {
              name: 'active-filters',
              title: (0, i.__)('Active Filters', 'woocommerce'),
              description: (0, i.__)('Display the currently active filters.', 'woocommerce'),
              isActive: e => 'active-filters' === e.filterType || !e.filterType,
              attributes: {
                heading: (0, i.__)('Active filters', 'woocommerce'),
                filterType: 'active-filters',
              },
              icon: {
                src: (0, o.createElement)(s.A, {
                  icon: n,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
              isDefault: !0,
            },
            {
              name: 'price-filter',
              title: (0, i.__)('Filter by Price', 'woocommerce'),
              description: (0, i.__)(
                'Enable customers to filter the product grid by choosing a price range.',
                'woocommerce',
              ),
              isActive: e => 'price-filter' === e.filterType,
              attributes: {
                filterType: 'price-filter',
                heading: (0, i.__)('Filter by price', 'woocommerce'),
              },
              icon: {
                src: (0, o.createElement)(s.A, {
                  icon: m.A,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
            },
            {
              name: 'stock-filter',
              title: (0, i.__)('Filter by Stock', 'woocommerce'),
              description: (0, i.__)(
                'Enable customers to filter the product grid by stock status.',
                'woocommerce',
              ),
              isActive: e => 'stock-filter' === e.filterType,
              attributes: {
                filterType: 'stock-filter',
                heading: (0, i.__)('Filter by stock status', 'woocommerce'),
              },
              icon: {
                src: (0, o.createElement)(s.A, {
                  icon: p.A,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
            },
            {
              name: 'attribute-filter',
              title: (0, i.__)('Filter by Attribute', 'woocommerce'),
              description: (0, i.__)(
                'Enable customers to filter the product grid by selecting one or more attributes, such as color.',
                'woocommerce',
              ),
              isActive: e => 'attribute-filter' === e.filterType,
              attributes: {
                filterType: 'attribute-filter',
                heading: (0, i.__)('Filter by attribute', 'woocommerce'),
              },
              icon: {
                src: (0, o.createElement)(s.A, {
                  icon: d.A,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
            },
            {
              name: 'rating-filter',
              title: (0, i.__)('Filter by Rating', 'woocommerce'),
              description: (0, i.__)(
                'Enable customers to filter the product grid by rating.',
                'woocommerce',
              ),
              isActive: e => 'rating-filter' === e.filterType,
              attributes: {
                filterType: 'rating-filter',
                heading: (0, i.__)('Filter by rating', 'woocommerce'),
              },
              icon: {
                src: (0, o.createElement)(s.A, {
                  icon: f.A,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
            },
          ],
          transforms: {
            from: [
              {
                type: 'block',
                blocks: ['core/legacy-widget'],
                isMatch: ({ idBase: e, instance: t }) => {
                  return (r = e), w.some(e => e.widgetId === r) && !(null == t || !t.raw);
                  var r;
                },
                transform: ({ idBase: e, instance: t }) => {
                  var r;
                  const o = ((i = e), w.find(e => e.widgetId === i));
                  var i;
                  return o
                    ? ((e, t, r) => {
                        const o = [(0, c.createBlock)(`woocommerce/${e}`, t)];
                        return (
                          o.unshift((0, c.createBlock)('core/heading', { content: r, level: 3 })),
                          (0, c.createBlock)('woocommerce/filter-wrapper', { filterType: e }, o)
                        );
                      })(
                        o.name,
                        ((e, t) => {
                          var r, o, i;
                          switch (t) {
                            case 'attribute-filter':
                              return {
                                attributeId: 0,
                                showCounts: !0,
                                queryType:
                                  (null == e || null === (r = e.raw) || void 0 === r
                                    ? void 0
                                    : r.query_type) || 'or',
                                heading: '',
                                displayStyle:
                                  (null == e || null === (o = e.raw) || void 0 === o
                                    ? void 0
                                    : o.display_type) || 'list',
                                showFilterButton: !1,
                                selectType:
                                  (null == e || null === (i = e.raw) || void 0 === i
                                    ? void 0
                                    : i.select_type) || 'multiple',
                                isPreview: !1,
                              };
                            case 'active-filters':
                              return { displayStyle: 'list', heading: '' };
                            case 'price-filter':
                              return {
                                heading: '',
                                showInputFields: !1,
                                showFilterButton: !0,
                                inlineInput: !1,
                              };
                            default:
                              return {};
                          }
                        })(t, o.name),
                        (null == t || null === (r = t.raw) || void 0 === r ? void 0 : r.title) ||
                          o.heading,
                      )
                    : null;
                },
              },
            ],
          },
        });
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
      5573: e => {
        e.exports = window.wp.primitives;
      },
    },
    i = {};
  function c(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var r = (i[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, c), r.exports;
  }
  (c.m = o),
    (e = []),
    (c.O = (t, r, o, i) => {
      if (!r) {
        var l = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, o, i] = e[m], n = !0, a = 0; a < r.length; a++)
            (!1 & i || l >= i) && Object.keys(c.O).every(e => c.O[e](r[a]))
              ? r.splice(a--, 1)
              : ((n = !1), i < l && (l = i));
          if (n) {
            e.splice(m--, 1);
            var s = o();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      i = i || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > i; m--) e[m] = e[m - 1];
      e[m] = [r, o, i];
    }),
    (c.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (c.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var i = Object.create(null);
      c.r(i);
      var l = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var n = 2 & o && e; 'object' == typeof n && !~t.indexOf(n); n = r(n))
        Object.getOwnPropertyNames(n).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), c.d(i, l), i;
    }),
    (c.d = (e, t) => {
      for (var r in t)
        c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (c.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.j = 5819),
    (() => {
      var e = { 5819: 0 };
      c.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            i,
            [l, n, a] = r,
            s = 0;
          if (l.some(t => 0 !== e[t])) {
            for (o in n) c.o(n, o) && (c.m[o] = n[o]);
            if (a) var m = a(c);
          }
          for (t && t(r); s < l.length; s++) (i = l[s]), c.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return c.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var l = c.O(void 0, [94], () => c(8646));
  (l = c.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['filter-wrapper'] = l);
})();
