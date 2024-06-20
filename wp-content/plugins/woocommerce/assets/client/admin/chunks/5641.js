/*! For license information please see 5641.js.LICENSE.txt */
'use strict';
(globalThis.webpackChunk_wcAdmin_webpackJsonp =
  globalThis.webpackChunk_wcAdmin_webpackJsonp || []).push([
  [5641],
  {
    8667: (e, t, a) => {
      a.d(t, { e: () => m });
      var n = a(99196),
        s = a(44966),
        r = a(25094),
        i = a(59412),
        o = a(9654);
      function d(e) {
        var t = n.useRef();
        return t.current || (t.current = { v: e() }), t.current.v;
      }
      var u = function() {
          return (
            (u =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var s in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        c = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
              t.indexOf(n[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
                (a[n[s]] = e[n[s]]);
          }
          return a;
        };
      var l = a(8808),
        h = function(e, t) {
          var a = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!a) return e;
          var n,
            s,
            r = a.call(e),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = r.next()).done; ) i.push(n.value);
          } catch (e) {
            s = { error: e };
          } finally {
            try {
              n && !n.done && (a = r.return) && a.call(r);
            } finally {
              if (s) throw s.error;
            }
          }
          return i;
        };
      function p(e) {
        return e;
      }
      function m(e) {
        for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
        var m = h(t, 1)[0],
          f = void 0 === m ? {} : m,
          y = (function(e, t) {
            var a = d(function() {
                return 'function' == typeof e ? e() : e;
              }),
              n = t.context,
              s = t.guards,
              i = t.actions,
              l = t.activities,
              h = t.services,
              p = t.delays,
              m =
                (t.state,
                c(t, [
                  'context',
                  'guards',
                  'actions',
                  'activities',
                  'services',
                  'delays',
                  'state',
                ])),
              f = d(function() {
                var e = {
                    context: n,
                    guards: s,
                    actions: i,
                    activities: l,
                    services: h,
                    delays: p,
                  },
                  t = a.withConfig(e, function() {
                    return u(u({}, a.context), n);
                  });
                return (0, r.kJ)(t, m);
              });
            return (
              (0, o.Z)(
                function() {
                  Object.assign(f.machine.options.actions, i),
                    Object.assign(f.machine.options.guards, s),
                    Object.assign(f.machine.options.activities, l),
                    Object.assign(f.machine.options.services, h),
                    Object.assign(f.machine.options.delays, p);
                },
                [i, s, l, h, p],
              ),
              f
            );
          })(e, f),
          v = (0, n.useCallback)(
            function() {
              return y.status === r.TM.NotStarted
                ? f.state
                  ? i.ZM.create(f.state)
                  : y.machine.initialState
                : y.getSnapshot();
            },
            [y],
          ),
          _ = (0, n.useCallback)(
            function(e, t) {
              return (0, l.AM)(y, e, t);
            },
            [y],
          ),
          g = (0, n.useCallback)(
            function(e) {
              return y.subscribe(e).unsubscribe;
            },
            [y],
          ),
          b = (0, s.useSyncExternalStoreWithSelector)(g, v, v, p, _);
        return (
          (0, n.useEffect)(function() {
            var e = f.state;
            return (
              y.start(e ? i.ZM.create(e) : void 0),
              function() {
                y.stop(), (y.status = r.TM.NotStarted);
              }
            );
          }, []),
          [b, y.send, y]
        );
      }
    },
    66002: (e, t, a) => {
      a.d(t, { v: () => d });
      var n = a(99196),
        s = a(44966);
      a(9654);
      var r = a(8808),
        i = function(e, t) {
          return e === t;
        },
        o = function(e, t) {
          if ((0, r.cs)(e)) {
            if (0 === e.status && t.current) return t.current;
            var a = (0, r.Uz)(e);
            return (t.current = 0 === e.status ? a : null), a;
          }
          return 'state' in e ? e.state : void 0;
        };
      function d(e, t, a, r) {
        void 0 === a && (a = i);
        var d = (0, n.useRef)(null),
          u = (0, n.useCallback)(
            function(t) {
              return e.subscribe(t).unsubscribe;
            },
            [e],
          ),
          c = (0, n.useCallback)(
            function() {
              return r ? r(e) : o(e, d);
            },
            [e, r],
          );
        return (0, s.useSyncExternalStoreWithSelector)(u, c, c, t, a);
      }
    },
    8808: (e, t, a) => {
      a.d(t, { AM: () => i, Uz: () => s, cs: () => r });
      var n = a(25094);
      function s(e) {
        return 0 !== e.status ? e.getSnapshot() : e.machine.initialState;
      }
      function r(e) {
        return 'state' in e && 'machine' in e;
      }
      function i(e, t, a) {
        if (e.status === n.TM.NotStarted) return !0;
        var s =
          void 0 === a.changed &&
          (Object.keys(a.children).length > 0 || 'boolean' == typeof t.changed);
        return !(a.changed || s);
      }
    },
    9654: (e, t, a) => {
      a.d(t, { Z: () => n });
      const n = a(99196).useLayoutEffect;
    },
    26876: (e, t, a) => {
      var n = a(99196),
        s =
          'function' == typeof Object.is
            ? Object.is
            : function(e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        r = n.useState,
        i = n.useEffect,
        o = n.useLayoutEffect,
        d = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var a = t();
          return !s(e, a);
        } catch (e) {
          return !0;
        }
      }
      var c =
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function(e, t) {
              return t();
            }
          : function(e, t) {
              var a = t(),
                n = r({ inst: { value: a, getSnapshot: t } }),
                s = n[0].inst,
                c = n[1];
              return (
                o(
                  function() {
                    (s.value = a), (s.getSnapshot = t), u(s) && c({ inst: s });
                  },
                  [e, a, t],
                ),
                i(
                  function() {
                    return (
                      u(s) && c({ inst: s }),
                      e(function() {
                        u(s) && c({ inst: s });
                      })
                    );
                  },
                  [e],
                ),
                d(a),
                a
              );
            };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    56810: (e, t, a) => {
      var n = a(99196),
        s = a(19720),
        r =
          'function' == typeof Object.is
            ? Object.is
            : function(e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        i = s.useSyncExternalStore,
        o = n.useRef,
        d = n.useEffect,
        u = n.useMemo,
        c = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function(e, t, a, n, s) {
        var l = o(null);
        if (null === l.current) {
          var h = { hasValue: !1, value: null };
          l.current = h;
        } else h = l.current;
        l = u(
          function() {
            function e(e) {
              if (!d) {
                if (((d = !0), (i = e), (e = n(e)), void 0 !== s && h.hasValue)) {
                  var t = h.value;
                  if (s(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), r(i, e))) return t;
              var a = n(e);
              return void 0 !== s && s(t, a) ? t : ((i = e), (o = a));
            }
            var i,
              o,
              d = !1,
              u = void 0 === a ? null : a;
            return [
              function() {
                return e(t());
              },
              null === u
                ? void 0
                : function() {
                    return e(u());
                  },
            ];
          },
          [t, a, n, s],
        );
        var p = i(e, l[0], l[1]);
        return (
          d(
            function() {
              (h.hasValue = !0), (h.value = p);
            },
            [p],
          ),
          c(p),
          p
        );
      };
    },
    19720: (e, t, a) => {
      e.exports = a(26876);
    },
    44966: (e, t, a) => {
      e.exports = a(56810);
    },
    1850: (e, t, a) => {
      var n, s;
      a.d(t, { z: () => dt }),
        (function(e) {
          (e.assertEqual = e => e),
            (e.assertIs = function(e) {}),
            (e.assertNever = function(e) {
              throw new Error();
            }),
            (e.arrayToEnum = e => {
              const t = {};
              for (const a of e) t[a] = a;
              return t;
            }),
            (e.getValidEnumValues = t => {
              const a = e.objectKeys(t).filter(e => 'number' != typeof t[t[e]]),
                n = {};
              for (const e of a) n[e] = t[e];
              return e.objectValues(n);
            }),
            (e.objectValues = t =>
              e.objectKeys(t).map(function(e) {
                return t[e];
              })),
            (e.objectKeys =
              'function' == typeof Object.keys
                ? e => Object.keys(e)
                : e => {
                    const t = [];
                    for (const a in e) Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (const a of e) if (t(a)) return a;
            }),
            (e.isInteger =
              'function' == typeof Number.isInteger
                ? e => Number.isInteger(e)
                : e => 'number' == typeof e && isFinite(e) && Math.floor(e) === e),
            (e.joinValues = function(e, t = ' | ') {
              return e.map(e => ('string' == typeof e ? `'${e}'` : e)).join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) => ('bigint' == typeof t ? t.toString() : t));
        })(n || (n = {})),
        (function(e) {
          e.mergeShapes = (e, t) => ({ ...e, ...t });
        })(s || (s = {}));
      const r = n.arrayToEnum([
          'string',
          'nan',
          'number',
          'integer',
          'float',
          'boolean',
          'date',
          'bigint',
          'symbol',
          'function',
          'undefined',
          'null',
          'array',
          'object',
          'unknown',
          'promise',
          'void',
          'never',
          'map',
          'set',
        ]),
        i = e => {
          switch (typeof e) {
            case 'undefined':
              return r.undefined;
            case 'string':
              return r.string;
            case 'number':
              return isNaN(e) ? r.nan : r.number;
            case 'boolean':
              return r.boolean;
            case 'function':
              return r.function;
            case 'bigint':
              return r.bigint;
            case 'symbol':
              return r.symbol;
            case 'object':
              return Array.isArray(e)
                ? r.array
                : null === e
                ? r.null
                : e.then && 'function' == typeof e.then && e.catch && 'function' == typeof e.catch
                ? r.promise
                : 'undefined' != typeof Map && e instanceof Map
                ? r.map
                : 'undefined' != typeof Set && e instanceof Set
                ? r.set
                : 'undefined' != typeof Date && e instanceof Date
                ? r.date
                : r.object;
            default:
              return r.unknown;
          }
        },
        o = n.arrayToEnum([
          'invalid_type',
          'invalid_literal',
          'custom',
          'invalid_union',
          'invalid_union_discriminator',
          'invalid_enum_value',
          'unrecognized_keys',
          'invalid_arguments',
          'invalid_return_type',
          'invalid_date',
          'invalid_string',
          'too_small',
          'too_big',
          'invalid_intersection_types',
          'not_multiple_of',
          'not_finite',
        ]);
      class d extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = e => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          const t = new.target.prototype;
          Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          const t =
              e ||
              function(e) {
                return e.message;
              },
            a = { _errors: [] },
            n = e => {
              for (const s of e.issues)
                if ('invalid_union' === s.code) s.unionErrors.map(n);
                else if ('invalid_return_type' === s.code) n(s.returnTypeError);
                else if ('invalid_arguments' === s.code) n(s.argumentsError);
                else if (0 === s.path.length) a._errors.push(t(s));
                else {
                  let e = a,
                    n = 0;
                  for (; n < s.path.length; ) {
                    const a = s.path[n];
                    n === s.path.length - 1
                      ? ((e[a] = e[a] || { _errors: [] }), e[a]._errors.push(t(s)))
                      : (e[a] = e[a] || { _errors: [] }),
                      (e = e[a]),
                      n++;
                  }
                }
            };
          return n(this), a;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, n.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = e => e.message) {
          const t = {},
            a = [];
          for (const n of this.issues)
            n.path.length > 0
              ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
              : a.push(e(n));
          return { formErrors: a, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      d.create = e => new d(e);
      const u = (e, t) => {
        let a;
        switch (e.code) {
          case o.invalid_type:
            a =
              e.received === r.undefined
                ? 'Required'
                : `Expected ${e.expected}, received ${e.received}`;
            break;
          case o.invalid_literal:
            a = `Invalid literal value, expected ${JSON.stringify(
              e.expected,
              n.jsonStringifyReplacer,
            )}`;
            break;
          case o.unrecognized_keys:
            a = `Unrecognized key(s) in object: ${n.joinValues(e.keys, ', ')}`;
            break;
          case o.invalid_union:
            a = 'Invalid input';
            break;
          case o.invalid_union_discriminator:
            a = `Invalid discriminator value. Expected ${n.joinValues(e.options)}`;
            break;
          case o.invalid_enum_value:
            a = `Invalid enum value. Expected ${n.joinValues(e.options)}, received '${e.received}'`;
            break;
          case o.invalid_arguments:
            a = 'Invalid function arguments';
            break;
          case o.invalid_return_type:
            a = 'Invalid function return type';
            break;
          case o.invalid_date:
            a = 'Invalid date';
            break;
          case o.invalid_string:
            'object' == typeof e.validation
              ? 'includes' in e.validation
                ? ((a = `Invalid input: must include "${e.validation.includes}"`),
                  'number' == typeof e.validation.position &&
                    (a = `${a} at one or more positions greater than or equal to ${e.validation.position}`))
                : 'startsWith' in e.validation
                ? (a = `Invalid input: must start with "${e.validation.startsWith}"`)
                : 'endsWith' in e.validation
                ? (a = `Invalid input: must end with "${e.validation.endsWith}"`)
                : n.assertNever(e.validation)
              : (a = 'regex' !== e.validation ? `Invalid ${e.validation}` : 'Invalid');
            break;
          case o.too_small:
            a =
              'array' === e.type
                ? `Array must contain ${
                    e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'
                  } ${e.minimum} element(s)`
                : 'string' === e.type
                ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${
                    e.minimum
                  } character(s)`
                : 'number' === e.type
                ? `Number must be ${
                    e.exact
                      ? 'exactly equal to '
                      : e.inclusive
                      ? 'greater than or equal to '
                      : 'greater than '
                  }${e.minimum}`
                : 'date' === e.type
                ? `Date must be ${
                    e.exact
                      ? 'exactly equal to '
                      : e.inclusive
                      ? 'greater than or equal to '
                      : 'greater than '
                  }${new Date(Number(e.minimum))}`
                : 'Invalid input';
            break;
          case o.too_big:
            a =
              'array' === e.type
                ? `Array must contain ${
                    e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'
                  } ${e.maximum} element(s)`
                : 'string' === e.type
                ? `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${
                    e.maximum
                  } character(s)`
                : 'number' === e.type
                ? `Number must be ${
                    e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'
                  } ${e.maximum}`
                : 'bigint' === e.type
                ? `BigInt must be ${
                    e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'
                  } ${e.maximum}`
                : 'date' === e.type
                ? `Date must be ${
                    e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'
                  } ${new Date(Number(e.maximum))}`
                : 'Invalid input';
            break;
          case o.custom:
            a = 'Invalid input';
            break;
          case o.invalid_intersection_types:
            a = 'Intersection results could not be merged';
            break;
          case o.not_multiple_of:
            a = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case o.not_finite:
            a = 'Number must be finite';
            break;
          default:
            (a = t.defaultError), n.assertNever(e);
        }
        return { message: a };
      };
      let c = u;
      function l() {
        return c;
      }
      const h = e => {
        const { data: t, path: a, errorMaps: n, issueData: s } = e,
          r = [...a, ...(s.path || [])],
          i = { ...s, path: r };
        let o = '';
        const d = n
          .filter(e => !!e)
          .slice()
          .reverse();
        for (const e of d) o = e(i, { data: t, defaultError: o }).message;
        return { ...s, path: r, message: s.message || o };
      };
      function p(e, t) {
        const a = h({
          issueData: t,
          data: e.data,
          path: e.path,
          errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, l(), u].filter(e => !!e),
        });
        e.common.issues.push(a);
      }
      class m {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          'valid' === this.value && (this.value = 'dirty');
        }
        abort() {
          'aborted' !== this.value && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          const a = [];
          for (const n of t) {
            if ('aborted' === n.status) return f;
            'dirty' === n.status && e.dirty(), a.push(n.value);
          }
          return { status: e.value, value: a };
        }
        static async mergeObjectAsync(e, t) {
          const a = [];
          for (const e of t) a.push({ key: await e.key, value: await e.value });
          return m.mergeObjectSync(e, a);
        }
        static mergeObjectSync(e, t) {
          const a = {};
          for (const n of t) {
            const { key: t, value: s } = n;
            if ('aborted' === t.status) return f;
            if ('aborted' === s.status) return f;
            'dirty' === t.status && e.dirty(),
              'dirty' === s.status && e.dirty(),
              '__proto__' === t.value ||
                (void 0 === s.value && !n.alwaysSet) ||
                (a[t.value] = s.value);
          }
          return { status: e.value, value: a };
        }
      }
      const f = Object.freeze({ status: 'aborted' }),
        y = e => ({ status: 'dirty', value: e }),
        v = e => ({ status: 'valid', value: e }),
        _ = e => 'aborted' === e.status,
        g = e => 'dirty' === e.status,
        b = e => 'valid' === e.status,
        x = e => 'undefined' != typeof Promise && e instanceof Promise;
      var k;
      !(function(e) {
        (e.errToObj = e => ('string' == typeof e ? { message: e } : e || {})),
          (e.toString = e => ('string' == typeof e ? e : null == e ? void 0 : e.message));
      })(k || (k = {}));
      class w {
        constructor(e, t, a, n) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = a),
            (this._key = n);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      const Z = (e, t) => {
        if (b(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            const t = new d(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function T(e) {
        if (!e) return {};
        const { errorMap: t, invalid_type_error: a, required_error: n, description: s } = e;
        if (t && (a || n))
          throw new Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.',
          );
        return t
          ? { errorMap: t, description: s }
          : {
              errorMap: (e, t) =>
                'invalid_type' !== e.code
                  ? { message: t.defaultError }
                  : void 0 === t.data
                  ? { message: null != n ? n : t.defaultError }
                  : { message: null != a ? a : t.defaultError },
              description: s,
            };
      }
      class O {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return i(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: i(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new m(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: i(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          const t = this._parse(e);
          if (x(t)) throw new Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          const t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          const a = this.safeParse(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        safeParse(e, t) {
          var a;
          const n = {
              common: {
                issues: [],
                async: null !== (a = null == t ? void 0 : t.async) && void 0 !== a && a,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i(e),
            },
            s = this._parseSync({ data: e, path: n.path, parent: n });
          return Z(n, s);
        }
        async parseAsync(e, t) {
          const a = await this.safeParseAsync(e, t);
          if (a.success) return a.data;
          throw a.error;
        }
        async safeParseAsync(e, t) {
          const a = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i(e),
            },
            n = this._parse({ data: e, path: a.path, parent: a }),
            s = await (x(n) ? n : Promise.resolve(n));
          return Z(a, s);
        }
        refine(e, t) {
          const a = e =>
            'string' == typeof t || void 0 === t
              ? { message: t }
              : 'function' == typeof t
              ? t(e)
              : t;
          return this._refinement((t, n) => {
            const s = e(t),
              r = () => n.addIssue({ code: o.custom, ...a(t) });
            return 'undefined' != typeof Promise && s instanceof Promise
              ? s.then(e => !!e || (r(), !1))
              : !!s || (r(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (a, n) => !!e(a) || (n.addIssue('function' == typeof t ? t(a, n) : t), !1),
          );
        }
        _refinement(e) {
          return new pe({
            schema: this,
            typeName: Te.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return me.create(this, this._def);
        }
        nullable() {
          return fe.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return J.create(this, this._def);
        }
        promise() {
          return he.create(this, this._def);
        }
        or(e) {
          return H.create([this, e], this._def);
        }
        and(e) {
          return te.create(this, e, this._def);
        }
        transform(e) {
          return new pe({
            ...T(this._def),
            schema: this,
            typeName: Te.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          const t = 'function' == typeof e ? e : () => e;
          return new ye({
            ...T(this._def),
            innerType: this,
            defaultValue: t,
            typeName: Te.ZodDefault,
          });
        }
        brand() {
          return new be({ typeName: Te.ZodBranded, type: this, ...T(this._def) });
        }
        catch(e) {
          const t = 'function' == typeof e ? e : () => e;
          return new ve({ ...T(this._def), innerType: this, catchValue: t, typeName: Te.ZodCatch });
        }
        describe(e) {
          return new (0, this.constructor)({ ...this._def, description: e });
        }
        pipe(e) {
          return xe.create(this, e);
        }
        readonly() {
          return ke.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      const S = /^c[^\s-]{8,}$/i,
        N = /^[a-z][a-z0-9]*$/,
        C = /^[0-9A-HJKMNP-TV-Z]{26}$/,
        E = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        j = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
      let I;
      const P = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
        R = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
      class A extends O {
        _parse(e) {
          if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== r.string)) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.string, received: t.parsedType }), f;
          }
          const t = new m();
          let a;
          for (const r of this._def.checks)
            if ('min' === r.kind)
              e.data.length < r.value &&
                ((a = this._getOrReturnCtx(e, a)),
                p(a, {
                  code: o.too_small,
                  minimum: r.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: r.message,
                }),
                t.dirty());
            else if ('max' === r.kind)
              e.data.length > r.value &&
                ((a = this._getOrReturnCtx(e, a)),
                p(a, {
                  code: o.too_big,
                  maximum: r.value,
                  type: 'string',
                  inclusive: !0,
                  exact: !1,
                  message: r.message,
                }),
                t.dirty());
            else if ('length' === r.kind) {
              const n = e.data.length > r.value,
                s = e.data.length < r.value;
              (n || s) &&
                ((a = this._getOrReturnCtx(e, a)),
                n
                  ? p(a, {
                      code: o.too_big,
                      maximum: r.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: r.message,
                    })
                  : s &&
                    p(a, {
                      code: o.too_small,
                      minimum: r.value,
                      type: 'string',
                      inclusive: !0,
                      exact: !0,
                      message: r.message,
                    }),
                t.dirty());
            } else if ('email' === r.kind)
              j.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                p(a, { validation: 'email', code: o.invalid_string, message: r.message }),
                t.dirty());
            else if ('emoji' === r.kind)
              I || (I = new RegExp('^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$', 'u')),
                I.test(e.data) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  p(a, { validation: 'emoji', code: o.invalid_string, message: r.message }),
                  t.dirty());
            else if ('uuid' === r.kind)
              E.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                p(a, { validation: 'uuid', code: o.invalid_string, message: r.message }),
                t.dirty());
            else if ('cuid' === r.kind)
              S.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                p(a, { validation: 'cuid', code: o.invalid_string, message: r.message }),
                t.dirty());
            else if ('cuid2' === r.kind)
              N.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                p(a, { validation: 'cuid2', code: o.invalid_string, message: r.message }),
                t.dirty());
            else if ('ulid' === r.kind)
              C.test(e.data) ||
                ((a = this._getOrReturnCtx(e, a)),
                p(a, { validation: 'ulid', code: o.invalid_string, message: r.message }),
                t.dirty());
            else if ('url' === r.kind)
              try {
                new URL(e.data);
              } catch (n) {
                (a = this._getOrReturnCtx(e, a)),
                  p(a, { validation: 'url', code: o.invalid_string, message: r.message }),
                  t.dirty();
              }
            else
              'regex' === r.kind
                ? ((r.regex.lastIndex = 0),
                  r.regex.test(e.data) ||
                    ((a = this._getOrReturnCtx(e, a)),
                    p(a, { validation: 'regex', code: o.invalid_string, message: r.message }),
                    t.dirty()))
                : 'trim' === r.kind
                ? (e.data = e.data.trim())
                : 'includes' === r.kind
                ? e.data.includes(r.value, r.position) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  p(a, {
                    code: o.invalid_string,
                    validation: { includes: r.value, position: r.position },
                    message: r.message,
                  }),
                  t.dirty())
                : 'toLowerCase' === r.kind
                ? (e.data = e.data.toLowerCase())
                : 'toUpperCase' === r.kind
                ? (e.data = e.data.toUpperCase())
                : 'startsWith' === r.kind
                ? e.data.startsWith(r.value) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  p(a, {
                    code: o.invalid_string,
                    validation: { startsWith: r.value },
                    message: r.message,
                  }),
                  t.dirty())
                : 'endsWith' === r.kind
                ? e.data.endsWith(r.value) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  p(a, {
                    code: o.invalid_string,
                    validation: { endsWith: r.value },
                    message: r.message,
                  }),
                  t.dirty())
                : 'datetime' === r.kind
                ? ((d = r).precision
                    ? d.offset
                      ? new RegExp(
                          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${d.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
                        )
                      : new RegExp(
                          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${d.precision}}Z$`,
                        )
                    : 0 === d.precision
                    ? d.offset
                      ? new RegExp(
                          '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$',
                        )
                      : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
                    : d.offset
                    ? new RegExp(
                        '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$',
                      )
                    : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$')
                  ).test(e.data) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  p(a, { code: o.invalid_string, validation: 'datetime', message: r.message }),
                  t.dirty())
                : 'ip' === r.kind
                ? ((s = e.data),
                  (('v4' !== (i = r.version) && i) || !P.test(s)) &&
                    (('v6' !== i && i) || !R.test(s)) &&
                    ((a = this._getOrReturnCtx(e, a)),
                    p(a, { validation: 'ip', code: o.invalid_string, message: r.message }),
                    t.dirty()))
                : n.assertNever(r);
          var s, i, d;
          return { status: t.value, value: e.data };
        }
        _regex(e, t, a) {
          return this.refinement(t => e.test(t), {
            validation: t,
            code: o.invalid_string,
            ...k.errToObj(a),
          });
        }
        _addCheck(e) {
          return new A({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: 'email', ...k.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: 'url', ...k.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: 'emoji', ...k.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: 'uuid', ...k.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: 'cuid', ...k.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: 'cuid2', ...k.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: 'ulid', ...k.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: 'ip', ...k.errToObj(e) });
        }
        datetime(e) {
          var t;
          return 'string' == typeof e
            ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, message: e })
            : this._addCheck({
                kind: 'datetime',
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                ...k.errToObj(null == e ? void 0 : e.message),
              });
        }
        regex(e, t) {
          return this._addCheck({ kind: 'regex', regex: e, ...k.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: 'includes',
            value: e,
            position: null == t ? void 0 : t.position,
            ...k.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({ kind: 'startsWith', value: e, ...k.errToObj(t) });
        }
        endsWith(e, t) {
          return this._addCheck({ kind: 'endsWith', value: e, ...k.errToObj(t) });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e, ...k.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e, ...k.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({ kind: 'length', value: e, ...k.errToObj(t) });
        }
        nonempty(e) {
          return this.min(1, k.errToObj(e));
        }
        trim() {
          return new A({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
        }
        toLowerCase() {
          return new A({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
        }
        toUpperCase() {
          return new A({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
        }
        get isDatetime() {
          return !!this._def.checks.find(e => 'datetime' === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find(e => 'email' === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find(e => 'url' === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find(e => 'emoji' === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find(e => 'uuid' === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find(e => 'cuid' === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find(e => 'cuid2' === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find(e => 'ulid' === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find(e => 'ip' === e.kind);
        }
        get minLength() {
          let e = null;
          for (const t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (const t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      function M(e, t) {
        const a = (e.toString().split('.')[1] || '').length,
          n = (t.toString().split('.')[1] || '').length,
          s = a > n ? a : n;
        return (
          (parseInt(e.toFixed(s).replace('.', '')) % parseInt(t.toFixed(s).replace('.', ''))) /
          Math.pow(10, s)
        );
      }
      A.create = e => {
        var t;
        return new A({
          checks: [],
          typeName: Te.ZodString,
          coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...T(e),
        });
      };
      class $ extends O {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== r.number)) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.number, received: t.parsedType }), f;
          }
          let t;
          const a = new m();
          for (const s of this._def.checks)
            'int' === s.kind
              ? n.isInteger(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: o.invalid_type,
                  expected: 'integer',
                  received: 'float',
                  message: s.message,
                }),
                a.dirty())
              : 'min' === s.kind
              ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: o.too_small,
                  minimum: s.value,
                  type: 'number',
                  inclusive: s.inclusive,
                  exact: !1,
                  message: s.message,
                }),
                a.dirty())
              : 'max' === s.kind
              ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: o.too_big,
                  maximum: s.value,
                  type: 'number',
                  inclusive: s.inclusive,
                  exact: !1,
                  message: s.message,
                }),
                a.dirty())
              : 'multipleOf' === s.kind
              ? 0 !== M(e.data, s.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, { code: o.not_multiple_of, multipleOf: s.value, message: s.message }),
                a.dirty())
              : 'finite' === s.kind
              ? Number.isFinite(e.data) ||
                ((t = this._getOrReturnCtx(e, t)),
                p(t, { code: o.not_finite, message: s.message }),
                a.dirty())
              : n.assertNever(s);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, k.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, k.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, k.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, k.toString(t));
        }
        setLimit(e, t, a, n) {
          return new $({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: k.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new $({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: 'int', message: k.toString(e) });
        }
        positive(e) {
          return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: k.toString(e) });
        }
        negative(e) {
          return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: k.toString(e) });
        }
        nonpositive(e) {
          return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: k.toString(e) });
        }
        nonnegative(e) {
          return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: k.toString(e) });
        }
        multipleOf(e, t) {
          return this._addCheck({ kind: 'multipleOf', value: e, message: k.toString(t) });
        }
        finite(e) {
          return this._addCheck({ kind: 'finite', message: k.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: 'min',
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: k.toString(e),
          })._addCheck({
            kind: 'max',
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: k.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (const t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (const t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            e => 'int' === e.kind || ('multipleOf' === e.kind && n.isInteger(e.value)),
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (const a of this._def.checks) {
            if ('finite' === a.kind || 'int' === a.kind || 'multipleOf' === a.kind) return !0;
            'min' === a.kind
              ? (null === t || a.value > t) && (t = a.value)
              : 'max' === a.kind && (null === e || a.value < e) && (e = a.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      $.create = e =>
        new $({
          checks: [],
          typeName: Te.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...T(e),
        });
      class L extends O {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== r.bigint)) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.bigint, received: t.parsedType }), f;
          }
          let t;
          const a = new m();
          for (const s of this._def.checks)
            'min' === s.kind
              ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: o.too_small,
                  type: 'bigint',
                  minimum: s.value,
                  inclusive: s.inclusive,
                  message: s.message,
                }),
                a.dirty())
              : 'max' === s.kind
              ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, {
                  code: o.too_big,
                  type: 'bigint',
                  maximum: s.value,
                  inclusive: s.inclusive,
                  message: s.message,
                }),
                a.dirty())
              : 'multipleOf' === s.kind
              ? e.data % s.value !== BigInt(0) &&
                ((t = this._getOrReturnCtx(e, t)),
                p(t, { code: o.not_multiple_of, multipleOf: s.value, message: s.message }),
                a.dirty())
              : n.assertNever(s);
          return { status: a.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit('min', e, !0, k.toString(t));
        }
        gt(e, t) {
          return this.setLimit('min', e, !1, k.toString(t));
        }
        lte(e, t) {
          return this.setLimit('max', e, !0, k.toString(t));
        }
        lt(e, t) {
          return this.setLimit('max', e, !1, k.toString(t));
        }
        setLimit(e, t, a, n) {
          return new L({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: a, message: k.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new L({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !1,
            message: k.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !1,
            message: k.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: 'max',
            value: BigInt(0),
            inclusive: !0,
            message: k.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: 'min',
            value: BigInt(0),
            inclusive: !0,
            message: k.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({ kind: 'multipleOf', value: e, message: k.toString(t) });
        }
        get minValue() {
          let e = null;
          for (const t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (const t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      L.create = e => {
        var t;
        return new L({
          checks: [],
          typeName: Te.ZodBigInt,
          coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...T(e),
        });
      };
      class D extends O {
        _parse(e) {
          if ((this._def.coerce && (e.data = Boolean(e.data)), this._getType(e) !== r.boolean)) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.boolean, received: t.parsedType }), f;
          }
          return v(e.data);
        }
      }
      D.create = e =>
        new D({ typeName: Te.ZodBoolean, coerce: (null == e ? void 0 : e.coerce) || !1, ...T(e) });
      class V extends O {
        _parse(e) {
          if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== r.date)) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.date, received: t.parsedType }), f;
          }
          if (isNaN(e.data.getTime()))
            return p(this._getOrReturnCtx(e), { code: o.invalid_date }), f;
          const t = new m();
          let a;
          for (const s of this._def.checks)
            'min' === s.kind
              ? e.data.getTime() < s.value &&
                ((a = this._getOrReturnCtx(e, a)),
                p(a, {
                  code: o.too_small,
                  message: s.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: s.value,
                  type: 'date',
                }),
                t.dirty())
              : 'max' === s.kind
              ? e.data.getTime() > s.value &&
                ((a = this._getOrReturnCtx(e, a)),
                p(a, {
                  code: o.too_big,
                  message: s.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: s.value,
                  type: 'date',
                }),
                t.dirty())
              : n.assertNever(s);
          return { status: t.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new V({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({ kind: 'min', value: e.getTime(), message: k.toString(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: 'max', value: e.getTime(), message: k.toString(t) });
        }
        get minDate() {
          let e = null;
          for (const t of this._def.checks)
            'min' === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (const t of this._def.checks)
            'max' === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      V.create = e =>
        new V({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: Te.ZodDate,
          ...T(e),
        });
      class z extends O {
        _parse(e) {
          if (this._getType(e) !== r.symbol) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.symbol, received: t.parsedType }), f;
          }
          return v(e.data);
        }
      }
      z.create = e => new z({ typeName: Te.ZodSymbol, ...T(e) });
      class U extends O {
        _parse(e) {
          if (this._getType(e) !== r.undefined) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.undefined, received: t.parsedType }), f;
          }
          return v(e.data);
        }
      }
      U.create = e => new U({ typeName: Te.ZodUndefined, ...T(e) });
      class K extends O {
        _parse(e) {
          if (this._getType(e) !== r.null) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.null, received: t.parsedType }), f;
          }
          return v(e.data);
        }
      }
      K.create = e => new K({ typeName: Te.ZodNull, ...T(e) });
      class B extends O {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return v(e.data);
        }
      }
      B.create = e => new B({ typeName: Te.ZodAny, ...T(e) });
      class F extends O {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return v(e.data);
        }
      }
      F.create = e => new F({ typeName: Te.ZodUnknown, ...T(e) });
      class W extends O {
        _parse(e) {
          const t = this._getOrReturnCtx(e);
          return p(t, { code: o.invalid_type, expected: r.never, received: t.parsedType }), f;
        }
      }
      W.create = e => new W({ typeName: Te.ZodNever, ...T(e) });
      class q extends O {
        _parse(e) {
          if (this._getType(e) !== r.undefined) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.void, received: t.parsedType }), f;
          }
          return v(e.data);
        }
      }
      q.create = e => new q({ typeName: Te.ZodVoid, ...T(e) });
      class J extends O {
        _parse(e) {
          const { ctx: t, status: a } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== r.array)
            return p(t, { code: o.invalid_type, expected: r.array, received: t.parsedType }), f;
          if (null !== n.exactLength) {
            const e = t.data.length > n.exactLength.value,
              s = t.data.length < n.exactLength.value;
            (e || s) &&
              (p(t, {
                code: e ? o.too_big : o.too_small,
                minimum: s ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: 'array',
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              a.dirty());
          }
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (p(t, {
                code: o.too_small,
                minimum: n.minLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              a.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (p(t, {
                code: o.too_big,
                maximum: n.maxLength.value,
                type: 'array',
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              a.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, a) => n.type._parseAsync(new w(t, e, t.path, a))),
            ).then(e => m.mergeArray(a, e));
          const s = [...t.data].map((e, a) => n.type._parseSync(new w(t, e, t.path, a)));
          return m.mergeArray(a, s);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new J({ ...this._def, minLength: { value: e, message: k.toString(t) } });
        }
        max(e, t) {
          return new J({ ...this._def, maxLength: { value: e, message: k.toString(t) } });
        }
        length(e, t) {
          return new J({ ...this._def, exactLength: { value: e, message: k.toString(t) } });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      function Y(e) {
        if (e instanceof G) {
          const t = {};
          for (const a in e.shape) {
            const n = e.shape[a];
            t[a] = me.create(Y(n));
          }
          return new G({ ...e._def, shape: () => t });
        }
        return e instanceof J
          ? new J({ ...e._def, type: Y(e.element) })
          : e instanceof me
          ? me.create(Y(e.unwrap()))
          : e instanceof fe
          ? fe.create(Y(e.unwrap()))
          : e instanceof ae
          ? ae.create(e.items.map(e => Y(e)))
          : e;
      }
      J.create = (e, t) =>
        new J({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: Te.ZodArray,
          ...T(t),
        });
      class G extends O {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          const e = this._def.shape(),
            t = n.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== r.object) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.object, received: t.parsedType }), f;
          }
          const { status: t, ctx: a } = this._processInputParams(e),
            { shape: n, keys: s } = this._getCached(),
            i = [];
          if (!(this._def.catchall instanceof W && 'strip' === this._def.unknownKeys))
            for (const e in a.data) s.includes(e) || i.push(e);
          const d = [];
          for (const e of s) {
            const t = n[e],
              s = a.data[e];
            d.push({
              key: { status: 'valid', value: e },
              value: t._parse(new w(a, s, a.path, e)),
              alwaysSet: e in a.data,
            });
          }
          if (this._def.catchall instanceof W) {
            const e = this._def.unknownKeys;
            if ('passthrough' === e)
              for (const e of i)
                d.push({
                  key: { status: 'valid', value: e },
                  value: { status: 'valid', value: a.data[e] },
                });
            else if ('strict' === e)
              i.length > 0 && (p(a, { code: o.unrecognized_keys, keys: i }), t.dirty());
            else if ('strip' !== e)
              throw new Error('Internal ZodObject error: invalid unknownKeys value.');
          } else {
            const e = this._def.catchall;
            for (const t of i) {
              const n = a.data[t];
              d.push({
                key: { status: 'valid', value: t },
                value: e._parse(new w(a, n, a.path, t)),
                alwaysSet: t in a.data,
              });
            }
          }
          return a.common.async
            ? Promise.resolve()
                .then(async () => {
                  const e = [];
                  for (const t of d) {
                    const a = await t.key;
                    e.push({ key: a, value: await t.value, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then(e => m.mergeObjectSync(t, e))
            : m.mergeObjectSync(t, d);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            k.errToObj,
            new G({
              ...this._def,
              unknownKeys: 'strict',
              ...(void 0 !== e
                ? {
                    errorMap: (t, a) => {
                      var n, s, r, i;
                      const o =
                        null !==
                          (r =
                            null === (s = (n = this._def).errorMap) || void 0 === s
                              ? void 0
                              : s.call(n, t, a).message) && void 0 !== r
                          ? r
                          : a.defaultError;
                      return 'unrecognized_keys' === t.code
                        ? { message: null !== (i = k.errToObj(e).message) && void 0 !== i ? i : o }
                        : { message: o };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new G({ ...this._def, unknownKeys: 'strip' });
        }
        passthrough() {
          return new G({ ...this._def, unknownKeys: 'passthrough' });
        }
        extend(e) {
          return new G({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
        }
        merge(e) {
          return new G({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: Te.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new G({ ...this._def, catchall: e });
        }
        pick(e) {
          const t = {};
          return (
            n.objectKeys(e).forEach(a => {
              e[a] && this.shape[a] && (t[a] = this.shape[a]);
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          const t = {};
          return (
            n.objectKeys(this.shape).forEach(a => {
              e[a] || (t[a] = this.shape[a]);
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return Y(this);
        }
        partial(e) {
          const t = {};
          return (
            n.objectKeys(this.shape).forEach(a => {
              const n = this.shape[a];
              e && !e[a] ? (t[a] = n) : (t[a] = n.optional());
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          const t = {};
          return (
            n.objectKeys(this.shape).forEach(a => {
              if (e && !e[a]) t[a] = this.shape[a];
              else {
                let e = this.shape[a];
                for (; e instanceof me; ) e = e._def.innerType;
                t[a] = e;
              }
            }),
            new G({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return ue(n.objectKeys(this.shape));
        }
      }
      (G.create = (e, t) =>
        new G({
          shape: () => e,
          unknownKeys: 'strip',
          catchall: W.create(),
          typeName: Te.ZodObject,
          ...T(t),
        })),
        (G.strictCreate = (e, t) =>
          new G({
            shape: () => e,
            unknownKeys: 'strict',
            catchall: W.create(),
            typeName: Te.ZodObject,
            ...T(t),
          })),
        (G.lazycreate = (e, t) =>
          new G({
            shape: e,
            unknownKeys: 'strip',
            catchall: W.create(),
            typeName: Te.ZodObject,
            ...T(t),
          }));
      class H extends O {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            a = this._def.options;
          if (t.common.async)
            return Promise.all(
              a.map(async e => {
                const a = { ...t, common: { ...t.common, issues: [] }, parent: null };
                return {
                  result: await e._parseAsync({ data: t.data, path: t.path, parent: a }),
                  ctx: a,
                };
              }),
            ).then(function(e) {
              for (const t of e) if ('valid' === t.result.status) return t.result;
              for (const a of e)
                if ('dirty' === a.result.status)
                  return t.common.issues.push(...a.ctx.common.issues), a.result;
              const a = e.map(e => new d(e.ctx.common.issues));
              return p(t, { code: o.invalid_union, unionErrors: a }), f;
            });
          {
            let e;
            const n = [];
            for (const s of a) {
              const a = { ...t, common: { ...t.common, issues: [] }, parent: null },
                r = s._parseSync({ data: t.data, path: t.path, parent: a });
              if ('valid' === r.status) return r;
              'dirty' !== r.status || e || (e = { result: r, ctx: a }),
                a.common.issues.length && n.push(a.common.issues);
            }
            if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
            const s = n.map(e => new d(e));
            return p(t, { code: o.invalid_union, unionErrors: s }), f;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      H.create = (e, t) => new H({ options: e, typeName: Te.ZodUnion, ...T(t) });
      const X = e =>
        e instanceof oe
          ? X(e.schema)
          : e instanceof pe
          ? X(e.innerType())
          : e instanceof de
          ? [e.value]
          : e instanceof ce
          ? e.options
          : e instanceof le
          ? Object.keys(e.enum)
          : e instanceof ye
          ? X(e._def.innerType)
          : e instanceof U
          ? [void 0]
          : e instanceof K
          ? [null]
          : null;
      class Q extends O {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.object)
            return p(t, { code: o.invalid_type, expected: r.object, received: t.parsedType }), f;
          const a = this.discriminator,
            n = t.data[a],
            s = this.optionsMap.get(n);
          return s
            ? t.common.async
              ? s._parseAsync({ data: t.data, path: t.path, parent: t })
              : s._parseSync({ data: t.data, path: t.path, parent: t })
            : (p(t, {
                code: o.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [a],
              }),
              f);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, a) {
          const n = new Map();
          for (const a of t) {
            const t = X(a.shape[e]);
            if (!t)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (const s of t) {
              if (n.has(s))
                throw new Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(s)}`,
                );
              n.set(s, a);
            }
          }
          return new Q({
            typeName: Te.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ...T(a),
          });
        }
      }
      function ee(e, t) {
        const a = i(e),
          s = i(t);
        if (e === t) return { valid: !0, data: e };
        if (a === r.object && s === r.object) {
          const a = n.objectKeys(t),
            s = n.objectKeys(e).filter(e => -1 !== a.indexOf(e)),
            r = { ...e, ...t };
          for (const a of s) {
            const n = ee(e[a], t[a]);
            if (!n.valid) return { valid: !1 };
            r[a] = n.data;
          }
          return { valid: !0, data: r };
        }
        if (a === r.array && s === r.array) {
          if (e.length !== t.length) return { valid: !1 };
          const a = [];
          for (let n = 0; n < e.length; n++) {
            const s = ee(e[n], t[n]);
            if (!s.valid) return { valid: !1 };
            a.push(s.data);
          }
          return { valid: !0, data: a };
        }
        return a === r.date && s === r.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
      }
      class te extends O {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e),
            n = (e, n) => {
              if (_(e) || _(n)) return f;
              const s = ee(e.value, n.value);
              return s.valid
                ? ((g(e) || g(n)) && t.dirty(), { status: t.value, value: s.data })
                : (p(a, { code: o.invalid_intersection_types }), f);
            };
          return a.common.async
            ? Promise.all([
                this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }),
                this._def.right._parseAsync({ data: a.data, path: a.path, parent: a }),
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({ data: a.data, path: a.path, parent: a }),
                this._def.right._parseSync({ data: a.data, path: a.path, parent: a }),
              );
        }
      }
      te.create = (e, t, a) => new te({ left: e, right: t, typeName: Te.ZodIntersection, ...T(a) });
      class ae extends O {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== r.array)
            return p(a, { code: o.invalid_type, expected: r.array, received: a.parsedType }), f;
          if (a.data.length < this._def.items.length)
            return (
              p(a, {
                code: o.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: 'array',
              }),
              f
            );
          !this._def.rest &&
            a.data.length > this._def.items.length &&
            (p(a, {
              code: o.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            t.dirty());
          const n = [...a.data]
            .map((e, t) => {
              const n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new w(a, e, a.path, t)) : null;
            })
            .filter(e => !!e);
          return a.common.async ? Promise.all(n).then(e => m.mergeArray(t, e)) : m.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new ae({ ...this._def, rest: e });
        }
      }
      ae.create = (e, t) => {
        if (!Array.isArray(e))
          throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
        return new ae({ items: e, typeName: Te.ZodTuple, rest: null, ...T(t) });
      };
      class ne extends O {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== r.object)
            return p(a, { code: o.invalid_type, expected: r.object, received: a.parsedType }), f;
          const n = [],
            s = this._def.keyType,
            i = this._def.valueType;
          for (const e in a.data)
            n.push({
              key: s._parse(new w(a, e, a.path, e)),
              value: i._parse(new w(a, a.data[e], a.path, e)),
            });
          return a.common.async ? m.mergeObjectAsync(t, n) : m.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, a) {
          return new ne(
            t instanceof O
              ? { keyType: e, valueType: t, typeName: Te.ZodRecord, ...T(a) }
              : { keyType: A.create(), valueType: e, typeName: Te.ZodRecord, ...T(t) },
          );
        }
      }
      class se extends O {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== r.map)
            return p(a, { code: o.invalid_type, expected: r.map, received: a.parsedType }), f;
          const n = this._def.keyType,
            s = this._def.valueType,
            i = [...a.data.entries()].map(([e, t], r) => ({
              key: n._parse(new w(a, e, a.path, [r, 'key'])),
              value: s._parse(new w(a, t, a.path, [r, 'value'])),
            }));
          if (a.common.async) {
            const e = new Map();
            return Promise.resolve().then(async () => {
              for (const a of i) {
                const n = await a.key,
                  s = await a.value;
                if ('aborted' === n.status || 'aborted' === s.status) return f;
                ('dirty' !== n.status && 'dirty' !== s.status) || t.dirty(),
                  e.set(n.value, s.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            const e = new Map();
            for (const a of i) {
              const n = a.key,
                s = a.value;
              if ('aborted' === n.status || 'aborted' === s.status) return f;
              ('dirty' !== n.status && 'dirty' !== s.status) || t.dirty(), e.set(n.value, s.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      se.create = (e, t, a) => new se({ valueType: t, keyType: e, typeName: Te.ZodMap, ...T(a) });
      class re extends O {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.parsedType !== r.set)
            return p(a, { code: o.invalid_type, expected: r.set, received: a.parsedType }), f;
          const n = this._def;
          null !== n.minSize &&
            a.data.size < n.minSize.value &&
            (p(a, {
              code: o.too_small,
              minimum: n.minSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              a.data.size > n.maxSize.value &&
              (p(a, {
                code: o.too_big,
                maximum: n.maxSize.value,
                type: 'set',
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              t.dirty());
          const s = this._def.valueType;
          function i(e) {
            const a = new Set();
            for (const n of e) {
              if ('aborted' === n.status) return f;
              'dirty' === n.status && t.dirty(), a.add(n.value);
            }
            return { status: t.value, value: a };
          }
          const d = [...a.data.values()].map((e, t) => s._parse(new w(a, e, a.path, t)));
          return a.common.async ? Promise.all(d).then(e => i(e)) : i(d);
        }
        min(e, t) {
          return new re({ ...this._def, minSize: { value: e, message: k.toString(t) } });
        }
        max(e, t) {
          return new re({ ...this._def, maxSize: { value: e, message: k.toString(t) } });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      re.create = (e, t) =>
        new re({ valueType: e, minSize: null, maxSize: null, typeName: Te.ZodSet, ...T(t) });
      class ie extends O {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.function)
            return p(t, { code: o.invalid_type, expected: r.function, received: t.parsedType }), f;
          function a(e, a) {
            return h({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, l(), u].filter(e => !!e),
              issueData: { code: o.invalid_arguments, argumentsError: a },
            });
          }
          function n(e, a) {
            return h({
              data: e,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, l(), u].filter(e => !!e),
              issueData: { code: o.invalid_return_type, returnTypeError: a },
            });
          }
          const s = { errorMap: t.common.contextualErrorMap },
            i = t.data;
          if (this._def.returns instanceof he) {
            const e = this;
            return v(async function(...t) {
              const r = new d([]),
                o = await e._def.args.parseAsync(t, s).catch(e => {
                  throw (r.addIssue(a(t, e)), r);
                }),
                u = await Reflect.apply(i, this, o);
              return await e._def.returns._def.type.parseAsync(u, s).catch(e => {
                throw (r.addIssue(n(u, e)), r);
              });
            });
          }
          {
            const e = this;
            return v(function(...t) {
              const r = e._def.args.safeParse(t, s);
              if (!r.success) throw new d([a(t, r.error)]);
              const o = Reflect.apply(i, this, r.data),
                u = e._def.returns.safeParse(o, s);
              if (!u.success) throw new d([n(o, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ie({ ...this._def, args: ae.create(e).rest(F.create()) });
        }
        returns(e) {
          return new ie({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, a) {
          return new ie({
            args: e || ae.create([]).rest(F.create()),
            returns: t || F.create(),
            typeName: Te.ZodFunction,
            ...T(a),
          });
        }
      }
      class oe extends O {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      oe.create = (e, t) => new oe({ getter: e, typeName: Te.ZodLazy, ...T(t) });
      class de extends O {
        _parse(e) {
          if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return (
              p(t, { received: t.data, code: o.invalid_literal, expected: this._def.value }), f
            );
          }
          return { status: 'valid', value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function ue(e, t) {
        return new ce({ values: e, typeName: Te.ZodEnum, ...T(t) });
      }
      de.create = (e, t) => new de({ value: e, typeName: Te.ZodLiteral, ...T(t) });
      class ce extends O {
        _parse(e) {
          if ('string' != typeof e.data) {
            const t = this._getOrReturnCtx(e),
              a = this._def.values;
            return (
              p(t, { expected: n.joinValues(a), received: t.parsedType, code: o.invalid_type }), f
            );
          }
          if (-1 === this._def.values.indexOf(e.data)) {
            const t = this._getOrReturnCtx(e),
              a = this._def.values;
            return p(t, { received: t.data, code: o.invalid_enum_value, options: a }), f;
          }
          return v(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          const e = {};
          for (const t of this._def.values) e[t] = t;
          return e;
        }
        extract(e) {
          return ce.create(e);
        }
        exclude(e) {
          return ce.create(this.options.filter(t => !e.includes(t)));
        }
      }
      ce.create = ue;
      class le extends O {
        _parse(e) {
          const t = n.getValidEnumValues(this._def.values),
            a = this._getOrReturnCtx(e);
          if (a.parsedType !== r.string && a.parsedType !== r.number) {
            const e = n.objectValues(t);
            return (
              p(a, { expected: n.joinValues(e), received: a.parsedType, code: o.invalid_type }), f
            );
          }
          if (-1 === t.indexOf(e.data)) {
            const e = n.objectValues(t);
            return p(a, { received: a.data, code: o.invalid_enum_value, options: e }), f;
          }
          return v(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      le.create = (e, t) => new le({ values: e, typeName: Te.ZodNativeEnum, ...T(t) });
      class he extends O {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== r.promise && !1 === t.common.async)
            return p(t, { code: o.invalid_type, expected: r.promise, received: t.parsedType }), f;
          const a = t.parsedType === r.promise ? t.data : Promise.resolve(t.data);
          return v(
            a.then(e =>
              this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap }),
            ),
          );
        }
      }
      he.create = (e, t) => new he({ type: e, typeName: Te.ZodPromise, ...T(t) });
      class pe extends O {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === Te.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e),
            s = this._def.effect || null,
            r = {
              addIssue: e => {
                p(a, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return a.path;
              },
            };
          if (((r.addIssue = r.addIssue.bind(r)), 'preprocess' === s.type)) {
            const e = s.transform(a.data, r);
            return a.common.issues.length
              ? { status: 'dirty', value: a.data }
              : a.common.async
              ? Promise.resolve(e).then(e =>
                  this._def.schema._parseAsync({ data: e, path: a.path, parent: a }),
                )
              : this._def.schema._parseSync({ data: e, path: a.path, parent: a });
          }
          if ('refinement' === s.type) {
            const e = e => {
              const t = s.refinement(e, r);
              if (a.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw new Error(
                  'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return e;
            };
            if (!1 === a.common.async) {
              const n = this._def.schema._parseSync({ data: a.data, path: a.path, parent: a });
              return 'aborted' === n.status
                ? f
                : ('dirty' === n.status && t.dirty(),
                  e(n.value),
                  { status: t.value, value: n.value });
            }
            return this._def.schema
              ._parseAsync({ data: a.data, path: a.path, parent: a })
              .then(a =>
                'aborted' === a.status
                  ? f
                  : ('dirty' === a.status && t.dirty(),
                    e(a.value).then(() => ({ status: t.value, value: a.value }))),
              );
          }
          if ('transform' === s.type) {
            if (!1 === a.common.async) {
              const e = this._def.schema._parseSync({ data: a.data, path: a.path, parent: a });
              if (!b(e)) return e;
              const n = s.transform(e.value, r);
              if (n instanceof Promise)
                throw new Error(
                  'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
                );
              return { status: t.value, value: n };
            }
            return this._def.schema
              ._parseAsync({ data: a.data, path: a.path, parent: a })
              .then(e =>
                b(e)
                  ? Promise.resolve(s.transform(e.value, r)).then(e => ({
                      status: t.value,
                      value: e,
                    }))
                  : e,
              );
          }
          n.assertNever(s);
        }
      }
      (pe.create = (e, t, a) => new pe({ schema: e, typeName: Te.ZodEffects, effect: t, ...T(a) })),
        (pe.createWithPreprocess = (e, t, a) =>
          new pe({
            schema: t,
            effect: { type: 'preprocess', transform: e },
            typeName: Te.ZodEffects,
            ...T(a),
          }));
      class me extends O {
        _parse(e) {
          return this._getType(e) === r.undefined ? v(void 0) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      me.create = (e, t) => new me({ innerType: e, typeName: Te.ZodOptional, ...T(t) });
      class fe extends O {
        _parse(e) {
          return this._getType(e) === r.null ? v(null) : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      fe.create = (e, t) => new fe({ innerType: e, typeName: Te.ZodNullable, ...T(t) });
      class ye extends O {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e);
          let a = t.data;
          return (
            t.parsedType === r.undefined && (a = this._def.defaultValue()),
            this._def.innerType._parse({ data: a, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      ye.create = (e, t) =>
        new ye({
          innerType: e,
          typeName: Te.ZodDefault,
          defaultValue: 'function' == typeof t.default ? t.default : () => t.default,
          ...T(t),
        });
      class ve extends O {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            a = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({ data: a.data, path: a.path, parent: { ...a } });
          return x(n)
            ? n.then(e => ({
                status: 'valid',
                value:
                  'valid' === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new d(a.common.issues);
                        },
                        input: a.data,
                      }),
              }))
            : {
                status: 'valid',
                value:
                  'valid' === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new d(a.common.issues);
                        },
                        input: a.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      ve.create = (e, t) =>
        new ve({
          innerType: e,
          typeName: Te.ZodCatch,
          catchValue: 'function' == typeof t.catch ? t.catch : () => t.catch,
          ...T(t),
        });
      class _e extends O {
        _parse(e) {
          if (this._getType(e) !== r.nan) {
            const t = this._getOrReturnCtx(e);
            return p(t, { code: o.invalid_type, expected: r.nan, received: t.parsedType }), f;
          }
          return { status: 'valid', value: e.data };
        }
      }
      _e.create = e => new _e({ typeName: Te.ZodNaN, ...T(e) });
      const ge = Symbol('zod_brand');
      class be extends O {
        _parse(e) {
          const { ctx: t } = this._processInputParams(e),
            a = t.data;
          return this._def.type._parse({ data: a, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class xe extends O {
        _parse(e) {
          const { status: t, ctx: a } = this._processInputParams(e);
          if (a.common.async)
            return (async () => {
              const e = await this._def.in._parseAsync({ data: a.data, path: a.path, parent: a });
              return 'aborted' === e.status
                ? f
                : 'dirty' === e.status
                ? (t.dirty(), y(e.value))
                : this._def.out._parseAsync({ data: e.value, path: a.path, parent: a });
            })();
          {
            const e = this._def.in._parseSync({ data: a.data, path: a.path, parent: a });
            return 'aborted' === e.status
              ? f
              : 'dirty' === e.status
              ? (t.dirty(), { status: 'dirty', value: e.value })
              : this._def.out._parseSync({ data: e.value, path: a.path, parent: a });
          }
        }
        static create(e, t) {
          return new xe({ in: e, out: t, typeName: Te.ZodPipeline });
        }
      }
      class ke extends O {
        _parse(e) {
          const t = this._def.innerType._parse(e);
          return b(t) && (t.value = Object.freeze(t.value)), t;
        }
      }
      ke.create = (e, t) => new ke({ innerType: e, typeName: Te.ZodReadonly, ...T(t) });
      const we = (e, t = {}, a) =>
          e
            ? B.create().superRefine((n, s) => {
                var r, i;
                if (!e(n)) {
                  const e =
                      'function' == typeof t ? t(n) : 'string' == typeof t ? { message: t } : t,
                    o =
                      null === (i = null !== (r = e.fatal) && void 0 !== r ? r : a) ||
                      void 0 === i ||
                      i,
                    d = 'string' == typeof e ? { message: e } : e;
                  s.addIssue({ code: 'custom', ...d, fatal: o });
                }
              })
            : B.create(),
        Ze = { object: G.lazycreate };
      var Te;
      !(function(e) {
        (e.ZodString = 'ZodString'),
          (e.ZodNumber = 'ZodNumber'),
          (e.ZodNaN = 'ZodNaN'),
          (e.ZodBigInt = 'ZodBigInt'),
          (e.ZodBoolean = 'ZodBoolean'),
          (e.ZodDate = 'ZodDate'),
          (e.ZodSymbol = 'ZodSymbol'),
          (e.ZodUndefined = 'ZodUndefined'),
          (e.ZodNull = 'ZodNull'),
          (e.ZodAny = 'ZodAny'),
          (e.ZodUnknown = 'ZodUnknown'),
          (e.ZodNever = 'ZodNever'),
          (e.ZodVoid = 'ZodVoid'),
          (e.ZodArray = 'ZodArray'),
          (e.ZodObject = 'ZodObject'),
          (e.ZodUnion = 'ZodUnion'),
          (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
          (e.ZodIntersection = 'ZodIntersection'),
          (e.ZodTuple = 'ZodTuple'),
          (e.ZodRecord = 'ZodRecord'),
          (e.ZodMap = 'ZodMap'),
          (e.ZodSet = 'ZodSet'),
          (e.ZodFunction = 'ZodFunction'),
          (e.ZodLazy = 'ZodLazy'),
          (e.ZodLiteral = 'ZodLiteral'),
          (e.ZodEnum = 'ZodEnum'),
          (e.ZodEffects = 'ZodEffects'),
          (e.ZodNativeEnum = 'ZodNativeEnum'),
          (e.ZodOptional = 'ZodOptional'),
          (e.ZodNullable = 'ZodNullable'),
          (e.ZodDefault = 'ZodDefault'),
          (e.ZodCatch = 'ZodCatch'),
          (e.ZodPromise = 'ZodPromise'),
          (e.ZodBranded = 'ZodBranded'),
          (e.ZodPipeline = 'ZodPipeline'),
          (e.ZodReadonly = 'ZodReadonly');
      })(Te || (Te = {}));
      const Oe = A.create,
        Se = $.create,
        Ne = _e.create,
        Ce = L.create,
        Ee = D.create,
        je = V.create,
        Ie = z.create,
        Pe = U.create,
        Re = K.create,
        Ae = B.create,
        Me = F.create,
        $e = W.create,
        Le = q.create,
        De = J.create,
        Ve = G.create,
        ze = G.strictCreate,
        Ue = H.create,
        Ke = Q.create,
        Be = te.create,
        Fe = ae.create,
        We = ne.create,
        qe = se.create,
        Je = re.create,
        Ye = ie.create,
        Ge = oe.create,
        He = de.create,
        Xe = ce.create,
        Qe = le.create,
        et = he.create,
        tt = pe.create,
        at = me.create,
        nt = fe.create,
        st = pe.createWithPreprocess,
        rt = xe.create,
        it = {
          string: e => A.create({ ...e, coerce: !0 }),
          number: e => $.create({ ...e, coerce: !0 }),
          boolean: e => D.create({ ...e, coerce: !0 }),
          bigint: e => L.create({ ...e, coerce: !0 }),
          date: e => V.create({ ...e, coerce: !0 }),
        },
        ot = f;
      var dt = Object.freeze({
        __proto__: null,
        defaultErrorMap: u,
        setErrorMap: function(e) {
          c = e;
        },
        getErrorMap: l,
        makeIssue: h,
        EMPTY_PATH: [],
        addIssueToContext: p,
        ParseStatus: m,
        INVALID: f,
        DIRTY: y,
        OK: v,
        isAborted: _,
        isDirty: g,
        isValid: b,
        isAsync: x,
        get util() {
          return n;
        },
        get objectUtil() {
          return s;
        },
        ZodParsedType: r,
        getParsedType: i,
        ZodType: O,
        ZodString: A,
        ZodNumber: $,
        ZodBigInt: L,
        ZodBoolean: D,
        ZodDate: V,
        ZodSymbol: z,
        ZodUndefined: U,
        ZodNull: K,
        ZodAny: B,
        ZodUnknown: F,
        ZodNever: W,
        ZodVoid: q,
        ZodArray: J,
        ZodObject: G,
        ZodUnion: H,
        ZodDiscriminatedUnion: Q,
        ZodIntersection: te,
        ZodTuple: ae,
        ZodRecord: ne,
        ZodMap: se,
        ZodSet: re,
        ZodFunction: ie,
        ZodLazy: oe,
        ZodLiteral: de,
        ZodEnum: ce,
        ZodNativeEnum: le,
        ZodPromise: he,
        ZodEffects: pe,
        ZodTransformer: pe,
        ZodOptional: me,
        ZodNullable: fe,
        ZodDefault: ye,
        ZodCatch: ve,
        ZodNaN: _e,
        BRAND: ge,
        ZodBranded: be,
        ZodPipeline: xe,
        ZodReadonly: ke,
        custom: we,
        Schema: O,
        ZodSchema: O,
        late: Ze,
        get ZodFirstPartyTypeKind() {
          return Te;
        },
        coerce: it,
        any: Ae,
        array: De,
        bigint: Ce,
        boolean: Ee,
        date: je,
        discriminatedUnion: Ke,
        effect: tt,
        enum: Xe,
        function: Ye,
        instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
          we(t => t instanceof e, t),
        intersection: Be,
        lazy: Ge,
        literal: He,
        map: qe,
        nan: Ne,
        nativeEnum: Qe,
        never: $e,
        null: Re,
        nullable: nt,
        number: Se,
        object: Ve,
        oboolean: () => Ee().optional(),
        onumber: () => Se().optional(),
        optional: at,
        ostring: () => Oe().optional(),
        pipeline: rt,
        preprocess: st,
        promise: et,
        record: We,
        set: Je,
        strictObject: ze,
        string: Oe,
        symbol: Ie,
        transformer: tt,
        tuple: Fe,
        undefined: Pe,
        union: Ue,
        unknown: Me,
        void: Le,
        NEVER: ot,
        ZodIssueCode: o,
        quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
        ZodError: d,
      });
    },
  },
]);
