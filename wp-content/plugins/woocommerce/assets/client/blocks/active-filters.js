(() => {
  var e,
    t,
    r,
    l = {
      7238: (e, t, r) => {
        'use strict';
        r.r(t);
        var l = r(1609);
        const a = window.wp.blocks;
        var n = r(5573);
        const o = (0, l.createElement)(
          n.SVG,
          { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
          (0, l.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
          (0, l.createElement)('path', {
            d:
              'M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
          }),
        );
        var i = r(7104),
          s = r(9019),
          c = r.n(s);
        const u = window.wp.blockEditor;
        var m = r(7723),
          p = r(9491);
        r(4302);
        const d = (0, p.withInstanceId)(
            ({ className: e, headingLevel: t, onChange: r, heading: a, instanceId: n }) => {
              const o = `h${t}`;
              return (0, l.createElement)(
                o,
                { className: e },
                (0, l.createElement)(
                  'label',
                  { className: 'screen-reader-text', htmlFor: `block-title-${n}` },
                  (0, m.__)('Block title', 'woocommerce'),
                ),
                (0, l.createElement)(u.PlainText, {
                  id: `block-title-${n}`,
                  className: 'wc-block-editor-components-title',
                  value: a,
                  onChange: r,
                  style: { backgroundColor: 'transparent' },
                }),
              );
            },
          ),
          w = window.wp.components,
          f = window.wc.wcBlocksData,
          b = window.wp.data;
        var g = r(6087),
          y = r(923),
          h = r.n(y);
        const _ = (0, g.createContext)('page'),
          v =
            (_.Provider,
            (e, t, r) => {
              const l = (0, g.useContext)(_);
              r = r || l;
              const a = (0, b.useSelect)(
                  l => l(f.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                  [r, e],
                ),
                { setQueryValue: n } = (0, b.useDispatch)(f.QUERY_STATE_STORE_KEY);
              return [
                a,
                (0, g.useCallback)(
                  t => {
                    n(r, e, t);
                  },
                  [r, e, n],
                ),
              ];
            }),
          k = window.wc.wcSettings,
          E = window.wc.blocksComponents,
          S = window.wc.wcTypes,
          C = window.wp.url,
          N = (0, k.getSettingWithCoercion)('isRenderingPhpTemplate', !1, S.isBoolean);
        function O(e) {
          if (N) {
            const t = new URL(e);
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
              t.searchParams.delete('paged'),
              t.searchParams.forEach((e, r) => {
                r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
              }),
              (window.location.href = t.href);
          } else window.history.replaceState({}, '', e);
        }
        r(1626);
        const x = ({ children: e }) =>
          (0, l.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e);
        r(910);
        const A = (0, k.getSetting)('attributes', []).reduce((e, t) => {
            const r =
              (l = t) && l.attribute_name
                ? {
                    id: parseInt(l.attribute_id, 10),
                    name: l.attribute_name,
                    taxonomy: 'pa_' + l.attribute_name,
                    label: l.attribute_label,
                    orderby: l.attribute_orderby,
                  }
                : null;
            var l;
            return r && r.id && e.push(r), e;
          }, []),
          j = window.wc.priceFormat;
        var L = r(8098);
        const P = (e, t) =>
            Number.isFinite(e) && Number.isFinite(t)
              ? (0, m.sprintf) /* translators: %1$s min price, %2$s max price */(
                  /* translators: %1$s min price, %2$s max price */
                  (0, m.__)('Between %1$s and %2$s', 'woocommerce'),
                  (0, j.formatPrice)(e),
                  (0, j.formatPrice)(t),
                )
              : Number.isFinite(e)
              ? (0, m.sprintf) /* translators: %s min price */(
                  /* translators: %s min price */
                  (0, m.__)('From %s', 'woocommerce'),
                  (0, j.formatPrice)(e),
                )
              : (0, m.sprintf) /* translators: %s max price */(
                  /* translators: %s max price */
                  (0, m.__)('Up to %s', 'woocommerce'),
                  (0, j.formatPrice)(t),
                ),
          T = ({
            type: e,
            name: t,
            prefix: r = '',
            removeCallback: a = () => null,
            showLabel: n = !0,
            displayStyle: o,
          }) => {
            const s = r ? (0, l.createElement)(l.Fragment, null, r, ' ', t) : t,
              c = (0,
              m.sprintf) /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */(
                /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
                (0, m.__)('Remove %s filter', 'woocommerce'),
                t,
              );
            return (0, l.createElement)(
              'li',
              { className: 'wc-block-active-filters__list-item', key: e + ':' + t },
              n &&
                (0, l.createElement)(
                  'span',
                  { className: 'wc-block-active-filters__list-item-type' },
                  e + ': ',
                ),
              'chips' === o
                ? (0, l.createElement)(E.RemovableChip, {
                    element: 'span',
                    text: s,
                    onRemove: a,
                    radius: 'large',
                    ariaLabel: c,
                  })
                : (0, l.createElement)(
                    'span',
                    { className: 'wc-block-active-filters__list-item-name' },
                    (0, l.createElement)(
                      'button',
                      { className: 'wc-block-active-filters__list-item-remove', onClick: a },
                      (0, l.createElement)(i.A, {
                        className: 'wc-block-components-chip__remove-icon',
                        icon: L.A,
                        size: 16,
                      }),
                      (0, l.createElement)(E.Label, { screenReaderLabel: c }),
                    ),
                    s,
                  ),
            );
          },
          B = (...e) => {
            if (!window) return;
            const t = window.location.href,
              r = (0, C.getQueryArgs)(t),
              l = (0, C.removeQueryArgs)(t, ...Object.keys(r));
            e.forEach(e => {
              if ('string' == typeof e) return delete r[e];
              if ('object' == typeof e) {
                const t = Object.keys(e)[0],
                  l = r[t].toString().split(',');
                r[t] = l.filter(r => r !== e[t]).join(',');
              }
            });
            const a = Object.fromEntries(Object.entries(r).filter(([, e]) => e));
            O((0, C.addQueryArgs)(l, a));
          },
          R = ['min_price', 'max_price', 'rating_filter', 'filter_', 'query_type_'],
          F = e => {
            let t = !1;
            for (let r = 0; R.length > r; r++) {
              const l = R[r];
              if (l === e.substring(0, l.length)) {
                t = !0;
                break;
              }
            }
            return t;
          };
        function Q(e) {
          const t = (0, g.useRef)(e);
          return h()(e, t.current) || (t.current = e), t.current;
        }
        const $ = window.wp.htmlEntities;
        var M = r(5574);
        const I = ({
            attributeObject: e,
            slugs: t = [],
            operator: r = 'in',
            displayStyle: a,
            isLoadingCallback: n,
          }) => {
            const { results: o, isLoading: i } = (e => {
                const {
                  namespace: t,
                  resourceName: r,
                  resourceValues: l = [],
                  query: a = {},
                  shouldSelect: n = !0,
                } = e;
                if (!t || !r)
                  throw new Error(
                    'The options object must have valid values for the namespace and the resource properties.',
                  );
                const o = (0, g.useRef)({ results: [], isLoading: !0 }),
                  i = Q(a),
                  s = Q(l),
                  c = (() => {
                    const [, e] = (0, g.useState)();
                    return (0, g.useCallback)(t => {
                      e(() => {
                        throw t;
                      });
                    }, []);
                  })(),
                  u = (0, b.useSelect)(
                    e => {
                      if (!n) return null;
                      const l = e(f.COLLECTIONS_STORE_KEY),
                        a = [t, r, i, s],
                        o = l.getCollectionError(...a);
                      if (o) {
                        if (!(0, S.isError)(o))
                          throw new Error(
                            'TypeError: `error` object is not an instance of Error constructor',
                          );
                        c(o);
                      }
                      return {
                        results: l.getCollection(...a),
                        isLoading: !l.hasFinishedResolution('getCollection', a),
                      };
                    },
                    [t, r, s, i, n],
                  );
                return null !== u && (o.current = u), o.current;
              })({
                namespace: '/wc/store/v1',
                resourceName: 'products/attributes/terms',
                resourceValues: [e.id],
              }),
              [s, c] = v('attributes', []);
            if (
              ((0, g.useEffect)(() => {
                n(i);
              }, [i, n]),
              !Array.isArray(o) ||
                !(0, S.isAttributeTermCollection)(o) ||
                !(0, S.isAttributeQueryCollection)(s))
            )
              return null;
            const u = e.label,
              p = (0, k.getSettingWithCoercion)('isRenderingPhpTemplate', !1, S.isBoolean);
            return (0, l.createElement)(
              'li',
              null,
              (0, l.createElement)(
                'span',
                { className: 'wc-block-active-filters__list-item-type' },
                u,
                ':',
              ),
              (0, l.createElement)(
                'ul',
                null,
                t.map((t, n) => {
                  const d = o.find(e => e.slug === t);
                  if (!d) return null;
                  let w = '';
                  return (
                    n > 0 &&
                      'and' === r &&
                      (w = (0, l.createElement)(
                        'span',
                        { className: 'wc-block-active-filters__list-item-operator' },
                        (0, m.__)('All', 'woocommerce'),
                      )),
                    T({
                      type: u,
                      name: (0, $.decodeEntities)(d.name || t),
                      prefix: w,
                      isLoading: i,
                      removeCallback: () => {
                        const r = s.find(({ attribute: t }) => t === `pa_${e.name}`);
                        1 === (null == r ? void 0 : r.slug.length)
                          ? B(`query_type_${e.name}`, `filter_${e.name}`)
                          : B({ [`filter_${e.name}`]: t }),
                          p ||
                            ((e = [], t, r, l = '') => {
                              const a = e.filter(e => e.attribute === r.taxonomy),
                                n = a.length ? a[0] : null;
                              if (!(n && n.slug && Array.isArray(n.slug) && n.slug.includes(l)))
                                return;
                              const o = n.slug.filter(e => e !== l),
                                i = e.filter(e => e.attribute !== r.taxonomy);
                              o.length > 0 && ((n.slug = o.sort()), i.push(n)),
                                t((0, M.di)(i).asc('attribute'));
                            })(s, c, e, t);
                      },
                      showLabel: !1,
                      displayStyle: a,
                    })
                  );
                }),
              ),
            );
          },
          W = ({ displayStyle: e, isLoading: t }) =>
            t
              ? (0, l.createElement)(
                  l.Fragment,
                  null,
                  [...Array('list' === e ? 2 : 3)].map((t, r) =>
                    (0, l.createElement)(
                      'li',
                      {
                        className:
                          'list' === e ? 'show-loading-state-list' : 'show-loading-state-chips',
                        key: r,
                      },
                      (0, l.createElement)('span', { className: 'show-loading-state__inner' }),
                    ),
                  ),
                )
              : null,
          D = (0, g.createContext)({}),
          V = ({ attributes: e, isEditor: t = !1 }) => {
            const r = (() => {
                const { wrapper: e } = (0, g.useContext)(D);
                return t => {
                  e && e.current && (e.current.hidden = !t);
                };
              })(),
              a = (function() {
                const e = (0, g.useRef)(!1);
                return (
                  (0, g.useEffect)(
                    () => (
                      (e.current = !0),
                      () => {
                        e.current = !1;
                      }
                    ),
                    [],
                  ),
                  (0, g.useCallback)(() => e.current, [])
                );
              })()(),
              n = (0, k.getSettingWithCoercion)('isRenderingPhpTemplate', !1, S.isBoolean),
              [o, i] = (0, g.useState)(!0),
              s =
                (() => {
                  if (!window) return !1;
                  const e = window.location.href,
                    t = (0, C.getQueryArgs)(e),
                    r = Object.keys(t);
                  let l = !1;
                  for (let e = 0; r.length > e; e++) {
                    const t = r[e];
                    if (F(t)) {
                      l = !0;
                      break;
                    }
                  }
                  return l;
                })() &&
                !t &&
                o,
              [u, p] = v('attributes', []),
              [d, w] = v('stock_status', []),
              [f, b] = v('min_price'),
              [y, h] = v('max_price'),
              [_, N] = v('rating'),
              j = (0, k.getSetting)('stockStatusOptions', []),
              L = (0, k.getSetting)('attributes', []),
              R = (0, g.useMemo)(() => {
                if (
                  s ||
                  0 === d.length ||
                  !(0, S.isStockStatusQueryCollection)(d) ||
                  !(0, S.isStockStatusOptions)(j)
                )
                  return null;
                const t = (0, m.__)('Stock Status', 'woocommerce');
                return (0, l.createElement)(
                  'li',
                  null,
                  (0, l.createElement)(
                    'span',
                    { className: 'wc-block-active-filters__list-item-type' },
                    t,
                    ':',
                  ),
                  (0, l.createElement)(
                    'ul',
                    null,
                    d.map(r =>
                      T({
                        type: t,
                        name: j[r],
                        removeCallback: () => {
                          if ((B({ filter_stock_status: r }), !n)) {
                            const e = d.filter(e => e !== r);
                            w(e);
                          }
                        },
                        showLabel: !1,
                        displayStyle: e.displayStyle,
                      }),
                    ),
                  ),
                );
              }, [s, j, d, w, e.displayStyle, n]),
              Q = (0, g.useMemo)(
                () =>
                  s || (!Number.isFinite(f) && !Number.isFinite(y))
                    ? null
                    : T({
                        type: (0, m.__)('Price', 'woocommerce'),
                        name: P(f, y),
                        removeCallback: () => {
                          B('max_price', 'min_price'), n || (b(void 0), h(void 0));
                        },
                        displayStyle: e.displayStyle,
                      }),
                [s, f, y, e.displayStyle, b, h, n],
              ),
              $ = (0, g.useMemo)(
                () =>
                  (!(0, S.isAttributeQueryCollection)(u) && a) ||
                  (!u.length &&
                    !(e => {
                      if (!window) return !1;
                      const t = e.map(e => `filter_${e.attribute_name}`),
                        r = window.location.href,
                        l = (0, C.getQueryArgs)(r),
                        a = Object.keys(l);
                      let n = !1;
                      for (let e = 0; a.length > e; e++) {
                        const r = a[e];
                        if (t.includes(r)) {
                          n = !0;
                          break;
                        }
                      }
                      return n;
                    })(L))
                    ? (o && i(!1), null)
                    : u.map(t => {
                        const r = (e => {
                          if (e) return A.find(t => t.taxonomy === e);
                        })(t.attribute);
                        return r
                          ? (0, l.createElement)(I, {
                              attributeObject: r,
                              displayStyle: e.displayStyle,
                              slugs: t.slug,
                              key: t.attribute,
                              operator: t.operator,
                              isLoadingCallback: i,
                            })
                          : (o && i(!1), null);
                      }),
                [u, a, L, o, e.displayStyle],
              );
            (0, g.useEffect)(() => {
              var e;
              if (!n) return;
              if (_.length && _.length > 0) return;
              const t =
                null ===
                  ('rating_filter',
                  (e = window
                    ? (0, C.getQueryArg)(window.location.href, 'rating_filter')
                    : null)) || void 0 === e
                  ? void 0
                  : e.toString();
              t && N(t.split(','));
            }, [n, _, N]);
            const M = (0, g.useMemo)(() => {
              if (s || 0 === _.length || !(0, S.isRatingQueryCollection)(_)) return null;
              const t = (0, m.__)('Rating', 'woocommerce');
              return (0, l.createElement)(
                'li',
                null,
                (0, l.createElement)(
                  'span',
                  { className: 'wc-block-active-filters__list-item-type' },
                  t,
                  ':',
                ),
                (0, l.createElement)(
                  'ul',
                  null,
                  _.map(r =>
                    T({
                      type: t,
                      name: (0,
                      m.sprintf) /* translators: %s is referring to the average rating value */(
                        /* translators: %s is referring to the average rating value */
                        (0, m.__)('Rated %s out of 5', 'woocommerce'),
                        r,
                      ),
                      removeCallback: () => {
                        if ((B({ rating_filter: r }), !n)) {
                          const e = _.filter(e => e !== r);
                          N(e);
                        }
                      },
                      showLabel: !1,
                      displayStyle: e.displayStyle,
                    }),
                  ),
                ),
              );
            }, [s, _, N, e.displayStyle, n]);
            if (
              !s &&
              !(
                u.length > 0 ||
                d.length > 0 ||
                _.length > 0 ||
                Number.isFinite(f) ||
                Number.isFinite(y)
              ) &&
              !t
            )
              return r(!1), null;
            const V = `h${e.headingLevel}`,
              z = (0, l.createElement)(
                V,
                { className: 'wc-block-active-filters__title' },
                e.heading,
              ),
              U = s ? (0, l.createElement)(x, null, z) : z;
            if (!(0, k.getSettingWithCoercion)('hasFilterableProducts', !1, S.isBoolean))
              return r(!1), null;
            r(!0);
            const q = c()('wc-block-active-filters__list', {
              'wc-block-active-filters__list--chips': 'chips' === e.displayStyle,
              'wc-block-active-filters--loading': s,
            });
            return (0, l.createElement)(
              l.Fragment,
              null,
              !t && e.heading && U,
              (0, l.createElement)(
                'div',
                { className: 'wc-block-active-filters' },
                (0, l.createElement)(
                  'ul',
                  { className: q },
                  t
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        T({
                          type: (0, m.__)('Size', 'woocommerce'),
                          name: (0, m.__)('Small', 'woocommerce'),
                          displayStyle: e.displayStyle,
                        }),
                        T({
                          type: (0, m.__)('Color', 'woocommerce'),
                          name: (0, m.__)('Blue', 'woocommerce'),
                          displayStyle: e.displayStyle,
                        }),
                      )
                    : (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)(W, { isLoading: s, displayStyle: e.displayStyle }),
                        Q,
                        R,
                        $,
                        M,
                      ),
                ),
                s
                  ? (0, l.createElement)('span', {
                      className: 'wc-block-active-filters__clear-all-placeholder',
                    })
                  : (0, l.createElement)(
                      'button',
                      {
                        className: 'wc-block-active-filters__clear-all',
                        onClick: () => {
                          (() => {
                            if (!window) return;
                            const e = window.location.href,
                              t = (0, C.getQueryArgs)(e),
                              r = (0, C.removeQueryArgs)(e, ...Object.keys(t)),
                              l = Object.fromEntries(
                                Object.keys(t)
                                  .filter(e => !F(e))
                                  .map(e => [e, t[e]]),
                              );
                            O((0, C.addQueryArgs)(r, l));
                          })(),
                            n || (b(void 0), h(void 0), p([]), w([]), N([]));
                        },
                      },
                      (0, l.createElement)(E.Label, {
                        label: (0, m.__)('Clear All', 'woocommerce'),
                        screenReaderLabel: (0, m.__)('Clear All Filters', 'woocommerce'),
                      }),
                    ),
              ),
            );
          };
        r(8236);
        const z = ({ clientId: e, setAttributes: t, filterType: r, attributes: n }) => {
            const { replaceBlock: o } = (0, b.useDispatch)('core/block-editor'),
              { heading: i, headingLevel: s } = n;
            if (
              (0, b.useSelect)(
                t => {
                  const { getBlockParentsByBlockName: r } = t('core/block-editor');
                  return r(e, 'woocommerce/filter-wrapper').length > 0;
                },
                [e],
              ) ||
              !r
            )
              return null;
            const c = [
              (0, l.createElement)(
                w.Button,
                {
                  key: 'convert',
                  onClick: () => {
                    const l = [(0, a.createBlock)(`woocommerce/${r}`, { ...n, heading: '' })];
                    i &&
                      '' !== i &&
                      l.unshift(
                        (0, a.createBlock)('core/heading', {
                          content: i,
                          level: null != s ? s : 2,
                        }),
                      ),
                      o(
                        e,
                        (0, a.createBlock)(
                          'woocommerce/filter-wrapper',
                          { heading: i, filterType: r },
                          [...l],
                        ),
                      ),
                      t({ heading: '', lock: { remove: !0 } });
                  },
                  variant: 'primary',
                },
                (0, m.__)('Upgrade block', 'woocommerce'),
              ),
            ];
            return (0, l.createElement)(
              u.Warning,
              { actions: c },
              (0, m.__)(
                'Filter block: We have improved this block to make styling easier. Upgrade it using the button below.',
                'woocommerce',
              ),
            );
          },
          U = (0, w.withSpokenMessages)(({ attributes: e, setAttributes: t, clientId: r }) => {
            const { className: a, displayStyle: n, heading: o, headingLevel: i } = e,
              s = (0, u.useBlockProps)({ className: a });
            return (0, l.createElement)(
              'div',
              { ...s },
              (0, l.createElement)(
                u.InspectorControls,
                { key: 'inspector' },
                (0, l.createElement)(
                  w.PanelBody,
                  { title: (0, m.__)('Display Settings', 'woocommerce') },
                  (0, l.createElement)(
                    w.__experimentalToggleGroupControl,
                    {
                      label: (0, m.__)('Display Style', 'woocommerce'),
                      value: n,
                      onChange: e => t({ displayStyle: e }),
                      className: 'wc-block-active-filter__style-toggle',
                    },
                    (0, l.createElement)(w.__experimentalToggleGroupControlOption, {
                      value: 'list',
                      label: (0, m.__)('List', 'woocommerce'),
                    }),
                    (0, l.createElement)(w.__experimentalToggleGroupControlOption, {
                      value: 'chips',
                      label: (0, m.__)('Chips', 'woocommerce'),
                    }),
                  ),
                ),
              ),
              (0, l.createElement)(z, {
                attributes: e,
                clientId: r,
                setAttributes: t,
                filterType: 'active-filters',
              }),
              o &&
                (0, l.createElement)(d, {
                  className: 'wc-block-active-filters__title',
                  headingLevel: i,
                  heading: o,
                  onChange: e => t({ heading: e }),
                }),
              (0, l.createElement)(
                w.Disabled,
                null,
                (0, l.createElement)(V, { attributes: e, isEditor: !0 }),
              ),
            );
          }),
          q = JSON.parse(
            '{"name":"woocommerce/active-filters","version":"1.0.0","title":"Active Filters Controls","description":"Display the currently active filters.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"inserter":false,"color":{"text":true,"background":false},"lock":false},"attributes":{"displayStyle":{"type":"string","default":"list"},"headingLevel":{"type":"number","default":3}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          G = { heading: { type: 'string', default: (0, m.__)('Active filters', 'woocommerce') } },
          Y = [
            {
              attributes: { ...q.attributes, ...G },
              save: ({ attributes: e }) => {
                const { className: t, displayStyle: r, heading: a, headingLevel: n } = e,
                  o = { 'data-display-style': r, 'data-heading': a, 'data-heading-level': n };
                return (0, l.createElement)(
                  'div',
                  { ...u.useBlockProps.save({ className: c()('is-loading', t) }), ...o },
                  (0, l.createElement)('span', {
                    'aria-hidden': !0,
                    className: 'wc-block-active-filters__placeholder',
                  }),
                );
              },
            },
          ];
        (0, a.registerBlockType)(q, {
          icon: {
            src: (0, l.createElement)(i.A, {
              icon: o,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...q.attributes, ...G },
          edit: U,
          save({ attributes: e }) {
            const { className: t } = e;
            return (0, l.createElement)(
              'div',
              { ...u.useBlockProps.save({ className: c()('is-loading', t) }) },
              (0, l.createElement)('span', {
                'aria-hidden': !0,
                className: 'wc-block-active-filters__placeholder',
              }),
            );
          },
          deprecated: Y,
        });
      },
      1626: () => {},
      8236: () => {},
      910: () => {},
      4302: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
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
    a = {};
  function n(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return l[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = l),
    (e = []),
    (n.O = (t, r, l, a) => {
      if (!r) {
        var o = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, l, a] = e[u], i = !0, s = 0; s < r.length; s++)
            (!1 & a || o >= a) && Object.keys(n.O).every(e => n.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((i = !1), a < o && (o = a));
          if (i) {
            e.splice(u--, 1);
            var c = l();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
      e[u] = [r, l, a];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, l) {
      if ((1 & l && (e = this(e)), 8 & l)) return e;
      if ('object' == typeof e && e) {
        if (4 & l && e.__esModule) return e;
        if (16 & l && 'function' == typeof e.then) return e;
      }
      var a = Object.create(null);
      n.r(a);
      var o = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var i = 2 & l && e; 'object' == typeof i && !~t.indexOf(i); i = r(i))
        Object.getOwnPropertyNames(i).forEach(t => (o[t] = () => e[t]));
      return (o.default = () => e), n.d(a, o), a;
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
    (n.j = 2507),
    (() => {
      var e = { 2507: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var l,
            a,
            [o, i, s] = r,
            c = 0;
          if (o.some(t => 0 !== e[t])) {
            for (l in i) n.o(i, l) && (n.m[l] = i[l]);
            if (s) var u = s(n);
          }
          for (t && t(r); c < o.length; c++) (a = o[c]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = n.O(void 0, [94], () => n(7238));
  (o = n.O(o)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['active-filters'] = o);
})();
