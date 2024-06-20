(() => {
  var e,
    t,
    r,
    o = {
      5641: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609);
        const c = window.wp.blocks;
        var l = r(7104),
          n = r(6224);
        r(1762);
        const a = JSON.parse(
            '{"name":"woocommerce/product-category","title":"Products by Category","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of products from your selected categories.","supports":{"align":["wide","full"],"html":false},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"categories":{"type":"array","default":[]},"catOperator":{"type":"string","default":"any"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"},"editMode":{"type":"boolean","default":true},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"date"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          i = window.wc.wcSettings,
          s = {
            columns: { type: 'number', default: (0, i.getSetting)('defaultColumns', 3) },
            rows: { type: 'number', default: (0, i.getSetting)('defaultRows', 3) },
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
              default: Object.keys((0, i.getSetting)('stockStatusOptions', [])),
            },
          },
          m = window.wp.blockEditor;
        var d = r(6087);
        const u = window.wp.components;
        var h = r(7723);
        const E = window.wp.serverSideRender;
        var g = r.n(E);
        const p = (0, o.createElement)(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 230 250',
              style: { width: '100%' },
            },
            (0, o.createElement)('title', null, 'Grid Block Preview'),
            (0, o.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '.162',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '9.216',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, o.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '1.565',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, o.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '.162',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '9.216',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, o.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '1.565',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, o.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '82.478',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '91.532',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, o.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '83.882',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, o.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '82.478',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '91.532',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, o.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '83.882',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, o.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '164.788',
              y: '.779',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '173.843',
              y: '76.153',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, o.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '166.192',
              y: '101.448',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, o.createElement)('rect', {
              width: '65.374',
              height: '65.374',
              x: '164.788',
              y: '136.277',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '47.266',
              height: '5.148',
              x: '173.843',
              y: '211.651',
              fill: '#E1E3E6',
              rx: '2.574',
            }),
            (0, o.createElement)('rect', {
              width: '62.8',
              height: '15',
              x: '166.192',
              y: '236.946',
              fill: '#E1E3E6',
              rx: '5',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '13.283',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '21.498',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '29.713',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '37.927',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '46.238',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '95.599',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '103.814',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '112.029',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '120.243',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '128.554',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '177.909',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '186.124',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '194.339',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '202.553',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '210.864',
              y: '86.301',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '13.283',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '21.498',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '29.713',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '37.927',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '46.238',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '95.599',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '103.814',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '112.029',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '120.243',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '128.554',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '177.909',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '186.124',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '194.339',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '202.553',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
            (0, o.createElement)('rect', {
              width: '6.177',
              height: '6.177',
              x: '210.864',
              y: '221.798',
              fill: '#E1E3E6',
              rx: '3',
            }),
          ),
          w = () =>
            (0, o.createElement)(
              u.Placeholder,
              {
                icon: (0, o.createElement)(l.A, { icon: n.A }),
                label: (0, h.__)('Products by Category', 'woocommerce'),
                className: 'wc-block-products-grid wc-block-products-category',
              },
              (0, h.__)('No products were found that matched your selection.', 'woocommerce'),
            ),
          b = e => {
            const { name: t, attributes: r } = e,
              c = r.categories.length;
            return r.isPreview
              ? p
              : c
              ? (0, o.createElement)(g(), { block: t, attributes: r, EmptyResponsePlaceholder: w })
              : (0, o.createElement)(
                  o.Fragment,
                  null,
                  (0, h.__)('Select at least one category to display its products.', 'woocommerce'),
                );
          };
        var _ = r(9019),
          f = r.n(_);
        function y(e, t, r) {
          const o = new Set(t.map(e => e[r]));
          return e.filter(e => !o.has(e[r]));
        }
        const v = window.wp.htmlEntities,
          x = {
            clear: (0, h.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, h.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, h.__)('No results for %s', 'woocommerce'),
            search: (0, h.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, h.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, h._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, h.__)('Search results updated.', 'woocommerce'),
          },
          k = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              o = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const c = ['0'],
              l = (e = {}) => (e.parent ? [...l(o[e.parent]), e.name] : e.name ? [e.name] : []),
              n = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    c.push('' + e.id),
                    { ...e, breadcrumbs: l(o[e.parent]), children: t && t.length ? n(t) : [] }
                  );
                }),
              a = n(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                c.includes(e) || a.push(...n(t || []));
              }),
              a
            );
          },
          C = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, o.createElement)('strong', { key: t }, e)
                  : (0, o.createElement)(d.Fragment, { key: t }, e),
              );
          },
          S = ({ label: e }) =>
            (0, o.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          N = e => {
            const { item: t, search: r } = e,
              c = t.breadcrumbs && t.breadcrumbs.length;
            return (0, o.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              c
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
                C((0, v.decodeEntities)(t.name), r),
              ),
            );
            var l;
          },
          O = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: c = '',
            item: l,
            isSelected: n,
            isSingle: a,
            onSelect: i,
            search: s = '',
            selected: m,
            useExpandedPanelId: h,
            ...E
          }) => {
            var g, p;
            const [w, b] = h,
              _ = null != e && void 0 !== l.count && null !== l.count,
              x = !(null === (g = l.breadcrumbs) || void 0 === g || !g.length),
              k = !(null === (p = l.children) || void 0 === p || !p.length),
              O = w === l.id,
              P = f()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': x,
                'has-children': k,
                'has-count': _,
                'is-expanded': O,
                'is-radio-button': a,
              }),
              A = E.name || `search-list-item-${c}`,
              I = `${A}-${l.id}`,
              B = (0, d.useCallback)(() => {
                b(O ? -1 : Number(l.id));
              }, [O, l.id, b]);
            return k
              ? (0, o.createElement)(
                  'div',
                  {
                    className: P,
                    onClick: B,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? B() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  a
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          type: 'radio',
                          id: I,
                          name: A,
                          value: l.value,
                          onChange: i(l),
                          onClick: e => e.stopPropagation(),
                          checked: n,
                          className: 'woocommerce-search-list__item-input',
                          ...E,
                        }),
                        (0, o.createElement)(N, { item: l, search: s }),
                        _ ? (0, o.createElement)(S, { label: e || l.count }) : null,
                      )
                    : (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)(u.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: n,
                          ...(!n && l.children.some(e => m.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: C((0, v.decodeEntities)(l.name), s),
                          onChange: () => {
                            n
                              ? i(y(m, l.children, 'id'))()
                              : i(
                                  (function(e, t, r) {
                                    const o = y(t, e, 'id');
                                    return [...e, ...o];
                                  })(m, l.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        _ ? (0, o.createElement)(S, { label: e || l.count }) : null,
                      ),
                )
              : (0, o.createElement)(
                  'label',
                  { htmlFor: I, className: P },
                  a
                    ? (0, o.createElement)(
                        o.Fragment,
                        null,
                        (0, o.createElement)('input', {
                          ...E,
                          type: 'radio',
                          id: I,
                          name: A,
                          value: l.value,
                          onChange: i(l),
                          checked: n,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, o.createElement)(N, { item: l, search: s }),
                      )
                    : (0, o.createElement)(u.CheckboxControl, {
                        ...E,
                        id: I,
                        name: A,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, v.decodeEntities)(l.value),
                        label: C((0, v.decodeEntities)(l.name), s),
                        onChange: i(l),
                        checked: n,
                      }),
                  _ ? (0, o.createElement)(S, { label: e || l.count }) : null,
                );
          },
          P = O;
        var A = r(2478),
          I = r(9491),
          B = r(2370);
        r(6636);
        const R = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: c,
            screenReaderLabel: n,
            className: a = '',
          }) => {
            const [i, s] = (0, d.useState)(!1),
              m = (0, I.useInstanceId)(R);
            if (((n = n || t), !t)) return null;
            t = (0, v.decodeEntities)(t);
            const E = f()('woocommerce-tag', a, { 'has-remove': !!c }),
              g = `woocommerce-tag__label-${m}`,
              p = (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)('span', { className: 'screen-reader-text' }, n),
                (0, o.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, o.createElement)(
              'span',
              { className: E },
              r
                ? (0, o.createElement)(
                    u.Button,
                    { className: 'woocommerce-tag__text', id: g, onClick: () => s(!0) },
                    p,
                  )
                : (0, o.createElement)('span', { className: 'woocommerce-tag__text', id: g }, p),
              r && i && (0, o.createElement)(u.Popover, { onClose: () => s(!1) }, r),
              c &&
                (0, o.createElement)(
                  u.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: c(e),
                    label: (0, h.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, h.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': g,
                  },
                  (0, o.createElement)(l.A, {
                    icon: B.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          j = R;
        r(8137);
        const $ = e => (0, o.createElement)(P, { ...e }),
          T = e => {
            const {
                list: t,
                selected: r,
                renderItem: c,
                depth: l = 0,
                onSelect: n,
                instanceId: a,
                isSingle: i,
                search: s,
                useExpandedPanelId: m,
              } = e,
              [u] = m;
            return t
              ? (0, o.createElement)(
                  d.Fragment,
                  null,
                  t.map(t => {
                    var h, E;
                    const g =
                        null !== (h = t.children) && void 0 !== h && h.length && !i
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      p =
                        (null === (E = t.children) || void 0 === E ? void 0 : E.length) &&
                        u === t.id;
                    return (0, o.createElement)(
                      d.Fragment,
                      { key: t.id },
                      (0, o.createElement)(
                        'li',
                        null,
                        c({
                          item: t,
                          isSelected: g,
                          onSelect: n,
                          isSingle: i,
                          selected: r,
                          search: s,
                          depth: l,
                          useExpandedPanelId: m,
                          controlId: a,
                        }),
                      ),
                      p ? (0, o.createElement)(T, { ...e, list: t.children, depth: l + 1 }) : null,
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
            onChange: l,
            onRemove: n,
          }) => {
            if (e || t || !r) return null;
            const a = r.length;
            return (0, o.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, o.createElement)('strong', null, c.selected(a)),
                a > 0
                  ? (0, o.createElement)(
                      u.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => l([]),
                        'aria-label': c.clear,
                      },
                      (0, h.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              a > 0
                ? (0, o.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, o.createElement)(
                        'li',
                        { key: t },
                        (0, o.createElement)(j, { label: e.name, id: e.id, remove: n }),
                      ),
                    ),
                  )
                : null,
            );
          },
          F = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: c,
            useExpandedPanelId: n,
            ...a
          }) => {
            const { messages: i, renderItem: s, selected: m, isSingle: d } = a,
              u = s || $;
            return 0 === e.length
              ? (0, o.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, o.createElement)(l.A, { icon: A.A, role: 'img' }),
                  ),
                  (0, o.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, h.sprintf)(i.noResults, t) : i.noItems,
                  ),
                )
              : (0, o.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, o.createElement)(T, {
                    useExpandedPanelId: n,
                    list: e,
                    selected: m,
                    renderItem: u,
                    onSelect: r,
                    instanceId: c,
                    isSingle: d,
                    search: t,
                  }),
                );
          },
          L = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: c,
                isLoading: l,
                isSingle: n,
                list: a,
                messages: i = x,
                onChange: s,
                onSearch: m,
                selected: E,
                type: g = 'text',
                debouncedSpeak: p,
              } = e,
              [w, b] = (0, d.useState)(''),
              _ = (0, d.useState)(-1),
              y = (0, I.useInstanceId)(L),
              v = (0, d.useMemo)(() => ({ ...x, ...i }), [i]),
              C = (0, d.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? k(e) : e;
                    const o = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      c = e.map(e => !!o.test(e.name) && e).filter(Boolean);
                    return r ? k(c, e) : c;
                  })(a, w, c),
                [a, w, c],
              );
            (0, d.useEffect)(() => {
              p && p(v.updated);
            }, [p, v]),
              (0, d.useEffect)(() => {
                'function' == typeof m && m(w);
              }, [w, m]);
            const S = (0, d.useCallback)(
                e => () => {
                  n && s([]);
                  const t = E.findIndex(({ id: t }) => t === e);
                  s([...E.slice(0, t), ...E.slice(t + 1)]);
                },
                [n, E, s],
              ),
              N = (0, d.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? s(e)
                    : -1 === E.findIndex(({ id: t }) => t === e.id)
                    ? s(n ? [e] : [...E, e])
                    : S(e.id)();
                },
                [n, S, s, E],
              ),
              O = (0, d.useCallback)(
                e => {
                  const [t] = E.filter(t => !e.find(e => t.id === e.id));
                  S(t.id)();
                },
                [S, E],
              );
            return (0, o.createElement)(
              'div',
              {
                className: f()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': l,
                  'is-token': 'token' === g,
                }),
              },
              'text' === g && (0, o.createElement)(M, { ...e, onRemove: S, messages: v }),
              (0, o.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === g
                  ? (0, o.createElement)(u.TextControl, {
                      label: v.search,
                      type: 'search',
                      value: w,
                      onChange: e => b(e),
                    })
                  : (0, o.createElement)(u.FormTokenField, {
                      disabled: l,
                      label: v.search,
                      onChange: O,
                      onInputChange: e => b(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: l
                        ? [(0, h.__)('Loading…', 'woocommerce')]
                        : E.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              l
                ? (0, o.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, o.createElement)(u.Spinner, null),
                  )
                : (0, o.createElement)(F, {
                    ...e,
                    search: w,
                    filteredList: C,
                    messages: v,
                    onSelect: N,
                    instanceId: y,
                    useExpandedPanelId: _,
                  }),
            );
          },
          D = ((0, u.withSpokenMessages)(L), window.wp.url),
          H = window.wp.apiFetch;
        var V = r.n(H);
        const J = window.wp.escapeHtml,
          W = ({ error: e }) =>
            (0, o.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, h.__)('The following error was returned', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, J.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, o.createElement)(
                        'span',
                        null,
                        (0, h.__)('The following error was returned from the API', 'woocommerce'),
                        (0, o.createElement)('br', null),
                        (0, o.createElement)('code', null, (0, J.escapeHTML)(e)),
                      )
                    : e
                  : (0, h.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          G = e => {
            const { id: t, name: r, parent: o, count: c } = e;
            return {
              id: t,
              name: r,
              parent: o,
              count: c,
              breadcrumbs: [],
              children: [],
              details: e,
              value: e.slug,
            };
          };
        r(6876);
        const z =
            ((oe = ({
              categories: e = [],
              error: t = null,
              isLoading: r = !1,
              onChange: c,
              onOperatorChange: l,
              operator: n = 'any',
              selected: a,
              isCompact: i = !1,
              isSingle: s = !1,
              showReviewCount: m,
            }) => {
              const d = {
                clear: (0, h.__)('Clear all product categories', 'woocommerce'),
                list: (0, h.__)('Product Categories', 'woocommerce'),
                noItems: (0, h.__)(
                  "Your store doesn't have any product categories.",
                  'woocommerce',
                ),
                search: (0, h.__)('Search for product categories', 'woocommerce'),
                selected: e =>
                  (0, h.sprintf) /* translators: %d is the count of selected categories. */(
                    /* translators: %d is the count of selected categories. */
                    (0, h._n)('%d category selected', '%d categories selected', e, 'woocommerce'),
                    e,
                  ),
                updated: (0, h.__)('Category search results updated.', 'woocommerce'),
              };
              if (t) return (0, o.createElement)(W, { error: t });
              const E = e.map(G);
              return (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)(L, {
                  className: 'woocommerce-product-categories',
                  list: E,
                  isLoading: r,
                  selected: E.filter(({ id: e }) => a.includes(Number(e))),
                  onChange: c,
                  renderItem: e => {
                    var t, r, c, l, n, a, i, s;
                    const { item: d, search: u, depth: E = 0 } = e,
                      g = d.breadcrumbs.length ? `${d.breadcrumbs.join(', ')}, ${d.name}` : d.name,
                      p = m
                        ? (0,
                          h.sprintf) /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */(
                            /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
                            (0, h._n)(
                              '%1$s, has %2$d review',
                              '%1$s, has %2$d reviews',
                              (null === (t = d.details) || void 0 === t
                                ? void 0
                                : t.review_count) || 0,
                              'woocommerce',
                            ),
                            g,
                            (null === (r = d.details) || void 0 === r ? void 0 : r.review_count) ||
                              0,
                          )
                        : (0,
                          h.sprintf) /* translators: %1$s is the item name, %2$d is the count of products for the item. */(
                            /* translators: %1$s is the item name, %2$d is the count of products for the item. */
                            (0, h._n)(
                              '%1$s, has %2$d product',
                              '%1$s, has %2$d products',
                              (null === (c = d.details) || void 0 === c ? void 0 : c.count) || 0,
                              'woocommerce',
                            ),
                            g,
                            (null === (l = d.details) || void 0 === l ? void 0 : l.count) || 0,
                          ),
                      w = m
                        ? (0, h.sprintf) /* translators: %d is the count of reviews. */(
                            /* translators: %d is the count of reviews. */
                            (0, h._n)(
                              '%d review',
                              '%d reviews',
                              (null === (n = d.details) || void 0 === n
                                ? void 0
                                : n.review_count) || 0,
                              'woocommerce',
                            ),
                            (null === (a = d.details) || void 0 === a ? void 0 : a.review_count) ||
                              0,
                          )
                        : (0, h.sprintf) /* translators: %d is the count of products. */(
                            /* translators: %d is the count of products. */
                            (0, h._n)(
                              '%d product',
                              '%d products',
                              (null === (i = d.details) || void 0 === i ? void 0 : i.count) || 0,
                              'woocommerce',
                            ),
                            (null === (s = d.details) || void 0 === s ? void 0 : s.count) || 0,
                          );
                    return (0, o.createElement)(O, {
                      className: f()('woocommerce-product-categories__item', 'has-count', {
                        'is-searching': u.length > 0,
                        'is-skip-level': 0 === E && 0 !== d.parent,
                      }),
                      ...e,
                      countLabel: w,
                      'aria-label': p,
                    });
                  },
                  messages: d,
                  isCompact: i,
                  isHierarchical: !0,
                  isSingle: s,
                }),
                !!l &&
                  (0, o.createElement)(
                    'div',
                    { hidden: a.length < 2 },
                    (0, o.createElement)(u.SelectControl, {
                      className: 'woocommerce-product-categories__operator',
                      label: (0, h.__)('Display products matching', 'woocommerce'),
                      help: (0, h.__)(
                        'Pick at least two categories to use this setting.',
                        'woocommerce',
                      ),
                      value: n,
                      onChange: l,
                      options: [
                        {
                          label: (0, h.__)('Any selected categories', 'woocommerce'),
                          value: 'any',
                        },
                        {
                          label: (0, h.__)('All selected categories', 'woocommerce'),
                          value: 'all',
                        },
                      ],
                    }),
                  ),
              );
            }),
            ({ selected: e, ...t }) => {
              const [r, c] = (0, d.useState)(!0),
                [l, n] = (0, d.useState)(null),
                [a, i] = (0, d.useState)([]),
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
                  n(t), c(!1);
                },
                m = (0, d.useRef)(e);
              return (
                (0, d.useEffect)(() => {
                  var e;
                  ((e = { selected: m.current }),
                  V()({
                    path: (0, D.addQueryArgs)('wc/store/v1/products/categories', {
                      per_page: 0,
                      ...e,
                    }),
                  }))
                    .then(e => {
                      i(e), c(!1);
                    })
                    .catch(s);
                }, [m]),
                (0, o.createElement)(oe, {
                  ...t,
                  selected: e,
                  error: l,
                  categories: a,
                  isLoading: r,
                })
              );
            }),
          K = (e, t, r) =>
            r
              ? Math.min(e, t) === e
                ? t
                : Math.max(e, r) === e
                ? r
                : e
              : Math.max(e, t) === t
              ? e
              : t,
          Q = ({
            columns: e,
            rows: t,
            setAttributes: r,
            alignButtons: c,
            minColumns: l = 1,
            maxColumns: n = 6,
            minRows: a = 1,
            maxRows: i = 6,
          }) =>
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(u.RangeControl, {
                label: (0, h.__)('Columns', 'woocommerce'),
                value: e,
                onChange: e => {
                  const t = K(e, l, n);
                  r({ columns: Number.isNaN(t) ? '' : t });
                },
                min: l,
                max: n,
              }),
              (0, o.createElement)(u.RangeControl, {
                label: (0, h.__)('Rows', 'woocommerce'),
                value: t,
                onChange: e => {
                  const t = K(e, a, i);
                  r({ rows: Number.isNaN(t) ? '' : t });
                },
                min: a,
                max: i,
              }),
              (0, o.createElement)(u.ToggleControl, {
                label: (0, h.__)('Align the last block to the bottom', 'woocommerce'),
                help: c
                  ? (0, h.__)('Align the last block to the bottom.', 'woocommerce')
                  : (0, h.__)('The last inner block will follow other content.', 'woocommerce'),
                checked: c,
                onChange: () => r({ alignButtons: !c }),
              }),
            ),
          Y = ({ onChange: e, settings: t }) => {
            const { image: r, button: c, price: l, rating: n, title: a } = t,
              i = !1 !== r;
            return (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(u.ToggleControl, {
                label: (0, h.__)('Product image', 'woocommerce'),
                checked: i,
                onChange: () => e({ ...t, image: !i }),
              }),
              (0, o.createElement)(u.ToggleControl, {
                label: (0, h.__)('Product title', 'woocommerce'),
                checked: a,
                onChange: () => e({ ...t, title: !a }),
              }),
              (0, o.createElement)(u.ToggleControl, {
                label: (0, h.__)('Product price', 'woocommerce'),
                checked: l,
                onChange: () => e({ ...t, price: !l }),
              }),
              (0, o.createElement)(u.ToggleControl, {
                label: (0, h.__)('Product rating', 'woocommerce'),
                checked: n,
                onChange: () => e({ ...t, rating: !n }),
              }),
              (0, o.createElement)(u.ToggleControl, {
                label: (0, h.__)('Add to Cart button', 'woocommerce'),
                checked: c,
                onChange: () => e({ ...t, button: !c }),
              }),
            );
          },
          q = ({ value: e, setAttributes: t }) =>
            (0, o.createElement)(u.SelectControl, {
              label: (0, h.__)('Order products by', 'woocommerce'),
              value: e,
              options: [
                { label: (0, h.__)('Newness - newest first', 'woocommerce'), value: 'date' },
                { label: (0, h.__)('Price - low to high', 'woocommerce'), value: 'price_asc' },
                { label: (0, h.__)('Price - high to low', 'woocommerce'), value: 'price_desc' },
                { label: (0, h.__)('Rating - highest first', 'woocommerce'), value: 'rating' },
                { label: (0, h.__)('Sales - most first', 'woocommerce'), value: 'popularity' },
                { label: (0, h.__)('Title - alphabetical', 'woocommerce'), value: 'title' },
                { label: (0, h.__)('Menu Order', 'woocommerce'), value: 'menu_order' },
              ],
              onChange: e => t({ orderby: e }),
            }),
          U = (0, i.getSetting)('hideOutOfStockItems', !1),
          X = (0, i.getSetting)('stockStatusOptions', {}),
          Z = ({ value: e, setAttributes: t }) => {
            const { outofstock: r, ...c } = X,
              l = U ? c : X,
              n = Object.entries(l)
                .map(([e, t]) => ({ value: e, label: t }))
                .filter(e => !!e.label),
              a = Object.keys(l).filter(e => !!e),
              [i, s] = (0, d.useState)(e || a);
            (0, d.useEffect)(() => {
              t({ stockStatus: ['', ...i] });
            }, [i, t]);
            const m = (0, d.useCallback)(
              e => {
                const t = i.includes(e),
                  r = i.filter(t => t !== e);
                t || (r.push(e), r.sort()), s(r);
              },
              [i],
            );
            return (0, o.createElement)(
              o.Fragment,
              null,
              n.map(e => {
                const t = i.includes(e.value)
                  ? /* translators: %s stock status. */ /* translators: %s stock status. */ (0,
                    h.__)('Stock status "%s" visible.', 'woocommerce')
                  : /* translators: %s stock status. */ /* translators: %s stock status. */ (0,
                    h.__)('Stock status "%s" hidden.', 'woocommerce');
                return (0, o.createElement)(u.ToggleControl, {
                  label: e.label,
                  key: e.value,
                  help: (0, h.sprintf)(t, e.label),
                  checked: i.includes(e.value),
                  onChange: () => m(e.value),
                });
              }),
            );
          },
          ee = e => {
            const { isEditing: t, attributes: r, setAttributes: c, setChangedAttributes: l } = e,
              {
                columns: n,
                catOperator: a,
                contentVisibility: s,
                orderby: d,
                rows: E,
                alignButtons: g,
                stockStatus: p,
              } = r;
            return (0, o.createElement)(
              m.InspectorControls,
              { key: 'inspector' },
              (0, o.createElement)(
                u.PanelBody,
                {
                  title: (0, h.__)('Product Category', 'woocommerce'),
                  initialOpen: !r.categories.length && !t,
                },
                (0, o.createElement)(z, {
                  selected: r.categories,
                  onChange: (e = []) => {
                    const t = { categories: e.map(({ id: e }) => e) };
                    c(t), l(t);
                  },
                  operator: a,
                  onOperatorChange: (e = 'any') => {
                    const t = { catOperator: e };
                    c(t), l(t);
                  },
                  isCompact: !0,
                }),
              ),
              (0, o.createElement)(
                u.PanelBody,
                { title: (0, h.__)('Layout', 'woocommerce'), initialOpen: !0 },
                (0, o.createElement)(Q, {
                  columns: n,
                  rows: E,
                  alignButtons: g,
                  setAttributes: c,
                  minColumns: (0, i.getSetting)('minColumns', 1),
                  maxColumns: (0, i.getSetting)('maxColumns', 6),
                  minRows: (0, i.getSetting)('minRows', 1),
                  maxRows: (0, i.getSetting)('maxRows', 6),
                }),
              ),
              (0, o.createElement)(
                u.PanelBody,
                { title: (0, h.__)('Content', 'woocommerce'), initialOpen: !0 },
                (0, o.createElement)(Y, {
                  settings: s,
                  onChange: e => c({ contentVisibility: e }),
                }),
              ),
              (0, o.createElement)(
                u.PanelBody,
                { title: (0, h.__)('Order By', 'woocommerce'), initialOpen: !1 },
                (0, o.createElement)(q, { setAttributes: c, value: d }),
              ),
              (0, o.createElement)(
                u.PanelBody,
                { title: (0, h.__)('Filter by stock status', 'woocommerce'), initialOpen: !1 },
                (0, o.createElement)(Z, { setAttributes: c, value: p }),
              ),
            );
          },
          te = e => {
            const {
                debouncedSpeak: t,
                setIsEditing: r,
                changedAttributes: c,
                setChangedAttributes: a,
                attributes: i,
              } = e,
              s = { ...i, ...c },
              m = () => {
                r(!1), a({});
              };
            return (0, o.createElement)(
              u.Placeholder,
              {
                icon: (0, o.createElement)(l.A, { icon: n.A }),
                label: (0, h.__)('Products by Category', 'woocommerce'),
                className: 'wc-block-products-grid wc-block-products-category',
              },
              (0, h.__)('Display a grid of products from your selected categories.', 'woocommerce'),
              (0, o.createElement)(
                'div',
                { className: 'wc-block-products-category__selection' },
                (0, o.createElement)(z, {
                  selected: s.categories,
                  onChange: (e = []) => {
                    const t = e.map(({ id: e }) => e);
                    a({ categories: t });
                  },
                  operator: s.catOperator,
                  onOperatorChange: (e = 'any') => a({ catOperator: e }),
                }),
                (0, o.createElement)(
                  u.Button,
                  {
                    variant: 'primary',
                    onClick: () => {
                      (() => {
                        const { setAttributes: t } = e;
                        t(c), m();
                      })(),
                        t(
                          (0, h.__)(
                            'Now displaying a preview of the reviews for the products in the selected categories.',
                            'woocommerce',
                          ),
                        );
                    },
                  },
                  (0, h.__)('Done', 'woocommerce'),
                ),
                (0, o.createElement)(
                  u.Button,
                  {
                    className: 'wc-block-products-category__cancel-button',
                    variant: 'tertiary',
                    onClick: () => {
                      m(),
                        t(
                          (0, h.__)(
                            'Now displaying a preview of the reviews for the products in the selected categories.',
                            'woocommerce',
                          ),
                        );
                    },
                  },
                  (0, h.__)('Cancel', 'woocommerce'),
                ),
              ),
            );
          },
          re = (0, u.withSpokenMessages)(e => {
            const t = (0, m.useBlockProps)(),
              { attributes: r } = e,
              [c, l] = (0, d.useState)(!r.categories.length),
              [n, a] = (0, d.useState)({});
            return (0, o.createElement)(
              'div',
              { ...t },
              (0, o.createElement)(
                m.BlockControls,
                null,
                (0, o.createElement)(u.ToolbarGroup, {
                  controls: [
                    {
                      icon: 'edit',
                      title: (0, h.__)('Edit selected categories', 'woocommerce'),
                      onClick: () => l(!c),
                      isActive: c,
                    },
                  ],
                }),
              ),
              (0, o.createElement)(ee, { isEditing: c, setChangedAttributes: a, ...e }),
              c
                ? (0, o.createElement)(te, {
                    isEditing: c,
                    setIsEditing: l,
                    changedAttributes: n,
                    setChangedAttributes: a,
                    ...e,
                  })
                : (0, o.createElement)(u.Disabled, null, (0, o.createElement)(b, { ...e })),
            );
          });
        var oe;
        (0, c.registerBlockType)(a, {
          icon: {
            src: (0, o.createElement)(l.A, {
              icon: n.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...a.attributes, ...s },
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
                ].filter(e => 'woocommerce/product-category' !== e),
                transform: e =>
                  (0, c.createBlock)('woocommerce/product-category', { ...e, editMode: !1 }),
              },
            ],
          },
          edit: re,
          save: () => null,
        });
      },
      1762: () => {},
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
    c = {};
  function l(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var r = (c[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, l), r.exports;
  }
  (l.m = o),
    (e = []),
    (l.O = (t, r, o, c) => {
      if (!r) {
        var n = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, o, c] = e[m], a = !0, i = 0; i < r.length; i++)
            (!1 & c || n >= c) && Object.keys(l.O).every(e => l.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((a = !1), c < n && (n = c));
          if (a) {
            e.splice(m--, 1);
            var s = o();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      c = c || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > c; m--) e[m] = e[m - 1];
      e[m] = [r, o, c];
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
      var c = Object.create(null);
      l.r(c);
      var n = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), l.d(c, n), c;
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
    (l.j = 4101),
    (() => {
      var e = { 4101: 0 };
      l.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            c,
            [n, a, i] = r,
            s = 0;
          if (n.some(t => 0 !== e[t])) {
            for (o in a) l.o(a, o) && (l.m[o] = a[o]);
            if (i) var m = i(l);
          }
          for (t && t(r); s < n.length; s++) (c = n[s]), l.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return l.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = l.O(void 0, [94], () => l(5641));
  (n = l.O(n)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-category'] = n);
})();
