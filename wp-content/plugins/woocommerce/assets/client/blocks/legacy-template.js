(() => {
  var e,
    o,
    t,
    c = {
      6921: (e, o, t) => {
        'use strict';
        t.r(o);
        var c = {};
        t.r(c),
          t.d(c, {
            blockifyConfig: () => ve,
            getDescription: () => ye,
            isConversionPossible: () => he,
          });
        var r = {};
        t.r(r),
          t.d(r, {
            blockifyConfig: () => Ce,
            getDescription: () => Pe,
            isConversionPossible: () => Se,
          });
        var l = {};
        t.r(l),
          t.d(l, {
            blockifyConfig: () => xe,
            getDescription: () => Oe,
            getSkeleton: () => Ie,
            isConversionPossible: () => Te,
          });
        var a = t(1609);
        const i = window.wp.blocks,
          n = window.wc.wcSettings;
        var s, m, d, p, u, w, k, _, g, b;
        const f = (0, n.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          h = f.pluginUrl + 'assets/images/',
          y =
            (f.pluginUrl,
            f.buildPhase,
            null === (s = n.STORE_PAGES.shop) || void 0 === s || s.permalink,
            null === (m = n.STORE_PAGES.checkout) || void 0 === m || m.id,
            null === (d = n.STORE_PAGES.checkout) || void 0 === d || d.permalink,
            null === (p = n.STORE_PAGES.privacy) || void 0 === p || p.permalink,
            null === (u = n.STORE_PAGES.privacy) || void 0 === u || u.title,
            null === (w = n.STORE_PAGES.terms) || void 0 === w || w.permalink,
            null === (k = n.STORE_PAGES.terms) || void 0 === k || k.title,
            null === (_ = n.STORE_PAGES.cart) || void 0 === _ || _.id,
            null === (g = n.STORE_PAGES.cart) || void 0 === g || g.permalink,
            null !== (b = n.STORE_PAGES.myaccount) && void 0 !== b && b.permalink
              ? n.STORE_PAGES.myaccount.permalink
              : (0, n.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, n.getSetting)('localPickupEnabled', !1),
            (0, n.getSetting)('countries', {})),
          v = (0, n.getSetting)('countryData', {}),
          B =
            (Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, y[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowBilling)
                .map(e => [e, v[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(v)
                .filter(e => !0 === v[e].allowShipping)
                .map(e => [e, y[e] || '']),
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
            }),
          E =
            ((0, n.getSetting)('addressFieldsLocations', B).address,
            (0, n.getSetting)('addressFieldsLocations', B).contact,
            (0, n.getSetting)('addressFieldsLocations', B).order,
            (0, n.getSetting)('additionalOrderFields', {}),
            (0, n.getSetting)('additionalContactFields', {}),
            (0, n.getSetting)('additionalAddressFields', {}),
            window.wp.blockEditor),
          S = window.wp.components;
        var P = t(7723),
          C = t(7104),
          T = t(885);
        const N = window.wp.data;
        var O = t(6087);
        const I = window.wp.notices,
          x = window.wp.coreData;
        var A = t(5573),
          j = t(9019),
          D = t.n(j);
        const z = (0, a.createElement)(
            ({ className: e, height: o, width: t, ...c }) =>
              (0, a.createElement)(
                A.SVG,
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 245 145',
                  className: D()('woo-icon', e),
                  width: t,
                  height: o,
                  ...c,
                },
                (0, a.createElement)('path', {
                  fill: '#7f54b3',
                  d:
                    'M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z',
                }),
                (0, a.createElement)('path', {
                  fill: '#FFF',
                  fillRule: 'nonzero',
                  d:
                    'M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z',
                }),
              ),
            null,
          ),
          L = window.wc.wcTypes;
        t(7348), t(3803);
        const M = 'woocommerce/legacy-template',
          q = 'single-product',
          H = 'product-catalog',
          R = 'product-taxonomy',
          G = 'product-search-results',
          W = 'order-confirmation',
          F = 'archive-product',
          U = {
            'single-product': {
              type: q,
              title: (0, P.__)('Product (Classic)', 'woocommerce'),
              description: (0, P.__)('Displays the PHP product page.', 'woocommerce'),
              placeholder: 'single-product',
            },
            'archive-product': {
              type: H,
              title: (0, P.__)('Product Grid (Classic)', 'woocommerce'),
              description: (0, P.__)('Displays the PHP product grid page. ', 'woocommerce'),
              placeholder: F,
            },
            'taxonomy-product_cat': {
              type: R,
              title: (0, P.__)('Product Category (Classic)', 'woocommerce'),
              description: (0, P.__)('Displays the PHP product category page.', 'woocommerce'),
              placeholder: F,
            },
            'taxonomy-product_tag': {
              type: R,
              title: (0, P.__)('Product Tag (Classic)', 'woocommerce'),
              description: (0, P.__)('Displays the PHP product tag page.', 'woocommerce'),
              placeholder: F,
            },
            'taxonomy-product_attribute': {
              type: R,
              title: (0, P.__)('Product Attribute (Classic)', 'woocommerce'),
              description: (0, P.__)('Displays the PHP product attribute page.', 'woocommerce'),
              placeholder: F,
            },
            'taxonomy-product': {
              type: R,
              title: (0, P.__)("Product's Custom Taxonomy (Classic)", 'woocommerce'),
              description: (0, P.__)(
                "Displays the PHP product's custom taxonomy page.",
                'woocommerce',
              ),
              placeholder: F,
            },
            'product-search-results': {
              type: G,
              title: (0, P.__)('Product Search Results (Classic)', 'woocommerce'),
              description: (0, P.__)('Displays the PHP product search results.', 'woocommerce'),
              placeholder: F,
            },
            'checkout-header': {
              type: 'checkout-header',
              title: (0, P.__)('Checkout Header', 'woocommerce'),
              placeholder: 'checkout-header',
            },
            'order-confirmation': {
              type: W,
              title: (0, P.__)('Order Confirmation Block', 'woocommerce'),
              placeholder: 'fallback',
            },
          };
        function Y(e, o) {
          const t = Object.keys(o);
          let c = null;
          for (let r = 0; t.length > r; r++) {
            const l = o[e.substr(0, t[r].length)];
            if (l) {
              c = l;
              break;
            }
          }
          return c;
        }
        function V(e, o) {
          return !!Y(e, o);
        }
        const $ = (e, o) => {
            var t;
            const c = 'core/query-title',
              r = (
                (null === (t = (0, i.getBlockType)(c)) || void 0 === t ? void 0 : t.variations) ||
                []
              ).find(({ name: o }) => o === e);
            if (!r) return null;
            const { attributes: l } = r,
              a = { ...l, ...o, showPrefix: !1 };
            return (0, i.createBlock)(c, a);
          },
          J = (e, o) => {
            var t;
            const c = 'core/group',
              r = (
                (null === (t = (0, i.getBlockType)(c)) || void 0 === t ? void 0 : t.variations) ||
                []
              ).find(({ name: e }) => 'group-row' === e);
            if (!r) return null;
            const { attributes: l } = r,
              a = { ...l, ...o, layout: { ...l.layout, justifyContent: 'space-between' } };
            return (0, i.createBlock)(c, a, e);
          };
        var Q = t(4478);
        const K = (0, P.__)('Product Title', 'woocommerce'),
          X =
            ((0, a.createElement)(C.A, {
              icon: Q.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            (0, P.__)('Display the title of a product.', 'woocommerce'));
        function Z(
          e,
          { blockDescription: o, blockIcon: t, blockTitle: c, variationName: r, scope: l },
        ) {
          (0, i.registerBlockVariation)(e, {
            description: o,
            name: r,
            title: c,
            isActive: e => e.__woocommerceNamespace === r,
            icon: { src: t },
            attributes: { __woocommerceNamespace: r },
            scope: l,
          });
        }
        const ee = 'woocommerce/product-query/product-title';
        Z('core/post-title', {
          blockDescription: X,
          blockIcon: (0, a.createElement)(S.Icon, { icon: Q.A }),
          blockTitle: K,
          variationName: ee,
          scope: ['block'],
        });
        var oe = t(4396);
        const te = 'woocommerce/product-query/product-template';
        Z('core/post-template', {
          blockDescription: (0, P.__)(
            'Contains the block elements used to render a product, like its name, featured image, rating, and more.',
            'woocommerce',
          ),
          blockIcon: (0, a.createElement)(S.Icon, { icon: oe.A }),
          blockTitle: (0, P.__)('Product template', 'woocommerce'),
          variationName: te,
          scope: ['block', 'inserter'],
        });
        let ce = (function(e) {
          return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
        })({});
        const re = 'woocommerce/product-query',
          le = (0, n.getSetting)('stockStatusOptions', []),
          ae = {
            allowedControls: [
              'taxQuery',
              'search',
              'attributes',
              'presets',
              'productSelector',
              'onSale',
              'stockStatus',
              'wooInherit',
            ],
            displayLayout: { type: 'flex', columns: 3 },
            query: {
              perPage: 9,
              pages: 0,
              offset: 0,
              postType: 'product',
              order: 'asc',
              orderBy: 'title',
              author: '',
              search: '',
              exclude: [],
              sticky: '',
              inherit: !1,
              __woocommerceAttributes: [],
              __woocommerceStockStatus: (0, n.getSetting)('hideOutOfStockItems', !1)
                ? Object.keys(
                    (function(e, o) {
                      const { [o]: t, ...c } = e;
                      return c;
                    })(le, 'outofstock'),
                  )
                : Object.keys(le),
            },
          },
          ie = [
            [
              'core/post-template',
              {
                __woocommerceNamespace: te,
                className: 'products-block-post-template',
                ...((0, n.getSettingWithCoercion)(
                  'postTemplateHasSupportForGridView',
                  !1,
                  L.isBoolean,
                ) && { layout: { type: 'grid', columnCount: 3 } }),
              },
              [
                ['woocommerce/product-image', { imageSizing: ce.THUMBNAIL }],
                [
                  'core/post-title',
                  {
                    textAlign: 'center',
                    level: 3,
                    fontSize: 'medium',
                    style: { spacing: { margin: { bottom: '0.75rem', top: '0' } } },
                    isLink: !0,
                    __woocommerceNamespace: ee,
                  },
                ],
                ['woocommerce/product-price', { textAlign: 'center', fontSize: 'small' }],
                ['woocommerce/product-button', { textAlign: 'center', fontSize: 'small' }],
              ],
            ],
            ['core/query-pagination', { layout: { type: 'flex', justifyContent: 'center' } }],
            ['core/query-no-results'],
          ],
          ne = e =>
            (0, i.createBlock)(
              'core/query',
              { ...ae, ...e, namespace: re, query: { ...ae.query, inherit: !0 } },
              (0, i.createBlocksFromInnerBlocksTemplate)(ie),
            ),
          se = (e, o = !1) =>
            [
              (0, i.createBlock)('woocommerce/breadcrumbs', e),
              $('archive-title', e),
              o ? (0, i.createBlock)('core/term-description', e) : null,
              (0, i.createBlock)('woocommerce/store-notices', e),
              J(
                [
                  (0, i.createBlock)('woocommerce/product-results-count'),
                  (0, i.createBlock)('woocommerce/catalog-sorting'),
                ],
                e,
              ),
              ne(e),
            ].filter(Boolean),
          me = () => (0, n.isWpVersion)('6.1', '>='),
          de = (e, o) =>
            o
              ? (e =>
                  (0, P.sprintf) /* translators: %s is the template title */(
                    /* translators: %s is the template title */
                    (0, P.__)(
                      'Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.',
                      'woocommerce',
                    ),
                    e,
                  ))(e)
              : (e =>
                  (0, P.sprintf) /* translators: %s is the template title */(
                    /* translators: %s is the template title */
                    (0, P.__)(
                      'This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.',
                      'woocommerce',
                    ),
                    e,
                  ))(e),
          pe = () => (0, P.__)('Transform into blocks', 'woocommerce'),
          ue = {
            isConversionPossible: me,
            getDescription: de,
            blockifyConfig: {
              getButtonLabel: pe,
              onClickCallback: ({
                clientId: e,
                attributes: o,
                getBlocks: t,
                replaceBlock: c,
                selectBlock: r,
              }) => {
                c(e, se(o));
                const l = t().find(
                  e =>
                    'core/group' === e.name &&
                    e.innerBlocks.some(e => 'woocommerce/store-notices' === e.name),
                );
                l && r(l.clientId);
              },
              getBlockifiedTemplate: se,
            },
          },
          we = {
            isConversionPossible: me,
            getDescription: de,
            blockifyConfig: {
              getButtonLabel: pe,
              onClickCallback: ({
                clientId: e,
                attributes: o,
                getBlocks: t,
                replaceBlock: c,
                selectBlock: r,
              }) => {
                c(e, se(o, !0));
                const l = t().find(
                  e =>
                    'core/group' === e.name &&
                    e.innerBlocks.some(e => 'woocommerce/store-notices' === e.name),
                );
                l && r(l.clientId);
              },
              getBlockifiedTemplate: e => se(e, !0),
            },
          };
        var ke = t(6465);
        const _e = (0, P.__)('Product Summary', 'woocommerce'),
          ge =
            ((0, a.createElement)(C.A, {
              icon: ke.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            (0, P.__)('Display a short description about a product.', 'woocommerce')),
          be = 'woocommerce/product-query/product-summary';
        Z('core/post-excerpt', {
          blockDescription: ge,
          blockIcon: (0, a.createElement)(S.Icon, { icon: ke.A }),
          blockTitle: _e,
          variationName: be,
          scope: ['block'],
        });
        const fe = () =>
            [
              (0, i.createBlock)('woocommerce/breadcrumbs'),
              (0, i.createBlock)('woocommerce/store-notices'),
              (0, i.createBlock)('core/columns', { align: 'wide' }, [
                (0, i.createBlock)(
                  'core/column',
                  { type: 'constrained', justifyContent: 'right', width: '512px' },
                  [(0, i.createBlock)('woocommerce/product-image-gallery')],
                ),
                (0, i.createBlock)('core/column', {}, [
                  (0, i.createBlock)('core/post-title', { __woocommerceNamespace: ee, level: 1 }),
                  (0, i.createBlock)('woocommerce/product-rating'),
                  (0, i.createBlock)('woocommerce/product-price', { fontSize: 'large' }),
                  (0, i.createBlock)('core/post-excerpt', { __woocommerceNamespace: be }),
                  (0, i.createBlock)('woocommerce/add-to-cart-form'),
                  (0, i.createBlock)('woocommerce/product-meta'),
                ]),
              ]),
              (0, i.createBlock)('woocommerce/product-details', {
                align: 'wide',
                className: 'is-style-minimal',
              }),
              (0, i.createBlock)('woocommerce/related-products', { align: 'wide' }),
            ].filter(Boolean),
          he = () => (0, n.isWpVersion)('6.1', '>='),
          ye = (e, o) =>
            o
              ? (e =>
                  (0, P.sprintf) /* translators: %s is the template title */(
                    /* translators: %s is the template title */
                    (0, P.__)(
                      'Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.',
                      'woocommerce',
                    ),
                    e,
                  ))(e)
              : (e =>
                  (0, P.sprintf) /* translators: %s is the template title */(
                    /* translators: %s is the template title */
                    (0, P.__)(
                      'This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.',
                      'woocommerce',
                    ),
                    e,
                  ))(e),
          ve = {
            getButtonLabel: () => (0, P.__)('Transform into blocks', 'woocommerce'),
            onClickCallback: ({ clientId: e, getBlocks: o, replaceBlock: t, selectBlock: c }) => {
              t(e, fe());
              const r = o().find(
                e =>
                  'core/group' === e.name &&
                  e.innerBlocks.some(e => 'woocommerce/breadcrumbs' === e.name),
              );
              r && c(r.clientId);
            },
            getBlockifiedTemplate: fe,
          },
          Be = e => {
            const o = ((e, o) => {
              const t = [
                  (0, i.createBlock)('core/paragraph', {
                    content: (0, P.__)(
                      'No products were found matching your selection.',
                      'woocommerce',
                    ),
                  }),
                  (0, i.createBlock)('core/search', {
                    buttonPosition: 'button-outside',
                    buttonText: (0, P.__)('Search', 'woocommerce'),
                    buttonUseIcon: !1,
                    showLabel: !1,
                    placeholder: (0, P.__)('Search products…', 'woocommerce'),
                    query: { post_type: 'product' },
                  }),
                ],
                c = 'core/query-no-results',
                r = e.findIndex(e => e[0] === c),
                l = { ...(e[r][1] || {}), ...o },
                a = [c, l, t];
              return [...ie.slice(0, r), a, ...ie.slice(r + 1)];
            })(ie, e);
            return (0, i.createBlock)(
              'core/query',
              { ...ae, ...e, namespace: re, query: { ...ae.query, inherit: !0 } },
              (0, i.createBlocksFromInnerBlocksTemplate)(o),
            );
          },
          Ee = e =>
            [
              $('search-title', e),
              (0, i.createBlock)('woocommerce/store-notices', e),
              J(
                [
                  (0, i.createBlock)('woocommerce/product-results-count'),
                  (0, i.createBlock)('woocommerce/catalog-sorting'),
                ],
                e,
              ),
              Be(e),
            ].filter(Boolean),
          Se = () => (0, n.isWpVersion)('6.1', '>='),
          Pe = (e, o) =>
            o
              ? (e =>
                  (0, P.sprintf) /* translators: %s is the template title */(
                    /* translators: %s is the template title */
                    (0, P.__)(
                      'Transform this template into multiple blocks so you can add, remove, reorder, and customize your %s template.',
                      'woocommerce',
                    ),
                    e,
                  ))(e)
              : (e =>
                  (0, P.sprintf) /* translators: %s is the template title */(
                    /* translators: %s is the template title */
                    (0, P.__)(
                      'This block serves as a placeholder for your %s. It will display the actual product image, title, price in your store. You can move this placeholder around and add more blocks around to customize the template.',
                      'woocommerce',
                    ),
                    e,
                  ))(e),
          Ce = {
            getButtonLabel: () => (0, P.__)('Transform into blocks', 'woocommerce'),
            onClickCallback: ({
              clientId: e,
              attributes: o,
              getBlocks: t,
              replaceBlock: c,
              selectBlock: r,
            }) => {
              c(e, Ee(o));
              const l = t().find(
                e =>
                  'core/group' === e.name &&
                  e.innerBlocks.some(e => 'woocommerce/store-notices' === e.name),
              );
              l && r(l.clientId);
            },
            getBlockifiedTemplate: Ee,
          },
          Te = () => !0,
          Ne = e =>
            [
              (0, i.createBlock)('woocommerce/order-confirmation-status', {
                ...e,
                fontSize: 'large',
              }),
              (0, i.createBlock)('woocommerce/order-confirmation-summary', e),
              (0, i.createBlock)('woocommerce/order-confirmation-totals-wrapper', e),
              (0, i.createBlock)('woocommerce/order-confirmation-downloads-wrapper', e),
              (0, i.createBlock)(
                'core/columns',
                { ...e, className: 'woocommerce-order-confirmation-address-wrapper' },
                [
                  (0, i.createBlock)('core/column', e, [
                    (0, i.createBlock)('woocommerce/order-confirmation-shipping-wrapper', e),
                  ]),
                  (0, i.createBlock)('core/column', e, [
                    (0, i.createBlock)('woocommerce/order-confirmation-billing-wrapper', e),
                  ]),
                ],
              ),
              (0, i.createBlock)('woocommerce/order-confirmation-additional-fields-wrapper', e),
              (0, i.createBlock)('woocommerce/order-confirmation-additional-information', e),
            ].filter(Boolean),
          Oe = () =>
            (0, P.__)(
              'This block represents the classic template used to display the order confirmation. The actual rendered template may appear different from this placeholder.',
              'woocommerce',
            ),
          Ie = () =>
            (0, a.createElement)(
              'div',
              { className: 'woocommerce-page' },
              (0, a.createElement)(
                'div',
                { className: 'woocommerce-order' },
                (0, a.createElement)('h1', null, (0, P.__)('Order received', 'woocommerce')),
                (0, a.createElement)(
                  'p',
                  {
                    className:
                      'woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-confirmation',
                  },
                  (0, P.__)('Thank you. Your order has been received.', 'woocommerce'),
                ),
                (0, a.createElement)(
                  'ul',
                  {
                    className:
                      'woocommerce-order-overview woocommerce-thankyou-order-details order_details',
                  },
                  (0, a.createElement)(
                    'li',
                    { className: 'woocommerce-order-overview__order order' },
                    (0, P.__)('Order number', 'woocommerce'),
                    ':',
                    ' ',
                    (0, a.createElement)('strong', null, '123'),
                  ),
                  (0, a.createElement)(
                    'li',
                    { className: 'woocommerce-order-overview__date date' },
                    (0, P.__)('Date', 'woocommerce'),
                    ':',
                    ' ',
                    (0, a.createElement)('strong', null, 'May 25, 2023'),
                  ),
                  (0, a.createElement)(
                    'li',
                    { className: 'woocommerce-order-overview__email email' },
                    (0, P.__)('Email', 'woocommerce'),
                    ':',
                    ' ',
                    (0, a.createElement)('strong', null, 'shopper@woocommerce.com'),
                  ),
                  (0, a.createElement)(
                    'li',
                    { className: 'woocommerce-order-overview__total total' },
                    (0, P.__)('Total', 'woocommerce'),
                    ':',
                    ' ',
                    (0, a.createElement)('strong', null, '$20.00'),
                  ),
                ),
                (0, a.createElement)(
                  'section',
                  { className: 'woocommerce-order-details' },
                  (0, a.createElement)(
                    'h2',
                    { className: 'woocommerce-order-details__title' },
                    (0, P.__)('Order details', 'woocommerce'),
                  ),
                  (0, a.createElement)(
                    'table',
                    {
                      className:
                        'woocommerce-table woocommerce-table--order-details shop_table order_details',
                    },
                    (0, a.createElement)(
                      'thead',
                      null,
                      (0, a.createElement)(
                        'tr',
                        null,
                        (0, a.createElement)(
                          'th',
                          { className: 'woocommerce-table__product-name product-name' },
                          (0, P.__)('Product', 'woocommerce'),
                        ),
                        (0, a.createElement)(
                          'th',
                          { className: 'woocommerce-table__product-table product-total' },
                          (0, P.__)('Total', 'woocommerce'),
                        ),
                      ),
                    ),
                    (0, a.createElement)(
                      'tbody',
                      null,
                      (0, a.createElement)(
                        'tr',
                        { className: 'woocommerce-table__line-item order_item' },
                        (0, a.createElement)(
                          'td',
                          { className: 'woocommerce-table__product-name product-name' },
                          'Sample Product',
                          ' ',
                          (0, a.createElement)('strong', { className: 'product-quantity' }, '× 2'),
                          ' ',
                        ),
                        (0, a.createElement)(
                          'td',
                          { className: 'woocommerce-table__product-total product-total' },
                          '$20.00',
                        ),
                      ),
                    ),
                    (0, a.createElement)(
                      'tfoot',
                      null,
                      (0, a.createElement)(
                        'tr',
                        null,
                        (0, a.createElement)(
                          'th',
                          { scope: 'row' },
                          (0, P.__)('Subtotal', 'woocommerce'),
                          ':',
                        ),
                        (0, a.createElement)('td', null, '$20.00'),
                      ),
                      (0, a.createElement)(
                        'tr',
                        null,
                        (0, a.createElement)(
                          'th',
                          { scope: 'row' },
                          (0, P.__)('Total', 'woocommerce'),
                          ':',
                        ),
                        (0, a.createElement)('td', null, '$20.00'),
                      ),
                    ),
                  ),
                ),
                (0, a.createElement)(
                  'section',
                  { className: 'woocommerce-customer-details' },
                  (0, a.createElement)(
                    'section',
                    {
                      className:
                        'woocommerce-columns woocommerce-columns--2 woocommerce-columns--addresses col2-set addresses',
                    },
                    (0, a.createElement)(
                      'div',
                      {
                        className:
                          'woocommerce-column woocommerce-column--1 woocommerce-column--billing-address col-1',
                      },
                      (0, a.createElement)(
                        'h2',
                        { className: 'woocommerce-column__title' },
                        (0, P.__)('Billing address', 'woocommerce'),
                      ),
                      (0, a.createElement)(
                        'address',
                        null,
                        '123 Main St',
                        (0, a.createElement)('br', null),
                        'New York, NY 10001',
                        (0, a.createElement)('br', null),
                        'United States (US)',
                      ),
                    ),
                    (0, a.createElement)(
                      'div',
                      {
                        className:
                          'woocommerce-column woocommerce-column--2 woocommerce-column--shipping-address col-2',
                      },
                      (0, a.createElement)(
                        'h2',
                        { className: 'woocommerce-column__title' },
                        (0, P.__)('Shipping address', 'woocommerce'),
                      ),
                      (0, a.createElement)(
                        'address',
                        null,
                        '123 Main St',
                        (0, a.createElement)('br', null),
                        'New York, NY 10001',
                        (0, a.createElement)('br', null),
                        'United States (US)',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          xe = {
            getButtonLabel: () => (0, P.__)('Transform into blocks', 'woocommerce'),
            onClickCallback: ({
              clientId: e,
              attributes: o,
              getBlocks: t,
              replaceBlock: c,
              selectBlock: r,
            }) => {
              c(e, Ne(o));
              const l = t().find(
                e =>
                  'core/group' === e.name &&
                  e.innerBlocks.some(e => 'woocommerce/store-notices' === e.name),
              );
              l && r(l.clientId);
            },
            getBlockifiedTemplate: Ne,
          },
          Ae = {
            [H]: ue,
            [R]: we,
            [q]: c,
            [G]: r,
            [W]: l,
            fallback: {
              isConversionPossible: () => !1,
              getBlockifiedTemplate: () => [],
              getDescription: () => '',
              onClickCallback: () => {},
            },
          },
          je = ({ blockifyConfig: e, clientId: o, attributes: t }) => {
            const { getButtonLabel: c, onClickCallback: r, getBlockifiedTemplate: l } = e,
              [n, s] = (0, O.useState)(!1),
              { replaceBlock: m, selectBlock: d, replaceBlocks: p } = (0, N.useDispatch)(E.store),
              { getBlocks: u } = (0, N.useSelect)(e => ({ getBlocks: e(E.store).getBlocks }), []),
              { createInfoNotice: w } = (0, N.useDispatch)(I.store);
            return (0, a.createElement)(
              'div',
              {
                className:
                  'wp-block-woocommerce-classic-template__placeholder-migration-button-container',
              },
              (0, a.createElement)(
                S.Button,
                {
                  variant: 'primary',
                  onClick: () => {
                    r({
                      clientId: o,
                      getBlocks: u,
                      attributes: t,
                      replaceBlock: m,
                      selectBlock: d,
                    }),
                      w((0, P.__)('Template transformed into blocks!', 'woocommerce'), {
                        actions: [
                          {
                            label: (0, P.__)('Undo', 'woocommerce'),
                            onClick: () => {
                              const e = u().reduce(
                                (e, o) =>
                                  'core/template-part' === o.name ? e : [...e, o.clientId],
                                [],
                              );
                              p(
                                e,
                                (0, i.createBlock)(
                                  'core/group',
                                  { layout: { inherit: !0, type: 'constrained' } },
                                  [
                                    (0, i.createBlock)('woocommerce/legacy-template', {
                                      template: t.template,
                                    }),
                                  ],
                                ),
                              );
                            },
                          },
                        ],
                        type: 'snackbar',
                      });
                  },
                  onMouseEnter: () => s(!0),
                  onMouseLeave: () => s(!1),
                  text: c ? c() : '',
                },
                n &&
                  (0, a.createElement)(
                    S.Popover,
                    { resize: !1, placement: 'right-end' },
                    (0, a.createElement)(
                      'div',
                      {
                        style: {
                          minWidth: '250px',
                          width: '250px',
                          maxWidth: '250px',
                          minHeight: '300px',
                          height: '300px',
                          maxHeight: '300px',
                          cursor: 'pointer',
                        },
                      },
                      (0, a.createElement)(E.BlockPreview, {
                        blocks: l({ ...t, isPreview: !0 }),
                        viewportWidth: 1200,
                        additionalStyles: [
                          {
                            css:
                              'body { padding: 20px !important; height: fit-content !important; overflow:hidden}',
                          },
                        ],
                      }),
                    ),
                  ),
              ),
            );
          },
          De = ({ clientId: e, attributes: o, setAttributes: t }) => {
            var c, r, l, i, n;
            const s = (0, E.useBlockProps)(),
              { editedPostId: m } = (0, N.useSelect)(
                e => ({ editedPostId: e('core/edit-site').getEditedPostId() }),
                [],
              ),
              d = (0, x.useEntityRecord)('postType', 'wp_template', m),
              p = Y(o.template, U),
              u =
                null !==
                  (c =
                    null === (r = d.record) ||
                    void 0 === r ||
                    null === (l = r.title.rendered) ||
                    void 0 === l
                      ? void 0
                      : l.toLowerCase()) && void 0 !== c
                  ? c
                  : o.template,
              w =
                null !== (i = null == p ? void 0 : p.placeholder) && void 0 !== i ? i : 'fallback',
              k = null !== (n = null == p ? void 0 : p.type) && void 0 !== n ? n : 'fallback';
            (0, O.useEffect)(() => {
              var e;
              return t({
                template: o.template,
                align: null !== (e = o.align) && void 0 !== e ? e : 'wide',
              });
            }, [o.align, o.template, t]);
            const {
                isConversionPossible: _,
                getDescription: g,
                getSkeleton: b,
                blockifyConfig: f,
              } = Ae[k],
              y = b
                ? b()
                : (0, a.createElement)('img', {
                    className: 'wp-block-woocommerce-classic-template__placeholder-image',
                    src: `${h}template-placeholders/${w}.svg`,
                    alt: u,
                  }),
              v = _(),
              B = g(u, v);
            return (0, a.createElement)(
              'div',
              { ...s },
              (0, a.createElement)(
                S.Placeholder,
                { className: 'wp-block-woocommerce-classic-template__placeholder' },
                (0, a.createElement)(
                  'div',
                  { className: 'wp-block-woocommerce-classic-template__placeholder-wireframe' },
                  y,
                ),
                (0, a.createElement)(
                  'div',
                  { className: 'wp-block-woocommerce-classic-template__placeholder-copy' },
                  (0, a.createElement)(
                    'div',
                    {
                      className:
                        'wp-block-woocommerce-classic-template__placeholder-copy__icon-container',
                    },
                    (0, a.createElement)(
                      'span',
                      { className: 'woo-icon' },
                      (0, a.createElement)(C.A, { icon: z }),
                      ' ',
                      (0, P.__)('WooCommerce', 'woocommerce'),
                    ),
                    (0, a.createElement)(
                      'span',
                      null,
                      (0, P.__)('Classic Template Placeholder', 'woocommerce'),
                    ),
                  ),
                  (0, a.createElement)('p', { dangerouslySetInnerHTML: { __html: B } }),
                  (0, a.createElement)(
                    'p',
                    null,
                    (0, P.__)(
                      'You cannot edit the content of this block. However, you can move it and place other blocks around it.',
                      'woocommerce',
                    ),
                  ),
                  v &&
                    f &&
                    (0, a.createElement)(je, { clientId: e, blockifyConfig: f, attributes: o }),
                ),
              ),
            );
          },
          ze = ((e, o, t) => {
            let c,
              r = null;
            const l = (...o) => {
              (r = o),
                c && clearTimeout(c),
                (c = setTimeout(() => {
                  (c = null), r && e(...r);
                }, 100));
            };
            return (
              (l.flush = () => {
                c && r && (e(...r), clearTimeout(c), (c = null));
              }),
              l
            );
          })(() => {
            const e = (0, N.select)('core/block-editor')
              .getBlocks()
              .flatMap(e => [e, ...e.innerBlocks])
              .find(e => 'core/missing' === e.name && e.attributes.originalName === M);
            if (e) {
              const o = (0, i.parse)(e.attributes.originalContent);
              o && (0, N.dispatch)('core/block-editor').replaceBlock(e.clientId, o);
            }
          });
        let Le;
        (0, N.subscribe)(() => {
          var e;
          const o = Le,
            t = (0, N.select)('core/edit-site'),
            c = null == t ? void 0 : t.getEditedPostId();
          Le = (0, L.isNumber)(c) ? void 0 : c;
          const r = null === (e = Le) || void 0 === e ? void 0 : e.split('//')[1];
          if (null == r) return;
          const l = (0, i.getBlockType)(M),
            n = Boolean(l);
          return (
            n && V(r, U) && ze(),
            o !== Le
              ? !n ||
                (V(r, U) &&
                  !(function(e, o) {
                    const t = Y(o, U);
                    return (null == e ? void 0 : e.title) !== (null == t ? void 0 : t.title);
                  })(l, r))
                ? void (
                    !n &&
                    V(r, U) &&
                    (({ template: e, inserter: o }) => {
                      (0, i.registerBlockType)(M, {
                        title:
                          e && U[e]
                            ? U[e].title
                            : (0, P.__)('WooCommerce Classic Template', 'woocommerce'),
                        icon: (0, a.createElement)(C.A, {
                          icon: T.A,
                          className: 'wc-block-editor-components-block-icon',
                        }),
                        category: 'woocommerce',
                        apiVersion: 2,
                        keywords: [(0, P.__)('WooCommerce', 'woocommerce')],
                        description:
                          e && U[e]
                            ? U[e].description
                            : (0, P.__)(
                                'Renders classic WooCommerce PHP templates.',
                                'woocommerce',
                              ),
                        supports: {
                          align: ['wide', 'full'],
                          html: !1,
                          multiple: !1,
                          reusable: !1,
                          inserter: o,
                        },
                        attributes: {
                          template: { type: 'string', default: 'any' },
                          align: { type: 'string', default: 'wide' },
                        },
                        edit: ({ attributes: o, clientId: t, setAttributes: c }) => {
                          const r = null != e ? e : o.template;
                          return (0, a.createElement)(De, {
                            attributes: { ...o, template: r },
                            setAttributes: c,
                            clientId: t,
                          });
                        },
                        save: () => null,
                      });
                    })({ template: r, inserter: !0 })
                  )
                : ((0, i.unregisterBlockType)(M), void (Le = void 0))
              : void 0
          );
        }, 'core/blocks-editor');
      },
      7348: () => {},
      3803: () => {},
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
    r = {};
  function l(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var t = (r[e] = { exports: {} });
    return c[e].call(t.exports, t, t.exports, l), t.exports;
  }
  (l.m = c),
    (e = []),
    (l.O = (o, t, c, r) => {
      if (!t) {
        var a = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [t, c, r] = e[m], i = !0, n = 0; n < t.length; n++)
            (!1 & r || a >= r) && Object.keys(l.O).every(e => l.O[e](t[n]))
              ? t.splice(n--, 1)
              : ((i = !1), r < a && (a = r));
          if (i) {
            e.splice(m--, 1);
            var s = c();
            void 0 !== s && (o = s);
          }
        }
        return o;
      }
      r = r || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > r; m--) e[m] = e[m - 1];
      e[m] = [t, c, r];
    }),
    (l.n = e => {
      var o = e && e.__esModule ? () => e.default : () => e;
      return l.d(o, { a: o }), o;
    }),
    (t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (l.t = function(e, c) {
      if ((1 & c && (e = this(e)), 8 & c)) return e;
      if ('object' == typeof e && e) {
        if (4 & c && e.__esModule) return e;
        if (16 & c && 'function' == typeof e.then) return e;
      }
      var r = Object.create(null);
      l.r(r);
      var a = {};
      o = o || [null, t({}), t([]), t(t)];
      for (var i = 2 & c && e; 'object' == typeof i && !~o.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach(o => (a[o] = () => e[o]));
      return (a.default = () => e), l.d(r, a), r;
    }),
    (l.d = (e, o) => {
      for (var t in o)
        l.o(o, t) && !l.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
    (l.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
    (l.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.j = 2733),
    (() => {
      var e = { 2733: 0 };
      l.O.j = o => 0 === e[o];
      var o = (o, t) => {
          var c,
            r,
            [a, i, n] = t,
            s = 0;
          if (a.some(o => 0 !== e[o])) {
            for (c in i) l.o(i, c) && (l.m[c] = i[c]);
            if (n) var m = n(l);
          }
          for (o && o(t); s < a.length; s++) (r = a[s]), l.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return l.O(m);
        },
        t = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t)));
    })();
  var a = l.O(void 0, [94], () => l(6921));
  (a = l.O(a)), (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['legacy-template'] = a);
})();
