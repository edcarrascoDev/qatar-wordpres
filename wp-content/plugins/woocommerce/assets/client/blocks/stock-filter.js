(() => {
  var e,
    t,
    o,
    r = {
      5364: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const l = window.wp.blocks;
        var n = o(7104),
          s = o(885),
          c = o(9019),
          a = o.n(c);
        const i = window.wp.blockEditor;
        var u = o(7723),
          d = o(9491);
        o(4302);
        const m = (0, d.withInstanceId)(
            ({ className: e, headingLevel: t, onChange: o, heading: l, instanceId: n }) => {
              const s = `h${t}`;
              return (0, r.createElement)(
                s,
                { className: e },
                (0, r.createElement)(
                  'label',
                  { className: 'screen-reader-text', htmlFor: `block-title-${n}` },
                  (0, u.__)('Block title', 'woocommerce'),
                ),
                (0, r.createElement)(i.PlainText, {
                  id: `block-title-${n}`,
                  className: 'wc-block-editor-components-title',
                  value: l,
                  onChange: o,
                  style: { backgroundColor: 'transparent' },
                }),
              );
            },
          ),
          p = window.wp.components;
        var w = o(195),
          f = o(224),
          g = o(6087),
          b = o(923),
          h = o.n(b);
        function _(e) {
          const t = (0, g.useRef)(e);
          return h()(e, t.current) || (t.current = e), t.current;
        }
        const k = window.wc.wcBlocksData,
          v = window.wp.data,
          y = (0, g.createContext)('page'),
          E = () => (0, g.useContext)(y),
          S =
            (y.Provider,
            e => {
              const t = E();
              e = e || t;
              const o = (0, v.useSelect)(
                  t => t(k.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: r } = (0, v.useDispatch)(k.QUERY_STATE_STORE_KEY);
              return [
                o,
                (0, g.useCallback)(
                  t => {
                    r(e, t);
                  },
                  [e, r],
                ),
              ];
            }),
          C = (e, t, o) => {
            const r = E();
            o = o || r;
            const l = (0, v.useSelect)(
                r => r(k.QUERY_STATE_STORE_KEY).getValueForQueryKey(o, e, t),
                [o, e],
              ),
              { setQueryValue: n } = (0, v.useDispatch)(k.QUERY_STATE_STORE_KEY);
            return [
              l,
              (0, g.useCallback)(
                t => {
                  n(o, e, t);
                },
                [o, e, n],
              ),
            ];
          };
        var x = o(4717);
        const O = window.wc.wcTypes;
        var T = o(5574);
        const N = ({
            queryAttribute: e,
            queryPrices: t,
            queryStock: o,
            queryRating: r,
            queryState: l,
            isEditor: n = !1,
          }) => {
            let s = E();
            s = `${s}-collection-data`;
            const [c] = S(s),
              [a, i] = C('calculate_attribute_counts', [], s),
              [u, d] = C('calculate_price_range', null, s),
              [m, p] = C('calculate_stock_status_counts', null, s),
              [w, f] = C('calculate_rating_counts', null, s),
              b = _(e || {}),
              h = _(t),
              y = _(o),
              N = _(r);
            (0, g.useEffect)(() => {
              'object' == typeof b &&
                Object.keys(b).length &&
                (a.find(e => (0, O.objectHasProp)(b, 'taxonomy') && e.taxonomy === b.taxonomy) ||
                  i([...a, b]));
            }, [b, a, i]),
              (0, g.useEffect)(() => {
                u !== h && void 0 !== h && d(h);
              }, [h, d, u]),
              (0, g.useEffect)(() => {
                m !== y && void 0 !== y && p(y);
              }, [y, p, m]),
              (0, g.useEffect)(() => {
                w !== N && void 0 !== N && f(N);
              }, [N, f, w]);
            const [L, R] = (0, g.useState)(n),
              [P] = (0, x.d7)(L, 200);
            L || R(!0);
            const A = (0, g.useMemo)(
              () =>
                (e => {
                  const t = e;
                  return (
                    Array.isArray(e.calculate_attribute_counts) &&
                      (t.calculate_attribute_counts = (0, T.di)(
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
              const s = (0, g.useRef)({ results: [], isLoading: !0 }),
                c = _(l),
                a = _(r),
                i = (() => {
                  const [, e] = (0, g.useState)();
                  return (0, g.useCallback)(t => {
                    e(() => {
                      throw t;
                    });
                  }, []);
                })(),
                u = (0, v.useSelect)(
                  e => {
                    if (!n) return null;
                    const r = e(k.COLLECTIONS_STORE_KEY),
                      l = [t, o, c, a],
                      s = r.getCollectionError(...l);
                    if (s) {
                      if (!(0, O.isError)(s))
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
              query: { ...l, page: void 0, per_page: void 0, orderby: void 0, order: void 0, ...A },
              shouldSelect: P,
            });
          },
          L = window.wc.wcSettings,
          R = window.wc.blocksComponents;
        o(1504);
        const P = ({
          className: e,
          isLoading: t,
          disabled: o,
          /* translators: Submit button text for filters. */
          label: l = (0, u.__)('Apply', 'woocommerce'),
          onClick: n,
          screenReaderLabel: s = (0, u.__)('Apply filter', 'woocommerce'),
        }) =>
          (0, r.createElement)(
            'button',
            {
              type: 'submit',
              className: a()(
                'wp-block-button__link',
                'wc-block-filter-submit-button',
                'wc-block-components-filter-submit-button',
                { 'is-loading': t },
                e,
              ),
              disabled: o,
              onClick: n,
            },
            (0, r.createElement)(R.Label, { label: l, screenReaderLabel: s }),
          );
        o(8335);
        const A = ({
          className: e,
          /* translators: Reset button text for filters. */
          label: t = (0, u.__)('Reset', 'woocommerce'),
          onClick: o,
          screenReaderLabel: l = (0, u.__)('Reset filter', 'woocommerce'),
        }) =>
          (0, r.createElement)(
            'button',
            { className: a()('wc-block-components-filter-reset-button', e), onClick: o },
            (0, r.createElement)(R.Label, { label: t, screenReaderLabel: l }),
          );
        o(1626);
        const B = ({ children: e }) =>
          (0, r.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e);
        o(5400);
        const j = ({ name: e, count: t }) =>
          (0, r.createElement)(
            r.Fragment,
            null,
            e,
            null !== t &&
              Number.isFinite(t) &&
              (0, r.createElement)(R.Label, {
                label: t.toString(),
                screenReaderLabel: (0, u.sprintf) /* translators: %s number of products. */(
                  /* translators: %s number of products. */
                  (0, u._n)('%s product', '%s products', t, 'woocommerce'),
                  t,
                ),
                wrapperElement: 'span',
                wrapperProps: { className: 'wc-filter-element-label-list-count' },
              }),
          );
        var F = o(1331);
        o(243);
        const I = ({
            className: e,
            style: t,
            suggestions: o,
            multiple: l = !0,
            saveTransform: n = e => e.trim().replace(/\s/g, '-'),
            messages: s = {},
            validateInput: c = e => o.includes(e),
            label: i = '',
            ...u
          }) =>
            (0, r.createElement)(
              'div',
              {
                className: a()('wc-blocks-components-form-token-field-wrapper', e, {
                  'single-selection': !l,
                }),
                style: t,
              },
              (0, r.createElement)(F.A, {
                label: i,
                __experimentalExpandOnFocus: !0,
                __experimentalShowHowTo: !1,
                __experimentalValidateInput: c,
                saveTransform: n,
                maxLength: l ? void 0 : 1,
                suggestions: o,
                messages: s,
                ...u,
              }),
            ),
          q = window.wp.htmlEntities,
          M = window.wp.url,
          Q = (0, L.getSettingWithCoercion)('isRenderingPhpTemplate', !1, O.isBoolean);
        function D(e) {
          if (Q) {
            const t = new URL(e);
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
              t.searchParams.delete('paged'),
              t.searchParams.forEach((e, o) => {
                o.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(o);
              }),
              (window.location.href = t.href);
          } else window.history.replaceState({}, '', e);
        }
        const $ = e => {
            const t = (0, M.getQueryArgs)(e);
            return (0, M.addQueryArgs)(e, t);
          },
          Y = [
            {
              value: 'preview-1',
              name: 'In Stock',
              label: (0, r.createElement)(j, { name: 'In Stock', count: 3 }),
              textLabel: 'In Stock (3)',
            },
            {
              value: 'preview-2',
              name: 'Out of stock',
              label: (0, r.createElement)(j, { name: 'Out of stock', count: 3 }),
              textLabel: 'Out of stock (3)',
            },
            {
              value: 'preview-3',
              name: 'On backorder',
              label: (0, r.createElement)(j, { name: 'On backorder', count: 2 }),
              textLabel: 'On backorder (2)',
            },
          ];
        o(5837);
        function W() {
          return Math.floor(Math.random() * Date.now());
        }
        const U = e =>
            e
              .trim()
              .replace(/\s/g, '')
              .replace(/_/g, '-')
              .replace(/-+/g, '-')
              .replace(/[^a-zA-Z0-9-]/g, ''),
          V = (0, g.createContext)({}),
          G = 'filter_stock_status',
          K = ({ attributes: e, isEditor: t = !1 }) => {
            const o = (() => {
                const { wrapper: e } = (0, g.useContext)(V);
                return t => {
                  e && e.current && (e.current.hidden = !t);
                };
              })(),
              l = (0, L.getSettingWithCoercion)('isRenderingPhpTemplate', !1, O.isBoolean),
              [s, c] = (0, g.useState)(!1),
              { outofstock: i, ...d } = (0, L.getSetting)('stockStatusOptions', {}),
              m = (0, g.useRef)(
                (0, L.getSetting)('hideOutOfStockItems', !1) ? d : { outofstock: i, ...d },
              ),
              p = (0, g.useMemo)(
                () =>
                  ((e, t = 'filter_stock_status') => {
                    const o =
                      ((r = t), window ? (0, M.getQueryArg)(window.location.href, r) : null);
                    var r;
                    if (!o) return [];
                    const l = (0, O.isString)(o) ? o.split(',') : o,
                      n = Object.keys(e);
                    return l.filter(e => n.includes(e));
                  })(m.current, G),
                [],
              ),
              [b, k] = (0, g.useState)(p),
              [v, y] = (0, g.useState)(e.isPreview ? Y : []),
              [E] = (0, g.useState)(
                Object.entries(m.current)
                  .map(([e, t]) => ({ slug: e, name: t }))
                  .filter(e => !!e.name)
                  .sort((e, t) => e.slug.localeCompare(t.slug)),
              ),
              [x] = S(),
              [T, F] = C('stock_status', p),
              { results: Q, isLoading: K } = N({ queryStock: !0, queryState: x, isEditor: t }),
              H = (0, g.useCallback)(
                e =>
                  (0, O.objectHasProp)(Q, 'stock_status_counts') &&
                  Array.isArray(Q.stock_status_counts)
                    ? Q.stock_status_counts.find(
                        ({ status: t, count: o }) => t === e && 0 !== Number(o),
                      )
                    : null,
                [Q],
              ),
              [J, z] = (0, g.useState)(W());
            (0, g.useEffect)(() => {
              if (K || e.isPreview) return;
              const t = E.map(t => {
                const o = H(t.slug);
                if (
                  !(
                    o ||
                    b.includes(t.slug) ||
                    ((l = t.slug),
                    null != x &&
                      x.stock_status &&
                      x.stock_status.some(({ status: e = [] }) => e.includes(l)))
                  )
                )
                  return null;
                var l;
                const n = o ? Number(o.count) : 0;
                return {
                  value: t.slug,
                  name: (0, q.decodeEntities)(t.name),
                  label: (0, r.createElement)(j, {
                    name: (0, q.decodeEntities)(t.name),
                    count: e.showCounts ? n : null,
                  }),
                  textLabel: e.showCounts
                    ? `${(0, q.decodeEntities)(t.name)} (${n})`
                    : (0, q.decodeEntities)(t.name),
                };
              }).filter(e => !!e);
              y(t), z(W());
            }, [e.showCounts, e.isPreview, K, H, b, x.stock_status, E]);
            const Z = 'single' !== e.selectType,
              X = (0, g.useCallback)(
                e => {
                  t ||
                    (e && !l && F(e),
                    (e => {
                      if (!window) return;
                      if (0 === e.length) {
                        const e = (0, M.removeQueryArgs)(window.location.href, G);
                        return void (e !== $(window.location.href) && D(e));
                      }
                      const t = (0, M.addQueryArgs)(window.location.href, { [G]: e.join(',') });
                      t !== $(window.location.href) && D(t);
                    })(e));
                },
                [t, F, l],
              );
            (0, g.useEffect)(() => {
              e.showFilterButton || X(b);
            }, [e.showFilterButton, b, X]);
            const ee = _((0, g.useMemo)(() => T, [T])),
              te = (function(e, t) {
                const o = (0, g.useRef)();
                return (
                  (0, g.useEffect)(() => {
                    o.current === e || (o.current = e);
                  }, [e, t]),
                  o.current
                );
              })(ee);
            (0, g.useEffect)(() => {
              h()(te, ee) || h()(b, ee) || k(ee);
            }, [b, ee, te]),
              (0, g.useEffect)(() => {
                s || (F(p), c(!0));
              }, [F, s, c, p]);
            const oe = (0, g.useCallback)(
              e => {
                const t = e => {
                    const t = v.find(t => t.value === e);
                    return t ? t.name : null;
                  },
                  o = ({ filterAdded: e, filterRemoved: o }) => {
                    const r = e ? t(e) : null,
                      l = o ? t(o) : null;
                    r
                      ? (0, w.speak)(
                          (0,
                          u.sprintf) /* translators: %s stock statuses (for example: 'instock'...) */(
                            /* translators: %s stock statuses (for example: 'instock'...) */
                            (0, u.__)('%s filter added.', 'woocommerce'),
                            r,
                          ),
                        )
                      : l &&
                        (0, w.speak)(
                          (0,
                          u.sprintf) /* translators: %s stock statuses (for example:'instock'...) */(
                            /* translators: %s stock statuses (for example:'instock'...) */
                            (0, u.__)('%s filter removed.', 'woocommerce'),
                            l,
                          ),
                        );
                  },
                  r = b.includes(e);
                if (!Z) {
                  const t = r ? [] : [e];
                  return o(r ? { filterRemoved: e } : { filterAdded: e }), void k(t);
                }
                if (r) {
                  const t = b.filter(t => t !== e);
                  return o({ filterRemoved: e }), void k(t);
                }
                const l = [...b, e].sort();
                o({ filterAdded: e }), k(l);
              },
              [b, Z, v],
            );
            if (!K && 0 === v.length) return o(!1), null;
            const re = `h${e.headingLevel}`,
              le = (!e.isPreview && !m.current) || 0 === v.length,
              ne = !e.isPreview && K;
            if (!(0, L.getSettingWithCoercion)('hasFilterableProducts', !1, O.isBoolean))
              return o(!1), null;
            const se = Z ? !le && b.length < v.length : !le && 0 === b.length,
              ce = (0, r.createElement)(
                re,
                { className: 'wc-block-stock-filter__title' },
                e.heading,
              ),
              ae = le ? (0, r.createElement)(B, null, ce) : ce;
            return (
              o(!0),
              (0, r.createElement)(
                r.Fragment,
                null,
                !t && e.heading && ae,
                (0, r.createElement)(
                  'div',
                  {
                    className: a()('wc-block-stock-filter', `style-${e.displayStyle}`, {
                      'is-loading': le,
                    }),
                  },
                  'dropdown' === e.displayStyle
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(I, {
                          key: J,
                          className: a()({ 'single-selection': !Z, 'is-loading': le }),
                          suggestions: v.filter(e => !b.includes(e.value)).map(e => e.value),
                          disabled: le,
                          placeholder: (0, u.__)('Select stock status', 'woocommerce'),
                          onChange: e => {
                            !Z && e.length > 1 && (e = e.slice(-1));
                            const t = [
                              (e = e.map(e => {
                                const t = v.find(t => t.value === e);
                                return t ? t.value : e;
                              })),
                              b,
                            ].reduce((e, t) => e.filter(e => !t.includes(e)));
                            if (1 === t.length) return oe(t[0]);
                            const o = [b, e].reduce((e, t) => e.filter(e => !t.includes(e)));
                            1 === o.length && oe(o[0]);
                          },
                          value: b,
                          displayTransform: e => {
                            const t = v.find(t => t.value === e);
                            return t ? t.textLabel : e;
                          },
                          saveTransform: U,
                          messages: {
                            added: (0, u.__)('Stock filter added.', 'woocommerce'),
                            removed: (0, u.__)('Stock filter removed.', 'woocommerce'),
                            remove: (0, u.__)('Remove stock filter.', 'woocommerce'),
                            __experimentalInvalid: (0, u.__)(
                              'Invalid stock filter.',
                              'woocommerce',
                            ),
                          },
                        }),
                        se && (0, r.createElement)(n.A, { icon: f.A, size: 30 }),
                      )
                    : (0, r.createElement)(R.CheckboxList, {
                        className: 'wc-block-stock-filter-list',
                        options: v,
                        checked: b,
                        onChange: oe,
                        isLoading: le,
                        isDisabled: ne,
                      }),
                ),
                (0, r.createElement)(
                  'div',
                  { className: 'wc-block-stock-filter__actions' },
                  (b.length > 0 || t) &&
                    !le &&
                    (0, r.createElement)(A, {
                      onClick: () => {
                        k([]), X([]);
                      },
                      screenReaderLabel: (0, u.__)('Reset stock filter', 'woocommerce'),
                    }),
                  e.showFilterButton &&
                    (0, r.createElement)(P, {
                      className: 'wc-block-stock-filter__button',
                      isLoading: le,
                      disabled: le || ne,
                      onClick: () => X(b),
                    }),
                ),
              )
            );
          };
        o(5201);
        const H = ({ clientId: e, setAttributes: t, filterType: o, attributes: n }) => {
            const { replaceBlock: s } = (0, v.useDispatch)('core/block-editor'),
              { heading: c, headingLevel: a } = n;
            if (
              (0, v.useSelect)(
                t => {
                  const { getBlockParentsByBlockName: o } = t('core/block-editor');
                  return o(e, 'woocommerce/filter-wrapper').length > 0;
                },
                [e],
              ) ||
              !o
            )
              return null;
            const d = [
              (0, r.createElement)(
                p.Button,
                {
                  key: 'convert',
                  onClick: () => {
                    const r = [(0, l.createBlock)(`woocommerce/${o}`, { ...n, heading: '' })];
                    c &&
                      '' !== c &&
                      r.unshift(
                        (0, l.createBlock)('core/heading', {
                          content: c,
                          level: null != a ? a : 2,
                        }),
                      ),
                      s(
                        e,
                        (0, l.createBlock)(
                          'woocommerce/filter-wrapper',
                          { heading: c, filterType: o },
                          [...r],
                        ),
                      ),
                      t({ heading: '', lock: { remove: !0 } });
                  },
                  variant: 'primary',
                },
                (0, u.__)('Upgrade block', 'woocommerce'),
              ),
            ];
            return (0, r.createElement)(
              i.Warning,
              { actions: d },
              (0, u.__)(
                'Filter block: We have improved this block to make styling easier. Upgrade it using the button below.',
                'woocommerce',
              ),
            );
          },
          J = (0, p.withSpokenMessages)(({ clientId: e, attributes: t, setAttributes: o }) => {
            const {
                className: l,
                heading: n,
                headingLevel: s,
                showCounts: c,
                showFilterButton: d,
                selectType: w,
                displayStyle: f,
              } = t,
              g = (0, i.useBlockProps)({ className: a()('wc-block-stock-filter', l) });
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                i.InspectorControls,
                { key: 'inspector' },
                (0, r.createElement)(
                  p.PanelBody,
                  { title: (0, u.__)('Display Settings', 'woocommerce') },
                  (0, r.createElement)(p.ToggleControl, {
                    label: (0, u.__)('Display product count', 'woocommerce'),
                    checked: c,
                    onChange: () => o({ showCounts: !c }),
                  }),
                  (0, r.createElement)(
                    p.__experimentalToggleGroupControl,
                    {
                      label: (0, u.__)('Allow selecting multiple options?', 'woocommerce'),
                      value: w || 'multiple',
                      onChange: e => o({ selectType: e }),
                      className: 'wc-block-attribute-filter__multiple-toggle',
                    },
                    (0, r.createElement)(p.__experimentalToggleGroupControlOption, {
                      value: 'multiple',
                      label: (0, u._x)('Multiple', 'Number of filters', 'woocommerce'),
                    }),
                    (0, r.createElement)(p.__experimentalToggleGroupControlOption, {
                      value: 'single',
                      label: (0, u._x)('Single', 'Number of filters', 'woocommerce'),
                    }),
                  ),
                  (0, r.createElement)(
                    p.__experimentalToggleGroupControl,
                    {
                      label: (0, u.__)('Display Style', 'woocommerce'),
                      value: f,
                      onChange: e => o({ displayStyle: e }),
                      className: 'wc-block-attribute-filter__display-toggle',
                    },
                    (0, r.createElement)(p.__experimentalToggleGroupControlOption, {
                      value: 'list',
                      label: (0, u.__)('List', 'woocommerce'),
                    }),
                    (0, r.createElement)(p.__experimentalToggleGroupControlOption, {
                      value: 'dropdown',
                      label: (0, u.__)('Dropdown', 'woocommerce'),
                    }),
                  ),
                  (0, r.createElement)(p.ToggleControl, {
                    label: (0, u.__)("Show 'Apply filters' button", 'woocommerce'),
                    help: (0, u.__)(
                      'Products will update when the button is clicked.',
                      'woocommerce',
                    ),
                    checked: d,
                    onChange: e => o({ showFilterButton: e }),
                  }),
                ),
              ),
              (0, r.createElement)(H, {
                clientId: e,
                attributes: t,
                setAttributes: o,
                filterType: 'stock-filter',
              }),
              (0, r.createElement)(
                'div',
                { ...g },
                n &&
                  (0, r.createElement)(m, {
                    className: 'wc-block-stock-filter__title',
                    headingLevel: s,
                    heading: n,
                    onChange: e => o({ heading: e }),
                  }),
                (0, r.createElement)(
                  p.Disabled,
                  null,
                  (0, r.createElement)(K, { attributes: t, isEditor: !0 }),
                ),
              ),
            );
          }),
          z = JSON.parse(
            '{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          Z = {
            heading: {
              type: 'string',
              default: (0, u.__)('Filter by stock status', 'woocommerce'),
            },
          },
          X = [
            {
              attributes: { ...z.attributes, showCounts: { type: 'boolean', default: !0 }, ...Z },
              save: ({ attributes: e }) => {
                const {
                    className: t,
                    showCounts: o,
                    heading: l,
                    headingLevel: n,
                    showFilterButton: s,
                  } = e,
                  c = { 'data-show-counts': o, 'data-heading': l, 'data-heading-level': n };
                return (
                  s && (c['data-show-filter-button'] = s),
                  (0, r.createElement)(
                    'div',
                    { ...i.useBlockProps.save({ className: a()('is-loading', t) }), ...c },
                    (0, r.createElement)('span', {
                      'aria-hidden': !0,
                      className: 'wc-block-product-stock-filter__placeholder',
                    }),
                  )
                );
              },
            },
          ];
        (0, l.registerBlockType)(z, {
          icon: {
            src: (0, r.createElement)(n.A, {
              icon: s.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...z.attributes, ...Z },
          edit: J,
          save({ attributes: e }) {
            const { className: t } = e;
            return (0, r.createElement)('div', {
              ...i.useBlockProps.save({ className: a()('is-loading', t) }),
            });
          },
          deprecated: X,
        });
      },
      5400: () => {},
      1626: () => {},
      8335: () => {},
      1504: () => {},
      243: () => {},
      5201: () => {},
      5837: () => {},
      4302: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      8468: e => {
        'use strict';
        e.exports = window.lodash;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      4040: e => {
        'use strict';
        e.exports = window.wp.deprecated;
      },
      8107: e => {
        'use strict';
        e.exports = window.wp.dom;
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
      8558: e => {
        'use strict';
        e.exports = window.wp.keycodes;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
      979: e => {
        'use strict';
        e.exports = window.wp.warning;
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
    (n.j = 5454),
    (() => {
      var e = { 5454: 0 };
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
  var s = n.O(void 0, [94], () => n(5364));
  (s = n.O(s)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['stock-filter'] = s);
})();
