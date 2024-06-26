var wc;
(() => {
  'use strict';
  var e = {
      5226: (e, t, r) => {
        r.d(t, { navigate: () => s });
        var o = r(3097);
        const a = window.wc.wcSettings,
          n = (0, a.getSetting)('isBlockTheme'),
          c = (0, a.getSetting)('isProductArchive'),
          i = (0, a.getSetting)('needsRefreshForInteractivityAPI', !1);
        function s(e, t = {}) {
          const r = new URL(e);
          return (
            (r.pathname = r.pathname.replace(/\/page\/[0-9]+/i, '')),
            r.searchParams.delete('paged'),
            r.searchParams.forEach((e, t) => {
              t.match(/^query(?:-[0-9]+)?-page$/) && r.searchParams.delete(t);
            }),
            (e = r.href),
            i || (!n && c) ? (window.location.href = e) : (0, o.navigate)(e, t)
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
    var n = (t[o] = { exports: {} });
    return e[o](n, n.exports, r), n.exports;
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
    const a = e => {
      const t = new URL(window.location.href),
        { searchParams: r } = t;
      return '' !== e ? r.set('filter_stock_status', e) : r.delete('filter_stock_status'), t.href;
    };
    (0, e.store)('woocommerce/product-filter-stock-status', {
      actions: {
        onCheckboxChange: () => {
          const r = (0, e.getContext)('woocommerce/interactivity-checkbox-list')
            .items.filter(e => e.checked)
            .map(e => e.value);
          (0, t.navigate)(a(r.join(',')));
        },
        onDropdownChange: () => {
          const r = (
            (0, e.getContext)('woocommerce/interactivity-dropdown').selectedItems || []
          ).map(e => e.value);
          (0, t.navigate)(a(r.join(',')));
        },
        updateProducts: e => {
          const r = new URL(window.location.href).searchParams.get('filter_stock_status') || '',
            o = '' === r ? [] : r.split(',');
          if (e.target.checked) r.includes(e.target.value) || o.push(e.target.value);
          else {
            const t = o.indexOf(e.target.value);
            t > -1 && o.splice(t, 1);
          }
          (0, t.navigate)(a(o.join(',')));
        },
        removeFilter: () => {
          const { value: r } = (0, e.getContext)(),
            o = new URL(window.location.href).searchParams.get('filter_stock_status') || '',
            n = '' === o ? [] : o.split(','),
            c = n.indexOf(r);
          c > -1 && n.splice(c, 1), (0, t.navigate)(a(n.join(',')));
        },
      },
    });
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-filter-stock-status'] = o);
})();
