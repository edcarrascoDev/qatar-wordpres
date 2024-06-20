/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      87608: (e, t) => {
        var n;
        !(function() {
          'use strict';
          var o = {}.hasOwnProperty;
          function r() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              if (n) {
                var i = typeof n;
                if ('string' === i || 'number' === i) e.push(n);
                else if (Array.isArray(n)) {
                  if (n.length) {
                    var a = r.apply(null, n);
                    a && e.push(a);
                  }
                } else if ('object' === i) {
                  if (
                    n.toString !== Object.prototype.toString &&
                    !n.toString.toString().includes('[native code]')
                  ) {
                    e.push(n.toString());
                    continue;
                  }
                  for (var s in n) o.call(n, s) && n[s] && e.push(s);
                }
              }
            }
            return e.join(' ');
          }
          e.exports
            ? ((r.default = r), (e.exports = r))
            : void 0 ===
                (n = function() {
                  return r;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
      33561: function(e) {
        e.exports = (function() {
          'use strict';
          function e(t) {
            return (
              (e =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function(e) {
                      return typeof e;
                    }
                  : function(e) {
                      return e &&
                        'function' == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    }),
              e(t)
            );
          }
          function t(e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                function(e, t) {
                  return (e.__proto__ = t), e;
                }),
              t(e, n)
            );
          }
          function n(e, o, r) {
            return (
              (n = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()
                ? Reflect.construct
                : function(e, n, o) {
                    var r = [null];
                    r.push.apply(r, n);
                    var i = new (Function.bind.apply(e, r))();
                    return o && t(i, o.prototype), i;
                  }),
              n.apply(null, arguments)
            );
          }
          function o(e) {
            return (
              (function(e) {
                if (Array.isArray(e)) return r(e);
              })(e) ||
              (function(e) {
                if (
                  ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                  null != e['@@iterator']
                )
                  return Array.from(e);
              })(e) ||
              (function(e, t) {
                if (e) {
                  if ('string' == typeof e) return r(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? r(e, t)
                      : void 0
                  );
                }
              })(e) ||
              (function() {
                throw new TypeError(
                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                );
              })()
            );
          }
          function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
          }
          var i = Object.hasOwnProperty,
            a = Object.setPrototypeOf,
            s = Object.isFrozen,
            l = Object.getPrototypeOf,
            c = Object.getOwnPropertyDescriptor,
            u = Object.freeze,
            m = Object.seal,
            p = Object.create,
            d = 'undefined' != typeof Reflect && Reflect,
            f = d.apply,
            h = d.construct;
          f ||
            (f = function(e, t, n) {
              return e.apply(t, n);
            }),
            u ||
              (u = function(e) {
                return e;
              }),
            m ||
              (m = function(e) {
                return e;
              }),
            h ||
              (h = function(e, t) {
                return n(e, o(t));
              });
          var g,
            v = S(Array.prototype.forEach),
            b = S(Array.prototype.pop),
            y = S(Array.prototype.push),
            E = S(String.prototype.toLowerCase),
            x = S(String.prototype.toString),
            w = S(String.prototype.match),
            _ = S(String.prototype.replace),
            N = S(String.prototype.indexOf),
            k = S(String.prototype.trim),
            T = S(RegExp.prototype.test),
            C =
              ((g = TypeError),
              function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return h(g, t);
              });
          function S(e) {
            return function(t) {
              for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                o[r - 1] = arguments[r];
              return f(e, t, o);
            };
          }
          function O(e, t, n) {
            var o;
            (n = null !== (o = n) && void 0 !== o ? o : E), a && a(e, null);
            for (var r = t.length; r--; ) {
              var i = t[r];
              if ('string' == typeof i) {
                var l = n(i);
                l !== i && (s(t) || (t[r] = l), (i = l));
              }
              e[i] = !0;
            }
            return e;
          }
          function A(e) {
            var t,
              n = p(null);
            for (t in e) !0 === f(i, e, [t]) && (n[t] = e[t]);
            return n;
          }
          function L(e, t) {
            for (; null !== e; ) {
              var n = c(e, t);
              if (n) {
                if (n.get) return S(n.get);
                if ('function' == typeof n.value) return S(n.value);
              }
              e = l(e);
            }
            return function(e) {
              return console.warn('fallback value for', e), null;
            };
          }
          var D = u([
              'a',
              'abbr',
              'acronym',
              'address',
              'area',
              'article',
              'aside',
              'audio',
              'b',
              'bdi',
              'bdo',
              'big',
              'blink',
              'blockquote',
              'body',
              'br',
              'button',
              'canvas',
              'caption',
              'center',
              'cite',
              'code',
              'col',
              'colgroup',
              'content',
              'data',
              'datalist',
              'dd',
              'decorator',
              'del',
              'details',
              'dfn',
              'dialog',
              'dir',
              'div',
              'dl',
              'dt',
              'element',
              'em',
              'fieldset',
              'figcaption',
              'figure',
              'font',
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
              'img',
              'input',
              'ins',
              'kbd',
              'label',
              'legend',
              'li',
              'main',
              'map',
              'mark',
              'marquee',
              'menu',
              'menuitem',
              'meter',
              'nav',
              'nobr',
              'ol',
              'optgroup',
              'option',
              'output',
              'p',
              'picture',
              'pre',
              'progress',
              'q',
              'rp',
              'rt',
              'ruby',
              's',
              'samp',
              'section',
              'select',
              'shadow',
              'small',
              'source',
              'spacer',
              'span',
              'strike',
              'strong',
              'style',
              'sub',
              'summary',
              'sup',
              'table',
              'tbody',
              'td',
              'template',
              'textarea',
              'tfoot',
              'th',
              'thead',
              'time',
              'tr',
              'track',
              'tt',
              'u',
              'ul',
              'var',
              'video',
              'wbr',
            ]),
            R = u([
              'svg',
              'a',
              'altglyph',
              'altglyphdef',
              'altglyphitem',
              'animatecolor',
              'animatemotion',
              'animatetransform',
              'circle',
              'clippath',
              'defs',
              'desc',
              'ellipse',
              'filter',
              'font',
              'g',
              'glyph',
              'glyphref',
              'hkern',
              'image',
              'line',
              'lineargradient',
              'marker',
              'mask',
              'metadata',
              'mpath',
              'path',
              'pattern',
              'polygon',
              'polyline',
              'radialgradient',
              'rect',
              'stop',
              'style',
              'switch',
              'symbol',
              'text',
              'textpath',
              'title',
              'tref',
              'tspan',
              'view',
              'vkern',
            ]),
            M = u([
              'feBlend',
              'feColorMatrix',
              'feComponentTransfer',
              'feComposite',
              'feConvolveMatrix',
              'feDiffuseLighting',
              'feDisplacementMap',
              'feDistantLight',
              'feFlood',
              'feFuncA',
              'feFuncB',
              'feFuncG',
              'feFuncR',
              'feGaussianBlur',
              'feImage',
              'feMerge',
              'feMergeNode',
              'feMorphology',
              'feOffset',
              'fePointLight',
              'feSpecularLighting',
              'feSpotLight',
              'feTile',
              'feTurbulence',
            ]),
            I = u([
              'animate',
              'color-profile',
              'cursor',
              'discard',
              'fedropshadow',
              'font-face',
              'font-face-format',
              'font-face-name',
              'font-face-src',
              'font-face-uri',
              'foreignobject',
              'hatch',
              'hatchpath',
              'mesh',
              'meshgradient',
              'meshpatch',
              'meshrow',
              'missing-glyph',
              'script',
              'set',
              'solidcolor',
              'unknown',
              'use',
            ]),
            P = u([
              'math',
              'menclose',
              'merror',
              'mfenced',
              'mfrac',
              'mglyph',
              'mi',
              'mlabeledtr',
              'mmultiscripts',
              'mn',
              'mo',
              'mover',
              'mpadded',
              'mphantom',
              'mroot',
              'mrow',
              'ms',
              'mspace',
              'msqrt',
              'mstyle',
              'msub',
              'msup',
              'msubsup',
              'mtable',
              'mtd',
              'mtext',
              'mtr',
              'munder',
              'munderover',
            ]),
            j = u([
              'maction',
              'maligngroup',
              'malignmark',
              'mlongdiv',
              'mscarries',
              'mscarry',
              'msgroup',
              'mstack',
              'msline',
              'msrow',
              'semantics',
              'annotation',
              'annotation-xml',
              'mprescripts',
              'none',
            ]),
            z = u(['#text']),
            H = u([
              'accept',
              'action',
              'align',
              'alt',
              'autocapitalize',
              'autocomplete',
              'autopictureinpicture',
              'autoplay',
              'background',
              'bgcolor',
              'border',
              'capture',
              'cellpadding',
              'cellspacing',
              'checked',
              'cite',
              'class',
              'clear',
              'color',
              'cols',
              'colspan',
              'controls',
              'controlslist',
              'coords',
              'crossorigin',
              'datetime',
              'decoding',
              'default',
              'dir',
              'disabled',
              'disablepictureinpicture',
              'disableremoteplayback',
              'download',
              'draggable',
              'enctype',
              'enterkeyhint',
              'face',
              'for',
              'headers',
              'height',
              'hidden',
              'high',
              'href',
              'hreflang',
              'id',
              'inputmode',
              'integrity',
              'ismap',
              'kind',
              'label',
              'lang',
              'list',
              'loading',
              'loop',
              'low',
              'max',
              'maxlength',
              'media',
              'method',
              'min',
              'minlength',
              'multiple',
              'muted',
              'name',
              'nonce',
              'noshade',
              'novalidate',
              'nowrap',
              'open',
              'optimum',
              'pattern',
              'placeholder',
              'playsinline',
              'poster',
              'preload',
              'pubdate',
              'radiogroup',
              'readonly',
              'rel',
              'required',
              'rev',
              'reversed',
              'role',
              'rows',
              'rowspan',
              'spellcheck',
              'scope',
              'selected',
              'shape',
              'size',
              'sizes',
              'span',
              'srclang',
              'start',
              'src',
              'srcset',
              'step',
              'style',
              'summary',
              'tabindex',
              'title',
              'translate',
              'type',
              'usemap',
              'valign',
              'value',
              'width',
              'xmlns',
              'slot',
            ]),
            B = u([
              'accent-height',
              'accumulate',
              'additive',
              'alignment-baseline',
              'ascent',
              'attributename',
              'attributetype',
              'azimuth',
              'basefrequency',
              'baseline-shift',
              'begin',
              'bias',
              'by',
              'class',
              'clip',
              'clippathunits',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'cx',
              'cy',
              'd',
              'dx',
              'dy',
              'diffuseconstant',
              'direction',
              'display',
              'divisor',
              'dur',
              'edgemode',
              'elevation',
              'end',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'filterunits',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'fx',
              'fy',
              'g1',
              'g2',
              'glyph-name',
              'glyphref',
              'gradientunits',
              'gradienttransform',
              'height',
              'href',
              'id',
              'image-rendering',
              'in',
              'in2',
              'k',
              'k1',
              'k2',
              'k3',
              'k4',
              'kerning',
              'keypoints',
              'keysplines',
              'keytimes',
              'lang',
              'lengthadjust',
              'letter-spacing',
              'kernelmatrix',
              'kernelunitlength',
              'lighting-color',
              'local',
              'marker-end',
              'marker-mid',
              'marker-start',
              'markerheight',
              'markerunits',
              'markerwidth',
              'maskcontentunits',
              'maskunits',
              'max',
              'mask',
              'media',
              'method',
              'mode',
              'min',
              'name',
              'numoctaves',
              'offset',
              'operator',
              'opacity',
              'order',
              'orient',
              'orientation',
              'origin',
              'overflow',
              'paint-order',
              'path',
              'pathlength',
              'patterncontentunits',
              'patterntransform',
              'patternunits',
              'points',
              'preservealpha',
              'preserveaspectratio',
              'primitiveunits',
              'r',
              'rx',
              'ry',
              'radius',
              'refx',
              'refy',
              'repeatcount',
              'repeatdur',
              'restart',
              'result',
              'rotate',
              'scale',
              'seed',
              'shape-rendering',
              'specularconstant',
              'specularexponent',
              'spreadmethod',
              'startoffset',
              'stddeviation',
              'stitchtiles',
              'stop-color',
              'stop-opacity',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke',
              'stroke-width',
              'style',
              'surfacescale',
              'systemlanguage',
              'tabindex',
              'targetx',
              'targety',
              'transform',
              'transform-origin',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'textlength',
              'type',
              'u1',
              'u2',
              'unicode',
              'values',
              'viewbox',
              'visibility',
              'version',
              'vert-adv-y',
              'vert-origin-x',
              'vert-origin-y',
              'width',
              'word-spacing',
              'wrap',
              'writing-mode',
              'xchannelselector',
              'ychannelselector',
              'x',
              'x1',
              'x2',
              'xmlns',
              'y',
              'y1',
              'y2',
              'z',
              'zoomandpan',
            ]),
            F = u([
              'accent',
              'accentunder',
              'align',
              'bevelled',
              'close',
              'columnsalign',
              'columnlines',
              'columnspan',
              'denomalign',
              'depth',
              'dir',
              'display',
              'displaystyle',
              'encoding',
              'fence',
              'frame',
              'height',
              'href',
              'id',
              'largeop',
              'length',
              'linethickness',
              'lspace',
              'lquote',
              'mathbackground',
              'mathcolor',
              'mathsize',
              'mathvariant',
              'maxsize',
              'minsize',
              'movablelimits',
              'notation',
              'numalign',
              'open',
              'rowalign',
              'rowlines',
              'rowspacing',
              'rowspan',
              'rspace',
              'rquote',
              'scriptlevel',
              'scriptminsize',
              'scriptsizemultiplier',
              'selection',
              'separator',
              'separators',
              'stretchy',
              'subscriptshift',
              'supscriptshift',
              'symmetric',
              'voffset',
              'width',
              'xmlns',
            ]),
            U = u(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
            W = m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            V = m(/<%[\w\W]*|[\w\W]*%>/gm),
            G = m(/\${[\w\W]*}/gm),
            q = m(/^data-[\-\w.\u00B7-\uFFFF]/),
            $ = m(/^aria-[\-\w]+$/),
            Y = m(
              /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
            ),
            K = m(/^(?:\w+script|data):/i),
            X = m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            Z = m(/^html$/i),
            J = function() {
              return 'undefined' == typeof window ? null : window;
            };
          return (function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
              r = function(e) {
                return t(e);
              };
            if (
              ((r.version = '2.4.7'),
              (r.removed = []),
              !n || !n.document || 9 !== n.document.nodeType)
            )
              return (r.isSupported = !1), r;
            var i = n.document,
              a = n.document,
              s = n.DocumentFragment,
              l = n.HTMLTemplateElement,
              c = n.Node,
              m = n.Element,
              p = n.NodeFilter,
              d = n.NamedNodeMap,
              f = void 0 === d ? n.NamedNodeMap || n.MozNamedAttrMap : d,
              h = n.HTMLFormElement,
              g = n.DOMParser,
              S = n.trustedTypes,
              Q = m.prototype,
              ee = L(Q, 'cloneNode'),
              te = L(Q, 'nextSibling'),
              ne = L(Q, 'childNodes'),
              oe = L(Q, 'parentNode');
            if ('function' == typeof l) {
              var re = a.createElement('template');
              re.content && re.content.ownerDocument && (a = re.content.ownerDocument);
            }
            var ie = (function(t, n) {
                if ('object' !== e(t) || 'function' != typeof t.createPolicy) return null;
                var o = null,
                  r = 'data-tt-policy-suffix';
                n.currentScript &&
                  n.currentScript.hasAttribute(r) &&
                  (o = n.currentScript.getAttribute(r));
                var i = 'dompurify' + (o ? '#' + o : '');
                try {
                  return t.createPolicy(i, {
                    createHTML: function(e) {
                      return e;
                    },
                    createScriptURL: function(e) {
                      return e;
                    },
                  });
                } catch (e) {
                  return console.warn('TrustedTypes policy ' + i + ' could not be created.'), null;
                }
              })(S, i),
              ae = ie ? ie.createHTML('') : '',
              se = a,
              le = se.implementation,
              ce = se.createNodeIterator,
              ue = se.createDocumentFragment,
              me = se.getElementsByTagName,
              pe = i.importNode,
              de = {};
            try {
              de = A(a).documentMode ? a.documentMode : {};
            } catch (e) {}
            var fe = {};
            r.isSupported =
              'function' == typeof oe && le && void 0 !== le.createHTMLDocument && 9 !== de;
            var he,
              ge,
              ve = W,
              be = V,
              ye = G,
              Ee = q,
              xe = $,
              we = K,
              _e = X,
              Ne = Y,
              ke = null,
              Te = O({}, [].concat(o(D), o(R), o(M), o(P), o(z))),
              Ce = null,
              Se = O({}, [].concat(o(H), o(B), o(F), o(U))),
              Oe = Object.seal(
                Object.create(null, {
                  tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                  attributeNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null,
                  },
                  allowCustomizedBuiltInElements: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: !1,
                  },
                }),
              ),
              Ae = null,
              Le = null,
              De = !0,
              Re = !0,
              Me = !1,
              Ie = !0,
              Pe = !1,
              je = !1,
              ze = !1,
              He = !1,
              Be = !1,
              Fe = !1,
              Ue = !1,
              We = !0,
              Ve = !1,
              Ge = !0,
              qe = !1,
              $e = {},
              Ye = null,
              Ke = O({}, [
                'annotation-xml',
                'audio',
                'colgroup',
                'desc',
                'foreignobject',
                'head',
                'iframe',
                'math',
                'mi',
                'mn',
                'mo',
                'ms',
                'mtext',
                'noembed',
                'noframes',
                'noscript',
                'plaintext',
                'script',
                'style',
                'svg',
                'template',
                'thead',
                'title',
                'video',
                'xmp',
              ]),
              Xe = null,
              Ze = O({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
              Je = null,
              Qe = O({}, [
                'alt',
                'class',
                'for',
                'id',
                'label',
                'name',
                'pattern',
                'placeholder',
                'role',
                'summary',
                'title',
                'value',
                'style',
                'xmlns',
              ]),
              et = 'http://www.w3.org/1998/Math/MathML',
              tt = 'http://www.w3.org/2000/svg',
              nt = 'http://www.w3.org/1999/xhtml',
              ot = nt,
              rt = !1,
              it = null,
              at = O({}, [et, tt, nt], x),
              st = ['application/xhtml+xml', 'text/html'],
              lt = null,
              ct = a.createElement('form'),
              ut = function(e) {
                return e instanceof RegExp || e instanceof Function;
              },
              mt = function(t) {
                (lt && lt === t) ||
                  ((t && 'object' === e(t)) || (t = {}),
                  (t = A(t)),
                  (he = he =
                    -1 === st.indexOf(t.PARSER_MEDIA_TYPE) ? 'text/html' : t.PARSER_MEDIA_TYPE),
                  (ge = 'application/xhtml+xml' === he ? x : E),
                  (ke = 'ALLOWED_TAGS' in t ? O({}, t.ALLOWED_TAGS, ge) : Te),
                  (Ce = 'ALLOWED_ATTR' in t ? O({}, t.ALLOWED_ATTR, ge) : Se),
                  (it = 'ALLOWED_NAMESPACES' in t ? O({}, t.ALLOWED_NAMESPACES, x) : at),
                  (Je = 'ADD_URI_SAFE_ATTR' in t ? O(A(Qe), t.ADD_URI_SAFE_ATTR, ge) : Qe),
                  (Xe = 'ADD_DATA_URI_TAGS' in t ? O(A(Ze), t.ADD_DATA_URI_TAGS, ge) : Ze),
                  (Ye = 'FORBID_CONTENTS' in t ? O({}, t.FORBID_CONTENTS, ge) : Ke),
                  (Ae = 'FORBID_TAGS' in t ? O({}, t.FORBID_TAGS, ge) : {}),
                  (Le = 'FORBID_ATTR' in t ? O({}, t.FORBID_ATTR, ge) : {}),
                  ($e = 'USE_PROFILES' in t && t.USE_PROFILES),
                  (De = !1 !== t.ALLOW_ARIA_ATTR),
                  (Re = !1 !== t.ALLOW_DATA_ATTR),
                  (Me = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Ie = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                  (Pe = t.SAFE_FOR_TEMPLATES || !1),
                  (je = t.WHOLE_DOCUMENT || !1),
                  (Be = t.RETURN_DOM || !1),
                  (Fe = t.RETURN_DOM_FRAGMENT || !1),
                  (Ue = t.RETURN_TRUSTED_TYPE || !1),
                  (He = t.FORCE_BODY || !1),
                  (We = !1 !== t.SANITIZE_DOM),
                  (Ve = t.SANITIZE_NAMED_PROPS || !1),
                  (Ge = !1 !== t.KEEP_CONTENT),
                  (qe = t.IN_PLACE || !1),
                  (Ne = t.ALLOWED_URI_REGEXP || Ne),
                  (ot = t.NAMESPACE || nt),
                  (Oe = t.CUSTOM_ELEMENT_HANDLING || {}),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (Oe.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (Oe.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    'boolean' == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                    (Oe.allowCustomizedBuiltInElements =
                      t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  Pe && (Re = !1),
                  Fe && (Be = !0),
                  $e &&
                    ((ke = O({}, o(z))),
                    (Ce = []),
                    !0 === $e.html && (O(ke, D), O(Ce, H)),
                    !0 === $e.svg && (O(ke, R), O(Ce, B), O(Ce, U)),
                    !0 === $e.svgFilters && (O(ke, M), O(Ce, B), O(Ce, U)),
                    !0 === $e.mathMl && (O(ke, P), O(Ce, F), O(Ce, U))),
                  t.ADD_TAGS && (ke === Te && (ke = A(ke)), O(ke, t.ADD_TAGS, ge)),
                  t.ADD_ATTR && (Ce === Se && (Ce = A(Ce)), O(Ce, t.ADD_ATTR, ge)),
                  t.ADD_URI_SAFE_ATTR && O(Je, t.ADD_URI_SAFE_ATTR, ge),
                  t.FORBID_CONTENTS && (Ye === Ke && (Ye = A(Ye)), O(Ye, t.FORBID_CONTENTS, ge)),
                  Ge && (ke['#text'] = !0),
                  je && O(ke, ['html', 'head', 'body']),
                  ke.table && (O(ke, ['tbody']), delete Ae.tbody),
                  u && u(t),
                  (lt = t));
              },
              pt = O({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
              dt = O({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
              ft = O({}, ['title', 'style', 'font', 'a', 'script']),
              ht = O({}, R);
            O(ht, M), O(ht, I);
            var gt = O({}, P);
            O(gt, j);
            var vt = function(e) {
                y(r.removed, { element: e });
                try {
                  e.parentNode.removeChild(e);
                } catch (t) {
                  try {
                    e.outerHTML = ae;
                  } catch (t) {
                    e.remove();
                  }
                }
              },
              bt = function(e, t) {
                try {
                  y(r.removed, { attribute: t.getAttributeNode(e), from: t });
                } catch (e) {
                  y(r.removed, { attribute: null, from: t });
                }
                if ((t.removeAttribute(e), 'is' === e && !Ce[e]))
                  if (Be || Fe)
                    try {
                      vt(t);
                    } catch (e) {}
                  else
                    try {
                      t.setAttribute(e, '');
                    } catch (e) {}
              },
              yt = function(e) {
                var t, n;
                if (He) e = '<remove></remove>' + e;
                else {
                  var o = w(e, /^[\r\n\t ]+/);
                  n = o && o[0];
                }
                'application/xhtml+xml' === he &&
                  ot === nt &&
                  (e =
                    '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                    e +
                    '</body></html>');
                var r = ie ? ie.createHTML(e) : e;
                if (ot === nt)
                  try {
                    t = new g().parseFromString(r, he);
                  } catch (e) {}
                if (!t || !t.documentElement) {
                  t = le.createDocument(ot, 'template', null);
                  try {
                    t.documentElement.innerHTML = rt ? ae : r;
                  } catch (e) {}
                }
                var i = t.body || t.documentElement;
                return (
                  e && n && i.insertBefore(a.createTextNode(n), i.childNodes[0] || null),
                  ot === nt ? me.call(t, je ? 'html' : 'body')[0] : je ? t.documentElement : i
                );
              },
              Et = function(e) {
                return ce.call(
                  e.ownerDocument || e,
                  e,
                  p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT,
                  null,
                  !1,
                );
              },
              xt = function(t) {
                return 'object' === e(c)
                  ? t instanceof c
                  : t &&
                      'object' === e(t) &&
                      'number' == typeof t.nodeType &&
                      'string' == typeof t.nodeName;
              },
              wt = function(e, t, n) {
                fe[e] &&
                  v(fe[e], function(e) {
                    e.call(r, t, n, lt);
                  });
              },
              _t = function(e) {
                var t, n;
                if (
                  (wt('beforeSanitizeElements', e, null),
                  (n = e) instanceof h &&
                    ('string' != typeof n.nodeName ||
                      'string' != typeof n.textContent ||
                      'function' != typeof n.removeChild ||
                      !(n.attributes instanceof f) ||
                      'function' != typeof n.removeAttribute ||
                      'function' != typeof n.setAttribute ||
                      'string' != typeof n.namespaceURI ||
                      'function' != typeof n.insertBefore ||
                      'function' != typeof n.hasChildNodes))
                )
                  return vt(e), !0;
                if (T(/[\u0080-\uFFFF]/, e.nodeName)) return vt(e), !0;
                var o = ge(e.nodeName);
                if (
                  (wt('uponSanitizeElement', e, { tagName: o, allowedTags: ke }),
                  e.hasChildNodes() &&
                    !xt(e.firstElementChild) &&
                    (!xt(e.content) || !xt(e.content.firstElementChild)) &&
                    T(/<[/\w]/g, e.innerHTML) &&
                    T(/<[/\w]/g, e.textContent))
                )
                  return vt(e), !0;
                if ('select' === o && T(/<template/i, e.innerHTML)) return vt(e), !0;
                if (!ke[o] || Ae[o]) {
                  if (!Ae[o] && kt(o)) {
                    if (Oe.tagNameCheck instanceof RegExp && T(Oe.tagNameCheck, o)) return !1;
                    if (Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(o)) return !1;
                  }
                  if (Ge && !Ye[o]) {
                    var i = oe(e) || e.parentNode,
                      a = ne(e) || e.childNodes;
                    if (a && i)
                      for (var s = a.length - 1; s >= 0; --s) i.insertBefore(ee(a[s], !0), te(e));
                  }
                  return vt(e), !0;
                }
                return e instanceof m &&
                  !(function(e) {
                    var t = oe(e);
                    (t && t.tagName) || (t = { namespaceURI: ot, tagName: 'template' });
                    var n = E(e.tagName),
                      o = E(t.tagName);
                    return (
                      !!it[e.namespaceURI] &&
                      (e.namespaceURI === tt
                        ? t.namespaceURI === nt
                          ? 'svg' === n
                          : t.namespaceURI === et
                          ? 'svg' === n && ('annotation-xml' === o || pt[o])
                          : Boolean(ht[n])
                        : e.namespaceURI === et
                        ? t.namespaceURI === nt
                          ? 'math' === n
                          : t.namespaceURI === tt
                          ? 'math' === n && dt[o]
                          : Boolean(gt[n])
                        : e.namespaceURI === nt
                        ? !(t.namespaceURI === tt && !dt[o]) &&
                          !(t.namespaceURI === et && !pt[o]) &&
                          !gt[n] &&
                          (ft[n] || !ht[n])
                        : !('application/xhtml+xml' !== he || !it[e.namespaceURI]))
                    );
                  })(e)
                  ? (vt(e), !0)
                  : ('noscript' !== o && 'noembed' !== o && 'noframes' !== o) ||
                    !T(/<\/no(script|embed|frames)/i, e.innerHTML)
                  ? (Pe &&
                      3 === e.nodeType &&
                      ((t = e.textContent),
                      (t = _(t, ve, ' ')),
                      (t = _(t, be, ' ')),
                      (t = _(t, ye, ' ')),
                      e.textContent !== t &&
                        (y(r.removed, { element: e.cloneNode() }), (e.textContent = t))),
                    wt('afterSanitizeElements', e, null),
                    !1)
                  : (vt(e), !0);
              },
              Nt = function(e, t, n) {
                if (We && ('id' === t || 'name' === t) && (n in a || n in ct)) return !1;
                if (Re && !Le[t] && T(Ee, t));
                else if (De && T(xe, t));
                else if (!Ce[t] || Le[t]) {
                  if (
                    !(
                      (kt(e) &&
                        ((Oe.tagNameCheck instanceof RegExp && T(Oe.tagNameCheck, e)) ||
                          (Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(e))) &&
                        ((Oe.attributeNameCheck instanceof RegExp && T(Oe.attributeNameCheck, t)) ||
                          (Oe.attributeNameCheck instanceof Function &&
                            Oe.attributeNameCheck(t)))) ||
                      ('is' === t &&
                        Oe.allowCustomizedBuiltInElements &&
                        ((Oe.tagNameCheck instanceof RegExp && T(Oe.tagNameCheck, n)) ||
                          (Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(n))))
                    )
                  )
                    return !1;
                } else if (Je[t]);
                else if (T(Ne, _(n, _e, '')));
                else if (
                  ('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
                  'script' === e ||
                  0 !== N(n, 'data:') ||
                  !Xe[e]
                )
                  if (Me && !T(we, _(n, _e, '')));
                  else if (n) return !1;
                return !0;
              },
              kt = function(e) {
                return e.indexOf('-') > 0;
              },
              Tt = function(t) {
                var n, o, i, a;
                wt('beforeSanitizeAttributes', t, null);
                var s = t.attributes;
                if (s) {
                  var l = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: Ce };
                  for (a = s.length; a--; ) {
                    var c = (n = s[a]),
                      u = c.name,
                      m = c.namespaceURI;
                    if (
                      ((o = 'value' === u ? n.value : k(n.value)),
                      (i = ge(u)),
                      (l.attrName = i),
                      (l.attrValue = o),
                      (l.keepAttr = !0),
                      (l.forceKeepAttr = void 0),
                      wt('uponSanitizeAttribute', t, l),
                      (o = l.attrValue),
                      !l.forceKeepAttr && (bt(u, t), l.keepAttr))
                    )
                      if (Ie || !T(/\/>/i, o)) {
                        Pe && ((o = _(o, ve, ' ')), (o = _(o, be, ' ')), (o = _(o, ye, ' ')));
                        var p = ge(t.nodeName);
                        if (Nt(p, i, o)) {
                          if (
                            (!Ve ||
                              ('id' !== i && 'name' !== i) ||
                              (bt(u, t), (o = 'user-content-' + o)),
                            ie && 'object' === e(S) && 'function' == typeof S.getAttributeType)
                          )
                            if (m);
                            else
                              switch (S.getAttributeType(p, i)) {
                                case 'TrustedHTML':
                                  o = ie.createHTML(o);
                                  break;
                                case 'TrustedScriptURL':
                                  o = ie.createScriptURL(o);
                              }
                          try {
                            m ? t.setAttributeNS(m, u, o) : t.setAttribute(u, o), b(r.removed);
                          } catch (e) {}
                        }
                      } else bt(u, t);
                  }
                  wt('afterSanitizeAttributes', t, null);
                }
              },
              Ct = function e(t) {
                var n,
                  o = Et(t);
                for (wt('beforeSanitizeShadowDOM', t, null); (n = o.nextNode()); )
                  wt('uponSanitizeShadowNode', n, null),
                    _t(n) || (n.content instanceof s && e(n.content), Tt(n));
                wt('afterSanitizeShadowDOM', t, null);
              };
            return (
              (r.sanitize = function(t) {
                var o,
                  a,
                  l,
                  u,
                  m,
                  p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (((rt = !t) && (t = '\x3c!--\x3e'), 'string' != typeof t && !xt(t))) {
                  if ('function' != typeof t.toString) throw C('toString is not a function');
                  if ('string' != typeof (t = t.toString()))
                    throw C('dirty is not a string, aborting');
                }
                if (!r.isSupported) {
                  if ('object' === e(n.toStaticHTML) || 'function' == typeof n.toStaticHTML) {
                    if ('string' == typeof t) return n.toStaticHTML(t);
                    if (xt(t)) return n.toStaticHTML(t.outerHTML);
                  }
                  return t;
                }
                if ((ze || mt(p), (r.removed = []), 'string' == typeof t && (qe = !1), qe)) {
                  if (t.nodeName) {
                    var d = ge(t.nodeName);
                    if (!ke[d] || Ae[d])
                      throw C('root node is forbidden and cannot be sanitized in-place');
                  }
                } else if (t instanceof c)
                  (1 === (a = (o = yt('\x3c!----\x3e')).ownerDocument.importNode(t, !0)).nodeType &&
                    'BODY' === a.nodeName) ||
                  'HTML' === a.nodeName
                    ? (o = a)
                    : o.appendChild(a);
                else {
                  if (!Be && !Pe && !je && -1 === t.indexOf('<'))
                    return ie && Ue ? ie.createHTML(t) : t;
                  if (!(o = yt(t))) return Be ? null : Ue ? ae : '';
                }
                o && He && vt(o.firstChild);
                for (var f = Et(qe ? t : o); (l = f.nextNode()); )
                  (3 === l.nodeType && l === u) ||
                    _t(l) ||
                    (l.content instanceof s && Ct(l.content), Tt(l), (u = l));
                if (((u = null), qe)) return t;
                if (Be) {
                  if (Fe)
                    for (m = ue.call(o.ownerDocument); o.firstChild; ) m.appendChild(o.firstChild);
                  else m = o;
                  return (Ce.shadowroot || Ce.shadowrootmod) && (m = pe.call(i, m, !0)), m;
                }
                var h = je ? o.outerHTML : o.innerHTML;
                return (
                  je &&
                    ke['!doctype'] &&
                    o.ownerDocument &&
                    o.ownerDocument.doctype &&
                    o.ownerDocument.doctype.name &&
                    T(Z, o.ownerDocument.doctype.name) &&
                    (h = '<!DOCTYPE ' + o.ownerDocument.doctype.name + '>\n' + h),
                  Pe && ((h = _(h, ve, ' ')), (h = _(h, be, ' ')), (h = _(h, ye, ' '))),
                  ie && Ue ? ie.createHTML(h) : h
                );
              }),
              (r.setConfig = function(e) {
                mt(e), (ze = !0);
              }),
              (r.clearConfig = function() {
                (lt = null), (ze = !1);
              }),
              (r.isValidAttribute = function(e, t, n) {
                lt || mt({});
                var o = ge(e),
                  r = ge(t);
                return Nt(o, r, n);
              }),
              (r.addHook = function(e, t) {
                'function' == typeof t && ((fe[e] = fe[e] || []), y(fe[e], t));
              }),
              (r.removeHook = function(e) {
                if (fe[e]) return b(fe[e]);
              }),
              (r.removeHooks = function(e) {
                fe[e] && (fe[e] = []);
              }),
              (r.removeAllHooks = function() {
                fe = {};
              }),
              r
            );
          })();
        })();
      },
      10130: (e, t, n) => {
        'use strict';
        t.Z = function(e) {
          var t = e.size,
            n = void 0 === t ? 24 : t,
            o = e.onClick,
            s = (e.icon, e.className),
            l = (function(e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function(e, t) {
                  if (null == e) return {};
                  var n,
                    o,
                    r = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++) (n = i[o]), 0 <= t.indexOf(n) || (r[n] = e[n]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (n = i[o]),
                    0 <= t.indexOf(n) ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
              }
              return r;
            })(e, i),
            c = [
              'gridicon',
              'gridicons-notice-outline',
              s,
              !!(function(e) {
                return 0 == e % 18;
              })(n) && 'needs-offset',
              !1,
              !1,
            ]
              .filter(Boolean)
              .join(' ');
          return r.default.createElement(
            'svg',
            a({ className: c, height: n, width: n, onClick: o }, l, {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
            }),
            r.default.createElement(
              'g',
              null,
              r.default.createElement('path', {
                d:
                  'M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z',
              }),
            ),
          );
        };
        var o,
          r = (o = n(99196)) && o.__esModule ? o : { default: o },
          i = ['size', 'onClick', 'icon', 'className'];
        function a() {
          return (
            (a = Object.assign
              ? Object.assign.bind()
              : function(e) {
                  for (var t, n = 1; n < arguments.length; n++)
                    for (var o in (t = arguments[n]))
                      Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                  return e;
                }),
            a.apply(this, arguments)
          );
        }
      },
      66338: function(e, t, n) {
        var o;
        (o = function(e, t) {
          return (function(e) {
            var t = {};
            function n(o) {
              if (t[o]) return t[o].exports;
              var r = (t[o] = { i: o, l: !1, exports: {} });
              return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
              }),
              (n.r = function(e) {
                'undefined' != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                  Object.defineProperty(e, '__esModule', { value: !0 });
              }),
              (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if (
                  (n.r(o),
                  Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
                  2 & t && 'string' != typeof e)
                )
                  for (var r in e)
                    n.d(
                      o,
                      r,
                      function(t) {
                        return e[t];
                      }.bind(null, r),
                    );
                return o;
              }),
              (n.n = function(e) {
                var t =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return n.d(t, 'a', t), t;
              }),
              (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ''),
              n((n.s = 4))
            );
          })([
            function(e, t, n) {
              e.exports = n(5)();
            },
            function(t, n) {
              t.exports = e;
            },
            function(e, n) {
              e.exports = t;
            },
            function(e, t) {
              e.exports = function(e, t, n) {
                var o = e.direction,
                  r = e.value;
                switch (o) {
                  case 'top':
                    return (
                      n.top + r < t.top &&
                      n.bottom > t.bottom &&
                      n.left < t.left &&
                      n.right > t.right
                    );
                  case 'left':
                    return (
                      n.left + r < t.left &&
                      n.bottom > t.bottom &&
                      n.top < t.top &&
                      n.right > t.right
                    );
                  case 'bottom':
                    return (
                      n.bottom - r > t.bottom &&
                      n.left < t.left &&
                      n.right > t.right &&
                      n.top < t.top
                    );
                  case 'right':
                    return (
                      n.right - r > t.right &&
                      n.left < t.left &&
                      n.top < t.top &&
                      n.bottom > t.bottom
                    );
                }
              };
            },
            function(e, t, n) {
              'use strict';
              n.r(t),
                n.d(t, 'default', function() {
                  return v;
                });
              var o = n(1),
                r = n.n(o),
                i = n(2),
                a = n.n(i),
                s = n(0),
                l = n.n(s),
                c = n(3),
                u = n.n(c);
              function m(e) {
                return (
                  (m =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                      ? function(e) {
                          return typeof e;
                        }
                      : function(e) {
                          return e &&
                            'function' == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? 'symbol'
                            : typeof e;
                        }),
                  m(e)
                );
              }
              function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var o = t[n];
                  (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(e, o.key, o);
                }
              }
              function d(e) {
                return (
                  (d = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                      }),
                  d(e)
                );
              }
              function f(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              }
              function h(e, t) {
                return (
                  (h =
                    Object.setPrototypeOf ||
                    function(e, t) {
                      return (e.__proto__ = t), e;
                    }),
                  h(e, t)
                );
              }
              function g(e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              }
              var v = (function(e) {
                function t(e) {
                  var n, o;
                  return (
                    (function(e, t) {
                      if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                    })(this, t),
                    this,
                    (o = d(t).call(this, e)),
                    (n = !o || ('object' !== m(o) && 'function' != typeof o) ? f(this) : o),
                    g(f(n), 'getContainer', function() {
                      return n.props.containment || window;
                    }),
                    g(f(n), 'addEventListener', function(e, t, o, r) {
                      var i;
                      n.debounceCheck || (n.debounceCheck = {});
                      var a = function() {
                          (i = null), n.check();
                        },
                        s = {
                          target: e,
                          fn:
                            r > -1
                              ? function() {
                                  i || (i = setTimeout(a, r || 0));
                                }
                              : function() {
                                  clearTimeout(i), (i = setTimeout(a, o || 0));
                                },
                          getLastTimeout: function() {
                            return i;
                          },
                        };
                      e.addEventListener(t, s.fn), (n.debounceCheck[t] = s);
                    }),
                    g(f(n), 'startWatching', function() {
                      n.debounceCheck ||
                        n.interval ||
                        (n.props.intervalCheck &&
                          (n.interval = setInterval(n.check, n.props.intervalDelay)),
                        n.props.scrollCheck &&
                          n.addEventListener(
                            n.getContainer(),
                            'scroll',
                            n.props.scrollDelay,
                            n.props.scrollThrottle,
                          ),
                        n.props.resizeCheck &&
                          n.addEventListener(
                            window,
                            'resize',
                            n.props.resizeDelay,
                            n.props.resizeThrottle,
                          ),
                        !n.props.delayedCall && n.check());
                    }),
                    g(f(n), 'stopWatching', function() {
                      if (n.debounceCheck)
                        for (var e in n.debounceCheck)
                          if (n.debounceCheck.hasOwnProperty(e)) {
                            var t = n.debounceCheck[e];
                            clearTimeout(t.getLastTimeout()),
                              t.target.removeEventListener(e, t.fn),
                              (n.debounceCheck[e] = null);
                          }
                      (n.debounceCheck = null),
                        n.interval && (n.interval = clearInterval(n.interval));
                    }),
                    g(f(n), 'check', function() {
                      var e,
                        t,
                        o = n.node;
                      if (!o) return n.state;
                      if (
                        ((e = (function(e) {
                          return (
                            void 0 === e.width && (e.width = e.right - e.left),
                            void 0 === e.height && (e.height = e.bottom - e.top),
                            e
                          );
                        })(n.roundRectDown(o.getBoundingClientRect()))),
                        n.props.containment)
                      ) {
                        var r = n.props.containment.getBoundingClientRect();
                        t = { top: r.top, left: r.left, bottom: r.bottom, right: r.right };
                      } else t = { top: 0, left: 0, bottom: window.innerHeight || document.documentElement.clientHeight, right: window.innerWidth || document.documentElement.clientWidth };
                      var i = n.props.offset || {};
                      'object' === m(i) &&
                        ((t.top += i.top || 0),
                        (t.left += i.left || 0),
                        (t.bottom -= i.bottom || 0),
                        (t.right -= i.right || 0));
                      var a = {
                          top: e.top >= t.top,
                          left: e.left >= t.left,
                          bottom: e.bottom <= t.bottom,
                          right: e.right <= t.right,
                        },
                        s = e.height > 0 && e.width > 0,
                        l = s && a.top && a.left && a.bottom && a.right;
                      if (s && n.props.partialVisibility) {
                        var c =
                          e.top <= t.bottom &&
                          e.bottom >= t.top &&
                          e.left <= t.right &&
                          e.right >= t.left;
                        'string' == typeof n.props.partialVisibility &&
                          (c = a[n.props.partialVisibility]),
                          (l = n.props.minTopValue
                            ? c && e.top <= t.bottom - n.props.minTopValue
                            : c);
                      }
                      'string' == typeof i.direction &&
                        'number' == typeof i.value &&
                        (console.warn(
                          '[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }',
                          i.direction,
                          i.value,
                        ),
                        (l = u()(i, e, t)));
                      var p = n.state;
                      return (
                        n.state.isVisible !== l &&
                          ((p = { isVisible: l, visibilityRect: a }),
                          n.setState(p),
                          n.props.onChange && n.props.onChange(l)),
                        p
                      );
                    }),
                    (n.state = { isVisible: null, visibilityRect: {} }),
                    n
                  );
                }
                var n, o;
                return (
                  (function(e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError('Super expression must either be null or a function');
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && h(e, t);
                  })(t, e),
                  (n = t),
                  (o = [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        (this.node = a.a.findDOMNode(this)),
                          this.props.active && this.startWatching();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.stopWatching();
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function(e) {
                        (this.node = a.a.findDOMNode(this)),
                          this.props.active && !e.active
                            ? (this.setState({ isVisible: null, visibilityRect: {} }),
                              this.startWatching())
                            : this.props.active || this.stopWatching();
                      },
                    },
                    {
                      key: 'roundRectDown',
                      value: function(e) {
                        return {
                          top: Math.floor(e.top),
                          left: Math.floor(e.left),
                          bottom: Math.floor(e.bottom),
                          right: Math.floor(e.right),
                        };
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        return this.props.children instanceof Function
                          ? this.props.children({
                              isVisible: this.state.isVisible,
                              visibilityRect: this.state.visibilityRect,
                            })
                          : r.a.Children.only(this.props.children);
                      },
                    },
                  ]) && p(n.prototype, o),
                  t
                );
              })(r.a.Component);
              g(v, 'defaultProps', {
                active: !0,
                partialVisibility: !1,
                minTopValue: 0,
                scrollCheck: !1,
                scrollDelay: 250,
                scrollThrottle: -1,
                resizeCheck: !1,
                resizeDelay: 250,
                resizeThrottle: -1,
                intervalCheck: !0,
                intervalDelay: 100,
                delayedCall: !1,
                offset: {},
                containment: null,
                children: r.a.createElement('span', null),
              }),
                g(v, 'propTypes', {
                  onChange: l.a.func,
                  active: l.a.bool,
                  partialVisibility: l.a.oneOfType([
                    l.a.bool,
                    l.a.oneOf(['top', 'right', 'bottom', 'left']),
                  ]),
                  delayedCall: l.a.bool,
                  offset: l.a.oneOfType([
                    l.a.shape({
                      top: l.a.number,
                      left: l.a.number,
                      bottom: l.a.number,
                      right: l.a.number,
                    }),
                    l.a.shape({
                      direction: l.a.oneOf(['top', 'right', 'bottom', 'left']),
                      value: l.a.number,
                    }),
                  ]),
                  scrollCheck: l.a.bool,
                  scrollDelay: l.a.number,
                  scrollThrottle: l.a.number,
                  resizeCheck: l.a.bool,
                  resizeDelay: l.a.number,
                  resizeThrottle: l.a.number,
                  intervalCheck: l.a.bool,
                  intervalDelay: l.a.number,
                  containment:
                    'undefined' != typeof window ? l.a.instanceOf(window.Element) : l.a.any,
                  children: l.a.oneOfType([l.a.element, l.a.func]),
                  minTopValue: l.a.number,
                });
            },
            function(e, t, n) {
              'use strict';
              var o = n(6);
              function r() {}
              function i() {}
              (i.resetWarningCache = r),
                (e.exports = function() {
                  function e(e, t, n, r, i, a) {
                    if (a !== o) {
                      var s = new Error(
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                      );
                      throw ((s.name = 'Invariant Violation'), s);
                    }
                  }
                  function t() {
                    return e;
                  }
                  e.isRequired = e;
                  var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: r,
                  };
                  return (n.PropTypes = n), n;
                });
            },
            function(e, t, n) {
              'use strict';
              e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
            },
          ]);
        }),
          (e.exports = o(n(99196), n(91850)));
      },
      99196: e => {
        'use strict';
        e.exports = window.React;
      },
      91850: e => {
        'use strict';
        e.exports = window.ReactDOM;
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    });
  var o = {};
  (() => {
    'use strict';
    n.r(o),
      n.d(o, {
        CollapsibleList: () => W,
        InboxDismissConfirmationModal: () => ue,
        InboxNoteCard: () => ce,
        InboxNotePlaceholder: () => me,
        List: () => P,
        ListItem: () => O,
        Navigation: () => pe,
        NavigationBackButton: () => de,
        NavigationGroup: () => fe,
        NavigationItem: () => ge,
        NavigationMenu: () => he,
        TaskItem: () => te,
        Text: () => ve,
        VerticalCSSTransition: () => K,
        useSlot: () => ye,
      });
    const e = window.wp.components;
    function t() {
      return (
        (t = Object.assign
          ? Object.assign.bind()
          : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
        t.apply(this, arguments)
      );
    }
    function r(e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        i = Object.keys(e);
      for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    }
    function i(e, t) {
      return (
        (i = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function(e, t) {
              return (e.__proto__ = t), e;
            }),
        i(e, t)
      );
    }
    function a(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), i(e, t);
    }
    function s(e, t) {
      return e
        .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
        .replace(/\s+/g, ' ')
        .replace(/^\s*|\s*$/g, '');
    }
    var l = n(99196),
      c = n.n(l),
      u = n(91850),
      m = n.n(u);
    const p = c().createContext(null);
    var d = function(e) {
        return e.scrollTop;
      },
      f = 'unmounted',
      h = 'exited',
      g = 'entering',
      v = 'entered',
      b = 'exiting',
      y = (function(e) {
        function t(t, n) {
          var o;
          o = e.call(this, t, n) || this;
          var r,
            i = n && !n.isMounting ? t.enter : t.appear;
          return (
            (o.appearStatus = null),
            t.in
              ? i
                ? ((r = h), (o.appearStatus = g))
                : (r = v)
              : (r = t.unmountOnExit || t.mountOnEnter ? f : h),
            (o.state = { status: r }),
            (o.nextCallback = null),
            o
          );
        }
        a(t, e),
          (t.getDerivedStateFromProps = function(e, t) {
            return e.in && t.status === f ? { status: h } : null;
          });
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
          }),
          (n.componentDidUpdate = function(e) {
            var t = null;
            if (e !== this.props) {
              var n = this.state.status;
              this.props.in ? n !== g && n !== v && (t = g) : (n !== g && n !== v) || (t = b);
            }
            this.updateStatus(!1, t);
          }),
          (n.componentWillUnmount = function() {
            this.cancelNextCallback();
          }),
          (n.getTimeouts = function() {
            var e,
              t,
              n,
              o = this.props.timeout;
            return (
              (e = t = n = o),
              null != o &&
                'number' != typeof o &&
                ((e = o.exit), (t = o.enter), (n = void 0 !== o.appear ? o.appear : t)),
              { exit: e, enter: t, appear: n }
            );
          }),
          (n.updateStatus = function(e, t) {
            if ((void 0 === e && (e = !1), null !== t))
              if ((this.cancelNextCallback(), t === g)) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  var n = this.props.nodeRef ? this.props.nodeRef.current : m().findDOMNode(this);
                  n && d(n);
                }
                this.performEnter(e);
              } else this.performExit();
            else
              this.props.unmountOnExit && this.state.status === h && this.setState({ status: f });
          }),
          (n.performEnter = function(e) {
            var t = this,
              n = this.props.enter,
              o = this.context ? this.context.isMounting : e,
              r = this.props.nodeRef ? [o] : [m().findDOMNode(this), o],
              i = r[0],
              a = r[1],
              s = this.getTimeouts(),
              l = o ? s.appear : s.enter;
            e || n
              ? (this.props.onEnter(i, a),
                this.safeSetState({ status: g }, function() {
                  t.props.onEntering(i, a),
                    t.onTransitionEnd(l, function() {
                      t.safeSetState({ status: v }, function() {
                        t.props.onEntered(i, a);
                      });
                    });
                }))
              : this.safeSetState({ status: v }, function() {
                  t.props.onEntered(i);
                });
          }),
          (n.performExit = function() {
            var e = this,
              t = this.props.exit,
              n = this.getTimeouts(),
              o = this.props.nodeRef ? void 0 : m().findDOMNode(this);
            t
              ? (this.props.onExit(o),
                this.safeSetState({ status: b }, function() {
                  e.props.onExiting(o),
                    e.onTransitionEnd(n.exit, function() {
                      e.safeSetState({ status: h }, function() {
                        e.props.onExited(o);
                      });
                    });
                }))
              : this.safeSetState({ status: h }, function() {
                  e.props.onExited(o);
                });
          }),
          (n.cancelNextCallback = function() {
            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (n.safeSetState = function(e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (n.setNextCallback = function(e) {
            var t = this,
              n = !0;
            return (
              (this.nextCallback = function(o) {
                n && ((n = !1), (t.nextCallback = null), e(o));
              }),
              (this.nextCallback.cancel = function() {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            var n = this.props.nodeRef ? this.props.nodeRef.current : m().findDOMNode(this),
              o = null == e && !this.props.addEndListener;
            if (n && !o) {
              if (this.props.addEndListener) {
                var r = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                  i = r[0],
                  a = r[1];
                this.props.addEndListener(i, a);
              }
              null != e && setTimeout(this.nextCallback, e);
            } else setTimeout(this.nextCallback, 0);
          }),
          (n.render = function() {
            var e = this.state.status;
            if (e === f) return null;
            var t = this.props,
              n = t.children,
              o =
                (t.in,
                t.mountOnEnter,
                t.unmountOnExit,
                t.appear,
                t.enter,
                t.exit,
                t.timeout,
                t.addEndListener,
                t.onEnter,
                t.onEntering,
                t.onEntered,
                t.onExit,
                t.onExiting,
                t.onExited,
                t.nodeRef,
                r(t, [
                  'children',
                  'in',
                  'mountOnEnter',
                  'unmountOnExit',
                  'appear',
                  'enter',
                  'exit',
                  'timeout',
                  'addEndListener',
                  'onEnter',
                  'onEntering',
                  'onEntered',
                  'onExit',
                  'onExiting',
                  'onExited',
                  'nodeRef',
                ]));
            return c().createElement(
              p.Provider,
              { value: null },
              'function' == typeof n ? n(e, o) : c().cloneElement(c().Children.only(n), o),
            );
          }),
          t
        );
      })(c().Component);
    function E() {}
    (y.contextType = p),
      (y.propTypes = {}),
      (y.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: E,
        onEntering: E,
        onEntered: E,
        onExit: E,
        onExiting: E,
        onExited: E,
      }),
      (y.UNMOUNTED = f),
      (y.EXITED = h),
      (y.ENTERING = g),
      (y.ENTERED = v),
      (y.EXITING = b);
    const x = y;
    var w = function(e, t) {
        return (
          e &&
          t &&
          t.split(' ').forEach(function(t) {
            return (
              (o = t),
              void ((n = e).classList
                ? n.classList.remove(o)
                : 'string' == typeof n.className
                ? (n.className = s(n.className, o))
                : n.setAttribute('class', s((n.className && n.className.baseVal) || '', o)))
            );
            var n, o;
          })
        );
      },
      _ = (function(e) {
        function n() {
          for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return (
            ((t = e.call.apply(e, [this].concat(o)) || this).appliedClasses = {
              appear: {},
              enter: {},
              exit: {},
            }),
            (t.onEnter = function(e, n) {
              var o = t.resolveArguments(e, n),
                r = o[0],
                i = o[1];
              t.removeClasses(r, 'exit'),
                t.addClass(r, i ? 'appear' : 'enter', 'base'),
                t.props.onEnter && t.props.onEnter(e, n);
            }),
            (t.onEntering = function(e, n) {
              var o = t.resolveArguments(e, n),
                r = o[0],
                i = o[1] ? 'appear' : 'enter';
              t.addClass(r, i, 'active'), t.props.onEntering && t.props.onEntering(e, n);
            }),
            (t.onEntered = function(e, n) {
              var o = t.resolveArguments(e, n),
                r = o[0],
                i = o[1] ? 'appear' : 'enter';
              t.removeClasses(r, i),
                t.addClass(r, i, 'done'),
                t.props.onEntered && t.props.onEntered(e, n);
            }),
            (t.onExit = function(e) {
              var n = t.resolveArguments(e)[0];
              t.removeClasses(n, 'appear'),
                t.removeClasses(n, 'enter'),
                t.addClass(n, 'exit', 'base'),
                t.props.onExit && t.props.onExit(e);
            }),
            (t.onExiting = function(e) {
              var n = t.resolveArguments(e)[0];
              t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
            }),
            (t.onExited = function(e) {
              var n = t.resolveArguments(e)[0];
              t.removeClasses(n, 'exit'),
                t.addClass(n, 'exit', 'done'),
                t.props.onExited && t.props.onExited(e);
            }),
            (t.resolveArguments = function(e, n) {
              return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
            }),
            (t.getClassNames = function(e) {
              var n = t.props.classNames,
                o = 'string' == typeof n,
                r = o ? (o && n ? n + '-' : '') + e : n[e];
              return {
                baseClassName: r,
                activeClassName: o ? r + '-active' : n[e + 'Active'],
                doneClassName: o ? r + '-done' : n[e + 'Done'],
              };
            }),
            t
          );
        }
        a(n, e);
        var o = n.prototype;
        return (
          (o.addClass = function(e, t, n) {
            var o = this.getClassNames(t)[n + 'ClassName'],
              r = this.getClassNames('enter').doneClassName;
            'appear' === t && 'done' === n && r && (o += ' ' + r),
              'active' === n && e && d(e),
              o &&
                ((this.appliedClasses[t][n] = o),
                (function(e, t) {
                  e &&
                    t &&
                    t.split(' ').forEach(function(t) {
                      return (
                        (o = t),
                        void ((n = e).classList
                          ? n.classList.add(o)
                          : (function(e, t) {
                              return e.classList
                                ? !!t && e.classList.contains(t)
                                : -1 !==
                                    (' ' + (e.className.baseVal || e.className) + ' ').indexOf(
                                      ' ' + t + ' ',
                                    );
                            })(n, o) ||
                            ('string' == typeof n.className
                              ? (n.className = n.className + ' ' + o)
                              : n.setAttribute(
                                  'class',
                                  ((n.className && n.className.baseVal) || '') + ' ' + o,
                                )))
                      );
                      var n, o;
                    });
                })(e, o));
          }),
          (o.removeClasses = function(e, t) {
            var n = this.appliedClasses[t],
              o = n.base,
              r = n.active,
              i = n.done;
            (this.appliedClasses[t] = {}), o && w(e, o), r && w(e, r), i && w(e, i);
          }),
          (o.render = function() {
            var e = this.props,
              n = (e.classNames, r(e, ['classNames']));
            return c().createElement(
              x,
              t({}, n, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited,
              }),
            );
          }),
          n
        );
      })(c().Component);
    (_.defaultProps = { classNames: '' }), (_.propTypes = {});
    const N = _,
      k = window.wp.element,
      T = window.wp.keycodes;
    var C = n(87608),
      S = n.n(C);
    const O = ({
      children: e,
      disableGutters: t = !1,
      animation: n = 'none',
      className: o = '',
      exit: r,
      enter: i,
      onExited: a,
      in: s,
      ...l
    }) => {
      const c = !!(null == l ? void 0 : l.onClick),
        u = c
          ? {
              role: 'button',
              onKeyDown: e => {
                return (
                  (t = e),
                  void ('function' == typeof (n = l.onClick) && t.keyCode === T.ENTER && n(t))
                );
                var t, n;
              },
              tabIndex: 0,
            }
          : {},
        m = S()({
          'has-action': c,
          'has-gutters': !t,
          'transitions-disabled': 'slide-right' !== n,
        });
      return (0, k.createElement)(
        N,
        {
          timeout: 500,
          classNames: o || 'woocommerce-list__item',
          in: s,
          exit: r,
          enter: i,
          onExited: a,
        },
        (0, k.createElement)(
          'li',
          { ...u, ...l, className: `woocommerce-experimental-list__item ${m} ${o}` },
          e,
        ),
      );
    };
    function A(e, t) {
      var n = Object.create(null);
      return (
        e &&
          l.Children.map(e, function(e) {
            return e;
          }).forEach(function(e) {
            n[e.key] = (function(e) {
              return t && (0, l.isValidElement)(e) ? t(e) : e;
            })(e);
          }),
        n
      );
    }
    function L(e, t, n) {
      return null != n[t] ? n[t] : e.props[t];
    }
    function D(e, t, n) {
      var o = A(e.children),
        r = (function(e, t) {
          function n(n) {
            return n in t ? t[n] : e[n];
          }
          (e = e || {}), (t = t || {});
          var o,
            r = Object.create(null),
            i = [];
          for (var a in e) a in t ? i.length && ((r[a] = i), (i = [])) : i.push(a);
          var s = {};
          for (var l in t) {
            if (r[l])
              for (o = 0; o < r[l].length; o++) {
                var c = r[l][o];
                s[r[l][o]] = n(c);
              }
            s[l] = n(l);
          }
          for (o = 0; o < i.length; o++) s[i[o]] = n(i[o]);
          return s;
        })(t, o);
      return (
        Object.keys(r).forEach(function(i) {
          var a = r[i];
          if ((0, l.isValidElement)(a)) {
            var s = i in t,
              c = i in o,
              u = t[i],
              m = (0, l.isValidElement)(u) && !u.props.in;
            !c || (s && !m)
              ? c || !s || m
                ? c &&
                  s &&
                  (0, l.isValidElement)(u) &&
                  (r[i] = (0, l.cloneElement)(a, {
                    onExited: n.bind(null, a),
                    in: u.props.in,
                    exit: L(a, 'exit', e),
                    enter: L(a, 'enter', e),
                  }))
                : (r[i] = (0, l.cloneElement)(a, { in: !1 }))
              : (r[i] = (0, l.cloneElement)(a, {
                  onExited: n.bind(null, a),
                  in: !0,
                  exit: L(a, 'exit', e),
                  enter: L(a, 'enter', e),
                }));
          }
        }),
        r
      );
    }
    var R =
        Object.values ||
        function(e) {
          return Object.keys(e).map(function(t) {
            return e[t];
          });
        },
      M = (function(e) {
        function n(t, n) {
          var o,
            r = (o = e.call(this, t, n) || this).handleExited.bind(
              (function(e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(o),
            );
          return (
            (o.state = { contextValue: { isMounting: !0 }, handleExited: r, firstRender: !0 }), o
          );
        }
        a(n, e);
        var o = n.prototype;
        return (
          (o.componentDidMount = function() {
            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
          }),
          (o.componentWillUnmount = function() {
            this.mounted = !1;
          }),
          (n.getDerivedStateFromProps = function(e, t) {
            var n,
              o,
              r = t.children,
              i = t.handleExited;
            return {
              children: t.firstRender
                ? ((n = e),
                  (o = i),
                  A(n.children, function(e) {
                    return (0,
                    l.cloneElement)(e, { onExited: o.bind(null, e), in: !0, appear: L(e, 'appear', n), enter: L(e, 'enter', n), exit: L(e, 'exit', n) });
                  }))
                : D(e, r, i),
              firstRender: !1,
            };
          }),
          (o.handleExited = function(e, n) {
            var o = A(this.props.children);
            e.key in o ||
              (e.props.onExited && e.props.onExited(n),
              this.mounted &&
                this.setState(function(n) {
                  var o = t({}, n.children);
                  return delete o[e.key], { children: o };
                }));
          }),
          (o.render = function() {
            var e = this.props,
              t = e.component,
              n = e.childFactory,
              o = r(e, ['component', 'childFactory']),
              i = this.state.contextValue,
              a = R(this.state.children).map(n);
            return (
              delete o.appear,
              delete o.enter,
              delete o.exit,
              null === t
                ? c().createElement(p.Provider, { value: i }, a)
                : c().createElement(p.Provider, { value: i }, c().createElement(t, o, a))
            );
          }),
          n
        );
      })(c().Component);
    (M.propTypes = {}),
      (M.defaultProps = {
        component: 'div',
        childFactory: function(e) {
          return e;
        },
      });
    const I = M,
      P = ({ children: e, listType: t, animation: n = 'none', ...o }) =>
        (0, k.createElement)(
          I,
          { component: t || 'ul', className: 'woocommerce-experimental-list', ...o },
          k.Children.map(e, e => {
            if ((0, k.isValidElement)(e)) {
              const { onExited: t, in: o, enter: r, exit: i, ...a } = e.props,
                s = a.animation || n;
              return (0, k.createElement)(
                N,
                {
                  timeout: 500,
                  onExited: t,
                  in: o,
                  enter: r,
                  exit: i,
                  classNames: 'woocommerce-list__item',
                },
                (0, k.cloneElement)(e, { animation: s, ...a }),
              );
            }
            return e;
          }),
        ),
      j = function(e) {
        let { icon: t, size: n = 24, ...o } = e;
        return (0, k.cloneElement)(t, { width: n, height: n, ...o });
      },
      z = window.wp.primitives,
      H = (0, k.createElement)(
        z.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, k.createElement)(z.Path, { d: 'M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z' }),
      ),
      B = (0, k.createElement)(
        z.SVG,
        { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
        (0, k.createElement)(z.Path, { d: 'M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z' }),
      ),
      F = {
        transitionProperty: 'max-height',
        transitionDuration: '500ms',
        maxHeight: 0,
        overflow: 'hidden',
      };
    function U(e, t, n) {
      if (n.length < e.length) {
        const e = n.map(e => e.key);
        return t.filter(t => t.key && e.includes(t.key));
      }
      const o = t.map(e => e.key),
        r = e.map(e => e.key);
      return n.filter(e => e.key && (o.includes(e.key) || !r.includes(e.key)));
    }
    const W = ({
        children: e,
        collapsed: t = !0,
        collapseLabel: n,
        expandLabel: o,
        show: r = 0,
        onCollapse: i,
        onExpand: a,
        direction: s = 'up',
        ...l
      }) => {
        const [c, u] = (0, k.useState)(t),
          [m, p] = (0, k.useState)(t),
          [d, f] = (0, k.useState)({ collapse: n, expand: o }),
          [h, g] = (0, k.useState)({ all: [], shown: [], hidden: [] }),
          v = (0, k.useRef)(null),
          b = () => {
            let t = [];
            const i =
              k.Children.map(e, e => ((0, k.isValidElement)(e) && 'key' in e ? e : null)) || [];
            let a = i;
            r > 0 && ((t = i.slice(0, r)), (a = i.slice(r))),
              a.length > 0 && f({ expand: o, collapse: n }),
              g({ all: i, shown: t, hidden: a });
          };
        (0, k.useEffect)(() => {
          p(c);
        }, [c]),
          (0, k.useEffect)(() => {
            const t =
              k.Children.map(e, e => ((0, k.isValidElement)(e) && 'key' in e ? e : null)) || [];
            h.all.length > 0 && c && 'none' !== l.animation
              ? (g({ ...h, shown: U(h.all, h.shown, t) }),
                setTimeout(() => {
                  b();
                }, 500))
              : b();
          }, [e]);
        const y = (0, k.useCallback)(() => {
            var e;
            u(!c), (e = !c), i && e && i(), a && !e && a();
          }, [c]),
          E = S()(l.className || '', 'woocommerce-experimental-list'),
          w = S()({ 'woocommerce-experimental-list-wrapper': !c }),
          _ =
            h.hidden.length > 0
              ? (0, k.createElement)(
                  O,
                  {
                    key: 'collapse-item',
                    className: 'list-item-collapse',
                    onClick: y,
                    animation: 'none',
                    disableGutters: !0,
                  },
                  (0, k.createElement)('p', null, c ? d.expand : d.collapse),
                  (0, k.createElement)(j, {
                    className: 'list-item-collapse__icon',
                    size: 30,
                    icon: c ? H : B,
                  }),
                )
              : null;
        return (0, k.createElement)(P, { ...l, className: E }, [
          'down' === s && _,
          ...h.shown,
          (0, k.createElement)(
            x,
            {
              key: 'remaining-children',
              timeout: 500,
              in: !m,
              mountOnEnter: !0,
              unmountOnExit: !1,
            },
            e => {
              const t = ((e, t, n) => {
                let o = 0;
                ('entered' !== e && 'entering' !== e) ||
                  !n ||
                  (o = (function(e) {
                    let t = 0;
                    if (e)
                      for (const n of e.children) {
                        t += n.clientHeight;
                        const e = window.getComputedStyle(n);
                        (t += parseInt(e.marginTop, 10) || 0),
                          (t += parseInt(e.marginBottom, 10) || 0);
                      }
                    return t;
                  })(n));
                const r = { ...F, maxHeight: o };
                return (
                  'entering' !== e &&
                    'exiting' !== e &&
                    (delete r.transitionDuration, delete r.transition, delete r.transitionProperty),
                  'entered' !== e || t || delete r.maxHeight,
                  r
                );
              })(e, c, v.current);
              return (0, k.createElement)(
                'div',
                { className: w, ref: v, style: t },
                (0, k.createElement)(
                  I,
                  { className: 'woocommerce-experimental-list' },
                  k.Children.map(h.hidden, e => {
                    const { onExited: t, in: n, enter: o, exit: r, ...i } = e.props,
                      a = i.animation || l.animation;
                    return (0, k.createElement)(
                      N,
                      {
                        key: e.key,
                        timeout: 500,
                        onExited: t,
                        in: n,
                        enter: o,
                        exit: r,
                        classNames: 'woocommerce-list__item',
                      },
                      (0, k.cloneElement)(e, { animation: a, ...i }),
                    );
                  }),
                ),
              );
            },
          ),
          'up' === s && _,
        ]);
      },
      V = window.wp.i18n,
      G = (0, k.createElement)(
        z.SVG,
        { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
        (0, k.createElement)(z.Path, { d: 'M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z' }),
      );
    var q = n(10130);
    const $ = window.wc.components;
    var Y = n(33561);
    const K = ({ children: e, defaultStyle: t, ...n }) => {
        const [o, r] = (0, k.useState)(0),
          [i, a] = (0, k.useState)(n.in || !1),
          s = (0, k.useRef)(null),
          l = (0, k.useCallback)(
            e => {
              e &&
                r(
                  (function(e) {
                    let t = 0;
                    for (const n of e.children) {
                      t += n.clientHeight;
                      const e = window.getComputedStyle(n);
                      (t += parseInt(e.marginTop, 10) || 0),
                        (t += parseInt(e.marginBottom, 10) || 0);
                    }
                    return t;
                  })(e),
                );
            },
            [e],
          );
        (0, k.useEffect)(() => {
          a(n.in || !1);
        }, [n.in]);
        const c = {
            entered: { maxHeight: o },
            entering: { maxHeight: o },
            exiting: { maxHeight: 0 },
            exited: { maxHeight: 0 },
          },
          u = e => {
            const o = (() => {
                const { timeout: e } = n;
                let t, o, r;
                return (
                  'number' == typeof e && (t = o = r = e),
                  void 0 !== e &&
                    'number' != typeof e &&
                    ((t = e.exit), (o = e.enter), (r = void 0 !== e.appear ? e.appear : o)),
                  { exit: t, enter: o, appear: r }
                );
              })(),
              r = s.current && s.current.context && s.current.context.isMounting;
            let i;
            i = e.startsWith('enter') ? o[r ? 'enter' : 'appear'] : o.exit;
            const a = {
              transitionProperty: 'max-height',
              transitionDuration: void 0 === i ? '500ms' : i + 'ms',
              overflow: 'hidden',
              ...(t || {}),
              ...c[e],
            };
            return (
              'entering' !== e &&
                'exiting' !== e &&
                (delete a.transitionDuration, delete a.transition, delete a.transitionProperty),
              'entered' === e && n.in && delete a.maxHeight,
              a
            );
          };
        return (0, k.createElement)(N, { ...n, in: i, ref: s }, t =>
          (0, k.createElement)(
            'div',
            { className: 'vertical-css-transition-container', style: u(t), ref: l },
            e,
          ),
        );
      },
      X = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
      Z = ['target', 'href', 'rel', 'name', 'download'],
      J = e => ({ __html: (0, Y.sanitize)(e, { ALLOWED_TAGS: X, ALLOWED_ATTR: Z }) }),
      Q = ({ level: t, completed: n, children: o }) => {
        let r = '';
        return (
          1 !== t || n
            ? 2 !== t ||
              n ||
              (r = (0, V.__)('This task is required to set up your extension', 'woocommerce'))
            : (r = (0, V.__)('This task is required to keep your store running', 'woocommerce')),
          '' === r ? o : (0, k.createElement)(e.Tooltip, { text: r }, o)
        );
      },
      ee = ({ children: e, expandable: t, expanded: n }) =>
        t
          ? (0, k.createElement)(
              K,
              {
                timeout: 500,
                in: n,
                classNames: 'woocommerce-task-list__item-expandable-content',
                defaultStyle: { transitionProperty: 'max-height, opacity' },
              },
              e,
            )
          : n
          ? (0, k.createElement)(k.Fragment, null, e)
          : null,
      te = ({
        completed: t,
        title: n,
        badge: o,
        onDelete: r,
        onCollapse: i,
        onDismiss: a,
        onSnooze: s,
        onExpand: l,
        onClick: c,
        additionalInfo: u,
        time: m,
        content: p,
        expandable: d = !1,
        expanded: f = !1,
        showActionButton: h,
        level: g = 3,
        action: v,
        actionLabel: b,
        ...y
      }) => {
        const [E, x] = (0, k.useState)(f);
        (0, k.useEffect)(() => {
          x(f);
        }, [f]);
        const w = S()('woocommerce-task-list__item', {
          complete: t,
          expanded: E,
          'level-2': 2 === g && !t,
          'level-1': 1 === g && !t,
        });
        void 0 === h && (h = d);
        const _ = ((a || s) && !t) || (r && t);
        return (0, k.createElement)(
          O,
          {
            disableGutters: !0,
            className: w,
            onClick:
              d && h
                ? () => {
                    x(!E), E && l && l(), !E && i && i();
                  }
                : c,
            ...y,
          },
          (0, k.createElement)(
            Q,
            { level: g, completed: t },
            (0, k.createElement)(
              'div',
              { className: 'woocommerce-task-list__item-before' },
              1 !== g || t
                ? (0, k.createElement)(
                    'div',
                    { className: 'woocommerce-task__icon' },
                    t && (0, k.createElement)(j, { icon: G }),
                  )
                : (0, k.createElement)(q.Z, { size: 36 }),
            ),
          ),
          (0, k.createElement)(
            'div',
            { className: 'woocommerce-task-list__item-text' },
            (0, k.createElement)(
              ve,
              {
                as: 'div',
                size: '14',
                lineHeight: t ? '18px' : '20px',
                weight: t ? 'normal' : '600',
                variant: t ? 'body.small' : 'button',
              },
              (0, k.createElement)(
                'span',
                { className: 'woocommerce-task-list__item-title' },
                n,
                o &&
                  (0, k.createElement)(
                    'span',
                    { className: 'woocommerce-task-list__item-badge' },
                    o,
                  ),
              ),
              (0, k.createElement)(
                ee,
                { expandable: d, expanded: E },
                (0, k.createElement)(
                  'div',
                  { className: 'woocommerce-task-list__item-expandable-content' },
                  p,
                  d &&
                    !t &&
                    u &&
                    (0, k.createElement)('div', {
                      className: 'woocommerce-task__additional-info',
                      dangerouslySetInnerHTML: J(u),
                    }),
                  !t &&
                    h &&
                    (0, k.createElement)(
                      e.Button,
                      {
                        className: 'woocommerce-task-list__item-action',
                        isPrimary: !0,
                        onClick: e => {
                          e.stopPropagation(), v(e, { isExpanded: !0 });
                        },
                      },
                      b || n,
                    ),
                ),
              ),
              !d &&
                !t &&
                u &&
                (0, k.createElement)('div', {
                  className: 'woocommerce-task__additional-info',
                  dangerouslySetInnerHTML: J(u),
                }),
              m &&
                (0, k.createElement)('div', { className: 'woocommerce-task__estimated-time' }, m),
            ),
          ),
          _ &&
            (0, k.createElement)($.EllipsisMenu, {
              label: (0, V.__)('Task Options', 'woocommerce'),
              className: 'woocommerce-task-list__item-after',
              onToggle: e => e.stopPropagation(),
              renderContent: () =>
                (0, k.createElement)(
                  'div',
                  { className: 'woocommerce-task-card__section-controls' },
                  a &&
                    !t &&
                    (0, k.createElement)(
                      e.Button,
                      {
                        onClick: e => {
                          e.stopPropagation(), a();
                        },
                      },
                      (0, V.__)('Dismiss', 'woocommerce'),
                    ),
                  s &&
                    !t &&
                    (0, k.createElement)(
                      e.Button,
                      {
                        onClick: e => {
                          e.stopPropagation(), s();
                        },
                      },
                      (0, V.__)('Remind me later', 'woocommerce'),
                    ),
                  r &&
                    t &&
                    (0, k.createElement)(
                      e.Button,
                      {
                        onClick: e => {
                          e.stopPropagation(), r();
                        },
                      },
                      (0, V.__)('Delete', 'woocommerce'),
                    ),
                ),
            }),
        );
      };
    var ne = n(66338),
      oe = n.n(ne);
    const re = window.moment;
    var ie = n.n(re);
    const ae = ({ label: t, onClick: n, href: o, preventBusyState: r, variant: i = 'link' }) => {
        const [a, s] = (0, k.useState)(!1);
        return (0, k.createElement)(
          e.Button,
          {
            className: 'woocommerce-inbox-note__action-button',
            isSecondary: 'secondary' === i,
            isLink: 'link' === i,
            isBusy: a,
            disabled: a,
            href: o,
            onClick: e => {
              const t = e.currentTarget.href || '';
              let o = !0,
                i = '';
              window.wcSettings && (i = window.wcSettings.adminUrl),
                !t.length ||
                  (i && t.startsWith(i)) ||
                  (e.preventDefault(), (o = !1), window.open(t, '_blank')),
                r && (o = !1),
                s(o),
                n();
            },
          },
          (0, k.createElement)('span', null, t),
        );
      },
      se = ['a', 'b', 'em', 'i', 'strong', 'p', 'br'],
      le = ['target', 'href', 'rel', 'name', 'download'],
      ce = ({
        note: t,
        onDismiss: n,
        onNoteActionClick: o,
        onBodyLinkClick: r,
        onNoteVisible: i,
        className: a,
      }) => {
        var s;
        const [l, c] = (0, k.useState)(!1),
          u = (0, k.useRef)(!1),
          m = (function(e) {
            const t = (0, k.useCallback)(
                t => {
                  const n = t.target;
                  if (n && 'href' in n) {
                    const t = n.href;
                    t && e && e(t);
                  }
                },
                [e],
              ),
              n = (0, k.useRef)(null);
            return (
              (0, k.useEffect)(() => {
                const e = n.current;
                return (
                  e && e.addEventListener('click', t),
                  () => {
                    e && e.removeEventListener('click', t);
                  }
                );
              }, [t]),
              (0, k.useCallback)(e => {
                n.current = e;
              }, [])
            );
          })(e => {
            r && r(t, e);
          }),
          p = e => {
            o && o(t, e), e.actioned_text && c(e.actioned_text);
          },
          {
            content: d,
            date_created_gmt: f,
            image: h,
            is_deleted: g,
            layout: v,
            status: b,
            title: y,
            is_read: E,
          } = t;
        if (g) return null;
        const x = !1 === E,
          w = 'thumbnail' === v,
          _ = S()('woocommerce-inbox-message', a, v, {
            'message-is-unread': x && 'unactioned' === b,
          }),
          N = S()('woocommerce-inbox-message__actions', {
            'has-multiple-actions':
              (null === (s = t.actions) || void 0 === s ? void 0 : s.length) > 1,
          });
        return (0, k.createElement)(
          oe(),
          {
            onChange: e => {
              e && !u.current && (i && i(t), (u.current = !0));
            },
          },
          (0, k.createElement)(
            'section',
            { className: _ },
            w &&
              (0, k.createElement)(
                'div',
                { className: 'woocommerce-inbox-message__image' },
                (0, k.createElement)('img', { src: h, alt: '' }),
              ),
            (0, k.createElement)(
              'div',
              { className: 'woocommerce-inbox-message__wrapper' },
              (0, k.createElement)(
                'div',
                { className: 'woocommerce-inbox-message__content' },
                x &&
                  (0, k.createElement)('div', {
                    className: 'woocommerce-inbox-message__unread-indicator',
                  }),
                f &&
                  (0, k.createElement)(
                    'span',
                    { className: 'woocommerce-inbox-message__date' },
                    ie()
                      .utc(f)
                      .fromNow(),
                  ),
                (0, k.createElement)(
                  $.H,
                  { className: 'woocommerce-inbox-message__title' },
                  t.actions &&
                    1 === t.actions.length &&
                    (0, k.createElement)(ae, {
                      key: t.actions[0].id,
                      label: y,
                      preventBusyState: !0,
                      variant: 'link',
                      href: t.actions[0].url && t.actions[0].url.length ? t.actions[0].url : void 0,
                      onClick: () => p(t.actions[0]),
                    }),
                  t.actions && t.actions.length > 1 && y,
                ),
                (0, k.createElement)(
                  $.Section,
                  { className: 'woocommerce-inbox-message__text' },
                  (0, k.createElement)('span', {
                    dangerouslySetInnerHTML:
                      ((T = d),
                      { __html: (0, Y.sanitize)(T, { ALLOWED_TAGS: se, ALLOWED_ATTR: le }) }),
                    ref: m,
                  }),
                ),
              ),
              (0, k.createElement)(
                'div',
                { className: N },
                (() => {
                  const { actions: e } = t;
                  return (
                    l ||
                    (e
                      ? (0, k.createElement)(
                          k.Fragment,
                          null,
                          e.map(e =>
                            (0, k.createElement)(ae, {
                              key: e.id,
                              label: e.label,
                              variant: 'secondary',
                              href: e && e.url && e.url.length ? e.url : void 0,
                              onClick: () => p(e),
                            }),
                          ),
                        )
                      : void 0)
                  );
                })(),
                l
                  ? null
                  : (0, k.createElement)(
                      e.Button,
                      {
                        className: 'woocommerce-admin-dismiss-notification',
                        onClick: () => n && n(t),
                      },
                      (0, V.__)('Dismiss', 'woocommerce'),
                    ),
              ),
            ),
          ),
        );
        var T;
      },
      ue = ({
        onClose: t,
        onDismiss: n,
        buttonLabel: o = (0, V.__)("Yes, I'm sure", 'woocommerce'),
      }) => {
        const [r, i] = (0, k.useState)(!1);
        return (0, k.createElement)(
          e.Modal,
          {
            title: (0, V.__)('Are you sure?', 'woocommerce'),
            onRequestClose: () => t(),
            className: 'woocommerce-inbox-dismiss-confirmation_modal',
          },
          (0, k.createElement)(
            'div',
            { className: 'woocommerce-inbox-dismiss-confirmation_wrapper' },
            (0, k.createElement)(
              'p',
              null,
              (0, V.__)('Dismissed messages cannot be viewed again', 'woocommerce'),
            ),
            (0, k.createElement)(
              'div',
              { className: 'woocommerce-inbox-dismiss-confirmation_buttons' },
              (0, k.createElement)(
                e.Button,
                { isSecondary: !0, onClick: () => t() },
                (0, V.__)('Cancel', 'woocommerce'),
              ),
              (0, k.createElement)(
                e.Button,
                {
                  isSecondary: !0,
                  isBusy: r,
                  disabled: r,
                  onClick: () => {
                    i(!0), n();
                  },
                },
                o,
              ),
            ),
          ),
        );
      },
      me = ({ className: e }) =>
        (0, k.createElement)(
          'div',
          { className: `woocommerce-inbox-message is-placeholder ${e}`, 'aria-hidden': !0 },
          (0, k.createElement)(
            'div',
            { className: 'woocommerce-inbox-message__wrapper' },
            (0, k.createElement)(
              'div',
              { className: 'woocommerce-inbox-message__content' },
              (0, k.createElement)(
                'div',
                { className: 'woocommerce-inbox-message__date' },
                (0, k.createElement)('div', { className: 'sixth-line' }),
              ),
              (0, k.createElement)(
                'div',
                { className: 'woocommerce-inbox-message__title' },
                (0, k.createElement)('div', { className: 'line' }),
                (0, k.createElement)('div', { className: 'line' }),
              ),
              (0, k.createElement)(
                'div',
                { className: 'woocommerce-inbox-message__text' },
                (0, k.createElement)('div', { className: 'line' }),
                (0, k.createElement)('div', { className: 'third-line' }),
              ),
            ),
            (0, k.createElement)(
              'div',
              { className: 'woocommerce-inbox-message__actions' },
              (0, k.createElement)('div', { className: 'fifth-line' }),
              (0, k.createElement)('div', { className: 'fifth-line' }),
            ),
          ),
        ),
      pe = e.Navigation || e.__experimentalNavigation,
      de = e.NavigationBackButton || e.__experimentalNavigationBackButton,
      fe = e.NavigationGroup || e.__experimentalNavigationGroup,
      he = e.NavigationMenu || e.__experimentalNavigationMenu,
      ge = e.NavigationItem || e.__experimentalNavigationItem,
      ve = e.Text || e.__experimentalText,
      be = e.__experimentalUseSlotFills || (() => null),
      ye = t => {
        const n = (e.useSlot || e.__experimentalUseSlot)(t),
          o = be(t);
        return 'function' == typeof e.__experimentalUseSlotFills ? { ...n, fills: o } : n;
      };
  })(),
    ((window.wc = window.wc || {}).experimental = o);
})();
