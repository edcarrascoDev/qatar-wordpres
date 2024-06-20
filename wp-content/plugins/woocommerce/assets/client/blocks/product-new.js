(() => {
  var e,
    t,
    r,
    l = {
      9466: (e, t, r) => {
        'use strict';
        r.r(t);
        var l = r(1609),
          n = r(7723);
        const c = window.wp.blocks;
        var o = r(7104),
          a = r(5573);
        const i = (0, l.createElement)(
            a.SVG,
            { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            (0, l.createElement)('path', {
              d:
                'M10 11c-1.588-.479-4-.91-4-.91s2-.241 4-.454c1.8-.191 3.365-.502 4-3.181C14.635 3.775 15 1 15 1s.365 2.775 1 5.455c.635 2.679 2 2.969 4 3.181 2 .213 4 .455 4 .455s-2.412.43-4 .909c-1.588.479-3 1-4 4.546-.746 2.643-.893 4.948-1 5.454-.107-.506-.167-2.5-1-5.454C13 12 11.588 11.479 10 11zM7.333 3.5C6.803 3.333 6 3.182 6 3.182s.667-.085 1.333-.16c.6-.066 1.122-.175 1.334-1.113C8.878.971 9 0 9 0s.122.971.333 1.91c.212.937.667 1.038 1.334 1.113.666.074 1.333.159 1.333.159s-.804.15-1.333.318c-.53.167-1 .35-1.334 1.59C9.085 6.017 9.036 6.824 9 7c-.036-.177-.056-.875-.333-1.91-.334-1.24-.804-1.423-1.334-1.59zM2.444 18C1.474 17.713 0 17.454 0 17.454s1.222-.145 2.444-.272c1.1-.115 2.057-.302 2.445-1.91C5.277 13.666 5.5 12 5.5 12s.223 1.665.611 3.273c.388 1.607 1.222 1.781 2.445 1.909 1.222.127 2.444.273 2.444.273s-1.474.258-2.444.545c-.971.287-1.834.6-2.445 2.727-.456 1.586-.546 2.97-.611 3.273-.065-.304-.102-1.5-.611-3.273C4.278 18.6 3.415 18.287 2.444 18z',
              fill: 'currentColor',
            }),
          ),
          s = window.wc.wcSettings,
          m = {
            columns: { type: 'number', default: (0, s.getSetting)('defaultColumns', 3) },
            rows: { type: 'number', default: (0, s.getSetting)('defaultRows', 3) },
            alignButtons: { type: 'boolean', default: !1 },
            categories: { type: 'array', default: [] },
            catOperator: { type: 'string', default: 'any' },
            contentVisibility: {
              type: 'object',
              default: { image: !0, title: !0, price: !0, rating: !0, button: !0 },
            },
            isPreview: { type: 'boolean', default: !1 },
            stockStatus: {
              type: 'array',
              default: Object.keys((0, s.getSetting)('stockStatusOptions', [])),
            },
          },
          d = window.wp.blockEditor,
          u = window.wp.components,
          h = window.wp.serverSideRender;
        var E = r.n(h);
        const g = ({ onChange: e, settings: t }) => {
            const { image: r, button: c, price: o, rating: a, title: i } = t,
              s = !1 !== r;
            return (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(u.ToggleControl, {
                label: (0, n.__)('Product image', 'woocommerce'),
                checked: s,
                onChange: () => e({ ...t, image: !s }),
              }),
              (0, l.createElement)(u.ToggleControl, {
                label: (0, n.__)('Product title', 'woocommerce'),
                checked: i,
                onChange: () => e({ ...t, title: !i }),
              }),
              (0, l.createElement)(u.ToggleControl, {
                label: (0, n.__)('Product price', 'woocommerce'),
                checked: o,
                onChange: () => e({ ...t, price: !o }),
              }),
              (0, l.createElement)(u.ToggleControl, {
                label: (0, n.__)('Product rating', 'woocommerce'),
                checked: a,
                onChange: () => e({ ...t, rating: !a }),
              }),
              (0, l.createElement)(u.ToggleControl, {
                label: (0, n.__)('Add to Cart button', 'woocommerce'),
                checked: c,
                onChange: () => e({ ...t, button: !c }),
              }),
            );
          },
          p = (e, t, r) =>
            r
              ? Math.min(e, t) === e
                ? t
                : Math.max(e, r) === e
                ? r
                : e
              : Math.max(e, t) === t
              ? e
              : t,
          w = ({
            columns: e,
            rows: t,
            setAttributes: r,
            alignButtons: c,
            minColumns: o = 1,
            maxColumns: a = 6,
            minRows: i = 1,
            maxRows: s = 6,
          }) =>
            (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(u.RangeControl, {
                label: (0, n.__)('Columns', 'woocommerce'),
                value: e,
                onChange: e => {
                  const t = p(e, o, a);
                  r({ columns: Number.isNaN(t) ? '' : t });
                },
                min: o,
                max: a,
              }),
              (0, l.createElement)(u.RangeControl, {
                label: (0, n.__)('Rows', 'woocommerce'),
                value: t,
                onChange: e => {
                  const t = p(e, i, s);
                  r({ rows: Number.isNaN(t) ? '' : t });
                },
                min: i,
                max: s,
              }),
              (0, l.createElement)(u.ToggleControl, {
                label: (0, n.__)('Align the last block to the bottom', 'woocommerce'),
                help: c
                  ? (0, n.__)('Align the last block to the bottom.', 'woocommerce')
                  : (0, n.__)('The last inner block will follow other content.', 'woocommerce'),
                checked: c,
                onChange: () => r({ alignButtons: !c }),
              }),
            );
        var f = r(9019),
          b = r.n(f),
          y = r(6087);
        function _(e, t, r) {
          const l = new Set(t.map(e => e[r]));
          return e.filter(e => !l.has(e[r]));
        }
        const x = window.wp.htmlEntities,
          v = {
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
          C = (e, t = e) => {
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
          k = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, l.createElement)('strong', { key: t }, e)
                  : (0, l.createElement)(y.Fragment, { key: t }, e),
              );
          },
          S = ({ label: e }) =>
            (0, l.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          N = e => {
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
                k((0, x.decodeEntities)(t.name), r),
              ),
            );
            var c;
          },
          O = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: n = '',
            item: c,
            isSelected: o,
            isSingle: a,
            onSelect: i,
            search: s = '',
            selected: m,
            useExpandedPanelId: d,
            ...h
          }) => {
            var E, g;
            const [p, w] = d,
              f = null != e && void 0 !== c.count && null !== c.count,
              v = !(null === (E = c.breadcrumbs) || void 0 === E || !E.length),
              C = !(null === (g = c.children) || void 0 === g || !g.length),
              O = p === c.id,
              P = b()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': v,
                'has-children': C,
                'has-count': f,
                'is-expanded': O,
                'is-radio-button': a,
              }),
              I = h.name || `search-list-item-${n}`,
              j = `${I}-${c.id}`,
              B = (0, y.useCallback)(() => {
                w(O ? -1 : Number(c.id));
              }, [O, c.id, w]);
            return C
              ? (0, l.createElement)(
                  'div',
                  {
                    className: P,
                    onClick: B,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? B() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  a
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)('input', {
                          type: 'radio',
                          id: j,
                          name: I,
                          value: c.value,
                          onChange: i(c),
                          onClick: e => e.stopPropagation(),
                          checked: o,
                          className: 'woocommerce-search-list__item-input',
                          ...h,
                        }),
                        (0, l.createElement)(N, { item: c, search: s }),
                        f ? (0, l.createElement)(S, { label: e || c.count }) : null,
                      )
                    : (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)(u.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: o,
                          ...(!o && c.children.some(e => m.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: k((0, x.decodeEntities)(c.name), s),
                          onChange: () => {
                            o
                              ? i(_(m, c.children, 'id'))()
                              : i(
                                  (function(e, t, r) {
                                    const l = _(t, e, 'id');
                                    return [...e, ...l];
                                  })(m, c.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        f ? (0, l.createElement)(S, { label: e || c.count }) : null,
                      ),
                )
              : (0, l.createElement)(
                  'label',
                  { htmlFor: j, className: P },
                  a
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)('input', {
                          ...h,
                          type: 'radio',
                          id: j,
                          name: I,
                          value: c.value,
                          onChange: i(c),
                          checked: o,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, l.createElement)(N, { item: c, search: s }),
                      )
                    : (0, l.createElement)(u.CheckboxControl, {
                        ...h,
                        id: j,
                        name: I,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, x.decodeEntities)(c.value),
                        label: k((0, x.decodeEntities)(c.name), s),
                        onChange: i(c),
                        checked: o,
                      }),
                  f ? (0, l.createElement)(S, { label: e || c.count }) : null,
                );
          },
          P = O;
        var I = r(2478),
          j = r(9491),
          B = r(2370);
        r(6636);
        const R = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: c,
            screenReaderLabel: a,
            className: i = '',
          }) => {
            const [s, m] = (0, y.useState)(!1),
              d = (0, j.useInstanceId)(R);
            if (((a = a || t), !t)) return null;
            t = (0, x.decodeEntities)(t);
            const h = b()('woocommerce-tag', i, { 'has-remove': !!c }),
              E = `woocommerce-tag__label-${d}`,
              g = (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)('span', { className: 'screen-reader-text' }, a),
                (0, l.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, l.createElement)(
              'span',
              { className: h },
              r
                ? (0, l.createElement)(
                    u.Button,
                    { className: 'woocommerce-tag__text', id: E, onClick: () => m(!0) },
                    g,
                  )
                : (0, l.createElement)('span', { className: 'woocommerce-tag__text', id: E }, g),
              r && s && (0, l.createElement)(u.Popover, { onClose: () => m(!1) }, r),
              c &&
                (0, l.createElement)(
                  u.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: c(e),
                    label: (0, n.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, n.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': E,
                  },
                  (0, l.createElement)(o.A, {
                    icon: B.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          $ = R;
        r(8137);
        const A = e => (0, l.createElement)(P, { ...e }),
          F = e => {
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
              [d] = m;
            return t
              ? (0, l.createElement)(
                  y.Fragment,
                  null,
                  t.map(t => {
                    var u, h;
                    const E =
                        null !== (u = t.children) && void 0 !== u && u.length && !i
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      g =
                        (null === (h = t.children) || void 0 === h ? void 0 : h.length) &&
                        d === t.id;
                    return (0, l.createElement)(
                      y.Fragment,
                      { key: t.id },
                      (0, l.createElement)(
                        'li',
                        null,
                        n({
                          item: t,
                          isSelected: E,
                          onSelect: o,
                          isSingle: i,
                          selected: r,
                          search: s,
                          depth: c,
                          useExpandedPanelId: m,
                          controlId: a,
                        }),
                      ),
                      g ? (0, l.createElement)(F, { ...e, list: t.children, depth: c + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          M = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: c,
            onChange: o,
            onRemove: a,
          }) => {
            if (e || t || !r) return null;
            const i = r.length;
            return (0, l.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, l.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, l.createElement)('strong', null, c.selected(i)),
                i > 0
                  ? (0, l.createElement)(
                      u.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => o([]),
                        'aria-label': c.clear,
                      },
                      (0, n.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              i > 0
                ? (0, l.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, l.createElement)(
                        'li',
                        { key: t },
                        (0, l.createElement)($, { label: e.name, id: e.id, remove: a }),
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
            instanceId: c,
            useExpandedPanelId: a,
            ...i
          }) => {
            const { messages: s, renderItem: m, selected: d, isSingle: u } = i,
              h = m || A;
            return 0 === e.length
              ? (0, l.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, l.createElement)(o.A, { icon: I.A, role: 'img' }),
                  ),
                  (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, n.sprintf)(s.noResults, t) : s.noItems,
                  ),
                )
              : (0, l.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, l.createElement)(F, {
                    useExpandedPanelId: a,
                    list: e,
                    selected: d,
                    renderItem: h,
                    onSelect: r,
                    instanceId: c,
                    isSingle: u,
                    search: t,
                  }),
                );
          },
          L = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: c,
                isLoading: o,
                isSingle: a,
                list: i,
                messages: s = v,
                onChange: m,
                onSearch: d,
                selected: h,
                type: E = 'text',
                debouncedSpeak: g,
              } = e,
              [p, w] = (0, y.useState)(''),
              f = (0, y.useState)(-1),
              _ = (0, j.useInstanceId)(L),
              x = (0, y.useMemo)(() => ({ ...v, ...s }), [s]),
              k = (0, y.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? C(e) : e;
                    const l = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!l.test(e.name) && e).filter(Boolean);
                    return r ? C(n, e) : n;
                  })(i, p, c),
                [i, p, c],
              );
            (0, y.useEffect)(() => {
              g && g(x.updated);
            }, [g, x]),
              (0, y.useEffect)(() => {
                'function' == typeof d && d(p);
              }, [p, d]);
            const S = (0, y.useCallback)(
                e => () => {
                  a && m([]);
                  const t = h.findIndex(({ id: t }) => t === e);
                  m([...h.slice(0, t), ...h.slice(t + 1)]);
                },
                [a, h, m],
              ),
              N = (0, y.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? m(e)
                    : -1 === h.findIndex(({ id: t }) => t === e.id)
                    ? m(a ? [e] : [...h, e])
                    : S(e.id)();
                },
                [a, S, m, h],
              ),
              O = (0, y.useCallback)(
                e => {
                  const [t] = h.filter(t => !e.find(e => t.id === e.id));
                  S(t.id)();
                },
                [S, h],
              );
            return (0, l.createElement)(
              'div',
              {
                className: b()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': o,
                  'is-token': 'token' === E,
                }),
              },
              'text' === E && (0, l.createElement)(M, { ...e, onRemove: S, messages: x }),
              (0, l.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === E
                  ? (0, l.createElement)(u.TextControl, {
                      label: x.search,
                      type: 'search',
                      value: p,
                      onChange: e => w(e),
                    })
                  : (0, l.createElement)(u.FormTokenField, {
                      disabled: o,
                      label: x.search,
                      onChange: O,
                      onInputChange: e => w(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: o
                        ? [(0, n.__)('Loading…', 'woocommerce')]
                        : h.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              o
                ? (0, l.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, l.createElement)(u.Spinner, null),
                  )
                : (0, l.createElement)(T, {
                    ...e,
                    search: p,
                    filteredList: k,
                    messages: x,
                    onSelect: N,
                    instanceId: _,
                    useExpandedPanelId: f,
                  }),
            );
          },
          V = ((0, u.withSpokenMessages)(L), window.wp.url),
          H = window.wp.apiFetch;
        var D = r.n(H);
        const z = window.wp.escapeHtml,
          J = ({ error: e }) =>
            (0, l.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, l.createElement)(
                        'span',
                        null,
                        (0, n.__)('The following error was returned', 'woocommerce'),
                        (0, l.createElement)('br', null),
                        (0, l.createElement)('code', null, (0, z.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, l.createElement)(
                        'span',
                        null,
                        (0, n.__)('The following error was returned from the API', 'woocommerce'),
                        (0, l.createElement)('br', null),
                        (0, l.createElement)('code', null, (0, z.escapeHTML)(e)),
                      )
                    : e
                  : (0, n.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          W = e => {
            const { id: t, name: r, parent: l, count: n } = e;
            return {
              id: t,
              name: r,
              parent: l,
              count: n,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          };
        r(6876);
        const G =
            ((Z = ({
              categories: e = [],
              error: t = null,
              isLoading: r = !1,
              onChange: c,
              onOperatorChange: o,
              operator: a = 'any',
              selected: i,
              isCompact: s = !1,
              isSingle: m = !1,
              showReviewCount: d,
            }) => {
              const h = {
                clear: (0, n.__)('Clear all product categories', 'woocommerce'),
                list: (0, n.__)('Product Categories', 'woocommerce'),
                noItems: (0, n.__)(
                  "Your store doesn't have any product categories.",
                  'woocommerce',
                ),
                search: (0, n.__)('Search for product categories', 'woocommerce'),
                selected: e =>
                  (0, n.sprintf) /* translators: %d is the count of selected categories. */(
                    /* translators: %d is the count of selected categories. */
                    (0, n._n)('%d category selected', '%d categories selected', e, 'woocommerce'),
                    e,
                  ),
                updated: (0, n.__)('Category search results updated.', 'woocommerce'),
              };
              if (t) return (0, l.createElement)(J, { error: t });
              const E = e.map(W);
              return (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)(L, {
                  className: 'woocommerce-product-categories',
                  list: E,
                  isLoading: r,
                  selected: E.filter(({ id: e }) => i.includes(Number(e))),
                  onChange: c,
                  renderItem: e => {
                    var t, r, c, o, a, i, s, m;
                    const { item: u, search: h, depth: E = 0 } = e,
                      g = u.breadcrumbs.length ? `${u.breadcrumbs.join(', ')}, ${u.name}` : u.name,
                      p = d
                        ? (0,
                          n.sprintf) /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */(
                            /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
                            (0, n._n)(
                              '%1$s, has %2$d review',
                              '%1$s, has %2$d reviews',
                              (null === (t = u.details) || void 0 === t
                                ? void 0
                                : t.review_count) || 0,
                              'woocommerce',
                            ),
                            g,
                            (null === (r = u.details) || void 0 === r ? void 0 : r.review_count) ||
                              0,
                          )
                        : (0,
                          n.sprintf) /* translators: %1$s is the item name, %2$d is the count of products for the item. */(
                            /* translators: %1$s is the item name, %2$d is the count of products for the item. */
                            (0, n._n)(
                              '%1$s, has %2$d product',
                              '%1$s, has %2$d products',
                              (null === (c = u.details) || void 0 === c ? void 0 : c.count) || 0,
                              'woocommerce',
                            ),
                            g,
                            (null === (o = u.details) || void 0 === o ? void 0 : o.count) || 0,
                          ),
                      w = d
                        ? (0, n.sprintf) /* translators: %d is the count of reviews. */(
                            /* translators: %d is the count of reviews. */
                            (0, n._n)(
                              '%d review',
                              '%d reviews',
                              (null === (a = u.details) || void 0 === a
                                ? void 0
                                : a.review_count) || 0,
                              'woocommerce',
                            ),
                            (null === (i = u.details) || void 0 === i ? void 0 : i.review_count) ||
                              0,
                          )
                        : (0, n.sprintf) /* translators: %d is the count of products. */(
                            /* translators: %d is the count of products. */
                            (0, n._n)(
                              '%d product',
                              '%d products',
                              (null === (s = u.details) || void 0 === s ? void 0 : s.count) || 0,
                              'woocommerce',
                            ),
                            (null === (m = u.details) || void 0 === m ? void 0 : m.count) || 0,
                          );
                    return (0, l.createElement)(O, {
                      className: b()('woocommerce-product-categories__item', 'has-count', {
                        'is-searching': h.length > 0,
                        'is-skip-level': 0 === E && 0 !== u.parent,
                      }),
                      ...e,
                      countLabel: w,
                      'aria-label': p,
                    });
                  },
                  messages: h,
                  isCompact: s,
                  isHierarchical: !0,
                  isSingle: m,
                }),
                !!o &&
                  (0, l.createElement)(
                    'div',
                    { hidden: i.length < 2 },
                    (0, l.createElement)(u.SelectControl, {
                      className: 'woocommerce-product-categories__operator',
                      label: (0, n.__)('Display products matching', 'woocommerce'),
                      help: (0, n.__)(
                        'Pick at least two categories to use this setting.',
                        'woocommerce',
                      ),
                      value: a,
                      onChange: o,
                      options: [
                        {
                          label: (0, n.__)('Any selected categories', 'woocommerce'),
                          value: 'any',
                        },
                        {
                          label: (0, n.__)('All selected categories', 'woocommerce'),
                          value: 'all',
                        },
                      ],
                    }),
                  ),
              );
            }),
            ({ selected: e, ...t }) => {
              const [r, n] = (0, y.useState)(!0),
                [c, o] = (0, y.useState)(null),
                [a, i] = (0, y.useState)([]),
                s = async e => {
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
                m = (0, y.useRef)(e);
              return (
                (0, y.useEffect)(() => {
                  var e;
                  ((e = { selected: m.current }),
                  D()({
                    path: (0, V.addQueryArgs)('wc/store/v1/products/categories', {
                      per_page: 0,
                      ...e,
                    }),
                  }))
                    .then(e => {
                      i(e), n(!1);
                    })
                    .catch(s);
                }, [m]),
                (0, l.createElement)(Z, {
                  ...t,
                  selected: e,
                  error: c,
                  categories: a,
                  isLoading: r,
                })
              );
            }),
          K = (0, s.getSetting)('hideOutOfStockItems', !1),
          Q = (0, s.getSetting)('stockStatusOptions', {}),
          Y = ({ value: e, setAttributes: t }) => {
            const { outofstock: r, ...c } = Q,
              o = K ? c : Q,
              a = Object.entries(o)
                .map(([e, t]) => ({ value: e, label: t }))
                .filter(e => !!e.label),
              i = Object.keys(o).filter(e => !!e),
              [s, m] = (0, y.useState)(e || i);
            (0, y.useEffect)(() => {
              t({ stockStatus: ['', ...s] });
            }, [s, t]);
            const d = (0, y.useCallback)(
              e => {
                const t = s.includes(e),
                  r = s.filter(t => t !== e);
                t || (r.push(e), r.sort()), m(r);
              },
              [s],
            );
            return (0, l.createElement)(
              l.Fragment,
              null,
              a.map(e => {
                const t = s.includes(e.value)
                  ? /* translators: %s stock status. */ /* translators: %s stock status. */ (0,
                    n.__)('Stock status "%s" visible.', 'woocommerce')
                  : /* translators: %s stock status. */ /* translators: %s stock status. */ (0,
                    n.__)('Stock status "%s" hidden.', 'woocommerce');
                return (0, l.createElement)(u.ToggleControl, {
                  label: e.label,
                  key: e.value,
                  help: (0, n.sprintf)(t, e.label),
                  checked: s.includes(e.value),
                  onChange: () => d(e.value),
                });
              }),
            );
          },
          q = (0, l.createElement)(
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
          U = ({ attributes: e, name: t, setAttributes: r }) => {
            const {
              categories: c,
              catOperator: o,
              columns: a,
              contentVisibility: i,
              rows: m,
              alignButtons: h,
              stockStatus: p,
              isPreview: f,
            } = e;
            return f
              ? q
              : (0, l.createElement)(
                  l.Fragment,
                  null,
                  (0, l.createElement)(
                    d.InspectorControls,
                    { key: 'inspector' },
                    (0, l.createElement)(
                      u.PanelBody,
                      { title: (0, n.__)('Layout', 'woocommerce'), initialOpen: !0 },
                      (0, l.createElement)(w, {
                        columns: a,
                        rows: m,
                        alignButtons: h,
                        setAttributes: r,
                        minColumns: (0, s.getSetting)('minColumns', 1),
                        maxColumns: (0, s.getSetting)('maxColumns', 6),
                        minRows: (0, s.getSetting)('minRows', 1),
                        maxRows: (0, s.getSetting)('maxRows', 6),
                      }),
                    ),
                    (0, l.createElement)(
                      u.PanelBody,
                      { title: (0, n.__)('Content', 'woocommerce'), initialOpen: !0 },
                      (0, l.createElement)(g, {
                        settings: i,
                        onChange: e => r({ contentVisibility: e }),
                      }),
                    ),
                    (0, l.createElement)(
                      u.PanelBody,
                      {
                        title: (0, n.__)('Filter by stock status', 'woocommerce'),
                        initialOpen: !1,
                      },
                      (0, l.createElement)(Y, { setAttributes: r, value: p }),
                    ),
                    (0, l.createElement)(
                      u.PanelBody,
                      {
                        title: (0, n.__)('Filter by Product Category', 'woocommerce'),
                        initialOpen: !1,
                      },
                      (0, l.createElement)(G, {
                        selected: c,
                        onChange: (e = []) => {
                          const t = e.map(({ id: e }) => e);
                          r({ categories: t });
                        },
                        operator: o,
                        onOperatorChange: (e = 'any') => r({ catOperator: e }),
                      }),
                    ),
                  ),
                  (0, l.createElement)(
                    u.Disabled,
                    null,
                    (0, l.createElement)(E(), { block: t, attributes: e }),
                  ),
                );
          },
          X = JSON.parse(
            '{"name":"woocommerce/product-new","title":"Newest Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of your newest products.","supports":{"align":["wide","full"],"html":false},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"categories":{"type":"array","default":[]},"catOperator":{"type":"string","default":"any"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"},"editMode":{"type":"boolean","default":true},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          );
        var Z;
        (0, c.registerBlockType)(X, {
          title: (0, n.__)('Newest Products', 'woocommerce'),
          icon: {
            src: (0, l.createElement)(o.A, {
              icon: i,
              className:
                'wc-block-editor-components-block-icon wc-block-editor-components-block-icon--sparkles',
            }),
          },
          attributes: { ...m, ...X.attributes },
          transforms: {
            from: [
              {
                type: 'block',
                blocks: [
                  'woocommerce/product-best-sellers',
                  'woocommerce/product-category',
                  'woocommerce/product-new',
                  'woocommerce/product-on-sale',
                  'woocommerce/product-top-rated',
                ].filter(e => 'woocommerce/product-new' !== e),
                transform: e => (0, c.createBlock)('woocommerce/product-new', e),
              },
            ],
          },
          edit: e => {
            const t = (0, d.useBlockProps)();
            return (0, l.createElement)('div', { ...t }, (0, l.createElement)(U, { ...e }));
          },
          save: () => null,
        });
      },
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
    (c.j = 185),
    (() => {
      var e = { 185: 0 };
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
  var o = c.O(void 0, [94], () => c(9466));
  (o = c.O(o)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-new'] = o);
})();
