var wc;
(() => {
  'use strict';
  var e = {
      5226: (e, t, r) => {
        r.d(t, { navigate: () => c });
        var a = r(3097);
        const n = window.wc.wcSettings,
          o = (0, n.getSetting)('isBlockTheme'),
          i = (0, n.getSetting)('isProductArchive'),
          l = (0, n.getSetting)('needsRefreshForInteractivityAPI', !1);
        function c(e, t = {}) {
          const r = new URL(e);
          return (
            (r.pathname = r.pathname.replace(/\/page\/[0-9]+/i, '')),
            r.searchParams.delete('paged'),
            r.searchParams.forEach((e, t) => {
              t.match(/^query(?:-[0-9]+)?-page$/) && r.searchParams.delete(t);
            }),
            (e = r.href),
            l || (!o && i) ? (window.location.href = e) : (0, a.navigate)(e, t)
          );
        }
      },
      3097: e => {
        e.exports = window.wc.__experimentalInteractivity;
      },
    },
    t = {};
  function r(a) {
    var n = t[a];
    if (void 0 !== n) return n.exports;
    var o = (t[a] = { exports: {} });
    return e[a](o, o.exports, r), o.exports;
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
    function n(e) {
      return null != e;
    }
    function o(e, t, r) {
      const a = new URL(window.location.href),
        { searchParams: n } = a;
      return (
        e.length > 0
          ? (n.set(`filter_${t}`, e.join(',')), n.set(`query_type_${t}`, r))
          : (n.delete(`filter_${t}`), n.delete(`query_type_${t}`)),
        a.href
      );
    }
    function i(e) {
      return (new URL(window.location.href).searchParams.get(`filter_${e}`) || '')
        .split(',')
        .filter(Boolean);
    }
    (0, e.store)('woocommerce/product-filter-attribute', {
      actions: {
        navigate: () => {
          const r = (0, e.getContext)('woocommerce/interactivity-dropdown'),
            a = (0, e.getContext)(),
            i = r.selectedItems.map(e => e.value).filter(n);
          (0, t.navigate)(o(i, a.attributeSlug, a.queryType));
        },
        updateProducts: r => {
          if (!r.target.value) return;
          const a = (0, e.getContext)();
          let n = i(a.attributeSlug);
          r.target.checked && !n.includes(r.target.value)
            ? ('multiple' === a.selectType && n.push(r.target.value),
              'single' === a.selectType && (n = [r.target.value]))
            : (n = n.filter(e => e !== r.target.value)),
            (0, t.navigate)(o(n, a.attributeSlug, a.queryType));
        },
        removeFilter: () => {
          const { attributeSlug: r, queryType: a, value: n } = (0, e.getContext)();
          let l = i(r);
          (l = l.filter(e => e !== n)), (0, t.navigate)(o(l, r, a));
        },
      },
    });
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-filter-attribute'] = a);
})();
