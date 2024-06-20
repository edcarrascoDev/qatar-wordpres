var wc;
(() => {
  var e,
    t,
    r,
    o,
    c,
    n = {
      3603: (e, t, r) => {
        'use strict';
        r.d(t, { y: () => a });
        var o = r(2619),
          c = r(7143),
          n = r(6087);
        const a = () => ({
          dispatchStoreEvent: (0, n.useCallback)((e, t = {}) => {
            try {
              (0, o.doAction)(`experimental__woocommerce_blocks-${e}`, t);
            } catch (e) {
              console.error(e);
            }
          }, []),
          dispatchCheckoutEvent: (0, n.useCallback)((e, t = {}) => {
            try {
              (0, o.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
                ...t,
                storeCart: (0, c.select)('wc/store/cart').getCartData(),
              });
            } catch (e) {
              console.error(e);
            }
          }, []),
        });
      },
      7286: (e, t, r) => {
        'use strict';
        r.r(t);
        var o = r(1609),
          c = r(6087),
          n = r(2294),
          a = r(7723),
          l = r(812);
        const s = ({
          imageUrl: e = `${l.sW}/block-error.svg`,
          header: t = (0, a.__)('Oops!', 'woocommerce'),
          text: r = (0, a.__)('There was an error loading the content.', 'woocommerce'),
          errorMessage: c,
          errorMessagePrefix: n = (0, a.__)('Error:', 'woocommerce'),
          button: s,
          showErrorBlock: i = !0,
        }) =>
          i
            ? (0, o.createElement)(
                'div',
                { className: 'wc-block-error wc-block-components-error' },
                e &&
                  (0, o.createElement)('img', {
                    className: 'wc-block-error__image wc-block-components-error__image',
                    src: e,
                    alt: '',
                  }),
                (0, o.createElement)(
                  'div',
                  { className: 'wc-block-error__content wc-block-components-error__content' },
                  t &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__header wc-block-components-error__header' },
                      t,
                    ),
                  r &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__text wc-block-components-error__text' },
                      r,
                    ),
                  c &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__message wc-block-components-error__message' },
                      n ? n + ' ' : '',
                      c,
                    ),
                  s &&
                    (0, o.createElement)(
                      'p',
                      { className: 'wc-block-error__button wc-block-components-error__button' },
                      s,
                    ),
                ),
              )
            : null;
        r(9407);
        class i extends c.Component {
          constructor(...e) {
            super(...e), (0, n.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, o.createElement)(
                    o.Fragment,
                    null,
                    (0, o.createElement)('strong', null, e.status),
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
                showErrorBlock: c = !0,
                text: n,
                errorMessagePrefix: a,
                renderError: l,
                button: i,
              } = this.props,
              { errorMessage: u, hasError: d } = this.state;
            return d
              ? 'function' == typeof l
                ? l({ errorMessage: u })
                : (0, o.createElement)(s, {
                    showErrorBlock: c,
                    errorMessage: r ? u : null,
                    header: e,
                    imageUrl: t,
                    text: n,
                    errorMessagePrefix: a,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const u = i,
          d = ['.wp-block-woocommerce-cart'],
          m = ({
            Block: e,
            containers: t,
            getProps: r = () => ({}),
            getErrorBoundaryProps: n = () => ({}),
          }) => {
            0 !== t.length &&
              Array.prototype.forEach.call(t, (t, a) => {
                const l = r(t, a),
                  s = n(t, a),
                  i = { ...t.dataset, ...(l.attributes || {}) };
                (({
                  Block: e,
                  container: t,
                  attributes: r = {},
                  props: n = {},
                  errorBoundaryProps: a = {},
                }) => {
                  (0, c.render)(
                    (0, o.createElement)(
                      u,
                      { ...a },
                      (0, o.createElement)(
                        c.Suspense,
                        {
                          fallback: (0, o.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, o.createElement)(e, { ...n, attributes: r }),
                      ),
                    ),
                    t,
                    () => {
                      t.classList && t.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: t, props: l, attributes: i, errorBoundaryProps: s });
              });
          };
        var p = r(458),
          E = r.n(p),
          g = r(9019),
          h = r.n(g),
          w = r(4656);
        r(4156);
        const b = ({
          currentPage: e,
          displayFirstAndLastPages: t = !0,
          displayNextAndPreviousArrows: r = !0,
          pagesToDisplay: c = 3,
          onPageChange: n,
          totalPages: l,
        }) => {
          let { minIndex: s, maxIndex: i } = ((e, t, r) => {
            if (r <= 2) return { minIndex: null, maxIndex: null };
            const o = e - 1,
              c = Math.max(Math.floor(t - o / 2), 2),
              n = Math.min(Math.ceil(t + (o - (t - c))), r - 1);
            return { minIndex: Math.max(Math.floor(t - (o - (n - t))), 2), maxIndex: n };
          })(c, e, l);
          const u = t && Boolean(1 !== s),
            d = t && Boolean(i !== l),
            m = t && Boolean(s && s > 3),
            p = t && Boolean(i && i < l - 2);
          u && 3 === s && (s -= 1), d && i === l - 2 && (i += 1);
          const E = [];
          if (s && i) for (let e = s; e <= i; e++) E.push(e);
          return (0, o.createElement)(
            'div',
            { className: 'wc-block-pagination wc-block-components-pagination' },
            (0, o.createElement)(w.Label, {
              screenReaderLabel: (0, a.__)('Navigate to another page', 'woocommerce'),
            }),
            r &&
              (0, o.createElement)(
                'button',
                {
                  className:
                    'wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow',
                  onClick: () => n(e - 1),
                  title: (0, a.__)('Previous page', 'woocommerce'),
                  disabled: e <= 1,
                },
                (0, o.createElement)(w.Label, {
                  label: '←',
                  screenReaderLabel: (0, a.__)('Previous page', 'woocommerce'),
                }),
              ),
            u &&
              (0, o.createElement)(
                'button',
                {
                  className: h()(
                    'wc-block-pagination-page',
                    'wc-block-components-pagination__page',
                    {
                      'wc-block-pagination-page--active': 1 === e,
                      'wc-block-components-pagination__page--active': 1 === e,
                    },
                  ),
                  onClick: () => n(1),
                  disabled: 1 === e,
                },
                (0, o.createElement)(w.Label, {
                  label: '1',
                  screenReaderLabel: (0,
                  a.sprintf) /* translators: %d is the page number (1, 2, 3...). */(
                    /* translators: %d is the page number (1, 2, 3...). */
                    (0, a.__)('Page %d', 'woocommerce'),
                    1,
                  ),
                }),
              ),
            m &&
              (0, o.createElement)(
                'span',
                {
                  className:
                    'wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis',
                  'aria-hidden': 'true',
                },
                (0, a.__)('…', 'woocommerce'),
              ),
            E.map(t =>
              (0, o.createElement)(
                'button',
                {
                  key: t,
                  className: h()(
                    'wc-block-pagination-page',
                    'wc-block-components-pagination__page',
                    {
                      'wc-block-pagination-page--active': e === t,
                      'wc-block-components-pagination__page--active': e === t,
                    },
                  ),
                  onClick: e === t ? void 0 : () => n(t),
                  disabled: e === t,
                },
                (0, o.createElement)(w.Label, {
                  label: t.toString(),
                  screenReaderLabel: (0,
                  a.sprintf) /* translators: %d is the page number (1, 2, 3...). */(
                    /* translators: %d is the page number (1, 2, 3...). */
                    (0, a.__)('Page %d', 'woocommerce'),
                    t,
                  ),
                }),
              ),
            ),
            p &&
              (0, o.createElement)(
                'span',
                {
                  className:
                    'wc-block-pagination-ellipsis wc-block-components-pagination__ellipsis',
                  'aria-hidden': 'true',
                },
                (0, a.__)('…', 'woocommerce'),
              ),
            d &&
              (0, o.createElement)(
                'button',
                {
                  className: h()(
                    'wc-block-pagination-page',
                    'wc-block-components-pagination__page',
                    {
                      'wc-block-pagination-page--active': e === l,
                      'wc-block-components-pagination__page--active': e === l,
                    },
                  ),
                  onClick: () => n(l),
                  disabled: e === l,
                },
                (0, o.createElement)(w.Label, {
                  label: l.toString(),
                  screenReaderLabel: (0,
                  a.sprintf) /* translators: %d is the page number (1, 2, 3...). */(
                    /* translators: %d is the page number (1, 2, 3...). */
                    (0, a.__)('Page %d', 'woocommerce'),
                    l,
                  ),
                }),
              ),
            r &&
              (0, o.createElement)(
                'button',
                {
                  className:
                    'wc-block-pagination-page wc-block-components-pagination__page wc-block-components-pagination-page--arrow',
                  onClick: () => n(e + 1),
                  title: (0, a.__)('Next page', 'woocommerce'),
                  disabled: e >= l,
                },
                (0, o.createElement)(w.Label, {
                  label: '→',
                  screenReaderLabel: (0, a.__)('Next page', 'woocommerce'),
                }),
              ),
          );
        };
        function f(e, t) {
          const r = (0, c.useRef)();
          return (
            (0, c.useEffect)(() => {
              r.current === e || (t && !t(e, r.current)) || (r.current = e);
            }, [e, t]),
            r.current
          );
        }
        var y = r(7594),
          _ = r(7143),
          k = r(923),
          x = r.n(k);
        function v(e) {
          const t = (0, c.useRef)(e);
          return x()(e, t.current) || (t.current = e), t.current;
        }
        const P = (0, c.createContext)('page'),
          S = () => (0, c.useContext)(P),
          N =
            (P.Provider,
            (e, t, r) => {
              const o = S();
              r = r || o;
              const n = (0, _.useSelect)(
                  o => o(y.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t),
                  [r, e],
                ),
                { setQueryValue: a } = (0, _.useDispatch)(y.QUERY_STATE_STORE_KEY);
              return [
                n,
                (0, c.useCallback)(
                  t => {
                    a(r, e, t);
                  },
                  [r, e, a],
                ),
              ];
            });
        var C = r(3993);
        const B = e => {
          const t = { namespace: '/wc/store/v1', resourceName: 'products' },
            { results: r, isLoading: o } = (e => {
              const {
                namespace: t,
                resourceName: r,
                resourceValues: o = [],
                query: n = {},
                shouldSelect: a = !0,
              } = e;
              if (!t || !r)
                throw new Error(
                  'The options object must have valid values for the namespace and the resource properties.',
                );
              const l = (0, c.useRef)({ results: [], isLoading: !0 }),
                s = v(n),
                i = v(o),
                u = (() => {
                  const [, e] = (0, c.useState)();
                  return (0, c.useCallback)(t => {
                    e(() => {
                      throw t;
                    });
                  }, []);
                })(),
                d = (0, _.useSelect)(
                  e => {
                    if (!a) return null;
                    const o = e(y.COLLECTIONS_STORE_KEY),
                      c = [t, r, s, i],
                      n = o.getCollectionError(...c);
                    if (n) {
                      if (!(0, C.isError)(n))
                        throw new Error(
                          'TypeError: `error` object is not an instance of Error constructor',
                        );
                      u(n);
                    }
                    return {
                      results: o.getCollection(...c),
                      isLoading: !o.hasFinishedResolution('getCollection', c),
                    };
                  },
                  [t, r, i, s, a],
                );
              return null !== d && (l.current = d), l.current;
            })({ ...t, query: e }),
            { value: n } = ((e, t) => {
              const { namespace: r, resourceName: o, resourceValues: c = [], query: n = {} } = t;
              if (!r || !o)
                throw new Error(
                  'The options object must have valid values for the namespace and the resource name properties.',
                );
              const a = v(n),
                l = v(c),
                { value: s, isLoading: i = !0 } = (0, _.useSelect)(
                  t => {
                    const c = t(y.COLLECTIONS_STORE_KEY),
                      n = [e, r, o, a, l];
                    return {
                      value: c.getCollectionHeader(...n),
                      isLoading: c.hasFinishedResolution('getCollectionHeader', n),
                    };
                  },
                  [e, r, o, l, a],
                );
              return { value: s, isLoading: i };
            })('x-wp-total', { ...t, query: e });
          return { products: r, totalProducts: parseInt(n, 10), productsLoading: o };
        };
        var O = r(3603);
        r(3135);
        const T = e => {
          if (!e) return;
          const t = e.getBoundingClientRect().bottom;
          (t >= 0 && t <= window.innerHeight) || e.scrollIntoView();
        };
        var A = r(2796),
          L = r(195),
          R = r(7104),
          j = r(3588);
        const F = () => {
          const { parentClassName: e } = (0, A.useInnerBlockLayoutContext)();
          return (0, o.createElement)(
            'div',
            { className: `${e}__no-products` },
            (0, o.createElement)(R.A, {
              className: `${e}__no-products-image`,
              icon: j.A,
              size: 100,
            }),
            (0, o.createElement)(
              'strong',
              { className: `${e}__no-products-title` },
              (0, a.__)('No products', 'woocommerce'),
            ),
            (0, o.createElement)(
              'p',
              { className: `${e}__no-products-description` },
              (0, a.__)('There are currently no products available to display.', 'woocommerce'),
            ),
          );
        };
        var M = r(7850);
        const I = ({ resetCallback: e = () => {} }) => {
          const { parentClassName: t } = (0, A.useInnerBlockLayoutContext)();
          return (0, o.createElement)(
            'div',
            { className: `${t}__no-products` },
            (0, o.createElement)(R.A, {
              className: `${t}__no-products-image`,
              icon: M.A,
              size: 100,
            }),
            (0, o.createElement)(
              'strong',
              { className: `${t}__no-products-title` },
              (0, a.__)('No products found', 'woocommerce'),
            ),
            (0, o.createElement)(
              'p',
              { className: `${t}__no-products-description` },
              (0, a.__)('We were unable to find any results based on your search.', 'woocommerce'),
            ),
            (0, o.createElement)(
              'button',
              { onClick: e },
              (0, a.__)('Reset Search', 'woocommerce'),
            ),
          );
        };
        r(7532);
        const $ = ({ onChange: e, value: t }) =>
          (0, o.createElement)(w.SortSelect, {
            className: 'wc-block-product-sort-select wc-block-components-product-sort-select',
            onChange: e,
            options: [
              { key: 'menu_order', label: (0, a.__)('Default sorting', 'woocommerce') },
              { key: 'popularity', label: (0, a.__)('Popularity', 'woocommerce') },
              { key: 'rating', label: (0, a.__)('Average rating', 'woocommerce') },
              { key: 'date', label: (0, a.__)('Latest', 'woocommerce') },
              { key: 'price', label: (0, a.__)('Price: low to high', 'woocommerce') },
              { key: 'price-desc', label: (0, a.__)('Price: high to low', 'woocommerce') },
            ],
            screenReaderLabel: (0, a.__)('Order products by', 'woocommerce'),
            value: t,
          });
        var Q = r(9491);
        const V = window.wc.wcBlocksRegistry;
        (r.p = l.XK),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-price',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(2388)]).then(r.bind(r, 2519))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-image',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(4232)]).then(r.bind(r, 8415))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-title',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(2105)]).then(r.bind(r, 1812))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-rating',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(462)]).then(r.bind(r, 8757))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-rating-stars',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(8578)]).then(r.bind(r, 9549))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-rating-counter',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(8553)]).then(r.bind(r, 8614))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-average-rating',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(1028)]).then(r.bind(r, 1579))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-button',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(7409)]).then(r.bind(r, 4078))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-summary',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(3895)]).then(r.bind(r, 3326))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-sale-badge',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(4442)]).then(r.bind(r, 6809))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-sku',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(2724)]).then(r.bind(r, 3975))),
          }),
          (0, V.registerBlockComponent)({
            blockName: 'woocommerce/product-stock-indicator',
            component: (0, c.lazy)(() => Promise.all([r.e(94), r.e(345)]).then(r.bind(r, 2686))),
          });
        const z = (e, t, r, n) => {
            if (!r) return;
            const a = (e => (0, V.getRegisteredBlockComponents)(e))(e);
            return r.map(([r, l = {}], s) => {
              let i = [];
              l.children && l.children.length > 0 && (i = z(e, t, l.children, n));
              const u = a[r];
              if (!u) return null;
              const d = t.id || 0,
                m = ['layout', r, s, n, d];
              return (0, o.createElement)(
                c.Suspense,
                {
                  key: m.join('_'),
                  fallback: (0, o.createElement)('div', { className: 'wc-block-placeholder' }),
                },
                (0, o.createElement)(u, { ...l, children: i, product: t }),
              );
            });
          },
          q = (0, Q.withInstanceId)(({ product: e = {}, attributes: t, instanceId: r }) => {
            const { layoutConfig: c } = t,
              { parentClassName: n, parentName: a } = (0, A.useInnerBlockLayoutContext)(),
              l = 0 === Object.keys(e).length,
              s = h()(`${n}__product`, 'wc-block-layout', { 'is-loading': l });
            return (0, o.createElement)('li', { className: s, 'aria-hidden': l }, z(a, e, c, r));
          });
        r(4458);
        const G = e => {
            switch (e) {
              case 'menu_order':
              case 'popularity':
              case 'rating':
              case 'price':
                return { orderby: e, order: 'asc' };
              case 'price-desc':
                return { orderby: 'price', order: 'desc' };
              case 'date':
                return { orderby: 'date', order: 'desc' };
            }
          },
          K = ({ totalQuery: e, totalProducts: t }, { totalQuery: r } = {}) =>
            !E()(e, r) && Number.isFinite(t),
          U =
            ((H = ({
              attributes: e,
              currentPage: t,
              onPageChange: r,
              onSortChange: n,
              sortValue: l,
              scrollToTop: s,
            }) => {
              const [i, u] = N('attributes', []),
                [d, m] = N('stock_status', []),
                [p, g] = N('rating', []),
                [w, k] = N('min_price'),
                [P, C] = N('max_price'),
                [T] = ((e, t) => {
                  const r = S();
                  t = t || r;
                  const [o, n] = (e => {
                      const t = S();
                      e = e || t;
                      const r = (0, _.useSelect)(
                          t => t(y.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0),
                          [e],
                        ),
                        { setValueForQueryContext: o } = (0, _.useDispatch)(
                          y.QUERY_STATE_STORE_KEY,
                        );
                      return [
                        r,
                        (0, c.useCallback)(
                          t => {
                            o(e, t);
                          },
                          [e, o],
                        ),
                      ];
                    })(t),
                    a = v(o),
                    l = v(e),
                    s = f(l),
                    i = (0, c.useRef)(!1);
                  return (
                    (0, c.useEffect)(() => {
                      x()(s, l) || (n(Object.assign({}, a, l)), (i.current = !0));
                    }, [a, l, s, n]),
                    i.current ? [o, n] : [e, n]
                  );
                })(
                  (({ sortValue: e, currentPage: t, attributes: r }) => {
                    const { columns: o, rows: c } = r;
                    return { ...G(e), catalog_visibility: 'catalog', per_page: o * c, page: t };
                  })({ attributes: e, sortValue: l, currentPage: t }),
                ),
                { products: R, totalProducts: j, productsLoading: M } = B(T),
                { parentClassName: Q, parentName: V } = (0, A.useInnerBlockLayoutContext)(),
                z = (e => {
                  const { order: t, orderby: r, page: o, per_page: c, ...n } = e;
                  return n || {};
                })(T),
                { dispatchStoreEvent: U } = (0, O.y)(),
                Y = f({ totalQuery: z, totalProducts: j }, K);
              (0, c.useEffect)(() => {
                U('product-list-render', { products: R, listName: V });
              }, [R, V, U]),
                (0, c.useEffect)(() => {
                  E()(z, null == Y ? void 0 : Y.totalQuery) ||
                    (r(1),
                    null != Y &&
                      Y.totalQuery &&
                      (e => {
                        Number.isFinite(e) &&
                          (0 === e
                            ? (0, L.speak)((0, a.__)('No products found', 'woocommerce'))
                            : (0, L.speak)(
                                (0,
                                a.sprintf) /* translators: %s is an integer higher than 0 (1, 2, 3...) */(
                                  /* translators: %s is an integer higher than 0 (1, 2, 3...) */
                                  (0, a._n)(
                                    '%d product found',
                                    '%d products found',
                                    e,
                                    'woocommerce',
                                  ),
                                  e,
                                ),
                              ));
                      })(j));
                }, [null == Y ? void 0 : Y.totalQuery, j, r, z]);
              const { contentVisibility: D } = e,
                H = e.columns * e.rows,
                W =
                  !Number.isFinite(j) &&
                  Number.isFinite(null == Y ? void 0 : Y.totalProducts) &&
                  E()(z, null == Y ? void 0 : Y.totalQuery)
                    ? Math.ceil(((null == Y ? void 0 : Y.totalProducts) || 0) / H)
                    : Math.ceil(j / H),
                J = R.length ? R : Array.from({ length: H }),
                X = 0 !== R.length || M,
                Z =
                  i.length > 0 ||
                  d.length > 0 ||
                  p.length > 0 ||
                  Number.isFinite(w) ||
                  Number.isFinite(P);
              return (0, o.createElement)(
                'div',
                {
                  className: (() => {
                    const { columns: t, rows: r, alignButtons: o, align: c } = e,
                      n = void 0 !== c ? 'align' + c : '';
                    return h()(Q, n, 'has-' + t + '-columns', {
                      'has-multiple-rows': r > 1,
                      'has-aligned-buttons': o,
                    });
                  })(),
                },
                (null == D ? void 0 : D.orderBy) &&
                  X &&
                  (0, o.createElement)($, { onChange: n, value: l }),
                !X &&
                  Z &&
                  (0, o.createElement)(I, {
                    resetCallback: () => {
                      u([]), m([]), g([]), k(null), C(null);
                    },
                  }),
                !X && !Z && (0, o.createElement)(F, null),
                X &&
                  (0, o.createElement)(
                    'ul',
                    { className: h()(`${Q}__products`, { 'is-loading-products': M }) },
                    J.map((t = {}, r) =>
                      (0, o.createElement)(q, { key: t.id || r, attributes: e, product: t }),
                    ),
                  ),
                W > 1 &&
                  (0, o.createElement)(b, {
                    currentPage: t,
                    onPageChange: e => {
                      s({ focusableSelector: 'a, button' }), r(e);
                    },
                    totalPages: W,
                  }),
              );
            }),
            e => {
              const t = (0, c.useRef)(null);
              return (0, o.createElement)(
                o.Fragment,
                null,
                (0, o.createElement)('div', {
                  className: 'with-scroll-to-top__scroll-point',
                  ref: t,
                  'aria-hidden': !0,
                }),
                (0, o.createElement)(H, {
                  ...e,
                  scrollToTop: e => {
                    null !== t.current &&
                      ((e, t) => {
                        const { focusableSelector: r } = t || {};
                        window &&
                          Number.isFinite(window.innerHeight) &&
                          (r
                            ? ((e, t) => {
                                var r;
                                const o =
                                  (null === (r = e.parentElement) || void 0 === r
                                    ? void 0
                                    : r.querySelectorAll(t)) || [];
                                if (o.length) {
                                  const e = o[0];
                                  T(e), null == e || e.focus();
                                } else T(e);
                              })(e, r)
                            : T(e));
                      })(t.current, e);
                  },
                }),
              );
            }),
          Y = ({ attributes: e }) => {
            const [t, r] = (0, c.useState)(1),
              [n, a] = (0, c.useState)(e.orderby);
            return (
              (0, c.useEffect)(() => {
                a(e.orderby);
              }, [e.orderby]),
              (0, o.createElement)(U, {
                attributes: e,
                currentPage: t,
                onPageChange: e => {
                  r(e);
                },
                onSortChange: e => {
                  var t;
                  const o = null == e || null === (t = e.target) || void 0 === t ? void 0 : t.value;
                  a(o), r(1);
                },
                sortValue: n,
              })
            );
          },
          D = (0, o.createElement)(
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
          );
        var H;
        class W extends c.Component {
          render() {
            const { attributes: e, urlParameterSuffix: t } = this.props;
            return e.isPreview
              ? D
              : (0, o.createElement)(
                  A.InnerBlockLayoutContextProvider,
                  { parentName: 'woocommerce/all-products', parentClassName: 'wc-block-grid' },
                  (0, o.createElement)(w.StoreNoticesContainer, { context: 'wc/all-products' }),
                  (0, o.createElement)(Y, { attributes: e, urlParameterSuffix: t }),
                );
          }
        }
        const J = W;
        (e => {
          const t = document.body.querySelectorAll(d.join(',')),
            { Block: r, getProps: o, getErrorBoundaryProps: c, selector: n } = e;
          (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: o, wrappers: c }) => {
            const n = document.body.querySelectorAll(o);
            c &&
              c.length > 0 &&
              Array.prototype.filter.call(
                n,
                e =>
                  !((e, t) => Array.prototype.some.call(t, t => t.contains(e) && !t.isSameNode(e)))(
                    e,
                    c,
                  ),
              ),
              m({ Block: e, containers: n, getProps: t, getErrorBoundaryProps: r });
          })({ Block: r, getProps: o, getErrorBoundaryProps: c, selector: n, wrappers: t }),
            Array.prototype.forEach.call(t, t => {
              t.addEventListener('wc-blocks_render_blocks_frontend', () => {
                (({ Block: e, getProps: t, getErrorBoundaryProps: r, selector: o, wrapper: c }) => {
                  const n = c.querySelectorAll(o);
                  m({ Block: e, containers: n, getProps: t, getErrorBoundaryProps: r });
                })({ ...e, wrapper: t });
              });
            });
        })({
          selector: '.wp-block-woocommerce-all-products',
          Block: e => (0, o.createElement)(J, { ...e }),
          getProps: e => ({ attributes: JSON.parse(e.dataset.attributes) }),
        });
      },
      5849: (e, t, r) => {
        'use strict';
        r.d(t, {
          Hw: () => x,
          Vo: () => b,
          XK: () => h,
          iI: () => _,
          r7: () => E,
          sW: () => g,
          sq: () => w,
        });
        var o,
          c,
          n,
          a,
          l,
          s,
          i,
          u,
          d,
          m,
          p = r(5703);
        const E = (0, p.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          g = E.pluginUrl + 'assets/images/',
          h = E.pluginUrl + 'assets/client/blocks/',
          w = E.buildPhase,
          b =
            (null === (o = p.STORE_PAGES.shop) || void 0 === o || o.permalink,
            null === (c = p.STORE_PAGES.checkout) || void 0 === c || c.id,
            null === (n = p.STORE_PAGES.checkout) || void 0 === n || n.permalink,
            null === (a = p.STORE_PAGES.privacy) || void 0 === a || a.permalink,
            null === (l = p.STORE_PAGES.privacy) || void 0 === l || l.title,
            null === (s = p.STORE_PAGES.terms) || void 0 === s || s.permalink,
            null === (i = p.STORE_PAGES.terms) || void 0 === i || i.title,
            null === (u = p.STORE_PAGES.cart) || void 0 === u || u.id,
            null === (d = p.STORE_PAGES.cart) || void 0 === d ? void 0 : d.permalink),
          f =
            (null !== (m = p.STORE_PAGES.myaccount) && void 0 !== m && m.permalink
              ? p.STORE_PAGES.myaccount.permalink
              : (0, p.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, p.getSetting)('localPickupEnabled', !1),
            (0, p.getSetting)('countries', {})),
          y = (0, p.getSetting)('countryData', {}),
          _ =
            (Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, f[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, f[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(Object.keys(y).map(e => [e, y[e].locale || []]))),
          k = {
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
          x = (0, p.getSetting)('addressFieldsLocations', k).address;
        (0, p.getSetting)('addressFieldsLocations', k).contact,
          (0, p.getSetting)('addressFieldsLocations', k).order,
          (0, p.getSetting)('additionalOrderFields', {}),
          (0, p.getSetting)('additionalContactFields', {}),
          (0, p.getSetting)('additionalAddressFields', {});
      },
      5940: (e, t, r) => {
        'use strict';
        r.d(t, { kM: () => c }), window.wp.blocks;
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
          c = r(5940);
      },
      9407: () => {},
      4156: () => {},
      7532: () => {},
      4458: () => {},
      3135: () => {},
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
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      6004: e => {
        'use strict';
        e.exports = window.wp.autop;
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
  function l(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { exports: {} });
    return n[e].call(r.exports, r, r.exports, l), r.exports;
  }
  (l.m = n),
    (e = []),
    (l.O = (t, r, o, c) => {
      if (!r) {
        var n = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [r, o, c] = e[u], a = !0, s = 0; s < r.length; s++)
            (!1 & c || n >= c) && Object.keys(l.O).every(e => l.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((a = !1), c < n && (n = c));
          if (a) {
            e.splice(u--, 1);
            var i = o();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      c = c || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > c; u--) e[u] = e[u - 1];
      e[u] = [r, o, c];
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
    (l.f = {}),
    (l.e = e => Promise.all(Object.keys(l.f).reduce((t, r) => (l.f[r](e, t), t), []))),
    (l.u = e =>
      ({
        345: 'product-stock-indicator',
        462: 'product-rating',
        1028: 'product-average-rating',
        2105: 'product-title',
        2388: 'product-price',
        2724: 'product-sku',
        3895: 'product-summary',
        4232: 'product-image',
        4442: 'product-sale-badge',
        7409: 'product-button',
        8553: 'product-rating-counter',
        8578: 'product-rating-stars',
      }[e] +
      '-frontend.js?ver=' +
      {
        345: '31dba24214d737905270',
        462: '41327639e39c9812f6ff',
        1028: 'a97ea82a24073d8d795d',
        2105: 'cfbf76b8462354a22b5e',
        2388: '4e9b260b787059fdd4d4',
        2724: '7fbd60c2ec289114454f',
        3895: '7cf5590be69c97b18c65',
        4232: '24cf001de3b8f46694e4',
        4442: '3a98fd3f833cabd8aebd',
        7409: '49e48dfb346cee2e61d7',
        8553: '32523a94960d6d405550',
        8578: '4eba5f2c236be9fee06d',
      }[e])),
    (l.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o = {}),
    (c = 'webpackWcBlocksFrontendJsonp:'),
    (l.l = (e, t, r, n) => {
      if (o[e]) o[e].push(t);
      else {
        var a, s;
        if (void 0 !== r)
          for (var i = document.getElementsByTagName('script'), u = 0; u < i.length; u++) {
            var d = i[u];
            if (d.getAttribute('src') == e || d.getAttribute('data-webpack') == c + r) {
              a = d;
              break;
            }
          }
        a ||
          ((s = !0),
          ((a = document.createElement('script')).charset = 'utf-8'),
          (a.timeout = 120),
          l.nc && a.setAttribute('nonce', l.nc),
          a.setAttribute('data-webpack', c + r),
          (a.src = e)),
          (o[e] = [t]);
        var m = (t, r) => {
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
          p = setTimeout(m.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
        (a.onerror = m.bind(null, a.onerror)),
          (a.onload = m.bind(null, a.onload)),
          s && document.head.appendChild(a);
      }
    }),
    (l.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.j = 1001),
    (() => {
      var e;
      l.g.importScripts && (e = l.g.location + '');
      var t = l.g.document;
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
        (l.p = e);
    })(),
    (() => {
      var e = { 1001: 0 };
      (l.f.j = (t, r) => {
        var o = l.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var c = new Promise((r, c) => (o = e[t] = [r, c]));
            r.push((o[2] = c));
            var n = l.p + l.u(t),
              a = new Error();
            l.l(
              n,
              r => {
                if (l.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
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
        (l.O.j = t => 0 === e[t]);
      var t = (t, r) => {
          var o,
            c,
            [n, a, s] = r,
            i = 0;
          if (n.some(t => 0 !== e[t])) {
            for (o in a) l.o(a, o) && (l.m[o] = a[o]);
            if (s) var u = s(l);
          }
          for (t && t(r); i < n.length; i++) (c = n[i]), l.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return l.O(u);
        },
        r = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var s = l.O(void 0, [94], () => l(7286));
  (s = l.O(s)), ((wc = void 0 === wc ? {} : wc)['all-products'] = s);
})();
