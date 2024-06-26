(() => {
  var e,
    t,
    r,
    o = {
      3998: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const n = window.wp.blocks;
        var l = r(7104),
          a = r(846),
          c = r(7723),
          s = r(9019),
          i = r.n(s);
        const u = window.wp.blockEditor;
        r(8887);
        const p = ({ className: e, rating: t, ratedProductsCount: r }) => {
            const n = i()('wc-block-components-product-rating', e),
              l = { width: (t / 5) * 100 + '%' },
              a = (0, c.sprintf) /* translators: %f is referring to the average rating value */(
                /* translators: %f is referring to the average rating value */
                (0, c.__)('Rated %f out of 5', 'woocommerce'),
                t,
              ),
              s = {
                __html: (0,
                c.sprintf) /* translators: %s is the rating value wrapped in HTML strong tags. */(
                  /* translators: %s is the rating value wrapped in HTML strong tags. */
                  (0, c.__)('Rated %s out of 5', 'woocommerce'),
                  (0, c.sprintf)('<strong class="rating">%f</strong>', t),
                ),
              };
            return (0, o.createElement)(
              'div',
              { className: n },
              (0, o.createElement)(
                'div',
                {
                  className: 'wc-block-components-product-rating__stars',
                  role: 'img',
                  'aria-label': a,
                },
                (0, o.createElement)('span', { style: l, dangerouslySetInnerHTML: s }),
              ),
              null !== r
                ? (0, o.createElement)(
                    'span',
                    { className: 'wc-block-components-product-rating-count' },
                    '(',
                    r,
                    ')',
                  )
                : null,
            );
          },
          d = window.wc.wcBlocksData,
          m = window.wp.data;
        var w = r(6087),
          g = r(923),
          y = r.n(g);
        const _ = (0, w.createContext)('page'),
          f = () => (0, w.useContext)(_),
          v =
            (_.Provider,
            e => {
              const t = f();
              e = e || t;
              const r = (0, m.useSelect)(
                  t => t(d.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: o } = (0, m.useDispatch)(d.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, w.useCallback)(
                  t => {
                    o(e, t);
                  },
                  [e, o],
                ),
              ];
            }),
          b = (e, t, r) => {
            const o = f();
            r = r || o;
            const n = (0, m.useSelect)(
                o => o(d.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: l } = (0, m.useDispatch)(d.QUERY_STATE_STORE_KEY);
            return [
              n,
              (0, w.useCallback)(
                t => {
                  l(r, e, t);
                },
                [r, e, l],
              ),
            ];
          };
        var E = r(4717);
        const h = window.wc.wcTypes;
        var S = r(5574);
        function k(e) {
          const t = (0, w.useRef)(e);
          return y()(e, t.current) || (t.current = e), t.current;
        }
        const C = ({
            queryAttribute: e,
            queryPrices: t,
            queryStock: r,
            queryRating: o,
            queryState: n,
            isEditor: l = !1,
          }) => {
            let a = f();
            a = `${a}-collection-data`;
            const [c] = v(a),
              [s, i] = b('calculate_attribute_counts', [], a),
              [u, p] = b('calculate_price_range', null, a),
              [g, y] = b('calculate_stock_status_counts', null, a),
              [_, C] = b('calculate_rating_counts', null, a),
              x = k(e || {}),
              O = k(t),
              T = k(r),
              P = k(o);
            (0, w.useEffect)(() => {
              'object' == typeof x &&
                Object.keys(x).length &&
                (s.find(e => (0, h.objectHasProp)(x, 'taxonomy') && e.taxonomy === x.taxonomy) ||
                  i([...s, x]));
            }, [x, s, i]),
              (0, w.useEffect)(() => {
                u !== O && void 0 !== O && p(O);
              }, [O, p, u]),
              (0, w.useEffect)(() => {
                g !== T && void 0 !== T && y(T);
              }, [T, y, g]),
              (0, w.useEffect)(() => {
                _ !== P && void 0 !== P && C(P);
              }, [P, C, _]);
            const [j, N] = (0, w.useState)(l),
              [R] = (0, E.d7)(j, 200);
            j || N(!0);
            const q = (0, w.useMemo)(
              () =>
                (e => {
                  const t = e;
                  return (
                    Array.isArray(e.calculate_attribute_counts) &&
                      (t.calculate_attribute_counts = (0, S.di)(
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
                resourceName: r,
                resourceValues: o = [],
                query: n = {},
                shouldSelect: l = !0,
              } = e;
              if (!t || !r)
                throw new Error(
                  'The options object must have valid values for the namespace and the resource properties.',
                );
              const a = (0, w.useRef)({ results: [], isLoading: !0 }),
                c = k(n),
                s = k(o),
                i = (() => {
                  const [, e] = (0, w.useState)();
                  return (0, w.useCallback)(t => {
                    e(() => {
                      throw t;
                    });
                  }, []);
                })(),
                u = (0, m.useSelect)(
                  e => {
                    if (!l) return null;
                    const o = e(d.COLLECTIONS_STORE_KEY),
                      n = [t, r, c, s],
                      a = o.getCollectionError(...n);
                    if (a) {
                      if (!(0, h.isError)(a))
                        throw new Error(
                          'TypeError: `error` object is not an instance of Error constructor',
                        );
                      i(a);
                    }
                    return {
                      results: o.getCollection(...n),
                      isLoading: !o.hasFinishedResolution('getCollection', n),
                    };
                  },
                  [t, r, s, c, l],
                );
              return null !== u && (a.current = u), a.current;
            })({
              namespace: '/wc/store/v1',
              resourceName: 'products/collection-data',
              query: { ...n, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...q },
              shouldSelect: R,
            });
          },
          x = window.wc.wcSettings,
          O = window.wc.blocksComponents,
          T = window.wp.components,
          P = [
            {
              label: (0, o.createElement)(p, { key: 5, rating: 5, ratedProductsCount: null }),
              value: '5',
            },
            {
              label: (0, o.createElement)(p, { key: 4, rating: 4, ratedProductsCount: null }),
              value: '4',
            },
            {
              label: (0, o.createElement)(p, { key: 3, rating: 3, ratedProductsCount: null }),
              value: '3',
            },
            {
              label: (0, o.createElement)(p, { key: 2, rating: 2, ratedProductsCount: null }),
              value: '2',
            },
            {
              label: (0, o.createElement)(p, { key: 1, rating: 1, ratedProductsCount: null }),
              value: '1',
            },
          ],
          j = window.wp.url;
        (0, x.getSettingWithCoercion)('isRenderingPhpTemplate', !1, h.isBoolean);
        const N = (0, w.createContext)({}),
          R = ({ attributes: e, setAttributes: t }) => {
            const { showCounts: r, displayStyle: n, selectType: l } = e;
            return (0, o.createElement)(
              u.InspectorControls,
              { key: 'inspector' },
              (0, o.createElement)(
                T.PanelBody,
                { title: (0, c.__)('Display Settings', 'woocommerce') },
                (0, o.createElement)(T.ToggleControl, {
                  label: (0, c.__)('Display product count', 'woocommerce'),
                  checked: r,
                  onChange: () => t({ showCounts: !r }),
                }),
                'dropdown' === n &&
                  (0, o.createElement)(
                    T.__experimentalToggleGroupControl,
                    {
                      label: (0, c.__)('Allow selecting multiple options?', 'woocommerce'),
                      value: l || 'multiple',
                      onChange: e => t({ selectType: e }),
                      className: 'wc-block-attribute-filter__multiple-toggle',
                    },
                    (0, o.createElement)(T.__experimentalToggleGroupControlOption, {
                      value: 'multiple',
                      label: (0, c._x)('Multiple', 'Number of filters', 'woocommerce'),
                    }),
                    (0, o.createElement)(T.__experimentalToggleGroupControlOption, {
                      value: 'single',
                      label: (0, c._x)('Single', 'Number of filters', 'woocommerce'),
                    }),
                  ),
                (0, o.createElement)(
                  T.__experimentalToggleGroupControl,
                  {
                    label: (0, c.__)('Display Style', 'woocommerce'),
                    value: n,
                    onChange: e => t({ displayStyle: e }),
                    className: 'wc-block-attribute-filter__display-toggle',
                  },
                  (0, o.createElement)(T.__experimentalToggleGroupControlOption, {
                    value: 'list',
                    label: (0, c.__)('List', 'woocommerce'),
                  }),
                  (0, o.createElement)(T.__experimentalToggleGroupControlOption, {
                    value: 'dropdown',
                    label: (0, c.__)('Dropdown', 'woocommerce'),
                  }),
                ),
              ),
            );
          },
          q = ({ placeholder: e }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-interactivity-dropdown' },
              (0, o.createElement)(
                'div',
                { className: 'wc-interactivity-dropdown__dropdown' },
                (0, o.createElement)(
                  'div',
                  { className: 'wc-interactivity-dropdown__dropdown-selection', tabIndex: 0 },
                  (0, o.createElement)(
                    'span',
                    { className: 'wc-interactivity-dropdown__placeholder' },
                    e,
                  ),
                  (0, o.createElement)(
                    'span',
                    { className: 'wc-interactivity-dropdown__svg-container' },
                    (0, o.createElement)(
                      'svg',
                      {
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '30',
                        height: '30',
                      },
                      (0, o.createElement)('path', {
                        d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z',
                      }),
                    ),
                  ),
                ),
              ),
            );
        r(8923);
        const A = () =>
            (0, o.createElement)(
              T.Notice,
              { status: 'warning', isDismissible: !1 },
              (0, o.createElement)(
                'p',
                null,
                (0, c.__)(
                  "Your store doesn't have any products with ratings yet. This filter option will display when a product receives a review.",
                  'woocommerce',
                ),
              ),
            ),
          M = (0, T.withSpokenMessages)(e => {
            const t = e.attributes,
              r = (0, u.useBlockProps)(),
              n = (() => {
                const { wrapper: e } = (0, w.useContext)(N);
                return t => {
                  e && e.current && (e.current.hidden = !t);
                };
              })(),
              [l] = v(),
              { results: a, isLoading: s } = C({ queryRating: !0, queryState: l, isEditor: !0 }),
              [d, m] = (0, w.useState)(t.isPreview ? P : []),
              g = !t.isPreview && s && 0 === d.length,
              y = !t.isPreview && s,
              _ = (0, w.useMemo)(
                () =>
                  ((e = 'filter_rating') => {
                    const t =
                      ((r = e), window ? (0, j.getQueryArg)(window.location.href, r) : null);
                    var r;
                    return t ? ((0, h.isString)(t) ? t.split(',') : t) : [];
                  })('rating_filter'),
                [],
              ),
              [f] = (0, w.useState)(_),
              [E] = b('rating', _),
              [S, k] = (0, w.useState)(!1);
            return (
              (0, w.useEffect)(() => {
                if (s || t.isPreview) return;
                const e =
                  !s && (0, h.objectHasProp)(a, 'rating_counts') && Array.isArray(a.rating_counts)
                    ? [...a.rating_counts].reverse()
                    : [];
                if (0 === e.length) return m(P), void k(!0);
                const r = e
                  .filter(e => (0, h.isObject)(e) && Object.keys(e).length > 0)
                  .map(e => {
                    var r;
                    return {
                      label: (0, o.createElement)(p, {
                        key: null == e ? void 0 : e.rating,
                        rating: null == e ? void 0 : e.rating,
                        ratedProductsCount: t.showCounts ? (null == e ? void 0 : e.count) : null,
                      }),
                      value:
                        null == e || null === (r = e.rating) || void 0 === r
                          ? void 0
                          : r.toString(),
                    };
                  });
                m(r);
              }, [t.showCounts, t.isPreview, a, s, E]),
              (s || 0 !== d.length) &&
              (0, x.getSettingWithCoercion)('hasFilterableProducts', !1, h.isBoolean)
                ? (n(!0),
                  (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)(R, { ...e }),
                    (0, o.createElement)(
                      'div',
                      { ...r },
                      (0, o.createElement)(
                        T.Disabled,
                        null,
                        S && (0, o.createElement)(A, null),
                        (0, o.createElement)(
                          'div',
                          { className: i()(`style-${t.displayStyle}`, { 'is-loading': g }) },
                          'dropdown' === t.displayStyle
                            ? (0, o.createElement)(
                                o.Fragment,
                                null,
                                (0, o.createElement)(q, {
                                  placeholder:
                                    'single' === t.selectType
                                      ? (0, c.__)('Select a rating', 'woocommerce')
                                      : (0, c.__)('Select ratings', 'woocommerce'),
                                }),
                              )
                            : (0, o.createElement)(O.CheckboxList, {
                                options: d,
                                checked: f,
                                onChange: () => {},
                                isLoading: g,
                                isDisabled: y,
                              }),
                        ),
                      ),
                    ),
                  ))
                : (n(!1), null)
            );
          }),
          L = JSON.parse(
            '{"name":"woocommerce/product-filter-rating","version":"1.0.0","title":"Product Filter: Rating (Beta)","description":"Enable customers to filter the product collection by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"interactivity":true,"inserter":false,"color":{"background":false,"text":true}},"ancestor":["woocommerce/product-filter"],"usesContext":["query","queryId"],"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        (0, n.registerBlockType)(L, {
          icon: {
            src: (0, o.createElement)(l.A, {
              icon: a.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...L.attributes },
          edit: M,
        });
      },
      8887: () => {},
      8923: () => {},
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
  function l(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, l), r.exports;
  }
  (l.m = o),
    (e = []),
    (l.O = (t, r, o, n) => {
      if (!r) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, n] = e[u], c = !0, s = 0; s < r.length; s++)
            (!1 & n || a >= n) && Object.keys(l.O).every(e => l.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((c = !1), n < a && (a = n));
          if (c) {
            e.splice(u--, 1);
            var i = o();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [r, o, n];
    }),
    (l.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return l.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (l.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      l.r(n);
      var a = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var c = 2 & o && e; 'object' == typeof c && !~t.indexOf(c); c = r(c))
        Object.getOwnPropertyNames(c).forEach(t => (a[t] = () => e[t]));
      return (a.default = () => e), l.d(n, a), n;
    }),
    (l.d = (e, t) => {
      for (var r in t)
        l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (l.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.j = 1631),
    (() => {
      var e = { 1631: 0 };
      l.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [a, c, s] = r,
            i = 0;
          if (a.some(t => 0 !== e[t])) {
            for (o in c) l.o(c, o) && (l.m[o] = c[o]);
            if (s) var u = s(l);
          }
          for (t && t(r); i < a.length; i++) (n = a[i]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return l.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var a = l.O(void 0, [94], () => l(3998));
  (a = l.O(a)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter-rating'] = a);
})();
