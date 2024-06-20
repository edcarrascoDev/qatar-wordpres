(() => {
  'use strict';
  var e = {
      12267: e => {
        e.exports = function(e, r, t, n) {
          e = (e + '').replace(/[^0-9+\-Ee.]/g, '');
          var i = isFinite(+e) ? +e : 0,
            o = isFinite(+r) ? Math.abs(r) : 0,
            a = void 0 === n ? ',' : n,
            u = void 0 === t ? '.' : t,
            l = '';
          return (
            (l = (o
              ? (function(e, r) {
                  if (-1 === ('' + e).indexOf('e')) return +(Math.round(e + 'e+' + r) + 'e-' + r);
                  var t = ('' + e).split('e'),
                    n = '';
                  return (
                    +t[1] + r > 0 && (n = '+'),
                    (+(Math.round(+t[0] + 'e' + n + (+t[1] + r)) + 'e-' + r)).toFixed(r)
                  );
                })(i, o).toString()
              : '' + Math.round(i)
            ).split('.')),
            l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)),
            (l[1] || '').length < o &&
              ((l[1] = l[1] || ''), (l[1] += new Array(o - l[1].length + 1).join('0'))),
            l.join(u)
          );
        };
      },
    },
    r = {};
  function t(n) {
    var i = r[n];
    if (void 0 !== i) return i.exports;
    var o = (r[n] = { exports: {} });
    return e[n](o, o.exports, t), o.exports;
  }
  (t.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return t.d(r, { a: r }), r;
  }),
    (t.d = (e, r) => {
      for (var n in r)
        t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
    }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var n = {};
  (() => {
    t.r(n),
      t.d(n, {
        calculateDelta: () => a,
        formatValue: () => o,
        numberFormat: () => i,
        parseNumber: () => u,
      });
    var e = t(12267),
      r = t.n(e);
    function i({ precision: e = null, decimalSeparator: t = '.', thousandSeparator: n = ',' }, i) {
      if (void 0 === i) return '';
      if (('number' != typeof i && (i = parseFloat(i)), isNaN(i))) return '';
      let o = null === e ? NaN : Number(e);
      if (isNaN(o)) {
        const [, e] = i.toString().split('.');
        o = e ? e.length : 0;
      }
      return r()(i, o, t, n);
    }
    function o(e, r, t) {
      if (!Number.isFinite(t)) return null;
      switch (r) {
        case 'average':
          return Math.round(t);
        case 'number':
          return i({ ...e, precision: null }, t);
      }
      return null;
    }
    function a(e, r) {
      return Number.isFinite(e) && Number.isFinite(r)
        ? 0 === r
          ? 0
          : Math.round(((e - r) / r) * 100)
        : null;
    }
    function u({ precision: e = null, decimalSeparator: r = '.', thousandSeparator: t = ',' }, n) {
      if ('string' != typeof n || '' === n) return '';
      let i = null === e ? NaN : Number(e);
      if (isNaN(i)) {
        const [, e] = n.split(r);
        i = e ? e.length : 0;
      }
      let o = n;
      return (
        t && (o = o.replace(new RegExp(`\\${t}`, 'g'), '')),
        r && (o = o.replace(new RegExp(`\\${r}`, 'g'), '.')),
        Number.parseFloat(o).toFixed(i)
      );
    }
  })(),
    ((window.wc = window.wc || {}).number = n);
})();
