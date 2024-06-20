(() => {
  var e,
    t,
    r,
    o,
    c,
    n = {
      1281: (e, t, r) => {
        'use strict';
        r.d(t, { e: () => o });
        let o = (function(e) {
          return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
        })({});
      },
      1534: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(4997),
          c = r(1609),
          n = r(7104),
          a = r(2466);
        const s = window.wc.wcBlocksRegistry;
        var i = r(6087),
          l = r(812);
        (r.p = l.XK),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-price',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(2388)]).then(r.bind(r, 2519))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-image',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(4232)]).then(r.bind(r, 8110))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-title',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(2105)]).then(r.bind(r, 6143))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-rating',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(462)]).then(r.bind(r, 8757))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-rating-stars',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(8578)]).then(r.bind(r, 9549))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-rating-counter',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(8553)]).then(r.bind(r, 8614))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-average-rating',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(8647)]).then(r.bind(r, 1579))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-button',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(7409)]).then(r.bind(r, 4078))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-summary',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(3895)]).then(r.bind(r, 3326))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-sale-badge',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(4442)]).then(r.bind(r, 6809))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-sku',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(2724)]).then(r.bind(r, 3975))),
          }),
          (0, s.registerBlockComponent)({
            blockName: 'woocommerce/product-stock-indicator',
            component: (0, i.lazy)(() => Promise.all([r.e(94), r.e(345)]).then(r.bind(r, 2686))),
          });
        const d = JSON.parse(
          '{"name":"woocommerce/single-product","version":"1.0.0","icon":"info","title":"Single Product","description":"Display a single product.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"align":["wide","full"]},"attributes":{"isPreview":{"type":"boolean","default":false},"productId":{"type":"number"}},"example":{"attributes":{"isPreview":true}},"usesContext":["postId","postType","queryId"],"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}',
        );
        var m = r(6427),
          u = r(7723),
          p = r(4478);
        const g = (0, u.__)('Product Title', 'woocommerce');
        function h(
          e,
          { blockDescription: t, blockIcon: r, blockTitle: c, variationName: n, scope: a },
        ) {
          (0, o.registerBlockVariation)(e, {
            description: t,
            name: n,
            title: c,
            isActive: e => e.__woocommerceNamespace === n,
            icon: { src: r },
            attributes: { __woocommerceNamespace: n },
            scope: a,
          });
        }
        (0, c.createElement)(n.A, {
          icon: p.A,
          className: 'wc-block-editor-components-block-icon',
        });
        const w = 'woocommerce/product-query/product-title';
        h('core/post-title', {
          blockDescription: (0, u.__)('Display the title of a product.', 'woocommerce'),
          blockIcon: (0, c.createElement)(m.Icon, { icon: p.A }),
          blockTitle: g,
          variationName: w,
          scope: ['block'],
        });
        var b = r(6465);
        const v = (0, u.__)('Product Summary', 'woocommerce'),
          E =
            ((0, c.createElement)(n.A, {
              icon: b.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            'woocommerce/product-query/product-summary');
        h('core/post-excerpt', {
          blockDescription: (0, u.__)(
            'Display a short description about a product.',
            'woocommerce',
          ),
          blockIcon: (0, c.createElement)(m.Icon, { icon: b.A }),
          blockTitle: v,
          variationName: E,
          scope: ['block'],
        });
        var _ = r(1281);
        const k = (0, c.createElement)(n.A, {
            icon: a.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          f = [
            [
              'core/columns',
              {},
              [
                [
                  'core/column',
                  {},
                  [
                    [
                      'woocommerce/product-image',
                      {
                        showSaleBadge: !1,
                        isDescendentOfSingleProductBlock: !0,
                        imageSizing: _.e.SINGLE,
                      },
                    ],
                  ],
                ],
                [
                  'core/column',
                  {},
                  [
                    ['core/post-title', { headingLevel: 2, isLink: !0, __woocommerceNamespace: w }],
                    ['woocommerce/product-rating', { isDescendentOfSingleProductBlock: !0 }],
                    ['woocommerce/product-price', { isDescendentOfSingleProductBlock: !0 }],
                    ['core/post-excerpt', { __woocommerceNamespace: E }],
                    ['woocommerce/add-to-cart-form'],
                    ['woocommerce/product-meta'],
                  ],
                ],
              ],
            ],
          ],
          y = [
            'core/columns',
            'core/column',
            'core/post-title',
            'core/post-excerpt',
            'woocommerce/add-to-cart-form',
            'woocommerce/product-meta',
            ...Object.keys(((S = d.name), (0, s.getRegisteredBlockComponents)(S))),
          ];
        var S,
          P = r(2294),
          N = r(9491),
          C = r(3832);
        const x = window.wp.apiFetch;
        var I = r.n(x),
          A = r(5703);
        const O = ({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
            const o = (({ selected: e = [], search: t = '', queryArgs: r = {} }) => {
              const o = l.r7.productCount > 100,
                c = {
                  per_page: o ? 100 : 0,
                  catalog_visibility: 'any',
                  search: t,
                  orderby: 'title',
                  order: 'asc',
                },
                n = [(0, C.addQueryArgs)('/wc/store/v1/products', { ...c, ...r })];
              return (
                o &&
                  e.length &&
                  n.push(
                    (0, C.addQueryArgs)('/wc/store/v1/products', {
                      catalog_visibility: 'any',
                      include: e,
                      per_page: 0,
                    }),
                  ),
                n
              );
            })({ selected: e, search: t, queryArgs: r });
            return Promise.all(o.map(e => I()({ path: e })))
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
          },
          B = async e => {
            if (!('json' in e)) return { message: e.message, type: e.type || 'general' };
            try {
              const t = await e.json();
              return { message: t.message, type: t.type || 'api' };
            } catch (e) {
              return { message: e.message, type: 'general' };
            }
          },
          L = (0, N.createHigherOrderComponent)(
            e =>
              class extends i.Component {
                constructor(...e) {
                  super(...e),
                    (0, P.A)(this, 'state', {
                      error: null,
                      loading: !1,
                      product:
                        'preview' === this.props.attributes.productId
                          ? this.props.attributes.previewProduct
                          : null,
                    }),
                    (0, P.A)(this, 'loadProduct', () => {
                      const { productId: e } = this.props.attributes;
                      'preview' !== e &&
                        (e
                          ? (this.setState({ loading: !0 }),
                            (e => I()({ path: `/wc/store/v1/products/${e}` }))(e)
                              .then(e => {
                                this.setState({ product: e, loading: !1, error: null });
                              })
                              .catch(async e => {
                                const t = await B(e);
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
                  const { error: t, loading: r, product: o } = this.state;
                  return (0, c.createElement)(e, {
                    ...this.props,
                    error: t,
                    getProduct: this.loadProduct,
                    isLoading: r,
                    product: o,
                  });
                }
              },
            'withProduct',
          ),
          T = ({
            imageUrl: e = `${l.sW}/block-error.svg`,
            header: t = (0, u.__)('Oops!', 'woocommerce'),
            text: r = (0, u.__)('There was an error loading the content.', 'woocommerce'),
            errorMessage: o,
            errorMessagePrefix: n = (0, u.__)('Error:', 'woocommerce'),
            button: a,
            showErrorBlock: s = !0,
          }) =>
            s
              ? (0, c.createElement)(
                  'div',
                  { className: 'wc-block-error wc-block-components-error' },
                  e &&
                    (0, c.createElement)('img', {
                      className: 'wc-block-error__image wc-block-components-error__image',
                      src: e,
                      alt: '',
                    }),
                  (0, c.createElement)(
                    'div',
                    { className: 'wc-block-error__content wc-block-components-error__content' },
                    t &&
                      (0, c.createElement)(
                        'p',
                        { className: 'wc-block-error__header wc-block-components-error__header' },
                        t,
                      ),
                    r &&
                      (0, c.createElement)(
                        'p',
                        { className: 'wc-block-error__text wc-block-components-error__text' },
                        r,
                      ),
                    o &&
                      (0, c.createElement)(
                        'p',
                        { className: 'wc-block-error__message wc-block-components-error__message' },
                        n ? n + ' ' : '',
                        o,
                      ),
                    a &&
                      (0, c.createElement)(
                        'p',
                        { className: 'wc-block-error__button wc-block-components-error__button' },
                        a,
                      ),
                  ),
                )
              : null;
        r(9407);
        class j extends i.Component {
          constructor(...e) {
            super(...e), (0, P.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, c.createElement)(
                    c.Fragment,
                    null,
                    (0, c.createElement)('strong', null, e.status),
                    ': ',
                    e.statusText,
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: t,
                showErrorMessage: r = !0,
                showErrorBlock: o = !0,
                text: n,
                errorMessagePrefix: a,
                renderError: s,
                button: i,
              } = this.props,
              { errorMessage: l, hasError: d } = this.state;
            return d
              ? 'function' == typeof s
                ? s({ errorMessage: l })
                : (0, c.createElement)(T, {
                    showErrorBlock: o,
                    errorMessage: r ? l : null,
                    header: e,
                    imageUrl: t,
                    text: n,
                    errorMessagePrefix: a,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const M = j;
        var R = r(4133);
        const $ = window.wp.blockEditor;
        var D = r(2796);
        const F = e => {
          const t = ((0, D.useProductDataContext)().product || {}).id || e.productId || 0;
          return t && 1 !== t
            ? (0, c.createElement)(
                $.InspectorControls,
                null,
                (0, c.createElement)(
                  'div',
                  { className: 'wc-block-single-product__edit-card' },
                  (0, c.createElement)(
                    'div',
                    { className: 'wc-block-single-product__edit-card-title' },
                    (0, c.createElement)(
                      'a',
                      {
                        href: `${A.ADMIN_URL}post.php?post=${t}&action=edit`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      },
                      (0, u.__)("Edit this product's details", 'woocommerce'),
                      (0, c.createElement)(n.A, { icon: R.A, size: 16 }),
                    ),
                  ),
                  (0, c.createElement)(
                    'div',
                    { className: 'wc-block-single-product__edit-card-description' },
                    (0, u.__)(
                      'Edit details such as title, price, description and more.',
                      'woocommerce',
                    ),
                  ),
                ),
              )
            : null;
        };
        var z = r(3588),
          V = r(9019),
          G = r.n(V);
        const H = window.wp.escapeHtml,
          U = ({ error: e }) =>
            (0, c.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, c.createElement)(
                        'span',
                        null,
                        (0, u.__)('The following error was returned', 'woocommerce'),
                        (0, c.createElement)('br', null),
                        (0, c.createElement)('code', null, (0, H.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, c.createElement)(
                        'span',
                        null,
                        (0, u.__)('The following error was returned from the API', 'woocommerce'),
                        (0, c.createElement)('br', null),
                        (0, c.createElement)('code', null, (0, H.escapeHTML)(e)),
                      )
                    : e
                  : (0, u.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            );
        r(4974);
        const q = ({ className: e = '', error: t, isLoading: r = !1, onRetry: o }) =>
            (0, c.createElement)(
              m.Placeholder,
              {
                icon: (0, c.createElement)(n.A, { icon: z.A }),
                label: (0, u.__)('Sorry, an error occurred', 'woocommerce'),
                className: G()('wc-block-api-error', e),
              },
              (0, c.createElement)(U, { error: t }),
              o &&
                (0, c.createElement)(
                  c.Fragment,
                  null,
                  r
                    ? (0, c.createElement)(m.Spinner, null)
                    : (0, c.createElement)(
                        m.Button,
                        { variant: 'secondary', onClick: o },
                        (0, u.__)('Retry', 'woocommerce'),
                      ),
                ),
            ),
          W = window.wc.data;
        var K = r(7143),
          J = (r(8625), r(3993));
        function Q(e, t, r) {
          const o = new Set(t.map(e => e[r]));
          return e.filter(e => !o.has(e[r]));
        }
        var X = r(8537);
        const Y = {
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
          Z = (e, t = e) => {
            const r = e.reduce((e, t) => {
                const r = t.parent || 0;
                return e[r] || (e[r] = []), e[r].push(t), e;
              }, {}),
              o = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const c = ['0'],
              n = (e = {}) => (e.parent ? [...n(o[e.parent]), e.name] : e.name ? [e.name] : []),
              a = e =>
                e.map(e => {
                  const t = r[e.id];
                  return (
                    c.push('' + e.id),
                    { ...e, breadcrumbs: n(o[e.parent]), children: t && t.length ? a(t) : [] }
                  );
                }),
              s = a(r[0] || []);
            return (
              Object.entries(r).forEach(([e, t]) => {
                c.includes(e) || s.push(...a(t || []));
              }),
              s
            );
          },
          ee = (e, t) => {
            if (!t) return e;
            const r = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(r)
              .map((e, t) =>
                r.test(e)
                  ? (0, c.createElement)('strong', { key: t }, e)
                  : (0, c.createElement)(i.Fragment, { key: t }, e),
              );
          },
          te = ({ label: e }) =>
            (0, c.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          re = e => {
            const { item: t, search: r } = e,
              o = t.breadcrumbs && t.breadcrumbs.length;
            return (0, c.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              o
                ? (0, c.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (n = t.breadcrumbs).length
                      ? n.slice(0, 1).toString()
                      : 2 === n.length
                      ? n.slice(0, 1).toString() + ' › ' + n.slice(-1).toString()
                      : n.slice(0, 1).toString() + ' … ' + n.slice(-1).toString(),
                  )
                : null,
              (0, c.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                ee((0, X.decodeEntities)(t.name), r),
              ),
            );
            var n;
          },
          oe = ({
            countLabel: e,
            className: t,
            depth: r = 0,
            controlId: o = '',
            item: n,
            isSelected: a,
            isSingle: s,
            onSelect: l,
            search: d = '',
            selected: u,
            useExpandedPanelId: p,
            ...g
          }) => {
            var h, w;
            const [b, v] = p,
              E = null != e && void 0 !== n.count && null !== n.count,
              _ = !(null === (h = n.breadcrumbs) || void 0 === h || !h.length),
              k = !(null === (w = n.children) || void 0 === w || !w.length),
              f = b === n.id,
              y = G()(['woocommerce-search-list__item', `depth-${r}`, t], {
                'has-breadcrumbs': _,
                'has-children': k,
                'has-count': E,
                'is-expanded': f,
                'is-radio-button': s,
              }),
              S = g.name || `search-list-item-${o}`,
              P = `${S}-${n.id}`,
              N = (0, i.useCallback)(() => {
                v(f ? -1 : Number(n.id));
              }, [f, n.id, v]);
            return k
              ? (0, c.createElement)(
                  'div',
                  {
                    className: y,
                    onClick: N,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? N() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  s
                    ? (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)('input', {
                          type: 'radio',
                          id: P,
                          name: S,
                          value: n.value,
                          onChange: l(n),
                          onClick: e => e.stopPropagation(),
                          checked: a,
                          className: 'woocommerce-search-list__item-input',
                          ...g,
                        }),
                        (0, c.createElement)(re, { item: n, search: d }),
                        E ? (0, c.createElement)(te, { label: e || n.count }) : null,
                      )
                    : (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)(m.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: a,
                          ...(!a && n.children.some(e => u.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: ee((0, X.decodeEntities)(n.name), d),
                          onChange: () => {
                            a
                              ? l(Q(u, n.children, 'id'))()
                              : l(
                                  (function(e, t, r) {
                                    const o = Q(t, e, 'id');
                                    return [...e, ...o];
                                  })(u, n.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        E ? (0, c.createElement)(te, { label: e || n.count }) : null,
                      ),
                )
              : (0, c.createElement)(
                  'label',
                  { htmlFor: P, className: y },
                  s
                    ? (0, c.createElement)(
                        c.Fragment,
                        null,
                        (0, c.createElement)('input', {
                          ...g,
                          type: 'radio',
                          id: P,
                          name: S,
                          value: n.value,
                          onChange: l(n),
                          checked: a,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, c.createElement)(re, { item: n, search: d }),
                      )
                    : (0, c.createElement)(m.CheckboxControl, {
                        ...g,
                        id: P,
                        name: S,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, X.decodeEntities)(n.value),
                        label: ee((0, X.decodeEntities)(n.name), d),
                        onChange: l(n),
                        checked: a,
                      }),
                  E ? (0, c.createElement)(te, { label: e || n.count }) : null,
                );
          },
          ce = oe;
        var ne = r(2478),
          ae = r(2370);
        r(6636);
        const se = ({
            id: e,
            label: t,
            popoverContents: r,
            remove: o,
            screenReaderLabel: a,
            className: s = '',
          }) => {
            const [l, d] = (0, i.useState)(!1),
              p = (0, N.useInstanceId)(se);
            if (((a = a || t), !t)) return null;
            t = (0, X.decodeEntities)(t);
            const g = G()('woocommerce-tag', s, { 'has-remove': !!o }),
              h = `woocommerce-tag__label-${p}`,
              w = (0, c.createElement)(
                c.Fragment,
                null,
                (0, c.createElement)('span', { className: 'screen-reader-text' }, a),
                (0, c.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, c.createElement)(
              'span',
              { className: g },
              r
                ? (0, c.createElement)(
                    m.Button,
                    { className: 'woocommerce-tag__text', id: h, onClick: () => d(!0) },
                    w,
                  )
                : (0, c.createElement)('span', { className: 'woocommerce-tag__text', id: h }, w),
              r && l && (0, c.createElement)(m.Popover, { onClose: () => d(!1) }, r),
              o &&
                (0, c.createElement)(
                  m.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: o(e),
                    label: (0, u.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, u.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': h,
                  },
                  (0, c.createElement)(n.A, {
                    icon: ae.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          ie = se;
        r(8137);
        const le = e => (0, c.createElement)(ce, { ...e }),
          de = e => {
            const {
                list: t,
                selected: r,
                renderItem: o,
                depth: n = 0,
                onSelect: a,
                instanceId: s,
                isSingle: l,
                search: d,
                useExpandedPanelId: m,
              } = e,
              [u] = m;
            return t
              ? (0, c.createElement)(
                  i.Fragment,
                  null,
                  t.map(t => {
                    var p, g;
                    const h =
                        null !== (p = t.children) && void 0 !== p && p.length && !l
                          ? t.children.every(({ id: e }) => r.find(t => t.id === e))
                          : !!r.find(({ id: e }) => e === t.id),
                      w =
                        (null === (g = t.children) || void 0 === g ? void 0 : g.length) &&
                        u === t.id;
                    return (0, c.createElement)(
                      i.Fragment,
                      { key: t.id },
                      (0, c.createElement)(
                        'li',
                        null,
                        o({
                          item: t,
                          isSelected: h,
                          onSelect: a,
                          isSingle: l,
                          selected: r,
                          search: d,
                          depth: n,
                          useExpandedPanelId: m,
                          controlId: s,
                        }),
                      ),
                      w ? (0, c.createElement)(de, { ...e, list: t.children, depth: n + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          me = ({
            isLoading: e,
            isSingle: t,
            selected: r,
            messages: o,
            onChange: n,
            onRemove: a,
          }) => {
            if (e || t || !r) return null;
            const s = r.length;
            return (0, c.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, c.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, c.createElement)('strong', null, o.selected(s)),
                s > 0
                  ? (0, c.createElement)(
                      m.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => n([]),
                        'aria-label': o.clear,
                      },
                      (0, u.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              s > 0
                ? (0, c.createElement)(
                    'ul',
                    null,
                    r.map((e, t) =>
                      (0, c.createElement)(
                        'li',
                        { key: t },
                        (0, c.createElement)(ie, { label: e.name, id: e.id, remove: a }),
                      ),
                    ),
                  )
                : null,
            );
          },
          ue = ({
            filteredList: e,
            search: t,
            onSelect: r,
            instanceId: o,
            useExpandedPanelId: a,
            ...s
          }) => {
            const { messages: i, renderItem: l, selected: d, isSingle: m } = s,
              p = l || le;
            return 0 === e.length
              ? (0, c.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, c.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, c.createElement)(n.A, { icon: ne.A, role: 'img' }),
                  ),
                  (0, c.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, u.sprintf)(i.noResults, t) : i.noItems,
                  ),
                )
              : (0, c.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, c.createElement)(de, {
                    useExpandedPanelId: a,
                    list: e,
                    selected: d,
                    renderItem: p,
                    onSelect: r,
                    instanceId: o,
                    isSingle: m,
                    search: t,
                  }),
                );
          },
          pe = e => {
            const {
                className: t = '',
                isCompact: r,
                isHierarchical: o,
                isLoading: n,
                isSingle: a,
                list: s,
                messages: l = Y,
                onChange: d,
                onSearch: p,
                selected: g,
                type: h = 'text',
                debouncedSpeak: w,
              } = e,
              [b, v] = (0, i.useState)(''),
              E = (0, i.useState)(-1),
              _ = (0, N.useInstanceId)(pe),
              k = (0, i.useMemo)(() => ({ ...Y, ...l }), [l]),
              f = (0, i.useMemo)(
                () =>
                  ((e, t, r) => {
                    if (!t) return r ? Z(e) : e;
                    const o = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      c = e.map(e => !!o.test(e.name) && e).filter(Boolean);
                    return r ? Z(c, e) : c;
                  })(s, b, o),
                [s, b, o],
              );
            (0, i.useEffect)(() => {
              w && w(k.updated);
            }, [w, k]),
              (0, i.useEffect)(() => {
                'function' == typeof p && p(b);
              }, [b, p]);
            const y = (0, i.useCallback)(
                e => () => {
                  a && d([]);
                  const t = g.findIndex(({ id: t }) => t === e);
                  d([...g.slice(0, t), ...g.slice(t + 1)]);
                },
                [a, g, d],
              ),
              S = (0, i.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? d(e)
                    : -1 === g.findIndex(({ id: t }) => t === e.id)
                    ? d(a ? [e] : [...g, e])
                    : y(e.id)();
                },
                [a, y, d, g],
              ),
              P = (0, i.useCallback)(
                e => {
                  const [t] = g.filter(t => !e.find(e => t.id === e.id));
                  y(t.id)();
                },
                [y, g],
              );
            return (0, c.createElement)(
              'div',
              {
                className: G()('woocommerce-search-list', t, {
                  'is-compact': r,
                  'is-loading': n,
                  'is-token': 'token' === h,
                }),
              },
              'text' === h && (0, c.createElement)(me, { ...e, onRemove: y, messages: k }),
              (0, c.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === h
                  ? (0, c.createElement)(m.TextControl, {
                      label: k.search,
                      type: 'search',
                      value: b,
                      onChange: e => v(e),
                    })
                  : (0, c.createElement)(m.FormTokenField, {
                      disabled: n,
                      label: k.search,
                      onChange: P,
                      onInputChange: e => v(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: n
                        ? [(0, u.__)('Loading…', 'woocommerce')]
                        : g.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              n
                ? (0, c.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, c.createElement)(m.Spinner, null),
                  )
                : (0, c.createElement)(ue, {
                    ...e,
                    search: b,
                    filteredList: f,
                    messages: k,
                    onSelect: S,
                    instanceId: _,
                    useExpandedPanelId: E,
                  }),
            );
          },
          ge =
            ((0, m.withSpokenMessages)(pe),
            e => t => {
              let { selected: r } = t;
              r = void 0 === r ? null : r;
              const o = null === r;
              return Array.isArray(r)
                ? (0, c.createElement)(e, { ...t })
                : (0, c.createElement)(e, { ...t, selected: o ? [] : [r] });
            });
        var he = r(4717);
        var we = r(923),
          be = r.n(we);
        const ve = (0, N.createHigherOrderComponent)(e => {
            class t extends i.Component {
              constructor(...e) {
                super(...e),
                  (0, P.A)(this, 'state', { error: null, loading: !1, variations: {} }),
                  (0, P.A)(this, 'prevSelectedItem', void 0),
                  (0, P.A)(this, 'loadVariations', () => {
                    const { products: e } = this.props,
                      { loading: t, variations: r } = this.state;
                    if (t) return;
                    const o = this.getExpandedProduct();
                    if (!o || r[o]) return;
                    const c = e.find(e => e.id === o);
                    var n;
                    null != c && c.variations && 0 !== c.variations.length
                      ? (this.setState({ loading: !0 }),
                        ((n = o),
                        I()({
                          path: (0, C.addQueryArgs)('wc/store/v1/products', {
                            per_page: 0,
                            type: 'variation',
                            parent: n,
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
                            const t = await B(e);
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
                o && (!be()(e.selected, r) || (e.isLoading && !t)) && this.loadVariations();
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
                  { error: o, loading: n, variations: a } = this.state;
                return (0, c.createElement)(e, {
                  ...this.props,
                  error: o || t,
                  expandedProduct: this.getExpandedProduct(),
                  isLoading: r,
                  variations: a,
                  variationsLoading: n,
                });
              }
            }
            return t;
          }, 'withProductVariations'),
          Ee = e => {
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
          _e = ({
            className: e,
            item: t,
            isSelected: r,
            isLoading: o,
            onSelect: n,
            disabled: a,
            ...s
          }) =>
            (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(oe, {
                ...s,
                key: t.id,
                className: e,
                isSelected: r,
                item: t,
                onSelect: n,
                disabled: a,
              }),
              r &&
                o &&
                (0, c.createElement)(
                  'div',
                  {
                    key: 'loading',
                    className: G()(
                      'woocommerce-search-list__item',
                      'woocommerce-product-attributes__item',
                      'depth-1',
                      'is-loading',
                      'is-not-active',
                    ),
                  },
                  (0, c.createElement)(m.Spinner, null),
                ),
            );
        r(7369);
        const ke = {
            list: (0, u.__)('Products', 'woocommerce'),
            noItems: (0, u.__)("Your store doesn't have any products.", 'woocommerce'),
            search: (0, u.__)('Search for a product to display', 'woocommerce'),
            updated: (0, u.__)('Product search results updated.', 'woocommerce'),
          },
          fe = ge(
            ((Ne = ve(
              (0, N.withInstanceId)(e => {
                const {
                  expandedProduct: t = null,
                  error: r,
                  instanceId: o,
                  isCompact: n = !1,
                  isLoading: a,
                  onChange: s,
                  onSearch: i,
                  products: l,
                  renderItem: d,
                  selected: m = [],
                  showVariations: p = !1,
                  variations: g,
                  variationsLoading: h,
                } = e;
                if (r) return (0, c.createElement)(U, { error: r });
                const w = [...l, ...(g && t && g[t] ? g[t] : [])].map(Ee);
                return (0, c.createElement)(pe, {
                  className: 'woocommerce-products',
                  list: w,
                  isCompact: n,
                  isLoading: a,
                  isSingle: !0,
                  selected: w.filter(({ id: e }) => m.includes(Number(e))),
                  onChange: s,
                  renderItem:
                    d ||
                    (p
                      ? e => {
                          var t, r, n, s;
                          const {
                              item: i,
                              search: l,
                              depth: d = 0,
                              isSelected: m,
                              onSelect: p,
                            } = e,
                            g =
                              null !== (t = i.details) &&
                              void 0 !== t &&
                              t.variations &&
                              Array.isArray(i.details.variations)
                                ? i.details.variations.length
                                : 0,
                            w = G()(
                              'woocommerce-search-product__item',
                              'woocommerce-search-list__item',
                              `depth-${d}`,
                              'has-count',
                              {
                                'is-searching': l.length > 0,
                                'is-skip-level': 0 === d && 0 !== i.parent,
                                'is-variable': g > 0,
                              },
                            );
                          if (!i.breadcrumbs.length) {
                            var b, v, E, _, k;
                            const t =
                              (null === (b = i.details) || void 0 === b ? void 0 : b.variations) &&
                              i.details.variations.length > 0;
                            return (0, c.createElement)(_e, {
                              ...e,
                              className: G()(w, { 'is-selected': m }),
                              isSelected: m,
                              item: i,
                              onSelect: () => () => {
                                p(i)();
                              },
                              isLoading: a || h,
                              countLabel: t
                                ? (0,
                                  u.sprintf) /* translators: %1$d is the number of variations of a product product. */(
                                    /* translators: %1$d is the number of variations of a product product. */
                                    (0, u.__)('%1$d variations', 'woocommerce'),
                                    null === (v = i.details) || void 0 === v
                                      ? void 0
                                      : v.variations.length,
                                  )
                                : null,
                              name: `products-${o}`,
                              'aria-label': t
                                ? (0,
                                  u.sprintf) /* translators: %1$s is the product name, %2$d is the number of variations of that product. */(
                                    /* translators: %1$s is the product name, %2$d is the number of variations of that product. */
                                    (0, u._n)(
                                      '%1$s, has %2$d variation',
                                      '%1$s, has %2$d variations',
                                      null === (E = i.details) ||
                                        void 0 === E ||
                                        null === (_ = E.variations) ||
                                        void 0 === _
                                        ? void 0
                                        : _.length,
                                      'woocommerce',
                                    ),
                                    i.name,
                                    null === (k = i.details) || void 0 === k
                                      ? void 0
                                      : k.variations.length,
                                  )
                                : void 0,
                            });
                          }
                          const f = (0, J.isEmpty)(
                            null === (r = i.details) || void 0 === r ? void 0 : r.variation,
                          )
                            ? e
                            : {
                                ...e,
                                item: {
                                  ...e.item,
                                  name:
                                    null === (n = i.details) || void 0 === n ? void 0 : n.variation,
                                },
                                'aria-label': `${i.breadcrumbs[0]}: ${
                                  null === (s = i.details) || void 0 === s ? void 0 : s.variation
                                }`,
                              };
                          return (0, c.createElement)(oe, {
                            ...f,
                            className: w,
                            name: `variations-${o}`,
                          });
                        }
                      : () => null),
                  onSearch: i,
                  messages: ke,
                  isHierarchical: !0,
                });
              }),
            )),
            ({ selected: e, ...t }) => {
              const [r, o] = (0, i.useState)(!0),
                [n, a] = (0, i.useState)(null),
                [s, d] = (0, i.useState)([]),
                m = l.r7.productCount > 100,
                u = async e => {
                  const t = await B(e);
                  a(t), o(!1);
                },
                p = (0, i.useRef)(e);
              (0, i.useEffect)(() => {
                O({ selected: p.current })
                  .then(e => {
                    d(e), o(!1);
                  })
                  .catch(u);
              }, [p]);
              const g = (0, he.YQ)(t => {
                  O({ selected: e, search: t })
                    .then(e => {
                      d(e), o(!1);
                    })
                    .catch(u);
                }, 400),
                h = (0, i.useCallback)(
                  e => {
                    o(!0), g(e);
                  },
                  [o, g],
                );
              return (0, c.createElement)(Ne, {
                ...t,
                selected: e,
                error: n,
                products: s,
                isLoading: r,
                onSearch: m ? h : null,
              });
            }),
          ),
          ye = ({ attributes: e, setAttributes: t }) =>
            (0, c.createElement)(fe, {
              selected: e.productId || 0,
              showVariations: !0,
              onChange: (e = []) => {
                const r = e[0] ? e[0].id : 0;
                t({ productId: r });
              },
            }),
          Se = ({ isEditing: e, setIsEditing: t }) =>
            (0, c.createElement)(
              $.BlockControls,
              null,
              (0, c.createElement)(m.ToolbarGroup, {
                controls: [
                  {
                    icon: 'edit',
                    title: (0, u.__)('Edit selected product', 'woocommerce'),
                    onClick: () => t(!e),
                    isActive: e,
                  },
                ],
              }),
            ),
          Pe = e =>
            e.map(([e, t = {}, r = []]) => {
              const c = r ? Pe(r) : [];
              return (0, o.createBlock)(e, t, c);
            });
        var Ne,
          Ce = r(3380);
        const xe = ({ isLoading: e, product: t, clientId: r }) => {
            const o = '.wc-block-editor-single-product .wc-block-editor-layout',
              { replaceInnerBlocks: n } = (0, K.useDispatch)('core/block-editor'),
              a = (0, i.useCallback)(() => {
                n(r, Pe(f), !1);
              }, [r, n]);
            return (0, c.createElement)(
              D.InnerBlockLayoutContextProvider,
              { parentName: d.name, parentClassName: o },
              (0, c.createElement)(
                D.ProductDataContextProvider,
                { product: t, isLoading: e },
                (0, c.createElement)(
                  $.InspectorControls,
                  null,
                  (0, c.createElement)(
                    m.PanelBody,
                    { title: (0, u.__)('Layout', 'woocommerce'), initialOpen: !0 },
                    (0, c.createElement)(
                      m.Button,
                      {
                        label: (0, u.__)('Reset layout to default', 'woocommerce'),
                        onClick: a,
                        variant: 'tertiary',
                        className: 'wc-block-editor-single-product__reset-layout',
                        icon: Ce.A,
                      },
                      (0, u.__)('Reset layout', 'woocommerce'),
                    ),
                  ),
                ),
                (0, c.createElement)(
                  'div',
                  { className: o },
                  (0, c.createElement)(
                    $.BlockContextProvider,
                    { value: { postId: null == t ? void 0 : t.id, postType: 'product' } },
                    (0, c.createElement)($.InnerBlocks, {
                      template: f,
                      allowedBlocks: y,
                      templateLock: !1,
                    }),
                  ),
                ),
              ),
            );
          },
          Ie = L(
            ({
              attributes: e,
              setAttributes: t,
              error: r,
              getProduct: o,
              product: n,
              isLoading: a,
              clientId: s,
            }) => {
              const { productId: l, isPreview: p } = e,
                [g, h] = (0, i.useState)(!l),
                w = (0, $.useBlockProps)(),
                b = (0, K.useSelect)(e =>
                  p ? e(W.PRODUCTS_STORE_NAME).getProducts({ per_page: 1 }) : null,
                );
              return (
                (0, i.useEffect)(() => {
                  var r;
                  const o = b ? (null === (r = b[0]) || void 0 === r ? void 0 : r.id) : null;
                  o && (t({ ...e, productId: o }), h(!1));
                }, [e, b, t]),
                r
                  ? (0, c.createElement)(q, {
                      className: 'wc-block-editor-single-product-error',
                      error: r,
                      isLoading: a,
                      onRetry: o,
                    })
                  : (0, c.createElement)(
                      'div',
                      { ...w },
                      (0, c.createElement)(
                        M,
                        { header: (0, u.__)('Single Product Block Error', 'woocommerce') },
                        (0, c.createElement)(Se, { setIsEditing: h, isEditing: g }),
                        g
                          ? (0, c.createElement)(
                              m.Placeholder,
                              {
                                icon: k,
                                label: d.title,
                                className: 'wc-block-editor-single-product',
                              },
                              d.description,
                              (0, c.createElement)(
                                'div',
                                { className: 'wc-block-editor-single-product__selection' },
                                (0, c.createElement)(ye, { attributes: e, setAttributes: t }),
                                (0, c.createElement)(
                                  m.Button,
                                  {
                                    variant: 'secondary',
                                    onClick: () => {
                                      h(!1);
                                    },
                                  },
                                  (0, u.__)('Done', 'woocommerce'),
                                ),
                              ),
                            )
                          : (0, c.createElement)(
                              'div',
                              null,
                              (0, c.createElement)(
                                $.InspectorControls,
                                null,
                                (0, c.createElement)(
                                  m.PanelBody,
                                  { title: (0, u.__)('Product', 'woocommerce'), initialOpen: !1 },
                                  (0, c.createElement)(ye, { attributes: e, setAttributes: t }),
                                ),
                              ),
                              (0, c.createElement)(F, { productId: l }),
                              (0, c.createElement)(xe, { clientId: s, product: n, isLoading: a }),
                            ),
                      ),
                    )
              );
            },
          );
        (0, o.registerBlockType)(d, {
          icon: k,
          edit: Ie,
          save: () => {
            const e = $.useBlockProps.save();
            return (0, c.createElement)(
              'div',
              { ...e },
              (0, c.createElement)($.InnerBlocks.Content, null),
            );
          },
        });
      },
      5849: (e, t, r) => {
        'use strict';
        r.d(t, {
          Hw: () => y,
          Vo: () => v,
          XK: () => w,
          iI: () => k,
          r7: () => g,
          sW: () => h,
          sq: () => b,
        });
        var o,
          c,
          n,
          a,
          s,
          i,
          l,
          d,
          m,
          u,
          p = r(5703);
        const g = (0, p.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          h = g.pluginUrl + 'assets/images/',
          w = g.pluginUrl + 'assets/client/blocks/',
          b = g.buildPhase,
          v =
            (null === (o = p.STORE_PAGES.shop) || void 0 === o || o.permalink,
            null === (c = p.STORE_PAGES.checkout) || void 0 === c || c.id,
            null === (n = p.STORE_PAGES.checkout) || void 0 === n || n.permalink,
            null === (a = p.STORE_PAGES.privacy) || void 0 === a || a.permalink,
            null === (s = p.STORE_PAGES.privacy) || void 0 === s || s.title,
            null === (i = p.STORE_PAGES.terms) || void 0 === i || i.permalink,
            null === (l = p.STORE_PAGES.terms) || void 0 === l || l.title,
            null === (d = p.STORE_PAGES.cart) || void 0 === d || d.id,
            null === (m = p.STORE_PAGES.cart) || void 0 === m ? void 0 : m.permalink),
          E =
            (null !== (u = p.STORE_PAGES.myaccount) && void 0 !== u && u.permalink
              ? p.STORE_PAGES.myaccount.permalink
              : (0, p.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, p.getSetting)('localPickupEnabled', !1),
            (0, p.getSetting)('countries', {})),
          _ = (0, p.getSetting)('countryData', {}),
          k =
            (Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowBilling)
                .map(e => [e, _[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowShipping)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowShipping)
                .map(e => [e, _[e].states || []]),
            ),
            Object.fromEntries(Object.keys(_).map(e => [e, _[e].locale || []]))),
          f = {
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
          },
          y = (0, p.getSetting)('addressFieldsLocations', f).address;
        (0, p.getSetting)('addressFieldsLocations', f).contact,
          (0, p.getSetting)('addressFieldsLocations', f).order,
          (0, p.getSetting)('additionalOrderFields', {}),
          (0, p.getSetting)('additionalContactFields', {}),
          (0, p.getSetting)('additionalAddressFields', {});
      },
      6332: (e, t, r) => {
        'use strict';
        r.d(t, { kM: () => c }), r(4997);
        var o = r(5849);
        const c = () => o.sq > 1;
      },
      812: (e, t, r) => {
        'use strict';
        r.d(t, {
          Hw: () => o.Hw,
          Vo: () => o.Vo,
          XK: () => o.XK,
          iI: () => o.iI,
          kM: () => c.kM,
          r7: () => o.r7,
          sW: () => o.sW,
        });
        var o = r(5849),
          c = r(6332);
      },
      9407: () => {},
      8625: () => {},
      4974: () => {},
      7369: () => {},
      8137: () => {},
      6636: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      4656: e => {
        'use strict';
        e.exports = window.wc.blocksComponents;
      },
      8529: e => {
        'use strict';
        e.exports = window.wc.priceFormat;
      },
      7594: e => {
        'use strict';
        e.exports = window.wc.wcBlocksData;
      },
      2796: e => {
        'use strict';
        e.exports = window.wc.wcBlocksSharedContext;
      },
      1616: e => {
        'use strict';
        e.exports = window.wc.wcBlocksSharedHocs;
      },
      5703: e => {
        'use strict';
        e.exports = window.wc.wcSettings;
      },
      3993: e => {
        'use strict';
        e.exports = window.wc.wcTypes;
      },
      6004: e => {
        'use strict';
        e.exports = window.wp.autop;
      },
      4997: e => {
        'use strict';
        e.exports = window.wp.blocks;
      },
      6427: e => {
        'use strict';
        e.exports = window.wp.components;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      7143: e => {
        'use strict';
        e.exports = window.wp.data;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      2619: e => {
        'use strict';
        e.exports = window.wp.hooks;
      },
      8537: e => {
        'use strict';
        e.exports = window.wp.htmlEntities;
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
      9786: e => {
        'use strict';
        e.exports = window.wp.styleEngine;
      },
      3832: e => {
        'use strict';
        e.exports = window.wp.url;
      },
      9446: e => {
        'use strict';
        e.exports = window.wp.wordcount;
      },
    },
    a = {};
  function s(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return n[e].call(r.exports, r, r.exports, s), r.exports;
  }
  (s.m = n),
    (e = []),
    (s.O = (t, r, o, c) => {
      if (!r) {
        var n = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, o, c] = e[d], a = !0, i = 0; i < r.length; i++)
            (!1 & c || n >= c) && Object.keys(s.O).every(e => s.O[e](r[i]))
              ? r.splice(i--, 1)
              : ((a = !1), c < n && (n = c));
          if (a) {
            e.splice(d--, 1);
            var l = o();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      c = c || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > c; d--) e[d] = e[d - 1];
      e[d] = [r, o, c];
    }),
    (s.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (s.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var c = Object.create(null);
      s.r(c);
      var n = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & o && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), s.d(c, n), c;
    }),
    (s.d = (e, t) => {
      for (var r in t)
        s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (s.f = {}),
    (s.e = e => Promise.all(Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), []))),
    (s.u = e =>
      ({
        345: 'product-stock-indicator',
        462: 'product-rating',
        2105: 'product-title',
        2388: 'product-price',
        2724: 'product-sku',
        3895: 'product-summary',
        4232: 'product-image',
        4442: 'product-sale-badge',
        7409: 'product-button',
        8553: 'product-rating-counter',
        8578: 'product-rating-stars',
        8647: 'product-average-rating',
      }[e] +
      '.js?ver=' +
      {
        345: '320c37c1f8cc9fcfc35d',
        462: '61f784ca3eca8db673b7',
        2105: '2b0e2dbf26509827de6d',
        2388: 'dd62a34874c737d4ac7a',
        2724: '9e16b9a90f701dc7546c',
        3895: '0d45142c4f5fd175e4e0',
        4232: '8aa07a03981e2126f817',
        4442: '5a4183656cb35a3e2282',
        7409: '811ecdc21f61934cd092',
        8553: '34e7d123ed456dcfcb5a',
        8578: '87cd84fc7f761d37eb7e',
        8647: 'dd4f276183914b8e4927',
      }[e])),
    (s.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o = {}),
    (c = 'webpackWcBlocksMainJsonp:'),
    (s.l = (e, t, r, n) => {
      if (o[e]) o[e].push(t);
      else {
        var a, i;
        if (void 0 !== r)
          for (var l = document.getElementsByTagName('script'), d = 0; d < l.length; d++) {
            var m = l[d];
            if (m.getAttribute('src') == e || m.getAttribute('data-webpack') == c + r) {
              a = m;
              break;
            }
          }
        a ||
          ((i = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          s.nc && a.setAttribute('nonce', s.nc),
          a.setAttribute('data-webpack', c + r),
          (a.src = e)),
          (o[e] = [t]);
        var u = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var c = o[e];
            if (
              (delete o[e],
              a.parentNode && a.parentNode.removeChild(a),
              c && c.forEach(e => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(u.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
        (a.onerror = u.bind(null, a.onerror)),
          (a.onload = u.bind(null, a.onload)),
          i && document.head.appendChild(a);
      }
    }),
    (s.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.j = 5065),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + '');
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName('script');
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); ) e = r[o--].src;
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (s.p = e);
    })(),
    (() => {
      var e = { 5065: 0 };
      (s.f.j = (t, r) => {
        var o = s.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var c = new Promise((r, c) => (o = e[t] = [r, c]));
            r.push((o[2] = c));
            var n = s.p + s.u(t),
              a = new Error();
            s.l(
              n,
              r => {
                if (s.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var c = r && ('load' === r.type ? 'missing' : r.type),
                    n = r && r.target && r.target.src;
                  (a.message = 'Loading chunk ' + t + ' failed.\n(' + c + ': ' + n + ')'),
                    (a.name = 'ChunkLoadError'),
                    (a.type = c),
                    (a.request = n),
                    o[1](a);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      }),
        (s.O.j = t => 0 === e[t]);
      var t = (t, r) => {
          var o,
            c,
            [n, a, i] = r,
            l = 0;
          if (n.some(t => 0 !== e[t])) {
            for (o in a) s.o(a, o) && (s.m[o] = a[o]);
            if (i) var d = i(s);
          }
          for (t && t(r); l < n.length; l++) (c = n[l]), s.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return s.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = s.O(void 0, [94], () => s(1534));
  (i = s.O(i)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['single-product'] = i);
})();
