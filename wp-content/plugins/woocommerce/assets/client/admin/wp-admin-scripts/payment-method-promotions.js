/*! For license information please see payment-method-promotions.js.LICENSE.txt */
(() => {
  var e = {
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
          function n(e, r, a) {
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
                : function(e, n, r) {
                    var a = [null];
                    a.push.apply(a, n);
                    var o = new (Function.bind.apply(e, a))();
                    return r && t(o, r.prototype), o;
                  }),
              n.apply(null, arguments)
            );
          }
          function r(e) {
            return (
              (function(e) {
                if (Array.isArray(e)) return a(e);
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
                  if ('string' == typeof e) return a(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? a(e, t)
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
          function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          var o = Object.hasOwnProperty,
            i = Object.setPrototypeOf,
            l = Object.isFrozen,
            c = Object.getPrototypeOf,
            s = Object.getOwnPropertyDescriptor,
            m = Object.freeze,
            u = Object.seal,
            p = Object.create,
            d = 'undefined' != typeof Reflect && Reflect,
            f = d.apply,
            g = d.construct;
          f ||
            (f = function(e, t, n) {
              return e.apply(t, n);
            }),
            m ||
              (m = function(e) {
                return e;
              }),
            u ||
              (u = function(e) {
                return e;
              }),
            g ||
              (g = function(e, t) {
                return n(e, r(t));
              });
          var h,
            y = k(Array.prototype.forEach),
            b = k(Array.prototype.pop),
            w = k(Array.prototype.push),
            N = k(String.prototype.toLowerCase),
            E = k(String.prototype.toString),
            v = k(String.prototype.match),
            T = k(String.prototype.replace),
            _ = k(String.prototype.indexOf),
            A = k(String.prototype.trim),
            S = k(RegExp.prototype.test),
            x =
              ((h = TypeError),
              function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return g(h, t);
              });
          function k(e) {
            return function(t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                r[a - 1] = arguments[a];
              return f(e, t, r);
            };
          }
          function L(e, t, n) {
            var r;
            (n = null !== (r = n) && void 0 !== r ? r : N), i && i(e, null);
            for (var a = t.length; a--; ) {
              var o = t[a];
              if ('string' == typeof o) {
                var c = n(o);
                c !== o && (l(t) || (t[a] = c), (o = c));
              }
              e[o] = !0;
            }
            return e;
          }
          function M(e) {
            var t,
              n = p(null);
            for (t in e) !0 === f(o, e, [t]) && (n[t] = e[t]);
            return n;
          }
          function O(e, t) {
            for (; null !== e; ) {
              var n = s(e, t);
              if (n) {
                if (n.get) return k(n.get);
                if ('function' == typeof n.value) return k(n.value);
              }
              e = c(e);
            }
            return function(e) {
              return console.warn('fallback value for', e), null;
            };
          }
          var D = m([
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
            C = m([
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
            R = m([
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
            I = m([
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
            F = m([
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
            H = m([
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
            U = m(['#text']),
            P = m([
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
            z = m([
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
            B = m([
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
            G = m(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']),
            j = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
            W = u(/<%[\w\W]*|[\w\W]*%>/gm),
            Y = u(/\${[\w\W]*}/gm),
            q = u(/^data-[\-\w.\u00B7-\uFFFF]/),
            $ = u(/^aria-[\-\w]+$/),
            K = u(
              /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
            ),
            V = u(/^(?:\w+script|data):/i),
            X = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            Z = u(/^html$/i),
            J = function() {
              return 'undefined' == typeof window ? null : window;
            };
          return (function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
              a = function(e) {
                return t(e);
              };
            if (
              ((a.version = '2.4.7'),
              (a.removed = []),
              !n || !n.document || 9 !== n.document.nodeType)
            )
              return (a.isSupported = !1), a;
            var o = n.document,
              i = n.document,
              l = n.DocumentFragment,
              c = n.HTMLTemplateElement,
              s = n.Node,
              u = n.Element,
              p = n.NodeFilter,
              d = n.NamedNodeMap,
              f = void 0 === d ? n.NamedNodeMap || n.MozNamedAttrMap : d,
              g = n.HTMLFormElement,
              h = n.DOMParser,
              k = n.trustedTypes,
              Q = u.prototype,
              ee = O(Q, 'cloneNode'),
              te = O(Q, 'nextSibling'),
              ne = O(Q, 'childNodes'),
              re = O(Q, 'parentNode');
            if ('function' == typeof c) {
              var ae = i.createElement('template');
              ae.content && ae.content.ownerDocument && (i = ae.content.ownerDocument);
            }
            var oe = (function(t, n) {
                if ('object' !== e(t) || 'function' != typeof t.createPolicy) return null;
                var r = null,
                  a = 'data-tt-policy-suffix';
                n.currentScript &&
                  n.currentScript.hasAttribute(a) &&
                  (r = n.currentScript.getAttribute(a));
                var o = 'dompurify' + (r ? '#' + r : '');
                try {
                  return t.createPolicy(o, {
                    createHTML: function(e) {
                      return e;
                    },
                    createScriptURL: function(e) {
                      return e;
                    },
                  });
                } catch (e) {
                  return console.warn('TrustedTypes policy ' + o + ' could not be created.'), null;
                }
              })(k, o),
              ie = oe ? oe.createHTML('') : '',
              le = i,
              ce = le.implementation,
              se = le.createNodeIterator,
              me = le.createDocumentFragment,
              ue = le.getElementsByTagName,
              pe = o.importNode,
              de = {};
            try {
              de = M(i).documentMode ? i.documentMode : {};
            } catch (e) {}
            var fe = {};
            a.isSupported =
              'function' == typeof re && ce && void 0 !== ce.createHTMLDocument && 9 !== de;
            var ge,
              he,
              ye = j,
              be = W,
              we = Y,
              Ne = q,
              Ee = $,
              ve = V,
              Te = X,
              _e = K,
              Ae = null,
              Se = L({}, [].concat(r(D), r(C), r(R), r(F), r(U))),
              xe = null,
              ke = L({}, [].concat(r(P), r(z), r(B), r(G))),
              Le = Object.seal(
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
              Me = null,
              Oe = null,
              De = !0,
              Ce = !0,
              Re = !1,
              Ie = !0,
              Fe = !1,
              He = !1,
              Ue = !1,
              Pe = !1,
              ze = !1,
              Be = !1,
              Ge = !1,
              je = !0,
              We = !1,
              Ye = !0,
              qe = !1,
              $e = {},
              Ke = null,
              Ve = L({}, [
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
              Ze = L({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
              Je = null,
              Qe = L({}, [
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
              rt = nt,
              at = !1,
              ot = null,
              it = L({}, [et, tt, nt], E),
              lt = ['application/xhtml+xml', 'text/html'],
              ct = null,
              st = i.createElement('form'),
              mt = function(e) {
                return e instanceof RegExp || e instanceof Function;
              },
              ut = function(t) {
                (ct && ct === t) ||
                  ((t && 'object' === e(t)) || (t = {}),
                  (t = M(t)),
                  (ge = ge =
                    -1 === lt.indexOf(t.PARSER_MEDIA_TYPE) ? 'text/html' : t.PARSER_MEDIA_TYPE),
                  (he = 'application/xhtml+xml' === ge ? E : N),
                  (Ae = 'ALLOWED_TAGS' in t ? L({}, t.ALLOWED_TAGS, he) : Se),
                  (xe = 'ALLOWED_ATTR' in t ? L({}, t.ALLOWED_ATTR, he) : ke),
                  (ot = 'ALLOWED_NAMESPACES' in t ? L({}, t.ALLOWED_NAMESPACES, E) : it),
                  (Je = 'ADD_URI_SAFE_ATTR' in t ? L(M(Qe), t.ADD_URI_SAFE_ATTR, he) : Qe),
                  (Xe = 'ADD_DATA_URI_TAGS' in t ? L(M(Ze), t.ADD_DATA_URI_TAGS, he) : Ze),
                  (Ke = 'FORBID_CONTENTS' in t ? L({}, t.FORBID_CONTENTS, he) : Ve),
                  (Me = 'FORBID_TAGS' in t ? L({}, t.FORBID_TAGS, he) : {}),
                  (Oe = 'FORBID_ATTR' in t ? L({}, t.FORBID_ATTR, he) : {}),
                  ($e = 'USE_PROFILES' in t && t.USE_PROFILES),
                  (De = !1 !== t.ALLOW_ARIA_ATTR),
                  (Ce = !1 !== t.ALLOW_DATA_ATTR),
                  (Re = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Ie = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                  (Fe = t.SAFE_FOR_TEMPLATES || !1),
                  (He = t.WHOLE_DOCUMENT || !1),
                  (ze = t.RETURN_DOM || !1),
                  (Be = t.RETURN_DOM_FRAGMENT || !1),
                  (Ge = t.RETURN_TRUSTED_TYPE || !1),
                  (Pe = t.FORCE_BODY || !1),
                  (je = !1 !== t.SANITIZE_DOM),
                  (We = t.SANITIZE_NAMED_PROPS || !1),
                  (Ye = !1 !== t.KEEP_CONTENT),
                  (qe = t.IN_PLACE || !1),
                  (_e = t.ALLOWED_URI_REGEXP || _e),
                  (rt = t.NAMESPACE || nt),
                  (Le = t.CUSTOM_ELEMENT_HANDLING || {}),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (Le.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (Le.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    'boolean' == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                    (Le.allowCustomizedBuiltInElements =
                      t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  Fe && (Ce = !1),
                  Be && (ze = !0),
                  $e &&
                    ((Ae = L({}, r(U))),
                    (xe = []),
                    !0 === $e.html && (L(Ae, D), L(xe, P)),
                    !0 === $e.svg && (L(Ae, C), L(xe, z), L(xe, G)),
                    !0 === $e.svgFilters && (L(Ae, R), L(xe, z), L(xe, G)),
                    !0 === $e.mathMl && (L(Ae, F), L(xe, B), L(xe, G))),
                  t.ADD_TAGS && (Ae === Se && (Ae = M(Ae)), L(Ae, t.ADD_TAGS, he)),
                  t.ADD_ATTR && (xe === ke && (xe = M(xe)), L(xe, t.ADD_ATTR, he)),
                  t.ADD_URI_SAFE_ATTR && L(Je, t.ADD_URI_SAFE_ATTR, he),
                  t.FORBID_CONTENTS && (Ke === Ve && (Ke = M(Ke)), L(Ke, t.FORBID_CONTENTS, he)),
                  Ye && (Ae['#text'] = !0),
                  He && L(Ae, ['html', 'head', 'body']),
                  Ae.table && (L(Ae, ['tbody']), delete Me.tbody),
                  m && m(t),
                  (ct = t));
              },
              pt = L({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
              dt = L({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
              ft = L({}, ['title', 'style', 'font', 'a', 'script']),
              gt = L({}, C);
            L(gt, R), L(gt, I);
            var ht = L({}, F);
            L(ht, H);
            var yt = function(e) {
                w(a.removed, { element: e });
                try {
                  e.parentNode.removeChild(e);
                } catch (t) {
                  try {
                    e.outerHTML = ie;
                  } catch (t) {
                    e.remove();
                  }
                }
              },
              bt = function(e, t) {
                try {
                  w(a.removed, { attribute: t.getAttributeNode(e), from: t });
                } catch (e) {
                  w(a.removed, { attribute: null, from: t });
                }
                if ((t.removeAttribute(e), 'is' === e && !xe[e]))
                  if (ze || Be)
                    try {
                      yt(t);
                    } catch (e) {}
                  else
                    try {
                      t.setAttribute(e, '');
                    } catch (e) {}
              },
              wt = function(e) {
                var t, n;
                if (Pe) e = '<remove></remove>' + e;
                else {
                  var r = v(e, /^[\r\n\t ]+/);
                  n = r && r[0];
                }
                'application/xhtml+xml' === ge &&
                  rt === nt &&
                  (e =
                    '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                    e +
                    '</body></html>');
                var a = oe ? oe.createHTML(e) : e;
                if (rt === nt)
                  try {
                    t = new h().parseFromString(a, ge);
                  } catch (e) {}
                if (!t || !t.documentElement) {
                  t = ce.createDocument(rt, 'template', null);
                  try {
                    t.documentElement.innerHTML = at ? ie : a;
                  } catch (e) {}
                }
                var o = t.body || t.documentElement;
                return (
                  e && n && o.insertBefore(i.createTextNode(n), o.childNodes[0] || null),
                  rt === nt ? ue.call(t, He ? 'html' : 'body')[0] : He ? t.documentElement : o
                );
              },
              Nt = function(e) {
                return se.call(
                  e.ownerDocument || e,
                  e,
                  p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT,
                  null,
                  !1,
                );
              },
              Et = function(t) {
                return 'object' === e(s)
                  ? t instanceof s
                  : t &&
                      'object' === e(t) &&
                      'number' == typeof t.nodeType &&
                      'string' == typeof t.nodeName;
              },
              vt = function(e, t, n) {
                fe[e] &&
                  y(fe[e], function(e) {
                    e.call(a, t, n, ct);
                  });
              },
              Tt = function(e) {
                var t, n;
                if (
                  (vt('beforeSanitizeElements', e, null),
                  (n = e) instanceof g &&
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
                  return yt(e), !0;
                if (S(/[\u0080-\uFFFF]/, e.nodeName)) return yt(e), !0;
                var r = he(e.nodeName);
                if (
                  (vt('uponSanitizeElement', e, { tagName: r, allowedTags: Ae }),
                  e.hasChildNodes() &&
                    !Et(e.firstElementChild) &&
                    (!Et(e.content) || !Et(e.content.firstElementChild)) &&
                    S(/<[/\w]/g, e.innerHTML) &&
                    S(/<[/\w]/g, e.textContent))
                )
                  return yt(e), !0;
                if ('select' === r && S(/<template/i, e.innerHTML)) return yt(e), !0;
                if (!Ae[r] || Me[r]) {
                  if (!Me[r] && At(r)) {
                    if (Le.tagNameCheck instanceof RegExp && S(Le.tagNameCheck, r)) return !1;
                    if (Le.tagNameCheck instanceof Function && Le.tagNameCheck(r)) return !1;
                  }
                  if (Ye && !Ke[r]) {
                    var o = re(e) || e.parentNode,
                      i = ne(e) || e.childNodes;
                    if (i && o)
                      for (var l = i.length - 1; l >= 0; --l) o.insertBefore(ee(i[l], !0), te(e));
                  }
                  return yt(e), !0;
                }
                return e instanceof u &&
                  !(function(e) {
                    var t = re(e);
                    (t && t.tagName) || (t = { namespaceURI: rt, tagName: 'template' });
                    var n = N(e.tagName),
                      r = N(t.tagName);
                    return (
                      !!ot[e.namespaceURI] &&
                      (e.namespaceURI === tt
                        ? t.namespaceURI === nt
                          ? 'svg' === n
                          : t.namespaceURI === et
                          ? 'svg' === n && ('annotation-xml' === r || pt[r])
                          : Boolean(gt[n])
                        : e.namespaceURI === et
                        ? t.namespaceURI === nt
                          ? 'math' === n
                          : t.namespaceURI === tt
                          ? 'math' === n && dt[r]
                          : Boolean(ht[n])
                        : e.namespaceURI === nt
                        ? !(t.namespaceURI === tt && !dt[r]) &&
                          !(t.namespaceURI === et && !pt[r]) &&
                          !ht[n] &&
                          (ft[n] || !gt[n])
                        : !('application/xhtml+xml' !== ge || !ot[e.namespaceURI]))
                    );
                  })(e)
                  ? (yt(e), !0)
                  : ('noscript' !== r && 'noembed' !== r && 'noframes' !== r) ||
                    !S(/<\/no(script|embed|frames)/i, e.innerHTML)
                  ? (Fe &&
                      3 === e.nodeType &&
                      ((t = e.textContent),
                      (t = T(t, ye, ' ')),
                      (t = T(t, be, ' ')),
                      (t = T(t, we, ' ')),
                      e.textContent !== t &&
                        (w(a.removed, { element: e.cloneNode() }), (e.textContent = t))),
                    vt('afterSanitizeElements', e, null),
                    !1)
                  : (yt(e), !0);
              },
              _t = function(e, t, n) {
                if (je && ('id' === t || 'name' === t) && (n in i || n in st)) return !1;
                if (Ce && !Oe[t] && S(Ne, t));
                else if (De && S(Ee, t));
                else if (!xe[t] || Oe[t]) {
                  if (
                    !(
                      (At(e) &&
                        ((Le.tagNameCheck instanceof RegExp && S(Le.tagNameCheck, e)) ||
                          (Le.tagNameCheck instanceof Function && Le.tagNameCheck(e))) &&
                        ((Le.attributeNameCheck instanceof RegExp && S(Le.attributeNameCheck, t)) ||
                          (Le.attributeNameCheck instanceof Function &&
                            Le.attributeNameCheck(t)))) ||
                      ('is' === t &&
                        Le.allowCustomizedBuiltInElements &&
                        ((Le.tagNameCheck instanceof RegExp && S(Le.tagNameCheck, n)) ||
                          (Le.tagNameCheck instanceof Function && Le.tagNameCheck(n))))
                    )
                  )
                    return !1;
                } else if (Je[t]);
                else if (S(_e, T(n, Te, '')));
                else if (
                  ('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
                  'script' === e ||
                  0 !== _(n, 'data:') ||
                  !Xe[e]
                )
                  if (Re && !S(ve, T(n, Te, '')));
                  else if (n) return !1;
                return !0;
              },
              At = function(e) {
                return e.indexOf('-') > 0;
              },
              St = function(t) {
                var n, r, o, i;
                vt('beforeSanitizeAttributes', t, null);
                var l = t.attributes;
                if (l) {
                  var c = { attrName: '', attrValue: '', keepAttr: !0, allowedAttributes: xe };
                  for (i = l.length; i--; ) {
                    var s = (n = l[i]),
                      m = s.name,
                      u = s.namespaceURI;
                    if (
                      ((r = 'value' === m ? n.value : A(n.value)),
                      (o = he(m)),
                      (c.attrName = o),
                      (c.attrValue = r),
                      (c.keepAttr = !0),
                      (c.forceKeepAttr = void 0),
                      vt('uponSanitizeAttribute', t, c),
                      (r = c.attrValue),
                      !c.forceKeepAttr && (bt(m, t), c.keepAttr))
                    )
                      if (Ie || !S(/\/>/i, r)) {
                        Fe && ((r = T(r, ye, ' ')), (r = T(r, be, ' ')), (r = T(r, we, ' ')));
                        var p = he(t.nodeName);
                        if (_t(p, o, r)) {
                          if (
                            (!We ||
                              ('id' !== o && 'name' !== o) ||
                              (bt(m, t), (r = 'user-content-' + r)),
                            oe && 'object' === e(k) && 'function' == typeof k.getAttributeType)
                          )
                            if (u);
                            else
                              switch (k.getAttributeType(p, o)) {
                                case 'TrustedHTML':
                                  r = oe.createHTML(r);
                                  break;
                                case 'TrustedScriptURL':
                                  r = oe.createScriptURL(r);
                              }
                          try {
                            u ? t.setAttributeNS(u, m, r) : t.setAttribute(m, r), b(a.removed);
                          } catch (e) {}
                        }
                      } else bt(m, t);
                  }
                  vt('afterSanitizeAttributes', t, null);
                }
              },
              xt = function e(t) {
                var n,
                  r = Nt(t);
                for (vt('beforeSanitizeShadowDOM', t, null); (n = r.nextNode()); )
                  vt('uponSanitizeShadowNode', n, null),
                    Tt(n) || (n.content instanceof l && e(n.content), St(n));
                vt('afterSanitizeShadowDOM', t, null);
              };
            return (
              (a.sanitize = function(t) {
                var r,
                  i,
                  c,
                  m,
                  u,
                  p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (((at = !t) && (t = '\x3c!--\x3e'), 'string' != typeof t && !Et(t))) {
                  if ('function' != typeof t.toString) throw x('toString is not a function');
                  if ('string' != typeof (t = t.toString()))
                    throw x('dirty is not a string, aborting');
                }
                if (!a.isSupported) {
                  if ('object' === e(n.toStaticHTML) || 'function' == typeof n.toStaticHTML) {
                    if ('string' == typeof t) return n.toStaticHTML(t);
                    if (Et(t)) return n.toStaticHTML(t.outerHTML);
                  }
                  return t;
                }
                if ((Ue || ut(p), (a.removed = []), 'string' == typeof t && (qe = !1), qe)) {
                  if (t.nodeName) {
                    var d = he(t.nodeName);
                    if (!Ae[d] || Me[d])
                      throw x('root node is forbidden and cannot be sanitized in-place');
                  }
                } else if (t instanceof s)
                  (1 === (i = (r = wt('\x3c!----\x3e')).ownerDocument.importNode(t, !0)).nodeType &&
                    'BODY' === i.nodeName) ||
                  'HTML' === i.nodeName
                    ? (r = i)
                    : r.appendChild(i);
                else {
                  if (!ze && !Fe && !He && -1 === t.indexOf('<'))
                    return oe && Ge ? oe.createHTML(t) : t;
                  if (!(r = wt(t))) return ze ? null : Ge ? ie : '';
                }
                r && Pe && yt(r.firstChild);
                for (var f = Nt(qe ? t : r); (c = f.nextNode()); )
                  (3 === c.nodeType && c === m) ||
                    Tt(c) ||
                    (c.content instanceof l && xt(c.content), St(c), (m = c));
                if (((m = null), qe)) return t;
                if (ze) {
                  if (Be)
                    for (u = me.call(r.ownerDocument); r.firstChild; ) u.appendChild(r.firstChild);
                  else u = r;
                  return (xe.shadowroot || xe.shadowrootmod) && (u = pe.call(o, u, !0)), u;
                }
                var g = He ? r.outerHTML : r.innerHTML;
                return (
                  He &&
                    Ae['!doctype'] &&
                    r.ownerDocument &&
                    r.ownerDocument.doctype &&
                    r.ownerDocument.doctype.name &&
                    S(Z, r.ownerDocument.doctype.name) &&
                    (g = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + g),
                  Fe && ((g = T(g, ye, ' ')), (g = T(g, be, ' ')), (g = T(g, we, ' '))),
                  oe && Ge ? oe.createHTML(g) : g
                );
              }),
              (a.setConfig = function(e) {
                ut(e), (Ue = !0);
              }),
              (a.clearConfig = function() {
                (ct = null), (Ue = !1);
              }),
              (a.isValidAttribute = function(e, t, n) {
                ct || ut({});
                var r = he(e),
                  a = he(t);
                return _t(r, a, n);
              }),
              (a.addHook = function(e, t) {
                'function' == typeof t && ((fe[e] = fe[e] || []), w(fe[e], t));
              }),
              (a.removeHook = function(e) {
                if (fe[e]) return b(fe[e]);
              }),
              (a.removeHooks = function(e) {
                fe[e] && (fe[e] = []);
              }),
              (a.removeAllHooks = function() {
                fe = {};
              }),
              a
            );
          })();
        })();
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  n.r = e => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  };
  var r = {};
  (() => {
    'use strict';
    n.r(r);
    const e = window.wp.element,
      t = window.wp.components,
      a = window.wc.components,
      o = window.wc.data,
      i = window.wc.tracks,
      l = window.wp.data;
    var c = n(33561);
    const s = window.wp.i18n;
    function m(e) {
      return {
        __html: (0, c.sanitize)(e, {
          ALLOWED_TAGS: ['a', 'img', 'br'],
          ALLOWED_ATTR: ['href', 'src', 'class', 'alt', 'target'],
        }),
      };
    }
    const u = ({ paymentMethod: n, title: r, subTitleContent: c, columns: u }) => {
      const { gatewayId: p, pluginSlug: d, url: f } = n,
        [g, h] = (0, e.useState)(!1),
        [y, b] = (0, e.useState)(!0),
        { installAndActivatePlugins: w } = (0, l.useDispatch)(o.PLUGINS_STORE_NAME),
        { createNotice: N } = (0, l.useDispatch)('core/notices'),
        { updatePaymentGateway: E } = (0, l.useDispatch)(o.PAYMENT_GATEWAYS_STORE_NAME),
        { gatewayIsActive: v, paymentGateway: T } = (0, l.useSelect)(e => {
          const { getPaymentGateway: t } = e(o.PAYMENT_GATEWAYS_STORE_NAME),
            n = e(o.PLUGINS_STORE_NAME).getActivePlugins(),
            r = n && n.includes(d);
          let a;
          return r && (a = t(d.replace(/\-/g, '_'))), { gatewayIsActive: r, paymentGateway: a };
        });
      (0, e.useEffect)(() => {
        v && T && T.settings_url && (window.location.href = T.settings_url);
      }, [v, T]);
      const _ = () => {
        b(!1),
          (0, i.recordEvent)('settings_payments_promotions_dismiss', { id: p }),
          E(p, { settings: { is_dismissed: 'yes' } });
      };
      return y
        ? (0, e.createElement)(
            e.Fragment,
            null,
            u.map(n =>
              n.className.includes('name')
                ? (0, e.createElement)(
                    'td',
                    { className: 'name', key: n.className },
                    (0, e.createElement)(
                      'div',
                      { className: 'wc-payment-gateway-method__name' },
                      (0, e.createElement)(
                        a.Link,
                        { target: '_blank', type: 'external', rel: 'noreferrer', href: f },
                        r,
                      ),
                      c
                        ? (0, e.createElement)('div', {
                            className: 'pre-install-payment-gateway__subtitle',
                            dangerouslySetInnerHTML: m(c),
                          })
                        : null,
                    ),
                  )
                : n.className.includes('status')
                ? (0, e.createElement)('td', {
                    className: 'pre-install-payment-gateway__status',
                    key: n.className,
                  })
                : n.className.includes('action')
                ? (0, e.createElement)(
                    'td',
                    { className: 'action', key: n.className },
                    (0, e.createElement)(
                      'div',
                      { className: 'pre-install-payment-gateway__actions' },
                      (0, e.createElement)(a.EllipsisMenu, {
                        label: (0, s.__)('Payment Promotion Options', 'woocommerce'),
                        className: 'pre-install-payment-gateway__actions-menu',
                        onToggle: e => e.stopPropagation(),
                        renderContent: () =>
                          (0, e.createElement)(
                            'div',
                            { className: 'pre-install-payment-gateway__actions-menu-options' },
                            (0, e.createElement)(
                              t.Button,
                              { onClick: _ },
                              (0, s.__)('Dismiss', 'woocommerce'),
                            ),
                          ),
                      }),
                      (0, e.createElement)(
                        t.Button,
                        {
                          className: 'button alignright',
                          onClick: () => {
                            g ||
                              (h(!0),
                              (0, i.recordEvent)('settings_payments_recommendations_setup', {
                                extension_selected: d,
                              }),
                              w([d]).catch(e => {
                                e.message && N('error', e.message), h(!1);
                              }));
                          },
                          isSecondary: !0,
                          isBusy: g,
                          'aria-disabled': g,
                        },
                        (0, s.__)('Install', 'woocommerce'),
                      ),
                    ),
                  )
                : (0, e.createElement)('td', {
                    key: n.className,
                    className: n.className,
                    width: n.width,
                    dangerouslySetInnerHTML:
                      n.className.includes('sort') || n.className.includes('renewals')
                        ? { __html: n.html }
                        : m(n.html),
                  }),
            ),
          )
        : null;
    };
    [
      {
        gatewayId: 'pre_install_woocommerce_payments_promotion',
        pluginSlug: 'woocommerce-payments',
        url: 'https://woocommerce.com/payments/?utm_medium=product',
      },
    ].forEach(t => {
      const n = document.querySelector(`[data-gateway_id="${t.gatewayId}"]`);
      if (n) {
        const r = [...n.children].map(e => ({
            className: e.className,
            html: e.innerHTML,
            width: e.getAttribute('width') || void 0,
          })),
          a = n.getElementsByClassName('wc-payment-gateway-method-title'),
          o = n.getElementsByClassName('gateway-subtitle');
        (0, e.render)(
          (0, e.createElement)(u, {
            columns: r,
            paymentMethod: t,
            title: 1 === a.length ? a[0].innerHTML : void 0,
            subTitleContent: 1 === o.length ? o[0].innerHTML : void 0,
          }),
          n,
        );
      }
    });
  })(),
    ((window.wc = window.wc || {}).paymentMethodPromotions = r);
})();
