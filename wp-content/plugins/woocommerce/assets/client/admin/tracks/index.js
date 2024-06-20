(() => {
  var e = {
      95146: (e, t, n) => {
        (t.formatArgs = function(t) {
          if (
            ((t[0] =
              (this.useColors ? '%c' : '') +
              this.namespace +
              (this.useColors ? ' %c' : ' ') +
              t[0] +
              (this.useColors ? '%c ' : ' ') +
              '+' +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const n = 'color: ' + this.color;
          t.splice(1, 0, n, 'color: inherit');
          let r = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, e => {
            '%%' !== e && (r++, '%c' === e && (o = r));
          }),
            t.splice(o, 0, n);
        }),
          (t.save = function(e) {
            try {
              e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug');
            } catch (e) {}
          }),
          (t.load = function() {
            let e;
            try {
              e = t.storage.getItem('debug');
            } catch (e) {}
            return (
              !e && 'undefined' != typeof process && 'env' in process && (e = process.env.DEBUG), e
            );
          }),
          (t.useColors = function() {
            return (
              !(
                'undefined' == typeof window ||
                !window.process ||
                ('renderer' !== window.process.type && !window.process.__nwjs)
              ) ||
              (('undefined' == typeof navigator ||
                !navigator.userAgent ||
                !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) &&
                (('undefined' != typeof document &&
                  document.documentElement &&
                  document.documentElement.style &&
                  document.documentElement.style.WebkitAppearance) ||
                  ('undefined' != typeof window &&
                    window.console &&
                    (window.console.firebug ||
                      (window.console.exception && window.console.table))) ||
                  ('undefined' != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                    parseInt(RegExp.$1, 10) >= 31) ||
                  ('undefined' != typeof navigator &&
                    navigator.userAgent &&
                    navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))))
            );
          }),
          (t.storage = (function() {
            try {
              return localStorage;
            } catch (e) {}
          })()),
          (t.destroy = (() => {
            let e = !1;
            return () => {
              e ||
                ((e = !0),
                console.warn(
                  'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
                ));
            };
          })()),
          (t.colors = [
            '#0000CC',
            '#0000FF',
            '#0033CC',
            '#0033FF',
            '#0066CC',
            '#0066FF',
            '#0099CC',
            '#0099FF',
            '#00CC00',
            '#00CC33',
            '#00CC66',
            '#00CC99',
            '#00CCCC',
            '#00CCFF',
            '#3300CC',
            '#3300FF',
            '#3333CC',
            '#3333FF',
            '#3366CC',
            '#3366FF',
            '#3399CC',
            '#3399FF',
            '#33CC00',
            '#33CC33',
            '#33CC66',
            '#33CC99',
            '#33CCCC',
            '#33CCFF',
            '#6600CC',
            '#6600FF',
            '#6633CC',
            '#6633FF',
            '#66CC00',
            '#66CC33',
            '#9900CC',
            '#9900FF',
            '#9933CC',
            '#9933FF',
            '#99CC00',
            '#99CC33',
            '#CC0000',
            '#CC0033',
            '#CC0066',
            '#CC0099',
            '#CC00CC',
            '#CC00FF',
            '#CC3300',
            '#CC3333',
            '#CC3366',
            '#CC3399',
            '#CC33CC',
            '#CC33FF',
            '#CC6600',
            '#CC6633',
            '#CC9900',
            '#CC9933',
            '#CCCC00',
            '#CCCC33',
            '#FF0000',
            '#FF0033',
            '#FF0066',
            '#FF0099',
            '#FF00CC',
            '#FF00FF',
            '#FF3300',
            '#FF3333',
            '#FF3366',
            '#FF3399',
            '#FF33CC',
            '#FF33FF',
            '#FF6600',
            '#FF6633',
            '#FF9900',
            '#FF9933',
            '#FFCC00',
            '#FFCC33',
          ]),
          (t.log = console.debug || console.log || (() => {})),
          (e.exports = n(17498)(t));
        const { formatters: r } = e.exports;
        r.j = function(e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return '[UnexpectedJSONParseError]: ' + e.message;
          }
        };
      },
      17498: (e, t, n) => {
        e.exports = function(e) {
          function t(e) {
            let n,
              o,
              s,
              a = null;
            function c(...e) {
              if (!c.enabled) return;
              const r = c,
                o = Number(new Date()),
                s = o - (n || o);
              (r.diff = s),
                (r.prev = n),
                (r.curr = o),
                (n = o),
                (e[0] = t.coerce(e[0])),
                'string' != typeof e[0] && e.unshift('%O');
              let a = 0;
              (e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
                if ('%%' === n) return '%';
                a++;
                const s = t.formatters[o];
                if ('function' == typeof s) {
                  const t = e[a];
                  (n = s.call(r, t)), e.splice(a, 1), a--;
                }
                return n;
              })),
                t.formatArgs.call(r, e),
                (r.log || t.log).apply(r, e);
            }
            return (
              (c.namespace = e),
              (c.useColors = t.useColors()),
              (c.color = t.selectColor(e)),
              (c.extend = r),
              (c.destroy = t.destroy),
              Object.defineProperty(c, 'enabled', {
                enumerable: !0,
                configurable: !1,
                get: () =>
                  null !== a
                    ? a
                    : (o !== t.namespaces && ((o = t.namespaces), (s = t.enabled(e))), s),
                set: e => {
                  a = e;
                },
              }),
              'function' == typeof t.init && t.init(c),
              c
            );
          }
          function r(e, n) {
            const r = t(this.namespace + (void 0 === n ? ':' : n) + e);
            return (r.log = this.log), r;
          }
          function o(e) {
            return e
              .toString()
              .substring(2, e.toString().length - 2)
              .replace(/\.\*\?$/, '*');
          }
          return (
            (t.debug = t),
            (t.default = t),
            (t.coerce = function(e) {
              return e instanceof Error ? e.stack || e.message : e;
            }),
            (t.disable = function() {
              const e = [...t.names.map(o), ...t.skips.map(o).map(e => '-' + e)].join(',');
              return t.enable(''), e;
            }),
            (t.enable = function(e) {
              let n;
              t.save(e), (t.namespaces = e), (t.names = []), (t.skips = []);
              const r = ('string' == typeof e ? e : '').split(/[\s,]+/),
                o = r.length;
              for (n = 0; n < o; n++)
                r[n] &&
                  ('-' === (e = r[n].replace(/\*/g, '.*?'))[0]
                    ? t.skips.push(new RegExp('^' + e.slice(1) + '$'))
                    : t.names.push(new RegExp('^' + e + '$')));
            }),
            (t.enabled = function(e) {
              if ('*' === e[e.length - 1]) return !0;
              let n, r;
              for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
              for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
              return !1;
            }),
            (t.humanize = n(44247)),
            (t.destroy = function() {
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
              );
            }),
            Object.keys(e).forEach(n => {
              t[n] = e[n];
            }),
            (t.names = []),
            (t.skips = []),
            (t.formatters = {}),
            (t.selectColor = function(e) {
              let n = 0;
              for (let t = 0; t < e.length; t++) (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
              return t.colors[Math.abs(n) % t.colors.length];
            }),
            t.enable(t.load()),
            t
          );
        };
      },
      44247: e => {
        var t = 1e3,
          n = 60 * t,
          r = 60 * n,
          o = 24 * r;
        function s(e, t, n, r) {
          var o = t >= 1.5 * n;
          return Math.round(e / n) + ' ' + r + (o ? 's' : '');
        }
        e.exports = function(e, a) {
          a = a || {};
          var c,
            i,
            u = typeof e;
          if ('string' === u && e.length > 0)
            return (function(e) {
              if (!((e = String(e)).length > 100)) {
                var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  e,
                );
                if (s) {
                  var a = parseFloat(s[1]);
                  switch ((s[2] || 'ms').toLowerCase()) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                      return 315576e5 * a;
                    case 'weeks':
                    case 'week':
                    case 'w':
                      return 6048e5 * a;
                    case 'days':
                    case 'day':
                    case 'd':
                      return a * o;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                      return a * r;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                      return a * n;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                      return a * t;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                      return a;
                    default:
                      return;
                  }
                }
              }
            })(e);
          if ('number' === u && isFinite(e))
            return a.long
              ? ((c = e),
                (i = Math.abs(c)) >= o
                  ? s(c, i, o, 'day')
                  : i >= r
                  ? s(c, i, r, 'hour')
                  : i >= n
                  ? s(c, i, n, 'minute')
                  : i >= t
                  ? s(c, i, t, 'second')
                  : c + ' ms')
              : (function(e) {
                  var s = Math.abs(e);
                  return s >= o
                    ? Math.round(e / o) + 'd'
                    : s >= r
                    ? Math.round(e / r) + 'h'
                    : s >= n
                    ? Math.round(e / n) + 'm'
                    : s >= t
                    ? Math.round(e / t) + 's'
                    : e + 'ms';
                })(e);
          throw new Error(
            'val is not a non-empty string or a valid number. val=' + JSON.stringify(e),
          );
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
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
    n.r(r), n.d(r, { queueRecordEvent: () => i, recordEvent: () => a, recordPageView: () => u });
    var e = n(95146);
    const t = !1,
      o = n.n(e)()('wc-admin:tracks'),
      s = e => 2 === e.length && 'string' == typeof e[0];
    function a(e, n) {
      return (
        o('recordevent %s %o', 'wcadmin_' + e, n, {
          _tqk: window._tkq,
          shouldRecord: !(t || !window._tkq || !window.wcTracks || !window.wcTracks.isEnabled),
        }),
        !(!window.wcTracks || 'function' != typeof window.wcTracks.recordEvent) &&
          (t ? (window.wcTracks.validateEvent(e, n), !1) : void window.wcTracks.recordEvent(e, n))
      );
    }
    const c = {
      localStorageKey: () => 'tracksQueue',
      clear() {
        window.localStorage && window.localStorage.removeItem(c.localStorageKey());
      },
      get() {
        if (!window.localStorage) return [];
        const e = window.localStorage.getItem(c.localStorageKey()),
          t = e ? JSON.parse(e) : [];
        return Array.isArray(t) ? t : [];
      },
      add(...e) {
        if (!window.localStorage)
          return (
            o('Unable to queue, running now', { args: e }),
            void (s(e) ? a(...e) : o('Invalid args', e))
          );
        let t = c.get();
        const n = { args: e };
        t.push(n),
          (t = t.slice(-100)),
          o('Adding new item to queue.', n),
          window.localStorage.setItem(c.localStorageKey(), JSON.stringify(t));
      },
      process() {
        if (!window.localStorage) return;
        const e = c.get();
        c.clear(),
          o('Processing items in queue.', e),
          e.forEach(e => {
            if ('object' == typeof e) {
              o('Processing item in queue.', e);
              const t = e.args;
              s(t) ? a(...t) : o('Invalid item args', e.args);
            }
          });
      },
    };
    function i(e, t) {
      c.add(e, t);
    }
    function u(e, t) {
      e && (a('page_view', { path: e, ...t }), c.process());
    }
  })(),
    ((window.wc = window.wc || {}).tracks = r);
})();
