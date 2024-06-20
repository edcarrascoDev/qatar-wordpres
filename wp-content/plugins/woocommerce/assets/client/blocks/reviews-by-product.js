(() => {
  var e,
    t,
    r,
    o = {
      3605: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609),
          n = r(7723);
        const a = window.wp.blocks;
        var i = r(7104),
          s = r(361);
        r(1227);
        const c = window.wp.blockEditor,
          l = window.wp.components;
        var d = r(9019),
          m = r.n(d),
          u = r(6087);
        function p(e, t, r) {
          const o = new Set(t.map(e => e[r]));
          return e.filter(e => !o.has(e[r]));
        }
        const w = window.wp.htmlEntities,
          h = {
            clear: (0, n.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, n.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, n.__)('No results for %s', 'woocommerce'),
            search: (0, n.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, n.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, n._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, n.__)('Search results updated.', 'woocommerce'),
          },
          v = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              o = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const n = ['0'],
              a = (e = {}) => (e.parent ? [...a(o[e.parent]), e.name] : e.name ? [e.name] : []),
              i = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    n.push('' + e.id),
                    { ...e, breadcrumbs: a(o[e.parent]), children: t && t.length ? i(t) : [] }
                  );
                }),
              s = i(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                n.includes(e) || s.push(...i(t || []));
              }),
              s
            );
          },
          g = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, o.createElement)('strong', { key: t }, e)
                  : (0, o.createElement)(u.Fragment, { key: t }, e),
              );
          },
          _ = ({ label: e }) =>
            (0, o.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          b = e => {
            const { item: t, search: r } = e,
              n = t.breadcrumbs && t.breadcrumbs.length;
            return (0, o.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              n
                ? (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (a = t.breadcrumbs).length
                      ? a.slice(0, 1).toString()
                      : 2 === a.length
                      ? a.slice(0, 1).toString() + ' › ' + a.slice(-1).toString()
                      : a.slice(0, 1).toString() + ' … ' + a.slice(-1).toString(),
                  )
                : null,
              (0, o.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                g((0, w.decodeEntities)(t.name), r),
              ),
            );
            var a;
          },
          E = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: n = '',
            item: a,
            isSelected: i,
            isSingle: s,
            onSelect: c,
            search: d = '',
            selected: h,
            useExpandedPanelId: v,
            ...E
          }) => {
            var y, f;
            const [k, R] = v,
              S = null != e && void 0 !== a.count && null !== a.count,
              C = !(null === (y = a.breadcrumbs) || void 0 === y || !y.length),
              N = !(null === (f = a.children) || void 0 === f || !f.length),
              P = k === a.id,
              I = m()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': C,
                'has-children': N,
                'has-count': S,
                'is-expanded': P,
                'is-radio-button': s,
              }),
              A = E.name || `search-list-item-${n}`,
              L = `${A}-${a.id}`,
              O = (0, u.useCallback)(() => {
                R(P ? -1 : Number(a.id));
              }, [P, a.id, R]);
            return N
              ? (0, o.createElement)(
                  'div',
                  {
                    className: I,
                    onClick: O,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? O() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  s
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          type: 'radio',
                          id: L,
                          name: A,
                          value: a.value,
                          onChange: c(a),
                          onClick: e => e.stopPropagation(),
                          checked: i,
                          className: 'woocommerce-search-list__item-input',
                          ...E,
                        }),
                        (0, o.createElement)(b, { item: a, search: d }),
                        S ? (0, o.createElement)(_, { label: e || a.count }) : null,
                      )
                    : (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(l.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: i,
                          ...(!i && a.children.some(e => h.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: g((0, w.decodeEntities)(a.name), d),
                          onChange: () => {
                            i
                              ? c(p(h, a.children, 'id'))()
                              : c(
                                  (function(e, t, r) {
                                    const o = p(t, e, 'id');
                                    return [...e, ...o];
                                  })(h, a.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        S ? (0, o.createElement)(_, { label: e || a.count }) : null,
                      ),
                )
              : (0, o.createElement)(
                  'label',
                  { htmlFor: L, className: I },
                  s
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          ...E,
                          type: 'radio',
                          id: L,
                          name: A,
                          value: a.value,
                          onChange: c(a),
                          checked: i,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, o.createElement)(b, { item: a, search: d }),
                      )
                    : (0, o.createElement)(l.CheckboxControl, {
                        ...E,
                        id: L,
                        name: A,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, w.decodeEntities)(a.value),
                        label: g((0, w.decodeEntities)(a.name), d),
                        onChange: c(a),
                        checked: i,
                      }),
                  S ? (0, o.createElement)(_, { label: e || a.count }) : null,
                );
          },
          y = E,
          f = window.wc.wcTypes;
        var k = r(2478),
          R = r(9491),
          S = r(2370);
        r(6636);
        const C = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: a,
            screenReaderLabel: s,
            className: c = '',
          }) => {
            const [d, p] = (0, u.useState)(!1),
              h = (0, R.useInstanceId)(C);
            if (((s = s || t), !t)) return null;
            t = (0, w.decodeEntities)(t);
            const v = m()('woocommerce-tag', c, { 'has-remove': !!a }),
              g = `woocommerce-tag__label-${h}`,
              _ = (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)('span', { className: 'screen-reader-text' }, s),
                (0, o.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, o.createElement)(
              'span',
              { className: v },
              r
                ? (0, o.createElement)(
                    l.Button,
                    { className: 'woocommerce-tag__text', id: g, onClick: () => p(!0) },
                    _,
                  )
                : (0, o.createElement)('span', { className: 'woocommerce-tag__text', id: g }, _),
              r && d && (0, o.createElement)(l.Popover, { onClose: () => p(!1) }, r),
              a &&
                (0, o.createElement)(
                  l.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: a(e),
                    label: (0, n.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, n.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': g,
                  },
                  (0, o.createElement)(i.A, {
                    icon: S.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          N = C;
        r(8137);
        const P = e => (0, o.createElement)(y, { ...e }),
          I = e => {
            const {
                list: t,
                selected: r,
                renderItem: n,
                depth: a = 0,
                onSelect: i,
                instanceId: s,
                isSingle: c,
                search: l,
                useExpandedPanelId: d,
              } = e,
              [m] = d;
            return t
              ? (0, o.createElement)(
                  u.Fragment,
                  null,
                  t.map(t => {
                    var p, w;
                    const h =
                        null !== (p = t.children) && void 0 !== p && p.length && !c
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      v =
                        (null === (w = t.children) || void 0 === w ? void 0 : w.length) &&
                        m === t.id;
                    return (0, o.createElement)(
                      u.Fragment,
                      { key: t.id },
                      (0, o.createElement)(
                        'li',
                        null,
                        n({
                          item: t,
                          isSelected: h,
                          onSelect: i,
                          isSingle: c,
                          selected: r,
                          search: l,
                          depth: a,
                          useExpandedPanelId: d,
                          controlId: s,
                        }),
                      ),
                      v ? (0, o.createElement)(I, { ...e, list: t.children, depth: a + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          A = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: a,
            onChange: i,
            onRemove: s,
          }) => {
            if (e || t || !r) return null;
            const c = r.length;
            return (0, o.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, o.createElement)('strong', null, a.selected(c)),
                c > 0
                  ? (0, o.createElement)(
                      l.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => i([]),
                        'aria-label': a.clear,
                      },
                      (0, n.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              c > 0
                ? (0, o.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, o.createElement)(
                        'li',
                        { key: t },
                        (0, o.createElement)(N, { label: e.name, id: e.id, remove: s }),
                      ),
                    ),
                  )
                : null,
            );
          },
          L = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: a,
            useExpandedPanelId: s,
            ...c
          }) => {
            const { messages: l, renderItem: d, selected: m, isSingle: u } = c,
              p = d || P;
            return 0 === e.length
              ? (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, o.createElement)(i.A, { icon: k.A, role: 'img' }),
                  ),
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, n.sprintf)(l.noResults, t) : l.noItems,
                  ),
                )
              : (0, o.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, o.createElement)(I, {
                    useExpandedPanelId: s,
                    list: e,
                    selected: m,
                    renderItem: p,
                    onSelect: r,
                    instanceId: a,
                    isSingle: u,
                    search: t,
                  }),
                );
          },
          O = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: a,
                isLoading: i,
                isSingle: s,
                list: c,
                messages: d = h,
                onChange: p,
                onSearch: w,
                selected: g,
                type: _ = 'text',
                debouncedSpeak: b,
              } = e,
              [E, y] = (0, u.useState)(''),
              f = (0, u.useState)(-1),
              k = (0, R.useInstanceId)(O),
              S = (0, u.useMemo)(() => ({ ...h, ...d }), [d]),
              C = (0, u.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? v(e) : e;
                    const o = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!o.test(e.name) && e).filter(Boolean);
                    return r ? v(n, e) : n;
                  })(c, E, a),
                [c, E, a],
              );
            (0, u.useEffect)(() => {
              b && b(S.updated);
            }, [b, S]),
              (0, u.useEffect)(() => {
                'function' == typeof w && w(E);
              }, [E, w]);
            const N = (0, u.useCallback)(
                e => () => {
                  s && p([]);
                  const t = g.findIndex(({ id: t }) => t === e);
                  p([...g.slice(0, t), ...g.slice(t + 1)]);
                },
                [s, g, p],
              ),
              P = (0, u.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? p(e)
                    : -1 === g.findIndex(({ id: t }) => t === e.id)
                    ? p(s ? [e] : [...g, e])
                    : N(e.id)();
                },
                [s, N, p, g],
              ),
              I = (0, u.useCallback)(
                e => {
                  const [t] = g.filter(t => !e.find(e => t.id === e.id));
                  N(t.id)();
                },
                [N, g],
              );
            return (0, o.createElement)(
              'div',
              {
                className: m()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': i,
                  'is-token': 'token' === _,
                }),
              },
              'text' === _ && (0, o.createElement)(A, { ...e, onRemove: N, messages: S }),
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === _
                  ? (0, o.createElement)(l.TextControl, {
                      label: S.search,
                      type: 'search',
                      value: E,
                      onChange: e => y(e),
                    })
                  : (0, o.createElement)(l.FormTokenField, {
                      disabled: i,
                      label: S.search,
                      onChange: I,
                      onInputChange: e => y(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: i
                        ? [(0, n.__)('Loading…', 'woocommerce')]
                        : g.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              i
                ? (0, o.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, o.createElement)(l.Spinner, null),
                  )
                : (0, o.createElement)(L, {
                    ...e,
                    search: E,
                    filteredList: C,
                    messages: S,
                    onSelect: P,
                    instanceId: k,
                    useExpandedPanelId: f,
                  }),
            );
          },
          x =
            ((0, l.withSpokenMessages)(O),
            e => t => {
              let { selected: r } = t;
              r = void 0 === r ? null : r;
              const n = null === r;
              return Array.isArray(r)
                ? (0, o.createElement)(e, { ...t })
                : (0, o.createElement)(e, { ...t, selected: n ? [] : [r] });
            }),
          T = window.wc.wcSettings;
        var M, j, D, $, F, B, H, G, V, U;
        const W = (0, T.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          q =
            (W.pluginUrl,
            W.pluginUrl,
            W.buildPhase,
            null === (M = T.STORE_PAGES.shop) || void 0 === M || M.permalink,
            null === (j = T.STORE_PAGES.checkout) || void 0 === j || j.id,
            null === (D = T.STORE_PAGES.checkout) || void 0 === D || D.permalink,
            null === ($ = T.STORE_PAGES.privacy) || void 0 === $ || $.permalink,
            null === (F = T.STORE_PAGES.privacy) || void 0 === F || F.title,
            null === (B = T.STORE_PAGES.terms) || void 0 === B || B.permalink,
            null === (H = T.STORE_PAGES.terms) || void 0 === H || H.title,
            null === (G = T.STORE_PAGES.cart) || void 0 === G || G.id,
            null === (V = T.STORE_PAGES.cart) || void 0 === V || V.permalink,
            null !== (U = T.STORE_PAGES.myaccount) && void 0 !== U && U.permalink
              ? T.STORE_PAGES.myaccount.permalink
              : (0, T.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, T.getSetting)('localPickupEnabled', !1),
            (0, T.getSetting)('countries', {})),
          J = (0, T.getSetting)('countryData', {}),
          z =
            (Object.fromEntries(
              Object.keys(J)
                .filter(e => !0 === J[e].allowBilling)
                .map(e => [e, q[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(J)
                .filter(e => !0 === J[e].allowBilling)
                .map(e => [e, J[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(J)
                .filter(e => !0 === J[e].allowShipping)
                .map(e => [e, q[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(J)
                .filter(e => !0 === J[e].allowShipping)
                .map(e => [e, J[e].states || []]),
            ),
            Object.fromEntries(Object.keys(J).map(e => [e, J[e].locale || []])),
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
          Q =
            ((0, T.getSetting)('addressFieldsLocations', z).address,
            (0, T.getSetting)('addressFieldsLocations', z).contact,
            (0, T.getSetting)('addressFieldsLocations', z).order,
            (0, T.getSetting)('additionalOrderFields', {}),
            (0, T.getSetting)('additionalContactFields', {}),
            (0, T.getSetting)('additionalAddressFields', {}),
            window.wp.url),
          Y = window.wp.apiFetch;
        var K = r.n(Y);
        const Z = ({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
          const o = (({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
            const o = W.productCount > 100,
              n = {
                per_page: o ? 100 : 0,
                catalog_visibility: 'any',
                search: t,
                orderby: 'title',
                order: 'asc',
              },
              a = [(0, Q.addQueryArgs)('/wc/store/v1/products', { ...n, ...r })];
            return (
              o &&
                e.length &&
                a.push(
                  (0, Q.addQueryArgs)('/wc/store/v1/products', {
                    catalog_visibility: 'any',
                    include: e,
                    per_page: 0,
                  }),
                ),
              a
            );
          })({ selected: e, search: t, queryArgs: r });
          return Promise.all(o.map(e => K()({ path: e })))
            .then(e => {
              const t = ((e, t) => {
                const r = new Map();
                return e.filter(e => {
                  const o = t(e);
                  return !r.has(o) && (r.set(o, e), !0);
                });
              })(e.flat(), e => e.id);
              return t.map(e => ({ ...e, parent: 0 }));
            })
            .catch(e => {
              throw e;
            });
        };
        var X = r(4717);
        const ee = async e => {
          if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
          try {
            const t = await e.json();
            return { message: t.message, type: t.type || 'api' };
          } catch (e) {
            return { message: e.message, type: 'general' };
          }
        };
        var te = r(2294),
          re = r(923),
          oe = r.n(re);
        const ne = (0, R.createHigherOrderComponent)(e => {
            class t extends u.Component {
              constructor(...e) {
                super(...e),
                  (0, te.A)(this, 'state', { error: null, loading: !1, variations: {} }),
                  (0, te.A)(this, 'prevSelectedItem', void 0),
                  (0, te.A)(this, 'loadVariations', () => {
                    const { products: e } = this.props,
                      { loading: t, variations: r } = this.state;
                    if (t) return;
                    const o = this.getExpandedProduct();
                    if (!o || r[o]) return;
                    const n = e.find(e => e.id === o);
                    var a;
                    null != n && n.variations && 0 !== n.variations.length
                      ? (this.setState({ loading: !0 }),
                        ((a = o),
                        K()({
                          path: (0, Q.addQueryArgs)('wc/store/v1/products', {
                            per_page: 0,
                            type: 'variation',
                            parent: a,
                          }),
                        }))
                          .then(e => {
                            const t = e.map(e => ({ ...e, parent: o }));
                            this.setState({
                              variations: { ...this.state.variations, [o]: t },
                              loading: !1,
                              error: null,
                            });
                          })
                          .catch(async e => {
                            const t = await ee(e);
                            this.setState({
                              variations: { ...this.state.variations, [o]: null },
                              loading: !1,
                              error: t,
                            });
                          }))
                      : this.setState({
                          variations: { ...this.state.variations, [o]: null },
                          loading: !1,
                          error: null,
                        });
                  });
              }
              componentDidMount() {
                const { selected: e, showVariations: t } = this.props;
                e && t && this.loadVariations();
              }
              componentDidUpdate(e) {
                const { isLoading: t, selected: r, showVariations: o } = this.props;
                o && (!oe()(e.selected, r) || (e.isLoading && !t)) && this.loadVariations();
              }
              isProductId(e) {
                const { products: t } = this.props;
                return t.some(t => t.id === e);
              }
              findParentProduct(e) {
                var t;
                const { products: r } = this.props;
                return null ===
                  (t = r.filter(
                    t => t.variations && t.variations.find(({ id: t }) => t === e),
                  )[0]) || void 0 === t
                  ? void 0
                  : t.id;
              }
              getExpandedProduct() {
                const { isLoading: e, selected: t, showVariations: r } = this.props;
                if (!r) return null;
                let o = t && t.length ? t[0] : null;
                return (
                  o
                    ? (this.prevSelectedItem = o)
                    : !this.prevSelectedItem ||
                      e ||
                      this.isProductId(this.prevSelectedItem) ||
                      (o = this.prevSelectedItem),
                  !e && o ? (this.isProductId(o) ? o : this.findParentProduct(o)) : null
                );
              }
              render() {
                const { error: t, isLoading: r } = this.props,
                  { error: n, loading: a, variations: i } = this.state;
                return (0, o.createElement)(e, {
                  ...this.props,
                  error: n || t,
                  expandedProduct: this.getExpandedProduct(),
                  isLoading: r,
                  variations: i,
                  variationsLoading: a,
                });
              }
            }
            return t;
          }, 'withProductVariations'),
          ae = e => {
            const { id: t, name: r, parent: o } = e;
            return {
              id: t,
              name: r,
              parent: o,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          },
          ie = window.wp.escapeHtml,
          se = ({ error: e }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, n.__)('The following error was returned', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, ie.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, n.__)('The following error was returned from the API', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, ie.escapeHTML)(e)),
                      )
                    : e
                  : (0, n.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          ce = ({
            className: e,
            item: t,
            isSelected: r,
            isLoading: n,
            onSelect: a,
            disabled: i,
            ...s
          }) =>
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(E, {
                ...s,
                key: t.id,
                className: e,
                isSelected: r,
                item: t,
                onSelect: a,
                disabled: i,
              }),
              r &&
                n &&
                (0, o.createElement)(
                  'div',
                  {
                    key: 'loading',
                    className: m()(
                      'woocommerce-search-list__item',
                      'woocommerce-product-attributes__item',
                      'depth-1',
                      'is-loading',
                      'is-not-active',
                    ),
                  },
                  (0, o.createElement)(l.Spinner, null),
                ),
            );
        r(7369);
        const le = {
            list: (0, n.__)('Products', 'woocommerce'),
            noItems: (0, n.__)("Your store doesn't have any products.", 'woocommerce'),
            search: (0, n.__)('Search for a product to display', 'woocommerce'),
            updated: (0, n.__)('Product search results updated.', 'woocommerce'),
          },
          de = x(
            ((me = ne(
              (0, R.withInstanceId)(e => {
                const {
                  expandedProduct: t = null,
                  error: r,
                  instanceId: a,
                  isCompact: i = !1,
                  isLoading: s,
                  onChange: c,
                  onSearch: l,
                  products: d,
                  renderItem: u,
                  selected: p = [],
                  showVariations: w = !1,
                  variations: h,
                  variationsLoading: v,
                } = e;
                if (r) return (0, o.createElement)(se, { error: r });
                const g = [...d, ...(h && t && h[t] ? h[t] : [])].map(ae);
                return (0, o.createElement)(O, {
                  className: 'woocommerce-products',
                  list: g,
                  isCompact: i,
                  isLoading: s,
                  isSingle: !0,
                  selected: g.filter(({ id: e }) => p.includes(Number(e))),
                  onChange: c,
                  renderItem:
                    u ||
                    (w
                      ? e => {
                          var t, r, i, c;
                          const {
                              item: l,
                              search: d,
                              depth: u = 0,
                              isSelected: p,
                              onSelect: w,
                            } = e,
                            h =
                              null !== (t = l.details) &&
                              void 0 !== t &&
                              t.variations &&
                              Array.isArray(l.details.variations)
                                ? l.details.variations.length
                                : 0,
                            g = m()(
                              'woocommerce-search-product__item',
                              'woocommerce-search-list__item',
                              `depth-${u}`,
                              'has-count',
                              {
                                'is-searching': d.length > 0,
                                'is-skip-level': 0 === u && 0 !== l.parent,
                                'is-variable': h > 0,
                              },
                            );
                          if (!l.breadcrumbs.length) {
                            var _, b, y, k, R;
                            const t =
                              (null === (_ = l.details) || void 0 === _ ? void 0 : _.variations) &&
                              l.details.variations.length > 0;
                            return (0, o.createElement)(ce, {
                              ...e,
                              className: m()(g, { 'is-selected': p }),
                              isSelected: p,
                              item: l,
                              onSelect: () => () => {
                                w(l)();
                              },
                              isLoading: s || v,
                              countLabel: t
                                ? (0,
                                  n.sprintf) /* translators: %1$d is the number of variations of a product product. */(
                                    /* translators: %1$d is the number of variations of a product product. */
                                    (0, n.__)('%1$d variations', 'woocommerce'),
                                    null === (b = l.details) || void 0 === b
                                      ? void 0
                                      : b.variations.length,
                                  )
                                : null,
                              name: `products-${a}`,
                              'aria-label': t
                                ? (0,
                                  n.sprintf) /* translators: %1$s is the product name, %2$d is the number of variations of that product. */(
                                    /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
                                    (0, n._n)(
                                      '%1$s, has %2$d variation',
                                      '%1$s, has %2$d variations',
                                      null === (y = l.details) ||
                                        void 0 === y ||
                                        null === (k = y.variations) ||
                                        void 0 === k
                                        ? void 0
                                        : k.length,
                                      'woocommerce',
                                    ),
                                    l.name,
                                    null === (R = l.details) || void 0 === R
                                      ? void 0
                                      : R.variations.length,
                                  )
                                : void 0,
                            });
                          }
                          const S = (0, f.isEmpty)(
                            null === (r = l.details) || void 0 === r ? void 0 : r.variation,
                          )
                            ? e
                            : {
                                ...e,
                                item: {
                                  ...e.item,
                                  name:
                                    null === (i = l.details) || void 0 === i ? void 0 : i.variation,
                                },
                                'aria-label': `${l.breadcrumbs[0]}: ${
                                  null === (c = l.details) || void 0 === c ? void 0 : c.variation
                                }`,
                              };
                          return (0, o.createElement)(E, {
                            ...S,
                            className: g,
                            name: `variations-${a}`,
                          });
                        }
                      : () => null),
                  onSearch: l,
                  messages: le,
                  isHierarchical: !0,
                });
              }),
            )),
            ({ selected: e, ...t }) => {
              const [r, n] = (0, u.useState)(!0),
                [a, i] = (0, u.useState)(null),
                [s, c] = (0, u.useState)([]),
                l = W.productCount > 100,
                d = async e => {
                  const t = await ee(e);
                  i(t), n(!1);
                },
                m = (0, u.useRef)(e);
              (0, u.useEffect)(() => {
                Z({ selected: m.current })
                  .then(e => {
                    c(e), n(!1);
                  })
                  .catch(d);
              }, [m]);
              const p = (0, X.YQ)(t => {
                  Z({ selected: e, search: t })
                    .then(e => {
                      c(e), n(!1);
                    })
                    .catch(d);
                }, 400),
                w = (0, u.useCallback)(
                  e => {
                    n(!0), p(e);
                  },
                  [n, p],
                );
              return (0, o.createElement)(me, {
                ...t,
                selected: e,
                error: a,
                products: s,
                isLoading: r,
                onSearch: l ? w : null,
              });
            }),
          );
        var me,
          ue = r(3588);
        r(4974);
        const pe = ({ className: e = '', error: t, isLoading: r = !1, onRetry: a }) =>
          (0, o.createElement)(
            l.Placeholder,
            {
              icon: (0, o.createElement)(i.A, { icon: ue.A }),
              label: (0, n.__)('Sorry, an error occurred', 'woocommerce'),
              className: m()('wc-block-api-error', e),
            },
            (0, o.createElement)(se, { error: t }),
            a &&
              (0, o.createElement)(
                o.Fragment,
                null,
                r
                  ? (0, o.createElement)(l.Spinner, null)
                  : (0, o.createElement)(
                      l.Button,
                      { variant: 'secondary', onClick: a },
                      (0, n.__)('Retry', 'woocommerce'),
                    ),
              ),
          );
        r(113);
        const we = ({
            label: e,
            screenReaderLabel: t,
            wrapperElement: r,
            wrapperProps: n = {},
          }) => {
            let a;
            const i = null != e,
              s = null != t;
            return !i && s
              ? ((a = r || 'span'),
                (n = { ...n, className: m()(n.className, 'screen-reader-text') }),
                (0, o.createElement)(a, { ...n }, t))
              : ((a = r || u.Fragment),
                i && s && e !== t
                  ? (0, o.createElement)(
                      a,
                      { ...n },
                      (0, o.createElement)('span', { 'aria-hidden': 'true' }, e),
                      (0, o.createElement)('span', { className: 'screen-reader-text' }, t),
                    )
                  : (0, o.createElement)(a, { ...n }, e));
          },
          he = ({
            onClick: e,
            label: t = (0, n.__)('Load more', 'woocommerce'),
            screenReaderLabel: r = (0, n.__)('Load more', 'woocommerce'),
          }) =>
            (0, o.createElement)(
              'div',
              { className: 'wp-block-button wc-block-load-more wc-block-components-load-more' },
              (0, o.createElement)(
                'button',
                { className: 'wp-block-button__link', onClick: e },
                (0, o.createElement)(we, { label: t, screenReaderLabel: r }),
              ),
            ),
          ve = window.wc.blocksComponents;
        r(9836);
        const ge = ({ onChange: e, readOnly: t, value: r }) =>
          (0, o.createElement)(ve.SortSelect, {
            className: 'wc-block-review-sort-select wc-block-components-review-sort-select',
            label: (0, n.__)('Order by', 'woocommerce'),
            onChange: e,
            options: [
              { key: 'most-recent', label: (0, n.__)('Most recent', 'woocommerce') },
              { key: 'highest-rating', label: (0, n.__)('Highest rating', 'woocommerce') },
              { key: 'lowest-rating', label: (0, n.__)('Lowest rating', 'woocommerce') },
            ],
            readOnly: t,
            screenReaderLabel: (0, n.__)('Order reviews by', 'woocommerce'),
            value: r,
          });
        function _e(e) {
          let t,
            r,
            o,
            n = [];
          for (let a = 0; a < e.length; a++)
            (t = e.substring(a)),
              (r = t.match(/^&[a-z0-9#]+;/)),
              r ? ((o = r[0]), n.push(o), (a += o.length - 1)) : n.push(e[a]);
          return n;
        }
        const be = (e, t, r = '...') => {
            const o = (function(e, t) {
              const r = (t = t || {}).limit || 100,
                o = void 0 === t.preserveTags || t.preserveTags,
                n = void 0 !== t.wordBreak && t.wordBreak,
                a = t.suffix || '...',
                i = t.moreLink || '',
                s = t.moreText || '»',
                c = t.preserveWhiteSpace || !1,
                l = e
                  .replace(/</g, '\n<')
                  .replace(/>/g, '>\n')
                  .replace(/\n\n/g, '\n')
                  .replace(/^\n/g, '')
                  .replace(/\n$/g, '')
                  .split('\n');
              let d,
                m,
                u,
                p,
                w,
                h,
                v = 0,
                g = [],
                _ = !1;
              for (let e = 0; e < l.length; e++) {
                if (((d = l[e]), (p = c ? d : d.replace(/[ ]+/g, ' ')), !d.length)) continue;
                const t = _e(p);
                if ('<' !== d[0])
                  if (v >= r) d = '';
                  else if (v + t.length >= r) {
                    if (((m = r - v), ' ' === t[m - 1]))
                      for (; m && ((m -= 1), ' ' === t[m - 1]); );
                    else (u = t.slice(m).indexOf(' ')), n || (-1 !== u ? (m += u) : (m = d.length));
                    (d = t.slice(0, m).join('') + a),
                      i && (d += '<a href="' + i + '" style="display:inline">' + s + '</a>'),
                      (v = r),
                      (_ = !0);
                  } else v += t.length;
                else if (o) {
                  if (v >= r)
                    if (((w = d.match(/[a-zA-Z]+/)), (h = w ? w[0] : ''), h))
                      if ('</' !== d.substring(0, 2)) g.push(h), (d = '');
                      else {
                        for (; g[g.length - 1] !== h && g.length; ) g.pop();
                        g.length && (d = ''), g.pop();
                      }
                    else d = '';
                } else d = '';
                l[e] = d;
              }
              return { html: l.join('\n').replace(/\n/g, ''), more: _ };
            })(e, { suffix: r, limit: t });
            return o.html;
          },
          Ee = (e, t, r) => (t <= r ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e),
          ye = (e, t, r, o) => {
            const n = ((e, t, r) => {
              let o = { start: 0, middle: 0, end: e.length };
              for (; o.start <= o.end; )
                (o.middle = Math.floor((o.start + o.end) / 2)),
                  (t.innerHTML = be(e, o.middle)),
                  (o = Ee(o, t.clientHeight, r));
              return o.middle;
            })(e, t, r);
            return be(e, n - o.length, o);
          },
          fe = {
            className: 'read-more-content',
            ellipsis: '&hellip;',
            lessText: (0, n.__)('Read less', 'woocommerce'),
            maxLines: 3,
            moreText: (0, n.__)('Read more', 'woocommerce'),
          };
        class ke extends u.Component {
          constructor(e) {
            super(e),
              (0, te.A)(this, 'reviewSummary', void 0),
              (0, te.A)(this, 'reviewContent', void 0),
              (this.state = {
                isExpanded: !1,
                clampEnabled: null,
                content: e.children,
                summary: '.',
              }),
              (this.reviewContent = (0, u.createRef)()),
              (this.reviewSummary = (0, u.createRef)()),
              (this.getButton = this.getButton.bind(this)),
              (this.onClick = this.onClick.bind(this));
          }
          componentDidMount() {
            this.setSummary();
          }
          componentDidUpdate(e) {
            (e.maxLines === this.props.maxLines && e.children === this.props.children) ||
              this.setState({ clampEnabled: null, summary: '.' }, this.setSummary);
          }
          setSummary() {
            if (this.props.children) {
              const { maxLines: e, ellipsis: t } = this.props;
              if (!this.reviewSummary.current || !this.reviewContent.current) return;
              const r = (this.reviewSummary.current.clientHeight + 1) * e + 1,
                o = this.reviewContent.current.clientHeight + 1 > r;
              this.setState({ clampEnabled: o }),
                o &&
                  this.setState({
                    summary: ye(
                      this.reviewContent.current.innerHTML,
                      this.reviewSummary.current,
                      r,
                      t,
                    ),
                  });
            }
          }
          getButton() {
            const { isExpanded: e } = this.state,
              { className: t, lessText: r, moreText: n } = this.props,
              a = e ? r : n;
            if (a)
              return (0, o.createElement)(
                'a',
                {
                  href: '#more',
                  className: t + '__read_more',
                  onClick: this.onClick,
                  'aria-expanded': !e,
                  role: 'button',
                },
                a,
              );
          }
          onClick(e) {
            e.preventDefault();
            const { isExpanded: t } = this.state;
            this.setState({ isExpanded: !t });
          }
          render() {
            const { className: e } = this.props,
              { content: t, summary: r, clampEnabled: n, isExpanded: a } = this.state;
            return t
              ? !1 === n
                ? (0, o.createElement)(
                    'div',
                    { className: e },
                    (0, o.createElement)('div', { ref: this.reviewContent }, t),
                  )
                : (0, o.createElement)(
                    'div',
                    { className: e },
                    (!a || null === n) &&
                      (0, o.createElement)('div', {
                        ref: this.reviewSummary,
                        'aria-hidden': a,
                        dangerouslySetInnerHTML: { __html: r },
                      }),
                    (a || null === n) &&
                      (0, o.createElement)(
                        'div',
                        { ref: this.reviewContent, 'aria-hidden': !a },
                        t,
                      ),
                    this.getButton(),
                  )
              : null;
          }
        }
        (0, te.A)(ke, 'defaultProps', fe);
        const Re = ke;
        r(7935);
        const Se = ({ attributes: e, review: t = {} }) => {
          const {
              imageType: r,
              showReviewDate: a,
              showReviewerName: i,
              showReviewImage: s,
              showReviewRating: c,
              showReviewContent: l,
              showProductName: d,
            } = e,
            { rating: u } = t,
            p = !(Object.keys(t).length > 0),
            w = Number.isFinite(u) && c;
          return (0, o.createElement)(
            'li',
            {
              className: m()(
                'wc-block-review-list-item__item',
                'wc-block-components-review-list-item__item',
                { 'is-loading': p, 'wc-block-components-review-list-item__item--has-image': s },
              ),
              'aria-hidden': p,
            },
            (d || a || i || s || w) &&
              (0, o.createElement)(
                'div',
                {
                  className:
                    'wc-block-review-list-item__info wc-block-components-review-list-item__info',
                },
                s &&
                  (function(e, t, r) {
                    var a, i;
                    return r || !e
                      ? (0, o.createElement)('div', {
                          className:
                            'wc-block-review-list-item__image wc-block-components-review-list-item__image',
                        })
                      : (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__image wc-block-components-review-list-item__image',
                          },
                          'product' === t
                            ? (0, o.createElement)('img', {
                                'aria-hidden': 'true',
                                alt:
                                  (null === (a = e.product_image) || void 0 === a
                                    ? void 0
                                    : a.alt) || '',
                                src:
                                  (null === (i = e.product_image) || void 0 === i
                                    ? void 0
                                    : i.thumbnail) || '',
                              })
                            : (0, o.createElement)('img', {
                                'aria-hidden': 'true',
                                alt: '',
                                src: e.reviewer_avatar_urls[96] || '',
                              }),
                          e.verified &&
                            (0, o.createElement)(
                              'div',
                              {
                                className:
                                  'wc-block-review-list-item__verified wc-block-components-review-list-item__verified',
                                title: (0, n.__)('Verified buyer', 'woocommerce'),
                              },
                              (0, n.__)('Verified buyer', 'woocommerce'),
                            ),
                        );
                  })(t, r, p),
                (d || i || w || a) &&
                  (0, o.createElement)(
                    'div',
                    {
                      className:
                        'wc-block-review-list-item__meta wc-block-components-review-list-item__meta',
                    },
                    w &&
                      (function(e) {
                        const { rating: t } = e,
                          r = { width: (t / 5) * 100 + '%' },
                          a = (0,
                          n.sprintf) /* translators: %f is referring to the average rating value */(
                            /* translators: %f is referring to the average rating value */
                            (0, n.__)('Rated %f out of 5', 'woocommerce'),
                            t,
                          ),
                          i = {
                            __html: (0,
                            n.sprintf) /* translators: %s is referring to the average rating value */(
                              /* translators: %s is referring to the average rating value */
                              (0, n.__)('Rated %s out of 5', 'woocommerce'),
                              (0, n.sprintf)('<strong class="rating">%f</strong>', t),
                            ),
                          };
                        return (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__rating wc-block-components-review-list-item__rating',
                          },
                          (0, o.createElement)(
                            'div',
                            {
                              className:
                                'wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars',
                              role: 'img',
                              'aria-label': a,
                            },
                            (0, o.createElement)('span', { style: r, dangerouslySetInnerHTML: i }),
                          ),
                        );
                      })(t),
                    d &&
                      (function(e) {
                        return (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__product wc-block-components-review-list-item__product',
                          },
                          (0, o.createElement)('a', {
                            href: e.product_permalink,
                            dangerouslySetInnerHTML: { __html: e.product_name },
                          }),
                        );
                      })(t),
                    i &&
                      (function(e) {
                        const { reviewer: t = '' } = e;
                        return (0, o.createElement)(
                          'div',
                          {
                            className:
                              'wc-block-review-list-item__author wc-block-components-review-list-item__author',
                          },
                          t,
                        );
                      })(t),
                    a &&
                      (function(e) {
                        const { date_created: t, formatted_date_created: r } = e;
                        return (0, o.createElement)(
                          'time',
                          {
                            className:
                              'wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date',
                            dateTime: t,
                          },
                          r,
                        );
                      })(t),
                  ),
              ),
            l &&
              (function(e) {
                return (0, o.createElement)(
                  Re,
                  {
                    maxLines: 10,
                    moreText: (0, n.__)('Read full review', 'woocommerce'),
                    lessText: (0, n.__)('Hide full review', 'woocommerce'),
                    className:
                      'wc-block-review-list-item__text wc-block-components-review-list-item__text',
                  },
                  (0, o.createElement)('div', {
                    dangerouslySetInnerHTML: { __html: e.review || '' },
                  }),
                );
              })(t),
          );
        };
        r(4105);
        const Ce = ({ attributes: e, reviews: t }) => {
            const r = (0, T.getSetting)('showAvatars', !0),
              n = (0, T.getSetting)('reviewRatingsEnabled', !0),
              a = (r || 'product' === e.imageType) && e.showReviewImage,
              i = n && e.showReviewRating,
              s = { ...e, showReviewImage: a, showReviewRating: i };
            return (0, o.createElement)(
              'ul',
              { className: 'wc-block-review-list wc-block-components-review-list' },
              0 === t.length
                ? (0, o.createElement)(Se, { attributes: s })
                : t.map((e, t) =>
                    (0, o.createElement)(Se, { key: e.id || t, attributes: s, review: e }),
                  ),
            );
          },
          Ne = e => {
            const {
              className: t,
              categoryIds: r,
              productId: o,
              showReviewDate: n,
              showReviewerName: a,
              showReviewContent: i,
              showProductName: s,
              showReviewImage: c,
              showReviewRating: l,
            } = e;
            let d = 'wc-block-all-reviews';
            return (
              o && (d = 'wc-block-reviews-by-product'),
              Array.isArray(r) && (d = 'wc-block-reviews-by-category'),
              m()(d, t, {
                'has-image': c,
                'has-name': a,
                'has-date': n,
                'has-rating': l,
                'has-content': i,
                'has-product-name': s,
              })
            );
          },
          Pe = e => {
            const {
                categoryIds: t,
                imageType: r,
                orderby: o,
                productId: n,
                reviewsOnPageLoad: a,
                reviewsOnLoadMore: i,
                showLoadMore: s,
                showOrderby: c,
              } = e,
              l = {
                'data-image-type': r,
                'data-orderby': o,
                'data-reviews-on-page-load': a,
                'data-reviews-on-load-more': i,
                'data-show-load-more': s,
                'data-show-orderby': c,
              };
            return (
              n && (l['data-product-id'] = n),
              Array.isArray(t) && (l['data-category-ids'] = t.join(',')),
              l
            );
          };
        class Ie extends u.Component {
          render() {
            const {
              attributes: e,
              error: t,
              isLoading: r,
              noReviewsPlaceholder: a,
              reviews: i,
              totalReviews: s,
            } = this.props;
            if (t)
              return (0, o.createElement)(pe, {
                className: 'wc-block-featured-product-error',
                error: t,
                isLoading: r,
              });
            if (0 === i.length && !r) return (0, o.createElement)(a, { attributes: e });
            const c = (0, T.getSetting)('reviewRatingsEnabled', !0);
            return (0, o.createElement)(
              l.Disabled,
              null,
              e.showOrderby &&
                c &&
                (0, o.createElement)(ge, { readOnly: !0, value: e.orderby, onChange: () => null }),
              (0, o.createElement)(Ce, { attributes: e, reviews: i }),
              e.showLoadMore &&
                s > i.length &&
                (0, o.createElement)(he, {
                  screenReaderLabel: (0, n.__)('Load more reviews', 'woocommerce'),
                  onClick: () => null,
                }),
            );
          }
        }
        const Ae = (e => {
            class t extends u.Component {
              constructor(...e) {
                super(...e),
                  (0, te.A)(this, 'isPreview', !!this.props.attributes.previewReviews),
                  (0, te.A)(
                    this,
                    'delayedAppendReviews',
                    this.props.delayFunction(this.appendReviews),
                  ),
                  (0, te.A)(this, 'isMounted', !1),
                  (0, te.A)(this, 'state', {
                    error: null,
                    loading: !0,
                    reviews: this.isPreview ? this.props.attributes.previewReviews : [],
                    totalReviews: this.isPreview ? this.props.attributes.previewReviews.length : 0,
                  }),
                  (0, te.A)(this, 'setError', async e => {
                    if (!this.isMounted) return;
                    const { onReviewsLoadError: t } = this.props,
                      r = await ee(e);
                    this.setState({ reviews: [], loading: !1, error: r }), t(r);
                  });
              }
              componentDidMount() {
                (this.isMounted = !0), this.replaceReviews();
              }
              componentDidUpdate(e) {
                e.reviewsToDisplay < this.props.reviewsToDisplay
                  ? this.delayedAppendReviews()
                  : this.shouldReplaceReviews(e, this.props) && this.replaceReviews();
              }
              shouldReplaceReviews(e, t) {
                return (
                  e.orderby !== t.orderby ||
                  e.order !== t.order ||
                  e.productId !== t.productId ||
                  !oe()(e.categoryIds, t.categoryIds)
                );
              }
              componentWillUnmount() {
                (this.isMounted = !1),
                  this.delayedAppendReviews.cancel && this.delayedAppendReviews.cancel();
              }
              getArgs(e) {
                const {
                    categoryIds: t,
                    order: r,
                    orderby: o,
                    productId: n,
                    reviewsToDisplay: a,
                  } = this.props,
                  i = { order: r, orderby: o, per_page: a - e, offset: e };
                if (t) {
                  const e = Array.isArray(t) ? t : JSON.parse(t);
                  i.category_id = Array.isArray(e) ? e.join(',') : e;
                }
                return n && (i.product_id = n), i;
              }
              replaceReviews() {
                if (this.isPreview) return;
                const { onReviewsReplaced: e } = this.props;
                this.updateListOfReviews().then(e);
              }
              appendReviews() {
                if (this.isPreview) return;
                const { onReviewsAppended: e, reviewsToDisplay: t } = this.props,
                  { reviews: r } = this.state;
                t <= r.length || this.updateListOfReviews(r).then(e);
              }
              updateListOfReviews(e = []) {
                const { reviewsToDisplay: t } = this.props,
                  { totalReviews: r } = this.state,
                  o = Math.min(r, t) - e.length;
                return (
                  this.setState({ loading: !0, reviews: e.concat(Array(o).fill({})) }),
                  ((n = this.getArgs(e.length)),
                  K()({
                    path:
                      '/wc/store/v1/products/reviews?' +
                      Object.entries(n)
                        .map(e => e.join('='))
                        .join('&'),
                    parse: !1,
                  }).then(e =>
                    e.json().then(t => ({
                      reviews: t,
                      totalReviews: parseInt(e.headers.get('x-wp-total'), 10),
                    })),
                  ))
                    .then(
                      ({ reviews: t, totalReviews: r }) => (
                        this.isMounted &&
                          this.setState({
                            reviews: e.filter(e => Object.keys(e).length).concat(t),
                            totalReviews: r,
                            loading: !1,
                            error: null,
                          }),
                        { newReviews: t }
                      ),
                    )
                    .catch(this.setError)
                );
                var n;
              }
              render() {
                const { reviewsToDisplay: t } = this.props,
                  { error: r, loading: n, reviews: a, totalReviews: i } = this.state;
                return (0, o.createElement)(e, {
                  ...this.props,
                  error: r,
                  isLoading: n,
                  reviews: a.slice(0, t),
                  totalReviews: i,
                });
              }
            }
            (0, te.A)(t, 'defaultProps', {
              delayFunction: e => e,
              onReviewsAppended: () => {},
              onReviewsLoadError: () => {},
              onReviewsReplaced: () => {},
            });
            const { displayName: r = e.name || 'Component' } = e;
            return (t.displayName = `WithReviews( ${r} )`), t;
          })(Ie),
          Le = ({ attributes: e, icon: t, name: r, noReviewsPlaceholder: a }) => {
            const {
                categoryIds: i,
                productId: s,
                reviewsOnPageLoad: d,
                showProductName: m,
                showReviewDate: u,
                showReviewerName: p,
                showReviewContent: w,
                showReviewImage: h,
                showReviewRating: v,
              } = e,
              { order: g, orderby: _ } = (e => {
                if ((0, T.getSetting)('reviewRatingsEnabled', !0)) {
                  if ('lowest-rating' === e) return { order: 'asc', orderby: 'rating' };
                  if ('highest-rating' === e) return { order: 'desc', orderby: 'rating' };
                }
                return { order: 'desc', orderby: 'date_gmt' };
              })(e.orderby),
              b = !(w || v || u || p || h || m),
              E = (0, c.useBlockProps)({ className: Ne(e) });
            return b
              ? (0, o.createElement)(
                  l.Placeholder,
                  { icon: t, label: r },
                  (0, n.__)(
                    'The content for this block is hidden due to block settings.',
                    'woocommerce',
                  ),
                )
              : (0, o.createElement)(
                  'div',
                  { ...E },
                  (0, o.createElement)(Ae, {
                    attributes: e,
                    categoryIds: i,
                    delayFunction: e =>
                      ((e, t, r) => {
                        let o,
                          n = null;
                        const a = (...t) => {
                          (n = t),
                            o && clearTimeout(o),
                            (o = setTimeout(() => {
                              (o = null), n && e(...n);
                            }, 400));
                        };
                        return (
                          (a.flush = () => {
                            o && n && (e(...n), clearTimeout(o), (o = null));
                          }),
                          a
                        );
                      })(e),
                    noReviewsPlaceholder: a,
                    orderby: _,
                    order: g,
                    productId: s,
                    reviewsToDisplay: d,
                  }),
                );
          },
          Oe = (0, R.createHigherOrderComponent)(
            e =>
              class extends u.Component {
                constructor(...e) {
                  super(...e),
                    (0, te.A)(this, 'state', {
                      error: null,
                      loading: !1,
                      product:
                        'preview' === this.props.attributes.productId
                          ? this.props.attributes.previewProduct
                          : null,
                    }),
                    (0, te.A)(this, 'loadProduct', () => {
                      const { productId: e } = this.props.attributes;
                      'preview' !== e &&
                        (e
                          ? (this.setState({ loading: !0 }),
                            (e => K()({ path: `/wc/store/v1/products/${e}` }))(e)
                              .then(e => {
                                this.setState({ product: e, loading: !1, error: null });
                              })
                              .catch(async e => {
                                const t = await ee(e);
                                this.setState({ product: null, loading: !1, error: t });
                              }))
                          : this.setState({ product: null, loading: !1, error: null }));
                    });
                }
                componentDidMount() {
                  this.loadProduct();
                }
                componentDidUpdate(e) {
                  e.attributes.productId !== this.props.attributes.productId && this.loadProduct();
                }
                render() {
                  const { error: t, loading: r, product: n } = this.state;
                  return (0, o.createElement)(e, {
                    ...this.props,
                    error: t,
                    getProduct: this.loadProduct,
                    isLoading: r,
                    product: n,
                  });
                }
              },
            'withProduct',
          )(({ error: e, getProduct: t, isLoading: r, product: a }) => {
            if (e)
              return (0, o.createElement)(pe, {
                className: 'wc-block-featured-product-error',
                error: e,
                isLoading: r,
                onRetry: t,
              });
            const c =
              !a || r
                ? (0, o.createElement)(l.Spinner, null)
                : (0, n.sprintf) /* translators: %s is the product name. */(
                    /* translators: %s is the product name. */
                    (0, n.__)(
                      "This block lists reviews for a selected product. %s doesn't have any reviews yet, but they will show up here when it does.",
                      'woocommerce',
                    ),
                    (0, w.decodeEntities)(a.name),
                  );
            return (0, o.createElement)(
              l.Placeholder,
              {
                className: 'wc-block-reviews-by-product',
                icon: (0, o.createElement)(i.A, {
                  icon: s.A,
                  className: 'block-editor-block-icon',
                }),
                label: (0, n.__)('Reviews by Product', 'woocommerce'),
              },
              c,
            );
          }),
          xe = (0, l.withSpokenMessages)(
            ({ attributes: e, debouncedSpeak: t, setAttributes: r }) => {
              const { editMode: a, productId: d } = e,
                m = e => {
                  const { item: t = 0 } = e;
                  return (0, o.createElement)(E, {
                    ...e,
                    item: { ...t, count: t.details.review_count },
                    countLabel: (0, n.sprintf) /* translators: %d is the review count. */(
                      /* translators: %d is the review count. */
                      (0, n._n)('%d review', '%d reviews', t.details.review_count, 'woocommerce'),
                      t.details.review_count,
                    ),
                    'aria-label': (0,
                    n.sprintf) /* translators: %1$s is the item name, and %2$d is the number of reviews for the item. */(
                      /* translators: %1$s is the item name, and %2$d is the number of reviews for the item. */
                      (0, n._n)(
                        '%1$s, has %2$d review',
                        '%1$s, has %2$d reviews',
                        t.details.review_count,
                        'woocommerce',
                      ),
                      (0, w.decodeEntities)(t.name),
                      t.details.review_count,
                    ),
                  });
                };
              if (!d || a)
                return (0, o.createElement)(
                  l.Placeholder,
                  {
                    icon: (0, o.createElement)(i.A, {
                      icon: s.A,
                      className: 'block-editor-block-icon',
                    }),
                    label: (0, n.__)('Reviews by Product', 'woocommerce'),
                    className: 'wc-block-reviews-by-product',
                  },
                  (0, n.__)('Show reviews of your product to build trust', 'woocommerce'),
                  (0, o.createElement)(
                    'div',
                    { className: 'wc-block-reviews__selection' },
                    (0, o.createElement)(de, {
                      selected: e.productId || 0,
                      onChange: (e = []) => {
                        const t = e[0] ? e[0].id : 0;
                        r({ productId: t });
                      },
                      queryArgs: { orderby: 'comment_count', order: 'desc' },
                      renderItem: m,
                    }),
                    (0, o.createElement)(
                      l.Button,
                      {
                        variant: 'primary',
                        onClick: () => {
                          r({ editMode: !1 }),
                            t(
                              (0, n.__)('Showing Reviews by Product block preview.', 'woocommerce'),
                            );
                        },
                      },
                      (0, n.__)('Done', 'woocommerce'),
                    ),
                  ),
                );
              const p = (0, n.__)('Edit selected product', 'woocommerce');
              return (0, o.createElement)(
                o.Fragment,
                null,
                ((e, t, r) =>
                  (0, o.createElement)(
                    c.BlockControls,
                    null,
                    (0, o.createElement)(l.ToolbarGroup, {
                      controls: [
                        { icon: 'edit', title: r, onClick: () => t({ editMode: !e }), isActive: e },
                      ],
                    }),
                  ))(a, r, p),
                (0, o.createElement)(
                  c.InspectorControls,
                  { key: 'inspector' },
                  (0, o.createElement)(
                    l.PanelBody,
                    { title: (0, n.__)('Product', 'woocommerce'), initialOpen: !1 },
                    (0, o.createElement)(de, {
                      selected: e.productId || 0,
                      onChange: (e = []) => {
                        const t = e[0] ? e[0].id : 0;
                        r({ productId: t });
                      },
                      renderItem: m,
                      isCompact: !0,
                    }),
                  ),
                  (0, o.createElement)(
                    l.PanelBody,
                    { title: (0, n.__)('Content', 'woocommerce') },
                    ((e, t) => {
                      const r = (0, T.getSetting)('showAvatars', !0),
                        a = (0, T.getSetting)('reviewRatingsEnabled', !0);
                      return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Product rating', 'woocommerce'),
                          checked: e.showReviewRating,
                          onChange: () => t({ showReviewRating: !e.showReviewRating }),
                        }),
                        e.showReviewRating &&
                          !a &&
                          (0, o.createElement)(
                            l.Notice,
                            { className: 'wc-block-base-control-notice', isDismissible: !1 },
                            (0, u.createInterpolateElement)(
                              (0, n.__)(
                                'Product rating is disabled in your <a>store settings</a>.',
                                'woocommerce',
                              ),
                              {
                                a: (0, o.createElement)('a', {
                                  href: (0, T.getAdminLink)(
                                    'admin.php?page=wc-settings&tab=products',
                                  ),
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                }),
                              },
                            ),
                          ),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Reviewer name', 'woocommerce'),
                          checked: e.showReviewerName,
                          onChange: () => t({ showReviewerName: !e.showReviewerName }),
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Image', 'woocommerce'),
                          checked: e.showReviewImage,
                          onChange: () => t({ showReviewImage: !e.showReviewImage }),
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Review date', 'woocommerce'),
                          checked: e.showReviewDate,
                          onChange: () => t({ showReviewDate: !e.showReviewDate }),
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Review content', 'woocommerce'),
                          checked: e.showReviewContent,
                          onChange: () => t({ showReviewContent: !e.showReviewContent }),
                        }),
                        e.showReviewImage &&
                          (0, o.createElement)(
                            o.Fragment,
                            null,
                            (0, o.createElement)(
                              l.__experimentalToggleGroupControl,
                              {
                                label: (0, n.__)('Review image', 'woocommerce'),
                                value: e.imageType,
                                onChange: e => t({ imageType: e }),
                              },
                              (0, o.createElement)(l.__experimentalToggleGroupControlOption, {
                                value: 'reviewer',
                                label: (0, n.__)('Reviewer photo', 'woocommerce'),
                              }),
                              (0, o.createElement)(l.__experimentalToggleGroupControlOption, {
                                value: 'product',
                                label: (0, n.__)('Product', 'woocommerce'),
                              }),
                            ),
                            'reviewer' === e.imageType &&
                              !r &&
                              (0, o.createElement)(
                                l.Notice,
                                { className: 'wc-block-base-control-notice', isDismissible: !1 },
                                (0, u.createInterpolateElement)(
                                  (0, n.__)(
                                    'Reviewer photo is disabled in your <a>site settings</a>.',
                                    'woocommerce',
                                  ),
                                  {
                                    a: (0, o.createElement)('a', {
                                      href: (0, T.getAdminLink)('options-discussion.php'),
                                      target: '_blank',
                                      rel: 'noopener noreferrer',
                                    }),
                                  },
                                ),
                              ),
                          ),
                      );
                    })(e, r),
                  ),
                  (0, o.createElement)(
                    l.PanelBody,
                    { title: (0, n.__)('List Settings', 'woocommerce') },
                    ((e, t) =>
                      (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Order by', 'woocommerce'),
                          checked: e.showOrderby,
                          onChange: () => t({ showOrderby: !e.showOrderby }),
                        }),
                        (0, o.createElement)(l.SelectControl, {
                          label: (0, n.__)('Order Product Reviews by', 'woocommerce'),
                          value: e.orderby,
                          options: [
                            { label: 'Most recent', value: 'most-recent' },
                            { label: 'Highest Rating', value: 'highest-rating' },
                            { label: 'Lowest Rating', value: 'lowest-rating' },
                          ],
                          onChange: e => t({ orderby: e }),
                        }),
                        (0, o.createElement)(l.RangeControl, {
                          label: (0, n.__)('Starting Number of Reviews', 'woocommerce'),
                          value: e.reviewsOnPageLoad,
                          onChange: e => t({ reviewsOnPageLoad: e }),
                          max: 20,
                          min: 1,
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, n.__)('Load more', 'woocommerce'),
                          checked: e.showLoadMore,
                          onChange: () => t({ showLoadMore: !e.showLoadMore }),
                        }),
                        e.showLoadMore &&
                          (0, o.createElement)(l.RangeControl, {
                            label: (0, n.__)('Load More Reviews', 'woocommerce'),
                            value: e.reviewsOnLoadMore,
                            onChange: e => t({ reviewsOnLoadMore: e }),
                            max: 20,
                            min: 1,
                          }),
                      ))(e, r),
                  ),
                ),
                (0, o.createElement)(Le, {
                  attributes: e,
                  icon: (0, o.createElement)(i.A, {
                    icon: s.A,
                    className: 'block-editor-block-icon',
                  }),
                  name: (0, n.__)('Reviews by Product', 'woocommerce'),
                  noReviewsPlaceholder: Oe,
                }),
              );
            },
          ),
          Te = {
            attributes: {
              editMode: !1,
              imageType: 'reviewer',
              orderby: 'most-recent',
              reviewsOnLoadMore: 10,
              reviewsOnPageLoad: 10,
              showLoadMore: !0,
              showOrderby: !0,
              showReviewDate: !0,
              showReviewerName: !0,
              showReviewImage: !0,
              showReviewRating: !0,
              showReviewContent: !0,
              previewReviews: [
                {
                  id: 1,
                  date_created: '2019-07-15T17:05:04',
                  formatted_date_created: (0, n.__)('July 15, 2019', 'woocommerce'),
                  date_created_gmt: '2019-07-15T15:05:04',
                  product_id: 0,
                  product_name: (0, n.__)('WordPress Pennant', 'woocommerce'),
                  product_permalink: '#',
                  /* translators: An example person name used for the block previews. */
                  reviewer: (0, n.__)('Alice', 'woocommerce'),
                  review: `<p>${(0, n.__)(
                    "I bought this product last week and I'm very happy with it.",
                    'woocommerce',
                  )}</p>\n`,
                  reviewer_avatar_urls: { 48: W.defaultAvatar, 96: W.defaultAvatar },
                  rating: 5,
                  verified: !0,
                },
                {
                  id: 2,
                  date_created: '2019-07-12T12:39:39',
                  formatted_date_created: (0, n.__)('July 12, 2019', 'woocommerce'),
                  date_created_gmt: '2019-07-12T10:39:39',
                  product_id: 0,
                  product_name: (0, n.__)('WordPress Pennant', 'woocommerce'),
                  product_permalink: '#',
                  /* translators: An example person name used for the block previews. */
                  reviewer: (0, n.__)('Bob', 'woocommerce'),
                  review: `<p>${(0, n.__)(
                    'This product is awesome, I love it!',
                    'woocommerce',
                  )}</p>\n`,
                  reviewer_avatar_urls: { 48: W.defaultAvatar, 96: W.defaultAvatar },
                  rating: null,
                  verified: !1,
                },
              ],
            },
          };
        (0, a.registerBlockType)('woocommerce/reviews-by-product', {
          apiVersion: 2,
          title: (0, n.__)('Reviews by Product', 'woocommerce'),
          icon: {
            src: (0, o.createElement)(i.A, {
              icon: s.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          category: 'woocommerce',
          keywords: [(0, n.__)('WooCommerce', 'woocommerce')],
          description: (0, n.__)('Display reviews for your products.', 'woocommerce'),
          supports: { html: !1, color: { background: !1 }, typography: { fontSize: !0 } },
          example: { ...Te, attributes: { ...Te.attributes, productId: 1 } },
          attributes: {
            editMode: { type: 'boolean', default: !0 },
            imageType: { type: 'string', default: 'reviewer' },
            orderby: { type: 'string', default: 'most-recent' },
            reviewsOnLoadMore: { type: 'number', default: 10 },
            reviewsOnPageLoad: { type: 'number', default: 10 },
            showLoadMore: { type: 'boolean', default: !0 },
            showOrderby: { type: 'boolean', default: !0 },
            showReviewDate: { type: 'boolean', default: !0 },
            showReviewerName: { type: 'boolean', default: !0 },
            showReviewImage: { type: 'boolean', default: !0 },
            showReviewRating: { type: 'boolean', default: !0 },
            showReviewContent: { type: 'boolean', default: !0 },
            previewReviews: { type: 'array', default: null },
            productId: { type: 'number' },
          },
          edit: e => (0, o.createElement)(xe, { ...e }),
          save: ({ attributes: e }) =>
            (0, o.createElement)('div', {
              ...c.useBlockProps.save({ className: Ne(e) }),
              ...Pe(e),
            }),
        });
      },
      113: () => {},
      7935: () => {},
      4105: () => {},
      9836: () => {},
      1227: () => {},
      4974: () => {},
      7369: () => {},
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
  function a(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, a), r.exports;
  }
  (a.m = o),
    (e = []),
    (a.O = (t, r, o, n) => {
      if (!r) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, o, n] = e[d], s = !0, c = 0; c < r.length; c++)
            (!1 & n || i >= n) && Object.keys(a.O).every(e => a.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((s = !1), n < i && (i = n));
          if (s) {
            e.splice(d--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [r, o, n];
    }),
    (a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (a.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      a.r(n);
      var i = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var s = 2 & o && e; 'object' == typeof s && !~t.indexOf(s); s = r(s))
        Object.getOwnPropertyNames(s).forEach(t => (i[t] = () => e[t]));
      return (i.default = () => e), a.d(n, i), n;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.j = 1890),
    (() => {
      var e = { 1890: 0 };
      a.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [i, s, c] = r,
            l = 0;
          if (i.some(t => 0 !== e[t])) {
            for (o in s) a.o(s, o) && (a.m[o] = s[o]);
            if (c) var d = c(a);
          }
          for (t && t(r); l < i.length; l++) (n = i[l]), a.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return a.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = a.O(void 0, [94], () => a(3605));
  (i = a.O(i)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['reviews-by-product'] = i);
})();
