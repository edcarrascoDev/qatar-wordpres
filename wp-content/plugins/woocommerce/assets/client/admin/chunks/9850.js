'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [9850],
  {
    83619: (n, t, e) => {
      e.d(t, { Z: () => a });
      var r = e(69307),
        o = e(70444);
      const a = (0, r.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, r.createElement)(o.Path, { d: 'M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z' }),
      );
    },
    2031: (n, t, e) => {
      e.d(t, { qC: () => o }), 'function' == typeof Symbol && Symbol.observable;
      var r = function() {
        return Math.random()
          .toString(36)
          .substring(7)
          .split('')
          .join('.');
      };
      function o() {
        for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++) t[e] = arguments[e];
        return 0 === t.length
          ? function(n) {
              return n;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function(n, t) {
              return function() {
                return n(t.apply(void 0, arguments));
              };
            });
      }
      r(), r();
    },
  },
]);
