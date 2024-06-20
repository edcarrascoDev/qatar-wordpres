/*! For license information please see 4505.js.LICENSE.txt */
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [4505],
  {
    54505: (e, n, t) => {
      'use strict';
      t.d(n, { inspect: () => m });
      var i = function() {
          return (
            (i =
              Object.assign ||
              function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++)
                  for (var r in (n = arguments[t]))
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        r = t(25094),
        o = t(83572),
        s = t(38469),
        a = t(7872),
        c = t(4329),
        u = t.n(c);
      function d(e) {
        return 'function' == typeof e ? e() : e;
      }
      function l(e, n) {
        try {
          return JSON.stringify(e, n);
        } catch (t) {
          return u()(e, n);
        }
      }
      function f(e, n, t) {
        var r,
          o,
          s = {};
        try {
          for (
            var a = (function(e) {
                var n = 'function' == typeof Symbol && Symbol.iterator,
                  t = n && e[n],
                  i = 0;
                if (t) return t.call(e);
                if (e && 'number' == typeof e.length)
                  return {
                    next: function() {
                      return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
                    },
                  };
                throw new TypeError(
                  n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
                );
              })(n),
              c = a.next();
            !c.done;
            c = a.next()
          ) {
            var u = c.value;
            s[u] = e[u];
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            c && !c.done && (o = a.return) && o.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        var d = JSON.parse(l(s, t));
        return l(i(i({}, e), d));
      }
      function v(e, n) {
        return (
          e.machine,
          e.configuration,
          e.history,
          f(
            (function(e, n) {
              var t = {};
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
              if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                  n.indexOf(i[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                    (t[i[r]] = e[i[r]]);
              }
              return t;
            })(e, ['machine', 'configuration', 'history']),
            ['context', 'event', '_event'],
            n,
          )
        );
      }
      function p(e, n) {
        return f(e.definition, ['context'], n);
      }
      var g = new Map(),
        y = {
          url: 'https://stately.ai/viz?inspect',
          iframe: function() {
            return document.querySelector('iframe[data-xstate]');
          },
          devTools: function() {
            var e,
              n,
              t =
                ((e = new Set()),
                (n = new Set()),
                {
                  services: e,
                  register: function(t) {
                    e.add(t),
                      g.set(t.sessionId, t),
                      n.forEach(function(e) {
                        return e(t);
                      }),
                      t.onStop(function() {
                        e.delete(t), g.delete(t.sessionId);
                      });
                  },
                  unregister: function(n) {
                    e.delete(n), g.delete(n.sessionId);
                  },
                  onRegister: function(t) {
                    return (
                      n.add(t),
                      e.forEach(function(e) {
                        return t(e);
                      }),
                      {
                        unsubscribe: function() {
                          n.delete(t);
                        },
                      }
                    );
                  },
                });
            return (globalThis.__xstate__ = t), t;
          },
          serialize: void 0,
          targetWindow: void 0,
        },
        h = function(e) {
          var n = i(i({}, y), e);
          return i(i({}, n), { url: new URL(n.url), iframe: d(n.iframe), devTools: d(n.devTools) });
        },
        b = new Set();
      function m(e) {
        var n = h(e),
          t = n.iframe,
          c = n.url,
          u = n.devTools;
        if (null === (null == e ? void 0 : e.targetWindow))
          throw new Error('Received a nullable `targetWindow`.');
        var d = n.targetWindow;
        if (null !== t || d) {
          var f,
            g = (function(e, n) {
              void 0 === e && (e = globalThis.__xstate__);
              var t = new Map(),
                i = e.onRegister(function(e) {
                  t.set(e.sessionId, e);
                });
              return (0, s.C)({
                predictableActionArguments: !0,
                initial: 'pendingConnection',
                context: { client: void 0 },
                states: {
                  pendingConnection: {},
                  connected: {
                    on: {
                      'service.state': {
                        actions: function(e, n) {
                          return e.client.send(n);
                        },
                      },
                      'service.event': {
                        actions: function(e, n) {
                          return e.client.send(n);
                        },
                      },
                      'service.register': {
                        actions: function(e, n) {
                          return e.client.send(n);
                        },
                      },
                      'service.stop': {
                        actions: function(e, n) {
                          return e.client.send(n);
                        },
                      },
                      'xstate.event': {
                        actions: function(e, n) {
                          var i = n.event,
                            r = JSON.parse(i),
                            o = t.get(r.origin);
                          null == o || o.send(r);
                        },
                      },
                      unload: {
                        actions: function(e) {
                          e.client.send({ type: 'xstate.disconnect' });
                        },
                      },
                      disconnect: 'disconnected',
                    },
                  },
                  disconnected: {
                    entry: function() {
                      i.unsubscribe();
                    },
                    type: 'final',
                  },
                },
                on: {
                  'xstate.inspecting': {
                    target: '.connected',
                    actions: [
                      (0, a.assign)({
                        client: function(e, n) {
                          return n.client;
                        },
                      }),
                      function(t) {
                        e.services.forEach(function(e) {
                          var i;
                          null === (i = t.client) ||
                            void 0 === i ||
                            i.send({
                              type: 'service.register',
                              machine: p(e.machine, null == n ? void 0 : n.serialize),
                              state: v(e.state || e.initialState, null == n ? void 0 : n.serialize),
                              sessionId: e.sessionId,
                            });
                        });
                      },
                    ],
                  },
                },
              });
            })(u, e),
            y = (0, r.kJ)(g).start(),
            m = new Set(),
            w = y.subscribe(function(e) {
              m.forEach(function(n) {
                return n.next(e);
              });
            }),
            O = function(e) {
              if ('object' == typeof e.data && null !== e.data && 'type' in e.data) {
                t && !d && (d = t.contentWindow),
                  f ||
                    (f = {
                      send: function(e) {
                        d.postMessage(e, c.origin);
                      },
                    });
                var n = i(i({}, e.data), { client: f });
                y.send(n);
              }
            };
          window.addEventListener('message', O),
            window.addEventListener('unload', function() {
              y.send({ type: 'unload' });
            });
          var S = function(n) {
            return l(n, null == e ? void 0 : e.serialize);
          };
          return (
            u.onRegister(function(n) {
              var t,
                i = n.state || n.initialState;
              if (
                (y.send({
                  type: 'service.register',
                  machine: p(n.machine, null == e ? void 0 : e.serialize),
                  state: v(i, null == e ? void 0 : e.serialize),
                  sessionId: n.sessionId,
                  id: n.id,
                  parent: null === (t = n.parent) || void 0 === t ? void 0 : t.sessionId,
                }),
                y.send({ type: 'service.event', event: S(i._event), sessionId: n.sessionId }),
                !b.has(n))
              ) {
                b.add(n);
                var r = n.send.bind(n);
                n.send = function(e, t) {
                  return (
                    y.send({
                      type: 'service.event',
                      event: S((0, o.g5)((0, o._v)(e, t))),
                      sessionId: n.sessionId,
                    }),
                    r(e, t)
                  );
                };
              }
              n.subscribe(function(t) {
                void 0 !== t &&
                  y.send({
                    type: 'service.state',
                    state: v(t, null == e ? void 0 : e.serialize),
                    sessionId: n.sessionId,
                  });
              }),
                n.onStop(function() {
                  y.send({ type: 'service.stop', sessionId: n.sessionId });
                });
            }),
            t
              ? (t.addEventListener('load', function() {
                  d = t.contentWindow;
                }),
                t.setAttribute('src', String(c)))
              : d || (d = window.open(String(c), 'xstateinspector')),
            {
              send: function(e) {
                y.send(e);
              },
              subscribe: function(e, n, t) {
                var i = (0, o.zM)(e, n, t);
                return (
                  m.add(i),
                  i.next(y.state),
                  {
                    unsubscribe: function() {
                      m.delete(i);
                    },
                  }
                );
              },
              disconnect: function() {
                y.send('disconnect'), window.removeEventListener('message', O), w.unsubscribe();
              },
            }
          );
        }
        console.warn(
          'No suitable <iframe> found to embed the inspector. Please pass an <iframe> element to `inspect(iframe)` or create an <iframe data-xstate></iframe> element.',
        );
      }
    },
    4329: e => {
      (e.exports = s), (s.default = s), (s.stable = d), (s.stableStringify = d);
      var n = '[...]',
        t = '[Circular]',
        i = [],
        r = [];
      function o() {
        return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
      }
      function s(e, n, t, s) {
        var a;
        void 0 === s && (s = o()), c(e, '', 0, [], void 0, 0, s);
        try {
          a = 0 === r.length ? JSON.stringify(e, n, t) : JSON.stringify(e, f(n), t);
        } catch (e) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]',
          );
        } finally {
          for (; 0 !== i.length; ) {
            var u = i.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
          }
        }
        return a;
      }
      function a(e, n, t, o) {
        var s = Object.getOwnPropertyDescriptor(o, t);
        void 0 !== s.get
          ? s.configurable
            ? (Object.defineProperty(o, t, { value: e }), i.push([o, t, n, s]))
            : r.push([n, t, e])
          : ((o[t] = e), i.push([o, t, n]));
      }
      function c(e, i, r, o, s, u, d) {
        var l;
        if (((u += 1), 'object' == typeof e && null !== e)) {
          for (l = 0; l < o.length; l++) if (o[l] === e) return void a(t, e, i, s);
          if (void 0 !== d.depthLimit && u > d.depthLimit) return void a(n, e, i, s);
          if (void 0 !== d.edgesLimit && r + 1 > d.edgesLimit) return void a(n, e, i, s);
          if ((o.push(e), Array.isArray(e)))
            for (l = 0; l < e.length; l++) c(e[l], l, l, o, e, u, d);
          else {
            var f = Object.keys(e);
            for (l = 0; l < f.length; l++) {
              var v = f[l];
              c(e[v], v, l, o, e, u, d);
            }
          }
          o.pop();
        }
      }
      function u(e, n) {
        return e < n ? -1 : e > n ? 1 : 0;
      }
      function d(e, n, t, s) {
        void 0 === s && (s = o());
        var a,
          c = l(e, '', 0, [], void 0, 0, s) || e;
        try {
          a = 0 === r.length ? JSON.stringify(c, n, t) : JSON.stringify(c, f(n), t);
        } catch (e) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]',
          );
        } finally {
          for (; 0 !== i.length; ) {
            var u = i.pop();
            4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : (u[0][u[1]] = u[2]);
          }
        }
        return a;
      }
      function l(e, r, o, s, c, d, f) {
        var v;
        if (((d += 1), 'object' == typeof e && null !== e)) {
          for (v = 0; v < s.length; v++) if (s[v] === e) return void a(t, e, r, c);
          try {
            if ('function' == typeof e.toJSON) return;
          } catch (e) {
            return;
          }
          if (void 0 !== f.depthLimit && d > f.depthLimit) return void a(n, e, r, c);
          if (void 0 !== f.edgesLimit && o + 1 > f.edgesLimit) return void a(n, e, r, c);
          if ((s.push(e), Array.isArray(e)))
            for (v = 0; v < e.length; v++) l(e[v], v, v, s, e, d, f);
          else {
            var p = {},
              g = Object.keys(e).sort(u);
            for (v = 0; v < g.length; v++) {
              var y = g[v];
              l(e[y], y, v, s, e, d, f), (p[y] = e[y]);
            }
            if (void 0 === c) return p;
            i.push([c, r, e]), (c[r] = p);
          }
          s.pop();
        }
      }
      function f(e) {
        return (
          (e =
            void 0 !== e
              ? e
              : function(e, n) {
                  return n;
                }),
          function(n, t) {
            if (r.length > 0)
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                if (o[1] === n && o[0] === t) {
                  (t = o[2]), r.splice(i, 1);
                  break;
                }
              }
            return e.call(this, n, t);
          }
        );
      }
    },
  },
]);
