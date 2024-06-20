(() => {
  var e,
    t,
    r,
    l = {
      9081: (e, t, r) => {
        'use strict';
        r.r(t);
        var l = r(1609),
          n = r(7104),
          o = r(9093);
        const c = window.wp.blocks,
          a = JSON.parse(
            '{"name":"woocommerce/product-best-sellers","title":"Best Selling Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of your all-time best selling products.","supports":{"align":["wide","full"],"html":false},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"categories":{"type":"array","default":[]},"catOperator":{"type":"string","default":"any"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"},"editMode":{"type":"boolean","default":true},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"popularity"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
          ),
          i = window.wp.blockEditor,
          s = window.wp.components,
          m = window.wp.serverSideRender;
        var d = r.n(m);
        const u = (0, l.createElement)(
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
        );
        var h = r(7723);
        const E = (e, t, r) =>
            r
              ? Math.min(e, t) === e
                ? t
                : Math.max(e, r) === e
                ? r
                : e
              : Math.max(e, t) === t
              ? e
              : t,
          g = ({
            columns: e,
            rows: t,
            setAttributes: r,
            alignButtons: n,
            minColumns: o = 1,
            maxColumns: c = 6,
            minRows: a = 1,
            maxRows: i = 6,
          }) =>
            (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(s.RangeControl, {
                label: (0, h.__)('Columns', 'woocommerce'),
                value: e,
                onChange: e => {
                  const t = E(e, o, c);
                  r({ columns: Number.isNaN(t) ? '' : t });
                },
                min: o,
                max: c,
              }),
              (0, l.createElement)(s.RangeControl, {
                label: (0, h.__)('Rows', 'woocommerce'),
                value: t,
                onChange: e => {
                  const t = E(e, a, i);
                  r({ rows: Number.isNaN(t) ? '' : t });
                },
                min: a,
                max: i,
              }),
              (0, l.createElement)(s.ToggleControl, {
                label: (0, h.__)('Align the last block to the bottom', 'woocommerce'),
                help: n
                  ? (0, h.__)('Align the last block to the bottom.', 'woocommerce')
                  : (0, h.__)('The last inner block will follow other content.', 'woocommerce'),
                checked: n,
                onChange: () => r({ alignButtons: !n }),
              }),
            ),
          p = window.wc.wcSettings,
          w = ({ onChange: e, settings: t }) => {
            const { image: r, button: n, price: o, rating: c, title: a } = t,
              i = !1 !== r;
            return (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(s.ToggleControl, {
                label: (0, h.__)('Product image', 'woocommerce'),
                checked: i,
                onChange: () => e({ ...t, image: !i }),
              }),
              (0, l.createElement)(s.ToggleControl, {
                label: (0, h.__)('Product title', 'woocommerce'),
                checked: a,
                onChange: () => e({ ...t, title: !a }),
              }),
              (0, l.createElement)(s.ToggleControl, {
                label: (0, h.__)('Product price', 'woocommerce'),
                checked: o,
                onChange: () => e({ ...t, price: !o }),
              }),
              (0, l.createElement)(s.ToggleControl, {
                label: (0, h.__)('Product rating', 'woocommerce'),
                checked: c,
                onChange: () => e({ ...t, rating: !c }),
              }),
              (0, l.createElement)(s.ToggleControl, {
                label: (0, h.__)('Add to Cart button', 'woocommerce'),
                checked: n,
                onChange: () => e({ ...t, button: !n }),
              }),
            );
          };
        var f = r(9019),
          b = r.n(f),
          y = r(6087);
        function x(e, t, r) {
          const l = new Set(t.map(e => e[r]));
          return e.filter(e => !l.has(e[r]));
        }
        const _ = window.wp.htmlEntities,
          v = {
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
          C = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              l = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const n = ['0'],
              o = (e = {}) => (e.parent ? [...o(l[e.parent]), e.name] : e.name ? [e.name] : []),
              c = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    n.push('' + e.id),
                    { ...e, breadcrumbs: o(l[e.parent]), children: t && t.length ? c(t) : [] }
                  );
                }),
              a = c(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                n.includes(e) || a.push(...c(t || []));
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
                    1 === (o = t.breadcrumbs).length
                      ? o.slice(0, 1).toString()
                      : 2 === o.length
                      ? o.slice(0, 1).toString() + ' › ' + o.slice(-1).toString()
                      : o.slice(0, 1).toString() + ' … ' + o.slice(-1).toString(),
                  )
                : null,
              (0, l.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                k((0, _.decodeEntities)(t.name), r),
              ),
            );
            var o;
          },
          O = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: n = '',
            item: o,
            isSelected: c,
            isSingle: a,
            onSelect: i,
            search: m = '',
            selected: d,
            useExpandedPanelId: u,
            ...h
          }) => {
            var E, g;
            const [p, w] = u,
              f = null != e && void 0 !== o.count && null !== o.count,
              v = !(null === (E = o.breadcrumbs) || void 0 === E || !E.length),
              C = !(null === (g = o.children) || void 0 === g || !g.length),
              O = p === o.id,
              P = b()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': v,
                'has-children': C,
                'has-count': f,
                'is-expanded': O,
                'is-radio-button': a,
              }),
              I = h.name || `search-list-item-${n}`,
              R = `${I}-${o.id}`,
              j = (0, y.useCallback)(() => {
                w(O ? -1 : Number(o.id));
              }, [O, o.id, w]);
            return C
              ? (0, l.createElement)(
                  'div',
                  {
                    className: P,
                    onClick: j,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? j() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  a
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)('input', {
                          type: 'radio',
                          id: R,
                          name: I,
                          value: o.value,
                          onChange: i(o),
                          onClick: e => e.stopPropagation(),
                          checked: c,
                          className: 'woocommerce-search-list__item-input',
                          ...h,
                        }),
                        (0, l.createElement)(N, { item: o, search: m }),
                        f ? (0, l.createElement)(S, { label: e || o.count }) : null,
                      )
                    : (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)(s.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: c,
                          ...(!c && o.children.some(e => d.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: k((0, _.decodeEntities)(o.name), m),
                          onChange: () => {
                            c
                              ? i(x(d, o.children, 'id'))()
                              : i(
                                  (function(e, t, r) {
                                    const l = x(t, e, 'id');
                                    return [...e, ...l];
                                  })(d, o.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        f ? (0, l.createElement)(S, { label: e || o.count }) : null,
                      ),
                )
              : (0, l.createElement)(
                  'label',
                  { htmlFor: R, className: P },
                  a
                    ? (0, l.createElement)(
                        l.Fragment,
                        null,
                        (0, l.createElement)('input', {
                          ...h,
                          type: 'radio',
                          id: R,
                          name: I,
                          value: o.value,
                          onChange: i(o),
                          checked: c,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, l.createElement)(N, { item: o, search: m }),
                      )
                    : (0, l.createElement)(s.CheckboxControl, {
                        ...h,
                        id: R,
                        name: I,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, _.decodeEntities)(o.value),
                        label: k((0, _.decodeEntities)(o.name), m),
                        onChange: i(o),
                        checked: c,
                      }),
                  f ? (0, l.createElement)(S, { label: e || o.count }) : null,
                );
          },
          P = O;
        var I = r(2478),
          R = r(9491),
          j = r(2370);
        r(6636);
        const B = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: o,
            screenReaderLabel: c,
            className: a = '',
          }) => {
            const [i, m] = (0, y.useState)(!1),
              d = (0, R.useInstanceId)(B);
            if (((c = c || t), !t)) return null;
            t = (0, _.decodeEntities)(t);
            const u = b()('woocommerce-tag', a, { 'has-remove': !!o }),
              E = `woocommerce-tag__label-${d}`,
              g = (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)('span', { className: 'screen-reader-text' }, c),
                (0, l.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, l.createElement)(
              'span',
              { className: u },
              r
                ? (0, l.createElement)(
                    s.Button,
                    { className: 'woocommerce-tag__text', id: E, onClick: () => m(!0) },
                    g,
                  )
                : (0, l.createElement)('span', { className: 'woocommerce-tag__text', id: E }, g),
              r && i && (0, l.createElement)(s.Popover, { onClose: () => m(!1) }, r),
              o &&
                (0, l.createElement)(
                  s.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: o(e),
                    label: (0, h.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, h.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': E,
                  },
                  (0, l.createElement)(n.A, {
                    icon: j.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          $ = B;
        r(8137);
        const A = e => (0, l.createElement)(P, { ...e }),
          T = e => {
            const {
                list: t,
                selected: r,
                renderItem: n,
                depth: o = 0,
                onSelect: c,
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
                          onSelect: c,
                          isSingle: i,
                          selected: r,
                          search: s,
                          depth: o,
                          useExpandedPanelId: m,
                          controlId: a,
                        }),
                      ),
                      g ? (0, l.createElement)(T, { ...e, list: t.children, depth: o + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          F = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: n,
            onChange: o,
            onRemove: c,
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
                      s.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => o([]),
                        'aria-label': n.clear,
                      },
                      (0, h.__)('Clear all', 'woocommerce'),
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
                        (0, l.createElement)($, { label: e.name, id: e.id, remove: c }),
                      ),
                    ),
                  )
                : null,
            );
          },
          M = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: o,
            useExpandedPanelId: c,
            ...a
          }) => {
            const { messages: i, renderItem: s, selected: m, isSingle: d } = a,
              u = s || A;
            return 0 === e.length
              ? (0, l.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, l.createElement)(n.A, { icon: I.A, role: 'img' }),
                  ),
                  (0, l.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, h.sprintf)(i.noResults, t) : i.noItems,
                  ),
                )
              : (0, l.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, l.createElement)(T, {
                    useExpandedPanelId: c,
                    list: e,
                    selected: m,
                    renderItem: u,
                    onSelect: r,
                    instanceId: o,
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
                isLoading: o,
                isSingle: c,
                list: a,
                messages: i = v,
                onChange: m,
                onSearch: d,
                selected: u,
                type: E = 'text',
                debouncedSpeak: g,
              } = e,
              [p, w] = (0, y.useState)(''),
              f = (0, y.useState)(-1),
              x = (0, R.useInstanceId)(L),
              _ = (0, y.useMemo)(() => ({ ...v, ...i }), [i]),
              k = (0, y.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? C(e) : e;
                    const l = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      n = e.map(e => !!l.test(e.name) && e).filter(Boolean);
                    return r ? C(n, e) : n;
                  })(a, p, n),
                [a, p, n],
              );
            (0, y.useEffect)(() => {
              g && g(_.updated);
            }, [g, _]),
              (0, y.useEffect)(() => {
                'function' == typeof d && d(p);
              }, [p, d]);
            const S = (0, y.useCallback)(
                e => () => {
                  c && m([]);
                  const t = u.findIndex(({ id: t }) => t === e);
                  m([...u.slice(0, t), ...u.slice(t + 1)]);
                },
                [c, u, m],
              ),
              N = (0, y.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? m(e)
                    : -1 === u.findIndex(({ id: t }) => t === e.id)
                    ? m(c ? [e] : [...u, e])
                    : S(e.id)();
                },
                [c, S, m, u],
              ),
              O = (0, y.useCallback)(
                e => {
                  const [t] = u.filter(t => !e.find(e => t.id === e.id));
                  S(t.id)();
                },
                [S, u],
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
              'text' === E && (0, l.createElement)(F, { ...e, onRemove: S, messages: _ }),
              (0, l.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === E
                  ? (0, l.createElement)(s.TextControl, {
                      label: _.search,
                      type: 'search',
                      value: p,
                      onChange: e => w(e),
                    })
                  : (0, l.createElement)(s.FormTokenField, {
                      disabled: o,
                      label: _.search,
                      onChange: O,
                      onInputChange: e => w(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: o
                        ? [(0, h.__)('Loading…', 'woocommerce')]
                        : u.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              o
                ? (0, l.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, l.createElement)(s.Spinner, null),
                  )
                : (0, l.createElement)(M, {
                    ...e,
                    search: p,
                    filteredList: k,
                    messages: _,
                    onSelect: N,
                    instanceId: x,
                    useExpandedPanelId: f,
                  }),
            );
          },
          H = ((0, s.withSpokenMessages)(L), window.wp.url),
          V = window.wp.apiFetch;
        var D = r.n(V);
        const J = window.wp.escapeHtml,
          W = ({ error: e }) =>
            (0, l.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, l.createElement)(
                        'span',
                        null,
                        (0, h.__)('The following error was returned', 'woocommerce'),
                        (0, l.createElement)('br', null),
                        (0, l.createElement)('code', null, (0, J.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, l.createElement)(
                        'span',
                        null,
                        (0, h.__)('The following error was returned from the API', 'woocommerce'),
                        (0, l.createElement)('br', null),
                        (0, l.createElement)('code', null, (0, J.escapeHTML)(e)),
                      )
                    : e
                  : (0, h.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          z = e => {
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
            ((q = ({
              categories: e = [],
              error: t = null,
              isLoading: r = !1,
              onChange: n,
              onOperatorChange: o,
              operator: c = 'any',
              selected: a,
              isCompact: i = !1,
              isSingle: m = !1,
              showReviewCount: d,
            }) => {
              const u = {
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
              if (t) return (0, l.createElement)(W, { error: t });
              const E = e.map(z);
              return (0, l.createElement)(
                l.Fragment,
                null,
                (0, l.createElement)(L, {
                  className: 'woocommerce-product-categories',
                  list: E,
                  isLoading: r,
                  selected: E.filter(({ id: e }) => a.includes(Number(e))),
                  onChange: n,
                  renderItem: e => {
                    var t, r, n, o, c, a, i, s;
                    const { item: m, search: u, depth: E = 0 } = e,
                      g = m.breadcrumbs.length ? `${m.breadcrumbs.join(', ')}, ${m.name}` : m.name,
                      p = d
                        ? (0,
                          h.sprintf) /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */(
                            /* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
                            (0, h._n)(
                              '%1$s, has %2$d review',
                              '%1$s, has %2$d reviews',
                              (null === (t = m.details) || void 0 === t
                                ? void 0
                                : t.review_count) || 0,
                              'woocommerce',
                            ),
                            g,
                            (null === (r = m.details) || void 0 === r ? void 0 : r.review_count) ||
                              0,
                          )
                        : (0,
                          h.sprintf) /* translators: %1$s is the item name, %2$d is the count of products for the item. */(
                            /* translators: %1$s is the item name, %2$d is the count of products for the item. */
                            (0, h._n)(
                              '%1$s, has %2$d product',
                              '%1$s, has %2$d products',
                              (null === (n = m.details) || void 0 === n ? void 0 : n.count) || 0,
                              'woocommerce',
                            ),
                            g,
                            (null === (o = m.details) || void 0 === o ? void 0 : o.count) || 0,
                          ),
                      w = d
                        ? (0, h.sprintf) /* translators: %d is the count of reviews. */(
                            /* translators: %d is the count of reviews. */
                            (0, h._n)(
                              '%d review',
                              '%d reviews',
                              (null === (c = m.details) || void 0 === c
                                ? void 0
                                : c.review_count) || 0,
                              'woocommerce',
                            ),
                            (null === (a = m.details) || void 0 === a ? void 0 : a.review_count) ||
                              0,
                          )
                        : (0, h.sprintf) /* translators: %d is the count of products. */(
                            /* translators: %d is the count of products. */
                            (0, h._n)(
                              '%d product',
                              '%d products',
                              (null === (i = m.details) || void 0 === i ? void 0 : i.count) || 0,
                              'woocommerce',
                            ),
                            (null === (s = m.details) || void 0 === s ? void 0 : s.count) || 0,
                          );
                    return (0, l.createElement)(O, {
                      className: b()('woocommerce-product-categories__item', 'has-count', {
                        'is-searching': u.length > 0,
                        'is-skip-level': 0 === E && 0 !== m.parent,
                      }),
                      ...e,
                      countLabel: w,
                      'aria-label': p,
                    });
                  },
                  messages: u,
                  isCompact: i,
                  isHierarchical: !0,
                  isSingle: m,
                }),
                !!o &&
                  (0, l.createElement)(
                    'div',
                    { hidden: a.length < 2 },
                    (0, l.createElement)(s.SelectControl, {
                      className: 'woocommerce-product-categories__operator',
                      label: (0, h.__)('Display products matching', 'woocommerce'),
                      help: (0, h.__)(
                        'Pick at least two categories to use this setting.',
                        'woocommerce',
                      ),
                      value: c,
                      onChange: o,
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
              const [r, n] = (0, y.useState)(!0),
                [o, c] = (0, y.useState)(null),
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
                  c(t), n(!1);
                },
                m = (0, y.useRef)(e);
              return (
                (0, y.useEffect)(() => {
                  var e;
                  ((e = { selected: m.current }),
                  D()({
                    path: (0, H.addQueryArgs)('wc/store/v1/products/categories', {
                      per_page: 0,
                      ...e,
                    }),
                  }))
                    .then(e => {
                      i(e), n(!1);
                    })
                    .catch(s);
                }, [m]),
                (0, l.createElement)(q, {
                  ...t,
                  selected: e,
                  error: o,
                  categories: a,
                  isLoading: r,
                })
              );
            }),
          K = e => {
            const { attributes: t, setAttributes: r } = e,
              {
                categories: n,
                catOperator: o,
                columns: c,
                contentVisibility: a,
                rows: m,
                alignButtons: d,
              } = t;
            return (0, l.createElement)(
              i.InspectorControls,
              { key: 'inspector' },
              (0, l.createElement)(
                s.PanelBody,
                { title: (0, h.__)('Layout', 'woocommerce'), initialOpen: !0 },
                (0, l.createElement)(g, {
                  columns: c,
                  rows: m,
                  alignButtons: d,
                  setAttributes: r,
                  minColumns: (0, p.getSetting)('minColumns', 1),
                  maxColumns: (0, p.getSetting)('maxColumns', 6),
                  minRows: (0, p.getSetting)('minRows', 1),
                  maxRows: (0, p.getSetting)('maxRows', 6),
                }),
              ),
              (0, l.createElement)(
                s.PanelBody,
                { title: (0, h.__)('Content', 'woocommerce'), initialOpen: !0 },
                (0, l.createElement)(w, {
                  settings: a,
                  onChange: e => r({ contentVisibility: e }),
                }),
              ),
              (0, l.createElement)(
                s.PanelBody,
                { title: (0, h.__)('Filter by Product Category', 'woocommerce'), initialOpen: !1 },
                (0, l.createElement)(G, {
                  selected: n,
                  onChange: (e = []) => {
                    const t = e.map(({ id: e }) => e);
                    r({ categories: t });
                  },
                  operator: o,
                  onOperatorChange: (e = 'any') => r({ catOperator: e }),
                }),
              ),
            );
          },
          Q = e => {
            const { attributes: t, name: r } = e;
            return t.isPreview
              ? u
              : (0, l.createElement)(
                  'div',
                  { className: 'wc-block-product-best-sellers' },
                  (0, l.createElement)(K, { ...e }),
                  (0, l.createElement)(
                    s.Disabled,
                    null,
                    (0, l.createElement)(d(), { block: r, attributes: t }),
                  ),
                );
          },
          Y = {
            columns: { type: 'number', default: (0, p.getSetting)('defaultColumns', 3) },
            rows: { type: 'number', default: (0, p.getSetting)('defaultRows', 3) },
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
              default: Object.keys((0, p.getSetting)('stockStatusOptions', [])),
            },
          };
        var q;
        (0, c.registerBlockType)(a, {
          icon: {
            src: (0, l.createElement)(n.A, {
              icon: o.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: { ...Y, ...a.attributes },
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
                ].filter(e => 'woocommerce/product-best-sellers' !== e),
                transform: e => (0, c.createBlock)('woocommerce/product-best-sellers', e),
              },
            ],
          },
          edit: e => {
            const t = (0, i.useBlockProps)();
            return (0, l.createElement)('div', { ...t }, (0, l.createElement)(Q, { ...e }));
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
  function o(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var r = (n[e] = { exports: {} });
    return l[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = l),
    (e = []),
    (o.O = (t, r, l, n) => {
      if (!r) {
        var c = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, l, n] = e[m], a = !0, i = 0; i < r.length; i++)
            (!1 & n || c >= n) && Object.keys(o.O).every(e => o.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((a = !1), n < c && (c = n));
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
    (o.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (o.t = function(e, l) {
      if ((1 & l && (e = this(e)), 8 & l)) return e;
      if ('object' == typeof e && e) {
        if (4 & l && e.__esModule) return e;
        if (16 & l && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      o.r(n);
      var c = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & l && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (c[t] = () => e[t]));
      return (c.default = () => e), o.d(n, c), n;
    }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.j = 2272),
    (() => {
      var e = { 2272: 0 };
      o.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var l,
            n,
            [c, a, i] = r,
            s = 0;
          if (c.some(t => 0 !== e[t])) {
            for (l in a) o.o(a, l) && (o.m[l] = a[l]);
            if (i) var m = i(o);
          }
          for (t && t(r); s < c.length; s++) (n = c[s]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return o.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var c = o.O(void 0, [94], () => o(9081));
  (c = o.O(c)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-best-sellers'] = c);
})();
