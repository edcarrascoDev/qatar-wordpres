(() => {
  var e,
    t,
    o,
    r = {
      5859: (e, t, o) => {
        'use strict';
        o.r(t);
        var r = o(1609);
        const c = window.wp.blockEditor,
          a = window.wp.data;
        var l = o(7723),
          s = o(7104),
          n = o(7850);
        const i = window.wc.wcSettings,
          d = window.wc.wcTypes,
          m = window.wp.components,
          u = window.wp.blocks;
        o(3952), o(9086);
        var p = o(9019),
          w = o.n(p);
        const b = ({
          attributes: { label: e, placeholder: t, formId: o, className: c, hasLabel: a, align: s },
        }) => {
          const n = w()('wc-block-product-search', s ? 'align' + s : '', c);
          return (0, r.createElement)(
            'div',
            { className: n },
            (0, r.createElement)(
              'form',
              { role: 'search', method: 'get', action: i.HOME_URL },
              (0, r.createElement)(
                'label',
                {
                  htmlFor: o,
                  className: a
                    ? 'wc-block-product-search__label'
                    : 'wc-block-product-search__label screen-reader-text',
                },
                e,
              ),
              (0, r.createElement)(
                'div',
                { className: 'wc-block-product-search__fields' },
                (0, r.createElement)('input', {
                  type: 'search',
                  id: o,
                  className: 'wc-block-product-search__field',
                  placeholder: t,
                  name: 's',
                }),
                (0, r.createElement)('input', {
                  type: 'hidden',
                  name: 'post_type',
                  value: 'product',
                }),
                (0, r.createElement)(
                  'button',
                  {
                    type: 'submit',
                    className: 'wc-block-product-search__button',
                    'aria-label': (0, l.__)('Search', 'woocommerce'),
                  },
                  (0, r.createElement)(
                    'svg',
                    {
                      'aria-hidden': 'true',
                      role: 'img',
                      focusable: 'false',
                      className: 'dashicon dashicons-arrow-right-alt2',
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '20',
                      height: '20',
                      viewBox: '0 0 20 20',
                    },
                    (0, r.createElement)('path', { d: 'M6 15l5-5-5-5 1-2 7 7-7 7z' }),
                  ),
                ),
              ),
            ),
          );
        };
        var h = o(9491),
          _ = o(6087);
        const f = (0, h.withInstanceId)(
            ({
              attributes: {
                label: e,
                placeholder: t,
                formId: o,
                className: a,
                hasLabel: s,
                align: n,
              },
              instanceId: i,
              setAttributes: d,
            }) => {
              const u = w()('wc-block-product-search', n ? 'align' + n : '', a);
              return (
                (0, _.useEffect)(() => {
                  o || d({ formId: `wc-block-product-search-${i}` });
                }, [o, d, i]),
                (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    c.InspectorControls,
                    { key: 'inspector' },
                    (0, r.createElement)(
                      m.PanelBody,
                      { title: (0, l.__)('Content', 'woocommerce'), initialOpen: !0 },
                      (0, r.createElement)(m.ToggleControl, {
                        label: (0, l.__)('Show search field label', 'woocommerce'),
                        checked: s,
                        onChange: () => d({ hasLabel: !s }),
                      }),
                    ),
                  ),
                  (0, r.createElement)(
                    'div',
                    { className: u },
                    !!s &&
                      (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(
                          'label',
                          {
                            className: 'screen-reader-text',
                            htmlFor: 'wc-block-product-search__label',
                          },
                          (0, l.__)('Search Label', 'woocommerce'),
                        ),
                        (0, r.createElement)(c.PlainText, {
                          className: 'wc-block-product-search__label',
                          id: 'wc-block-product-search__label',
                          value: e,
                          onChange: e => d({ label: e }),
                          style: { backgroundColor: 'transparent' },
                        }),
                      ),
                    (0, r.createElement)(
                      'div',
                      { className: 'wc-block-product-search__fields' },
                      (0, r.createElement)(m.TextControl, {
                        className: 'wc-block-product-search__field input-control',
                        value: t,
                        placeholder: (0, l.__)('Enter search placeholder text', 'woocommerce'),
                        onChange: e => d({ placeholder: e }),
                      }),
                      (0, r.createElement)(
                        'button',
                        {
                          type: 'submit',
                          className: 'wc-block-product-search__button',
                          'aria-label': (0, l.__)('Search', 'woocommerce'),
                          onClick: e => e.preventDefault(),
                          tabIndex: -1,
                        },
                        (0, r.createElement)(
                          'svg',
                          {
                            'aria-hidden': 'true',
                            role: 'img',
                            focusable: 'false',
                            className: 'dashicon dashicons-arrow-right-alt2',
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '20',
                            height: '20',
                            viewBox: '0 0 20 20',
                          },
                          (0, r.createElement)('path', { d: 'M6 15l5-5-5-5 1-2 7 7-7 7z' }),
                        ),
                      ),
                    ),
                  ),
                )
              );
            },
          ),
          g = (0, i.getSettingWithCoercion)('isBlockVariationAvailable', !1, d.isBoolean),
          k = {
            hasLabel: { type: 'boolean', default: !0 },
            label: { type: 'string', default: (0, l.__)('Search', 'woocommerce') },
            placeholder: { type: 'string', default: (0, l.__)('Search products…', 'woocommerce') },
            formId: { type: 'string', default: '' },
          },
          v = {
            label: k.label.default,
            buttonText: k.label.default,
            placeholder: k.placeholder.default,
            query: { post_type: 'product' },
          };
        (0, u.registerBlockType)('woocommerce/product-search', {
          title: (0, l.__)('Product Search', 'woocommerce'),
          icon: {
            src: (0, r.createElement)(s.A, {
              icon: n.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          category: 'woocommerce',
          keywords: [(0, l.__)('WooCommerce', 'woocommerce')],
          description: (0, l.__)(
            'A search box to allow customers to search for products by keyword.',
            'woocommerce',
          ),
          supports: { align: ['wide', 'full'], inserter: !g },
          attributes: k,
          transforms: {
            from: [
              {
                type: 'block',
                blocks: ['core/legacy-widget'],
                isMatch: ({ idBase: e, instance: t }) =>
                  'woocommerce_product_search' === e && !(null == t || !t.raw),
                transform: ({ instance: e }) =>
                  (0, u.createBlock)('woocommerce/product-search', {
                    label: e.raw.title || v.label,
                  }),
              },
            ],
          },
          deprecated: [
            {
              attributes: k,
              save: e => (0, r.createElement)('div', null, (0, r.createElement)(b, { ...e })),
            },
          ],
          edit: g
            ? ({ clientId: e }) => {
                const { replaceBlocks: t } = (0, a.useDispatch)(c.store),
                  o = (0, a.useSelect)(t => t('core/block-editor').getBlockAttributes(e), [e]),
                  s = [
                    (0, r.createElement)(
                      m.Button,
                      {
                        key: 'update',
                        onClick: () => {
                          t(
                            e,
                            (0, u.createBlock)('core/search', {
                              label: (null == o ? void 0 : o.label) || v.label,
                              buttonText: v.buttonText,
                              placeholder: (null == o ? void 0 : o.placeholder) || v.placeholder,
                              query: v.query,
                            }),
                          );
                        },
                        variant: 'primary',
                      },
                      (0, l.__)('Upgrade Block', 'woocommerce'),
                    ),
                  ];
                return (0, r.createElement)(
                  c.Warning,
                  { actions: s, className: 'wc-block-components-actions' },
                  (0, l.__)(
                    'This version of the Product Search block is outdated. Upgrade to continue using.',
                    'woocommerce',
                  ),
                );
              }
            : f,
          save: () => null,
        }),
          g &&
            (0, u.registerBlockVariation)('core/search', {
              name: 'woocommerce/product-search',
              title: (0, l.__)('Product Search', 'woocommerce'),
              icon: {
                src: (0, r.createElement)(s.A, {
                  icon: n.A,
                  className: 'wc-block-editor-components-block-icon',
                }),
              },
              isActive: (e, t) => {
                var o;
                return (
                  (null === (o = e.query) || void 0 === o ? void 0 : o.post_type) ===
                  t.query.post_type
                );
              },
              category: 'woocommerce',
              keywords: [(0, l.__)('WooCommerce', 'woocommerce')],
              description: (0, l.__)(
                'A search box to allow customers to search for products by keyword.',
                'woocommerce',
              ),
              attributes: v,
            });
      },
      9086: () => {},
      3952: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      9491: e => {
        'use strict';
        e.exports = window.wp.compose;
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
    c = {};
  function a(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var o = (c[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, a), o.exports;
  }
  (a.m = r),
    (e = []),
    (a.O = (t, o, r, c) => {
      if (!o) {
        var l = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, r, c] = e[d], s = !0, n = 0; n < o.length; n++)
            (!1 & c || l >= c) && Object.keys(a.O).every(e => a.O[e](o[n]))
              ? o.splice(n--, 1)
              : ((s = !1), c < l && (l = c));
          if (s) {
            e.splice(d--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      c = c || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > c; d--) e[d] = e[d - 1];
      e[d] = [o, r, c];
    }),
    (a.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (a.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var c = Object.create(null);
      a.r(c);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var s = 2 & r && e; 'object' == typeof s && !~t.indexOf(s); s = o(s))
        Object.getOwnPropertyNames(s).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), a.d(c, l), c;
    }),
    (a.d = (e, t) => {
      for (var o in t)
        a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (a.j = 2545),
    (() => {
      var e = { 2545: 0 };
      a.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [l, s, n] = o,
            i = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in s) a.o(s, r) && (a.m[r] = s[r]);
            if (n) var d = n(a);
          }
          for (t && t(o); i < l.length; i++) (c = l[i]), a.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return a.O(d);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = a.O(void 0, [94], () => a(5859));
  (l = a.O(l)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-search'] = l);
})();
