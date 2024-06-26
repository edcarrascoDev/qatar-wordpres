var wc;
(() => {
  'use strict';
  var e = {
      5226: (e, r, t) => {
        t.d(r, { navigate: () => m });
        var a = t(3097);
        const n = window.wc.wcSettings,
          i = (0, n.getSetting)('isBlockTheme'),
          c = (0, n.getSetting)('isProductArchive'),
          o = (0, n.getSetting)('needsRefreshForInteractivityAPI', !1);
        function m(e, r = {}) {
          const t = new URL(e);
          return (
            (t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, '')),
            t.searchParams.delete('paged'),
            t.searchParams.forEach((e, r) => {
              r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r);
            }),
            (e = t.href),
            o || (!i && c) ? (window.location.href = e) : (0, a.navigate)(e, r)
          );
        }
      },
      3097: e => {
        e.exports = window.wc.__experimentalInteractivity;
      },
    },
    r = {};
  function t(a) {
    var n = r[a];
    if (void 0 !== n) return n.exports;
    var i = (r[a] = { exports: {} });
    return e[a](i, i.exports, t), i.exports;
  }
  (t.d = (e, r) => {
    for (var a in r)
      t.o(r, a) && !t.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: r[a] });
  }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var a = {};
  (() => {
    t.r(a);
    var e = t(3097);
    const r = window.wc.priceFormat;
    var n = t(5226);
    const i = e => {
      const { minPrice: r, maxPrice: t, minRange: a, maxRange: n } = e,
        i = new URL(window.location.href),
        { searchParams: c } = i;
      return (
        r > a ? c.set('min_price', r.toString()) : c.delete('min_price'),
        t < n && t > a ? c.set('max_price', t.toString()) : c.delete('max_price'),
        c.forEach((e, r) => {
          /query-[0-9]+-page/.test(r) && c.delete(r);
        }),
        i.href
      );
    };
    (0, e.store)('woocommerce/product-filter-price', {
      state: {
        rangeStyle: () => {
          const { minPrice: r, maxPrice: t, minRange: a, maxRange: n } = (0, e.getContext)();
          return [
            `--low: ${(100 * (r - a)) / (n - a)}%`,
            `--high: ${(100 * (t - a)) / (n - a)}%`,
          ].join(';');
        },
        formattedMinPrice: () => {
          const { minPrice: t } = (0, e.getContext)();
          return (0, r.formatPrice)(t, (0, r.getCurrency)({ minorUnit: 0 }));
        },
        formattedMaxPrice: () => {
          const { maxPrice: t } = (0, e.getContext)();
          return (0, r.formatPrice)(t, (0, r.getCurrency)({ minorUnit: 0 }));
        },
      },
      actions: {
        updateProducts: t => {
          const { decimalSeparator: a } = (0, r.getCurrency)(),
            c = (0, e.getContext)(),
            { minRange: o, minPrice: m, maxPrice: g, maxRange: s } = c,
            p = t.target.name,
            d = parseInt(
              t.target.value
                .replace(new RegExp(`[^0-9\\${a}]+`, 'g'), '')
                .replace(new RegExp(`\\${a}`, 'g'), '.'),
              10,
            ),
            l = 'min' === p ? Math.min(Number.isNaN(d) ? o : d, g) : m,
            u = 'max' === p ? Math.max(Number.isNaN(d) ? s : d, m) : g,
            x = (0, e.getElement)();
          'min' === p && (x.ref.value = l),
            'max' === p && (x.ref.value = u),
            (c.minPrice = l),
            (c.maxPrice = u),
            (0, n.navigate)(i({ minRange: o, maxRange: s, minPrice: l, maxPrice: u }));
        },
        reset: () => {
          (0, n.navigate)(i({ minRange: 0, maxRange: 0, minPrice: 0, maxPrice: 0 }));
        },
      },
    });
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-filter-price'] = a);
})();
