/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      67639: (e, t, r) => {
        'use strict';
        var o = r(9523),
          n = r(72248),
          s = n(o('String.prototype.indexOf'));
        e.exports = function(e, t) {
          var r = o(e, !!t);
          return 'function' == typeof r && s(e, '.prototype.') > -1 ? n(r) : r;
        };
      },
      72248: (e, t, r) => {
        'use strict';
        var o = r(2073),
          n = r(9523),
          s = r(71138),
          i = n('%TypeError%'),
          a = n('%Function.prototype.apply%'),
          c = n('%Function.prototype.call%'),
          u = n('%Reflect.apply%', !0) || o.call(c, a),
          l = n('%Object.defineProperty%', !0),
          E = n('%Math.max%');
        if (l)
          try {
            l({}, 'a', { value: 1 });
          } catch (e) {
            l = null;
          }
        e.exports = function(e) {
          if ('function' != typeof e) throw new i('a function is required');
          var t = u(o, c, arguments);
          return s(t, 1 + E(0, e.length - (arguments.length - 1)), !0);
        };
        var d = function() {
          return u(o, a, arguments);
        };
        l ? l(e.exports, 'apply', { value: d }) : (e.exports.apply = d);
      },
      29203: e => {
        var t = {
          utf8: {
            stringToBytes: function(e) {
              return t.bin.stringToBytes(unescape(encodeURIComponent(e)));
            },
            bytesToString: function(e) {
              return decodeURIComponent(escape(t.bin.bytesToString(e)));
            },
          },
          bin: {
            stringToBytes: function(e) {
              for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
              return t;
            },
            bytesToString: function(e) {
              for (var t = [], r = 0; r < e.length; r++) t.push(String.fromCharCode(e[r]));
              return t.join('');
            },
          },
        };
        e.exports = t;
      },
      54274: e => {
        var t, r;
        (t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'),
          (r = {
            rotl: function(e, t) {
              return (e << t) | (e >>> (32 - t));
            },
            rotr: function(e, t) {
              return (e << (32 - t)) | (e >>> t);
            },
            endian: function(e) {
              if (e.constructor == Number)
                return (16711935 & r.rotl(e, 8)) | (4278255360 & r.rotl(e, 24));
              for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]);
              return e;
            },
            randomBytes: function(e) {
              for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
              return t;
            },
            bytesToWords: function(e) {
              for (var t = [], r = 0, o = 0; r < e.length; r++, o += 8)
                t[o >>> 5] |= e[r] << (24 - (o % 32));
              return t;
            },
            wordsToBytes: function(e) {
              for (var t = [], r = 0; r < 32 * e.length; r += 8)
                t.push((e[r >>> 5] >>> (24 - (r % 32))) & 255);
              return t;
            },
            bytesToHex: function(e) {
              for (var t = [], r = 0; r < e.length; r++)
                t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
              return t.join('');
            },
            hexToBytes: function(e) {
              for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
              return t;
            },
            bytesToBase64: function(e) {
              for (var r = [], o = 0; o < e.length; o += 3)
                for (var n = (e[o] << 16) | (e[o + 1] << 8) | e[o + 2], s = 0; s < 4; s++)
                  8 * o + 6 * s <= 8 * e.length
                    ? r.push(t.charAt((n >>> (6 * (3 - s))) & 63))
                    : r.push('=');
              return r.join('');
            },
            base64ToBytes: function(e) {
              e = e.replace(/[^A-Z0-9+\/]/gi, '');
              for (var r = [], o = 0, n = 0; o < e.length; n = ++o % 4)
                0 != n &&
                  r.push(
                    ((t.indexOf(e.charAt(o - 1)) & (Math.pow(2, -2 * n + 8) - 1)) << (2 * n)) |
                      (t.indexOf(e.charAt(o)) >>> (6 - 2 * n)),
                  );
              return r;
            },
          }),
          (e.exports = r);
      },
      11131: (e, t, r) => {
        'use strict';
        var o = r(97547)(),
          n = r(9523),
          s = o && n('%Object.defineProperty%', !0);
        if (s)
          try {
            s({}, 'a', { value: 1 });
          } catch (e) {
            s = !1;
          }
        var i = n('%SyntaxError%'),
          a = n('%TypeError%'),
          c = r(98158);
        e.exports = function(e, t, r) {
          if (!e || ('object' != typeof e && 'function' != typeof e))
            throw new a('`obj` must be an object or a function`');
          if ('string' != typeof t && 'symbol' != typeof t)
            throw new a('`property` must be a string or a symbol`');
          if (arguments.length > 3 && 'boolean' != typeof arguments[3] && null !== arguments[3])
            throw new a('`nonEnumerable`, if provided, must be a boolean or null');
          if (arguments.length > 4 && 'boolean' != typeof arguments[4] && null !== arguments[4])
            throw new a('`nonWritable`, if provided, must be a boolean or null');
          if (arguments.length > 5 && 'boolean' != typeof arguments[5] && null !== arguments[5])
            throw new a('`nonConfigurable`, if provided, must be a boolean or null');
          if (arguments.length > 6 && 'boolean' != typeof arguments[6])
            throw new a('`loose`, if provided, must be a boolean');
          var o = arguments.length > 3 ? arguments[3] : null,
            n = arguments.length > 4 ? arguments[4] : null,
            u = arguments.length > 5 ? arguments[5] : null,
            l = arguments.length > 6 && arguments[6],
            E = !!c && c(e, t);
          if (s)
            s(e, t, {
              configurable: null === u && E ? E.configurable : !u,
              enumerable: null === o && E ? E.enumerable : !o,
              value: r,
              writable: null === n && E ? E.writable : !n,
            });
          else {
            if (!l && (o || n || u))
              throw new i(
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
          o = function(e, t) {
            for (var r = [], o = 0; o < e.length; o += 1) r[o] = e[o];
            for (var n = 0; n < t.length; n += 1) r[n + e.length] = t[n];
            return r;
          };
        e.exports = function(e) {
          var n = this;
          if ('function' != typeof n || '[object Function]' !== t.apply(n))
            throw new TypeError('Function.prototype.bind called on incompatible ' + n);
          for (
            var s,
              i = (function(e, t) {
                for (var r = [], o = 1, n = 0; o < e.length; o += 1, n += 1) r[n] = e[o];
                return r;
              })(arguments),
              a = r(0, n.length - i.length),
              c = [],
              u = 0;
            u < a;
            u++
          )
            c[u] = '$' + u;
          if (
            ((s = Function(
              'binder',
              'return function (' +
                (function(e, t) {
                  for (var r = '', o = 0; o < e.length; o += 1)
                    (r += e[o]), o + 1 < e.length && (r += ',');
                  return r;
                })(c) +
                '){ return binder.apply(this,arguments); }',
            )(function() {
              if (this instanceof s) {
                var t = n.apply(this, o(i, arguments));
                return Object(t) === t ? t : this;
              }
              return n.apply(e, o(i, arguments));
            })),
            n.prototype)
          ) {
            var l = function() {};
            (l.prototype = n.prototype), (s.prototype = new l()), (l.prototype = null);
          }
          return s;
        };
      },
      2073: (e, t, r) => {
        'use strict';
        var o = r(92888);
        e.exports = Function.prototype.bind || o;
      },
      9523: (e, t, r) => {
        'use strict';
        var o,
          n = SyntaxError,
          s = Function,
          i = TypeError,
          a = function(e) {
            try {
              return s('"use strict"; return (' + e + ').constructor;')();
            } catch (e) {}
          },
          c = Object.getOwnPropertyDescriptor;
        if (c)
          try {
            c({}, '');
          } catch (e) {
            c = null;
          }
        var u = function() {
            throw new i();
          },
          l = c
            ? (function() {
                try {
                  return u;
                } catch (e) {
                  try {
                    return c(arguments, 'callee').get;
                  } catch (e) {
                    return u;
                  }
                }
              })()
            : u,
          E = r(72770)(),
          d = r(57877)(),
          p =
            Object.getPrototypeOf ||
            (d
              ? function(e) {
                  return e.__proto__;
                }
              : null),
          T = {},
          S = 'undefined' != typeof Uint8Array && p ? p(Uint8Array) : o,
          _ = {
            '%AggregateError%': 'undefined' == typeof AggregateError ? o : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? o : ArrayBuffer,
            '%ArrayIteratorPrototype%': E && p ? p([][Symbol.iterator]()) : o,
            '%AsyncFromSyncIteratorPrototype%': o,
            '%AsyncFunction%': T,
            '%AsyncGenerator%': T,
            '%AsyncGeneratorFunction%': T,
            '%AsyncIteratorPrototype%': T,
            '%Atomics%': 'undefined' == typeof Atomics ? o : Atomics,
            '%BigInt%': 'undefined' == typeof BigInt ? o : BigInt,
            '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? o : BigInt64Array,
            '%BigUint64Array%': 'undefined' == typeof BigUint64Array ? o : BigUint64Array,
            '%Boolean%': Boolean,
            '%DataView%': 'undefined' == typeof DataView ? o : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': 'undefined' == typeof Float32Array ? o : Float32Array,
            '%Float64Array%': 'undefined' == typeof Float64Array ? o : Float64Array,
            '%FinalizationRegistry%':
              'undefined' == typeof FinalizationRegistry ? o : FinalizationRegistry,
            '%Function%': s,
            '%GeneratorFunction%': T,
            '%Int8Array%': 'undefined' == typeof Int8Array ? o : Int8Array,
            '%Int16Array%': 'undefined' == typeof Int16Array ? o : Int16Array,
            '%Int32Array%': 'undefined' == typeof Int32Array ? o : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': E && p ? p(p([][Symbol.iterator]())) : o,
            '%JSON%': 'object' == typeof JSON ? JSON : o,
            '%Map%': 'undefined' == typeof Map ? o : Map,
            '%MapIteratorPrototype%':
              'undefined' != typeof Map && E && p ? p(new Map()[Symbol.iterator]()) : o,
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': 'undefined' == typeof Promise ? o : Promise,
            '%Proxy%': 'undefined' == typeof Proxy ? o : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': 'undefined' == typeof Reflect ? o : Reflect,
            '%RegExp%': RegExp,
            '%Set%': 'undefined' == typeof Set ? o : Set,
            '%SetIteratorPrototype%':
              'undefined' != typeof Set && E && p ? p(new Set()[Symbol.iterator]()) : o,
            '%SharedArrayBuffer%': 'undefined' == typeof SharedArrayBuffer ? o : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': E && p ? p(''[Symbol.iterator]()) : o,
            '%Symbol%': E ? Symbol : o,
            '%SyntaxError%': n,
            '%ThrowTypeError%': l,
            '%TypedArray%': S,
            '%TypeError%': i,
            '%Uint8Array%': 'undefined' == typeof Uint8Array ? o : Uint8Array,
            '%Uint8ClampedArray%': 'undefined' == typeof Uint8ClampedArray ? o : Uint8ClampedArray,
            '%Uint16Array%': 'undefined' == typeof Uint16Array ? o : Uint16Array,
            '%Uint32Array%': 'undefined' == typeof Uint32Array ? o : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': 'undefined' == typeof WeakMap ? o : WeakMap,
            '%WeakRef%': 'undefined' == typeof WeakRef ? o : WeakRef,
            '%WeakSet%': 'undefined' == typeof WeakSet ? o : WeakSet,
          };
        if (p)
          try {
            null.error;
          } catch (e) {
            var y = p(p(e));
            _['%Error.prototype%'] = y;
          }
        var f = function e(t) {
            var r;
            if ('%AsyncFunction%' === t) r = a('async function () {}');
            else if ('%GeneratorFunction%' === t) r = a('function* () {}');
            else if ('%AsyncGeneratorFunction%' === t) r = a('async function* () {}');
            else if ('%AsyncGenerator%' === t) {
              var o = e('%AsyncGeneratorFunction%');
              o && (r = o.prototype);
            } else if ('%AsyncIteratorPrototype%' === t) {
              var n = e('%AsyncGenerator%');
              n && p && (r = p(n.prototype));
            }
            return (_[t] = r), r;
          },
          R = {
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
          g = r(2073),
          m = r(69990),
          O = g.call(Function.call, Array.prototype.concat),
          h = g.call(Function.apply, Array.prototype.splice),
          A = g.call(Function.call, String.prototype.replace),
          I = g.call(Function.call, String.prototype.slice),
          C = g.call(Function.call, RegExp.prototype.exec),
          P = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          U = /\\(\\)?/g,
          v = function(e, t) {
            var r,
              o = e;
            if ((m(R, o) && (o = '%' + (r = R[o])[0] + '%'), m(_, o))) {
              var s = _[o];
              if ((s === T && (s = f(o)), void 0 === s && !t))
                throw new i(
                  'intrinsic ' + e + ' exists, but is not available. Please file an issue!',
                );
              return { alias: r, name: o, value: s };
            }
            throw new n('intrinsic ' + e + ' does not exist!');
          };
        e.exports = function(e, t) {
          if ('string' != typeof e || 0 === e.length)
            throw new i('intrinsic name must be a non-empty string');
          if (arguments.length > 1 && 'boolean' != typeof t)
            throw new i('"allowMissing" argument must be a boolean');
          if (null === C(/^%?[^%]*%?$/, e))
            throw new n(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
            );
          var r = (function(e) {
              var t = I(e, 0, 1),
                r = I(e, -1);
              if ('%' === t && '%' !== r)
                throw new n('invalid intrinsic syntax, expected closing `%`');
              if ('%' === r && '%' !== t)
                throw new n('invalid intrinsic syntax, expected opening `%`');
              var o = [];
              return (
                A(e, P, function(e, t, r, n) {
                  o[o.length] = r ? A(n, U, '$1') : t || e;
                }),
                o
              );
            })(e),
            o = r.length > 0 ? r[0] : '',
            s = v('%' + o + '%', t),
            a = s.name,
            u = s.value,
            l = !1,
            E = s.alias;
          E && ((o = E[0]), h(r, O([0, 1], E)));
          for (var d = 1, p = !0; d < r.length; d += 1) {
            var T = r[d],
              S = I(T, 0, 1),
              y = I(T, -1);
            if (
              ('"' === S || "'" === S || '`' === S || '"' === y || "'" === y || '`' === y) &&
              S !== y
            )
              throw new n('property names with quotes must have matching quotes');
            if ((('constructor' !== T && p) || (l = !0), m(_, (a = '%' + (o += '.' + T) + '%'))))
              u = _[a];
            else if (null != u) {
              if (!(T in u)) {
                if (!t)
                  throw new i(
                    'base intrinsic for ' + e + ' exists, but the property is not available.',
                  );
                return;
              }
              if (c && d + 1 >= r.length) {
                var f = c(u, T);
                u = (p = !!f) && 'get' in f && !('originalValue' in f.get) ? f.get : u[T];
              } else (p = m(u, T)), (u = u[T]);
              p && !l && (_[a] = u);
            }
          }
          return u;
        };
      },
      98158: (e, t, r) => {
        'use strict';
        var o = r(9523)('%Object.getOwnPropertyDescriptor%', !0);
        if (o)
          try {
            o([], 'length');
          } catch (e) {
            o = null;
          }
        e.exports = o;
      },
      97547: (e, t, r) => {
        'use strict';
        var o = r(9523)('%Object.defineProperty%', !0),
          n = function() {
            if (o)
              try {
                return o({}, 'a', { value: 1 }), !0;
              } catch (e) {
                return !1;
              }
            return !1;
          };
        (n.hasArrayLengthDefineBug = function() {
          if (!n()) return null;
          try {
            return 1 !== o([], 'length', { value: 1 }).length;
          } catch (e) {
            return !0;
          }
        }),
          (e.exports = n);
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
        var o = 'undefined' != typeof Symbol && Symbol,
          n = r(69578);
        e.exports = function() {
          return (
            'function' == typeof o &&
            'function' == typeof Symbol &&
            'symbol' == typeof o('foo') &&
            'symbol' == typeof Symbol('bar') &&
            n()
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
          var o = Object.getOwnPropertySymbols(e);
          if (1 !== o.length || o[0] !== t) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
          if ('function' == typeof Object.getOwnPropertyDescriptor) {
            var n = Object.getOwnPropertyDescriptor(e, t);
            if (42 !== n.value || !0 !== n.enumerable) return !1;
          }
          return !0;
        };
      },
      69990: (e, t, r) => {
        'use strict';
        var o = Function.prototype.call,
          n = Object.prototype.hasOwnProperty,
          s = r(2073);
        e.exports = s.call(o, n);
      },
      17476: e => {
        function t(e) {
          return (
            !!e.constructor &&
            'function' == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        }
        e.exports = function(e) {
          return (
            null != e &&
            (t(e) ||
              (function(e) {
                return (
                  'function' == typeof e.readFloatLE &&
                  'function' == typeof e.slice &&
                  t(e.slice(0, 0))
                );
              })(e) ||
              !!e._isBuffer)
          );
        };
      },
      5681: (e, t, r) => {
        var o, n, s, i, a;
        (o = r(54274)),
          (n = r(29203).utf8),
          (s = r(17476)),
          (i = r(29203).bin),
          ((a = function(e, t) {
            e.constructor == String
              ? (e = t && 'binary' === t.encoding ? i.stringToBytes(e) : n.stringToBytes(e))
              : s(e)
              ? (e = Array.prototype.slice.call(e, 0))
              : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
            for (
              var r = o.bytesToWords(e),
                c = 8 * e.length,
                u = 1732584193,
                l = -271733879,
                E = -1732584194,
                d = 271733878,
                p = 0;
              p < r.length;
              p++
            )
              r[p] =
                (16711935 & ((r[p] << 8) | (r[p] >>> 24))) |
                (4278255360 & ((r[p] << 24) | (r[p] >>> 8)));
            (r[c >>> 5] |= 128 << c % 32), (r[14 + (((c + 64) >>> 9) << 4)] = c);
            var T = a._ff,
              S = a._gg,
              _ = a._hh,
              y = a._ii;
            for (p = 0; p < r.length; p += 16) {
              var f = u,
                R = l,
                g = E,
                m = d;
              (u = T(u, l, E, d, r[p + 0], 7, -680876936)),
                (d = T(d, u, l, E, r[p + 1], 12, -389564586)),
                (E = T(E, d, u, l, r[p + 2], 17, 606105819)),
                (l = T(l, E, d, u, r[p + 3], 22, -1044525330)),
                (u = T(u, l, E, d, r[p + 4], 7, -176418897)),
                (d = T(d, u, l, E, r[p + 5], 12, 1200080426)),
                (E = T(E, d, u, l, r[p + 6], 17, -1473231341)),
                (l = T(l, E, d, u, r[p + 7], 22, -45705983)),
                (u = T(u, l, E, d, r[p + 8], 7, 1770035416)),
                (d = T(d, u, l, E, r[p + 9], 12, -1958414417)),
                (E = T(E, d, u, l, r[p + 10], 17, -42063)),
                (l = T(l, E, d, u, r[p + 11], 22, -1990404162)),
                (u = T(u, l, E, d, r[p + 12], 7, 1804603682)),
                (d = T(d, u, l, E, r[p + 13], 12, -40341101)),
                (E = T(E, d, u, l, r[p + 14], 17, -1502002290)),
                (u = S(
                  u,
                  (l = T(l, E, d, u, r[p + 15], 22, 1236535329)),
                  E,
                  d,
                  r[p + 1],
                  5,
                  -165796510,
                )),
                (d = S(d, u, l, E, r[p + 6], 9, -1069501632)),
                (E = S(E, d, u, l, r[p + 11], 14, 643717713)),
                (l = S(l, E, d, u, r[p + 0], 20, -373897302)),
                (u = S(u, l, E, d, r[p + 5], 5, -701558691)),
                (d = S(d, u, l, E, r[p + 10], 9, 38016083)),
                (E = S(E, d, u, l, r[p + 15], 14, -660478335)),
                (l = S(l, E, d, u, r[p + 4], 20, -405537848)),
                (u = S(u, l, E, d, r[p + 9], 5, 568446438)),
                (d = S(d, u, l, E, r[p + 14], 9, -1019803690)),
                (E = S(E, d, u, l, r[p + 3], 14, -187363961)),
                (l = S(l, E, d, u, r[p + 8], 20, 1163531501)),
                (u = S(u, l, E, d, r[p + 13], 5, -1444681467)),
                (d = S(d, u, l, E, r[p + 2], 9, -51403784)),
                (E = S(E, d, u, l, r[p + 7], 14, 1735328473)),
                (u = _(
                  u,
                  (l = S(l, E, d, u, r[p + 12], 20, -1926607734)),
                  E,
                  d,
                  r[p + 5],
                  4,
                  -378558,
                )),
                (d = _(d, u, l, E, r[p + 8], 11, -2022574463)),
                (E = _(E, d, u, l, r[p + 11], 16, 1839030562)),
                (l = _(l, E, d, u, r[p + 14], 23, -35309556)),
                (u = _(u, l, E, d, r[p + 1], 4, -1530992060)),
                (d = _(d, u, l, E, r[p + 4], 11, 1272893353)),
                (E = _(E, d, u, l, r[p + 7], 16, -155497632)),
                (l = _(l, E, d, u, r[p + 10], 23, -1094730640)),
                (u = _(u, l, E, d, r[p + 13], 4, 681279174)),
                (d = _(d, u, l, E, r[p + 0], 11, -358537222)),
                (E = _(E, d, u, l, r[p + 3], 16, -722521979)),
                (l = _(l, E, d, u, r[p + 6], 23, 76029189)),
                (u = _(u, l, E, d, r[p + 9], 4, -640364487)),
                (d = _(d, u, l, E, r[p + 12], 11, -421815835)),
                (E = _(E, d, u, l, r[p + 15], 16, 530742520)),
                (u = y(
                  u,
                  (l = _(l, E, d, u, r[p + 2], 23, -995338651)),
                  E,
                  d,
                  r[p + 0],
                  6,
                  -198630844,
                )),
                (d = y(d, u, l, E, r[p + 7], 10, 1126891415)),
                (E = y(E, d, u, l, r[p + 14], 15, -1416354905)),
                (l = y(l, E, d, u, r[p + 5], 21, -57434055)),
                (u = y(u, l, E, d, r[p + 12], 6, 1700485571)),
                (d = y(d, u, l, E, r[p + 3], 10, -1894986606)),
                (E = y(E, d, u, l, r[p + 10], 15, -1051523)),
                (l = y(l, E, d, u, r[p + 1], 21, -2054922799)),
                (u = y(u, l, E, d, r[p + 8], 6, 1873313359)),
                (d = y(d, u, l, E, r[p + 15], 10, -30611744)),
                (E = y(E, d, u, l, r[p + 6], 15, -1560198380)),
                (l = y(l, E, d, u, r[p + 13], 21, 1309151649)),
                (u = y(u, l, E, d, r[p + 4], 6, -145523070)),
                (d = y(d, u, l, E, r[p + 11], 10, -1120210379)),
                (E = y(E, d, u, l, r[p + 2], 15, 718787259)),
                (l = y(l, E, d, u, r[p + 9], 21, -343485551)),
                (u = (u + f) >>> 0),
                (l = (l + R) >>> 0),
                (E = (E + g) >>> 0),
                (d = (d + m) >>> 0);
            }
            return o.endian([u, l, E, d]);
          })._ff = function(e, t, r, o, n, s, i) {
            var a = e + ((t & r) | (~t & o)) + (n >>> 0) + i;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._gg = function(e, t, r, o, n, s, i) {
            var a = e + ((t & o) | (r & ~o)) + (n >>> 0) + i;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._hh = function(e, t, r, o, n, s, i) {
            var a = e + (t ^ r ^ o) + (n >>> 0) + i;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._ii = function(e, t, r, o, n, s, i) {
            var a = e + (r ^ (t | ~o)) + (n >>> 0) + i;
            return ((a << s) | (a >>> (32 - s))) + t;
          }),
          (a._blocksize = 16),
          (a._digestsize = 16),
          (e.exports = function(e, t) {
            if (null == e) throw new Error('Illegal argument ' + e);
            var r = o.wordsToBytes(a(e, t));
            return t && t.asBytes ? r : t && t.asString ? i.bytesToString(r) : o.bytesToHex(r);
          });
      },
      94527: (e, t, r) => {
        var o = 'function' == typeof Map && Map.prototype,
          n =
            Object.getOwnPropertyDescriptor && o
              ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
              : null,
          s = o && n && 'function' == typeof n.get ? n.get : null,
          i = o && Map.prototype.forEach,
          a = 'function' == typeof Set && Set.prototype,
          c =
            Object.getOwnPropertyDescriptor && a
              ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
              : null,
          u = a && c && 'function' == typeof c.get ? c.get : null,
          l = a && Set.prototype.forEach,
          E = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
          d = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
          p = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
          T = Boolean.prototype.valueOf,
          S = Object.prototype.toString,
          _ = Function.prototype.toString,
          y = String.prototype.match,
          f = String.prototype.slice,
          R = String.prototype.replace,
          g = String.prototype.toUpperCase,
          m = String.prototype.toLowerCase,
          O = RegExp.prototype.test,
          h = Array.prototype.concat,
          A = Array.prototype.join,
          I = Array.prototype.slice,
          C = Math.floor,
          P = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
          U = Object.getOwnPropertySymbols,
          v =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? Symbol.prototype.toString
              : null,
          N = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
          D =
            'function' == typeof Symbol && Symbol.toStringTag && (Symbol.toStringTag, 1)
              ? Symbol.toStringTag
              : null,
          w = Object.prototype.propertyIsEnumerable,
          b =
            ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function(e) {
                  return e.__proto__;
                }
              : null);
        function k(e, t) {
          if (e === 1 / 0 || e === -1 / 0 || e != e || (e && e > -1e3 && e < 1e3) || O.call(/e/, t))
            return t;
          var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ('number' == typeof e) {
            var o = e < 0 ? -C(-e) : C(e);
            if (o !== e) {
              var n = String(o),
                s = f.call(t, n.length + 1);
              return R.call(n, r, '$&_') + '.' + R.call(R.call(s, /([0-9]{3})/g, '$&_'), /_$/, '');
            }
          }
          return R.call(t, r, '$&_');
        }
        var G = r(93452),
          M = G.custom,
          L = Q(M) ? M : null;
        function F(e, t, r) {
          var o = 'double' === (r.quoteStyle || t) ? '"' : "'";
          return o + e + o;
        }
        function q(e) {
          return R.call(String(e), /"/g, '&quot;');
        }
        function j(e) {
          return !('[object Array]' !== $(e) || (D && 'object' == typeof e && D in e));
        }
        function x(e) {
          return !('[object RegExp]' !== $(e) || (D && 'object' == typeof e && D in e));
        }
        function Q(e) {
          if (N) return e && 'object' == typeof e && e instanceof Symbol;
          if ('symbol' == typeof e) return !0;
          if (!e || 'object' != typeof e || !v) return !1;
          try {
            return v.call(e), !0;
          } catch (e) {}
          return !1;
        }
        e.exports = function e(t, o, n, a) {
          var c = o || {};
          if (V(c, 'quoteStyle') && 'single' !== c.quoteStyle && 'double' !== c.quoteStyle)
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
          if (
            V(c, 'maxStringLength') &&
            ('number' == typeof c.maxStringLength
              ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0
              : null !== c.maxStringLength)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
            );
          var S = !V(c, 'customInspect') || c.customInspect;
          if ('boolean' != typeof S && 'symbol' !== S)
            throw new TypeError(
              'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
            );
          if (
            V(c, 'indent') &&
            null !== c.indent &&
            '\t' !== c.indent &&
            !(parseInt(c.indent, 10) === c.indent && c.indent > 0)
          )
            throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
          if (V(c, 'numericSeparator') && 'boolean' != typeof c.numericSeparator)
            throw new TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`',
            );
          var g = c.numericSeparator;
          if (void 0 === t) return 'undefined';
          if (null === t) return 'null';
          if ('boolean' == typeof t) return t ? 'true' : 'false';
          if ('string' == typeof t) return Y(t, c);
          if ('number' == typeof t) {
            if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0';
            var O = String(t);
            return g ? k(t, O) : O;
          }
          if ('bigint' == typeof t) {
            var C = String(t) + 'n';
            return g ? k(t, C) : C;
          }
          var U = void 0 === c.depth ? 5 : c.depth;
          if ((void 0 === n && (n = 0), n >= U && U > 0 && 'object' == typeof t))
            return j(t) ? '[Array]' : '[Object]';
          var M,
            K = (function(e, t) {
              var r;
              if ('\t' === e.indent) r = '\t';
              else {
                if (!('number' == typeof e.indent && e.indent > 0)) return null;
                r = A.call(Array(e.indent + 1), ' ');
              }
              return { base: r, prev: A.call(Array(t + 1), r) };
            })(c, n);
          if (void 0 === a) a = [];
          else if (H(a, t) >= 0) return '[Circular]';
          function W(t, r, o) {
            if ((r && (a = I.call(a)).push(r), o)) {
              var s = { depth: c.depth };
              return V(c, 'quoteStyle') && (s.quoteStyle = c.quoteStyle), e(t, s, n + 1, a);
            }
            return e(t, c, n + 1, a);
          }
          if ('function' == typeof t && !x(t)) {
            var ee = (function(e) {
                if (e.name) return e.name;
                var t = y.call(_.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
              })(t),
              te = X(t, W);
            return (
              '[Function' +
              (ee ? ': ' + ee : ' (anonymous)') +
              ']' +
              (te.length > 0 ? ' { ' + A.call(te, ', ') + ' }' : '')
            );
          }
          if (Q(t)) {
            var re = N ? R.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : v.call(t);
            return 'object' != typeof t || N ? re : J(re);
          }
          if (
            (M = t) &&
            'object' == typeof M &&
            (('undefined' != typeof HTMLElement && M instanceof HTMLElement) ||
              ('string' == typeof M.nodeName && 'function' == typeof M.getAttribute))
          ) {
            for (
              var oe = '<' + m.call(String(t.nodeName)), ne = t.attributes || [], se = 0;
              se < ne.length;
              se++
            )
              oe += ' ' + ne[se].name + '=' + F(q(ne[se].value), 'double', c);
            return (
              (oe += '>'),
              t.childNodes && t.childNodes.length && (oe += '...'),
              oe + '</' + m.call(String(t.nodeName)) + '>'
            );
          }
          if (j(t)) {
            if (0 === t.length) return '[]';
            var ie = X(t, W);
            return K &&
              !(function(e) {
                for (var t = 0; t < e.length; t++) if (H(e[t], '\n') >= 0) return !1;
                return !0;
              })(ie)
              ? '[' + Z(ie, K) + ']'
              : '[ ' + A.call(ie, ', ') + ' ]';
          }
          if (
            (function(e) {
              return !('[object Error]' !== $(e) || (D && 'object' == typeof e && D in e));
            })(t)
          ) {
            var ae = X(t, W);
            return 'cause' in Error.prototype || !('cause' in t) || w.call(t, 'cause')
              ? 0 === ae.length
                ? '[' + String(t) + ']'
                : '{ [' + String(t) + '] ' + A.call(ae, ', ') + ' }'
              : '{ [' +
                  String(t) +
                  '] ' +
                  A.call(h.call('[cause]: ' + W(t.cause), ae), ', ') +
                  ' }';
          }
          if ('object' == typeof t && S) {
            if (L && 'function' == typeof t[L] && G) return G(t, { depth: U - n });
            if ('symbol' !== S && 'function' == typeof t.inspect) return t.inspect();
          }
          if (
            (function(e) {
              if (!s || !e || 'object' != typeof e) return !1;
              try {
                s.call(e);
                try {
                  u.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Map;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var ce = [];
            return (
              i &&
                i.call(t, function(e, r) {
                  ce.push(W(r, t, !0) + ' => ' + W(e, t));
                }),
              z('Map', s.call(t), ce, K)
            );
          }
          if (
            (function(e) {
              if (!u || !e || 'object' != typeof e) return !1;
              try {
                u.call(e);
                try {
                  s.call(e);
                } catch (e) {
                  return !0;
                }
                return e instanceof Set;
              } catch (e) {}
              return !1;
            })(t)
          ) {
            var ue = [];
            return (
              l &&
                l.call(t, function(e) {
                  ue.push(W(e, t));
                }),
              z('Set', u.call(t), ue, K)
            );
          }
          if (
            (function(e) {
              if (!E || !e || 'object' != typeof e) return !1;
              try {
                E.call(e, E);
                try {
                  d.call(e, d);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakMap;
              } catch (e) {}
              return !1;
            })(t)
          )
            return B('WeakMap');
          if (
            (function(e) {
              if (!d || !e || 'object' != typeof e) return !1;
              try {
                d.call(e, d);
                try {
                  E.call(e, E);
                } catch (e) {
                  return !0;
                }
                return e instanceof WeakSet;
              } catch (e) {}
              return !1;
            })(t)
          )
            return B('WeakSet');
          if (
            (function(e) {
              if (!p || !e || 'object' != typeof e) return !1;
              try {
                return p.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return B('WeakRef');
          if (
            (function(e) {
              return !('[object Number]' !== $(e) || (D && 'object' == typeof e && D in e));
            })(t)
          )
            return J(W(Number(t)));
          if (
            (function(e) {
              if (!e || 'object' != typeof e || !P) return !1;
              try {
                return P.call(e), !0;
              } catch (e) {}
              return !1;
            })(t)
          )
            return J(W(P.call(t)));
          if (
            (function(e) {
              return !('[object Boolean]' !== $(e) || (D && 'object' == typeof e && D in e));
            })(t)
          )
            return J(T.call(t));
          if (
            (function(e) {
              return !('[object String]' !== $(e) || (D && 'object' == typeof e && D in e));
            })(t)
          )
            return J(W(String(t)));
          if ('undefined' != typeof window && t === window) return '{ [object Window] }';
          if (t === r.g) return '{ [object globalThis] }';
          if (
            !(function(e) {
              return !('[object Date]' !== $(e) || (D && 'object' == typeof e && D in e));
            })(t) &&
            !x(t)
          ) {
            var le = X(t, W),
              Ee = b ? b(t) === Object.prototype : t instanceof Object || t.constructor === Object,
              de = t instanceof Object ? '' : 'null prototype',
              pe = !Ee && D && Object(t) === t && D in t ? f.call($(t), 8, -1) : de ? 'Object' : '',
              Te =
                (Ee || 'function' != typeof t.constructor
                  ? ''
                  : t.constructor.name
                  ? t.constructor.name + ' '
                  : '') +
                (pe || de ? '[' + A.call(h.call([], pe || [], de || []), ': ') + '] ' : '');
            return 0 === le.length
              ? Te + '{}'
              : K
              ? Te + '{' + Z(le, K) + '}'
              : Te + '{ ' + A.call(le, ', ') + ' }';
          }
          return String(t);
        };
        var K =
          Object.prototype.hasOwnProperty ||
          function(e) {
            return e in this;
          };
        function V(e, t) {
          return K.call(e, t);
        }
        function $(e) {
          return S.call(e);
        }
        function H(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var r = 0, o = e.length; r < o; r++) if (e[r] === t) return r;
          return -1;
        }
        function Y(e, t) {
          if (e.length > t.maxStringLength) {
            var r = e.length - t.maxStringLength,
              o = '... ' + r + ' more character' + (r > 1 ? 's' : '');
            return Y(f.call(e, 0, t.maxStringLength), t) + o;
          }
          return F(R.call(R.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, W), 'single', t);
        }
        function W(e) {
          var t = e.charCodeAt(0),
            r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
          return r ? '\\' + r : '\\x' + (t < 16 ? '0' : '') + g.call(t.toString(16));
        }
        function J(e) {
          return 'Object(' + e + ')';
        }
        function B(e) {
          return e + ' { ? }';
        }
        function z(e, t, r, o) {
          return e + ' (' + t + ') {' + (o ? Z(r, o) : A.call(r, ', ')) + '}';
        }
        function Z(e, t) {
          if (0 === e.length) return '';
          var r = '\n' + t.prev + t.base;
          return r + A.call(e, ',' + r) + '\n' + t.prev;
        }
        function X(e, t) {
          var r = j(e),
            o = [];
          if (r) {
            o.length = e.length;
            for (var n = 0; n < e.length; n++) o[n] = V(e, n) ? t(e[n], e) : '';
          }
          var s,
            i = 'function' == typeof U ? U(e) : [];
          if (N) {
            s = {};
            for (var a = 0; a < i.length; a++) s['$' + i[a]] = i[a];
          }
          for (var c in e)
            V(e, c) &&
              ((r && String(Number(c)) === c && c < e.length) ||
                (N && s['$' + c] instanceof Symbol) ||
                (O.call(/[^\w$]/, c)
                  ? o.push(t(c, e) + ': ' + t(e[c], e))
                  : o.push(c + ': ' + t(e[c], e))));
          if ('function' == typeof U)
            for (var u = 0; u < i.length; u++)
              w.call(e, i[u]) && o.push('[' + t(i[u]) + ']: ' + t(e[i[u]], e));
          return o;
        }
      },
      83949: e => {
        'use strict';
        var t = String.prototype.replace,
          r = /%20/g,
          o = 'RFC3986';
        e.exports = {
          default: o,
          formatters: {
            RFC1738: function(e) {
              return t.call(e, r, '+');
            },
            RFC3986: function(e) {
              return String(e);
            },
          },
          RFC1738: 'RFC1738',
          RFC3986: o,
        };
      },
      67905: (e, t, r) => {
        'use strict';
        var o = r(85095),
          n = r(95990),
          s = r(83949);
        e.exports = { formats: s, parse: n, stringify: o };
      },
      95990: (e, t, r) => {
        'use strict';
        var o = r(37748),
          n = Object.prototype.hasOwnProperty,
          s = Array.isArray,
          i = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decoder: o.decode,
            delimiter: '&',
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          a = function(e) {
            return e.replace(/&#(\d+);/g, function(e, t) {
              return String.fromCharCode(parseInt(t, 10));
            });
          },
          c = function(e, t) {
            return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1 ? e.split(',') : e;
          },
          u = function(e, t, r, o) {
            if (e) {
              var s = r.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
                i = /(\[[^[\]]*])/g,
                a = r.depth > 0 && /(\[[^[\]]*])/.exec(s),
                u = a ? s.slice(0, a.index) : s,
                l = [];
              if (u) {
                if (!r.plainObjects && n.call(Object.prototype, u) && !r.allowPrototypes) return;
                l.push(u);
              }
              for (var E = 0; r.depth > 0 && null !== (a = i.exec(s)) && E < r.depth; ) {
                if (
                  ((E += 1),
                  !r.plainObjects &&
                    n.call(Object.prototype, a[1].slice(1, -1)) &&
                    !r.allowPrototypes)
                )
                  return;
                l.push(a[1]);
              }
              return (
                a && l.push('[' + s.slice(a.index) + ']'),
                (function(e, t, r, o) {
                  for (var n = o ? t : c(t, r), s = e.length - 1; s >= 0; --s) {
                    var i,
                      a = e[s];
                    if ('[]' === a && r.parseArrays) i = [].concat(n);
                    else {
                      i = r.plainObjects ? Object.create(null) : {};
                      var u =
                          '[' === a.charAt(0) && ']' === a.charAt(a.length - 1)
                            ? a.slice(1, -1)
                            : a,
                        l = parseInt(u, 10);
                      r.parseArrays || '' !== u
                        ? !isNaN(l) &&
                          a !== u &&
                          String(l) === u &&
                          l >= 0 &&
                          r.parseArrays &&
                          l <= r.arrayLimit
                          ? ((i = [])[l] = n)
                          : '__proto__' !== u && (i[u] = n)
                        : (i = { 0: n });
                    }
                    n = i;
                  }
                  return n;
                })(l, t, r, o)
              );
            }
          };
        e.exports = function(e, t) {
          var r = (function(e) {
            if (!e) return i;
            if (null !== e.decoder && void 0 !== e.decoder && 'function' != typeof e.decoder)
              throw new TypeError('Decoder has to be a function.');
            if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined',
              );
            var t = void 0 === e.charset ? i.charset : e.charset;
            return {
              allowDots: void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
              allowPrototypes:
                'boolean' == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
              allowSparse: 'boolean' == typeof e.allowSparse ? e.allowSparse : i.allowSparse,
              arrayLimit: 'number' == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
              charset: t,
              charsetSentinel:
                'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
              comma: 'boolean' == typeof e.comma ? e.comma : i.comma,
              decoder: 'function' == typeof e.decoder ? e.decoder : i.decoder,
              delimiter:
                'string' == typeof e.delimiter || o.isRegExp(e.delimiter)
                  ? e.delimiter
                  : i.delimiter,
              depth: 'number' == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
              ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
              interpretNumericEntities:
                'boolean' == typeof e.interpretNumericEntities
                  ? e.interpretNumericEntities
                  : i.interpretNumericEntities,
              parameterLimit:
                'number' == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
              parseArrays: !1 !== e.parseArrays,
              plainObjects: 'boolean' == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
              strictNullHandling:
                'boolean' == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : i.strictNullHandling,
            };
          })(t);
          if ('' === e || null == e) return r.plainObjects ? Object.create(null) : {};
          for (
            var l =
                'string' == typeof e
                  ? (function(e, t) {
                      var r,
                        u = { __proto__: null },
                        l = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                        E = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                        d = l.split(t.delimiter, E),
                        p = -1,
                        T = t.charset;
                      if (t.charsetSentinel)
                        for (r = 0; r < d.length; ++r)
                          0 === d[r].indexOf('utf8=') &&
                            ('utf8=%E2%9C%93' === d[r]
                              ? (T = 'utf-8')
                              : 'utf8=%26%2310003%3B' === d[r] && (T = 'iso-8859-1'),
                            (p = r),
                            (r = d.length));
                      for (r = 0; r < d.length; ++r)
                        if (r !== p) {
                          var S,
                            _,
                            y = d[r],
                            f = y.indexOf(']='),
                            R = -1 === f ? y.indexOf('=') : f + 1;
                          -1 === R
                            ? ((S = t.decoder(y, i.decoder, T, 'key')),
                              (_ = t.strictNullHandling ? null : ''))
                            : ((S = t.decoder(y.slice(0, R), i.decoder, T, 'key')),
                              (_ = o.maybeMap(c(y.slice(R + 1), t), function(e) {
                                return t.decoder(e, i.decoder, T, 'value');
                              }))),
                            _ && t.interpretNumericEntities && 'iso-8859-1' === T && (_ = a(_)),
                            y.indexOf('[]=') > -1 && (_ = s(_) ? [_] : _),
                            n.call(u, S) ? (u[S] = o.combine(u[S], _)) : (u[S] = _);
                        }
                      return u;
                    })(e, r)
                  : e,
              E = r.plainObjects ? Object.create(null) : {},
              d = Object.keys(l),
              p = 0;
            p < d.length;
            ++p
          ) {
            var T = d[p],
              S = u(T, l[T], r, 'string' == typeof e);
            E = o.merge(E, S, r);
          }
          return !0 === r.allowSparse ? E : o.compact(E);
        };
      },
      85095: (e, t, r) => {
        'use strict';
        var o = r(44852),
          n = r(37748),
          s = r(83949),
          i = Object.prototype.hasOwnProperty,
          a = {
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
          c = Array.isArray,
          u = Array.prototype.push,
          l = function(e, t) {
            u.apply(e, c(t) ? t : [t]);
          },
          E = Date.prototype.toISOString,
          d = s.default,
          p = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encoder: n.encode,
            encodeValuesOnly: !1,
            format: d,
            formatter: s.formatters[d],
            indices: !1,
            serializeDate: function(e) {
              return E.call(e);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          T = {},
          S = function e(t, r, s, i, a, u, E, d, S, _, y, f, R, g, m, O) {
            for (var h, A = t, I = O, C = 0, P = !1; void 0 !== (I = I.get(T)) && !P; ) {
              var U = I.get(t);
              if (((C += 1), void 0 !== U)) {
                if (U === C) throw new RangeError('Cyclic object value');
                P = !0;
              }
              void 0 === I.get(T) && (C = 0);
            }
            if (
              ('function' == typeof d
                ? (A = d(r, A))
                : A instanceof Date
                ? (A = y(A))
                : 'comma' === s &&
                  c(A) &&
                  (A = n.maybeMap(A, function(e) {
                    return e instanceof Date ? y(e) : e;
                  })),
              null === A)
            ) {
              if (a) return E && !g ? E(r, p.encoder, m, 'key', f) : r;
              A = '';
            }
            if (
              'string' == typeof (h = A) ||
              'number' == typeof h ||
              'boolean' == typeof h ||
              'symbol' == typeof h ||
              'bigint' == typeof h ||
              n.isBuffer(A)
            )
              return E
                ? [
                    R(g ? r : E(r, p.encoder, m, 'key', f)) +
                      '=' +
                      R(E(A, p.encoder, m, 'value', f)),
                  ]
                : [R(r) + '=' + R(String(A))];
            var v,
              N = [];
            if (void 0 === A) return N;
            if ('comma' === s && c(A))
              g && E && (A = n.maybeMap(A, E)),
                (v = [{ value: A.length > 0 ? A.join(',') || null : void 0 }]);
            else if (c(d)) v = d;
            else {
              var D = Object.keys(A);
              v = S ? D.sort(S) : D;
            }
            for (var w = i && c(A) && 1 === A.length ? r + '[]' : r, b = 0; b < v.length; ++b) {
              var k = v[b],
                G = 'object' == typeof k && void 0 !== k.value ? k.value : A[k];
              if (!u || null !== G) {
                var M = c(A)
                  ? 'function' == typeof s
                    ? s(w, k)
                    : w
                  : w + (_ ? '.' + k : '[' + k + ']');
                O.set(t, C);
                var L = o();
                L.set(T, O),
                  l(
                    N,
                    e(
                      G,
                      M,
                      s,
                      i,
                      a,
                      u,
                      'comma' === s && g && c(A) ? null : E,
                      d,
                      S,
                      _,
                      y,
                      f,
                      R,
                      g,
                      m,
                      L,
                    ),
                  );
              }
            }
            return N;
          };
        e.exports = function(e, t) {
          var r,
            n = e,
            u = (function(e) {
              if (!e) return p;
              if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder)
                throw new TypeError('Encoder has to be a function.');
              var t = e.charset || p.charset;
              if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset)
                throw new TypeError(
                  'The charset option must be either utf-8, iso-8859-1, or undefined',
                );
              var r = s.default;
              if (void 0 !== e.format) {
                if (!i.call(s.formatters, e.format))
                  throw new TypeError('Unknown format option provided.');
                r = e.format;
              }
              var o = s.formatters[r],
                n = p.filter;
              return (
                ('function' == typeof e.filter || c(e.filter)) && (n = e.filter),
                {
                  addQueryPrefix:
                    'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                  allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
                  charset: t,
                  charsetSentinel:
                    'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                  delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
                  encode: 'boolean' == typeof e.encode ? e.encode : p.encode,
                  encoder: 'function' == typeof e.encoder ? e.encoder : p.encoder,
                  encodeValuesOnly:
                    'boolean' == typeof e.encodeValuesOnly
                      ? e.encodeValuesOnly
                      : p.encodeValuesOnly,
                  filter: n,
                  format: r,
                  formatter: o,
                  serializeDate:
                    'function' == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                  skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                  sort: 'function' == typeof e.sort ? e.sort : null,
                  strictNullHandling:
                    'boolean' == typeof e.strictNullHandling
                      ? e.strictNullHandling
                      : p.strictNullHandling,
                }
              );
            })(t);
          'function' == typeof u.filter
            ? (n = (0, u.filter)('', n))
            : c(u.filter) && (r = u.filter);
          var E,
            d = [];
          if ('object' != typeof n || null === n) return '';
          E =
            t && t.arrayFormat in a
              ? t.arrayFormat
              : t && 'indices' in t
              ? t.indices
                ? 'indices'
                : 'repeat'
              : 'indices';
          var T = a[E];
          if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip)
            throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
          var _ = 'comma' === T && t && t.commaRoundTrip;
          r || (r = Object.keys(n)), u.sort && r.sort(u.sort);
          for (var y = o(), f = 0; f < r.length; ++f) {
            var R = r[f];
            (u.skipNulls && null === n[R]) ||
              l(
                d,
                S(
                  n[R],
                  R,
                  T,
                  _,
                  u.strictNullHandling,
                  u.skipNulls,
                  u.encode ? u.encoder : null,
                  u.filter,
                  u.sort,
                  u.allowDots,
                  u.serializeDate,
                  u.format,
                  u.formatter,
                  u.encodeValuesOnly,
                  u.charset,
                  y,
                ),
              );
          }
          var g = d.join(u.delimiter),
            m = !0 === u.addQueryPrefix ? '?' : '';
          return (
            u.charsetSentinel &&
              ('iso-8859-1' === u.charset
                ? (m += 'utf8=%26%2310003%3B&')
                : (m += 'utf8=%E2%9C%93&')),
            g.length > 0 ? m + g : ''
          );
        };
      },
      37748: (e, t, r) => {
        'use strict';
        var o = r(83949),
          n = Object.prototype.hasOwnProperty,
          s = Array.isArray,
          i = (function() {
            for (var e = [], t = 0; t < 256; ++t)
              e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase());
            return e;
          })(),
          a = function(e, t) {
            for (var r = t && t.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o)
              void 0 !== e[o] && (r[o] = e[o]);
            return r;
          };
        e.exports = {
          arrayToObject: a,
          assign: function(e, t) {
            return Object.keys(t).reduce(function(e, r) {
              return (e[r] = t[r]), e;
            }, e);
          },
          combine: function(e, t) {
            return [].concat(e, t);
          },
          compact: function(e) {
            for (var t = [{ obj: { o: e }, prop: 'o' }], r = [], o = 0; o < t.length; ++o)
              for (var n = t[o], i = n.obj[n.prop], a = Object.keys(i), c = 0; c < a.length; ++c) {
                var u = a[c],
                  l = i[u];
                'object' == typeof l &&
                  null !== l &&
                  -1 === r.indexOf(l) &&
                  (t.push({ obj: i, prop: u }), r.push(l));
              }
            return (
              (function(e) {
                for (; e.length > 1; ) {
                  var t = e.pop(),
                    r = t.obj[t.prop];
                  if (s(r)) {
                    for (var o = [], n = 0; n < r.length; ++n) void 0 !== r[n] && o.push(r[n]);
                    t.obj[t.prop] = o;
                  }
                }
              })(t),
              e
            );
          },
          decode: function(e, t, r) {
            var o = e.replace(/\+/g, ' ');
            if ('iso-8859-1' === r) return o.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(o);
            } catch (e) {
              return o;
            }
          },
          encode: function(e, t, r, n, s) {
            if (0 === e.length) return e;
            var a = e;
            if (
              ('symbol' == typeof e
                ? (a = Symbol.prototype.toString.call(e))
                : 'string' != typeof e && (a = String(e)),
              'iso-8859-1' === r)
            )
              return escape(a).replace(/%u[0-9a-f]{4}/gi, function(e) {
                return '%26%23' + parseInt(e.slice(2), 16) + '%3B';
              });
            for (var c = '', u = 0; u < a.length; ++u) {
              var l = a.charCodeAt(u);
              45 === l ||
              46 === l ||
              95 === l ||
              126 === l ||
              (l >= 48 && l <= 57) ||
              (l >= 65 && l <= 90) ||
              (l >= 97 && l <= 122) ||
              (s === o.RFC1738 && (40 === l || 41 === l))
                ? (c += a.charAt(u))
                : l < 128
                ? (c += i[l])
                : l < 2048
                ? (c += i[192 | (l >> 6)] + i[128 | (63 & l)])
                : l < 55296 || l >= 57344
                ? (c += i[224 | (l >> 12)] + i[128 | ((l >> 6) & 63)] + i[128 | (63 & l)])
                : ((u += 1),
                  (l = 65536 + (((1023 & l) << 10) | (1023 & a.charCodeAt(u)))),
                  (c +=
                    i[240 | (l >> 18)] +
                    i[128 | ((l >> 12) & 63)] +
                    i[128 | ((l >> 6) & 63)] +
                    i[128 | (63 & l)]));
            }
            return c;
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
            if (s(e)) {
              for (var r = [], o = 0; o < e.length; o += 1) r.push(t(e[o]));
              return r;
            }
            return t(e);
          },
          merge: function e(t, r, o) {
            if (!r) return t;
            if ('object' != typeof r) {
              if (s(t)) t.push(r);
              else {
                if (!t || 'object' != typeof t) return [t, r];
                ((o && (o.plainObjects || o.allowPrototypes)) || !n.call(Object.prototype, r)) &&
                  (t[r] = !0);
              }
              return t;
            }
            if (!t || 'object' != typeof t) return [t].concat(r);
            var i = t;
            return (
              s(t) && !s(r) && (i = a(t, o)),
              s(t) && s(r)
                ? (r.forEach(function(r, s) {
                    if (n.call(t, s)) {
                      var i = t[s];
                      i && 'object' == typeof i && r && 'object' == typeof r
                        ? (t[s] = e(i, r, o))
                        : t.push(r);
                    } else t[s] = r;
                  }),
                  t)
                : Object.keys(r).reduce(function(t, s) {
                    var i = r[s];
                    return n.call(t, s) ? (t[s] = e(t[s], i, o)) : (t[s] = i), t;
                  }, i)
            );
          },
        };
      },
      71138: (e, t, r) => {
        'use strict';
        var o = r(9523),
          n = r(11131),
          s = r(97547)(),
          i = r(98158),
          a = o('%TypeError%'),
          c = o('%Math.floor%');
        e.exports = function(e, t) {
          if ('function' != typeof e) throw new a('`fn` is not a function');
          if ('number' != typeof t || t < 0 || t > 4294967295 || c(t) !== t)
            throw new a('`length` must be a positive 32-bit integer');
          var r = arguments.length > 2 && !!arguments[2],
            o = !0,
            u = !0;
          if ('length' in e && i) {
            var l = i(e, 'length');
            l && !l.configurable && (o = !1), l && !l.writable && (u = !1);
          }
          return (o || u || !r) && (s ? n(e, 'length', t, !0, !0) : n(e, 'length', t)), e;
        };
      },
      44852: (e, t, r) => {
        'use strict';
        var o = r(9523),
          n = r(67639),
          s = r(94527),
          i = o('%TypeError%'),
          a = o('%WeakMap%', !0),
          c = o('%Map%', !0),
          u = n('WeakMap.prototype.get', !0),
          l = n('WeakMap.prototype.set', !0),
          E = n('WeakMap.prototype.has', !0),
          d = n('Map.prototype.get', !0),
          p = n('Map.prototype.set', !0),
          T = n('Map.prototype.has', !0),
          S = function(e, t) {
            for (var r, o = e; null !== (r = o.next); o = r)
              if (r.key === t) return (o.next = r.next), (r.next = e.next), (e.next = r), r;
          };
        e.exports = function() {
          var e,
            t,
            r,
            o = {
              assert: function(e) {
                if (!o.has(e)) throw new i('Side channel does not contain ' + s(e));
              },
              get: function(o) {
                if (a && o && ('object' == typeof o || 'function' == typeof o)) {
                  if (e) return u(e, o);
                } else if (c) {
                  if (t) return d(t, o);
                } else if (r)
                  return (function(e, t) {
                    var r = S(e, t);
                    return r && r.value;
                  })(r, o);
              },
              has: function(o) {
                if (a && o && ('object' == typeof o || 'function' == typeof o)) {
                  if (e) return E(e, o);
                } else if (c) {
                  if (t) return T(t, o);
                } else if (r)
                  return (function(e, t) {
                    return !!S(e, t);
                  })(r, o);
                return !1;
              },
              set: function(o, n) {
                a && o && ('object' == typeof o || 'function' == typeof o)
                  ? (e || (e = new a()), l(e, o, n))
                  : c
                  ? (t || (t = new c()), p(t, o, n))
                  : (r || (r = { key: {}, next: null }),
                    (function(e, t, r) {
                      var o = S(e, t);
                      o ? (o.value = r) : (e.next = { key: t, next: e.next, value: r });
                    })(r, o, n));
              },
            };
          return o;
        };
      },
      93452: () => {},
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var s = (t[o] = { exports: {} });
    return e[o](s, s.exports, r), s.exports;
  }
  (r.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var o in t)
        r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
  var o = {};
  (() => {
    'use strict';
    r.r(o),
      r.d(o, {
        COUNTRIES_STORE_NAME: () => ls,
        DAY: () => we,
        EXPERIMENTAL_PRODUCT_ATTRIBUTES_STORE_NAME: () => fc,
        EXPERIMENTAL_PRODUCT_ATTRIBUTE_TERMS_STORE_NAME: () => Uc,
        EXPERIMENTAL_PRODUCT_CATEGORIES_STORE_NAME: () => Cc,
        EXPERIMENTAL_PRODUCT_FORM_STORE_NAME: () => ru,
        EXPERIMENTAL_PRODUCT_SHIPPING_CLASSES_STORE_NAME: () => gc,
        EXPERIMENTAL_PRODUCT_TAGS_STORE_NAME: () => Ac,
        EXPERIMENTAL_PRODUCT_VARIATIONS_STORE_NAME: () => Kc,
        EXPERIMENTAL_SHIPPING_ZONES_STORE_NAME: () => Oc,
        EXPERIMENTAL_TAX_CLASSES_STORE_NAME: () => iu,
        EXPORT_STORE_NAME: () => Hu,
        HOUR: () => De,
        IMPORT_STORE_NAME: () => ul,
        ITEMS_STORE_NAME: () => ei,
        MAX_PER_PAGE: () => Ue,
        MINUTE: () => Ne,
        MONTH: () => ke,
        NAMESPACE: () => Ie,
        NAVIGATION_STORE_NAME: () => ks,
        NOTES_STORE_NAME: () => Cn,
        ONBOARDING_STORE_NAME: () => Vo,
        OPTIONS_STORE_NAME: () => Zt,
        ORDERS_STORE_NAME: () => Qa,
        PAYMENT_GATEWAYS_STORE_NAME: () => mi,
        PLUGINS_STORE_NAME: () => ur,
        PRODUCTS_STORE_NAME: () => ha,
        QUERY_DEFAULTS: () => Ge,
        REPORTS_STORE_NAME: () => Qn,
        REVIEWS_STORE_NAME: () => cn,
        SECOND: () => ve,
        SETTINGS_STORE_NAME: () => Be,
        SHIPPING_METHODS_STORE_NAME: () => vi,
        USER_STORE_NAME: () => Ho,
        WCS_NAMESPACE: () => Pe,
        WC_ADMIN_NAMESPACE: () => Ce,
        WEEK: () => be,
        getFilterQuery: () => hu,
        getLeaderboard: () => Ls,
        getReportChartData: () => Nu,
        getReportTableData: () => bu,
        getReportTableQuery: () => wu,
        getSummaryNumbers: () => Cu,
        getTooltipValueFormat: () => Du,
        getVisibleTasks: () => gu,
        isRestApiError: () => $e,
        pluginNames: () => Xe,
        productReadOnlyProperties: () => ll,
        searchItemsByString: () => Fs,
        useOptionsHydration: () => Tu,
        useSettings: () => _u,
        useUser: () => Ru,
        useUserPreferences: () => fu,
        withCurrentUserHydration: () => Eu,
        withNavigationHydration: () => du,
        withOnboardingHydration: () => lu,
        withOptionsHydration: () => Su,
        withPluginsHydration: () => pu,
        withSettingsHydration: () => uu,
      });
    var e = {};
    r.r(e),
      r.d(e, {
        getDirtyKeys: () => Se,
        getIsDirty: () => _e,
        getLastSettingsErrorForGroup: () => ge,
        getSetting: () => Re,
        getSettings: () => Te,
        getSettingsError: () => me,
        getSettingsForGroup: () => ye,
        getSettingsGroupNames: () => pe,
        isUpdateSettingsRequesting: () => fe,
      });
    var t = {};
    r.r(t),
      r.d(t, {
        clearIsDirty: () => xe,
        clearSettings: () => Ve,
        persistSettingsForGroup: () => Qe,
        setIsRequesting: () => je,
        updateAndPersistSettingsForGroup: () => Ke,
        updateErrorForGroup: () => qe,
        updateSettingsForGroup: () => Fe,
      });
    var n = {};
    r.r(n), r.d(n, { getSettings: () => Ye, getSettingsForGroup: () => We });
    var s = {};
    r.r(s),
      r.d(s, {
        getActivePlugins: () => et,
        getInstalledPlugins: () => tt,
        getJetpackConnectUrl: () => it,
        getJetpackConnectionData: () => st,
        getPaypalOnboardingStatus: () => ct,
        getPluginInstallState: () => at,
        getPluginsError: () => ot,
        getRecommendedPlugins: () => ut,
        isJetpackConnected: () => nt,
        isPluginsRequesting: () => rt,
      });
    var i = {};
    r.r(i),
      r.d(i, {
        activatePlugins: () => vt,
        connectToJetpack: () => Dt,
        connectToJetpackWithFailureRedirect: () => bt,
        createErrorNotice: () => At,
        dismissRecommendedPlugins: () => Gt,
        installAndActivatePlugins: () => Nt,
        installJetpackAndConnect: () => wt,
        installPlugins: () => Ut,
        setError: () => gt,
        setIsRequesting: () => Rt,
        setPaypalOnboardingStatus: () => It,
        setRecommendedPlugins: () => Ct,
        updateActivePlugins: () => yt,
        updateInstalledPlugins: () => ft,
        updateIsJetpackConnected: () => mt,
        updateJetpackConnectUrl: () => ht,
        updateJetpackConnectionData: () => Ot,
      });
    var a = {};
    r.r(a),
      r.d(a, {
        getOption: () => Lt,
        getOptionsRequestingError: () => Ft,
        getOptionsUpdatingError: () => jt,
        isOptionsUpdating: () => qt,
      });
    var c = {};
    r.r(c),
      r.d(c, {
        receiveOptions: () => Qt,
        setIsUpdating: () => $t,
        setRequestingError: () => Kt,
        setUpdatingError: () => Vt,
        updateOptions: () => Ht,
      });
    var u = {};
    r.r(u), r.d(u, { getOption: () => zt });
    var l = {};
    r.r(l),
      r.d(l, {
        getActivePlugins: () => er,
        getInstalledPlugins: () => tr,
        getJetpackConnectUrl: () => nr,
        getJetpackConnectionData: () => or,
        getPaypalOnboardingStatus: () => ir,
        getRecommendedPlugins: () => cr,
        isJetpackConnected: () => rr,
      });
    var E = {};
    r.r(E),
      r.d(E, {
        getEmailPrefill: () => Ar,
        getFreeExtensions: () => Sr,
        getJetpackAuthUrl: () => Cr,
        getOnboardingError: () => Or,
        getPaymentGatewaySuggestions: () => mr,
        getProductTypes: () => Ir,
        getProfileItems: () => _r,
        getTask: () => gr,
        getTaskList: () => Rr,
        getTaskLists: () => yr,
        getTaskListsByIds: () => fr,
        isOnboardingRequesting: () => hr,
      });
    var d = {};
    r.r(d),
      r.d(d, {
        actionTask: () => Ao,
        actionTaskError: () => uo,
        actionTaskRequest: () => lo,
        actionTaskSuccess: () => Eo,
        coreProfilerCompleted: () => No,
        coreProfilerCompletedError: () => Po,
        coreProfilerCompletedRequest: () => Uo,
        coreProfilerCompletedSuccess: () => vo,
        dismissTask: () => Ro,
        dismissTaskError: () => Hr,
        dismissTaskRequest: () => Yr,
        dismissTaskSuccess: () => Wr,
        getFreeExtensionsError: () => br,
        getFreeExtensionsSuccess: () => kr,
        getProductTypesError: () => To,
        getProductTypesSuccess: () => po,
        getTaskListsError: () => Fr,
        getTaskListsSuccess: () => qr,
        hideTaskList: () => mo,
        hideTaskListError: () => Zr,
        hideTaskListRequest: () => Xr,
        hideTaskListSuccess: () => eo,
        installAndActivatePluginsAsync: () => Io,
        keepCompletedTaskList: () => So,
        keepCompletedTaskListSuccess: () => so,
        optimisticallyCompleteTask: () => ho,
        optimisticallyCompleteTaskRequest: () => no,
        setEmailPrefill: () => co,
        setError: () => Gr,
        setIsRequesting: () => Mr,
        setJetpackAuthUrl: () => Co,
        setPaymentMethods: () => ao,
        setProfileItems: () => Lr,
        snoozeTask: () => yo,
        snoozeTaskError: () => jr,
        snoozeTaskRequest: () => xr,
        snoozeTaskSuccess: () => Qr,
        undoDismissTask: () => go,
        undoDismissTaskError: () => Jr,
        undoDismissTaskRequest: () => Br,
        undoDismissTaskSuccess: () => zr,
        undoSnoozeTask: () => fo,
        undoSnoozeTaskError: () => Kr,
        undoSnoozeTaskRequest: () => Vr,
        undoSnoozeTaskSuccess: () => $r,
        unhideTaskList: () => Oo,
        unhideTaskListError: () => to,
        unhideTaskListRequest: () => ro,
        unhideTaskListSuccess: () => oo,
        updateProfileItems: () => _o,
        visitedTask: () => io,
      });
    var p = {};
    r.r(p),
      r.d(p, {
        getEmailPrefill: () => bo,
        getFreeExtensions: () => qo,
        getJetpackAuthUrl: () => xo,
        getPaymentGatewaySuggestions: () => Fo,
        getProductTypes: () => jo,
        getProfileItems: () => wo,
        getTask: () => Lo,
        getTaskList: () => Mo,
        getTaskLists: () => ko,
        getTaskListsByIds: () => Go,
      });
    var T = {};
    r.r(T),
      r.d(T, { getReviews: () => Wo, getReviewsError: () => Bo, getReviewsTotalCount: () => Jo });
    var S = {};
    r.r(S),
      r.d(S, {
        deleteReview: () => on,
        setError: () => en,
        setReview: () => Xo,
        setReviewIsUpdating: () => Zo,
        updateReview: () => rn,
        updateReviews: () => tn,
      });
    var _ = {};
    r.r(_), r.d(_, { getReviews: () => nn, getReviewsTotalCount: () => sn });
    var y = {};
    r.r(y), r.d(y, { getNotes: () => ln, getNotesError: () => En, isNotesRequesting: () => dn });
    var f = {};
    r.r(f),
      r.d(f, {
        batchUpdateNotes: () => An,
        removeAllNotes: () => hn,
        removeNote: () => On,
        setError: () => fn,
        setIsRequesting: () => Rn,
        setNote: () => Tn,
        setNoteIsUpdating: () => Sn,
        setNotes: () => _n,
        setNotesQuery: () => yn,
        triggerNoteAction: () => mn,
        updateNote: () => gn,
      });
    var R = {};
    r.r(R), r.d(R, { getNotes: () => In });
    var g = {};
    r.r(g),
      r.d(g, {
        getReportItems: () => Nn,
        getReportItemsError: () => vn,
        getReportStats: () => Dn,
        getReportStatsError: () => wn,
      });
    var m = {};
    r.r(m),
      r.d(m, {
        setReportItems: () => Gn,
        setReportItemsError: () => kn,
        setReportStats: () => Mn,
        setReportStatsError: () => Ln,
      });
    var O = {};
    r.r(O), r.d(O, { getReportItems: () => qn, getReportStats: () => jn });
    var h = {};
    r.r(h),
      r.d(h, {
        geolocate: () => Wn,
        getCountries: () => Hn,
        getCountry: () => Yn,
        getLocale: () => $n,
        getLocales: () => Vn,
      });
    var A = {};
    r.r(A),
      r.d(A, {
        geolocationError: () => os,
        geolocationSuccess: () => rs,
        getCountriesError: () => ts,
        getCountriesSuccess: () => es,
        getLocalesError: () => Xn,
        getLocalesSuccess: () => Zn,
      });
    var I = {};
    r.r(I),
      r.d(I, {
        geolocate: () => us,
        getCountries: () => cs,
        getCountry: () => as,
        getLocale: () => ss,
        getLocales: () => is,
      });
    var C = {};
    r.r(C),
      r.d(C, {
        getFavorites: () => ps,
        getMenuItems: () => ds,
        getPersistedQuery: () => Ss,
        isNavigationRequesting: () => Ts,
      });
    var P = {};
    r.r(P),
      r.d(P, {
        addFavorite: () => Ds,
        addFavoriteFailure: () => As,
        addFavoriteRequest: () => hs,
        addFavoriteSuccess: () => Is,
        addMenuItems: () => Rs,
        getFavoritesFailure: () => gs,
        getFavoritesRequest: () => ms,
        getFavoritesSuccess: () => Os,
        onHistoryChange: () => vs,
        onLoad: () => Ns,
        removeFavorite: () => ws,
        removeFavoriteFailure: () => Ps,
        removeFavoriteRequest: () => Cs,
        removeFavoriteSuccess: () => Us,
        setMenuItems: () => fs,
      });
    var U = {};
    r.r(U), r.d(U, { getFavorites: () => bs });
    var v = {};
    r.r(v), r.d(v, { getItems: () => js, getItemsError: () => Qs, getItemsTotalCount: () => xs });
    var N = {};
    r.r(N),
      r.d(N, {
        createProductFromTemplate: () => Js,
        setError: () => Ys,
        setItem: () => Vs,
        setItems: () => $s,
        setItemsTotalCount: () => Hs,
        updateProductStock: () => Ws,
      });
    var D = {};
    r.r(D),
      r.d(D, { getItems: () => Bs, getItemsTotalCount: () => zs, getReviewsTotalCount: () => Zs });
    var w = {};
    r.r(w),
      r.d(w, {
        getPaymentGatewayError: () => ci,
        getPaymentGatewayRequest: () => ai,
        getPaymentGatewaySuccess: () => ui,
        getPaymentGatewaysError: () => ii,
        getPaymentGatewaysRequest: () => ni,
        getPaymentGatewaysSuccess: () => si,
        updatePaymentGateway: () => pi,
        updatePaymentGatewayError: () => di,
        updatePaymentGatewayRequest: () => Ei,
        updatePaymentGatewaySuccess: () => li,
      });
    var b = {};
    r.r(b), r.d(b, { getPaymentGateway: () => _i, getPaymentGateways: () => Si });
    var k = {};
    r.r(k),
      r.d(k, {
        getPaymentGateway: () => yi,
        getPaymentGatewayError: () => Ri,
        getPaymentGateways: () => fi,
        isPaymentGatewayUpdating: () => gi,
      });
    var G = {};
    r.r(G),
      r.d(G, {
        getShippingMethodsError: () => Ii,
        getShippingMethodsRequest: () => hi,
        getShippingMethodsSuccess: () => Ai,
      });
    var M = {};
    r.r(M), r.d(M, { getShippingMethods: () => Ci });
    var L = {};
    r.r(L), r.d(L, { getShippingMethods: () => Pi, isShippingMethodsUpdating: () => Ui });
    var F = {};
    r.r(F),
      r.d(F, {
        getCreateProductError: () => Ki,
        getDeleteProductError: () => $i,
        getPermalinkParts: () => Yi,
        getProduct: () => qi,
        getProducts: () => ji,
        getProductsError: () => Qi,
        getProductsTotalCount: () => xi,
        getRelatedProducts: () => Wi,
        getSuggestedProducts: () => Ji,
        getUpdateProductError: () => Vi,
        isPending: () => Hi,
      });
    var q = {};
    r.r(q),
      r.d(q, {
        createProduct: () => aa,
        createProductError: () => ea,
        deleteProduct: () => pa,
        deleteProductError: () => da,
        deleteProductStart: () => la,
        deleteProductSuccess: () => Ea,
        duplicateProduct: () => ua,
        duplicateProductError: () => ta,
        getProductError: () => Xi,
        getProductSuccess: () => Zi,
        getProductsError: () => na,
        getProductsSuccess: () => oa,
        getProductsTotalCountError: () => ia,
        getProductsTotalCountSuccess: () => sa,
        setSuggestedProductAction: () => Ta,
        updateProduct: () => ca,
        updateProductError: () => ra,
      });
    var j = {};
    r.r(j),
      r.d(j, {
        getPermalinkParts: () => ma,
        getProduct: () => fa,
        getProducts: () => ya,
        getProductsTotalCount: () => ga,
        getRelatedProducts: () => Ra,
        getSuggestedProducts: () => Oa,
      });
    var x = {};
    r.r(x),
      r.d(x, { getOrders: () => va, getOrdersError: () => Da, getOrdersTotalCount: () => Na });
    var Q = {};
    r.r(Q),
      r.d(Q, {
        getOrderError: () => Ga,
        getOrderSuccess: () => ka,
        getOrdersError: () => La,
        getOrdersSuccess: () => Ma,
        getOrdersTotalCountError: () => qa,
        getOrdersTotalCountSuccess: () => Fa,
      });
    var K = {};
    r.r(K), r.d(K, { getOrders: () => ja, getOrdersTotalCount: () => xa });
    var V = {};
    r.r(V),
      r.d(V, {
        batchUpdateProductVariations: () => jc,
        batchUpdateProductVariationsError: () => qc,
        generateProductVariations: () => Fc,
        generateProductVariationsError: () => Gc,
        generateProductVariationsRequest: () => Mc,
        generateProductVariationsSuccess: () => Lc,
      });
    var $ = {};
    r.r($), r.d($, { generateProductVariationsError: () => Qc, isGeneratingVariations: () => xc });
    var H = {};
    r.r(H), r.d(H, { getField: () => Hc, getFields: () => $c, getProductForm: () => Yc });
    var Y = {};
    r.r(Y),
      r.d(Y, {
        getFieldsError: () => zc,
        getFieldsSuccess: () => Bc,
        getProductFormError: () => Xc,
        getProductFormSuccess: () => Zc,
      });
    var W = {};
    r.r(W), r.d(W, { getFields: () => eu, getProductForm: () => tu });
    var J = {};
    r.r(J), r.d(J, { getTaxClasses: () => su });
    var B = {};
    r.r(B), r.d(B, { getError: () => ju, getExportId: () => qu, isExportRequesting: () => Fu });
    var z = {};
    r.r(z),
      r.d(z, {
        setError: () => Vu,
        setExportId: () => Qu,
        setIsRequesting: () => Ku,
        startExport: () => $u,
      });
    var Z = {};
    r.r(Z),
      r.d(Z, {
        getFormSettings: () => Ju,
        getImportError: () => Zu,
        getImportStarted: () => Wu,
        getImportStatus: () => Bu,
        getImportTotals: () => zu,
      });
    var X = {};
    r.r(X),
      r.d(X, {
        setImportError: () => sl,
        setImportPeriod: () => tl,
        setImportStarted: () => el,
        setImportStatus: () => ol,
        setImportTotals: () => nl,
        setSkipPrevious: () => rl,
        updateImportation: () => il,
      });
    var ee = {};
    r.r(ee), r.d(ee, { getImportStatus: () => al, getImportTotals: () => cl }), window.wp.coreData;
    const te = window.wp.data,
      re = window.wp.dataControls,
      oe = 'wc/admin/settings',
      ne = window.wp.url,
      se = window.wp.apiFetch;
    var ie = r.n(se);
    const ae = e => ({ type: 'FETCH_WITH_HEADERS', options: e }),
      ce = {
        ...re.controls,
        FETCH_WITH_HEADERS: e =>
          ie()({ ...e.options, parse: !1 })
            .then(e => Promise.all([e.headers, e.status, e.json()]))
            .then(([e, t, r]) => ({ headers: e, status: t, data: r }))
            .catch(e =>
              e.json().then(e => {
                throw e;
              }),
            ),
      };
    function ue(e, t) {
      if (t) {
        if (Array.isArray(t)) return [...t].sort();
        if ('object' == typeof t)
          return Object.entries(t)
            .sort()
            .reduce((e, [t, r]) => ({ ...e, [t]: r }), {});
      }
      return t;
    }
    function le(e, ...t) {
      return `${e}:${JSON.stringify(t, ue).replace(/\\"/g, '"')}`;
    }
    function Ee(e, t) {
      const { _fields: r, page: o, per_page: n, order: s, orderby: i, ...a } = t;
      return le(e, a);
    }
    function* de(e, t) {
      const r = (0, ne.addQueryArgs)(e, t),
        o = -1 === t.per_page,
        n = o ? re.apiFetch : ae,
        s = yield n({ path: r, method: 'GET' });
      if (o && !('data' in s)) return { items: s, totalCount: s.length };
      if (!o && 'data' in s) {
        const e = parseInt(s.headers.get('x-wp-total') || '', 10);
        return { items: s.data, totalCount: e };
      }
    }
    const pe = e => [
        ...new Set(
          Object.keys(e).map(e =>
            (function(e) {
              const t = e.indexOf(':');
              return t < 0 ? e : e.substring(0, t);
            })(e),
          ),
        ),
      ],
      Te = (e, t) => {
        const r = {},
          o = (e[t] && e[t].data) || [];
        return Array.isArray(o) && 0 !== o.length
          ? (o.forEach(o => {
              r[o] = e[le(t, o)].data;
            }),
            r)
          : r;
      },
      Se = (e, t) => e[t].dirty || [],
      _e = (e, t, r = []) => {
        const o = Se(e, t);
        return 0 !== o.length && r.some(e => o.includes(e));
      },
      ye = (e, t, r) => {
        const o = Te(e, t);
        return r.reduce((e, t) => ((e[t] = o[t] || {}), e), {});
      },
      fe = (e, t) => e[t] && Boolean(e[t].isRequesting);
    function Re(e, t, r, o = !1, n = (e, t) => e) {
      const s = le(t, r);
      return n((e[s] && e[s].data) || o, o);
    }
    const ge = (e, t) => {
        const r = e[t].data;
        return Array.isArray(r) && 0 !== r.length ? [...r].pop().error : e[t].error;
      },
      me = (e, t, r) => (r ? e[le(t, r)].error || !1 : (e[t] && e[t].error) || !1),
      Oe = window.wp.i18n,
      he = window.lodash,
      Ae = '/jetpack/v4',
      Ie = '/wc-analytics',
      Ce = '/wc-admin',
      Pe = '/wc/v1',
      Ue = 100,
      ve = 1e3,
      Ne = 60 * ve,
      De = 60 * Ne,
      we = 24 * De,
      be = 7 * we,
      ke = (365 * we) / 12,
      Ge = {
        pageSize: 25,
        period: 'month',
        compare: 'previous_year',
        noteTypes: ['info', 'marketing', 'survey', 'warning'],
      },
      Me = {
        UPDATE_SETTINGS_FOR_GROUP: 'UPDATE_SETTINGS_FOR_GROUP',
        UPDATE_ERROR_FOR_GROUP: 'UPDATE_ERROR_FOR_GROUP',
        CLEAR_SETTINGS: 'CLEAR_SETTINGS',
        SET_IS_REQUESTING: 'SET_IS_REQUESTING',
        CLEAR_IS_DIRTY: 'CLEAR_IS_DIRTY',
      },
      Le = te.controls && te.controls.resolveSelect ? te.controls.resolveSelect : re.select;
    function Fe(e, t, r = new Date()) {
      return { type: Me.UPDATE_SETTINGS_FOR_GROUP, group: e, data: t, time: r };
    }
    function qe(e, t, r, o = new Date()) {
      return { type: Me.UPDATE_ERROR_FOR_GROUP, group: e, data: t, error: r, time: o };
    }
    function je(e, t) {
      return { type: Me.SET_IS_REQUESTING, group: e, isRequesting: t };
    }
    function xe(e) {
      return { type: Me.CLEAR_IS_DIRTY, group: e };
    }
    function* Qe(e) {
      yield je(e, !0);
      const t = yield Le(oe, 'getDirtyKeys', e);
      if (0 === t.length) return void (yield je(e, !1));
      const r = yield Le(oe, 'getSettingsForGroup', e, t),
        o = `${Ie}/settings/${e}/batch`,
        n = t.reduce((e, t) => {
          const o = Object.keys(r[t]).map(e => ({ id: e, value: r[t][e] }));
          return (0, he.concat)(e, o);
        }, []);
      try {
        const t = yield (0, re.apiFetch)({ path: o, method: 'POST', data: { update: n } });
        if ((yield je(e, !1), !t))
          throw new Error((0, Oe.__)('There was a problem updating your settings.', 'woocommerce'));
        yield xe(e);
      } catch (t) {
        throw (yield qe(e, null, t), yield je(e, !1), t);
      }
    }
    function* Ke(e, t) {
      yield je(e, !0), yield Fe(e, t), yield* Qe(e);
    }
    function Ve() {
      return { type: Me.CLEAR_SETTINGS };
    }
    const $e = e => void 0 !== e.code && void 0 !== e.message,
      He = te.controls && te.controls.dispatch ? te.controls.dispatch : re.dispatch;
    function* Ye(e) {
      yield He(oe, 'setIsRequesting', e, !0);
      try {
        const t = Ie + '/settings/' + e;
        return Fe(e, {
          [e]: (yield (0, re.apiFetch)({ path: t, method: 'GET' })).reduce(
            (e, t) => ((e[t.id] = t.value), e),
            {},
          ),
        });
      } catch (t) {
        if (t instanceof Error || $e(t)) return qe(e, null, t.message);
        throw `Unexpected error ${t}`;
      }
    }
    function* We(e) {
      return Ye(e);
    }
    const Je = (e, { group: t, groupIds: r, data: o, time: n, error: s }) => (
      r.forEach(r => {
        e[le(t, r)] = { data: o[r], lastReceived: n, error: s };
      }),
      e
    );
    (0, te.registerStore)(oe, {
      reducer: (e = {}, t) => {
        var r;
        const o = {};
        switch (t.type) {
          case Me.SET_IS_REQUESTING:
            e = { ...e, [t.group]: { ...e[t.group], isRequesting: t.isRequesting } };
            break;
          case Me.CLEAR_IS_DIRTY:
            e = { ...e, [t.group]: { ...e[t.group], dirty: [] } };
            break;
          case Me.UPDATE_SETTINGS_FOR_GROUP:
          case Me.UPDATE_ERROR_FOR_GROUP:
            const { data: n, group: s, time: i } = t,
              a = n ? Object.keys(n) : [],
              c = t.type === Me.UPDATE_ERROR_FOR_GROUP ? t.error : null;
            if (null === n)
              e = { ...e, [s]: { data: e[s] ? e[s].data : [], error: c, lastReceived: i } };
            else {
              const t = e[s];
              e = {
                ...e,
                [s]: {
                  data: t && t.data && Array.isArray(t.data) ? [...t.data, ...a] : a,
                  error: c,
                  lastReceived: i,
                  isRequesting:
                    (null === (r = e[s]) || void 0 === r ? void 0 : r.isRequesting) || !1,
                  dirty: e[s] && e[s].dirty ? (0, he.union)(e[s].dirty, a) : a,
                },
                ...Je(o, { group: s, groupIds: a, data: n, time: i, error: c }),
              };
            }
            break;
          case Me.CLEAR_SETTINGS:
            e = {};
        }
        return e;
      },
      actions: t,
      controls: re.controls,
      selectors: e,
      resolvers: n,
    });
    const Be = oe,
      ze = 'wc/admin/plugins',
      Ze = '/wc-paypal/v1',
      Xe = {
        'facebook-for-woocommerce': (0, Oe.__)('Facebook for WooCommerce', 'woocommerce'),
        jetpack: (0, Oe.__)('Jetpack', 'woocommerce'),
        'klarna-checkout-for-woocommerce': (0, Oe.__)(
          'Klarna Checkout for WooCommerce',
          'woocommerce',
        ),
        'klarna-payments-for-woocommerce': (0, Oe.__)(
          'Klarna Payments for WooCommerce',
          'woocommerce',
        ),
        'mailchimp-for-woocommerce': (0, Oe.__)('Mailchimp for WooCommerce', 'woocommerce'),
        'creative-mail-by-constant-contact': (0, Oe.__)(
          'Creative Mail for WooCommerce',
          'woocommerce',
        ),
        'woocommerce-gateway-paypal-express-checkout': (0, Oe.__)(
          'WooCommerce PayPal',
          'woocommerce',
        ),
        'woocommerce-gateway-stripe': (0, Oe.__)('WooCommerce Stripe', 'woocommerce'),
        'woocommerce-payfast-gateway': (0, Oe.__)('WooCommerce Payfast', 'woocommerce'),
        'woocommerce-payments': (0, Oe.__)('WooPayments', 'woocommerce'),
        'woocommerce-services': (0, Oe.__)('WooCommerce Shipping & Tax', 'woocommerce'),
        'woocommerce-services:shipping': (0, Oe.__)('WooCommerce Shipping & Tax', 'woocommerce'),
        'woocommerce-services:tax': (0, Oe.__)('WooCommerce Shipping & Tax', 'woocommerce'),
        'woocommerce-shipstation-integration': (0, Oe.__)(
          'WooCommerce ShipStation Gateway',
          'woocommerce',
        ),
        'woocommerce-mercadopago': (0, Oe.__)(
          'Mercado Pago payments for WooCommerce',
          'woocommerce',
        ),
        'google-listings-and-ads': (0, Oe.__)('Google Listings and Ads', 'woocommerce'),
        'woo-razorpay': (0, Oe.__)('Razorpay', 'woocommerce'),
        mailpoet: (0, Oe.__)('MailPoet', 'woocommerce'),
        'pinterest-for-woocommerce': (0, Oe.__)('Pinterest for WooCommerce', 'woocommerce'),
        'tiktok-for-business:alt': (0, Oe.__)('TikTok for WooCommerce', 'woocommerce'),
        codistoconnect: (0, Oe.__)('Omnichannel for WooCommerce', 'woocommerce'),
      },
      et = e => e.active || [],
      tt = e => e.installed || [],
      rt = (e, t) => e.requesting[t] || !1,
      ot = (e, t) => e.errors[t] || !1,
      nt = e => e.jetpackConnection,
      st = e => e.jetpackConnectionData,
      it = (e, t) => e.jetpackConnectUrls[t.redirect_url],
      at = (e, t) =>
        e.active.includes(t) ? 'activated' : e.installed.includes(t) ? 'installed' : 'unavailable',
      ct = e => e.paypalOnboardingStatus,
      ut = (e, t) => e.recommended[t],
      lt = window.wc.tracks;
    var Et;
    !(function(e) {
      (e.UPDATE_ACTIVE_PLUGINS = 'UPDATE_ACTIVE_PLUGINS'),
        (e.UPDATE_INSTALLED_PLUGINS = 'UPDATE_INSTALLED_PLUGINS'),
        (e.SET_IS_REQUESTING = 'SET_IS_REQUESTING'),
        (e.SET_ERROR = 'SET_ERROR'),
        (e.UPDATE_JETPACK_CONNECTION = 'UPDATE_JETPACK_CONNECTION'),
        (e.UPDATE_JETPACK_CONNECT_URL = 'UPDATE_JETPACK_CONNECT_URL'),
        (e.UPDATE_JETPACK_CONNECTION_DATA = 'UPDATE_JETPACK_CONNECTION_DATA'),
        (e.SET_PAYPAL_ONBOARDING_STATUS = 'SET_PAYPAL_ONBOARDING_STATUS'),
        (e.SET_RECOMMENDED_PLUGINS = 'SET_RECOMMENDED_PLUGINS');
    })(Et || (Et = {}));
    const dt = te.controls && te.controls.dispatch ? te.controls.dispatch : re.dispatch,
      pt = te.controls && te.controls.resolveSelect ? te.controls.resolveSelect : re.select;
    class Tt extends Error {
      constructor(e, t) {
        super(e), (this.data = t);
      }
    }
    const St = (e, t) => 'object' == typeof t && null !== t && e[0] in t,
      _t = (e = 'install', t, r) =>
        (0, Oe.sprintf)(
          (0, Oe._n)(
            'Could not %(actionType)s %(pluginName)s plugin, %(error)s',
            'Could not %(actionType)s the following plugins: %(pluginName)s with these Errors: %(error)s',
            Object.keys(t).length || 1,
            'woocommerce',
          ),
          { actionType: e, pluginName: t.join(', '), error: r },
        );
    function yt(e, t = !1) {
      return { type: Et.UPDATE_ACTIVE_PLUGINS, active: e, replace: t };
    }
    function ft(e, t = !1) {
      return { type: Et.UPDATE_INSTALLED_PLUGINS, installed: e, replace: t };
    }
    function Rt(e, t) {
      return { type: Et.SET_IS_REQUESTING, selector: e, isRequesting: t };
    }
    function gt(e, t) {
      return { type: Et.SET_ERROR, selector: e, error: t };
    }
    function mt(e) {
      return { type: Et.UPDATE_JETPACK_CONNECTION, jetpackConnection: e };
    }
    function Ot(e) {
      return { type: Et.UPDATE_JETPACK_CONNECTION_DATA, results: e };
    }
    function ht(e, t) {
      return { type: Et.UPDATE_JETPACK_CONNECT_URL, jetpackConnectUrl: t, redirectUrl: e };
    }
    const At = e => dt('core/notices', 'createNotice', 'error', e);
    function It(e) {
      return { type: Et.SET_PAYPAL_ONBOARDING_STATUS, paypalOnboardingStatus: e };
    }
    function Ct(e, t) {
      return { type: Et.SET_RECOMMENDED_PLUGINS, recommendedType: e, plugins: t };
    }
    function* Pt(e, t, r) {
      let o;
      switch (
        ((o = St(t, r)
          ? Object.values(r).join(', \n')
          : $e(r) || r instanceof Error
          ? r.message
          : JSON.stringify(r)),
        e)
      ) {
        case 'install':
          (0, lt.recordEvent)('install_plugins_error', { plugins: t.join(', '), message: o });
          break;
        case 'activate':
          (0, lt.recordEvent)('activate_plugins_error', { plugins: t.join(', '), message: o });
      }
      throw new Tt(_t(e, t, o), r);
    }
    function* Ut(e, t = !1) {
      var r, o;
      yield Rt('installPlugins', !0);
      try {
        const n = yield (0, re.apiFetch)({
          path: `${Ce}/plugins/install`,
          method: 'POST',
          data: { plugins: e.join(','), async: t },
        });
        if (
          ((null === (r = n.data.installed) || void 0 === r ? void 0 : r.length) &&
            (yield ft(n.data.installed)),
          (null === (o = n.errors) || void 0 === o ? void 0 : o.errors) &&
            Object.keys(n.errors.errors).length)
        )
          throw n.errors.errors;
        return n;
      } catch (t) {
        yield gt('installPlugins', t), yield Pt('install', e, t);
      } finally {
        yield Rt('installPlugins', !1);
      }
    }
    function* vt(e) {
      yield Rt('activatePlugins', !0);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/plugins/activate`,
          method: 'POST',
          data: { plugins: e.join(',') },
        });
        if (
          (t.data.activated.length && (yield yt(t.data.activated)),
          Object.keys(t.errors.errors).length)
        )
          throw t.errors.errors;
        return t;
      } catch (t) {
        yield gt('activatePlugins', t), yield Pt('activate', e, t);
      } finally {
        yield Rt('activatePlugins', !1);
      }
    }
    function* Nt(e) {
      try {
        const t = yield dt(ze, 'installPlugins', e),
          r = yield dt(ze, 'activatePlugins', e);
        return { ...r, data: { ...r.data, ...t.data } };
      } catch (e) {
        throw e;
      }
    }
    function* Dt(e) {
      const t = yield pt(ze, 'getJetpackConnectUrl', {
          redirect_url: e('admin.php?page=wc-admin'),
        }),
        r = yield pt(ze, 'getPluginsError', 'getJetpackConnectUrl');
      if (r) throw new Error(r);
      return t;
    }
    function* wt(e, t) {
      try {
        yield dt(ze, 'installPlugins', ['jetpack']), yield dt(ze, 'activatePlugins', ['jetpack']);
        const e = yield dt(ze, 'connectToJetpack', t);
        window.location.href = e;
      } catch (t) {
        if (!(t instanceof Error)) throw t;
        yield e(t.message);
      }
    }
    function* bt(e, t, r) {
      try {
        const e = yield dt(ze, 'connectToJetpack', r);
        window.location.href = e;
      } catch (r) {
        if (!(r instanceof Error)) throw r;
        yield t(r.message), (window.location.href = e);
      }
    }
    const kt = ['payments'];
    function* Gt(e) {
      if (!kt.includes(e)) return [];
      const t = yield pt(ze, 'getRecommendedPlugins', e);
      let r;
      yield Ct(e, []);
      try {
        const e = Ce + '/payment-gateway-suggestions/dismiss';
        r = yield (0, re.apiFetch)({ path: e, method: 'POST' });
      } catch (e) {
        r = !1;
      }
      return r || (yield Ct(e, t)), r;
    }
    const Mt = 'wc/admin/options',
      Lt = (e, t) => e[t],
      Ft = (e, t) => e.requestingErrors[t] || !1,
      qt = e => e.isUpdating || !1,
      jt = e => e.updatingError || !1,
      xt = {
        RECEIVE_OPTIONS: 'RECEIVE_OPTIONS',
        SET_IS_REQUESTING: 'SET_IS_REQUESTING',
        SET_IS_UPDATING: 'SET_IS_UPDATING',
        SET_REQUESTING_ERROR: 'SET_REQUESTING_ERROR',
        SET_UPDATING_ERROR: 'SET_UPDATING_ERROR',
      };
    function Qt(e) {
      return { type: xt.RECEIVE_OPTIONS, options: e };
    }
    function Kt(e, t) {
      return { type: xt.SET_REQUESTING_ERROR, error: e, name: t };
    }
    function Vt(e) {
      return { type: xt.SET_UPDATING_ERROR, error: e };
    }
    function $t(e) {
      return { type: xt.SET_IS_UPDATING, isUpdating: e };
    }
    function* Ht(e) {
      yield $t(!0), yield Qt(e);
      try {
        const t = yield (0, re.apiFetch)({ path: Ce + '/options', method: 'POST', data: e });
        if ((yield $t(!1), 'object' != typeof t))
          throw new Error(`Invalid update options response from server: ${t}`);
        return { success: !0, ...t };
      } catch (e) {
        if ((yield Vt(e), 'object' != typeof e)) throw new Error(`Unexpected error: ${e}`);
        return { success: !1, ...e };
      }
    }
    let Yt = [];
    const Wt = {},
      Jt = e => ({ type: 'BATCH_FETCH', optionName: e }),
      Bt = {
        ...re.controls,
        BATCH_FETCH: ({ optionName: e }) => (
          Yt.push(e),
          new Promise(t => {
            setTimeout(function() {
              if (Wt.hasOwnProperty(e) && Wt[e])
                return Wt[e].then(e => {
                  t(e);
                });
              const r = [...new Set(Yt)].join(','),
                o = Ce + '/options?options=' + r,
                n = ie()({ path: o });
              n.then(e => t(e)),
                Yt.forEach(e => {
                  (Wt[e] = n),
                    Wt[e].then(() => {
                      delete Wt[e];
                    });
                }),
                (Yt = []);
            }, 1);
          })
        ),
      };
    function* zt(e) {
      try {
        const t = yield Jt(e);
        yield Qt(t);
      } catch (t) {
        yield Kt(t, e);
      }
    }
    (0, te.registerStore)(Mt, {
      reducer: (e = { isUpdating: !1, requestingErrors: {} }, t) => {
        switch (t.type) {
          case xt.RECEIVE_OPTIONS:
            e = { ...e, ...t.options };
            break;
          case xt.SET_IS_UPDATING:
            e = { ...e, isUpdating: t.isUpdating };
            break;
          case xt.SET_REQUESTING_ERROR:
            e = { ...e, requestingErrors: { [t.name]: t.error } };
            break;
          case xt.SET_UPDATING_ERROR:
            e = { ...e, error: t.error, updatingError: t.error, isUpdating: !1 };
        }
        return e;
      },
      actions: c,
      controls: Bt,
      selectors: a,
      resolvers: u,
    });
    const Zt = Mt,
      Xt = te.controls && te.controls.resolveSelect ? te.controls.resolveSelect : re.select;
    function* er() {
      yield Rt('getActivePlugins', !0);
      try {
        const e = Ce + '/plugins/active',
          t = yield (0, re.apiFetch)({ path: e, method: 'GET' });
        yield yt(t.plugins, !0);
      } catch (e) {
        yield gt('getActivePlugins', e);
      }
    }
    function* tr() {
      yield Rt('getInstalledPlugins', !0);
      try {
        const e = Ce + '/plugins/installed',
          t = yield (0, re.apiFetch)({ path: e, method: 'GET' });
        yield ft(t.plugins, !0);
      } catch (e) {
        yield gt('getInstalledPlugins', e);
      }
    }
    function* rr() {
      yield Rt('isJetpackConnected', !0);
      try {
        const e = Ae + '/connection',
          t = yield (0, re.apiFetch)({ path: e, method: 'GET' });
        yield mt(t.isActive);
      } catch (e) {
        yield gt('isJetpackConnected', e);
      }
      yield Rt('isJetpackConnected', !1);
    }
    function* or() {
      yield Rt('getJetpackConnectionData', !0);
      try {
        const e = Ae + '/connection/data',
          t = yield (0, re.apiFetch)({ path: e, method: 'GET' });
        yield Ot(t);
      } catch (e) {
        yield gt('getJetpackConnectionData', e);
      }
      yield Rt('getJetpackConnectionData', !1);
    }
    function* nr(e) {
      yield Rt('getJetpackConnectUrl', !0);
      try {
        const t = (0, ne.addQueryArgs)(Ce + '/plugins/connect-jetpack', e),
          r = yield (0, re.apiFetch)({ path: t, method: 'GET' });
        yield ht(e.redirect_url, r.connectAction);
      } catch (e) {
        yield gt('getJetpackConnectUrl', e);
      }
      yield Rt('getJetpackConnectUrl', !1);
    }
    function* sr() {
      const e = yield Xt(Zt, 'getOption', 'woocommerce-ppcp-settings'),
        t =
          e.merchant_email_production &&
          e.merchant_id_production &&
          e.client_id_production &&
          e.client_secret_production;
      yield It({ production: { state: t ? 'onboarded' : 'unknown', onboarded: !!t } });
    }
    function* ir() {
      yield Rt('getPaypalOnboardingStatus', !0);
      const e = yield Xt(ze, 'getPluginsError', 'getPaypalOnboardingStatus');
      if (e && e.data && 404 === e.data.status) yield sr();
      else
        try {
          const e = Ze + '/onboarding/get-status',
            t = yield (0, re.apiFetch)({ path: e, method: 'GET' });
          yield It(t);
        } catch (e) {
          yield sr(), yield gt('getPaypalOnboardingStatus', e);
        }
      yield Rt('getPaypalOnboardingStatus', !1);
    }
    const ar = ['payments'];
    function* cr(e) {
      if (!ar.includes(e)) return [];
      yield Rt('getRecommendedPlugins', !0);
      try {
        const t = Ce + '/payment-gateway-suggestions',
          r = yield (0, re.apiFetch)({ path: t, method: 'GET' });
        yield Ct(e, r);
      } catch (e) {
        yield gt('getRecommendedPlugins', e);
      }
      yield Rt('getRecommendedPlugins', !1);
    }
    (0, te.registerStore)(ze, {
      reducer: (
        e = {
          active: [],
          installed: [],
          requesting: {},
          errors: {},
          jetpackConnectUrls: {},
          recommended: {},
        },
        t,
      ) => {
        if (t && 'type' in t)
          switch (t.type) {
            case Et.UPDATE_ACTIVE_PLUGINS:
              e = {
                ...e,
                active: t.replace ? t.active : (0, he.concat)(e.active, t.active),
                requesting: { ...e.requesting, getActivePlugins: !1, activatePlugins: !1 },
                errors: { ...e.errors, getActivePlugins: !1, activatePlugins: !1 },
              };
              break;
            case Et.UPDATE_INSTALLED_PLUGINS:
              e = {
                ...e,
                installed: t.replace ? t.installed : (0, he.concat)(e.installed, t.installed),
                requesting: { ...e.requesting, getInstalledPlugins: !1, installPlugins: !1 },
                errors: { ...e.errors, getInstalledPlugins: !1, installPlugin: !1 },
              };
              break;
            case Et.SET_IS_REQUESTING:
              e = { ...e, requesting: { ...e.requesting, [t.selector]: t.isRequesting } };
              break;
            case Et.SET_ERROR:
              e = {
                ...e,
                requesting: { ...e.requesting, [t.selector]: !1 },
                errors: { ...e.errors, [t.selector]: t.error },
              };
              break;
            case Et.UPDATE_JETPACK_CONNECTION:
              e = { ...e, jetpackConnection: t.jetpackConnection };
              break;
            case Et.UPDATE_JETPACK_CONNECTION_DATA:
              e = { ...e, jetpackConnectionData: t.results };
              break;
            case Et.UPDATE_JETPACK_CONNECT_URL:
              e = {
                ...e,
                jetpackConnectUrls: {
                  ...e.jetpackConnectUrls,
                  [t.redirectUrl]: t.jetpackConnectUrl,
                },
              };
              break;
            case Et.SET_PAYPAL_ONBOARDING_STATUS:
              e = { ...e, paypalOnboardingStatus: t.paypalOnboardingStatus };
              break;
            case Et.SET_RECOMMENDED_PLUGINS:
              e = { ...e, recommended: { ...e.recommended, [t.recommendedType]: t.plugins } };
          }
        return e;
      },
      actions: i,
      controls: re.controls,
      selectors: s,
      resolvers: l,
    });
    const ur = ze,
      lr = 'wc/admin/onboarding';
    var Er = {};
    function dr(e) {
      return [e];
    }
    function pr(e, t, r) {
      var o;
      if (e.length !== t.length) return !1;
      for (o = r; o < e.length; o++) if (e[o] !== t[o]) return !1;
      return !0;
    }
    function Tr(e, t) {
      var r,
        o = t || dr;
      function n() {
        r = new WeakMap();
      }
      function s() {
        var t,
          n,
          s,
          i,
          a,
          c = arguments.length;
        for (i = new Array(c), s = 0; s < c; s++) i[s] = arguments[s];
        for (
          t = (function(e) {
            var t,
              o,
              n,
              s,
              i,
              a = r,
              c = !0;
            for (t = 0; t < e.length; t++) {
              if (!(i = o = e[t]) || 'object' != typeof i) {
                c = !1;
                break;
              }
              a.has(o) ? (a = a.get(o)) : ((n = new WeakMap()), a.set(o, n), (a = n));
            }
            return (
              a.has(Er) ||
                (((s = (function() {
                  var e = {
                    clear: function() {
                      e.head = null;
                    },
                  };
                  return e;
                })()).isUniqueByDependants = c),
                a.set(Er, s)),
              a.get(Er)
            );
          })((a = o.apply(null, i))),
            t.isUniqueByDependants ||
              (t.lastDependants && !pr(a, t.lastDependants, 0) && t.clear(),
              (t.lastDependants = a)),
            n = t.head;
          n;

        ) {
          if (pr(n.args, i, 1))
            return (
              n !== t.head &&
                ((n.prev.next = n.next),
                n.next && (n.next.prev = n.prev),
                (n.next = t.head),
                (n.prev = null),
                (t.head.prev = n),
                (t.head = n)),
              n.val
            );
          n = n.next;
        }
        return (
          (n = { val: e.apply(null, i) }),
          (i[0] = null),
          (n.args = i),
          t.head && ((t.head.prev = n), (n.next = t.head)),
          (t.head = n),
          n.val
        );
      }
      return (s.getDependants = o), (s.clear = n), n(), s;
    }
    const Sr = e => e.freeExtensions || [],
      _r = e => e.profileItems || {},
      yr = Tr(
        e => Object.values(e.taskLists),
        e => [e.taskLists],
      ),
      fr = Tr(
        (e, t) => t.map(t => e.taskLists[t]),
        (e, t) => t.map(t => e.taskLists[t]),
      ),
      Rr = (e, t) => e.taskLists[t],
      gr = (e, t) =>
        Object.keys(e.taskLists).reduce(
          (r, o) => r || e.taskLists[o].tasks.find(e => e.id === t),
          void 0,
        ),
      mr = e => e.paymentMethods || [],
      Or = (e, t) => e.errors[t] || !1,
      hr = (e, t) => e.requesting[t] || !1,
      Ar = e => e.emailPrefill || '',
      Ir = e => e.productTypes || {},
      Cr = (e, t) => e.jetpackAuthUrls[t.redirectUrl] || '',
      Pr = {
        SET_ERROR: 'SET_ERROR',
        SET_IS_REQUESTING: 'SET_IS_REQUESTING',
        SET_PROFILE_ITEMS: 'SET_PROFILE_ITEMS',
        SET_EMAIL_PREFILL: 'SET_EMAIL_PREFILL',
        GET_PAYMENT_METHODS_SUCCESS: 'GET_PAYMENT_METHODS_SUCCESS',
        GET_PRODUCT_TYPES_SUCCESS: 'GET_PRODUCT_TYPES_SUCCESS',
        GET_PRODUCT_TYPES_ERROR: 'GET_PRODUCT_TYPES_ERROR',
        GET_FREE_EXTENSIONS_ERROR: 'GET_FREE_EXTENSIONS_ERROR',
        GET_FREE_EXTENSIONS_SUCCESS: 'GET_FREE_EXTENSIONS_SUCCESS',
        GET_TASK_LISTS_ERROR: 'GET_TASK_LISTS_ERROR',
        GET_TASK_LISTS_SUCCESS: 'GET_TASK_LISTS_SUCCESS',
        DISMISS_TASK_ERROR: 'DISMISS_TASK_ERROR',
        DISMISS_TASK_REQUEST: 'DISMISS_TASK_REQUEST',
        DISMISS_TASK_SUCCESS: 'DISMISS_TASK_SUCCESS',
        UNDO_DISMISS_TASK_ERROR: 'UNDO_DISMISS_TASK_ERROR',
        UNDO_DISMISS_TASK_REQUEST: 'UNDO_DISMISS_TASK_REQUEST',
        UNDO_DISMISS_TASK_SUCCESS: 'UNDO_DISMISS_TASK_SUCCESS',
        SNOOZE_TASK_ERROR: 'SNOOZE_TASK_ERROR',
        SNOOZE_TASK_REQUEST: 'SNOOZE_TASK_REQUEST',
        SNOOZE_TASK_SUCCESS: 'SNOOZE_TASK_SUCCESS',
        UNDO_SNOOZE_TASK_ERROR: 'UNDO_SNOOZE_TASK_ERROR',
        UNDO_SNOOZE_TASK_REQUEST: 'UNDO_SNOOZE_TASK_REQUEST',
        UNDO_SNOOZE_TASK_SUCCESS: 'UNDO_SNOOZE_TASK_SUCCESS',
        HIDE_TASK_LIST_ERROR: 'HIDE_TASK_LIST_ERROR',
        HIDE_TASK_LIST_REQUEST: 'HIDE_TASK_LIST_REQUEST',
        HIDE_TASK_LIST_SUCCESS: 'HIDE_TASK_LIST_SUCCESS',
        UNHIDE_TASK_LIST_ERROR: 'UNHIDE_TASK_LIST_ERROR',
        UNHIDE_TASK_LIST_REQUEST: 'UNHIDE_TASK_LIST_REQUEST',
        UNHIDE_TASK_LIST_SUCCESS: 'UNHIDE_TASK_LIST_SUCCESS',
        OPTIMISTICALLY_COMPLETE_TASK_REQUEST: 'OPTIMISTICALLY_COMPLETE_TASK_REQUEST',
        ACTION_TASK_ERROR: 'ACTION_TASK_ERROR',
        ACTION_TASK_REQUEST: 'ACTION_TASK_REQUEST',
        ACTION_TASK_SUCCESS: 'ACTION_TASK_SUCCESS',
        VISITED_TASK: 'VISITED_TASK',
        KEEP_COMPLETED_TASKS_REQUEST: 'KEEP_COMPLETED_TASKS_REQUEST',
        KEEP_COMPLETED_TASKS_SUCCESS: 'KEEP_COMPLETED_TASKS_SUCCESS',
        SET_JETPACK_AUTH_URL: 'SET_JETPACK_AUTH_URL',
        CORE_PROFILER_COMPLETED_REQUEST: 'CORE_PROFILER_COMPLETED_REQUEST',
        CORE_PROFILER_COMPLETED_SUCCESS: 'CORE_PROFILER_COMPLETED_SUCCESS',
        CORE_PROFILER_COMPLETED_ERROR: 'CORE_PROFILER_COMPLETED_ERROR',
      },
      Ur = window.wp.hooks;
    var vr = r(67905);
    const Nr = window.wp.deprecated;
    var Dr = r.n(Nr);
    class wr {
      constructor() {
        (this.filteredTasks = (0, Ur.applyFilters)(
          'woocommerce_admin_onboarding_task_list',
          [],
          (function() {
            const e = window.location && window.location.search;
            if (!e) return {};
            const t = e.substring(1);
            return (0, vr.parse)(t);
          })(),
        )),
          this.filteredTasks &&
            this.filteredTasks.length > 0 &&
            Dr()('woocommerce_admin_onboarding_task_list', {
              version: '2.10.0',
              alternative: 'TaskLists::add_task()',
              plugin: '@woocommerce/data',
            }),
          (this.tasks = this.filteredTasks.reduce((e, t) => ({ ...e, [t.key]: t }), {}));
      }
      hasDeprecatedTasks() {
        return this.filteredTasks.length > 0;
      }
      getPostData() {
        return this.hasDeprecatedTasks()
          ? {
              extended_tasks: this.filteredTasks.map(e => ({
                title: e.title,
                content: e.content,
                additional_info: e.additionalInfo,
                time: e.time,
                level: e.level ? parseInt(e.level, 10) : 3,
                list_id: e.type || 'extended',
                can_view: e.visible,
                id: e.key,
                is_snoozeable: e.allowRemindMeLater,
                is_dismissable: e.isDismissable,
                is_complete: e.completed,
              })),
            }
          : null;
      }
      mergeDeprecatedCallbackFunctions(e) {
        if (this.filteredTasks.length > 0)
          for (const t of e)
            t.tasks = t.tasks.map(e =>
              this.tasks && this.tasks[e.id] ? { ...this.tasks[e.id], ...e, isDeprecated: !0 } : e,
            );
        return e;
      }
      static possiblyPruneTaskData(e, t) {
        return e.time || e.title ? e : t.reduce((t, r) => ({ ...t, [r]: e[r] }), { id: e.id });
      }
    }
    function br(e) {
      return { type: Pr.GET_FREE_EXTENSIONS_ERROR, error: e };
    }
    function kr(e) {
      return { type: Pr.GET_FREE_EXTENSIONS_SUCCESS, freeExtensions: e };
    }
    function Gr(e, t) {
      return { type: Pr.SET_ERROR, selector: e, error: t };
    }
    function Mr(e, t) {
      return { type: Pr.SET_IS_REQUESTING, selector: e, isRequesting: t };
    }
    function Lr(e, t = !1) {
      return { type: Pr.SET_PROFILE_ITEMS, profileItems: e, replace: t };
    }
    function Fr(e) {
      return { type: Pr.GET_TASK_LISTS_ERROR, error: e };
    }
    function qr(e) {
      return { type: Pr.GET_TASK_LISTS_SUCCESS, taskLists: e };
    }
    function jr(e, t) {
      return { type: Pr.SNOOZE_TASK_ERROR, taskId: e, error: t };
    }
    function xr(e) {
      return { type: Pr.SNOOZE_TASK_REQUEST, taskId: e };
    }
    function Qr(e) {
      return { type: Pr.SNOOZE_TASK_SUCCESS, task: e };
    }
    function Kr(e, t) {
      return { type: Pr.UNDO_SNOOZE_TASK_ERROR, taskId: e, error: t };
    }
    function Vr(e) {
      return { type: Pr.UNDO_SNOOZE_TASK_REQUEST, taskId: e };
    }
    function $r(e) {
      return { type: Pr.UNDO_SNOOZE_TASK_SUCCESS, task: e };
    }
    function Hr(e, t) {
      return { type: Pr.DISMISS_TASK_ERROR, taskId: e, error: t };
    }
    function Yr(e) {
      return { type: Pr.DISMISS_TASK_REQUEST, taskId: e };
    }
    function Wr(e) {
      return { type: Pr.DISMISS_TASK_SUCCESS, task: e };
    }
    function Jr(e, t) {
      return { type: Pr.UNDO_DISMISS_TASK_ERROR, taskId: e, error: t };
    }
    function Br(e) {
      return { type: Pr.UNDO_DISMISS_TASK_REQUEST, taskId: e };
    }
    function zr(e) {
      return { type: Pr.UNDO_DISMISS_TASK_SUCCESS, task: e };
    }
    function Zr(e, t) {
      return { type: Pr.HIDE_TASK_LIST_ERROR, taskListId: e, error: t };
    }
    function Xr(e) {
      return { type: Pr.HIDE_TASK_LIST_REQUEST, taskListId: e };
    }
    function eo(e) {
      return { type: Pr.HIDE_TASK_LIST_SUCCESS, taskList: e, taskListId: e.id };
    }
    function to(e, t) {
      return { type: Pr.UNHIDE_TASK_LIST_ERROR, taskListId: e, error: t };
    }
    function ro(e) {
      return { type: Pr.UNHIDE_TASK_LIST_REQUEST, taskListId: e };
    }
    function oo(e) {
      return { type: Pr.UNHIDE_TASK_LIST_SUCCESS, taskList: e, taskListId: e.id };
    }
    function no(e) {
      return { type: Pr.OPTIMISTICALLY_COMPLETE_TASK_REQUEST, taskId: e };
    }
    function so(e, t) {
      return { type: Pr.KEEP_COMPLETED_TASKS_SUCCESS, taskListId: e, keepCompletedTaskList: t };
    }
    function io(e) {
      return { type: Pr.VISITED_TASK, taskId: e };
    }
    function ao(e) {
      return { type: Pr.GET_PAYMENT_METHODS_SUCCESS, paymentMethods: e };
    }
    function co(e) {
      return { type: Pr.SET_EMAIL_PREFILL, emailPrefill: e };
    }
    function uo(e, t) {
      return { type: Pr.ACTION_TASK_ERROR, taskId: e, error: t };
    }
    function lo(e) {
      return { type: Pr.ACTION_TASK_REQUEST, taskId: e };
    }
    function Eo(e) {
      return { type: Pr.ACTION_TASK_SUCCESS, task: e };
    }
    function po(e) {
      return { type: Pr.GET_PRODUCT_TYPES_SUCCESS, productTypes: e };
    }
    function To(e) {
      return { type: Pr.GET_PRODUCT_TYPES_ERROR, error: e };
    }
    function* So(e) {
      const t = yield te.controls.dispatch(Mt, 'updateOptions', {
        woocommerce_task_list_keep_completed: 'yes',
      });
      t && t.success && (yield so(e, 'yes'));
    }
    function* _o(e) {
      yield Mr('updateProfileItems', !0), yield Gr('updateProfileItems', null);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/profile`,
          method: 'POST',
          data: e,
        });
        if (t && 'success' === t.status) return yield Lr(e), yield Mr('updateProfileItems', !1), t;
        throw new Error();
      } catch (e) {
        throw (yield Gr('updateProfileItems', e), yield Mr('updateProfileItems', !1), e);
      }
    }
    function* yo(e) {
      yield xr(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/snooze`,
          method: 'POST',
        });
        yield Qr(wr.possiblyPruneTaskData(t, ['isSnoozed', 'isDismissed', 'snoozedUntil']));
      } catch (t) {
        throw (yield jr(e, t), new Error());
      }
    }
    function* fo(e) {
      yield Vr(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/undo_snooze`,
          method: 'POST',
        });
        yield $r(wr.possiblyPruneTaskData(t, ['isSnoozed', 'isDismissed', 'snoozedUntil']));
      } catch (t) {
        throw (yield Kr(e, t), new Error());
      }
    }
    function* Ro(e) {
      yield Yr(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/dismiss`,
          method: 'POST',
        });
        yield Wr(wr.possiblyPruneTaskData(t, ['isDismissed', 'isSnoozed']));
      } catch (t) {
        throw (yield Hr(e, t), new Error());
      }
    }
    function* go(e) {
      yield Br(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/undo_dismiss`,
          method: 'POST',
        });
        yield zr(wr.possiblyPruneTaskData(t, ['isDismissed', 'isSnoozed']));
      } catch (t) {
        throw (yield Jr(e, t), new Error());
      }
    }
    function* mo(e) {
      yield Xr(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/hide`,
          method: 'POST',
        });
        yield eo(t);
      } catch (t) {
        throw (yield Zr(e, t), new Error());
      }
    }
    function* Oo(e) {
      yield ro(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/unhide`,
          method: 'POST',
        });
        yield oo(t);
      } catch (t) {
        throw (yield to(e, t), new Error());
      }
    }
    function* ho(e) {
      yield no(e);
    }
    function* Ao(e) {
      yield lo(e);
      try {
        const t = yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/tasks/${e}/action`,
          method: 'POST',
        });
        yield Eo(wr.possiblyPruneTaskData(t, ['isActioned']));
      } catch (t) {
        throw (yield uo(e, t), new Error());
      }
    }
    function* Io(e) {
      yield Mr('installAndActivatePluginsAsync', !0);
      try {
        return yield (0, re.apiFetch)({
          path: `${Ce}/onboarding/plugins/install-and-activate-async`,
          method: 'POST',
          data: { plugins: e },
        });
      } catch (e) {
        throw e;
      } finally {
        yield Mr('installAndActivatePluginsAsync', !1);
      }
    }
    function Co(e, t, r = '') {
      return { type: Pr.SET_JETPACK_AUTH_URL, results: e, redirectUrl: t, from: r };
    }
    function Po(e) {
      return { type: Pr.CORE_PROFILER_COMPLETED_ERROR, error: e };
    }
    function Uo() {
      return { type: Pr.CORE_PROFILER_COMPLETED_REQUEST };
    }
    function vo() {
      return { type: Pr.CORE_PROFILER_COMPLETED_SUCCESS };
    }
    function* No() {
      yield Uo();
      try {
        yield (0, re.apiFetch)({
          path: `${Ce}/launch-your-store/initialize-coming-soon`,
          method: 'POST',
        });
      } catch (e) {
        throw (yield Po(e), e);
      } finally {
        yield vo();
      }
    }
    const Do = te.controls && te.controls.resolveSelect ? te.controls.resolveSelect : re.select;
    function* wo() {
      try {
        const e = yield (0, re.apiFetch)({ path: Ce + '/onboarding/profile', method: 'GET' });
        yield Lr(e, !0);
      } catch (e) {
        yield Gr('getProfileItems', e);
      }
    }
    function* bo() {
      try {
        const e = yield (0, re.apiFetch)({
          path: Ce + '/onboarding/profile/experimental_get_email_prefill',
          method: 'GET',
        });
        yield co(e.email);
      } catch (e) {
        yield Gr('getEmailPrefill', e);
      }
    }
    function* ko() {
      const e = new wr();
      try {
        const t = yield (0, re.apiFetch)({
          path: Ce + '/onboarding/tasks',
          method: e.hasDeprecatedTasks() ? 'POST' : 'GET',
          data: e.getPostData(),
        });
        e.mergeDeprecatedCallbackFunctions(t), yield qr(t);
      } catch (e) {
        yield Fr(e);
      }
    }
    function* Go() {
      yield Do(lr, 'getTaskLists');
    }
    function* Mo() {
      yield Do(lr, 'getTaskLists');
    }
    function* Lo() {
      yield Do(lr, 'getTaskLists');
    }
    function* Fo(e = !1) {
      let t = Ce + '/payment-gateway-suggestions';
      e && (t += '?force_default_suggestions=true');
      try {
        const e = yield (0, re.apiFetch)({ path: t, method: 'GET' });
        yield ao(e);
      } catch (e) {
        yield Gr('getPaymentGatewaySuggestions', e);
      }
    }
    function* qo() {
      try {
        const e = yield (0, re.apiFetch)({
          path: Ce + '/onboarding/free-extensions',
          method: 'GET',
        });
        yield kr(e);
      } catch (e) {
        yield br(e);
      }
    }
    function* jo() {
      try {
        const e = yield (0, re.apiFetch)({ path: Ce + '/onboarding/product-types', method: 'GET' });
        yield po(e);
      } catch (e) {
        yield To(e);
      }
    }
    function* xo(e) {
      var t;
      try {
        let r =
          Ce +
          '/onboarding/plugins/jetpack-authorization-url?redirect_url=' +
          encodeURIComponent(e.redirectUrl);
        e.from && (r += '&from=' + e.from);
        const o = yield (0, re.apiFetch)({ path: r, method: 'GET' });
        yield Co(o, e.redirectUrl, null !== (t = e.from) && void 0 !== t ? t : '');
      } catch (e) {
        yield Gr('getJetpackAuthUrl', e);
      }
    }
    const Qo = {
        errors: {},
        freeExtensions: [],
        profileItems: {
          business_extensions: null,
          completed: null,
          industry: null,
          number_employees: null,
          other_platform: null,
          other_platform_name: null,
          product_count: null,
          product_types: null,
          revenue: null,
          selling_venues: null,
          setup_client: null,
          skipped: null,
          theme: null,
          wccom_connected: null,
          is_agree_marketing: null,
          store_email: null,
          is_store_country_set: null,
        },
        emailPrefill: '',
        paymentMethods: [],
        productTypes: {},
        requesting: {},
        taskLists: {},
        jetpackAuthUrls: {},
      },
      Ko = (e, t) =>
        Object.keys(e).reduce(
          (r, o) => ({
            ...r,
            [o]: { ...e[o], tasks: e[o].tasks.map(e => (t.id === e.id ? { ...e, ...t } : e)) },
          }),
          { ...e },
        );
    (0, te.registerStore)(lr, {
      reducer: (e = Qo, t) => {
        switch (t.type) {
          case Pr.SET_PROFILE_ITEMS:
            return {
              ...e,
              profileItems: t.replace ? t.profileItems : { ...e.profileItems, ...t.profileItems },
            };
          case Pr.SET_EMAIL_PREFILL:
            return { ...e, emailPrefill: t.emailPrefill };
          case Pr.SET_ERROR:
            return { ...e, errors: { ...e.errors, [t.selector]: t.error } };
          case Pr.SET_IS_REQUESTING:
            return { ...e, requesting: { ...e.requesting, [t.selector]: t.isRequesting } };
          case Pr.GET_PAYMENT_METHODS_SUCCESS:
            return { ...e, paymentMethods: t.paymentMethods };
          case Pr.GET_PRODUCT_TYPES_SUCCESS:
            return { ...e, productTypes: t.productTypes };
          case Pr.GET_PRODUCT_TYPES_ERROR:
            return { ...e, errors: { ...e.errors, productTypes: t.error } };
          case Pr.GET_FREE_EXTENSIONS_ERROR:
            return { ...e, errors: { ...e.errors, getFreeExtensions: t.error } };
          case Pr.GET_FREE_EXTENSIONS_SUCCESS:
            return { ...e, freeExtensions: t.freeExtensions };
          case Pr.GET_TASK_LISTS_ERROR:
            return { ...e, errors: { ...e.errors, getTaskLists: t.error } };
          case Pr.GET_TASK_LISTS_SUCCESS:
            return {
              ...e,
              taskLists: t.taskLists.reduce((e, t) => ({ ...e, [t.id]: t }), e.taskLists || {}),
            };
          case Pr.DISMISS_TASK_ERROR:
            return {
              ...e,
              errors: { ...e.errors, dismissTask: t.error },
              taskLists: Ko(e.taskLists, { id: t.taskId, isDismissed: !1 }),
            };
          case Pr.DISMISS_TASK_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, dismissTask: !0 },
              taskLists: Ko(e.taskLists, { id: t.taskId, isDismissed: !0 }),
            };
          case Pr.DISMISS_TASK_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, dismissTask: !1 },
              taskLists: Ko(e.taskLists, t.task),
            };
          case Pr.UNDO_DISMISS_TASK_ERROR:
            return {
              ...e,
              errors: { ...e.errors, undoDismissTask: t.error },
              taskLists: Ko(e.taskLists, { id: t.taskId, isDismissed: !0 }),
            };
          case Pr.UNDO_DISMISS_TASK_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, undoDismissTask: !0 },
              taskLists: Ko(e.taskLists, { id: t.taskId, isDismissed: !1 }),
            };
          case Pr.UNDO_DISMISS_TASK_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, undoDismissTask: !1 },
              taskLists: Ko(e.taskLists, t.task),
            };
          case Pr.SNOOZE_TASK_ERROR:
            return {
              ...e,
              errors: { ...e.errors, snoozeTask: t.error },
              taskLists: Ko(e.taskLists, { id: t.taskId, isSnoozed: !1 }),
            };
          case Pr.SNOOZE_TASK_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, snoozeTask: !0 },
              taskLists: Ko(e.taskLists, { id: t.taskId, isSnoozed: !0 }),
            };
          case Pr.SNOOZE_TASK_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, snoozeTask: !1 },
              taskLists: Ko(e.taskLists, t.task),
            };
          case Pr.UNDO_SNOOZE_TASK_ERROR:
            return {
              ...e,
              errors: { ...e.errors, undoSnoozeTask: t.error },
              taskLists: Ko(e.taskLists, { id: t.taskId, isSnoozed: !0 }),
            };
          case Pr.UNDO_SNOOZE_TASK_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, undoSnoozeTask: !0 },
              taskLists: Ko(e.taskLists, { id: t.taskId, isSnoozed: !1 }),
            };
          case Pr.UNDO_SNOOZE_TASK_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, undoSnoozeTask: !1 },
              taskLists: Ko(e.taskLists, t.task),
            };
          case Pr.HIDE_TASK_LIST_ERROR:
            return {
              ...e,
              errors: { ...e.errors, hideTaskList: t.error },
              taskLists: {
                ...e.taskLists,
                [t.taskListId]: { ...e.taskLists[t.taskListId], isHidden: !1, isVisible: !0 },
              },
            };
          case Pr.HIDE_TASK_LIST_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, hideTaskList: !0 },
              taskLists: {
                ...e.taskLists,
                [t.taskListId]: { ...e.taskLists[t.taskListId], isHidden: !0, isVisible: !1 },
              },
            };
          case Pr.HIDE_TASK_LIST_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, hideTaskList: !1 },
              taskLists: { ...e.taskLists, [t.taskListId]: t.taskList },
            };
          case Pr.UNHIDE_TASK_LIST_ERROR:
            return {
              ...e,
              errors: { ...e.errors, unhideTaskList: t.error },
              taskLists: {
                ...e.taskLists,
                [t.taskListId]: { ...e.taskLists[t.taskListId], isHidden: !0, isVisible: !1 },
              },
            };
          case Pr.UNHIDE_TASK_LIST_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, unhideTaskList: !0 },
              taskLists: {
                ...e.taskLists,
                [t.taskListId]: { ...e.taskLists[t.taskListId], isHidden: !1, isVisible: !0 },
              },
            };
          case Pr.UNHIDE_TASK_LIST_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, unhideTaskList: !1 },
              taskLists: { ...e.taskLists, [t.taskListId]: t.taskList },
            };
          case Pr.KEEP_COMPLETED_TASKS_SUCCESS:
            return {
              ...e,
              taskLists: {
                ...e.taskLists,
                [t.taskListId]: {
                  ...e.taskLists[t.taskListId],
                  keepCompletedTaskList: t.keepCompletedTaskList,
                },
              },
            };
          case Pr.OPTIMISTICALLY_COMPLETE_TASK_REQUEST:
            return { ...e, taskLists: Ko(e.taskLists, { id: t.taskId, isComplete: !0 }) };
          case Pr.VISITED_TASK:
            return { ...e, taskLists: Ko(e.taskLists, { id: t.taskId, isVisited: !0 }) };
          case Pr.ACTION_TASK_ERROR:
            return {
              ...e,
              errors: { ...e.errors, actionTask: t.error },
              taskLists: Ko(e.taskLists, { id: t.taskId, isActioned: !1 }),
            };
          case Pr.ACTION_TASK_REQUEST:
            return {
              ...e,
              requesting: { ...e.requesting, actionTask: !0 },
              taskLists: Ko(e.taskLists, { id: t.taskId, isActioned: !0 }),
            };
          case Pr.ACTION_TASK_SUCCESS:
            return {
              ...e,
              requesting: { ...e.requesting, actionTask: !1 },
              taskLists: Ko(e.taskLists, t.task),
            };
          case Pr.SET_JETPACK_AUTH_URL:
            return { ...e, jetpackAuthUrls: { ...e.jetpackAuthUrls, [t.redirectUrl]: t.results } };
          case Pr.CORE_PROFILER_COMPLETED_REQUEST:
            return { ...e, requesting: { ...e.requesting, coreProfilerCompleted: !0 } };
          case Pr.CORE_PROFILER_COMPLETED_SUCCESS:
            return { ...e, requesting: { ...e.requesting, coreProfilerCompleted: !1 } };
          case Pr.CORE_PROFILER_COMPLETED_ERROR:
            return {
              ...e,
              errors: { ...e.errors, coreProfilerCompleted: t.error },
              requesting: { ...e.requesting, coreProfilerCompleted: !1 },
            };
          default:
            return e;
        }
      },
      actions: d,
      controls: re.controls,
      selectors: E,
      resolvers: p,
    });
    const Vo = lr,
      $o = 'core',
      Ho = $o,
      Yo = 'wc/admin/reviews',
      Wo = (e, t) => {
        const r = JSON.stringify(t);
        return ((e.reviews[r] && e.reviews[r].data) || []).map(t => e.data[t]);
      },
      Jo = (e, t) => {
        const r = JSON.stringify(t);
        return e.reviews[r] && e.reviews[r].totalCount;
      },
      Bo = (e, t) => {
        const r = JSON.stringify(t);
        return e.errors[r];
      },
      zo = {
        UPDATE_REVIEWS: 'UPDATE_REVIEWS',
        SET_REVIEW: 'SET_REVIEW',
        SET_ERROR: 'SET_ERROR',
        SET_REVIEW_IS_UPDATING: 'SET_REVIEW_IS_UPDATING',
      };
    function Zo(e, t) {
      return { type: zo.SET_REVIEW_IS_UPDATING, reviewId: e, isUpdating: t };
    }
    function Xo(e, t) {
      return { type: zo.SET_REVIEW, reviewId: e, reviewData: t };
    }
    function en(e, t) {
      return { type: zo.SET_ERROR, query: e, error: t };
    }
    function tn(e, t, r) {
      return { type: zo.UPDATE_REVIEWS, reviews: t, query: e, totalCount: r };
    }
    function* rn(e, t, r) {
      yield Zo(e, !0);
      try {
        const o = (0, ne.addQueryArgs)(`${Ie}/products/reviews/${e}`, r || {}),
          n = yield (0, re.apiFetch)({ path: o, method: 'PUT', data: t });
        yield Xo(e, n), yield Zo(e, !1);
      } catch (t) {
        throw (yield en('updateReview', t), yield Zo(e, !1), new Error());
      }
    }
    function* on(e) {
      yield Zo(e, !0);
      try {
        const t = `${Ie}/products/reviews/${e}`,
          r = yield (0, re.apiFetch)({ path: t, method: 'DELETE' });
        return yield Xo(e, r), yield Zo(e, !1), r;
      } catch (t) {
        throw (yield en('deleteReview', t), yield Zo(e, !1), new Error());
      }
    }
    function* nn(e) {
      try {
        const t = (0, ne.addQueryArgs)(`${Ie}/products/reviews`, e),
          r = yield ae({ path: t, method: 'GET' }),
          o = r.headers.get('x-wp-total');
        if (void 0 === o)
          throw new Error(
            "Malformed response from server. 'x-wp-total' header is missing when retriving ./products/reviews.",
          );
        const n = parseInt(o, 10);
        yield tn(e, r.data, n);
      } catch (t) {
        yield en(JSON.stringify(e), t);
      }
    }
    function* sn(e) {
      yield nn(e);
    }
    const an = { reviews: {}, errors: {}, data: {} };
    (0, te.registerStore)(Yo, {
      reducer: (e = an, t) => {
        switch (t.type) {
          case zo.UPDATE_REVIEWS:
            const r = [],
              o = t.reviews.reduce(
                (t, o) => (r.push(o.id), (t[o.id] = { ...(e.data[o.id] || {}), ...o }), t),
                {},
              );
            return {
              ...e,
              reviews: {
                ...e.reviews,
                [JSON.stringify(t.query)]: { data: r, totalCount: t.totalCount },
              },
              data: { ...e.data, ...o },
            };
          case zo.SET_REVIEW:
            return { ...e, data: { ...e.data, [t.reviewId]: t.reviewData } };
          case zo.SET_ERROR:
            return { ...e, errors: { ...e.errors, [JSON.stringify(t.query)]: t.error } };
          case zo.SET_REVIEW_IS_UPDATING:
            return {
              ...e,
              data: {
                ...e.data,
                [t.reviewId]: { ...e.data[t.reviewId], isUpdating: t.isUpdating },
              },
            };
          default:
            return e;
        }
      },
      actions: S,
      controls: ce,
      selectors: T,
      resolvers: _,
    });
    const cn = Yo,
      un = 'wc/admin/notes',
      ln = Tr(
        (e, t) => (e.noteQueries[JSON.stringify(t)] || []).map(t => e.notes[t]),
        (e, t) => [e.noteQueries[JSON.stringify(t)], e.notes],
      ),
      En = (e, t) => e.errors[t] || !1,
      dn = (e, t) => e.requesting[t] || !1,
      pn = {
        SET_ERROR: 'SET_ERROR',
        SET_NOTE: 'SET_NOTE',
        SET_NOTE_IS_UPDATING: 'SET_NOTE_IS_UPDATING',
        SET_NOTES: 'SET_NOTES',
        SET_NOTES_QUERY: 'SET_NOTES_QUERY',
        SET_IS_REQUESTING: 'SET_IS_REQUESTING',
      };
    function Tn(e, t) {
      return { type: pn.SET_NOTE, noteId: e, noteFields: t };
    }
    function Sn(e, t) {
      return { type: pn.SET_NOTE_IS_UPDATING, noteId: e, isUpdating: t };
    }
    function _n(e) {
      return { type: pn.SET_NOTES, notes: e };
    }
    function yn(e, t) {
      return { type: pn.SET_NOTES_QUERY, query: e, noteIds: t };
    }
    function fn(e, t) {
      return { type: pn.SET_ERROR, error: t, selector: e };
    }
    function Rn(e, t) {
      return { type: pn.SET_IS_REQUESTING, selector: e, isRequesting: t };
    }
    function* gn(e, t) {
      yield Rn('updateNote', !0), yield Sn(e, !0);
      try {
        const r = `${Ie}/admin/notes/${e}`,
          o = yield (0, re.apiFetch)({ path: r, method: 'PUT', data: t });
        yield Tn(e, o), yield Rn('updateNote', !1), yield Sn(e, !1);
      } catch (t) {
        throw (yield fn('updateNote', t), yield Rn('updateNote', !1), yield Sn(e, !1), new Error());
      }
    }
    function* mn(e, t) {
      yield Rn('triggerNoteAction', !0);
      const r = `${Ie}/admin/notes/${e}/action/${t}`;
      try {
        const t = yield (0, re.apiFetch)({ path: r, method: 'POST' });
        yield gn(e, t), yield Rn('triggerNoteAction', !1);
      } catch (e) {
        throw (yield fn('triggerNoteAction', e), yield Rn('triggerNoteAction', !1), new Error());
      }
    }
    function* On(e) {
      yield Rn('removeNote', !0), yield Sn(e, !0);
      try {
        const t = `${Ie}/admin/notes/delete/${e}`,
          r = yield (0, re.apiFetch)({ path: t, method: 'DELETE' });
        return yield Tn(e, r), yield Rn('removeNote', !1), r;
      } catch (t) {
        throw (yield fn('removeNote', t), yield Rn('removeNote', !1), yield Sn(e, !1), new Error());
      }
    }
    function* hn(e = {}) {
      yield Rn('removeAllNotes', !0);
      try {
        const t = (0, ne.addQueryArgs)(`${Ie}/admin/notes/delete/all`, e),
          r = yield (0, re.apiFetch)({ path: t, method: 'DELETE' });
        return yield _n(r), yield Rn('removeAllNotes', !1), r;
      } catch (e) {
        throw (yield fn('removeAllNotes', e), yield Rn('removeAllNotes', !1), new Error());
      }
    }
    function* An(e, t) {
      yield Rn('batchUpdateNotes', !0);
      try {
        const r = `${Ie}/admin/notes/update`,
          o = yield (0, re.apiFetch)({ path: r, method: 'PUT', data: { noteIds: e, ...t } });
        yield _n(o), yield Rn('batchUpdateNotes', !1);
      } catch (e) {
        throw (yield fn('updateNote', e), yield Rn('batchUpdateNotes', !1), new Error());
      }
    }
    function* In(e = {}) {
      const t = (0, ne.addQueryArgs)(`${Ie}/admin/notes`, e);
      try {
        const r = yield (0, re.apiFetch)({ path: t });
        yield _n(r),
          yield yn(
            e,
            r.map(e => e.id),
          );
      } catch (e) {
        yield fn('getNotes', e);
      }
    }
    (0, te.registerStore)(un, {
      reducer: (e = { errors: {}, noteQueries: {}, notes: {}, requesting: {} }, t) => {
        switch (t.type) {
          case pn.SET_NOTES:
            e = {
              ...e,
              notes: { ...e.notes, ...t.notes.reduce((e, t) => ((e[t.id] = t), e), {}) },
            };
            break;
          case pn.SET_NOTES_QUERY:
            e = { ...e, noteQueries: { ...e.noteQueries, [JSON.stringify(t.query)]: t.noteIds } };
            break;
          case pn.SET_ERROR:
            e = { ...e, errors: { ...e.errors, [t.selector]: t.error } };
            break;
          case pn.SET_NOTE:
            e = { ...e, notes: { ...e.notes, [t.noteId]: t.noteFields } };
            break;
          case pn.SET_NOTE_IS_UPDATING:
            e = {
              ...e,
              notes: { ...e.notes, [t.noteId]: { ...e.notes[t.noteId], isUpdating: t.isUpdating } },
            };
            break;
          case pn.SET_IS_REQUESTING:
            e = { ...e, requesting: { ...e.requesting, [t.selector]: t.isRequesting } };
        }
        return e;
      },
      actions: f,
      controls: re.controls,
      selectors: y,
      resolvers: R,
    });
    const Cn = un,
      Pn = 'wc/admin/reports',
      Un = {},
      vn = (e, t, r) => {
        const o = le(t, r);
        return e.itemErrors[o] || !1;
      },
      Nn = (e, t, r) => {
        const o = le(t, r);
        return e.items[o] || Un;
      },
      Dn = (e, t, r) => {
        const o = le(t, r);
        return e.stats[o] || Un;
      },
      wn = (e, t, r) => {
        const o = le(t, r);
        return e.statErrors[o] || !1;
      },
      bn = {
        SET_ITEM_ERROR: 'SET_ITEM_ERROR',
        SET_STAT_ERROR: 'SET_STAT_ERROR',
        SET_REPORT_ITEMS: 'SET_REPORT_ITEMS',
        SET_REPORT_STATS: 'SET_REPORT_STATS',
      };
    function kn(e, t, r) {
      const o = le(e, t);
      return { type: bn.SET_ITEM_ERROR, resourceName: o, error: r };
    }
    function Gn(e, t, r) {
      const o = le(e, t);
      return { type: bn.SET_REPORT_ITEMS, resourceName: o, items: r };
    }
    function Mn(e, t, r) {
      const o = le(e, t);
      return { type: bn.SET_REPORT_STATS, resourceName: o, stats: r };
    }
    function Ln(e, t, r) {
      const o = le(e, t);
      return { type: bn.SET_STAT_ERROR, resourceName: o, error: r };
    }
    const Fn = (e, t, r) =>
      r.map(r => {
        const o = t.headers.get(r);
        if (void 0 === o)
          throw new Error(
            `Malformed response from server. '${r}' header is missing when retriving ./report/${e}.`,
          );
        return parseInt(o, 10);
      });
    function* qn(e, t) {
      const r = { parse: !1, path: (0, ne.addQueryArgs)(`${Ie}/reports/${e}`, t) };
      if ('performance-indicators' !== e || t.stats)
        try {
          const o = yield ae(r),
            n = o.data,
            [s, i] = Fn(e, o, ['x-wp-total', 'x-wp-totalpages']);
          yield Gn(e, t, { data: n, totalResults: s, totalPages: i });
        } catch (r) {
          yield kn(e, t, r);
        }
      else yield Gn(e, t, { data: [], totalResults: 0, totalPages: 0 });
    }
    function* jn(e, t) {
      const r = { parse: !1, path: (0, ne.addQueryArgs)(`${Ie}/reports/${e}/stats`, t) };
      try {
        const o = yield ae(r),
          n = o.data,
          [s, i] = Fn(e, o, ['x-wp-total', 'x-wp-totalpages']);
        yield Mn(e, t, { data: n, totalResults: s, totalPages: i });
      } catch (r) {
        yield Ln(e, t, r);
      }
    }
    const xn = { itemErrors: {}, items: {}, statErrors: {}, stats: {} };
    (0, te.registerStore)(Pn, {
      reducer: (e = xn, t) => {
        switch (t.type) {
          case bn.SET_REPORT_ITEMS:
            return { ...e, items: { ...e.items, [t.resourceName]: t.items } };
          case bn.SET_REPORT_STATS:
            return { ...e, stats: { ...e.stats, [t.resourceName]: t.stats } };
          case bn.SET_ITEM_ERROR:
            return { ...e, itemErrors: { ...e.itemErrors, [t.resourceName]: t.error } };
          case bn.SET_STAT_ERROR:
            return { ...e, statErrors: { ...e.statErrors, [t.resourceName]: t.error } };
          default:
            return e;
        }
      },
      actions: m,
      controls: ce,
      selectors: g,
      resolvers: O,
    });
    const Qn = Pn,
      Kn = 'wc/admin/countries',
      Vn = e => e.locales,
      $n = (e, t) => {
        const r = t.split(':')[0];
        return e.locales[r];
      },
      Hn = e => e.countries,
      Yn = (e, t) => e.countries.find(e => e.code === t),
      Wn = e => e.geolocation;
    var Jn, Bn;
    ((Bn = Jn || (Jn = {})).GET_LOCALES_ERROR = 'GET_LOCALES_ERROR'),
      (Bn.GET_LOCALES_SUCCESS = 'GET_LOCALES_SUCCESS'),
      (Bn.GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR'),
      (Bn.GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'),
      (Bn.GEOLOCATION_SUCCESS = 'GEOLOCATION_SUCCESS'),
      (Bn.GEOLOCATION_ERROR = 'GEOLOCATION_ERROR');
    const zn = Jn;
    function Zn(e) {
      return { type: zn.GET_LOCALES_SUCCESS, locales: e };
    }
    function Xn(e) {
      return { type: zn.GET_LOCALES_ERROR, error: e };
    }
    function es(e) {
      return { type: zn.GET_COUNTRIES_SUCCESS, countries: e };
    }
    function ts(e) {
      return { type: zn.GET_COUNTRIES_ERROR, error: e };
    }
    function rs(e) {
      return { type: zn.GEOLOCATION_SUCCESS, geolocation: e };
    }
    function os(e) {
      return { type: zn.GEOLOCATION_ERROR, error: e };
    }
    const ns = te.controls && te.controls.resolveSelect ? te.controls.resolveSelect : re.select;
    function* ss() {
      yield ns(Kn, 'getLocales');
    }
    function* is() {
      try {
        const e = Ie + '/data/countries/locales';
        return Zn(yield (0, re.apiFetch)({ path: e, method: 'GET' }));
      } catch (e) {
        return Xn(e);
      }
    }
    function* as() {
      yield ns(Kn, 'getCountries');
    }
    function* cs() {
      try {
        const e = Ie + '/data/countries';
        return es(yield (0, re.apiFetch)({ path: e, method: 'GET' }));
      } catch (e) {
        return ts(e);
      }
    }
    const us = () => async ({ dispatch: e }) => {
      try {
        const t = `https://public-api.wordpress.com/geo/?v=${new Date().getTime()}`,
          r = await fetch(t, { method: 'GET' }),
          o = await r.json();
        e.geolocationSuccess(o);
      } catch (t) {
        e.geolocationError(t);
      }
    };
    (0, te.registerStore)(Kn, {
      reducer: (e = { errors: {}, locales: {}, countries: [], geolocation: void 0 }, t) => {
        switch (t.type) {
          case zn.GET_LOCALES_SUCCESS:
            e = { ...e, locales: t.locales };
            break;
          case zn.GET_LOCALES_ERROR:
            e = { ...e, errors: { ...e.errors, locales: t.error } };
            break;
          case zn.GET_COUNTRIES_SUCCESS:
            e = { ...e, countries: t.countries };
            break;
          case zn.GET_COUNTRIES_ERROR:
            e = { ...e, errors: { ...e.errors, countries: t.error } };
            break;
          case zn.GEOLOCATION_SUCCESS:
            e = { ...e, geolocation: t.geolocation };
            break;
          case zn.GEOLOCATION_ERROR:
            e = { ...e, errors: { ...e.errors, geolocation: t.error } };
        }
        return e;
      },
      actions: A,
      controls: re.controls,
      selectors: h,
      resolvers: I,
    });
    const ls = Kn,
      Es = 'woocommerce-navigation',
      ds = e => (0, Ur.applyFilters)('woocommerce_navigation_menu_items', e.menuItems),
      ps = e => e.favorites || [],
      Ts = (e, t) => e.requesting[t] || !1,
      Ss = e => e.persistedQuery || {},
      _s = window.wc.navigation,
      ys = {
        ADD_MENU_ITEMS: 'ADD_MENU_ITEMS',
        SET_MENU_ITEMS: 'SET_MENU_ITEMS',
        ON_HISTORY_CHANGE: 'ON_HISTORY_CHANGE',
        ADD_FAVORITE_FAILURE: 'ADD_FAVORITE_FAILURE',
        ADD_FAVORITE_REQUEST: 'ADD_FAVORITE_REQUEST',
        ADD_FAVORITE_SUCCESS: 'ADD_FAVORITE_SUCCESS',
        GET_FAVORITES_FAILURE: 'GET_FAVORITES_FAILURE',
        GET_FAVORITES_REQUEST: 'GET_FAVORITES_REQUEST',
        GET_FAVORITES_SUCCESS: 'GET_FAVORITES_SUCCESS',
        REMOVE_FAVORITE_FAILURE: 'REMOVE_FAVORITE_FAILURE',
        REMOVE_FAVORITE_REQUEST: 'REMOVE_FAVORITE_REQUEST',
        REMOVE_FAVORITE_SUCCESS: 'REMOVE_FAVORITE_SUCCESS',
      };
    function fs(e) {
      return { type: ys.SET_MENU_ITEMS, menuItems: e };
    }
    function Rs(e) {
      return { type: ys.ADD_MENU_ITEMS, menuItems: e };
    }
    function gs(e) {
      return { type: ys.GET_FAVORITES_FAILURE, error: e };
    }
    function ms(e) {
      return { type: ys.GET_FAVORITES_REQUEST, favorites: e };
    }
    function Os(e) {
      return { type: ys.GET_FAVORITES_SUCCESS, favorites: e };
    }
    function hs(e) {
      return { type: ys.ADD_FAVORITE_REQUEST, favorite: e };
    }
    function As(e, t) {
      return { type: ys.ADD_FAVORITE_FAILURE, favorite: e, error: t };
    }
    function Is(e) {
      return { type: ys.ADD_FAVORITE_SUCCESS, favorite: e };
    }
    function Cs(e) {
      return { type: ys.REMOVE_FAVORITE_REQUEST, favorite: e };
    }
    function Ps(e, t) {
      return { type: ys.REMOVE_FAVORITE_FAILURE, favorite: e, error: t };
    }
    function Us(e) {
      return { type: ys.REMOVE_FAVORITE_SUCCESS, favorite: e };
    }
    function* vs() {
      const e = (0, _s.getPersistedQuery)();
      if (!Object.keys(e).length) return null;
      yield { type: ys.ON_HISTORY_CHANGE, persistedQuery: e };
    }
    function* Ns() {
      yield vs();
    }
    function* Ds(e) {
      yield hs(e);
      try {
        const t = yield ie()({
          path: `${Ce}/navigation/favorites/me`,
          method: 'POST',
          data: { item_id: e },
        });
        if (t) return yield Is(e), t;
        throw new Error();
      } catch (t) {
        throw (yield As(e, t), new Error());
      }
    }
    function* ws(e) {
      yield Cs(e);
      try {
        const t = yield ie()({
          path: `${Ce}/navigation/favorites/me`,
          method: 'DELETE',
          data: { item_id: e },
        });
        if (t) return yield Us(e), t;
        throw new Error();
      } catch (t) {
        throw (yield Ps(e, t), new Error());
      }
    }
    function* bs() {
      yield ms();
      try {
        const e = yield (0, re.apiFetch)({ path: `${Ce}/navigation/favorites/me` });
        if (e) return void (yield Os(e));
        throw new Error();
      } catch (e) {
        throw (yield gs(e), new Error());
      }
    }
    (0, te.registerStore)(Es, {
      reducer: (
        e = { error: null, menuItems: [], favorites: [], requesting: {}, persistedQuery: {} },
        t,
      ) => {
        switch (t.type) {
          case ys.SET_MENU_ITEMS:
            e = { ...e, menuItems: t.menuItems };
            break;
          case ys.ADD_MENU_ITEMS:
            e = { ...e, menuItems: [...e.menuItems, ...t.menuItems] };
            break;
          case ys.ON_HISTORY_CHANGE:
            e = { ...e, persistedQuery: t.persistedQuery };
            break;
          case ys.GET_FAVORITES_FAILURE:
            e = { ...e, requesting: { ...e.requesting, getFavorites: !1 } };
            break;
          case ys.GET_FAVORITES_REQUEST:
            e = { ...e, requesting: { ...e.requesting, getFavorites: !0 } };
            break;
          case ys.GET_FAVORITES_SUCCESS:
            e = { ...e, favorites: t.favorites, requesting: { ...e.requesting, getFavorites: !1 } };
            break;
          case ys.ADD_FAVORITE_FAILURE:
            e = { ...e, error: t.error, requesting: { ...e.requesting, addFavorite: !1 } };
            break;
          case ys.ADD_FAVORITE_REQUEST:
            e = { ...e, requesting: { ...e.requesting, addFavorite: !0 } };
            break;
          case ys.ADD_FAVORITE_SUCCESS:
            const r = e.favorites.includes(t.favorite) ? e.favorites : [...e.favorites, t.favorite];
            e = {
              ...e,
              favorites: r,
              menuItems: e.menuItems.map(e =>
                e.id === t.favorite ? { ...e, menuId: 'favorites' } : e,
              ),
              requesting: { ...e.requesting, addFavorite: !1 },
            };
            break;
          case ys.REMOVE_FAVORITE_FAILURE:
            e = { ...e, requesting: { ...e.requesting, error: t.error, removeFavorite: !1 } };
            break;
          case ys.REMOVE_FAVORITE_REQUEST:
            e = { ...e, requesting: { ...e.requesting, removeFavorite: !0 } };
            break;
          case ys.REMOVE_FAVORITE_SUCCESS:
            const o = e.favorites.filter(e => e !== t.favorite);
            e = {
              ...e,
              favorites: o,
              menuItems: e.menuItems.map(e =>
                e.id === t.favorite ? { ...e, menuId: 'plugins' } : e,
              ),
              requesting: { ...e.requesting, removeFavorite: !1 },
            };
        }
        return e;
      },
      actions: P,
      controls: re.controls,
      resolvers: U,
      selectors: C,
    }),
      (async () => {
        const { onLoad: e, onHistoryChange: t } = (0, te.dispatch)(Es);
        await e(),
          (0, _s.addHistoryListener)(async () => {
            setTimeout(async () => {
              await t();
            }, 0);
          });
      })();
    const ks = Es,
      Gs = 'wc/admin/items',
      Ms = window.wc.date;
    function Ls(e) {
      const t = 'leaderboards',
        { per_page: r, persisted_query: o, query: n, select: s, filterQuery: i } = e,
        { getItems: a, getItemsError: c, isResolving: u } = s(Gs),
        l = { isRequesting: !1, isError: !1, rows: [] },
        E = (0, Ms.getCurrentDates)(n, e.defaultDateRange),
        d = {
          ...i,
          after: (0, Ms.appendTimestamp)(E.primary.after, 'start'),
          before: (0, Ms.appendTimestamp)(E.primary.before, 'end'),
          per_page: r,
          persisted_query: JSON.stringify(o),
        },
        p = a(t, d);
      if (u('getItems', [t, d])) return { ...l, isRequesting: !0 };
      if (c(t, d)) return { ...l, isError: !0 };
      const T = p.get(e.id);
      return { ...l, rows: null == T ? void 0 : T.rows };
    }
    function Fs(e, t, r, o = {}) {
      const { getItems: n, getItemsError: s, isResolving: i } = e,
        a = {};
      let c = !1,
        u = !1;
      return (
        r.forEach(e => {
          const r = { search: e, per_page: 10, ...o };
          n(t, r).forEach((e, t) => {
            a[t] = e;
          }),
            i('getItems', [t, r]) && (c = !0),
            s(t, r) && (u = !0);
        }),
        { items: a, isRequesting: c, isError: u }
      );
    }
    function qs(e, t) {
      const { _fields: r, page: o, per_page: n, ...s } = t;
      return le('total-' + e, { ...s });
    }
    const js = Tr(
        (e, t, r, o = new Map()) => {
          const n = le(t, r);
          let s;
          return (
            e.items[n] && 'object' == typeof e.items[n] && (s = e.items[n].data),
            s
              ? s.reduce((r, o) => {
                  var n;
                  return r.set(o, null === (n = e.data[t]) || void 0 === n ? void 0 : n[o]), r;
                }, new Map())
              : o
          );
        },
        (e, t, r) => {
          const o = le(t, r);
          return [e.items[o]];
        },
      ),
      xs = (e, t, r, o = 0) => {
        const n = qs(t, r);
        return e.items.hasOwnProperty(n) ? e.items[n] : o;
      },
      Qs = (e, t, r) => {
        const o = le(t, r);
        return e.errors[o];
      },
      Ks = {
        SET_ITEM: 'SET_ITEM',
        SET_ITEMS: 'SET_ITEMS',
        SET_ITEMS_TOTAL_COUNT: 'SET_ITEMS_TOTAL_COUNT',
        SET_ERROR: 'SET_ERROR',
      };
    function Vs(e, t, r) {
      return { type: Ks.SET_ITEM, id: t, item: r, itemType: e };
    }
    function $s(e, t, r, o) {
      return { type: Ks.SET_ITEMS, items: r, itemType: e, query: t, totalCount: o };
    }
    function Hs(e, t, r) {
      return { type: Ks.SET_ITEMS_TOTAL_COUNT, itemType: e, query: t, totalCount: r };
    }
    function Ys(e, t, r) {
      return { type: Ks.SET_ERROR, itemType: e, query: t, error: r };
    }
    function* Ws(e, t) {
      const r = { ...e, stock_quantity: t },
        { id: o, parent_id: n, type: s } = r;
      yield Vs('products', o, r);
      let i = Ie;
      i += 'variation' === s ? `/products/${n}/variations/${o}` : `/products/${o}`;
      try {
        return yield (0, re.apiFetch)({ path: i, method: 'PUT', data: r }), !0;
      } catch (t) {
        return yield Vs('products', o, e), yield Ys('products', { id: o }, t), !1;
      }
    }
    function* Js(e, t) {
      try {
        const r = (0, ne.addQueryArgs)(
            `${Ce}/onboarding/tasks/create_product_from_template`,
            t || {},
          ),
          o = yield (0, re.apiFetch)({ path: r, method: 'POST', data: e });
        return yield Vs('products', o.id, o), o;
      } catch (e) {
        throw (yield Ys('createProductFromTemplate', t, e), e);
      }
    }
    function* Bs(e, t) {
      try {
        const r = 'categories' === e ? 'products/categories' : e,
          { items: o, totalCount: n } = yield de(`${Ie}/${r}`, t);
        yield Hs(e, t, n), yield $s(e, t, o);
      } catch (r) {
        yield Ys(e, t, r);
      }
    }
    function* zs(e, t) {
      try {
        const r = { ...t, page: 1, per_page: 1 },
          o = 'categories' === e ? 'products/categories' : e,
          { totalCount: n } = yield de(`${Ie}/${o}`, r);
        yield Hs(e, t, n);
      } catch (r) {
        yield Ys(e, t, r);
      }
    }
    function* Zs(e, t) {
      yield zs(e, t);
    }
    const Xs = { items: {}, errors: {}, data: {} };
    (0, te.registerStore)(Gs, {
      reducer: (e = Xs, t) => {
        switch (t.type) {
          case Ks.SET_ITEM:
            const r = e.data[t.itemType] || {};
            return {
              ...e,
              data: {
                ...e.data,
                [t.itemType]: { ...r, [t.id]: { ...(r[t.id] || {}), ...t.item } },
              },
            };
          case Ks.SET_ITEMS:
            const o = [],
              n = t.items.reduce((e, t) => (o.push(t.id), (e[t.id] = t), e), {}),
              s = le(t.itemType, t.query);
            return {
              ...e,
              items: { ...e.items, [s]: { data: o } },
              data: { ...e.data, [t.itemType]: { ...e.data[t.itemType], ...n } },
            };
          case Ks.SET_ITEMS_TOTAL_COUNT:
            const i = qs(t.itemType, t.query);
            return { ...e, items: { ...e.items, [i]: t.totalCount } };
          case Ks.SET_ERROR:
            return { ...e, errors: { ...e.errors, [le(t.itemType, t.query)]: t.error } };
          default:
            return e;
        }
      },
      actions: N,
      controls: ce,
      selectors: v,
      resolvers: D,
    });
    const ei = Gs;
    var ti;
    !(function(e) {
      (e.GET_PAYMENT_GATEWAYS_REQUEST = 'GET_PAYMENT_GATEWAYS_REQUEST'),
        (e.GET_PAYMENT_GATEWAYS_SUCCESS = 'GET_PAYMENT_GATEWAYS_SUCCESS'),
        (e.GET_PAYMENT_GATEWAYS_ERROR = 'GET_PAYMENT_GATEWAYS_ERROR'),
        (e.UPDATE_PAYMENT_GATEWAY_REQUEST = 'UPDATE_PAYMENT_GATEWAY_REQUEST'),
        (e.UPDATE_PAYMENT_GATEWAY_SUCCESS = 'UPDATE_PAYMENT_GATEWAY_SUCCESS'),
        (e.UPDATE_PAYMENT_GATEWAY_ERROR = 'UPDATE_PAYMENT_GATEWAY_ERROR'),
        (e.GET_PAYMENT_GATEWAY_REQUEST = 'GET_PAYMENT_GATEWAY_REQUEST'),
        (e.GET_PAYMENT_GATEWAY_SUCCESS = 'GET_PAYMENT_GATEWAY_SUCCESS'),
        (e.GET_PAYMENT_GATEWAY_ERROR = 'GET_PAYMENT_GATEWAY_ERROR');
    })(ti || (ti = {}));
    const ri = 'wc/payment-gateways',
      oi = 'wc/v3';
    function ni() {
      return { type: ti.GET_PAYMENT_GATEWAYS_REQUEST };
    }
    function si(e) {
      return { type: ti.GET_PAYMENT_GATEWAYS_SUCCESS, paymentGateways: e };
    }
    function ii(e) {
      return { type: ti.GET_PAYMENT_GATEWAYS_ERROR, error: e };
    }
    function ai() {
      return { type: ti.GET_PAYMENT_GATEWAY_REQUEST };
    }
    function ci(e) {
      return { type: ti.GET_PAYMENT_GATEWAY_ERROR, error: e };
    }
    function ui(e) {
      return { type: ti.GET_PAYMENT_GATEWAY_SUCCESS, paymentGateway: e };
    }
    function li(e) {
      return { type: ti.UPDATE_PAYMENT_GATEWAY_SUCCESS, paymentGateway: e };
    }
    function Ei() {
      return { type: ti.UPDATE_PAYMENT_GATEWAY_REQUEST };
    }
    function di(e) {
      return { type: ti.UPDATE_PAYMENT_GATEWAY_ERROR, error: e };
    }
    function* pi(e, t) {
      try {
        yield Ei();
        const r = yield (0, re.apiFetch)({
          method: 'PUT',
          path: oi + '/payment_gateways/' + e,
          body: JSON.stringify(t),
        });
        if (r && r.id === e) return yield li(r), r;
      } catch (e) {
        throw (yield di(e), e);
      }
    }
    const Ti = te.controls && te.controls.dispatch ? te.controls.dispatch : re.dispatch;
    function* Si() {
      yield ni();
      try {
        const e = yield (0, re.apiFetch)({ path: oi + '/payment_gateways' });
        yield si(e);
        for (let t = 0; t < e.length; t++)
          yield Ti(ri, 'finishResolution', 'getPaymentGateway', [e[t].id]);
      } catch (e) {
        yield ii(e);
      }
    }
    function* _i(e) {
      yield ai();
      try {
        const t = yield (0, re.apiFetch)({ path: oi + '/payment_gateways/' + e });
        if (t && t.id) return yield ui(t), t;
      } catch (e) {
        yield ci(e);
      }
    }
    function yi(e, t) {
      return e.paymentGateways.find(e => e.id === t);
    }
    function fi(e) {
      return e.paymentGateways;
    }
    function Ri(e, t) {
      return e.errors[t] || null;
    }
    function gi(e) {
      return e.isUpdating || !1;
    }
    const mi = ri;
    var Oi;
    function hi() {
      return { type: Oi.GET_SHIPPING_METHODS_REQUEST };
    }
    function Ai(e) {
      return { type: Oi.GET_SHIPPING_METHODS_SUCCESS, shippingMethods: e };
    }
    function Ii(e) {
      return { type: Oi.GET_SHIPPING_METHODS_ERROR, error: e };
    }
    function* Ci(e = !1) {
      let t = Ce + '/shipping-partner-suggestions';
      e && (t += '?force_default_suggestions=true'), yield hi();
      try {
        const e = yield (0, re.apiFetch)({ path: t, method: 'GET' });
        yield Ai(e);
      } catch (e) {
        yield Ii(e);
      }
    }
    (0, te.registerStore)(ri, {
      actions: w,
      selectors: k,
      resolvers: b,
      controls: re.controls,
      reducer: (e = { paymentGateways: [], isUpdating: !1, errors: {} }, t) => {
        if (t && 'type' in t)
          switch (t.type) {
            case ti.GET_PAYMENT_GATEWAYS_REQUEST:
            case ti.GET_PAYMENT_GATEWAY_REQUEST:
              return e;
            case ti.GET_PAYMENT_GATEWAYS_SUCCESS:
              return { ...e, paymentGateways: t.paymentGateways };
            case ti.GET_PAYMENT_GATEWAYS_ERROR:
              return { ...e, errors: { ...e.errors, getPaymentGateways: t.error } };
            case ti.GET_PAYMENT_GATEWAY_ERROR:
              return { ...e, errors: { ...e.errors, getPaymentGateway: t.error } };
            case ti.UPDATE_PAYMENT_GATEWAY_REQUEST:
              return { ...e, isUpdating: !0 };
            case ti.UPDATE_PAYMENT_GATEWAY_SUCCESS:
            case ti.GET_PAYMENT_GATEWAY_SUCCESS:
              return (function(e, t) {
                const r = e.paymentGateways.findIndex(e => e.id === t.id);
                return -1 === r
                  ? { ...e, paymentGateways: [...e.paymentGateways, t], isUpdating: !1 }
                  : {
                      ...e,
                      paymentGateways: [
                        ...e.paymentGateways.slice(0, r),
                        t,
                        ...e.paymentGateways.slice(r + 1),
                      ],
                      isUpdating: !1,
                    };
              })(e, t.paymentGateway);
            case ti.UPDATE_PAYMENT_GATEWAY_ERROR:
              return {
                ...e,
                errors: { ...e.errors, updatePaymentGateway: t.error },
                isUpdating: !1,
              };
          }
        return e;
      },
    }),
      (function(e) {
        (e.GET_SHIPPING_METHODS_REQUEST = 'GET_SHIPPING_METHODS_REQUEST'),
          (e.GET_SHIPPING_METHODS_SUCCESS = 'GET_SHIPPING_METHODS_SUCCESS'),
          (e.GET_SHIPPING_METHODS_ERROR = 'GET_SHIPPING_METHODS_ERROR');
      })(Oi || (Oi = {}));
    const Pi = e => e.shippingMethods || [];
    function Ui(e) {
      return e.isUpdating || !1;
    }
    const vi = 'wc/shipping-methods',
      Ni = (0, te.createReduxStore)(vi, {
        reducer: (e = { shippingMethods: [], isUpdating: !1, errors: {} }, t) => {
          if (t && 'type' in t)
            switch (t.type) {
              case Oi.GET_SHIPPING_METHODS_REQUEST:
                return { ...e, isUpdating: !0 };
              case Oi.GET_SHIPPING_METHODS_SUCCESS:
                return { ...e, shippingMethods: t.shippingMethods, isUpdating: !1 };
              case Oi.GET_SHIPPING_METHODS_ERROR:
                return {
                  ...e,
                  isUpdating: !1,
                  errors: { ...e.errors, getShippingMethods: t.error },
                };
            }
          return e;
        },
        selectors: L,
        resolvers: M,
        controls: re.controls,
        actions: G,
      });
    (0, te.register)(Ni);
    const Di = 'wc/admin/products',
      wi = '/wc/v3/products',
      bi = /%(?:postname|pagename)%/,
      ki = `${wi}/suggested-products`,
      Gi = 'product';
    function Mi(e) {
      return le(Gi, e);
    }
    function Li(e) {
      const { _fields: t, page: r, per_page: o, ...n } = e;
      return Mi(n);
    }
    function Fi(e = {}) {
      var t, r, o;
      if (!Object.keys(e).length) return 'default';
      const n = { ...e };
      return (
        null === (t = e.categories) || void 0 === t || t.sort(),
        null === (r = e.tags) || void 0 === r || r.sort(),
        null === (o = e.attributes) || void 0 === o || o.sort(),
        JSON.stringify(n)
      );
    }
    const qi = (e, t, r = void 0) => e.data[t] || r,
      ji = Tr(
        (e, t, r = void 0) => {
          const o = Mi(t),
            n = e.products[o] ? e.products[o].data : void 0;
          if (!n) return r;
          if (t && void 0 !== t._fields) {
            const r = t._fields;
            return n.map(t => r.reduce((r, o) => ({ ...r, [o]: e.data[t][o] }), {}));
          }
          return n.map(t => e.data[t]);
        },
        (e, t) => {
          const r = Mi(t),
            o = e.products[r] ? e.products[r].data : void 0;
          return [e.products[r], ...(o || []).map(t => e.data[t])];
        },
      ),
      xi = (e, t, r = void 0) => {
        const o = Li(t);
        return e.productsCount.hasOwnProperty(o) ? e.productsCount[o] : r;
      },
      Qi = (e, t) => {
        const r = Mi(t);
        return e.errors[r];
      },
      Ki = (e, t) => {
        const r = Mi(t);
        return e.errors[r];
      },
      Vi = (e, t, r) => {
        const o = Mi(r);
        return e.errors[`update/${t}/${o}`];
      },
      $i = (e, t) => e.errors[`delete/${t}`],
      Hi = (e, t, r) => {
        var o;
        return void 0 !== r && 'createProduct' !== t
          ? (null === (o = e.pending[t]) || void 0 === o ? void 0 : o[r]) || !1
          : ('createProduct' === t && e.pending[t]) || !1;
      },
      Yi = Tr(
        (e, t) => {
          const r = e.data[t];
          if (r && r.permalink_template) {
            const e = r.slug || r.generated_slug,
              [t, o] = r.permalink_template.split(bi);
            return { prefix: t, postName: e, suffix: o };
          }
          return null;
        },
        (e, t) => [e.data[t]],
      ),
      Wi = Tr(
        (e, t) => {
          const r = e.data[t];
          return ((null == r ? void 0 : r.related_ids) && ji(e, { include: r.related_ids })) || [];
        },
        (e, t) => [e.data[t]],
      );
    function Ji(e, t) {
      const r = Fi(t);
      return e.suggestedProducts[r] ? e.suggestedProducts[r].items : [];
    }
    var Bi;
    !(function(e) {
      (e.CREATE_PRODUCT_START = 'CREATE_PRODUCT_START'),
        (e.CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR'),
        (e.CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'),
        (e.GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'),
        (e.GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR'),
        (e.GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'),
        (e.GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'),
        (e.GET_PRODUCTS_TOTAL_COUNT_SUCCESS = 'GET_PRODUCTS_TOTAL_COUNT_SUCCESS'),
        (e.GET_PRODUCTS_TOTAL_COUNT_ERROR = 'GET_PRODUCTS_TOTAL_COUNT_ERROR'),
        (e.UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START'),
        (e.UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR'),
        (e.UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'),
        (e.DELETE_PRODUCT_START = 'DELETE_PRODUCT_START'),
        (e.DELETE_PRODUCT_ERROR = 'DELETE_PRODUCT_ERROR'),
        (e.DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'),
        (e.DUPLICATE_PRODUCT_START = 'DUPLICATE_PRODUCT_START'),
        (e.DUPLICATE_PRODUCT_ERROR = 'DUPLICATE_PRODUCT_ERROR'),
        (e.DUPLICATE_PRODUCT_SUCCESS = 'DUPLICATE_PRODUCT_SUCCESS'),
        (e.SET_SUGGESTED_PRODUCTS = 'SET_SUGGESTED_PRODUCTS');
    })(Bi || (Bi = {}));
    const zi = Bi;
    function Zi(e, t) {
      return { type: zi.GET_PRODUCT_SUCCESS, id: e, product: t };
    }
    function Xi(e, t) {
      return { type: zi.GET_PRODUCT_ERROR, productId: e, error: t };
    }
    function ea(e, t) {
      return { type: zi.CREATE_PRODUCT_ERROR, query: e, error: t };
    }
    function ta(e, t) {
      return { type: zi.DUPLICATE_PRODUCT_ERROR, id: e, error: t };
    }
    function ra(e, t) {
      return { type: zi.UPDATE_PRODUCT_ERROR, id: e, error: t };
    }
    function oa(e, t, r) {
      return { type: zi.GET_PRODUCTS_SUCCESS, products: t, query: e, totalCount: r };
    }
    function na(e, t) {
      return { type: zi.GET_PRODUCTS_ERROR, query: e, error: t };
    }
    function sa(e, t) {
      return { type: zi.GET_PRODUCTS_TOTAL_COUNT_SUCCESS, query: e, totalCount: t };
    }
    function ia(e, t) {
      return { type: zi.GET_PRODUCTS_TOTAL_COUNT_ERROR, query: e, error: t };
    }
    function* aa(e) {
      yield { type: zi.CREATE_PRODUCT_START };
      try {
        const t = yield (0, re.apiFetch)({ path: wi, method: 'POST', data: e });
        return (
          yield (function(e, t) {
            return { type: zi.CREATE_PRODUCT_SUCCESS, id: e, product: t };
          })(t.id, t),
          t
        );
      } catch (t) {
        throw (yield ea(e, t), t);
      }
    }
    function* ca(e, t) {
      yield (function(e) {
        return { type: zi.UPDATE_PRODUCT_START, id: e };
      })(e);
      try {
        const r = yield (0, re.apiFetch)({ path: `${wi}/${e}`, method: 'PUT', data: t });
        return (
          yield (function(e, t) {
            return { type: zi.UPDATE_PRODUCT_SUCCESS, id: e, product: t };
          })(r.id, r),
          r
        );
      } catch (t) {
        throw (yield ra(e, t), t);
      }
    }
    function* ua(e, t) {
      yield (function(e) {
        return { type: zi.DUPLICATE_PRODUCT_START, id: e };
      })(e);
      try {
        const r = yield (0, re.apiFetch)({ path: `${wi}/${e}/duplicate`, method: 'POST', data: t });
        return (
          yield (function(e, t) {
            return { type: zi.DUPLICATE_PRODUCT_SUCCESS, id: e, product: t };
          })(r.id, r),
          r
        );
      } catch (t) {
        throw (yield ta(e, t), t);
      }
    }
    function la(e) {
      return { type: zi.DELETE_PRODUCT_START, id: e };
    }
    function Ea(e, t, r) {
      return { type: zi.DELETE_PRODUCT_SUCCESS, id: e, product: t, force: r };
    }
    function da(e, t) {
      return { type: zi.DELETE_PRODUCT_ERROR, id: e, error: t };
    }
    function* pa(e, t = !1) {
      yield la(e);
      try {
        const r = t ? `${wi}/${e}?force=true` : `${wi}/${e}`,
          o = yield (0, re.apiFetch)({ path: r, method: 'DELETE' });
        return yield Ea(o.id, o, t), o;
      } catch (t) {
        throw (yield da(e, t), t);
      }
    }
    function Ta(e, t) {
      return { type: zi.SET_SUGGESTED_PRODUCTS, key: e, items: t };
    }
    const Sa = te.controls && te.controls.dispatch ? te.controls.dispatch : re.dispatch,
      _a = te.controls && te.controls.resolveSelect ? te.controls.resolveSelect : re.select;
    function* ya(e) {
      const t = { ...e };
      t && t._fields && !t._fields.includes('id') && (t._fields = ['id', ...t._fields]);
      try {
        const { items: r, totalCount: o } = yield de(wi, t);
        return yield sa(e, o), yield oa(e, r, o), r;
      } catch (t) {
        throw (yield na(e, t), t);
      }
    }
    function* fa(e) {
      try {
        const t = yield (0, re.apiFetch)({
          path: (0, ne.addQueryArgs)(`${wi}/${e}`, { context: 'edit' }),
          method: 'GET',
        });
        return yield Zi(e, t), yield Sa(Di, 'finishResolution', 'getPermalinkParts', [e]), t;
      } catch (t) {
        throw (yield Xi(e, t), t);
      }
    }
    function* Ra(e) {
      try {
        const t = (yield _a(Di, 'getProduct', e)).related_ids;
        return (null == t ? void 0 : t.length) ? yield _a(Di, 'getProducts', { include: t }) : [];
      } catch (e) {
        throw e;
      }
    }
    function* ga(e) {
      try {
        const t = { ...e, page: 1, per_page: 1 },
          { totalCount: r } = yield de(wi, t);
        return yield sa(e, r), r;
      } catch (t) {
        throw (yield ia(e, t), t);
      }
    }
    function* ma(e) {
      yield _a(Di, 'getProduct', [e]);
    }
    const Oa = e => async ({ dispatch: t }) => {
      const r = Fi(e),
        o = await ie()({ path: (0, ne.addQueryArgs)(ki, e) });
      t.setSuggestedProductAction(r, o);
    };
    (0, te.registerStore)(Di, {
      __experimentalUseThunks: !0,
      reducer: (
        e = {
          products: {},
          productsCount: {},
          errors: {},
          data: {},
          pending: {},
          suggestedProducts: {},
        },
        t,
      ) => {
        if (t && 'type' in t)
          switch (t.type) {
            case zi.CREATE_PRODUCT_START:
              return { ...e, pending: { createProduct: !0 } };
            case zi.UPDATE_PRODUCT_START:
              return {
                ...e,
                pending: { updateProduct: { ...(e.pending.updateProduct || {}), [t.id]: !0 } },
              };
            case zi.DUPLICATE_PRODUCT_START:
              return {
                ...e,
                pending: {
                  duplicateProduct: { ...(e.pending.duplicateProduct || {}), [t.id]: !0 },
                },
              };
            case zi.CREATE_PRODUCT_SUCCESS:
            case zi.GET_PRODUCT_SUCCESS:
            case zi.UPDATE_PRODUCT_SUCCESS:
            case zi.DUPLICATE_PRODUCT_SUCCESS:
              const r = e.data || {};
              return {
                ...e,
                data: { ...r, [t.id]: { ...(r[t.id] || {}), ...t.product } },
                pending: {
                  createProduct: !1,
                  duplicateProduct: { ...(e.pending.duplicateProduct || {}), [t.id]: !1 },
                  updateProduct: { ...(e.pending.updateProduct || {}), [t.id]: !1 },
                },
              };
            case zi.GET_PRODUCTS_SUCCESS:
              const o = [],
                n = t.products.reduce(
                  (t, r) => (o.push(r.id), (t[r.id] = { ...(e.data[r.id] || {}), ...r }), t),
                  {},
                ),
                s = Mi(t.query);
              return {
                ...e,
                products: { ...e.products, [s]: { data: o } },
                data: { ...e.data, ...n },
              };
            case zi.GET_PRODUCTS_TOTAL_COUNT_SUCCESS:
              const i = Li(t.query);
              return { ...e, productsCount: { ...e.productsCount, [i]: t.totalCount } };
            case zi.GET_PRODUCT_ERROR:
              return { ...e, errors: { ...e.errors, [t.productId]: t.error } };
            case zi.GET_PRODUCTS_ERROR:
            case zi.GET_PRODUCTS_TOTAL_COUNT_ERROR:
            case zi.CREATE_PRODUCT_ERROR:
              return {
                ...e,
                errors: { ...e.errors, [Mi(t.query)]: t.error },
                pending: { createProduct: !1 },
              };
            case zi.UPDATE_PRODUCT_ERROR:
              return { ...e, errors: { ...e.errors, [`update/${t.id}`]: t.error } };
            case zi.DUPLICATE_PRODUCT_ERROR:
              return { ...e, errors: { ...e.errors, [`duplicate/${t.id}`]: t.error } };
            case zi.DELETE_PRODUCT_START:
              return {
                ...e,
                pending: { deleteProduct: { ...(e.pending.deleteProduct || {}), [t.id]: !0 } },
              };
            case zi.DELETE_PRODUCT_ERROR:
              return {
                ...e,
                errors: { ...e.errors, [`delete/${t.id}`]: t.error },
                pending: { deleteProduct: { ...(e.pending.deleteProduct || {}), [t.id]: !1 } },
              };
            case zi.DELETE_PRODUCT_SUCCESS:
              const a = e.data || {};
              return {
                ...e,
                data: {
                  ...a,
                  [t.id]: {
                    ...(a[t.id] || {}),
                    ...t.product,
                    status: t.force ? 'deleted' : 'trash',
                  },
                },
                pending: { deleteProduct: { ...(e.pending.deleteProduct || {}), [t.id]: !1 } },
              };
            case zi.SET_SUGGESTED_PRODUCTS:
              return {
                ...e,
                suggestedProducts: { ...e.suggestedProducts, [t.key]: { items: t.items || [] } },
              };
            default:
              return e;
          }
        return e;
      },
      actions: q,
      controls: ce,
      selectors: F,
      resolvers: j,
    });
    const ha = Di,
      Aa = 'wc/admin/orders',
      Ia = '/wc/v3/orders',
      Ca = 'order';
    function Pa(e) {
      return le(Ca, e);
    }
    function Ua(e) {
      const { _fields: t, page: r, per_page: o, ...n } = e;
      return Pa(n);
    }
    const va = Tr(
        (e, t, r = void 0) => {
          const o = Pa(t),
            n = e.orders[o] ? e.orders[o].data : void 0;
          if (!n) return r;
          if (t && void 0 !== t._fields) {
            const r = t._fields;
            return n.map(t => r.reduce((r, o) => ({ ...r, [o]: e.data[t][o] }), {}));
          }
          return n.map(t => e.data[t]);
        },
        (e, t) => {
          const r = Pa(t),
            o = e.orders[r] ? e.orders[r].data : [];
          return [e.orders[r], ...o.map(t => e.data[t])];
        },
      ),
      Na = (e, t, r = void 0) => {
        const o = Ua(t);
        return e.ordersCount.hasOwnProperty(o) ? e.ordersCount[o] : r;
      },
      Da = (e, t) => {
        const r = Pa(t);
        return e.errors[r];
      };
    var wa;
    !(function(e) {
      (e.GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'),
        (e.GET_ORDER_ERROR = 'GET_ORDER_ERROR'),
        (e.GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS'),
        (e.GET_ORDERS_ERROR = 'GET_ORDERS_ERROR'),
        (e.GET_ORDERS_TOTAL_COUNT_SUCCESS = 'GET_ORDERS_TOTAL_COUNT_SUCCESS'),
        (e.GET_ORDERS_TOTAL_COUNT_ERROR = 'GET_ORDERS_TOTAL_COUNT_ERROR');
    })(wa || (wa = {}));
    const ba = wa;
    function ka(e, t) {
      return { type: ba.GET_ORDER_SUCCESS, id: e, order: t };
    }
    function Ga(e, t) {
      return { type: ba.GET_ORDER_ERROR, query: e, error: t };
    }
    function Ma(e, t, r) {
      return { type: ba.GET_ORDERS_SUCCESS, orders: t, query: e, totalCount: r };
    }
    function La(e, t) {
      return { type: ba.GET_ORDERS_ERROR, query: e, error: t };
    }
    function Fa(e, t) {
      return { type: ba.GET_ORDERS_TOTAL_COUNT_SUCCESS, query: e, totalCount: t };
    }
    function qa(e, t) {
      return { type: ba.GET_ORDERS_TOTAL_COUNT_ERROR, query: e, error: t };
    }
    function* ja(e) {
      const t = { ...e };
      t && t._fields && !t._fields.includes('id') && (t._fields = ['id', ...t._fields]);
      try {
        const { items: r, totalCount: o } = yield de(Ia, t);
        return yield Fa(e, o), yield Ma(e, r, o), r;
      } catch (t) {
        return yield La(e, t), t;
      }
    }
    function* xa(e) {
      try {
        const t = { ...e, page: 1, per_page: 1 },
          { totalCount: r } = yield de(Ia, t);
        return yield Fa(e, r), r;
      } catch (t) {
        return yield qa(e, t), t;
      }
    }
    (0, te.registerStore)(Aa, {
      reducer: (e = { orders: {}, ordersCount: {}, errors: {}, data: {} }, t) => {
        if (t && 'type' in t)
          switch (t.type) {
            case ba.GET_ORDER_SUCCESS:
              const r = e.data || {};
              return { ...e, data: { ...r, [t.id]: { ...(r[t.id] || {}), ...t.order } } };
            case ba.GET_ORDERS_SUCCESS:
              const o = [],
                n = t.orders.reduce(
                  (t, r) => (o.push(r.id), (t[r.id] = { ...(e.data[r.id] || {}), ...r }), t),
                  {},
                ),
                s = Pa(t.query);
              return { ...e, orders: { ...e.orders, [s]: { data: o } }, data: { ...e.data, ...n } };
            case ba.GET_ORDERS_TOTAL_COUNT_SUCCESS:
              const i = Ua(t.query);
              return { ...e, ordersCount: { ...e.ordersCount, [i]: t.totalCount } };
            case ba.GET_ORDER_ERROR:
            case ba.GET_ORDERS_ERROR:
            case ba.GET_ORDERS_TOTAL_COUNT_ERROR:
              return { ...e, errors: { ...e.errors, [Pa(t.query)]: t.error } };
            default:
              return e;
          }
        return e;
      },
      actions: Q,
      controls: ce,
      selectors: x,
      resolvers: K,
    });
    const Qa = Aa,
      Ka = 'wc/admin/products/attributes';
    var Va;
    !(function(e) {
      (e.CREATE_ITEM = 'CREATE_ITEM'),
        (e.DELETE_ITEM = 'DELETE_ITEM'),
        (e.GET_ITEM = 'GET_ITEM'),
        (e.GET_ITEMS = 'GET_ITEMS'),
        (e.GET_ITEMS_TOTAL_COUNT = 'GET_ITEMS_TOTAL_COUNT'),
        (e.UPDATE_ITEM = 'UPDATE_ITEM');
    })(Va || (Va = {}));
    const $a = Va,
      Ha = (e, t, r) => {
        var o;
        let n = e;
        if (
          (null === (o = n.match(/{(.*?)}/g)) ||
            void 0 === o ||
            o.forEach((e, t) => {
              n = n.replace(e, r[t].toString());
            }),
          new RegExp(/{|}/).test(n.toString()))
        )
          throw new Error('Not all URL parameters were replaced');
        return (0, ne.addQueryArgs)(n, t);
      },
      Ya = (e, t = []) => {
        const r = 'string' == typeof e || 'number' == typeof e ? e : e.id;
        return t.length ? t.join('/') + '/' + r : r;
      },
      Wa = (e, t = []) =>
        'string' == typeof e || 'number' == typeof e
          ? { id: e, key: e }
          : { id: e.id, key: Ya(e, t) },
      Ja = (e, t, r = []) => (...o) => (
        r.forEach((e, t) => {
          void 0 === o[t + 1] && (o[t + 1] = e);
        }),
        e(...o, t)
      ),
      Ba = e => {
        var t;
        const r = [];
        return (
          null === (t = e.match(/{(.*?)}/g)) ||
            void 0 === t ||
            t.forEach(e => {
              const t = e.substr(1, e.length - 2);
              r.push(t);
            }),
          r
        );
      },
      za = (e, t) => {
        if ('object' != typeof t) return [];
        const r = [];
        return (
          Ba(e).forEach(e => {
            t.hasOwnProperty(e) && r.push(t[e]);
          }),
          r
        );
      },
      Za = (e, t) => {
        const [r, ...o] = e;
        if (
          !r ||
          !((e, t) => {
            if ('string' == typeof e || 'number' == typeof e) return !0;
            const r = ['id', ...Ba(t)];
            return !(
              !e ||
              'object' != typeof e ||
              !e.hasOwnProperty('id') ||
              JSON.stringify(r.sort()) !== JSON.stringify(Object.keys(e).sort())
            );
          })(r, t)
        )
          return e;
        const n = za(t, r),
          { key: s } = Wa(r, n);
        return [s, ...o];
      },
      Xa = (e, t) => {
        const r = { ...e };
        return (
          Ba(t).forEach(e => {
            delete r[e];
          }),
          r
        );
      },
      ec = le,
      tc = (e, t) => {
        switch (e) {
          case `create${t}`:
            return $a.CREATE_ITEM;
          case `delete${t}`:
            return $a.DELETE_ITEM;
          case `update${t}`:
            return $a.UPDATE_ITEM;
        }
        return e;
      },
      rc = (e, t) => {
        const r = ec($a.CREATE_ITEM, t);
        return e.errors[r];
      },
      oc = (e, t, r) => {
        const o = za(r, t),
          { key: n } = Wa(t, o),
          s = ec($a.DELETE_ITEM, n);
        return e.errors[s];
      },
      nc = (e, t, r) => {
        const o = za(r, t),
          { key: n } = Wa(t, o);
        return e.data[n];
      },
      sc = (e, t, r) => {
        const o = za(r, t),
          { key: n } = Wa(t, o),
          s = ec($a.GET_ITEM, n);
        return e.errors[s];
      },
      ic = Tr(
        (e, t) => {
          const r = ec($a.GET_ITEMS, t || {}),
            o = e.items[r] ? e.items[r].data : void 0;
          if (!o) return null;
          if (t && void 0 !== t._fields) {
            const r = t._fields;
            return o.map(t => r.reduce((r, o) => ({ ...r, [o]: e.data[t][o] }), {}));
          }
          return o.map(t => e.data[t]).filter(e => void 0 !== e);
        },
        (e, t) => {
          const r = ec($a.GET_ITEMS, t || {}),
            o = e.items[r] ? e.items[r].data : void 0;
          return [e.items[r], ...(o || []).map(t => e.data[t])];
        },
      ),
      ac = (e, t, r = void 0) => {
        const o = Ee($a.GET_ITEMS, t || {});
        return e.itemsCount.hasOwnProperty(o) ? e.itemsCount[o] : r;
      },
      cc = (e, t) => {
        const r = ec($a.GET_ITEMS, t || {});
        return e.errors[r];
      },
      uc = (e, t, r) => {
        const { key: o } = Wa(t, r),
          n = ec($a.UPDATE_ITEM, o);
        return e.errors[n];
      },
      lc = {};
    var Ec;
    !(function(e) {
      (e.CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR'),
        (e.CREATE_ITEM_REQUEST = 'CREATE_ITEM_REQUEST'),
        (e.CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS'),
        (e.DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR'),
        (e.DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST'),
        (e.DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'),
        (e.GET_ITEM_ERROR = 'GET_ITEM_ERROR'),
        (e.GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS'),
        (e.GET_ITEMS_ERROR = 'GET_ITEMS_ERROR'),
        (e.GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS'),
        (e.UPDATE_ITEM_ERROR = 'UPDATE_ITEM_ERROR'),
        (e.UPDATE_ITEM_REQUEST = 'UPDATE_ITEM_REQUEST'),
        (e.UPDATE_ITEM_SUCCESS = 'UPDATE_ITEM_SUCCESS'),
        (e.GET_ITEMS_TOTAL_COUNT_SUCCESS = 'GET_ITEMS_TOTAL_COUNT_SUCCESS'),
        (e.GET_ITEMS_TOTAL_COUNT_ERROR = 'GET_ITEMS_TOTAL_COUNT_ERROR');
    })(Ec || (Ec = {}));
    const dc = Ec;
    function pc(e, t) {
      return { type: dc.GET_ITEMS_ERROR, query: e, error: t, errorType: $a.GET_ITEMS };
    }
    function Tc(e, t, r) {
      return { type: dc.GET_ITEMS_SUCCESS, items: t, query: e, urlParameters: r };
    }
    function Sc(e, t) {
      return { type: dc.GET_ITEMS_TOTAL_COUNT_SUCCESS, query: e, totalCount: t };
    }
    function _c(e, t) {
      return {
        type: dc.GET_ITEMS_TOTAL_COUNT_ERROR,
        query: e,
        error: t,
        errorType: $a.GET_ITEMS_TOTAL_COUNT,
      };
    }
    const yc = ({
      storeName: e,
      resourceName: t,
      namespace: r,
      pluralResourceName: o,
      storeConfig: n = {},
    }) => {
      const s = (({ namespace: e, resourceName: t }) => ({
          [`create${t}`]: function*(t, r) {
            yield (function(e) {
              return { type: dc.CREATE_ITEM_REQUEST, query: e };
            })(t);
            const o = za(e, t);
            try {
              const n = yield (0, re.apiFetch)({ path: Ha(e, Xa(t, e), o), method: 'POST' }),
                { key: s } = Wa(n.id, o);
              return (
                yield (function(e, t, r, o) {
                  return { type: dc.CREATE_ITEM_SUCCESS, key: e, item: t, query: r, options: o };
                })(s, n, t, r),
                n
              );
            } catch (e) {
              throw (yield (function(e, t) {
                return {
                  type: dc.CREATE_ITEM_ERROR,
                  query: e,
                  error: t,
                  errorType: $a.CREATE_ITEM,
                };
              })(t, e),
              e);
            }
          },
          [`delete${t}`]: function*(t, r = !0) {
            const o = za(e, t),
              { id: n, key: s } = Wa(t, o);
            yield (function(e, t) {
              return { type: dc.DELETE_ITEM_REQUEST, key: e, force: t };
            })(s, r);
            try {
              const t = yield (0, re.apiFetch)({
                path: Ha(`${e}/${n}`, { force: r }, o),
                method: 'DELETE',
              });
              return (
                yield (function(e, t, r) {
                  return { type: dc.DELETE_ITEM_SUCCESS, key: e, force: t, item: r };
                })(s, r, t),
                t
              );
            } catch (e) {
              throw (yield (function(e, t, r) {
                return {
                  type: dc.DELETE_ITEM_ERROR,
                  key: e,
                  error: t,
                  errorType: $a.DELETE_ITEM,
                  force: r,
                };
              })(s, e, r),
              e);
            }
          },
          [`update${t}`]: function*(t, r) {
            const o = za(e, t),
              { id: n, key: s } = Wa(t, o);
            yield (function(e, t) {
              return { type: dc.UPDATE_ITEM_REQUEST, key: e, query: t };
            })(s, r);
            try {
              const t = yield (0, re.apiFetch)({
                path: Ha(`${e}/${n}`, {}, o),
                method: 'PUT',
                data: r,
              });
              return (
                yield (function(e, t, r) {
                  return { type: dc.UPDATE_ITEM_SUCCESS, key: e, item: t, query: r };
                })(s, t, r),
                t
              );
            } catch (e) {
              throw (yield (function(e, t, r) {
                return {
                  type: dc.UPDATE_ITEM_ERROR,
                  key: e,
                  error: t,
                  errorType: $a.UPDATE_ITEM,
                  query: r,
                };
              })(s, e, r),
              e);
            }
          },
        }))({ resourceName: t, namespace: r }),
        i = (({ storeName: e, resourceName: t, pluralResourceName: r, namespace: o }) => ({
          [`get${t}`]: function*(e) {
            const t = za(o, e),
              { id: r, key: n } = Wa(e, t);
            try {
              const e = yield (0, re.apiFetch)({ path: Ha(`${o}/${r}`, {}, t), method: 'GET' });
              return (
                yield (function(e, t) {
                  return { type: dc.GET_ITEM_SUCCESS, key: e, item: t };
                })(n, e),
                e
              );
            } catch (e) {
              throw (yield (function(e, t) {
                return { type: dc.GET_ITEM_ERROR, key: e, error: t, errorType: $a.GET_ITEM };
              })(n, e),
              e);
            }
          },
          [`get${r}`]: function*(n) {
            const s = za(o, n || {}),
              i = Xa(n || {}, o);
            yield te.controls.dispatch(e, 'startResolution', `get${r}TotalCount`, [n]),
              i && i._fields && !i._fields.includes('id') && (i._fields = ['id', ...i._fields]);
            try {
              const a = Ha(o, n || {}, s),
                { items: c, totalCount: u } = yield de(a, i);
              yield Sc(n, u),
                yield te.controls.dispatch(e, 'finishResolution', `get${r}TotalCount`, [n]),
                yield Tc(n, c, s);
              for (const r of c)
                r.id && (yield te.controls.dispatch(e, 'finishResolution', `get${t}`, [r.id]));
              return c;
            } catch (e) {
              throw (yield _c(n, e), yield pc(n, e), e);
            }
          },
          [`get${r}TotalCount`]: function*(t) {
            if (yield te.controls.select(e, 'hasStartedResolution', `get${r}`, [t])) return;
            const n = { ...(t || {}), page: 1, per_page: 1 },
              s = za(o, n),
              i = Xa(n, o);
            i && i._fields && !i._fields.includes('id') && (i._fields = ['id', ...i._fields]);
            try {
              const e = Ha(o, {}, s),
                { totalCount: r } = yield de(e, n);
              return yield Sc(t, r), r;
            } catch (e) {
              return yield _c(t, e), e;
            }
          },
        }))({ storeName: e, resourceName: t, pluralResourceName: o, namespace: r }),
        a = (({ resourceName: e, pluralResourceName: t, namespace: r }) => ({
          [`get${e}`]: Ja(nc, r),
          [`get${e}Error`]: Ja(sc, r),
          [`get${t}`]: Ja(ic, r, [lc]),
          [`get${t}TotalCount`]: Ja(ac, r, [lc, void 0]),
          [`get${t}Error`]: Ja(cc, r),
          [`get${e}CreateError`]: Ja(rc, r),
          [`get${e}DeleteError`]: Ja(oc, r),
          [`get${e}UpdateError`]: Ja(uc, r),
          hasFinishedRequest: (t, o, n = []) => {
            const s = Za(n, r),
              i = tc(o, e),
              a = ec(i, ...s);
            if (o) return t.requesting.hasOwnProperty(a) && !t.requesting[a];
          },
          isRequesting: (t, o, n = []) => {
            const s = Za(n, r),
              i = tc(o, e),
              a = ec(i, ...s);
            return t.requesting[a];
          },
        }))({ resourceName: t, pluralResourceName: o, namespace: r }),
        { reducer: c, actions: u = {}, selectors: l = {}, resolvers: E = {}, controls: d = {} } = n,
        p =
          ((T = c),
          (e = { items: {}, data: {}, itemsCount: {}, errors: {}, requesting: {} }, t) => {
            var r, o;
            const n = e.data || {};
            if (t && 'type' in t)
              switch (t.type) {
                case Ec.CREATE_ITEM_ERROR:
                  const s = ec(t.errorType, t.query || {});
                  return {
                    ...e,
                    errors: { ...e.errors, [s]: t.error },
                    requesting: { ...e.requesting, [s]: !1 },
                  };
                case Ec.GET_ITEMS_TOTAL_COUNT_ERROR:
                case Ec.GET_ITEMS_ERROR:
                  return {
                    ...e,
                    errors: { ...e.errors, [ec(t.errorType, t.query || {})]: t.error },
                  };
                case Ec.GET_ITEMS_TOTAL_COUNT_SUCCESS:
                  return {
                    ...e,
                    itemsCount: {
                      ...e.itemsCount,
                      [Ee($a.GET_ITEMS, t.query || {})]: t.totalCount,
                    },
                  };
                case Ec.CREATE_ITEM_SUCCESS: {
                  const s = ec($a.CREATE_ITEM, t.key, t.query),
                    { options: i } = t,
                    a = { ...n, [t.key]: { ...(n[t.key] || {}), ...t.item } };
                  let c = e.items,
                    u = Object.keys(a).map(e => +e),
                    l = e.itemsCount;
                  if (null == i ? void 0 : i.optimisticQueryUpdate) {
                    if (
                      null === (r = i.optimisticQueryUpdate) || void 0 === r ? void 0 : r.order_by
                    ) {
                      const e =
                        null === (o = i.optimisticQueryUpdate) || void 0 === o
                          ? void 0
                          : o.order_by;
                      let t = Object.values(a);
                      (t = t.sort((t, r) => t[e].toLowerCase().localeCompare(r[e].toLowerCase()))),
                        (u = t.map(e => Number(e.id)));
                    }
                    const t = ec($a.GET_ITEMS, i.optimisticQueryUpdate),
                      n = Ee($a.GET_ITEMS, i.optimisticQueryUpdate);
                    (c = { ...e.items, [t]: { ...e.items[t], data: u } }),
                      (l = { ...e.itemsCount, [n]: Object.keys(a).length });
                  }
                  return {
                    ...e,
                    items: c,
                    itemsCount: l,
                    data: a,
                    requesting: { ...e.requesting, [s]: !1 },
                  };
                }
                case Ec.GET_ITEM_SUCCESS:
                  return { ...e, data: { ...n, [t.key]: { ...(n[t.key] || {}), ...t.item } } };
                case Ec.UPDATE_ITEM_SUCCESS:
                  const i = ec($a.UPDATE_ITEM, t.key, t.query);
                  return {
                    ...e,
                    data: { ...n, [t.key]: { ...(n[t.key] || {}), ...t.item } },
                    requesting: { ...e.requesting, [i]: !1 },
                  };
                case Ec.DELETE_ITEM_SUCCESS:
                  const a = ec($a.DELETE_ITEM, t.key, t.force),
                    c = Object.keys(e.data).reduce(
                      (r, o) =>
                        o !== t.key.toString()
                          ? ((r[o] = e.data[o]), r)
                          : (t.force || (r[o] = t.item), r),
                      {},
                    );
                  return { ...e, data: c, requesting: { ...e.requesting, [a]: !1 } };
                case Ec.DELETE_ITEM_ERROR:
                  const u = ec(t.errorType, t.key, t.force);
                  return {
                    ...e,
                    errors: { ...e.errors, [u]: t.error },
                    requesting: { ...e.requesting, [u]: !1 },
                  };
                case Ec.GET_ITEM_ERROR:
                  return { ...e, errors: { ...e.errors, [ec(t.errorType, t.key)]: t.error } };
                case Ec.UPDATE_ITEM_ERROR:
                  const l = ec(t.errorType, t.key, t.query);
                  return {
                    ...e,
                    errors: { ...e.errors, [l]: t.error },
                    requesting: { ...e.requesting, [l]: !1 },
                  };
                case Ec.GET_ITEMS_SUCCESS:
                  const { objItems: E, ids: d } = ((e, t = [], r = {}) => {
                      const o = [],
                        n = {},
                        s = t.length > 0;
                      return (
                        e.forEach(e => {
                          const i = s ? Ya(e.id, t) : e.id;
                          o.push(i), (n[i] = { ...(r[i] || {}), ...e });
                        }),
                        { objItems: n, ids: o }
                      );
                    })(t.items, t.urlParameters, n),
                    p = ec($a.GET_ITEMS, t.query || {});
                  return {
                    ...e,
                    items: { ...e.items, [p]: { data: d } },
                    data: { ...e.data, ...E },
                  };
                case Ec.CREATE_ITEM_REQUEST:
                  return {
                    ...e,
                    requesting: { ...e.requesting, [ec($a.CREATE_ITEM, t.query)]: !0 },
                  };
                case Ec.DELETE_ITEM_REQUEST:
                  return {
                    ...e,
                    requesting: { ...e.requesting, [ec($a.DELETE_ITEM, t.key, t.force)]: !0 },
                  };
                case Ec.UPDATE_ITEM_REQUEST:
                  return {
                    ...e,
                    requesting: { ...e.requesting, [ec($a.UPDATE_ITEM, t.key, t.query)]: !0 },
                  };
              }
            return T ? T(e, t) : e;
          });
      var T;
      (0, te.registerStore)(e, {
        reducer: p,
        actions: { ...s, ...u },
        selectors: { ...a, ...l },
        resolvers: { ...i, ...E },
        controls: { ...ce, ...d },
      });
    };
    yc({
      storeName: Ka,
      resourceName: 'ProductAttribute',
      pluralResourceName: 'ProductAttributes',
      namespace: '/wc/v3/products/attributes',
    });
    const fc = Ka,
      Rc = 'experimental/wc/admin/products/shipping-classes';
    yc({
      storeName: Rc,
      resourceName: 'ProductShippingClass',
      pluralResourceName: 'ProductShippingClasses',
      namespace: '/wc/v3/products/shipping_classes',
    });
    const gc = Rc,
      mc = 'experimental/wc/admin/shipping/zones';
    yc({
      storeName: mc,
      resourceName: 'ShippingZone',
      pluralResourceName: 'ShippingZones',
      namespace: '/wc/v3/shipping/zones',
    });
    const Oc = mc,
      hc = 'wc/admin/products/tags';
    yc({
      storeName: hc,
      resourceName: 'ProductTag',
      pluralResourceName: 'ProductTags',
      namespace: '/wc/v3/products/tags',
    });
    const Ac = hc,
      Ic = 'experimental/wc/admin/products/categories';
    yc({
      storeName: Ic,
      resourceName: 'ProductCategory',
      pluralResourceName: 'ProductCategories',
      namespace: '/wc/v3/products/categories',
    });
    const Cc = Ic,
      Pc = 'wc/admin/products/attributes/terms';
    yc({
      storeName: Pc,
      resourceName: 'ProductAttributeTerm',
      pluralResourceName: 'ProductAttributeTerms',
      namespace: '/wc/v3/products/attributes/{attribute_id}/terms',
    });
    const Uc = Pc,
      vc = 'wc/admin/products/variations',
      Nc = '/wc/v3/products/{product_id}/variations';
    var Dc;
    !(function(e) {
      (e.GENERATE_VARIATIONS_REQUEST = 'GENERATE_VARIATIONS_REQUEST'),
        (e.GENERATE_VARIATIONS_SUCCESS = 'GENERATE_VARIATIONS_SUCCESS'),
        (e.GENERATE_VARIATIONS_ERROR = 'GENERATE_VARIATIONS_ERROR'),
        (e.BATCH_UPDATE_VARIATIONS_ERROR = 'BATCH_UPDATE_VARIATIONS_ERROR');
    })(Dc || (Dc = {}));
    const wc = Dc;
    var bc;
    !(function(e) {
      e.GENERATE_VARIATIONS = 'GENERATE_VARIATIONS';
    })(bc || (bc = {}));
    const kc = bc;
    function Gc(e, t) {
      return {
        type: wc.GENERATE_VARIATIONS_ERROR,
        key: e,
        error: t,
        errorType: kc.GENERATE_VARIATIONS,
      };
    }
    function Mc(e) {
      return { type: wc.GENERATE_VARIATIONS_REQUEST, key: e };
    }
    function Lc(e) {
      return { type: wc.GENERATE_VARIATIONS_SUCCESS, key: e };
    }
    const Fc = function*(e, t, r, o = !0) {
      const n = za(Nc, e),
        { key: s } = Wa(e, n);
      if ((yield Mc(s), o))
        try {
          yield te.controls.dispatch('core', 'saveEntityRecord', 'postType', 'product', {
            id: n[0],
            ...t,
          });
        } catch (e) {
          throw (yield Gc(s, e), e);
        }
      try {
        const e = yield (0, re.apiFetch)({
          path: Ha(`${Nc}/generate`, {}, n),
          method: 'POST',
          data: r,
        });
        return yield Lc(s), e;
      } catch (e) {
        throw (yield Gc(s, e), e);
      }
    };
    function qc(e, t) {
      return {
        type: wc.BATCH_UPDATE_VARIATIONS_ERROR,
        key: e,
        error: t,
        errorType: 'BATCH_UPDATE_VARIATIONS',
      };
    }
    function* jc(e, t) {
      const r = za(Nc, e);
      try {
        return yield (0, re.apiFetch)({ path: Ha(`${Nc}/batch`, {}, r), method: 'POST', data: t });
      } catch (t) {
        const { key: o } = Wa(e, r);
        throw (yield qc(o, t), t);
      }
    }
    const xc = (e, t) => {
        const r = za(Nc, t),
          { key: o } = Wa(t, r),
          n = ec(kc.GENERATE_VARIATIONS, o);
        return e.requesting[n];
      },
      Qc = (e, t) => {
        const r = za(Nc, t),
          { key: o } = Wa(t, r),
          n = ec(kc.GENERATE_VARIATIONS, o);
        return e.errors[n];
      };
    yc({
      storeName: vc,
      resourceName: 'ProductVariation',
      pluralResourceName: 'ProductVariations',
      namespace: Nc,
      storeConfig: {
        reducer: (e = { items: {}, data: {}, itemsCount: {}, errors: {}, requesting: {} }, t) => {
          if (t && 'type' in t)
            switch (t.type) {
              case Dc.GENERATE_VARIATIONS_REQUEST:
                return {
                  ...e,
                  requesting: { ...e.requesting, [ec(kc.GENERATE_VARIATIONS, t.key)]: !0 },
                };
              case Dc.GENERATE_VARIATIONS_SUCCESS:
                return {
                  ...e,
                  requesting: { ...e.requesting, [ec(kc.GENERATE_VARIATIONS, t.key)]: !1 },
                  errors: { ...e.errors, [ec(kc.GENERATE_VARIATIONS, t.key)]: void 0 },
                };
              case Dc.GENERATE_VARIATIONS_ERROR:
                return {
                  ...e,
                  errors: { ...e.errors, [ec(t.errorType, t.key)]: t.error },
                  requesting: { ...e.requesting, [ec(kc.GENERATE_VARIATIONS, t.key)]: !1 },
                };
              default:
                return e;
            }
          return e;
        },
        actions: V,
        selectors: $,
      },
    });
    const Kc = vc,
      Vc = 'experimental/wc/admin/product-form',
      $c = e => e.fields,
      Hc = (e, t) => e.fields.find(e => e.id === t),
      Yc = e => {
        const { errors: t, ...r } = e;
        return r;
      };
    var Wc;
    !(function(e) {
      (e.GET_FIELDS_ERROR = 'GET_FIELDS_ERROR'),
        (e.GET_FIELDS_SUCCESS = 'GET_FIELDS_SUCCESS'),
        (e.GET_PRODUCT_FORM_ERROR = 'GET_PRODUCT_FORM_ERROR'),
        (e.GET_PRODUCT_FORM_SUCCESS = 'GET_PRODUCT_FORM_SUCCESS');
    })(Wc || (Wc = {}));
    const Jc = Wc;
    function Bc(e) {
      return { type: Jc.GET_FIELDS_SUCCESS, fields: e };
    }
    function zc(e) {
      return { type: Jc.GET_FIELDS_ERROR, error: e };
    }
    function Zc(e) {
      return {
        type: Jc.GET_PRODUCT_FORM_SUCCESS,
        fields: e.fields,
        sections: e.sections,
        subsections: e.subsections,
        tabs: e.tabs,
      };
    }
    function Xc(e) {
      return { type: Jc.GET_PRODUCT_FORM_ERROR, error: e };
    }
    function* eu() {
      try {
        const e = Ce + '/product-form/fields';
        return Bc(yield (0, re.apiFetch)({ path: e, method: 'GET' }));
      } catch (e) {
        return zc(e);
      }
    }
    function* tu() {
      try {
        const e = Ce + '/product-form';
        return Zc(yield (0, re.apiFetch)({ path: e, method: 'GET' }));
      } catch (e) {
        return Xc(e);
      }
    }
    (0, te.registerStore)(Vc, {
      reducer: (e = { errors: {}, fields: [], sections: [], subsections: [], tabs: [] }, t) => {
        switch (t.type) {
          case Jc.GET_FIELDS_SUCCESS:
            e = { ...e, fields: t.fields };
            break;
          case Jc.GET_FIELDS_ERROR:
            e = { ...e, errors: { ...e.errors, fields: t.error } };
            break;
          case Jc.GET_PRODUCT_FORM_SUCCESS:
            e = {
              ...e,
              fields: t.fields,
              sections: t.sections,
              subsections: t.subsections,
              tabs: t.tabs,
            };
            break;
          case Jc.GET_PRODUCT_FORM_ERROR:
            e = {
              ...e,
              errors: { ...e.errors, fields: t.error, sections: t.error, subsections: t.error },
            };
        }
        return e;
      },
      actions: Y,
      controls: re.controls,
      selectors: H,
      resolvers: W,
    });
    const ru = Vc,
      ou = 'experimental/wc/admin/tax-classes',
      nu = '/wc/v3/taxes/classes';
    function* su(e) {
      const t = za(nu, e || {}),
        r = Xa(e || {}, nu);
      try {
        const o = Ha(nu, e || {}, t),
          { items: n } = yield de(o, r);
        return (
          yield Sc(e, n.length),
          yield Tc(
            e,
            n.map(e => {
              var t;
              return { ...e, id: null !== (t = e.id) && void 0 !== t ? t : e.slug };
            }),
            t,
          ),
          n
        );
      } catch (t) {
        throw (yield _c(e, t), yield pc(e, t), t);
      }
    }
    yc({
      storeName: ou,
      resourceName: 'TaxClass',
      pluralResourceName: 'TaxClasses',
      namespace: nu,
      storeConfig: { resolvers: J },
    });
    const iu = ou,
      au = window.wp.compose,
      cu = window.wp.element,
      uu = (e, t) =>
        (0, au.createHigherOrderComponent)(
          r => o => {
            const n = (0, cu.useRef)(t),
              {
                startResolution: s,
                finishResolution: i,
                updateSettingsForGroup: a,
                clearIsDirty: c,
              } = (0, te.useDispatch)(oe),
              { isResolvingGroup: u, hasFinishedResolutionGroup: l } = (0, te.useSelect)(t => {
                const { isResolving: r, hasFinishedResolution: o } = t(oe);
                return {
                  isResolvingGroup: r('getSettings', [e]),
                  hasFinishedResolutionGroup: o('getSettings', [e]),
                };
              }, []);
            return (
              (0, cu.useEffect)(() => {
                n.current &&
                  (u || l || (s('getSettings', [e]), a(e, n.current), c(e), i('getSettings', [e])));
              }, [u, l, i, a, s, c]),
              (0, cu.createElement)(r, { ...o })
            );
          },
          'withSettingsHydration',
        ),
      lu = e => {
        let t = !1;
        return (0, au.createHigherOrderComponent)(
          r => o => {
            const n = (0, cu.useRef)(e),
              { isResolvingGroup: s, hasFinishedResolutionGroup: i } = (0, te.useSelect)(e => {
                const { isResolving: t, hasFinishedResolution: r } = e(lr);
                return {
                  isResolvingGroup: t('getProfileItems', []),
                  hasFinishedResolutionGroup: r('getProfileItems', []),
                };
              }),
              { startResolution: a, finishResolution: c, setProfileItems: u } = (0, te.useDispatch)(
                lr,
              );
            return (
              (0, cu.useEffect)(() => {
                if (!n.current) return;
                const { profileItems: e } = n.current;
                e &&
                  (!e ||
                    t ||
                    s ||
                    i ||
                    (a('getProfileItems', []), u(e, !0), c('getProfileItems', []), (t = !0)));
              }, [c, u, a, s, i]),
              (0, cu.createElement)(r, { ...o })
            );
          },
          'withOnboardingHydration',
        );
      },
      Eu = e =>
        (0, au.createHigherOrderComponent)(
          t => r => {
            const o = (0, te.useSelect)(t => {
                if (!e) return;
                const { isResolving: r, hasFinishedResolution: o } = t($o);
                return !r('getCurrentUser') && !o('getCurrentUser');
              }),
              { startResolution: n, finishResolution: s, receiveCurrentUser: i } = (0,
              te.useDispatch)($o);
            return (
              o && (n('getCurrentUser', []), i(e), s('getCurrentUser', [])),
              (0, cu.createElement)(t, { ...r })
            );
          },
          'withCurrentUserHydration',
        ),
      du = e =>
        (0, au.createHigherOrderComponent)(
          t => r => {
            const o = (0, te.useSelect)(t => {
                if (!e) return;
                const { isResolving: r, hasFinishedResolution: o } = t(Es);
                return !r('getMenuItems') && !o('getMenuItems');
              }),
              { startResolution: n, finishResolution: s, setMenuItems: i } = (0, te.useDispatch)(
                Es,
              );
            return (
              (0, cu.useEffect)(() => {
                o && (n('getMenuItems', []), i(e.menuItems), s('getMenuItems', []));
              }, [o]),
              (0, cu.createElement)(t, { ...r })
            );
          },
          'withNavigationHydration',
        ),
      pu = e =>
        (0, au.createHigherOrderComponent)(
          t => r => {
            const o = (0, te.useSelect)(t => {
                if (!e) return;
                const { isResolving: r, hasFinishedResolution: o } = t(ze);
                return !r('getActivePlugins', []) && !o('getActivePlugins', []);
              }, []),
              {
                startResolution: n,
                finishResolution: s,
                updateActivePlugins: i,
                updateInstalledPlugins: a,
                updateIsJetpackConnected: c,
              } = (0, te.useDispatch)(ze);
            return (
              (0, cu.useEffect)(() => {
                o &&
                  (n('getActivePlugins', []),
                  n('getInstalledPlugins', []),
                  n('isJetpackConnected', []),
                  i(e.activePlugins, !0),
                  a(e.installedPlugins, !0),
                  c(!(!e.jetpackStatus || !e.jetpackStatus.isActive)),
                  s('getActivePlugins', []),
                  s('getInstalledPlugins', []),
                  s('isJetpackConnected', []));
              }, [o]),
              (0, cu.createElement)(t, { ...r })
            );
          },
          'withPluginsHydration',
        ),
      Tu = e => {
        const t = (0, te.useSelect)(t => {
            const { isResolving: r, hasFinishedResolution: o } = t(Mt);
            return e
              ? Object.fromEntries(
                  Object.keys(e).map(e => [e, !r('getOption', [e]) && !o('getOption', [e])]),
                )
              : {};
          }, []),
          { startResolution: r, finishResolution: o, receiveOptions: n } = (0, te.useDispatch)(Mt);
        (0, cu.useEffect)(() => {
          Object.entries(t).forEach(([t, s]) => {
            s && (r('getOption', [t]), n({ [t]: e[t] }), o('getOption', [t]));
          });
        }, [t]);
      },
      Su = e =>
        (0, au.createHigherOrderComponent)(
          t => r => (Tu(e), (0, cu.createElement)(t, { ...r })),
          'withOptionsHydration',
        ),
      _u = (e, t = []) => {
        const { requestedSettings: r, settingsError: o, isRequesting: n, isDirty: s } = (0,
          te.useSelect)(
            r => {
              const {
                getLastSettingsErrorForGroup: o,
                getSettingsForGroup: n,
                getIsDirty: s,
                isUpdateSettingsRequesting: i,
              } = r(oe);
              return {
                requestedSettings: n(e, t),
                settingsError: Boolean(o(e)),
                isRequesting: i(e),
                isDirty: s(e, t),
              };
            },
            [e, ...t.sort()],
          ),
          {
            persistSettingsForGroup: i,
            updateAndPersistSettingsForGroup: a,
            updateSettingsForGroup: c,
          } = (0, te.useDispatch)(oe),
          u = (0, cu.useCallback)(
            (t, r) => {
              c(e, { [t]: r });
            },
            [e],
          );
        return {
          settingsError: o,
          isRequesting: n,
          isDirty: s,
          ...r,
          persistSettings: (0, cu.useCallback)(() => {
            i(e);
          }, [e]),
          updateAndPersistSettings: (0, cu.useCallback)(
            (t, r) => {
              a(e, { [t]: r });
            },
            [e],
          ),
          updateSettings: u,
        };
      },
      yu = e => {
        const t = e.woocommerce_meta || {};
        return (0, he.mapValues)(t, (e, t) => {
          if (!e || 0 === e.length) return '';
          try {
            return JSON.parse(e);
          } catch (r) {
            return (
              r instanceof Error
                ? console.error(`Error parsing value '${e}' for ${t}`, r.message)
                : console.error(`Unexpected Error parsing value '${e}' for ${t} ${r}`),
              ''
            );
          }
        });
      },
      fu = () => {
        const e = (0, te.useDispatch)($o),
          { addEntities: t, receiveCurrentUser: r, saveEntityRecord: o } = e;
        let { saveUser: n } = e;
        const s = (0, te.useSelect)(e => {
            const {
              getCurrentUser: t,
              getEntity: r,
              getEntityRecord: o,
              getLastEntitySaveError: n,
              hasStartedResolution: s,
              hasFinishedResolution: i,
            } = e($o);
            return {
              isRequesting: s('getCurrentUser') && !i('getCurrentUser'),
              user: t(),
              getCurrentUser: t,
              getEntity: r,
              getEntityRecord: o,
              getLastEntitySaveError: n,
            };
          }),
          i = s.user ? yu(s.user) : {};
        return {
          isRequesting: s.isRequesting,
          ...i,
          updateUserPreferences: e => {
            'function' != typeof n &&
              (n = async e => (
                Boolean(s.getEntity('root', 'user')) ||
                  (await t([
                    { name: 'user', kind: 'root', baseURL: '/wp/v2/users', plural: 'users' },
                  ])),
                await o('root', 'user', e),
                s.getEntityRecord('root', 'user', e.id)
              ));
            const i = s.getCurrentUser();
            return (async function(e, t, r, o, n) {
              const s = (0, he.mapValues)(n, JSON.stringify);
              if (0 === Object.keys(s).length)
                return {
                  error: new Error('Invalid woocommerce_meta data for update.'),
                  updatedUser: void 0,
                };
              e({ ...t, woocommerce_meta: { ...t.woocommerce_meta, ...s } });
              const i = await r({ id: t.id, woocommerce_meta: s });
              return void 0 === i
                ? { error: o('root', 'user', t.id), updatedUser: i }
                : { updatedUser: { ...i, woocommerce_meta: yu(i) } };
            })(r, i, n, s.getLastEntitySaveError, e);
          },
        };
      },
      Ru = () => {
        const e = (0, te.useSelect)(e => {
          const { getCurrentUser: t, hasStartedResolution: r, hasFinishedResolution: o } = e($o);
          return {
            isRequesting: r('getCurrentUser') && !o('getCurrentUser'),
            user: t(),
            getCurrentUser: t,
          };
        });
        return {
          currentUserCan: t =>
            !(!e.user || !e.user.is_super_admin) || !(!e.user || !e.user.capabilities[t]),
          user: e.user,
          isRequesting: e.isRequesting,
        };
      },
      gu = e => e.filter(e => !e.isDismissed),
      mu = window.moment;
    var Ou = r.n(mu);
    function hu(e) {
      const { endpoint: t, query: r, limitBy: o, filters: n = [], advancedFilters: s = {} } = e;
      return r.search
        ? (o || [t]).reduce((e, t) => ((e[t] = r[t]), e), {})
        : n
            .map(e =>
              (function(e, t, r) {
                const o = r[e.param];
                if (!o) return {};
                if ('advanced' === o) {
                  const e = (0, _s.getActiveFiltersFromQuery)(r, t.filters);
                  if (0 === e.length) return {};
                  const o = (0, _s.getQueryFromActiveFilters)(
                    e.map(e =>
                      (function(e, t) {
                        const r = e.filters[t.key];
                        if ('Date' !== (0, he.get)(r, ['input', 'component'])) return t;
                        const { rule: o, value: n } = t,
                          s = { after: 'start', before: 'end' };
                        if (Array.isArray(n)) {
                          const [e, r] = n;
                          return Object.assign({}, t, {
                            value: [
                              (0, Ms.appendTimestamp)(Ou()(e), s.after),
                              (0, Ms.appendTimestamp)(Ou()(r), s.before),
                            ],
                          });
                        }
                        return Object.assign({}, t, {
                          value: (0, Ms.appendTimestamp)(Ou()(n), s[o]),
                        });
                      })(t, e),
                    ),
                    {},
                    t.filters,
                  );
                  return { match: r.match || 'all', ...o };
                }
                const n = (0, he.find)((0, _s.flattenFilters)(e.filters), { value: o });
                if (!n) return {};
                if (n.settings && n.settings.param) {
                  const { param: e } = n.settings;
                  return r[e] ? { [e]: r[e] } : {};
                }
                return { [e.param]: o };
              })(e, s, r),
            )
            .reduce((e, t) => Object.assign(e, t), {});
    }
    const Au = ['stock', 'customers'];
    function Iu(e) {
      const { endpoint: t, dataType: r, query: o, fields: n, defaultDateRange: s } = e,
        i = (0, Ms.getCurrentDates)(o, s),
        a = (0, Ms.getIntervalForQuery)(o, s),
        c = hu(e),
        u = i[r].before;
      return (0, he.includes)(Au, t)
        ? { ...c, fields: n }
        : {
            order: 'asc',
            interval: a,
            per_page: Ue,
            after: (0, Ms.appendTimestamp)(i[r].after, 'start'),
            before: (0, Ms.appendTimestamp)(u, 'end'),
            segmentby: o.segmentby,
            fields: n,
            ...c,
          };
    }
    function Cu(e) {
      const { endpoint: t, select: r } = e,
        { getReportStats: o, getReportStatsError: n, isResolving: s } = r(Pn),
        i = { isRequesting: !1, isError: !1, totals: { primary: null, secondary: null } },
        a = Iu({ ...e, dataType: 'primary' }),
        c = o(t, a);
      if (s('getReportStats', [t, a])) return { ...i, isRequesting: !0 };
      if (n(t, a)) return { ...i, isError: !0 };
      const u = (c && c.data && c.data.totals) || null,
        l = Iu({ ...e, dataType: 'secondary' }),
        E = o(t, l);
      if (s('getReportStats', [t, l])) return { ...i, isRequesting: !0 };
      if (n(t, l)) return { ...i, isError: !0 };
      const d = (E && E.data && E.data.totals) || null;
      return { ...i, totals: { primary: u, secondary: d } };
    }
    const Pu = {
        requesting: {
          isEmpty: !1,
          isError: !1,
          isRequesting: !0,
          data: { totals: {}, intervals: [] },
        },
        error: { isEmpty: !1, isError: !0, isRequesting: !1, data: { totals: {}, intervals: [] } },
        empty: { isEmpty: !0, isError: !1, isRequesting: !1, data: { totals: {}, intervals: [] } },
      },
      Uu = [],
      vu = (0, he.memoize)(
        (e, t, r) => ({
          isEmpty: !1,
          isError: !1,
          isRequesting: !1,
          data: { totals: t, intervals: r },
        }),
        (e, t, r) => [e, t.length, r.length].join(':'),
      );
    function Nu(e) {
      const { endpoint: t } = e;
      let r = e.selector;
      e.select &&
        !e.selector &&
        (Dr()('option.select', {
          version: '1.7.0',
          hint: 'You can pass the report selectors through option.selector now.',
        }),
        (r = e.select(Pn)));
      const { getReportStats: o, getReportStatsError: n, isResolving: s } = r,
        i = Iu(e),
        a = o(t, i);
      if (s('getReportStats', [t, i])) return Pu.requesting;
      if (n(t, i)) return Pu.error;
      if (
        (function(e, t) {
          return !(
            e &&
            e.data &&
            e.data.totals &&
            !(0, he.isNull)(e.data.totals) &&
            ((0, he.includes)(Au, t) || (e.data.intervals && 0 !== e.data.intervals.length))
          );
        })(a, t)
      )
        return Pu.empty;
      const c = (a && a.data && a.data.totals) || null;
      let u = (a && a.data && a.data.intervals) || Uu;
      if (a.totalResults > Ue) {
        let e = !0,
          r = !1;
        const c = [],
          l = Math.ceil(a.totalResults / Ue);
        let E = 1;
        for (let a = 2; a <= l; a++) {
          const u = { ...i, page: a },
            d = o(t, u);
          if (!s('getReportStats', [t, u])) {
            if (n(t, u)) {
              (r = !0), (e = !1);
              break;
            }
            if ((c.push(d), E++, E === l)) {
              e = !1;
              break;
            }
          }
        }
        if (e) return Pu.requesting;
        if (r) return Pu.error;
        (0, he.forEach)(c, function(e) {
          e.data &&
            e.data.intervals &&
            Array.isArray(e.data.intervals) &&
            (u = u.concat(e.data.intervals));
        });
      }
      return vu(le(t, i), c, u);
    }
    function Du(e, t) {
      switch (e) {
        case 'currency':
          return t;
        case 'percent':
          return '.0%';
        case 'number':
        default:
          return ',';
        case 'average':
          return ',.2r';
      }
    }
    function wu(e) {
      const { query: t, tableQuery: r = {} } = e,
        o = hu(e),
        n = (0, Ms.getCurrentDates)(t, e.defaultDateRange),
        s = (0, he.includes)(Au, e.endpoint);
      return {
        orderby: t.orderby || 'date',
        order: t.order || 'desc',
        after: s ? void 0 : (0, Ms.appendTimestamp)(n.primary.after, 'start'),
        before: s ? void 0 : (0, Ms.appendTimestamp)(n.primary.before, 'end'),
        page: t.paged || 1,
        per_page: t.per_page || Ge.pageSize,
        ...o,
        ...r,
      };
    }
    function bu(e) {
      const { endpoint: t } = e;
      let r = e.selector;
      e.select &&
        !e.selector &&
        (Dr()('option.select', {
          version: '1.7.0',
          hint: 'You can pass the report selectors through option.selector now.',
        }),
        (r = e.select(Pn)));
      const { getReportItems: o, getReportItemsError: n, hasFinishedResolution: s } = r,
        i = wu(e),
        a = { query: i, isRequesting: !1, isError: !1, items: { data: [], totalResults: 0 } },
        c = o(t, i);
      return s('getReportItems', [t, i])
        ? n(t, i)
          ? { ...a, isError: !0 }
          : { ...a, items: c }
        : { ...a, isRequesting: !0 };
    }
    const ku = 'wc/admin/export';
    var Gu = r(5681),
      Mu = r.n(Gu);
    const Lu = e => Mu()(le('export', e)),
      Fu = (e, t, r) => Boolean(e.requesting[t] && e.requesting[t][Lu(r)]),
      qu = (e, t, r) => e.exportIds[t] && e.exportIds[t][Lu(r)],
      ju = (e, t, r) => e.errors[t] && e.errors[t][Lu(r)],
      xu = {
        START_EXPORT: 'START_EXPORT',
        SET_EXPORT_ID: 'SET_EXPORT_ID',
        SET_ERROR: 'SET_ERROR',
        SET_IS_REQUESTING: 'SET_IS_REQUESTING',
      };
    function Qu(e, t, r) {
      return { type: xu.SET_EXPORT_ID, exportType: e, exportArgs: t, exportId: r };
    }
    function Ku(e, t, r) {
      return { type: xu.SET_IS_REQUESTING, selector: e, selectorArgs: t, isRequesting: r };
    }
    function Vu(e, t, r) {
      return { type: xu.SET_ERROR, selector: e, selectorArgs: t, error: r };
    }
    function* $u(e, t) {
      yield Ku('startExport', { type: e, args: t }, !0);
      try {
        const r = yield ae({
          path: `${Ie}/reports/${e}/export`,
          method: 'POST',
          data: { report_args: t, email: !0 },
        });
        yield Ku('startExport', { type: e, args: t }, !1);
        const { export_id: o, message: n } = r.data;
        if (!o) throw new Error(n);
        return yield Qu(e, t, o), r.data;
      } catch (r) {
        throw (r instanceof Error
          ? yield Vu('startExport', { type: e, args: t }, r.message)
          : console.error(`Unexpected Error: ${JSON.stringify(r)}`),
        yield Ku('startExport', { type: e, args: t }, !1),
        r);
      }
    }
    (0, te.registerStore)(ku, {
      reducer: (e = { errors: {}, requesting: {}, exportMeta: {}, exportIds: {} }, t) => {
        switch (t.type) {
          case xu.SET_IS_REQUESTING:
            return {
              ...e,
              requesting: {
                ...e.requesting,
                [t.selector]: { ...e.requesting[t.selector], [Lu(t.selectorArgs)]: t.isRequesting },
              },
            };
          case xu.SET_EXPORT_ID:
            const { exportType: r, exportArgs: o, exportId: n } = t;
            return {
              ...e,
              exportMeta: { ...e.exportMeta, [n]: { exportType: r, exportArgs: o } },
              exportIds: {
                ...e.exportIds,
                [r]: { ...e.exportIds[r], [Lu({ type: r, args: o })]: n },
              },
            };
          case xu.SET_ERROR:
            return {
              ...e,
              errors: {
                ...e.errors,
                [t.selector]: { ...e.errors[t.selector], [Lu(t.selectorArgs)]: t.error },
              },
            };
          default:
            return e;
        }
      },
      actions: z,
      controls: ce,
      selectors: B,
    });
    const Hu = ku,
      Yu = 'wc/admin/import',
      Wu = e => {
        const { activeImport: t, lastImportStartTimestamp: r } = e;
        return { activeImport: t, lastImportStartTimestamp: r } || {};
      },
      Ju = e => {
        const { period: t, skipPrevious: r } = e;
        return { period: t, skipPrevious: r } || {};
      },
      Bu = (e, t) => {
        const r = JSON.stringify(t);
        return e.importStatus[r] || {};
      },
      zu = (e, t) => {
        const { importTotals: r, lastImportStartTimestamp: o } = e;
        return { ...r[JSON.stringify(t)], lastImportStartTimestamp: o } || {};
      },
      Zu = (e, t) => {
        const r = JSON.stringify(t);
        return e.errors[r] || !1;
      },
      Xu = {
        SET_IMPORT_DATE: 'SET_IMPORT_DATE',
        SET_IMPORT_ERROR: 'SET_IMPORT_ERROR',
        SET_IMPORT_PERIOD: 'SET_IMPORT_PERIOD',
        SET_IMPORT_STARTED: 'SET_IMPORT_STARTED',
        SET_IMPORT_STATUS: 'SET_IMPORT_STATUS',
        SET_IMPORT_TOTALS: 'SET_IMPORT_TOTALS',
        SET_SKIP_IMPORTED: 'SET_SKIP_IMPORTED',
      };
    function el(e) {
      return { type: Xu.SET_IMPORT_STARTED, activeImport: e };
    }
    function tl(e, t) {
      return t ? { type: Xu.SET_IMPORT_DATE, date: e } : { type: Xu.SET_IMPORT_PERIOD, date: e };
    }
    function rl(e) {
      return { type: Xu.SET_SKIP_IMPORTED, skipPrevious: e };
    }
    function ol(e, t) {
      return { type: Xu.SET_IMPORT_STATUS, importStatus: t, query: e };
    }
    function nl(e, t) {
      return { type: Xu.SET_IMPORT_TOTALS, importTotals: t, query: e };
    }
    function sl(e, t) {
      return { type: Xu.SET_IMPORT_ERROR, error: t, query: e };
    }
    function* il(e, t = !1) {
      yield el(t);
      try {
        return yield (0, re.apiFetch)({ path: e, method: 'POST' });
      } catch (t) {
        throw (yield sl(e, t), t);
      }
    }
    function* al(e) {
      try {
        const t = (0, ne.addQueryArgs)(
            `${Ie}/reports/import/status`,
            'object' == typeof e ? (0, he.omit)(e, ['timestamp']) : {},
          ),
          r = yield (0, re.apiFetch)({ path: t });
        yield ol(e, r);
      } catch (t) {
        yield sl(e, t);
      }
    }
    function* cl(e) {
      try {
        const t = (0, ne.addQueryArgs)(`${Ie}/reports/import/totals`, e),
          r = yield (0, re.apiFetch)({ path: t });
        yield nl(e, r);
      } catch (t) {
        yield sl(e, t);
      }
    }
    (0, te.registerStore)(Yu, {
      reducer: (
        e = {
          activeImport: !1,
          importStatus: {},
          importTotals: {},
          errors: {},
          lastImportStartTimestamp: 0,
          period: { date: Ou()().format((0, Oe.__)('MM/DD/YYYY', 'woocommerce')), label: 'all' },
          skipPrevious: !0,
        },
        t,
      ) => {
        switch (t.type) {
          case Xu.SET_IMPORT_STARTED:
            const { activeImport: r } = t;
            e = {
              ...e,
              activeImport: r,
              lastImportStartTimestamp: r ? Date.now() : e.lastImportStartTimestamp,
            };
            break;
          case Xu.SET_IMPORT_PERIOD:
            e = { ...e, period: { ...e.period, label: t.date }, activeImport: !1 };
            break;
          case Xu.SET_IMPORT_DATE:
            e = { ...e, period: { date: t.date, label: 'custom' }, activeImport: !1 };
            break;
          case Xu.SET_SKIP_IMPORTED:
            e = { ...e, skipPrevious: t.skipPrevious, activeImport: !1 };
            break;
          case Xu.SET_IMPORT_STATUS:
            const { query: o, importStatus: n } = t;
            e = {
              ...e,
              importStatus: { ...e.importStatus, [JSON.stringify(o)]: n },
              errors: { ...e.errors, [JSON.stringify(o)]: !1 },
            };
            break;
          case Xu.SET_IMPORT_TOTALS:
            e = {
              ...e,
              importTotals: { ...e.importTotals, [JSON.stringify(t.query)]: t.importTotals },
            };
            break;
          case Xu.SET_IMPORT_ERROR:
            e = { ...e, errors: { ...e.errors, [JSON.stringify(t.query)]: t.error } };
        }
        return e;
      },
      actions: X,
      controls: re.controls,
      selectors: Z,
      resolvers: ee,
    });
    const ul = Yu,
      ll = [
        'average_rating',
        'backordered',
        'backorders_allowed',
        'date_created',
        'date_created_gmt',
        'date_modified',
        'date_modified_gmt',
        'generated_slug',
        'id',
        'on_sale',
        'permalink',
        'permalink_template',
        'price',
        'price_html',
        'purchasable',
        'rating_count',
        'related_ids',
        'shipping_class_id',
        'shipping_required',
        'shipping_taxable',
        'total_sales',
        'variations',
      ];
  })(),
    ((window.wc = window.wc || {}).data = o);
})();
