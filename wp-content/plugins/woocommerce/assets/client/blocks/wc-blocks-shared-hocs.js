(() => {
  'use strict';
  var e = {
      n: t => {
        var r = t && t.__esModule ? () => t.default : () => t;
        return e.d(r, { a: r }), r;
      },
      d: (t, r) => {
        for (var o in r)
          e.o(r, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: r[o] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: e => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      },
    },
    t = {};
  e.r(t), e.d(t, { withFilteredAttributes: () => m, withProductDataContext: () => h });
  const r = window.React,
    o = window.wc.wcBlocksData,
    n = window.wp.data,
    a = window.wp.element,
    s = window.wp.isShallowEqual;
  var c = e.n(s);
  function u(e) {
    const t = (0, a.useRef)(e);
    return c()(e, t.current) || (t.current = e), t.current;
  }
  const i = window.wc.wcTypes,
    l = e => {
      const t = { namespace: '/wc/store/v1', resourceName: 'products' },
        { results: r, isLoading: s } = (e => {
          const {
            namespace: t,
            resourceName: r,
            resourceValues: s = [],
            query: c = {},
            shouldSelect: l = !0,
          } = e;
          if (!t || !r)
            throw new Error(
              'The options object must have valid values for the namespace and the resource properties.',
            );
          const d = (0, a.useRef)({ results: [], isLoading: !0 }),
            p = u(c),
            w = u(s),
            h = (() => {
              const [, e] = (0, a.useState)();
              return (0, a.useCallback)(t => {
                e(() => {
                  throw t;
                });
              }, []);
            })(),
            m = (0, n.useSelect)(
              e => {
                if (!l) return null;
                const n = e(o.COLLECTIONS_STORE_KEY),
                  a = [t, r, p, w],
                  s = n.getCollectionError(...a);
                if (s) {
                  if (!(0, i.isError)(s))
                    throw new Error(
                      'TypeError: `error` object is not an instance of Error constructor',
                    );
                  h(s);
                }
                return {
                  results: n.getCollection(...a),
                  isLoading: !n.hasFinishedResolution('getCollection', a),
                };
              },
              [t, r, w, p, l],
            );
          return null !== m && (d.current = m), d.current;
        })({ ...t, query: e }),
        { value: c } = ((e, t) => {
          const { namespace: r, resourceName: a, resourceValues: s = [], query: c = {} } = t;
          if (!r || !a)
            throw new Error(
              'The options object must have valid values for the namespace and the resource name properties.',
            );
          const i = u(c),
            l = u(s),
            { value: d, isLoading: p = !0 } = (0, n.useSelect)(
              t => {
                const n = t(o.COLLECTIONS_STORE_KEY),
                  s = [e, r, a, i, l];
                return {
                  value: n.getCollectionHeader(...s),
                  isLoading: n.hasFinishedResolution('getCollectionHeader', s),
                };
              },
              [e, r, a, l, i],
            );
          return { value: d, isLoading: p };
        })('x-wp-total', { ...t, query: e });
      return { products: r, totalProducts: parseInt(c, 10), productsLoading: s };
    },
    d = window.wc.wcBlocksSharedContext,
    p = (e, t) => e.find(e => e.id === t),
    w = e => {
      const { productId: t, OriginalComponent: o, postId: n, product: a } = e,
        s = null != e && e.isDescendentOfQueryLoop ? n : t,
        { products: c, productsLoading: u } = l({ include: s }),
        i = { product: s > 0 && c.length > 0 ? p(c, s) : null, isLoading: u };
      return a
        ? (0, r.createElement)(
            d.ProductDataContextProvider,
            { product: a, isLoading: !1 },
            (0, r.createElement)(o, { ...e }),
          )
        : (0, r.createElement)(
            d.ProductDataContextProvider,
            { product: i.product, isLoading: i.isLoading },
            (0, r.createElement)(o, { ...e }),
          );
    },
    h = e => t => {
      const o = (0, d.useProductDataContext)();
      return t.product || !o.hasContext
        ? (0, r.createElement)(w, { ...t, OriginalComponent: e })
        : (0, r.createElement)(e, { ...t });
    },
    m = e => t => o => {
      const n = ((e, t) => {
        const r = [];
        return (
          Object.keys(e).forEach(o => {
            if (void 0 !== t[o])
              switch (e[o].type) {
                case 'boolean':
                  r[o] = 'false' !== t[o] && !1 !== t[o];
                  break;
                case 'number':
                  r[o] = parseInt(t[o], 10);
                  break;
                case 'array':
                case 'object':
                  r[o] = JSON.parse(t[o]);
                  break;
                default:
                  r[o] = t[o];
              }
            else r[o] = e[o].default;
          }),
          r
        );
      })(e, o);
      return (0, r.createElement)(t, { ...o, ...n });
    };
  (this.wc = this.wc || {}).wcBlocksSharedHocs = t;
})();
