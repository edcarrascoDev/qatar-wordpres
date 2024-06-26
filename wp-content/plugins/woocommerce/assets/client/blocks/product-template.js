(() => {
  var e,
    t,
    o,
    r = {
      508: (e, t, o) => {
        'use strict';
        o.r(t);
        const r = window.wp.blocks,
          n = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-template","title":"Product Template","category":"woocommerce","description":"Contains the block elements used to render a product.","keywords":["WooCommerce"],"textdomain":"woocommerce","usesContext":["queryId","query","queryContext","displayLayout","templateSlug","postId","queryContextIncludes","collection","__privateProductCollectionPreviewState"],"supports":{"inserter":false,"reusable":false,"html":false,"align":["wide","full"],"anchor":true,"__experimentalLayout":{"allowEditing":false},"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}}}',
          );
        var c = o(1609),
          l = o(9019),
          s = o.n(l),
          i = o(6087);
        const a = window.wp.data;
        var u = o(7723);
        const d = window.wp.blockEditor,
          p = window.wp.components,
          m = window.wp.coreData,
          w = window.wc.wcSettings,
          g = window.wc.wcTypes,
          y = window.wc.wcBlocksSharedContext;
        var f = o(2294),
          h = o(9491);
        window.wp.url;
        const v = window.wp.apiFetch;
        var k = o.n(v);
        const b = (0, h.createHigherOrderComponent)(
          e =>
            class extends i.Component {
              constructor(...e) {
                super(...e),
                  (0, f.A)(this, 'state', {
                    error: null,
                    loading: !1,
                    product:
                      'preview' === this.props.attributes.productId
                        ? this.props.attributes.previewProduct
                        : null,
                  }),
                  (0, f.A)(this, 'loadProduct', () => {
                    const { productId: e } = this.props.attributes;
                    'preview' !== e &&
                      (e
                        ? (this.setState({ loading: !0 }),
                          (e => k()({ path: `/wc/store/v1/products/${e}` }))(e)
                            .then(e => {
                              this.setState({ product: e, loading: !1, error: null });
                            })
                            .catch(async e => {
                              const t = await (async e => {
                                if (!('json' in e))
                                  return { message: e.message, type: e.type || 'general' };
                                try {
                                  const t = await e.json();
                                  return { message: t.message, type: t.type || 'api' };
                                } catch (e) {
                                  return { message: e.message, type: 'general' };
                                }
                              })(e);
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
                const { error: t, loading: o, product: r } = this.state;
                return (0, c.createElement)(e, {
                  ...this.props,
                  error: t,
                  getProduct: this.loadProduct,
                  isLoading: o,
                  product: r,
                });
              }
            },
          'withProduct',
        );
        let x = (function(e) {
          return (
            (e.Product = 'product'),
            (e.Archive = 'archive'),
            (e.Cart = 'cart'),
            (e.Order = 'order'),
            (e.Site = 'site'),
            e
          );
        })({});
        const _ = 'single-product',
          C = 'taxonomy-product_cat',
          I = 'taxonomy-product_tag',
          S = async (e, t, o, r) => {
            var n, c;
            r(
              (n = await (0, a.resolveSelect)(m.store).getEntityRecords(e, t, {
                _fields: ['id'],
                slug: o,
              })) &&
                n.length &&
                null !== (c = n[0]) &&
                void 0 !== c &&
                c.id
                ? n[0].id
                : null,
            );
          },
          P = (e, t = {}) => ({ type: e, sourceData: t });
        o(1704);
        let O = (function(e) {
            return (e.GRID = 'flex'), (e.STACK = 'list'), e;
          })({}),
          B = (function(e) {
            return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
          })({});
        var E = o(7104),
          j = o(4478);
        (0, u.__)('Product Title', 'woocommerce'),
          (0, c.createElement)(E.A, {
            icon: j.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          (0, u.__)('Display the title of a product.', 'woocommerce');
        JSON.parse('{"name":"woocommerce/product-collection"}').name;
        const T = (0, w.getSetting)('stockStatusOptions', []),
          A = (0, w.getSetting)('hideOutOfStockItems', !1),
          N = () =>
            A
              ? Object.keys(
                  (function(e, t) {
                    const { [t]: o, ...r } = e;
                    return r;
                  })(T, 'outofstock'),
                )
              : Object.keys(T),
          M = (N(), O.GRID, B.THUMBNAIL, ['collection']),
          H = () => {
            const e = (0, d.useInnerBlocksProps)(
              { className: 'wc-block-product' },
              { __unstableDisableLayoutClassNames: !0 },
            );
            return (0, c.createElement)('li', { ...e });
          },
          L = (0, i.memo)(
            ({ blocks: e, blockContextId: t, isHidden: o, setActiveBlockContextId: r }) => {
              const n = (0, d.__experimentalUseBlockPreview)({
                  blocks: e,
                  props: { className: 'wc-block-product' },
                }),
                l = () => {
                  r(t);
                },
                s = { display: o ? 'none' : void 0 };
              return (0, c.createElement)('li', {
                ...n,
                tabIndex: 0,
                role: 'button',
                onClick: l,
                onKeyPress: l,
                style: s,
              });
            },
          ),
          D = b(
            ({
              isLoading: e,
              product: t,
              displayTemplate: o,
              blocks: r,
              blockContext: n,
              setActiveBlockContextId: l,
            }) =>
              (0, c.createElement)(
                d.BlockContextProvider,
                { key: n.postId, value: n },
                (0, c.createElement)(
                  y.ProductDataContextProvider,
                  { product: t, isLoading: e },
                  o ? (0, c.createElement)(H, null) : null,
                  (0, c.createElement)(L, {
                    blocks: r,
                    blockContextId: n.postId,
                    setActiveBlockContextId: l,
                    isHidden: o,
                  }),
                ),
              ),
          );
        o(1434),
          (0, r.registerBlockType)(n, {
            icon: () =>
              (0, c.createElement)(
                'svg',
                {
                  width: '24',
                  height: '24',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                (0, c.createElement)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d:
                    'M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4ZM18 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V9H18.5V6C18.5 5.72386 18.2761 5.5 18 5.5ZM18.5 10.5H10L10 18.5H18C18.2761 18.5 18.5 18.2761 18.5 18V10.5ZM8.5 10.5H5.5V18C5.5 18.2761 5.72386 18.5 6 18.5H8.5L8.5 10.5Z',
                  fill: '#1E1E1E',
                }),
              ),
            edit: e => {
              const {
                  clientId: t,
                  context: {
                    query: {
                      perPage: o,
                      offset: r = 0,
                      order: n,
                      orderBy: l,
                      search: y,
                      exclude: f,
                      inherit: h,
                      taxQuery: v,
                      pages: k,
                      ...b
                    },
                    queryContext: O = [{ page: 1 }],
                    templateSlug: B,
                    displayLayout: { type: E, columns: j, shrinkColumns: T } = {
                      type: 'flex',
                      columns: 3,
                      shrinkColumns: !1,
                    },
                    queryContextIncludes: A = [],
                    __privateProductCollectionPreviewState: H,
                  },
                  __unstableLayoutClassNames: L,
                } = e,
                q = ((e, t) => {
                  const o = e.templateSlug || '',
                    r = e.postId || null,
                    n = (e => t => e.replace(`${t}-`, ''))(o),
                    c = (e => t => e.includes(t) && e !== t)(o),
                    l = c(_),
                    s = c(C),
                    u = c(I),
                    [p, m] = (0, i.useState)(null),
                    [w, g] = (0, i.useState)(null),
                    [y, f] = (0, i.useState)(null);
                  (0, i.useEffect)(() => {
                    if (l) {
                      const e = n(_);
                      S('postType', 'product', e, m);
                    }
                    if (s) {
                      const e = n(C);
                      S('taxonomy', 'product_cat', e, g);
                    }
                    if (u) {
                      const e = n(I);
                      S('taxonomy', 'product_tag', e, f);
                    }
                  }, [l, s, u, n]);
                  const { isInSingleProductBlock: h, isInSomeCartCheckoutBlock: v } = (0,
                  a.useSelect)(
                    e => {
                      const { getBlockParentsByBlockName: o } = e(d.store),
                        r = e => o(t, e).length > 0;
                      return {
                        isInSingleProductBlock: r(['woocommerce/single-product']),
                        isInSomeCartCheckoutBlock: r([
                          'woocommerce/cart',
                          'woocommerce/checkout',
                          'woocommerce/mini-cart-contents',
                        ]),
                      };
                    },
                    [t],
                  );
                  if (h) return P(x.Product, { productId: r });
                  if (v) return P(x.Cart);
                  if (l) return P(x.Product, { productId: p });
                  const k = (e => t => e === t)(o);
                  if (k(_)) return P(x.Product, { productId: null });
                  if (s) return P(x.Archive, { taxonomy: 'product_cat', termId: w });
                  if (u) return P(x.Archive, { taxonomy: 'product_tag', termId: y });
                  if (k(C)) return P(x.Archive, { taxonomy: 'product_cat', termId: null });
                  if (k(I)) return P(x.Archive, { taxonomy: 'product_tag', termId: null });
                  if (k('taxonomy-product_attribute'))
                    return P(x.Archive, { taxonomy: null, termId: null });
                  if ('page-cart' === o || 'page-checkout' === o) return P(x.Cart);
                  const b = k('order-confirmation');
                  return P(b ? x.Order : x.Site);
                })(e.context, e.clientId),
                [{ page: R }] = O,
                [V, W] = (0, i.useState)(),
                F = 'product',
                $ = (0, w.getSettingWithCoercion)('loopShopPerPage', 12, g.isNumber),
                J = [...new Set(A.concat(M))],
                U = (({ clientId: e, queryContextIncludes: t }) => {
                  const o = (0, a.useSelect)(
                    t => {
                      const { getBlockParentsByBlockName: o, getBlockAttributes: r } = t(
                          'core/block-editor',
                        ),
                        n = o(e, 'woocommerce/product-collection', !0);
                      return null != n && n.length ? r(n[0]) : null;
                    },
                    [e],
                  );
                  return (0, i.useMemo)(() => {
                    if (!o) return null;
                    const e = {};
                    return (
                      null != t &&
                        t.length &&
                        t.forEach(t => {
                          null != o && o[t] && (e[t] = o[t]);
                        }),
                      e
                    );
                  }, [t, o]);
                })({ clientId: t, queryContextIncludes: J }),
                { products: Z, blocks: G } = (0, a.useSelect)(
                  e => {
                    const { getEntityRecords: c, getTaxonomies: s } = e(m.store),
                      { getBlocks: i } = e(d.store),
                      a = s({ type: F, per_page: -1, context: 'view' }),
                      u =
                        h &&
                        (null == B ? void 0 : B.startsWith('category-')) &&
                        c('taxonomy', 'category', {
                          context: 'view',
                          per_page: 1,
                          _fields: ['id'],
                          slug: B.replace('category-', ''),
                        }),
                      p = { postType: F, offset: o ? o * (R - 1) + r : 0, order: n, orderby: l };
                    if (v && !h) {
                      const e = Object.entries(v).reduce((e, [t, o]) => {
                        const r = null == a ? void 0 : a.find(({ slug: e }) => e === t);
                        return (
                          null != r && r.rest_base && (e[null == r ? void 0 : r.rest_base] = o), e
                        );
                      }, {});
                      Object.keys(e).length && Object.assign(p, e);
                    }
                    var w;
                    (o && (p.per_page = o),
                    y && (p.search = y),
                    null != f && f.length && (p.exclude = f),
                    h) &&
                      (u && (p.categories = null === (w = u[0]) || void 0 === w ? void 0 : w.id),
                      (p.per_page = $));
                    return {
                      products: c('postType', F, {
                        ...p,
                        ...b,
                        location: q,
                        productCollectionQueryContext: U,
                        previewState: H,
                        ...(h && { woocommerceStockStatus: N() }),
                      }),
                      blocks: i(t),
                    };
                  },
                  [o, R, r, n, l, t, y, F, f, h, B, v, b, q, U, $, H],
                ),
                z = (0, i.useMemo)(
                  () => (null == Z ? void 0 : Z.map(e => ({ postType: e.type, postId: e.id }))),
                  [Z],
                );
              let K = '';
              'flex' === E &&
                j > 1 &&
                (K = T
                  ? `wc-block-product-template__responsive columns-${j}`
                  : `is-flex-container columns-${j}`);
              const Q = (0, d.useBlockProps)({ className: s()(L, 'wc-block-product-template', K) });
              return Z
                ? Z.length
                  ? (0, c.createElement)(
                      'ul',
                      { ...Q },
                      z &&
                        z.map(e => {
                          var t;
                          const o =
                            e.postId ===
                            (V || (null === (t = z[0]) || void 0 === t ? void 0 : t.postId));
                          return (0, c.createElement)(D, {
                            key: e.postId,
                            attributes: { productId: e.postId },
                            blocks: G,
                            displayTemplate: o,
                            blockContext: e,
                            setActiveBlockContextId: W,
                          });
                        }),
                    )
                  : (0, c.createElement)(
                      'p',
                      { ...Q },
                      ' ',
                      (0, u.__)('No results found.', 'woocommerce'),
                    )
                : (0, c.createElement)(
                    'p',
                    { ...Q },
                    (0, c.createElement)(p.Spinner, {
                      className: 'wc-block-product-template__spinner',
                    }),
                  );
            },
            save: function() {
              return (0, c.createElement)(d.InnerBlocks.Content, null);
            },
          });
      },
      1704: () => {},
      1434: () => {},
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
    var o = (n[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, c), o.exports;
  }
  (c.m = r),
    (e = []),
    (c.O = (t, o, r, n) => {
      if (!o) {
        var l = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [o, r, n] = e[u], s = !0, i = 0; i < o.length; i++)
            (!1 & n || l >= n) && Object.keys(c.O).every(e => c.O[e](o[i]))
              ? o.splice(i--, 1)
              : ((s = !1), n < l && (l = n));
          if (s) {
            e.splice(u--, 1);
            var a = r();
            void 0 !== a && (t = a);
          }
        }
        return t;
      }
      n = n || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > n; u--) e[u] = e[u - 1];
      e[u] = [o, r, n];
    }),
    (c.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (c.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      c.r(n);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var s = 2 & r && e; 'object' == typeof s && !~t.indexOf(s); s = o(s))
        Object.getOwnPropertyNames(s).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), c.d(n, l), n;
    }),
    (c.d = (e, t) => {
      for (var o in t)
        c.o(t, o) && !c.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (c.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.j = 3),
    (() => {
      var e = { 3: 0 };
      c.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            n,
            [l, s, i] = o,
            a = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in s) c.o(s, r) && (c.m[r] = s[r]);
            if (i) var u = i(c);
          }
          for (t && t(o); a < l.length; a++) (n = l[a]), c.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return c.O(u);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = c.O(void 0, [94], () => c(508));
  (l = c.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-template'] = l);
})();
