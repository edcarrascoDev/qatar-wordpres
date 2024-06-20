/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      67639: (e, t, r) => {
        'use strict';
        var n = r(9523),
          o = r(72248),
          i = o(n('String.prototype.indexOf'));
        e.exports = function(e, t) {
          var r = n(e, !!t);
          return 'function' == typeof r && i(e, '.prototype.') > -1 ? o(r) : r;
        };
      },
      72248: (e, t, r) => {
        'use strict';
        var n = r(2073),
          o = r(9523),
          i = r(71138),
          a = o('%TypeError%'),
          l = o('%Function.prototype.apply%'),
          p = o('%Function.prototype.call%'),
          c = o('%Reflect.apply%', !0) || n.call(p, l),
          u = o('%Object.defineProperty%', !0),
          s = o('%Math.max%');
        if (u)
          try {
            u({}, 'a', { value: 1 });
          } catch (e) {
            u = null;
          }
        e.exports = function(e) {
          if ('function' != typeof e) throw new a('a function is required');
          var t = c(n, p, arguments);
          return i(t, 1 + s(0, e.length - (arguments.length - 1)), !0);
        };
        var f = function() {
          return c(n, l, arguments);
        };
        u ? u(e.exports, 'apply', { value: f }) : (e.exports.apply = f);
      },
      6922: (e, t) => {
        'use strict';
        (t.parse = function(e, t) {
          if ('string' != typeof e) throw new TypeError('argument str must be a string');
          for (
            var n = {}, o = t || {}, a = e.split(';'), l = o.decode || r, p = 0;
            p < a.length;
            p++
          ) {
            var c = a[p],
              u = c.indexOf('=');
            if (!(u < 0)) {
              var s = c.substring(0, u).trim();
              if (null == n[s]) {
                var f = c.substring(u + 1, c.length).trim();
                '"' === f[0] && (f = f.slice(1, -1)), (n[s] = i(f, l));
              }
            }
          }
          return n;
        }),
          (t.serialize = function(e, t, r) {
            var i = r || {},
              a = i.encode || n;
            if ('function' != typeof a) throw new TypeError('option encode is invalid');
            if (!o.test(e)) throw new TypeError('argument name is invalid');
            var l = a(t);
            if (l && !o.test(l)) throw new TypeError('argument val is invalid');
            var p = e + '=' + l;
            if (null != i.maxAge) {
              var c = i.maxAge - 0;
              if (isNaN(c) || !isFinite(c)) throw new TypeError('option maxAge is invalid');
              p += '; Max-Age=' + Math.floor(c);
            }
            if (i.domain) {
              if (!o.test(i.domain)) throw new TypeError('option domain is invalid');
              p += '; Domain=' + i.domain;
            }
            if (i.path) {
              if (!o.test(i.path)) throw new TypeError('option path is invalid');
              p += '; Path=' + i.path;
            }
            if (i.expires) {
              if ('function' != typeof i.expires.toUTCString)
                throw new TypeError('option expires is invalid');
              p += '; Expires=' + i.expires.toUTCString();
            }
            if ((i.httpOnly && (p += '; HttpOnly'), i.secure && (p += '; Secure'), i.sameSite))
              switch ('string' == typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                case !0:
                  p += '; SameSite=Strict';
                  break;
                case 'lax':
                  p += '; SameSite=Lax';
                  break;
                case 'strict':
                  p += '; SameSite=Strict';
                  break;
                case 'none':
                  p += '; SameSite=None';
                  break;
                default:
                  throw new TypeError('option sameSite is invalid');
              }
            return p;
          });
        var r = decodeURIComponent,
          n = encodeURIComponent,
          o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function i(e, t) {
          try {
            return t(e);
          } catch (t) {
            return e;
          }
        }
      },
      11131: (e, t, r) => {
        'use strict';
        var n = r(97547)(),
          o = r(9523),
          i = n && o('%Object.defineProperty%', !0);
        if (i)
          try {
            i({}, 'a', { value: 1 });
          } catch (e) {
            i = !1;
          }
        var a = o('%SyntaxError%'),
          l = o('%TypeError%'),
          p = r(98158);
        e.exports = function(e, t, r) {
          if (!e || ('object' != typeof e && 'function' != typeof e))
            throw new l('`obj` must be an object or a function`');
          if ('string' != typeof t && 'symbol' != typeof t)
            throw new l('`property` must be a string or a symbol`');
          if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3])
            throw new l('`nonEnumerable`, if provided, must be a boolean or null');
          if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4])
            throw new l('`nonWritable`, if provided, must be a boolean or null');
          if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5])
            throw new l('`nonConfigurable`, if provided, must be a boolean or null');
          if (arguments.length > 6 && 'boolean' != typeof arguments[6])
            throw new l('`loose`, if provided, must be a boolean');
          var n = arguments.length > 3 ? arguments[3] : null,
            o = arguments.length > 4 ? arguments[4] : null,
            c = arguments.length > 5 ? arguments[5] : null,
            u = arguments.length > 6 && arguments[6],
            s = !!p && p(e, t);
          if (i)
            i(e, t, {
              configurable: null === c && s ? s.configurable : !c,
              enumerable: null === n && s ? s.enumerable : !n,
              value: r,
              writable: null === o && s ? s.writable : !o,
            });
          else {
            if (!u && (n || o || c))
              throw new a(
                'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.',
              );
            e[t] = r;
          }
        };
      },
      92888: e => {
        'use strict';
        var t = Object.prototype.toString,
          r = Math.max,
          n = function(e, t) {
            for (var r = [], n = 0; n < e.length; n += 1) r[n] = e[n];
            for (var o = 0; o < t.length; o += 1) r[o + e.length] = t[o];
            return r;
          };
        e.exports = function(e) {
          var o = this;
          if ('function' != typeof o || '[object Function]' !== t.apply(o))
            throw new TypeError('Function.prototype.bind called on incompatible ' + o);
          for (
            var i,
              a = (function(e, t) {
                for (var r = [], n = 1, o = 0; n < e.length; n += 1, o += 1) r[o] = e[n];
                return r;
              })(arguments),
              l = r(0, o.length - a.length),
              p = [],
              c = 0;
            c < l;
            c++
          )
            p[c] = '$' + c;
          if (
            ((i = Function(
              'binder',
              'return function (' +
                (function(e, t) {
                  for (var r = '', n = 0; n < e.length; n += 1)
                    (r += e[n]), n + 1 < e.length && (r += ',');
                  return r;
                })(p) +
                '){ return binder.apply(this,arguments); }',
            )(function() {
              if (this instanceof i) {
                var t = o.apply(this, n(a, arguments));
                return Object(t) === t ? t : this;
              }
              return o.apply(e, n(a, arguments));
            })),
            o.prototype)
          ) {
            var u = function() {};
            (u.prototype = o.prototype), (i.prototype = new u()), (u.prototype = null);
          }
          return i;
        };
      },
      2073: (e, t, r) => {
        'use strict';
        var n = r(92888);
        e.exports = Function.prototype.bind || n;
      },
      9523: (e, t, r) => {
        'use strict';
        var n,
          o = SyntaxError,
          i = Function,
          a = TypeError,
          l = function(e) {
            try {
              return i('"use strict"; return (' + e + ').constructor;')();
            } catch (e) {}
          },
          p = Object.getOwnPropertyDescriptor;
        if (p)
          try {
            p({}, '');
          } catch (e) {
            p = null;
          }
        var c = function() {
            throw new a();
          },
          u = p
            ? (function() {
                try {
                  return c;
                } catch (e) {
                  try {
                    return p(arguments, 'callee').get;
                  } catch (e) {
                    return c;
                  }
                }
              })()
            : c,
          s = r(72770)(),
          f = r(57877)(),
          y =
            Object.getPrototypeOf ||
            (f
              ? function(e) {
                  return e.__proto__;
                }
              : null),
          m = {},
          d = 'undefined' != typeof Uint8Array && y ? y(Uint8Array) : n,
          g = {
            '%AggregateError%': 'undefined' == typeof AggregateError ? n : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? n : ArrayBuffer,
            '%ArrayIteratorPrototype%': s && y ? y([][Symbol.iterator]()) : n,
            '%AsyncFromSyncIteratorPrototype%': n,
            '%AsyncFunction%': m,
            '%AsyncGenerator%': m,
            '%AsyncGeneratorFunction%': m,
            '%AsyncIteratorPrototype%': m,
            '%Atomics%': 'undefined' == typeof Atomics ? n : Atomics,
            '%BigInt%': 'undefined' == typeof BigInt ? n : BigInt,
            '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? n : BigInt64Array,
            '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? n : BigUint64Array,
            '%Boolean%': Boolean,
            '%DataView%': 'undefined' == typeof DataView ? n : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': 'undefined' == typeof Float32Array ? n : Float32Array,
            '%Float64Array%': 'undefined' == typeof Float64Array ? n : Float64Array,
            '%FinalizationRegistry%':
              'undefined' == typeof FinalizationRegistry ? n : FinalizationRegistry,
            '%Function%': i,
            '%GeneratorFunction%': m,
            '%Int8Array%': 'undefined' == typeof Int8Array ? n : Int8Array,
            '%Int16Array%': 'undefined' == typeof Int16Array ? n : Int16Array,
            '%Int32Array%': 'undefined' == typeof Int32Array ? n : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': s && y ? y(y([][Symbol.iterator]())) : n,
            '%JSON%': 'object' == typeof JSON ? JSON : n,
            '%Map%': 'undefined' == typeof Map ? n : Map,
            '%MapIteratorPrototype%':
              'undefined' != typeof Map && s && y ? y(new Map()[Symbol.iterator]()) : n,
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': 'undefined' == typeof Promise ? n : Promise,
            '%Proxy%': 'undefined' == typeof Proxy ? n : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': 'undefined' == typeof Reflect ? n : Reflect,
            '%RegExp%': RegExp,
            '%Set%': 'undefined' == typeof Set ? n : Set,
            '%SetIteratorPrototype%':
              'undefined' != typeof Set && s && y ? y(new Set()[Symbol.iterator]()) : n,
            '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? n : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': s && y ? y(''[Symbol.iterator]()) : n,
            '%Symbol%': s ? Symbol : n,
            '%SyntaxError%': o,
            '%ThrowTypeError%': u,
            '%TypedArray%': d,
            '%TypeError%': a,
            '%Uint8Array%': 'undefined' == typeof Uint8Array ? n : Uint8Array,
            '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? n : Uint8ClampedArray,
            '%Uint16Array%': 'undefined' == typeof Uint16Array ? n : Uint16Array,
            '%Uint32Array%': 'undefined' == typeof Uint32Array ? n : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': 'undefined' == typeof WeakMap ? n : WeakMap,
            '%WeakRef%': 'undefined' == typeof WeakRef ? n : WeakRef,
            '%WeakSet%': 'undefined' == typeof WeakSet ? n : WeakSet,
          };
        if (y)
          try {
            null.error;
          } catch (e) {
            var h = y(y(e));
            g['%Error.prototype%'] = h;
          }
        var b = function e(t) {
            var r;
            if ('%AsyncFunction%' === t) r = l('async function () {}');
            else if ('%GeneratorFunction%' === t) r = l('function* () {}');
            else if ('%AsyncGeneratorFunction%' === t) r = l('async function* () {}');
            else if ('%AsyncGenerator%' === t) {
              var n = e('%AsyncGeneratorFunction%');
              n && (r = n.prototype);
            } else if ('%AsyncIteratorPrototype%' === t) {
              var o = e('%AsyncGenerator%');
              o && y && (r = y(o.prototype));
            }
            return (g[t] = r), r;
          },
          v = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          w = r(2073),
          x = r(69990),
          S = w.call(Function.call, Array.prototype.concat),
          E = w.call(Function.apply, Array.prototype.splice),
          A = w.call(Function.call, String.prototype.replace),
          j = w.call(Function.call, String.prototype.slice),
          O = w.call(Function.call, RegExp.prototype.exec),
          P = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          _ = /\\(\\)?/g,
          I = function(e, t) {
            var r,
              n = e;
            if ((x(v, n) && (n = '%' + (r = v[n])[0] + '%'), x(g, n))) {
              var i = g[n];
              if ((i === m && (i = b(n)), void 0 === i && !t))
                throw new a(
                  'intrinsic ' + e + ' exists, but is not available. Please file an issue!',
                );
              return { alias: r, name: n, value: i };
            }
            throw new o('intrinsic ' + e + ' does not exist!');
          };
        e.exports = function(e, t) {
          if ('string' != typeof e || 0 === e.length)
            throw new a('intrinsic name must be a non-empty string');
          if (arguments.length > 1 && 'boolean' != typeof t)
            throw new a('"allowMissing" argument must be a boolean');
          if (null === O(/^%?[^%]*%?$/, e))
            throw new o(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
            );
          var r = (function(e) {
              var t = j(e, 0, 1),
                r = j(e, -1);
              if ('%' === t && '%' !== r)
                throw new o('invalid intrinsic syntax, expected closing `%`');
              if ('%' === r && '%' !== t)
                throw new o('invalid intrinsic syntax, expected opening `%`');
              var n = [];
              return (
                A(e, P, function(e, t, r, o) {
                  n[n.length] = r ? A(o, _, '$1') : t || e;
                }),
                n
              );
            })(e),
            n = r.length > 0 ? r[0] : '',
            i = I('%' + n + '%', t),
            l = i.name,
            c = i.value,
            u = !1,
            s = i.alias;
          s && ((n = s[0]), E(r, S([0, 1], s)));
          for (var f = 1, y = !0; f < r.length; f += 1) {
            var m = r[f],
              d = j(m, 0, 1),
              h = j(m, -1);
            if (
              ('"' === d || "'" === d || '`' === d || '"' === h || "'" === h || '`' === h) &&
              d !== h
            )
              throw new o('property names with quotes must have matching quotes');
            if ((('constructor' !== m && y) || (u = !0), x(g, (l = '%' + (n += '.' + m) + '%'))))
              c = g[l];
            else if (null != c) {
              if (!(m in c)) {
                if (!t)
                  throw new a(
                    'base intrinsic for ' + e + ' exists, but the property is not available.',
                  );
                return;
              }
              if (p && f + 1 >= r.length) {
                var b = p(c, m);
                c = (y = !!b) && 'get' in b && !('originalValue' in b.get) ? b.get : c[m];
              } else (y = x(c, m)), (c = c[m]);
              y && !u && (g[l] = c);
            }
          }
          return c;
        };
      },
      98158: (e, t, r) => {
        'use strict';
        var n = r(9523)('%Object.getOwnPropertyDescriptor%', !0);
        if (n)
          try {
            n([], 'length');
          } catch (e) {
            n = null;
          }
        e.exports = n;
      },
      97547: (e, t, r) => {
        'use strict';
        var n = r(9523)('%Object.defineProperty%', !0),
          o = function() {
            if (n)
              try {
                return n({}, 'a', { value: 1 }), !0;
              } catch (e) {
                return !1;
              }
            return !1;
          };
        (o.hasArrayLengthDefineBug = function() {
          if (!o()) return null;
          try {
            return 1 !== n([], 'length', { value: 1 }).length;
          } catch (e) {
            return !0;
          }
        }),
          (e.exports = o);
      },
      57877: e => {
        'use strict';
        var t = { foo: {} },
          r = Object;
        e.exports = function() {
          return { __proto__: t }.foo === t.foo && !({ __proto__: null } instanceof r);
        };
      },
      72770: (e, t, r) => {
        'use strict';
        var n = 'undefined' != typeof Symbol && Symbol,
          o = r(69578);
        e.exports = function() {
          return (
            'function' == typeof n &&
            'function' == typeof Symbol &&
            'symbol' == typeof n('foo') &&
            'symbol' == typeof Symbol('bar') &&
            o()
          );
        };
      },
      69578: e => {
        'use strict';
        e.exports = function() {
          if ('function' != typeof Symbol || 'function' != typeof Object.getOwnPropertySymbols)
            return !1;
          if ('symbol' == typeof Symbol.iterator) return !0;
          var e = {},
            t = Symbol('test'),
            r = Object(t);
          if ('string' == typeof t) return !1;
          if ('[object Symbol]' !== Object.prototype.toString.call(t)) return !1;
          if ('[object Symbol]' !== Object.prototype.toString.call(r)) return !1;
          for (t in ((e[t] = 42), e)) return !1;
          if ('function' == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
          if (
            'function' == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length
          )
            return !1;
          var n = Object.getOwnPropertySymbols(e);
          if (1 !== n.length || n[0] !== t) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
          if ('function' == typeof Object.getOwnPropertyDescriptor) {
            var o = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== o.value || !0 !== o.enumerable) return !1;
          }
          return !0;
        };
      },
      69990: (e, t, r) => {
        'use strict';
        var n = Function.prototype.call,
          o = Object.prototype.hasOwnProperty,
          i = r(2073);
        e.exports = i.call(n, o);
      },
      94527: (e, t, r) => {
        var n = 'function' == typeof Map && Map.prototype,
          o =
            Object.getOwnPropertyDescriptor && n
              ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
              : null,
          i = n && o && 'function' == typeof o.get ? o.get : null,
          a = n && Map.prototype.forEach,
          l = 'function' == typeof Set && Set.prototype,
          p =
            Object.getOwnPropertyDescriptor && l
              ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
              : null,
          c = l && p && 'function' == typeof p.get ? p.get : null,
          u = l && Set.prototype.forEach,
          s = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
          f = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
          y = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
          m = Boolean.prototype.valueOf,
          d = Object.prototype.toString,
          g = Function.prototype.toString,
          h = String.prototype.match,
          b = String.prototype.slice,
          v = String.prototype.replace,
          w = String.prototype.toUpperCase,
          x = String.prototype.toLowerCase,
          S = RegExp.prototype.test,
          E = Array.prototype.concat,
          A = Array.prototype.join,
          j = Array.prototype.slice,
          O = Math.floor,
          P = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
          _ = Object.getOwnPropertySymbols,
          I =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? Symbol.prototype.toString
              : null,
          N = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
          k =
            'function' == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1)
              ? Symbol.toStringTag
              : null,
          T = Object.prototype.propertyIsEnumerable,
          R =
            ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function(e) {
                  return e.__proto__;
                }
              : null);
        function F(e, t) {
          if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || S.call(/e/, t))
            return t;
          var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ('number' == typeof e) {
            var n = e < 0 ? -O(-e) : O(e);
            if (n !== e) {
              var o = String(n),
                i = b.call(t, o.length + 1);
              return v.call(o, r, '$&_') + '.' + v.call(v.call(i, /([0-9]{3})/g, '$&_'), /_$/, '');
            }
          }
          return v.call(t, r, '$&_');
        }
        var M = r(93452),
          D = M.custom,
          U = $(D) ? D : null;
        function W(e, t, r) {
          var n = 'double' === (r.quoteStyle || t) ? '"' : "'";
          return n + e + n;
        }
        function C(e) {
          return v.call(String(e), /"/g, '&quot;');
        }
        function B(e) {
          return !('[object Array]' !== q(e) || (k && 'object' == typeof e && k in e));
        }
        function L(e) {
          return !('[object RegExp]' !== q(e) || (k && 'object' == typeof e && k in e));
        }
        function $(e) {
          if (N) return e && 'object' == typeof e && e instanceof Symbol;
          if ('symbol' == typeof e) return !0;
          if (!e || 'object' != typeof e || !I) return !1;
          try {
            return I.call(e), !0;
          } catch (e) {}
          return !1;
        }
        e.exports = function e(t, n, o, l) {
          var p = n || {};
          if (z(p, 'quoteStyle') && 'single' !== p.quoteStyle && 'double' !== p.quoteStyle)
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
          if (
            z(p, 'maxStringLength') &&
            ('number' == typeof p.maxStringLength
              ? p.maxStringLength < 0 && p.maxStringLength !== 1 / 0
              : null !== p.maxStringLength)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
            );
          var d = !z(p, 'customInspect') || p.customInspect;
          if ('boolean' != typeof d && 'symbol' !== d)
            throw new TypeError(
              'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
            );
          if (
            z(p, 'indent') &&
            null !== p.indent &&
            '\t' !== p.indent &&
            !(parseInt(p.indent, 10) === p.indent && p.indent > 0)
          )
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
          if (z(p, 'numericSeparator') && 'boolean' != typeof p.numericSeparator)
            throw new TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`',
            );
          var w = p.numericSeparator;
          if (void 0 === t) return 'undefined';
          if (null === t) return 'null';
          if ('boolean' == typeof t) return t ? 'true' : 'false';
          if ('string' == typeof t) return V(t, p);
          if ('number' == typeof t) {
            if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0';
            var S = String(t);
            return w ? F(t, S) : S;
          }
          if ('bigint' == typeof t) {
            var O = String(t) + 'n';
            return w ? F(t, O) : O;
          }
          var _ = void 0 === p.depth ? 5 : p.depth;
          if ((void 0 === o && (o = 0), o >= _ && _ > 0 && 'object' == typeof t))
            return B(t) ? '[Array]' : '[Object]';
          var D,
            G = (function(e, t) {
              var r;
              if ('\t' === e.indent) r = '\t';
              else {
                if (!('number' == typeof e.indent && e.indent > 0)) return null;
                r = A.call(Array(e.indent + 1), ' ');
              }
              return { base: r, prev: A.call(Array(t + 1), r) };
            })(p, o);
          if (void 0 === l) l = [];
          else if (H(l, t) >= 0) return '[Circular]';
          function J(t, r, n) {
            if ((r && (l = j.call(l)).push(r), n)) {
              var i = { depth: p.depth };
              return z(p, 'quoteStyle') && (i.quoteStyle = p.quoteStyle), e(t, i, o + 1, l);
            }
            return e(t, p, o + 1, l);
          }
          if ('function' == typeof t && !L(t)) {
            var ee = (function(e) {
                if (e.name) return e.name;
                var t = h.call(g.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
              })(t),
              te = X(t, J);
            return (
              '[Function' +
              (ee ? ': ' + ee : ' (anonymous)') +
              ']' +
              (te.length > 0 ? ' { ' + A.call(te, ', ') + ' }' : '')
            );
          }
          if ($(t)) {
            var re = N ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : I.call(t);
            return 'object' != typeof t || N ? re : Q(re);
          }
          if (
            (D = t) &&
            'object' == typeof D &&
            (('undefined' != typeof HTMLElement && D instanceof HTMLElement) ||
              ('string' == typeof D.nodeName && 'function' == typeof D.getAttribute))
          ) {
            for (
              var ne = '<' + x.call(String(t.nodeName)), oe = t.attributes || [], ie = 0;
              ie < oe.length;
              ie++
            )
              ne += ' ' + oe[ie].name + '=' + W(C(oe[ie].value), 'double', p);
            return (
              (ne += '>'),
              t.childNodes && t.childNodes.length && (ne += '...'),
              ne + '</' + x.call(String(t.nodeName)) + '>'
            );
          }
          if (B(t)) {
            if (0 === t.length) return '[]';
            var ae = X(t, J);
            return G &&
              !(function(e) {
                for (var t = 0; t < e.length; t++) if (H(e[t], '\n') >= 0) return !1;
                return !0;
              })(ae)
              ? '[' + K(ae, G) + ']'
              : '[ ' + A.call(ae, ', ') + ' ]';
          }
          if (
            (function(e) {
              return !('[object Error]' !== q(e) || (k && 'object' == typeof e && k in e));
            })(t)
          ) {
            var le = X(t, J);
            return 'cause' in Error.prototype || !('cause' in t) || T.call(t, 'cause')
              ? 0 === le.length
                ? '[' + String(t) + ']'
                : '{ [' + String(t) + '] ' + A.call(le, ', ') + ' }'
              : '{ [' +
                  String(t) +
                  '] ' +
                  A.call(E.call('[cause]: ' + J(t.cause), le), ', ') +
                  ' }';
          }
          if ('object' == typeof t && d) {
            if (U && 'function' == typeof t[U] && M) return M(t, { depth: _ - o });
            if ('symbol' !== d && 'function' == typeof t.inspect) return t.inspect();
          }
          if (
            (function(e) {
              if (!i || !e || 'object' != typeof e) return !1;
              try {
                i.call(e);
                try {
                  c.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Map;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var pe = [];
            return (
              a &&
                a.call(t, function(e, r) {
                  pe.push(J(r, t, !0) + ' => ' + J(e, t));
                }),
              Z('Map', i.call(t), pe, G)
            );
          }
          if (
            (function(e) {
              if (!c || !e || 'object' != typeof e) return !1;
              try {
                c.call(e);
                try {
                  i.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Set;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var ce = [];
            return (
              u &&
                u.call(t, function(e) {
                  ce.push(J(e, t));
                }),
              Z('Set', c.call(t), ce, G)
            );
          }
          if (
            (function(e) {
              if (!s || !e || 'object' != typeof e) return !1;
              try {
                s.call(e, s);
                try {
                  f.call(e, f);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakMap;
              } catch (e) {}
              return !1;
            })(t)
          )
            return Y('WeakMap');
          if (
            (function(e) {
              if (!f || !e || 'object' != typeof e) return !1;
              try {
                f.call(e, f);
                try {
                  s.call(e, s);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakSet;
              } catch (e) {}
              return !1;
            })(t)
          )
            return Y('WeakSet');
          if (
            (function(e) {
              if (!y || !e || 'object' != typeof e) return !1;
              try {
                return y.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return Y('WeakRef');
          if (
            (function(e) {
              return !('[object Number]' !== q(e) || (k && 'object' == typeof e && k in e));
            })(t)
          )
            return Q(J(Number(t)));
          if (
            (function(e) {
              if (!e || 'object' != typeof e || !P) return !1;
              try {
                return P.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return Q(J(P.call(t)));
          if (
            (function(e) {
              return !('[object Boolean]' !== q(e) || (k && 'object' == typeof e && k in e));
            })(t)
          )
            return Q(m.call(t));
          if (
            (function(e) {
              return !('[object String]' !== q(e) || (k && 'object' == typeof e && k in e));
            })(t)
          )
            return Q(J(String(t)));
          if ('undefined' != typeof window && t === window) return '{ [object Window] }';
          if (t === r.g) return '{ [object globalThis] }';
          if (
            !(function(e) {
              return !('[object Date]' !== q(e) || (k && 'object' == typeof e && k in e));
            })(t) &&
            !L(t)
          ) {
            var ue = X(t, J),
              se = R ? R(t) === Object.prototype : t instanceof Object || t.constructor === Object,
              fe = t instanceof Object ? '' : 'null prototype',
              ye = !se && k && Object(t) === t && k in t ? b.call(q(t), 8, -1) : fe ? 'Object' : '',
              me =
                (se || 'function' != typeof t.constructor
                  ? ''
                  : t.constructor.name
                  ? t.constructor.name + ' '
                  : '') +
                (ye || fe ? '[' + A.call(E.call([], ye || [], fe || []), ': ') + '] ' : '');
            return 0 === ue.length
              ? me + '{}'
              : G
              ? me + '{' + K(ue, G) + '}'
              : me + '{ ' + A.call(ue, ', ') + ' }';
          }
          return String(t);
        };
        var G =
          Object.prototype.hasOwnProperty ||
          function(e) {
            return e in this;
          };
        function z(e, t) {
          return G.call(e, t);
        }
        function q(e) {
          return d.call(e);
        }
        function H(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
          return -1;
        }
        function V(e, t) {
          if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
              n = '... ' + r + ' more character' + (r > 1 ? 's' : '');
            return V(b.call(e, 0, t.maxStringLength), t) + n;
          }
          return W(v.call(v.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, J), 'single', t);
        }
        function J(e) {
          var t = e.charCodeAt(0),
            r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
          return r ? '\\' + r : '\\x' + (t < 16 ? '0' : '') + w.call(t.toString(16));
        }
        function Q(e) {
          return 'Object(' + e + ')';
        }
        function Y(e) {
          return e + ' { ? }';
        }
        function Z(e, t, r, n) {
          return e + ' (' + t + ') {' + (n ? K(r, n) : A.call(r, ', ')) + '}';
        }
        function K(e, t) {
          if (0 === e.length) return '';
          var r = '\n' + t.prev + t.base;
          return r + A.call(e, ',' + r) + '\n' + t.prev;
        }
        function X(e, t) {
          var r = B(e),
            n = [];
          if (r) {
            n.length = e.length;
            for (var o = 0; o < e.length; o++) n[o] = z(e, o) ? t(e[o], e) : '';
          }
          var i,
            a = 'function' == typeof _ ? _(e) : [];
          if (N) {
            i = {};
            for (var l = 0; l < a.length; l++) i['$' + a[l]] = a[l];
          }
          for (var p in e)
            z(e, p) &&
              ((r && String(Number(p)) === p && p < e.length) ||
                (N && i['$' + p] instanceof Symbol) ||
                (S.call(/[^\w$]/, p)
                  ? n.push(t(p, e) + ': ' + t(e[p], e))
                  : n.push(p + ': ' + t(e[p], e))));
          if ('function' == typeof _)
            for (var c = 0; c < a.length; c++)
              T.call(e, a[c]) && n.push('[' + t(a[c]) + ']: ' + t(e[a[c]], e));
          return n;
        }
      },
      83949: e => {
        'use strict';
        var t = String.prototype.replace,
          r = /%20/g,
          n = 'RFC3986';
        e.exports = {
          default: n,
          formatters: {
            RFC1738: function(e) {
              return t.call(e, r, '+');
            },
            RFC3986: function(e) {
              return String(e);
            },
          },
          RFC1738: 'RFC1738',
          RFC3986: n,
        };
      },
      67905: (e, t, r) => {
        'use strict';
        var n = r(85095),
          o = r(95990),
          i = r(83949);
        e.exports = { formats: i, parse: o, stringify: n };
      },
      95990: (e, t, r) => {
        'use strict';
        var n = r(37748),
          o = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          a = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decoder: n.decode,
            delimiter: '&',
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          l = function(e) {
            return e.replace(/&#(\d+);/g, function(e, t) {
              return String.fromCharCode(parseInt(t, 10));
            });
          },
          p = function(e, t) {
            return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
          },
          c = function(e, t, r, n) {
            if (e) {
              var i = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                a = /(\[[^[\]]*])/g,
                l = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
                c = l ? i.slice(0, l.index) : i,
                u = [];
              if (c) {
                if (!r.plainObjects && o.call(Object.prototype, c) && !r.allowPrototypes) return;
                u.push(c);
              }
              for (var s = 0; r.depth > 0 && null !== (l = a.exec(i)) && s < r.depth; ) {
                if (
                  ((s += 1),
                  !r.plainObjects &&
                    o.call(Object.prototype, l[1].slice(1, -1)) &&
                    !r.allowPrototypes)
                )
                  return;
                u.push(l[1]);
              }
              return (
                l && u.push('[' + i.slice(l.index) + ']'),
                (function(e, t, r, n) {
                  for (var o = n ? t : p(t, r), i = e.length - 1; i >= 0; --i) {
                    var a,
                      l = e[i];
                    if ('[]' === l && r.parseArrays) a = [].concat(o);
                    else {
                      a = r.plainObjects ? Object.create(null) : {};
                      var c =
                          '[' === l.charAt(0) && ']' === l.charAt(l.length - 1)
                            ? l.slice(1, -1)
                            : l,
                        u = parseInt(c, 10);
                      r.parseArrays || '' !== c
                        ? !isNaN(u) &&
                          l !== c &&
                          String(u) === c &&
                          u >= 0 &&
                          r.parseArrays &&
                          u <= r.arrayLimit
                          ? ((a = [])[u] = o)
                          : '__proto__' !== c && (a[c] = o)
                        : (a = { 0: o });
                    }
                    o = a;
                  }
                  return o;
                })(u, t, r, n)
              );
            }
          };
        e.exports = function(e, t) {
          var r = (function(e) {
            if (!e) return a;
            if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder)
              throw new TypeError('Decoder has to be a function.');
            if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined',
              );
            var t = void 0 === e.charset ? a.charset : e.charset;
            return {
              allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
              allowPrototypes:
                'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
              allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : a.allowSparse,
              arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
              charset: t,
              charsetSentinel:
                'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
              comma: 'boolean' == typeof e.comma ? e.comma : a.comma,
              decoder: 'function' == typeof e.decoder ? e.decoder : a.decoder,
              delimiter:
                'string' == typeof e.delimiter || n.isRegExp(e.delimiter)
                  ? e.delimiter
                  : a.delimiter,
              depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
              ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
              interpretNumericEntities:
                'boolean' == typeof e.interpretNumericEntities
                  ? e.interpretNumericEntities
                  : a.interpretNumericEntities,
              parameterLimit:
                'number' == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
              parseArrays: !1 !== e.parseArrays,
              plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
              strictNullHandling:
                'boolean' == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : a.strictNullHandling,
            };
          })(t);
          if ('' === e || null == e) return r.plainObjects ? Object.create(null) : {};
          for (
            var u =
                'string' == typeof e
                  ? (function(e, t) {
                      var r,
                        c = { __proto__: null },
                        u = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                        s = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                        f = u.split(t.delimiter, s),
                        y = -1,
                        m = t.charset;
                      if (t.charsetSentinel)
                        for (r = 0; r < f.length; ++r)
                          0 === f[r].indexOf('utf8=') &&
                            ('utf8=%E2%9C%93' === f[r]
                              ? (m = 'utf-8')
                              : 'utf8=%26%2310003%3B' === f[r] && (m = 'iso-8859-1'),
                            (y = r),
                            (r = f.length));
                      for (r = 0; r < f.length; ++r)
                        if (r !== y) {
                          var d,
                            g,
                            h = f[r],
                            b = h.indexOf(']='),
                            v = -1 === b ? h.indexOf('=') : b + 1;
                          -1 === v
                            ? ((d = t.decoder(h, a.decoder, m, 'key')),
                              (g = t.strictNullHandling ? null : ''))
                            : ((d = t.decoder(h.slice(0, v), a.decoder, m, 'key')),
                              (g = n.maybeMap(p(h.slice(v + 1), t), function(e) {
                                return t.decoder(e, a.decoder, m, 'value');
                              }))),
                            g && t.interpretNumericEntities && 'iso-8859-1' === m && (g = l(g)),
                            h.indexOf('[]=') > -1 && (g = i(g) ? [g] : g),
                            o.call(c, d) ? (c[d] = n.combine(c[d], g)) : (c[d] = g);
                        }
                      return c;
                    })(e, r)
                  : e,
              s = r.plainObjects ? Object.create(null) : {},
              f = Object.keys(u),
              y = 0;
            y < f.length;
            ++y
          ) {
            var m = f[y],
              d = c(m, u[m], r, 'string' == typeof e);
            s = n.merge(s, d, r);
          }
          return !0 === r.allowSparse ? s : n.compact(s);
        };
      },
      85095: (e, t, r) => {
        'use strict';
        var n = r(44852),
          o = r(37748),
          i = r(83949),
          a = Object.prototype.hasOwnProperty,
          l = {
            brackets: function(e) {
              return e + '[]';
            },
            comma: 'comma',
            indices: function(e, t) {
              return e + '[' + t + ']';
            },
            repeat: function(e) {
              return e;
            },
          },
          p = Array.isArray,
          c = Array.prototype.push,
          u = function(e, t) {
            c.apply(e, p(t) ? t : [t]);
          },
          s = Date.prototype.toISOString,
          f = i.default,
          y = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encoder: o.encode,
            encodeValuesOnly: !1,
            format: f,
            formatter: i.formatters[f],
            indices: !1,
            serializeDate: function(e) {
              return s.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          m = {},
          d = function e(t, r, i, a, l, c, s, f, d, g, h, b, v, w, x, S) {
            for (var E, A = t, j = S, O = 0, P = !1; void 0 !== (j = j.get(m)) && !P; ) {
              var _ = j.get(t);
              if (((O += 1), void 0 !== _)) {
                if (_ === O) throw new RangeError('Cyclic object value');
                P = !0;
              }
              void 0 === j.get(m) && (O = 0);
            }
            if (
              ('function' == typeof f
                ? (A = f(r, A))
                : A instanceof Date
                ? (A = h(A))
                : 'comma' === i &&
                  p(A) &&
                  (A = o.maybeMap(A, function(e) {
                    return e instanceof Date ? h(e) : e;
                  })),
              null === A)
            ) {
              if (l) return s && !w ? s(r, y.encoder, x, 'key', b) : r;
              A = '';
            }
            if (
              'string' == typeof (E = A) ||
              'number' == typeof E ||
              'boolean' == typeof E ||
              'symbol' == typeof E ||
              'bigint' == typeof E ||
              o.isBuffer(A)
            )
              return s
                ? [
                    v(w ? r : s(r, y.encoder, x, 'key', b)) +
                      '=' +
                      v(s(A, y.encoder, x, 'value', b)),
                  ]
                : [v(r) + '=' + v(String(A))];
            var I,
              N = [];
            if (void 0 === A) return N;
            if ('comma' === i && p(A))
              w && s && (A = o.maybeMap(A, s)),
                (I = [{ value: A.length > 0 ? A.join(',') || null : void 0 }]);
            else if (p(f)) I = f;
            else {
              var k = Object.keys(A);
              I = d ? k.sort(d) : k;
            }
            for (var T = a && p(A) && 1 === A.length ? r + '[]' : r, R = 0; R < I.length; ++R) {
              var F = I[R],
                M = 'object' == typeof F && void 0 !== F.value ? F.value : A[F];
              if (!c || null !== M) {
                var D = p(A)
                  ? 'function' == typeof i
                    ? i(T, F)
                    : T
                  : T + (g ? '.' + F : '[' + F + ']');
                S.set(t, O);
                var U = n();
                U.set(m, S),
                  u(
                    N,
                    e(
                      M,
                      D,
                      i,
                      a,
                      l,
                      c,
                      'comma' === i && w && p(A) ? null : s,
                      f,
                      d,
                      g,
                      h,
                      b,
                      v,
                      w,
                      x,
                      U,
                    ),
                  );
              }
            }
            return N;
          };
        e.exports = function(e, t) {
          var r,
            o = e,
            c = (function(e) {
              if (!e) return y;
              if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder)
                throw new TypeError('Encoder has to be a function.');
              var t = e.charset || y.charset;
              if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
                throw new TypeError(
                  'The charset option must be either utf-8, iso-8859-1, or undefined',
                );
              var r = i.default;
              if (void 0 !== e.format) {
                if (!a.call(i.formatters, e.format))
                  throw new TypeError('Unknown format option provided.');
                r = e.format;
              }
              var n = i.formatters[r],
                o = y.filter;
              return (
                ('function' == typeof e.filter || p(e.filter)) && (o = e.filter),
                {
                  addQueryPrefix:
                    'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : y.addQueryPrefix,
                  allowDots: void 0 === e.allowDots ? y.allowDots : !!e.allowDots,
                  charset: t,
                  charsetSentinel:
                    'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : y.charsetSentinel,
                  delimiter: void 0 === e.delimiter ? y.delimiter : e.delimiter,
                  encode: 'boolean' == typeof e.encode ? e.encode : y.encode,
                  encoder: 'function' == typeof e.encoder ? e.encoder : y.encoder,
                  encodeValuesOnly:
                    'boolean' == typeof e.encodeValuesOnly
                      ? e.encodeValuesOnly
                      : y.encodeValuesOnly,
                  filter: o,
                  format: r,
                  formatter: n,
                  serializeDate:
                    'function' == typeof e.serializeDate ? e.serializeDate : y.serializeDate,
                  skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : y.skipNulls,
                  sort: 'function' == typeof e.sort ? e.sort : null,
                  strictNullHandling:
                    'boolean' == typeof e.strictNullHandling
                      ? e.strictNullHandling
                      : y.strictNullHandling,
                }
              );
            })(t);
          'function' == typeof c.filter
            ? (o = (0, c.filter)('', o))
            : p(c.filter) && (r = c.filter);
          var s,
            f = [];
          if ('object' != typeof o || null === o) return '';
          s =
            t && t.arrayFormat in l
              ? t.arrayFormat
              : t && 'indices' in t
              ? t.indices
                ? 'indices'
                : 'repeat'
              : 'indices';
          var m = l[s];
          if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip)
            throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
          var g = 'comma' === m && t && t.commaRoundTrip;
          r || (r = Object.keys(o)), c.sort && r.sort(c.sort);
          for (var h = n(), b = 0; b < r.length; ++b) {
            var v = r[b];
            (c.skipNulls && null === o[v]) ||
              u(
                f,
                d(
                  o[v],
                  v,
                  m,
                  g,
                  c.strictNullHandling,
                  c.skipNulls,
                  c.encode ? c.encoder : null,
                  c.filter,
                  c.sort,
                  c.allowDots,
                  c.serializeDate,
                  c.format,
                  c.formatter,
                  c.encodeValuesOnly,
                  c.charset,
                  h,
                ),
              );
          }
          var w = f.join(c.delimiter),
            x = !0 === c.addQueryPrefix ? '?' : '';
          return (
            c.charsetSentinel &&
              ('iso-8859-1' === c.charset
                ? (x += 'utf8=%26%2310003%3B&')
                : (x += 'utf8=%E2%9C%93&')),
            w.length > 0 ? x + w : ''
          );
        };
      },
      37748: (e, t, r) => {
        'use strict';
        var n = r(83949),
          o = Object.prototype.hasOwnProperty,
          i = Array.isArray,
          a = (function() {
            for (var e = [], t = 0; t < 256; ++t)
              e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
            return e;
          })(),
          l = function(e, t) {
            for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n)
              void 0 !== e[n] && (r[n] = e[n]);
            return r;
          };
        e.exports = {
          arrayToObject: l,
          assign: function(e, t) {
            return Object.keys(t).reduce(function(e, r) {
              return (e[r] = t[r]), e;
            }, e);
          },
          combine: function(e, t) {
            return [].concat(e, t);
          },
          compact: function(e) {
            for (var t = [{ obj: { o: e }, prop: 'o' }], r = [], n = 0; n < t.length; ++n)
              for (var o = t[n], a = o.obj[o.prop], l = Object.keys(a), p = 0; p < l.length; ++p) {
                var c = l[p],
                  u = a[c];
                'object' == typeof u &&
                  null !== u &&
                  -1 === r.indexOf(u) &&
                  (t.push({ obj: a, prop: c }), r.push(u));
              }
            return (
              (function(e) {
                for (; e.length > 1; ) {
                  var t = e.pop(),
                    r = t.obj[t.prop];
                  if (i(r)) {
                    for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                    t.obj[t.prop] = n;
                  }
                }
              })(t),
              e
            );
          },
          decode: function(e, t, r) {
            var n = e.replace(/\+/g, ' ');
            if ('iso-8859-1' === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(n);
            } catch (e) {
              return n;
            }
          },
          encode: function(e, t, r, o, i) {
            if (0 === e.length) return e;
            var l = e;
            if (
              ('symbol' == typeof e
                ? (l = Symbol.prototype.toString.call(e))
                : 'string' != typeof e && (l = String(e)),
              'iso-8859-1' === r)
            )
              return escape(l).replace(/%u[0-9a-f]{4}/gi, function(e) {
                return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
              });
            for (var p = '', c = 0; c < l.length; ++c) {
              var u = l.charCodeAt(c);
              45 === u ||
              46 === u ||
              95 === u ||
              126 === u ||
              (u >= 48 && u <= 57) ||
              (u >= 65 && u <= 90) ||
              (u >= 97 && u <= 122) ||
              (i === n.RFC1738 && (40 === u || 41 === u))
                ? (p += l.charAt(c))
                : u < 128
                ? (p += a[u])
                : u < 2048
                ? (p += a[192 | (u >> 6)] + a[128 | (63 & u)])
                : u < 55296 || u >= 57344
                ? (p += a[224 | (u >> 12)] + a[128 | ((u >> 6) & 63)] + a[128 | (63 & u)])
                : ((c += 1),
                  (u = 65536 + (((1023 & u) << 10) | (1023 & l.charCodeAt(c)))),
                  (p +=
                    a[240 | (u >> 18)] +
                    a[128 | ((u >> 12) & 63)] +
                    a[128 | ((u >> 6) & 63)] +
                    a[128 | (63 & u)]));
            }
            return p;
          },
          isBuffer: function(e) {
            return !(
              !e ||
              'object' != typeof e ||
              !(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
            );
          },
          isRegExp: function(e) {
            return '[object RegExp]' === Object.prototype.toString.call(e);
          },
          maybeMap: function(e, t) {
            if (i(e)) {
              for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
              return r;
            }
            return t(e);
          },
          merge: function e(t, r, n) {
            if (!r) return t;
            if ('object' != typeof r) {
              if (i(t)) t.push(r);
              else {
                if (!t || 'object' != typeof t) return [t, r];
                ((n && (n.plainObjects || n.allowPrototypes)) || !o.call(Object.prototype, r)) &&
                  (t[r] = !0);
              }
              return t;
            }
            if (!t || 'object' != typeof t) return [t].concat(r);
            var a = t;
            return (
              i(t) && !i(r) && (a = l(t, n)),
              i(t) && i(r)
                ? (r.forEach(function(r, i) {
                    if (o.call(t, i)) {
                      var a = t[i];
                      a && 'object' == typeof a && r && 'object' == typeof r
                        ? (t[i] = e(a, r, n))
                        : t.push(r);
                    } else t[i] = r;
                  }),
                  t)
                : Object.keys(r).reduce(function(t, i) {
                    var a = r[i];
                    return o.call(t, i) ? (t[i] = e(t[i], a, n)) : (t[i] = a), t;
                  }, a)
            );
          },
        };
      },
      92293: (e, t, r) => {
        'use strict';
        var n = r(99196),
          o = Symbol.for('react.element'),
          i = Symbol.for('react.fragment'),
          a = Object.prototype.hasOwnProperty,
          l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          p = { key: !0, ref: !0, __self: !0, __source: !0 };
        (t.Fragment = i),
          (t.jsx = function(e, t, r) {
            var n,
              i = {},
              c = null,
              u = null;
            for (n in (void 0 !== r && (c = '' + r),
            void 0 !== t.key && (c = '' + t.key),
            void 0 !== t.ref && (u = t.ref),
            t))
              a.call(t, n) && !p.hasOwnProperty(n) && (i[n] = t[n]);
            if (e && e.defaultProps)
              for (n in (t = e.defaultProps)) void 0 === i[n] && (i[n] = t[n]);
            return { $$typeof: o, type: e, key: c, ref: u, props: i, _owner: l.current };
          });
      },
      31549: (e, t, r) => {
        'use strict';
        e.exports = r(92293);
      },
      71138: (e, t, r) => {
        'use strict';
        var n = r(9523),
          o = r(11131),
          i = r(97547)(),
          a = r(98158),
          l = n('%TypeError%'),
          p = n('%Math.floor%');
        e.exports = function(e, t) {
          if ('function' != typeof e) throw new l('`fn` is not a function');
          if ('number' != typeof t || t < 0 || t > 4294967295 || p(t) !== t)
            throw new l('`length` must be a positive 32-bit integer');
          var r = arguments.length > 2 && !!arguments[2],
            n = !0,
            c = !0;
          if ('length' in e && a) {
            var u = a(e, 'length');
            u && !u.configurable && (n = !1), u && !u.writable && (c = !1);
          }
          return (n || c || !r) && (i ? o(e, 'length', t, !0, !0) : o(e, 'length', t)), e;
        };
      },
      44852: (e, t, r) => {
        'use strict';
        var n = r(9523),
          o = r(67639),
          i = r(94527),
          a = n('%TypeError%'),
          l = n('%WeakMap%', !0),
          p = n('%Map%', !0),
          c = o('WeakMap.prototype.get', !0),
          u = o('WeakMap.prototype.set', !0),
          s = o('WeakMap.prototype.has', !0),
          f = o('Map.prototype.get', !0),
          y = o('Map.prototype.set', !0),
          m = o('Map.prototype.has', !0),
          d = function(e, t) {
            for (var r, n = e; null !== (r = n.next); n = r)
              if (r.key === t) return (n.next = r.next), (r.next = e.next), (e.next = r), r;
          };
        e.exports = function() {
          var e,
            t,
            r,
            n = {
              assert: function(e) {
                if (!n.has(e)) throw new a('Side channel does not contain ' + i(e));
              },
              get: function(n) {
                if (l && n && ('object' == typeof n || 'function' == typeof n)) {
                  if (e) return c(e, n);
                } else if (p) {
                  if (t) return f(t, n);
                } else if (r)
                  return (function(e, t) {
                    var r = d(e, t);
                    return r && r.value;
                  })(r, n);
              },
              has: function(n) {
                if (l && n && ('object' == typeof n || 'function' == typeof n)) {
                  if (e) return s(e, n);
                } else if (p) {
                  if (t) return m(t, n);
                } else if (r)
                  return (function(e, t) {
                    return !!d(e, t);
                  })(r, n);
                return !1;
              },
              set: function(n, o) {
                l && n && ('object' == typeof n || 'function' == typeof n)
                  ? (e || (e = new l()), u(e, n, o))
                  : p
                  ? (t || (t = new p()), y(t, n, o))
                  : (r || (r = { key: {}, next: null }),
                    (function(e, t, r) {
                      var n = d(e, t);
                      n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
                    })(r, n, o));
              },
            };
          return n;
        };
      },
      99196: e => {
        'use strict';
        e.exports = window.React;
      },
      93452: () => {},
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var n = {};
  (() => {
    'use strict';
    r.r(n),
      r.d(n, {
        Experiment: () => q,
        ExperimentWithAuth: () => Z,
        ProvideExperimentData: () => H,
        ProvideExperimentDataWithAuth: () => K,
        dangerouslyGetExperimentAssignment: () => G,
        dangerouslyGetExperimentAssignmentWithAuth: () => Q,
        initializeExPlat: () => B,
        loadExperimentAssignment: () => $,
        loadExperimentAssignmentWithAuth: () => J,
        useExperiment: () => z,
        useExperimentWithAuth: () => Y,
      });
    const e = 1e3;
    let t = Date.now();
    function o() {
      const e = Date.now();
      return (t = t < e ? e : t + 1), t;
    }
    function i(t) {
      return o() < t.ttl * e + t.retrievedTimestamp;
    }
    const a = (e, t = 60) => ({
      experimentName: e,
      variationName: null,
      retrievedTimestamp: o(),
      ttl: Math.max(60, t),
      isFallbackExperimentAssignment: !0,
    });
    let l = {
      _data: {},
      setItem: function(e, t) {
        this._data[e] = t;
      },
      getItem: function(e) {
        return this._data.hasOwnProperty(e) ? this._data[e] : null;
      },
      removeItem: function(e) {
        delete this._data[e];
      },
      clear: function() {
        this._data = {};
      },
      get length() {
        return Object.keys(this._data).length;
      },
      key: function(e) {
        const t = Object.keys(this._data);
        return e in t ? t[e] : null;
      },
    };
    try {
      window.localStorage && (l = window.localStorage);
    } catch (e) {}
    const p = l;
    function c(e) {
      return 'object' == typeof e && null !== e;
    }
    function u(e) {
      return 'string' == typeof e && '' !== e && /^[a-z0-9_]*$/.test(e);
    }
    function s(e) {
      if (
        !(function(e) {
          return (
            c(e) &&
            u(e.experimentName) &&
            (u(e.variationName) || null === e.variationName) &&
            'number' == typeof e.retrievedTimestamp &&
            'number' == typeof e.ttl &&
            0 !== e.ttl
          );
        })(e)
      )
        throw new Error('Invalid ExperimentAssignment');
      return e;
    }
    const f = 'explat-experiment-',
      y = e => `${f}-${e}`;
    function m(e) {
      s(e);
      const t = d(e.experimentName);
      if (t && e.retrievedTimestamp < t.retrievedTimestamp)
        throw new Error(
          'Trying to store an older experiment assignment than is present in the store, likely a race condition.',
        );
      p.setItem(y(e.experimentName), JSON.stringify(e));
    }
    function d(e) {
      const t = p.getItem(y(e));
      if (t) return s(JSON.parse(t));
    }
    function g(e) {
      return e.startsWith(f);
    }
    function h(e) {
      return e.slice(f.length + 1);
    }
    function b() {
      var e;
      ((e = p.length), [...Array(e).keys()])
        .map(e => p.key(e))
        .filter(g)
        .map(h)
        .filter(e => {
          try {
            if (i(d(e))) return !1;
          } catch (e) {}
          return !0;
        })
        .map(y)
        .map(e => p.removeItem(e));
    }
    const v = 'explat-last-anon-id',
      w = 'explat-last-anon-id-retrieval-time',
      x = async e => {
        const t = await e();
        if (t) return p.setItem(v, t), p.setItem(w, String(o())), t;
        const r = p.getItem(v),
          n = p.getItem(w);
        return r && n && o() - parseInt(n, 10) < 864e5 ? r : null;
      },
      S =
        'undefined' == typeof window
          ? function(e) {
              return {
                loadExperimentAssignment: async t => (
                  e.logError({
                    message: 'Attempting to load ExperimentAssignment in SSR context',
                    experimentName: t,
                  }),
                  a(t)
                ),
                dangerouslyGetExperimentAssignment: t => (
                  e.logError({
                    message: 'Attempting to dangerously get ExperimentAssignment in SSR context',
                    experimentName: t,
                  }),
                  a(t)
                ),
                config: e,
              };
            }
          : function(e) {
              if ('undefined' == typeof window)
                throw new Error('Running outside of a browser context.');
              const t = t =>
                  (function(r) {
                    let n = null;
                    return () => (
                      n ||
                        (n = (async () => {
                          const r = await (async function(e, t) {
                            const r = o(),
                              { variations: n, ttl: l } = (function(e) {
                                if (
                                  (function(e) {
                                    return (
                                      c(e) &&
                                      c(e.variations) &&
                                      'number' == typeof e.ttl &&
                                      0 < e.ttl
                                    );
                                  })(e)
                                )
                                  return e;
                                throw new Error('Invalid FetchExperimentAssignmentResponse');
                              })(
                                await e.fetchExperimentAssignment({
                                  anonId: await x(e.getAnonId),
                                  experimentName: t,
                                }),
                              ),
                              p = Math.max(60, l),
                              u = Object.entries(n)
                                .map(([e, t]) => ({
                                  experimentName: e,
                                  variationName: t,
                                  retrievedTimestamp: r,
                                  ttl: p,
                                }))
                                .map(s);
                            if (u.length > 1)
                              throw new Error(
                                'Received multiple experiment assignments while trying to fetch exactly one.',
                              );
                            if (0 === u.length) return a(t, p);
                            const f = u[0];
                            if (f.experimentName !== t)
                              throw new Error(
                                "Newly fetched ExperimentAssignment's experiment name does not match request.",
                              );
                            if (!i(f)) throw new Error("Newly fetched experiment isn't alive.");
                            return f;
                          })(e, t);
                          return m(r), r;
                        })().finally(() => {
                          n = null;
                        })),
                      n
                    );
                  })(),
                r = {},
                n = (...t) => {
                  try {
                    e.logError(...t);
                  } catch (e) {}
                };
              try {
                b();
              } catch (e) {
                n({ message: e.message, source: 'removeExpiredExperimentAssignments-error' });
              }
              return {
                loadExperimentAssignment: async e => {
                  try {
                    if (!u(e)) throw new Error(`Invalid experimentName: "${e}"`);
                    const n = d(e);
                    if (n && i(n)) return n;
                    void 0 === r[e] && (r[e] = t(e));
                    let a = 1e4;
                    Math.random() > 0.5 && (a = 5e3);
                    const p = await ((o = r[e]()),
                    (l = a),
                    Promise.race([
                      o,
                      new Promise((e, t) =>
                        setTimeout(() => t(new Error(`Promise has timed-out after ${l}ms.`)), l),
                      ),
                    ]));
                    if (!p) throw new Error('Could not fetch ExperimentAssignment');
                    return p;
                  } catch (t) {
                    n({
                      message: t.message,
                      experimentName: e,
                      source: 'loadExperimentAssignment-initialError',
                    });
                  }
                  var o, l;
                  try {
                    const t = d(e);
                    if (t) return t;
                    const r = a(e);
                    return m(r), r;
                  } catch (t) {
                    return (
                      n({
                        message: t.message,
                        experimentName: e,
                        source: 'loadExperimentAssignment-fallbackError',
                      }),
                      a(e)
                    );
                  }
                },
                dangerouslyGetExperimentAssignment: t => {
                  try {
                    if (!u(t)) throw new Error(`Invalid experimentName: ${t}`);
                    const r = d(t);
                    if (!r)
                      throw new Error(
                        "Trying to dangerously get an ExperimentAssignment that hasn't loaded.",
                      );
                    return (
                      e.isDevelopmentMode &&
                        r &&
                        o() - r.retrievedTimestamp < 1e3 &&
                        n({
                          message:
                            'Warning: Trying to dangerously get an ExperimentAssignment too soon after loading it.',
                          experimentName: t,
                          source: 'dangerouslyGetExperimentAssignment',
                        }),
                      r
                    );
                  } catch (r) {
                    return (
                      e.isDevelopmentMode &&
                        n({
                          message: r.message,
                          experimentName: t,
                          source: 'dangerouslyGetExperimentAssignment-error',
                        }),
                      a(t)
                    );
                  }
                },
                config: e,
              };
            };
    var E = r(31549),
      A = r(99196);
    const j = { isEligible: !0 };
    function O(e) {
      const t = (t, r = {}) => {
        const n = { ...j, ...r },
          [o] = (0, A.useState)(t),
          [i, a] = (0, A.useState)([!0, null]);
        return (
          (0, A.useEffect)(() => {
            let r = !0;
            return (
              n.isEligible &&
                e.loadExperimentAssignment(t).then(e => {
                  r && a([!1, e]);
                }),
              () => {
                r = !1;
              }
            );
          }, [t, n.isEligible]),
          t === o ||
            o.startsWith('explat_test') ||
            e.config.logError({
              message:
                '[ExPlat] useExperiment: experimentName should never change between renders!',
            }),
          n.isEligible ? i : [!1, null]
        );
      };
      return {
        useExperiment: t,
        Experiment: ({
          defaultExperience: e,
          treatmentExperience: r,
          loadingExperience: n,
          name: o,
          options: i,
        }) => {
          const [a, l] = t(o, i);
          return a
            ? (0, E.jsx)(E.Fragment, { children: n })
            : l?.variationName
            ? (0, E.jsx)(E.Fragment, { children: r })
            : (0, E.jsx)(E.Fragment, { children: e });
        },
        ProvideExperimentData: ({ children: e, name: r, options: n }) => {
          const [o, i] = t(r, n);
          return e(o, i);
        },
      };
    }
    const P = !1,
      _ = e => {
        var t, r;
        const n = e => {};
        try {
          const { message: o, ...i } = e,
            a = {
              message: o,
              properties: { ...i, context: 'explat', explat_client: 'woocommerce' },
            };
          {
            if (
              !(null === (t = window.wcTracks) || void 0 === t ? void 0 : t.isEnabled) &&
              !(null === (r = null === window || void 0 === window ? void 0 : window._wca) ||
              void 0 === r
                ? void 0
                : r.push)
            )
              throw new Error("Tracking is disabled, can't send error to the server");
            const e = new window.FormData();
            e.append('error', JSON.stringify(a)),
              window
                .fetch('https://public-api.wordpress.com/rest/v1.1/js-error', {
                  method: 'POST',
                  body: e,
                })
                .catch(n);
          }
        } catch (e) {}
      };
    var I = r(67905);
    const N = window.wp.hooks,
      k = window.wp.apiFetch;
    var T,
      R,
      F = r.n(k);
    const M =
        (null === (T = window.wcTracks) || void 0 === T ? void 0 : T.isEnabled) ||
        void 0 !==
          (null === (R = null === window || void 0 === window ? void 0 : window._wca) ||
          void 0 === R
            ? void 0
            : R.push),
      D = ({ experimentName: e, anonId: t }) => {
        var r, n, o, i, a, l, p, c, u, s;
        const f = (0, N.applyFilters)('woocommerce_explat_request_args', {
          experiment_name: e,
          anon_id: null != t ? t : void 0,
          woo_country_code:
            (null ===
              (o =
                null ===
                  (n =
                    null === (r = window.wcSettings) || void 0 === r
                      ? void 0
                      : r.preloadSettings) || void 0 === n
                  ? void 0
                  : n.general) || void 0 === o
              ? void 0
              : o.woocommerce_default_country) ||
            (null ===
              (p =
                null ===
                  (l =
                    null ===
                      (a = null === (i = window.wcSettings) || void 0 === i ? void 0 : i.admin) ||
                    void 0 === a
                      ? void 0
                      : a.preloadSettings) || void 0 === l
                  ? void 0
                  : l.general) || void 0 === p
              ? void 0
              : p.woocommerce_default_country),
          woo_wcadmin_install_timestamp:
            null ===
              (s =
                null ===
                  (u = null === (c = window.wcSettings) || void 0 === c ? void 0 : c.admin) ||
                void 0 === u
                  ? void 0
                  : u.preloadOptions) || void 0 === s
              ? void 0
              : s.woocommerce_admin_install_timestamp,
        });
        if (
          !(e =>
            e.hasOwnProperty('experiment_name') &&
            e.hasOwnProperty('woo_country_code') &&
            e.hasOwnProperty('woo_wcadmin_install_timestamp'))(f)
        )
          throw new Error(`Invalid query Params: ${JSON.stringify(f)}`);
        if (!/^[A-Za-z0-9_]+$/.test(f.experiment_name))
          throw new Error(`Invalid A/B test name: ${f.experiment_name}`);
        return f;
      };
    var U = r(6922);
    let W = null;
    const C = async () => (M ? await W : null),
      B = () => {
        M &&
          (async () => {
            let e = 0;
            return (
              (W = new Promise(t => {
                const r = () => {
                  const n = U.parse(document.cookie).tk_ai || null;
                  'string' != typeof n || '' === n
                    ? 99 <= e
                      ? t(null)
                      : ((e += 1), setTimeout(r, 50))
                    : t(n);
                };
                r();
              })),
              W
            );
          })().catch(e => _({ message: e.message }));
      };
    B();
    const L = S({
        fetchExperimentAssignment: async ({ experimentName: e, anonId: t }) => {
          if (!M) throw new Error("Tracking is disabled, can't fetch experimentAssignment");
          const r = D({ experimentName: e, anonId: t });
          if (!r.anon_id)
            throw new Error(
              "Can't fetch experiment assignment without an anonId or auth, please initialize anonId first or use fetchExperimentAssignmentWithAuth instead.",
            );
          const n = await window.fetch(
            `https://public-api.wordpress.com/wpcom/v2/experiments/0.1.0/assignments/woocommerce?${(0,
            I.stringify)(r)}`,
          );
          return await n.json();
        },
        getAnonId: C,
        logError: _,
        isDevelopmentMode: P,
      }),
      { loadExperimentAssignment: $, dangerouslyGetExperimentAssignment: G } = L,
      { useExperiment: z, Experiment: q, ProvideExperimentData: H } = O(L),
      V = S({
        fetchExperimentAssignment: async ({ experimentName: e, anonId: t }) => {
          if (!M) throw new Error("Tracking is disabled, can't fetch experimentAssignment");
          return await F()({
            path: `/wc-admin/experiments/assignment?${(0, I.stringify)(
              D({ experimentName: e, anonId: t }),
            )}`,
          });
        },
        getAnonId: C,
        logError: _,
        isDevelopmentMode: P,
      }),
      { loadExperimentAssignment: J, dangerouslyGetExperimentAssignment: Q } = V,
      { useExperiment: Y, Experiment: Z, ProvideExperimentData: K } = O(V);
  })(),
    ((window.wc = window.wc || {}).explat = n);
})();
