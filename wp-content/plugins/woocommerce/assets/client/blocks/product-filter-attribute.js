(() => {
  var e,
    t,
    r,
    o = {
      5763: (e, t, r) => {
        'use strict';
        r.r(t);
        const o = window.wp.blocks,
          n = window.wc.wcSettings;
        var l, a, c, s, i, u, m, d, p, b;
        const _ = (0, n.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          g = (_.pluginUrl, _.pluginUrl, _.buildPhase),
          E =
            (null === (l = n.STORE_PAGES.shop) || void 0 === l || l.permalink,
            null === (a = n.STORE_PAGES.checkout) || void 0 === a || a.id,
            null === (c = n.STORE_PAGES.checkout) || void 0 === c || c.permalink,
            null === (s = n.STORE_PAGES.privacy) || void 0 === s || s.permalink,
            null === (i = n.STORE_PAGES.privacy) || void 0 === i || i.title,
            null === (u = n.STORE_PAGES.terms) || void 0 === u || u.permalink,
            null === (m = n.STORE_PAGES.terms) || void 0 === m || m.title,
            null === (d = n.STORE_PAGES.cart) || void 0 === d || d.id,
            null === (p = n.STORE_PAGES.cart) || void 0 === p || p.permalink,
            null !== (b = n.STORE_PAGES.myaccount) && void 0 !== b && b.permalink
              ? n.STORE_PAGES.myaccount.permalink
              : (0, n.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, n.getSetting)('localPickupEnabled', !1),
            (0, n.getSetting)('countries', {})),
          w = (0, n.getSetting)('countryData', {}),
          h =
            (Object.fromEntries(
              Object.keys(w)
                .filter(e => !0 === w[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(w)
                .filter(e => !0 === w[e].allowBilling)
                .map(e => [e, w[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(w)
                .filter(e => !0 === w[e].allowShipping)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(w)
                .filter(e => !0 === w[e].allowShipping)
                .map(e => [e, w[e].states || []]),
            ),
            Object.fromEntries(Object.keys(w).map(e => [e, w[e].locale || []])),
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
        (0, n.getSetting)('addressFieldsLocations', h).address,
          (0, n.getSetting)('addressFieldsLocations', h).contact,
          (0, n.getSetting)('addressFieldsLocations', h).order,
          (0, n.getSetting)('additionalOrderFields', {}),
          (0, n.getSetting)('additionalContactFields', {}),
          (0, n.getSetting)('additionalAddressFields', {}),
          r(9642);
        const y = JSON.parse(
          '{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-attribute","version":"1.0.0","title":"Product Filter: Attribute (Beta)","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":2,"ancestor":["woocommerce/product-filter"],"supports":{"interactivity":true,"inserter":false,"color":{"text":true,"background":false}},"usesContext":["query","queryId"],"attributes":{"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":false},"queryType":{"type":"string","default":"or"},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}}}',
        );
        var f = r(1609),
          v = r(7723),
          S = r(6087);
        const k = window.wp.blockEditor,
          C = window.wc.wcBlocksData,
          x = window.wp.data;
        var T = r(923),
          O = r.n(T);
        function N(e) {
          const t = (0, S.useRef)(e);
          return O()(e, t.current) || (t.current = e), t.current;
        }
        const A = window.wc.wcTypes,
          P = e => {
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
            const a = (0, S.useRef)({ results: [], isLoading: !0 }),
              c = N(n),
              s = N(o),
              i = (() => {
                const [, e] = (0, S.useState)();
                return (0, S.useCallback)(t => {
                  e(() => {
                    throw t;
                  });
                }, []);
              })(),
              u = (0, x.useSelect)(
                e => {
                  if (!l) return null;
                  const o = e(C.COLLECTIONS_STORE_KEY),
                    n = [t, r, c, s],
                    a = o.getCollectionError(...n);
                  if (a) {
                    if (!(0, A.isError)(a))
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
          };
        var I = r(4717),
          R = r(5574);
        const j = (0, S.createContext)('page'),
          F = () => (0, S.useContext)(j),
          G =
            (j.Provider,
            e => {
              const t = F();
              e = e || t;
              const r = (0, x.useSelect)(
                  t => t(C.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: o } = (0, x.useDispatch)(C.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, S.useCallback)(
                  t => {
                    o(e, t);
                  },
                  [e, o],
                ),
              ];
            }),
          L = (e, t, r) => {
            const o = F();
            r = r || o;
            const n = (0, x.useSelect)(
                o => o(C.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: l } = (0, x.useDispatch)(C.QUERY_STATE_STORE_KEY);
            return [
              n,
              (0, S.useCallback)(
                t => {
                  l(r, e, t);
                },
                [r, e, l],
              ),
            ];
          },
          q = window.wp.components;
        var B = r(7104),
          D = r(6378),
          M = r(4133);
        const Y = ({ children: e }) =>
            (0, f.createElement)(
              q.Placeholder,
              {
                className: 'wc-block-attribute-filter',
                icon: (0, f.createElement)(B.A, { icon: D.A }),
                label: (0, v.__)('Filter by Attribute', 'woocommerce'),
                instructions: (0, v.__)(
                  'Enable customers to filter the product grid by selecting one or more attributes, such as color.',
                  'woocommerce',
                ),
              },
              e,
            ),
          $ = () =>
            (0, f.createElement)(
              Y,
              null,
              (0, f.createElement)(
                'p',
                null,
                (0, v.__)(
                  "Attributes are needed for filtering your products. You haven't created any attributes yet.",
                  'woocommerce',
                ),
              ),
              (0, f.createElement)(
                q.Button,
                {
                  className: 'wc-block-attribute-filter__add-attribute-button',
                  variant: 'secondary',
                  href: (0, n.getAdminLink)('edit.php?post_type=product&page=product_attributes'),
                  target: '_top',
                },
                (0, v.__)('Add new attribute', 'woocommerce') + ' ',
                (0, f.createElement)(B.A, { icon: M.A }),
              ),
              (0, f.createElement)(
                q.Button,
                {
                  className: 'wc-block-attribute-filter__read_more_button',
                  variant: 'tertiary',
                  href: 'https://woocommerce.com/document/managing-product-taxonomies/',
                  target: '_blank',
                },
                (0, v.__)('Learn more', 'woocommerce'),
              ),
            );
        var Q = r(2478),
          U = r(9019),
          V = r.n(U),
          K = r(9491);
        const H = {
            clear: (0, v.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, v.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, v.__)('No results for %s', 'woocommerce'),
            search: (0, v.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, v.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, v._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, v.__)('Search results updated.', 'woocommerce'),
          },
          z = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              o = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const n = ['0'],
              l = (e = {}) => (e.parent ? [...l(o[e.parent]), e.name] : e.name ? [e.name] : []),
              a = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    n.push('' + e.id),
                    { ...e, breadcrumbs: l(o[e.parent]), children: t && t.length ? a(t) : [] }
                  );
                }),
              c = a(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                n.includes(e) || c.push(...a(t || []));
              }),
              c
            );
          },
          J = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, f.createElement)('strong', { key: t }, e)
                  : (0, f.createElement)(S.Fragment, { key: t }, e),
              );
          };
        function W(e, t, r) {
          const o = new Set(t.map(e => e[r]));
          return e.filter(e => !o.has(e[r]));
        }
        const X = window.wp.htmlEntities,
          Z = ({ label: e }) =>
            (0, f.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          ee = e => {
            const { item: t, search: r } = e,
              o = t.breadcrumbs && t.breadcrumbs.length;
            return (0, f.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              o
                ? (0, f.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (n = t.breadcrumbs).length
                      ? n.slice(0, 1).toString()
                      : 2 === n.length
                      ? n.slice(0, 1).toString() + ' › ' + n.slice(-1).toString()
                      : n.slice(0, 1).toString() + ' … ' + n.slice(-1).toString(),
                  )
                : null,
              (0, f.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                J((0, X.decodeEntities)(t.name), r),
              ),
            );
            var n;
          },
          te = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: o = '',
            item: n,
            isSelected: l,
            isSingle: a,
            onSelect: c,
            search: s = '',
            selected: i,
            useExpandedPanelId: u,
            ...m
          }) => {
            var d, p;
            const [b, _] = u,
              g = null != e && void 0 !== n.count && null !== n.count,
              E = !(null === (d = n.breadcrumbs) || void 0 === d || !d.length),
              w = !(null === (p = n.children) || void 0 === p || !p.length),
              h = b === n.id,
              y = V()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': E,
                'has-children': w,
                'has-count': g,
                'is-expanded': h,
                'is-radio-button': a,
              }),
              v = m.name || `search-list-item-${o}`,
              k = `${v}-${n.id}`,
              C = (0, S.useCallback)(() => {
                _(h ? -1 : Number(n.id));
              }, [h, n.id, _]);
            return w
              ? (0, f.createElement)(
                  'div',
                  {
                    className: y,
                    onClick: C,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? C() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  a
                    ? (0, f.createElement)(
                        f.Fragment,
                        null,
                        (0, f.createElement)('input', {
                          type: 'radio',
                          id: k,
                          name: v,
                          value: n.value,
                          onChange: c(n),
                          onClick: e => e.stopPropagation(),
                          checked: l,
                          className: 'woocommerce-search-list__item-input',
                          ...m,
                        }),
                        (0, f.createElement)(ee, { item: n, search: s }),
                        g ? (0, f.createElement)(Z, { label: e || n.count }) : null,
                      )
                    : (0, f.createElement)(
                        f.Fragment,
                        null,
                        (0, f.createElement)(q.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: l,
                          ...(!l && n.children.some(e => i.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: J((0, X.decodeEntities)(n.name), s),
                          onChange: () => {
                            l
                              ? c(W(i, n.children, 'id'))()
                              : c(
                                  (function(e, t, r) {
                                    const o = W(t, e, 'id');
                                    return [...e, ...o];
                                  })(i, n.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        g ? (0, f.createElement)(Z, { label: e || n.count }) : null,
                      ),
                )
              : (0, f.createElement)(
                  'label',
                  { htmlFor: k, className: y },
                  a
                    ? (0, f.createElement)(
                        f.Fragment,
                        null,
                        (0, f.createElement)('input', {
                          ...m,
                          type: 'radio',
                          id: k,
                          name: v,
                          value: n.value,
                          onChange: c(n),
                          checked: l,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, f.createElement)(ee, { item: n, search: s }),
                      )
                    : (0, f.createElement)(q.CheckboxControl, {
                        ...m,
                        id: k,
                        name: v,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, X.decodeEntities)(n.value),
                        label: J((0, X.decodeEntities)(n.name), s),
                        onChange: c(n),
                        checked: l,
                      }),
                  g ? (0, f.createElement)(Z, { label: e || n.count }) : null,
                );
          };
        var re = r(2370);
        r(6636);
        const oe = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: o,
            screenReaderLabel: n,
            className: l = '',
          }) => {
            const [a, c] = (0, S.useState)(!1),
              s = (0, K.useInstanceId)(oe);
            if (((n = n || t), !t)) return null;
            t = (0, X.decodeEntities)(t);
            const i = V()('woocommerce-tag', l, { 'has-remove': !!o }),
              u = `woocommerce-tag__label-${s}`,
              m = (0, f.createElement)(
                f.Fragment,
                null,
                (0, f.createElement)('span', { className: 'screen-reader-text' }, n),
                (0, f.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, f.createElement)(
              'span',
              { className: i },
              r
                ? (0, f.createElement)(
                    q.Button,
                    { className: 'woocommerce-tag__text', id: u, onClick: () => c(!0) },
                    m,
                  )
                : (0, f.createElement)('span', { className: 'woocommerce-tag__text', id: u }, m),
              r && a && (0, f.createElement)(q.Popover, { onClose: () => c(!1) }, r),
              o &&
                (0, f.createElement)(
                  q.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: o(e),
                    label: (0, v.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, v.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': u,
                  },
                  (0, f.createElement)(B.A, {
                    icon: re.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          ne = oe;
        r(8137);
        const le = e => (0, f.createElement)(te, { ...e }),
          ae = e => {
            const {
                list: t,
                selected: r,
                renderItem: o,
                depth: n = 0,
                onSelect: l,
                instanceId: a,
                isSingle: c,
                search: s,
                useExpandedPanelId: i,
              } = e,
              [u] = i;
            return t
              ? (0, f.createElement)(
                  S.Fragment,
                  null,
                  t.map(t => {
                    var m, d;
                    const p =
                        null !== (m = t.children) && void 0 !== m && m.length && !c
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      b =
                        (null === (d = t.children) || void 0 === d ? void 0 : d.length) &&
                        u === t.id;
                    return (0, f.createElement)(
                      S.Fragment,
                      { key: t.id },
                      (0, f.createElement)(
                        'li',
                        null,
                        o({
                          item: t,
                          isSelected: p,
                          onSelect: l,
                          isSingle: c,
                          selected: r,
                          search: s,
                          depth: n,
                          useExpandedPanelId: i,
                          controlId: a,
                        }),
                      ),
                      b ? (0, f.createElement)(ae, { ...e, list: t.children, depth: n + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          ce = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: o,
            onChange: n,
            onRemove: l,
          }) => {
            if (e || t || !r) return null;
            const a = r.length;
            return (0, f.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, f.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, f.createElement)('strong', null, o.selected(a)),
                a > 0
                  ? (0, f.createElement)(
                      q.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => n([]),
                        'aria-label': o.clear,
                      },
                      (0, v.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              a > 0
                ? (0, f.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, f.createElement)(
                        'li',
                        { key: t },
                        (0, f.createElement)(ne, { label: e.name, id: e.id, remove: l }),
                      ),
                    ),
                  )
                : null,
            );
          },
          se = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: o,
            useExpandedPanelId: n,
            ...l
          }) => {
            const { messages: a, renderItem: c, selected: s, isSingle: i } = l,
              u = c || le;
            return 0 === e.length
              ? (0, f.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, f.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, f.createElement)(B.A, { icon: Q.A, role: 'img' }),
                  ),
                  (0, f.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, v.sprintf)(a.noResults, t) : a.noItems,
                  ),
                )
              : (0, f.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, f.createElement)(ae, {
                    useExpandedPanelId: n,
                    list: e,
                    selected: s,
                    renderItem: u,
                    onSelect: r,
                    instanceId: o,
                    isSingle: i,
                    search: t,
                  }),
                );
          },
          ie = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: o,
                isLoading: n,
                isSingle: l,
                list: a,
                messages: c = H,
                onChange: s,
                onSearch: i,
                selected: u,
                type: m = 'text',
                debouncedSpeak: d,
              } = e,
              [p, b] = (0, S.useState)(''),
              _ = (0, S.useState)(-1),
              g = (0, K.useInstanceId)(ie),
              E = (0, S.useMemo)(() => ({ ...H, ...c }), [c]),
              w = (0, S.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? z(e) : e;
                    const o = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!o.test(e.name) && e).filter(Boolean);
                    return r ? z(n, e) : n;
                  })(a, p, o),
                [a, p, o],
              );
            (0, S.useEffect)(() => {
              d && d(E.updated);
            }, [d, E]),
              (0, S.useEffect)(() => {
                'function' == typeof i && i(p);
              }, [p, i]);
            const h = (0, S.useCallback)(
                e => () => {
                  l && s([]);
                  const t = u.findIndex(({ id: t }) => t === e);
                  s([...u.slice(0, t), ...u.slice(t + 1)]);
                },
                [l, u, s],
              ),
              y = (0, S.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? s(e)
                    : -1 === u.findIndex(({ id: t }) => t === e.id)
                    ? s(l ? [e] : [...u, e])
                    : h(e.id)();
                },
                [l, h, s, u],
              ),
              k = (0, S.useCallback)(
                e => {
                  const [t] = u.filter(t => !e.find(e => t.id === e.id));
                  h(t.id)();
                },
                [h, u],
              );
            return (0, f.createElement)(
              'div',
              {
                className: V()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': n,
                  'is-token': 'token' === m,
                }),
              },
              'text' === m && (0, f.createElement)(ce, { ...e, onRemove: h, messages: E }),
              (0, f.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === m
                  ? (0, f.createElement)(q.TextControl, {
                      label: E.search,
                      type: 'search',
                      value: p,
                      onChange: e => b(e),
                    })
                  : (0, f.createElement)(q.FormTokenField, {
                      disabled: n,
                      label: E.search,
                      onChange: k,
                      onInputChange: e => b(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: n
                        ? [(0, v.__)('Loading…', 'woocommerce')]
                        : u.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              n
                ? (0, f.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, f.createElement)(q.Spinner, null),
                  )
                : (0, f.createElement)(se, {
                    ...e,
                    search: p,
                    filteredList: w,
                    messages: E,
                    onSelect: y,
                    instanceId: g,
                    useExpandedPanelId: _,
                  }),
            );
          },
          ue = ((0, q.withSpokenMessages)(ie), (0, n.getSetting)('attributes', [])),
          me = ({ isCompact: e, setAttributeId: t, attributeId: r }) => {
            const o = {
                clear: (0, v.__)('Clear selected attribute', 'woocommerce'),
                list: (0, v.__)('Product Attributes', 'woocommerce'),
                noItems: (0, v.__)(
                  "Your store doesn't have any product attributes.",
                  'woocommerce',
                ),
                search: (0, v.__)('Search for a product attribute:', 'woocommerce'),
                selected: e =>
                  (0, v.sprintf) /* translators: %d is the number of attributes selected. */(
                    /* translators: %d is the number of attributes selected. */
                    (0, v._n)('%d attribute selected', '%d attributes selected', e, 'woocommerce'),
                    e,
                  ),
                updated: (0, v.__)('Product attribute search results updated.', 'woocommerce'),
              },
              n = (0, R.di)(
                ue.map(e => ({ id: parseInt(e.attribute_id, 10), name: e.attribute_label })),
              ).asc('name');
            return (0, f.createElement)(ie, {
              className: 'woocommerce-product-attributes',
              list: n,
              selected: n.filter(({ id: e }) => e === r),
              onChange: e => {
                if (!e || !e.length) return;
                const o = e[0].id;
                ue.find(e => e.attribute_id === o.toString()) && r !== o && t(o);
              },
              messages: o,
              isSingle: !0,
              isCompact: e,
            });
          },
          de = (0, n.getSetting)('attributes', []).reduce((e, t) => {
            const r =
              (o = t) && o.attribute_name
                ? {
                    id: parseInt(o.attribute_id, 10),
                    name: o.attribute_name,
                    taxonomy: 'pa_' + o.attribute_name,
                    label: o.attribute_label,
                  }
                : null;
            var o;
            return r && r.id && e.push(r), e;
          }, []),
          pe = ({ attributes: e, setAttributes: t }) => {
            const {
              attributeId: r,
              showCounts: o,
              queryType: n,
              displayStyle: l,
              selectType: a,
            } = e;
            return (0, f.createElement)(
              k.InspectorControls,
              { key: 'inspector' },
              (0, f.createElement)(
                q.PanelBody,
                { title: (0, v.__)('Display Settings', 'woocommerce') },
                (0, f.createElement)(q.ToggleControl, {
                  label: (0, v.__)('Display product count', 'woocommerce'),
                  checked: o,
                  onChange: () => t({ showCounts: !o }),
                }),
                (0, f.createElement)(
                  q.__experimentalToggleGroupControl,
                  {
                    label: (0, v.__)('Allow selecting multiple options?', 'woocommerce'),
                    value: a || 'multiple',
                    onChange: e => t({ selectType: e }),
                    className: 'wc-block-attribute-filter__multiple-toggle',
                  },
                  (0, f.createElement)(q.__experimentalToggleGroupControlOption, {
                    value: 'multiple',
                    label: (0, v._x)('Multiple', 'Number of filters', 'woocommerce'),
                  }),
                  (0, f.createElement)(q.__experimentalToggleGroupControlOption, {
                    value: 'single',
                    label: (0, v._x)('Single', 'Number of filters', 'woocommerce'),
                  }),
                ),
                'multiple' === a &&
                  (0, f.createElement)(
                    q.__experimentalToggleGroupControl,
                    {
                      label: (0, v.__)('Filter Conditions', 'woocommerce'),
                      help:
                        'and' === n
                          ? (0, v.__)(
                              'Choose to return filter results for all of the attributes selected.',
                              'woocommerce',
                            )
                          : (0, v.__)(
                              'Choose to return filter results for any of the attributes selected.',
                              'woocommerce',
                            ),
                      value: n,
                      onChange: e => t({ queryType: e }),
                      className: 'wc-block-attribute-filter__conditions-toggle',
                    },
                    (0, f.createElement)(q.__experimentalToggleGroupControlOption, {
                      value: 'and',
                      label: (0, v.__)('All', 'woocommerce'),
                    }),
                    (0, f.createElement)(q.__experimentalToggleGroupControlOption, {
                      value: 'or',
                      label: (0, v.__)('Any', 'woocommerce'),
                    }),
                  ),
                (0, f.createElement)(
                  q.__experimentalToggleGroupControl,
                  {
                    label: (0, v.__)('Display Style', 'woocommerce'),
                    value: l,
                    onChange: e => t({ displayStyle: e }),
                    className: 'wc-block-attribute-filter__display-toggle',
                  },
                  (0, f.createElement)(q.__experimentalToggleGroupControlOption, {
                    value: 'list',
                    label: (0, v.__)('List', 'woocommerce'),
                  }),
                  (0, f.createElement)(q.__experimentalToggleGroupControlOption, {
                    value: 'dropdown',
                    label: (0, v.__)('Dropdown', 'woocommerce'),
                  }),
                ),
              ),
              (0, f.createElement)(
                q.PanelBody,
                { title: (0, v.__)('Content Settings', 'woocommerce'), initialOpen: !1 },
                (0, f.createElement)(me, {
                  isCompact: !0,
                  attributeId: r,
                  setAttributeId: e => {
                    t({ attributeId: e });
                  },
                }),
              ),
            );
          },
          be = window.wc.blocksComponents;
        r(5400);
        const _e = ({ name: e, count: t }) =>
            (0, f.createElement)(
              f.Fragment,
              null,
              e,
              null !== t &&
                Number.isFinite(t) &&
                (0, f.createElement)(be.Label, {
                  label: t.toString(),
                  screenReaderLabel: (0, v.sprintf) /* translators: %s number of products. */(
                    /* translators: %s number of products. */
                    (0, v._n)('%s product', '%s products', t, 'woocommerce'),
                    t,
                  ),
                  wrapperElement: 'span',
                  wrapperProps: { className: 'wc-filter-element-label-list-count' },
                }),
            ),
          ge = ({ attributeTerms: e, showCounts: t }) =>
            (0, f.createElement)(be.CheckboxList, {
              className: 'wc-block-attribute-filter style-list',
              onChange: () => null,
              options: e.map(e => ({
                label: (0, f.createElement)(_e, { name: e.name, count: t ? e.count : null }),
                value: e.slug,
              })),
            });
        var Ee = r(224);
        const we = ({ placeholder: e }) =>
            (0, f.createElement)(
              'div',
              { className: 'wc-interactivity-dropdown' },
              (0, f.createElement)(
                'div',
                { className: 'wc-interactivity-dropdown__dropdown' },
                (0, f.createElement)(
                  'div',
                  { className: 'wc-interactivity-dropdown__dropdown-selection', tabIndex: 0 },
                  (0, f.createElement)(
                    'span',
                    { className: 'wc-interactivity-dropdown__placeholder' },
                    e,
                  ),
                  (0, f.createElement)(
                    'span',
                    { className: 'wc-interactivity-dropdown__svg-container' },
                    (0, f.createElement)(
                      'svg',
                      {
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '30',
                        height: '30',
                      },
                      (0, f.createElement)('path', {
                        d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z',
                      }),
                    ),
                  ),
                ),
              ),
            ),
          he = ({ label: e }) =>
            (0, f.createElement)(
              'div',
              { className: 'wc-block-attribute-filter style-dropdown' },
              (0, f.createElement)(we, {
                placeholder: (0, v.sprintf) /* translators: %s attribute name. */(
                  /* translators: %s attribute name. */
                  (0, v.__)('Select %s', 'woocommerce'),
                  e,
                ),
              }),
              (0, f.createElement)(B.A, { icon: Ee.A, size: 30 }),
            ),
          ye = [
            {
              id: 23,
              name: 'Blue',
              slug: 'blue',
              attr_slug: 'blue',
              description: '',
              parent: 0,
              count: 4,
            },
            {
              id: 29,
              name: 'Gray',
              slug: 'gray',
              attr_slug: 'gray',
              description: '',
              parent: 0,
              count: 3,
            },
            {
              id: 24,
              name: 'Green',
              slug: 'green',
              attr_slug: 'green',
              description: '',
              parent: 0,
              count: 3,
            },
            {
              id: 25,
              name: 'Red',
              slug: 'red',
              attr_slug: 'red',
              description: '',
              parent: 0,
              count: 4,
            },
            {
              id: 30,
              name: 'Yellow',
              slug: 'yellow',
              attr_slug: 'yellow',
              description: '',
              parent: 0,
              count: 1,
            },
          ],
          fe = (0, n.getSetting)('attributes', []),
          ve = ({ onClick: e, isEditing: t }) =>
            (0, f.createElement)(
              k.BlockControls,
              null,
              (0, f.createElement)(q.ToolbarGroup, {
                controls: [
                  {
                    icon: 'edit',
                    title: (0, v.__)('Edit', 'woocommerce'),
                    onClick: e,
                    isActive: t,
                  },
                ],
              }),
            ),
          Se = ({ children: e, onClickToolbarEdit: t, isEditing: r, blockProps: o }) =>
            (0, f.createElement)(
              'div',
              { ...o },
              (0, f.createElement)(ve, { onClick: t, isEditing: r }),
              e,
            ),
          ke = ({ attributeId: e, setAttributeId: t, onClickDone: r }) =>
            (0, f.createElement)(
              Y,
              null,
              (0, f.createElement)(
                'div',
                { className: 'wc-block-attribute-filter__selection' },
                (0, f.createElement)(me, { isCompact: !1, attributeId: e, setAttributeId: t }),
                (0, f.createElement)(
                  q.Button,
                  { variant: 'primary', onClick: r },
                  (0, v.__)('Done', 'woocommerce'),
                ),
              ),
            ),
          Ce = (0, q.withSpokenMessages)(e => {
            const { attributes: t, setAttributes: r, debouncedSpeak: o } = e,
              { attributeId: n, queryType: l, isPreview: a, displayStyle: c, showCounts: s } = t,
              i = (function(e) {
                if (e) return de.find(t => t.id === e);
              })(n),
              [u, m] = (0, S.useState)(!n && !a),
              [d, p] = (0, S.useState)([]),
              { results: b } = P({
                namespace: '/wc/store/v1',
                resourceName: 'products/attributes/terms',
                resourceValues: [(null == i ? void 0 : i.id) || 0],
                shouldSelect: t.attributeId > 0,
                query: { orderby: 'menu_order' },
              }),
              { results: _ } = (({
                queryAttribute: e,
                queryPrices: t,
                queryStock: r,
                queryRating: o,
                queryState: n,
                isEditor: l = !1,
              }) => {
                let a = F();
                a = `${a}-collection-data`;
                const [c] = G(a),
                  [s, i] = L('calculate_attribute_counts', [], a),
                  [u, m] = L('calculate_price_range', null, a),
                  [d, p] = L('calculate_stock_status_counts', null, a),
                  [b, _] = L('calculate_rating_counts', null, a),
                  g = N(e || {}),
                  E = N(t),
                  w = N(r),
                  h = N(o);
                (0, S.useEffect)(() => {
                  'object' == typeof g &&
                    Object.keys(g).length &&
                    (s.find(
                      e => (0, A.objectHasProp)(g, 'taxonomy') && e.taxonomy === g.taxonomy,
                    ) ||
                      i([...s, g]));
                }, [g, s, i]),
                  (0, S.useEffect)(() => {
                    u !== E && void 0 !== E && m(E);
                  }, [E, m, u]),
                  (0, S.useEffect)(() => {
                    d !== w && void 0 !== w && p(w);
                  }, [w, p, d]),
                  (0, S.useEffect)(() => {
                    b !== h && void 0 !== h && _(h);
                  }, [h, _, b]);
                const [y, f] = (0, S.useState)(l),
                  [v] = (0, I.d7)(y, 200);
                y || f(!0);
                const k = (0, S.useMemo)(
                  () =>
                    (e => {
                      const t = e;
                      return (
                        Array.isArray(e.calculate_attribute_counts) &&
                          (t.calculate_attribute_counts = (0, R.di)(
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
                return P({
                  namespace: '/wc/store/v1',
                  resourceName: 'products/collection-data',
                  query: {
                    ...n,
                    page: void 0,
                    per_page: void 0,
                    orderby: void 0,
                    order: void 0,
                    ...k,
                  },
                  shouldSelect: v,
                });
              })({
                queryAttribute: { taxonomy: (null == i ? void 0 : i.taxonomy) || '', queryType: l },
                queryState: {},
                isEditor: !0,
              }),
              g = (0, k.useBlockProps)();
            (0, S.useEffect)(() => {
              const e =
                (0, A.objectHasProp)(_, 'attribute_counts') &&
                ((t = _.attribute_counts),
                Array.isArray(t) && t.every(e => 'term' in e && 'count' in e))
                  ? _.attribute_counts.map(e => e.term)
                  : [];
              var t;
              if (0 === e.length) return p([]);
              p(b.filter(t => e.includes(t.id)));
            }, [b, _]);
            const E = (0, S.useCallback)(() => {
                m(!1),
                  o(
                    (0, v.__)(
                      'Now displaying a preview of the Filter Products by Attribute block.',
                      'woocommerce',
                    ),
                  );
              }, [m]),
              w = (0, S.useCallback)(
                e => {
                  r({ attributeId: e });
                },
                [r],
              ),
              h = (0, S.useCallback)(() => {
                m(!u);
              }, [u]);
            return a
              ? (0, f.createElement)(
                  Se,
                  { onClickToolbarEdit: h, isEditing: u, blockProps: g },
                  (0, f.createElement)(
                    q.Disabled,
                    null,
                    (0, f.createElement)(ge, { showCounts: s, attributeTerms: ye }),
                  ),
                )
              : 0 === Object.keys(fe).length
              ? (0, f.createElement)(
                  Se,
                  { onClickToolbarEdit: h, isEditing: u, blockProps: g },
                  (0, f.createElement)($, null),
                )
              : u
              ? (0, f.createElement)(
                  Se,
                  { onClickToolbarEdit: h, isEditing: u, blockProps: g },
                  (0, f.createElement)(ke, { onClickDone: E, attributeId: n, setAttributeId: w }),
                )
              : n && i
              ? 0 === d.length
                ? (0, f.createElement)(
                    Se,
                    { onClickToolbarEdit: h, isEditing: u, blockProps: g },
                    (0, f.createElement)(
                      q.Notice,
                      { status: 'warning', isDismissible: !1 },
                      (0, f.createElement)(
                        'p',
                        null,
                        (0, v.__)(
                          'There are no products with the selected attributes.',
                          'woocommerce',
                        ),
                      ),
                    ),
                  )
                : (0, f.createElement)(
                    Se,
                    { onClickToolbarEdit: h, isEditing: u, blockProps: g },
                    (0, f.createElement)(pe, { ...e }),
                    (0, f.createElement)(
                      q.Disabled,
                      null,
                      'dropdown' === c
                        ? (0, f.createElement)(he, {
                            label: i.label || (0, v.__)('attribute', 'woocommerce'),
                          })
                        : (0, f.createElement)(ge, { showCounts: s, attributeTerms: d }),
                      ' ',
                    ),
                  )
              : (0, f.createElement)(
                  Se,
                  { onClickToolbarEdit: h, isEditing: u, blockProps: g },
                  (0, f.createElement)(
                    q.Notice,
                    { status: 'warning', isDismissible: !1 },
                    (0, f.createElement)(
                      'p',
                      null,
                      (0, v.__)('Please select an attribute to use this filter!', 'woocommerce'),
                    ),
                  ),
                );
          });
        g > 2 && (0, o.registerBlockType)(y, { edit: Ce });
      },
      5400: () => {},
      9642: () => {},
      8137: () => {},
      6636: () => {},
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
    (l.j = 2448),
    (() => {
      var e = { 2448: 0 };
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
  var a = l.O(void 0, [94], () => l(5763));
  (a = l.O(a)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter-attribute'] = a);
})();
