(() => {
  var e,
    t,
    r,
    o = {
      2289: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const n = window.wp.blocks;
        var c = r(7104),
          i = r(3576);
        const a = window.wc.wcSettings;
        var l, s, u, p, m, d, g, f, w, _;
        const E = (0, a.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          b = (E.pluginUrl, E.pluginUrl, E.buildPhase),
          y =
            (null === (l = a.STORE_PAGES.shop) || void 0 === l || l.permalink,
            null === (s = a.STORE_PAGES.checkout) || void 0 === s || s.id,
            null === (u = a.STORE_PAGES.checkout) || void 0 === u || u.permalink,
            null === (p = a.STORE_PAGES.privacy) || void 0 === p || p.permalink,
            null === (m = a.STORE_PAGES.privacy) || void 0 === m || m.title,
            null === (d = a.STORE_PAGES.terms) || void 0 === d || d.permalink,
            null === (g = a.STORE_PAGES.terms) || void 0 === g || g.title,
            null === (f = a.STORE_PAGES.cart) || void 0 === f || f.id,
            null === (w = a.STORE_PAGES.cart) || void 0 === w || w.permalink,
            null !== (_ = a.STORE_PAGES.myaccount) && void 0 !== _ && _.permalink
              ? a.STORE_PAGES.myaccount.permalink
              : (0, a.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, a.getSetting)('localPickupEnabled', !1),
            (0, a.getSetting)('countries', {})),
          v = (0, a.getSetting)('countryData', {}),
          S =
            (Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, y[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, y[e] || '']),
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
        (0, a.getSetting)('addressFieldsLocations', S).address,
          (0, a.getSetting)('addressFieldsLocations', S).contact,
          (0, a.getSetting)('addressFieldsLocations', S).order,
          (0, a.getSetting)('additionalOrderFields', {}),
          (0, a.getSetting)('additionalContactFields', {}),
          (0, a.getSetting)('additionalAddressFields', {}),
          r(261);
        const h = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-price","version":"1.0.0","title":"Product Filter: Price (Beta)","description":"Enable customers to filter the product collection by choosing a price range.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":2,"ancestor":["woocommerce/product-filter"],"supports":{"interactivity":true,"inserter":false},"usesContext":["query","queryId"],"attributes":{"showInputFields":{"type":"boolean","default":true},"inlineInput":{"type":"boolean","default":false}}}',
          ),
          O = window.wp.blockEditor,
          k = window.wp.components;
        var P = r(6087),
          x = r(4717);
        const T = window.wc.wcTypes;
        var C = r(5574),
          j = r(923),
          R = r.n(j);
        function A(e) {
          const t = (0, P.useRef)(e);
          return R()(e, t.current) || (t.current = e), t.current;
        }
        const F = window.wc.wcBlocksData,
          N = window.wp.data,
          q = (0, P.createContext)('page'),
          G = () => (0, P.useContext)(q),
          I =
            (q.Provider,
            e => {
              const t = G();
              e = e || t;
              const r = (0, N.useSelect)(
                  t => t(F.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: o } = (0, N.useDispatch)(F.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, P.useCallback)(
                  t => {
                    o(e, t);
                  },
                  [e, o],
                ),
              ];
            }),
          M = (e, t, r) => {
            const o = G();
            r = r || o;
            const n = (0, N.useSelect)(
                o => o(F.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: c } = (0, N.useDispatch)(F.QUERY_STATE_STORE_KEY);
            return [
              n,
              (0, P.useCallback)(
                t => {
                  c(r, e, t);
                },
                [r, e, c],
              ),
            ];
          },
          B = ({
            queryAttribute: e,
            queryPrices: t,
            queryStock: r,
            queryRating: o,
            queryState: n,
            isEditor: c = !1,
          }) => {
            let i = G();
            i = `${i}-collection-data`;
            const [a] = I(i),
              [l, s] = M('calculate_attribute_counts', [], i),
              [u, p] = M('calculate_price_range', null, i),
              [m, d] = M('calculate_stock_status_counts', null, i),
              [g, f] = M('calculate_rating_counts', null, i),
              w = A(e || {}),
              _ = A(t),
              E = A(r),
              b = A(o);
            (0, P.useEffect)(() => {
              'object' == typeof w &&
                Object.keys(w).length &&
                (l.find(e => (0, T.objectHasProp)(w, 'taxonomy') && e.taxonomy === w.taxonomy) ||
                  s([...l, w]));
            }, [w, l, s]),
              (0, P.useEffect)(() => {
                u !== _ && void 0 !== _ && p(_);
              }, [_, p, u]),
              (0, P.useEffect)(() => {
                m !== E && void 0 !== E && d(E);
              }, [E, d, m]),
              (0, P.useEffect)(() => {
                g !== b && void 0 !== b && f(b);
              }, [b, f, g]);
            const [y, v] = (0, P.useState)(c),
              [S] = (0, x.d7)(y, 200);
            y || v(!0);
            const h = (0, P.useMemo)(
              () =>
                (e => {
                  const t = e;
                  return (
                    Array.isArray(e.calculate_attribute_counts) &&
                      (t.calculate_attribute_counts = (0, C.di)(
                        e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                          taxonomy: e,
                          query_type: t,
                        })),
                      ).asc(['taxonomy', 'query_type'])),
                    t
                  );
                })(a),
              [a],
            );
            return (e => {
              const {
                namespace: t,
                resourceName: r,
                resourceValues: o = [],
                query: n = {},
                shouldSelect: c = !0,
              } = e;
              if (!t || !r)
                throw new Error(
                  'The options object must have valid values for the namespace and the resource properties.',
                );
              const i = (0, P.useRef)({ results: [], isLoading: !0 }),
                a = A(n),
                l = A(o),
                s = (() => {
                  const [, e] = (0, P.useState)();
                  return (0, P.useCallback)(t => {
                    e(() => {
                      throw t;
                    });
                  }, []);
                })(),
                u = (0, N.useSelect)(
                  e => {
                    if (!c) return null;
                    const o = e(F.COLLECTIONS_STORE_KEY),
                      n = [t, r, a, l],
                      i = o.getCollectionError(...n);
                    if (i) {
                      if (!(0, T.isError)(i))
                        throw new Error(
                          'TypeError: `error` object is not an instance of Error constructor',
                        );
                      s(i);
                    }
                    return {
                      results: o.getCollection(...n),
                      isLoading: !o.hasFinishedResolution('getCollection', n),
                    };
                  },
                  [t, r, l, a, c],
                );
              return null !== u && (i.current = u), i.current;
            })({
              namespace: '/wc/store/v1',
              resourceName: 'products/collection-data',
              query: { ...n, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...h },
              shouldSelect: S,
            });
          };
        var U = r(9019),
          L = r.n(U);
        const Y = window.wc.priceFormat;
        function Q(e, t) {
          return ('number' == typeof e ? e : parseInt(e, 10)) / 10 ** t.minorUnit;
        }
        const K = ({ attributes: e }) => {
          const { inlineInput: t, showInputFields: r } = e,
            { results: n, isLoading: c } = B({ queryPrices: !0, queryState: {}, isEditor: !0 });
          if (c) return null;
          const {
              minPrice: i,
              maxPrice: a,
              formattedMinPrice: l,
              formattedMaxPrice: s,
            } = (function(e) {
              const t = (0, Y.getCurrency)({ minorUnit: 0 });
              if (!(0, T.objectHasProp)(e, 'price_range'))
                return {
                  minPrice: 0,
                  maxPrice: 0,
                  minRange: 0,
                  maxRange: 0,
                  formattedMinPrice: (0, Y.formatPrice)(0, t),
                  formattedMaxPrice: (0, Y.formatPrice)(0, t),
                };
              const r = (0, Y.getCurrencyFromPriceResponse)(e.price_range),
                o =
                  (0, T.objectHasProp)(e.price_range, 'min_price') &&
                  (0, T.isString)(e.price_range.min_price)
                    ? Q(e.price_range.min_price, r)
                    : 0,
                n =
                  (0, T.objectHasProp)(e.price_range, 'max_price') &&
                  (0, T.isString)(e.price_range.max_price)
                    ? Q(e.price_range.max_price, r)
                    : 0;
              return {
                minPrice: o,
                maxPrice: n,
                minRange: o,
                maxRange: n,
                formattedMinPrice: (0, Y.formatPrice)(o, t),
                formattedMaxPrice: (0, Y.formatPrice)(n, t),
              };
            })(n),
            u = () => null,
            p = r
              ? (0, o.createElement)('input', {
                  className: 'min',
                  type: 'text',
                  value: l,
                  onChange: u,
                })
              : (0, o.createElement)('span', null, l),
            m = r
              ? (0, o.createElement)('input', {
                  className: 'max',
                  type: 'text',
                  value: s,
                  onChange: u,
                })
              : (0, o.createElement)('span', null, s);
          return (0, o.createElement)(
            'div',
            {
              className: L()('wp-block-woocommerce-product-filter-price-content', {
                'wp-block-woocommerce-product-filter-price-content--inline': t && r,
              }),
            },
            (0, o.createElement)(
              'div',
              { className: 'wp-block-woocommerce-product-filter-price-content-left-input text' },
              p,
            ),
            (0, o.createElement)(
              'div',
              {
                className:
                  'wp-block-woocommerce-product-filter-price-content-price-range-slider range',
              },
              (0, o.createElement)('div', { className: 'range-bar' }),
              (0, o.createElement)('input', {
                type: 'range',
                className: 'min',
                min: i,
                max: a,
                value: i,
                onChange: u,
              }),
              (0, o.createElement)('input', {
                type: 'range',
                className: 'max',
                min: i,
                max: a,
                value: a,
                onChange: u,
              }),
            ),
            (0, o.createElement)(
              'div',
              { className: 'wp-block-woocommerce-product-filter-price-content-right-input text' },
              m,
            ),
          );
        };
        var V = r(7723);
        const D = ({ attributes: e, setAttributes: t }) => {
          const { showInputFields: r, inlineInput: n } = e;
          return (0, o.createElement)(
            O.InspectorControls,
            null,
            (0, o.createElement)(
              k.PanelBody,
              { title: (0, V.__)('Settings', 'woocommerce') },
              (0, o.createElement)(
                k.__experimentalToggleGroupControl,
                {
                  label: (0, V.__)('Price Slider', 'woocommerce'),
                  value: r ? 'editable' : 'text',
                  onChange: e => t({ showInputFields: 'editable' === e }),
                  className: 'wc-block-price-filter__price-range-toggle',
                },
                (0, o.createElement)(k.__experimentalToggleGroupControlOption, {
                  value: 'editable',
                  label: (0, V.__)('Editable', 'woocommerce'),
                }),
                (0, o.createElement)(k.__experimentalToggleGroupControlOption, {
                  value: 'text',
                  label: (0, V.__)('Text', 'woocommerce'),
                }),
              ),
              r &&
                (0, o.createElement)(k.ToggleControl, {
                  label: (0, V.__)('Inline input fields', 'woocommerce'),
                  checked: n,
                  onChange: () => t({ inlineInput: !n }),
                  help: (0, V.__)('Show input fields inline with the slider.', 'woocommerce'),
                }),
            ),
          );
        };
        b > 2 &&
          (0, n.registerBlockType)(h, {
            icon: {
              src: (0, o.createElement)(c.A, {
                icon: i.A,
                className: 'wc-block-editor-components-block-icon',
              }),
            },
            edit: e => {
              const t = (0, O.useBlockProps)();
              return (0, o.createElement)(
                'div',
                { ...t },
                (0, o.createElement)(D, { ...e }),
                (0, o.createElement)(k.Disabled, null, (0, o.createElement)(K, { ...e })),
              );
            },
          });
      },
      261: () => {},
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
    n = {};
  function c(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, c), r.exports;
  }
  (c.m = o),
    (e = []),
    (c.O = (t, r, o, n) => {
      if (!r) {
        var i = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, n] = e[u], a = !0, l = 0; l < r.length; l++)
            (!1 & n || i >= n) && Object.keys(c.O).every(e => c.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), n < i && (i = n));
          if (a) {
            e.splice(u--, 1);
            var s = o();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [r, o, n];
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
      var n = Object.create(null);
      c.r(n);
      var i = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (i[t] = () => e[t]));
      return (i.default = () => e), c.d(n, i), n;
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
    (c.j = 5303),
    (() => {
      var e = { 5303: 0 };
      c.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [i, a, l] = r,
            s = 0;
          if (i.some(t => 0 !== e[t])) {
            for (o in a) c.o(a, o) && (c.m[o] = a[o]);
            if (l) var u = l(c);
          }
          for (t && t(r); s < i.length; s++) (n = i[s]), c.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return c.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = c.O(void 0, [94], () => c(2289));
  (i = c.O(i)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter-price'] = i);
})();
