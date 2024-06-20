/*! For license information please see 3404.js.LICENSE.txt */
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [3404],
  {
    73404: (e, t, n) => {
      'use strict';
      var r,
        o = Object.create,
        i = Object.defineProperty,
        s = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        u = Object.getPrototypeOf,
        c = Object.prototype.hasOwnProperty,
        l = (e, t, n, r) => {
          if ((t && 'object' == typeof t) || 'function' == typeof t)
            for (let o of a(t))
              c.call(e, o) ||
                o === n ||
                i(e, o, { get: () => t[o], enumerable: !(r = s(t, o)) || r.enumerable });
          return e;
        },
        f = (e, t, n) => (
          (n = null != e ? o(u(e)) : {}),
          l(!t && e && e.__esModule ? n : i(n, 'default', { value: e, enumerable: !0 }), e)
        ),
        d = {};
      ((e, t) => {
        for (var n in t) i(e, n, { get: t[n], enumerable: !0 });
      })(d, {
        createBrowserInspector: () => O,
        createBrowserReceiver: () => E,
        createInspector: () => b,
        createSkyInspector: () => T,
        createWebSocketInspector: () => C,
        createWebSocketReceiver: () => R,
      }),
        (e.exports = ((r = d), l(i({}, '__esModule', { value: !0 }), r)));
      var p = f(n(4329)),
        h = n(7872);
      function y(e) {
        return 'string' == typeof e ? { type: e } : e;
      }
      var g =
          'undefined' != typeof process &&
          void 0 !== process.versions?.node &&
          'undefined' == typeof document,
        v = {
          devDependencies: {
            '@changesets/changelog-github': '^0.5.0',
            '@changesets/cli': '^2.27.1',
            '@types/jsdom': '^21.1.6',
            '@types/uuid': '^9.0.8',
            jsdom: '^23.2.0',
            tsup: '^8.0.2',
            typescript: '^5.3.3',
            vitest: '^1.3.1',
            xstate: '^5.9.1',
          },
          name: '@statelyai/inspect',
          version: '0.2.5',
          description: 'Inspection utilities for state, actors, workflows, and state machines.',
          main: 'dist/index.js',
          repository: 'https://github.com/statelyai/inspect.git',
          author: 'David Khourshid <davidkpiano@gmail.com>',
          license: 'MIT',
          dependencies: {
            'fast-safe-stringify': '^2.1.1',
            'isomorphic-ws': '^5.0.0',
            partysocket: '^0.0.25',
            'safe-stable-stringify': '^2.4.3',
            superjson: '^1.13.3',
            uuid: '^9.0.1',
          },
          peerDependencies: { xstate: '^5.5.1' },
          scripts: {
            build: 'tsup src/index.ts --dts',
            watch: 'tsup src/index.ts --dts --watch',
            test: 'vitest',
            prepublishOnly: 'tsup src/index.ts --dts',
            changeset: 'changeset',
            release: 'changeset publish',
            version: 'changeset version',
            dev: 'yarn build && ./scripts/dev.sh',
          },
          publishConfig: { access: 'public' },
          packageManager: 'pnpm@8.11.0',
        },
        m = f(n(30149));
      function b(e, t) {
        function n(n) {
          if (t?.filter && !t.filter(n)) return;
          const r = t?.serialize?.(n) ?? n;
          e.send(r);
        }
        return {
          adapter: e,
          actor: (e, t, r) => {
            const o = 'string' == typeof e ? e : e.sessionId,
              i = e?.logic?.config,
              s = i ? (0, m.default)(i) : void 0,
              a =
                r?.rootId ?? 'string' == typeof e
                  ? void 0
                  : ('string' == typeof (u = e)
                      ? void 0
                      : (function(e) {
                          let t = e;
                          do {
                            t = t._parent;
                          } while (t?._parent);
                          return t;
                        })(u)?.sessionId) ?? void 0;
            var u;
            const c = r?.parentId ?? 'string' == typeof e ? void 0 : e._parent?.sessionId;
            n({
              type: '@xstate.actor',
              name: i ? i.id : o,
              sessionId: o,
              createdAt: Date.now().toString(),
              _version: v.version,
              rootId: a,
              parentId: c,
              id: null,
              definition: s,
              snapshot: t ?? { status: 'active' },
            });
          },
          event: (e, t, r) => {
            const o = 'string' == typeof e ? e : e.sessionId;
            n({
              type: '@xstate.event',
              sourceId: r?.source
                ? 'string' == typeof r.source
                  ? r.source
                  : r.source.sessionId
                : void 0,
              sessionId: o,
              event: y(t),
              id: Math.random().toString(),
              createdAt: Date.now().toString(),
              rootId: 'anonymous',
              _version: v.version,
            });
          },
          snapshot: (e, t, r) => {
            const o = 'string' == typeof e ? e : e.sessionId;
            n({
              type: '@xstate.snapshot',
              snapshot: { status: 'active', ...t },
              event: r?.event ?? { type: '' },
              sessionId: o,
              id: null,
              createdAt: Date.now().toString(),
              rootId: 'anonymous',
              _version: v.version,
            });
          },
          inspect: {
            next: e => {
              var t;
              (t = function() {
                const t = (function(e) {
                  switch (e.type) {
                    case '@xstate.actor': {
                      const t = e.actorRef,
                        n = t?.logic,
                        r = n?.config;
                      let o = t.id;
                      return (
                        o === t.sessionId && r && (o = r.id),
                        {
                          name: o,
                          type: '@xstate.actor',
                          definition:
                            'object' == typeof r
                              ? (0, m.default)(r, (e, t) =>
                                  'function' == typeof t ? { type: t.name } : t,
                                )
                              : (0, m.default)({ id: o }),
                          _version: v.version,
                          createdAt: Date.now().toString(),
                          id: null,
                          rootId: e.rootId,
                          parentId: e.actorRef._parent?.sessionId,
                          sessionId: e.actorRef.sessionId,
                          snapshot: e.actorRef.getSnapshot(),
                        }
                      );
                    }
                    case '@xstate.event':
                      return {
                        type: '@xstate.event',
                        event: e.event,
                        sourceId: e.sourceRef?.sessionId,
                        sessionId: e.actorRef.sessionId,
                        _version: v.version,
                        createdAt: Date.now().toString(),
                        id: null,
                        rootId: e.rootId,
                      };
                    case '@xstate.snapshot':
                      return {
                        type: '@xstate.snapshot',
                        event: e.event,
                        snapshot: JSON.parse((0, m.default)(e.snapshot)),
                        sessionId: e.actorRef.sessionId,
                        _version: v.version,
                        createdAt: Date.now().toString(),
                        id: null,
                        rootId: e.rootId,
                      };
                    default:
                      if (e.type.startsWith('@xstate.')) return;
                      return void console.warn(`Unhandled inspection event type: ${e.type}`);
                  }
                })(e);
                t && n(t);
              }),
                'undefined' != typeof window
                  ? (window.requestIdleCallback || window.requestAnimationFrame)(t)
                  : setTimeout(t, 0);
            },
          },
          start() {
            e.start?.();
          },
          stop() {
            e.stop?.();
          },
        };
      }
      var w = class {
          constructor() {}
          start() {}
          stop() {}
          send(e) {}
        },
        _ = '@statelyai.connected';
      function O(e) {
        const t = e?.window ?? ('undefined' == typeof window ? void 0 : window);
        if (!t)
          return console.error('Window does not exist; inspector cannot be started.'), new w();
        const n = {
            url: 'https://stately.ai/inspect',
            filter: () => !0,
            serialize: e => JSON.parse((0, p.default)(e)),
            autoStart: !0,
            iframe: null,
            ...e,
            window: t,
          },
          r = b(new k(n), n);
        return n.autoStart && r.start(), r;
      }
      var S = { replayCount: 0, window: 'undefined' != typeof window ? window : void 0 };
      function E(e) {
        const t = { ...S, ...e }.window,
          n = t.self === t.top ? t.opener : t.parent,
          r = new Set();
        t.addEventListener('message', e => {
          (function(e) {
            return (
              'object' == typeof e &&
              null !== e &&
              'string' == typeof e.type &&
              'string' == typeof e._version
            );
          })(e.data) && r.forEach(t => t.next?.(e.data));
        });
        const o = {
          subscribe(e) {
            const t = (0, h.toObserver)(e);
            return (
              r.add(t),
              {
                unsubscribe() {
                  r.delete(t);
                },
              }
            );
          },
        };
        return n && n.postMessage({ type: _ }, '*'), o;
      }
      var k = class {
          constructor(e) {
            this.options = e;
          }
          status = 'disconnected';
          deferredEvents = [];
          targetWindow = null;
          start() {
            (this.targetWindow = this.options.iframe
              ? null
              : this.options.window.open(String(this.options.url), 'xstateinspector')),
              this.options.iframe &&
                (this.options.iframe.addEventListener('load', () => {
                  this.targetWindow = this.options.iframe?.contentWindow ?? null;
                }),
                this.options.iframe?.setAttribute('src', String(this.options.url))),
              this.options.window.addEventListener('message', e => {
                (function(e) {
                  return 'object' == typeof e && null !== e && 'string' == typeof e.type;
                })(e.data) &&
                  '@statelyai.connected' === e.data.type &&
                  ((this.status = 'connected'),
                  this.deferredEvents.forEach(e => {
                    const t = this.options.serialize(e);
                    this.targetWindow?.postMessage(t, '*');
                  }));
              });
          }
          stop() {
            this.targetWindow?.postMessage({ type: '@statelyai.disconnected' }, '*'),
              (this.status = 'disconnected');
          }
          send(e) {
            if (this.options.filter(e)) {
              if (this.options.send) this.options.send(e);
              else if ('connected' === this.status) {
                const t = this.options.serialize(e);
                this.targetWindow?.postMessage(t, '*');
              }
              this.deferredEvents.push(e);
            }
          }
        },
        I = f(n(90583)),
        j = n(60237),
        x = n(35088),
        P = !1;
      function T(e = {}) {
        const { host: t, apiBaseURL: r } = {
            host: P ? 'localhost:1999' : 'stately-sky-beta.mellson.partykit.dev',
            apiBaseURL: P
              ? 'http://localhost:3000/registry/api/sky'
              : 'https://stately.ai/registry/api/sky',
          },
          o = r.replace('/api/sky', ''),
          { apiKey: i, onerror: s, ...a } = e,
          u = (0, x.v4)(),
          c = `inspect-${u}`,
          l = new I.default({ host: t, room: c, WebSocket: g ? n(4877) : void 0 }),
          f = `${o}/inspect/${u}`;
        return (
          (l.onerror = s ?? console.error),
          (l.onopen = () => {
            console.log('Connected to Sky, link to your live inspect session:'), console.log(f);
          }),
          g
            ? b({
                ...a,
                send(e) {
                  const t = i ? { apiKey: i, ...e } : e;
                  l.send((0, j.stringify)(t));
                },
              })
            : O({
                ...a,
                url: f,
                send(e) {
                  const t = i ? { apiKey: i, ...e } : e;
                  l.send((0, j.stringify)(t));
                },
              })
        );
      }
      var A = f(n(4877)),
        $ = f(n(30149)),
        M = n(7872),
        N = class {
          ws;
          status = 'closed';
          deferredEvents = [];
          options;
          constructor(e) {
            this.options = {
              filter: () => !0,
              serialize: e => JSON.parse((0, $.default)(e)),
              autoStart: !0,
              url: 'ws://localhost:8080',
              ...e,
            };
          }
          start() {
            const e = () => {
              (this.ws = new A.default(this.options.url)),
                (this.ws.onopen = () => {
                  console.log('websocket open'),
                    (this.status = 'open'),
                    this.deferredEvents.forEach(e => {
                      const t = this.options.serialize(e);
                      this.ws.send((0, $.default)(t));
                    });
                }),
                (this.ws.onclose = () => {
                  console.log('websocket closed');
                }),
                (this.ws.onerror = async t => {
                  console.error('websocket error', t),
                    await new Promise(e => setTimeout(e, 5e3)),
                    console.warn('restarting'),
                    e();
                }),
                (this.ws.onmessage = e => {
                  'string' == typeof e.data && console.log('message', e.data);
                });
            };
            e();
          }
          stop() {
            this.ws.close(), (this.status = 'closed');
          }
          send(e) {
            'open' === this.status ? this.ws.send((0, $.default)(e)) : this.deferredEvents.push(e);
          }
        };
      function C(e) {
        return b(new N(e), e);
      }
      function R(e) {
        const t = { server: 'ws://localhost:8080', ...e },
          n = new Set(),
          r = new A.default(t.server);
        return (
          (r.onopen = () => {
            console.log('websocket open'),
              (r.onmessage = e => {
                if ('string' != typeof e.data) return;
                console.log('message', e.data);
                const t = JSON.parse(e.data);
                n.forEach(e => {
                  e.next?.(t);
                });
              });
          }),
          {
            subscribe(e) {
              const t = (0, M.toObserver)(e);
              return (
                n.add(t),
                {
                  unsubscribe() {
                    n.delete(t);
                  },
                }
              );
            },
          }
        );
      }
    },
    4329: e => {
      (e.exports = s), (s.default = s), (s.stable = l), (s.stableStringify = l);
      var t = '[...]',
        n = '[Circular]',
        r = [],
        o = [];
      function i() {
        return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
      }
      function s(e, t, n, s) {
        var a;
        void 0 === s && (s = i()), u(e, '', 0, [], void 0, 0, s);
        try {
          a = 0 === o.length ? JSON.stringify(e, t, n) : JSON.stringify(e, d(t), n);
        } catch (e) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]',
          );
        } finally {
          for (; 0 !== r.length; ) {
            var c = r.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
          }
        }
        return a;
      }
      function a(e, t, n, i) {
        var s = Object.getOwnPropertyDescriptor(i, n);
        void 0 !== s.get
          ? s.configurable
            ? (Object.defineProperty(i, n, { value: e }), r.push([i, n, t, s]))
            : o.push([t, n, e])
          : ((i[n] = e), r.push([i, n, t]));
      }
      function u(e, r, o, i, s, c, l) {
        var f;
        if (((c += 1), 'object' == typeof e && null !== e)) {
          for (f = 0; f < i.length; f++) if (i[f] === e) return void a(n, e, r, s);
          if (void 0 !== l.depthLimit && c > l.depthLimit) return void a(t, e, r, s);
          if (void 0 !== l.edgesLimit && o + 1 > l.edgesLimit) return void a(t, e, r, s);
          if ((i.push(e), Array.isArray(e)))
            for (f = 0; f < e.length; f++) u(e[f], f, f, i, e, c, l);
          else {
            var d = Object.keys(e);
            for (f = 0; f < d.length; f++) {
              var p = d[f];
              u(e[p], p, f, i, e, c, l);
            }
          }
          i.pop();
        }
      }
      function c(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      }
      function l(e, t, n, s) {
        void 0 === s && (s = i());
        var a,
          u = f(e, '', 0, [], void 0, 0, s) || e;
        try {
          a = 0 === o.length ? JSON.stringify(u, t, n) : JSON.stringify(u, d(t), n);
        } catch (e) {
          return JSON.stringify(
            '[unable to serialize, circular reference is too complex to analyze]',
          );
        } finally {
          for (; 0 !== r.length; ) {
            var c = r.pop();
            4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : (c[0][c[1]] = c[2]);
          }
        }
        return a;
      }
      function f(e, o, i, s, u, l, d) {
        var p;
        if (((l += 1), 'object' == typeof e && null !== e)) {
          for (p = 0; p < s.length; p++) if (s[p] === e) return void a(n, e, o, u);
          try {
            if ('function' == typeof e.toJSON) return;
          } catch (e) {
            return;
          }
          if (void 0 !== d.depthLimit && l > d.depthLimit) return void a(t, e, o, u);
          if (void 0 !== d.edgesLimit && i + 1 > d.edgesLimit) return void a(t, e, o, u);
          if ((s.push(e), Array.isArray(e)))
            for (p = 0; p < e.length; p++) f(e[p], p, p, s, e, l, d);
          else {
            var h = {},
              y = Object.keys(e).sort(c);
            for (p = 0; p < y.length; p++) {
              var g = y[p];
              f(e[g], g, p, s, e, l, d), (h[g] = e[g]);
            }
            if (void 0 === u) return h;
            r.push([u, o, e]), (u[o] = h);
          }
          s.pop();
        }
      }
      function d(e) {
        return (
          (e =
            void 0 !== e
              ? e
              : function(e, t) {
                  return t;
                }),
          function(t, n) {
            if (o.length > 0)
              for (var r = 0; r < o.length; r++) {
                var i = o[r];
                if (i[1] === t && i[0] === n) {
                  (n = i[2]), o.splice(r, 1);
                  break;
                }
              }
            return e.call(this, t, n);
          }
        );
      }
    },
    4877: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => o });
      var r = null;
      'undefined' != typeof WebSocket
        ? (r = WebSocket)
        : 'undefined' != typeof MozWebSocket
        ? (r = MozWebSocket)
        : void 0 !== n.g
        ? (r = n.g.WebSocket || n.g.MozWebSocket)
        : 'undefined' != typeof window
        ? (r = window.WebSocket || window.MozWebSocket)
        : 'undefined' != typeof self && (r = self.WebSocket || self.MozWebSocket);
      const o = r;
    },
    90583: e => {
      'use strict';
      var t,
        n = Object.defineProperty,
        r = Object.getOwnPropertyDescriptor,
        o = Object.getOwnPropertyNames,
        i = Object.prototype.hasOwnProperty,
        s = {};
      ((e, t) => {
        for (var r in t) n(e, r, { get: t[r], enumerable: !0 });
      })(s, { WebSocket: () => h, default: () => v }),
        (e.exports =
          ((t = s),
          ((e, t, s, a) => {
            if ((t && 'object' == typeof t) || 'function' == typeof t)
              for (let s of o(t))
                i.call(e, s) ||
                  undefined === s ||
                  n(e, s, { get: () => t[s], enumerable: !(a = r(t, s)) || a.enumerable });
            return e;
          })(n({}, '__esModule', { value: !0 }), t))),
        (globalThis.EventTarget && globalThis.Event) ||
          console.error(
            "\n  PartySocket requires a global 'EventTarget' class to be available!\n  You can polyfill this global by adding this to your code before any partysocket imports: \n  \n  ```\n  import 'partysocket/event-target-polyfill';\n  ```\n  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.\n",
          );
      var a = class extends Event {
          message;
          error;
          constructor(e, t) {
            super('error', t), (this.message = e.message), (this.error = e);
          }
        },
        u = class extends Event {
          code;
          reason;
          wasClean = !0;
          constructor(e = 1e3, t = '', n) {
            super('close', n), (this.code = e), (this.reason = t);
          }
        },
        c = (Event, a),
        l = u,
        f =
          'undefined' != typeof process &&
          void 0 !== process.versions?.node &&
          'undefined' == typeof document
            ? function(e) {
                return 'data' in e
                  ? new MessageEvent(e.type, e)
                  : 'code' in e || 'reason' in e
                  ? new u(e.code || 1999, e.reason || 'unknown reason', e)
                  : 'error' in e
                  ? new a(e.error, e)
                  : new Event(e.type, e);
              }
            : function(e) {
                return new e.constructor(e.type, e);
              },
        d = {
          maxReconnectionDelay: 1e4,
          minReconnectionDelay: 1e3 + 4e3 * Math.random(),
          minUptime: 5e3,
          reconnectionDelayGrowFactor: 1.3,
          connectionTimeout: 4e3,
          maxRetries: 1 / 0,
          maxEnqueuedMessages: 1 / 0,
          startClosed: !1,
          debug: !1,
        },
        p = !1,
        h = class e extends EventTarget {
          _ws;
          _retryCount = -1;
          _uptimeTimeout;
          _connectTimeout;
          _shouldReconnect = !0;
          _connectLock = !1;
          _binaryType = 'blob';
          _closeCalled = !1;
          _messageQueue = [];
          _debugLogger = console.log.bind(console);
          _url;
          _protocols;
          _options;
          constructor(e, t, n = {}) {
            super(),
              (this._url = e),
              (this._protocols = t),
              (this._options = n),
              this._options.startClosed && (this._shouldReconnect = !1),
              this._options.debugLogger && (this._debugLogger = this._options.debugLogger),
              this._connect();
          }
          static get CONNECTING() {
            return 0;
          }
          static get OPEN() {
            return 1;
          }
          static get CLOSING() {
            return 2;
          }
          static get CLOSED() {
            return 3;
          }
          get CONNECTING() {
            return e.CONNECTING;
          }
          get OPEN() {
            return e.OPEN;
          }
          get CLOSING() {
            return e.CLOSING;
          }
          get CLOSED() {
            return e.CLOSED;
          }
          get binaryType() {
            return this._ws ? this._ws.binaryType : this._binaryType;
          }
          set binaryType(e) {
            (this._binaryType = e), this._ws && (this._ws.binaryType = e);
          }
          get retryCount() {
            return Math.max(this._retryCount, 0);
          }
          get bufferedAmount() {
            return (
              this._messageQueue.reduce(
                (e, t) => (
                  'string' == typeof t
                    ? (e += t.length)
                    : t instanceof Blob
                    ? (e += t.size)
                    : (e += t.byteLength),
                  e
                ),
                0,
              ) + (this._ws ? this._ws.bufferedAmount : 0)
            );
          }
          get extensions() {
            return this._ws ? this._ws.extensions : '';
          }
          get protocol() {
            return this._ws ? this._ws.protocol : '';
          }
          get readyState() {
            return this._ws
              ? this._ws.readyState
              : this._options.startClosed
              ? e.CLOSED
              : e.CONNECTING;
          }
          get url() {
            return this._ws ? this._ws.url : '';
          }
          get shouldReconnect() {
            return this._shouldReconnect;
          }
          onclose = null;
          onerror = null;
          onmessage = null;
          onopen = null;
          close(e = 1e3, t) {
            (this._closeCalled = !0),
              (this._shouldReconnect = !1),
              this._clearTimeouts(),
              this._ws
                ? this._ws.readyState !== this.CLOSED
                  ? this._ws.close(e, t)
                  : this._debug('close: already closed')
                : this._debug('close enqueued: no ws instance');
          }
          reconnect(e, t) {
            (this._shouldReconnect = !0),
              (this._closeCalled = !1),
              (this._retryCount = -1),
              this._ws && this._ws.readyState !== this.CLOSED
                ? (this._disconnect(e, t), this._connect())
                : this._connect();
          }
          send(e) {
            if (this._ws && this._ws.readyState === this.OPEN)
              this._debug('send', e), this._ws.send(e);
            else {
              const { maxEnqueuedMessages: t = d.maxEnqueuedMessages } = this._options;
              this._messageQueue.length < t &&
                (this._debug('enqueue', e), this._messageQueue.push(e));
            }
          }
          _debug(...e) {
            this._options.debug && this._debugLogger('RWS>', ...e);
          }
          _getNextDelay() {
            const {
              reconnectionDelayGrowFactor: e = d.reconnectionDelayGrowFactor,
              minReconnectionDelay: t = d.minReconnectionDelay,
              maxReconnectionDelay: n = d.maxReconnectionDelay,
            } = this._options;
            let r = 0;
            return (
              this._retryCount > 0 &&
                ((r = t * Math.pow(e, this._retryCount - 1)), r > n && (r = n)),
              this._debug('next delay', r),
              r
            );
          }
          _wait() {
            return new Promise(e => {
              setTimeout(e, this._getNextDelay());
            });
          }
          _getNextProtocols(e) {
            if (!e) return Promise.resolve(null);
            if ('string' == typeof e || Array.isArray(e)) return Promise.resolve(e);
            if ('function' == typeof e) {
              const t = e();
              if (!t) return Promise.resolve(null);
              if ('string' == typeof t || Array.isArray(t)) return Promise.resolve(t);
              if (t.then) return t;
            }
            throw Error('Invalid protocols');
          }
          _getNextUrl(e) {
            if ('string' == typeof e) return Promise.resolve(e);
            if ('function' == typeof e) {
              const t = e();
              if ('string' == typeof t) return Promise.resolve(t);
              if (t.then) return t;
            }
            throw Error('Invalid URL');
          }
          _connect() {
            if (this._connectLock || !this._shouldReconnect) return;
            this._connectLock = !0;
            const {
              maxRetries: e = d.maxRetries,
              connectionTimeout: t = d.connectionTimeout,
            } = this._options;
            this._retryCount >= e
              ? this._debug('max retries reached', this._retryCount, '>=', e)
              : (this._retryCount++,
                this._debug('connect', this._retryCount),
                this._removeListeners(),
                this._wait()
                  .then(() =>
                    Promise.all([
                      this._getNextUrl(this._url),
                      this._getNextProtocols(this._protocols || null),
                    ]),
                  )
                  .then(([e, n]) => {
                    if (this._closeCalled) return void (this._connectLock = !1);
                    this._options.WebSocket ||
                      'undefined' != typeof WebSocket ||
                      p ||
                      (console.error(
                        "‼️ No WebSocket implementation available. You should define options.WebSocket. \n\nFor example, if you're using node.js, run `npm install ws`, and then in your code:\n\nimport PartySocket from 'partysocket';\nimport WS from 'ws';\n\nconst partysocket = new PartySocket({\n  host: \"127.0.0.1:1999\",\n  room: \"test-room\",\n  WebSocket: WS\n});\n\n",
                      ),
                      (p = !0));
                    const r = this._options.WebSocket || WebSocket;
                    this._debug('connect', { url: e, protocols: n }),
                      (this._ws = n ? new r(e, n) : new r(e)),
                      (this._ws.binaryType = this._binaryType),
                      (this._connectLock = !1),
                      this._addListeners(),
                      (this._connectTimeout = setTimeout(() => this._handleTimeout(), t));
                  })
                  .catch(e => {
                    (this._connectLock = !1), this._handleError(new c(Error(e.message), this));
                  }));
          }
          _handleTimeout() {
            this._debug('timeout event'), this._handleError(new c(Error('TIMEOUT'), this));
          }
          _disconnect(e = 1e3, t) {
            if ((this._clearTimeouts(), this._ws)) {
              this._removeListeners();
              try {
                this._ws.close(e, t), this._handleClose(new l(e, t, this));
              } catch (e) {}
            }
          }
          _acceptOpen() {
            this._debug('accept open'), (this._retryCount = 0);
          }
          _handleOpen = e => {
            this._debug('open event');
            const { minUptime: t = d.minUptime } = this._options;
            clearTimeout(this._connectTimeout),
              (this._uptimeTimeout = setTimeout(() => this._acceptOpen(), t)),
              (function(e, t) {
                if (!e) throw new Error('WebSocket is not defined');
              })(this._ws),
              (this._ws.binaryType = this._binaryType),
              this._messageQueue.forEach(e => this._ws?.send(e)),
              (this._messageQueue = []),
              this.onopen && this.onopen(e),
              this.dispatchEvent(f(e));
          };
          _handleMessage = e => {
            this._debug('message event'),
              this.onmessage && this.onmessage(e),
              this.dispatchEvent(f(e));
          };
          _handleError = e => {
            this._debug('error event', e.message),
              this._disconnect(void 0, 'TIMEOUT' === e.message ? 'timeout' : void 0),
              this.onerror && this.onerror(e),
              this._debug('exec error listeners'),
              this.dispatchEvent(f(e)),
              this._connect();
          };
          _handleClose = e => {
            this._debug('close event'),
              this._clearTimeouts(),
              this._shouldReconnect && this._connect(),
              this.onclose && this.onclose(e),
              this.dispatchEvent(f(e));
          };
          _removeListeners() {
            this._ws &&
              (this._debug('removeListeners'),
              this._ws.removeEventListener('open', this._handleOpen),
              this._ws.removeEventListener('close', this._handleClose),
              this._ws.removeEventListener('message', this._handleMessage),
              this._ws.removeEventListener('error', this._handleError));
          }
          _addListeners() {
            this._ws &&
              (this._debug('addListeners'),
              this._ws.addEventListener('open', this._handleOpen),
              this._ws.addEventListener('close', this._handleClose),
              this._ws.addEventListener('message', this._handleMessage),
              this._ws.addEventListener('error', this._handleError));
          }
          _clearTimeouts() {
            clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
          }
        },
        y = e => null !== e[1] && void 0 !== e[1];
      function g(e, t, n = {}) {
        const { host: r, path: o, protocol: i, room: s, party: a, query: u } = e;
        let c = r.replace(/^(http|https|ws|wss):\/\//, '');
        if ((c.endsWith('/') && (c = c.slice(0, -1)), o && o.startsWith('/')))
          throw new Error('path must not start with a slash');
        const l = a ?? 'main',
          f = o ? `/${o}` : '',
          d =
            i ||
            (c.startsWith('localhost:') ||
            c.startsWith('127.0.0.1:') ||
            c.startsWith('192.168.') ||
            c.startsWith('10.') ||
            (c.startsWith('172.') && c.split('.')[1] >= '16' && c.split('.')[1] <= '31') ||
            c.startsWith('[::ffff:7f00:1]:')
              ? t
              : t + 's'),
          p = `${d}://${c}/${a ? `parties/${a}` : 'party'}/${s}${f}`,
          h = (e = {}) =>
            `${p}?${new URLSearchParams([...Object.entries(n), ...Object.entries(e).filter(y)])}`,
          g = 'function' == typeof u ? async () => h(await u()) : h(u);
        return { host: c, path: f, room: s, name: l, protocol: d, partyUrl: p, urlProvider: g };
      }
      var v = class extends h {
        constructor(e) {
          const t = m(e);
          super(t.urlProvider, t.protocols, t.socketOptions),
            (this.partySocketOptions = e),
            this.setWSProperties(t);
        }
        _pk;
        _pkurl;
        name;
        room;
        host;
        path;
        updateProperties(e) {
          const t = m({
            ...this.partySocketOptions,
            ...e,
            host: e.host ?? this.host,
            room: e.room ?? this.room,
            path: e.path ?? this.path,
          });
          (this._url = t.urlProvider),
            (this._protocols = t.protocols),
            (this._options = t.socketOptions),
            this.setWSProperties(t);
        }
        setWSProperties(e) {
          const { _pk: t, _pkurl: n, name: r, room: o, host: i, path: s } = e;
          (this._pk = t),
            (this._pkurl = n),
            (this.name = r),
            (this.room = o),
            (this.host = i),
            (this.path = s);
        }
        reconnect(e, t) {
          if (!this.room || !this.host)
            throw new Error(
              'The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor.',
            );
          super.reconnect(e, t);
        }
        get id() {
          return this._pk;
        }
        get roomUrl() {
          return this._pkurl;
        }
        static async fetch(e, t) {
          const n = g(e, 'http'),
            r = 'string' == typeof n.urlProvider ? n.urlProvider : await n.urlProvider();
          return (e.fetch ?? fetch)(r, t);
        }
      };
      function m(e) {
        const {
            id: t,
            host: n,
            path: r,
            party: o,
            room: i,
            protocol: s,
            query: a,
            protocols: u,
            ...c
          } = e,
          l =
            t ||
            (function() {
              if ('undefined' != typeof crypto && crypto.randomUUID) return crypto.randomUUID();
              let e = new Date().getTime(),
                t =
                  ('undefined' != typeof performance &&
                    performance.now &&
                    1e3 * performance.now()) ||
                  0;
              return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(n) {
                let r = 16 * Math.random();
                return (
                  e > 0
                    ? ((r = (e + r) % 16 | 0), (e = Math.floor(e / 16)))
                    : ((r = (t + r) % 16 | 0), (t = Math.floor(t / 16))),
                  ('x' === n ? r : (3 & r) | 8).toString(16)
                );
              });
            })(),
          f = g(e, 'ws', { _pk: l });
        return {
          _pk: l,
          _pkurl: f.partyUrl,
          name: f.name,
          room: f.room,
          host: f.host,
          path: f.path,
          protocols: u,
          socketOptions: c,
          urlProvider: f.urlProvider,
        };
      }
    },
    30149: (e, t) => {
      'use strict';
      const { hasOwnProperty: n } = Object.prototype,
        r = p();
      (r.configure = p),
        (r.stringify = r),
        (r.default = r),
        (t.stringify = r),
        (t.configure = p),
        (e.exports = r);
      const o = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
      function i(e) {
        return e.length < 5e3 && !o.test(e) ? `"${e}"` : JSON.stringify(e);
      }
      function s(e) {
        if (e.length > 200) return e.sort();
        for (let t = 1; t < e.length; t++) {
          const n = e[t];
          let r = t;
          for (; 0 !== r && e[r - 1] > n; ) (e[r] = e[r - 1]), r--;
          e[r] = n;
        }
        return e;
      }
      const a = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(Object.getPrototypeOf(new Int8Array())),
        Symbol.toStringTag,
      ).get;
      function u(e) {
        return void 0 !== a.call(e) && 0 !== e.length;
      }
      function c(e, t, n) {
        e.length < n && (n = e.length);
        const r = ',' === t ? '' : ' ';
        let o = `"0":${r}${e[0]}`;
        for (let i = 1; i < n; i++) o += `${t}"${i}":${r}${e[i]}`;
        return o;
      }
      function l(e, t) {
        let r;
        if (n.call(e, t) && ((r = e[t]), 'boolean' != typeof r))
          throw new TypeError(`The "${t}" argument must be of type boolean`);
        return void 0 === r || r;
      }
      function f(e, t) {
        let r;
        if (n.call(e, t)) {
          if (((r = e[t]), 'number' != typeof r))
            throw new TypeError(`The "${t}" argument must be of type number`);
          if (!Number.isInteger(r)) throw new TypeError(`The "${t}" argument must be an integer`);
          if (r < 1) throw new RangeError(`The "${t}" argument must be >= 1`);
        }
        return void 0 === r ? 1 / 0 : r;
      }
      function d(e) {
        return 1 === e ? '1 item' : `${e} items`;
      }
      function p(e) {
        const t = (function(e) {
          if (n.call(e, 'strict')) {
            const t = e.strict;
            if ('boolean' != typeof t)
              throw new TypeError('The "strict" argument must be of type boolean');
            if (t)
              return e => {
                let t = 'Object can not safely be stringified. Received type ' + typeof e;
                throw ('function' != typeof e && (t += ` (${e.toString()})`), new Error(t));
              };
          }
        })((e = { ...e }));
        t &&
          (void 0 === e.bigint && (e.bigint = !1),
          'circularValue' in e || (e.circularValue = Error));
        const r = (function(e) {
            if (n.call(e, 'circularValue')) {
              const t = e.circularValue;
              if ('string' == typeof t) return `"${t}"`;
              if (null == t) return t;
              if (t === Error || t === TypeError)
                return {
                  toString() {
                    throw new TypeError('Converting circular structure to JSON');
                  },
                };
              throw new TypeError(
                'The "circularValue" argument must be of type string or the value null or undefined',
              );
            }
            return '"[Circular]"';
          })(e),
          o = l(e, 'bigint'),
          a = l(e, 'deterministic'),
          p = f(e, 'maximumDepth'),
          h = f(e, 'maximumBreadth');
        function y(e, n, c, l, f, g) {
          let v = n[e];
          switch (
            ('object' == typeof v &&
              null !== v &&
              'function' == typeof v.toJSON &&
              (v = v.toJSON(e)),
            (v = l.call(n, e, v)),
            typeof v)
          ) {
            case 'string':
              return i(v);
            case 'object': {
              if (null === v) return 'null';
              if (-1 !== c.indexOf(v)) return r;
              let e = '',
                t = ',';
              const n = g;
              if (Array.isArray(v)) {
                if (0 === v.length) return '[]';
                if (p < c.length + 1) return '"[Array]"';
                c.push(v), '' !== f && ((e += `\n${(g += f)}`), (t = `,\n${g}`));
                const r = Math.min(v.length, h);
                let o = 0;
                for (; o < r - 1; o++) {
                  const n = y(String(o), v, c, l, f, g);
                  (e += void 0 !== n ? n : 'null'), (e += t);
                }
                const i = y(String(o), v, c, l, f, g);
                return (
                  (e += void 0 !== i ? i : 'null'),
                  v.length - 1 > h && (e += `${t}"... ${d(v.length - h - 1)} not stringified"`),
                  '' !== f && (e += `\n${n}`),
                  c.pop(),
                  `[${e}]`
                );
              }
              let o = Object.keys(v);
              const m = o.length;
              if (0 === m) return '{}';
              if (p < c.length + 1) return '"[Object]"';
              let b = '',
                w = '';
              '' !== f && ((t = `,\n${(g += f)}`), (b = ' '));
              const _ = Math.min(m, h);
              a && !u(v) && (o = s(o)), c.push(v);
              for (let n = 0; n < _; n++) {
                const r = o[n],
                  s = y(r, v, c, l, f, g);
                void 0 !== s && ((e += `${w}${i(r)}:${b}${s}`), (w = t));
              }
              return (
                m > h && ((e += `${w}"...":${b}"${d(m - h)} not stringified"`), (w = t)),
                '' !== f && w.length > 1 && (e = `\n${g}${e}\n${n}`),
                c.pop(),
                `{${e}}`
              );
            }
            case 'number':
              return isFinite(v) ? String(v) : t ? t(v) : 'null';
            case 'boolean':
              return !0 === v ? 'true' : 'false';
            case 'undefined':
              return;
            case 'bigint':
              if (o) return String(v);
            default:
              return t ? t(v) : void 0;
          }
        }
        function g(e, n, s, a, u, c) {
          switch (
            ('object' == typeof n &&
              null !== n &&
              'function' == typeof n.toJSON &&
              (n = n.toJSON(e)),
            typeof n)
          ) {
            case 'string':
              return i(n);
            case 'object': {
              if (null === n) return 'null';
              if (-1 !== s.indexOf(n)) return r;
              const e = c;
              let t = '',
                o = ',';
              if (Array.isArray(n)) {
                if (0 === n.length) return '[]';
                if (p < s.length + 1) return '"[Array]"';
                s.push(n), '' !== u && ((t += `\n${(c += u)}`), (o = `,\n${c}`));
                const r = Math.min(n.length, h);
                let i = 0;
                for (; i < r - 1; i++) {
                  const e = g(String(i), n[i], s, a, u, c);
                  (t += void 0 !== e ? e : 'null'), (t += o);
                }
                const l = g(String(i), n[i], s, a, u, c);
                return (
                  (t += void 0 !== l ? l : 'null'),
                  n.length - 1 > h && (t += `${o}"... ${d(n.length - h - 1)} not stringified"`),
                  '' !== u && (t += `\n${e}`),
                  s.pop(),
                  `[${t}]`
                );
              }
              s.push(n);
              let l = '';
              '' !== u && ((o = `,\n${(c += u)}`), (l = ' '));
              let f = '';
              for (const e of a) {
                const r = g(e, n[e], s, a, u, c);
                void 0 !== r && ((t += `${f}${i(e)}:${l}${r}`), (f = o));
              }
              return '' !== u && f.length > 1 && (t = `\n${c}${t}\n${e}`), s.pop(), `{${t}}`;
            }
            case 'number':
              return isFinite(n) ? String(n) : t ? t(n) : 'null';
            case 'boolean':
              return !0 === n ? 'true' : 'false';
            case 'undefined':
              return;
            case 'bigint':
              if (o) return String(n);
            default:
              return t ? t(n) : void 0;
          }
        }
        function v(e, n, l, f, y) {
          switch (typeof n) {
            case 'string':
              return i(n);
            case 'object': {
              if (null === n) return 'null';
              if ('function' == typeof n.toJSON) {
                if ('object' != typeof (n = n.toJSON(e))) return v(e, n, l, f, y);
                if (null === n) return 'null';
              }
              if (-1 !== l.indexOf(n)) return r;
              const t = y;
              if (Array.isArray(n)) {
                if (0 === n.length) return '[]';
                if (p < l.length + 1) return '"[Array]"';
                l.push(n);
                let e = `\n${(y += f)}`;
                const r = `,\n${y}`,
                  o = Math.min(n.length, h);
                let i = 0;
                for (; i < o - 1; i++) {
                  const t = v(String(i), n[i], l, f, y);
                  (e += void 0 !== t ? t : 'null'), (e += r);
                }
                const s = v(String(i), n[i], l, f, y);
                return (
                  (e += void 0 !== s ? s : 'null'),
                  n.length - 1 > h && (e += `${r}"... ${d(n.length - h - 1)} not stringified"`),
                  (e += `\n${t}`),
                  l.pop(),
                  `[${e}]`
                );
              }
              let o = Object.keys(n);
              const g = o.length;
              if (0 === g) return '{}';
              if (p < l.length + 1) return '"[Object]"';
              const m = `,\n${(y += f)}`;
              let b = '',
                w = '',
                _ = Math.min(g, h);
              u(n) && ((b += c(n, m, h)), (o = o.slice(n.length)), (_ -= n.length), (w = m)),
                a && (o = s(o)),
                l.push(n);
              for (let e = 0; e < _; e++) {
                const t = o[e],
                  r = v(t, n[t], l, f, y);
                void 0 !== r && ((b += `${w}${i(t)}: ${r}`), (w = m));
              }
              return (
                g > h && ((b += `${w}"...": "${d(g - h)} not stringified"`), (w = m)),
                '' !== w && (b = `\n${y}${b}\n${t}`),
                l.pop(),
                `{${b}}`
              );
            }
            case 'number':
              return isFinite(n) ? String(n) : t ? t(n) : 'null';
            case 'boolean':
              return !0 === n ? 'true' : 'false';
            case 'undefined':
              return;
            case 'bigint':
              if (o) return String(n);
            default:
              return t ? t(n) : void 0;
          }
        }
        function m(e, n, l) {
          switch (typeof n) {
            case 'string':
              return i(n);
            case 'object': {
              if (null === n) return 'null';
              if ('function' == typeof n.toJSON) {
                if ('object' != typeof (n = n.toJSON(e))) return m(e, n, l);
                if (null === n) return 'null';
              }
              if (-1 !== l.indexOf(n)) return r;
              let t = '';
              if (Array.isArray(n)) {
                if (0 === n.length) return '[]';
                if (p < l.length + 1) return '"[Array]"';
                l.push(n);
                const e = Math.min(n.length, h);
                let r = 0;
                for (; r < e - 1; r++) {
                  const e = m(String(r), n[r], l);
                  (t += void 0 !== e ? e : 'null'), (t += ',');
                }
                const o = m(String(r), n[r], l);
                return (
                  (t += void 0 !== o ? o : 'null'),
                  n.length - 1 > h && (t += `,"... ${d(n.length - h - 1)} not stringified"`),
                  l.pop(),
                  `[${t}]`
                );
              }
              let o = Object.keys(n);
              const f = o.length;
              if (0 === f) return '{}';
              if (p < l.length + 1) return '"[Object]"';
              let y = '',
                g = Math.min(f, h);
              u(n) && ((t += c(n, ',', h)), (o = o.slice(n.length)), (g -= n.length), (y = ',')),
                a && (o = s(o)),
                l.push(n);
              for (let e = 0; e < g; e++) {
                const r = o[e],
                  s = m(r, n[r], l);
                void 0 !== s && ((t += `${y}${i(r)}:${s}`), (y = ','));
              }
              return f > h && (t += `${y}"...":"${d(f - h)} not stringified"`), l.pop(), `{${t}}`;
            }
            case 'number':
              return isFinite(n) ? String(n) : t ? t(n) : 'null';
            case 'boolean':
              return !0 === n ? 'true' : 'false';
            case 'undefined':
              return;
            case 'bigint':
              if (o) return String(n);
            default:
              return t ? t(n) : void 0;
          }
        }
        return function(e, t, n) {
          if (arguments.length > 1) {
            let r = '';
            if (
              ('number' == typeof n
                ? (r = ' '.repeat(Math.min(n, 10)))
                : 'string' == typeof n && (r = n.slice(0, 10)),
              null != t)
            ) {
              if ('function' == typeof t) return y('', { '': e }, [], t, r, '');
              if (Array.isArray(t))
                return g(
                  '',
                  e,
                  [],
                  (function(e) {
                    const t = new Set();
                    for (const n of e)
                      ('string' != typeof n && 'number' != typeof n) || t.add(String(n));
                    return t;
                  })(t),
                  r,
                  '',
                );
            }
            if (0 !== r.length) return v('', e, [], r, '');
          }
          return m('', e, []);
        };
      }
    },
    60237: (e, t, n) => {
      'use strict';
      n.r(t),
        n.d(t, {
          SuperJSON: () => Y,
          allowErrorProps: () => se,
          default: () => H,
          deserialize: () => ee,
          parse: () => ne,
          registerClass: () => re,
          registerCustom: () => oe,
          registerSymbol: () => ie,
          serialize: () => Z,
          stringify: () => te,
        });
      var r,
        o = (function() {
          function e() {
            (this.keyToValue = new Map()), (this.valueToKey = new Map());
          }
          return (
            (e.prototype.set = function(e, t) {
              this.keyToValue.set(e, t), this.valueToKey.set(t, e);
            }),
            (e.prototype.getByKey = function(e) {
              return this.keyToValue.get(e);
            }),
            (e.prototype.getByValue = function(e) {
              return this.valueToKey.get(e);
            }),
            (e.prototype.clear = function() {
              this.keyToValue.clear(), this.valueToKey.clear();
            }),
            e
          );
        })(),
        i = (function() {
          function e(e) {
            (this.generateIdentifier = e), (this.kv = new o());
          }
          return (
            (e.prototype.register = function(e, t) {
              this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
            }),
            (e.prototype.clear = function() {
              this.kv.clear();
            }),
            (e.prototype.getIdentifier = function(e) {
              return this.kv.getByValue(e);
            }),
            (e.prototype.getValue = function(e) {
              return this.kv.getByKey(e);
            }),
            e
          );
        })(),
        s =
          ((r = function(e, t) {
            return (
              (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              r(e, t)
            );
          }),
          function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Class extends value ' + String(t) + ' is not a constructor or null',
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
          }),
        a = (function(e) {
          function t() {
            var t =
              e.call(this, function(e) {
                return e.name;
              }) || this;
            return (t.classToAllowedProps = new Map()), t;
          }
          return (
            s(t, e),
            (t.prototype.register = function(t, n) {
              'object' == typeof n
                ? (n.allowProps && this.classToAllowedProps.set(t, n.allowProps),
                  e.prototype.register.call(this, t, n.identifier))
                : e.prototype.register.call(this, t, n);
            }),
            (t.prototype.getAllowedProps = function(e) {
              return this.classToAllowedProps.get(e);
            }),
            t
          );
        })(i),
        u = function(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        };
      function c(e, t) {
        Object.entries(e).forEach(function(e) {
          var n = u(e, 2),
            r = n[0],
            o = n[1];
          return t(o, r);
        });
      }
      function l(e, t) {
        return -1 !== e.indexOf(t);
      }
      function f(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (t(r)) return r;
        }
      }
      var d = (function() {
          function e() {
            this.transfomers = {};
          }
          return (
            (e.prototype.register = function(e) {
              this.transfomers[e.name] = e;
            }),
            (e.prototype.findApplicable = function(e) {
              return (function(e, t) {
                var n = (function(e) {
                  if ('values' in Object) return Object.values(e);
                  var t = [];
                  for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
                  return t;
                })(e);
                if ('find' in n) return n.find(t);
                for (var r = n, o = 0; o < r.length; o++) {
                  var i = r[o];
                  if (t(i)) return i;
                }
              })(this.transfomers, function(t) {
                return t.isApplicable(e);
              });
            }),
            (e.prototype.findByName = function(e) {
              return this.transfomers[e];
            }),
            e
          );
        })(),
        p = function(e) {
          return void 0 === e;
        },
        h = function(e) {
          return (
            'object' == typeof e &&
            null !== e &&
            e !== Object.prototype &&
            (null === Object.getPrototypeOf(e) || Object.getPrototypeOf(e) === Object.prototype)
          );
        },
        y = function(e) {
          return h(e) && 0 === Object.keys(e).length;
        },
        g = function(e) {
          return Array.isArray(e);
        },
        v = function(e) {
          return e instanceof Map;
        },
        m = function(e) {
          return e instanceof Set;
        },
        b = function(e) {
          return (
            'Symbol' ===
            (function(e) {
              return Object.prototype.toString.call(e).slice(8, -1);
            })(e)
          );
        },
        w = function(e) {
          return 'number' == typeof e && isNaN(e);
        },
        _ = function(e) {
          return e.replace(/\./g, '\\.');
        },
        O = function(e) {
          return e
            .map(String)
            .map(_)
            .join('.');
        },
        S = function(e) {
          for (var t = [], n = '', r = 0; r < e.length; r++) {
            var o = e.charAt(r);
            '\\' === o && '.' === e.charAt(r + 1)
              ? ((n += '.'), r++)
              : '.' === o
              ? (t.push(n), (n = ''))
              : (n += o);
          }
          var i = n;
          return t.push(i), t;
        },
        E = function() {
          return (
            (E =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            E.apply(this, arguments)
          );
        },
        k = function(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
        I = function(e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
          return e;
        };
      function j(e, t, n, r) {
        return { isApplicable: e, annotation: t, transform: n, untransform: r };
      }
      var x = [
        j(
          p,
          'undefined',
          function() {
            return null;
          },
          function() {},
        ),
        j(
          function(e) {
            return 'bigint' == typeof e;
          },
          'bigint',
          function(e) {
            return e.toString();
          },
          function(e) {
            return 'undefined' != typeof BigInt
              ? BigInt(e)
              : (console.error('Please add a BigInt polyfill.'), e);
          },
        ),
        j(
          function(e) {
            return e instanceof Date && !isNaN(e.valueOf());
          },
          'Date',
          function(e) {
            return e.toISOString();
          },
          function(e) {
            return new Date(e);
          },
        ),
        j(
          function(e) {
            return e instanceof Error;
          },
          'Error',
          function(e, t) {
            var n = { name: e.name, message: e.message };
            return (
              t.allowedErrorProps.forEach(function(t) {
                n[t] = e[t];
              }),
              n
            );
          },
          function(e, t) {
            var n = new Error(e.message);
            return (
              (n.name = e.name),
              (n.stack = e.stack),
              t.allowedErrorProps.forEach(function(t) {
                n[t] = e[t];
              }),
              n
            );
          },
        ),
        j(
          function(e) {
            return e instanceof RegExp;
          },
          'regexp',
          function(e) {
            return '' + e;
          },
          function(e) {
            var t = e.slice(1, e.lastIndexOf('/')),
              n = e.slice(e.lastIndexOf('/') + 1);
            return new RegExp(t, n);
          },
        ),
        j(
          m,
          'set',
          function(e) {
            return I([], k(e.values()));
          },
          function(e) {
            return new Set(e);
          },
        ),
        j(
          v,
          'map',
          function(e) {
            return I([], k(e.entries()));
          },
          function(e) {
            return new Map(e);
          },
        ),
        j(
          function(e) {
            return w(e) || (t = e) === 1 / 0 || t === -1 / 0;
            var t;
          },
          'number',
          function(e) {
            return w(e) ? 'NaN' : e > 0 ? 'Infinity' : '-Infinity';
          },
          Number,
        ),
        j(
          function(e) {
            return 0 === e && 1 / e == -1 / 0;
          },
          'number',
          function() {
            return '-0';
          },
          Number,
        ),
        j(
          function(e) {
            return e instanceof URL;
          },
          'URL',
          function(e) {
            return e.toString();
          },
          function(e) {
            return new URL(e);
          },
        ),
      ];
      function P(e, t, n, r) {
        return { isApplicable: e, annotation: t, transform: n, untransform: r };
      }
      var T = P(
          function(e, t) {
            return !!b(e) && !!t.symbolRegistry.getIdentifier(e);
          },
          function(e, t) {
            return ['symbol', t.symbolRegistry.getIdentifier(e)];
          },
          function(e) {
            return e.description;
          },
          function(e, t, n) {
            var r = n.symbolRegistry.getValue(t[1]);
            if (!r) throw new Error('Trying to deserialize unknown symbol');
            return r;
          },
        ),
        A = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce(function(e, t) {
          return (e[t.name] = t), e;
        }, {}),
        $ = P(
          function(e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView);
          },
          function(e) {
            return ['typed-array', e.constructor.name];
          },
          function(e) {
            return I([], k(e));
          },
          function(e, t) {
            var n = A[t[1]];
            if (!n) throw new Error('Trying to deserialize unknown typed array');
            return new n(e);
          },
        );
      function M(e, t) {
        return (
          !!(null == e ? void 0 : e.constructor) && !!t.classRegistry.getIdentifier(e.constructor)
        );
      }
      var N = P(
          M,
          function(e, t) {
            return ['class', t.classRegistry.getIdentifier(e.constructor)];
          },
          function(e, t) {
            var n = t.classRegistry.getAllowedProps(e.constructor);
            if (!n) return E({}, e);
            var r = {};
            return (
              n.forEach(function(t) {
                r[t] = e[t];
              }),
              r
            );
          },
          function(e, t, n) {
            var r = n.classRegistry.getValue(t[1]);
            if (!r)
              throw new Error(
                'Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564',
              );
            return Object.assign(Object.create(r.prototype), e);
          },
        ),
        C = P(
          function(e, t) {
            return !!t.customTransformerRegistry.findApplicable(e);
          },
          function(e, t) {
            return ['custom', t.customTransformerRegistry.findApplicable(e).name];
          },
          function(e, t) {
            return t.customTransformerRegistry.findApplicable(e).serialize(e);
          },
          function(e, t, n) {
            var r = n.customTransformerRegistry.findByName(t[1]);
            if (!r) throw new Error('Trying to deserialize unknown custom value');
            return r.deserialize(e);
          },
        ),
        R = [N, T, C, $],
        L = function(e, t) {
          var n = f(R, function(n) {
            return n.isApplicable(e, t);
          });
          if (n) return { value: n.transform(e, t), type: n.annotation(e, t) };
          var r = f(x, function(n) {
            return n.isApplicable(e, t);
          });
          return r ? { value: r.transform(e, t), type: r.annotation } : void 0;
        },
        U = {};
      x.forEach(function(e) {
        U[e.annotation] = e;
      });
      var D = function(e, t) {
        for (var n = e.keys(); t > 0; ) n.next(), t--;
        return n.next().value;
      };
      function W(e) {
        if (l(e, '__proto__')) throw new Error('__proto__ is not allowed as a property');
        if (l(e, 'prototype')) throw new Error('prototype is not allowed as a property');
        if (l(e, 'constructor')) throw new Error('constructor is not allowed as a property');
      }
      var z = function(e, t, n) {
          if ((W(t), 0 === t.length)) return n(e);
          for (var r = e, o = 0; o < t.length - 1; o++) {
            var i = t[o];
            if (g(r)) r = r[+i];
            else if (h(r)) r = r[i];
            else if (m(r)) r = D(r, (s = +i));
            else if (v(r)) {
              if (o === t.length - 2) break;
              var s = +i,
                a = 0 == +t[++o] ? 'key' : 'value',
                u = D(r, s);
              switch (a) {
                case 'key':
                  r = u;
                  break;
                case 'value':
                  r = r.get(u);
              }
            }
          }
          var c = t[t.length - 1];
          if ((g(r) ? (r[+c] = n(r[+c])) : h(r) && (r[c] = n(r[c])), m(r))) {
            var l = D(r, +c),
              f = n(l);
            l !== f && (r.delete(l), r.add(f));
          }
          if (v(r)) {
            s = +t[t.length - 2];
            var d = D(r, s);
            switch ((a = 0 == +c ? 'key' : 'value')) {
              case 'key':
                var p = n(d);
                r.set(p, r.get(d)), p !== d && r.delete(d);
                break;
              case 'value':
                r.set(d, n(r.get(d)));
            }
          }
          return e;
        },
        V = function(e, t) {
          var n = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
        J = function(e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
          return e;
        };
      function B(e, t, n) {
        if ((void 0 === n && (n = []), e))
          if (g(e)) {
            var r = V(e, 2),
              o = r[0],
              i = r[1];
            i &&
              c(i, function(e, r) {
                B(e, t, J(J([], V(n)), V(S(r))));
              }),
              t(o, n);
          } else
            c(e, function(e, r) {
              return B(e, t, J(J([], V(n)), V(S(r))));
            });
      }
      function q(e, t, n) {
        return (
          B(t, function(t, r) {
            e = z(e, r, function(e) {
              return (function(e, t, n) {
                if (!g(t)) {
                  var r = U[t];
                  if (!r) throw new Error('Unknown transformation: ' + t);
                  return r.untransform(e, n);
                }
                switch (t[0]) {
                  case 'symbol':
                    return T.untransform(e, t, n);
                  case 'class':
                    return N.untransform(e, t, n);
                  case 'custom':
                    return C.untransform(e, t, n);
                  case 'typed-array':
                    return $.untransform(e, t, n);
                  default:
                    throw new Error('Unknown transformation: ' + t);
                }
              })(e, t, n);
            });
          }),
          e
        );
      }
      var F = function(e, t, n, r, o, i, s) {
        var a;
        void 0 === o && (o = []), void 0 === i && (i = []), void 0 === s && (s = new Map());
        var u,
          f =
            (function(e) {
              return 'boolean' == typeof e;
            })((u = e)) ||
            (function(e) {
              return null === e;
            })(u) ||
            p(u) ||
            (function(e) {
              return 'number' == typeof e && !isNaN(e);
            })(u) ||
            (function(e) {
              return 'string' == typeof e;
            })(u) ||
            b(u);
        if (!f) {
          !(function(e, t, n) {
            var r = n.get(e);
            r ? r.push(t) : n.set(e, [t]);
          })(e, o, t);
          var d = s.get(e);
          if (d) return r ? { transformedValue: null } : d;
        }
        if (
          !(function(e, t) {
            return h(e) || g(e) || v(e) || m(e) || M(e, t);
          })(e, n)
        ) {
          var w = L(e, n),
            O = w ? { transformedValue: w.value, annotations: [w.type] } : { transformedValue: e };
          return f || s.set(e, O), O;
        }
        if (l(i, e)) return { transformedValue: null };
        var S = L(e, n),
          E = null !== (a = null == S ? void 0 : S.value) && void 0 !== a ? a : e,
          k = g(E) ? [] : {},
          I = {};
        c(E, function(a, u) {
          var l = F(a, t, n, r, J(J([], V(o)), [u]), J(J([], V(i)), [e]), s);
          (k[u] = l.transformedValue),
            g(l.annotations)
              ? (I[u] = l.annotations)
              : h(l.annotations) &&
                c(l.annotations, function(e, t) {
                  I[_(u) + '.' + t] = e;
                });
        });
        var j = y(I)
          ? { transformedValue: k, annotations: S ? [S.type] : void 0 }
          : { transformedValue: k, annotations: S ? [S.type, I] : I };
        return f || s.set(e, j), j;
      };
      function G(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      function K(e) {
        return 'Array' === G(e);
      }
      function Q(e, t = {}) {
        return K(e)
          ? e.map(e => Q(e, t))
          : (function(e) {
              if ('Object' !== G(e)) return !1;
              const t = Object.getPrototypeOf(e);
              return !!t && t.constructor === Object && t === Object.prototype;
            })(e)
          ? [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)].reduce(
              (n, r) => (
                (K(t.props) && !t.props.includes(r)) ||
                  (function(e, t, n, r, o) {
                    const i = {}.propertyIsEnumerable.call(r, t) ? 'enumerable' : 'nonenumerable';
                    'enumerable' === i && (e[t] = n),
                      o &&
                        'nonenumerable' === i &&
                        Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        });
                  })(n, r, Q(e[r], t), e, t.nonenumerable),
                n
              ),
              {},
            )
          : e;
      }
      var X = function() {
          return (
            (X =
              Object.assign ||
              function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            X.apply(this, arguments)
          );
        },
        Y = (function() {
          function e(e) {
            var t = (void 0 === e ? {} : e).dedupe,
              n = void 0 !== t && t;
            (this.classRegistry = new a()),
              (this.symbolRegistry = new i(function(e) {
                var t;
                return null !== (t = e.description) && void 0 !== t ? t : '';
              })),
              (this.customTransformerRegistry = new d()),
              (this.allowedErrorProps = []),
              (this.dedupe = n);
          }
          return (
            (e.prototype.serialize = function(e) {
              var t = new Map(),
                n = F(e, t, this, this.dedupe),
                r = { json: n.transformedValue };
              n.annotations && (r.meta = X(X({}, r.meta), { values: n.annotations }));
              var o,
                i,
                s,
                a,
                u =
                  ((o = t),
                  (i = this.dedupe),
                  (s = {}),
                  (a = void 0),
                  o.forEach(function(e) {
                    if (!(e.length <= 1)) {
                      i ||
                        (e = e
                          .map(function(e) {
                            return e.map(String);
                          })
                          .sort(function(e, t) {
                            return e.length - t.length;
                          }));
                      var t = V(e),
                        n = t[0],
                        r = t.slice(1);
                      0 === n.length ? (a = r.map(O)) : (s[O(n)] = r.map(O));
                    }
                  }),
                  a ? (y(s) ? [a] : [a, s]) : y(s) ? void 0 : s);
              return u && (r.meta = X(X({}, r.meta), { referentialEqualities: u })), r;
            }),
            (e.prototype.deserialize = function(e) {
              var t = e.json,
                n = e.meta,
                r = Q(t);
              return (
                (null == n ? void 0 : n.values) && (r = q(r, n.values, this)),
                (null == n ? void 0 : n.referentialEqualities) &&
                  (r = (function(e, t) {
                    function n(t, n) {
                      var r = (function(e, t) {
                        W(t);
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          if (m(e)) e = D(e, +r);
                          else if (v(e)) {
                            var o = +r,
                              i = 0 == +t[++n] ? 'key' : 'value',
                              s = D(e, o);
                            switch (i) {
                              case 'key':
                                e = s;
                                break;
                              case 'value':
                                e = e.get(s);
                            }
                          } else e = e[r];
                        }
                        return e;
                      })(e, S(n));
                      t.map(S).forEach(function(t) {
                        e = z(e, t, function() {
                          return r;
                        });
                      });
                    }
                    if (g(t)) {
                      var r = V(t, 2),
                        o = r[0],
                        i = r[1];
                      o.forEach(function(t) {
                        e = z(e, S(t), function() {
                          return e;
                        });
                      }),
                        i && c(i, n);
                    } else c(t, n);
                    return e;
                  })(r, n.referentialEqualities)),
                r
              );
            }),
            (e.prototype.stringify = function(e) {
              return JSON.stringify(this.serialize(e));
            }),
            (e.prototype.parse = function(e) {
              return this.deserialize(JSON.parse(e));
            }),
            (e.prototype.registerClass = function(e, t) {
              this.classRegistry.register(e, t);
            }),
            (e.prototype.registerSymbol = function(e, t) {
              this.symbolRegistry.register(e, t);
            }),
            (e.prototype.registerCustom = function(e, t) {
              this.customTransformerRegistry.register(X({ name: t }, e));
            }),
            (e.prototype.allowErrorProps = function() {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              (e = this.allowedErrorProps).push.apply(
                e,
                (function(e, t) {
                  for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                  return e;
                })(
                  [],
                  (function(e, t) {
                    var n = 'function' == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r,
                      o,
                      i = n.call(e),
                      s = [];
                    try {
                      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value);
                    } catch (e) {
                      o = { error: e };
                    } finally {
                      try {
                        r && !r.done && (n = i.return) && n.call(i);
                      } finally {
                        if (o) throw o.error;
                      }
                    }
                    return s;
                  })(t),
                ),
              );
            }),
            (e.defaultInstance = new e()),
            (e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance)),
            (e.deserialize = e.defaultInstance.deserialize.bind(e.defaultInstance)),
            (e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance)),
            (e.parse = e.defaultInstance.parse.bind(e.defaultInstance)),
            (e.registerClass = e.defaultInstance.registerClass.bind(e.defaultInstance)),
            (e.registerSymbol = e.defaultInstance.registerSymbol.bind(e.defaultInstance)),
            (e.registerCustom = e.defaultInstance.registerCustom.bind(e.defaultInstance)),
            (e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(e.defaultInstance)),
            e
          );
        })();
      const H = Y;
      var Z = Y.serialize,
        ee = Y.deserialize,
        te = Y.stringify,
        ne = Y.parse,
        re = Y.registerClass,
        oe = Y.registerCustom,
        ie = Y.registerSymbol,
        se = Y.allowErrorProps;
    },
    35088: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'NIL', {
          enumerable: !0,
          get: function() {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'parse', {
          enumerable: !0,
          get: function() {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'stringify', {
          enumerable: !0,
          get: function() {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'v1', {
          enumerable: !0,
          get: function() {
            return r.default;
          },
        }),
        Object.defineProperty(t, 'v3', {
          enumerable: !0,
          get: function() {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'v4', {
          enumerable: !0,
          get: function() {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'v5', {
          enumerable: !0,
          get: function() {
            return s.default;
          },
        }),
        Object.defineProperty(t, 'validate', {
          enumerable: !0,
          get: function() {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'version', {
          enumerable: !0,
          get: function() {
            return u.default;
          },
        });
      var r = d(n(49576)),
        o = d(n(93377)),
        i = d(n(70703)),
        s = d(n(73681)),
        a = d(n(47112)),
        u = d(n(10997)),
        c = d(n(29783)),
        l = d(n(29483)),
        f = d(n(9283));
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
    },
    24688: (e, t) => {
      'use strict';
      function n(e) {
        return 14 + (((e + 64) >>> 9) << 4) + 1;
      }
      function r(e, t) {
        const n = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
      }
      function o(e, t, n, o, i, s) {
        return r(((a = r(r(t, e), r(o, s))) << (u = i)) | (a >>> (32 - u)), n);
        var a, u;
      }
      function i(e, t, n, r, i, s, a) {
        return o((t & n) | (~t & r), e, t, i, s, a);
      }
      function s(e, t, n, r, i, s, a) {
        return o((t & r) | (n & ~r), e, t, i, s, a);
      }
      function a(e, t, n, r, i, s, a) {
        return o(t ^ n ^ r, e, t, i, s, a);
      }
      function u(e, t, n, r, i, s, a) {
        return o(n ^ (t | ~r), e, t, i, s, a);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      t.default = function(e) {
        if ('string' == typeof e) {
          const t = unescape(encodeURIComponent(e));
          e = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
        }
        return (function(e) {
          const t = [],
            n = 32 * e.length,
            r = '0123456789abcdef';
          for (let o = 0; o < n; o += 8) {
            const n = (e[o >> 5] >>> o % 32) & 255,
              i = parseInt(r.charAt((n >>> 4) & 15) + r.charAt(15 & n), 16);
            t.push(i);
          }
          return t;
        })(
          (function(e, t) {
            (e[t >> 5] |= 128 << t % 32), (e[n(t) - 1] = t);
            let o = 1732584193,
              c = -271733879,
              l = -1732584194,
              f = 271733878;
            for (let t = 0; t < e.length; t += 16) {
              const n = o,
                d = c,
                p = l,
                h = f;
              (o = i(o, c, l, f, e[t], 7, -680876936)),
                (f = i(f, o, c, l, e[t + 1], 12, -389564586)),
                (l = i(l, f, o, c, e[t + 2], 17, 606105819)),
                (c = i(c, l, f, o, e[t + 3], 22, -1044525330)),
                (o = i(o, c, l, f, e[t + 4], 7, -176418897)),
                (f = i(f, o, c, l, e[t + 5], 12, 1200080426)),
                (l = i(l, f, o, c, e[t + 6], 17, -1473231341)),
                (c = i(c, l, f, o, e[t + 7], 22, -45705983)),
                (o = i(o, c, l, f, e[t + 8], 7, 1770035416)),
                (f = i(f, o, c, l, e[t + 9], 12, -1958414417)),
                (l = i(l, f, o, c, e[t + 10], 17, -42063)),
                (c = i(c, l, f, o, e[t + 11], 22, -1990404162)),
                (o = i(o, c, l, f, e[t + 12], 7, 1804603682)),
                (f = i(f, o, c, l, e[t + 13], 12, -40341101)),
                (l = i(l, f, o, c, e[t + 14], 17, -1502002290)),
                (c = i(c, l, f, o, e[t + 15], 22, 1236535329)),
                (o = s(o, c, l, f, e[t + 1], 5, -165796510)),
                (f = s(f, o, c, l, e[t + 6], 9, -1069501632)),
                (l = s(l, f, o, c, e[t + 11], 14, 643717713)),
                (c = s(c, l, f, o, e[t], 20, -373897302)),
                (o = s(o, c, l, f, e[t + 5], 5, -701558691)),
                (f = s(f, o, c, l, e[t + 10], 9, 38016083)),
                (l = s(l, f, o, c, e[t + 15], 14, -660478335)),
                (c = s(c, l, f, o, e[t + 4], 20, -405537848)),
                (o = s(o, c, l, f, e[t + 9], 5, 568446438)),
                (f = s(f, o, c, l, e[t + 14], 9, -1019803690)),
                (l = s(l, f, o, c, e[t + 3], 14, -187363961)),
                (c = s(c, l, f, o, e[t + 8], 20, 1163531501)),
                (o = s(o, c, l, f, e[t + 13], 5, -1444681467)),
                (f = s(f, o, c, l, e[t + 2], 9, -51403784)),
                (l = s(l, f, o, c, e[t + 7], 14, 1735328473)),
                (c = s(c, l, f, o, e[t + 12], 20, -1926607734)),
                (o = a(o, c, l, f, e[t + 5], 4, -378558)),
                (f = a(f, o, c, l, e[t + 8], 11, -2022574463)),
                (l = a(l, f, o, c, e[t + 11], 16, 1839030562)),
                (c = a(c, l, f, o, e[t + 14], 23, -35309556)),
                (o = a(o, c, l, f, e[t + 1], 4, -1530992060)),
                (f = a(f, o, c, l, e[t + 4], 11, 1272893353)),
                (l = a(l, f, o, c, e[t + 7], 16, -155497632)),
                (c = a(c, l, f, o, e[t + 10], 23, -1094730640)),
                (o = a(o, c, l, f, e[t + 13], 4, 681279174)),
                (f = a(f, o, c, l, e[t], 11, -358537222)),
                (l = a(l, f, o, c, e[t + 3], 16, -722521979)),
                (c = a(c, l, f, o, e[t + 6], 23, 76029189)),
                (o = a(o, c, l, f, e[t + 9], 4, -640364487)),
                (f = a(f, o, c, l, e[t + 12], 11, -421815835)),
                (l = a(l, f, o, c, e[t + 15], 16, 530742520)),
                (c = a(c, l, f, o, e[t + 2], 23, -995338651)),
                (o = u(o, c, l, f, e[t], 6, -198630844)),
                (f = u(f, o, c, l, e[t + 7], 10, 1126891415)),
                (l = u(l, f, o, c, e[t + 14], 15, -1416354905)),
                (c = u(c, l, f, o, e[t + 5], 21, -57434055)),
                (o = u(o, c, l, f, e[t + 12], 6, 1700485571)),
                (f = u(f, o, c, l, e[t + 3], 10, -1894986606)),
                (l = u(l, f, o, c, e[t + 10], 15, -1051523)),
                (c = u(c, l, f, o, e[t + 1], 21, -2054922799)),
                (o = u(o, c, l, f, e[t + 8], 6, 1873313359)),
                (f = u(f, o, c, l, e[t + 15], 10, -30611744)),
                (l = u(l, f, o, c, e[t + 6], 15, -1560198380)),
                (c = u(c, l, f, o, e[t + 13], 21, 1309151649)),
                (o = u(o, c, l, f, e[t + 4], 6, -145523070)),
                (f = u(f, o, c, l, e[t + 11], 10, -1120210379)),
                (l = u(l, f, o, c, e[t + 2], 15, 718787259)),
                (c = u(c, l, f, o, e[t + 9], 21, -343485551)),
                (o = r(o, n)),
                (c = r(c, d)),
                (l = r(l, p)),
                (f = r(f, h));
            }
            return [o, c, l, f];
          })(
            (function(e) {
              if (0 === e.length) return [];
              const t = 8 * e.length,
                r = new Uint32Array(n(t));
              for (let n = 0; n < t; n += 8) r[n >> 5] |= (255 & e[n / 8]) << n % 32;
              return r;
            })(e),
            8 * e.length,
          ),
        );
      };
    },
    10009: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = {
        randomUUID:
          'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      };
      t.default = n;
    },
    47112: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = '00000000-0000-0000-0000-000000000000');
    },
    9283: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r,
        o = (r = n(29783)) && r.__esModule ? r : { default: r };
      t.default = function(e) {
        if (!(0, o.default)(e)) throw TypeError('Invalid UUID');
        let t;
        const n = new Uint8Array(16);
        return (
          (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
          (n[1] = (t >>> 16) & 255),
          (n[2] = (t >>> 8) & 255),
          (n[3] = 255 & t),
          (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
          (n[5] = 255 & t),
          (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
          (n[7] = 255 & t),
          (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
          (n[9] = 255 & t),
          (n[10] = ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
          (n[11] = (t / 4294967296) & 255),
          (n[12] = (t >>> 24) & 255),
          (n[13] = (t >>> 16) & 255),
          (n[14] = (t >>> 8) & 255),
          (n[15] = 255 & t),
          n
        );
      };
    },
    13031: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
    },
    18891: (e, t) => {
      'use strict';
      let n;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          if (
            !n &&
            ((n =
              'undefined' != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)),
            !n)
          )
            throw new Error(
              'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
            );
          return n(r);
        });
      const r = new Uint8Array(16);
    },
    92278: (e, t) => {
      'use strict';
      function n(e, t, n, r) {
        switch (e) {
          case 0:
            return (t & n) ^ (~t & r);
          case 1:
          case 3:
            return t ^ n ^ r;
          case 2:
            return (t & n) ^ (t & r) ^ (n & r);
        }
      }
      function r(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      t.default = function(e) {
        const t = [1518500249, 1859775393, 2400959708, 3395469782],
          o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ('string' == typeof e) {
          const t = unescape(encodeURIComponent(e));
          e = [];
          for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
        e.push(128);
        const i = e.length / 4 + 2,
          s = Math.ceil(i / 16),
          a = new Array(s);
        for (let t = 0; t < s; ++t) {
          const n = new Uint32Array(16);
          for (let r = 0; r < 16; ++r)
            n[r] =
              (e[64 * t + 4 * r] << 24) |
              (e[64 * t + 4 * r + 1] << 16) |
              (e[64 * t + 4 * r + 2] << 8) |
              e[64 * t + 4 * r + 3];
          a[t] = n;
        }
        (a[s - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
          (a[s - 1][14] = Math.floor(a[s - 1][14])),
          (a[s - 1][15] = (8 * (e.length - 1)) & 4294967295);
        for (let e = 0; e < s; ++e) {
          const i = new Uint32Array(80);
          for (let t = 0; t < 16; ++t) i[t] = a[e][t];
          for (let e = 16; e < 80; ++e) i[e] = r(i[e - 3] ^ i[e - 8] ^ i[e - 14] ^ i[e - 16], 1);
          let s = o[0],
            u = o[1],
            c = o[2],
            l = o[3],
            f = o[4];
          for (let e = 0; e < 80; ++e) {
            const o = Math.floor(e / 20),
              a = (r(s, 5) + n(o, u, c, l) + f + t[o] + i[e]) >>> 0;
            (f = l), (l = c), (c = r(u, 30) >>> 0), (u = s), (s = a);
          }
          (o[0] = (o[0] + s) >>> 0),
            (o[1] = (o[1] + u) >>> 0),
            (o[2] = (o[2] + c) >>> 0),
            (o[3] = (o[3] + l) >>> 0),
            (o[4] = (o[4] + f) >>> 0);
        }
        return [
          (o[0] >> 24) & 255,
          (o[0] >> 16) & 255,
          (o[0] >> 8) & 255,
          255 & o[0],
          (o[1] >> 24) & 255,
          (o[1] >> 16) & 255,
          (o[1] >> 8) & 255,
          255 & o[1],
          (o[2] >> 24) & 255,
          (o[2] >> 16) & 255,
          (o[2] >> 8) & 255,
          255 & o[2],
          (o[3] >> 24) & 255,
          (o[3] >> 16) & 255,
          (o[3] >> 8) & 255,
          255 & o[3],
          (o[4] >> 24) & 255,
          (o[4] >> 16) & 255,
          (o[4] >> 8) & 255,
          255 & o[4],
        ];
      };
    },
    29483: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.unsafeStringify = s);
      var r,
        o = (r = n(29783)) && r.__esModule ? r : { default: r };
      const i = [];
      for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
      function s(e, t = 0) {
        return (
          i[e[t + 0]] +
          i[e[t + 1]] +
          i[e[t + 2]] +
          i[e[t + 3]] +
          '-' +
          i[e[t + 4]] +
          i[e[t + 5]] +
          '-' +
          i[e[t + 6]] +
          i[e[t + 7]] +
          '-' +
          i[e[t + 8]] +
          i[e[t + 9]] +
          '-' +
          i[e[t + 10]] +
          i[e[t + 11]] +
          i[e[t + 12]] +
          i[e[t + 13]] +
          i[e[t + 14]] +
          i[e[t + 15]]
        );
      }
      t.default = function(e, t = 0) {
        const n = s(e, t);
        if (!(0, o.default)(n)) throw TypeError('Stringified UUID is invalid');
        return n;
      };
    },
    49576: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r,
        o = (r = n(18891)) && r.__esModule ? r : { default: r },
        i = n(29483);
      let s,
        a,
        u = 0,
        c = 0;
      t.default = function(e, t, n) {
        let r = (t && n) || 0;
        const l = t || new Array(16);
        let f = (e = e || {}).node || s,
          d = void 0 !== e.clockseq ? e.clockseq : a;
        if (null == f || null == d) {
          const t = e.random || (e.rng || o.default)();
          null == f && (f = s = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
            null == d && (d = a = 16383 & ((t[6] << 8) | t[7]));
        }
        let p = void 0 !== e.msecs ? e.msecs : Date.now(),
          h = void 0 !== e.nsecs ? e.nsecs : c + 1;
        const y = p - u + (h - c) / 1e4;
        if (
          (y < 0 && void 0 === e.clockseq && (d = (d + 1) & 16383),
          (y < 0 || p > u) && void 0 === e.nsecs && (h = 0),
          h >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (u = p), (c = h), (a = d), (p += 122192928e5);
        const g = (1e4 * (268435455 & p) + h) % 4294967296;
        (l[r++] = (g >>> 24) & 255),
          (l[r++] = (g >>> 16) & 255),
          (l[r++] = (g >>> 8) & 255),
          (l[r++] = 255 & g);
        const v = ((p / 4294967296) * 1e4) & 268435455;
        (l[r++] = (v >>> 8) & 255),
          (l[r++] = 255 & v),
          (l[r++] = ((v >>> 24) & 15) | 16),
          (l[r++] = (v >>> 16) & 255),
          (l[r++] = (d >>> 8) | 128),
          (l[r++] = 255 & d);
        for (let e = 0; e < 6; ++e) l[r + e] = f[e];
        return t || (0, i.unsafeStringify)(l);
      };
    },
    93377: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = i(n(43271)),
        o = i(n(24688));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (0, r.default)('v3', 48, o.default);
      t.default = s;
    },
    43271: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.URL = t.DNS = void 0),
        (t.default = function(e, t, n) {
          function r(e, r, s, a) {
            var u;
            if (
              ('string' == typeof e &&
                (e = (function(e) {
                  e = unescape(encodeURIComponent(e));
                  const t = [];
                  for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                  return t;
                })(e)),
              'string' == typeof r && (r = (0, i.default)(r)),
              16 !== (null === (u = r) || void 0 === u ? void 0 : u.length))
            )
              throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
            let c = new Uint8Array(16 + e.length);
            if (
              (c.set(r),
              c.set(e, r.length),
              (c = n(c)),
              (c[6] = (15 & c[6]) | t),
              (c[8] = (63 & c[8]) | 128),
              s)
            ) {
              a = a || 0;
              for (let e = 0; e < 16; ++e) s[a + e] = c[e];
              return s;
            }
            return (0, o.unsafeStringify)(c);
          }
          try {
            r.name = e;
          } catch (e) {}
          return (r.DNS = s), (r.URL = a), r;
        });
      var r,
        o = n(29483),
        i = (r = n(9283)) && r.__esModule ? r : { default: r };
      const s = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
      t.DNS = s;
      const a = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
      t.URL = a;
    },
    70703: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = s(n(10009)),
        o = s(n(18891)),
        i = n(29483);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function(e, t, n) {
        if (r.default.randomUUID && !t && !e) return r.default.randomUUID();
        const s = (e = e || {}).random || (e.rng || o.default)();
        if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = s[e];
          return t;
        }
        return (0, i.unsafeStringify)(s);
      };
    },
    73681: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = i(n(43271)),
        o = i(n(92278));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (0, r.default)('v5', 80, o.default);
      t.default = s;
    },
    29783: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r,
        o = (r = n(13031)) && r.__esModule ? r : { default: r };
      t.default = function(e) {
        return 'string' == typeof e && o.default.test(e);
      };
    },
    10997: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r,
        o = (r = n(29783)) && r.__esModule ? r : { default: r };
      t.default = function(e) {
        if (!(0, o.default)(e)) throw TypeError('Invalid UUID');
        return parseInt(e.slice(14, 15), 16);
      };
    },
  },
]);
