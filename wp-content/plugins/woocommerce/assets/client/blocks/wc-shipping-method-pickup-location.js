(() => {
  'use strict';
  var e = {
      458: e => {
        e.exports = function e(t, n) {
          if (t === n) return !0;
          if (t && n && 'object' == typeof t && 'object' == typeof n) {
            if (t.constructor !== n.constructor) return !1;
            var r, o, a;
            if (Array.isArray(t)) {
              if ((r = t.length) != n.length) return !1;
              for (o = r; 0 != o--; ) if (!e(t[o], n[o])) return !1;
              return !0;
            }
            if (t instanceof Map && n instanceof Map) {
              if (t.size !== n.size) return !1;
              for (o of t.entries()) if (!n.has(o[0])) return !1;
              for (o of t.entries()) if (!e(o[1], n.get(o[0]))) return !1;
              return !0;
            }
            if (t instanceof Set && n instanceof Set) {
              if (t.size !== n.size) return !1;
              for (o of t.entries()) if (!n.has(o[0])) return !1;
              return !0;
            }
            if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
              if ((r = t.length) != n.length) return !1;
              for (o = r; 0 != o--; ) if (t[o] !== n[o]) return !1;
              return !0;
            }
            if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
            if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
            if ((r = (a = Object.keys(t)).length) !== Object.keys(n).length) return !1;
            for (o = r; 0 != o--; ) if (!Object.prototype.hasOwnProperty.call(n, a[o])) return !1;
            for (o = r; 0 != o--; ) {
              var i = a[o];
              if (!e(t[i], n[i])) return !1;
            }
            return !0;
          }
          return t != t && n != n;
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
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
    (() => {
      const e = window.React;
      var t = n.n(e);
      const r = window.wp.element;
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      function a(e) {
        var t = Object.create(null);
        return function(n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      var i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        l = a(function(e) {
          return (
            i.test(e) ||
            (111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91)
          );
        }),
        s = (function() {
          function e(e) {
            var t = this;
            (this._insertTag = function(e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function(e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function(e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(
                  (function(e) {
                    var t = document.createElement('style');
                    return (
                      t.setAttribute('data-emotion', e.key),
                      void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                      t.appendChild(document.createTextNode('')),
                      t.setAttribute('data-s', ''),
                      t
                    );
                  })(this),
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function(e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {}
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function() {
              this.tags.forEach(function(e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        c = Math.abs,
        u = String.fromCharCode,
        d = Object.assign;
      function p(e) {
        return e.trim();
      }
      function f(e, t, n) {
        return e.replace(t, n);
      }
      function h(e, t) {
        return e.indexOf(t);
      }
      function m(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function g(e, t, n) {
        return e.slice(t, n);
      }
      function v(e) {
        return e.length;
      }
      function b(e) {
        return e.length;
      }
      function y(e, t) {
        return t.push(e), e;
      }
      var w = 1,
        x = 1,
        k = 0,
        E = 0,
        C = 0,
        S = '';
      function _(e, t, n, r, o, a, i) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: w,
          column: x,
          length: i,
          return: '',
        };
      }
      function R(e, t) {
        return d(_('', null, null, '', null, null, 0), e, { length: -e.length }, t);
      }
      function D() {
        return (C = E > 0 ? m(S, --E) : 0), x--, 10 === C && ((x = 1), w--), C;
      }
      function O() {
        return (C = E < k ? m(S, E++) : 0), x++, 10 === C && ((x = 1), w++), C;
      }
      function A() {
        return m(S, E);
      }
      function T() {
        return E;
      }
      function M(e, t) {
        return g(S, e, t);
      }
      function L(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function N(e) {
        return (w = x = 1), (k = v((S = e))), (E = 0), [];
      }
      function I(e) {
        return (S = ''), e;
      }
      function P(e) {
        return p(M(E - 1, B(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function j(e) {
        for (; (C = A()) && C < 33; ) O();
        return L(e) > 2 || L(C) > 3 ? '' : ' ';
      }
      function z(e, t) {
        for (; --t && O() && !(C < 48 || C > 102 || (C > 57 && C < 65) || (C > 70 && C < 97)); );
        return M(e, T() + (t < 6 && 32 == A() && 32 == O()));
      }
      function B(e) {
        for (; O(); )
          switch (C) {
            case e:
              return E;
            case 34:
            case 39:
              34 !== e && 39 !== e && B(C);
              break;
            case 40:
              41 === e && B(e);
              break;
            case 92:
              O();
          }
        return E;
      }
      function F(e, t) {
        for (; O() && e + C !== 57 && (e + C !== 84 || 47 !== A()); );
        return '/*' + M(t, E - 1) + '*' + u(47 === e ? e : O());
      }
      function $(e) {
        for (; !L(A()); ) O();
        return M(e, E);
      }
      var U = '-ms-',
        V = '-moz-',
        H = '-webkit-',
        G = 'comm',
        W = 'rule',
        q = 'decl',
        X = '@keyframes';
      function Y(e, t) {
        for (var n = '', r = b(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
        return n;
      }
      function K(e, t, n, r) {
        switch (e.type) {
          case '@layer':
            if (e.children.length) break;
          case '@import':
          case q:
            return (e.return = e.return || e.value);
          case G:
            return '';
          case X:
            return (e.return = e.value + '{' + Y(e.children, r) + '}');
          case W:
            e.value = e.props.join(',');
        }
        return v((n = Y(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
      }
      function J(e) {
        return I(Z('', null, null, null, [''], (e = N(e)), 0, [0], e));
      }
      function Z(e, t, n, r, o, a, i, l, s) {
        for (
          var c = 0,
            d = 0,
            p = i,
            g = 0,
            b = 0,
            w = 0,
            x = 1,
            k = 1,
            E = 1,
            C = 0,
            S = '',
            _ = o,
            R = a,
            M = r,
            L = S;
          k;

        )
          switch (((w = C), (C = O()))) {
            case 40:
              if (108 != w && 58 == m(L, p - 1)) {
                -1 != h((L += f(P(C), '&', '&\f')), '&\f') && (E = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              L += P(C);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              L += j(w);
              break;
            case 92:
              L += z(T() - 1, 7);
              continue;
            case 47:
              switch (A()) {
                case 42:
                case 47:
                  y(ee(F(O(), T()), t, n), s);
                  break;
                default:
                  L += '/';
              }
              break;
            case 123 * x:
              l[c++] = v(L) * E;
            case 125 * x:
            case 59:
            case 0:
              switch (C) {
                case 0:
                case 125:
                  k = 0;
                case 59 + d:
                  -1 == E && (L = f(L, /\f/g, '')),
                    b > 0 &&
                      v(L) - p &&
                      y(
                        b > 32 ? te(L + ';', r, n, p - 1) : te(f(L, ' ', '') + ';', r, n, p - 2),
                        s,
                      );
                  break;
                case 59:
                  L += ';';
                default:
                  if ((y((M = Q(L, t, n, c, d, o, l, S, (_ = []), (R = []), p)), a), 123 === C))
                    if (0 === d) Z(L, t, M, M, _, a, p, l, R);
                    else
                      switch (99 === g && 110 === m(L, 3) ? 100 : g) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Z(
                            e,
                            M,
                            M,
                            r && y(Q(e, M, M, 0, 0, o, l, S, o, (_ = []), p), R),
                            o,
                            R,
                            p,
                            l,
                            r ? _ : R,
                          );
                          break;
                        default:
                          Z(L, M, M, M, [''], R, 0, l, R);
                      }
              }
              (c = d = b = 0), (x = E = 1), (S = L = ''), (p = i);
              break;
            case 58:
              (p = 1 + v(L)), (b = w);
            default:
              if (x < 1)
                if (123 == C) --x;
                else if (125 == C && 0 == x++ && 125 == D()) continue;
              switch (((L += u(C)), C * x)) {
                case 38:
                  E = d > 0 ? 1 : ((L += '\f'), -1);
                  break;
                case 44:
                  (l[c++] = (v(L) - 1) * E), (E = 1);
                  break;
                case 64:
                  45 === A() && (L += P(O())), (g = A()), (d = p = v((S = L += $(T())))), C++;
                  break;
                case 45:
                  45 === w && 2 == v(L) && (x = 0);
              }
          }
        return a;
      }
      function Q(e, t, n, r, o, a, i, l, s, u, d) {
        for (var h = o - 1, m = 0 === o ? a : [''], v = b(m), y = 0, w = 0, x = 0; y < r; ++y)
          for (var k = 0, E = g(e, h + 1, (h = c((w = i[y])))), C = e; k < v; ++k)
            (C = p(w > 0 ? m[k] + ' ' + E : f(E, /&\f/g, m[k]))) && (s[x++] = C);
        return _(e, t, n, 0 === o ? W : l, s, u, d);
      }
      function ee(e, t, n) {
        return _(e, t, n, G, u(C), g(e, 2, -2), 0);
      }
      function te(e, t, n, r) {
        return _(e, t, n, q, g(e, 0, r), g(e, r + 1, -1), r);
      }
      var ne = function(e, t, n) {
          for (var r = 0, o = 0; (r = o), (o = A()), 38 === r && 12 === o && (t[n] = 1), !L(o); )
            O();
          return M(e, E);
        },
        re = new WeakMap(),
        oe = function(e) {
          if ('rule' === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
              'rule' !== n.type;

            )
              if (!(n = n.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || re.get(n)) && !r) {
              re.set(e, !0);
              for (
                var o = [],
                  a = (function(e, t) {
                    return I(
                      (function(e, t) {
                        var n = -1,
                          r = 44;
                        do {
                          switch (L(r)) {
                            case 0:
                              38 === r && 12 === A() && (t[n] = 1), (e[n] += ne(E - 1, t, n));
                              break;
                            case 2:
                              e[n] += P(r);
                              break;
                            case 4:
                              if (44 === r) {
                                (e[++n] = 58 === A() ? '&\f' : ''), (t[n] = e[n].length);
                                break;
                              }
                            default:
                              e[n] += u(r);
                          }
                        } while ((r = O()));
                        return e;
                      })(N(e), t),
                    );
                  })(t, o),
                  i = n.props,
                  l = 0,
                  s = 0;
                l < a.length;
                l++
              )
                for (var c = 0; c < i.length; c++, s++)
                  e.props[s] = o[l] ? a[l].replace(/&\f/g, i[c]) : i[c] + ' ' + a[l];
            }
          }
        },
        ae = function(e) {
          if ('decl' === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && ((e.return = ''), (e.value = ''));
          }
        };
      function ie(e, t) {
        switch (
          (function(e, t) {
            return 45 ^ m(e, 0)
              ? (((((((t << 2) ^ m(e, 0)) << 2) ^ m(e, 1)) << 2) ^ m(e, 2)) << 2) ^ m(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return H + 'print-' + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return H + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return H + e + V + e + U + e + e;
          case 6828:
          case 4268:
            return H + e + U + e + e;
          case 6165:
            return H + e + U + 'flex-' + e + e;
          case 5187:
            return H + e + f(e, /(\w+).+(:[^]+)/, H + 'box-$1$2' + U + 'flex-$1$2') + e;
          case 5443:
            return H + e + U + 'flex-item-' + f(e, /flex-|-self/, '') + e;
          case 4675:
            return H + e + U + 'flex-line-pack' + f(e, /align-content|flex-|-self/, '') + e;
          case 5548:
            return H + e + U + f(e, 'shrink', 'negative') + e;
          case 5292:
            return H + e + U + f(e, 'basis', 'preferred-size') + e;
          case 6060:
            return H + 'box-' + f(e, '-grow', '') + H + e + U + f(e, 'grow', 'positive') + e;
          case 4554:
            return H + f(e, /([^-])(transform)/g, '$1' + H + '$2') + e;
          case 6187:
            return f(f(f(e, /(zoom-|grab)/, H + '$1'), /(image-set)/, H + '$1'), e, '') + e;
          case 5495:
          case 3959:
            return f(e, /(image-set\([^]*)/, H + '$1$`$1');
          case 4968:
            return (
              f(
                f(e, /(.+:)(flex-)?(.*)/, H + 'box-pack:$3' + U + 'flex-pack:$3'),
                /s.+-b[^;]+/,
                'justify',
              ) +
              H +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return f(e, /(.+)-inline(.+)/, H + '$1$2') + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (v(e) - 1 - t > 6)
              switch (m(e, t + 1)) {
                case 109:
                  if (45 !== m(e, t + 4)) break;
                case 102:
                  return (
                    f(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      '$1' + H + '$2-$3$1' + V + (108 == m(e, t + 3) ? '$3' : '$2-$3'),
                    ) + e
                  );
                case 115:
                  return ~h(e, 'stretch') ? ie(f(e, 'stretch', 'fill-available'), t) + e : e;
              }
            break;
          case 4949:
            if (115 !== m(e, t + 1)) break;
          case 6444:
            switch (m(e, v(e) - 3 - (~h(e, '!important') && 10))) {
              case 107:
                return f(e, ':', ':' + H) + e;
              case 101:
                return (
                  f(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    '$1' +
                      H +
                      (45 === m(e, 14) ? 'inline-' : '') +
                      'box$3$1' +
                      H +
                      '$2$3$1' +
                      U +
                      '$2box$3',
                  ) + e
                );
            }
            break;
          case 5936:
            switch (m(e, t + 11)) {
              case 114:
                return H + e + U + f(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
              case 108:
                return H + e + U + f(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
              case 45:
                return H + e + U + f(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
            return H + e + U + e + e;
        }
        return e;
      }
      var le = [
          function(e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case q:
                  e.return = ie(e.value, e.length);
                  break;
                case X:
                  return Y([R(e, { value: f(e.value, '@', '@' + H) })], r);
                case W:
                  if (e.length)
                    return (function(e, t) {
                      return e.map(t).join('');
                    })(e.props, function(t) {
                      switch (
                        (function(e, t) {
                          return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e;
                        })(t)
                      ) {
                        case ':read-only':
                        case ':read-write':
                          return Y([R(e, { props: [f(t, /:(read-\w+)/, ':-moz-$1')] })], r);
                        case '::placeholder':
                          return Y(
                            [
                              R(e, { props: [f(t, /:(plac\w+)/, ':' + H + 'input-$1')] }),
                              R(e, { props: [f(t, /:(plac\w+)/, ':-moz-$1')] }),
                              R(e, { props: [f(t, /:(plac\w+)/, U + 'input-$1')] }),
                            ],
                            r,
                          );
                      }
                      return '';
                    });
              }
          },
        ],
        se = function(e) {
          var t = e.key;
          if ('css' === t) {
            var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
            Array.prototype.forEach.call(n, function(e) {
              -1 !== e.getAttribute('data-emotion').indexOf(' ') &&
                (document.head.appendChild(e), e.setAttribute('data-s', ''));
            });
          }
          var r,
            o,
            a = e.stylisPlugins || le,
            i = {},
            l = [];
          (r = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function(e) {
                for (var t = e.getAttribute('data-emotion').split(' '), n = 1; n < t.length; n++)
                  i[t[n]] = !0;
                l.push(e);
              },
            );
          var c,
            u,
            d,
            p,
            f = [
              K,
              ((p = function(e) {
                c.insert(e);
              }),
              function(e) {
                e.root || ((e = e.return) && p(e));
              }),
            ],
            h =
              ((u = [oe, ae].concat(a, f)),
              (d = b(u)),
              function(e, t, n, r) {
                for (var o = '', a = 0; a < d; a++) o += u[a](e, t, n, r) || '';
                return o;
              });
          o = function(e, t, n, r) {
            (c = n),
              Y(J(e ? e + '{' + t.styles + '}' : t.styles), h),
              r && (m.inserted[t.name] = !0);
          };
          var m = {
            key: t,
            sheet: new s({
              key: t,
              container: r,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: i,
            registered: {},
            insert: o,
          };
          return m.sheet.hydrate(l), m;
        },
        ce = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        ue = /[A-Z]|^ms/g,
        de = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        pe = function(e) {
          return 45 === e.charCodeAt(1);
        },
        fe = function(e) {
          return null != e && 'boolean' != typeof e;
        },
        he = a(function(e) {
          return pe(e) ? e : e.replace(ue, '-$&').toLowerCase();
        }),
        me = function(e, t) {
          switch (e) {
            case 'animation':
            case 'animationName':
              if ('string' == typeof t)
                return t.replace(de, function(e, t, n) {
                  return (ve = { name: t, styles: n, next: ve }), t;
                });
          }
          return 1 === ce[e] || pe(e) || 'number' != typeof t || 0 === t ? t : t + 'px';
        };
      function ge(e, t, n) {
        if (null == n) return '';
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case 'boolean':
            return '';
          case 'object':
            if (1 === n.anim) return (ve = { name: n.name, styles: n.styles, next: ve }), n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (ve = { name: r.name, styles: r.styles, next: ve }), (r = r.next);
              return n.styles + ';';
            }
            return (function(e, t, n) {
              var r = '';
              if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += ge(e, t, n[o]) + ';';
              else
                for (var a in n) {
                  var i = n[a];
                  if ('object' != typeof i)
                    null != t && void 0 !== t[i]
                      ? (r += a + '{' + t[i] + '}')
                      : fe(i) && (r += he(a) + ':' + me(a, i) + ';');
                  else if (
                    !Array.isArray(i) ||
                    'string' != typeof i[0] ||
                    (null != t && void 0 !== t[i[0]])
                  ) {
                    var l = ge(e, t, i);
                    switch (a) {
                      case 'animation':
                      case 'animationName':
                        r += he(a) + ':' + l + ';';
                        break;
                      default:
                        r += a + '{' + l + '}';
                    }
                  } else
                    for (var s = 0; s < i.length; s++)
                      fe(i[s]) && (r += he(a) + ':' + me(a, i[s]) + ';');
                }
              return r;
            })(e, t, n);
          case 'function':
            if (void 0 !== e) {
              var o = ve,
                a = n(e);
              return (ve = o), ge(e, t, a);
            }
        }
        if (null == t) return n;
        var i = t[n];
        return void 0 !== i ? i : n;
      }
      var ve,
        be = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        ye = !!e.useInsertionEffect && e.useInsertionEffect,
        we =
          ye ||
          function(e) {
            return e();
          },
        xe =
          (ye || e.useLayoutEffect,
          e.createContext('undefined' != typeof HTMLElement ? se({ key: 'css' }) : null));
      xe.Provider;
      var ke = e.createContext({}),
        Ee = function(e, t, n) {
          var r = e.key + '-' + t.name;
          !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
        },
        Ce = l,
        Se = function(e) {
          return 'theme' !== e;
        },
        _e = function(e) {
          return 'string' == typeof e && e.charCodeAt(0) > 96 ? Ce : Se;
        },
        Re = function(e, t, n) {
          var r;
          if (t) {
            var o = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && o
                ? function(t) {
                    return e.__emotion_forwardProp(t) && o(t);
                  }
                : o;
          }
          return 'function' != typeof r && n && (r = e.__emotion_forwardProp), r;
        },
        De = function(e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            Ee(t, n, r),
            we(function() {
              return (function(e, t, n) {
                Ee(e, t, n);
                var r = e.key + '-' + t.name;
                if (void 0 === e.inserted[t.name]) {
                  var o = t;
                  do {
                    e.insert(t === o ? '.' + r : '', o, e.sheet, !0), (o = o.next);
                  } while (void 0 !== o);
                }
              })(t, n, r);
            }),
            null
          );
        },
        Oe = function t(n, r) {
          var a,
            i,
            l = n.__emotion_real === n,
            s = (l && n.__emotion_base) || n;
          void 0 !== r && ((a = r.label), (i = r.target));
          var c = Re(n, r, l),
            u = c || _e(s),
            d = !u('as');
          return function() {
            var p = arguments,
              f = l && void 0 !== n.__emotion_styles ? n.__emotion_styles.slice(0) : [];
            if ((void 0 !== a && f.push('label:' + a + ';'), null == p[0] || void 0 === p[0].raw))
              f.push.apply(f, p);
            else {
              f.push(p[0][0]);
              for (var h = p.length, m = 1; m < h; m++) f.push(p[m], p[0][m]);
            }
            var g,
              v =
                ((g = function(t, n, r) {
                  var o,
                    a,
                    l,
                    p,
                    h = (d && t.as) || s,
                    m = '',
                    g = [],
                    v = t;
                  if (null == t.theme) {
                    for (var b in ((v = {}), t)) v[b] = t[b];
                    v.theme = e.useContext(ke);
                  }
                  'string' == typeof t.className
                    ? ((o = n.registered),
                      (a = g),
                      (l = t.className),
                      (p = ''),
                      l.split(' ').forEach(function(e) {
                        void 0 !== o[e] ? a.push(o[e] + ';') : (p += e + ' ');
                      }),
                      (m = p))
                    : null != t.className && (m = t.className + ' ');
                  var y = (function(e, t, n) {
                    if (
                      1 === e.length &&
                      'object' == typeof e[0] &&
                      null !== e[0] &&
                      void 0 !== e[0].styles
                    )
                      return e[0];
                    var r = !0,
                      o = '';
                    ve = void 0;
                    var a = e[0];
                    null == a || void 0 === a.raw ? ((r = !1), (o += ge(n, t, a))) : (o += a[0]);
                    for (var i = 1; i < e.length; i++) (o += ge(n, t, e[i])), r && (o += a[i]);
                    be.lastIndex = 0;
                    for (var l, s = ''; null !== (l = be.exec(o)); ) s += '-' + l[1];
                    var c =
                      (function(e) {
                        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
                          (t =
                            1540483477 *
                              (65535 &
                                (t =
                                  (255 & e.charCodeAt(r)) |
                                  ((255 & e.charCodeAt(++r)) << 8) |
                                  ((255 & e.charCodeAt(++r)) << 16) |
                                  ((255 & e.charCodeAt(++r)) << 24))) +
                            ((59797 * (t >>> 16)) << 16)),
                            (n =
                              (1540483477 * (65535 & (t ^= t >>> 24)) +
                                ((59797 * (t >>> 16)) << 16)) ^
                              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
                        switch (o) {
                          case 3:
                            n ^= (255 & e.charCodeAt(r + 2)) << 16;
                          case 2:
                            n ^= (255 & e.charCodeAt(r + 1)) << 8;
                          case 1:
                            n =
                              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                              ((59797 * (n >>> 16)) << 16);
                        }
                        return (
                          ((n =
                            1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^
                            (n >>> 15)) >>>
                          0
                        ).toString(36);
                      })(o) + s;
                    return { name: c, styles: o, next: ve };
                  })(f.concat(g), n.registered, v);
                  (m += n.key + '-' + y.name), void 0 !== i && (m += ' ' + i);
                  var w = d && void 0 === c ? _e(h) : u,
                    x = {};
                  for (var k in t) (d && 'as' === k) || (w(k) && (x[k] = t[k]));
                  return (
                    (x.className = m),
                    (x.ref = r),
                    e.createElement(
                      e.Fragment,
                      null,
                      e.createElement(De, {
                        cache: n,
                        serialized: y,
                        isStringTag: 'string' == typeof h,
                      }),
                      e.createElement(h, x),
                    )
                  );
                }),
                (0, e.forwardRef)(function(t, n) {
                  var r = (0, e.useContext)(xe);
                  return g(t, r, n);
                }));
            return (
              (v.displayName =
                void 0 !== a
                  ? a
                  : 'Styled(' +
                    ('string' == typeof s ? s : s.displayName || s.name || 'Component') +
                    ')'),
              (v.defaultProps = n.defaultProps),
              (v.__emotion_real = v),
              (v.__emotion_base = s),
              (v.__emotion_styles = f),
              (v.__emotion_forwardProp = c),
              Object.defineProperty(v, 'toString', {
                value: function() {
                  return '.' + i;
                },
              }),
              (v.withComponent = function(e, n) {
                return t(e, o({}, r, n, { shouldForwardProp: Re(v, n, !0) })).apply(void 0, f);
              }),
              v
            );
          };
        }.bind();
      [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
      ].forEach(function(e) {
        Oe[e] = Oe(e);
      });
      const Ae = window.wp.i18n,
        Te = window.wc.wcSettings;
      var Me, Le, Ne, Ie, Pe, je, ze, Be, Fe, $e;
      const Ue = (0, Te.getSetting)('wcBlocksConfig', {
          buildPhase: 1,
          pluginUrl: '',
          productCount: 0,
          defaultAvatar: '',
          restApiRoutes: {},
          wordCountType: 'words',
        }),
        Ve =
          (Ue.pluginUrl,
          Ue.pluginUrl,
          Ue.buildPhase,
          null === (Me = Te.STORE_PAGES.shop) || void 0 === Me || Me.permalink,
          null === (Le = Te.STORE_PAGES.checkout) || void 0 === Le ? void 0 : Le.id),
        He =
          (null === (Ne = Te.STORE_PAGES.checkout) || void 0 === Ne || Ne.permalink,
          null === (Ie = Te.STORE_PAGES.privacy) || void 0 === Ie || Ie.permalink,
          null === (Pe = Te.STORE_PAGES.privacy) || void 0 === Pe || Pe.title,
          null === (je = Te.STORE_PAGES.terms) || void 0 === je || je.permalink,
          null === (ze = Te.STORE_PAGES.terms) || void 0 === ze || ze.title,
          null === (Be = Te.STORE_PAGES.cart) || void 0 === Be || Be.id,
          null === (Fe = Te.STORE_PAGES.cart) || void 0 === Fe || Fe.permalink,
          null !== ($e = Te.STORE_PAGES.myaccount) && void 0 !== $e && $e.permalink
            ? Te.STORE_PAGES.myaccount.permalink
            : (0, Te.getSetting)('wpLoginUrl', '/wp-login.php'),
          (0, Te.getSetting)('localPickupEnabled', !1),
          (0, Te.getSetting)('countries', {})),
        Ge = (0, Te.getSetting)('countryData', {}),
        We =
          (Object.fromEntries(
            Object.keys(Ge)
              .filter(e => !0 === Ge[e].allowBilling)
              .map(e => [e, He[e] || '']),
          ),
          Object.fromEntries(
            Object.keys(Ge)
              .filter(e => !0 === Ge[e].allowBilling)
              .map(e => [e, Ge[e].states || []]),
          ),
          Object.fromEntries(
            Object.keys(Ge)
              .filter(e => !0 === Ge[e].allowShipping)
              .map(e => [e, He[e] || '']),
          ),
          Object.fromEntries(
            Object.keys(Ge)
              .filter(e => !0 === Ge[e].allowShipping)
              .map(e => [e, Ge[e].states || []]),
          ),
          Object.fromEntries(Object.keys(Ge).map(e => [e, Ge[e].locale || []])),
          {
            address: [
              'first_name',
              'last_name',
              'company',
              'address_1',
              'address_2',
              'city',
              'postcode',
              'country',
              'state',
              'phone',
            ],
            contact: ['email'],
            order: [],
          }),
        qe =
          ((0, Te.getSetting)('addressFieldsLocations', We).address,
          (0, Te.getSetting)('addressFieldsLocations', We).contact,
          (0, Te.getSetting)('addressFieldsLocations', We).order,
          (0, Te.getSetting)('additionalOrderFields', {}),
          (0, Te.getSetting)('additionalContactFields', {}),
          (0, Te.getSetting)('additionalAddressFields', {}),
          window.wp.components),
        Xe = Oe.div`
	display: flex;
	flex-flow: column;
	margin-bottom: 24px;
	&:last-child {
		margin-bottom: 0;
	}
	@media ( min-width: 800px ) {
		flex-flow: row;
	}
	.components-base-control {
		label {
			text-transform: none !important;
		}
	}
`,
        Ye = Oe.div`
	flex: 0 1 auto;
	margin-bottom: 24px;
	@media ( min-width: 800px ) {
		flex: 0 0 250px;
		margin: 0 32px 0 0;
	}
	h2 {
		font-size: 16px;
		line-height: 24px;
	}
	p {
		font-size: 13px;
		line-height: 17.89px;
		margin: 12px 0;
	}
	> :last-child {
		margin-bottom: 0;
	}
`,
        Ke = Oe.div`
	flex: 1 1 auto;
	margin-bottom: 12px;
`,
        Je = ({ Description: t = () => null, children: n, ...r }) =>
          (0, e.createElement)(
            Xe,
            { ...r },
            (0, e.createElement)(Ye, null, (0, e.createElement)(t, null)),
            (0, e.createElement)(Ke, null, n),
          ),
        Ze = Oe(qe.Card)`
	border-radius: 3px;
`,
        Qe = Oe(qe.CardBody)`
	padding: 24px;

	// increasing the specificity of the styles to override the Gutenberg ones
	&.is-size-medium.is-size-medium {
		padding: 24px;
	}

	h4 {
		margin-top: 0;
		margin-bottom: 1em;
	}

	> * {
		margin-top: 0;
		margin-bottom: 1.5em;

		// fixing the spacing on the inputs and their help text, to ensure it is consistent
		&:last-child {
			margin-bottom: 0;

			> :last-child {
				margin-bottom: 0;
			}
		}
	}

	input,
	select {
		margin: 0;
	}

	// spacing adjustment on "Express checkouts > Show express checkouts on" list
	ul > li:last-child {
		margin-bottom: 0;

		.components-base-control__field {
			margin-bottom: 0;
		}
	}
`,
        et = ({ children: t, ...n }) =>
          (0, e.createElement)(Ze, null, (0, e.createElement)(Qe, { ...n }, t)),
        tt = window.wp.url,
        nt = window.wp.apiFetch;
      var rt = n.n(nt);
      const ot = window.wp.data;
      var at = n(458),
        it = n.n(at);
      const lt = window.wc.wcTypes,
        st = {
          enabled: !1,
          title: (0, Ae.__)('Pickup', 'woocommerce'),
          tax_status: 'taxable',
          cost: '',
        },
        ct = { hasLegacyPickup: !1, storeCountry: '', storeState: '' },
        ut = () => {
          const e = hydratedScreenSettings.pickupLocationSettings;
          return {
            enabled: 'boolean' == typeof (null == e ? void 0 : e.enabled) ? e.enabled : st.enabled,
            title: (null == e ? void 0 : e.title) || st.title,
            tax_status: (null == e ? void 0 : e.tax_status) || st.tax_status,
            cost: (null == e ? void 0 : e.cost) || st.cost,
          };
        },
        dt = () =>
          (hydratedScreenSettings.pickupLocations || []).map((e, t) => ({
            ...e,
            id: (0, tt.cleanForSlug)(e.name) + '-' + t,
          })),
        pt = hydratedScreenSettings.readonlySettings || ct,
        ft = (0, Te.getSetting)('countries', []),
        ht = (0, Te.getSetting)('countryStates', []),
        mt = {
          options: Object.keys(ft).map(e => {
            const t = ht[e] || {};
            if (0 === Object.keys(t).length) return { options: [{ value: e, label: ft[e] }] };
            const n = Object.keys(t).map(n => ({
              value: `${e}:${n}`,
              label: `${ft[e]} — ${t[n]}`,
            }));
            return { label: ft[e], options: [...n] };
          }),
        },
        gt = (0, r.createContext)({
          settings: st,
          readOnlySettings: ct,
          setSettingField: () => () => {},
          pickupLocations: [],
          setPickupLocations: () => {},
          toggleLocation: () => {},
          updateLocation: () => {},
          isSaving: !1,
          save: () => {},
        }),
        vt = () => (0, r.useContext)(gt),
        bt = ({ children: t }) => {
          const [n, o] = (0, r.useState)(!1),
            [a, i] = (0, r.useState)(dt),
            [l, s] = (0, r.useState)(ut),
            c = (0, r.useCallback)(
              e => t => {
                s(n => ({ ...n, [e]: t }));
              },
              [],
            ),
            u = (0, r.useCallback)(e => {
              i(t => {
                const n = t.findIndex(({ id: t }) => t === e),
                  r = [...t];
                return (r[n].enabled = !t[n].enabled), r;
              });
            }, []),
            d = (0, r.useCallback)(() => {
              const e = {
                pickup_location_settings: {
                  enabled: l.enabled ? 'yes' : 'no',
                  title: l.title,
                  tax_status: ['taxable', 'none'].includes(l.tax_status) ? l.tax_status : 'taxable',
                  cost: l.cost,
                },
                pickup_locations: a.map(e => ({
                  name: e.name,
                  address: e.address,
                  details: e.details,
                  enabled: e.enabled,
                })),
              };
              o(!0),
                rt()({ path: '/wp/v2/settings', method: 'POST', data: e }).then(t => {
                  o(!1),
                    it()(t.pickup_location_settings, e.pickup_location_settings) &&
                      it()(t.pickup_locations, e.pickup_locations) &&
                      (0, ot.dispatch)('core/notices').createSuccessNotice(
                        (0, Ae.__)('Local Pickup settings have been saved.', 'woocommerce'),
                      );
                });
            }, [l, a]),
            p = {
              settings: l,
              setSettingField: c,
              readOnlySettings: pt,
              pickupLocations: a,
              setPickupLocations: i,
              toggleLocation: u,
              updateLocation: (e, t) => {
                i(n =>
                  'new' === e
                    ? [...n, { ...t, id: (0, tt.cleanForSlug)(t.name) + '-' + n.length }]
                    : n.map(n => (n.id === e ? t : n)).filter(Boolean),
                );
              },
              isSaving: n,
              save: d,
            };
          return (0, e.createElement)(gt.Provider, { value: p }, t);
        },
        yt = () =>
          (0, e.createElement)(
            e.Fragment,
            null,
            (0, e.createElement)(
              'h2',
              null,
              (0, Ae._x)('General', 'Admin settings', 'woocommerce'),
            ),
            (0, e.createElement)(
              'p',
              null,
              (0, Ae.__)(
                'Enable or disable local pickup on your store, and define costs. Local pickup is only available from the block checkout.',
                'woocommerce',
              ),
            ),
            (0, e.createElement)(
              qe.ExternalLink,
              { href: `${Te.ADMIN_URL}post.php?post=${Ve}&action=edit` },
              (0, Ae.__)('View checkout page', 'woocommerce'),
            ),
          ),
        wt = Oe(qe.Notice)`
	margin-left: 0;
	margin-right: 0;
`,
        xt = () => {
          const { settings: t, setSettingField: n, readOnlySettings: o } = vt(),
            [a, i] = (0, r.useState)(!!t.cost),
            l = (0, Te.getSetting)('shippingCostRequiresAddress', !1);
          return (0, e.createElement)(
            Je,
            { Description: yt },
            (0, e.createElement)(
              et,
              null,
              o.hasLegacyPickup &&
                (0, e.createElement)(
                  wt,
                  { status: 'warning', isDismissible: !1 },
                  (0, r.createInterpolateElement)(
                    (0, Ae.__)(
                      "By enabling Local Pickup with more valuable features for your store, it's recommended that you remove the legacy Local Pickup option from your <a>shipping zones</a>.",
                      'woocommerce',
                    ),
                    {
                      a: (0, e.createElement)('a', {
                        href: `${Te.ADMIN_URL}admin.php?page=wc-settings&tab=shipping`,
                      }),
                    },
                  ),
                ),
              (0, e.createElement)(qe.CheckboxControl, {
                checked: t.enabled,
                name: 'local_pickup_enabled',
                onChange: n('enabled'),
                label: (0, Ae.__)('Enable local pickup', 'woocommerce'),
                help: (0, e.createElement)(
                  'span',
                  null,
                  (0, Ae.__)(
                    'When enabled, local pickup will appear as an option on the block based checkout.',
                    'woocommerce',
                  ),
                  l
                    ? (0, e.createElement)(
                        e.Fragment,
                        null,
                        (0, e.createElement)('br', null),
                        (0, Ae.__)(
                          'If local pickup is enabled, the "Hide shipping costs until an address is entered" setting will be ignored.',
                          'woocommerce',
                        ),
                      )
                    : null,
                ),
              }),
              (0, e.createElement)(qe.TextControl, {
                label: (0, Ae.__)('Title', 'woocommerce'),
                name: 'local_pickup_title',
                help: (0, Ae.__)(
                  'This is the shipping method title shown to customers.',
                  'woocommerce',
                ),
                placeholder: (0, Ae.__)('Pickup', 'woocommerce'),
                value: t.title,
                onChange: n('title'),
                disabled: !1,
                autoComplete: 'off',
                required: !0,
                onInvalid: e => {
                  e.target.setCustomValidity(
                    (0, Ae.__)('Local pickup title is required', 'woocommerce'),
                  );
                },
                onInput: e => {
                  e.target.setCustomValidity('');
                },
              }),
              (0, e.createElement)(qe.CheckboxControl, {
                checked: a,
                onChange: () => {
                  i(!a), n('cost')('');
                },
                label: (0, Ae.__)(
                  'Add a price for customers who choose local pickup',
                  'woocommerce',
                ),
                help: (0, Ae.__)(
                  'By default, the local pickup shipping method is free.',
                  'woocommerce',
                ),
              }),
              a
                ? (0, e.createElement)(
                    e.Fragment,
                    null,
                    (0, e.createElement)(qe.TextControl, {
                      label: (0, Ae.__)('Cost', 'woocommerce'),
                      name: 'local_pickup_cost',
                      help: (0, Ae.__)('Optional cost to charge for local pickup.', 'woocommerce'),
                      placeholder: (0, Ae.__)('Free', 'woocommerce'),
                      type: 'number',
                      pattern: '[0-9]+\\.?[0-9]*',
                      min: 0,
                      value: t.cost,
                      onChange: n('cost'),
                      disabled: !1,
                      autoComplete: 'off',
                    }),
                    (0, e.createElement)(qe.SelectControl, {
                      label: (0, Ae.__)('Taxes', 'woocommerce'),
                      name: 'local_pickup_tax_status',
                      help: (0, Ae.__)(
                        'If a cost is defined, this controls if taxes are applied to that cost.',
                        'woocommerce',
                      ),
                      options: [
                        { label: (0, Ae.__)('Taxable', 'woocommerce'), value: 'taxable' },
                        { label: (0, Ae.__)('Not taxable', 'woocommerce'), value: 'none' },
                      ],
                      value: t.tax_status,
                      onChange: n('tax_status'),
                      disabled: !1,
                    }),
                  )
                : null,
            ),
          );
        },
        kt = (0, r.forwardRef)(function({ icon: e, size: t = 24, ...n }, o) {
          return (0, r.cloneElement)(e, { width: t, height: t, ...n, ref: o });
        }),
        Et = window.wp.primitives,
        Ct = (0, e.createElement)(
          Et.SVG,
          { width: '24', height: '24', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, e.createElement)(Et.Path, {
            d:
              'M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z',
          }),
        ),
        St = window.ReactDOM,
        _t =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement;
      function Rt(e) {
        const t = Object.prototype.toString.call(e);
        return '[object Window]' === t || '[object global]' === t;
      }
      function Dt(e) {
        return 'nodeType' in e;
      }
      function Ot(e) {
        var t, n;
        return e
          ? Rt(e)
            ? e
            : Dt(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView)
            ? t
            : window
          : window;
      }
      function At(e) {
        const { Document: t } = Ot(e);
        return e instanceof t;
      }
      function Tt(e) {
        return !Rt(e) && e instanceof Ot(e).HTMLElement;
      }
      function Mt(e) {
        return e instanceof Ot(e).SVGElement;
      }
      function Lt(e) {
        return e
          ? Rt(e)
            ? e.document
            : Dt(e)
            ? At(e)
              ? e
              : Tt(e) || Mt(e)
              ? e.ownerDocument
              : document
            : document
          : document;
      }
      const Nt = _t ? e.useLayoutEffect : e.useEffect;
      function It(t) {
        const n = (0, e.useRef)(t);
        return (
          Nt(() => {
            n.current = t;
          }),
          (0, e.useCallback)(function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return null == n.current ? void 0 : n.current(...t);
          }, [])
        );
      }
      function Pt(t, n) {
        void 0 === n && (n = [t]);
        const r = (0, e.useRef)(t);
        return (
          Nt(() => {
            r.current !== t && (r.current = t);
          }, n),
          r
        );
      }
      function jt(t, n) {
        const r = (0, e.useRef)();
        return (0, e.useMemo)(() => {
          const e = t(r.current);
          return (r.current = e), e;
        }, [...n]);
      }
      function zt(t) {
        const n = It(t),
          r = (0, e.useRef)(null),
          o = (0, e.useCallback)(e => {
            e !== r.current && (null == n || n(e, r.current)), (r.current = e);
          }, []);
        return [r, o];
      }
      function Bt(t) {
        const n = (0, e.useRef)();
        return (
          (0, e.useEffect)(() => {
            n.current = t;
          }, [t]),
          n.current
        );
      }
      let Ft = {};
      function $t(t, n) {
        return (0, e.useMemo)(() => {
          if (n) return n;
          const e = null == Ft[t] ? 0 : Ft[t] + 1;
          return (Ft[t] = e), t + '-' + e;
        }, [t, n]);
      }
      function Ut(e) {
        return function(t) {
          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
          return r.reduce(
            (t, n) => {
              const r = Object.entries(n);
              for (const [n, o] of r) {
                const r = t[n];
                null != r && (t[n] = r + e * o);
              }
              return t;
            },
            { ...t },
          );
        };
      }
      const Vt = Ut(1),
        Ht = Ut(-1);
      function Gt(e) {
        if (!e) return !1;
        const { KeyboardEvent: t } = Ot(e.target);
        return t && e instanceof t;
      }
      function Wt(e) {
        if (
          (function(e) {
            if (!e) return !1;
            const { TouchEvent: t } = Ot(e.target);
            return t && e instanceof t;
          })(e)
        ) {
          if (e.touches && e.touches.length) {
            const { clientX: t, clientY: n } = e.touches[0];
            return { x: t, y: n };
          }
          if (e.changedTouches && e.changedTouches.length) {
            const { clientX: t, clientY: n } = e.changedTouches[0];
            return { x: t, y: n };
          }
        }
        return (function(e) {
          return 'clientX' in e && 'clientY' in e;
        })(e)
          ? { x: e.clientX, y: e.clientY }
          : null;
      }
      const qt = Object.freeze({
          Translate: {
            toString(e) {
              if (!e) return;
              const { x: t, y: n } = e;
              return (
                'translate3d(' +
                (t ? Math.round(t) : 0) +
                'px, ' +
                (n ? Math.round(n) : 0) +
                'px, 0)'
              );
            },
          },
          Scale: {
            toString(e) {
              if (!e) return;
              const { scaleX: t, scaleY: n } = e;
              return 'scaleX(' + t + ') scaleY(' + n + ')';
            },
          },
          Transform: {
            toString(e) {
              if (e) return [qt.Translate.toString(e), qt.Scale.toString(e)].join(' ');
            },
          },
          Transition: {
            toString(e) {
              let { property: t, duration: n, easing: r } = e;
              return t + ' ' + n + 'ms ' + r;
            },
          },
        }),
        Xt =
          'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
      function Yt(e) {
        return e.matches(Xt) ? e : e.querySelector(Xt);
      }
      const Kt = { display: 'none' };
      function Jt(e) {
        let { id: n, value: r } = e;
        return t().createElement('div', { id: n, style: Kt }, r);
      }
      function Zt(e) {
        let { id: n, announcement: r, ariaLiveType: o = 'assertive' } = e;
        return t().createElement(
          'div',
          {
            id: n,
            style: {
              position: 'fixed',
              width: 1,
              height: 1,
              margin: -1,
              border: 0,
              padding: 0,
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
              clipPath: 'inset(100%)',
              whiteSpace: 'nowrap',
            },
            role: 'status',
            'aria-live': o,
            'aria-atomic': !0,
          },
          r,
        );
      }
      const Qt = (0, e.createContext)(null),
        en = {
          draggable:
            '\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ',
        },
        tn = {
          onDragStart(e) {
            let { active: t } = e;
            return 'Picked up draggable item ' + t.id + '.';
          },
          onDragOver(e) {
            let { active: t, over: n } = e;
            return n
              ? 'Draggable item ' + t.id + ' was moved over droppable area ' + n.id + '.'
              : 'Draggable item ' + t.id + ' is no longer over a droppable area.';
          },
          onDragEnd(e) {
            let { active: t, over: n } = e;
            return n
              ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id
              : 'Draggable item ' + t.id + ' was dropped.';
          },
          onDragCancel(e) {
            let { active: t } = e;
            return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.';
          },
        };
      function nn(n) {
        let {
          announcements: r = tn,
          container: o,
          hiddenTextDescribedById: a,
          screenReaderInstructions: i = en,
        } = n;
        const { announce: l, announcement: s } = (function() {
            const [t, n] = (0, e.useState)('');
            return {
              announce: (0, e.useCallback)(e => {
                null != e && n(e);
              }, []),
              announcement: t,
            };
          })(),
          c = $t('DndLiveRegion'),
          [u, d] = (0, e.useState)(!1);
        if (
          ((0, e.useEffect)(() => {
            d(!0);
          }, []),
          (function(t) {
            const n = (0, e.useContext)(Qt);
            (0, e.useEffect)(() => {
              if (!n)
                throw new Error('useDndMonitor must be used within a children of <DndContext>');
              return n(t);
            }, [t, n]);
          })(
            (0, e.useMemo)(
              () => ({
                onDragStart(e) {
                  let { active: t } = e;
                  l(r.onDragStart({ active: t }));
                },
                onDragMove(e) {
                  let { active: t, over: n } = e;
                  r.onDragMove && l(r.onDragMove({ active: t, over: n }));
                },
                onDragOver(e) {
                  let { active: t, over: n } = e;
                  l(r.onDragOver({ active: t, over: n }));
                },
                onDragEnd(e) {
                  let { active: t, over: n } = e;
                  l(r.onDragEnd({ active: t, over: n }));
                },
                onDragCancel(e) {
                  let { active: t, over: n } = e;
                  l(r.onDragCancel({ active: t, over: n }));
                },
              }),
              [l, r],
            ),
          ),
          !u)
        )
          return null;
        const p = t().createElement(
          t().Fragment,
          null,
          t().createElement(Jt, { id: a, value: i.draggable }),
          t().createElement(Zt, { id: c, announcement: s }),
        );
        return o ? (0, St.createPortal)(p, o) : p;
      }
      var rn;
      function on() {}
      function an(t, n) {
        return (0, e.useMemo)(() => ({ sensor: t, options: null != n ? n : {} }), [t, n]);
      }
      !(function(e) {
        (e.DragStart = 'dragStart'),
          (e.DragMove = 'dragMove'),
          (e.DragEnd = 'dragEnd'),
          (e.DragCancel = 'dragCancel'),
          (e.DragOver = 'dragOver'),
          (e.RegisterDroppable = 'registerDroppable'),
          (e.SetDroppableDisabled = 'setDroppableDisabled'),
          (e.UnregisterDroppable = 'unregisterDroppable');
      })(rn || (rn = {}));
      const ln = Object.freeze({ x: 0, y: 0 });
      function sn(e, t) {
        let {
            data: { value: n },
          } = e,
          {
            data: { value: r },
          } = t;
        return n - r;
      }
      function cn(e, t) {
        let {
            data: { value: n },
          } = e,
          {
            data: { value: r },
          } = t;
        return r - n;
      }
      function un(e, t, n) {
        return (
          void 0 === t && (t = e.left),
          void 0 === n && (n = e.top),
          { x: t + 0.5 * e.width, y: n + 0.5 * e.height }
        );
      }
      const dn = e => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
        const o = un(t, t.left, t.top),
          a = [];
        for (const e of r) {
          const { id: t } = e,
            r = n.get(t);
          if (r) {
            const n =
              ((i = un(r)), (l = o), Math.sqrt(Math.pow(i.x - l.x, 2) + Math.pow(i.y - l.y, 2)));
            a.push({ id: t, data: { droppableContainer: e, value: n } });
          }
        }
        var i, l;
        return a.sort(sn);
      };
      function pn(e, t) {
        const n = Math.max(t.top, e.top),
          r = Math.max(t.left, e.left),
          o = Math.min(t.left + t.width, e.left + e.width),
          a = Math.min(t.top + t.height, e.top + e.height),
          i = o - r,
          l = a - n;
        if (r < o && n < a) {
          const n = t.width * t.height,
            r = e.width * e.height,
            o = i * l;
          return Number((o / (n + r - o)).toFixed(4));
        }
        return 0;
      }
      const fn = e => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e;
        const o = [];
        for (const e of r) {
          const { id: r } = e,
            a = n.get(r);
          if (a) {
            const n = pn(a, t);
            n > 0 && o.push({ id: r, data: { droppableContainer: e, value: n } });
          }
        }
        return o.sort(cn);
      };
      function hn(e, t) {
        return e && t ? { x: e.left - t.left, y: e.top - t.top } : ln;
      }
      function mn(e) {
        return function(t) {
          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
          return r.reduce(
            (t, n) => ({
              ...t,
              top: t.top + e * n.y,
              bottom: t.bottom + e * n.y,
              left: t.left + e * n.x,
              right: t.right + e * n.x,
            }),
            { ...t },
          );
        };
      }
      const gn = mn(1);
      const vn = { ignoreTransform: !1 };
      function bn(e, t) {
        void 0 === t && (t = vn);
        let n = e.getBoundingClientRect();
        if (t.ignoreTransform) {
          const { transform: t, transformOrigin: r } = Ot(e).getComputedStyle(e);
          t &&
            (n = (function(e, t, n) {
              const r = (function(e) {
                if (e.startsWith('matrix3d(')) {
                  const t = e.slice(9, -1).split(/, /);
                  return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] };
                }
                if (e.startsWith('matrix(')) {
                  const t = e.slice(7, -1).split(/, /);
                  return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] };
                }
                return null;
              })(t);
              if (!r) return e;
              const { scaleX: o, scaleY: a, x: i, y: l } = r,
                s = e.left - i - (1 - o) * parseFloat(n),
                c = e.top - l - (1 - a) * parseFloat(n.slice(n.indexOf(' ') + 1)),
                u = o ? e.width / o : e.width,
                d = a ? e.height / a : e.height;
              return { width: u, height: d, top: c, right: s + u, bottom: c + d, left: s };
            })(n, t, r));
        }
        const { top: r, left: o, width: a, height: i, bottom: l, right: s } = n;
        return { top: r, left: o, width: a, height: i, bottom: l, right: s };
      }
      function yn(e) {
        return bn(e, { ignoreTransform: !0 });
      }
      function wn(e, t) {
        const n = [];
        return e
          ? (function r(o) {
              if (null != t && n.length >= t) return n;
              if (!o) return n;
              if (At(o) && null != o.scrollingElement && !n.includes(o.scrollingElement))
                return n.push(o.scrollingElement), n;
              if (!Tt(o) || Mt(o)) return n;
              if (n.includes(o)) return n;
              const a = Ot(e).getComputedStyle(o);
              return (
                o !== e &&
                  (function(e, t) {
                    void 0 === t && (t = Ot(e).getComputedStyle(e));
                    const n = /(auto|scroll|overlay)/;
                    return ['overflow', 'overflowX', 'overflowY'].some(e => {
                      const r = t[e];
                      return 'string' == typeof r && n.test(r);
                    });
                  })(o, a) &&
                  n.push(o),
                (function(e, t) {
                  return void 0 === t && (t = Ot(e).getComputedStyle(e)), 'fixed' === t.position;
                })(o, a)
                  ? n
                  : r(o.parentNode)
              );
            })(e)
          : n;
      }
      function xn(e) {
        const [t] = wn(e, 1);
        return null != t ? t : null;
      }
      function kn(e) {
        return _t && e
          ? Rt(e)
            ? e
            : Dt(e)
            ? At(e) || e === Lt(e).scrollingElement
              ? window
              : Tt(e)
              ? e
              : null
            : null
          : null;
      }
      function En(e) {
        return Rt(e) ? e.scrollX : e.scrollLeft;
      }
      function Cn(e) {
        return Rt(e) ? e.scrollY : e.scrollTop;
      }
      function Sn(e) {
        return { x: En(e), y: Cn(e) };
      }
      var Rn;
      function Dn(e) {
        return !(!_t || !e) && e === document.scrollingElement;
      }
      function On(e) {
        const t = { x: 0, y: 0 },
          n = Dn(e)
            ? { height: window.innerHeight, width: window.innerWidth }
            : { height: e.clientHeight, width: e.clientWidth },
          r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height };
        return {
          isTop: e.scrollTop <= t.y,
          isLeft: e.scrollLeft <= t.x,
          isBottom: e.scrollTop >= r.y,
          isRight: e.scrollLeft >= r.x,
          maxScroll: r,
          minScroll: t,
        };
      }
      !(function(e) {
        (e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward');
      })(Rn || (Rn = {}));
      const An = { x: 0.2, y: 0.2 };
      function Tn(e, t, n, r, o) {
        let { top: a, left: i, right: l, bottom: s } = n;
        void 0 === r && (r = 10), void 0 === o && (o = An);
        const { isTop: c, isBottom: u, isLeft: d, isRight: p } = On(e),
          f = { x: 0, y: 0 },
          h = { x: 0, y: 0 },
          m = t.height * o.y,
          g = t.width * o.x;
        return (
          !c && a <= t.top + m
            ? ((f.y = Rn.Backward), (h.y = r * Math.abs((t.top + m - a) / m)))
            : !u &&
              s >= t.bottom - m &&
              ((f.y = Rn.Forward), (h.y = r * Math.abs((t.bottom - m - s) / m))),
          !p && l >= t.right - g
            ? ((f.x = Rn.Forward), (h.x = r * Math.abs((t.right - g - l) / g)))
            : !d &&
              i <= t.left + g &&
              ((f.x = Rn.Backward), (h.x = r * Math.abs((t.left + g - i) / g))),
          { direction: f, speed: h }
        );
      }
      function Mn(e) {
        if (e === document.scrollingElement) {
          const { innerWidth: e, innerHeight: t } = window;
          return { top: 0, left: 0, right: e, bottom: t, width: e, height: t };
        }
        const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect();
        return {
          top: t,
          left: n,
          right: r,
          bottom: o,
          width: e.clientWidth,
          height: e.clientHeight,
        };
      }
      function Ln(e) {
        return e.reduce((e, t) => Vt(e, Sn(t)), ln);
      }
      const Nn = [
        [
          'x',
          ['left', 'right'],
          function(e) {
            return e.reduce((e, t) => e + En(t), 0);
          },
        ],
        [
          'y',
          ['top', 'bottom'],
          function(e) {
            return e.reduce((e, t) => e + Cn(t), 0);
          },
        ],
      ];
      class In {
        constructor(e, t) {
          (this.rect = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.right = void 0),
            (this.left = void 0);
          const n = wn(t),
            r = Ln(n);
          (this.rect = { ...e }), (this.width = e.width), (this.height = e.height);
          for (const [e, t, o] of Nn)
            for (const a of t)
              Object.defineProperty(this, a, {
                get: () => {
                  const t = o(n),
                    i = r[e] - t;
                  return this.rect[a] + i;
                },
                enumerable: !0,
              });
          Object.defineProperty(this, 'rect', { enumerable: !1 });
        }
      }
      class Pn {
        constructor(e) {
          (this.target = void 0),
            (this.listeners = []),
            (this.removeAll = () => {
              this.listeners.forEach(e => {
                var t;
                return null == (t = this.target) ? void 0 : t.removeEventListener(...e);
              });
            }),
            (this.target = e);
        }
        add(e, t, n) {
          var r;
          null == (r = this.target) || r.addEventListener(e, t, n), this.listeners.push([e, t, n]);
        }
      }
      function jn(e, t) {
        const n = Math.abs(e.x),
          r = Math.abs(e.y);
        return 'number' == typeof t
          ? Math.sqrt(n ** 2 + r ** 2) > t
          : 'x' in t && 'y' in t
          ? n > t.x && r > t.y
          : 'x' in t
          ? n > t.x
          : 'y' in t && r > t.y;
      }
      var zn, Bn, Fn;
      function $n(e) {
        e.preventDefault();
      }
      function Un(e) {
        e.stopPropagation();
      }
      !(function(e) {
        (e.Click = 'click'),
          (e.DragStart = 'dragstart'),
          (e.Keydown = 'keydown'),
          (e.ContextMenu = 'contextmenu'),
          (e.Resize = 'resize'),
          (e.SelectionChange = 'selectionchange'),
          (e.VisibilityChange = 'visibilitychange');
      })(zn || (zn = {})),
        ((Fn = Bn || (Bn = {})).Space = 'Space'),
        (Fn.Down = 'ArrowDown'),
        (Fn.Right = 'ArrowRight'),
        (Fn.Left = 'ArrowLeft'),
        (Fn.Up = 'ArrowUp'),
        (Fn.Esc = 'Escape'),
        (Fn.Enter = 'Enter');
      const Vn = { start: [Bn.Space, Bn.Enter], cancel: [Bn.Esc], end: [Bn.Space, Bn.Enter] },
        Hn = (e, t) => {
          let { currentCoordinates: n } = t;
          switch (e.code) {
            case Bn.Right:
              return { ...n, x: n.x + 25 };
            case Bn.Left:
              return { ...n, x: n.x - 25 };
            case Bn.Down:
              return { ...n, y: n.y + 25 };
            case Bn.Up:
              return { ...n, y: n.y - 25 };
          }
        };
      class Gn {
        constructor(e) {
          (this.props = void 0),
            (this.autoScrollEnabled = !1),
            (this.referenceCoordinates = void 0),
            (this.listeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e);
          const {
            event: { target: t },
          } = e;
          (this.props = e),
            (this.listeners = new Pn(Lt(t))),
            (this.windowListeners = new Pn(Ot(t))),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            this.attach();
        }
        attach() {
          this.handleStart(),
            this.windowListeners.add(zn.Resize, this.handleCancel),
            this.windowListeners.add(zn.VisibilityChange, this.handleCancel),
            setTimeout(() => this.listeners.add(zn.Keydown, this.handleKeyDown));
        }
        handleStart() {
          const { activeNode: e, onStart: t } = this.props,
            n = e.node.current;
          n &&
            (function(e, t) {
              if ((void 0 === t && (t = bn), !e)) return;
              const { top: n, left: r, bottom: o, right: a } = t(e);
              xn(e) &&
                (o <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
                e.scrollIntoView({ block: 'center', inline: 'center' });
            })(n),
            t(ln);
        }
        handleKeyDown(e) {
          if (Gt(e)) {
            const { active: t, context: n, options: r } = this.props,
              { keyboardCodes: o = Vn, coordinateGetter: a = Hn, scrollBehavior: i = 'smooth' } = r,
              { code: l } = e;
            if (o.end.includes(l)) return void this.handleEnd(e);
            if (o.cancel.includes(l)) return void this.handleCancel(e);
            const { collisionRect: s } = n.current,
              c = s ? { x: s.left, y: s.top } : ln;
            this.referenceCoordinates || (this.referenceCoordinates = c);
            const u = a(e, { active: t, context: n.current, currentCoordinates: c });
            if (u) {
              const t = Ht(u, c),
                r = { x: 0, y: 0 },
                { scrollableAncestors: o } = n.current;
              for (const n of o) {
                const o = e.code,
                  { isTop: a, isRight: l, isLeft: s, isBottom: c, maxScroll: d, minScroll: p } = On(
                    n,
                  ),
                  f = Mn(n),
                  h = {
                    x: Math.min(
                      o === Bn.Right ? f.right - f.width / 2 : f.right,
                      Math.max(o === Bn.Right ? f.left : f.left + f.width / 2, u.x),
                    ),
                    y: Math.min(
                      o === Bn.Down ? f.bottom - f.height / 2 : f.bottom,
                      Math.max(o === Bn.Down ? f.top : f.top + f.height / 2, u.y),
                    ),
                  },
                  m = (o === Bn.Right && !l) || (o === Bn.Left && !s),
                  g = (o === Bn.Down && !c) || (o === Bn.Up && !a);
                if (m && h.x !== u.x) {
                  const e = n.scrollLeft + t.x,
                    a = (o === Bn.Right && e <= d.x) || (o === Bn.Left && e >= p.x);
                  if (a && !t.y) return void n.scrollTo({ left: e, behavior: i });
                  (r.x = a
                    ? n.scrollLeft - e
                    : o === Bn.Right
                    ? n.scrollLeft - d.x
                    : n.scrollLeft - p.x),
                    r.x && n.scrollBy({ left: -r.x, behavior: i });
                  break;
                }
                if (g && h.y !== u.y) {
                  const e = n.scrollTop + t.y,
                    a = (o === Bn.Down && e <= d.y) || (o === Bn.Up && e >= p.y);
                  if (a && !t.x) return void n.scrollTo({ top: e, behavior: i });
                  (r.y = a
                    ? n.scrollTop - e
                    : o === Bn.Down
                    ? n.scrollTop - d.y
                    : n.scrollTop - p.y),
                    r.y && n.scrollBy({ top: -r.y, behavior: i });
                  break;
                }
              }
              this.handleMove(e, Vt(Ht(u, this.referenceCoordinates), r));
            }
          }
        }
        handleMove(e, t) {
          const { onMove: n } = this.props;
          e.preventDefault(), n(t);
        }
        handleEnd(e) {
          const { onEnd: t } = this.props;
          e.preventDefault(), this.detach(), t();
        }
        handleCancel(e) {
          const { onCancel: t } = this.props;
          e.preventDefault(), this.detach(), t();
        }
        detach() {
          this.listeners.removeAll(), this.windowListeners.removeAll();
        }
      }
      function Wn(e) {
        return Boolean(e && 'distance' in e);
      }
      function qn(e) {
        return Boolean(e && 'delay' in e);
      }
      Gn.activators = [
        {
          eventName: 'onKeyDown',
          handler: (e, t, n) => {
            let { keyboardCodes: r = Vn, onActivation: o } = t,
              { active: a } = n;
            const { code: i } = e.nativeEvent;
            if (r.start.includes(i)) {
              const t = a.activatorNode.current;
              return !(
                (t && e.target !== t) ||
                (e.preventDefault(), null == o || o({ event: e.nativeEvent }), 0)
              );
            }
            return !1;
          },
        },
      ];
      class Xn {
        constructor(e, t, n) {
          var r;
          void 0 === n &&
            (n = (function(e) {
              const { EventTarget: t } = Ot(e);
              return e instanceof t ? e : Lt(e);
            })(e.event.target)),
            (this.props = void 0),
            (this.events = void 0),
            (this.autoScrollEnabled = !0),
            (this.document = void 0),
            (this.activated = !1),
            (this.initialCoordinates = void 0),
            (this.timeoutId = null),
            (this.listeners = void 0),
            (this.documentListeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e),
            (this.events = t);
          const { event: o } = e,
            { target: a } = o;
          (this.props = e),
            (this.events = t),
            (this.document = Lt(a)),
            (this.documentListeners = new Pn(this.document)),
            (this.listeners = new Pn(n)),
            (this.windowListeners = new Pn(Ot(a))),
            (this.initialCoordinates = null != (r = Wt(o)) ? r : ln),
            (this.handleStart = this.handleStart.bind(this)),
            (this.handleMove = this.handleMove.bind(this)),
            (this.handleEnd = this.handleEnd.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            (this.handleKeydown = this.handleKeydown.bind(this)),
            (this.removeTextSelection = this.removeTextSelection.bind(this)),
            this.attach();
        }
        attach() {
          const {
            events: e,
            props: {
              options: { activationConstraint: t, bypassActivationConstraint: n },
            },
          } = this;
          if (
            (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }),
            this.listeners.add(e.end.name, this.handleEnd),
            this.windowListeners.add(zn.Resize, this.handleCancel),
            this.windowListeners.add(zn.DragStart, $n),
            this.windowListeners.add(zn.VisibilityChange, this.handleCancel),
            this.windowListeners.add(zn.ContextMenu, $n),
            this.documentListeners.add(zn.Keydown, this.handleKeydown),
            t)
          ) {
            if (
              null != n &&
              n({
                event: this.props.event,
                activeNode: this.props.activeNode,
                options: this.props.options,
              })
            )
              return this.handleStart();
            if (qn(t)) return void (this.timeoutId = setTimeout(this.handleStart, t.delay));
            if (Wn(t)) return;
          }
          this.handleStart();
        }
        detach() {
          this.listeners.removeAll(),
            this.windowListeners.removeAll(),
            setTimeout(this.documentListeners.removeAll, 50),
            null !== this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = null));
        }
        handleStart() {
          const { initialCoordinates: e } = this,
            { onStart: t } = this.props;
          e &&
            ((this.activated = !0),
            this.documentListeners.add(zn.Click, Un, { capture: !0 }),
            this.removeTextSelection(),
            this.documentListeners.add(zn.SelectionChange, this.removeTextSelection),
            t(e));
        }
        handleMove(e) {
          var t;
          const { activated: n, initialCoordinates: r, props: o } = this,
            {
              onMove: a,
              options: { activationConstraint: i },
            } = o;
          if (!r) return;
          const l = null != (t = Wt(e)) ? t : ln,
            s = Ht(r, l);
          if (!n && i) {
            if (Wn(i)) {
              if (null != i.tolerance && jn(s, i.tolerance)) return this.handleCancel();
              if (jn(s, i.distance)) return this.handleStart();
            }
            return qn(i) && jn(s, i.tolerance) ? this.handleCancel() : void 0;
          }
          e.cancelable && e.preventDefault(), a(l);
        }
        handleEnd() {
          const { onEnd: e } = this.props;
          this.detach(), e();
        }
        handleCancel() {
          const { onCancel: e } = this.props;
          this.detach(), e();
        }
        handleKeydown(e) {
          e.code === Bn.Esc && this.handleCancel();
        }
        removeTextSelection() {
          var e;
          null == (e = this.document.getSelection()) || e.removeAllRanges();
        }
      }
      const Yn = { move: { name: 'pointermove' }, end: { name: 'pointerup' } };
      class Kn extends Xn {
        constructor(e) {
          const { event: t } = e,
            n = Lt(t.target);
          super(e, Yn, n);
        }
      }
      Kn.activators = [
        {
          eventName: 'onPointerDown',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t;
            return !(!n.isPrimary || 0 !== n.button || (null == r || r({ event: n }), 0));
          },
        },
      ];
      const Jn = { move: { name: 'mousemove' }, end: { name: 'mouseup' } };
      var Zn;
      !(function(e) {
        e[(e.RightClick = 2)] = 'RightClick';
      })(Zn || (Zn = {}));
      class Qn extends Xn {
        constructor(e) {
          super(e, Jn, Lt(e.event.target));
        }
      }
      Qn.activators = [
        {
          eventName: 'onMouseDown',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t;
            return n.button !== Zn.RightClick && (null == r || r({ event: n }), !0);
          },
        },
      ];
      const er = { move: { name: 'touchmove' }, end: { name: 'touchend' } };
      class tr extends Xn {
        constructor(e) {
          super(e, er);
        }
        static setup() {
          return (
            window.addEventListener(er.move.name, e, { capture: !1, passive: !1 }),
            function() {
              window.removeEventListener(er.move.name, e);
            }
          );
          function e() {}
        }
      }
      var nr, rr;
      (tr.activators = [
        {
          eventName: 'onTouchStart',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t;
            const { touches: o } = n;
            return !(o.length > 1 || (null == r || r({ event: n }), 0));
          },
        },
      ]),
        (function(e) {
          (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.DraggableRect = 1)] = 'DraggableRect');
        })(nr || (nr = {})),
        (function(e) {
          (e[(e.TreeOrder = 0)] = 'TreeOrder'),
            (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
        })(rr || (rr = {}));
      const or = {
        x: { [Rn.Backward]: !1, [Rn.Forward]: !1 },
        y: { [Rn.Backward]: !1, [Rn.Forward]: !1 },
      };
      var ar, ir;
      !(function(e) {
        (e[(e.Always = 0)] = 'Always'),
          (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
          (e[(e.WhileDragging = 2)] = 'WhileDragging');
      })(ar || (ar = {})),
        (function(e) {
          e.Optimized = 'optimized';
        })(ir || (ir = {}));
      const lr = new Map();
      function sr(e, t) {
        return jt(n => (e ? n || ('function' == typeof t ? t(e) : e) : null), [t, e]);
      }
      function cr(t) {
        let { callback: n, disabled: r } = t;
        const o = It(n),
          a = (0, e.useMemo)(() => {
            if (r || 'undefined' == typeof window || void 0 === window.ResizeObserver) return;
            const { ResizeObserver: e } = window;
            return new e(o);
          }, [r]);
        return (0, e.useEffect)(() => () => (null == a ? void 0 : a.disconnect()), [a]), a;
      }
      function ur(e) {
        return new In(bn(e), e);
      }
      function dr(t, n, r) {
        void 0 === n && (n = ur);
        const [o, a] = (0, e.useReducer)(function(e) {
            if (!t) return null;
            var o;
            if (!1 === t.isConnected) return null != (o = null != e ? e : r) ? o : null;
            const a = n(t);
            return JSON.stringify(e) === JSON.stringify(a) ? e : a;
          }, null),
          i = (function(t) {
            let { callback: n, disabled: r } = t;
            const o = It(n),
              a = (0, e.useMemo)(() => {
                if (r || 'undefined' == typeof window || void 0 === window.MutationObserver) return;
                const { MutationObserver: e } = window;
                return new e(o);
              }, [o, r]);
            return (0, e.useEffect)(() => () => (null == a ? void 0 : a.disconnect()), [a]), a;
          })({
            callback(e) {
              if (t)
                for (const n of e) {
                  const { type: e, target: r } = n;
                  if ('childList' === e && r instanceof HTMLElement && r.contains(t)) {
                    a();
                    break;
                  }
                }
            },
          }),
          l = cr({ callback: a });
        return (
          Nt(() => {
            a(),
              t
                ? (null == l || l.observe(t),
                  null == i || i.observe(document.body, { childList: !0, subtree: !0 }))
                : (null == l || l.disconnect(), null == i || i.disconnect());
          }, [t]),
          o
        );
      }
      const pr = [];
      function fr(t, n) {
        void 0 === n && (n = []);
        const r = (0, e.useRef)(null);
        return (
          (0, e.useEffect)(() => {
            r.current = null;
          }, n),
          (0, e.useEffect)(() => {
            const e = t !== ln;
            e && !r.current && (r.current = t), !e && r.current && (r.current = null);
          }, [t]),
          r.current ? Ht(t, r.current) : ln
        );
      }
      function hr(t) {
        return (0, e.useMemo)(
          () =>
            t
              ? (function(e) {
                  const t = e.innerWidth,
                    n = e.innerHeight;
                  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n };
                })(t)
              : null,
          [t],
        );
      }
      const mr = [];
      const gr = [
          { sensor: Kn, options: {} },
          { sensor: Gn, options: {} },
        ],
        vr = { current: {} },
        br = {
          draggable: { measure: yn },
          droppable: { measure: yn, strategy: ar.WhileDragging, frequency: ir.Optimized },
          dragOverlay: { measure: bn },
        };
      class yr extends Map {
        get(e) {
          var t;
          return null != e && null != (t = super.get(e)) ? t : void 0;
        }
        toArray() {
          return Array.from(this.values());
        }
        getEnabled() {
          return this.toArray().filter(e => {
            let { disabled: t } = e;
            return !t;
          });
        }
        getNodeFor(e) {
          var t, n;
          return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0;
        }
      }
      const wr = {
          activatorEvent: null,
          active: null,
          activeNode: null,
          activeNodeRect: null,
          collisions: null,
          containerNodeRect: null,
          draggableNodes: new Map(),
          droppableRects: new Map(),
          droppableContainers: new yr(),
          over: null,
          dragOverlay: { nodeRef: { current: null }, rect: null, setRef: on },
          scrollableAncestors: [],
          scrollableAncestorRects: [],
          measuringConfiguration: br,
          measureDroppableContainers: on,
          windowRect: null,
          measuringScheduled: !1,
        },
        xr = {
          activatorEvent: null,
          activators: [],
          active: null,
          activeNodeRect: null,
          ariaDescribedById: { draggable: '' },
          dispatch: on,
          draggableNodes: new Map(),
          over: null,
          measureDroppableContainers: on,
        },
        kr = (0, e.createContext)(xr),
        Er = (0, e.createContext)(wr);
      function Cr() {
        return {
          draggable: {
            active: null,
            initialCoordinates: { x: 0, y: 0 },
            nodes: new Map(),
            translate: { x: 0, y: 0 },
          },
          droppable: { containers: new yr() },
        };
      }
      function Sr(e, t) {
        switch (t.type) {
          case rn.DragStart:
            return {
              ...e,
              draggable: {
                ...e.draggable,
                initialCoordinates: t.initialCoordinates,
                active: t.active,
              },
            };
          case rn.DragMove:
            return e.draggable.active
              ? {
                  ...e,
                  draggable: {
                    ...e.draggable,
                    translate: {
                      x: t.coordinates.x - e.draggable.initialCoordinates.x,
                      y: t.coordinates.y - e.draggable.initialCoordinates.y,
                    },
                  },
                }
              : e;
          case rn.DragEnd:
          case rn.DragCancel:
            return {
              ...e,
              draggable: {
                ...e.draggable,
                active: null,
                initialCoordinates: { x: 0, y: 0 },
                translate: { x: 0, y: 0 },
              },
            };
          case rn.RegisterDroppable: {
            const { element: n } = t,
              { id: r } = n,
              o = new yr(e.droppable.containers);
            return o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } };
          }
          case rn.SetDroppableDisabled: {
            const { id: n, key: r, disabled: o } = t,
              a = e.droppable.containers.get(n);
            if (!a || r !== a.key) return e;
            const i = new yr(e.droppable.containers);
            return (
              i.set(n, { ...a, disabled: o }),
              { ...e, droppable: { ...e.droppable, containers: i } }
            );
          }
          case rn.UnregisterDroppable: {
            const { id: n, key: r } = t,
              o = e.droppable.containers.get(n);
            if (!o || r !== o.key) return e;
            const a = new yr(e.droppable.containers);
            return a.delete(n), { ...e, droppable: { ...e.droppable, containers: a } };
          }
          default:
            return e;
        }
      }
      function _r(t) {
        let { disabled: n } = t;
        const { active: r, activatorEvent: o, draggableNodes: a } = (0, e.useContext)(kr),
          i = Bt(o),
          l = Bt(null == r ? void 0 : r.id);
        return (
          (0, e.useEffect)(() => {
            if (!n && !o && i && null != l) {
              if (!Gt(i)) return;
              if (document.activeElement === i.target) return;
              const e = a.get(l);
              if (!e) return;
              const { activatorNode: t, node: n } = e;
              if (!t.current && !n.current) return;
              requestAnimationFrame(() => {
                for (const e of [t.current, n.current]) {
                  if (!e) continue;
                  const t = Yt(e);
                  if (t) {
                    t.focus();
                    break;
                  }
                }
              });
            }
          }, [o, n, a, l, i]),
          null
        );
      }
      const Rr = (0, e.createContext)({ ...ln, scaleX: 1, scaleY: 1 });
      var Dr;
      !(function(e) {
        (e[(e.Uninitialized = 0)] = 'Uninitialized'),
          (e[(e.Initializing = 1)] = 'Initializing'),
          (e[(e.Initialized = 2)] = 'Initialized');
      })(Dr || (Dr = {}));
      const Or = (0, e.memo)(function(n) {
          var r, o, a, i;
          let {
            id: l,
            accessibility: s,
            autoScroll: c = !0,
            children: u,
            sensors: d = gr,
            collisionDetection: p = fn,
            measuring: f,
            modifiers: h,
            ...m
          } = n;
          const g = (0, e.useReducer)(Sr, void 0, Cr),
            [v, b] = g,
            [y, w] = (function() {
              const [t] = (0, e.useState)(() => new Set()),
                n = (0, e.useCallback)(e => (t.add(e), () => t.delete(e)), [t]);
              return [
                (0, e.useCallback)(
                  e => {
                    let { type: n, event: r } = e;
                    t.forEach(e => {
                      var t;
                      return null == (t = e[n]) ? void 0 : t.call(e, r);
                    });
                  },
                  [t],
                ),
                n,
              ];
            })(),
            [x, k] = (0, e.useState)(Dr.Uninitialized),
            E = x === Dr.Initialized,
            {
              draggable: { active: C, nodes: S, translate: _ },
              droppable: { containers: R },
            } = v,
            D = C ? S.get(C) : null,
            O = (0, e.useRef)({ initial: null, translated: null }),
            A = (0, e.useMemo)(() => {
              var e;
              return null != C
                ? { id: C, data: null != (e = null == D ? void 0 : D.data) ? e : vr, rect: O }
                : null;
            }, [C, D]),
            T = (0, e.useRef)(null),
            [M, L] = (0, e.useState)(null),
            [N, I] = (0, e.useState)(null),
            P = Pt(m, Object.values(m)),
            j = $t('DndDescribedBy', l),
            z = (0, e.useMemo)(() => R.getEnabled(), [R]),
            B =
              ((F = f),
              (0, e.useMemo)(
                () => ({
                  draggable: { ...br.draggable, ...(null == F ? void 0 : F.draggable) },
                  droppable: { ...br.droppable, ...(null == F ? void 0 : F.droppable) },
                  dragOverlay: { ...br.dragOverlay, ...(null == F ? void 0 : F.dragOverlay) },
                }),
                [
                  null == F ? void 0 : F.draggable,
                  null == F ? void 0 : F.droppable,
                  null == F ? void 0 : F.dragOverlay,
                ],
              ));
          var F;
          const {
              droppableRects: $,
              measureDroppableContainers: U,
              measuringScheduled: V,
            } = (function(t, n) {
              let { dragging: r, dependencies: o, config: a } = n;
              const [i, l] = (0, e.useState)(null),
                { frequency: s, measure: c, strategy: u } = a,
                d = (0, e.useRef)(t),
                p = (function() {
                  switch (u) {
                    case ar.Always:
                      return !1;
                    case ar.BeforeDragging:
                      return r;
                    default:
                      return !r;
                  }
                })(),
                f = Pt(p),
                h = (0, e.useCallback)(
                  function(e) {
                    void 0 === e && (e = []),
                      f.current ||
                        l(t => (null === t ? e : t.concat(e.filter(e => !t.includes(e)))));
                  },
                  [f],
                ),
                m = (0, e.useRef)(null),
                g = jt(
                  e => {
                    if (p && !r) return lr;
                    if (!e || e === lr || d.current !== t || null != i) {
                      const e = new Map();
                      for (let n of t) {
                        if (!n) continue;
                        if (i && i.length > 0 && !i.includes(n.id) && n.rect.current) {
                          e.set(n.id, n.rect.current);
                          continue;
                        }
                        const t = n.node.current,
                          r = t ? new In(c(t), t) : null;
                        (n.rect.current = r), r && e.set(n.id, r);
                      }
                      return e;
                    }
                    return e;
                  },
                  [t, i, r, p, c],
                );
              return (
                (0, e.useEffect)(() => {
                  d.current = t;
                }, [t]),
                (0, e.useEffect)(() => {
                  p || h();
                }, [r, p]),
                (0, e.useEffect)(() => {
                  i && i.length > 0 && l(null);
                }, [JSON.stringify(i)]),
                (0, e.useEffect)(() => {
                  p ||
                    'number' != typeof s ||
                    null !== m.current ||
                    (m.current = setTimeout(() => {
                      h(), (m.current = null);
                    }, s));
                }, [s, p, h, ...o]),
                { droppableRects: g, measureDroppableContainers: h, measuringScheduled: null != i }
              );
            })(z, { dragging: E, dependencies: [_.x, _.y], config: B.droppable }),
            H = (function(e, t) {
              const n = null !== t ? e.get(t) : void 0,
                r = n ? n.node.current : null;
              return jt(
                e => {
                  var n;
                  return null === t ? null : null != (n = null != r ? r : e) ? n : null;
                },
                [r, t],
              );
            })(S, C),
            G = (0, e.useMemo)(() => (N ? Wt(N) : null), [N]),
            W = (function() {
              const e = !1 === (null == M ? void 0 : M.autoScrollEnabled),
                t = 'object' == typeof c ? !1 === c.enabled : !1 === c,
                n = E && !e && !t;
              return 'object' == typeof c ? { ...c, enabled: n } : { enabled: n };
            })(),
            q = (function(e, t) {
              return sr(e, t);
            })(H, B.draggable.measure);
          !(function(t) {
            let { activeNode: n, measure: r, initialRect: o, config: a = !0 } = t;
            const i = (0, e.useRef)(!1),
              { x: l, y: s } = 'boolean' == typeof a ? { x: a, y: a } : a;
            Nt(() => {
              if ((!l && !s) || !n) return void (i.current = !1);
              if (i.current || !o) return;
              const e = null == n ? void 0 : n.node.current;
              if (!e || !1 === e.isConnected) return;
              const t = hn(r(e), o);
              if (
                (l || (t.x = 0),
                s || (t.y = 0),
                (i.current = !0),
                Math.abs(t.x) > 0 || Math.abs(t.y) > 0)
              ) {
                const n = xn(e);
                n && n.scrollBy({ top: t.y, left: t.x });
              }
            }, [n, l, s, o, r]);
          })({
            activeNode: C ? S.get(C) : null,
            config: W.layoutShiftCompensation,
            initialRect: q,
            measure: B.draggable.measure,
          });
          const X = dr(H, B.draggable.measure, q),
            Y = dr(H ? H.parentElement : null),
            K = (0, e.useRef)({
              activatorEvent: null,
              active: null,
              activeNode: H,
              collisionRect: null,
              collisions: null,
              droppableRects: $,
              draggableNodes: S,
              draggingNode: null,
              draggingNodeRect: null,
              droppableContainers: R,
              over: null,
              scrollableAncestors: [],
              scrollAdjustedTranslate: null,
            }),
            J = R.getNodeFor(null == (r = K.current.over) ? void 0 : r.id),
            Z = (function(t) {
              let { measure: n } = t;
              const [r, o] = (0, e.useState)(null),
                a = cr({
                  callback: (0, e.useCallback)(
                    e => {
                      for (const { target: t } of e)
                        if (Tt(t)) {
                          o(e => {
                            const r = n(t);
                            return e ? { ...e, width: r.width, height: r.height } : r;
                          });
                          break;
                        }
                    },
                    [n],
                  ),
                }),
                i = (0, e.useCallback)(
                  e => {
                    const t = (function(e) {
                      if (!e) return null;
                      if (e.children.length > 1) return e;
                      const t = e.children[0];
                      return Tt(t) ? t : e;
                    })(e);
                    null == a || a.disconnect(),
                      t && (null == a || a.observe(t)),
                      o(t ? n(t) : null);
                  },
                  [n, a],
                ),
                [l, s] = zt(i);
              return (0, e.useMemo)(() => ({ nodeRef: l, rect: r, setRef: s }), [r, l, s]);
            })({ measure: B.dragOverlay.measure }),
            Q = null != (o = Z.nodeRef.current) ? o : H,
            ee = E ? (null != (a = Z.rect) ? a : X) : null,
            te = Boolean(Z.nodeRef.current && Z.rect),
            ne = hn((re = te ? null : X), sr(re));
          var re;
          const oe = hr(Q ? Ot(Q) : null),
            ae = (function(t) {
              const n = (0, e.useRef)(t),
                r = jt(
                  e =>
                    t
                      ? e && e !== pr && t && n.current && t.parentNode === n.current.parentNode
                        ? e
                        : wn(t)
                      : pr,
                  [t],
                );
              return (
                (0, e.useEffect)(() => {
                  n.current = t;
                }, [t]),
                r
              );
            })(E ? (null != J ? J : H) : null),
            ie = (function(t, n) {
              void 0 === n && (n = bn);
              const [r] = t,
                o = hr(r ? Ot(r) : null),
                [a, i] = (0, e.useReducer)(function() {
                  return t.length ? t.map(e => (Dn(e) ? o : new In(n(e), e))) : mr;
                }, mr),
                l = cr({ callback: i });
              return (
                t.length > 0 && a === mr && i(),
                Nt(() => {
                  t.length
                    ? t.forEach(e => (null == l ? void 0 : l.observe(e)))
                    : (null == l || l.disconnect(), i());
                }, [t]),
                a
              );
            })(ae),
            le = (function(e, t) {
              let { transform: n, ...r } = t;
              return null != e && e.length ? e.reduce((e, t) => t({ transform: e, ...r }), n) : n;
            })(h, {
              transform: { x: _.x - ne.x, y: _.y - ne.y, scaleX: 1, scaleY: 1 },
              activatorEvent: N,
              active: A,
              activeNodeRect: X,
              containerNodeRect: Y,
              draggingNodeRect: ee,
              over: K.current.over,
              overlayNodeRect: Z.rect,
              scrollableAncestors: ae,
              scrollableAncestorRects: ie,
              windowRect: oe,
            }),
            se = G ? Vt(G, _) : null,
            ce = (function(t) {
              const [n, r] = (0, e.useState)(null),
                o = (0, e.useRef)(t),
                a = (0, e.useCallback)(e => {
                  const t = kn(e.target);
                  t && r(e => (e ? (e.set(t, Sn(t)), new Map(e)) : null));
                }, []);
              return (
                (0, e.useEffect)(() => {
                  const e = o.current;
                  if (t !== e) {
                    n(e);
                    const i = t
                      .map(e => {
                        const t = kn(e);
                        return t
                          ? (t.addEventListener('scroll', a, { passive: !0 }), [t, Sn(t)])
                          : null;
                      })
                      .filter(e => null != e);
                    r(i.length ? new Map(i) : null), (o.current = t);
                  }
                  return () => {
                    n(t), n(e);
                  };
                  function n(e) {
                    e.forEach(e => {
                      const t = kn(e);
                      null == t || t.removeEventListener('scroll', a);
                    });
                  }
                }, [a, t]),
                (0, e.useMemo)(
                  () =>
                    t.length
                      ? n
                        ? Array.from(n.values()).reduce((e, t) => Vt(e, t), ln)
                        : Ln(t)
                      : ln,
                  [t, n],
                )
              );
            })(ae),
            ue = fr(ce),
            de = fr(ce, [X]),
            pe = Vt(le, ue),
            fe = ee ? gn(ee, le) : null,
            he =
              A && fe
                ? p({
                    active: A,
                    collisionRect: fe,
                    droppableRects: $,
                    droppableContainers: z,
                    pointerCoordinates: se,
                  })
                : null,
            me = (function(e, t) {
              if (!e || 0 === e.length) return null;
              const [n] = e;
              return n.id;
            })(he),
            [ge, ve] = (0, e.useState)(null),
            be = (function(e, t, n) {
              return {
                ...e,
                scaleX: t && n ? t.width / n.width : 1,
                scaleY: t && n ? t.height / n.height : 1,
              };
            })(te ? le : Vt(le, de), null != (i = null == ge ? void 0 : ge.rect) ? i : null, X),
            ye = (0, e.useCallback)(
              (e, t) => {
                let { sensor: n, options: r } = t;
                if (null == T.current) return;
                const o = S.get(T.current);
                if (!o) return;
                const a = e.nativeEvent,
                  i = new n({
                    active: T.current,
                    activeNode: o,
                    event: a,
                    options: r,
                    context: K,
                    onStart(e) {
                      const t = T.current;
                      if (null == t) return;
                      const n = S.get(t);
                      if (!n) return;
                      const { onDragStart: r } = P.current,
                        o = { active: { id: t, data: n.data, rect: O } };
                      (0, St.unstable_batchedUpdates)(() => {
                        null == r || r(o),
                          k(Dr.Initializing),
                          b({ type: rn.DragStart, initialCoordinates: e, active: t }),
                          y({ type: 'onDragStart', event: o });
                      });
                    },
                    onMove(e) {
                      b({ type: rn.DragMove, coordinates: e });
                    },
                    onEnd: l(rn.DragEnd),
                    onCancel: l(rn.DragCancel),
                  });
                function l(e) {
                  return async function() {
                    const {
                      active: t,
                      collisions: n,
                      over: r,
                      scrollAdjustedTranslate: o,
                    } = K.current;
                    let i = null;
                    if (t && o) {
                      const { cancelDrop: l } = P.current;
                      (i = { activatorEvent: a, active: t, collisions: n, delta: o, over: r }),
                        e === rn.DragEnd &&
                          'function' == typeof l &&
                          (await Promise.resolve(l(i))) &&
                          (e = rn.DragCancel);
                    }
                    (T.current = null),
                      (0, St.unstable_batchedUpdates)(() => {
                        b({ type: e }), k(Dr.Uninitialized), ve(null), L(null), I(null);
                        const t = e === rn.DragEnd ? 'onDragEnd' : 'onDragCancel';
                        if (i) {
                          const e = P.current[t];
                          null == e || e(i), y({ type: t, event: i });
                        }
                      });
                  };
                }
                (0, St.unstable_batchedUpdates)(() => {
                  L(i), I(e.nativeEvent);
                });
              },
              [S],
            ),
            we = (0, e.useCallback)(
              (e, t) => (n, r) => {
                const o = n.nativeEvent,
                  a = S.get(r);
                if (null !== T.current || !a || o.dndKit || o.defaultPrevented) return;
                const i = { active: a };
                !0 === e(n, t.options, i) &&
                  ((o.dndKit = { capturedBy: t.sensor }), (T.current = r), ye(n, t));
              },
              [S, ye],
            ),
            xe = (function(t, n) {
              return (0, e.useMemo)(
                () =>
                  t.reduce((e, t) => {
                    const { sensor: r } = t;
                    return [
                      ...e,
                      ...r.activators.map(e => ({
                        eventName: e.eventName,
                        handler: n(e.handler, t),
                      })),
                    ];
                  }, []),
                [t, n],
              );
            })(d, we);
          !(function(t) {
            (0, e.useEffect)(
              () => {
                if (!_t) return;
                const e = t.map(e => {
                  let { sensor: t } = e;
                  return null == t.setup ? void 0 : t.setup();
                });
                return () => {
                  for (const t of e) null == t || t();
                };
              },
              t.map(e => {
                let { sensor: t } = e;
                return t;
              }),
            );
          })(d),
            Nt(() => {
              X && x === Dr.Initializing && k(Dr.Initialized);
            }, [X, x]),
            (0, e.useEffect)(() => {
              const { onDragMove: e } = P.current,
                { active: t, activatorEvent: n, collisions: r, over: o } = K.current;
              if (!t || !n) return;
              const a = {
                active: t,
                activatorEvent: n,
                collisions: r,
                delta: { x: pe.x, y: pe.y },
                over: o,
              };
              (0, St.unstable_batchedUpdates)(() => {
                null == e || e(a), y({ type: 'onDragMove', event: a });
              });
            }, [pe.x, pe.y]),
            (0, e.useEffect)(() => {
              const {
                active: e,
                activatorEvent: t,
                collisions: n,
                droppableContainers: r,
                scrollAdjustedTranslate: o,
              } = K.current;
              if (!e || null == T.current || !t || !o) return;
              const { onDragOver: a } = P.current,
                i = r.get(me),
                l =
                  i && i.rect.current
                    ? { id: i.id, rect: i.rect.current, data: i.data, disabled: i.disabled }
                    : null,
                s = {
                  active: e,
                  activatorEvent: t,
                  collisions: n,
                  delta: { x: o.x, y: o.y },
                  over: l,
                };
              (0, St.unstable_batchedUpdates)(() => {
                ve(l), null == a || a(s), y({ type: 'onDragOver', event: s });
              });
            }, [me]),
            Nt(() => {
              (K.current = {
                activatorEvent: N,
                active: A,
                activeNode: H,
                collisionRect: fe,
                collisions: he,
                droppableRects: $,
                draggableNodes: S,
                draggingNode: Q,
                draggingNodeRect: ee,
                droppableContainers: R,
                over: ge,
                scrollableAncestors: ae,
                scrollAdjustedTranslate: pe,
              }),
                (O.current = { initial: ee, translated: fe });
            }, [A, H, he, fe, S, Q, ee, $, R, ge, ae, pe]),
            (function(t) {
              let {
                acceleration: n,
                activator: r = nr.Pointer,
                canScroll: o,
                draggingRect: a,
                enabled: i,
                interval: l = 5,
                order: s = rr.TreeOrder,
                pointerCoordinates: c,
                scrollableAncestors: u,
                scrollableAncestorRects: d,
                delta: p,
                threshold: f,
              } = t;
              const h = (function(e) {
                  let { delta: t, disabled: n } = e;
                  const r = Bt(t);
                  return jt(
                    e => {
                      if (n || !r || !e) return or;
                      const o = Math.sign(t.x - r.x),
                        a = Math.sign(t.y - r.y);
                      return {
                        x: {
                          [Rn.Backward]: e.x[Rn.Backward] || -1 === o,
                          [Rn.Forward]: e.x[Rn.Forward] || 1 === o,
                        },
                        y: {
                          [Rn.Backward]: e.y[Rn.Backward] || -1 === a,
                          [Rn.Forward]: e.y[Rn.Forward] || 1 === a,
                        },
                      };
                    },
                    [n, t, r],
                  );
                })({ delta: p, disabled: !i }),
                [m, g] = (function() {
                  const t = (0, e.useRef)(null);
                  return [
                    (0, e.useCallback)((e, n) => {
                      t.current = setInterval(e, n);
                    }, []),
                    (0, e.useCallback)(() => {
                      null !== t.current && (clearInterval(t.current), (t.current = null));
                    }, []),
                  ];
                })(),
                v = (0, e.useRef)({ x: 0, y: 0 }),
                b = (0, e.useRef)({ x: 0, y: 0 }),
                y = (0, e.useMemo)(() => {
                  switch (r) {
                    case nr.Pointer:
                      return c ? { top: c.y, bottom: c.y, left: c.x, right: c.x } : null;
                    case nr.DraggableRect:
                      return a;
                  }
                }, [r, a, c]),
                w = (0, e.useRef)(null),
                x = (0, e.useCallback)(() => {
                  const e = w.current;
                  if (!e) return;
                  const t = v.current.x * b.current.x,
                    n = v.current.y * b.current.y;
                  e.scrollBy(t, n);
                }, []),
                k = (0, e.useMemo)(() => (s === rr.TreeOrder ? [...u].reverse() : u), [s, u]);
              (0, e.useEffect)(() => {
                if (i && u.length && y) {
                  for (const e of k) {
                    if (!1 === (null == o ? void 0 : o(e))) continue;
                    const t = u.indexOf(e),
                      r = d[t];
                    if (!r) continue;
                    const { direction: a, speed: i } = Tn(e, r, y, n, f);
                    for (const e of ['x', 'y']) h[e][a[e]] || ((i[e] = 0), (a[e] = 0));
                    if (i.x > 0 || i.y > 0)
                      return g(), (w.current = e), m(x, l), (v.current = i), void (b.current = a);
                  }
                  (v.current = { x: 0, y: 0 }), (b.current = { x: 0, y: 0 }), g();
                } else g();
              }, [
                n,
                x,
                o,
                g,
                i,
                l,
                JSON.stringify(y),
                JSON.stringify(h),
                m,
                u,
                k,
                d,
                JSON.stringify(f),
              ]);
            })({
              ...W,
              delta: _,
              draggingRect: fe,
              pointerCoordinates: se,
              scrollableAncestors: ae,
              scrollableAncestorRects: ie,
            });
          const ke = (0, e.useMemo)(
              () => ({
                active: A,
                activeNode: H,
                activeNodeRect: X,
                activatorEvent: N,
                collisions: he,
                containerNodeRect: Y,
                dragOverlay: Z,
                draggableNodes: S,
                droppableContainers: R,
                droppableRects: $,
                over: ge,
                measureDroppableContainers: U,
                scrollableAncestors: ae,
                scrollableAncestorRects: ie,
                measuringConfiguration: B,
                measuringScheduled: V,
                windowRect: oe,
              }),
              [A, H, X, N, he, Y, Z, S, R, $, ge, U, ae, ie, B, V, oe],
            ),
            Ee = (0, e.useMemo)(
              () => ({
                activatorEvent: N,
                activators: xe,
                active: A,
                activeNodeRect: X,
                ariaDescribedById: { draggable: j },
                dispatch: b,
                draggableNodes: S,
                over: ge,
                measureDroppableContainers: U,
              }),
              [N, xe, A, X, b, j, S, ge, U],
            );
          return t().createElement(
            Qt.Provider,
            { value: w },
            t().createElement(
              kr.Provider,
              { value: Ee },
              t().createElement(
                Er.Provider,
                { value: ke },
                t().createElement(Rr.Provider, { value: be }, u),
              ),
              t().createElement(_r, { disabled: !1 === (null == s ? void 0 : s.restoreFocus) }),
            ),
            t().createElement(nn, { ...s, hiddenTextDescribedById: j }),
          );
        }),
        Ar = (0, e.createContext)(null),
        Tr = 'button',
        Mr = 'Droppable';
      const Lr = { timeout: 25 },
        Nr = e => {
          let { transform: t } = e;
          return { ...t, x: 0 };
        };
      function Ir(e, t, n) {
        const r = e.slice();
        return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
      }
      function Pr(e, t) {
        return e.reduce((e, n, r) => {
          const o = t.get(n);
          return o && (e[r] = o), e;
        }, Array(e.length));
      }
      function jr(e) {
        return null !== e && e >= 0;
      }
      const zr = e => {
          let { rects: t, activeIndex: n, overIndex: r, index: o } = e;
          const a = Ir(t, r, n),
            i = t[o],
            l = a[o];
          return l && i
            ? {
                x: l.left - i.left,
                y: l.top - i.top,
                scaleX: l.width / i.width,
                scaleY: l.height / i.height,
              }
            : null;
        },
        Br = { scaleX: 1, scaleY: 1 },
        Fr = e => {
          var t;
          let { activeIndex: n, activeNodeRect: r, index: o, rects: a, overIndex: i } = e;
          const l = null != (t = a[n]) ? t : r;
          if (!l) return null;
          if (o === n) {
            const e = a[i];
            return e
              ? { x: 0, y: n < i ? e.top + e.height - (l.top + l.height) : e.top - l.top, ...Br }
              : null;
          }
          const s = (function(e, t, n) {
            const r = e[t],
              o = e[t - 1],
              a = e[t + 1];
            return r
              ? n < t
                ? o
                  ? r.top - (o.top + o.height)
                  : a
                  ? a.top - (r.top + r.height)
                  : 0
                : a
                ? a.top - (r.top + r.height)
                : o
                ? r.top - (o.top + o.height)
                : 0
              : 0;
          })(a, o, n);
          return o > n && o <= i
            ? { x: 0, y: -l.height - s, ...Br }
            : o < n && o >= i
            ? { x: 0, y: l.height + s, ...Br }
            : { x: 0, y: 0, ...Br };
        },
        $r = 'Sortable',
        Ur = t().createContext({
          activeIndex: -1,
          containerId: $r,
          disableTransforms: !1,
          items: [],
          overIndex: -1,
          useDragOverlay: !1,
          sortedRects: [],
          strategy: zr,
          disabled: { draggable: !1, droppable: !1 },
        });
      function Vr(n) {
        let { children: r, id: o, items: a, strategy: i = zr, disabled: l = !1 } = n;
        const {
            active: s,
            dragOverlay: c,
            droppableRects: u,
            over: d,
            measureDroppableContainers: p,
          } = (0, e.useContext)(Er),
          f = $t($r, o),
          h = Boolean(null !== c.rect),
          m = (0, e.useMemo)(() => a.map(e => ('object' == typeof e && 'id' in e ? e.id : e)), [a]),
          g = null != s,
          v = s ? m.indexOf(s.id) : -1,
          b = d ? m.indexOf(d.id) : -1,
          y = (0, e.useRef)(m),
          w = !(function(e, t) {
            if (e === t) return !0;
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
            return !0;
          })(m, y.current),
          x = (-1 !== b && -1 === v) || w,
          k = (function(e) {
            return 'boolean' == typeof e ? { draggable: e, droppable: e } : e;
          })(l);
        Nt(() => {
          w && g && p(m);
        }, [w, m, g, p]),
          (0, e.useEffect)(() => {
            y.current = m;
          }, [m]);
        const E = (0, e.useMemo)(
          () => ({
            activeIndex: v,
            containerId: f,
            disabled: k,
            disableTransforms: x,
            items: m,
            overIndex: b,
            useDragOverlay: h,
            sortedRects: Pr(m, u),
            strategy: i,
          }),
          [v, f, k.draggable, k.droppable, x, m, b, u, h, i],
        );
        return t().createElement(Ur.Provider, { value: E }, r);
      }
      const Hr = e => {
          let { id: t, items: n, activeIndex: r, overIndex: o } = e;
          return Ir(n, r, o).indexOf(t);
        },
        Gr = e => {
          let {
            containerId: t,
            isSorting: n,
            wasDragging: r,
            index: o,
            items: a,
            newIndex: i,
            previousItems: l,
            previousContainerId: s,
            transition: c,
          } = e;
          return !(!c || !r || (l !== a && o === i) || (!n && (i === o || t !== s)));
        },
        Wr = { duration: 200, easing: 'ease' },
        qr = 'transform',
        Xr = qt.Transition.toString({ property: qr, duration: 0, easing: 'linear' }),
        Yr = { roleDescription: 'sortable' };
      function Kr(t) {
        let {
          animateLayoutChanges: n = Gr,
          attributes: r,
          disabled: o,
          data: a,
          getNewIndex: i = Hr,
          id: l,
          strategy: s,
          resizeObserverConfig: c,
          transition: u = Wr,
        } = t;
        const {
            items: d,
            containerId: p,
            activeIndex: f,
            disabled: h,
            disableTransforms: m,
            sortedRects: g,
            overIndex: v,
            useDragOverlay: b,
            strategy: y,
          } = (0, e.useContext)(Ur),
          w = (function(e, t) {
            var n, r;
            return 'boolean' == typeof e
              ? { draggable: e, droppable: !1 }
              : {
                  draggable: null != (n = null == e ? void 0 : e.draggable) ? n : t.draggable,
                  droppable: null != (r = null == e ? void 0 : e.droppable) ? r : t.droppable,
                };
          })(o, h),
          x = d.indexOf(l),
          k = (0, e.useMemo)(() => ({ sortable: { containerId: p, index: x, items: d }, ...a }), [
            p,
            a,
            x,
            d,
          ]),
          E = (0, e.useMemo)(() => d.slice(d.indexOf(l)), [d, l]),
          { rect: C, node: S, isOver: _, setNodeRef: R } = (function(t) {
            let { data: n, disabled: r = !1, id: o, resizeObserverConfig: a } = t;
            const i = $t('Droppable'),
              { active: l, dispatch: s, over: c, measureDroppableContainers: u } = (0,
              e.useContext)(kr),
              d = (0, e.useRef)({ disabled: r }),
              p = (0, e.useRef)(!1),
              f = (0, e.useRef)(null),
              h = (0, e.useRef)(null),
              { disabled: m, updateMeasurementsFor: g, timeout: v } = { ...Lr, ...a },
              b = Pt(null != g ? g : o),
              y = cr({
                callback: (0, e.useCallback)(() => {
                  p.current
                    ? (null != h.current && clearTimeout(h.current),
                      (h.current = setTimeout(() => {
                        u(Array.isArray(b.current) ? b.current : [b.current]), (h.current = null);
                      }, v)))
                    : (p.current = !0);
                }, [v]),
                disabled: m || !l,
              }),
              w = (0, e.useCallback)(
                (e, t) => {
                  y && (t && (y.unobserve(t), (p.current = !1)), e && y.observe(e));
                },
                [y],
              ),
              [x, k] = zt(w),
              E = Pt(n);
            return (
              (0, e.useEffect)(() => {
                y && x.current && (y.disconnect(), (p.current = !1), y.observe(x.current));
              }, [x, y]),
              Nt(
                () => (
                  s({
                    type: rn.RegisterDroppable,
                    element: { id: o, key: i, disabled: r, node: x, rect: f, data: E },
                  }),
                  () => s({ type: rn.UnregisterDroppable, key: i, id: o })
                ),
                [o],
              ),
              (0, e.useEffect)(() => {
                r !== d.current.disabled &&
                  (s({ type: rn.SetDroppableDisabled, id: o, key: i, disabled: r }),
                  (d.current.disabled = r));
              }, [o, i, r, s]),
              {
                active: l,
                rect: f,
                isOver: (null == c ? void 0 : c.id) === o,
                node: x,
                over: c,
                setNodeRef: k,
              }
            );
          })({
            id: l,
            data: k,
            disabled: w.droppable,
            resizeObserverConfig: { updateMeasurementsFor: E, ...c },
          }),
          {
            active: D,
            activatorEvent: O,
            activeNodeRect: A,
            attributes: T,
            setNodeRef: M,
            listeners: L,
            isDragging: N,
            over: I,
            setActivatorNodeRef: P,
            transform: j,
          } = (function(t) {
            let { id: n, data: r, disabled: o = !1, attributes: a } = t;
            const i = $t(Mr),
              {
                activators: l,
                activatorEvent: s,
                active: c,
                activeNodeRect: u,
                ariaDescribedById: d,
                draggableNodes: p,
                over: f,
              } = (0, e.useContext)(kr),
              { role: h = Tr, roleDescription: m = 'draggable', tabIndex: g = 0 } =
                null != a ? a : {},
              v = (null == c ? void 0 : c.id) === n,
              b = (0, e.useContext)(v ? Rr : Ar),
              [y, w] = zt(),
              [x, k] = zt(),
              E = (function(t, n) {
                return (0, e.useMemo)(
                  () =>
                    t.reduce((e, t) => {
                      let { eventName: r, handler: o } = t;
                      return (
                        (e[r] = e => {
                          o(e, n);
                        }),
                        e
                      );
                    }, {}),
                  [t, n],
                );
              })(l, n),
              C = Pt(r);
            return (
              Nt(
                () => (
                  p.set(n, { id: n, key: i, node: y, activatorNode: x, data: C }),
                  () => {
                    const e = p.get(n);
                    e && e.key === i && p.delete(n);
                  }
                ),
                [p, n],
              ),
              {
                active: c,
                activatorEvent: s,
                activeNodeRect: u,
                attributes: (0, e.useMemo)(
                  () => ({
                    role: h,
                    tabIndex: g,
                    'aria-disabled': o,
                    'aria-pressed': !(!v || h !== Tr) || void 0,
                    'aria-roledescription': m,
                    'aria-describedby': d.draggable,
                  }),
                  [o, h, g, v, m, d.draggable],
                ),
                isDragging: v,
                listeners: o ? void 0 : E,
                node: y,
                over: f,
                setNodeRef: w,
                setActivatorNodeRef: k,
                transform: b,
              }
            );
          })({ id: l, data: k, attributes: { ...Yr, ...r }, disabled: w.draggable }),
          z = (function() {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (0, e.useMemo)(
              () => e => {
                n.forEach(t => t(e));
              },
              n,
            );
          })(R, M),
          B = Boolean(D),
          F = B && !m && jr(f) && jr(v),
          $ = !b && N,
          U = $ && F ? j : null,
          V = F
            ? null != U
              ? U
              : (null != s ? s : y)({
                  rects: g,
                  activeNodeRect: A,
                  activeIndex: f,
                  overIndex: v,
                  index: x,
                })
            : null,
          H = jr(f) && jr(v) ? i({ id: l, items: d, activeIndex: f, overIndex: v }) : x,
          G = null == D ? void 0 : D.id,
          W = (0, e.useRef)({ activeId: G, items: d, newIndex: H, containerId: p }),
          q = d !== W.current.items,
          X = n({
            active: D,
            containerId: p,
            isDragging: N,
            isSorting: B,
            id: l,
            index: x,
            items: d,
            newIndex: W.current.newIndex,
            previousItems: W.current.items,
            previousContainerId: W.current.containerId,
            transition: u,
            wasDragging: null != W.current.activeId,
          }),
          Y = (function(t) {
            let { disabled: n, index: r, node: o, rect: a } = t;
            const [i, l] = (0, e.useState)(null),
              s = (0, e.useRef)(r);
            return (
              Nt(() => {
                if (!n && r !== s.current && o.current) {
                  const e = a.current;
                  if (e) {
                    const t = bn(o.current, { ignoreTransform: !0 }),
                      n = {
                        x: e.left - t.left,
                        y: e.top - t.top,
                        scaleX: e.width / t.width,
                        scaleY: e.height / t.height,
                      };
                    (n.x || n.y) && l(n);
                  }
                }
                r !== s.current && (s.current = r);
              }, [n, r, o, a]),
              (0, e.useEffect)(() => {
                i && l(null);
              }, [i]),
              i
            );
          })({ disabled: !X, index: x, node: S, rect: C });
        return (
          (0, e.useEffect)(() => {
            B && W.current.newIndex !== H && (W.current.newIndex = H),
              p !== W.current.containerId && (W.current.containerId = p),
              d !== W.current.items && (W.current.items = d);
          }, [B, H, p, d]),
          (0, e.useEffect)(() => {
            if (G === W.current.activeId) return;
            if (G && !W.current.activeId) return void (W.current.activeId = G);
            const e = setTimeout(() => {
              W.current.activeId = G;
            }, 50);
            return () => clearTimeout(e);
          }, [G]),
          {
            active: D,
            activeIndex: f,
            attributes: T,
            data: k,
            rect: C,
            index: x,
            newIndex: H,
            items: d,
            isOver: _,
            isSorting: B,
            isDragging: N,
            listeners: L,
            node: S,
            overIndex: v,
            over: I,
            setNodeRef: z,
            setActivatorNodeRef: P,
            setDroppableNodeRef: R,
            setDraggableNodeRef: M,
            transform: null != Y ? Y : V,
            transition:
              Y || (q && W.current.newIndex === x)
                ? Xr
                : ($ && !Gt(O)) || !u
                ? void 0
                : B || X
                ? qt.Transition.toString({ ...u, property: qr })
                : void 0,
          }
        );
      }
      Bn.Down, Bn.Right, Bn.Up, Bn.Left;
      const Jr = ({ children: t, id: n }) => {
          const { attributes: r, listeners: o, transform: a, transition: i, setNodeRef: l } = Kr({
              id: n,
            }),
            s = { transform: qt.Transform.toString(a), transition: i };
          return (0, e.createElement)(
            'tr',
            { ref: l, style: s },
            (0, e.createElement)(
              e.Fragment,
              null,
              (0, e.createElement)(
                'td',
                { style: { width: '1%' } },
                (0, e.createElement)(kt, {
                  icon: Ct,
                  size: 14,
                  className: 'sortable-table__handle',
                  ...r,
                  ...o,
                }),
              ),
              t,
            ),
          );
        },
        Zr = Oe.table`
	background: #fff;
	border: 0;
	border-radius: 3px;
	box-shadow: 0 0 0 1px rgb( 0 0 0 / 10% );
	border-spacing: 0;
	width: 100%;
	clear: both;
	margin: 0;
	font-size: 14px;

	.align-left {
		text-align: left;
		.components-flex {
			justify-content: flex-start;
			gap: 0;
		}
	}
	.align-right {
		text-align: right;
		.components-flex {
			justify-content: flex-end;
			gap: 0;
		}
	}
	.align-center {
		text-align: center;
		> * {
			margin: 0 auto;
		}
		.components-flex {
			display: block;
		}
	}

	.sortable-table__handle {
		cursor: move;
	}

	th {
		position: relative;
		color: #2c3338;
		text-align: left;
		vertical-align: middle;
		vertical-align: top;
		word-wrap: break-word;
	}

	tbody {
		td {
			vertical-align: top;
			margin-bottom: 9px;
		}
	}

	tfoot {
		td {
			text-align: left;
			vertical-align: middle;
		}
	}

	thead,
	tfoot,
	tbody {
		td,
		th {
			border-top: 1px solid rgb( 0 0 0 / 10% );
			border-bottom: 1px solid rgb( 0 0 0 / 10% );
			padding: 16px 0 16px 24px;
			line-height: 1.5;

			&:last-child {
				padding-right: 24px;
			}

			> svg,
			> .components-base-control {
				margin: 3px 0;
			}
		}
	}

	thead th {
		border-top: 0;
	}

	tfoot td {
		border-bottom: 0;
	}
`,
        Qr = ({
          columns: t,
          data: n,
          setData: o,
          className: a,
          footerContent: i,
          placeholder: l,
        }) => {
          const s = (0, r.useMemo)(() => n.map(({ id: e }) => e), [n]),
            c = (function() {
              for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              return (0, e.useMemo)(() => [...n].filter(e => null != e), [...n]);
            })(an(Qn, {}), an(tr, {}), an(Gn, {})),
            u = (e, t) => {
              const n = (null == e ? void 0 : e.align) || 'left',
                r = (null == e ? void 0 : e.width) || 'auto';
              return { className: `${t}-${e.name} align-${n}`, style: { width: r } };
            };
          return (0, e.createElement)(
            Or,
            {
              sensors: c,
              onDragEnd: function(e) {
                const { active: t, over: r } = e;
                if (
                  null !== t &&
                  null !== r &&
                  (null == t ? void 0 : t.id) !== (null == r ? void 0 : r.id)
                ) {
                  const e = Ir(n, s.indexOf(t.id), s.indexOf(r.id));
                  o(e);
                }
              },
              collisionDetection: dn,
              modifiers: [Nr],
            },
            (0, e.createElement)(
              Zr,
              { className: `${a} sortable-table` },
              (0, e.createElement)(
                'thead',
                null,
                (0, e.createElement)(
                  'tr',
                  null,
                  t.map((t, n) =>
                    (0, e.createElement)(
                      'th',
                      { key: t.name, ...u(t, 'sortable-table__column'), colSpan: 0 === n ? 2 : 1 },
                      t.label,
                    ),
                  ),
                ),
              ),
              i &&
                (0, e.createElement)(
                  'tfoot',
                  null,
                  (0, e.createElement)(
                    'tr',
                    null,
                    (0, e.createElement)(
                      'td',
                      { colSpan: t.length + 1 },
                      (0, e.createElement)(i, null),
                    ),
                  ),
                ),
              (0, e.createElement)(
                'tbody',
                null,
                (0, e.createElement)(
                  Vr,
                  { items: s, strategy: Fr },
                  n.length
                    ? n.map(
                        n =>
                          n &&
                          (0, e.createElement)(
                            Jr,
                            { key: n.id, id: n.id, className: a },
                            t.map(t =>
                              (0, e.createElement)(
                                'td',
                                { key: `${n.id}-${t.name}`, ...u(t, 'sortable-table__column') },
                                t.renderCallback
                                  ? t.renderCallback(n)
                                  : (0, e.createElement)(
                                      e.Fragment,
                                      null,
                                      (0, lt.objectHasProp)(n, t.name) && n[t.name],
                                    ),
                              ),
                            ),
                          ),
                      )
                    : (0, e.createElement)(
                        'tr',
                        null,
                        (0, e.createElement)('td', { colSpan: t.length + 1 }, l),
                      ),
                ),
              ),
            ),
          );
        },
        eo = Oe(qe.Modal)`
	max-width: 600px;
	border-radius: 4px;
	@media ( min-width: 600px ) {
		min-width: 560px;
	}

	.components-modal__header {
		padding: 12px 24px;
		border-bottom: 1px solid #e0e0e0;
		position: relative;
		height: auto;
		width: auto;
		margin: 0 -24px 16px;

		@media ( max-width: 599px ) {
			button {
				display: none;
			}
		}
	}

	.components-modal__content {
		margin: 0;
		padding: 0 24px;

		@media ( max-width: 599px ) {
			display: flex;
			flex-direction: column;

			hr:last-of-type {
				margin-top: auto;
			}
		}

		.components-base-control {
			label {
				margin-top: 8px;
				text-transform: none !important;
			}
		}
	}
`,
        to = Oe.div`
	display: flex;
	justify-content: flex-end;
	border-top: 1px solid #e0e0e0;
	margin: 24px -24px 0;
	padding: 24px;

	> * {
		&:not( :first-of-type ) {
			margin-left: 8px;
		}
	}

	.button-link-delete {
		margin-right: auto;
		color: #d63638;
	}
`,
        no = ({ children: t, actions: n, title: r, onRequestClose: o, ...a }) =>
          (0, e.createElement)(
            eo,
            { title: r, onRequestClose: o, ...a },
            t,
            (0, e.createElement)(to, null, n),
          ),
        ro = ({ formRef: t, values: n, setValues: r }) => {
          const { country: o, state: a } = n.address,
            i = e => t => {
              r(n => ({ ...n, [e]: t }));
            },
            l = e => t => {
              r(n => ({ ...n, address: { ...n.address, [e]: t } }));
            },
            s = ht[o] && Object.keys(ht[o]).length > 0;
          return (0, e.createElement)(
            'form',
            { ref: t },
            (0, e.createElement)(qe.TextControl, {
              label: (0, Ae.__)('Location name', 'woocommerce'),
              name: 'location_name',
              value: n.name,
              onChange: i('name'),
              autoComplete: 'off',
              required: !0,
              onInvalid: e => {
                e.target.setCustomValidity(
                  (0, Ae.__)('A Location title is required', 'woocommerce'),
                );
              },
              onInput: e => {
                e.target.setCustomValidity('');
              },
            }),
            (0, e.createElement)(qe.TextControl, {
              label: (0, Ae.__)('Address', 'woocommerce'),
              name: 'location_address',
              placeholder: (0, Ae.__)('Address', 'woocommerce'),
              value: n.address.address_1,
              onChange: l('address_1'),
              autoComplete: 'off',
            }),
            (0, e.createElement)(qe.TextControl, {
              label: (0, Ae.__)('City', 'woocommerce'),
              name: 'location_city',
              hideLabelFromVision: !0,
              placeholder: (0, Ae.__)('City', 'woocommerce'),
              value: n.address.city,
              onChange: l('city'),
              autoComplete: 'off',
            }),
            (0, e.createElement)(qe.TextControl, {
              label: (0, Ae.__)('Postcode / ZIP', 'woocommerce'),
              name: 'location_postcode',
              hideLabelFromVision: !0,
              placeholder: (0, Ae.__)('Postcode / ZIP', 'woocommerce'),
              value: n.address.postcode,
              onChange: l('postcode'),
              autoComplete: 'off',
            }),
            !s &&
              (0, e.createElement)(qe.TextControl, {
                placeholder: (0, Ae.__)('State', 'woocommerce'),
                value: a,
                onChange: l('state'),
              }),
            (0, e.createElement)(
              qe.SelectControl,
              {
                name: 'location_country_state',
                label: (0, Ae.__)('Country / State', 'woocommerce'),
                hideLabelFromVision: !0,
                placeholder: (0, Ae.__)('Country / State', 'woocommerce'),
                value:
                  !a && s
                    ? `${o}:${Object.keys(ht[o])[0]}`
                    : `${o}${a && null !== (c = ht[o]) && void 0 !== c && c[a] ? ':' + a : ''}`,
                onChange: e => {
                  const [t, n = ''] = e.split(':');
                  l('country')(t), l('state')(n);
                },
              },
              mt.options.map(t =>
                t.label
                  ? (0, e.createElement)(
                      'optgroup',
                      { key: t.label, label: t.label },
                      t.options.map(t =>
                        (0, e.createElement)('option', { key: t.value, value: t.value }, t.label),
                      ),
                    )
                  : (0, e.createElement)(
                      'option',
                      { key: t.options[0].value, value: t.options[0].value },
                      t.options[0].label,
                    ),
              ),
            ),
            (0, e.createElement)(qe.TextControl, {
              label: (0, Ae.__)('Pickup details', 'woocommerce'),
              name: 'pickup_details',
              value: n.details,
              onChange: i('details'),
              autoComplete: 'off',
            }),
          );
          var c;
        },
        oo = ({ locationData: t, editingLocation: n, onClose: o, onSave: a, onDelete: i }) => {
          const l = (0, r.useRef)(null),
            [s, c] = (0, r.useState)(t);
          return t
            ? (0, e.createElement)(
                no,
                {
                  onRequestClose: o,
                  title:
                    'new' === n
                      ? (0, Ae.__)('Pickup location', 'woocommerce')
                      : (0, Ae.__)('Edit pickup location', 'woocommerce'),
                  actions: (0, e.createElement)(
                    e.Fragment,
                    null,
                    'new' !== n &&
                      (0, e.createElement)(
                        qe.Button,
                        {
                          variant: 'link',
                          className: 'button-link-delete',
                          onClick: () => {
                            i(), o();
                          },
                        },
                        (0, Ae.__)('Delete location', 'woocommerce'),
                      ),
                    (0, e.createElement)(
                      qe.Button,
                      { variant: 'secondary', onClick: o },
                      (0, Ae.__)('Cancel', 'woocommerce'),
                    ),
                    (0, e.createElement)(
                      qe.Button,
                      {
                        variant: 'primary',
                        onClick: () => {
                          (null == l ? void 0 : l.current).reportValidity() && (a(s), o());
                        },
                      },
                      (0, Ae.__)('Done', 'woocommerce'),
                    ),
                  ),
                },
                (0, e.createElement)(ro, { formRef: l, values: s, setValues: c }),
              )
            : null;
        },
        ao = () =>
          (0, e.createElement)(
            e.Fragment,
            null,
            (0, e.createElement)('h2', null, (0, Ae.__)('Pickup locations', 'woocommerce')),
            (0, e.createElement)(
              'p',
              null,
              (0, Ae.__)(
                'Define pickup locations for your customers to choose from during checkout.',
                'woocommerce',
              ),
            ),
            (0, e.createElement)(
              qe.ExternalLink,
              { href: 'https://woocommerce.com/document/woocommerce-blocks-local-pickup/' },
              (0, Ae.__)('Learn more', 'woocommerce'),
            ),
          ),
        io = Oe.address`
	color: #757575;
	font-style: normal;
	display: inline;
	margin-left: 12px;
`,
        lo = () => {
          const {
              pickupLocations: t,
              setPickupLocations: n,
              toggleLocation: o,
              updateLocation: a,
              readOnlySettings: i,
            } = vt(),
            [l, s] = (0, r.useState)(''),
            c = [
              {
                name: 'name',
                label: (0, Ae.__)('Pickup location', 'woocommerce'),
                width: '50%',
                renderCallback: t =>
                  (0, e.createElement)(
                    e.Fragment,
                    null,
                    t.name,
                    (0, e.createElement)(
                      io,
                      null,
                      (e => {
                        var t;
                        const n = (0, lt.isObject)(e) && {
                          ...e,
                          country: 'string' == typeof e.country && ft[e.country],
                          state:
                            'string' == typeof e.country &&
                            'string' == typeof e.state &&
                            null !== (t = ht[e.country]) &&
                            void 0 !== t &&
                            t[e.state]
                              ? ht[e.country][e.state]
                              : e.state,
                        };
                        return Object.values(n)
                          .filter(e => '' !== e)
                          .join(', ');
                      })(t.address),
                    ),
                  ),
              },
              {
                name: 'enabled',
                label: (0, Ae.__)('Enabled', 'woocommerce'),
                align: 'right',
                renderCallback: t =>
                  (0, e.createElement)(qe.ToggleControl, {
                    checked: !!(0, lt.isBoolean)(t.enabled) && t.enabled,
                    onChange: () => o(t.id),
                  }),
              },
              {
                name: 'edit',
                label: '',
                align: 'center',
                width: '1%',
                renderCallback: t =>
                  (0, e.createElement)(
                    'button',
                    {
                      type: 'button',
                      className: 'button-link-edit button-link',
                      onClick: () => {
                        s(t.id);
                      },
                    },
                    (0, Ae.__)('Edit', 'woocommerce'),
                  ),
              },
            ];
          return (0, e.createElement)(
            Je,
            { Description: ao },
            (0, e.createElement)(Qr, {
              className: 'pickup-locations',
              columns: c,
              data: t,
              setData: e => {
                n(e);
              },
              placeholder: (0, Ae.__)(
                'When you add a pickup location, it will appear here.',
                'woocommerce',
              ),
              footerContent: () =>
                (0, e.createElement)(
                  qe.Button,
                  {
                    variant: 'secondary',
                    onClick: () => {
                      s('new');
                    },
                  },
                  (0, Ae.__)('Add pickup location', 'woocommerce'),
                ),
            }),
            l &&
              (0, e.createElement)(oo, {
                locationData:
                  'new' === l
                    ? {
                        name: '',
                        details: '',
                        enabled: !0,
                        address: {
                          address_1: '',
                          city: '',
                          state: i.storeState,
                          postcode: '',
                          country: i.storeCountry,
                        },
                      }
                    : t.find(({ id: e }) => e === l) || null,
                editingLocation: l,
                onSave: e => {
                  a(l, e);
                },
                onClose: () => s(''),
                onDelete: () => {
                  a(l, null), s('');
                },
              }),
          );
        },
        so = Oe(Je)`
	text-align: right;
	padding-top: 0;
	margin-top: 0;
`,
        co = () => {
          const { isSaving: t, save: n } = vt();
          return (0, e.createElement)(
            so,
            { className: 'submit' },
            (0, e.createElement)(
              qe.Button,
              {
                variant: 'primary',
                isBusy: t,
                disabled: t,
                onClick: e => {
                  var t;
                  e.preventDefault();
                  const r = e.target;
                  null != r && null !== (t = r.form) && void 0 !== t && t.reportValidity() && n();
                },
                type: 'submit',
              },
              (0, Ae.__)('Save changes', 'woocommerce'),
            ),
          );
        },
        uo = Oe.form`
	margin: 48px auto 0;
	max-width: 1032px;
	display: flex;
	flex-flow: column;

	@media ( min-width: 960px ) {
		padding: 0 56px;
	}
`,
        po = document.getElementById('wc-shipping-method-pickup-location-settings-container');
      po &&
        (0, r.render)(
          (0, e.createElement)(
            () =>
              (0, e.createElement)(
                uo,
                { id: 'local-pickup-settings' },
                (0, e.createElement)(
                  bt,
                  null,
                  (0, e.createElement)(xt, null),
                  (0, e.createElement)(lo, null),
                  (0, e.createElement)(co, null),
                ),
              ),
            null,
          ),
          po,
        );
    })();
})();
