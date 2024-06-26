(() => {
  var e,
    t,
    r,
    o = {
      929: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const n = window.wp.blocks,
          l = window.wp.blockEditor;
        var a = r(7104),
          s = r(6378),
          c = r(9019),
          i = r.n(c),
          u = r(5574),
          m = r(7723),
          d = r(6087),
          p = r(4133);
        const b = window.wp.components;
        var g = r(2478),
          h = r(9491);
        const w = {
            clear: (0, m.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, m.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, m.__)('No results for %s', 'woocommerce'),
            search: (0, m.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, m.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, m._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, m.__)('Search results updated.', 'woocommerce'),
          },
          _ = (e, t = e) => {
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
              s = a(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                n.includes(e) || s.push(...a(t || []));
              }),
              s
            );
          },
          f = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, o.createElement)('strong', { key: t }, e)
                  : (0, o.createElement)(d.Fragment, { key: t }, e),
              );
          };
        function E(e, t, r) {
          const o = new Set(t.map(e => e[r]));
          return e.filter(e => !o.has(e[r]));
        }
        const y = window.wp.htmlEntities,
          v = ({ label: e }) =>
            (0, o.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          k = e => {
            const { item: t, search: r } = e,
              n = t.breadcrumbs && t.breadcrumbs.length;
            return (0, o.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              n
                ? (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (l = t.breadcrumbs).length
                      ? l.slice(0, 1).toString()
                      : 2 === l.length
                      ? l.slice(0, 1).toString() + ' › ' + l.slice(-1).toString()
                      : l.slice(0, 1).toString() + ' … ' + l.slice(-1).toString(),
                  )
                : null,
              (0, o.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                f((0, y.decodeEntities)(t.name), r),
              ),
            );
            var l;
          },
          S = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: n = '',
            item: l,
            isSelected: a,
            isSingle: s,
            onSelect: c,
            search: u = '',
            selected: m,
            useExpandedPanelId: p,
            ...g
          }) => {
            var h, w;
            const [_, S] = p,
              C = null != e && void 0 !== l.count && null !== l.count,
              x = !(null === (h = l.breadcrumbs) || void 0 === h || !h.length),
              N = !(null === (w = l.children) || void 0 === w || !w.length),
              A = _ === l.id,
              T = i()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': x,
                'has-children': N,
                'has-count': C,
                'is-expanded': A,
                'is-radio-button': s,
              }),
              O = g.name || `search-list-item-${n}`,
              P = `${O}-${l.id}`,
              L = (0, d.useCallback)(() => {
                S(A ? -1 : Number(l.id));
              }, [A, l.id, S]);
            return N
              ? (0, o.createElement)(
                  'div',
                  {
                    className: T,
                    onClick: L,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? L() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  s
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          type: 'radio',
                          id: P,
                          name: O,
                          value: l.value,
                          onChange: c(l),
                          onClick: e => e.stopPropagation(),
                          checked: a,
                          className: 'woocommerce-search-list__item-input',
                          ...g,
                        }),
                        (0, o.createElement)(k, { item: l, search: u }),
                        C ? (0, o.createElement)(v, { label: e || l.count }) : null,
                      )
                    : (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(b.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: a,
                          ...(!a && l.children.some(e => m.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: f((0, y.decodeEntities)(l.name), u),
                          onChange: () => {
                            a
                              ? c(E(m, l.children, 'id'))()
                              : c(
                                  (function(e, t, r) {
                                    const o = E(t, e, 'id');
                                    return [...e, ...o];
                                  })(m, l.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        C ? (0, o.createElement)(v, { label: e || l.count }) : null,
                      ),
                )
              : (0, o.createElement)(
                  'label',
                  { htmlFor: P, className: T },
                  s
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          ...g,
                          type: 'radio',
                          id: P,
                          name: O,
                          value: l.value,
                          onChange: c(l),
                          checked: a,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, o.createElement)(k, { item: l, search: u }),
                      )
                    : (0, o.createElement)(b.CheckboxControl, {
                        ...g,
                        id: P,
                        name: O,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, y.decodeEntities)(l.value),
                        label: f((0, y.decodeEntities)(l.name), u),
                        onChange: c(l),
                        checked: a,
                      }),
                  C ? (0, o.createElement)(v, { label: e || l.count }) : null,
                );
          };
        var C = r(2370);
        r(6636);
        const x = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: n,
            screenReaderLabel: l,
            className: s = '',
          }) => {
            const [c, u] = (0, d.useState)(!1),
              p = (0, h.useInstanceId)(x);
            if (((l = l || t), !t)) return null;
            t = (0, y.decodeEntities)(t);
            const g = i()('woocommerce-tag', s, { 'has-remove': !!n }),
              w = `woocommerce-tag__label-${p}`,
              _ = (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)('span', { className: 'screen-reader-text' }, l),
                (0, o.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, o.createElement)(
              'span',
              { className: g },
              r
                ? (0, o.createElement)(
                    b.Button,
                    { className: 'woocommerce-tag__text', id: w, onClick: () => u(!0) },
                    _,
                  )
                : (0, o.createElement)('span', { className: 'woocommerce-tag__text', id: w }, _),
              r && c && (0, o.createElement)(b.Popover, { onClose: () => u(!1) }, r),
              n &&
                (0, o.createElement)(
                  b.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: n(e),
                    label: (0, m.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, m.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': w,
                  },
                  (0, o.createElement)(a.A, {
                    icon: C.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          N = x;
        r(8137);
        const A = e => (0, o.createElement)(S, { ...e }),
          T = e => {
            const {
                list: t,
                selected: r,
                renderItem: n,
                depth: l = 0,
                onSelect: a,
                instanceId: s,
                isSingle: c,
                search: i,
                useExpandedPanelId: u,
              } = e,
              [m] = u;
            return t
              ? (0, o.createElement)(
                  d.Fragment,
                  null,
                  t.map(t => {
                    var p, b;
                    const g =
                        null !== (p = t.children) && void 0 !== p && p.length && !c
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      h =
                        (null === (b = t.children) || void 0 === b ? void 0 : b.length) &&
                        m === t.id;
                    return (0, o.createElement)(
                      d.Fragment,
                      { key: t.id },
                      (0, o.createElement)(
                        'li',
                        null,
                        n({
                          item: t,
                          isSelected: g,
                          onSelect: a,
                          isSingle: c,
                          selected: r,
                          search: i,
                          depth: l,
                          useExpandedPanelId: u,
                          controlId: s,
                        }),
                      ),
                      h ? (0, o.createElement)(T, { ...e, list: t.children, depth: l + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          O = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: n,
            onChange: l,
            onRemove: a,
          }) => {
            if (e || t || !r) return null;
            const s = r.length;
            return (0, o.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, o.createElement)('strong', null, n.selected(s)),
                s > 0
                  ? (0, o.createElement)(
                      b.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => l([]),
                        'aria-label': n.clear,
                      },
                      (0, m.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              s > 0
                ? (0, o.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, o.createElement)(
                        'li',
                        { key: t },
                        (0, o.createElement)(N, { label: e.name, id: e.id, remove: a }),
                      ),
                    ),
                  )
                : null,
            );
          },
          P = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: n,
            useExpandedPanelId: l,
            ...s
          }) => {
            const { messages: c, renderItem: i, selected: u, isSingle: d } = s,
              p = i || A;
            return 0 === e.length
              ? (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, o.createElement)(a.A, { icon: g.A, role: 'img' }),
                  ),
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, m.sprintf)(c.noResults, t) : c.noItems,
                  ),
                )
              : (0, o.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, o.createElement)(T, {
                    useExpandedPanelId: l,
                    list: e,
                    selected: u,
                    renderItem: p,
                    onSelect: r,
                    instanceId: n,
                    isSingle: d,
                    search: t,
                  }),
                );
          },
          L = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: n,
                isLoading: l,
                isSingle: a,
                list: s,
                messages: c = w,
                onChange: u,
                onSearch: p,
                selected: g,
                type: f = 'text',
                debouncedSpeak: E,
              } = e,
              [y, v] = (0, d.useState)(''),
              k = (0, d.useState)(-1),
              S = (0, h.useInstanceId)(L),
              C = (0, d.useMemo)(() => ({ ...w, ...c }), [c]),
              x = (0, d.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? _(e) : e;
                    const o = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!o.test(e.name) && e).filter(Boolean);
                    return r ? _(n, e) : n;
                  })(s, y, n),
                [s, y, n],
              );
            (0, d.useEffect)(() => {
              E && E(C.updated);
            }, [E, C]),
              (0, d.useEffect)(() => {
                'function' == typeof p && p(y);
              }, [y, p]);
            const N = (0, d.useCallback)(
                e => () => {
                  a && u([]);
                  const t = g.findIndex(({ id: t }) => t === e);
                  u([...g.slice(0, t), ...g.slice(t + 1)]);
                },
                [a, g, u],
              ),
              A = (0, d.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? u(e)
                    : -1 === g.findIndex(({ id: t }) => t === e.id)
                    ? u(a ? [e] : [...g, e])
                    : N(e.id)();
                },
                [a, N, u, g],
              ),
              T = (0, d.useCallback)(
                e => {
                  const [t] = g.filter(t => !e.find(e => t.id === e.id));
                  N(t.id)();
                },
                [N, g],
              );
            return (0, o.createElement)(
              'div',
              {
                className: i()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': l,
                  'is-token': 'token' === f,
                }),
              },
              'text' === f && (0, o.createElement)(O, { ...e, onRemove: N, messages: C }),
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === f
                  ? (0, o.createElement)(b.TextControl, {
                      label: C.search,
                      type: 'search',
                      value: y,
                      onChange: e => v(e),
                    })
                  : (0, o.createElement)(b.FormTokenField, {
                      disabled: l,
                      label: C.search,
                      onChange: T,
                      onInputChange: e => v(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: l
                        ? [(0, m.__)('Loading…', 'woocommerce')]
                        : g.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              l
                ? (0, o.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, o.createElement)(b.Spinner, null),
                  )
                : (0, o.createElement)(P, {
                    ...e,
                    search: y,
                    filteredList: x,
                    messages: C,
                    onSelect: A,
                    instanceId: S,
                    useExpandedPanelId: k,
                  }),
            );
          },
          R = ((0, b.withSpokenMessages)(L), window.wc.wcSettings);
        r(4302);
        const I = (0, h.withInstanceId)(
          ({ className: e, headingLevel: t, onChange: r, heading: n, instanceId: a }) => {
            const s = `h${t}`;
            return (0, o.createElement)(
              s,
              { className: e },
              (0, o.createElement)(
                'label',
                { className: 'screen-reader-text', htmlFor: `block-title-${a}` },
                (0, m.__)('Block title', 'woocommerce'),
              ),
              (0, o.createElement)(l.PlainText, {
                id: `block-title-${a}`,
                className: 'wc-block-editor-components-title',
                value: n,
                onChange: r,
                style: { backgroundColor: 'transparent' },
              }),
            );
          },
        );
        var F = r(923),
          B = r.n(F);
        function j(e) {
          const t = (0, d.useRef)(e);
          return B()(e, t.current) || (t.current = e), t.current;
        }
        const q = window.wc.wcBlocksData,
          $ = window.wp.data,
          G = (0, d.createContext)('page'),
          D = () => (0, d.useContext)(G),
          M =
            (G.Provider,
            e => {
              const t = D();
              e = e || t;
              const r = (0, $.useSelect)(
                  t => t(q.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                  [e],
                ),
                { setValueForQueryContext: o } = (0, $.useDispatch)(q.QUERY_STATE_STORE_KEY);
              return [
                r,
                (0, d.useCallback)(
                  t => {
                    o(e, t);
                  },
                  [e, o],
                ),
              ];
            }),
          Q = (e, t, r) => {
            const o = D();
            r = r || o;
            const n = (0, $.useSelect)(
                o => o(q.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                [r, e],
              ),
              { setQueryValue: l } = (0, $.useDispatch)(q.QUERY_STATE_STORE_KEY);
            return [
              n,
              (0, d.useCallback)(
                t => {
                  l(r, e, t);
                },
                [r, e, l],
              ),
            ];
          },
          U = window.wc.wcTypes,
          V = e => {
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
            const a = (0, d.useRef)({ results: [], isLoading: !0 }),
              s = j(n),
              c = j(o),
              i = (() => {
                const [, e] = (0, d.useState)();
                return (0, d.useCallback)(t => {
                  e(() => {
                    throw t;
                  });
                }, []);
              })(),
              u = (0, $.useSelect)(
                e => {
                  if (!l) return null;
                  const o = e(q.COLLECTIONS_STORE_KEY),
                    n = [t, r, s, c],
                    a = o.getCollectionError(...n);
                  if (a) {
                    if (!(0, U.isError)(a))
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
                [t, r, c, s, l],
              );
            return null !== u && (a.current = u), a.current;
          };
        var Y = r(4717);
        const W = window.wc.blocksComponents;
        r(5400);
        const K = ({ name: e, count: t }) =>
          (0, o.createElement)(
            o.Fragment,
            null,
            e,
            null !== t &&
              Number.isFinite(t) &&
              (0, o.createElement)(W.Label, {
                label: t.toString(),
                screenReaderLabel: (0, m.sprintf) /* translators: %s number of products. */(
                  /* translators: %s number of products. */
                  (0, m._n)('%s product', '%s products', t, 'woocommerce'),
                  t,
                ),
                wrapperElement: 'span',
                wrapperProps: { className: 'wc-filter-element-label-list-count' },
              }),
          );
        r(8335);
        const H = ({
          className: e,
          /* translators: Reset button text for filters. */
          label: t = (0, m.__)('Reset', 'woocommerce'),
          onClick: r,
          screenReaderLabel: n = (0, m.__)('Reset filter', 'woocommerce'),
        }) =>
          (0, o.createElement)(
            'button',
            { className: i()('wc-block-components-filter-reset-button', e), onClick: r },
            (0, o.createElement)(W.Label, { label: t, screenReaderLabel: n }),
          );
        r(1504);
        const z = ({
            className: e,
            isLoading: t,
            disabled: r,
            /* translators: Submit button text for filters. */
            label: n = (0, m.__)('Apply', 'woocommerce'),
            onClick: l,
            screenReaderLabel: a = (0, m.__)('Apply filter', 'woocommerce'),
          }) =>
            (0, o.createElement)(
              'button',
              {
                type: 'submit',
                className: i()(
                  'wp-block-button__link',
                  'wc-block-filter-submit-button',
                  'wc-block-components-filter-submit-button',
                  { 'is-loading': t },
                  e,
                ),
                disabled: r,
                onClick: l,
              },
              (0, o.createElement)(W.Label, { label: n, screenReaderLabel: a }),
            ),
          J = window.wp.url;
        var Z = r(224);
        const X = (0, R.getSettingWithCoercion)('isRenderingPhpTemplate', !1, U.isBoolean),
          ee = 'query_type_',
          te = 'filter_';
        function re(e) {
          if (X) {
            const t = new URL(e);
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
              t.searchParams.delete('paged'),
              t.searchParams.forEach((e, r) => {
                r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
              }),
              (window.location.href = t.href);
          } else window.history.replaceState({}, '', e);
        }
        var oe = r(1331);
        r(243);
        const ne = ({
          className: e,
          style: t,
          suggestions: r,
          multiple: n = !0,
          saveTransform: l = e => e.trim().replace(/\s/g, '-'),
          messages: a = {},
          validateInput: s = e => r.includes(e),
          label: c = '',
          ...u
        }) =>
          (0, o.createElement)(
            'div',
            {
              className: i()('wc-blocks-components-form-token-field-wrapper', e, {
                'single-selection': !n,
              }),
              style: t,
            },
            (0, o.createElement)(oe.A, {
              label: c,
              __experimentalExpandOnFocus: !0,
              __experimentalShowHowTo: !1,
              __experimentalValidateInput: s,
              saveTransform: l,
              maxLength: n ? void 0 : 1,
              suggestions: r,
              messages: a,
              ...u,
            }),
          );
        r(1626);
        const le = ({ children: e }) =>
            (0, o.createElement)('div', { className: 'wc-block-filter-title-placeholder' }, e),
          ae = (0, R.getSetting)('attributes', []).reduce((e, t) => {
            const r =
              (o = t) && o.attribute_name
                ? {
                    id: parseInt(o.attribute_id, 10),
                    name: o.attribute_name,
                    taxonomy: 'pa_' + o.attribute_name,
                    label: o.attribute_label,
                    orderby: o.attribute_orderby,
                  }
                : null;
            var o;
            return r && r.id && e.push(r), e;
          }, []),
          se = (e = [], t, r, o = [], n = 'in') => {
            if (!r || !r.taxonomy) return [];
            const l = e.filter(e => e.attribute !== r.taxonomy);
            return (
              0 === o.length
                ? t(l)
                : (l.push({
                    attribute: r.taxonomy,
                    operator: n,
                    slug: o.map(({ slug: e }) => e).sort(),
                  }),
                  t((0, u.di)(l).asc('attribute'))),
              l
            );
          },
          ce = [
            {
              value: 'preview-1',
              formattedValue: 'preview-1',
              name: 'Blue',
              label: (0, o.createElement)(K, { name: 'Blue', count: 3 }),
              textLabel: 'Blue (3)',
            },
            {
              value: 'preview-2',
              formattedValue: 'preview-2',
              name: 'Green',
              label: (0, o.createElement)(K, { name: 'Green', count: 3 }),
              textLabel: 'Green (3)',
            },
            {
              value: 'preview-3',
              formattedValue: 'preview-3',
              name: 'Red',
              label: (0, o.createElement)(K, { name: 'Red', count: 2 }),
              textLabel: 'Red (2)',
            },
          ],
          ie = {
            count: 0,
            has_archives: !0,
            id: 0,
            label: 'Preview',
            name: 'preview',
            order: 'menu_order',
            parent: 0,
            taxonomy: 'preview',
            type: '',
          };
        function ue() {
          return Math.floor(Math.random() * Date.now());
        }
        r(3399);
        const me = e => e.replace('pa_', ''),
          de = (e, t = []) => {
            const r = {};
            t.forEach(e => {
              const { attribute: t, slug: o, operator: n } = e,
                l = me(t),
                a = o.join(','),
                s = `${ee}${l}`,
                c = 'in' === n ? 'or' : 'and';
              (r[`${te}${l}`] = a), (r[s] = c);
            });
            const o = (0, J.removeQueryArgs)(e, ...Object.keys(r));
            return (0, J.addQueryArgs)(o, r);
          },
          pe = e => {
            if (e) {
              const r =
                ((t = `filter_${e.name}`),
                window ? (0, J.getQueryArg)(window.location.href, t) : null);
              return ('string' == typeof r ? r.split(',') : []).map(e =>
                encodeURIComponent(e).toLowerCase(),
              );
            }
            var t;
            return [];
          },
          be = e =>
            e
              .trim()
              .replace(/\s/g, '-')
              .replace(/_/g, '-')
              .replace(/-+/g, '-')
              .replace(/[^a-zA-Z0-9-]/g, ''),
          ge = ({ isLoading: e = !1, options: t, checked: r, onChange: n }) =>
            e
              ? (0, o.createElement)(
                  o.Fragment,
                  null,
                  (0, o.createElement)('span', { className: 'is-loading' }),
                  (0, o.createElement)('span', { className: 'is-loading' }),
                )
              : (0, o.createElement)(W.CheckboxList, {
                  className: 'wc-block-attribute-filter-list',
                  options: t,
                  checked: r,
                  onChange: n,
                  isLoading: e,
                  isDisabled: e,
                }),
          he = (0, d.createContext)({}),
          we = ({ attributes: e, isEditor: t = !1, getNotice: r = () => null }) => {
            const n = (0, R.getSettingWithCoercion)('hasFilterableProducts', !1, U.isBoolean),
              l = (0, R.getSettingWithCoercion)('isRenderingPhpTemplate', !1, U.isBoolean),
              s = (0, R.getSettingWithCoercion)('pageUrl', window.location.href, U.isString),
              [c, p] = (0, d.useState)(!1),
              b =
                e.isPreview && !e.attributeId
                  ? ie
                  : (e => {
                      if (e) return ae.find(t => t.id === e);
                    })(e.attributeId),
              g = (0, d.useMemo)(() => pe(b), [b]),
              [h, w] = (0, d.useState)(g),
              [_, f] = (0, d.useState)(ue()),
              [E, v] = (0, d.useState)(e.isPreview && !e.attributeId ? ce : []),
              [k] = M(),
              [S, C] = Q('attributes', []),
              { results: x, isLoading: N } = V({
                namespace: '/wc/store/v1',
                resourceName: 'products/attributes/terms',
                resourceValues: [(null == b ? void 0 : b.id) || 0],
                shouldSelect: e.attributeId > 0,
                query: { orderby: (null == b ? void 0 : b.orderby) || 'menu_order' },
              }),
              { results: A, isLoading: T } = (({
                queryAttribute: e,
                queryPrices: t,
                queryStock: r,
                queryRating: o,
                queryState: n,
                isEditor: l = !1,
              }) => {
                let a = D();
                a = `${a}-collection-data`;
                const [s] = M(a),
                  [c, i] = Q('calculate_attribute_counts', [], a),
                  [m, p] = Q('calculate_price_range', null, a),
                  [b, g] = Q('calculate_stock_status_counts', null, a),
                  [h, w] = Q('calculate_rating_counts', null, a),
                  _ = j(e || {}),
                  f = j(t),
                  E = j(r),
                  y = j(o);
                (0, d.useEffect)(() => {
                  'object' == typeof _ &&
                    Object.keys(_).length &&
                    (c.find(
                      e => (0, U.objectHasProp)(_, 'taxonomy') && e.taxonomy === _.taxonomy,
                    ) ||
                      i([...c, _]));
                }, [_, c, i]),
                  (0, d.useEffect)(() => {
                    m !== f && void 0 !== f && p(f);
                  }, [f, p, m]),
                  (0, d.useEffect)(() => {
                    b !== E && void 0 !== E && g(E);
                  }, [E, g, b]),
                  (0, d.useEffect)(() => {
                    h !== y && void 0 !== y && w(y);
                  }, [y, w, h]);
                const [v, k] = (0, d.useState)(l),
                  [S] = (0, Y.d7)(v, 200);
                v || k(!0);
                const C = (0, d.useMemo)(
                  () =>
                    (e => {
                      const t = e;
                      return (
                        Array.isArray(e.calculate_attribute_counts) &&
                          (t.calculate_attribute_counts = (0, u.di)(
                            e.calculate_attribute_counts.map(({ taxonomy: e, queryType: t }) => ({
                              taxonomy: e,
                              query_type: t,
                            })),
                          ).asc(['taxonomy', 'query_type'])),
                        t
                      );
                    })(s),
                  [s],
                );
                return V({
                  namespace: '/wc/store/v1',
                  resourceName: 'products/collection-data',
                  query: {
                    ...n,
                    page: void 0,
                    per_page: void 0,
                    orderby: void 0,
                    order: void 0,
                    ...C,
                  },
                  shouldSelect: S,
                });
              })({
                queryAttribute: {
                  taxonomy: (null == b ? void 0 : b.taxonomy) || '',
                  queryType: e.queryType,
                },
                queryState: k,
                isEditor: t,
              }),
              O = (0, d.useCallback)(
                e =>
                  (0, U.objectHasProp)(A, 'attribute_counts') && Array.isArray(A.attribute_counts)
                    ? A.attribute_counts.find(({ term: t }) => t === e)
                    : null,
                [A],
              );
            (0, d.useEffect)(() => {
              if (N || T) return;
              if (!Array.isArray(x)) return;
              const t = x
                .map(t => {
                  const r = O(t.id);
                  if (
                    !(
                      r ||
                      h.includes(t.slug) ||
                      ((n = t.slug),
                      null != k &&
                        k.attributes &&
                        k.attributes.some(
                          ({ attribute: e, slug: t = [] }) =>
                            e === (null == b ? void 0 : b.taxonomy) && t.includes(n),
                        ))
                    )
                  )
                    return null;
                  var n;
                  const l = r ? r.count : 0;
                  return {
                    formattedValue: be(t.slug),
                    value: t.slug,
                    name: (0, y.decodeEntities)(t.name),
                    label: (0, o.createElement)(K, {
                      name: (0, y.decodeEntities)(t.name),
                      count: e.showCounts ? l : null,
                    }),
                    textLabel: e.showCounts
                      ? `${(0, y.decodeEntities)(t.name)} (${l})`
                      : (0, y.decodeEntities)(t.name),
                  };
                })
                .filter(e => !!e);
              v(t), f(ue());
            }, [null == b ? void 0 : b.taxonomy, x, N, e.showCounts, T, O, h, k.attributes]);
            const P = (0, d.useCallback)(
                e =>
                  Array.isArray(x)
                    ? x.reduce((t, r) => (e.includes(r.slug) && t.push(r), t), [])
                    : [],
                [x],
              ),
              L = (0, d.useCallback)(
                (e, t = !1) => {
                  if (
                    ((e = e.map(e => ({ ...e, slug: e.slug.map(e => decodeURIComponent(e)) }))), t)
                  ) {
                    if (null == b || !b.taxonomy) return;
                    const t = Object.keys((0, J.getQueryArgs)(window.location.href)),
                      r = me(b.taxonomy),
                      o = t.reduce(
                        (e, t) =>
                          t.includes(ee + r) || t.includes(te + r)
                            ? (0, J.removeQueryArgs)(e, t)
                            : e,
                        window.location.href,
                      );
                    re(de(o, e));
                  } else {
                    const t = de(s, e);
                    ((e, t) => {
                      const r = Object.entries(t).reduce(
                        (e, [t, r]) => (t.includes('query_type') ? e : { ...e, [t]: r }),
                        {},
                      );
                      return Object.entries(r).reduce((t, [r, o]) => e[r] === o && t, !0);
                    })((0, J.getQueryArgs)(window.location.href), (0, J.getQueryArgs)(t)) || re(t);
                  }
                },
                [s, null == b ? void 0 : b.taxonomy],
              ),
              I = t => {
                const r = se(S, C, b, P(t), 'or' === e.queryType ? 'in' : 'and');
                L(r, 0 === t.length);
              },
              F = (0, d.useCallback)(
                (r, o = !1) => {
                  t ||
                    (w(r),
                    (!o && e.showFilterButton) ||
                      se(S, C, b, P(r), 'or' === e.queryType ? 'in' : 'and'));
                },
                [t, w, S, C, b, P, e.queryType, e.showFilterButton],
              ),
              q = j(
                (0, d.useMemo)(
                  () =>
                    (0, U.isAttributeQueryCollection)(S)
                      ? S.filter(
                          ({ attribute: e }) => e === (null == b ? void 0 : b.taxonomy),
                        ).flatMap(({ slug: e }) => e)
                      : [],
                  [S, null == b ? void 0 : b.taxonomy],
                ),
              ),
              $ = (function(e, t) {
                const r = (0, d.useRef)();
                return (
                  (0, d.useEffect)(() => {
                    r.current === e || (r.current = e);
                  }, [e, t]),
                  r.current
                );
              })(q);
            (0, d.useEffect)(() => {
              !$ || B()($, q) || B()(h, q) || F(q);
            }, [h, q, $, F]);
            const G = 'single' !== e.selectType,
              W = (0, d.useCallback)(
                e => {
                  const t = h.includes(e);
                  let r;
                  G
                    ? ((r = h.filter(t => t !== e)), t || (r.push(e), r.sort()))
                    : (r = t ? [] : [e]),
                    F(r);
                },
                [h, G, F],
              );
            (0, d.useEffect)(() => {
              b &&
                !e.showFilterButton &&
                ((({ currentCheckedFilters: e, hasSetFilterDefaultsFromUrl: t }) =>
                  t && 0 === e.length)({ currentCheckedFilters: h, hasSetFilterDefaultsFromUrl: c })
                  ? L(S, !0)
                  : L(S, !1));
            }, [c, L, S, b, h, e.showFilterButton]),
              (0, d.useEffect)(() => {
                if (!c && !N) return g.length > 0 ? (p(!0), void F(g, !0)) : void (l || p(!0));
              }, [b, c, N, F, g, l]);
            const X = (() => {
              const { wrapper: e } = (0, d.useContext)(he);
              return t => {
                e && e.current && (e.current.hidden = !t);
              };
            })();
            if (!n) return X(!1), null;
            if (!b) return t ? r('noAttributes') : (X(!1), null);
            if (0 === E.length && !N && t) return r('noProducts');
            const oe = `h${e.headingLevel}`,
              we = !e.isPreview && N,
              _e = !e.isPreview && T,
              fe = (we || _e) && 0 === E.length;
            if (!fe && 0 === E.length) return X(!1), null;
            const Ee = G ? !fe && h.length < E.length : !fe && 0 === h.length,
              ye = (0, o.createElement)(
                oe,
                { className: 'wc-block-attribute-filter__title' },
                e.heading,
              ),
              ve = fe ? (0, o.createElement)(le, null, ye) : ye;
            return (
              X(!0),
              (0, o.createElement)(
                o.Fragment,
                null,
                !t && e.heading && ve,
                (0, o.createElement)(
                  'div',
                  { className: i()('wc-block-attribute-filter', `style-${e.displayStyle}`) },
                  'dropdown' === e.displayStyle
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(ne, {
                          key: _,
                          className: i()({ 'single-selection': !G, 'is-loading': fe }),
                          suggestions: E.filter(e => !h.includes(e.value)).map(
                            e => e.formattedValue,
                          ),
                          disabled: fe,
                          placeholder: (0, m.sprintf) /* translators: %s attribute name. */(
                            /* translators: %s attribute name. */
                            (0, m.__)('Select %s', 'woocommerce'),
                            b.label,
                          ),
                          onChange: e => {
                            !G && e.length > 1 && (e = [e[e.length - 1]]);
                            const t = [
                              (e = e.map(e => {
                                const t = E.find(t => t.formattedValue === e);
                                return t ? t.value : e;
                              })),
                              h,
                            ].reduce((e, t) => e.filter(e => !t.includes(e)));
                            if (1 === t.length) return W(t[0]);
                            const r = [h, e].reduce((e, t) => e.filter(e => !t.includes(e)));
                            1 === r.length && W(r[0]);
                          },
                          value: h,
                          displayTransform: e => {
                            const t = E.find(t => [t.value, t.formattedValue].includes(e));
                            return t ? t.textLabel : e;
                          },
                          saveTransform: be,
                          messages: {
                            added: (0, m.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, m.__)('%s filter added.', 'woocommerce'),
                              b.label,
                            ),
                            removed: (0, m.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, m.__)('%s filter removed.', 'woocommerce'),
                              b.label,
                            ),
                            remove: (0, m.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, m.__)('Remove %s filter.', 'woocommerce'),
                              b.label.toLocaleLowerCase(),
                            ),
                            __experimentalInvalid: (0,
                            m.sprintf) /* translators: %s is the attribute label. */(
                              /* translators: %s is the attribute label. */
                              (0, m.__)('Invalid %s filter.', 'woocommerce'),
                              b.label.toLocaleLowerCase(),
                            ),
                          },
                        }),
                        Ee && (0, o.createElement)(a.A, { icon: Z.A, size: 30 }),
                      )
                    : (0, o.createElement)(ge, {
                        options: E,
                        checked: h,
                        onChange: W,
                        isLoading: fe,
                        isDisabled: fe,
                      }),
                ),
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-attribute-filter__actions' },
                  (h.length > 0 || t) &&
                    !fe &&
                    (0, o.createElement)(H, {
                      onClick: () => {
                        w([]), f(ue()), c && I([]);
                      },
                      screenReaderLabel: (0, m.__)('Reset attribute filter', 'woocommerce'),
                    }),
                  e.showFilterButton &&
                    (0, o.createElement)(z, {
                      className: 'wc-block-attribute-filter__button',
                      isLoading: fe,
                      disabled: (() => {
                        if (we || _e) return !0;
                        const e = pe(b);
                        return e.length === h.length && h.every(t => e.includes(t));
                      })(),
                      onClick: () => I(h),
                    }),
                ),
              )
            );
          };
        r(8035);
        const _e = ({ clientId: e, setAttributes: t, filterType: r, attributes: a }) => {
            const { replaceBlock: s } = (0, $.useDispatch)('core/block-editor'),
              { heading: c, headingLevel: i } = a;
            if (
              (0, $.useSelect)(
                t => {
                  const { getBlockParentsByBlockName: r } = t('core/block-editor');
                  return r(e, 'woocommerce/filter-wrapper').length > 0;
                },
                [e],
              ) ||
              !r
            )
              return null;
            const u = [
              (0, o.createElement)(
                b.Button,
                {
                  key: 'convert',
                  onClick: () => {
                    const o = [(0, n.createBlock)(`woocommerce/${r}`, { ...a, heading: '' })];
                    c &&
                      '' !== c &&
                      o.unshift(
                        (0, n.createBlock)('core/heading', {
                          content: c,
                          level: null != i ? i : 2,
                        }),
                      ),
                      s(
                        e,
                        (0, n.createBlock)(
                          'woocommerce/filter-wrapper',
                          { heading: c, filterType: r },
                          [...o],
                        ),
                      ),
                      t({ heading: '', lock: { remove: !0 } });
                  },
                  variant: 'primary',
                },
                (0, m.__)('Upgrade block', 'woocommerce'),
              ),
            ];
            return (0, o.createElement)(
              l.Warning,
              { actions: u },
              (0, m.__)(
                'Filter block: We have improved this block to make styling easier. Upgrade it using the button below.',
                'woocommerce',
              ),
            );
          },
          fe = (0, R.getSetting)('attributes', []),
          Ee = {
            noAttributes: (0, m.__)(
              'Please select an attribute to use this filter!',
              'woocommerce',
            ),
            noProducts: (0, m.__)(
              'There are no products with the selected attributes.',
              'woocommerce',
            ),
          },
          ye = e => {
            const t = Ee[e];
            return t
              ? (0, o.createElement)(
                  b.Notice,
                  { status: 'warning', isDismissible: !1 },
                  (0, o.createElement)('p', null, t),
                )
              : null;
          },
          ve = (0, b.withSpokenMessages)(
            ({ attributes: e, setAttributes: t, debouncedSpeak: r, clientId: n }) => {
              const {
                  attributeId: c,
                  displayStyle: g,
                  heading: h,
                  headingLevel: w,
                  isPreview: _,
                  queryType: f,
                  showCounts: E,
                  showFilterButton: y,
                  selectType: v,
                } = e,
                [k, S] = (0, d.useState)(!c && !_),
                C = (0, l.useBlockProps)(),
                x = e => {
                  if (!e || !e.length) return;
                  const r = e[0].id;
                  fe.find(e => e.attribute_id === r.toString()) && c !== r && t({ attributeId: r });
                },
                N = ({ isCompact: e }) => {
                  const t = {
                      clear: (0, m.__)('Clear selected attribute', 'woocommerce'),
                      list: (0, m.__)('Product Attributes', 'woocommerce'),
                      noItems: (0, m.__)(
                        "Your store doesn't have any product attributes.",
                        'woocommerce',
                      ),
                      search: (0, m.__)('Search for a product attribute:', 'woocommerce'),
                      selected: e =>
                        (0, m.sprintf) /* translators: %d is the number of attributes selected. */(
                          /* translators: %d is the number of attributes selected. */
                          (0, m._n)(
                            '%d attribute selected',
                            '%d attributes selected',
                            e,
                            'woocommerce',
                          ),
                          e,
                        ),
                      updated: (0, m.__)(
                        'Product attribute search results updated.',
                        'woocommerce',
                      ),
                    },
                    r = (0, u.di)(
                      fe.map(e => ({ id: parseInt(e.attribute_id, 10), name: e.attribute_label })),
                    ).asc('name');
                  return (0, o.createElement)(L, {
                    className: 'woocommerce-product-attributes',
                    list: r,
                    selected: r.filter(({ id: e }) => e === c),
                    onChange: x,
                    messages: t,
                    isSingle: !0,
                    isCompact: e,
                  });
                };
              return 0 === Object.keys(fe).length
                ? (0, o.createElement)(
                    b.Placeholder,
                    {
                      className: 'wc-block-attribute-filter',
                      icon: (0, o.createElement)(a.A, { icon: s.A }),
                      label: (0, m.__)('Filter by Attribute', 'woocommerce'),
                      instructions: (0, m.__)(
                        'Display a list of filters based on the selected attributes.',
                        'woocommerce',
                      ),
                    },
                    (0, o.createElement)(
                      'p',
                      null,
                      (0, m.__)(
                        "Attributes are needed for filtering your products. You haven't created any attributes yet.",
                        'woocommerce',
                      ),
                    ),
                    (0, o.createElement)(
                      b.Button,
                      {
                        className: 'wc-block-attribute-filter__add-attribute-button',
                        variant: 'secondary',
                        href: (0, R.getAdminLink)(
                          'edit.php?post_type=product&page=product_attributes',
                        ),
                        target: '_top',
                      },
                      (0, m.__)('Add new attribute', 'woocommerce') + ' ',
                      (0, o.createElement)(a.A, { icon: p.A }),
                    ),
                    (0, o.createElement)(
                      b.Button,
                      {
                        className: 'wc-block-attribute-filter__read_more_button',
                        variant: 'tertiary',
                        href: 'https://woocommerce.com/document/managing-product-taxonomies/',
                        target: '_blank',
                      },
                      (0, m.__)('Learn more', 'woocommerce'),
                    ),
                  )
                : (0, o.createElement)(
                    'div',
                    { ...C },
                    (0, o.createElement)(
                      l.BlockControls,
                      null,
                      (0, o.createElement)(b.ToolbarGroup, {
                        controls: [
                          {
                            icon: 'edit',
                            title: (0, m.__)('Edit', 'woocommerce'),
                            onClick: () => S(!k),
                            isActive: k,
                          },
                        ],
                      }),
                    ),
                    (0, o.createElement)(
                      l.InspectorControls,
                      { key: 'inspector' },
                      (0, o.createElement)(
                        b.PanelBody,
                        { title: (0, m.__)('Display Settings', 'woocommerce') },
                        (0, o.createElement)(b.ToggleControl, {
                          label: (0, m.__)('Display product count', 'woocommerce'),
                          checked: E,
                          onChange: () => t({ showCounts: !E }),
                        }),
                        (0, o.createElement)(
                          b.__experimentalToggleGroupControl,
                          {
                            label: (0, m.__)('Allow selecting multiple options?', 'woocommerce'),
                            value: v || 'multiple',
                            onChange: e => t({ selectType: e }),
                            className: 'wc-block-attribute-filter__multiple-toggle',
                          },
                          (0, o.createElement)(b.__experimentalToggleGroupControlOption, {
                            value: 'multiple',
                            label: (0, m._x)('Multiple', 'Number of filters', 'woocommerce'),
                          }),
                          (0, o.createElement)(b.__experimentalToggleGroupControlOption, {
                            value: 'single',
                            label: (0, m._x)('Single', 'Number of filters', 'woocommerce'),
                          }),
                        ),
                        'multiple' === v &&
                          (0, o.createElement)(
                            b.__experimentalToggleGroupControl,
                            {
                              label: (0, m.__)('Filter Conditions', 'woocommerce'),
                              help:
                                'and' === f
                                  ? (0, m.__)(
                                      'Choose to return filter results for all of the attributes selected.',
                                      'woocommerce',
                                    )
                                  : (0, m.__)(
                                      'Choose to return filter results for any of the attributes selected.',
                                      'woocommerce',
                                    ),
                              value: f,
                              onChange: e => t({ queryType: e }),
                              className: 'wc-block-attribute-filter__conditions-toggle',
                            },
                            (0, o.createElement)(b.__experimentalToggleGroupControlOption, {
                              value: 'or',
                              label: (0, m.__)('Any', 'woocommerce'),
                            }),
                            (0, o.createElement)(b.__experimentalToggleGroupControlOption, {
                              value: 'and',
                              label: (0, m.__)('All', 'woocommerce'),
                            }),
                          ),
                        (0, o.createElement)(
                          b.__experimentalToggleGroupControl,
                          {
                            label: (0, m.__)('Display Style', 'woocommerce'),
                            value: g,
                            onChange: e => t({ displayStyle: e }),
                            className: 'wc-block-attribute-filter__display-toggle',
                          },
                          (0, o.createElement)(b.__experimentalToggleGroupControlOption, {
                            value: 'list',
                            label: (0, m.__)('List', 'woocommerce'),
                          }),
                          (0, o.createElement)(b.__experimentalToggleGroupControlOption, {
                            value: 'dropdown',
                            label: (0, m.__)('Dropdown', 'woocommerce'),
                          }),
                        ),
                        (0, o.createElement)(b.ToggleControl, {
                          label: (0, m.__)("Show 'Apply filters' button", 'woocommerce'),
                          help: (0, m.__)(
                            'Products will update when the button is clicked.',
                            'woocommerce',
                          ),
                          checked: y,
                          onChange: e => t({ showFilterButton: e }),
                        }),
                      ),
                      (0, o.createElement)(
                        b.PanelBody,
                        { title: (0, m.__)('Content Settings', 'woocommerce'), initialOpen: !1 },
                        N({ isCompact: !0 }),
                      ),
                    ),
                    (0, o.createElement)(_e, {
                      clientId: n,
                      attributes: e,
                      setAttributes: t,
                      filterType: 'attribute-filter',
                    }),
                    k
                      ? (0, o.createElement)(
                          b.Placeholder,
                          {
                            className: 'wc-block-attribute-filter',
                            icon: (0, o.createElement)(a.A, { icon: s.A }),
                            label: (0, m.__)('Filter by Attribute', 'woocommerce'),
                          },
                          (0, o.createElement)(
                            'div',
                            { className: 'wc-block-attribute-filter__instructions' },
                            (0, m.__)(
                              'Display a list of filters based on the selected attributes.',
                              'woocommerce',
                            ),
                          ),
                          (0, o.createElement)(
                            'div',
                            { className: 'wc-block-attribute-filter__selection' },
                            N({ isCompact: !1 }),
                            (0, o.createElement)(
                              b.Button,
                              {
                                variant: 'primary',
                                onClick: () => {
                                  S(!1),
                                    r(
                                      (0, m.__)(
                                        'Now displaying a preview of the Filter Products by Attribute block.',
                                        'woocommerce',
                                      ),
                                    );
                                },
                              },
                              (0, m.__)('Done', 'woocommerce'),
                            ),
                          ),
                        )
                      : (0, o.createElement)(
                          'div',
                          { className: i()('wc-block-attribute-filter') },
                          h &&
                            (0, o.createElement)(I, {
                              className: 'wc-block-attribute-filter__title',
                              headingLevel: w,
                              heading: h,
                              onChange: e => t({ heading: e }),
                            }),
                          (0, o.createElement)(
                            b.Disabled,
                            null,
                            (0, o.createElement)(we, {
                              attributes: e,
                              isEditor: !0,
                              getNotice: ye,
                            }),
                          ),
                        ),
                  );
            },
          ),
          ke = {
            heading: { type: 'string', default: (0, m.__)('Filter by attribute', 'woocommerce') },
          },
          Se = JSON.parse(
            '{"name":"woocommerce/attribute-filter","version":"1.0.0","title":"Filter by Attribute Controls","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":false},"queryType":{"type":"string","default":"or"},"headingLevel":{"type":"number","default":3},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        var Ce, xe, Ne, Ae, Te, Oe, Pe, Le, Re, Ie;
        const Fe = (0, R.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          Be = (Fe.pluginUrl, Fe.pluginUrl, Fe.buildPhase),
          je =
            (null === (Ce = R.STORE_PAGES.shop) || void 0 === Ce || Ce.permalink,
            null === (xe = R.STORE_PAGES.checkout) || void 0 === xe || xe.id,
            null === (Ne = R.STORE_PAGES.checkout) || void 0 === Ne || Ne.permalink,
            null === (Ae = R.STORE_PAGES.privacy) || void 0 === Ae || Ae.permalink,
            null === (Te = R.STORE_PAGES.privacy) || void 0 === Te || Te.title,
            null === (Oe = R.STORE_PAGES.terms) || void 0 === Oe || Oe.permalink,
            null === (Pe = R.STORE_PAGES.terms) || void 0 === Pe || Pe.title,
            null === (Le = R.STORE_PAGES.cart) || void 0 === Le || Le.id,
            null === (Re = R.STORE_PAGES.cart) || void 0 === Re || Re.permalink,
            null !== (Ie = R.STORE_PAGES.myaccount) && void 0 !== Ie && Ie.permalink
              ? R.STORE_PAGES.myaccount.permalink
              : (0, R.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, R.getSetting)('localPickupEnabled', !1),
            (0, R.getSetting)('countries', {})),
          qe = (0, R.getSetting)('countryData', {}),
          $e =
            (Object.fromEntries(
              Object.keys(qe)
                .filter(e => !0 === qe[e].allowBilling)
                .map(e => [e, je[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(qe)
                .filter(e => !0 === qe[e].allowBilling)
                .map(e => [e, qe[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(qe)
                .filter(e => !0 === qe[e].allowShipping)
                .map(e => [e, je[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(qe)
                .filter(e => !0 === qe[e].allowShipping)
                .map(e => [e, qe[e].states || []]),
            ),
            Object.fromEntries(Object.keys(qe).map(e => [e, qe[e].locale || []])),
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
          Ge =
            ((0, R.getSetting)('addressFieldsLocations', $e).address,
            (0, R.getSetting)('addressFieldsLocations', $e).contact,
            (0, R.getSetting)('addressFieldsLocations', $e).order,
            (0, R.getSetting)('additionalOrderFields', {}),
            (0, R.getSetting)('additionalContactFields', {}),
            (0, R.getSetting)('additionalAddressFields', {}),
            [
              {
                supports: {
                  ...Se.supports,
                  ...(Be > 1 && { __experimentalBorder: { radius: !1, color: !0, width: !1 } }),
                },
                attributes: {
                  ...Se.attributes,
                  showCounts: { type: 'boolean', default: !0 },
                  ...ke,
                },
                save: ({ attributes: e }) => {
                  const {
                      className: t,
                      showCounts: r,
                      queryType: n,
                      attributeId: a,
                      heading: s,
                      headingLevel: c,
                      displayStyle: u,
                      showFilterButton: m,
                      selectType: d,
                    } = e,
                    p = {
                      'data-attribute-id': a,
                      'data-show-counts': r,
                      'data-query-type': n,
                      'data-heading': s,
                      'data-heading-level': c,
                    };
                  return (
                    'list' !== u && (p['data-display-style'] = u),
                    m && (p['data-show-filter-button'] = m),
                    'single' === d && (p['data-select-type'] = d),
                    (0, o.createElement)(
                      'div',
                      { ...l.useBlockProps.save({ className: i()('is-loading', t) }), ...p },
                      (0, o.createElement)('span', {
                        'aria-hidden': !0,
                        className: 'wc-block-product-attribute-filter__placeholder',
                      }),
                    )
                  );
                },
              },
            ]);
        (0, n.registerBlockType)(Se, {
          icon: {
            src: (0, o.createElement)(a.A, {
              icon: s.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          supports: { ...Se.supports },
          attributes: { ...Se.attributes, ...ke },
          edit: ve,
          save({ attributes: e }) {
            const { className: t } = e;
            return (0, o.createElement)('div', {
              ...l.useBlockProps.save({ className: i()('is-loading', t) }),
            });
          },
          deprecated: Ge,
        });
      },
      5400: () => {},
      1626: () => {},
      8335: () => {},
      1504: () => {},
      243: () => {},
      8035: () => {},
      3399: () => {},
      4302: () => {},
      8137: () => {},
      6636: () => {},
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
          for (var [r, o, n] = e[u], s = !0, c = 0; c < r.length; c++)
            (!1 & n || a >= n) && Object.keys(l.O).every(e => l.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((s = !1), n < a && (a = n));
          if (s) {
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
      for (var s = 2 & o && e; 'object' == typeof s && !~t.indexOf(s); s = r(s))
        Object.getOwnPropertyNames(s).forEach(t => (a[t] = () => e[t]));
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
    (l.j = 2432),
    (() => {
      var e = { 2432: 0 };
      l.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [a, s, c] = r,
            i = 0;
          if (a.some(t => 0 !== e[t])) {
            for (o in s) l.o(s, o) && (l.m[o] = s[o]);
            if (c) var u = c(l);
          }
          for (t && t(r); i < a.length; i++) (n = a[i]), l.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return l.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var a = l.O(void 0, [94], () => l(929));
  (a = l.O(a)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['attribute-filter'] = a);
})();
