var wc;
(() => {
  'use strict';
  var e = {
      5226: (e, t, r) => {
        r.d(t, { navigate: () => l });
        var o = r(3097);
        const a = window.wc.wcSettings,
          c = (0, a.getSetting)('isBlockTheme'),
          i = (0, a.getSetting)('isProductArchive'),
          n = (0, a.getSetting)('needsRefreshForInteractivityAPI', !1);
        function l(e, t = {}) {
          const r = new URL(e);
          return (
            (r.pathname = r.pathname.replace(/\/page\/[0-9]+/i, '')),
            r.searchParams.delete('paged'),
            r.searchParams.forEach((e, t) => {
              t.match(/^query(?:-[0-9]+)?-page$/) && r.searchParams.delete(t);
            }),
            (e = r.href),
            n || (!c && i) ? (window.location.href = e) : (0, o.navigate)(e, t)
          );
        }
      },
      3097: e => {
        e.exports = window.wc.__experimentalInteractivity;
      },
    },
    t = {};
  function r(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var c = (t[o] = { exports: {} });
    return e[o](c, c.exports, r), c.exports;
  }
  (r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var o in t)
        r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var o = {};
  (() => {
    r.r(o);
    var e = r(3097),
      t = r(5226);
    (0, e.store)('woocommerce/product-filter', {
      actions: {
        clear: r => {
          const o = (e => {
              var t;
              const r =
                  null === (t = e.target) || void 0 === t
                    ? void 0
                    : t.closest('nav.wp-block-woocommerce-product-filter'),
                o =
                  null == r ? void 0 : r.querySelector('[data-block-name][data-has-filter="yes"]');
              switch (null == o ? void 0 : o.getAttribute('data-block-name')) {
                case 'woocommerce/product-filter-attribute':
                  const e = null == o ? void 0 : o.getAttribute('data-wc-context'),
                    t = e ? JSON.parse(e) : null;
                  return [
                    `filter_${null == t ? void 0 : t.attributeSlug}`,
                    `query_type_${null == t ? void 0 : t.attributeSlug}`,
                  ];
                case 'woocommerce/product-filter-price':
                  return ['min_price', 'max_price'];
                case 'woocommerce/product-filter-rating':
                  return ['rating_filter'];
                case 'woocommerce/product-filter-stock-status':
                  return ['filter_stock_status'];
              }
            })(r),
            a = new URL(window.location.href),
            { searchParams: c } = a;
          let i = !1;
          null == o ||
            o.forEach(e => {
              null !== c.get(e) && (c.delete(e), (i = !0));
            }),
            ((0, e.getContext)('woocommerce/product-filter').hasSelectedFilter = !1),
            i && (0, t.navigate)(a.href);
        },
      },
    });
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-filter-clear-button'] = o);
})();
