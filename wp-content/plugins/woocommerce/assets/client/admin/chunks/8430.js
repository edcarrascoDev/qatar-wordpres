/*! For license information please see 8430.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [8430],
  {
    63597: (t, e, s) => {
      s.d(e, { Z: () => a });
      var n = s(69307),
        o = s(87608),
        i = s.n(o),
        r = s(55609);
      function a(t) {
        return (0, n.createElement)(r.Button, {
          ...t,
          className: i()('edit-site-sidebar-button', t.className),
        });
      }
    },
    78959: (t, e, s) => {
      s.d(e, { Z: () => l });
      var n = s(69307),
        o = s(87608),
        i = s.n(o),
        r = s(55609),
        a = s(65736);
      const c = (0, n.forwardRef)(function({ icon: t, size: e = 24, ...s }, o) {
        return (0, n.cloneElement)(t, { width: e, height: e, ...s, ref: o });
      });
      var h = s(99196),
        u = s(70444);
      const d = (0, h.createElement)(
          u.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, h.createElement)(u.Path, { d: 'm13.1 16-3.4-4 3.4-4 1.1 1-2.6 3 2.6 3-1.1 1z' }),
        ),
        f = (0, h.createElement)(
          u.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, h.createElement)(u.Path, {
            d:
              'M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z',
          }),
        );
      function l({ className: t, icon: e, withChevron: s = !1, suffix: o, children: h, ...u }) {
        return (0, n.createElement)(
          r.__experimentalItem,
          {
            className: i()('edit-site-sidebar-navigation-item', { 'with-suffix': !s && o }, t),
            ...u,
          },
          (0, n.createElement)(
            r.__experimentalHStack,
            { justify: 'flex-start' },
            e && (0, n.createElement)(c, { style: { fill: 'currentcolor' }, icon: e, size: 24 }),
            (0, n.createElement)(r.FlexBlock, null, h),
            s &&
              (0, n.createElement)(c, {
                icon: (0, a.isRTL)() ? d : f,
                className: 'edit-site-sidebar-navigation-item__drilldown-indicator',
                size: 24,
              }),
            !s && o,
          ),
        );
      }
    },
    31886: (t, e, s) => {
      s.d(e, { Z: () => l });
      var n = s(69307),
        o = s(87608),
        i = s.n(o),
        r = s(9818),
        a = s(55609),
        c = s(65736),
        h = s(99196),
        u = s(70444);
      const d = (0, h.createElement)(
        u.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '-2 -2 24 24' },
        (0, h.createElement)(u.Path, {
          d:
            'M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z',
        }),
      );
      var f = s(37798);
      const l = function({ className: t }) {
        const { isRequestingSite: e, siteIconUrl: s } = (0, r.useSelect)(t => {
          const { getEntityRecord: e } = t(f.store),
            s = e('root', '__unstableBase', void 0);
          return { isRequestingSite: !s, siteIconUrl: s?.site_icon_url };
        }, []);
        if (e && !s)
          return (0, n.createElement)('div', { className: 'edit-site-site-icon__image' });
        const o = s
          ? (0, n.createElement)('img', {
              className: 'edit-site-site-icon__image',
              alt: (0, c.__)('Site Icon'),
              src: s,
            })
          : (0, n.createElement)(a.Icon, {
              className: 'edit-site-site-icon__icon',
              size: '48px',
              icon: d,
            });
        return (0, n.createElement)('div', { className: i()(t, 'edit-site-site-icon') }, o);
      };
    },
    87983: (t, e, s) => {
      s.d(e, { Z: () => i });
      var n = s(69307),
        o = s(70444);
      const i = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(o.Path, {
          d:
            'M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z',
        }),
      );
    },
    83619: (t, e, s) => {
      s.d(e, { Z: () => i });
      var n = s(69307),
        o = s(70444);
      const i = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(o.Path, { d: 'M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z' }),
      );
    },
    49704: (t, e, s) => {
      s.d(e, { Z: () => i });
      var n = s(69307),
        o = s(70444);
      const i = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(o.Path, {
          fillRule: 'evenodd',
          d:
            'M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z',
          clipRule: 'evenodd',
        }),
      );
    },
    25918: (t, e, s) => {
      s.d(e, { Z: () => i });
      var n = s(69307),
        o = s(70444);
      const i = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(o.Path, {
          fillRule: 'evenodd',
          d:
            'M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z',
          clipRule: 'evenodd',
        }),
      );
    },
    6520: (t, e, s) => {
      s.d(e, { Z: () => i });
      var n = s(69307),
        o = s(70444);
      const i = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(o.Path, {
          d:
            'M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z',
        }),
      );
    },
    33532: (t, e, s) => {
      s.d(e, { Z: () => i });
      var n = s(69307),
        o = s(70444);
      const i = (0, n.createElement)(
        o.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, n.createElement)(o.Path, {
          d:
            'M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z',
        }),
      );
    },
    4528: (t, e, s) => {
      s.d(e, { eO: () => d, v9: () => u });
      var n = s(99196),
        o = s(19720),
        i = s(9654),
        r = s(21396),
        a = s(44966);
      const c = (t, e) => {
        e(t);
        const s = t.getSnapshot().children;
        s &&
          Object.values(s).forEach(t => {
            c(t, e);
          });
      };
      function h(t, e) {
        return t === e;
      }
      function u(t, e, s = h) {
        const o = (0, n.useCallback)(
            e => {
              if (!t) return () => {};
              const { unsubscribe: s } = t.subscribe(e);
              return s;
            },
            [t],
          ),
          i = (0, n.useCallback)(() => t?.getSnapshot(), [t]);
        return (0, a.useSyncExternalStoreWithSelector)(o, i, i, e, s);
      }
      function d(t, e = {}) {
        return (function(t, e = {}) {
          const s = (function(t, e) {
              let [[s, o], a] = (0, n.useState)(() => {
                const s = (0, r.A)(t, e);
                return [t.config, s];
              });
              if (t.config !== s) {
                const s = (0, r.A)(t, {
                  ...e,
                  snapshot: o.getPersistedSnapshot({ __unsafeAllowInlineActors: !0 }),
                });
                a([t.config, s]), (o = s);
              }
              return (
                (0, i.Z)(() => {
                  o.logic.implementations = t.implementations;
                }),
                o
              );
            })(t, e),
            a = (0, n.useCallback)(() => s.getSnapshot(), [s]),
            h = (0, n.useCallback)(
              t => {
                const { unsubscribe: e } = s.subscribe(t);
                return e;
              },
              [s],
            ),
            u = (0, o.useSyncExternalStore)(h, a, a);
          return (
            (0, n.useEffect)(
              () => (
                s.start(),
                () => {
                  !(function(t) {
                    const e = [];
                    c(t, t => {
                      e.push([t, t.getSnapshot()]), (t.observers = new Set());
                    });
                    const s = t.system.getSnapshot?.();
                    t.stop(),
                      (t.system._snapshot = s),
                      e.forEach(([t, e]) => {
                        (t._processingStatus = 0), (t._snapshot = e);
                      });
                  })(s);
                }
              ),
              [s],
            ),
            [u, s.send, s]
          );
        })(t, e);
      }
    },
    9654: (t, e, s) => {
      s.d(e, { Z: () => n });
      const n = s(99196).useLayoutEffect;
    },
    26876: (t, e, s) => {
      var n = s(99196),
        o =
          'function' == typeof Object.is
            ? Object.is
            : function(t, e) {
                return (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e);
              },
        i = n.useState,
        r = n.useEffect,
        a = n.useLayoutEffect,
        c = n.useDebugValue;
      function h(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var s = e();
          return !o(t, s);
        } catch (t) {
          return !0;
        }
      }
      var u =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function(t, e) {
              return e();
            }
          : function(t, e) {
              var s = e(),
                n = i({ inst: { value: s, getSnapshot: e } }),
                o = n[0].inst,
                u = n[1];
              return (
                a(
                  function() {
                    (o.value = s), (o.getSnapshot = e), h(o) && u({ inst: o });
                  },
                  [t, s, e],
                ),
                r(
                  function() {
                    return (
                      h(o) && u({ inst: o }),
                      t(function() {
                        h(o) && u({ inst: o });
                      })
                    );
                  },
                  [t],
                ),
                c(s),
                s
              );
            };
      e.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : u;
    },
    56810: (t, e, s) => {
      var n = s(99196),
        o = s(19720),
        i =
          'function' == typeof Object.is
            ? Object.is
            : function(t, e) {
                return (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e);
              },
        r = o.useSyncExternalStore,
        a = n.useRef,
        c = n.useEffect,
        h = n.useMemo,
        u = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function(t, e, s, n, o) {
        var d = a(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        d = h(
          function() {
            function t(t) {
              if (!c) {
                if (((c = !0), (r = t), (t = n(t)), void 0 !== o && f.hasValue)) {
                  var e = f.value;
                  if (o(e, t)) return (a = e);
                }
                return (a = t);
              }
              if (((e = a), i(r, t))) return e;
              var s = n(t);
              return void 0 !== o && o(e, s) ? e : ((r = t), (a = s));
            }
            var r,
              a,
              c = !1,
              h = void 0 === s ? null : s;
            return [
              function() {
                return t(e());
              },
              null === h
                ? void 0
                : function() {
                    return t(h());
                  },
            ];
          },
          [e, s, n, o],
        );
        var l = r(t, d[0], d[1]);
        return (
          c(
            function() {
              (f.hasValue = !0), (f.value = l);
            },
            [l],
          ),
          u(l),
          l
        );
      };
    },
    19720: (t, e, s) => {
      t.exports = s(26876);
    },
    44966: (t, e, s) => {
      t.exports = s(56810);
    },
    3583: (t, e, s) => {
      s.d(e, { E9: () => i, p4: () => c });
      var n = s(21396);
      const o = new WeakMap();
      function i(t) {
        return {
          config: t,
          start: (e, s) => {
            const { self: n, system: i } = s,
              r = { receivers: void 0, dispose: void 0 };
            o.set(n, r),
              (r.dispose = t({
                input: e.input,
                system: i,
                self: n,
                sendBack: t => {
                  'stopped' !== n.getSnapshot().status && n._parent && i._relay(n, n._parent, t);
                },
                receive: t => {
                  (r.receivers ??= new Set()), r.receivers.add(t);
                },
              }));
          },
          transition: (t, e, s) => {
            const i = o.get(s.self);
            return e.type === n.X
              ? ((t = { ...t, status: 'stopped', error: void 0 }), i.dispose?.(), t)
              : (i.receivers?.forEach(t => t(e)), t);
          },
          getInitialSnapshot: (t, e) => ({
            status: 'active',
            output: void 0,
            error: void 0,
            input: e,
          }),
          getPersistedSnapshot: t => t,
          restoreSnapshot: t => t,
        };
      }
      const r = 'xstate.promise.resolve',
        a = 'xstate.promise.reject';
      function c(t) {
        return {
          config: t,
          transition: (t, e) => {
            if ('active' !== t.status) return t;
            switch (e.type) {
              case r: {
                const s = e.data;
                return { ...t, status: 'done', output: s, input: void 0 };
              }
              case a:
                return { ...t, status: 'error', error: e.data, input: void 0 };
              case n.X:
                return { ...t, status: 'stopped', input: void 0 };
              default:
                return t;
            }
          },
          start: (e, { self: s, system: n }) => {
            'active' === e.status &&
              Promise.resolve(t({ input: e.input, system: n, self: s })).then(
                t => {
                  'active' === s.getSnapshot().status && n._relay(s, s, { type: r, data: t });
                },
                t => {
                  'active' === s.getSnapshot().status && n._relay(s, s, { type: a, data: t });
                },
              );
          },
          getInitialSnapshot: (t, e) => ({
            status: 'active',
            output: void 0,
            error: void 0,
            input: e,
          }),
          getPersistedSnapshot: t => t,
          restoreSnapshot: t => t,
        };
      }
    },
    68703: (t, e, s) => {
      s.d(e, { a: () => r, c: () => d });
      var n = s(21396);
      function o(t, { machine: e, context: s }, o, i) {
        return (r, a) => {
          const c = ((r, a = {}) => {
            const { systemId: c, input: h } = a;
            if ('string' == typeof r) {
              const u = (0, n.z)(e, r);
              if (!u) throw new Error(`Actor logic '${r}' not implemented in machine '${e.id}'`);
              const d = (0, n.A)(u, {
                id: a.id,
                parent: t.self,
                syncSnapshot: a.syncSnapshot,
                input: 'function' == typeof h ? h({ context: s, event: o, self: t.self }) : h,
                src: r,
                systemId: c,
              });
              return (i[d.id] = d), d;
            }
            return (0, n.A)(r, {
              id: a.id,
              parent: t.self,
              syncSnapshot: a.syncSnapshot,
              input: a.input,
              src: r,
              systemId: c,
            });
          })(r, a);
          return (
            (i[c.id] = c),
            t.defer(() => {
              c._processingStatus !== n.T.Stopped && c.start();
            }),
            c
          );
        };
      }
      function i(t, e, s, i, { assignment: r }) {
        if (!e.context)
          throw new Error(
            'Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.',
          );
        const a = {},
          c = {
            context: e.context,
            event: s.event,
            spawn: o(t, e, s.event, a),
            self: t.self,
            system: t.system,
          };
        let h = {};
        if ('function' == typeof r) h = r(c, i);
        else
          for (const t of Object.keys(r)) {
            const e = r[t];
            h[t] = 'function' == typeof e ? e(c, i) : e;
          }
        const u = Object.assign({}, e.context, h);
        return [
          (0, n.U)(e, {
            context: u,
            children: Object.keys(a).length ? { ...e.children, ...a } : e.children,
          }),
        ];
      }
      function r(t) {
        function e(t, e) {}
        return (e.type = 'xstate.assign'), (e.assignment = t), (e.resolve = i), e;
      }
      let a = (function(t) {
        return (t.Parent = '#_parent'), (t.Internal = '#_internal'), t;
      })({});
      function c(t, e, s, n, { to: o, event: i, id: r, delay: c }, h) {
        const u = e.machine.implementations.delays;
        if ('string' == typeof i)
          throw new Error(
            `Only event objects may be used with sendTo; use sendTo({ type: "${i}" }) instead`,
          );
        const d = 'function' == typeof i ? i(s, n) : i;
        let f;
        if ('string' == typeof c) {
          const t = u && u[c];
          f = 'function' == typeof t ? t(s, n) : t;
        } else f = 'function' == typeof c ? c(s, n) : c;
        const l = 'function' == typeof o ? o(s, n) : o;
        let p;
        if ('string' == typeof l) {
          if (
            ((p =
              l === a.Parent
                ? t.self._parent
                : l === a.Internal
                ? t.self
                : l.startsWith('#_')
                ? e.children[l.slice(2)]
                : h.deferredActorIds?.includes(l)
                ? l
                : e.children[l]),
            !p)
          )
            throw new Error(`Unable to send event to actor '${l}' from machine '${e.machine.id}'.`);
        } else p = l || t.self;
        return [e, { to: p, event: d, id: r, delay: f }];
      }
      function h(t, e, s) {
        'string' == typeof s.to && (s.to = e.children[s.to]);
      }
      function u(t, e) {
        t.defer(() => {
          const { to: s, event: o, delay: i, id: r } = e;
          'number' != typeof i
            ? t.system._relay(t.self, s, o.type === n.V ? (0, n.W)(t.self.id, o.data) : o)
            : t.system.scheduler.schedule(t.self, s, o, i, r);
        });
      }
      function d(t, e, s) {
        function n(t, e) {}
        return (
          (n.type = 'xsnapshot.sendTo'),
          (n.to = t),
          (n.event = e),
          (n.id = s?.id),
          (n.delay = s?.delay),
          (n.resolve = c),
          (n.retryResolve = h),
          (n.execute = u),
          n
        );
      }
    },
    21396: (t, e, s) => {
      s.d(e, {
        $: () => T,
        A: () => V,
        N: () => a,
        P: () => D,
        S: () => i,
        T: () => N,
        U: () => Bt,
        V: () => u,
        W: () => l,
        X: () => d,
        a: () => $,
        b: () => nt,
        c: () => j,
        d: () => it,
        e: () => H,
        f: () => ot,
        g: () => st,
        h: () => et,
        i: () => X,
        j: () => ft,
        k: () => Ct,
        l: () => K,
        m: () => x,
        n: () => Mt,
        o: () => lt,
        p: () => $t,
        q: () => p,
        r: () => Tt,
        s: () => St,
        t: () => E,
        u: () => ht,
        v: () => w,
        w: () => tt,
        x: () => dt,
        y: () => Lt,
        z: () => O,
      });
      const n = t => {
        if ('undefined' == typeof window) return;
        const e = (function() {
          const t =
            'undefined' != typeof globalThis
              ? globalThis
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : void 0 !== s.g
              ? s.g
              : void 0;
          if (t.__xstate__) return t.__xstate__;
        })();
        e && e.register(t);
      };
      class o {
        constructor(t) {
          (this._process = t), (this._active = !1), (this._current = null), (this._last = null);
        }
        start() {
          (this._active = !0), this.flush();
        }
        clear() {
          this._current && ((this._current.next = null), (this._last = this._current));
        }
        enqueue(t) {
          const e = { value: t, next: null };
          if (this._current) return (this._last.next = e), void (this._last = e);
          (this._current = e), (this._last = e), this._active && this.flush();
        }
        flush() {
          for (; this._current; ) {
            const t = this._current;
            this._process(t.value), (this._current = t.next);
          }
          this._last = null;
        }
      }
      const i = '.',
        r = '',
        a = '',
        c = '*',
        h = 'xstate.init',
        u = 'xstate.error',
        d = 'xstate.stop';
      function f(t, e) {
        return { type: `xstate.done.state.${t}`, output: e };
      }
      function l(t, e) {
        return { type: `xstate.error.actor.${t}`, error: e };
      }
      function p(t) {
        return { type: h, input: t };
      }
      function y(t) {
        setTimeout(() => {
          throw t;
        });
      }
      const v = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function g(t, e) {
        return `${t.sessionId}.${e}`;
      }
      let m = 0;
      function _(t, e) {
        const s = S(t),
          n = S(e);
        return 'string' == typeof n
          ? 'string' == typeof s && n === s
          : 'string' == typeof s
          ? s in n
          : Object.keys(s).every(t => t in n && _(s[t], n[t]));
      }
      function w(t) {
        if (I(t)) return t;
        let e = [],
          s = '';
        for (let n = 0; n < t.length; n++) {
          switch (t.charCodeAt(n)) {
            case 92:
              (s += t[n + 1]), n++;
              continue;
            case 46:
              e.push(s), (s = '');
              continue;
          }
          s += t[n];
        }
        return e.push(s), e;
      }
      function S(t) {
        return (e = t) && 'object' == typeof e && 'machine' in e && 'value' in e
          ? t.value
          : 'string' != typeof t
          ? t
          : (function(t) {
              if (1 === t.length) return t[0];
              const e = {};
              let s = e;
              for (let e = 0; e < t.length - 1; e++)
                if (e === t.length - 2) s[t[e]] = t[e + 1];
                else {
                  const n = s;
                  (s = {}), (n[t[e]] = s);
                }
              return e;
            })(w(t));
        var e;
      }
      function x(t, e) {
        const s = {},
          n = Object.keys(t);
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          s[i] = e(t[i], i, t, o);
        }
        return s;
      }
      function b(t) {
        return I(t) ? t : [t];
      }
      function E(t) {
        return void 0 === t ? [] : b(t);
      }
      function k(t, e, s, n) {
        return 'function' == typeof t ? t({ context: e, event: s, self: n }) : t;
      }
      function I(t) {
        return Array.isArray(t);
      }
      function $(t) {
        return b(t).map(t => (void 0 === t || 'string' == typeof t ? { target: t } : t));
      }
      function M(t) {
        if (void 0 !== t && t !== r) return E(t);
      }
      function z(t, e, s) {
        const n = 'object' == typeof t,
          o = n ? t : void 0;
        return {
          next: (n ? t.next : t)?.bind(o),
          error: (n ? t.error : e)?.bind(o),
          complete: (n ? t.complete : s)?.bind(o),
        };
      }
      function j(t, e) {
        return `${e}.${t}`;
      }
      function O(t, e) {
        const s = e.match(/^xstate\.invoke\.(\d+)\.(.*)/);
        if (!s) return t.implementations.actors[e];
        const [, n, o] = s,
          i = t.getStateNodeById(o).config.invoke;
        return (Array.isArray(i) ? i[n] : i).src;
      }
      const T = 1;
      let N = (function(t) {
        return (
          (t[(t.NotStarted = 0)] = 'NotStarted'),
          (t[(t.Running = 1)] = 'Running'),
          (t[(t.Stopped = 2)] = 'Stopped'),
          t
        );
      })({});
      const A = {
        clock: { setTimeout: (t, e) => setTimeout(t, e), clearTimeout: t => clearTimeout(t) },
        logger: console.log.bind(console),
        devTools: !1,
      };
      class R {
        constructor(t, e) {
          (this.logic = t),
            (this._snapshot = void 0),
            (this.clock = void 0),
            (this.options = void 0),
            (this.id = void 0),
            (this.mailbox = new o(this._process.bind(this))),
            (this.observers = new Set()),
            (this.eventListeners = new Map()),
            (this.logger = void 0),
            (this._processingStatus = N.NotStarted),
            (this._parent = void 0),
            (this._syncSnapshot = void 0),
            (this.ref = void 0),
            (this._actorScope = void 0),
            (this._systemId = void 0),
            (this.sessionId = void 0),
            (this.system = void 0),
            (this._doneEvent = void 0),
            (this.src = void 0),
            (this._deferred = []);
          const s = { ...A, ...e },
            { clock: n, logger: i, parent: r, syncSnapshot: a, id: c, systemId: h, inspect: u } = s;
          (this.system = r
            ? r.system
            : (function(t, e) {
                const s = new Map(),
                  n = new Map(),
                  o = new WeakMap(),
                  i = new Set(),
                  r = {},
                  a = e.clock,
                  c = {
                    schedule: (
                      t,
                      e,
                      s,
                      n,
                      o = Math.random()
                        .toString(36)
                        .slice(2),
                    ) => {
                      const i = {
                          source: t,
                          target: e,
                          event: s,
                          delay: n,
                          id: o,
                          startedAt: Date.now(),
                        },
                        c = g(t, o);
                      h._snapshot._scheduledEvents[c] = i;
                      const u = a.setTimeout(() => {
                        delete r[c], delete h._snapshot._scheduledEvents[c], h._relay(t, e, s);
                      }, n);
                      r[c] = u;
                    },
                    cancel: (t, e) => {
                      const s = g(t, e),
                        n = r[s];
                      delete r[s], delete h._snapshot._scheduledEvents[s], a.clearTimeout(n);
                    },
                    cancelAll: t => {
                      for (const e in h._snapshot._scheduledEvents) {
                        const s = h._snapshot._scheduledEvents[e];
                        s.source === t && c.cancel(t, s.id);
                      }
                    },
                  },
                  h = {
                    _snapshot: { _scheduledEvents: (e?.snapshot && e.snapshot.scheduler) ?? {} },
                    _bookId: () => 'x:' + m++,
                    _register: (t, e) => (s.set(t, e), t),
                    _unregister: t => {
                      s.delete(t.sessionId);
                      const e = o.get(t);
                      void 0 !== e && (n.delete(e), o.delete(t));
                    },
                    get: t => n.get(t),
                    _set: (t, e) => {
                      const s = n.get(t);
                      if (s && s !== e)
                        throw new Error(`Actor with system ID '${t}' already exists.`);
                      n.set(t, e), o.set(e, t);
                    },
                    inspect: t => {
                      i.add(t);
                    },
                    _sendInspectionEvent: e => {
                      if (!i.size) return;
                      const s = { ...e, rootId: t.sessionId };
                      i.forEach(t => t.next?.(s));
                    },
                    _relay: (t, e, s) => {
                      h._sendInspectionEvent({
                        type: '@xstate.event',
                        sourceRef: t,
                        actorRef: e,
                        event: s,
                      }),
                        e._send(s);
                    },
                    scheduler: c,
                    getSnapshot: () => ({ _scheduledEvents: { ...h._snapshot._scheduledEvents } }),
                    start: () => {
                      const t = h._snapshot._scheduledEvents;
                      h._snapshot._scheduledEvents = {};
                      for (const e in t) {
                        const { source: s, target: n, event: o, delay: i, id: r } = t[e];
                        c.schedule(s, n, o, i, r);
                      }
                    },
                  };
                return h;
              })(this, { clock: n })),
            u && !r && this.system.inspect(z(u)),
            (this.sessionId = this.system._bookId()),
            (this.id = c ?? this.sessionId),
            (this.logger = i),
            (this.clock = n),
            (this._parent = r),
            (this._syncSnapshot = a),
            (this.options = s),
            (this.src = s.src ?? t),
            (this.ref = this),
            (this._actorScope = {
              self: this,
              id: this.id,
              sessionId: this.sessionId,
              logger: this.logger,
              defer: t => {
                this._deferred.push(t);
              },
              system: this.system,
              stopChild: t => {
                if (t._parent !== this)
                  throw new Error(
                    `Cannot stop child actor ${t.id} of ${this.id} because it is not a child`,
                  );
                t._stop();
              },
              emit: t => {
                const e = this.eventListeners.get(t.type);
                if (e) for (const s of Array.from(e)) s(t);
              },
            }),
            (this.send = this.send.bind(this)),
            this.system._sendInspectionEvent({ type: '@xstate.actor', actorRef: this }),
            h && ((this._systemId = h), this.system._set(h, this)),
            this._initState(e?.snapshot ?? e?.state),
            h && 'active' !== this._snapshot.status && this.system._unregister(this);
        }
        _initState(t) {
          try {
            this._snapshot = t
              ? this.logic.restoreSnapshot
                ? this.logic.restoreSnapshot(t, this._actorScope)
                : t
              : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
          } catch (t) {
            this._snapshot = { status: 'error', output: void 0, error: t };
          }
        }
        update(t, e) {
          let s;
          for (this._snapshot = t; (s = this._deferred.shift()); )
            try {
              s();
            } catch (e) {
              (this._deferred.length = 0), (this._snapshot = { ...t, status: 'error', error: e });
            }
          switch (this._snapshot.status) {
            case 'active':
              for (const e of this.observers)
                try {
                  e.next?.(t);
                } catch (t) {
                  y(t);
                }
              break;
            case 'done':
              for (const e of this.observers)
                try {
                  e.next?.(t);
                } catch (t) {
                  y(t);
                }
              this._stopProcedure(),
                this._complete(),
                (this._doneEvent = {
                  type: `xstate.done.actor.${this.id}`,
                  output: this._snapshot.output,
                }),
                this._parent && this.system._relay(this, this._parent, this._doneEvent);
              break;
            case 'error':
              this._error(this._snapshot.error);
          }
          this.system._sendInspectionEvent({
            type: '@xstate.snapshot',
            actorRef: this,
            event: e,
            snapshot: t,
          });
        }
        subscribe(t, e, s) {
          const n = z(t, e, s);
          if (this._processingStatus !== N.Stopped) this.observers.add(n);
          else
            switch (this._snapshot.status) {
              case 'done':
                try {
                  n.complete?.();
                } catch (t) {
                  y(t);
                }
                break;
              case 'error': {
                const t = this._snapshot.error;
                if (n.error)
                  try {
                    n.error(t);
                  } catch (t) {
                    y(t);
                  }
                else y(t);
                break;
              }
            }
          return {
            unsubscribe: () => {
              this.observers.delete(n);
            },
          };
        }
        on(t, e) {
          let s = this.eventListeners.get(t);
          s || ((s = new Set()), this.eventListeners.set(t, s));
          const n = e.bind(void 0);
          return (
            s.add(n),
            {
              unsubscribe: () => {
                s.delete(n);
              },
            }
          );
        }
        start() {
          if (this._processingStatus === N.Running) return this;
          this._syncSnapshot &&
            this.subscribe({
              next: t => {
                'active' === t.status &&
                  this.system._relay(this, this._parent, {
                    type: `xstate.snapshot.${this.id}`,
                    snapshot: t,
                  });
              },
              error: () => {},
            }),
            this.system._register(this.sessionId, this),
            this._systemId && this.system._set(this._systemId, this),
            (this._processingStatus = N.Running);
          const t = p(this.options.input);
          switch (
            (this.system._sendInspectionEvent({
              type: '@xstate.event',
              sourceRef: this._parent,
              actorRef: this,
              event: t,
            }),
            this._snapshot.status)
          ) {
            case 'done':
              return this.update(this._snapshot, t), this;
            case 'error':
              return this._error(this._snapshot.error), this;
          }
          if ((this._parent || this.system.start(), this.logic.start))
            try {
              this.logic.start(this._snapshot, this._actorScope);
            } catch (t) {
              return (
                (this._snapshot = { ...this._snapshot, status: 'error', error: t }),
                this._error(t),
                this
              );
            }
          return (
            this.update(this._snapshot, t),
            this.options.devTools && this.attachDevTools(),
            this.mailbox.start(),
            this
          );
        }
        _process(t) {
          let e, s;
          try {
            e = this.logic.transition(this._snapshot, t, this._actorScope);
          } catch (t) {
            s = { err: t };
          }
          if (s) {
            const { err: t } = s;
            return (
              (this._snapshot = { ...this._snapshot, status: 'error', error: t }),
              void this._error(t)
            );
          }
          this.update(e, t), t.type === d && (this._stopProcedure(), this._complete());
        }
        _stop() {
          return this._processingStatus === N.Stopped
            ? this
            : (this.mailbox.clear(),
              this._processingStatus === N.NotStarted
                ? ((this._processingStatus = N.Stopped), this)
                : (this.mailbox.enqueue({ type: d }), this));
        }
        stop() {
          if (this._parent) throw new Error('A non-root actor cannot be stopped directly.');
          return this._stop();
        }
        _complete() {
          for (const t of this.observers)
            try {
              t.complete?.();
            } catch (t) {
              y(t);
            }
          this.observers.clear();
        }
        _reportError(t) {
          if (!this.observers.size) return void (this._parent || y(t));
          let e = !1;
          for (const s of this.observers) {
            const n = s.error;
            e ||= !n;
            try {
              n?.(t);
            } catch (t) {
              y(t);
            }
          }
          this.observers.clear(), e && y(t);
        }
        _error(t) {
          this._stopProcedure(),
            this._reportError(t),
            this._parent && this.system._relay(this, this._parent, l(this.id, t));
        }
        _stopProcedure() {
          return (
            this._processingStatus !== N.Running ||
              (this.system.scheduler.cancelAll(this),
              this.mailbox.clear(),
              (this.mailbox = new o(this._process.bind(this))),
              (this._processingStatus = N.Stopped),
              this.system._unregister(this)),
            this
          );
        }
        _send(t) {
          this._processingStatus !== N.Stopped && this.mailbox.enqueue(t);
        }
        send(t) {
          this.system._relay(void 0, this, t);
        }
        attachDevTools() {
          const { devTools: t } = this.options;
          t && ('function' == typeof t ? t : n)(this);
        }
        toJSON() {
          return { xstate$$type: T, id: this.id };
        }
        getPersistedSnapshot(t) {
          return this.logic.getPersistedSnapshot(this._snapshot, t);
        }
        [v]() {
          return this;
        }
        getSnapshot() {
          return this._snapshot;
        }
      }
      function V(t, ...[e]) {
        return new R(t, e);
      }
      function P(t, e, s, n, { sendId: o }) {
        return [e, 'function' == typeof o ? o(s, n) : o];
      }
      function C(t, e) {
        t.defer(() => {
          t.system.scheduler.cancel(t.self, e);
        });
      }
      function B(t, e, s, n, { id: o, systemId: i, src: r, input: a, syncSnapshot: c }) {
        const h = 'string' == typeof r ? O(e.machine, r) : r,
          u = 'function' == typeof o ? o(s) : o;
        let d;
        return (
          h &&
            (d = V(h, {
              id: u,
              src: r,
              parent: t.self,
              syncSnapshot: c,
              systemId: i,
              input:
                'function' == typeof a
                  ? a({ context: e.context, event: s.event, self: t.self })
                  : a,
            })),
          [Bt(e, { children: { ...e.children, [u]: d } }), { id: o, actorRef: d }]
        );
      }
      function L(t, { id: e, actorRef: s }) {
        s &&
          t.defer(() => {
            s._processingStatus !== N.Stopped && s.start();
          });
      }
      function D(...[t, { id: e, systemId: s, input: n, syncSnapshot: o = !1 } = {}]) {
        function i(t, e) {}
        return (
          (i.type = 'snapshot.spawnChild'),
          (i.id = e),
          (i.systemId = s),
          (i.src = t),
          (i.input = n),
          (i.syncSnapshot = o),
          (i.resolve = B),
          (i.execute = L),
          i
        );
      }
      function J(t, e, s, n, { actorRef: o }) {
        const i = 'function' == typeof o ? o(s, n) : o,
          r = 'string' == typeof i ? e.children[i] : i;
        let a = e.children;
        return r && ((a = { ...a }), delete a[r.id]), [Bt(e, { children: a }), r];
      }
      function Z(t, e) {
        e &&
          (t.system._unregister(e),
          e._processingStatus === N.Running
            ? t.defer(() => {
                t.stopChild(e);
              })
            : t.stopChild(e));
      }
      function G(t) {
        function e(t, e) {}
        return (e.type = 'xstate.stopChild'), (e.actorRef = t), (e.resolve = J), (e.execute = Z), e;
      }
      function H(t, e, s, n) {
        const { machine: o } = n,
          i = 'function' == typeof t,
          r = i ? t : o.implementations.guards['string' == typeof t ? t : t.type];
        if (!i && !r)
          throw new Error(`Guard '${'string' == typeof t ? t : t.type}' is not implemented.'.`);
        if ('function' != typeof r) return H(r, e, s, n);
        const a = { context: e, event: s },
          c =
            i || 'string' == typeof t
              ? void 0
              : 'params' in t
              ? 'function' == typeof t.params
                ? t.params({ context: e, event: s })
                : t.params
              : void 0;
        return 'check' in r ? r.check(n, a, r) : r(a, c);
      }
      const W = t => 'atomic' === t.type || 'final' === t.type;
      function U(t) {
        return Object.values(t.states).filter(t => 'history' !== t.type);
      }
      function q(t, e) {
        const s = [];
        if (e === t) return s;
        let n = t.parent;
        for (; n && n !== e; ) s.push(n), (n = n.parent);
        return s;
      }
      function X(t) {
        const e = new Set(t),
          s = F(e);
        for (const t of e)
          if ('compound' !== t.type || (s.get(t) && s.get(t).length)) {
            if ('parallel' === t.type)
              for (const s of U(t))
                if ('history' !== s.type && !e.has(s)) {
                  const t = ct(s);
                  for (const s of t) e.add(s);
                }
          } else ct(t).forEach(t => e.add(t));
        for (const t of e) {
          let s = t.parent;
          for (; s; ) e.add(s), (s = s.parent);
        }
        return e;
      }
      function Q(t, e) {
        const s = e.get(t);
        if (!s) return {};
        if ('compound' === t.type) {
          const t = s[0];
          if (!t) return {};
          if (W(t)) return t.key;
        }
        const n = {};
        for (const t of s) n[t.key] = Q(t, e);
        return n;
      }
      function F(t) {
        const e = new Map();
        for (const s of t)
          e.has(s) || e.set(s, []),
            s.parent && (e.has(s.parent) || e.set(s.parent, []), e.get(s.parent).push(s));
        return e;
      }
      function Y(t, e) {
        return Q(t, F(X(e)));
      }
      function K(t, e) {
        return 'compound' === e.type
          ? U(e).some(e => 'final' === e.type && t.has(e))
          : 'parallel' === e.type
          ? U(e).every(e => K(t, e))
          : 'final' === e.type;
      }
      const tt = t => '#' === t[0];
      function et(t, e) {
        return (
          t.transitions.get(e) ||
          [...t.transitions.keys()]
            .filter(t => {
              if (t === c) return !0;
              if (!t.endsWith('.*')) return !1;
              const s = t.split('.'),
                n = e.split('.');
              for (let t = 0; t < s.length; t++) {
                const e = s[t],
                  o = n[t];
                if ('*' === e) return t === s.length - 1;
                if (e !== o) return !1;
              }
              return !0;
            })
            .sort((t, e) => e.length - t.length)
            .flatMap(e => t.transitions.get(e))
        );
      }
      function st(t) {
        const e = t.config.after;
        if (!e) return [];
        return Object.keys(e)
          .flatMap((s, n) => {
            const o = e[s],
              i = 'string' == typeof o ? { target: o } : o,
              r = Number.isNaN(+s) ? s : +s,
              a = ((e, s) => {
                const n = { type: `xstate.after.${e}.${t.id}` },
                  o = n.type;
                return (
                  t.entry.push(
                    (function(t, e) {
                      function s(t, e) {}
                      return (
                        (s.type = 'xstate.raise'),
                        (s.event = t),
                        (s.id = e?.id),
                        (s.delay = e?.delay),
                        (s.resolve = Jt),
                        (s.execute = Zt),
                        s
                      );
                    })(n, { id: o, delay: e }),
                  ),
                  t.exit.push(
                    (function(t) {
                      function e(t, e) {}
                      return (
                        (e.type = 'xstate.cancel'),
                        (e.sendId = t),
                        (e.resolve = P),
                        (e.execute = C),
                        e
                      );
                    })(o),
                  ),
                  o
                );
              })(r);
            return E(i).map(t => ({ ...t, event: a, delay: r }));
          })
          .map(e => {
            const { delay: s } = e;
            return { ...nt(t, e.event, e), delay: s };
          });
      }
      function nt(t, e, s) {
        const n = M(s.target),
          o = s.reenter ?? !1,
          r = (function(t, e) {
            if (void 0 !== e)
              return e.map(e => {
                if ('string' != typeof e) return e;
                if (tt(e)) return t.machine.getStateNodeById(e);
                const s = e[0] === i;
                if (s && !t.parent) return dt(t, e.slice(1));
                const n = s ? t.key + e : e;
                if (!t.parent)
                  throw new Error(
                    `Invalid target: "${e}" is not a valid target from the root node. Did you mean ".${e}"?`,
                  );
                try {
                  return dt(t.parent, n);
                } catch (e) {
                  throw new Error(
                    `Invalid transition definition for state node '${t.id}':\n${e.message}`,
                  );
                }
              });
          })(t, n),
          a = {
            ...s,
            actions: E(s.actions),
            guard: s.guard,
            target: r,
            source: t,
            reenter: o,
            eventType: e,
            toJSON: () => ({
              ...a,
              source: `#${t.id}`,
              target: r ? r.map(t => `#${t.id}`) : void 0,
            }),
          };
        return a;
      }
      function ot(t) {
        const e = new Map();
        if (t.config.on)
          for (const s of Object.keys(t.config.on)) {
            if (s === a)
              throw new Error(
                'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.',
              );
            const n = t.config.on[s];
            e.set(
              s,
              $(n).map(e => nt(t, s, e)),
            );
          }
        if (t.config.onDone) {
          const s = `xstate.done.state.${t.id}`;
          e.set(
            s,
            $(t.config.onDone).map(e => nt(t, s, e)),
          );
        }
        for (const s of t.invoke) {
          if (s.onDone) {
            const n = `xstate.done.actor.${s.id}`;
            e.set(
              n,
              $(s.onDone).map(e => nt(t, n, e)),
            );
          }
          if (s.onError) {
            const n = `xstate.error.actor.${s.id}`;
            e.set(
              n,
              $(s.onError).map(e => nt(t, n, e)),
            );
          }
          if (s.onSnapshot) {
            const n = `xstate.snapshot.${s.id}`;
            e.set(
              n,
              $(s.onSnapshot).map(e => nt(t, n, e)),
            );
          }
        }
        for (const s of t.after) {
          let t = e.get(s.eventType);
          t || ((t = []), e.set(s.eventType, t)), t.push(s);
        }
        return e;
      }
      function it(t, e) {
        const s = 'string' == typeof e ? t.states[e] : e ? t.states[e.target] : void 0;
        if (!s && e)
          throw new Error(`Initial state node "${e}" not found on parent state node #${t.id}`);
        const n = {
          source: t,
          actions: e && 'string' != typeof e ? E(e.actions) : [],
          eventType: null,
          reenter: !1,
          target: s ? [s] : [],
          toJSON: () => ({ ...n, source: `#${t.id}`, target: s ? [`#${s.id}`] : [] }),
        };
        return n;
      }
      function rt(t) {
        const e = M(t.config.target);
        return e
          ? { target: e.map(e => ('string' == typeof e ? dt(t.parent, e) : e)) }
          : t.parent.initial;
      }
      function at(t) {
        return 'history' === t.type;
      }
      function ct(t) {
        const e = ht(t);
        for (const s of e) for (const n of q(s, t)) e.add(n);
        return e;
      }
      function ht(t) {
        const e = new Set();
        return (
          (function t(s) {
            if (!e.has(s))
              if ((e.add(s), 'compound' === s.type)) t(s.initial.target[0]);
              else if ('parallel' === s.type) for (const e of U(s)) t(e);
          })(t),
          e
        );
      }
      function ut(t, e) {
        if (tt(e)) return t.machine.getStateNodeById(e);
        if (!t.states)
          throw new Error(
            `Unable to retrieve child state '${e}' from '${t.id}'; no child states exist.`,
          );
        const s = t.states[e];
        if (!s) throw new Error(`Child state '${e}' does not exist on '${t.id}'`);
        return s;
      }
      function dt(t, e) {
        if ('string' == typeof e && tt(e))
          try {
            return t.machine.getStateNodeById(e);
          } catch (t) {}
        const s = w(e).slice();
        let n = t;
        for (; s.length; ) {
          const t = s.shift();
          if (!t.length) break;
          n = ut(n, t);
        }
        return n;
      }
      function ft(t, e) {
        if ('string' == typeof e) {
          const s = t.states[e];
          if (!s) throw new Error(`State '${e}' does not exist on '${t.id}'`);
          return [t, s];
        }
        const s = Object.keys(e),
          n = s.map(e => ut(t, e)).filter(Boolean);
        return [t.machine.root, t].concat(
          n,
          s.reduce((s, n) => {
            const o = ut(t, n);
            if (!o) return s;
            const i = ft(o, e[n]);
            return s.concat(i);
          }, []),
        );
      }
      function lt(t, e, s, n) {
        return 'string' == typeof e
          ? (function(t, e, s, n) {
              const o = ut(t, e).next(s, n);
              return o && o.length ? o : t.next(s, n);
            })(t, e, s, n)
          : 1 === Object.keys(e).length
          ? (function(t, e, s, n) {
              const o = Object.keys(e),
                i = lt(ut(t, o[0]), e[o[0]], s, n);
              return i && i.length ? i : t.next(s, n);
            })(t, e, s, n)
          : (function(t, e, s, n) {
              const o = [];
              for (const i of Object.keys(e)) {
                const r = e[i];
                if (!r) continue;
                const a = lt(ut(t, i), r, s, n);
                a && o.push(...a);
              }
              return o.length ? o : t.next(s, n);
            })(t, e, s, n);
      }
      function pt(t) {
        return Object.keys(t.states)
          .map(e => t.states[e])
          .filter(t => 'history' === t.type);
      }
      function yt(t, e) {
        let s = t;
        for (; s.parent && s.parent !== e; ) s = s.parent;
        return s.parent === e;
      }
      function vt(t, e) {
        const s = new Set(t),
          n = new Set(e);
        for (const t of s) if (n.has(t)) return !0;
        for (const t of n) if (s.has(t)) return !0;
        return !1;
      }
      function gt(t, e, s) {
        const n = new Set();
        for (const o of t) {
          let t = !1;
          const i = new Set();
          for (const r of n)
            if (vt(wt([o], e, s), wt([r], e, s))) {
              if (!yt(o.source, r.source)) {
                t = !0;
                break;
              }
              i.add(r);
            }
          if (!t) {
            for (const t of i) n.delete(t);
            n.add(o);
          }
        }
        return Array.from(n);
      }
      function mt(t, e) {
        if (!t.target) return [];
        const s = new Set();
        for (const n of t.target)
          if (at(n))
            if (e[n.id]) for (const t of e[n.id]) s.add(t);
            else for (const t of mt(rt(n), e)) s.add(t);
          else s.add(n);
        return [...s];
      }
      function _t(t, e) {
        const s = mt(t, e);
        if (!s) return;
        if (!t.reenter && s.every(e => e === t.source || yt(e, t.source))) return t.source;
        return (
          (function(t) {
            const [e, ...s] = t;
            for (const t of q(e, void 0)) if (s.every(e => yt(e, t))) return t;
          })(s.concat(t.source)) || (t.reenter ? void 0 : t.source.machine.root)
        );
      }
      function wt(t, e, s) {
        const n = new Set();
        for (const o of t)
          if (o.target?.length) {
            const t = _t(o, s);
            o.reenter && o.source === t && n.add(t);
            for (const s of e) yt(s, t) && n.add(s);
          }
        return [...n];
      }
      function St(t, e, s, n, o, i) {
        if (!t.length) return e;
        const r = new Set(e._nodes);
        let a = e.historyValue;
        const c = gt(t, r, a);
        let h = e;
        o ||
          ([h, a] = (function(t, e, s, n, o, i, r) {
            let a = t;
            const c = wt(n, o, i);
            let h;
            c.sort((t, e) => e.order - t.order);
            for (const t of c)
              for (const e of pt(t)) {
                let s;
                (s = 'deep' === e.history ? e => W(e) && yt(e, t) : e => e.parent === t),
                  (h ??= { ...i }),
                  (h[e.id] = Array.from(o).filter(s));
              }
            for (const t of c)
              (a = $t(a, e, s, [...t.exit, ...t.invoke.map(t => G(t.id))], r)), o.delete(t);
            return [a, h || i];
          })(h, n, s, c, r, a, i)),
          (h = $t(
            h,
            n,
            s,
            c.flatMap(t => t.actions),
            i,
          )),
          (h = (function(t, e, s, n, o, i, r, a) {
            let c = t;
            const h = new Set(),
              u = new Set();
            (function(t, e, s, n) {
              for (const o of t) {
                const t = _t(o, e);
                for (const i of o.target || [])
                  at(i) || (o.source === i && o.source === t && !o.reenter) || (n.add(i), s.add(i)),
                    bt(i, e, s, n);
                const i = mt(o, e);
                for (const r of i) {
                  const i = q(r, t);
                  'parallel' === t?.type && i.push(t),
                    Et(n, e, s, i, !o.source.parent && o.reenter ? void 0 : t);
                }
              }
            })(n, r, u, h),
              a && u.add(t.machine.root);
            const d = new Set();
            for (const t of [...h].sort((t, e) => t.order - e.order)) {
              o.add(t);
              const n = [];
              n.push(...t.entry);
              for (const e of t.invoke) n.push(D(e.src, { ...e, syncSnapshot: !!e.onSnapshot }));
              if (u.has(t)) {
                const e = t.initial.actions;
                n.push(...e);
              }
              if (
                ((c = $t(
                  c,
                  e,
                  s,
                  n,
                  i,
                  t.invoke.map(t => t.id),
                )),
                'final' === t.type)
              ) {
                const n = t.parent;
                let r = 'parallel' === n?.type ? n : n?.parent,
                  a = r || t;
                for (
                  'compound' === n?.type &&
                  i.push(f(n.id, void 0 !== t.output ? k(t.output, c.context, e, s.self) : void 0));
                  'parallel' === r?.type && !d.has(r) && K(o, r);

                )
                  d.add(r), i.push(f(r.id)), (a = r), (r = r.parent);
                if (r) continue;
                c = Bt(c, { status: 'done', output: xt(c, e, s, c.machine.root, a) });
              }
            }
            return c;
          })(h, n, s, c, r, i, a, o));
        const u = [...r];
        'done' === h.status &&
          (h = $t(
            h,
            n,
            s,
            u.sort((t, e) => e.order - t.order).flatMap(t => t.exit),
            i,
          ));
        try {
          return a === e.historyValue &&
            (function(t, e) {
              if (t.length !== e.size) return !1;
              for (const s of t) if (!e.has(s)) return !1;
              return !0;
            })(e._nodes, r)
            ? h
            : Bt(h, { _nodes: u, historyValue: a });
        } catch (t) {
          throw t;
        }
      }
      function xt(t, e, s, n, o) {
        if (void 0 === n.output) return;
        const i = f(
          o.id,
          void 0 !== o.output && o.parent ? k(o.output, t.context, e, s.self) : void 0,
        );
        return k(n.output, t.context, i, s.self);
      }
      function bt(t, e, s, n) {
        if (at(t))
          if (e[t.id]) {
            const o = e[t.id];
            for (const t of o) n.add(t), bt(t, e, s, n);
            for (const i of o) kt(i, t.parent, n, e, s);
          } else {
            const o = rt(t);
            for (const i of o.target)
              n.add(i), o === t.parent?.initial && s.add(t.parent), bt(i, e, s, n);
            for (const i of o.target) kt(i, t.parent, n, e, s);
          }
        else if ('compound' === t.type) {
          const [o] = t.initial.target;
          at(o) || (n.add(o), s.add(o)), bt(o, e, s, n), kt(o, t, n, e, s);
        } else if ('parallel' === t.type)
          for (const o of U(t).filter(t => !at(t)))
            [...n].some(t => yt(t, o)) || (at(o) || (n.add(o), s.add(o)), bt(o, e, s, n));
      }
      function Et(t, e, s, n, o) {
        for (const i of n)
          if (((o && !yt(i, o)) || t.add(i), 'parallel' === i.type))
            for (const n of U(i).filter(t => !at(t)))
              [...t].some(t => yt(t, n)) || (t.add(n), bt(n, e, s, t));
      }
      function kt(t, e, s, n, o) {
        Et(s, n, o, q(t, e));
      }
      function It(t, e, s, n, o, i) {
        const { machine: r } = t;
        let a = t;
        for (const c of n) {
          const h = 'function' == typeof c,
            u = h ? c : r.implementations.actions['string' == typeof c ? c : c.type];
          if (!u) continue;
          const d = { context: a.context, event: e, self: s.self, system: s.system },
            f =
              h || 'string' == typeof c
                ? void 0
                : 'params' in c
                ? 'function' == typeof c.params
                  ? c.params({ context: a.context, event: e })
                  : c.params
                : void 0;
          function l() {
            s.system._sendInspectionEvent({
              type: '@xstate.action',
              actorRef: s.self,
              action: {
                type:
                  'string' == typeof c
                    ? c
                    : 'object' == typeof c
                    ? c.type
                    : c.name || '(anonymous)',
                params: f,
              },
            }),
              u(d, f);
          }
          if (!('resolve' in u)) {
            s.self._processingStatus === N.Running
              ? l()
              : s.defer(() => {
                  l();
                });
            continue;
          }
          const p = u,
            [y, v, g] = p.resolve(s, a, d, f, u, o);
          (a = y),
            'retryResolve' in p && i?.push([p, v]),
            'execute' in p &&
              (s.self._processingStatus === N.Running
                ? p.execute(s, v)
                : s.defer(p.execute.bind(null, s, v))),
            g && (a = It(a, e, s, g, o, i));
        }
        return a;
      }
      function $t(t, e, s, n, o, i) {
        const r = i ? [] : void 0,
          a = It(t, e, s, n, { internalQueue: o, deferredActorIds: i }, r);
        return (
          r?.forEach(([t, e]) => {
            t.retryResolve(s, a, e);
          }),
          a
        );
      }
      function Mt(t, e, s, n = []) {
        let o = t;
        const i = [];
        function r(t, e, n) {
          s.system._sendInspectionEvent({
            type: '@xstate.microstep',
            actorRef: s.self,
            event: e,
            snapshot: t,
            _transitions: n,
          }),
            i.push(t);
        }
        if (e.type === d)
          return (
            (o = Bt(zt(o, e, s), { status: 'stopped' })),
            r(o, e, []),
            { snapshot: o, microstates: i }
          );
        let a = e;
        if (a.type !== h) {
          const e = a,
            c = (function(t) {
              return t.type.startsWith('xstate.error.actor');
            })(e),
            h = jt(e, o);
          if (c && !h.length)
            return (
              (o = Bt(t, { status: 'error', error: e.error })),
              r(o, e, []),
              { snapshot: o, microstates: i }
            );
          (o = St(h, t, s, a, !1, n)), r(o, e, h);
        }
        let c = !0;
        for (; 'active' === o.status; ) {
          let t = c ? Ot(o, a) : [];
          const e = t.length ? o : void 0;
          if (!t.length) {
            if (!n.length) break;
            (a = n.shift()), (t = jt(a, o));
          }
          (o = St(t, o, s, a, !1, n)), (c = o !== e), r(o, a, t);
        }
        return 'active' !== o.status && zt(o, a, s), { snapshot: o, microstates: i };
      }
      function zt(t, e, s) {
        return $t(
          t,
          e,
          s,
          Object.values(t.children).map(t => G(t)),
          [],
        );
      }
      function jt(t, e) {
        return e.machine.getTransitionData(e, t);
      }
      function Ot(t, e) {
        const s = new Set(),
          n = t._nodes.filter(W);
        for (const o of n)
          t: for (const n of [o].concat(q(o, void 0)))
            if (n.always)
              for (const o of n.always)
                if (void 0 === o.guard || H(o.guard, t.context, e, t)) {
                  s.add(o);
                  break t;
                }
        return gt(Array.from(s), new Set(t._nodes), t.historyValue);
      }
      function Tt(t, e) {
        return Y(t, [...X(ft(t, e))]);
      }
      const Nt = function(t) {
          return _(t, this.value);
        },
        At = function(t) {
          return this.tags.has(t);
        },
        Rt = function(t) {
          const e = this.machine.getTransitionData(this, t);
          return !!e?.length && e.some(t => void 0 !== t.target || t.actions.length);
        },
        Vt = function() {
          const {
            _nodes: t,
            tags: e,
            machine: s,
            getMeta: n,
            toJSON: o,
            can: i,
            hasTag: r,
            matches: a,
            ...c
          } = this;
          return { ...c, tags: Array.from(e) };
        },
        Pt = function() {
          return this._nodes.reduce((t, e) => (void 0 !== e.meta && (t[e.id] = e.meta), t), {});
        };
      function Ct(t, e) {
        return {
          status: t.status,
          output: t.output,
          error: t.error,
          machine: e,
          context: t.context,
          _nodes: t._nodes,
          value: Y(e.root, t._nodes),
          tags: new Set(t._nodes.flatMap(t => t.tags)),
          children: t.children,
          historyValue: t.historyValue || {},
          matches: Nt,
          hasTag: At,
          can: Rt,
          getMeta: Pt,
          toJSON: Vt,
        };
      }
      function Bt(t, e = {}) {
        return Ct({ ...t, ...e }, t.machine);
      }
      function Lt(t, e) {
        const {
            _nodes: s,
            tags: n,
            machine: o,
            children: i,
            context: r,
            can: a,
            hasTag: c,
            matches: h,
            getMeta: u,
            toJSON: d,
            ...f
          } = t,
          l = {};
        for (const t in i) {
          const s = i[t];
          l[t] = {
            snapshot: s.getPersistedSnapshot(e),
            src: s.src,
            systemId: s._systemId,
            syncSnapshot: s._syncSnapshot,
          };
        }
        return { ...f, context: Dt(r), children: l };
      }
      function Dt(t) {
        let e;
        for (const s in t) {
          const n = t[s];
          if (n && 'object' == typeof n)
            if ('sessionId' in n && 'send' in n && 'ref' in n)
              (e ??= Array.isArray(t) ? t.slice() : { ...t }),
                (e[s] = { xstate$$type: T, id: n.id });
            else {
              const o = Dt(n);
              o !== n && ((e ??= Array.isArray(t) ? t.slice() : { ...t }), (e[s] = o));
            }
        }
        return e ?? t;
      }
      function Jt(t, e, s, n, { event: o, id: i, delay: r }, { internalQueue: a }) {
        const c = e.machine.implementations.delays;
        if ('string' == typeof o)
          throw new Error(
            `Only event objects may be used with raise; use raise({ type: "${o}" }) instead`,
          );
        const h = 'function' == typeof o ? o(s, n) : o;
        let u;
        if ('string' == typeof r) {
          const t = c && c[r];
          u = 'function' == typeof t ? t(s, n) : t;
        } else u = 'function' == typeof r ? r(s, n) : r;
        return 'number' != typeof u && a.push(h), [e, { event: h, id: i, delay: u }];
      }
      function Zt(t, e) {
        const { event: s, delay: n, id: o } = e;
        'number' != typeof n ||
          t.defer(() => {
            const e = t.self;
            t.system.scheduler.schedule(e, e, s, n, o);
          });
      }
    },
    57724: (t, e, s) => {
      s.d(e, { cY: () => d }), s(3583);
      var n = s(21396),
        o = s(68703);
      const i = new WeakMap();
      function r(t, e, s) {
        let n = i.get(t);
        return n ? e in n || (n[e] = s()) : ((n = { [e]: s() }), i.set(t, n)), n[e];
      }
      const a = {},
        c = t =>
          'string' == typeof t
            ? { type: t }
            : 'function' == typeof t
            ? 'resolve' in t
              ? { type: t.type }
              : { type: t.name }
            : t;
      class h {
        constructor(t, e) {
          if (
            ((this.config = t),
            (this.key = void 0),
            (this.id = void 0),
            (this.type = void 0),
            (this.path = void 0),
            (this.states = void 0),
            (this.history = void 0),
            (this.entry = void 0),
            (this.exit = void 0),
            (this.parent = void 0),
            (this.machine = void 0),
            (this.meta = void 0),
            (this.output = void 0),
            (this.order = -1),
            (this.description = void 0),
            (this.tags = []),
            (this.transitions = void 0),
            (this.always = void 0),
            (this.parent = e._parent),
            (this.key = e._key),
            (this.machine = e._machine),
            (this.path = this.parent ? this.parent.path.concat(this.key) : []),
            (this.id = this.config.id || [this.machine.id, ...this.path].join(n.S)),
            (this.type =
              this.config.type ||
              (this.config.states && Object.keys(this.config.states).length
                ? 'compound'
                : this.config.history
                ? 'history'
                : 'atomic')),
            (this.description = this.config.description),
            (this.order = this.machine.idMap.size),
            this.machine.idMap.set(this.id, this),
            (this.states = this.config.states
              ? (0, n.m)(
                  this.config.states,
                  (t, e) => new h(t, { _parent: this, _key: e, _machine: this.machine }),
                )
              : a),
            'compound' === this.type && !this.config.initial)
          )
            throw new Error(
              `No initial state specified for compound state node "#${
                this.id
              }". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`,
            );
          (this.history = !0 === this.config.history ? 'shallow' : this.config.history || !1),
            (this.entry = (0, n.t)(this.config.entry).slice()),
            (this.exit = (0, n.t)(this.config.exit).slice()),
            (this.meta = this.config.meta),
            (this.output = 'final' !== this.type && this.parent ? void 0 : this.config.output),
            (this.tags = (0, n.t)(t.tags).slice());
        }
        _initialize() {
          (this.transitions = (0, n.f)(this)),
            this.config.always &&
              (this.always = (0, n.a)(this.config.always).map(t => (0, n.b)(this, n.N, t))),
            Object.keys(this.states).forEach(t => {
              this.states[t]._initialize();
            });
        }
        get definition() {
          return {
            id: this.id,
            key: this.key,
            version: this.machine.version,
            type: this.type,
            initial: this.initial
              ? {
                  target: this.initial.target,
                  source: this,
                  actions: this.initial.actions.map(c),
                  eventType: null,
                  reenter: !1,
                  toJSON: () => ({
                    target: this.initial.target.map(t => `#${t.id}`),
                    source: `#${this.id}`,
                    actions: this.initial.actions.map(c),
                    eventType: null,
                  }),
                }
              : void 0,
            history: this.history,
            states: (0, n.m)(this.states, t => t.definition),
            on: this.on,
            transitions: [...this.transitions.values()]
              .flat()
              .map(t => ({ ...t, actions: t.actions.map(c) })),
            entry: this.entry.map(c),
            exit: this.exit.map(c),
            meta: this.meta,
            order: this.order || -1,
            output: this.output,
            invoke: this.invoke,
            description: this.description,
            tags: this.tags,
          };
        }
        toJSON() {
          return this.definition;
        }
        get invoke() {
          return r(this, 'invoke', () =>
            (0, n.t)(this.config.invoke).map((t, e) => {
              const { src: s, systemId: o } = t,
                i = t.id ?? (0, n.c)(this.id, e),
                r = 'string' == typeof s ? s : `xstate.invoke.${(0, n.c)(this.id, e)}`;
              return {
                ...t,
                src: r,
                id: i,
                systemId: o,
                toJSON() {
                  const { onDone: e, onError: s, ...n } = t;
                  return { ...n, type: 'xstate.invoke', src: r, id: i };
                },
              };
            }),
          );
        }
        get on() {
          return r(this, 'on', () =>
            [...this.transitions]
              .flatMap(([t, e]) => e.map(e => [t, e]))
              .reduce((t, [e, s]) => ((t[e] = t[e] || []), t[e].push(s), t), {}),
          );
        }
        get after() {
          return r(this, 'delayedTransitions', () => (0, n.g)(this));
        }
        get initial() {
          return r(this, 'initial', () => (0, n.d)(this, this.config.initial));
        }
        next(t, e) {
          const s = e.type,
            o = [];
          let i;
          const a = r(this, `candidates-${s}`, () => (0, n.h)(this, s));
          for (const r of a) {
            const { guard: a } = r,
              c = t.context;
            let h = !1;
            try {
              h = !a || (0, n.e)(a, c, e, t);
            } catch (t) {
              const e = 'string' == typeof a ? a : 'object' == typeof a ? a.type : void 0;
              throw new Error(
                `Unable to evaluate guard ${
                  e ? `'${e}' ` : ''
                }in transition for event '${s}' in state node '${this.id}':\n${t.message}`,
              );
            }
            if (h) {
              o.push(...r.actions), (i = r);
              break;
            }
          }
          return i ? [i] : void 0;
        }
        get events() {
          return r(this, 'events', () => {
            const { states: t } = this,
              e = new Set(this.ownEvents);
            if (t)
              for (const s of Object.keys(t)) {
                const n = t[s];
                if (n.states) for (const t of n.events) e.add(`${t}`);
              }
            return Array.from(e);
          });
        }
        get ownEvents() {
          const t = new Set(
            [...this.transitions.keys()].filter(t =>
              this.transitions.get(t).some(t => !(!t.target && !t.actions.length && !t.reenter)),
            ),
          );
          return Array.from(t);
        }
      }
      class u {
        constructor(t, e) {
          (this.config = t),
            (this.version = void 0),
            (this.schemas = void 0),
            (this.implementations = void 0),
            (this.__xstatenode = !0),
            (this.idMap = new Map()),
            (this.root = void 0),
            (this.id = void 0),
            (this.states = void 0),
            (this.events = void 0),
            (this.__TResolvedTypesMeta = void 0),
            (this.id = t.id || '(machine)'),
            (this.implementations = {
              actors: e?.actors ?? {},
              actions: e?.actions ?? {},
              delays: e?.delays ?? {},
              guards: e?.guards ?? {},
            }),
            (this.version = this.config.version),
            (this.schemas = this.config.schemas),
            (this.transition = this.transition.bind(this)),
            (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
            (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
            (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
            (this.start = this.start.bind(this)),
            (this.root = new h(t, { _key: this.id, _machine: this })),
            this.root._initialize(),
            (this.states = this.root.states),
            (this.events = this.root.events);
        }
        provide(t) {
          const { actions: e, guards: s, actors: n, delays: o } = this.implementations;
          return new u(this.config, {
            actions: { ...e, ...t.actions },
            guards: { ...s, ...t.guards },
            actors: { ...n, ...t.actors },
            delays: { ...o, ...t.delays },
          });
        }
        resolveState(t) {
          const e = (0, n.r)(this.root, t.value),
            s = (0, n.i)((0, n.j)(this.root, e));
          return (0, n.k)(
            {
              _nodes: [...s],
              context: t.context || {},
              children: {},
              status: (0, n.l)(s, this.root) ? 'done' : t.status || 'active',
              output: t.output,
              error: t.error,
              historyValue: t.historyValue,
            },
            this,
          );
        }
        transition(t, e, s) {
          return (0, n.n)(t, e, s).snapshot;
        }
        microstep(t, e, s) {
          return (0, n.n)(t, e, s).microstates;
        }
        getTransitionData(t, e) {
          return (0, n.o)(this.root, t.value, t, e) || [];
        }
        getPreInitialState(t, e, s) {
          const { context: i } = this.config,
            r = (0, n.k)(
              {
                context: 'function' != typeof i && i ? i : {},
                _nodes: [this.root],
                children: {},
                status: 'active',
              },
              this,
            );
          if ('function' == typeof i) {
            const a = ({ spawn: t, event: e, self: s }) => i({ spawn: t, input: e.input, self: s });
            return (0, n.p)(r, e, t, [(0, o.a)(a)], s);
          }
          return r;
        }
        getInitialSnapshot(t, e) {
          const s = (0, n.q)(e),
            o = [],
            i = this.getPreInitialState(t, s, o),
            r = (0, n.s)(
              [
                {
                  target: [...(0, n.u)(this.root)],
                  source: this.root,
                  reenter: !0,
                  actions: [],
                  eventType: null,
                  toJSON: null,
                },
              ],
              i,
              t,
              s,
              !0,
              o,
            ),
            { snapshot: a } = (0, n.n)(r, s, t, o);
          return a;
        }
        start(t) {
          Object.values(t.children).forEach(t => {
            'active' === t.getSnapshot().status && t.start();
          });
        }
        getStateNodeById(t) {
          const e = (0, n.v)(t),
            s = e.slice(1),
            o = (0, n.w)(e[0]) ? e[0].slice(1) : e[0],
            i = this.idMap.get(o);
          if (!i)
            throw new Error(`Child state node '#${o}' does not exist on machine '${this.id}'`);
          return (0, n.x)(i, s);
        }
        get definition() {
          return this.root.definition;
        }
        toJSON() {
          return this.definition;
        }
        getPersistedSnapshot(t, e) {
          return (0, n.y)(t, e);
        }
        restoreSnapshot(t, e) {
          const s = {},
            o = t.children;
          Object.keys(o).forEach(t => {
            const i = o[t],
              r = i.snapshot,
              a = i.src,
              c = 'string' == typeof a ? (0, n.z)(this, a) : a;
            if (!c) return;
            const h = (0, n.A)(c, {
              id: t,
              parent: e.self,
              syncSnapshot: i.syncSnapshot,
              snapshot: r,
              src: a,
              systemId: i.systemId,
            });
            s[t] = h;
          });
          const i = (0, n.k)(
            { ...t, children: s, _nodes: Array.from((0, n.i)((0, n.j)(this.root, t.value))) },
            this,
          );
          let r = new Set();
          return (
            (function t(e, s) {
              if (!r.has(e)) {
                r.add(e);
                for (let o in e) {
                  const i = e[o];
                  if (i && 'object' == typeof i) {
                    if ('xstate$$type' in i && i.xstate$$type === n.$) {
                      e[o] = s[i.id];
                      continue;
                    }
                    t(i, s);
                  }
                }
              }
            })(i.context, s),
            i
          );
        }
      }
      function d({ schemas: t, actors: e, actions: s, guards: n, delays: o }) {
        return {
          createMachine: i =>
            (function(t, e) {
              return new u(t, e);
            })({ ...i, schemas: t }, { actors: e, actions: s, guards: n, delays: o }),
        };
      }
    },
  },
]);
