(() => {
  var e,
    t,
    r,
    l = {
      8967: (e, t, r) => {
        'use strict';
        r.r(t);
        var l = r(1609);
        const n = window.wp.blocks,
          c = window.wc.wcSettings;
        var o = r(7104),
          a = r(6460);
        r(6888);
        const i = JSON.parse(
            '{"name":"woocommerce/handpicked-products","title":"Hand-picked Products","category":"woocommerce","keywords":["Handpicked Products","WooCommerce"],"description":"Display a selection of hand-picked products in a grid.","supports":{"align":["wide","full"],"html":false},"attributes":{"align":{"type":"string"},"columns":{"type":"number","default":3},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","image":true},"title":{"type":"boolean","title":true},"price":{"type":"boolean","price":true},"rating":{"type":"boolean","rating":true},"button":{"type":"boolean","button":true}}},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"},"products":{"type":"array","default":[]},"alignButtons":{"type":"boolean","default":false},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          s = window.wp.blockEditor,
          m = window.wp.components;
        var d = r(6087),
          u = r(7723);
        const E = ({ onChange: e, settings: t }) => {
            const { image: r, button: n, price: c, rating: o, title: a } = t,
              i = !1 !== r;
            return (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(m.ToggleControl, {
                label: (0, u.__)('Product image', 'woocommerce'),
                checked: i,
                onChange: () => e({ ...t, image: !i }),
              }),
              (0, l.createElement)(m.ToggleControl, {
                label: (0, u.__)('Product title', 'woocommerce'),
                checked: a,
                onChange: () => e({ ...t, title: !a }),
              }),
              (0, l.createElement)(m.ToggleControl, {
                label: (0, u.__)('Product price', 'woocommerce'),
                checked: c,
                onChange: () => e({ ...t, price: !c }),
              }),
              (0, l.createElement)(m.ToggleControl, {
                label: (0, u.__)('Product rating', 'woocommerce'),
                checked: o,
                onChange: () => e({ ...t, rating: !o }),
              }),
              (0, l.createElement)(m.ToggleControl, {
                label: (0, u.__)('Add to Cart button', 'woocommerce'),
                checked: n,
                onChange: () => e({ ...t, button: !n }),
              }),
            );
          },
          h = ({ value: e, setAttributes: t }) =>
            (0, l.createElement)(m.SelectControl, {
              label: (0, u.__)('Order products by', 'woocommerce'),
              value: e,
              options: [
                { label: (0, u.__)('Newness - newest first', 'woocommerce'), value: 'date' },
                { label: (0, u.__)('Price - low to high', 'woocommerce'), value: 'price_asc' },
                { label: (0, u.__)('Price - high to low', 'woocommerce'), value: 'price_desc' },
                { label: (0, u.__)('Rating - highest first', 'woocommerce'), value: 'rating' },
                { label: (0, u.__)('Sales - most first', 'woocommerce'), value: 'popularity' },
                { label: (0, u.__)('Title - alphabetical', 'woocommerce'), value: 'title' },
                { label: (0, u.__)('Menu Order', 'woocommerce'), value: 'menu_order' },
              ],
              onChange: e => t({ orderby: e }),
            });
        var p = r(2478),
          g = r(9019),
          w = r.n(g),
          _ = r(9491);
        const f = {
            clear: (0, u.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, u.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, u.__)('No results for %s', 'woocommerce'),
            search: (0, u.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, u.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, u._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, u.__)('Search results updated.', 'woocommerce'),
          },
          y = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              l = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const n = ['0'],
              c = (e = {}) => (e.parent ? [...c(l[e.parent]), e.name] : e.name ? [e.name] : []),
              o = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    n.push('' + e.id),
                    { ...e, breadcrumbs: c(l[e.parent]), children: t && t.length ? o(t) : [] }
                  );
                }),
              a = o(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                n.includes(e) || a.push(...o(t || []));
              }),
              a
            );
          },
          b = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, l.createElement)('strong', { key: t }, e)
                  : (0, l.createElement)(d.Fragment, { key: t }, e),
              );
          };
        function x(e, t, r) {
          const l = new Set(t.map(e => e[r]));
          return e.filter(e => !l.has(e[r]));
        }
        const v = window.wp.htmlEntities,
          k = ({ label: e }) =>
            (0, l.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          S = e => {
            const { item: t, search: r } = e,
              n = t.breadcrumbs && t.breadcrumbs.length;
            return (0, l.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              n
                ? (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (c = t.breadcrumbs).length
                      ? c.slice(0, 1).toString()
                      : 2 === c.length
                      ? c.slice(0, 1).toString() + ' › ' + c.slice(-1).toString()
                      : c.slice(0, 1).toString() + ' … ' + c.slice(-1).toString(),
                  )
                : null,
              (0, l.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                b((0, v.decodeEntities)(t.name), r),
              ),
            );
            var c;
          },
          C = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: n = '',
            item: c,
            isSelected: o,
            isSingle: a,
            onSelect: i,
            search: s = '',
            selected: u,
            useExpandedPanelId: E,
            ...h
          }) => {
            var p, g;
            const [_, f] = E,
              y = null != e && void 0 !== c.count && null !== c.count,
              C = !(null === (p = c.breadcrumbs) || void 0 === p || !p.length),
              P = !(null === (g = c.children) || void 0 === g || !g.length),
              O = _ === c.id,
              N = w()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': C,
                'has-children': P,
                'has-count': y,
                'is-expanded': O,
                'is-radio-button': a,
              }),
              A = h.name || `search-list-item-${n}`,
              I = `${A}-${c.id}`,
              T = (0, d.useCallback)(() => {
                f(O ? -1 : Number(c.id));
              }, [O, c.id, f]);
            return P
              ? (0, l.createElement)(
                  'div',
                  {
                    className: N,
                    onClick: T,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? T() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  a
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)('input', {
                          type: 'radio',
                          id: I,
                          name: A,
                          value: c.value,
                          onChange: i(c),
                          onClick: e => e.stopPropagation(),
                          checked: o,
                          className: 'woocommerce-search-list__item-input',
                          ...h,
                        }),
                        (0, l.createElement)(S, { item: c, search: s }),
                        y ? (0, l.createElement)(k, { label: e || c.count }) : null,
                      )
                    : (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)(m.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: o,
                          ...(!o && c.children.some(e => u.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: b((0, v.decodeEntities)(c.name), s),
                          onChange: () => {
                            o
                              ? i(x(u, c.children, 'id'))()
                              : i(
                                  (function(e, t, r) {
                                    const l = x(t, e, 'id');
                                    return [...e, ...l];
                                  })(u, c.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        y ? (0, l.createElement)(k, { label: e || c.count }) : null,
                      ),
                )
              : (0, l.createElement)(
                  'label',
                  { htmlFor: I, className: N },
                  a
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)('input', {
                          ...h,
                          type: 'radio',
                          id: I,
                          name: A,
                          value: c.value,
                          onChange: i(c),
                          checked: o,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, l.createElement)(S, { item: c, search: s }),
                      )
                    : (0, l.createElement)(m.CheckboxControl, {
                        ...h,
                        id: I,
                        name: A,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, v.decodeEntities)(c.value),
                        label: b((0, v.decodeEntities)(c.name), s),
                        onChange: i(c),
                        checked: o,
                      }),
                  y ? (0, l.createElement)(k, { label: e || c.count }) : null,
                );
          };
        var P = r(2370);
        r(6636);
        const O = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: n,
            screenReaderLabel: c,
            className: a = '',
          }) => {
            const [i, s] = (0, d.useState)(!1),
              E = (0, _.useInstanceId)(O);
            if (((c = c || t), !t)) return null;
            t = (0, v.decodeEntities)(t);
            const h = w()('woocommerce-tag', a, { 'has-remove': !!n }),
              p = `woocommerce-tag__label-${E}`,
              g = (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)('span', { className: 'screen-reader-text' }, c),
                (0, l.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, l.createElement)(
              'span',
              { className: h },
              r
                ? (0, l.createElement)(
                    m.Button,
                    { className: 'woocommerce-tag__text', id: p, onClick: () => s(!0) },
                    g,
                  )
                : (0, l.createElement)('span', { className: 'woocommerce-tag__text', id: p }, g),
              r && i && (0, l.createElement)(m.Popover, { onClose: () => s(!1) }, r),
              n &&
                (0, l.createElement)(
                  m.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: n(e),
                    label: (0, u.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, u.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': p,
                  },
                  (0, l.createElement)(o.A, {
                    icon: P.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          N = O;
        r(8137);
        const A = e => (0, l.createElement)(C, { ...e }),
          I = e => {
            const {
                list: t,
                selected: r,
                renderItem: n,
                depth: c = 0,
                onSelect: o,
                instanceId: a,
                isSingle: i,
                search: s,
                useExpandedPanelId: m,
              } = e,
              [u] = m;
            return t
              ? (0, l.createElement)(
                  d.Fragment,
                  null,
                  t.map(t => {
                    var E, h;
                    const p =
                        null !== (E = t.children) && void 0 !== E && E.length && !i
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      g =
                        (null === (h = t.children) || void 0 === h ? void 0 : h.length) &&
                        u === t.id;
                    return (0, l.createElement)(
                      d.Fragment,
                      { key: t.id },
                      (0, l.createElement)(
                        'li',
                        null,
                        n({
                          item: t,
                          isSelected: p,
                          onSelect: o,
                          isSingle: i,
                          selected: r,
                          search: s,
                          depth: c,
                          useExpandedPanelId: m,
                          controlId: a,
                        }),
                      ),
                      g ? (0, l.createElement)(I, { ...e, list: t.children, depth: c + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          T = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: n,
            onChange: c,
            onRemove: o,
          }) => {
            if (e || t || !r) return null;
            const a = r.length;
            return (0, l.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, l.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, l.createElement)('strong', null, n.selected(a)),
                a > 0
                  ? (0, l.createElement)(
                      m.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => c([]),
                        'aria-label': n.clear,
                      },
                      (0, u.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              a > 0
                ? (0, l.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, l.createElement)(
                        'li',
                        { key: t },
                        (0, l.createElement)(N, { label: e.name, id: e.id, remove: o }),
                      ),
                    ),
                  )
                : null,
            );
          },
          j = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: n,
            useExpandedPanelId: c,
            ...a
          }) => {
            const { messages: i, renderItem: s, selected: m, isSingle: d } = a,
              E = s || A;
            return 0 === e.length
              ? (0, l.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, l.createElement)(o.A, { icon: p.A, role: 'img' }),
                  ),
                  (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, u.sprintf)(i.noResults, t) : i.noItems,
                  ),
                )
              : (0, l.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, l.createElement)(I, {
                    useExpandedPanelId: c,
                    list: e,
                    selected: m,
                    renderItem: E,
                    onSelect: r,
                    instanceId: n,
                    isSingle: d,
                    search: t,
                  }),
                );
          },
          B = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: n,
                isLoading: c,
                isSingle: o,
                list: a,
                messages: i = f,
                onChange: s,
                onSearch: E,
                selected: h,
                type: p = 'text',
                debouncedSpeak: g,
              } = e,
              [b, x] = (0, d.useState)(''),
              v = (0, d.useState)(-1),
              k = (0, _.useInstanceId)(B),
              S = (0, d.useMemo)(() => ({ ...f, ...i }), [i]),
              C = (0, d.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? y(e) : e;
                    const l = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!l.test(e.name) && e).filter(Boolean);
                    return r ? y(n, e) : n;
                  })(a, b, n),
                [a, b, n],
              );
            (0, d.useEffect)(() => {
              g && g(S.updated);
            }, [g, S]),
              (0, d.useEffect)(() => {
                'function' == typeof E && E(b);
              }, [b, E]);
            const P = (0, d.useCallback)(
                e => () => {
                  o && s([]);
                  const t = h.findIndex(({ id: t }) => t === e);
                  s([...h.slice(0, t), ...h.slice(t + 1)]);
                },
                [o, h, s],
              ),
              O = (0, d.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? s(e)
                    : -1 === h.findIndex(({ id: t }) => t === e.id)
                    ? s(o ? [e] : [...h, e])
                    : P(e.id)();
                },
                [o, P, s, h],
              ),
              N = (0, d.useCallback)(
                e => {
                  const [t] = h.filter(t => !e.find(e => t.id === e.id));
                  P(t.id)();
                },
                [P, h],
              );
            return (0, l.createElement)(
              'div',
              {
                className: w()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': c,
                  'is-token': 'token' === p,
                }),
              },
              'text' === p && (0, l.createElement)(T, { ...e, onRemove: P, messages: S }),
              (0, l.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === p
                  ? (0, l.createElement)(m.TextControl, {
                      label: S.search,
                      type: 'search',
                      value: b,
                      onChange: e => x(e),
                    })
                  : (0, l.createElement)(m.FormTokenField, {
                      disabled: c,
                      label: S.search,
                      onChange: N,
                      onInputChange: e => x(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: c
                        ? [(0, u.__)('Loading…', 'woocommerce')]
                        : h.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              c
                ? (0, l.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, l.createElement)(m.Spinner, null),
                  )
                : (0, l.createElement)(j, {
                    ...e,
                    search: b,
                    filteredList: C,
                    messages: S,
                    onSelect: O,
                    instanceId: k,
                    useExpandedPanelId: v,
                  }),
            );
          };
        var R, F, L, M, G, $, H, D, V, U;
        (0, m.withSpokenMessages)(B);
        const q = (0, c.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          J =
            (q.pluginUrl,
            q.pluginUrl,
            q.buildPhase,
            null === (R = c.STORE_PAGES.shop) || void 0 === R || R.permalink,
            null === (F = c.STORE_PAGES.checkout) || void 0 === F || F.id,
            null === (L = c.STORE_PAGES.checkout) || void 0 === L || L.permalink,
            null === (M = c.STORE_PAGES.privacy) || void 0 === M || M.permalink,
            null === (G = c.STORE_PAGES.privacy) || void 0 === G || G.title,
            null === ($ = c.STORE_PAGES.terms) || void 0 === $ || $.permalink,
            null === (H = c.STORE_PAGES.terms) || void 0 === H || H.title,
            null === (D = c.STORE_PAGES.cart) || void 0 === D || D.id,
            null === (V = c.STORE_PAGES.cart) || void 0 === V || V.permalink,
            null !== (U = c.STORE_PAGES.myaccount) && void 0 !== U && U.permalink
              ? c.STORE_PAGES.myaccount.permalink
              : (0, c.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, c.getSetting)('localPickupEnabled', !1),
            (0, c.getSetting)('countries', {})),
          Q = (0, c.getSetting)('countryData', {}),
          W =
            (Object.fromEntries(
              Object.keys(Q)
                .filter(e => !0 === Q[e].allowBilling)
                .map(e => [e, J[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(Q)
                .filter(e => !0 === Q[e].allowBilling)
                .map(e => [e, Q[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(Q)
                .filter(e => !0 === Q[e].allowShipping)
                .map(e => [e, J[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(Q)
                .filter(e => !0 === Q[e].allowShipping)
                .map(e => [e, Q[e].states || []]),
            ),
            Object.fromEntries(Object.keys(Q).map(e => [e, Q[e].locale || []])),
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
          Y =
            ((0, c.getSetting)('addressFieldsLocations', W).address,
            (0, c.getSetting)('addressFieldsLocations', W).contact,
            (0, c.getSetting)('addressFieldsLocations', W).order,
            (0, c.getSetting)('additionalOrderFields', {}),
            (0, c.getSetting)('additionalContactFields', {}),
            (0, c.getSetting)('additionalAddressFields', {}),
            window.wp.url),
          z = window.wp.apiFetch;
        var K = r.n(z);
        const X = ({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
          const l = (({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
            const l = q.productCount > 100,
              n = {
                per_page: l ? 100 : 0,
                catalog_visibility: 'any',
                search: t,
                orderby: 'title',
                order: 'asc',
              },
              c = [(0, Y.addQueryArgs)('/wc/store/v1/products', { ...n, ...r })];
            return (
              l &&
                e.length &&
                c.push(
                  (0, Y.addQueryArgs)('/wc/store/v1/products', {
                    catalog_visibility: 'any',
                    include: e,
                    per_page: 0,
                  }),
                ),
              c
            );
          })({ selected: e, search: t, queryArgs: r });
          return Promise.all(l.map(e => K()({ path: e })))
            .then(e => {
              const t = ((e, t) => {
                const r = new Map();
                return e.filter(e => {
                  const l = t(e);
                  return !r.has(l) && (r.set(l, e), !0);
                });
              })(e.flat(), e => e.id);
              return t.map(e => ({ ...e, parent: 0 }));
            })
            .catch(e => {
              throw e;
            });
        };
        var Z = r(4717);
        const ee = window.wp.escapeHtml,
          te = ({ error: e }) =>
            (0, l.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, l.createElement)(
                        'span',
                        null,
                        (0, u.__)('The following error was returned', 'woocommerce'),
                        (0, l.createElement)('br', null),
                        (0, l.createElement)('code', null, (0, ee.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, l.createElement)(
                        'span',
                        null,
                        (0, u.__)('The following error was returned from the API', 'woocommerce'),
                        (0, l.createElement)('br', null),
                        (0, l.createElement)('code', null, (0, ee.escapeHTML)(e)),
                      )
                    : e
                  : (0, u.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          re = ({
            error: e,
            onChange: t,
            onSearch: r,
            selected: n,
            products: c,
            isLoading: o,
            isCompact: a,
          }) => {
            const i = {
              clear: (0, u.__)('Clear all products', 'woocommerce'),
              list: (0, u.__)('Products', 'woocommerce'),
              noItems: (0, u.__)("Your store doesn't have any products.", 'woocommerce'),
              search: (0, u.__)('Search for products to display', 'woocommerce'),
              selected: e =>
                (0, u.sprintf) /* translators: %d is the number of selected products. */(
                  /* translators: %d is the number of selected products. */
                  (0, u._n)('%d product selected', '%d products selected', e, 'woocommerce'),
                  e,
                ),
              updated: (0, u.__)('Product search results updated.', 'woocommerce'),
            };
            return e
              ? (0, l.createElement)(te, { error: e })
              : (0, l.createElement)(B, {
                  className: 'woocommerce-products',
                  list: c.map(e => {
                    const t = e.sku ? ' (' + e.sku + ')' : '';
                    return { ...e, name: `${(0, v.decodeEntities)(e.name)}${t}` };
                  }),
                  isCompact: a,
                  isLoading: o,
                  selected: c.filter(({ id: e }) => n.includes(e)),
                  onSearch: r,
                  onChange: t,
                  messages: i,
                });
          };
        re.defaultProps = { selected: [], products: [], isCompact: !1, isLoading: !0 };
        const le =
            ((ae = re),
            ({ selected: e, ...t }) => {
              const [r, n] = (0, d.useState)(!0),
                [c, o] = (0, d.useState)(null),
                [a, i] = (0, d.useState)([]),
                s = q.productCount > 100,
                m = async e => {
                  const t = await (async e => {
                    if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
                    try {
                      const t = await e.json();
                      return { message: t.message, type: t.type || 'api' };
                    } catch (e) {
                      return { message: e.message, type: 'general' };
                    }
                  })(e);
                  o(t), n(!1);
                },
                u = (0, d.useRef)(e);
              (0, d.useEffect)(() => {
                X({ selected: u.current })
                  .then(e => {
                    i(e), n(!1);
                  })
                  .catch(m);
              }, [u]);
              const E = (0, Z.YQ)(t => {
                  X({ selected: e, search: t })
                    .then(e => {
                      i(e), n(!1);
                    })
                    .catch(m);
                }, 400),
                h = (0, d.useCallback)(
                  e => {
                    n(!0), E(e);
                  },
                  [n, E],
                );
              return (0, l.createElement)(ae, {
                ...t,
                selected: e,
                error: c,
                products: a,
                isLoading: r,
                onSearch: s ? h : null,
              });
            }),
          ne = e => {
            const { attributes: t, setAttributes: r } = e,
              { columns: n, contentVisibility: o, orderby: a, alignButtons: i } = t;
            return (0, l.createElement)(
              s.InspectorControls,
              { key: 'inspector' },
              (0, l.createElement)(
                m.PanelBody,
                { title: (0, u.__)('Layout', 'woocommerce'), initialOpen: !0 },
                (0, l.createElement)(m.RangeControl, {
                  label: (0, u.__)('Columns', 'woocommerce'),
                  value: n,
                  onChange: e => r({ columns: e }),
                  min: (0, c.getSetting)('minColumns', 1),
                  max: (0, c.getSetting)('maxColumns', 6),
                }),
                (0, l.createElement)(m.ToggleControl, {
                  label: (0, u.__)('Align Buttons', 'woocommerce'),
                  help: i
                    ? (0, u.__)('Buttons are aligned vertically.', 'woocommerce')
                    : (0, u.__)('Buttons follow content.', 'woocommerce'),
                  checked: i,
                  onChange: () => r({ alignButtons: !i }),
                }),
              ),
              (0, l.createElement)(
                m.PanelBody,
                { title: (0, u.__)('Content', 'woocommerce'), initialOpen: !0 },
                (0, l.createElement)(E, {
                  settings: o,
                  onChange: e => r({ contentVisibility: e }),
                }),
              ),
              (0, l.createElement)(
                m.PanelBody,
                { title: (0, u.__)('Order By', 'woocommerce'), initialOpen: !1 },
                (0, l.createElement)(h, { setAttributes: r, value: a }),
              ),
              (0, l.createElement)(
                m.PanelBody,
                { title: (0, u.__)('Products', 'woocommerce'), initialOpen: !1 },
                (0, l.createElement)(le, {
                  selected: t.products,
                  onChange: (e = []) => {
                    const t = e.map(({ id: e }) => e);
                    r({ products: t });
                  },
                  isCompact: !0,
                }),
              ),
            );
          },
          ce = e => {
            const {
              attributes: t,
              setAttributes: r,
              debouncedSpeak: n,
              isEditing: c,
              setIsEditing: i,
            } = e;
            return (0, l.createElement)(
              m.Placeholder,
              {
                icon: (0, l.createElement)(o.A, { icon: a.A }),
                label: (0, u.__)('Hand-picked Products', 'woocommerce'),
                className: 'wc-block-products-grid wc-block-handpicked-products',
              },
              (0, u.__)('Display a selection of hand-picked products in a grid.', 'woocommerce'),
              (0, l.createElement)(
                'div',
                { className: 'wc-block-handpicked-products__selection' },
                (0, l.createElement)(le, {
                  selected: t.products,
                  onChange: (e = []) => {
                    const t = e.map(({ id: e }) => e);
                    r({ products: t });
                  },
                }),
                (0, l.createElement)(
                  m.Button,
                  {
                    variant: 'primary',
                    onClick: () => {
                      i(!c),
                        n(
                          (0, u.__)(
                            'Now displaying a preview of the Hand-picked Products block.',
                            'woocommerce',
                          ),
                        );
                    },
                  },
                  (0, u.__)('Done', 'woocommerce'),
                ),
              ),
            );
          },
          oe = window.wp.serverSideRender;
        var ae,
          ie = r.n(oe);
        const se = (0, l.createElement)(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 230 250',
              style: { width: '100%' },
            },
            (0, l.createElement)('title', null, 'Grid Block Preview'),
            (0, l.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '.162',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '9.216',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, l.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '1.565',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, l.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '.162',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '9.216',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, l.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '1.565',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, l.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '82.478',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '91.532',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, l.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '83.882',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, l.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '82.478',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '91.532',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, l.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '83.882',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, l.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '164.788',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '173.843',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, l.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '166.192',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, l.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '164.788',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '173.843',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, l.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '166.192',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '13.283',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '21.498',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '29.713',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '37.927',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '46.238',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '95.599',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '103.814',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '112.029',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '120.243',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '128.554',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '177.909',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '186.124',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '194.339',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '202.553',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '210.864',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '13.283',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '21.498',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '29.713',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '37.927',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '46.238',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '95.599',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '103.814',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '112.029',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '120.243',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '128.554',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '177.909',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '186.124',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '194.339',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '202.553',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, l.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '210.864',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
          ),
          me = e => {
            const { attributes: t, name: r } = e;
            return t.isPreview ? se : (0, l.createElement)(ie(), { block: r, attributes: t });
          },
          de = (0, m.withSpokenMessages)(e => {
            const t = (0, s.useBlockProps)(),
              {
                attributes: { products: r },
              } = e,
              [n, c] = (0, d.useState)(!r.length);
            return (0, l.createElement)(
              'div',
              { ...t },
              (0, l.createElement)(
                s.BlockControls,
                null,
                (0, l.createElement)(m.ToolbarGroup, {
                  controls: [
                    {
                      icon: 'edit',
                      title: (0, u.__)('Edit selected products', 'woocommerce'),
                      onClick: () => c(!n),
                      isActive: n,
                    },
                  ],
                }),
              ),
              (0, l.createElement)(ne, { ...e }),
              n
                ? (0, l.createElement)(ce, { isEditing: n, setIsEditing: c, ...e })
                : (0, l.createElement)(m.Disabled, null, (0, l.createElement)(me, { ...e })),
            );
          });
        (0, n.registerBlockType)(i, {
          icon: {
            src: (0, l.createElement)(o.A, {
              icon: a.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: {
            ...i.attributes,
            columns: { type: 'number', default: (0, c.getSetting)('defaultColumns', 3) },
          },
          edit: de,
          save: () => null,
        });
      },
      6888: () => {},
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
    return l[e].call(r.exports, r, r.exports, c), r.exports;
  }
  (c.m = l),
    (e = []),
    (c.O = (t, r, l, n) => {
      if (!r) {
        var o = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, l, n] = e[m], a = !0, i = 0; i < r.length; i++)
            (!1 & n || o >= n) && Object.keys(c.O).every(e => c.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((a = !1), n < o && (o = n));
          if (a) {
            e.splice(m--, 1);
            var s = l();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      n = n || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
      e[m] = [r, l, n];
    }),
    (c.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (c.t = function(e, l) {
      if ((1 & l && (e = this(e)), 8 & l)) return e;
      if ('object' == typeof e && e) {
        if (4 & l && e.__esModule) return e;
        if (16 & l && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      c.r(n);
      var o = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & l && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (o[t] = () => e[t]));
      return (o.default = () => e), c.d(n, o), n;
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
    (c.j = 6461),
    (() => {
      var e = { 6461: 0 };
      c.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var l,
            n,
            [o, a, i] = r,
            s = 0;
          if (o.some(t => 0 !== e[t])) {
            for (l in a) c.o(a, l) && (c.m[l] = a[l]);
            if (i) var m = i(c);
          }
          for (t && t(r); s < o.length; s++) (n = o[s]), c.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return c.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = c.O(void 0, [94], () => c(8967));
  (o = c.O(o)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['handpicked-products'] = o);
})();
