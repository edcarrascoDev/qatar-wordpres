var wc;
(() => {
  'use strict';
  var e = {
      5226: (e, t, r) => {
        r.d(t, { navigate: () => s });
        var a = r(3097);
        const o = window.wc.wcSettings,
          n = (0, o.getSetting)('isBlockTheme'),
          i = (0, o.getSetting)('isProductArchive'),
          c = (0, o.getSetting)('needsRefreshForInteractivityAPI', !1);
        function s(e, t = {}) {
          const r = new URL(e);
          return (
            (r.pathname = r.pathname.replace(/\/page\/[0-9]+/i, '')),
            r.searchParams.delete('paged'),
            r.searchParams.forEach((e, t) => {
              t.match(/^query(?:-[0-9]+)?-page$/) && r.searchParams.delete(t);
            }),
            (e = r.href),
            c || (!n && i) ? (window.location.href = e) : (0, a.navigate)(e, t)
          );
        }
      },
      3097: e => {
        e.exports = window.wc.__experimentalInteractivity;
      },
    },
    t = {};
  function r(a) {
    var o = t[a];
    if (void 0 !== o) return o.exports;
    var n = (t[a] = { exports: {} });
    return e[a](n, n.exports, r), n.exports;
  }
  (r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var a = {};
  (() => {
    r.r(a);
    var e = r(3097),
      t = r(5226);
    function o(e) {
      e = e.filter(Boolean);
      const t = new URL(window.location.href);
      return (
        e.length
          ? t.searchParams.set('rating_filter', e.join(','))
          : t.searchParams.delete('rating_filter'),
        t.href
      );
    }
    (0, e.store)('woocommerce/product-filter-rating', {
      actions: {
        onCheckboxChange: () => {
          const r = (0, e.getContext)('woocommerce/interactivity-checkbox-list')
            .items.filter(e => e.checked)
            .map(e => e.value);
          (0, t.navigate)(o(r));
        },
        onDropdownChange: () => {
          const r = (
            (0, e.getContext)('woocommerce/interactivity-dropdown').selectedItems || []
          ).map(e => e.value);
          (0, t.navigate)(o(r));
        },
        removeFilter: () => {
          const { value: r } = (0, e.getContext)(),
            a = new URL(window.location.href).searchParams.get('rating_filter') || '',
            n = '' === a ? [] : a.split(','),
            i = n.indexOf(r);
          i > -1 && n.splice(i, 1), (0, t.navigate)(o(n));
        },
      },
    });
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-filter-rating'] = a);
})();
