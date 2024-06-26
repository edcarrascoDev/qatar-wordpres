(() => {
  var e,
    t,
    r,
    c = {
      5528: (e, t, r) => {
        'use strict';
        r.r(t);
        var c = r(1609),
          o = r(7723),
          n = r(5573);
        const a = (0, c.createElement)(
          n.SVG,
          { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
          (0, c.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0V0z' }),
          (0, c.createElement)('path', {
            d:
              'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z',
          }),
        );
        var i = r(7104);
        const s = window.wp.blocks,
          l = window.wc.wcSettings;
        var m, u, p, d, _, y, w, b, g, k;
        const h = (0, l.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          v = h.pluginUrl + 'assets/images/',
          f = (h.pluginUrl, h.buildPhase),
          E =
            (null === (m = l.STORE_PAGES.shop) || void 0 === m || m.permalink,
            null === (u = l.STORE_PAGES.checkout) || void 0 === u || u.id,
            null === (p = l.STORE_PAGES.checkout) || void 0 === p || p.permalink,
            null === (d = l.STORE_PAGES.privacy) || void 0 === d || d.permalink,
            null === (_ = l.STORE_PAGES.privacy) || void 0 === _ || _.title,
            null === (y = l.STORE_PAGES.terms) || void 0 === y || y.permalink,
            null === (w = l.STORE_PAGES.terms) || void 0 === w || w.title,
            null === (b = l.STORE_PAGES.cart) || void 0 === b || b.id,
            null === (g = l.STORE_PAGES.cart) || void 0 === g || g.permalink,
            null !== (k = l.STORE_PAGES.myaccount) && void 0 !== k && k.permalink
              ? l.STORE_PAGES.myaccount.permalink
              : (0, l.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, l.getSetting)('localPickupEnabled', !1),
            (0, l.getSetting)('countries', {})),
          P = (0, l.getSetting)('countryData', {}),
          S =
            (Object.fromEntries(
              Object.keys(P)
                .filter(e => !0 === P[e].allowBilling)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(P)
                .filter(e => !0 === P[e].allowBilling)
                .map(e => [e, P[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(P)
                .filter(e => !0 === P[e].allowShipping)
                .map(e => [e, E[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(P)
                .filter(e => !0 === P[e].allowShipping)
                .map(e => [e, P[e].states || []]),
            ),
            Object.fromEntries(Object.keys(P).map(e => [e, P[e].locale || []]))),
          C = {
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
          },
          x = (0, l.getSetting)('addressFieldsLocations', C).address,
          T =
            ((0, l.getSetting)('addressFieldsLocations', C).contact,
            (0, l.getSetting)('addressFieldsLocations', C).order,
            (0, l.getSetting)('additionalOrderFields', {}),
            (0, l.getSetting)('additionalContactFields', {}),
            (0, l.getSetting)('additionalAddressFields', {}),
            () => f > 1),
          N = window.wp.blockEditor;
        var A = r(6087);
        const B = window.wp.data,
          R = (0, A.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: '',
            previewData: {},
            getPreviewData: () => ({}),
          }),
          I = () => (0, A.useContext)(R),
          M = ({
            children: e,
            currentPostId: t = 0,
            previewData: r = {},
            currentView: o = '',
            isPreview: n = !1,
          }) => {
            const a = (0, B.useSelect)(e => t || e('core/editor').getCurrentPostId(), [t]),
              i = (0, A.useCallback)(e => (r && e in r ? r[e] : {}), [r]),
              s = {
                isEditor: !0,
                currentPostId: a,
                currentView: o,
                previewData: r,
                getPreviewData: i,
                isPreview: n,
              };
            return (0, c.createElement)(R.Provider, { value: s }, e);
          },
          L = window.wp.components,
          O = ({ clientId: e, registeredBlocks: t, defaultTemplate: r = [] }) => {
            const c = (0, A.useRef)(t),
              o = (0, A.useRef)(r),
              n = (0, B.useRegistry)(),
              { isPreview: a } = I();
            (0, A.useEffect)(() => {
              let t = !1;
              if (a) return;
              const { replaceInnerBlocks: r } = (0, B.dispatch)('core/block-editor');
              return n.subscribe(() => {
                if (!n.select('core/block-editor').getBlock(e)) return;
                const a = n.select('core/block-editor').getBlocks(e);
                if (0 === a.length && o.current.length > 0 && !t) {
                  const c = (0, s.createBlocksFromInnerBlocksTemplate)(o.current);
                  if (0 !== c.length) return (t = !0), void r(e, c);
                }
                const i = c.current.map(e => (0, s.getBlockType)(e)),
                  l = ((e, t) => {
                    const r = t.filter(
                        e =>
                          e &&
                          (({ attributes: e }) => {
                            var t, r, c;
                            return Boolean(
                              (null === (t = e.lock) || void 0 === t ? void 0 : t.remove) ||
                                (null === (r = e.lock) ||
                                void 0 === r ||
                                null === (c = r.default) ||
                                void 0 === c
                                  ? void 0
                                  : c.remove),
                            );
                          })(e),
                      ),
                      c = [];
                    return (
                      r.forEach(t => {
                        if (void 0 === t) return;
                        const r = e.find(e => e.name === t.name);
                        r || c.push(t);
                      }),
                      c
                    );
                  })(a, i);
                if (0 === l.length) return;
                let m = -1;
                const u = l.map(e => {
                  const t = o.current.findIndex(([t]) => t === e.name),
                    r = (0, s.createBlock)(e.name);
                  return (
                    -1 === m &&
                      (m = (({
                        defaultTemplatePosition: e,
                        innerBlocks: t,
                        currentDefaultTemplate: r,
                      }) => {
                        switch (e) {
                          case -1:
                            return t.length;
                          case 0:
                            return 0;
                          default:
                            const c = r.current[e - 1],
                              o = t.findIndex(({ name: e }) => e === c[0]);
                            return -1 === o ? e : o + 1;
                        }
                      })({
                        defaultTemplatePosition: t,
                        innerBlocks: a,
                        currentDefaultTemplate: o,
                      })),
                    r
                  );
                });
                n.batch(() => {
                  n.dispatch('core/block-editor').insertBlocks(u, m, e);
                });
              }, 'core/block-editor');
            }, [e, a, n]);
          },
          D = ({ style: e }) => {
            const t = [
              {
                selector:
                  '.wc-block-mini-cart__footer .wc-block-mini-cart__footer-actions .wc-block-mini-cart__footer-checkout',
                properties: [
                  { property: 'color', value: e.backgroundColor },
                  { property: 'background-color', value: e.color },
                  { property: 'border-color', value: e.color },
                ],
              },
            ]
              .map(({ selector: e, properties: t }) => {
                const r = t
                  .filter(({ value: e }) => e)
                  .map(({ property: e, value: t }) => `${e}: ${t};`)
                  .join('');
                return r ? `${e} { ${r} }` : '';
              })
              .join('')
              .trim();
            return t
              ? (0, c.createElement)('style', null, t, ' ')
              : (0, c.createElement)(c.Fragment, null);
          };
        r(3295);
        const j = (0, c.createElement)(
            n.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, c.createElement)(
              'g',
              { fill: 'none', fillRule: 'evenodd' },
              (0, c.createElement)('path', { d: 'M0 0h24v24H0z' }),
              (0, c.createElement)('path', {
                fill: 'currentColor',
                fillRule: 'nonzero',
                d:
                  'M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45ZM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z',
              }),
            ),
            ' ',
          ),
          q = (0, c.createElement)(
            n.SVG,
            { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
            (0, c.createElement)('path', {
              d:
                'M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z',
            }),
            (0, c.createElement)('path', { fill: 'none', d: 'M0 0h24v24H0z' }),
          ),
          F = {
            isPreview: { type: 'boolean', default: !1 },
            lock: { type: 'object', default: { remove: !0, move: !0 } },
            currentView: {
              type: 'string',
              default: 'woocommerce/filled-mini-cart-contents-block',
              source: 'readonly',
            },
            editorViews: {
              type: 'object',
              default: [
                {
                  view: 'woocommerce/filled-mini-cart-contents-block',
                  label: (0, o.__)('Filled Mini-Cart', 'woocommerce'),
                  icon: (0, c.createElement)(i.A, { icon: j }),
                },
                {
                  view: 'woocommerce/empty-mini-cart-contents-block',
                  label: (0, o.__)('Empty Mini-Cart', 'woocommerce'),
                  icon: (0, c.createElement)(i.A, { icon: q }),
                },
              ],
            },
            width: { type: 'string', default: '480px' },
          },
          $ = [
            'woocommerce/filled-mini-cart-contents-block',
            'woocommerce/empty-mini-cart-contents-block',
          ],
          V = [
            'woocommerce/mini-cart',
            'woocommerce/checkout',
            'woocommerce/cart',
            'woocommerce/single-product',
            'woocommerce/cart-totals-block',
            'woocommerce/checkout-fields-block',
            'core/post-template',
            'core/comment-template',
            'core/query-pagination',
            'core/comments-query-loop',
            'core/post-comments-form',
            'core/post-comments-link',
            'core/post-comments-count',
            'core/comments-pagination',
            'core/post-navigation-link',
            'core/button',
          ],
          Y = () =>
            (0, s.getBlockTypes)()
              .filter(
                e =>
                  !(
                    V.includes(e.name) ||
                    (e.parent && e.parent.filter(e => V.includes(e)).length > 0)
                  ),
              )
              .map(({ name: e }) => e);
        (0, s.registerBlockType)('woocommerce/empty-mini-cart-contents-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: q,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: () => {
            const e = (0, N.useBlockProps)(),
              { currentView: t } = I();
            return (0, c.createElement)(
              'div',
              { ...e, hidden: 'woocommerce/empty-mini-cart-contents-block' !== t },
              (0, c.createElement)(N.InnerBlocks, {
                allowedBlocks: Y(),
                renderAppender: N.InnerBlocks.ButtonBlockAppender,
              }),
            );
          },
          save: () =>
            (0, c.createElement)(
              'div',
              { ...N.useBlockProps.save() },
              (0, c.createElement)(N.InnerBlocks.Content, null),
            ),
        });
        const U = window.wc.blocksCheckout,
          H = [
            {
              destination: {
                address_1: '',
                address_2: '',
                city: '',
                state: '',
                postcode: '',
                country: '',
              },
              package_id: 0,
              name: (0, o.__)('Shipping', 'woocommerce'),
              items: [
                {
                  key: '33e75ff09dd601bbe69f351039152189',
                  name: (0, o._x)(
                    'Beanie with Logo',
                    'example product in Cart Block',
                    'woocommerce',
                  ),
                  quantity: 2,
                },
                {
                  key: '6512bd43d9caa6e02c990b0a82652dca',
                  name: (0, o._x)('Beanie', 'example product in Cart Block', 'woocommerce'),
                  quantity: 1,
                },
              ],
              shipping_rates: [
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Flat rate shipping', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '500',
                  taxes: '0',
                  rate_id: 'flat_rate:0',
                  instance_id: 0,
                  meta_data: [],
                  method_id: 'flat_rate',
                  selected: !0,
                },
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Free shipping', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '0',
                  taxes: '0',
                  rate_id: 'free_shipping:1',
                  instance_id: 0,
                  meta_data: [],
                  method_id: 'flat_rate',
                  selected: !1,
                },
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Local pickup', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '0',
                  taxes: '0',
                  rate_id: 'pickup_location:1',
                  instance_id: 1,
                  meta_data: [
                    { key: 'pickup_location', value: 'New York' },
                    { key: 'pickup_address', value: '123 Easy Street, New York, 12345' },
                  ],
                  method_id: 'pickup_location',
                  selected: !1,
                },
                {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  name: (0, o.__)('Local pickup', 'woocommerce'),
                  description: '',
                  delivery_time: '',
                  price: '0',
                  taxes: '0',
                  rate_id: 'pickup_location:2',
                  instance_id: 1,
                  meta_data: [
                    { key: 'pickup_location', value: 'Los Angeles' },
                    {
                      key: 'pickup_address',
                      value: '123 Easy Street, Los Angeles, California, 90210',
                    },
                  ],
                  method_id: 'pickup_location',
                  selected: !1,
                },
              ],
            },
          ],
          z = (0, l.getSetting)('displayCartPricesIncludingTax', !1),
          K = {
            coupons: [],
            shipping_rates:
              (0, l.getSetting)('shippingMethodsExist', !1) ||
              (0, l.getSetting)('localPickupEnabled', !1)
                ? H
                : [],
            items: [
              {
                key: '1',
                id: 1,
                type: 'simple',
                quantity: 2,
                catalog_visibility: 'visible',
                name: (0, o.__)('Beanie', 'woocommerce'),
                summary: (0, o.__)('Beanie', 'woocommerce'),
                short_description: (0, o.__)('Warm hat for winter', 'woocommerce'),
                description:
                  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                sku: 'woo-beanie',
                permalink: 'https://example.org',
                low_stock_remaining: 2,
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
                images: [
                  {
                    id: 10,
                    src: v + 'previews/beanie.jpg',
                    thumbnail: v + 'previews/beanie.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, o.__)('Color', 'woocommerce'),
                    value: (0, o.__)('Yellow', 'woocommerce'),
                  },
                  {
                    attribute: (0, o.__)('Size', 'woocommerce'),
                    value: (0, o.__)('Small', 'woocommerce'),
                  },
                ],
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '12000' : '10000',
                  regular_price: z ? '12000' : '10000',
                  sale_price: z ? '12000' : '10000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: z ? '12000000' : '10000000',
                    regular_price: z ? '12000000' : '10000000',
                    sale_price: z ? '12000000' : '10000000',
                  },
                },
                totals: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  line_subtotal: '2000',
                  line_subtotal_tax: '400',
                  line_total: '2000',
                  line_total_tax: '400',
                },
                extensions: {},
                item_data: [],
              },
              {
                key: '2',
                id: 2,
                type: 'simple',
                quantity: 1,
                catalog_visibility: 'visible',
                name: (0, o.__)('Cap', 'woocommerce'),
                summary: (0, o.__)('Cap', 'woocommerce'),
                short_description: (0, o.__)('Lightweight baseball cap', 'woocommerce'),
                description:
                  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
                sku: 'woo-cap',
                low_stock_remaining: null,
                permalink: 'https://example.org',
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
                images: [
                  {
                    id: 11,
                    src: v + 'previews/cap.jpg',
                    thumbnail: v + 'previews/cap.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                variation: [
                  {
                    attribute: (0, o.__)('Color', 'woocommerce'),
                    value: (0, o.__)('Orange', 'woocommerce'),
                  },
                ],
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '2400' : '2000',
                  regular_price: z ? '2400' : '2000',
                  sale_price: z ? '2400' : '2000',
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: z ? '24000000' : '20000000',
                    regular_price: z ? '24000000' : '20000000',
                    sale_price: z ? '24000000' : '20000000',
                  },
                },
                totals: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  line_subtotal: '2000',
                  line_subtotal_tax: '400',
                  line_total: '2000',
                  line_total_tax: '400',
                },
                extensions: {},
                item_data: [],
              },
            ],
            cross_sells: [
              {
                id: 1,
                name: (0, o.__)('Polo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-polo',
                short_description: (0, o.__)('Polo', 'woocommerce'),
                description: (0, o.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '24000' : '20000',
                  regular_price: z ? '24000' : '20000',
                  sale_price: z ? '12000' : '10000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4.5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: v + 'previews/polo.jpg',
                    thumbnail: v + 'previews/polo.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 2,
                name: (0, o.__)('Long Sleeve Tee', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-long-sleeve-tee',
                short_description: (0, o.__)('Long Sleeve Tee', 'woocommerce'),
                description: (0, o.__)('Long Sleeve Tee', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '30000' : '25000',
                  regular_price: z ? '30000' : '25000',
                  sale_price: z ? '30000' : '25000',
                  price_range: null,
                },
                price_html: '',
                average_rating: '4',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: v + 'previews/long-sleeve-tee.jpg',
                    thumbnail: v + 'previews/long-sleeve-tee.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 3,
                name: (0, o.__)('Hoodie with Zipper', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-zipper',
                short_description: (0, o.__)('Hoodie with Zipper', 'woocommerce'),
                description: (0, o.__)('Hoodie with Zipper', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '15000' : '12500',
                  regular_price: z ? '30000' : '25000',
                  sale_price: z ? '15000' : '12500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '1',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: v + 'previews/hoodie-with-zipper.jpg',
                    thumbnail: v + 'previews/hoodie-with-zipper.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 4,
                name: (0, o.__)('Hoodie with Logo', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-logo',
                short_description: (0, o.__)('Polo', 'woocommerce'),
                description: (0, o.__)('Polo', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '4500' : '4250',
                  regular_price: z ? '4500' : '4250',
                  sale_price: z ? '4500' : '4250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '5',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: v + 'previews/hoodie-with-logo.jpg',
                    thumbnail: v + 'previews/hoodie-with-logo.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 5,
                name: (0, o.__)('Hoodie with Pocket', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-hoodie-with-pocket',
                short_description: (0, o.__)('Hoodie with Pocket', 'woocommerce'),
                description: (0, o.__)('Hoodie with Pocket', 'woocommerce'),
                on_sale: !0,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '3500' : '3250',
                  regular_price: z ? '4500' : '4250',
                  sale_price: z ? '3500' : '3250',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3.75',
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: v + 'previews/hoodie-with-pocket.jpg',
                    thumbnail: v + 'previews/hoodie-with-pocket.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 6,
                name: (0, o.__)('T-Shirt', 'woocommerce'),
                parent: 0,
                type: 'simple',
                variation: '',
                permalink: 'https://example.org',
                sku: 'woo-t-shirt',
                short_description: (0, o.__)('T-Shirt', 'woocommerce'),
                description: (0, o.__)('T-Shirt', 'woocommerce'),
                on_sale: !1,
                prices: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  price: z ? '1800' : '1500',
                  regular_price: z ? '1800' : '1500',
                  sale_price: z ? '1800' : '1500',
                  price_range: null,
                },
                price_html: '',
                average_rating: '3',
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: v + 'previews/tshirt.jpg',
                    thumbnail: v + 'previews/tshirt.jpg',
                    srcset: '',
                    sizes: '',
                    name: '',
                    alt: '',
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: '',
                  description: '',
                  url: '',
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
            ],
            fees: [
              {
                id: 'fee',
                name: (0, o.__)('Fee', 'woocommerce'),
                totals: {
                  currency_code: 'USD',
                  currency_symbol: '$',
                  currency_minor_unit: 2,
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  currency_prefix: '$',
                  currency_suffix: '',
                  total: '100',
                  total_tax: '20',
                },
              },
            ],
            items_count: 3,
            items_weight: 0,
            needs_payment: !0,
            needs_shipping: (0, l.getSetting)('shippingEnabled', !0),
            has_calculated_shipping: !0,
            shipping_address: {
              first_name: '',
              last_name: '',
              company: '',
              address_1: '',
              address_2: '',
              city: '',
              state: '',
              postcode: '',
              country: '',
              phone: '',
            },
            billing_address: {
              first_name: '',
              last_name: '',
              company: '',
              address_1: '',
              address_2: '',
              city: '',
              state: '',
              postcode: '',
              country: '',
              email: '',
              phone: '',
            },
            totals: {
              currency_code: 'USD',
              currency_symbol: '$',
              currency_minor_unit: 2,
              currency_decimal_separator: '.',
              currency_thousand_separator: ',',
              currency_prefix: '$',
              currency_suffix: '',
              total_items: '4000',
              total_items_tax: '800',
              total_fees: '100',
              total_fees_tax: '20',
              total_discount: '0',
              total_discount_tax: '0',
              total_shipping: '0',
              total_shipping_tax: '0',
              total_tax: '820',
              total_price: '4920',
              tax_lines: [
                { name: (0, o.__)('Sales tax', 'woocommerce'), rate: '20%', price: '820' },
              ],
            },
            errors: [],
            payment_methods: ['cod', 'bacs', 'cheque'],
            payment_requirements: ['products'],
            extensions: {},
          },
          G = window.wc.wcBlocksData,
          Q = ['core/paragraph', 'core/image', 'core/separator'];
        (0, s.registerBlockType)('woocommerce/filled-mini-cart-contents-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: j,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, N.useBlockProps)(),
              r = (e => {
                const t = (0, U.applyCheckoutFilter)({
                  filterName: 'additionalCartCheckoutInnerBlockTypes',
                  defaultValue: [],
                  extensions: (0, B.select)(G.CART_STORE_KEY).getCartData().extensions,
                  arg: { block: e },
                  validation: e => {
                    if (Array.isArray(e) && e.every(e => 'string' == typeof e)) return !0;
                    throw new Error('allowedBlockTypes filters must return an array of strings.');
                  },
                });
                return Array.from(
                  new Set([
                    ...(0, s.getBlockTypes)()
                      .filter(t => ((null == t ? void 0 : t.parent) || []).includes(e))
                      .map(({ name: e }) => e),
                    ...Q,
                    ...t,
                  ]),
                );
              })(U.innerBlockAreas.FILLED_MINI_CART),
              { currentView: o } = I(),
              n = [
                ['woocommerce/mini-cart-title-block', {}],
                ['woocommerce/mini-cart-items-block', {}],
                ['woocommerce/mini-cart-footer-block', {}],
              ].filter(Boolean);
            return (
              O({ clientId: e, registeredBlocks: r, defaultTemplate: n }),
              (0, c.createElement)(
                'div',
                { ...t, hidden: 'woocommerce/filled-mini-cart-contents-block' !== o },
                (0, c.createElement)(
                  M,
                  { currentView: o, previewData: { previewCart: K } },
                  (0, c.createElement)(N.InnerBlocks, {
                    template: n,
                    allowedBlocks: r,
                    templateLock: 'insert',
                  }),
                ),
              )
            );
          },
          save: () =>
            (0, c.createElement)(
              'div',
              { ...N.useBlockProps.save() },
              (0, c.createElement)(N.InnerBlocks.Content, null),
            ),
        });
        var W = r(4478);
        (0, s.registerBlockType)('woocommerce/mini-cart-title-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: W.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: () => {
            const e = (0, N.useBlockProps)({ className: 'wc-block-mini-cart__title' });
            return (0, c.createElement)(
              'h2',
              { ...e },
              (0, c.createElement)(N.InnerBlocks, {
                allowedBlocks: [
                  'woocommerce/mini-cart-title-label-block',
                  'woocommerce/mini-cart-title-items-counter-block',
                ],
                template: [
                  ['woocommerce/mini-cart-title-label-block', {}],
                  ['woocommerce/mini-cart-title-items-counter-block', {}],
                ],
                templateLock: 'all',
              }),
            );
          },
          save: () =>
            (0, c.createElement)(
              'div',
              { ...N.useBlockProps.save() },
              (0, c.createElement)(N.InnerBlocks.Content, null),
            ),
        });
        var Z = r(458),
          X = r.n(Z);
        const J = window.wp.htmlEntities,
          ee = window.wc.wcTypes,
          te = e => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, o.sprintf) /* translators: %s Field label. */(
                  /* translators: %s Field label. */
                  (0, o.__)('%s (optional)', 'woocommerce'),
                  e.label,
                )),
              e.priority &&
                ((0, ee.isNumber)(e.priority) && (t.index = e.priority),
                (0, ee.isString)(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          re = Object.entries(S)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, te(t)])
                .reduce((e, [t, r]) => ((e[t] = r), e), {}),
            ])
            .reduce((e, [t, r]) => ((e[t] = r), e), {}),
          ce = (window.wp.url, (e, t) => e in t),
          oe = e => {
            const t = ((e, t, r = '') => {
                const c = r && void 0 !== re[r] ? re[r] : {};
                return e
                  .map(e => ({
                    key: e,
                    ...(l.defaultFields[e] || {}),
                    ...(c[e] || {}),
                    ...(t[e] || {}),
                  }))
                  .sort((e, t) => e.index - t.index);
              })(x, {}, e.country),
              r = Object.assign({}, e);
            return (
              t.forEach(({ key: t = '', hidden: c = !1 }) => {
                c && ce(t, e) && (r[t] = '');
              }),
              r
            );
          },
          ne = window.CustomEvent || null,
          ae = (e, t, r = !1, c = !1) => {
            if ('function' != typeof jQuery) return () => {};
            const o = () => {
              ((e, { bubbles: t = !1, cancelable: r = !1, element: c, detail: o = {} }) => {
                if (!ne) return;
                c || (c = document.body);
                const n = new ne(e, { bubbles: t, cancelable: r, detail: o });
                c.dispatchEvent(n);
              })(t, { bubbles: r, cancelable: c });
            };
            return jQuery(document).on(e, o), () => jQuery(document).off(e, o);
          },
          ie = e => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, B.dispatch)(G.CART_STORE_KEY).invalidateResolutionForStore();
          },
          se = e => {
            ((null != e && e.persisted) ||
              'back_forward' ===
                (window.performance && window.performance.getEntriesByType('navigation').length
                  ? window.performance.getEntriesByType('navigation')[0].type
                  : '')) &&
              (0, B.dispatch)(G.CART_STORE_KEY).invalidateResolutionForStore();
          },
          le = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          me = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            phone: '',
          },
          ue = { ...me, email: '' },
          pe = {
            total_items: '',
            total_items_tax: '',
            total_fees: '',
            total_fees_tax: '',
            total_discount: '',
            total_discount_tax: '',
            total_shipping: '',
            total_shipping_tax: '',
            total_price: '',
            total_tax: '',
            tax_lines: G.EMPTY_TAX_LINES,
            currency_code: '',
            currency_symbol: '',
            currency_minor_unit: 2,
            currency_decimal_separator: '',
            currency_thousand_separator: '',
            currency_prefix: '',
            currency_suffix: '',
          },
          de = e =>
            Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (0, J.decodeEntities)(t)])),
          _e = {
            cartCoupons: G.EMPTY_CART_COUPONS,
            cartItems: G.EMPTY_CART_ITEMS,
            cartFees: G.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: G.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: G.EMPTY_CART_ITEM_ERRORS,
            cartTotals: pe,
            cartIsLoading: !0,
            cartErrors: G.EMPTY_CART_ERRORS,
            billingAddress: ue,
            shippingAddress: me,
            shippingRates: G.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: G.EMPTY_PAYMENT_METHODS,
            paymentRequirements: G.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: G.EMPTY_EXTENSIONS,
          },
          ye = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: r } = I(),
              c = null == r ? void 0 : r.previewCart,
              { shouldSelect: o } = e,
              n = (0, A.useRef)();
            (0, A.useEffect)(
              () => (
                (() => {
                  if (
                    (window.wcBlocksStoreCartListeners ||
                      (window.wcBlocksStoreCartListeners = { count: 0, remove: () => {} }),
                    (null === (e = window.wcBlocksStoreCartListeners) || void 0 === e
                      ? void 0
                      : e.count) > 0)
                  )
                    return void window.wcBlocksStoreCartListeners.count++;
                  var e;
                  document.body.addEventListener('wc-blocks_added_to_cart', ie),
                    document.body.addEventListener('wc-blocks_removed_from_cart', ie),
                    window.addEventListener('pageshow', se);
                  const t = ae('added_to_cart', 'wc-blocks_added_to_cart'),
                    r = ae('removed_from_cart', 'wc-blocks_removed_from_cart');
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener('wc-blocks_added_to_cart', ie),
                        document.body.removeEventListener('wc-blocks_removed_from_cart', ie),
                        window.removeEventListener('pageshow', se),
                        t(),
                        r();
                    });
                })(),
                le
              ),
              [],
            );
            const a = (0, B.useSelect)(
              (e, { dispatch: r }) => {
                if (!o) return _e;
                if (t)
                  return {
                    cartCoupons: c.coupons,
                    cartItems: c.items,
                    crossSellsProducts: c.cross_sells,
                    cartFees: c.fees,
                    cartItemsCount: c.items_count,
                    cartItemsWeight: c.items_weight,
                    cartNeedsPayment: c.needs_payment,
                    cartNeedsShipping: c.needs_shipping,
                    cartItemErrors: G.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: c.totals,
                    cartIsLoading: !1,
                    cartErrors: G.EMPTY_CART_ERRORS,
                    billingData: ue,
                    billingAddress: ue,
                    shippingAddress: me,
                    extensions: G.EMPTY_EXTENSIONS,
                    shippingRates: c.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: c.has_calculated_shipping,
                    paymentRequirements: c.paymentRequirements,
                    receiveCart:
                      'function' == typeof (null == c ? void 0 : c.receiveCart)
                        ? c.receiveCart
                        : () => {},
                    receiveCartContents:
                      'function' == typeof (null == c ? void 0 : c.receiveCartContents)
                        ? c.receiveCartContents
                        : () => {},
                  };
                const n = e(G.CART_STORE_KEY),
                  a = n.getCartData(),
                  i = n.getCartErrors(),
                  s = n.getCartTotals(),
                  l = !n.hasFinishedResolution('getCartData'),
                  m = n.isCustomerDataUpdating(),
                  { receiveCart: u, receiveCartContents: p } = r(G.CART_STORE_KEY),
                  d = de(a.billingAddress),
                  _ = a.needsShipping ? de(a.shippingAddress) : d,
                  y = a.fees.length > 0 ? a.fees.map(e => de(e)) : G.EMPTY_CART_FEES;
                return {
                  cartCoupons:
                    a.coupons.length > 0
                      ? a.coupons.map(e => ({ ...e, label: e.code }))
                      : G.EMPTY_CART_COUPONS,
                  cartItems: a.items,
                  crossSellsProducts: a.crossSells,
                  cartFees: y,
                  cartItemsCount: a.itemsCount,
                  cartItemsWeight: a.itemsWeight,
                  cartNeedsPayment: a.needsPayment,
                  cartNeedsShipping: a.needsShipping,
                  cartItemErrors: a.errors,
                  cartTotals: s,
                  cartIsLoading: l,
                  cartErrors: i,
                  billingData: oe(d),
                  billingAddress: oe(d),
                  shippingAddress: oe(_),
                  extensions: a.extensions,
                  shippingRates: a.shippingRates,
                  isLoadingRates: m,
                  cartHasCalculatedShipping: a.hasCalculatedShipping,
                  paymentRequirements: a.paymentRequirements,
                  receiveCart: u,
                  receiveCartContents: p,
                };
              },
              [o],
            );
            return (n.current && X()(n.current, a)) || (n.current = a), n.current;
          };
        (0, s.registerBlockType)('woocommerce/mini-cart-title-items-counter-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: W.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: () => {
            const e = (0, N.useBlockProps)(),
              { cartItemsCount: t } = ye();
            return (0, c.createElement)(
              'span',
              { ...e },
              (0, o.sprintf) /* translators: %d is the count of items in the cart. */(
                /* translators: %d is the count of items in the cart. */
                (0, o._n)('(%d item)', '(%d items)', t, 'woocommerce'),
                t,
              ),
            );
          },
          save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
        });
        const we = { label: { type: 'string', default: (0, o.__)('Your cart', 'woocommerce') } };
        (0, s.registerBlockType)('woocommerce/mini-cart-title-label-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: W.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: we,
          edit: ({ attributes: { label: e }, setAttributes: t }) => {
            const r = (0, N.useBlockProps)();
            return (0, c.createElement)(
              'span',
              { ...r },
              (0, c.createElement)(N.RichText, {
                allowedFormats: [],
                value: e,
                onChange: e => t({ label: e }),
              }),
            );
          },
          save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
        });
        var be = r(6554);
        (0, s.registerBlockType)('woocommerce/mini-cart-items-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: be.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          edit: () => {
            const e = (0, N.useBlockProps)({ className: 'wc-block-mini-cart__items' }),
              t = [['woocommerce/mini-cart-products-table-block', {}]].filter(Boolean);
            return (0, c.createElement)(
              'div',
              { ...e },
              (0, c.createElement)(N.InnerBlocks, {
                template: t,
                renderAppender: N.InnerBlocks.ButtonBlockAppender,
                templateLock: !1,
                allowedBlocks: Y(),
              }),
            );
          },
          save: () =>
            (0, c.createElement)(
              'div',
              { ...N.useBlockProps.save() },
              (0, c.createElement)(N.InnerBlocks.Content, null),
            ),
        });
        var ge = r(5866),
          ke = r(8107),
          he = r(4717);
        const ve = ['BUTTON', 'FIELDSET', 'INPUT', 'OPTGROUP', 'OPTION', 'SELECT', 'TEXTAREA', 'A'],
          fe = ({ children: e, style: t = {}, ...r }) => {
            const o = (0, A.useRef)(null),
              n = () => {
                o.current &&
                  ke.focus.focusable.find(o.current).forEach(e => {
                    ve.includes(e.nodeName) && e.setAttribute('tabindex', '-1'),
                      e.hasAttribute('contenteditable') &&
                        e.setAttribute('contenteditable', 'false');
                  });
              },
              a = (0, he.YQ)(n, 0, { leading: !0 });
            return (
              (0, A.useLayoutEffect)(() => {
                let e;
                return (
                  n(),
                  o.current &&
                    ((e = new window.MutationObserver(a)),
                    e.observe(o.current, { childList: !0, attributes: !0, subtree: !0 })),
                  () => {
                    e && e.disconnect(), a.cancel();
                  }
                );
              }, [a]),
              (0, c.createElement)(
                'div',
                {
                  ref: o,
                  'aria-disabled': 'true',
                  style: { userSelect: 'none', pointerEvents: 'none', cursor: 'normal', ...t },
                  ...r,
                },
                e,
              )
            );
          };
        var Ee = r(9019),
          Pe = r.n(Ee),
          Se = r(195),
          Ce = r(8558);
        r(5193);
        const xe = ({
            className: e,
            quantity: t = 1,
            minimum: r = 1,
            maximum: n,
            onChange: a = () => {},
            step: i = 1,
            itemName: s = '',
            disabled: l,
          }) => {
            const m = Pe()('wc-block-components-quantity-selector', e),
              u = (0, A.useRef)(null),
              p = (0, A.useRef)(null),
              d = (0, A.useRef)(null),
              _ = void 0 !== n,
              y = !l && t - i >= r,
              w = !l && (!_ || t + i <= n),
              b = (0, A.useCallback)(
                e => {
                  let t = e;
                  _ && (t = Math.min(t, Math.floor(n / i) * i)),
                    (t = Math.max(t, Math.ceil(r / i) * i)),
                    (t = Math.floor(t / i) * i),
                    t !== e && a(t);
                },
                [_, n, r, a, i],
              ),
              g = (0, he.YQ)(b, 300);
            (0, A.useLayoutEffect)(() => {
              b(t);
            }, [t, b]);
            const k = (0, A.useCallback)(
              e => {
                const r = void 0 !== typeof e.key ? 'ArrowDown' === e.key : e.keyCode === Ce.DOWN,
                  c = void 0 !== typeof e.key ? 'ArrowUp' === e.key : e.keyCode === Ce.UP;
                r && y && (e.preventDefault(), a(t - i)), c && w && (e.preventDefault(), a(t + i));
              },
              [t, a, w, y, i],
            );
            return (0, c.createElement)(
              'div',
              { className: m },
              (0, c.createElement)('input', {
                ref: u,
                className: 'wc-block-components-quantity-selector__input',
                disabled: l,
                type: 'number',
                step: i,
                min: r,
                max: n,
                value: t,
                onKeyDown: k,
                onChange: e => {
                  let r = parseInt(e.target.value, 10);
                  (r = isNaN(r) ? t : r), r !== t && (a(r), g(r));
                },
                'aria-label': (0,
                o.sprintf) /* translators: %s refers to the item name in the cart. */(
                  /* translators: %s refers to the item name in the cart. */
                  (0, o.__)('Quantity of %s in your cart.', 'woocommerce'),
                  s,
                ),
              }),
              (0, c.createElement)(
                'button',
                {
                  ref: p,
                  'aria-label': (0,
                  o.sprintf) /* translators: %s refers to the item name in the cart. */(
                    /* translators: %s refers to the item name in the cart. */
                    (0, o.__)('Reduce quantity of %s', 'woocommerce'),
                    s,
                  ),
                  className:
                    'wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus',
                  disabled: !y,
                  onClick: () => {
                    const e = t - i;
                    a(e),
                      (0, Se.speak)(
                        (0,
                        o.sprintf) /* translators: %s refers to the item's new quantity in the cart. */(
                          /* translators: %s refers to the item's new quantity in the cart. */
                          (0, o.__)('Quantity reduced to %s.', 'woocommerce'),
                          e,
                        ),
                      ),
                      b(e);
                  },
                },
                '－',
              ),
              (0, c.createElement)(
                'button',
                {
                  ref: d,
                  'aria-label': (0,
                  o.sprintf) /* translators: %s refers to the item's name in the cart. */(
                    /* translators: %s refers to the item's name in the cart. */
                    (0, o.__)('Increase quantity of %s', 'woocommerce'),
                    s,
                  ),
                  disabled: !w,
                  className:
                    'wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus',
                  onClick: () => {
                    const e = t + i;
                    a(e),
                      (0, Se.speak)(
                        (0,
                        o.sprintf) /* translators: %s refers to the item's new quantity in the cart. */(
                          /* translators: %s refers to the item's new quantity in the cart. */
                          (0, o.__)('Quantity increased to %s.', 'woocommerce'),
                          e,
                        ),
                      ),
                      b(e);
                  },
                },
                '＋',
              ),
            );
          },
          Te = window.wc.blocksComponents,
          Ne = window.wc.priceFormat;
        r(4567);
        const Ae = ({
            currency: e,
            maxPrice: t,
            minPrice: r,
            priceClassName: n,
            priceStyle: a = {},
          }) =>
            (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, o.sprintf) /* translators: %1$s min price, %2$s max price */(
                  /* translators: %1$s min price, %2$s max price */
                  (0, o.__)('Price between %1$s and %2$s', 'woocommerce'),
                  (0, Ne.formatPrice)(r),
                  (0, Ne.formatPrice)(t),
                ),
              ),
              (0, c.createElement)(
                'span',
                { 'aria-hidden': !0 },
                (0, c.createElement)(Te.FormattedMonetaryAmount, {
                  className: Pe()('wc-block-components-product-price__value', n),
                  currency: e,
                  value: r,
                  style: a,
                }),
                ' — ',
                (0, c.createElement)(Te.FormattedMonetaryAmount, {
                  className: Pe()('wc-block-components-product-price__value', n),
                  currency: e,
                  value: t,
                  style: a,
                }),
              ),
            ),
          Be = ({
            currency: e,
            regularPriceClassName: t,
            regularPriceStyle: r,
            regularPrice: n,
            priceClassName: a,
            priceStyle: i,
            price: s,
          }) =>
            (0, c.createElement)(
              c.Fragment,
              null,
              (0, c.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, o.__)('Previous price:', 'woocommerce'),
              ),
              (0, c.createElement)(Te.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, c.createElement)(
                    'del',
                    { className: Pe()('wc-block-components-product-price__regular', t), style: r },
                    e,
                  ),
                value: n,
              }),
              (0, c.createElement)(
                'span',
                { className: 'screen-reader-text' },
                (0, o.__)('Discounted price:', 'woocommerce'),
              ),
              (0, c.createElement)(Te.FormattedMonetaryAmount, {
                currency: e,
                renderText: e =>
                  (0, c.createElement)(
                    'ins',
                    {
                      className: Pe()(
                        'wc-block-components-product-price__value',
                        'is-discounted',
                        a,
                      ),
                      style: i,
                    },
                    e,
                  ),
                value: s,
              }),
            ),
          Re = ({
            align: e,
            className: t,
            currency: r,
            format: o = '<price/>',
            maxPrice: n,
            minPrice: a,
            price: i,
            priceClassName: s,
            priceStyle: l,
            regularPrice: m,
            regularPriceClassName: u,
            regularPriceStyle: p,
            style: d,
          }) => {
            const _ = Pe()(t, 'price', 'wc-block-components-product-price', {
              [`wc-block-components-product-price--align-${e}`]: e,
            });
            o.includes('<price/>') ||
              ((o = '<price/>'),
              console.error('Price formats need to include the `<price/>` tag.'));
            const y = m && i && i < m;
            let w = (0, c.createElement)('span', {
              className: Pe()('wc-block-components-product-price__value', s),
            });
            return (
              y
                ? (w = (0, c.createElement)(Be, {
                    currency: r,
                    price: i,
                    priceClassName: s,
                    priceStyle: l,
                    regularPrice: m,
                    regularPriceClassName: u,
                    regularPriceStyle: p,
                  }))
                : void 0 !== a && void 0 !== n
                ? (w = (0, c.createElement)(Ae, {
                    currency: r,
                    maxPrice: n,
                    minPrice: a,
                    priceClassName: s,
                    priceStyle: l,
                  }))
                : i &&
                  (w = (0, c.createElement)(Te.FormattedMonetaryAmount, {
                    className: Pe()('wc-block-components-product-price__value', s),
                    currency: r,
                    value: i,
                    style: l,
                  })),
              (0, c.createElement)(
                'span',
                { className: _, style: d },
                (0, A.createInterpolateElement)(o, { price: w }),
              )
            );
          };
        r(6625);
        const Ie = ({
            className: e = '',
            disabled: t = !1,
            name: r,
            permalink: o = '',
            target: n,
            rel: a,
            style: i,
            onClick: s,
            ...l
          }) => {
            const m = Pe()('wc-block-components-product-name', e);
            if (t) {
              const e = l;
              return (0, c.createElement)('span', {
                className: m,
                ...e,
                dangerouslySetInnerHTML: { __html: (0, J.decodeEntities)(r) },
              });
            }
            return (0, c.createElement)('a', {
              className: m,
              href: o,
              target: n,
              ...l,
              dangerouslySetInnerHTML: { __html: (0, J.decodeEntities)(r) },
              style: i,
            });
          },
          Me = window.wp.hooks;
        var Le = r(131);
        r(9507);
        const Oe = ({ children: e, className: t }) =>
            (0, c.createElement)(
              'div',
              { className: Pe()('wc-block-components-product-badge', t) },
              e,
            ),
          De = () =>
            (0, c.createElement)(
              Oe,
              { className: 'wc-block-components-product-backorder-badge' },
              (0, o.__)('Available on backorder', 'woocommerce'),
            ),
          je = ({ image: e = {}, fallbackAlt: t = '' }) => {
            const r = e.thumbnail
              ? { src: e.thumbnail, alt: (0, J.decodeEntities)(e.alt) || t || 'Product Image' }
              : { src: l.PLACEHOLDER_IMG_SRC, alt: '' };
            return (0, c.createElement)('img', { ...r, alt: r.alt });
          },
          qe = ({ lowStockRemaining: e }) =>
            e
              ? (0, c.createElement)(
                  Oe,
                  { className: 'wc-block-components-product-low-stock-badge' },
                  (0,
                  o.sprintf) /* translators: %d stock amount (number of items in stock for product) */(
                    /* translators: %d stock amount (number of items in stock for product) */
                    (0, o.__)('%d left in stock', 'woocommerce'),
                    e,
                  ),
                )
              : null;
        var Fe = r(1194);
        r(4982);
        const $e = ({ details: e = [] }) =>
            Array.isArray(e)
              ? 0 === (e = e.filter(e => !e.hidden)).length
                ? null
                : (0, c.createElement)(
                    'ul',
                    { className: 'wc-block-components-product-details' },
                    e.map(e => {
                      const t = (null == e ? void 0 : e.key) || e.name || '',
                        r =
                          (null == e ? void 0 : e.className) ||
                          (t ? `wc-block-components-product-details__${(0, Fe.c)(t)}` : '');
                      return (0, c.createElement)(
                        'li',
                        { key: t + (e.display || e.value), className: r },
                        t &&
                          (0, c.createElement)(
                            c.Fragment,
                            null,
                            (0, c.createElement)(
                              'span',
                              { className: 'wc-block-components-product-details__name' },
                              (0, J.decodeEntities)(t),
                              ':',
                            ),
                            ' ',
                          ),
                        (0, c.createElement)(
                          'span',
                          { className: 'wc-block-components-product-details__value' },
                          (0, J.decodeEntities)(e.display || e.value),
                        ),
                      );
                    }),
                  )
              : null,
          Ve = window.wp.autop,
          Ye = e => e.replace(/<\/?[a-z][^>]*?>/gi, ''),
          Ue = (e, t) => e.replace(/[\s|\.\,]+$/i, '') + t,
          He = window.wp.wordcount,
          ze = ({
            source: e,
            maxLength: t = 15,
            countType: r = 'words',
            className: o = '',
            style: n = {},
          }) => {
            const a = (0, A.useMemo)(
              () =>
                ((e, t = 15, r = 'words') => {
                  const c = (0, Ve.autop)(e);
                  if ((0, He.count)(c, r) <= t) return c;
                  const o = (e => {
                    const t = e.indexOf('</p>');
                    return -1 === t ? e : e.substr(0, t + 4);
                  })(c);
                  return (0, He.count)(o, r) <= t
                    ? o
                    : 'words' === r
                    ? ((e, t, r = '&hellip;', c = !0) => {
                        const o = Ye(e),
                          n = o
                            .split(' ')
                            .splice(0, t)
                            .join(' ');
                        return n === o
                          ? c
                            ? (0, Ve.autop)(o)
                            : o
                          : c
                          ? (0, Ve.autop)(Ue(n, r))
                          : Ue(n, r);
                      })(o, t)
                    : ((e, t, r = !0, c = '&hellip;', o = !0) => {
                        const n = Ye(e),
                          a = n.slice(0, t);
                        if (a === n) return o ? (0, Ve.autop)(n) : n;
                        if (r) return (0, Ve.autop)(Ue(a, c));
                        const i = a.match(/([\s]+)/g),
                          s = i ? i.length : 0,
                          l = n.slice(0, t + s);
                        return o ? (0, Ve.autop)(Ue(l, c)) : Ue(l, c);
                      })(o, t, 'characters_including_spaces' === r);
                })(e, t, r),
              [e, t, r],
            );
            return (0, c.createElement)(A.RawHTML, { style: n, className: o }, a);
          },
          Ke = ({ className: e, shortDescription: t = '', fullDescription: r = '' }) => {
            const o = t || r;
            return o
              ? (0, c.createElement)(ze, {
                  className: e,
                  source: o,
                  maxLength: 15,
                  countType: h.wordCountType || 'words',
                })
              : null;
          };
        r(401);
        const Ge = ({
            shortDescription: e = '',
            fullDescription: t = '',
            itemData: r = [],
            variation: o = [],
          }) =>
            (0, c.createElement)(
              'div',
              { className: 'wc-block-components-product-metadata' },
              (0, c.createElement)(Ke, {
                className: 'wc-block-components-product-metadata__description',
                shortDescription: e,
                fullDescription: t,
              }),
              (0, c.createElement)($e, { details: r }),
              (0, c.createElement)($e, {
                details: o.map(({ attribute: e = '', value: t }) => ({ key: e, value: t })),
              }),
            ),
          Qe = ({ currency: e, saleAmount: t, format: r = '<price/>' }) => {
            if (!t || t <= 0) return null;
            r.includes('<price/>') ||
              ((r = '<price/>'),
              console.error('Price formats need to include the `<price/>` tag.'));
            const n = (0, o.sprintf) /* translators: %s will be replaced by the discount amount */(
              /* translators: %s will be replaced by the discount amount */
              (0, o.__)('Save %s', 'woocommerce'),
              r,
            );
            return (0, c.createElement)(
              Oe,
              { className: 'wc-block-components-sale-badge' },
              (0, A.createInterpolateElement)(n, {
                price: (0, c.createElement)(Te.FormattedMonetaryAmount, { currency: e, value: t }),
              }),
            );
          },
          We = (e, t) => e.convertPrecision(t.minorUnit).getAmount(),
          Ze = (0, A.forwardRef)(({ lineItem: e, onRemove: t = () => {}, tabIndex: r }, n) => {
            const {
                name: a = '',
                catalog_visibility: i = 'visible',
                short_description: s = '',
                description: m = '',
                low_stock_remaining: u = null,
                show_backorder_badge: p = !1,
                quantity_limits: d = { minimum: 1, maximum: 99, multiple_of: 1, editable: !0 },
                sold_individually: _ = !1,
                permalink: y = '',
                images: w = [],
                variation: b = [],
                item_data: g = [],
                prices: k = {
                  currency_code: 'USD',
                  currency_minor_unit: 2,
                  currency_symbol: '$',
                  currency_prefix: '$',
                  currency_suffix: '',
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  price: '0',
                  regular_price: '0',
                  sale_price: '0',
                  price_range: null,
                  raw_prices: { precision: 6, price: '0', regular_price: '0', sale_price: '0' },
                },
                totals: h = {
                  currency_code: 'USD',
                  currency_minor_unit: 2,
                  currency_symbol: '$',
                  currency_prefix: '$',
                  currency_suffix: '',
                  currency_decimal_separator: '.',
                  currency_thousand_separator: ',',
                  line_subtotal: '0',
                  line_subtotal_tax: '0',
                },
                extensions: v,
              } = e,
              { quantity: f, setItemQuantity: E, removeItem: P, isPendingDelete: S } = (e => {
                const t = { key: '', quantity: 1 };
                (e =>
                  (0, ee.isObject)(e) &&
                  (0, ee.objectHasProp)(e, 'key') &&
                  (0, ee.objectHasProp)(e, 'quantity') &&
                  (0, ee.isString)(e.key) &&
                  (0, ee.isNumber)(e.quantity))(e) && ((t.key = e.key), (t.quantity = e.quantity));
                const { key: r = '', quantity: c = 1 } = t,
                  { cartErrors: o } = ye(),
                  { __internalIncrementCalculating: n, __internalDecrementCalculating: a } = (0,
                  B.useDispatch)(G.CHECKOUT_STORE_KEY),
                  [i, s] = (0, A.useState)(c),
                  [l] = (0, he.d7)(i, 400),
                  m = (function(e, t) {
                    const r = (0, A.useRef)();
                    return (
                      (0, A.useEffect)(() => {
                        r.current === e || (r.current = e);
                      }, [e, t]),
                      r.current
                    );
                  })(l),
                  { removeItemFromCart: u, changeCartItemQuantity: p } = (0, B.useDispatch)(
                    G.CART_STORE_KEY,
                  );
                (0, A.useEffect)(() => s(c), [c]);
                const d = (0, B.useSelect)(
                    e => {
                      if (!r) return { quantity: !1, delete: !1 };
                      const t = e(G.CART_STORE_KEY);
                      return {
                        quantity: t.isItemPendingQuantity(r),
                        delete: t.isItemPendingDelete(r),
                      };
                    },
                    [r],
                  ),
                  _ = (0, A.useCallback)(
                    () =>
                      r
                        ? u(r).catch(e => {
                            (0, G.processErrorResponse)(e);
                          })
                        : Promise.resolve(!1),
                    [r, u],
                  );
                return (
                  (0, A.useEffect)(() => {
                    r &&
                      (0, ee.isNumber)(m) &&
                      Number.isFinite(m) &&
                      m !== l &&
                      p(r, l).catch(e => {
                        (0, G.processErrorResponse)(e);
                      });
                  }, [r, p, l, m]),
                  (0, A.useEffect)(
                    () => (
                      d.delete ? n() : a(),
                      () => {
                        d.delete && a();
                      }
                    ),
                    [a, n, d.delete],
                  ),
                  (0, A.useEffect)(
                    () => (
                      d.quantity || l !== i ? n() : a(),
                      () => {
                        (d.quantity || l !== i) && a();
                      }
                    ),
                    [n, a, d.quantity, l, i],
                  ),
                  {
                    isPendingDelete: d.delete,
                    quantity: i,
                    setItemQuantity: s,
                    removeItem: _,
                    cartItemQuantityErrors: o,
                  }
                );
              })(e),
              { dispatchStoreEvent: C } = {
                dispatchStoreEvent: (0, A.useCallback)((e, t = {}) => {
                  try {
                    (0, Me.doAction)(`experimental__woocommerce_blocks-${e}`, t);
                  } catch (e) {
                    console.error(e);
                  }
                }, []),
                dispatchCheckoutEvent: (0, A.useCallback)((e, t = {}) => {
                  try {
                    (0, Me.doAction)(`experimental__woocommerce_blocks-checkout-${e}`, {
                      ...t,
                      storeCart: (0, B.select)('wc/store/cart').getCartData(),
                    });
                  } catch (e) {
                    console.error(e);
                  }
                }, []),
              },
              { receiveCart: x, ...T } = ye(),
              N = (0, A.useMemo)(() => ({ context: 'cart', cartItem: e, cart: T }), [e, T]),
              R = (0, Ne.getCurrencyFromPriceResponse)(k),
              I = (0, U.applyCheckoutFilter)({
                filterName: 'itemName',
                defaultValue: a,
                extensions: v,
                arg: N,
              }),
              M = (0, Le.A)({
                amount: parseInt(k.raw_prices.regular_price, 10),
                precision: k.raw_prices.precision,
              }),
              L = (0, Le.A)({
                amount: parseInt(k.raw_prices.price, 10),
                precision: k.raw_prices.precision,
              }),
              O = M.subtract(L),
              D = O.multiply(f),
              j = (0, Ne.getCurrencyFromPriceResponse)(h);
            let q = parseInt(h.line_subtotal, 10);
            (0, l.getSetting)('displayCartPricesIncludingTax', !1) &&
              (q += parseInt(h.line_subtotal_tax, 10));
            const F = (0, Le.A)({ amount: q, precision: j.minorUnit }),
              $ = w.length ? w[0] : {},
              V = 'hidden' === i || 'search' === i,
              Y = (0, U.applyCheckoutFilter)({
                filterName: 'cartItemClass',
                defaultValue: '',
                extensions: v,
                arg: N,
              }),
              H = (0, U.applyCheckoutFilter)({
                filterName: 'cartItemPrice',
                defaultValue: '<price/>',
                extensions: v,
                arg: N,
                validation: U.productPriceValidation,
              }),
              z = (0, U.applyCheckoutFilter)({
                filterName: 'subtotalPriceFormat',
                defaultValue: '<price/>',
                extensions: v,
                arg: N,
                validation: U.productPriceValidation,
              }),
              K = (0, U.applyCheckoutFilter)({
                filterName: 'saleBadgePriceFormat',
                defaultValue: '<price/>',
                extensions: v,
                arg: N,
                validation: U.productPriceValidation,
              }),
              Q = (0, U.applyCheckoutFilter)({
                filterName: 'showRemoveItemLink',
                defaultValue: !0,
                extensions: v,
                arg: N,
              });
            return (0, c.createElement)(
              'tr',
              {
                className: Pe()('wc-block-cart-items__row', Y, { 'is-disabled': S }),
                ref: n,
                tabIndex: r,
              },
              (0, c.createElement)(
                'td',
                {
                  className: 'wc-block-cart-item__image',
                  'aria-hidden': !(0, ee.objectHasProp)($, 'alt') || !$.alt,
                },
                V
                  ? (0, c.createElement)(je, { image: $, fallbackAlt: I })
                  : (0, c.createElement)(
                      'a',
                      { href: y, tabIndex: -1 },
                      (0, c.createElement)(je, { image: $, fallbackAlt: I }),
                    ),
              ),
              (0, c.createElement)(
                'td',
                { className: 'wc-block-cart-item__product' },
                (0, c.createElement)(
                  'div',
                  { className: 'wc-block-cart-item__wrap' },
                  (0, c.createElement)(Ie, { disabled: S || V, name: I, permalink: y }),
                  p
                    ? (0, c.createElement)(De, null)
                    : !!u && (0, c.createElement)(qe, { lowStockRemaining: u }),
                  (0, c.createElement)(
                    'div',
                    { className: 'wc-block-cart-item__prices' },
                    (0, c.createElement)(Re, {
                      currency: R,
                      regularPrice: We(M, R),
                      price: We(L, R),
                      format: z,
                    }),
                  ),
                  (0, c.createElement)(Qe, { currency: R, saleAmount: We(O, R), format: K }),
                  (0, c.createElement)(Ge, {
                    shortDescription: s,
                    fullDescription: m,
                    itemData: g,
                    variation: b,
                  }),
                  (0, c.createElement)(
                    'div',
                    { className: 'wc-block-cart-item__quantity' },
                    !_ &&
                      !!d.editable &&
                      (0, c.createElement)(xe, {
                        disabled: S,
                        quantity: f,
                        minimum: d.minimum,
                        maximum: d.maximum,
                        step: d.multiple_of,
                        onChange: t => {
                          E(t), C('cart-set-item-quantity', { product: e, quantity: t });
                        },
                        itemName: I,
                      }),
                    Q &&
                      (0, c.createElement)(
                        'button',
                        {
                          className: 'wc-block-cart-item__remove-link',
                          'aria-label': (0,
                          o.sprintf) /* translators: %s refers to the item's name in the cart. */(
                            /* translators: %s refers to the item's name in the cart. */
                            (0, o.__)('Remove %s from cart', 'woocommerce'),
                            I,
                          ),
                          onClick: () => {
                            t(),
                              P(),
                              C('cart-remove-item', { product: e, quantity: f }),
                              (0, Se.speak)(
                                (0,
                                o.sprintf) /* translators: %s refers to the item name in the cart. */(
                                  /* translators: %s refers to the item name in the cart. */
                                  (0, o.__)('%s has been removed from your cart.', 'woocommerce'),
                                  I,
                                ),
                              );
                          },
                          disabled: S,
                        },
                        (0, o.__)('Remove item', 'woocommerce'),
                      ),
                  ),
                ),
              ),
              (0, c.createElement)(
                'td',
                { className: 'wc-block-cart-item__total' },
                (0, c.createElement)(
                  'div',
                  { className: 'wc-block-cart-item__total-price-and-sale-badge-wrapper' },
                  (0, c.createElement)(Re, { currency: j, format: H, price: F.getAmount() }),
                  f > 1 &&
                    (0, c.createElement)(Qe, { currency: R, saleAmount: We(D, R), format: K }),
                ),
              ),
            );
          });
        r(1045);
        const Xe = [...Array(3)].map((_x, e) => (0, c.createElement)(Ze, { lineItem: {}, key: e })),
          Je = e => {
            const t = {};
            return (
              e.forEach(({ key: e }) => {
                t[e] = (0, A.createRef)();
              }),
              t
            );
          },
          et = ({ lineItems: e = [], isLoading: t = !1, className: r }) => {
            const n = (0, A.useRef)(null),
              a = (0, A.useRef)(Je(e));
            (0, A.useEffect)(() => {
              a.current = Je(e);
            }, [e]);
            const i = e => () => {
                null != a && a.current && e && a.current[e].current instanceof HTMLElement
                  ? a.current[e].current.focus()
                  : n.current instanceof HTMLElement && n.current.focus();
              },
              s = t
                ? Xe
                : e.map((t, r) => {
                    const o = e.length > r + 1 ? e[r + 1].key : null;
                    return (0, c.createElement)(Ze, {
                      key: t.key,
                      lineItem: t,
                      onRemove: i(o),
                      ref: a.current[t.key],
                      tabIndex: -1,
                    });
                  });
            return (0, c.createElement)(
              'table',
              { className: Pe()('wc-block-cart-items', r), ref: n, tabIndex: -1 },
              (0, c.createElement)(
                'thead',
                null,
                (0, c.createElement)(
                  'tr',
                  { className: 'wc-block-cart-items__header' },
                  (0, c.createElement)(
                    'th',
                    { className: 'wc-block-cart-items__header-image' },
                    (0, c.createElement)('span', null, (0, o.__)('Product', 'woocommerce')),
                  ),
                  (0, c.createElement)(
                    'th',
                    { className: 'wc-block-cart-items__header-product' },
                    (0, c.createElement)('span', null, (0, o.__)('Details', 'woocommerce')),
                  ),
                  (0, c.createElement)(
                    'th',
                    { className: 'wc-block-cart-items__header-total' },
                    (0, c.createElement)('span', null, (0, o.__)('Total', 'woocommerce')),
                  ),
                ),
              ),
              (0, c.createElement)('tbody', null, s),
            );
          },
          tt = ({ className: e }) => {
            const { cartItems: t, cartIsLoading: r } = ye();
            return (0, c.createElement)(
              'div',
              { className: Pe()(e, 'wc-block-mini-cart__products-table') },
              (0, c.createElement)(et, {
                lineItems: t,
                isLoading: r,
                className: 'wc-block-mini-cart-items',
              }),
            );
          };
        (0, s.registerBlockType)('woocommerce/mini-cart-products-table-block', {
          icon: (0, c.createElement)(i.A, {
            icon: ge.A,
            className: 'wc-block-editor-components-block-icon',
          }),
          edit: () => {
            const e = (0, N.useBlockProps)();
            return (0, c.createElement)(
              'div',
              { ...e },
              (0, c.createElement)(fe, null, (0, c.createElement)(tt, { className: 'is-mobile' })),
            );
          },
          save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
        });
        var rt = r(8994),
          ct = r(923),
          ot = r.n(ct);
        function nt(e) {
          const t = (0, A.useRef)(e);
          return ot()(e, t.current) || (t.current = e), t.current;
        }
        const at = window.wc.wcBlocksRegistry,
          it = e =>
            `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
          st = ({ id: e, src: t = null, alt: r = '' }) =>
            t ? (0, c.createElement)('img', { className: it(e), src: t, alt: r }) : null,
          lt = [
            { id: 'alipay', alt: 'Alipay', src: v + 'payment-methods/alipay.svg' },
            { id: 'amex', alt: 'American Express', src: v + 'payment-methods/amex.svg' },
            { id: 'bancontact', alt: 'Bancontact', src: v + 'payment-methods/bancontact.svg' },
            { id: 'diners', alt: 'Diners Club', src: v + 'payment-methods/diners.svg' },
            { id: 'discover', alt: 'Discover', src: v + 'payment-methods/discover.svg' },
            { id: 'eps', alt: 'EPS', src: v + 'payment-methods/eps.svg' },
            { id: 'giropay', alt: 'Giropay', src: v + 'payment-methods/giropay.svg' },
            { id: 'ideal', alt: 'iDeal', src: v + 'payment-methods/ideal.svg' },
            { id: 'jcb', alt: 'JCB', src: v + 'payment-methods/jcb.svg' },
            { id: 'laser', alt: 'Laser', src: v + 'payment-methods/laser.svg' },
            { id: 'maestro', alt: 'Maestro', src: v + 'payment-methods/maestro.svg' },
            { id: 'mastercard', alt: 'Mastercard', src: v + 'payment-methods/mastercard.svg' },
            { id: 'multibanco', alt: 'Multibanco', src: v + 'payment-methods/multibanco.svg' },
            { id: 'p24', alt: 'Przelewy24', src: v + 'payment-methods/p24.svg' },
            { id: 'sepa', alt: 'Sepa', src: v + 'payment-methods/sepa.svg' },
            { id: 'sofort', alt: 'Sofort', src: v + 'payment-methods/sofort.svg' },
            { id: 'unionpay', alt: 'Union Pay', src: v + 'payment-methods/unionpay.svg' },
            { id: 'visa', alt: 'Visa', src: v + 'payment-methods/visa.svg' },
            { id: 'wechat', alt: 'WeChat', src: v + 'payment-methods/wechat.svg' },
          ];
        r(4957);
        const mt = ({ icons: e = [], align: t = 'center', className: r }) => {
            const o = (e => {
              const t = {};
              return (
                e.forEach(e => {
                  let r = {};
                  'string' == typeof e && (r = { id: e, alt: e, src: null }),
                    'object' == typeof e &&
                      (r = { id: e.id || '', alt: e.alt || '', src: e.src || null }),
                    r.id && (0, ee.isString)(r.id) && !t[r.id] && (t[r.id] = r);
                }),
                Object.values(t)
              );
            })(e);
            if (0 === o.length) return null;
            const n = Pe()(
              'wc-block-components-payment-method-icons',
              {
                'wc-block-components-payment-method-icons--align-left': 'left' === t,
                'wc-block-components-payment-method-icons--align-right': 'right' === t,
              },
              r,
            );
            return (0, c.createElement)(
              'div',
              { className: n },
              o.map(e => {
                const t = { ...e, ...((r = e.id), lt.find(e => e.id === r) || {}) };
                var r;
                return (0, c.createElement)(st, { key: 'payment-method-icon-' + e.id, ...t });
              }),
            );
          },
          ut = e =>
            Object.values(e).reduce((e, t) => (null !== t.icons && (e = e.concat(t.icons)), e), []);
        var pt = r(4040),
          dt = r.n(pt);
        let _t = (function(e) {
          return (
            (e.ADD_EVENT_CALLBACK = 'add_event_callback'),
            (e.REMOVE_EVENT_CALLBACK = 'remove_event_callback'),
            e
          );
        })({});
        const yt = {},
          wt = (e = yt, { type: t, eventType: r, id: c, callback: o, priority: n }) => {
            const a = e.hasOwnProperty(r) ? new Map(e[r]) : new Map();
            switch (t) {
              case _t.ADD_EVENT_CALLBACK:
                return a.set(c, { priority: n, callback: o }), { ...e, [r]: a };
              case _t.REMOVE_EVENT_CALLBACK:
                return a.delete(c), { ...e, [r]: a };
            }
          },
          bt = (e, t) => (r, c = 10) => {
            const o = ((e, t, r = 10) => ({
              id: Math.floor(Math.random() * Date.now()).toString(),
              type: _t.ADD_EVENT_CALLBACK,
              eventType: e,
              callback: t,
              priority: r,
            }))(e, r, c);
            return (
              t(o),
              () => {
                var r;
                t(((r = e), { id: o.id, type: _t.REMOVE_EVENT_CALLBACK, eventType: r }));
              }
            );
          },
          gt = (0, A.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          kt = ({ children: e }) => {
            const { isProcessing: t, isIdle: r, isCalculating: o, hasError: n } = (0, B.useSelect)(
                e => {
                  const t = e(G.CHECKOUT_STORE_KEY);
                  return {
                    isProcessing: t.isProcessing(),
                    isIdle: t.isIdle(),
                    hasError: t.hasError(),
                    isCalculating: t.isCalculating(),
                  };
                },
              ),
              { isPaymentReady: a } = (0, B.useSelect)(e => {
                const t = e(G.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: i } = (0, B.useDispatch)(G.VALIDATION_STORE_KEY),
              [s, l] = (0, A.useReducer)(wt, {}),
              { onPaymentSetup: m } = (e =>
                (0, A.useMemo)(() => ({ onPaymentSetup: bt('payment_setup', e) }), [e]))(l),
              u = (0, A.useRef)(s);
            (0, A.useEffect)(() => {
              u.current = s;
            }, [s]);
            const {
              __internalSetPaymentProcessing: p,
              __internalSetPaymentIdle: d,
              __internalEmitPaymentProcessingEvent: _,
            } = (0, B.useDispatch)(G.PAYMENT_STORE_KEY);
            (0, A.useEffect)(() => {
              !t || n || o || (p(), _(u.current, i));
            }, [t, n, o, p, _, i]),
              (0, A.useEffect)(() => {
                r && !a && d();
              }, [r, a, d]),
              (0, A.useEffect)(() => {
                n && a && d();
              }, [n, a, d]);
            const y = {
              onPaymentProcessing: (0, A.useMemo)(
                () =>
                  function(...e) {
                    return (
                      dt()('onPaymentProcessing', {
                        alternative: 'onPaymentSetup',
                        plugin: 'WooCommerce Blocks',
                      }),
                      m(...e)
                    );
                  },
                [m],
              ),
              onPaymentSetup: m,
            };
            return (0, c.createElement)(gt.Provider, { value: y }, e);
          };
        r(8371);
        const ht = () => {
            const { paymentMethods: e } = ((e = !1) => {
              const {
                  paymentMethodsInitialized: t,
                  expressPaymentMethodsInitialized: r,
                  availablePaymentMethods: c,
                  availableExpressPaymentMethods: o,
                } = (0, B.useSelect)(e => {
                  const t = e(G.PAYMENT_STORE_KEY);
                  return {
                    paymentMethodsInitialized: t.paymentMethodsInitialized(),
                    expressPaymentMethodsInitialized: t.expressPaymentMethodsInitialized(),
                    availableExpressPaymentMethods: t.getAvailableExpressPaymentMethods(),
                    availablePaymentMethods: t.getAvailablePaymentMethods(),
                  };
                }),
                n = Object.values(c).map(({ name: e }) => e),
                a = Object.values(o).map(({ name: e }) => e),
                i = (0, at.getPaymentMethods)(),
                s = (0, at.getExpressPaymentMethods)(),
                l = Object.keys(i).reduce((e, t) => (n.includes(t) && (e[t] = i[t]), e), {}),
                m = Object.keys(s).reduce((e, t) => (a.includes(t) && (e[t] = s[t]), e), {}),
                u = nt(l),
                p = nt(m);
              return { paymentMethods: e ? p : u, isInitialized: e ? r : t };
            })(!1);
            return (0, c.createElement)(mt, { icons: ut(e) });
          },
          vt = {
            cartButtonLabel: { type: 'string', default: (0, o.__)('View my cart', 'woocommerce') },
            checkoutButtonLabel: {
              type: 'string',
              default: (0, o.__)('Go to checkout', 'woocommerce'),
            },
          };
        (0, s.registerBlockType)('woocommerce/mini-cart-footer-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: rt.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          deprecated: [
            {
              attributes: vt,
              migrate(e, t) {
                const { cartButtonLabel: r, checkoutButtonLabel: c, ...o } = e;
                return [
                  o,
                  [
                    (0, s.createBlock)('woocommerce/mini-cart-cart-button-block', {
                      cartButtonLabel: r,
                    }),
                    (0, s.createBlock)('woocommerce/mini-cart-checkout-button-block', {
                      checkoutButtonLabel: c,
                    }),
                    ...t,
                  ],
                ];
              },
              isEligible: (e, t) => !t.length,
              save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
            },
          ],
          edit: () => {
            const e = (0, N.useBlockProps)(),
              { cartTotals: t } = ye(),
              r = (0, l.getSetting)('displayCartPricesIncludingTax', !1)
                ? parseInt(t.total_items, 10) + parseInt(t.total_items_tax, 10)
                : parseInt(t.total_items, 10);
            return (0, c.createElement)(
              'div',
              { ...e },
              (0, c.createElement)(
                'div',
                { className: 'wc-block-mini-cart__footer' },
                (0, c.createElement)(Te.TotalsItem, {
                  className: 'wc-block-mini-cart__footer-subtotal',
                  currency: (0, Ne.getCurrencyFromPriceResponse)(t),
                  label: (0, o.__)('Subtotal', 'woocommerce'),
                  value: r,
                  description: (0, o.__)(
                    'Shipping, taxes, and discounts calculated at checkout.',
                    'woocommerce',
                  ),
                }),
                (0, c.createElement)(
                  'div',
                  { className: 'wc-block-mini-cart__footer-actions' },
                  (0, c.createElement)(N.InnerBlocks, {
                    template: [
                      ['woocommerce/mini-cart-cart-button-block', {}],
                      ['woocommerce/mini-cart-checkout-button-block', {}],
                    ],
                  }),
                ),
                (0, c.createElement)(kt, null, (0, c.createElement)(ht, null)),
              ),
            );
          },
          save: () =>
            (0, c.createElement)(
              'div',
              { ...N.useBlockProps.save() },
              (0, c.createElement)(N.InnerBlocks.Content, null),
            ),
        });
        var ft = r(498),
          Et = r(1777);
        r(2080), r(7791);
        const Pt = () =>
            (0, c.createElement)('span', {
              className: 'wc-block-components-spinner',
              'aria-hidden': 'true',
            }),
          St = (0, A.forwardRef)((e, t) => {
            'showSpinner' in e &&
              dt()('showSpinner prop', {
                version: '8.9.0',
                alternative: 'Render a spinner in the button children instead.',
                plugin: 'WooCommerce',
              });
            const {
                className: r,
                showSpinner: o = !1,
                children: n,
                variant: a = 'contained',
                removeTextWrap: i = !1,
                ...s
              } = e,
              l = Pe()('wc-block-components-button', 'wp-element-button', r, a, {
                'wc-block-components-button--loading': o,
              });
            if ('href' in e)
              return (0, c.createElement)(Et.$, {
                render: (0, c.createElement)(
                  'a',
                  { ref: t, href: e.href },
                  o && (0, c.createElement)(Pt, null),
                  (0, c.createElement)(
                    'span',
                    { className: 'wc-block-components-button__text' },
                    n,
                  ),
                ),
                className: l,
                ...s,
              });
            const m = i
              ? e.children
              : (0, c.createElement)(
                  'span',
                  { className: 'wc-block-components-button__text' },
                  e.children,
                );
            return (0, c.createElement)(
              Et.$,
              { ref: t, className: l, ...s },
              o && (0, c.createElement)(Pt, null),
              m,
            );
          }),
          Ct = ({ onChange: e, placeholder: t, value: r, ...o }) =>
            (0, c.createElement)(
              St,
              { ...o },
              (0, c.createElement)(N.RichText, {
                multiline: !1,
                allowedFormats: [],
                value: r,
                placeholder: t,
                onChange: e,
              }),
            ),
          xt = (0, o.__)('Start shopping', 'woocommerce'),
          Tt = (e = '', t) =>
            e.includes('is-style-outline')
              ? 'outlined'
              : e.includes('is-style-fill')
              ? 'contained'
              : t,
          Nt = { startShoppingButtonLabel: { type: 'string', default: xt } };
        (0, s.registerBlockType)('woocommerce/mini-cart-shopping-button-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: ft.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: Nt,
          edit: ({ attributes: e, setAttributes: t }) => {
            const r = (0, N.useBlockProps)({ className: 'wp-block-button aligncenter' }),
              { startShoppingButtonLabel: o } = e;
            return (0, c.createElement)(
              'div',
              { ...r },
              (0, c.createElement)(Ct, {
                className: 'wc-block-mini-cart__shopping-button',
                value: o,
                placeholder: xt,
                onChange: e => {
                  t({ startShoppingButtonLabel: e });
                },
                variant: Tt(r.className, 'contained'),
              }),
            );
          },
          save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
        });
        const At = (0, o.__)('View my cart', 'woocommerce'),
          Bt = { cartButtonLabel: { type: 'string', default: At } };
        (0, s.registerBlockType)('woocommerce/mini-cart-cart-button-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: ft.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: Bt,
          edit: ({ attributes: e, setAttributes: t }) => {
            const r = (0, N.useBlockProps)({ className: 'wc-block-mini-cart__footer-cart' }),
              { cartButtonLabel: o } = e;
            return (0, c.createElement)(
              'div',
              { ...r },
              (0, c.createElement)(Ct, {
                variant: Tt(r.className, 'outlined'),
                value: o,
                placeholder: At,
                onChange: e => {
                  t({ cartButtonLabel: e });
                },
                style: r.style,
              }),
            );
          },
          save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
        });
        const Rt = (0, o.__)('Go to checkout', 'woocommerce'),
          It = { checkoutButtonLabel: { type: 'string', default: Rt } };
        (0, s.registerBlockType)('woocommerce/mini-cart-checkout-button-block', {
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: ft.A,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          attributes: It,
          edit: ({ attributes: e, setAttributes: t }) => {
            const r = (0, N.useBlockProps)({
                className: Pe()('wc-block-mini-cart__footer-checkout'),
              }),
              { checkoutButtonLabel: o } = e;
            return (0, c.createElement)(
              'div',
              { ...r },
              (0, c.createElement)(Ct, {
                variant: Tt(r.className, 'contained'),
                value: o,
                placeholder: Rt,
                onChange: e => {
                  t({ checkoutButtonLabel: e });
                },
                style: r.style,
              }),
            );
          },
          save: () => (0, c.createElement)('div', { ...N.useBlockProps.save() }),
        });
        const Mt = {
          apiVersion: 2,
          title: (0, o.__)('Mini-Cart Contents', 'woocommerce'),
          icon: {
            src: (0, c.createElement)(i.A, {
              icon: a,
              className: 'wc-block-editor-components-block-icon',
            }),
          },
          category: 'woocommerce',
          keywords: [(0, o.__)('WooCommerce', 'woocommerce')],
          description: (0, o.__)('Display a Mini-Cart widget.', 'woocommerce'),
          supports: {
            align: !1,
            html: !1,
            multiple: !1,
            reusable: !1,
            inserter: !1,
            color: { link: !0 },
            lock: !1,
            ...(T() && { __experimentalBorder: { color: !0, width: !0 } }),
          },
          attributes: F,
          example: { attributes: { isPreview: !0 } },
          edit: ({ clientId: e, attributes: t, setAttributes: r }) => {
            const { currentView: n, width: a } = t,
              i = (0, N.useBlockProps)(),
              s = [
                ['woocommerce/filled-mini-cart-contents-block', {}, []],
                ['woocommerce/empty-mini-cart-contents-block', {}, []],
              ];
            return (
              O({ clientId: e, registeredBlocks: $, defaultTemplate: s }),
              (0, A.useEffect)(() => {
                var e;
                const t = document.querySelector('.edit-site-visual-editor__editor-canvas');
                if (!(t instanceof HTMLIFrameElement)) return;
                const r =
                  t.contentDocument ||
                  (null === (e = t.contentWindow) || void 0 === e ? void 0 : e.document);
                if (!r) return;
                if (r.getElementById('mini-cart-contents-background-color')) return;
                const c = r.querySelectorAll('style'),
                  [o] = Array.from(c)
                    .map(e => {
                      var t;
                      return Array.from(
                        (null === (t = e.sheet) || void 0 === t ? void 0 : t.cssRules) || [],
                      );
                    })
                    .flatMap(e => e)
                    .filter(Boolean)
                    .filter(
                      e => '.editor-styles-wrapper' === e.selectorText && e.style.backgroundColor,
                    );
                if (!o) return;
                const n = o.style.backgroundColor;
                if (!n) return;
                const a = document.createElement('style');
                (a.id = 'mini-cart-contents-background-color'),
                  a.appendChild(
                    document.createTextNode(
                      `:where(.wp-block-woocommerce-mini-cart-contents) {\n\t\t\t\tbackground-color: ${n};\n\t\t\t}`,
                    ),
                  );
                const i = r.querySelector('.editor-styles-wrapper');
                i && i.appendChild(a);
              }, []),
              (0, c.createElement)(
                c.Fragment,
                null,
                T() &&
                  (0, c.createElement)(
                    N.InspectorControls,
                    { key: 'inspector' },
                    (0, c.createElement)(
                      L.PanelBody,
                      { title: (0, o.__)('Dimensions', 'woocommerce'), initialOpen: !0 },
                      (0, c.createElement)(L.__experimentalUnitControl, {
                        onChange: e => {
                          r({ width: e });
                        },
                        onBlur: e => {
                          '' === e.target.value
                            ? r({ width: F.width.default })
                            : Number(e.target.value) < 300 && r({ width: '300px' });
                        },
                        value: a,
                        units: [{ value: 'px', label: 'px', default: F.width.default }],
                      }),
                    ),
                  ),
                (0, c.createElement)('div', {
                  className: 'wc-block-components-drawer__screen-overlay',
                  'aria-hidden': 'true',
                }),
                (0, c.createElement)(
                  'div',
                  { className: 'wc-block-editor-mini-cart-contents__wrapper' },
                  (0, c.createElement)(
                    'div',
                    { ...i },
                    (0, c.createElement)(
                      M,
                      { currentView: n },
                      (0, c.createElement)(N.InnerBlocks, {
                        allowedBlocks: $,
                        template: s,
                        templateLock: !1,
                      }),
                    ),
                    (0, c.createElement)(D, { style: i.style }),
                  ),
                ),
              )
            );
          },
          save: () =>
            (0, c.createElement)(
              'div',
              { ...N.useBlockProps.save() },
              (0, c.createElement)(N.InnerBlocks.Content, null),
            ),
        };
        (0, s.registerBlockType)('woocommerce/mini-cart-contents', Mt);
      },
      2080: () => {},
      1045: () => {},
      4957: () => {},
      9507: () => {},
      4982: () => {},
      401: () => {},
      6625: () => {},
      4567: () => {},
      5193: () => {},
      3295: () => {},
      8371: () => {},
      7791: () => {},
      1609: e => {
        'use strict';
        e.exports = window.React;
      },
      195: e => {
        'use strict';
        e.exports = window.wp.a11y;
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
    },
    o = {};
  function n(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return c[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = c),
    (e = []),
    (n.O = (t, r, c, o) => {
      if (!r) {
        var a = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, c, o] = e[m], i = !0, s = 0; s < r.length; s++)
            (!1 & o || a >= o) && Object.keys(n.O).every(e => n.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((i = !1), o < a && (a = o));
          if (i) {
            e.splice(m--, 1);
            var l = c();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      o = o || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > o; m--) e[m] = e[m - 1];
      e[m] = [r, c, o];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, c) {
      if ((1 & c && (e = this(e)), 8 & c)) return e;
      if ('object' == typeof e && e) {
        if (4 & c && e.__esModule) return e;
        if (16 & c && 'function' == typeof e.then) return e;
      }
      var o = Object.create(null);
      n.r(o);
      var a = {};
      t = t || [null, r({}), r([]), r(r)];
      for (var i = 2 & c && e; 'object' == typeof i && !~t.indexOf(i); i = r(i))
        Object.getOwnPropertyNames(i).forEach(t => (a[t] = () => e[t]));
      return (a.default = () => e), n.d(o, a), o;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.j = 1028),
    (() => {
      var e = { 1028: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, r) => {
          var c,
            o,
            [a, i, s] = r,
            l = 0;
          if (a.some(t => 0 !== e[t])) {
            for (c in i) n.o(i, c) && (n.m[c] = i[c]);
            if (s) var m = s(n);
          }
          for (t && t(r); l < a.length; l++) (o = a[l]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(m);
        },
        r = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var a = n.O(void 0, [94], () => n(5528));
  (a = n.O(a)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['mini-cart-contents'] = a);
})();
