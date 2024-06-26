(() => {
  var e,
    t,
    o,
    r = {
      7673: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const l = window.wp.blocks;
        var i = o(7104),
          n = o(5573);
        const a = (0, r.createElement)(
            n.SVG,
            { xmlns: 'http://www.w3.org/2000/SVG', viewBox: '0 0 24 24' },
            (0, r.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
            (0, r.createElement)('path', {
              d:
                'M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
            }),
          ),
          c = window.wc.wcSettings;
        var s, p, m, d, u, w, y, b, f, g;
        const v = (0, c.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          S = (v.pluginUrl, v.pluginUrl, v.buildPhase),
          E =
            (null === (s = c.STORE_PAGES.shop) || void 0 === s || s.permalink,
            null === (p = c.STORE_PAGES.checkout) || void 0 === p || p.id,
            null === (m = c.STORE_PAGES.checkout) || void 0 === m || m.permalink,
            null === (d = c.STORE_PAGES.privacy) || void 0 === d || d.permalink,
            null === (u = c.STORE_PAGES.privacy) || void 0 === u || u.title,
            null === (w = c.STORE_PAGES.terms) || void 0 === w || w.permalink,
            null === (y = c.STORE_PAGES.terms) || void 0 === y || y.title,
            null === (b = c.STORE_PAGES.cart) || void 0 === b || b.id,
            null === (f = c.STORE_PAGES.cart) || void 0 === f || f.permalink,
            null !== (g = c.STORE_PAGES.myaccount) && void 0 !== g && g.permalink
              ? c.STORE_PAGES.myaccount.permalink
              : (0, c.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, c.getSetting)('localPickupEnabled', !1),
            (0, c.getSetting)('countries', {})),
          _ = (0, c.getSetting)('countryData', {}),
          O =
            (Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowBilling)
                .map(e => [e, _[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowShipping)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(_)
                .filter(e => !0 === _[e].allowShipping)
                .map(e => [e, _[e].states || []]),
            ),
            Object.fromEntries(Object.keys(_).map(e => [e, _[e].locale || []])),
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
          h =
            ((0, c.getSetting)('addressFieldsLocations', O).address,
            (0, c.getSetting)('addressFieldsLocations', O).contact,
            (0, c.getSetting)('addressFieldsLocations', O).order,
            (0, c.getSetting)('additionalOrderFields', {}),
            (0, c.getSetting)('additionalContactFields', {}),
            (0, c.getSetting)('additionalAddressFields', {}),
            JSON.parse(
              '{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-active","version":"1.0.0","title":"Product Filter: Active Filters (Beta)","description":"Display the currently active filters.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":2,"ancestor":["woocommerce/product-filter"],"supports":{"interactivity":true,"inserter":false,"color":{"text":true,"background":false}},"usesContext":["queryId"],"attributes":{"displayStyle":{"type":"string","default":"list"}}}',
            )),
          k = window.wp.blockEditor;
        var j = o(7723),
          P = o(9019),
          x = o.n(P);
        const A = window.wp.components,
          C = ({ attributes: e, setAttributes: t }) => {
            const { displayStyle: o } = e;
            return (0, r.createElement)(
              k.InspectorControls,
              null,
              (0, r.createElement)(
                A.PanelBody,
                { title: (0, j.__)('Display Settings', 'woocommerce') },
                (0, r.createElement)(
                  A.__experimentalToggleGroupControl,
                  {
                    label: (0, j.__)('Display Style', 'woocommerce'),
                    value: o,
                    onChange: e => t({ displayStyle: e }),
                  },
                  (0, r.createElement)(A.__experimentalToggleGroupControlOption, {
                    value: 'list',
                    label: (0, j.__)('List', 'woocommerce'),
                  }),
                  (0, r.createElement)(A.__experimentalToggleGroupControlOption, {
                    value: 'chips',
                    label: (0, j.__)('Chips', 'woocommerce'),
                  }),
                ),
              ),
            );
          },
          T = window.wc.blocksComponents;
        var R = o(8098);
        const G = ({
          type: e,
          name: t,
          prefix: o = '',
          removeCallback: l = () => null,
          showLabel: n = !0,
          displayStyle: a,
        }) => {
          const c = o ? (0, r.createElement)(r.Fragment, null, o, ' ', t) : t,
            s = (0,
            j.sprintf) /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */(
              /* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
              (0, j.__)('Remove %s filter', 'woocommerce'),
              t,
            );
          return (0, r.createElement)(
            'li',
            { className: 'list-item', key: `${e}: ${t}` },
            n && (0, r.createElement)('span', { className: 'list-item-type' }, `${e}: `),
            'chips' === a
              ? (0, r.createElement)(T.RemovableChip, {
                  element: 'span',
                  text: c,
                  onRemove: l,
                  radius: 'large',
                  ariaLabel: s,
                })
              : (0, r.createElement)(
                  'span',
                  { className: 'list-item-name' },
                  (0, r.createElement)(
                    'button',
                    { className: 'list-item-remove', onClick: l },
                    (0, r.createElement)(i.A, {
                      className: 'wc-block-components-chip__remove-icon',
                      icon: R.A,
                      size: 16,
                    }),
                    (0, r.createElement)(T.Label, { screenReaderLabel: s }),
                  ),
                  c,
                ),
          );
        };
        o(3111),
          S > 2 &&
            (0, l.registerBlockType)(h, {
              icon: {
                src: (0, r.createElement)(i.A, {
                  icon: a,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
              edit: e => {
                const { displayStyle: t } = e.attributes,
                  o = (0, k.useBlockProps)({ className: 'wc-block-active-filters' });
                return (0, r.createElement)(
                  'div',
                  { ...o },
                  (0, r.createElement)(C, { ...e }),
                  (0, r.createElement)(
                    A.Disabled,
                    null,
                    (0, r.createElement)(
                      'ul',
                      { className: x()('filter-list', { 'list-chips': 'chips' === t }) },
                      (0, r.createElement)(G, {
                        type: (0, j.__)('Size', 'woocommerce'),
                        name: (0, j.__)('Small', 'woocommerce'),
                        displayStyle: t,
                      }),
                      (0, r.createElement)(G, {
                        type: (0, j.__)('Color', 'woocommerce'),
                        name: (0, j.__)('Blue', 'woocommerce'),
                        displayStyle: t,
                      }),
                    ),
                  ),
                );
              },
            });
      },
      3111: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
      7723: e => {
        'use strict';
        e.exports = window.wp.i18n;
      },
      5573: e => {
        'use strict';
        e.exports = window.wp.primitives;
      },
    },
    l = {};
  function i(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var o = (l[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.m = r),
    (e = []),
    (i.O = (t, o, r, l) => {
      if (!o) {
        var n = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [o, r, l] = e[p], a = !0, c = 0; c < o.length; c++)
            (!1 & l || n >= l) && Object.keys(i.O).every(e => i.O[e](o[c]))
              ? o.splice(c--, 1)
              : ((a = !1), l < n && (n = l));
          if (a) {
            e.splice(p--, 1);
            var s = r();
            void 0 !== s && (t = s);
          }
        }
        return t;
      }
      l = l || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > l; p--) e[p] = e[p - 1];
      e[p] = [o, r, l];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var l = Object.create(null);
      i.r(l);
      var n = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), i.d(l, n), l;
    }),
    (i.d = (e, t) => {
      for (var o in t)
        i.o(t, o) && !i.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 7598),
    (() => {
      var e = { 7598: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            l,
            [n, a, c] = o,
            s = 0;
          if (n.some(t => 0 !== e[t])) {
            for (r in a) i.o(a, r) && (i.m[r] = a[r]);
            if (c) var p = c(i);
          }
          for (t && t(o); s < n.length; s++) (l = n[s]), i.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return i.O(p);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var n = i.O(void 0, [94], () => i(7673));
  (n = i.O(n)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-filter-active'] = n);
})();
