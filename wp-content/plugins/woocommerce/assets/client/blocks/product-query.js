(() => {
  var e,
    t,
    o,
    r = {
      5246: (e, t, o) => {
        'use strict';
        o.r(t);
        const r = window.wp.hooks,
          c = window.wc.wcSettings;
        var n = o(1609);
        const a = window.wp.components;
        var l = o(7723),
          s = o(7104),
          i = o(4478);
        const m = (0, l.__)('Product Title', 'woocommerce'),
          u =
            ((0, n.createElement)(s.A, {
              icon: i.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            (0, l.__)('Display the title of a product.', 'woocommerce')),
          d = window.wp.blocks;
        function p(
          e,
          { blockDescription: t, blockIcon: o, blockTitle: r, variationName: c, scope: n },
        ) {
          (0, d.registerBlockVariation)(e, {
            description: t,
            name: c,
            title: r,
            isActive: e => e.__woocommerceNamespace === c,
            icon: { src: o },
            attributes: { __woocommerceNamespace: c },
            scope: n,
          });
        }
        const _ = 'core/post-title',
          b = 'woocommerce/product-query/product-title';
        p(_, {
          blockDescription: u,
          blockIcon: (0, n.createElement)(a.Icon, { icon: i.A }),
          blockTitle: m,
          variationName: b,
          scope: ['block'],
        });
        var g = o(6465);
        const w = (0, l.__)('Product Summary', 'woocommerce'),
          h =
            ((0, n.createElement)(s.A, {
              icon: g.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            'core/post-excerpt');
        p(h, {
          blockDescription: (0, l.__)(
            'Display a short description about a product.',
            'woocommerce',
          ),
          blockIcon: (0, n.createElement)(a.Icon, { icon: g.A }),
          blockTitle: w,
          variationName: 'woocommerce/product-query/product-summary',
          scope: ['block'],
        });
        var y = o(4396);
        const k = 'core/post-template',
          f = 'woocommerce/product-query/product-template';
        p(k, {
          blockDescription: (0, l.__)(
            'Contains the block elements used to render a product, like its name, featured image, rating, and more.',
            'woocommerce',
          ),
          blockIcon: (0, n.createElement)(a.Icon, { icon: y.A }),
          blockTitle: (0, l.__)('Product template', 'woocommerce'),
          variationName: f,
          scope: ['block', 'inserter'],
        });
        const E = window.wp.blockEditor,
          v = window.wp.data;
        var S = o(361),
          C = o(4133),
          N = o(6087);
        o(1598);
        const x = ({ text: e, title: t = (0, l.__)('Feedback?', 'woocommerce'), url: o }) => {
            const [r, c] = (0, N.useState)(!1);
            return (
              (0, N.useEffect)(() => {
                c(!0);
              }, []),
              (0, n.createElement)(
                n.Fragment,
                null,
                r &&
                  (0, n.createElement)(
                    'div',
                    { className: 'wc-block-feedback-prompt' },
                    (0, n.createElement)(s.A, { icon: S.A }),
                    (0, n.createElement)('h2', { className: 'wc-block-feedback-prompt__title' }, t),
                    (0, n.createElement)('p', { className: 'wc-block-feedback-prompt__text' }, e),
                    (0, n.createElement)(
                      'a',
                      {
                        href: o,
                        className: 'wc-block-feedback-prompt__link',
                        rel: 'noreferrer noopener',
                        target: '_blank',
                      },
                      (0, l.__)('Give us your feedback.', 'woocommerce'),
                      (0, n.createElement)(s.A, { icon: C.A, size: 16 }),
                    ),
                  ),
              )
            );
          },
          A = () =>
            (0, n.createElement)(x, {
              text: (0, l.__)(
                'Thanks for trying out the Products block! Help us make it better by sharing your feedback.',
                'woocommerce',
              ),
              title: (0, l.__)('Share your feedback!', 'woocommerce'),
              url: 'https://airtable.com/shrFX5FAqmCY6hVYI',
            }),
          I = window.wc.wcTypes,
          P = e =>
            'core/query' === e.name && 'woocommerce/product-query' === e.attributes.namespace,
          O = (e, t) => {
            let o = [];
            return (
              e.forEach(e => {
                t(e) && (o = [...o, e.clientId]), (o = [...o, ...O(e.innerBlocks, t)]);
              }),
              o
            );
          },
          B = (0, c.getSettingWithCoercion)('postTemplateHasSupportForGridView', !1, I.isBoolean);
        function T(e, t) {
          const { [t]: o, ...r } = e;
          return r;
        }
        let L = (function(e) {
            return (e.GRID = 'flex'), (e.STACK = 'list'), e;
          })({}),
          q = (function(e) {
            return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
          })({});
        JSON.parse('{"name":"woocommerce/product-collection"}').name;
        const F = (0, c.getSetting)('stockStatusOptions', []),
          R = {
            query: {
              perPage: 9,
              pages: 0,
              offset: 0,
              postType: 'product',
              order: 'asc',
              orderBy: 'title',
              search: '',
              exclude: [],
              inherit: null,
              taxQuery: {},
              isProductCollectionBlock: !0,
              featured: !1,
              woocommerceOnSale: !1,
              woocommerceStockStatus: (0, c.getSetting)('hideOutOfStockItems', !1)
                ? Object.keys(T(F, 'outofstock'))
                : Object.keys(F),
              woocommerceAttributes: [],
              woocommerceHandPickedProducts: [],
              timeFrame: void 0,
              priceRange: void 0,
            },
            tagName: 'div',
            displayLayout: { type: L.GRID, columns: 3, shrinkColumns: !0 },
            queryContextIncludes: ['collection'],
            forcePageReload: !1,
          },
          j =
            (q.THUMBNAIL,
            ({ name: e, attributes: t }) =>
              'core/post-template' === e &&
              'woocommerce/product-query/product-template' === t.__woocommerceNamespace),
          $ = e => ('grid' === e ? L.GRID : 'default' === e ? L.STACK : L.GRID),
          V = e =>
            e.map(e => {
              const { name: t, attributes: o } = e,
                r = V(e.innerBlocks);
              return j(e)
                ? ((e, t) => {
                    const {
                      __woocommerceNamespace: o,
                      className: r,
                      layout: c,
                      ...n
                    } = e.attributes;
                    return (0, d.createBlock)('woocommerce/product-template', n, t);
                  })(e, r)
                : (({ name: e, attributes: t }) =>
                    'core/post-title' === e &&
                    'woocommerce/product-query/product-title' === t.__woocommerceNamespace)(e)
                ? ((e, t) => {
                    const { __woocommerceNamespace: o, ...r } = e.attributes;
                    return (0, d.createBlock)(
                      'core/post-title',
                      {
                        __woocommerceNamespace: 'woocommerce/product-collection/product-title',
                        ...r,
                      },
                      t,
                    );
                  })(e, r)
                : (({ name: e, attributes: t }) =>
                    'core/post-excerpt' === e &&
                    'woocommerce/product-query/product-summary' === t.__woocommerceNamespace)(e)
                ? ((e, t) => {
                    const { __woocommerceNamespace: o, ...r } = e.attributes;
                    return (0, d.createBlock)(
                      'core/post-excerpt',
                      {
                        __woocommerceNamespace: 'woocommerce/product-collection/product-summary',
                        ...r,
                      },
                      t,
                    );
                  })(e, r)
                : (0, d.createBlock)(t, o, r);
            }),
          G = e => {
            const t = (0, v.select)('core/block-editor').getBlock(e),
              o = ((e, t) => {
                const o = (0, v.select)('core/block-editor').getBlockRootClientId(e) || void 0;
                return (0, v.select)('core/block-editor').canInsertBlockType(
                  'woocommerce/product-collection',
                  o,
                );
              })(e);
            if (t && o) {
              const { attributes: o = {}, innerBlocks: r = [] } = t,
                c = ((e, t) => {
                  const o = t.find(j),
                    { layout: r } = (null == o ? void 0 : o.attributes) || {};
                  return B
                    ? (e => {
                        if (void 0 === e) return R.displayLayout;
                        const { type: t, columnCount: o } = e;
                        return { type: $(t), columns: o };
                      })(r)
                    : e.displayLayout;
                })(o, r),
                n = (e => {
                  const { query: t, namespace: o, ...r } = e,
                    {
                      __woocommerceAttributes: c,
                      __woocommerceStockStatus: n,
                      __woocommerceOnSale: a,
                      include: l,
                      ...s
                    } = t;
                  return {
                    ...r,
                    query: {
                      woocommerceAttributes: c,
                      woocommerceStockStatus: n,
                      woocommerceOnSale: a,
                      woocommerceHandPickedProducts: l,
                      taxQuery: {},
                      isProductCollectionBlock: !0,
                      ...s,
                    },
                    convertedFromProducts: !0,
                  };
                })({ ...o, displayLayout: c }),
                a = V(r),
                l = (0, d.createBlock)('woocommerce/product-collection', n, a);
              return (0, v.dispatch)('core/block-editor').replaceBlock(e, l), !0;
            }
            return !1;
          },
          D = () => {
            var e;
            (e = { status: 'notseen', time: Date.now(), displayCount: 0 }),
              window.localStorage.setItem(
                'wc-blocks_upgraded-products-to-product-collection',
                JSON.stringify(e),
              ),
              (() => {
                if (0 === (0, v.select)('core/block-editor').getGlobalBlockCount('core/query'))
                  return;
                const e = ((t = (0, v.select)('core/block-editor').getBlocks()), O(t, P));
                var t;
                0 !== e.length &&
                  (e => {
                    const t = e.map(G);
                    t.length && t.every(e => !!e);
                  })(e);
              })();
          },
          M = e => {
            if (!(e => null === e)((t = e)) && t instanceof Object && t.constructor === Object) {
              const t = e.getEditedPostType();
              return 'wp_template' === t || 'wp_template_part' === t;
            }
            var t;
            return !1;
          },
          H = 'woocommerce/product-query',
          U = 'core/query',
          z = ['attributes', 'presets', 'productSelector', 'onSale', 'stockStatus', 'wooInherit'],
          W = ['taxQuery', 'search', ...z],
          Q = (0, c.getSetting)('stockStatusOptions', []),
          J = (0, c.getSetting)('hideOutOfStockItems', !1),
          Y = {
            allowedControls: W,
            displayLayout: { type: 'flex', columns: 3 },
            query: {
              perPage: 9,
              pages: 0,
              offset: 0,
              postType: 'product',
              order: 'asc',
              orderBy: 'title',
              author: '',
              search: '',
              exclude: [],
              sticky: '',
              inherit: !1,
              __woocommerceAttributes: [],
              __woocommerceStockStatus: J ? Object.keys(T(Q, 'outofstock')) : Object.keys(Q),
            },
          },
          K = [
            [
              'core/post-template',
              {
                __woocommerceNamespace: f,
                className: 'products-block-post-template',
                ...((0, c.getSettingWithCoercion)(
                  'postTemplateHasSupportForGridView',
                  !1,
                  I.isBoolean,
                ) && { layout: { type: 'grid', columnCount: 3 } }),
              },
              [
                ['woocommerce/product-image', { imageSizing: q.THUMBNAIL }],
                [
                  'core/post-title',
                  {
                    textAlign: 'center',
                    level: 3,
                    fontSize: 'medium',
                    style: { spacing: { margin: { bottom: '0.75rem', top: '0' } } },
                    isLink: !0,
                    __woocommerceNamespace: b,
                  },
                ],
                ['woocommerce/product-price', { textAlign: 'center', fontSize: 'small' }],
                ['woocommerce/product-button', { textAlign: 'center', fontSize: 'small' }],
              ],
            ],
            ['core/query-pagination', { layout: { type: 'flex', justifyContent: 'center' } }],
            ['core/query-no-results'],
          ];
        let Z = (function(e) {
          return (
            (e.PRODUCT_QUERY = 'woocommerce/product-query'),
            (e.RELATED_PRODUCTS = 'woocommerce/related-products'),
            e
          );
        })({});
        function X(e, t) {
          const { query: o } = e.attributes;
          e.setAttributes({ query: { ...o, ...t } });
        }
        var ee = o(9019),
          te = o.n(ee);
        function oe(e, t, o) {
          const r = new Set(t.map(e => e[o]));
          return e.filter(e => !r.has(e[o]));
        }
        const re = window.wp.htmlEntities,
          ce = {
            clear: (0, l.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, l.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, l.__)('No results for %s', 'woocommerce'),
            search: (0, l.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, l.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, l._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, l.__)('Search results updated.', 'woocommerce'),
          },
          ne = (e, t = e) => {
            const o = e.reduce((e, t) => {
                const o = t.parent || 0;
                return e[o] || (e[o] = []), e[o].push(t), e;
              }, {}),
              r = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const c = ['0'],
              n = (e = {}) => (e.parent ? [...n(r[e.parent]), e.name] : e.name ? [e.name] : []),
              a = e =>
                e.map(e => {
                  const t = o[e.id];
                  return (
                    c.push('' + e.id),
                    { ...e, breadcrumbs: n(r[e.parent]), children: t && t.length ? a(t) : [] }
                  );
                }),
              l = a(o[0] || []);
            return (
              Object.entries(o).forEach(([e, t]) => {
                c.includes(e) || l.push(...a(t || []));
              }),
              l
            );
          },
          ae = (e, t) => {
            if (!t) return e;
            const o = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(o)
              .map((e, t) =>
                o.test(e)
                  ? (0, n.createElement)('strong', { key: t }, e)
                  : (0, n.createElement)(N.Fragment, { key: t }, e),
              );
          },
          le = ({ label: e }) =>
            (0, n.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          se = e => {
            const { item: t, search: o } = e,
              r = t.breadcrumbs && t.breadcrumbs.length;
            return (0, n.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              r
                ? (0, n.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (c = t.breadcrumbs).length
                      ? c.slice(0, 1).toString()
                      : 2 === c.length
                      ? c.slice(0, 1).toString() + ' › ' + c.slice(-1).toString()
                      : c.slice(0, 1).toString() + ' … ' + c.slice(-1).toString(),
                  )
                : null,
              (0, n.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                ae((0, re.decodeEntities)(t.name), o),
              ),
            );
            var c;
          },
          ie = ({
            countLabel: e,
            className: t,
            depth: o = 0,
            controlId: r = '',
            item: c,
            isSelected: l,
            isSingle: s,
            onSelect: i,
            search: m = '',
            selected: u,
            useExpandedPanelId: d,
            ...p
          }) => {
            var _, b;
            const [g, w] = d,
              h = null != e && void 0 !== c.count && null !== c.count,
              y = !(null === (_ = c.breadcrumbs) || void 0 === _ || !_.length),
              k = !(null === (b = c.children) || void 0 === b || !b.length),
              f = g === c.id,
              E = te()(['woocommerce-search-list__item', `depth-${o}`, t], {
                'has-breadcrumbs': y,
                'has-children': k,
                'has-count': h,
                'is-expanded': f,
                'is-radio-button': s,
              }),
              v = p.name || `search-list-item-${r}`,
              S = `${v}-${c.id}`,
              C = (0, N.useCallback)(() => {
                w(f ? -1 : Number(c.id));
              }, [f, c.id, w]);
            return k
              ? (0, n.createElement)(
                  'div',
                  {
                    className: E,
                    onClick: C,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? C() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  s
                    ? (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)('input', {
                          type: 'radio',
                          id: S,
                          name: v,
                          value: c.value,
                          onChange: i(c),
                          onClick: e => e.stopPropagation(),
                          checked: l,
                          className: 'woocommerce-search-list__item-input',
                          ...p,
                        }),
                        (0, n.createElement)(se, { item: c, search: m }),
                        h ? (0, n.createElement)(le, { label: e || c.count }) : null,
                      )
                    : (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)(a.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: l,
                          ...(!l && c.children.some(e => u.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: ae((0, re.decodeEntities)(c.name), m),
                          onChange: () => {
                            l
                              ? i(oe(u, c.children, 'id'))()
                              : i(
                                  (function(e, t, o) {
                                    const r = oe(t, e, 'id');
                                    return [...e, ...r];
                                  })(u, c.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        h ? (0, n.createElement)(le, { label: e || c.count }) : null,
                      ),
                )
              : (0, n.createElement)(
                  'label',
                  { htmlFor: S, className: E },
                  s
                    ? (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)('input', {
                          ...p,
                          type: 'radio',
                          id: S,
                          name: v,
                          value: c.value,
                          onChange: i(c),
                          checked: l,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, n.createElement)(se, { item: c, search: m }),
                      )
                    : (0, n.createElement)(a.CheckboxControl, {
                        ...p,
                        id: S,
                        name: v,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, re.decodeEntities)(c.value),
                        label: ae((0, re.decodeEntities)(c.name), m),
                        onChange: i(c),
                        checked: l,
                      }),
                  h ? (0, n.createElement)(le, { label: e || c.count }) : null,
                );
          },
          me = ie;
        var ue = o(2478),
          de = o(9491),
          pe = o(2370);
        o(6636);
        const _e = ({
            id: e,
            label: t,
            popoverContents: o,
            remove: r,
            screenReaderLabel: c,
            className: i = '',
          }) => {
            const [m, u] = (0, N.useState)(!1),
              d = (0, de.useInstanceId)(_e);
            if (((c = c || t), !t)) return null;
            t = (0, re.decodeEntities)(t);
            const p = te()('woocommerce-tag', i, { 'has-remove': !!r }),
              _ = `woocommerce-tag__label-${d}`,
              b = (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)('span', { className: 'screen-reader-text' }, c),
                (0, n.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, n.createElement)(
              'span',
              { className: p },
              o
                ? (0, n.createElement)(
                    a.Button,
                    { className: 'woocommerce-tag__text', id: _, onClick: () => u(!0) },
                    b,
                  )
                : (0, n.createElement)('span', { className: 'woocommerce-tag__text', id: _ }, b),
              o && m && (0, n.createElement)(a.Popover, { onClose: () => u(!1) }, o),
              r &&
                (0, n.createElement)(
                  a.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: r(e),
                    label: (0, l.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, l.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': _,
                  },
                  (0, n.createElement)(s.A, {
                    icon: pe.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          be = _e;
        o(8137);
        const ge = e => (0, n.createElement)(me, { ...e }),
          we = e => {
            const {
                list: t,
                selected: o,
                renderItem: r,
                depth: c = 0,
                onSelect: a,
                instanceId: l,
                isSingle: s,
                search: i,
                useExpandedPanelId: m,
              } = e,
              [u] = m;
            return t
              ? (0, n.createElement)(
                  N.Fragment,
                  null,
                  t.map(t => {
                    var d, p;
                    const _ =
                        null !== (d = t.children) && void 0 !== d && d.length && !s
                          ? t.children.every(({ id: e }) => o.find(t => t.id === e))
                          : !!o.find(({ id: e }) => e === t.id),
                      b =
                        (null === (p = t.children) || void 0 === p ? void 0 : p.length) &&
                        u === t.id;
                    return (0, n.createElement)(
                      N.Fragment,
                      { key: t.id },
                      (0, n.createElement)(
                        'li',
                        null,
                        r({
                          item: t,
                          isSelected: _,
                          onSelect: a,
                          isSingle: s,
                          selected: o,
                          search: i,
                          depth: c,
                          useExpandedPanelId: m,
                          controlId: l,
                        }),
                      ),
                      b ? (0, n.createElement)(we, { ...e, list: t.children, depth: c + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          he = ({
            isLoading: e,
            isSingle: t,
            selected: o,
            messages: r,
            onChange: c,
            onRemove: s,
          }) => {
            if (e || t || !o) return null;
            const i = o.length;
            return (0, n.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, n.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, n.createElement)('strong', null, r.selected(i)),
                i > 0
                  ? (0, n.createElement)(
                      a.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => c([]),
                        'aria-label': r.clear,
                      },
                      (0, l.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              i > 0
                ? (0, n.createElement)(
                    'ul',
                    null,
                    o.map((e, t) =>
                      (0, n.createElement)(
                        'li',
                        { key: t },
                        (0, n.createElement)(be, { label: e.name, id: e.id, remove: s }),
                      ),
                    ),
                  )
                : null,
            );
          },
          ye = ({
            filteredList: e,
            search: t,
            onSelect: o,
            instanceId: r,
            useExpandedPanelId: c,
            ...a
          }) => {
            const { messages: i, renderItem: m, selected: u, isSingle: d } = a,
              p = m || ge;
            return 0 === e.length
              ? (0, n.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, n.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, n.createElement)(s.A, { icon: ue.A, role: 'img' }),
                  ),
                  (0, n.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, l.sprintf)(i.noResults, t) : i.noItems,
                  ),
                )
              : (0, n.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, n.createElement)(we, {
                    useExpandedPanelId: c,
                    list: e,
                    selected: u,
                    renderItem: p,
                    onSelect: o,
                    instanceId: r,
                    isSingle: d,
                    search: t,
                  }),
                );
          },
          ke = e => {
            const {
                className: t = '',
                isCompact: o,
                isHierarchical: r,
                isLoading: c,
                isSingle: s,
                list: i,
                messages: m = ce,
                onChange: u,
                onSearch: d,
                selected: p,
                type: _ = 'text',
                debouncedSpeak: b,
              } = e,
              [g, w] = (0, N.useState)(''),
              h = (0, N.useState)(-1),
              y = (0, de.useInstanceId)(ke),
              k = (0, N.useMemo)(() => ({ ...ce, ...m }), [m]),
              f = (0, N.useMemo)(
                () =>
                  ((e, t, o) => {
                    if (!t) return o ? ne(e) : e;
                    const r = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      c = e.map(e => !!r.test(e.name) && e).filter(Boolean);
                    return o ? ne(c, e) : c;
                  })(i, g, r),
                [i, g, r],
              );
            (0, N.useEffect)(() => {
              b && b(k.updated);
            }, [b, k]),
              (0, N.useEffect)(() => {
                'function' == typeof d && d(g);
              }, [g, d]);
            const E = (0, N.useCallback)(
                e => () => {
                  s && u([]);
                  const t = p.findIndex(({ id: t }) => t === e);
                  u([...p.slice(0, t), ...p.slice(t + 1)]);
                },
                [s, p, u],
              ),
              v = (0, N.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? u(e)
                    : -1 === p.findIndex(({ id: t }) => t === e.id)
                    ? u(s ? [e] : [...p, e])
                    : E(e.id)();
                },
                [s, E, u, p],
              ),
              S = (0, N.useCallback)(
                e => {
                  const [t] = p.filter(t => !e.find(e => t.id === e.id));
                  E(t.id)();
                },
                [E, p],
              );
            return (0, n.createElement)(
              'div',
              {
                className: te()('woocommerce-search-list', t, {
                  'is-compact': o,
                  'is-loading': c,
                  'is-token': 'token' === _,
                }),
              },
              'text' === _ && (0, n.createElement)(he, { ...e, onRemove: E, messages: k }),
              (0, n.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === _
                  ? (0, n.createElement)(a.TextControl, {
                      label: k.search,
                      type: 'search',
                      value: g,
                      onChange: e => w(e),
                    })
                  : (0, n.createElement)(a.FormTokenField, {
                      disabled: c,
                      label: k.search,
                      onChange: S,
                      onInputChange: e => w(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: c
                        ? [(0, l.__)('Loading…', 'woocommerce')]
                        : p.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              c
                ? (0, n.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, n.createElement)(a.Spinner, null),
                  )
                : (0, n.createElement)(ye, {
                    ...e,
                    search: g,
                    filteredList: f,
                    messages: k,
                    onSelect: v,
                    instanceId: y,
                    useExpandedPanelId: h,
                  }),
            );
          },
          fe = ((0, a.withSpokenMessages)(ke), window.wp.url),
          Ee = window.wp.apiFetch;
        var ve,
          Se,
          Ce,
          Ne,
          xe,
          Ae,
          Ie,
          Pe,
          Oe,
          Be,
          Te = o.n(Ee);
        const Le = (0, c.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          qe =
            (Le.pluginUrl,
            Le.pluginUrl,
            Le.buildPhase,
            null === (ve = c.STORE_PAGES.shop) || void 0 === ve || ve.permalink,
            null === (Se = c.STORE_PAGES.checkout) || void 0 === Se || Se.id,
            null === (Ce = c.STORE_PAGES.checkout) || void 0 === Ce || Ce.permalink,
            null === (Ne = c.STORE_PAGES.privacy) || void 0 === Ne || Ne.permalink,
            null === (xe = c.STORE_PAGES.privacy) || void 0 === xe || xe.title,
            null === (Ae = c.STORE_PAGES.terms) || void 0 === Ae || Ae.permalink,
            null === (Ie = c.STORE_PAGES.terms) || void 0 === Ie || Ie.title,
            null === (Pe = c.STORE_PAGES.cart) || void 0 === Pe || Pe.id,
            null === (Oe = c.STORE_PAGES.cart) || void 0 === Oe || Oe.permalink,
            null !== (Be = c.STORE_PAGES.myaccount) && void 0 !== Be && Be.permalink
              ? c.STORE_PAGES.myaccount.permalink
              : (0, c.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, c.getSetting)('localPickupEnabled', !1),
            (0, c.getSetting)('countries', {})),
          Fe = (0, c.getSetting)('countryData', {}),
          Re =
            (Object.fromEntries(
              Object.keys(Fe)
                .filter(e => !0 === Fe[e].allowBilling)
                .map(e => [e, qe[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(Fe)
                .filter(e => !0 === Fe[e].allowBilling)
                .map(e => [e, Fe[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(Fe)
                .filter(e => !0 === Fe[e].allowShipping)
                .map(e => [e, qe[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(Fe)
                .filter(e => !0 === Fe[e].allowShipping)
                .map(e => [e, Fe[e].states || []]),
            ),
            Object.fromEntries(Object.keys(Fe).map(e => [e, Fe[e].locale || []])),
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
          je =
            ((0, c.getSetting)('addressFieldsLocations', Re).address,
            (0, c.getSetting)('addressFieldsLocations', Re).contact,
            (0, c.getSetting)('addressFieldsLocations', Re).order,
            (0, c.getSetting)('additionalOrderFields', {}),
            (0, c.getSetting)('additionalContactFields', {}),
            (0, c.getSetting)('additionalAddressFields', {}),
            (e, t) => {
              const o = new Map();
              return e.filter(e => {
                const r = t(e);
                return !o.has(r) && (o.set(r, e), !0);
              });
            }),
          $e = e => Te()({ path: `wc/store/v1/products/attributes/${e}/terms` });
        const Ve = window.wp.escapeHtml,
          Ge = ({ error: e }) =>
            (0, n.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, n.createElement)(
                        'span',
                        null,
                        (0, l.__)('The following error was returned', 'woocommerce'),
                        (0, n.createElement)('br', null),
                        (0, n.createElement)('code', null, (0, Ve.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, n.createElement)(
                        'span',
                        null,
                        (0, l.__)('The following error was returned from the API', 'woocommerce'),
                        (0, n.createElement)('br', null),
                        (0, n.createElement)('code', null, (0, Ve.escapeHTML)(e)),
                      )
                    : e
                  : (0, l.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          De = ({
            className: e,
            item: t,
            isSelected: o,
            isLoading: r,
            onSelect: c,
            disabled: l,
            ...s
          }) =>
            (0, n.createElement)(
              n.Fragment,
              null,
              (0, n.createElement)(ie, {
                ...s,
                key: t.id,
                className: e,
                isSelected: o,
                item: t,
                onSelect: c,
                disabled: l,
              }),
              o &&
                r &&
                (0, n.createElement)(
                  'div',
                  {
                    key: 'loading',
                    className: te()(
                      'woocommerce-search-list__item',
                      'woocommerce-product-attributes__item',
                      'depth-1',
                      'is-loading',
                      'is-not-active',
                    ),
                  },
                  (0, n.createElement)(a.Spinner, null),
                ),
            ),
          Me =
            ((0, c.getSetting)('attributes', []).reduce((e, t) => {
              const o =
                (r = t) && r.attribute_name
                  ? {
                      id: parseInt(r.attribute_id, 10),
                      name: r.attribute_name,
                      taxonomy: 'pa_' + r.attribute_name,
                      label: r.attribute_label,
                      orderby: r.attribute_orderby,
                    }
                  : null;
              var r;
              return o && o.id && e.push(o), e;
            }, []),
            e => {
              const { count: t, id: o, name: r, parent: c } = e;
              return {
                count: t,
                id: o,
                name: r,
                parent: c,
                breadcrumbs: [],
                children: [],
                value: (0, I.isAttributeTerm)(e) ? e.attr_slug : '',
              };
            });
        o(2777);
        const He = (0, de.withInstanceId)(
            ({
              onChange: e,
              onOperatorChange: t,
              instanceId: o,
              isCompact: r = !1,
              messages: c = {},
              operator: s = 'any',
              selected: i,
              type: m = 'text',
            }) => {
              const {
                  errorLoadingAttributes: u,
                  isLoadingAttributes: d,
                  productsAttributes: p,
                } = (function(e) {
                  const [t, o] = (0, N.useState)(null),
                    [r, c] = (0, N.useState)(!1),
                    [n, a] = (0, N.useState)([]),
                    l = (0, N.useRef)(!1);
                  return (
                    (0, N.useEffect)(() => {
                      if (e && !r && !l.current)
                        return (
                          (async function() {
                            c(!0);
                            try {
                              const e = await Te()({ path: 'wc/store/v1/products/attributes' }),
                                t = [];
                              for (const o of e) {
                                const e = await $e(o.id);
                                t.push({
                                  ...o,
                                  parent: 0,
                                  terms: e.map(e => ({
                                    ...e,
                                    attr_slug: o.taxonomy,
                                    parent: o.id,
                                  })),
                                });
                              }
                              a(t), (l.current = !0);
                            } catch (e) {
                              e instanceof Error &&
                                o(
                                  await (async e => {
                                    if (!('json' in e))
                                      return { message: e.message, type: e.type || 'general' };
                                    try {
                                      const t = await e.json();
                                      return { message: t.message, type: t.type || 'api' };
                                    } catch (e) {
                                      return { message: e.message, type: 'general' };
                                    }
                                  })(e),
                                );
                            } finally {
                              c(!1);
                            }
                          })(),
                          () => {
                            l.current = !0;
                          }
                        );
                    }, [r, e]),
                    { errorLoadingAttributes: t, isLoadingAttributes: r, productsAttributes: n }
                  );
                })(!0),
                _ = p.reduce((e, t) => {
                  const { terms: o, ...r } = t;
                  return [...e, Me(r), ...o.map(Me)];
                }, []);
              return (
                (c = {
                  clear: (0, l.__)('Clear all product attributes', 'woocommerce'),
                  noItems: (0, l.__)(
                    "Your store doesn't have any product attributes.",
                    'woocommerce',
                  ),
                  search: (0, l.__)('Search for product attributes', 'woocommerce'),
                  selected: e =>
                    (0, l.sprintf) /* translators: %d is the count of attributes selected. */(
                      /* translators: %d is the count of attributes selected. */
                      (0, l._n)(
                        '%d attribute selected',
                        '%d attributes selected',
                        e,
                        'woocommerce',
                      ),
                      e,
                    ),
                  updated: (0, l.__)('Product attribute search results updated.', 'woocommerce'),
                  ...c,
                }),
                u
                  ? (0, n.createElement)(Ge, { error: u })
                  : (0, n.createElement)(
                      n.Fragment,
                      null,
                      (0, n.createElement)(ke, {
                        className: 'woocommerce-product-attributes',
                        isCompact: r,
                        isHierarchical: !0,
                        isLoading: d,
                        isSingle: !1,
                        list: _,
                        messages: c,
                        onChange: e,
                        renderItem: e => {
                          const { item: t, search: r, depth: c = 0 } = e,
                            a = t.count || 0,
                            s = [
                              'woocommerce-product-attributes__item',
                              'woocommerce-search-list__item',
                              {
                                'is-searching': r.length > 0,
                                'is-skip-level': 0 === c && 0 !== t.parent,
                              },
                            ];
                          if (!t.breadcrumbs.length)
                            return (0, n.createElement)(De, {
                              ...e,
                              className: te()(s),
                              item: t,
                              isLoading: d,
                              disabled: 0 === t.count,
                              name: `attributes-${o}`,
                              countLabel: (0,
                              l.sprintf) /* translators: %d is the count of terms. */(
                                /* translators: %d is the count of terms. */
                                (0, l._n)('%d term', '%d terms', a, 'woocommerce'),
                                a,
                              ),
                              'aria-label': (0,
                              l.sprintf) /* translators: %1$s is the item name, %2$d is the count of terms for the item. */(
                                /* translators: %1$s is the item name, %2$d is the count of terms for the item. */
                                (0, l._n)(
                                  '%1$s, has %2$d term',
                                  '%1$s, has %2$d terms',
                                  a,
                                  'woocommerce',
                                ),
                                t.name,
                                a,
                              ),
                            });
                          const i = `${t.breadcrumbs[0]}: ${t.name}`;
                          return (0, n.createElement)(ie, {
                            ...e,
                            name: `terms-${o}`,
                            className: te()(...s, 'has-count'),
                            countLabel: (0,
                            l.sprintf) /* translators: %d is the count of products. */(
                              /* translators: %d is the count of products. */
                              (0, l._n)('%d product', '%d products', a, 'woocommerce'),
                              a,
                            ),
                            'aria-label': (0,
                            l.sprintf) /* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */(
                              /* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
                              (0, l._n)(
                                '%1$s, has %2$d product',
                                '%1$s, has %2$d products',
                                a,
                                'woocommerce',
                              ),
                              i,
                              a,
                            ),
                          });
                        },
                        selected: i.map(({ id: e }) => _.find(t => t.id === e)).filter(Boolean),
                        type: m,
                      }),
                      !!t &&
                        (0, n.createElement)(
                          'div',
                          { hidden: i.length < 2 },
                          (0, n.createElement)(a.SelectControl, {
                            className: 'woocommerce-product-attributes__operator',
                            label: (0, l.__)('Display products matching', 'woocommerce'),
                            help: (0, l.__)(
                              'Pick at least two attributes to use this setting.',
                              'woocommerce',
                            ),
                            value: s,
                            onChange: t,
                            options: [
                              {
                                label: (0, l.__)('Any selected attributes', 'woocommerce'),
                                value: 'any',
                              },
                              {
                                label: (0, l.__)('All selected attributes', 'woocommerce'),
                                value: 'all',
                              },
                            ],
                          }),
                        ),
                    )
              );
            },
          ),
          Ue = [
            { key: 'title/asc', name: (0, l.__)('Sorted by title', 'woocommerce') },
            { key: 'date/desc', name: (0, l.__)('Newest', 'woocommerce') },
            { key: 'popularity/desc', name: (0, l.__)('Best Selling', 'woocommerce') },
            { key: 'rating/desc', name: (0, l.__)('Top Rated', 'woocommerce') },
          ];
        function ze(e) {
          const { query: t } = e.attributes;
          return (0, n.createElement)(
            a.PanelBody,
            {
              className: 'woocommerce-product-query-panel__sort',
              title: (0, l.__)('Popular Filters', 'woocommerce'),
              initialOpen: !0,
            },
            (0, n.createElement)(
              'p',
              null,
              (0, l.__)('Arrange products by popular pre-sets.', 'woocommerce'),
            ),
            (0, n.createElement)(a.CustomSelectControl, {
              hideLabelFromVision: !0,
              label: (0, l.__)('Choose among these pre-sets', 'woocommerce'),
              onChange: t => {
                var o, r, c;
                if (null === (o = t.selectedItem) || void 0 === o || !o.key) return;
                const [n, a] =
                  null === (r = t.selectedItem) ||
                  void 0 === r ||
                  null === (c = r.key) ||
                  void 0 === c
                    ? void 0
                    : c.split('/');
                X(e, { order: a, orderBy: n });
              },
              options: Ue,
              value: Ue.find(e => e.key === `${t.orderBy}/${t.order}`),
            }),
          );
        }
        const We = e => {
          const t = (0, N.createInterpolateElement)(
              (0, l.__)(
                'Upgrade all Products (Beta) blocks on this page to <strongText /> for more features!',
                'woocommerce',
              ),
              {
                strongText: (0, n.createElement)(
                  'strong',
                  null,
                  (0, l.__)('Product Collection', 'woocommerce'),
                ),
              },
            ),
            o = (0, l.__)('Upgrade to Product Collection', 'woocommerce');
          return (0, n.createElement)(
            a.Notice,
            { isDismissible: !1 },
            (0, n.createElement)(n.Fragment, null, t),
            (0, n.createElement)('br', null),
            (0, n.createElement)('br', null),
            (0, n.createElement)(
              a.Button,
              {
                variant: 'link',
                onClick: () => {
                  e.upgradeBlock();
                },
              },
              o,
            ),
          );
        };
        o(726);
        const Qe = z.map(e => `__woocommerce${e[0].toUpperCase()}${e.slice(1)}`);
        function Je(e) {
          var t;
          const o = 'string' == typeof e ? e : e.value;
          return null === (t = Object.entries(Q).find(([, e]) => e === o)) || void 0 === t
            ? void 0
            : t[0];
        }
        const Ye = {
            attributes: e => {
              const { query: t } = e.attributes,
                [o, r] = (0, N.useState)([]);
              return (
                (0, N.useEffect)(() => {
                  t.__woocommerceAttributes &&
                    r(t.__woocommerceAttributes.map(({ termId: e }) => ({ id: e })));
                }, [t.__woocommerceAttributes]),
                (0, n.createElement)(
                  a.__experimentalToolsPanelItem,
                  {
                    label: (0, l.__)('Product Attributes', 'woocommerce'),
                    hasValue: () => {
                      var e;
                      return null === (e = t.__woocommerceAttributes) || void 0 === e
                        ? void 0
                        : e.length;
                    },
                  },
                  (0, n.createElement)(He, {
                    messages: { search: (0, l.__)('Attributes', 'woocommerce') },
                    selected: o,
                    onChange: t => {
                      const o = t.map(({ id: e, value: t }) => ({ termId: e, taxonomy: t }));
                      X(e, { __woocommerceAttributes: o });
                    },
                    operator: 'any',
                    isCompact: !0,
                    type: 'token',
                  }),
                  (0, n.createElement)(
                    a.ExternalLink,
                    {
                      className: 'woocommerce-product-query-panel__external-link',
                      href: '/wp-admin/edit.php?post_type=product&page=product_attributes',
                    },
                    (0, l.__)('Manage attributes', 'woocommerce'),
                  ),
                )
              );
            },
            onSale: e => {
              const { query: t } = e.attributes;
              return (0, n.createElement)(
                a.__experimentalToolsPanelItem,
                {
                  label: (0, l.__)('Sale status', 'woocommerce'),
                  hasValue: () => t.__woocommerceOnSale,
                },
                (0, n.createElement)(a.ToggleControl, {
                  label: (0, l.__)('Show only products on sale', 'woocommerce'),
                  checked: t.__woocommerceOnSale || !1,
                  onChange: t => {
                    X(e, { __woocommerceOnSale: t });
                  },
                }),
              );
            },
            productSelector: e => {
              const { query: t } = e.attributes,
                o = (function() {
                  const [e, t] = (0, N.useState)([]);
                  return (
                    (0, N.useEffect)(() => {
                      (({ selected: e = [], search: t = '', queryArgs: o = {} }) => {
                        const r = (({ selected: e = [], search: t = '', queryArgs: o = {} }) => {
                          const r = Le.productCount > 100,
                            c = {
                              per_page: r ? 100 : 0,
                              catalog_visibility: 'any',
                              search: t,
                              orderby: 'title',
                              order: 'asc',
                            },
                            n = [(0, fe.addQueryArgs)('/wc/store/v1/products', { ...c, ...o })];
                          return (
                            r &&
                              e.length &&
                              n.push(
                                (0, fe.addQueryArgs)('/wc/store/v1/products', {
                                  catalog_visibility: 'any',
                                  include: e,
                                  per_page: 0,
                                }),
                              ),
                            n
                          );
                        })({ selected: e, search: t, queryArgs: o });
                        return Promise.all(r.map(e => Te()({ path: e })))
                          .then(e => {
                            const t = e.flat(),
                              o = je(t, e => e.id);
                            return o.map(e => ({ ...e, parent: 0 }));
                          })
                          .catch(e => {
                            throw e;
                          });
                      })({ selected: [] }).then(e => {
                        t(e);
                      });
                    }, []),
                    e
                  );
                })();
              return (0, n.createElement)(
                a.__experimentalToolsPanelItem,
                {
                  label: (0, l.__)('Hand-picked Products', 'woocommerce'),
                  hasValue: () => {
                    var e;
                    return null === (e = t.include) || void 0 === e ? void 0 : e.length;
                  },
                },
                (0, n.createElement)(a.FormTokenField, {
                  disabled: !o.length,
                  displayTransform: e => {
                    var t;
                    return Number.isNaN(Number(e))
                      ? e
                      : (null === (t = o.find(t => t.id === Number(e))) || void 0 === t
                          ? void 0
                          : t.name) || '';
                  },
                  label: (0, l.__)('Pick some products', 'woocommerce'),
                  onChange: t => {
                    const r = t
                      .map(e => {
                        var t;
                        return null === (t = o.find(t => t.name === e || t.id === Number(e))) ||
                          void 0 === t
                          ? void 0
                          : t.id;
                      })
                      .filter(Boolean)
                      .map(String);
                    if (!r.length && e.attributes.query.include) {
                      const t = T(e.attributes.query, 'include');
                      X({ ...e, attributes: { ...e.attributes, query: t } }, {});
                    } else X(e, { include: r });
                  },
                  suggestions: o.map(e => e.name),
                  validateInput: e => o.find(t => t.name === e),
                  value: o.length
                    ? (null == t ? void 0 : t.include) || []
                    : [(0, l.__)('Loading…', 'woocommerce')],
                  __experimentalExpandOnFocus: !0,
                }),
              );
            },
            stockStatus: e => {
              var t;
              const { query: o } = e.attributes;
              return (0, n.createElement)(
                a.__experimentalToolsPanelItem,
                {
                  label: (0, l.__)('Stock status', 'woocommerce'),
                  hasValue: () => o.__woocommerceStockStatus,
                },
                (0, n.createElement)(a.FormTokenField, {
                  label: (0, l.__)('Stock status', 'woocommerce'),
                  onChange: t => {
                    const o = t.map(Je).filter(Boolean);
                    X(e, { __woocommerceStockStatus: o });
                  },
                  suggestions: Object.values(Q),
                  validateInput: e => Object.values(Q).includes(e),
                  value:
                    (null == o || null === (t = o.__woocommerceStockStatus) || void 0 === t
                      ? void 0
                      : t.map(e => Q[e])) || [],
                  __experimentalExpandOnFocus: !0,
                }),
              );
            },
            wooInherit: e => {
              const t = (function(e, t) {
                const o = (0, N.useRef)();
                return (
                  (0, N.useEffect)(() => {
                    o.current === e || (t && !t(e, o.current)) || (o.current = e);
                  }, [e, t]),
                  o.current
                );
              })(e.attributes.query, e => !1 === e.inherit);
              return (0, n.createElement)(a.ToggleControl, {
                className: 'woo-inherit-query-toggle',
                label: (0, l.__)('Inherit query from template', 'woocommerce'),
                help: (0, l.__)(
                  'Toggle to use the global query context that is set with the current template, such as variations of the product catalog or search. Disable to customize the filtering independently.',
                  'woocommerce',
                ),
                checked: e.attributes.query.inherit || !1,
                onChange: o => {
                  const r = { inherit: o };
                  o &&
                    (r.perPage = (0, c.getSettingWithCoercion)('loopShopPerPage', 12, I.isNumber)),
                    X(e, { ...e.defaultWooQueryParams, ...r, ...(!1 === o && { ...t }) });
                },
              });
            },
          },
          Ke = e => {
            const t = (function(e) {
                const t = (0, v.useSelect)('core/edit-site'),
                  o = (0, v.useSelect)(
                    t => {
                      var o;
                      return null === (o = t(d.store).getActiveBlockVariation(U, e)) || void 0 === o
                        ? void 0
                        : o.allowedControls;
                    },
                    [e],
                  );
                return M(t)
                  ? (function(e) {
                      return e.query.inherit;
                    })(e)
                    ? o.filter(e => 'wooInherit' === e)
                    : o
                  : o.filter(e => 'wooInherit' !== e);
              })(e.attributes),
              o = (function(e) {
                const t = (0, v.useSelect)(t => {
                  var o;
                  return null ===
                    (o = t('core/blocks')
                      .getBlockVariations(U)
                      .find(t => t.name === e)) || void 0 === o
                    ? void 0
                    : o.attributes;
                });
                return t ? Object.assign({}, ...Qe.map(e => ({ [e]: t.query[e] }))) : {};
              })(e.attributes.namespace);
            return (0, n.createElement)(
              n.Fragment,
              null,
              (0, n.createElement)(
                E.InspectorControls,
                null,
                (0, n.createElement)(We, { upgradeBlock: D }),
                (null == t ? void 0 : t.includes('presets')) && (0, n.createElement)(ze, { ...e }),
                (0, n.createElement)(
                  a.__experimentalToolsPanel,
                  {
                    className: 'woocommerce-product-query-toolspanel',
                    label: (0, l.__)('Advanced Filters', 'woocommerce'),
                    resetAll: () => {
                      X(e, o);
                    },
                  },
                  Object.entries(Ye).map(([r, c]) =>
                    null != t && t.includes(r)
                      ? (0, n.createElement)(c, { ...e, defaultWooQueryParams: o, key: r })
                      : null,
                  ),
                ),
              ),
            );
          };
        (0, r.addFilter)('editor.BlockEdit', U, e => t => {
          return (o = t).name === U && Object.values(Z).includes(o.attributes.namespace)
            ? (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)(Ke, { ...t }),
                (0, n.createElement)(e, { ...t }),
                (0, n.createElement)(E.InspectorControls, null, (0, n.createElement)(A, null)),
              )
            : (0, n.createElement)(e, { ...t });
          var o;
        }),
          o(1768);
        var Ze = o(5573);
        const Xe = (0, n.createElement)(
            Ze.SVG,
            { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
            (0, n.createElement)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z',
            }),
          ),
          et = [
            'woocommerce/woocommerce//archive-product',
            'woocommerce/woocommerce//taxonomy-product_cat',
            'woocommerce/woocommerce//taxonomy-product_tag',
            'woocommerce/woocommerce//taxonomy-product_attribute',
            'woocommerce/woocommerce//product-search-results',
          ],
          tt = e => {
            (0, d.registerBlockVariation)(U, {
              description: (0, l.__)(
                'A block that displays a selection of products in your store.',
                'woocommerce',
              ),
              name: H,
              /* translators: “Products“ is the name of the block. */
              title: (0, l.__)('Products (Beta)', 'woocommerce'),
              isActive: e => e.namespace === H,
              icon: (0, n.createElement)(a.Icon, {
                icon: Xe,
                className:
                  'wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks',
              }),
              attributes: { ...e, namespace: H },
              allowedControls: W,
              innerBlocks: K,
              scope: ['inserter'],
            });
          };
        if ((0, c.isWpVersion)('6.1', '>=')) {
          let e;
          (0, v.subscribe)(() => {
            const t = e,
              o = (0, v.select)('core/edit-site');
            if (((e = null == o ? void 0 : o.getEditedPostId()), t !== e && M(o))) {
              const t = et.includes(e),
                o = { inherit: t };
              t && (o.perPage = (0, c.getSettingWithCoercion)('loopShopPerPage', 12, I.isNumber));
              const r = { ...Y, query: { ...Y.query, ...o } };
              (0, d.unregisterBlockVariation)(U, H), tt(r);
            }
          }, 'core/edit-site');
          let t = !1;
          (0, v.subscribe)(() => {
            t || ((t = !0), tt(Y));
          }, 'core/edit-post');
        }
        const ot = new Set(),
          rt = 'woocommerce/related-products',
          ct = {
            namespace: rt,
            allowedControls: [],
            displayLayout: { type: 'flex', columns: 5 },
            query: {
              perPage: 5,
              pages: 0,
              offset: 0,
              postType: 'product',
              order: 'asc',
              orderBy: 'title',
              author: '',
              search: '',
              exclude: [],
              sticky: '',
              inherit: !1,
            },
            lock: { remove: !0, move: !0 },
          },
          nt = (0, c.getSettingWithCoercion)('postTemplateHasSupportForGridView', !1, I.isBoolean),
          at = [
            [
              'core/heading',
              {
                level: 2,
                content: (0, l.__)('Related products', 'woocommerce'),
                style: { spacing: { margin: { top: '1rem', bottom: '1rem' } } },
              },
            ],
            [
              'core/post-template',
              {
                __woocommerceNamespace: f,
                ...(nt && { layout: { type: 'grid', columnCount: 5 } }),
              },
              [
                ['woocommerce/product-image', { productId: 0, imageSizing: 'cropped' }],
                [
                  'core/post-title',
                  {
                    textAlign: 'center',
                    level: 3,
                    fontSize: 'medium',
                    isLink: !0,
                    __woocommerceNamespace: b,
                  },
                  [],
                ],
                [
                  'woocommerce/product-price',
                  {
                    textAlign: 'center',
                    fontSize: 'small',
                    style: { spacing: { margin: { bottom: '1rem' } } },
                  },
                  [],
                ],
                [
                  'woocommerce/product-button',
                  {
                    textAlign: 'center',
                    fontSize: 'small',
                    style: { spacing: { margin: { bottom: '1rem' } } },
                  },
                  [],
                ],
              ],
            ],
          ];
        (({
          blockName: e,
          blockMetadata: t,
          blockSettings: o,
          isVariationBlock: r = !1,
          variationName: c,
          isAvailableOnPostEditor: n,
        }) => {
          let a = '';
          (0, v.subscribe)(() => {
            var n;
            const l = a,
              s = (0, v.select)('core/edit-site');
            a = (function(e) {
              const t = (0, I.isNumber)(e) ? void 0 : e;
              return null == t ? void 0 : t.split('//')[1];
            })(null == s ? void 0 : s.getEditedPostId());
            const i = l !== a,
              m = Boolean(a);
            if (!i || !m || !e) return;
            let u = Boolean((0, d.getBlockType)(e));
            if (
              (u &&
                ((null !== (n = a) && void 0 !== n && n.includes('single-product')) ||
                  (null != l && l.includes('single-product'))) &&
                (r && c ? (0, d.unregisterBlockVariation)(e, c) : (0, d.unregisterBlockType)(e),
                (u = !1)),
              !u)
            )
              if (r) (0, d.registerBlockVariation)(e, o);
              else {
                var p;
                const e = (0, I.isEmpty)(null == o ? void 0 : o.ancestor)
                  ? ['woocommerce/single-product']
                  : null == o
                  ? void 0
                  : o.ancestor;
                (0, d.registerBlockType)(t, {
                  ...o,
                  ancestor:
                    null !== (p = a) && void 0 !== p && p.includes('single-product') ? void 0 : e,
                });
              }
          }, 'core/edit-site'),
            (0, v.subscribe)(() => {
              !(Boolean(c) ? ot.has(c) : ot.has(e)) &&
                n &&
                (r
                  ? (ot.add(c), (0, d.registerBlockVariation)(e, o))
                  : (ot.add(e), (0, d.registerBlockType)(t, o)));
            }, 'core/edit-post');
        })({
          blockName: U,
          blockMetadata: {},
          blockSettings: {
            description: (0, l.__)('Display related products.', 'woocommerce'),
            name: 'Related Products Controls',
            title: (0, l.__)('Related Products Controls', 'woocommerce'),
            isActive: e => e.namespace === rt,
            icon: (0, n.createElement)(a.Icon, {
              icon: Xe,
              className:
                'wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks',
            }),
            attributes: ct,
            allowedControls: [],
            innerBlocks: at,
            scope: ['block'],
          },
          isVariationBlock: !0,
          variationName: rt,
        });
        const lt = [h, k, _];
        (0, c.isWpVersion)('6.1', '>=') &&
          (0, r.addFilter)('blocks.registerBlockType', 'core/custom-class-name/attribute', function(
            e,
            t,
          ) {
            return (
              lt.includes(t) &&
                (e.attributes = { ...e.attributes, __woocommerceNamespace: { type: 'string' } }),
              e
            );
          });
      },
      726: () => {},
      1768: () => {},
      1598: () => {},
      2777: () => {},
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
    c = {};
  function n(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var o = (c[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, c) => {
      if (!o) {
        var a = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, c] = e[m], l = !0, s = 0; s < o.length; s++)
            (!1 & c || a >= c) && Object.keys(n.O).every(e => n.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((l = !1), c < a && (a = c));
          if (l) {
            e.splice(m--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      c = c || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > c; m--) e[m] = e[m - 1];
      e[m] = [o, r, c];
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
      var c = Object.create(null);
      n.r(c);
      var a = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var l = 2 & r && e; 'object' == typeof l && !~t.indexOf(l); l = o(l))
        Object.getOwnPropertyNames(l).forEach(t => (a[t] = () => e[t]));
      return (a.default = () => e), n.d(c, a), c;
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
    (n.j = 3315),
    (() => {
      var e = { 3315: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [a, l, s] = o,
            i = 0;
          if (a.some(t => 0 !== e[t])) {
            for (r in l) n.o(l, r) && (n.m[r] = l[r]);
            if (s) var m = s(n);
          }
          for (t && t(o); i < a.length; i++) (c = a[i]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var a = n.O(void 0, [94], () => n(5246));
  (a = n.O(a)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-query'] = a);
})();
