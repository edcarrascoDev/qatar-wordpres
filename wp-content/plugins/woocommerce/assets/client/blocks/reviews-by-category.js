(() => {
  var e,
    t,
    r,
    o = {
      2779: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609),
          a = r(7723);
        const n = window.wp.blocks;
        var s = r(7104),
          i = r(361);
        const c = window.wp.blockEditor,
          l = window.wp.components;
        var m = r(9019),
          d = r.n(m),
          w = r(6087);
        function u(e, t, r) {
          const o = new Set(t.map(e => e[r]));
          return e.filter(e => !o.has(e[r]));
        }
        const p = window.wp.htmlEntities,
          h = {
            clear: (0, a.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, a.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, a.__)('No results for %s', 'woocommerce'),
            search: (0, a.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, a.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, a._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, a.__)('Search results updated.', 'woocommerce'),
          },
          g = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              o = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const a = ['0'],
              n = (e = {}) => (e.parent ? [...n(o[e.parent]), e.name] : e.name ? [e.name] : []),
              s = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    a.push('' + e.id),
                    { ...e, breadcrumbs: n(o[e.parent]), children: t && t.length ? s(t) : [] }
                  );
                }),
              i = s(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                a.includes(e) || i.push(...s(t || []));
              }),
              i
            );
          },
          v = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, o.createElement)('strong', { key: t }, e)
                  : (0, o.createElement)(w.Fragment, { key: t }, e),
              );
          },
          _ = ({ label: e }) =>
            (0, o.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          b = e => {
            const { item: t, search: r } = e,
              a = t.breadcrumbs && t.breadcrumbs.length;
            return (0, o.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              a
                ? (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (n = t.breadcrumbs).length
                      ? n.slice(0, 1).toString()
                      : 2 === n.length
                      ? n.slice(0, 1).toString() + ' › ' + n.slice(-1).toString()
                      : n.slice(0, 1).toString() + ' … ' + n.slice(-1).toString(),
                  )
                : null,
              (0, o.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                v((0, p.decodeEntities)(t.name), r),
              ),
            );
            var n;
          },
          y = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: a = '',
            item: n,
            isSelected: s,
            isSingle: i,
            onSelect: c,
            search: m = '',
            selected: h,
            useExpandedPanelId: g,
            ...y
          }) => {
            var E, f;
            const [k, R] = g,
              S = null != e && void 0 !== n.count && null !== n.count,
              C = !(null === (E = n.breadcrumbs) || void 0 === E || !E.length),
              N = !(null === (f = n.children) || void 0 === f || !f.length),
              O = k === n.id,
              P = d()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': C,
                'has-children': N,
                'has-count': S,
                'is-expanded': O,
                'is-radio-button': i,
              }),
              T = y.name || `search-list-item-${a}`,
              A = `${T}-${n.id}`,
              I = (0, w.useCallback)(() => {
                R(O ? -1 : Number(n.id));
              }, [O, n.id, R]);
            return N
              ? (0, o.createElement)(
                  'div',
                  {
                    className: P,
                    onClick: I,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? I() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  i
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          type: 'radio',
                          id: A,
                          name: T,
                          value: n.value,
                          onChange: c(n),
                          onClick: e => e.stopPropagation(),
                          checked: s,
                          className: 'woocommerce-search-list__item-input',
                          ...y,
                        }),
                        (0, o.createElement)(b, { item: n, search: m }),
                        S ? (0, o.createElement)(_, { label: e || n.count }) : null,
                      )
                    : (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(l.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: s,
                          ...(!s && n.children.some(e => h.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: v((0, p.decodeEntities)(n.name), m),
                          onChange: () => {
                            s
                              ? c(u(h, n.children, 'id'))()
                              : c(
                                  (function(e, t, r) {
                                    const o = u(t, e, 'id');
                                    return [...e, ...o];
                                  })(h, n.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        S ? (0, o.createElement)(_, { label: e || n.count }) : null,
                      ),
                )
              : (0, o.createElement)(
                  'label',
                  { htmlFor: A, className: P },
                  i
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          ...y,
                          type: 'radio',
                          id: A,
                          name: T,
                          value: n.value,
                          onChange: c(n),
                          checked: s,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, o.createElement)(b, { item: n, search: m }),
                      )
                    : (0, o.createElement)(l.CheckboxControl, {
                        ...y,
                        id: A,
                        name: T,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, p.decodeEntities)(n.value),
                        label: v((0, p.decodeEntities)(n.name), m),
                        onChange: c(n),
                        checked: s,
                      }),
                  S ? (0, o.createElement)(_, { label: e || n.count }) : null,
                );
          },
          E = y;
        var f = r(2478),
          k = r(9491),
          R = r(2370);
        r(6636);
        const S = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: n,
            screenReaderLabel: i,
            className: c = '',
          }) => {
            const [m, u] = (0, w.useState)(!1),
              h = (0, k.useInstanceId)(S);
            if (((i = i || t), !t)) return null;
            t = (0, p.decodeEntities)(t);
            const g = d()('woocommerce-tag', c, { 'has-remove': !!n }),
              v = `woocommerce-tag__label-${h}`,
              _ = (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)('span', { className: 'screen-reader-text' }, i),
                (0, o.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, o.createElement)(
              'span',
              { className: g },
              r
                ? (0, o.createElement)(
                    l.Button,
                    { className: 'woocommerce-tag__text', id: v, onClick: () => u(!0) },
                    _,
                  )
                : (0, o.createElement)('span', { className: 'woocommerce-tag__text', id: v }, _),
              r && m && (0, o.createElement)(l.Popover, { onClose: () => u(!1) }, r),
              n &&
                (0, o.createElement)(
                  l.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: n(e),
                    label: (0, a.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, a.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': v,
                  },
                  (0, o.createElement)(s.A, {
                    icon: R.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          C = S;
        r(8137);
        const N = e => (0, o.createElement)(E, { ...e }),
          O = e => {
            const {
                list: t,
                selected: r,
                renderItem: a,
                depth: n = 0,
                onSelect: s,
                instanceId: i,
                isSingle: c,
                search: l,
                useExpandedPanelId: m,
              } = e,
              [d] = m;
            return t
              ? (0, o.createElement)(
                  w.Fragment,
                  null,
                  t.map(t => {
                    var u, p;
                    const h =
                        null !== (u = t.children) && void 0 !== u && u.length && !c
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      g =
                        (null === (p = t.children) || void 0 === p ? void 0 : p.length) &&
                        d === t.id;
                    return (0, o.createElement)(
                      w.Fragment,
                      { key: t.id },
                      (0, o.createElement)(
                        'li',
                        null,
                        a({
                          item: t,
                          isSelected: h,
                          onSelect: s,
                          isSingle: c,
                          selected: r,
                          search: l,
                          depth: n,
                          useExpandedPanelId: m,
                          controlId: i,
                        }),
                      ),
                      g ? (0, o.createElement)(O, { ...e, list: t.children, depth: n + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          P = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: n,
            onChange: s,
            onRemove: i,
          }) => {
            if (e || t || !r) return null;
            const c = r.length;
            return (0, o.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, o.createElement)('strong', null, n.selected(c)),
                c > 0
                  ? (0, o.createElement)(
                      l.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => s([]),
                        'aria-label': n.clear,
                      },
                      (0, a.__)('Clear all', 'woocommerce'),
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
                        (0, o.createElement)(C, { label: e.name, id: e.id, remove: i }),
                      ),
                    ),
                  )
                : null,
            );
          },
          T = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: n,
            useExpandedPanelId: i,
            ...c
          }) => {
            const { messages: l, renderItem: m, selected: d, isSingle: w } = c,
              u = m || N;
            return 0 === e.length
              ? (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, o.createElement)(s.A, { icon: f.A, role: 'img' }),
                  ),
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, a.sprintf)(l.noResults, t) : l.noItems,
                  ),
                )
              : (0, o.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, o.createElement)(O, {
                    useExpandedPanelId: i,
                    list: e,
                    selected: d,
                    renderItem: u,
                    onSelect: r,
                    instanceId: n,
                    isSingle: w,
                    search: t,
                  }),
                );
          },
          A = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: n,
                isLoading: s,
                isSingle: i,
                list: c,
                messages: m = h,
                onChange: u,
                onSearch: p,
                selected: v,
                type: _ = 'text',
                debouncedSpeak: b,
              } = e,
              [y, E] = (0, w.useState)(''),
              f = (0, w.useState)(-1),
              R = (0, k.useInstanceId)(A),
              S = (0, w.useMemo)(() => ({ ...h, ...m }), [m]),
              C = (0, w.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? g(e) : e;
                    const o = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      a = e.map(e => !!o.test(e.name) && e).filter(Boolean);
                    return r ? g(a, e) : a;
                  })(c, y, n),
                [c, y, n],
              );
            (0, w.useEffect)(() => {
              b && b(S.updated);
            }, [b, S]),
              (0, w.useEffect)(() => {
                'function' == typeof p && p(y);
              }, [y, p]);
            const N = (0, w.useCallback)(
                e => () => {
                  i && u([]);
                  const t = v.findIndex(({ id: t }) => t === e);
                  u([...v.slice(0, t), ...v.slice(t + 1)]);
                },
                [i, v, u],
              ),
              O = (0, w.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? u(e)
                    : -1 === v.findIndex(({ id: t }) => t === e.id)
                    ? u(i ? [e] : [...v, e])
                    : N(e.id)();
                },
                [i, N, u, v],
              ),
              I = (0, w.useCallback)(
                e => {
                  const [t] = v.filter(t => !e.find(e => t.id === e.id));
                  N(t.id)();
                },
                [N, v],
              );
            return (0, o.createElement)(
              'div',
              {
                className: d()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': s,
                  'is-token': 'token' === _,
                }),
              },
              'text' === _ && (0, o.createElement)(P, { ...e, onRemove: N, messages: S }),
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === _
                  ? (0, o.createElement)(l.TextControl, {
                      label: S.search,
                      type: 'search',
                      value: y,
                      onChange: e => E(e),
                    })
                  : (0, o.createElement)(l.FormTokenField, {
                      disabled: s,
                      label: S.search,
                      onChange: I,
                      onInputChange: e => E(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: s
                        ? [(0, a.__)('Loading…', 'woocommerce')]
                        : v.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              s
                ? (0, o.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, o.createElement)(l.Spinner, null),
                  )
                : (0, o.createElement)(T, {
                    ...e,
                    search: y,
                    filteredList: C,
                    messages: S,
                    onSelect: O,
                    instanceId: R,
                    useExpandedPanelId: f,
                  }),
            );
          },
          I = ((0, l.withSpokenMessages)(A), window.wp.url),
          x = window.wp.apiFetch;
        var L = r.n(x);
        const M = window.wc.wcSettings;
        var j, D, F, B, $, H, G, W, U, J;
        const z = (0, M.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          V =
            (z.pluginUrl,
            z.pluginUrl,
            z.buildPhase,
            null === (j = M.STORE_PAGES.shop) || void 0 === j || j.permalink,
            null === (D = M.STORE_PAGES.checkout) || void 0 === D || D.id,
            null === (F = M.STORE_PAGES.checkout) || void 0 === F || F.permalink,
            null === (B = M.STORE_PAGES.privacy) || void 0 === B || B.permalink,
            null === ($ = M.STORE_PAGES.privacy) || void 0 === $ || $.title,
            null === (H = M.STORE_PAGES.terms) || void 0 === H || H.permalink,
            null === (G = M.STORE_PAGES.terms) || void 0 === G || G.title,
            null === (W = M.STORE_PAGES.cart) || void 0 === W || W.id,
            null === (U = M.STORE_PAGES.cart) || void 0 === U || U.permalink,
            null !== (J = M.STORE_PAGES.myaccount) && void 0 !== J && J.permalink
              ? M.STORE_PAGES.myaccount.permalink
              : (0, M.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, M.getSetting)('localPickupEnabled', !1),
            (0, M.getSetting)('countries', {})),
          q = (0, M.getSetting)('countryData', {}),
          K =
            (Object.fromEntries(
              Object.keys(q)
                .filter(e => !0 === q[e].allowBilling)
                .map(e => [e, V[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(q)
                .filter(e => !0 === q[e].allowBilling)
                .map(e => [e, q[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(q)
                .filter(e => !0 === q[e].allowShipping)
                .map(e => [e, V[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(q)
                .filter(e => !0 === q[e].allowShipping)
                .map(e => [e, q[e].states || []]),
            ),
            Object.fromEntries(Object.keys(q).map(e => [e, q[e].locale || []])),
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
            ((0, M.getSetting)('addressFieldsLocations', K).address,
            (0, M.getSetting)('addressFieldsLocations', K).contact,
            (0, M.getSetting)('addressFieldsLocations', K).order,
            (0, M.getSetting)('additionalOrderFields', {}),
            (0, M.getSetting)('additionalContactFields', {}),
            (0, M.getSetting)('additionalAddressFields', {}),
            async e => {
              if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
              try {
                const t = await e.json();
                return { message: t.message, type: t.type || 'api' };
              } catch (e) {
                return { message: e.message, type: 'general' };
              }
            }),
          Y = window.wp.escapeHtml,
          Z = ({ error: e }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, a.__)('The following error was returned', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, Y.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, a.__)('The following error was returned from the API', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, Y.escapeHTML)(e)),
                      )
                    : e
                  : (0, a.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          X = e => {
            const { id: t, name: r, parent: o, count: a } = e;
            return {
              id: t,
              name: r,
              parent: o,
              count: a,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          };
        r(6876);
        const ee =
          ((te = ({
            categories: e = [],
            error: t = null,
            isLoading: r = !1,
            onChange: n,
            onOperatorChange: s,
            operator: i = 'any',
            selected: c,
            isCompact: m = !1,
            isSingle: w = !1,
            showReviewCount: u,
          }) => {
            const p = {
              clear: (0, a.__)('Clear all product categories', 'woocommerce'),
              list: (0, a.__)('Product Categories', 'woocommerce'),
              noItems: (0, a.__)("Your store doesn't have any product categories.", 'woocommerce'),
              search: (0, a.__)('Search for product categories', 'woocommerce'),
              selected: e =>
                (0, a.sprintf) /* translators: %d is the count of selected categories. */(
                  /* translators: %d is the count of selected categories. */
                  (0, a._n)('%d category selected', '%d categories selected', e, 'woocommerce'),
                  e,
                ),
              updated: (0, a.__)('Category search results updated.', 'woocommerce'),
            };
            if (t) return (0, o.createElement)(Z, { error: t });
            const h = e.map(X);
            return (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(A, {
                className: 'woocommerce-product-categories',
                list: h,
                isLoading: r,
                selected: h.filter(({ id: e }) => c.includes(Number(e))),
                onChange: n,
                renderItem: e => {
                  var t, r, n, s, i, c, l, m;
                  const { item: w, search: p, depth: h = 0 } = e,
                    g = w.breadcrumbs.length ? `${w.breadcrumbs.join(', ')}, ${w.name}` : w.name,
                    v = u
                      ? (0,
                        a.sprintf) /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */(
                          /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
                          (0, a._n)(
                            '%1$s, has %2$d review',
                            '%1$s, has %2$d reviews',
                            (null === (t = w.details) || void 0 === t ? void 0 : t.review_count) ||
                              0,
                            'woocommerce',
                          ),
                          g,
                          (null === (r = w.details) || void 0 === r ? void 0 : r.review_count) || 0,
                        )
                      : (0,
                        a.sprintf) /* translators: %1$s is the item name, %2$d is the count of products for the item. */(
                          /* translators: %1$s is the item name, %2$d is the count of products for the item. */
                          (0, a._n)(
                            '%1$s, has %2$d product',
                            '%1$s, has %2$d products',
                            (null === (n = w.details) || void 0 === n ? void 0 : n.count) || 0,
                            'woocommerce',
                          ),
                          g,
                          (null === (s = w.details) || void 0 === s ? void 0 : s.count) || 0,
                        ),
                    _ = u
                      ? (0, a.sprintf) /* translators: %d is the count of reviews. */(
                          /* translators: %d is the count of reviews. */
                          (0, a._n)(
                            '%d review',
                            '%d reviews',
                            (null === (i = w.details) || void 0 === i ? void 0 : i.review_count) ||
                              0,
                            'woocommerce',
                          ),
                          (null === (c = w.details) || void 0 === c ? void 0 : c.review_count) || 0,
                        )
                      : (0, a.sprintf) /* translators: %d is the count of products. */(
                          /* translators: %d is the count of products. */
                          (0, a._n)(
                            '%d product',
                            '%d products',
                            (null === (l = w.details) || void 0 === l ? void 0 : l.count) || 0,
                            'woocommerce',
                          ),
                          (null === (m = w.details) || void 0 === m ? void 0 : m.count) || 0,
                        );
                  return (0, o.createElement)(y, {
                    className: d()('woocommerce-product-categories__item', 'has-count', {
                      'is-searching': p.length > 0,
                      'is-skip-level': 0 === h && 0 !== w.parent,
                    }),
                    ...e,
                    countLabel: _,
                    'aria-label': v,
                  });
                },
                messages: p,
                isCompact: m,
                isHierarchical: !0,
                isSingle: w,
              }),
              !!s &&
                (0, o.createElement)(
                  'div',
                  { hidden: c.length < 2 },
                  (0, o.createElement)(l.SelectControl, {
                    className: 'woocommerce-product-categories__operator',
                    label: (0, a.__)('Display products matching', 'woocommerce'),
                    help: (0, a.__)(
                      'Pick at least two categories to use this setting.',
                      'woocommerce',
                    ),
                    value: i,
                    onChange: s,
                    options: [
                      { label: (0, a.__)('Any selected categories', 'woocommerce'), value: 'any' },
                      { label: (0, a.__)('All selected categories', 'woocommerce'), value: 'all' },
                    ],
                  }),
                ),
            );
          }),
          ({ selected: e, ...t }) => {
            const [r, a] = (0, w.useState)(!0),
              [n, s] = (0, w.useState)(null),
              [i, c] = (0, w.useState)([]),
              l = async e => {
                const t = await Q(e);
                s(t), a(!1);
              },
              m = (0, w.useRef)(e);
            return (
              (0, w.useEffect)(() => {
                var e;
                ((e = { selected: m.current }),
                L()({
                  path: (0, I.addQueryArgs)('wc/store/v1/products/categories', {
                    per_page: 0,
                    ...e,
                  }),
                }))
                  .then(e => {
                    c(e), a(!1);
                  })
                  .catch(l);
              }, [m]),
              (0, o.createElement)(te, { ...t, selected: e, error: n, categories: i, isLoading: r })
            );
          });
        var te,
          re = r(3588);
        r(4974);
        const oe = ({ className: e = '', error: t, isLoading: r = !1, onRetry: n }) =>
          (0, o.createElement)(
            l.Placeholder,
            {
              icon: (0, o.createElement)(s.A, { icon: re.A }),
              label: (0, a.__)('Sorry, an error occurred', 'woocommerce'),
              className: d()('wc-block-api-error', e),
            },
            (0, o.createElement)(Z, { error: t }),
            n &&
              (0, o.createElement)(
                o.Fragment,
                null,
                r
                  ? (0, o.createElement)(l.Spinner, null)
                  : (0, o.createElement)(
                      l.Button,
                      { variant: 'secondary', onClick: n },
                      (0, a.__)('Retry', 'woocommerce'),
                    ),
              ),
          );
        r(113);
        const ae = ({
            label: e,
            screenReaderLabel: t,
            wrapperElement: r,
            wrapperProps: a = {},
          }) => {
            let n;
            const s = null != e,
              i = null != t;
            return !s && i
              ? ((n = r || 'span'),
                (a = { ...a, className: d()(a.className, 'screen-reader-text') }),
                (0, o.createElement)(n, { ...a }, t))
              : ((n = r || w.Fragment),
                s && i && e !== t
                  ? (0, o.createElement)(
                      n,
                      { ...a },
                      (0, o.createElement)('span', { 'aria-hidden': 'true' }, e),
                      (0, o.createElement)('span', { className: 'screen-reader-text' }, t),
                    )
                  : (0, o.createElement)(n, { ...a }, e));
          },
          ne = ({
            onClick: e,
            label: t = (0, a.__)('Load more', 'woocommerce'),
            screenReaderLabel: r = (0, a.__)('Load more', 'woocommerce'),
          }) =>
            (0, o.createElement)(
              'div',
              { className: 'wp-block-button wc-block-load-more wc-block-components-load-more' },
              (0, o.createElement)(
                'button',
                { className: 'wp-block-button__link', onClick: e },
                (0, o.createElement)(ae, { label: t, screenReaderLabel: r }),
              ),
            ),
          se = window.wc.blocksComponents;
        r(9836);
        const ie = ({ onChange: e, readOnly: t, value: r }) =>
          (0, o.createElement)(se.SortSelect, {
            className: 'wc-block-review-sort-select wc-block-components-review-sort-select',
            label: (0, a.__)('Order by', 'woocommerce'),
            onChange: e,
            options: [
              { key: 'most-recent', label: (0, a.__)('Most recent', 'woocommerce') },
              { key: 'highest-rating', label: (0, a.__)('Highest rating', 'woocommerce') },
              { key: 'lowest-rating', label: (0, a.__)('Lowest rating', 'woocommerce') },
            ],
            readOnly: t,
            screenReaderLabel: (0, a.__)('Order reviews by', 'woocommerce'),
            value: r,
          });
        var ce = r(2294);
        function le(e) {
          let t,
            r,
            o,
            a = [];
          for (let n = 0; n < e.length; n++)
            (t = e.substring(n)),
              (r = t.match(/^&[a-z0-9#]+;/)),
              r ? ((o = r[0]), a.push(o), (n += o.length - 1)) : a.push(e[n]);
          return a;
        }
        const me = (e, t, r = '...') => {
            const o = (function(e, t) {
              const r = (t = t || {}).limit || 100,
                o = void 0 === t.preserveTags || t.preserveTags,
                a = void 0 !== t.wordBreak && t.wordBreak,
                n = t.suffix || '...',
                s = t.moreLink || '',
                i = t.moreText || '»',
                c = t.preserveWhiteSpace || !1,
                l = e
                  .replace(/</g, '\n<')
                  .replace(/>/g, '>\n')
                  .replace(/\n\n/g, '\n')
                  .replace(/^\n/g, '')
                  .replace(/\n$/g, '')
                  .split('\n');
              let m,
                d,
                w,
                u,
                p,
                h,
                g = 0,
                v = [],
                _ = !1;
              for (let e = 0; e < l.length; e++) {
                if (((m = l[e]), (u = c ? m : m.replace(/[ ]+/g, ' ')), !m.length)) continue;
                const t = le(u);
                if ('<' !== m[0])
                  if (g >= r) m = '';
                  else if (g + t.length >= r) {
                    if (((d = r - g), ' ' === t[d - 1]))
                      for (; d && ((d -= 1), ' ' === t[d - 1]); );
                    else (w = t.slice(d).indexOf(' ')), a || (-1 !== w ? (d += w) : (d = m.length));
                    (m = t.slice(0, d).join('') + n),
                      s && (m += '<a href="' + s + '" style="display:inline">' + i + '</a>'),
                      (g = r),
                      (_ = !0);
                  } else g += t.length;
                else if (o) {
                  if (g >= r)
                    if (((p = m.match(/[a-zA-Z]+/)), (h = p ? p[0] : ''), h))
                      if ('</' !== m.substring(0, 2)) v.push(h), (m = '');
                      else {
                        for (; v[v.length - 1] !== h && v.length; ) v.pop();
                        v.length && (m = ''), v.pop();
                      }
                    else m = '';
                } else m = '';
                l[e] = m;
              }
              return { html: l.join('\n').replace(/\n/g, ''), more: _ };
            })(e, { suffix: r, limit: t });
            return o.html;
          },
          de = (e, t, r) => (t <= r ? (e.start = e.middle + 1) : (e.end = e.middle - 1), e),
          we = (e, t, r, o) => {
            const a = ((e, t, r) => {
              let o = { start: 0, middle: 0, end: e.length };
              for (; o.start <= o.end; )
                (o.middle = Math.floor((o.start + o.end) / 2)),
                  (t.innerHTML = me(e, o.middle)),
                  (o = de(o, t.clientHeight, r));
              return o.middle;
            })(e, t, r);
            return me(e, a - o.length, o);
          },
          ue = {
            className: 'read-more-content',
            ellipsis: '&hellip;',
            lessText: (0, a.__)('Read less', 'woocommerce'),
            maxLines: 3,
            moreText: (0, a.__)('Read more', 'woocommerce'),
          };
        class pe extends w.Component {
          constructor(e) {
            super(e),
              (0, ce.A)(this, 'reviewSummary', void 0),
              (0, ce.A)(this, 'reviewContent', void 0),
              (this.state = {
                isExpanded: !1,
                clampEnabled: null,
                content: e.children,
                summary: '.',
              }),
              (this.reviewContent = (0, w.createRef)()),
              (this.reviewSummary = (0, w.createRef)()),
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
                    summary: we(
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
              { className: t, lessText: r, moreText: a } = this.props,
              n = e ? r : a;
            if (n)
              return (0, o.createElement)(
                'a',
                {
                  href: '#more',
                  className: t + '__read_more',
                  onClick: this.onClick,
                  'aria-expanded': !e,
                  role: 'button',
                },
                n,
              );
          }
          onClick(e) {
            e.preventDefault();
            const { isExpanded: t } = this.state;
            this.setState({ isExpanded: !t });
          }
          render() {
            const { className: e } = this.props,
              { content: t, summary: r, clampEnabled: a, isExpanded: n } = this.state;
            return t
              ? !1 === a
                ? (0, o.createElement)(
                    'div',
                    { className: e },
                    (0, o.createElement)('div', { ref: this.reviewContent }, t),
                  )
                : (0, o.createElement)(
                    'div',
                    { className: e },
                    (!n || null === a) &&
                      (0, o.createElement)('div', {
                        ref: this.reviewSummary,
                        'aria-hidden': n,
                        dangerouslySetInnerHTML: { __html: r },
                      }),
                    (n || null === a) &&
                      (0, o.createElement)(
                        'div',
                        { ref: this.reviewContent, 'aria-hidden': !n },
                        t,
                      ),
                    this.getButton(),
                  )
              : null;
          }
        }
        (0, ce.A)(pe, 'defaultProps', ue);
        const he = pe;
        r(7935);
        const ge = ({ attributes: e, review: t = {} }) => {
          const {
              imageType: r,
              showReviewDate: n,
              showReviewerName: s,
              showReviewImage: i,
              showReviewRating: c,
              showReviewContent: l,
              showProductName: m,
            } = e,
            { rating: w } = t,
            u = !(Object.keys(t).length > 0),
            p = Number.isFinite(w) && c;
          return (0, o.createElement)(
            'li',
            {
              className: d()(
                'wc-block-review-list-item__item',
                'wc-block-components-review-list-item__item',
                { 'is-loading': u, 'wc-block-components-review-list-item__item--has-image': i },
              ),
              'aria-hidden': u,
            },
            (m || n || s || i || p) &&
              (0, o.createElement)(
                'div',
                {
                  className:
                    'wc-block-review-list-item__info wc-block-components-review-list-item__info',
                },
                i &&
                  (function(e, t, r) {
                    var n, s;
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
                                  (null === (n = e.product_image) || void 0 === n
                                    ? void 0
                                    : n.alt) || '',
                                src:
                                  (null === (s = e.product_image) || void 0 === s
                                    ? void 0
                                    : s.thumbnail) || '',
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
                                title: (0, a.__)('Verified buyer', 'woocommerce'),
                              },
                              (0, a.__)('Verified buyer', 'woocommerce'),
                            ),
                        );
                  })(t, r, u),
                (m || s || p || n) &&
                  (0, o.createElement)(
                    'div',
                    {
                      className:
                        'wc-block-review-list-item__meta wc-block-components-review-list-item__meta',
                    },
                    p &&
                      (function(e) {
                        const { rating: t } = e,
                          r = { width: (t / 5) * 100 + '%' },
                          n = (0,
                          a.sprintf) /* translators: %f is referring to the average rating value */(
                            /* translators: %f is referring to the average rating value */
                            (0, a.__)('Rated %f out of 5', 'woocommerce'),
                            t,
                          ),
                          s = {
                            __html: (0,
                            a.sprintf) /* translators: %s is referring to the average rating value */(
                              /* translators: %s is referring to the average rating value */
                              (0, a.__)('Rated %s out of 5', 'woocommerce'),
                              (0, a.sprintf)('<strong class="rating">%f</strong>', t),
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
                              'aria-label': n,
                            },
                            (0, o.createElement)('span', { style: r, dangerouslySetInnerHTML: s }),
                          ),
                        );
                      })(t),
                    m &&
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
                    s &&
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
                    n &&
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
                  he,
                  {
                    maxLines: 10,
                    moreText: (0, a.__)('Read full review', 'woocommerce'),
                    lessText: (0, a.__)('Hide full review', 'woocommerce'),
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
        const ve = ({ attributes: e, reviews: t }) => {
          const r = (0, M.getSetting)('showAvatars', !0),
            a = (0, M.getSetting)('reviewRatingsEnabled', !0),
            n = (r || 'product' === e.imageType) && e.showReviewImage,
            s = a && e.showReviewRating,
            i = { ...e, showReviewImage: n, showReviewRating: s };
          return (0, o.createElement)(
            'ul',
            { className: 'wc-block-review-list wc-block-components-review-list' },
            0 === t.length
              ? (0, o.createElement)(ge, { attributes: i })
              : t.map((e, t) =>
                  (0, o.createElement)(ge, { key: e.id || t, attributes: i, review: e }),
                ),
          );
        };
        var _e = r(923),
          be = r.n(_e);
        const ye = e => {
            const {
              className: t,
              categoryIds: r,
              productId: o,
              showReviewDate: a,
              showReviewerName: n,
              showReviewContent: s,
              showProductName: i,
              showReviewImage: c,
              showReviewRating: l,
            } = e;
            let m = 'wc-block-all-reviews';
            return (
              o && (m = 'wc-block-reviews-by-product'),
              Array.isArray(r) && (m = 'wc-block-reviews-by-category'),
              d()(m, t, {
                'has-image': c,
                'has-name': n,
                'has-date': a,
                'has-rating': l,
                'has-content': s,
                'has-product-name': i,
              })
            );
          },
          Ee = e => {
            const {
                categoryIds: t,
                imageType: r,
                orderby: o,
                productId: a,
                reviewsOnPageLoad: n,
                reviewsOnLoadMore: s,
                showLoadMore: i,
                showOrderby: c,
              } = e,
              l = {
                'data-image-type': r,
                'data-orderby': o,
                'data-reviews-on-page-load': n,
                'data-reviews-on-load-more': s,
                'data-show-load-more': i,
                'data-show-orderby': c,
              };
            return (
              a && (l['data-product-id'] = a),
              Array.isArray(t) && (l['data-category-ids'] = t.join(',')),
              l
            );
          };
        class fe extends w.Component {
          render() {
            const {
              attributes: e,
              error: t,
              isLoading: r,
              noReviewsPlaceholder: n,
              reviews: s,
              totalReviews: i,
            } = this.props;
            if (t)
              return (0, o.createElement)(oe, {
                className: 'wc-block-featured-product-error',
                error: t,
                isLoading: r,
              });
            if (0 === s.length && !r) return (0, o.createElement)(n, { attributes: e });
            const c = (0, M.getSetting)('reviewRatingsEnabled', !0);
            return (0, o.createElement)(
              l.Disabled,
              null,
              e.showOrderby &&
                c &&
                (0, o.createElement)(ie, { readOnly: !0, value: e.orderby, onChange: () => null }),
              (0, o.createElement)(ve, { attributes: e, reviews: s }),
              e.showLoadMore &&
                i > s.length &&
                (0, o.createElement)(ne, {
                  screenReaderLabel: (0, a.__)('Load more reviews', 'woocommerce'),
                  onClick: () => null,
                }),
            );
          }
        }
        const ke = (e => {
            class t extends w.Component {
              constructor(...e) {
                super(...e),
                  (0, ce.A)(this, 'isPreview', !!this.props.attributes.previewReviews),
                  (0, ce.A)(
                    this,
                    'delayedAppendReviews',
                    this.props.delayFunction(this.appendReviews),
                  ),
                  (0, ce.A)(this, 'isMounted', !1),
                  (0, ce.A)(this, 'state', {
                    error: null,
                    loading: !0,
                    reviews: this.isPreview ? this.props.attributes.previewReviews : [],
                    totalReviews: this.isPreview ? this.props.attributes.previewReviews.length : 0,
                  }),
                  (0, ce.A)(this, 'setError', async e => {
                    if (!this.isMounted) return;
                    const { onReviewsLoadError: t } = this.props,
                      r = await Q(e);
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
                  !be()(e.categoryIds, t.categoryIds)
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
                    productId: a,
                    reviewsToDisplay: n,
                  } = this.props,
                  s = { order: r, orderby: o, per_page: n - e, offset: e };
                if (t) {
                  const e = Array.isArray(t) ? t : JSON.parse(t);
                  s.category_id = Array.isArray(e) ? e.join(',') : e;
                }
                return a && (s.product_id = a), s;
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
                  ((a = this.getArgs(e.length)),
                  L()({
                    path:
                      '/wc/store/v1/products/reviews?' +
                      Object.entries(a)
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
                var a;
              }
              render() {
                const { reviewsToDisplay: t } = this.props,
                  { error: r, loading: a, reviews: n, totalReviews: s } = this.state;
                return (0, o.createElement)(e, {
                  ...this.props,
                  error: r,
                  isLoading: a,
                  reviews: n.slice(0, t),
                  totalReviews: s,
                });
              }
            }
            (0, ce.A)(t, 'defaultProps', {
              delayFunction: e => e,
              onReviewsAppended: () => {},
              onReviewsLoadError: () => {},
              onReviewsReplaced: () => {},
            });
            const { displayName: r = e.name || 'Component' } = e;
            return (t.displayName = `WithReviews( ${r} )`), t;
          })(fe),
          Re = ({ attributes: e, icon: t, name: r, noReviewsPlaceholder: n }) => {
            const {
                categoryIds: s,
                productId: i,
                reviewsOnPageLoad: m,
                showProductName: d,
                showReviewDate: w,
                showReviewerName: u,
                showReviewContent: p,
                showReviewImage: h,
                showReviewRating: g,
              } = e,
              { order: v, orderby: _ } = (e => {
                if ((0, M.getSetting)('reviewRatingsEnabled', !0)) {
                  if ('lowest-rating' === e) return { order: 'asc', orderby: 'rating' };
                  if ('highest-rating' === e) return { order: 'desc', orderby: 'rating' };
                }
                return { order: 'desc', orderby: 'date_gmt' };
              })(e.orderby),
              b = !(p || g || w || u || h || d),
              y = (0, c.useBlockProps)({ className: ye(e) });
            return b
              ? (0, o.createElement)(
                  l.Placeholder,
                  { icon: t, label: r },
                  (0, a.__)(
                    'The content for this block is hidden due to block settings.',
                    'woocommerce',
                  ),
                )
              : (0, o.createElement)(
                  'div',
                  { ...y },
                  (0, o.createElement)(ke, {
                    attributes: e,
                    categoryIds: s,
                    delayFunction: e =>
                      ((e, t, r) => {
                        let o,
                          a = null;
                        const n = (...t) => {
                          (a = t),
                            o && clearTimeout(o),
                            (o = setTimeout(() => {
                              (o = null), a && e(...a);
                            }, 400));
                        };
                        return (
                          (n.flush = () => {
                            o && a && (e(...a), clearTimeout(o), (o = null));
                          }),
                          n
                        );
                      })(e),
                    noReviewsPlaceholder: n,
                    orderby: _,
                    order: v,
                    productId: i,
                    reviewsToDisplay: m,
                  }),
                );
          },
          Se = () =>
            (0, o.createElement)(
              l.Placeholder,
              {
                className: 'wc-block-reviews-by-category',
                icon: (0, o.createElement)(s.A, {
                  icon: i.A,
                  className: 'block-editor-block-icon',
                }),
                label: (0, a.__)('Reviews by Category', 'woocommerce'),
              },
              (0, a.__)(
                'This block lists reviews for products from selected categories. The selected categories do not have any reviews yet, but they will show up here when they do.',
                'woocommerce',
              ),
            ),
          Ce = (0, l.withSpokenMessages)(
            ({ attributes: e, debouncedSpeak: t, setAttributes: r }) => {
              const { editMode: n, categoryIds: m } = e;
              if (!m || n)
                return (0, o.createElement)(
                  l.Placeholder,
                  {
                    icon: (0, o.createElement)(s.A, {
                      icon: i.A,
                      className: 'block-editor-block-icon',
                    }),
                    label: (0, a.__)('Reviews by Category', 'woocommerce'),
                    className: 'wc-block-reviews-by-category',
                  },
                  (0, a.__)('Show product reviews from specific categories.', 'woocommerce'),
                  (0, o.createElement)(
                    'div',
                    { className: 'wc-block-reviews__selection' },
                    (0, o.createElement)(ee, {
                      selected: e.categoryIds,
                      onChange: (e = []) => {
                        const t = e.map(({ id: e }) => e);
                        r({ categoryIds: t });
                      },
                      showReviewCount: !0,
                    }),
                    (0, o.createElement)(
                      l.Button,
                      {
                        variant: 'primary',
                        onClick: () => {
                          r({ editMode: !1 }),
                            t(
                              (0, a.__)(
                                'Now displaying a preview of the reviews for the products in the selected categories.',
                                'woocommerce',
                              ),
                            );
                        },
                      },
                      (0, a.__)('Done', 'woocommerce'),
                    ),
                  ),
                );
              const d = (0, a.__)('Edit selected categories', 'woocommerce');
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
                  ))(n, r, d),
                (0, o.createElement)(
                  c.InspectorControls,
                  { key: 'inspector' },
                  (0, o.createElement)(
                    l.PanelBody,
                    { title: (0, a.__)('Category', 'woocommerce'), initialOpen: !1 },
                    (0, o.createElement)(ee, {
                      selected: e.categoryIds,
                      onChange: (e = []) => {
                        const t = e.map(({ id: e }) => e);
                        r({ categoryIds: t });
                      },
                      isCompact: !0,
                      showReviewCount: !0,
                    }),
                  ),
                  (0, o.createElement)(
                    l.PanelBody,
                    { title: (0, a.__)('Content', 'woocommerce') },
                    (0, o.createElement)(l.ToggleControl, {
                      label: (0, a.__)('Product name', 'woocommerce'),
                      checked: e.showProductName,
                      onChange: () => r({ showProductName: !e.showProductName }),
                    }),
                    ((e, t) => {
                      const r = (0, M.getSetting)('showAvatars', !0),
                        n = (0, M.getSetting)('reviewRatingsEnabled', !0);
                      return (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Product rating', 'woocommerce'),
                          checked: e.showReviewRating,
                          onChange: () => t({ showReviewRating: !e.showReviewRating }),
                        }),
                        e.showReviewRating &&
                          !n &&
                          (0, o.createElement)(
                            l.Notice,
                            { className: 'wc-block-base-control-notice', isDismissible: !1 },
                            (0, w.createInterpolateElement)(
                              (0, a.__)(
                                'Product rating is disabled in your <a>store settings</a>.',
                                'woocommerce',
                              ),
                              {
                                a: (0, o.createElement)('a', {
                                  href: (0, M.getAdminLink)(
                                    'admin.php?page=wc-settings&tab=products',
                                  ),
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                }),
                              },
                            ),
                          ),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Reviewer name', 'woocommerce'),
                          checked: e.showReviewerName,
                          onChange: () => t({ showReviewerName: !e.showReviewerName }),
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Image', 'woocommerce'),
                          checked: e.showReviewImage,
                          onChange: () => t({ showReviewImage: !e.showReviewImage }),
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Review date', 'woocommerce'),
                          checked: e.showReviewDate,
                          onChange: () => t({ showReviewDate: !e.showReviewDate }),
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Review content', 'woocommerce'),
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
                                label: (0, a.__)('Review image', 'woocommerce'),
                                value: e.imageType,
                                onChange: e => t({ imageType: e }),
                              },
                              (0, o.createElement)(l.__experimentalToggleGroupControlOption, {
                                value: 'reviewer',
                                label: (0, a.__)('Reviewer photo', 'woocommerce'),
                              }),
                              (0, o.createElement)(l.__experimentalToggleGroupControlOption, {
                                value: 'product',
                                label: (0, a.__)('Product', 'woocommerce'),
                              }),
                            ),
                            'reviewer' === e.imageType &&
                              !r &&
                              (0, o.createElement)(
                                l.Notice,
                                { className: 'wc-block-base-control-notice', isDismissible: !1 },
                                (0, w.createInterpolateElement)(
                                  (0, a.__)(
                                    'Reviewer photo is disabled in your <a>site settings</a>.',
                                    'woocommerce',
                                  ),
                                  {
                                    a: (0, o.createElement)('a', {
                                      href: (0, M.getAdminLink)('options-discussion.php'),
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
                    { title: (0, a.__)('List Settings', 'woocommerce') },
                    ((e, t) =>
                      (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Order by', 'woocommerce'),
                          checked: e.showOrderby,
                          onChange: () => t({ showOrderby: !e.showOrderby }),
                        }),
                        (0, o.createElement)(l.SelectControl, {
                          label: (0, a.__)('Order Product Reviews by', 'woocommerce'),
                          value: e.orderby,
                          options: [
                            { label: 'Most recent', value: 'most-recent' },
                            { label: 'Highest Rating', value: 'highest-rating' },
                            { label: 'Lowest Rating', value: 'lowest-rating' },
                          ],
                          onChange: e => t({ orderby: e }),
                        }),
                        (0, o.createElement)(l.RangeControl, {
                          label: (0, a.__)('Starting Number of Reviews', 'woocommerce'),
                          value: e.reviewsOnPageLoad,
                          onChange: e => t({ reviewsOnPageLoad: e }),
                          max: 20,
                          min: 1,
                        }),
                        (0, o.createElement)(l.ToggleControl, {
                          label: (0, a.__)('Load more', 'woocommerce'),
                          checked: e.showLoadMore,
                          onChange: () => t({ showLoadMore: !e.showLoadMore }),
                        }),
                        e.showLoadMore &&
                          (0, o.createElement)(l.RangeControl, {
                            label: (0, a.__)('Load More Reviews', 'woocommerce'),
                            value: e.reviewsOnLoadMore,
                            onChange: e => t({ reviewsOnLoadMore: e }),
                            max: 20,
                            min: 1,
                          }),
                      ))(e, r),
                  ),
                ),
                (0, o.createElement)(Re, {
                  attributes: e,
                  icon: (0, o.createElement)(s.A, {
                    icon: i.A,
                    className: 'block-editor-block-icon',
                  }),
                  name: (0, a.__)('Reviews by Category', 'woocommerce'),
                  noReviewsPlaceholder: Se,
                }),
              );
            },
          );
        r(1227);
        const Ne = {
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
                formatted_date_created: (0, a.__)('July 15, 2019', 'woocommerce'),
                date_created_gmt: '2019-07-15T15:05:04',
                product_id: 0,
                product_name: (0, a.__)('WordPress Pennant', 'woocommerce'),
                product_permalink: '#',
                /* translators: An example person name used for the block previews. */
                reviewer: (0, a.__)('Alice', 'woocommerce'),
                review: `<p>${(0, a.__)(
                  "I bought this product last week and I'm very happy with it.",
                  'woocommerce',
                )}</p>\n`,
                reviewer_avatar_urls: { 48: z.defaultAvatar, 96: z.defaultAvatar },
                rating: 5,
                verified: !0,
              },
              {
                id: 2,
                date_created: '2019-07-12T12:39:39',
                formatted_date_created: (0, a.__)('July 12, 2019', 'woocommerce'),
                date_created_gmt: '2019-07-12T10:39:39',
                product_id: 0,
                product_name: (0, a.__)('WordPress Pennant', 'woocommerce'),
                product_permalink: '#',
                /* translators: An example person name used for the block previews. */
                reviewer: (0, a.__)('Bob', 'woocommerce'),
                review: `<p>${(0, a.__)(
                  'This product is awesome, I love it!',
                  'woocommerce',
                )}</p>\n`,
                reviewer_avatar_urls: { 48: z.defaultAvatar, 96: z.defaultAvatar },
                rating: null,
                verified: !1,
              },
            ],
          },
        };
        (0, n.registerBlockType)('woocommerce/reviews-by-category', {
          apiVersion: 2,
          title: (0, a.__)('Reviews by Category', 'woocommerce'),
          icon: {
            src: (0, o.createElement)(s.A, {
              icon: i.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          category: 'woocommerce',
          keywords: [(0, a.__)('WooCommerce', 'woocommerce')],
          description: (0, a.__)('Show product reviews from specific categories.', 'woocommerce'),
          supports: { html: !1, color: { background: !1 }, typography: { fontSize: !0 } },
          example: {
            ...Ne,
            attributes: { ...Ne.attributes, categoryIds: [1], showProductName: !0 },
          },
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
            categoryIds: { type: 'array', default: [] },
            showProductName: { type: 'boolean', default: !0 },
          },
          edit: e => {
            const t = (0, c.useBlockProps)();
            return (0, o.createElement)('div', { ...t }, (0, o.createElement)(Ce, { ...e }));
          },
          save: ({ attributes: e }) =>
            (0, o.createElement)('div', {
              ...c.useBlockProps.save({ className: ye(e) }),
              ...Ee(e),
            }),
        });
      },
      113: () => {},
      7935: () => {},
      4105: () => {},
      9836: () => {},
      1227: () => {},
      4974: () => {},
      6876: () => {},
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
    a = {};
  function n(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = o),
    (e = []),
    (n.O = (t, r, o, a) => {
      if (!r) {
        var s = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, o, a] = e[m], i = !0, c = 0; c < r.length; c++)
            (!1 & a || s >= a) && Object.keys(n.O).every(e => n.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((i = !1), a < s && (s = a));
          if (i) {
            e.splice(m--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      a = a || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > a; m--) e[m] = e[m - 1];
      e[m] = [r, o, a];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var a = Object.create(null);
      n.r(a);
      var s = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var i = 2 & o && e; 'object' == typeof i && !~t.indexOf(i); i = r(i))
        Object.getOwnPropertyNames(i).forEach(t => (s[t] = () => e[t]));
      return (s.default = () => e), n.d(a, s), a;
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
    (n.j = 6273),
    (() => {
      var e = { 6273: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            a,
            [s, i, c] = r,
            l = 0;
          if (s.some(t => 0 !== e[t])) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            if (c) var m = c(n);
          }
          for (t && t(r); l < s.length; l++) (a = s[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var s = n.O(void 0, [94], () => n(2779));
  (s = n.O(s)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['reviews-by-category'] = s);
})();
