/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      92868: function(e, t, n) {
        var r,
          o =
            o ||
            (function(e) {
              'use strict';
              if ('undefined' == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                var t = e.document,
                  n = function() {
                    return e.URL || e.webkitURL || e;
                  },
                  r = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
                  o = 'download' in r,
                  a = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                  i = e.webkitRequestFileSystem,
                  c = e.requestFileSystem || i || e.mozRequestFileSystem,
                  u = function(t) {
                    (e.setImmediate || e.setTimeout)(function() {
                      throw t;
                    }, 0);
                  },
                  l = 'application/octet-stream',
                  s = 0,
                  d = function(e) {
                    setTimeout(function() {
                      'string' == typeof e ? n().revokeObjectURL(e) : e.remove();
                    }, 4e4);
                  },
                  f = function(e, t, n) {
                    for (var r = (t = [].concat(t)).length; r--; ) {
                      var o = e['on' + t[r]];
                      if ('function' == typeof o)
                        try {
                          o.call(e, n || e);
                        } catch (e) {
                          u(e);
                        }
                    }
                  },
                  p = function(e) {
                    return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                      e.type,
                    )
                      ? new Blob(['\ufeff', e], { type: e.type })
                      : e;
                  },
                  v = function(t, u, v) {
                    v || (t = p(t));
                    var w,
                      y,
                      m,
                      S = this,
                      g = t.type,
                      b = !1,
                      h = function() {
                        f(S, 'writestart progress write writeend'.split(' '));
                      },
                      O = function() {
                        if (y && a && 'undefined' != typeof FileReader) {
                          var r = new FileReader();
                          return (
                            (r.onloadend = function() {
                              var e = r.result;
                              (y.location.href =
                                'data:attachment/file' + e.slice(e.search(/[,;]/))),
                                (S.readyState = S.DONE),
                                h();
                            }),
                            r.readAsDataURL(t),
                            void (S.readyState = S.INIT)
                          );
                        }
                        (!b && w) || (w = n().createObjectURL(t)),
                          y
                            ? (y.location.href = w)
                            : void 0 === e.open(w, '_blank') && a && (e.location.href = w),
                          (S.readyState = S.DONE),
                          h(),
                          d(w);
                      },
                      R = function(e) {
                        return function() {
                          if (S.readyState !== S.DONE) return e.apply(this, arguments);
                        };
                      },
                      E = { create: !0, exclusive: !1 };
                    if (((S.readyState = S.INIT), u || (u = 'download'), o))
                      return (
                        (w = n().createObjectURL(t)),
                        void setTimeout(function() {
                          var e, t;
                          (r.href = w),
                            (r.download = u),
                            (e = r),
                            (t = new MouseEvent('click')),
                            e.dispatchEvent(t),
                            h(),
                            d(w),
                            (S.readyState = S.DONE);
                        })
                      );
                    e.chrome &&
                      g &&
                      g !== l &&
                      ((m = t.slice || t.webkitSlice), (t = m.call(t, 0, t.size, l)), (b = !0)),
                      i && 'download' !== u && (u += '.download'),
                      (g === l || i) && (y = e),
                      c
                        ? ((s += t.size),
                          c(
                            e.TEMPORARY,
                            s,
                            R(function(e) {
                              e.root.getDirectory(
                                'saved',
                                E,
                                R(function(e) {
                                  var n = function() {
                                    e.getFile(
                                      u,
                                      E,
                                      R(function(e) {
                                        e.createWriter(
                                          R(function(n) {
                                            (n.onwriteend = function(t) {
                                              (y.location.href = e.toURL()),
                                                (S.readyState = S.DONE),
                                                f(S, 'writeend', t),
                                                d(e);
                                            }),
                                              (n.onerror = function() {
                                                var e = n.error;
                                                e.code !== e.ABORT_ERR && O();
                                              }),
                                              'writestart progress write abort'
                                                .split(' ')
                                                .forEach(function(e) {
                                                  n['on' + e] = S['on' + e];
                                                }),
                                              n.write(t),
                                              (S.abort = function() {
                                                n.abort(), (S.readyState = S.DONE);
                                              }),
                                              (S.readyState = S.WRITING);
                                          }),
                                          O,
                                        );
                                      }),
                                      O,
                                    );
                                  };
                                  e.getFile(
                                    u,
                                    { create: !1 },
                                    R(function(e) {
                                      e.remove(), n();
                                    }),
                                    R(function(e) {
                                      e.code === e.NOT_FOUND_ERR ? n() : O();
                                    }),
                                  );
                                }),
                                O,
                              );
                            }),
                            O,
                          ))
                        : O();
                  },
                  w = v.prototype;
                return 'undefined' != typeof navigator && navigator.msSaveOrOpenBlob
                  ? function(e, t, n) {
                      return n || (e = p(e)), navigator.msSaveOrOpenBlob(e, t || 'download');
                    }
                  : ((w.abort = function() {
                      var e = this;
                      (e.readyState = e.DONE), f(e, 'abort');
                    }),
                    (w.readyState = w.INIT = 0),
                    (w.WRITING = 1),
                    (w.DONE = 2),
                    (w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null),
                    function(e, t, n) {
                      return new v(e, t, n);
                    });
              }
            })(
              ('undefined' != typeof self && self) ||
                ('undefined' != typeof window && window) ||
                this.content,
            );
        e.exports
          ? (e.exports.saveAs = o)
          : null !== n.amdD &&
            null !== n.amdO &&
            (void 0 ===
              (r = function() {
                return o;
              }.apply(t, [])) ||
              (e.exports = r));
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.amdD = function() {
    throw new Error('define cannot be used indirect');
  }),
    (n.amdO = {}),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var r = {};
  (() => {
    'use strict';
    n.r(r),
      n.d(r, {
        downloadCSVFile: () => u,
        generateCSVDataFromTable: () => i,
        generateCSVFileName: () => c,
      });
    var e = n(92868);
    function t(e) {
      let t = e.toString();
      return (
        ['=', '+', '-', '@', String.fromCharCode(9), String.fromCharCode(13)].includes(t.charAt(0))
          ? (t = '"\'' + t + '"')
          : t.match(/[,"\s]/) && (t = '"' + t.replace(/"/g, '""') + '"'),
        t
      );
    }
    function o(e) {
      return Array.isArray(e) ? e.map(e => t(e.label)).join(',') : [];
    }
    function a(e) {
      return Array.isArray(e)
        ? e
            .map(e =>
              e.map(e => (void 0 === e.value || null === e.value ? '' : t(e.value))).join(','),
            )
            .join('\n')
        : [];
    }
    function i(e, t) {
      return [o(e), a(t)].filter(e => e.length).join('\n');
    }
    function c(e = '', t = {}) {
      return (
        [
          e.toLowerCase().replace(/[^a-z0-9]/g, '-'),
          new Date().toISOString().split('T')[0],
          Object.keys(t)
            .map(
              e =>
                e.toLowerCase().replace(/[^a-z0-9]/g, '-') +
                '-' +
                decodeURIComponent(t[e])
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, '-'),
            )
            .join('_'),
        ]
          .filter(e => e.length)
          .join('_') + '.csv'
      );
    }
    function u(t, n) {
      const r = new Blob([n], { type: 'text/csv;charset=utf-8' });
      (0, e.saveAs)(r, t);
    }
  })(),
    ((window.wc = window.wc || {}).csvExport = r);
})();
