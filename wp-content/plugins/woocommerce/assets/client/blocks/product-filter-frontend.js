var wc;
(() => {
  'use strict';
  var e = {
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
    r.r(a), r.d(a, { navigate: () => c });
    var e = r(3097);
    const t = window.wc.wcSettings,
      o = (0, t.getSetting)('isBlockTheme'),
      n = (0, t.getSetting)('isProductArchive'),
      i = (0, t.getSetting)('needsRefreshForInteractivityAPI', !1);
    function c(t, r = {}) {
      const a = new URL(t);
      return (
        (a.pathname = a.pathname.replace(/\/page\/[0-9]+/i, '')),
        a.searchParams.delete('paged'),
        a.searchParams.forEach((e, t) => {
          t.match(/^query(?:-[0-9]+)?-page$/) && a.searchParams.delete(t);
        }),
        (t = a.href),
        i || (!o && n) ? (window.location.href = t) : (0, e.navigate)(t, r)
      );
    }
  })(),
    ((wc = void 0 === wc ? {} : wc)['product-filter'] = a);
})();
