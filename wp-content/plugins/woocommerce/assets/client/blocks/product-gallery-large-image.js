(() => {
  var e,
    t,
    r,
    o = {
      9008: (e, t, r) => {
        'use strict';
        r.r(t);
        const o = window.wp.blocks;
        var l = r(1609);
        const a = window.wc.wcSettings;
        var i, n, s, c, d, p, u, g, m, v;
        const f = (0, a.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          w = f.pluginUrl + 'assets/images/',
          b =
            (f.pluginUrl,
            f.buildPhase,
            null === (i = a.STORE_PAGES.shop) || void 0 === i || i.permalink,
            null === (n = a.STORE_PAGES.checkout) || void 0 === n || n.id,
            null === (s = a.STORE_PAGES.checkout) || void 0 === s || s.permalink,
            null === (c = a.STORE_PAGES.privacy) || void 0 === c || c.permalink,
            null === (d = a.STORE_PAGES.privacy) || void 0 === d || d.title,
            null === (p = a.STORE_PAGES.terms) || void 0 === p || p.permalink,
            null === (u = a.STORE_PAGES.terms) || void 0 === u || u.title,
            null === (g = a.STORE_PAGES.cart) || void 0 === g || g.id,
            null === (m = a.STORE_PAGES.cart) || void 0 === m || m.permalink,
            null !== (v = a.STORE_PAGES.myaccount) && void 0 !== v && v.permalink
              ? a.STORE_PAGES.myaccount.permalink
              : (0, a.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, a.getSetting)('localPickupEnabled', !1),
            (0, a.getSetting)('countries', {})),
          y = (0, a.getSetting)('countryData', {}),
          k =
            (Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, b[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowBilling)
                .map(e => [e, y[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(y)
                .filter(e => !0 === y[e].allowShipping)
                .map(e => [e, b[e] || '']),
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
          O =
            ((0, a.getSetting)('addressFieldsLocations', k).address,
            (0, a.getSetting)('addressFieldsLocations', k).contact,
            (0, a.getSetting)('addressFieldsLocations', k).order,
            (0, a.getSetting)('additionalOrderFields', {}),
            (0, a.getSetting)('additionalContactFields', {}),
            (0, a.getSetting)('additionalAddressFields', {}),
            window.wp.blockEditor);
        var S = r(6087),
          h = r(9019),
          E = r.n(h);
        const P = JSON.parse('{"name":"woocommerce/product-gallery-large-image-next-previous"}'),
          _ = JSON.parse('{"name":"woocommerce/product-gallery-pager"}');
        r(5503);
        const j = (0, S.memo)(() =>
            (0, l.createElement)(
              'div',
              {
                className:
                  'wc-block-product-gallery-large-image wc-block-editor-product-gallery-large-image',
              },
              (0, l.createElement)('img', {
                src: `${w}block-placeholders/product-image-gallery.svg`,
                alt: 'Placeholder',
              }),
            ),
          ),
          C = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-large-image","version":"1.0.0","title":"Large Image","description":"Display the Large Image of a product.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["nextPreviousButtonsPosition","postId","hoverZoom","fullScreenOnClick","cropImages"],"supports":{"interactivity":true},"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"]}',
          );
        (0, o.registerBlockType)(C, {
          icon: () =>
            (0, l.createElement)(
              'svg',
              {
                width: '18',
                height: '18',
                viewBox: '0 0 18 18',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, l.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M6.22448 1.5L1.5 6.81504V11.7072L5.12953 9.06066C5.38061 8.87758 5.71858 8.86829 5.97934 9.0373L8.90601 10.9342L12.4772 7.46225C12.7683 7.17925 13.2317 7.17925 13.5228 7.46225L16.5 10.3568V2C16.5 1.72386 16.2761 1.5 16 1.5H6.22448ZM1.5 13.5636V16C1.5 16.2761 1.72386 16.5 2 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V12.4032L16.4772 12.4266L13 9.04603L9.52279 12.4266C9.27191 12.6706 8.88569 12.7086 8.59206 12.5183L5.59643 10.5766L1.5 13.5636ZM0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z',
                fill: 'currentColor',
              }),
            ),
          edit: ({ context: e }) => {
            const t = (0, O.useInnerBlocksProps)(
                { className: 'wc-block-product-gallery-large-image__inner-blocks' },
                { template: [[P.name], [_.name]], templateInsertUpdatesSelection: !0 },
              ),
              r = (0, S.useMemo)(() => {
                switch (e.nextPreviousButtonsPosition) {
                  case 'insideTheImage':
                    return { className: 'inside-image' };
                  case 'outsideTheImage':
                    return { className: 'outside-image' };
                  default:
                    return { className: 'off' };
                }
              }, [e.nextPreviousButtonsPosition]),
              o = (0, O.useBlockProps)({
                className: E()(
                  'wc-block-product-gallery-large-image',
                  'wc-block-editor-product-gallery-large-image',
                  `wc-block-editor-product-gallery-large-image-next-previous--${
                    null == r ? void 0 : r.className
                  }`,
                ),
              });
            return (0, l.createElement)(
              'div',
              { ...o },
              (0, l.createElement)(j, null),
              (0, l.createElement)('div', { ...t }),
            );
          },
          save: () => {
            const e = O.useBlockProps.save({
                className: 'wc-block-product-gallery-large-image__inner-blocks',
              }),
              t = O.useInnerBlocksProps.save(e);
            return (0, l.createElement)('div', { ...t });
          },
        });
      },
      5503: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      6087: e => {
        'use strict';
        e.exports = window.wp.element;
      },
    },
    l = {};
  function a(e) {
    var t = l[e];
    if (void 0 !== t) return t.exports;
    var r = (l[e] = { exports: {} });
    return o[e].call(r.exports, r, r.exports, a), r.exports;
  }
  (a.m = o),
    (e = []),
    (a.O = (t, r, o, l) => {
      if (!r) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [r, o, l] = e[d], n = !0, s = 0; s < r.length; s++)
            (!1 & l || i >= l) && Object.keys(a.O).every(e => a.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((n = !1), l < i && (i = l));
          if (n) {
            e.splice(d--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      l = l || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > l; d--) e[d] = e[d - 1];
      e[d] = [r, o, l];
    }),
    (a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (a.t = function(e, o) {
      if ((1 & o && (e = this(e)), 8 & o)) return e;
      if ('object' == typeof e && e) {
        if (4 & o && e.__esModule) return e;
        if (16 & o && 'function' == typeof e.then) return e;
      }
      var l = Object.create(null);
      a.r(l);
      var i = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var n = 2 & o && e; 'object' == typeof n && !~t.indexOf(n); n = r(n))
        Object.getOwnPropertyNames(n).forEach(t => (i[t] = () => e[t]));
      return (i.default = () => e), a.d(l, i), l;
    }),
    (a.d = (e, t) => {
      for (var r in t)
        a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.j = 8867),
    (() => {
      var e = { 8867: 0 };
      a.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var o,
            l,
            [i, n, s] = r,
            c = 0;
          if (i.some(t => 0 !== e[t])) {
            for (o in n) a.o(n, o) && (a.m[o] = n[o]);
            if (s) var d = s(a);
          }
          for (t && t(r); c < i.length; c++) (l = i[c]), a.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return a.O(d);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = a.O(void 0, [94], () => a(9008));
  (i = a.O(i)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-gallery-large-image'] = i);
})();
