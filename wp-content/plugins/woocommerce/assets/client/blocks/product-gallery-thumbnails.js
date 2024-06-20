(() => {
  var e,
    t,
    r,
    l = {
      5922: (e, t, r) => {
        'use strict';
        r.d(t, { j: () => h });
        var l = r(1609),
          o = r(4715),
          i = r(7723),
          n = r(7104),
          a = r(9933),
          s = r(819),
          c = r(9286),
          m = r(7143),
          u = r(6427),
          p = r(2165);
        const d = {
            [p.P.OFF]: (0, i.__)('No thumbnails will be displayed.', 'woocommerce'),
            [p.P.LEFT]: (0, i.__)(
              'A strip of small images will appear to the left of the main gallery image.',
              'woocommerce',
            ),
            [p.P.BOTTOM]: (0, i.__)(
              'A strip of small images will appear below the main gallery image.',
              'woocommerce',
            ),
            [p.P.RIGHT]: (0, i.__)(
              'A strip of small images will appear to the right of the main gallery image.',
              'woocommerce',
            ),
          },
          h = ({ context: e }) => {
            const { productGalleryClientId: t } = e,
              { updateBlockAttributes: r } = (0, m.useDispatch)(o.store);
            return (0, l.createElement)(
              l.Fragment,
              null,
              (0, l.createElement)(
                u.__experimentalToggleGroupControl,
                {
                  className: 'wc-block-editor-product-gallery-thumbnails__position-toggle',
                  isBlock: !0,
                  label: (0, i.__)('Thumbnails', 'woocommerce'),
                  value: e.thumbnailsPosition,
                  help: d[e.thumbnailsPosition],
                  onChange: e => r(t, { thumbnailsPosition: e }),
                },
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: p.P.OFF,
                  label: (0, i.__)('Off', 'woocommerce'),
                }),
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: p.P.LEFT,
                  label: (0, l.createElement)(n.A, { size: 32, icon: a.A }),
                }),
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: p.P.BOTTOM,
                  label: (0, l.createElement)(n.A, { size: 32, icon: s.A }),
                }),
                (0, l.createElement)(u.__experimentalToggleGroupControlOption, {
                  value: p.P.RIGHT,
                  label: (0, l.createElement)(n.A, { size: 32, icon: c.A }),
                }),
              ),
              e.thumbnailsPosition !== p.P.OFF &&
                (0, l.createElement)(u.RangeControl, {
                  label: (0, i.__)('Number of Thumbnails', 'woocommerce'),
                  value: e.thumbnailsNumberOfThumbnails,
                  onChange: e => r(t, { thumbnailsNumberOfThumbnails: Math.round(e) }),
                  help: (0, i.__)(
                    'Choose how many thumbnails (3-8) will display. If more images exist, a “View all” button will display.',
                    'woocommerce',
                  ),
                  max: 8,
                  min: 3,
                  step: 1,
                }),
            );
          };
      },
      2165: (e, t, r) => {
        'use strict';
        r.d(t, { P: () => l });
        let l = (function(e) {
          return (e.OFF = 'off'), (e.LEFT = 'left'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), e;
        })({});
      },
      8129: (e, t, r) => {
        'use strict';
        r.r(t);
        var l = r(4997),
          o = r(1609);
        var i = r(4715),
          n = r(6427);
        const a = window.wc.wcSettings;
        var s, c, m, u, p, d, h, g, w, b;
        const f = (0, a.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          E = f.pluginUrl + 'assets/images/',
          C =
            (f.pluginUrl,
            f.buildPhase,
            null === (s = a.STORE_PAGES.shop) || void 0 === s || s.permalink,
            null === (c = a.STORE_PAGES.checkout) || void 0 === c || c.id,
            null === (m = a.STORE_PAGES.checkout) || void 0 === m || m.permalink,
            null === (u = a.STORE_PAGES.privacy) || void 0 === u || u.permalink,
            null === (p = a.STORE_PAGES.privacy) || void 0 === p || p.title,
            null === (d = a.STORE_PAGES.terms) || void 0 === d || d.permalink,
            null === (h = a.STORE_PAGES.terms) || void 0 === h || h.title,
            null === (g = a.STORE_PAGES.cart) || void 0 === g || g.id,
            null === (w = a.STORE_PAGES.cart) || void 0 === w || w.permalink,
            null !== (b = a.STORE_PAGES.myaccount) && void 0 !== b && b.permalink
              ? a.STORE_PAGES.myaccount.permalink
              : (0, a.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, a.getSetting)('localPickupEnabled', !1),
            (0, a.getSetting)('countries', {})),
          v = (0, a.getSetting)('countryData', {}),
          O =
            (Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, C[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, C[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(Object.keys(v).map(e => [e, v[e].locale || []])),
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
            });
        (0, a.getSetting)('addressFieldsLocations', O).address,
          (0, a.getSetting)('addressFieldsLocations', O).contact,
          (0, a.getSetting)('addressFieldsLocations', O).order,
          (0, a.getSetting)('additionalOrderFields', {}),
          (0, a.getSetting)('additionalContactFields', {}),
          (0, a.getSetting)('additionalAddressFields', {});
        var _ = r(9019),
          y = r.n(_),
          k = (r(1565), r(5922)),
          x = r(2165);
        const P = JSON.parse(
          '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-gallery-thumbnails","version":"1.0.0","title":"Thumbnails","description":"Display the Thumbnails of a product.","category":"woocommerce","keywords":["WooCommerce"],"usesContext":["postId","thumbnailsPosition","thumbnailsNumberOfThumbnails","productGalleryClientId","mode","cropImages"],"textdomain":"woocommerce","ancestor":["woocommerce/product-gallery"],"supports":{"spacing":{"margin":true,"__experimentalDefaultControls":{"margin":true}}}}',
        );
        (0, l.registerBlockType)(P, {
          icon: () =>
            (0, o.createElement)(
              'svg',
              {
                width: '19',
                height: '19',
                viewBox: '0 0 19 19',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, o.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M13.375 1.5H1.625C1.55596 1.5 1.5 1.55596 1.5 1.625V9.87895L4.35871 8.33965C4.5696 8.22609 4.82204 8.22009 5.03808 8.3235L7.42329 9.46513L10.3126 7.39076C10.574 7.20308 10.926 7.20308 11.1874 7.39076L13.5 9.05108V1.625C13.5 1.55596 13.444 1.5 13.375 1.5ZM13.5 10.8976L10.75 8.92328L7.93741 10.9426C7.71497 11.1023 7.42319 11.1281 7.1762 11.0098L4.73428 9.84105L1.5 11.5826V13.375C1.5 13.444 1.55596 13.5 1.625 13.5H13.375C13.444 13.5 13.5 13.444 13.5 13.375V10.8976ZM1.625 0C0.727537 0 0 0.727538 0 1.625V13.375C0 14.2725 0.727538 15 1.625 15H13.375C14.2725 15 15 14.2725 15 13.375V1.625C15 0.727537 14.2725 0 13.375 0H1.625ZM17.25 5V16C17.25 16.6909 16.6909 17.25 16.0011 17.25H3V18.75H16.0011C17.5204 18.75 18.75 17.5183 18.75 16V5H17.25Z',
                fill: '#1E1E1E',
              }),
            ),
          edit: ({ attributes: e, setAttributes: t, context: r }) => {
            const l = (0, i.useBlockProps)({
              className: y()(
                'wc-block-product-gallery-thumbnails',
                `wc-block-product-gallery-thumbnails--number-of-thumbnails-${r.thumbnailsNumberOfThumbnails}`,
                `wc-block-product-gallery-thumbnails--position-${r.thumbnailsPosition}`,
              ),
            });
            return (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                'div',
                { ...l },
                (0, o.createElement)(
                  i.InspectorControls,
                  null,
                  (0, o.createElement)(
                    n.PanelBody,
                    null,
                    (0, o.createElement)(k.j, { attributes: e, setAttributes: t, context: r }),
                  ),
                ),
                (0, o.createElement)(
                  n.Disabled,
                  null,
                  (0, o.createElement)(
                    () =>
                      r.thumbnailsPosition !== x.P.OFF
                        ? (0, o.createElement)(
                            'div',
                            { className: 'wc-block-editor-product-gallery-thumbnails' },
                            [...Array(r.thumbnailsNumberOfThumbnails).keys()].map(e =>
                              (0, o.createElement)(
                                'div',
                                {
                                  className: 'wc-block-product-gallery-thumbnails__thumbnail',
                                  key: e,
                                },
                                (0, o.createElement)('img', {
                                  src: `${E}block-placeholders/product-image-gallery.svg`,
                                  alt: 'Placeholder',
                                }),
                              ),
                            ),
                          )
                        : null,
                    null,
                  ),
                ),
              ),
            );
          },
          save: () => null,
        });
      },
      819: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => i });
        var l = r(1609),
          o = r(5573);
        const i = (0, l.createElement)(
          o.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' },
          (0, l.createElement)('path', {
            d:
              'M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM5 4.5H19C19.3 4.5 19.5 4.7 19.5 5V8.4L16.5 5.5C16.2 5.2 15.7 5.2 15.5 5.5L11.9 9L9 7C8.7 6.8 8.4 6.8 8.2 7L4.6 9.6V5C4.5 4.7 4.7 4.5 5 4.5ZM19 12.5H5C4.7 12.5 4.5 12.3 4.5 12V11.6L8.6 8.6L11.6 10.5C11.9 10.7 12.3 10.7 12.5 10.4L16 7L19.5 10.4V12C19.5 12.3 19.3 12.5 19 12.5Z',
            fill: 'currentColor',
          }),
          (0, l.createElement)('rect', {
            x: '6.25',
            y: '15.75',
            width: '4.5',
            height: '4.5',
            rx: '1.25',
            stroke: 'currentColor',
            strokeWidth: '1.5',
          }),
          (0, l.createElement)('rect', {
            x: '13.25',
            y: '15.75',
            width: '4.5',
            height: '4.5',
            rx: '1.25',
            stroke: 'currentColor',
            strokeWidth: '1.5',
          }),
        );
      },
      9933: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => i });
        var l = r(1609),
          o = r(5573);
        const i = (0, l.createElement)(
          o.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 25 24', fill: 'none' },
          (0, l.createElement)(
            'g',
            { clipPath: 'url(#clip0_420_11645)' },
            (0, l.createElement)('path', {
              d:
                'M22.5 3H10.5C9.4 3 8.5 3.9 8.5 5V19C8.5 20.1 9.4 21 10.5 21H22.5C23.6 21 24.5 20.1 24.5 19V5C24.5 3.9 23.6 3 22.5 3ZM10.5 4.5H22.5C22.8 4.5 23 4.7 23 5V13.4L21 10.5C20.7 10.2 20.2 10.2 20 10.5L16.4 14L13.5 12C13.2 11.8 12.9 11.8 12.7 12L10.1 14.6V5C10 4.7 10.2 4.5 10.5 4.5ZM22.5 19.5H10.5C10.2 19.5 10 19.3 10 19V16.6L13.1 13.6L16.1 15.5C16.4 15.7 16.8 15.7 17 15.4L20.5 12L23 15.4V19C23 19.3 22.8 19.5 22.5 19.5Z',
              fill: 'currentColor',
            }),
            (0, l.createElement)('rect', {
              x: '1.25',
              y: '3.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
            (0, l.createElement)('rect', {
              x: '1.25',
              y: '10.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
          ),
          (0, l.createElement)(
            'defs',
            null,
            (0, l.createElement)(
              'clipPath',
              { id: 'clip0_420_11645' },
              (0, l.createElement)('rect', {
                width: '24',
                height: '24',
                fill: 'white',
                transform: 'translate(0.5)',
              }),
            ),
          ),
        );
      },
      9286: (e, t, r) => {
        'use strict';
        r.d(t, { A: () => i });
        var l = r(1609),
          o = r(5573);
        const i = (0, l.createElement)(
          o.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 25 24', fill: 'none' },
          (0, l.createElement)(
            'g',
            { clipPath: 'url(#clip0_420_11656)' },
            (0, l.createElement)('path', {
              d:
                'M14.5 3H2.5C1.4 3 0.5 3.9 0.5 5V19C0.5 20.1 1.4 21 2.5 21H14.5C15.6 21 16.5 20.1 16.5 19V5C16.5 3.9 15.6 3 14.5 3ZM2.5 4.5H14.5C14.8 4.5 15 4.7 15 5V13.4L13 10.5C12.7 10.2 12.2 10.2 12 10.5L8.4 14L5.5 12C5.2 11.8 4.9 11.8 4.7 12L2.1 14.6V5C2 4.7 2.2 4.5 2.5 4.5ZM14.5 19.5H2.5C2.2 19.5 2 19.3 2 19V16.6L5.1 13.6L8.1 15.5C8.4 15.7 8.8 15.7 9 15.4L12.5 12L15 15.4V19C15 19.3 14.8 19.5 14.5 19.5Z',
              fill: 'currentColor',
            }),
            (0, l.createElement)('rect', {
              x: '19.25',
              y: '3.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
            (0, l.createElement)('rect', {
              x: '19.25',
              y: '10.75',
              width: '4.5',
              height: '4.5',
              rx: '1.25',
              stroke: 'currentColor',
              strokeWidth: '1.5',
            }),
          ),
          (0, l.createElement)(
            'defs',
            null,
            (0, l.createElement)(
              'clipPath',
              { id: 'clip0_420_11656' },
              (0, l.createElement)('rect', {
                width: '24',
                height: '24',
                fill: 'currentColor',
                transform: 'translate(0.5)',
              }),
            ),
          ),
        );
      },
      1565: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      4715: e => {
        'use strict';
        e.exports = window.wp.blockEditor;
      },
      4997: e => {
        'use strict';
        e.exports = window.wp.blocks;
      },
      6427: e => {
        'use strict';
        e.exports = window.wp.components;
      },
      7143: e => {
        'use strict';
        e.exports = window.wp.data;
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
    o = {};
  function i(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return l[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = l),
    (e = []),
    (i.O = (t, r, l, o) => {
      if (!r) {
        var n = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, l, o] = e[m], a = !0, s = 0; s < r.length; s++)
            (!1 & o || n >= o) && Object.keys(i.O).every(e => i.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((a = !1), o < n && (n = o));
          if (a) {
            e.splice(m--, 1);
            var c = l();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      o = o || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > o; m--) e[m] = e[m - 1];
      e[m] = [r, l, o];
    }),
    (i.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (i.t = function(e, l) {
      if ((1 & l && (e = this(e)), 8 & l)) return e;
      if ('object' == typeof e && e) {
        if (4 & l && e.__esModule) return e;
        if (16 & l && 'function' == typeof e.then) return e;
      }
      var o = Object.create(null);
      i.r(o);
      var n = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var a = 2 & l && e; 'object' == typeof a && !~t.indexOf(a); a = r(a))
        Object.getOwnPropertyNames(a).forEach(t => (n[t] = () => e[t]));
      return (n.default = () => e), i.d(o, n), o;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.j = 6565),
    (() => {
      var e = { 6565: 0 };
      i.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var l,
            o,
            [n, a, s] = r,
            c = 0;
          if (n.some(t => 0 !== e[t])) {
            for (l in a) i.o(a, l) && (i.m[l] = a[l]);
            if (s) var m = s(i);
          }
          for (t && t(r); c < n.length; c++) (o = n[c]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return i.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var n = i.O(void 0, [94], () => i(8129));
  (n = i.O(n)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-gallery-thumbnails'] = n);
})();
