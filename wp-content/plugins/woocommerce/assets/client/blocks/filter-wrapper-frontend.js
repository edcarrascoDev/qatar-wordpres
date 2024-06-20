var wc;
(() => {
  var e,
    r,
    t,
    o,
    n,
    c = {
      4300: (e, r, t) => {
        'use strict';
        t.d(r, { $Q: () => c, lz: () => n });
        var o = t(6087);
        const n = (0, o.createContext)({}),
          c = () => {
            const { wrapper: e } = (0, o.useContext)(n);
            return r => {
              e && e.current && (e.current.hidden = !r);
            };
          };
      },
      5165: (e, r, t) => {
        'use strict';
        t.r(r);
        var o,
          n,
          c,
          l,
          s,
          a,
          i,
          p,
          d,
          u,
          m = t(1609),
          w = t(6087),
          b = t(2294),
          g = t(7723),
          k = t(5703);
        const f = (0, k.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          h = f.pluginUrl + 'assets/images/',
          E = f.pluginUrl + 'assets/client/blocks/',
          v =
            (f.buildPhase,
            null === (o = k.STORE_PAGES.shop) || void 0 === o || o.permalink,
            null === (n = k.STORE_PAGES.checkout) || void 0 === n || n.id,
            null === (c = k.STORE_PAGES.checkout) || void 0 === c || c.permalink,
            null === (l = k.STORE_PAGES.privacy) || void 0 === l || l.permalink,
            null === (s = k.STORE_PAGES.privacy) || void 0 === s || s.title,
            null === (a = k.STORE_PAGES.terms) || void 0 === a || a.permalink,
            null === (i = k.STORE_PAGES.terms) || void 0 === i || i.title,
            null === (p = k.STORE_PAGES.cart) || void 0 === p || p.id,
            null === (d = k.STORE_PAGES.cart) || void 0 === d || d.permalink,
            null !== (u = k.STORE_PAGES.myaccount) && void 0 !== u && u.permalink
              ? k.STORE_PAGES.myaccount.permalink
              : (0, k.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, k.getSetting)('localPickupEnabled', !1),
            (0, k.getSetting)('countries', {})),
          y = (0, k.getSetting)('countryData', {}),
          _ =
            (Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, v[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(Object.keys(y).map(e => [e, y[e].locale || []])),
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
          S =
            ((0, k.getSetting)('addressFieldsLocations', _).address,
            (0, k.getSetting)('addressFieldsLocations', _).contact,
            (0, k.getSetting)('addressFieldsLocations', _).order,
            (0, k.getSetting)('additionalOrderFields', {}),
            (0, k.getSetting)('additionalContactFields', {}),
            (0, k.getSetting)('additionalAddressFields', {}),
            ({
              imageUrl: e = `${h}/block-error.svg`,
              header: r = (0, g.__)('Oops!', 'woocommerce'),
              text: t = (0, g.__)('There was an error loading the content.', 'woocommerce'),
              errorMessage: o,
              errorMessagePrefix: n = (0, g.__)('Error:', 'woocommerce'),
              button: c,
              showErrorBlock: l = !0,
            }) =>
              l
                ? (0, m.createElement)(
                    'div',
                    { className: 'wc-block-error wc-block-components-error' },
                    e &&
                      (0, m.createElement)('img', {
                        className: 'wc-block-error__image wc-block-components-error__image',
                        src: e,
                        alt: '',
                      }),
                    (0, m.createElement)(
                      'div',
                      { className: 'wc-block-error__content wc-block-components-error__content' },
                      r &&
                        (0, m.createElement)(
                          'p',
                          { className: 'wc-block-error__header wc-block-components-error__header' },
                          r,
                        ),
                      t &&
                        (0, m.createElement)(
                          'p',
                          { className: 'wc-block-error__text wc-block-components-error__text' },
                          t,
                        ),
                      o &&
                        (0, m.createElement)(
                          'p',
                          {
                            className: 'wc-block-error__message wc-block-components-error__message',
                          },
                          n ? n + ' ' : '',
                          o,
                        ),
                      c &&
                        (0, m.createElement)(
                          'p',
                          { className: 'wc-block-error__button wc-block-components-error__button' },
                          c,
                        ),
                    ),
                  )
                : null);
        t(9407);
        class P extends w.Component {
          constructor(...e) {
            super(...e), (0, b.A)(this, 'state', { errorMessage: '', hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, m.createElement)(
                    m.Fragment,
                    null,
                    (0, m.createElement)('strong', null, e.status),
                    ': ',
                    e.statusText,
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: r,
                showErrorMessage: t = !0,
                showErrorBlock: o = !0,
                text: n,
                errorMessagePrefix: c,
                renderError: l,
                button: s,
              } = this.props,
              { errorMessage: a, hasError: i } = this.state;
            return i
              ? 'function' == typeof l
                ? l({ errorMessage: a })
                : (0, m.createElement)(S, {
                    showErrorBlock: o,
                    errorMessage: t ? a : null,
                    header: e,
                    imageUrl: r,
                    text: n,
                    errorMessagePrefix: c,
                    button: s,
                  })
              : this.props.children;
          }
        }
        const x = P,
          B = ['.wp-block-woocommerce-cart'],
          O = ({
            Block: e,
            containers: r,
            getProps: t = () => ({}),
            getErrorBoundaryProps: o = () => ({}),
          }) => {
            0 !== r.length &&
              Array.prototype.forEach.call(r, (r, n) => {
                const c = t(r, n),
                  l = o(r, n),
                  s = { ...r.dataset, ...(c.attributes || {}) };
                (({
                  Block: e,
                  container: r,
                  attributes: t = {},
                  props: o = {},
                  errorBoundaryProps: n = {},
                }) => {
                  (0, w.render)(
                    (0, m.createElement)(
                      x,
                      { ...n },
                      (0, m.createElement)(
                        w.Suspense,
                        {
                          fallback: (0, m.createElement)('div', {
                            className: 'wc-block-placeholder',
                          }),
                        },
                        e && (0, m.createElement)(e, { ...o, attributes: t }),
                      ),
                    ),
                    r,
                    () => {
                      r.classList && r.classList.remove('is-loading');
                    },
                  );
                })({ Block: e, container: r, props: c, attributes: s, errorBoundaryProps: l });
              });
          },
          N = e => {
            const r = document.body.querySelectorAll(B.join(',')),
              { Block: t, getProps: o, getErrorBoundaryProps: n, selector: c } = e;
            (({ Block: e, getProps: r, getErrorBoundaryProps: t, selector: o, wrappers: n }) => {
              const c = document.body.querySelectorAll(o);
              n &&
                n.length > 0 &&
                Array.prototype.filter.call(
                  c,
                  e =>
                    !((e, r) =>
                      Array.prototype.some.call(r, r => r.contains(e) && !r.isSameNode(e)))(e, n),
                ),
                O({ Block: e, containers: c, getProps: r, getErrorBoundaryProps: t });
            })({ Block: t, getProps: o, getErrorBoundaryProps: n, selector: c, wrappers: r }),
              Array.prototype.forEach.call(r, r => {
                r.addEventListener('wc-blocks_render_blocks_frontend', () => {
                  (({
                    Block: e,
                    getProps: r,
                    getErrorBoundaryProps: t,
                    selector: o,
                    wrapper: n,
                  }) => {
                    const c = n.querySelectorAll(o);
                    O({ Block: e, containers: c, getProps: r, getErrorBoundaryProps: t });
                  })({ ...e, wrapper: r });
                });
              });
          };
        var A = t(4332);
        const j = window.wc.blocksCheckout,
          T = (e, r) => (e && r[e] ? r[e] : null),
          M = ({ block: e, blockMap: r, blockWrapper: t, children: o, depth: n = 1 }) =>
            o && 0 !== o.length
              ? Array.from(o).map((o, c) => {
                  const { blockName: l = '', ...s } = {
                      ...(o instanceof HTMLElement ? o.dataset : {}),
                      className: o instanceof Element ? (null == o ? void 0 : o.className) : '',
                    },
                    a = `${e}_${n}_${c}`,
                    i = T(l, r);
                  if (!i) {
                    const c = (0, A.Ay)(
                      (o instanceof Element && (null == o ? void 0 : o.outerHTML)) ||
                        (null == o ? void 0 : o.textContent) ||
                        '',
                    );
                    if ('string' == typeof c && c) return c;
                    if (!(0, w.isValidElement)(c)) return null;
                    const l = o.childNodes.length
                      ? M({
                          block: e,
                          blockMap: r,
                          children: o.childNodes,
                          depth: n + 1,
                          blockWrapper: t,
                        })
                      : void 0;
                    return l
                      ? (0, w.cloneElement)(
                          c,
                          { key: a, ...((null == c ? void 0 : c.props) || {}) },
                          l,
                        )
                      : (0, w.cloneElement)(c, {
                          key: a,
                          ...((null == c ? void 0 : c.props) || {}),
                        });
                  }
                  const p = t || w.Fragment;
                  return (0, m.createElement)(
                    w.Suspense,
                    {
                      key: `${e}_${n}_${c}_suspense`,
                      fallback: (0, m.createElement)('div', { className: 'wc-block-placeholder' }),
                    },
                    (0, m.createElement)(
                      x,
                      {
                        text: `Unexpected error in: ${l}`,
                        showErrorBlock: k.CURRENT_USER_IS_ADMIN,
                      },
                      (0, m.createElement)(
                        p,
                        null,
                        (0, m.createElement)(
                          i,
                          { key: a, ...s },
                          M({
                            block: e,
                            blockMap: r,
                            children: o.childNodes,
                            depth: n + 1,
                            blockWrapper: t,
                          }),
                          ((e, r, t, o) => {
                            if (!(0, j.hasInnerBlocks)(e)) return null;
                            const n = t
                                ? Array.from(t)
                                    .map(
                                      e =>
                                        (e instanceof HTMLElement &&
                                          (null == e ? void 0 : e.dataset.blockName)) ||
                                        null,
                                    )
                                    .filter(Boolean)
                                : [],
                              c = (0, j.getRegisteredBlocks)(e).filter(
                                ({ blockName: e, force: r }) => !0 === r && !n.includes(e),
                              ),
                              l = o || w.Fragment;
                            return (0, m.createElement)(
                              w.Fragment,
                              null,
                              c.map(({ blockName: e, component: t }, o) => {
                                const n = t || T(e, r);
                                return n
                                  ? (0, m.createElement)(
                                      x,
                                      {
                                        key: `${e}_blockerror`,
                                        text: `Unexpected error in: ${e}`,
                                        showErrorBlock: k.CURRENT_USER_IS_ADMIN,
                                      },
                                      (0, m.createElement)(
                                        l,
                                        null,
                                        (0, m.createElement)(n, { key: `${e}_forced_${o}` }),
                                      ),
                                    )
                                  : null;
                              }),
                            );
                          })(l, r, o.childNodes, t),
                        ),
                      ),
                    ),
                  );
                })
              : null,
          C = window.wc.wcBlocksRegistry;
        (t.p = E),
          (0, C.registerBlockComponent)({
            blockName: 'woocommerce/active-filters',
            component: (0, w.lazy)(() => Promise.all([t.e(94), t.e(3821)]).then(t.bind(t, 3476))),
          }),
          (0, C.registerBlockComponent)({
            blockName: 'woocommerce/price-filter',
            component: (0, w.lazy)(() => Promise.all([t.e(94), t.e(3515)]).then(t.bind(t, 890))),
          }),
          (0, C.registerBlockComponent)({
            blockName: 'woocommerce/stock-filter',
            component: (0, w.lazy)(() => Promise.all([t.e(94), t.e(7660)]).then(t.bind(t, 4735))),
          }),
          (0, C.registerBlockComponent)({
            blockName: 'woocommerce/attribute-filter',
            component: (0, w.lazy)(() => Promise.all([t.e(94), t.e(490)]).then(t.bind(t, 2725))),
          }),
          (0, C.registerBlockComponent)({
            blockName: 'woocommerce/rating-filter',
            component: (0, w.lazy)(() => Promise.all([t.e(94), t.e(8021)]).then(t.bind(t, 9747))),
          });
        var R = t(4300);
        (({
          Block: e,
          selector: r,
          blockName: t,
          getProps: o = () => ({}),
          blockMap: n,
          blockWrapper: c,
        }) => {
          N({
            Block: e,
            selector: r,
            getProps: (e, r) => {
              const l = M({ block: t, blockMap: n, children: e.children || [], blockWrapper: c });
              return { ...o(e, r), children: l };
            },
          });
        })({
          blockName: 'woocommerce/filter-wrapper',
          selector: '.wp-block-woocommerce-filter-wrapper',
          Block: ({ children: e }) => {
            const r = (0, w.useRef)(null);
            return (0, m.createElement)(
              'div',
              { className: 'wc-blocks-filter-wrapper', ref: r },
              (0, m.createElement)(R.lz.Provider, { value: { wrapper: r } }, e),
            );
          },
          blockMap: (0, C.getRegisteredBlockComponents)('woocommerce/filter-wrapper'),
        });
      },
      9407: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      8468: e => {
        'use strict';
        e.exports = window.lodash;
      },
      4656: e => {
        'use strict';
        e.exports = window.wc.blocksComponents;
      },
      8529: e => {
        'use strict';
        e.exports = window.wc.priceFormat;
      },
      7594: e => {
        'use strict';
        e.exports = window.wc.wcBlocksData;
      },
      5703: e => {
        'use strict';
        e.exports = window.wc.wcSettings;
      },
      3993: e => {
        'use strict';
        e.exports = window.wc.wcTypes;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
      },
      7143: e => {
        'use strict';
        e.exports = window.wp.data;
      },
      4040: e => {
        'use strict';
        e.exports = window.wp.deprecated;
      },
      8107: e => {
        'use strict';
        e.exports = window.wp.dom;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      8537: e => {
        'use strict';
        e.exports = window.wp.htmlEntities;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      923: e => {
        'use strict';
        e.exports = window.wp.isShallowEqual;
      },
      8558: e => {
        'use strict';
        e.exports = window.wp.keycodes;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
      9786: e => {
        'use strict';
        e.exports = window.wp.styleEngine;
      },
      3832: e => {
        'use strict';
        e.exports = window.wp.url;
      },
      979: e => {
        'use strict';
        e.exports = window.wp.warning;
      },
    },
    l = {};
  function s(e) {
    var r = l[e];
    if (void 0 !== r) return r.exports;
    var t = (l[e] = { exports: {} });
    return c[e].call(t.exports, t, t.exports, s), t.exports;
  }
  (s.m = c),
    (e = []),
    (s.O = (r, t, o, n) => {
      if (!t) {
        var c = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [t, o, n] = e[p], l = !0, a = 0; a < t.length; a++)
            (!1 & n || c >= n) && Object.keys(s.O).every(e => s.O[e](t[a]))
              ? t.splice(a--, 1)
              : ((l = !1), n < c && (c = n));
          if (l) {
            e.splice(p--, 1);
            var i = o();
            void 0 !== i && (r = i);
          }
        }
        return r;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [t, o, n];
    }),
    (s.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return s.d(r, { a: r }), r;
    }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (s.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var n = Object.create(null);
      s.r(n);
      var c = {};
      r = r || [null, t({}), t([]), t(t)];
      for (var l = 2 & o && e; 'object' == typeof l && !~r.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach(r => (c[r] = () => e[r]));
      return (c.default = () => e), s.d(n, c), n;
    }),
    (s.d = (e, r) => {
      for (var t in r)
        s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (s.f = {}),
    (s.e = e => Promise.all(Object.keys(s.f).reduce((r, t) => (s.f[t](e, r), r), []))),
    (s.u = e =>
      ({
        490: 'attribute-filter-wrapper',
        3515: 'price-filter-wrapper',
        3821: 'active-filters-wrapper',
        7660: 'stock-filter-wrapper',
        8021: 'rating-filter-wrapper',
      }[e] +
      '-frontend.js?ver=' +
      {
        490: 'e8c0c54d3d3e9ce4fe0b',
        3515: '3a1f27ccf98e38a9c452',
        3821: '60ceaca70335c81ef9e3',
        7660: '968ac799c3c6bf0dee3e',
        8021: 'b40574118216526ae776',
      }[e])),
    (s.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (o = {}),
    (n = 'webpackWcBlocksFrontendJsonp:'),
    (s.l = (e, r, t, c) => {
      if (o[e]) o[e].push(r);
      else {
        var l, a;
        if (void 0 !== t)
          for (var i = document.getElementsByTagName('script'), p = 0; p < i.length; p++) {
            var d = i[p];
            if (d.getAttribute('src') == e || d.getAttribute('data-webpack') == n + t) {
              l = d;
              break;
            }
          }
        l ||
          ((a = !0),
          ((l = document.createElement('script')).charset = 'utf-8'),
          (l.timeout = 120),
          s.nc && l.setAttribute('nonce', s.nc),
          l.setAttribute('data-webpack', n + t),
          (l.src = e)),
          (o[e] = [r]);
        var u = (r, t) => {
            (l.onerror = l.onload = null), clearTimeout(m);
            var n = o[e];
            if (
              (delete o[e],
              l.parentNode && l.parentNode.removeChild(l),
              n && n.forEach(e => e(t)),
              r)
            )
              return r(t);
          },
          m = setTimeout(u.bind(null, void 0, { type: 'timeout', target: l }), 12e4);
        (l.onerror = u.bind(null, l.onerror)),
          (l.onload = u.bind(null, l.onload)),
          a && document.head.appendChild(l);
      }
    }),
    (s.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (s.j = 5819),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + '');
      var r = s.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        if (t.length)
          for (var o = t.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); ) e = t[o--].src;
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser');
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (s.p = e);
    })(),
    (() => {
      var e = { 5819: 0 };
      (s.f.j = (r, t) => {
        var o = s.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var c = s.p + s.u(r),
              l = new Error();
            s.l(
              c,
              t => {
                if (s.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ('load' === t.type ? 'missing' : t.type),
                    c = t && t.target && t.target.src;
                  (l.message = 'Loading chunk ' + r + ' failed.\n(' + n + ': ' + c + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = n),
                    (l.request = c),
                    o[1](l);
                }
              },
              'chunk-' + r,
              r,
            );
          }
      }),
        (s.O.j = r => 0 === e[r]);
      var r = (r, t) => {
          var o,
            n,
            [c, l, a] = t,
            i = 0;
          if (c.some(r => 0 !== e[r])) {
            for (o in l) s.o(l, o) && (s.m[o] = l[o]);
            if (a) var p = a(s);
          }
          for (r && r(t); i < c.length; i++) (n = c[i]), s.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return s.O(p);
        },
        t = (self.webpackChunkwebpackWcBlocksFrontendJsonp =
          self.webpackChunkwebpackWcBlocksFrontendJsonp || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var a = s.O(void 0, [94], () => s(5165));
  (a = s.O(a)), ((wc = void 0 === wc ? {} : wc)['filter-wrapper'] = a);
})();
