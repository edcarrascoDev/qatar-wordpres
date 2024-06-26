(() => {
  var e,
    t,
    o,
    r = {
      3766: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const l = window.wp.blocks;
        var n = o(7104),
          s = o(885);
        const c = window.wc.wcSettings;
        var a, i, u, p, d, m, w, g, _, y;
        const b = (0, c.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          f = (b.pluginUrl, b.pluginUrl, b.buildPhase),
          E =
            (null === (a = c.STORE_PAGES.shop) || void 0 === a || a.permalink,
            null === (i = c.STORE_PAGES.checkout) || void 0 === i || i.id,
            null === (u = c.STORE_PAGES.checkout) || void 0 === u || u.permalink,
            null === (p = c.STORE_PAGES.privacy) || void 0 === p || p.permalink,
            null === (d = c.STORE_PAGES.privacy) || void 0 === d || d.title,
            null === (m = c.STORE_PAGES.terms) || void 0 === m || m.permalink,
            null === (w = c.STORE_PAGES.terms) || void 0 === w || w.title,
            null === (g = c.STORE_PAGES.cart) || void 0 === g || g.id,
            null === (_ = c.STORE_PAGES.cart) || void 0 === _ || _.permalink,
            null !== (y = c.STORE_PAGES.myaccount) && void 0 !== y && y.permalink
              ? c.STORE_PAGES.myaccount.permalink
              : (0, c.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, c.getSetting)('localPickupEnabled', !1),
            (0, c.getSetting)('countries', {})),
          v = (0, c.getSetting)('countryData', {}),
          S =
            (Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, E[e] || '']),
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
        (0, c.getSetting)('addressFieldsLocations', S).address,
          (0, c.getSetting)('addressFieldsLocations', S).contact,
          (0, c.getSetting)('addressFieldsLocations', S).order,
          (0, c.getSetting)('additionalOrderFields', {}),
          (0, c.getSetting)('additionalContactFields', {}),
          (0, c.getSetting)('additionalAddressFields', {}),
          o(1832);
        var k = o(6087),
          h = o(9019),
          O = o.n(h);
        const T = window.wp.blockEditor,
          C = window.wp.components;
        var x = o(7723);
        const j = window.wc.blocksComponents;
        o(5400);
        const P = ({ name: e, count: t }) =>
          (0, r.createElement)(
            r.Fragment,
            null,
            e,
            null !== t &&
              Number.isFinite(t) &&
              (0, r.createElement)(j.Label, {
                label: t.toString(),
                screenReaderLabel: (0, x.sprintf) /* translators: %s number of products. */(
                  /* translators: %s number of products. */
                  (0, x._n)('%s product', '%s products', t, 'woocommerce'),
                  t,
                ),
                wrapperElement: 'span',
                wrapperProps: { className: 'wc-filter-element-label-list-count' },
              }),
          );
        var R = o(4717);
        const A = window.wc.wcTypes;
        var N = o(5574),
          G = o(923),
          q = o.n(G);
        function F(e) {
          const t = (0, k.useRef)(e);
          return q()(e, t.current) || (t.current = e), t.current;
        }
        const L = window.wc.wcBlocksData,
          B = window.wp.data,
          D = (0, k.createContext)('page'),
          M = () => (0, k.useContext)(D),
          Y =
            (D.Provider,
            e => {
              const t = M();
              e = e || t;
              const o = (0, B.useSelect)(
                  t => t(L.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: r } = (0, B.useDispatch)(L.QUERY_STATE_STORE_KEY);
              return [
                o,
                (0, k.useCallback)(
                  t => {
                    r(e, t);
                  },
                  [e, r],
                ),
              ];
            }),
          Q = (e, t, o) => {
            const r = M();
            o = o || r;
            const l = (0, B.useSelect)(
                r => r(L.QUERY_STATE_STORE_KEY).getValueForQueryKey(o, e, t),
                [o, e],
              ),
              { setQueryValue: n } = (0, B.useDispatch)(L.QUERY_STATE_STORE_KEY);
            return [
              l,
              (0, k.useCallback)(
                t => {
                  n(o, e, t);
                },
                [o, e, n],
              ),
            ];
          },
          U = ({
            queryAttribute: e,
            queryPrices: t,
            queryStock: o,
            queryRating: r,
            queryState: l,
            isEditor: n = !1,
          }) => {
            let s = M();
            s = `${s}-collection-data`;
            const [c] = Y(s),
              [a, i] = Q('calculate_attribute_counts', [], s),
              [u, p] = Q('calculate_price_range', null, s),
              [d, m] = Q('calculate_stock_status_counts', null, s),
              [w, g] = Q('calculate_rating_counts', null, s),
              _ = F(e || {}),
              y = F(t),
              b = F(o),
              f = F(r);
            (0, k.useEffect)(() => {
              'object' == typeof _ &&
                Object.keys(_).length &&
                (a.find(e => (0, A.objectHasProp)(_, 'taxonomy') && e.taxonomy === _.taxonomy) ||
                  i([...a, _]));
            }, [_, a, i]),
              (0, k.useEffect)(() => {
                u !== y && void 0 !== y && p(y);
              }, [y, p, u]),
              (0, k.useEffect)(() => {
                d !== b && void 0 !== b && m(b);
              }, [b, m, d]),
              (0, k.useEffect)(() => {
                w !== f && void 0 !== f && g(f);
              }, [f, g, w]);
            const [E, v] = (0, k.useState)(n),
              [S] = (0, R.d7)(E, 200);
            E || v(!0);
            const h = (0, k.useMemo)(
              () =>
                (e => {
                  const t = e;
                  return (
                    Array.isArray(e.calculate_attribute_counts) &&
                      (t.calculate_attribute_counts = (0, N.di)(
                        e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                          taxonomy: e,
                          query_type: t,
                        })),
                      ).asc(['taxonomy', 'query_type'])),
                    t
                  );
                })(c),
              [c],
            );
            return (e => {
              const {
                namespace: t,
                resourceName: o,
                resourceValues: r = [],
                query: l = {},
                shouldSelect: n = !0,
              } = e;
              if (!t || !o)
                throw new Error(
                  'The options object must have valid values for the namespace and the resource properties.',
                );
              const s = (0, k.useRef)({ results: [], isLoading: !0 }),
                c = F(l),
                a = F(r),
                i = (() => {
                  const [, e] = (0, k.useState)();
                  return (0, k.useCallback)(t => {
                    e(() => {
                      throw t;
                    });
                  }, []);
                })(),
                u = (0, B.useSelect)(
                  e => {
                    if (!n) return null;
                    const r = e(L.COLLECTIONS_STORE_KEY),
                      l = [t, o, c, a],
                      s = r.getCollectionError(...l);
                    if (s) {
                      if (!(0, A.isError)(s))
                        throw new Error(
                          'TypeError: `error` object is not an instance of Error constructor',
                        );
                      i(s);
                    }
                    return {
                      results: r.getCollection(...l),
                      isLoading: !r.hasFinishedResolution('getCollection', l),
                    };
                  },
                  [t, o, a, c, n],
                );
              return null !== u && (s.current = u), s.current;
            })({
              namespace: '/wc/store/v1',
              resourceName: 'products/collection-data',
              query: { ...l, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...h },
              shouldSelect: S,
            });
          },
          K = ({ attributes: e, setAttributes: t }) => {
            const { showCounts: o, selectType: l, displayStyle: n } = e;
            return (0, r.createElement)(
              T.InspectorControls,
              { key: 'inspector' },
              (0, r.createElement)(
                C.PanelBody,
                { title: (0, x.__)('Display Settings', 'woocommerce') },
                (0, r.createElement)(C.ToggleControl, {
                  label: (0, x.__)('Display product count', 'woocommerce'),
                  checked: o,
                  onChange: () => t({ showCounts: !o }),
                }),
                (0, r.createElement)(
                  C.__experimentalToggleGroupControl,
                  {
                    label: (0, x.__)('Allow selecting multiple options?', 'woocommerce'),
                    value: l || 'single',
                    onChange: e => t({ selectType: e }),
                    className: 'wc-block-attribute-filter__multiple-toggle',
                  },
                  (0, r.createElement)(C.__experimentalToggleGroupControlOption, {
                    value: 'multiple',
                    label: (0, x._x)('Multiple', 'Number of filters', 'woocommerce'),
                  }),
                  (0, r.createElement)(C.__experimentalToggleGroupControlOption, {
                    value: 'single',
                    label: (0, x._x)('Single', 'Number of filters', 'woocommerce'),
                  }),
                ),
                (0, r.createElement)(
                  C.__experimentalToggleGroupControl,
                  {
                    label: (0, x.__)('Display Style', 'woocommerce'),
                    value: n,
                    onChange: e => t({ displayStyle: e }),
                    className: 'wc-block-attribute-filter__display-toggle',
                  },
                  (0, r.createElement)(C.__experimentalToggleGroupControlOption, {
                    value: 'list',
                    label: (0, x.__)('List', 'woocommerce'),
                  }),
                  (0, r.createElement)(C.__experimentalToggleGroupControlOption, {
                    value: 'dropdown',
                    label: (0, x.__)('Dropdown', 'woocommerce'),
                  }),
                ),
              ),
            );
          },
          V = ({ placeholder: e }) =>
            (0, r.createElement)(
              'div',
              { className: 'wc-interactivity-dropdown' },
              (0, r.createElement)(
                'div',
                { className: 'wc-interactivity-dropdown__dropdown' },
                (0, r.createElement)(
                  'div',
                  { className: 'wc-interactivity-dropdown__dropdown-selection', tabIndex: 0 },
                  (0, r.createElement)(
                    'span',
                    { className: 'wc-interactivity-dropdown__placeholder' },
                    e,
                  ),
                  (0, r.createElement)(
                    'span',
                    { className: 'wc-interactivity-dropdown__svg-container' },
                    (0, r.createElement)(
                      'svg',
                      {
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '30',
                        height: '30',
                      },
                      (0, r.createElement)('path', {
                        d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z',
                      }),
                    ),
                  ),
                ),
              ),
            ),
          I = JSON.parse(
            '{"name":"woocommerce/product-filter-stock-status","version":"1.0.0","title":"Product Filter: Stock Status (Beta)","description":"Enable customers to filter the product collection by stock status.","category":"woocommerce","keywords":["WooCommerce","filter","stock"],"supports":{"interactivity":true,"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false}},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"usesContext":["query","queryId"],"ancestor":["woocommerce/product-filter"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        f > 2 &&
          (0, l.registerBlockType)(I, {
            icon: {
              src: (0, r.createElement)(n.A, {
                icon: s.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: e => {
              const t = (0, T.useBlockProps)({
                  className: O()('wc-block-stock-filter', e.attributes.className),
                }),
                { showCounts: o, displayStyle: l } = e.attributes,
                n = (0, c.getSetting)('stockStatusOptions', {}),
                { results: s } = U({ queryStock: !0, queryState: {}, isEditor: !0 }),
                a = (0, k.useMemo)(
                  () =>
                    Object.entries(n)
                      .map(([e, t]) => {
                        var l, n;
                        const c =
                          null == s ||
                          null === (l = s.stock_status_counts) ||
                          void 0 === l ||
                          null === (n = l.find(t => t.status === e)) ||
                          void 0 === n
                            ? void 0
                            : n.count;
                        return {
                          value: e,
                          label: (0, r.createElement)(P, {
                            name: t,
                            count: o && c ? Number(c) : null,
                          }),
                          count: c || 0,
                        };
                      })
                      .filter(e => e.count > 0),
                  [n, s, o],
                );
              return (0, r.createElement)(
                r.Fragment,
                null,
                (0, r.createElement)(
                  'div',
                  { ...t },
                  (0, r.createElement)(K, { ...e }),
                  (0, r.createElement)(
                    C.Disabled,
                    null,
                    (0, r.createElement)(
                      'div',
                      { className: O()(`style-${l}`, { 'is-loading': !1 }) },
                      'dropdown' === l
                        ? (0, r.createElement)(
                            r.Fragment,
                            null,
                            (0, r.createElement)(V, {
                              placeholder:
                                'single' === e.attributes.selectType
                                  ? (0, x.__)('Select stock status', 'woocommerce')
                                  : (0, x.__)('Select stock statuses', 'woocommerce'),
                            }),
                          )
                        : (0, r.createElement)(j.CheckboxList, {
                            className: 'wc-block-stock-filter-list',
                            options: a,
                            checked: [],
                            onChange: () => {},
                            isLoading: !1,
                            isDisabled: !0,
                          }),
                    ),
                  ),
                ),
              );
            },
          });
      },
      5400: () => {},
      1832: () => {},
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
      923: e => {
        'use strict';
        e.exports = window.wp.isShallowEqual;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
    },
    l = {};
  function n(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var o = (l[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, l) => {
      if (!o) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [o, r, l] = e[u], c = !0, a = 0; a < o.length; a++)
            (!1 & l || s >= l) && Object.keys(n.O).every(e => n.O[e](o[a]))
              ? o.splice(a--, 1)
              : ((c = !1), l < s && (s = l));
          if (c) {
            e.splice(u--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      l = l || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > l; u--) e[u] = e[u - 1];
      e[u] = [o, r, l];
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
      var l = Object.create(null);
      n.r(l);
      var s = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var c = 2 & r && e; 'object' == typeof c && !~t.indexOf(c); c = o(c))
        Object.getOwnPropertyNames(c).forEach(t => (s[t] = () => e[t]));
      return (s.default = () => e), n.d(l, s), l;
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
    (n.j = 2689),
    (() => {
      var e = { 2689: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            l,
            [s, c, a] = o,
            i = 0;
          if (s.some(t => 0 !== e[t])) {
            for (r in c) n.o(c, r) && (n.m[r] = c[r]);
            if (a) var u = a(n);
          }
          for (t && t(o); i < s.length; i++) (l = s[i]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return n.O(u);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var s = n.O(void 0, [94], () => n(3766));
  (s = n.O(s)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter-stock-status'] = s);
})();
