(() => {
  var e,
    t,
    o,
    r = {
      1923: (e, t, o) => {
        'use strict';
        o.r(t);
        const r = window.wp.blocks,
          c = JSON.parse(
            '{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"woocommerce/product-collection","version":"1.0.0","title":"Product Collection","description":"Display a collection of products from your store.","category":"woocommerce","keywords":["WooCommerce","Products (Beta)"],"textdomain":"woocommerce","attributes":{"queryId":{"type":"number"},"query":{"type":"object"},"tagName":{"type":"string"},"displayLayout":{"type":"object"},"convertedFromProducts":{"type":"boolean","default":false},"collection":{"type":"string"},"hideControls":{"default":[],"type":"array"},"queryContextIncludes":{"type":"array"},"forcePageReload":{"type":"boolean","default":false},"__privatePreviewState":{"type":"object"}},"providesContext":{"queryId":"queryId","query":"query","displayLayout":"displayLayout","queryContextIncludes":"queryContextIncludes","collection":"collection","__privateProductCollectionPreviewState":"__privatePreviewState"},"usesContext":["templateSlug"],"supports":{"align":["wide","full"],"anchor":true,"html":false,"__experimentalLayout":true,"interactivity":true}}',
          );
        var n = o(1609);
        const l = window.wp.blockEditor;
        var a = o(6087);
        const s = window.wp.data;
        var i = o(7723);
        const m = window.wp.components;
        var u = o(4922);
        const d = o.n(u)()('wc-admin:tracks');
        function p(e, t) {
          return (
            d('recordevent %s %o', 'wcadmin_' + e, t, {
              _tqk: window._tkq,
              shouldRecord: !(!window._tkq || !window.wcTracks || !window.wcTracks.isEnabled),
            }),
            !(!window.wcTracks || 'function' != typeof window.wcTracks.recordEvent) &&
              void window.wcTracks.recordEvent(e, t)
          );
        }
        let _ = (function(e) {
            return (e.GRID = 'flex'), (e.STACK = 'list'), e;
          })({}),
          w = (function(e) {
            return (e.IN = 'in'), (e.NOT_IN = 'not-in'), e;
          })({}),
          g = (function(e) {
            return (
              (e.PRODUCT_CATALOG = 'woocommerce/product-collection/product-catalog'),
              (e.CUSTOM = 'woocommerce/product-collection/custom'),
              (e.BEST_SELLERS = 'woocommerce/product-collection/best-sellers'),
              (e.FEATURED = 'woocommerce/product-collection/featured'),
              (e.NEW_ARRIVALS = 'woocommerce/product-collection/new-arrivals'),
              (e.ON_SALE = 'woocommerce/product-collection/on-sale'),
              (e.TOP_RATED = 'woocommerce/product-collection/top-rated'),
              e
            );
          })({}),
          b = (function(e) {
            return (
              (e.ATTRIBUTES = 'attributes'),
              (e.CREATED = 'created'),
              (e.FEATURED = 'featured'),
              (e.HAND_PICKED = 'hand-picked'),
              (e.INHERIT = 'inherit'),
              (e.KEYWORD = 'keyword'),
              (e.ON_SALE = 'on-sale'),
              (e.ORDER = 'order'),
              (e.STOCK_STATUS = 'stock-status'),
              (e.TAXONOMY = 'taxonomy'),
              (e.PRICE_RANGE = 'price-range'),
              e
            );
          })({});
        var y = o(7104),
          h = o(4552);
        const E = window.wc.wcSettings;
        let v = (function(e) {
          return (e.SINGLE = 'single'), (e.THUMBNAIL = 'thumbnail'), e;
        })({});
        var f = o(4478);
        function k(e, { blockDescription: t, blockIcon: o, blockTitle: c, variationName: n }) {
          (0, r.registerBlockVariation)(e, {
            description: t,
            name: n,
            title: c,
            isActive: e => e.__woocommerceNamespace === n,
            icon: { src: o },
            attributes: { __woocommerceNamespace: n },
            scope: ['block', 'inserter'],
          });
        }
        const S = (0, i.__)('Product Title', 'woocommerce'),
          C =
            ((0, n.createElement)(y.A, {
              icon: f.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            (0, i.__)('Display the title of a product.', 'woocommerce')),
          A = `${c.name}/product-title`,
          I = window.wp.hooks,
          T = window.wp.coreData;
        let x = (function(e) {
          return (
            (e.Product = 'product'),
            (e.Archive = 'archive'),
            (e.Cart = 'cart'),
            (e.Order = 'order'),
            (e.Site = 'site'),
            e
          );
        })({});
        const P = 'single-product',
          N = 'taxonomy-product_cat',
          R = 'taxonomy-product_tag',
          O = async (e, t, o, r) => {
            var c, n;
            r(
              (c = await (0, s.resolveSelect)(T.store).getEntityRecords(e, t, {
                _fields: ['id'],
                slug: o,
              })) &&
                c.length &&
                null !== (n = c[0]) &&
                void 0 !== n &&
                n.id
                ? c[0].id
                : null,
            );
          },
          B = (e, t = {}) => ({ type: e, sourceData: t });
        function D(e, t) {
          const { query: o } = e.attributes;
          e.setAttributes({ query: { ...o, ...t } });
        }
        function L() {
          return (
            !!(() => {
              var e;
              const t =
                null === (e = (0, s.select)('core/edit-site')) || void 0 === e
                  ? void 0
                  : e.getEditedPostId();
              return (
                !!t &&
                [
                  'woocommerce/woocommerce//archive-product',
                  'woocommerce/woocommerce//taxonomy-product_cat',
                  'woocommerce/woocommerce//taxonomy-product_tag',
                  'woocommerce/woocommerce//taxonomy-product_attribute',
                  'woocommerce/woocommerce//product-search-results',
                ].includes(t)
              );
            })() &&
            (() => {
              const { __experimentalGetGlobalBlocksByName: e, getBlock: t } = (0, s.select)(
                l.store,
              );
              return !e('woocommerce/product-collection').find(e => {
                var o, r;
                return null === (o = t(e).attributes) ||
                  void 0 === o ||
                  null === (r = o.query) ||
                  void 0 === r
                  ? void 0
                  : r.inherit;
              });
            })()
          );
        }
        const F = (0, E.getSetting)('stockStatusOptions', []),
          q = (0, E.getSetting)('hideOutOfStockItems', !1),
          M = () =>
            q
              ? Object.keys(
                  (function(e, t) {
                    const { [t]: o, ...r } = e;
                    return r;
                  })(F, 'outofstock'),
                )
              : Object.keys(F),
          $ = {
            perPage: 9,
            pages: 0,
            offset: 0,
            postType: 'product',
            order: 'asc',
            orderBy: 'title',
            search: '',
            exclude: [],
            inherit: null,
            taxQuery: {},
            isProductCollectionBlock: !0,
            featured: !1,
            woocommerceOnSale: !1,
            woocommerceStockStatus: M(),
            woocommerceAttributes: [],
            woocommerceHandPickedProducts: [],
            timeFrame: void 0,
            priceRange: void 0,
          },
          H = {
            query: $,
            tagName: 'div',
            displayLayout: { type: _.GRID, columns: 3, shrinkColumns: !0 },
            queryContextIncludes: ['collection'],
            forcePageReload: !1,
          },
          G = e => ({ ...e, orderBy: $.orderBy, order: $.order, inherit: L() }),
          j = () => H.displayLayout,
          V = {
            woocommerceOnSale: $.woocommerceOnSale,
            woocommerceStockStatus: $.woocommerceStockStatus,
            woocommerceAttributes: $.woocommerceAttributes,
            woocommerceHandPickedProducts: $.woocommerceHandPickedProducts,
            taxQuery: $.taxQuery,
            featured: $.featured,
            timeFrame: $.timeFrame,
            priceRange: $.priceRange,
          },
          U = [
            'woocommerce/product-template',
            {},
            [
              ['woocommerce/product-image', { imageSizing: v.THUMBNAIL }],
              [
                'core/post-title',
                {
                  textAlign: 'center',
                  level: 3,
                  fontSize: 'medium',
                  style: { spacing: { margin: { bottom: '0.75rem', top: '0' } } },
                  isLink: !0,
                  __woocommerceNamespace: A,
                },
              ],
              ['woocommerce/product-price', { textAlign: 'center', fontSize: 'small' }],
              ['woocommerce/product-button', { textAlign: 'center', fontSize: 'small' }],
            ],
          ],
          Q = 'core/query-pagination',
          K = [
            U,
            [Q, { layout: { type: 'flex', justifyContent: 'center' } }],
            ['woocommerce/product-collection-no-results'],
          ],
          W = {
            name: g.PRODUCT_CATALOG,
            title: (0, i.__)('Product Catalog', 'woocommerce'),
            icon: (0, n.createElement)(y.A, { icon: h.A }),
            description:
              'Display all products in your catalog. Results can (change to) match the current template, page, or search term.',
            keywords: ['all products'],
            scope: [],
          },
          z = { ...H, query: { ...H.query }, collection: W.name, hideControls: [] },
          Y = K,
          J = { ...W, attributes: z, innerBlocks: Y };
        var Z = o(9948);
        const X = {
            name: g.NEW_ARRIVALS,
            title: (0, i.__)('New Arrivals', 'woocommerce'),
            icon: (0, n.createElement)(y.A, { icon: Z.A }),
            description: (0, i.__)('Recommend your newest products.', 'woocommerce'),
            keywords: ['newest products', 'product collection'],
            scope: [],
          },
          ee = {
            ...H,
            displayLayout: { type: 'flex', columns: 5, shrinkColumns: !0 },
            query: {
              ...H.query,
              inherit: !1,
              orderBy: 'date',
              order: 'desc',
              perPage: 5,
              pages: 1,
              timeFrame: { operator: w.IN, value: '-7 days' },
            },
            collection: X.name,
            hideControls: [b.INHERIT, b.ORDER],
          },
          te = [
            [
              'core/heading',
              {
                textAlign: 'center',
                level: 2,
                content: (0, i.__)('New arrivals', 'woocommerce'),
                style: { spacing: { margin: { bottom: '1rem' } } },
              },
            ],
            U,
          ],
          oe = { ...X, attributes: ee, innerBlocks: te };
        var re = o(846);
        const ce = {
            name: g.TOP_RATED,
            title: (0, i.__)('Top Rated', 'woocommerce'),
            icon: (0, n.createElement)(y.A, { icon: re.A }),
            description: (0, i.__)(
              'Recommend products with the highest review ratings.',
              'woocommerce',
            ),
            keywords: ['product collection'],
            scope: [],
          },
          ne = {
            ...H,
            displayLayout: { type: 'flex', columns: 5, shrinkColumns: !0 },
            query: {
              ...H.query,
              inherit: !1,
              orderBy: 'rating',
              order: 'desc',
              perPage: 5,
              pages: 1,
            },
            collection: ce.name,
            hideControls: [b.INHERIT, b.ORDER],
          },
          le = [
            [
              'core/heading',
              {
                textAlign: 'center',
                level: 2,
                content: (0, i.__)('Top rated products', 'woocommerce'),
                style: { spacing: { margin: { bottom: '1rem' } } },
              },
            ],
            U,
          ],
          ae = { ...ce, attributes: ne, innerBlocks: le };
        var se = o(9744);
        const ie = {
            name: g.BEST_SELLERS,
            title: (0, i.__)('Best Sellers', 'woocommerce'),
            icon: (0, n.createElement)(y.A, { icon: se.A }),
            description: (0, i.__)('Recommend your best-selling products.', 'woocommerce'),
            keywords: ['best selling', 'product collection'],
            scope: [],
          },
          me = {
            ...H,
            displayLayout: { type: 'flex', columns: 5, shrinkColumns: !0 },
            query: {
              ...H.query,
              inherit: !1,
              orderBy: 'popularity',
              order: 'desc',
              perPage: 5,
              pages: 1,
            },
            collection: ie.name,
            hideControls: [b.INHERIT, b.ORDER],
          },
          ue = [
            [
              'core/heading',
              {
                textAlign: 'center',
                level: 2,
                content: (0, i.__)('Best selling products', 'woocommerce'),
                style: { spacing: { margin: { bottom: '1rem' } } },
              },
            ],
            U,
          ],
          de = { ...ie, attributes: me, innerBlocks: ue };
        var pe = o(1173);
        const _e = {
            name: g.ON_SALE,
            title: (0, i.__)('On Sale', 'woocommerce'),
            icon: (0, n.createElement)(y.A, { icon: pe.A }),
            description: (0, i.__)('Highlight products that are currently on sale.', 'woocommerce'),
            keywords: ['product collection'],
            scope: [],
          },
          we = {
            ...H,
            displayLayout: { type: 'flex', columns: 5, shrinkColumns: !0 },
            query: { ...H.query, inherit: !1, woocommerceOnSale: !0, perPage: 5, pages: 1 },
            collection: _e.name,
            hideControls: [b.INHERIT, b.ON_SALE],
          },
          ge = [
            [
              'core/heading',
              {
                textAlign: 'center',
                level: 2,
                content: (0, i.__)('On sale products', 'woocommerce'),
                style: { spacing: { margin: { bottom: '1rem' } } },
              },
            ],
            U,
          ],
          be = { ..._e, attributes: we, innerBlocks: ge };
        var ye = o(43);
        const he = {
            name: g.FEATURED,
            title: (0, i.__)('Featured', 'woocommerce'),
            icon: (0, n.createElement)(y.A, { icon: ye.A }),
            description: (0, i.__)('Showcase your featured products.', 'woocommerce'),
            keywords: ['product collection'],
            scope: [],
          },
          Ee = {
            ...H,
            displayLayout: { type: 'flex', columns: 5, shrinkColumns: !0 },
            query: { ...H.query, inherit: !1, featured: !0, perPage: 5, pages: 1 },
            collection: he.name,
            hideControls: [b.INHERIT, b.FEATURED],
          },
          ve = [
            [
              'core/heading',
              {
                textAlign: 'center',
                level: 2,
                content: (0, i.__)('Featured products', 'woocommerce'),
                style: { spacing: { margin: { bottom: '1rem' } } },
              },
            ],
            U,
          ],
          fe = { ...he, attributes: Ee, innerBlocks: ve },
          ke = [J, fe, ae, be, de, oe],
          Se = (e, t, o) => {
            const n = (e =>
              e
                ? (0, s.select)(r.store)
                    .getBlockVariations(c.name)
                    .find(({ name: t }) => t === e)
                : null)(e);
            n &&
              o(
                t,
                n.name === g.PRODUCT_CATALOG
                  ? (0, r.createBlock)(
                      c.name,
                      { ...H, query: { ...H.query, inherit: L() } },
                      (0, r.createBlocksFromInnerBlocksTemplate)(K),
                    )
                  : (0, r.createBlock)(
                      c.name,
                      n.attributes,
                      (0, r.createBlocksFromInnerBlocksTemplate)(n.innerBlocks),
                    ),
              );
          },
          Ce = ({ active: e = !1, title: t, icon: o, description: r, onClick: c }) => {
            const l = e ? 'primary' : 'secondary';
            return (0, n.createElement)(
              m.Button,
              {
                className: 'wc-blocks-product-collection__collection-button',
                variant: l,
                onClick: c,
              },
              (0, n.createElement)(
                'div',
                { className: 'wc-blocks-product-collection__collection-button-icon' },
                o,
              ),
              (0, n.createElement)(
                'div',
                { className: 'wc-blocks-product-collection__collection-button-text' },
                (0, n.createElement)(
                  'p',
                  { className: 'wc-blocks-product-collection__collection-button-title' },
                  t,
                ),
                (0, n.createElement)(
                  'p',
                  { className: 'wc-blocks-product-collection__collection-button-description' },
                  r,
                ),
              ),
            );
          },
          Ae = e => {
            const { chosenCollection: t, onCollectionClick: o } = e,
              l = [
                ...(0, s.useSelect)(e => {
                  const { getBlockVariations: t } = e(r.store);
                  return t(c.name);
                }, []),
              ];
            return (0, n.createElement)(
              'div',
              { className: 'wc-blocks-product-collection__collections-section' },
              l.map(({ name: e, title: r, icon: c, description: l }) =>
                (0, n.createElement)(Ce, {
                  active: t === e,
                  key: e,
                  title: r,
                  description: l,
                  icon: c,
                  onClick: () => o(e),
                }),
              ),
            );
          },
          Ie = window.wp.editor;
        var Te = (function(e) {
          return (
            (e.SINGLE_PRODUCT = 'single-product'),
            (e.PRODUCT_CATALOG = 'product-catalog'),
            (e.PRODUCT_ARCHIVE = 'product-archive'),
            (e.ORDER_CONFIRMATION = 'order-confirmation'),
            (e.CART = 'cart'),
            (e.CHECKOUT = 'checkout'),
            (e.POST = 'post'),
            (e.PAGE = 'page'),
            (e.OTHER = 'other'),
            e
          );
        })(Te || {});
        const xe = {
            'single-product': Te.SINGLE_PRODUCT,
            'archive-product': Te.PRODUCT_CATALOG,
            'taxonomy-product_cat': Te.PRODUCT_ARCHIVE,
            'taxonomy-product_tag': Te.PRODUCT_ARCHIVE,
            'taxonomy-product_attribute': Te.PRODUCT_ARCHIVE,
            'product-search-results': Te.PRODUCT_ARCHIVE,
            'order-confirmation': Te.ORDER_CONFIRMATION,
            'page-cart': Te.CART,
            'page-checkout': Te.CHECKOUT,
          },
          Pe = e => {
            const t = (0, s.useSelect)(e => e(Ie.store).getCurrentPostType(), []);
            if (t === Te.PAGE || t === Te.POST) return t;
            if (!e) return Te.OTHER;
            return (
              xe[e] ||
              (e.includes('single-product')
                ? Te.SINGLE_PRODUCT
                : e.includes('taxonomy-product_cat') || e.includes('taxonomy-product_tag')
                ? Te.PRODUCT_ARCHIVE
                : Te.OTHER)
            );
          },
          Ne = () =>
            (0, n.createElement)(
              'svg',
              {
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              (0, n.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M19 11H5C4.72386 11 4.5 11.2239 4.5 11.5V17.5C4.5 17.7761 4.72386 18 5 18H19C19.2761 18 19.5 17.7761 19.5 17.5V11.5C19.5 11.2239 19.2761 11 19 11ZM5 9.5H19C20.1046 9.5 21 10.3954 21 11.5V17.5C21 18.6046 20.1046 19.5 19 19.5H5C3.89543 19.5 3 18.6046 3 17.5V11.5C3 10.3954 3.89543 9.5 5 9.5Z',
                fill: 'currentColor',
              }),
              (0, n.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M18 7.5C18 7.77614 17.7761 8 17.5 8L6.5 8C6.22386 8 6 7.77614 6 7.5V7.5C6 7.22386 6.22386 7 6.5 7L17.5 7C17.7761 7 18 7.22386 18 7.5V7.5Z',
                fill: 'currentColor',
              }),
              (0, n.createElement)('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M16 5C16 5.27614 15.7761 5.5 15.5 5.5L8.5 5.5C8.22386 5.5 8 5.27614 8 5V5C8 4.72386 8.22386 4.5 8.5 4.5L15.5 4.5C15.7761 4.5 16 4.72386 16 5V5Z',
                fill: 'currentColor',
              }),
            ),
          Re = e => {
            const t = (0, l.useBlockProps)(),
              { clientId: o, context: r } = e,
              { replaceBlock: c } = (0, s.useDispatch)(l.store),
              a = Pe(r.templateSlug);
            return (0, n.createElement)(
              'div',
              { ...t },
              (0, n.createElement)(
                m.Placeholder,
                {
                  className: 'wc-blocks-product-collection__placeholder',
                  icon: Ne,
                  label: (0, i.__)('Product Collection', 'woocommerce'),
                  instructions: (0, i.__)(
                    "Choose a collection to get started. Don't worry, you can change and tweak this any time.",
                    'woocommerce',
                  ),
                },
                (0, n.createElement)(Ae, {
                  onCollectionClick: e => {
                    p('blocks_product_collection_collection_chosen_from_placeholder', {
                      collection: e,
                      location: a,
                    }),
                      Se(e, o, c);
                  },
                }),
              ),
            );
          };
        var Oe = o(9491),
          Be = o(458),
          De = o.n(Be);
        const Le = window.wc.wcTypes;
        var Fe = o(361),
          qe = o(4133);
        o(1598);
        const Me = ({ text: e, title: t = (0, i.__)('Feedback?', 'woocommerce'), url: o }) => {
            const [r, c] = (0, a.useState)(!1);
            return (
              (0, a.useEffect)(() => {
                c(!0);
              }, []),
              (0, n.createElement)(
                n.Fragment,
                null,
                r &&
                  (0, n.createElement)(
                    'div',
                    { className: 'wc-block-feedback-prompt' },
                    (0, n.createElement)(y.A, { icon: Fe.A }),
                    (0, n.createElement)('h2', { className: 'wc-block-feedback-prompt__title' }, t),
                    (0, n.createElement)('p', { className: 'wc-block-feedback-prompt__text' }, e),
                    (0, n.createElement)(
                      'a',
                      {
                        href: o,
                        className: 'wc-block-feedback-prompt__link',
                        rel: 'noreferrer noopener',
                        target: '_blank',
                      },
                      (0, i.__)('Give us your feedback.', 'woocommerce'),
                      (0, n.createElement)(y.A, { icon: qe.A, size: 16 }),
                    ),
                  ),
              )
            );
          },
          $e = () =>
            (0, n.createElement)(Me, {
              text: (0, i.__)(
                'Thanks for trying out the Product Collection block! Help us make it better by sharing your feedback.',
                'woocommerce',
              ),
              title: (0, i.__)('Share your feedback!', 'woocommerce'),
              url: 'https://airtable.com/shrqsMSDPvAKoY99u',
            }),
          He = 'wc-blocks_upgraded-products-to-product-collection',
          Ge = () => ({ status: 'notseen', time: Date.now(), displayCount: 0 }),
          je = e =>
            'woocommerce/product-collection' === e.name && e.attributes.convertedFromProducts,
          Ve = (e, t) => {
            let o = [];
            return (
              e.forEach(e => {
                t(e) && (o = [...o, e.clientId]), (o = [...o, ...Ve(e.innerBlocks, t)]);
              }),
              o
            );
          },
          Ue = (0, E.getSettingWithCoercion)('postTemplateHasSupportForGridView', !1, Le.isBoolean),
          Qe = () => {
            const e = window.localStorage.getItem(He);
            return e ? JSON.parse(e) : Ge();
          },
          Ke = e => {
            window.localStorage.setItem(He, JSON.stringify(e));
          };
        const We = e => ('flex' === e ? 'grid' : 'list' === e ? 'default' : 'grid'),
          ze = e => {
            const { type: t, columns: o } = e;
            return { type: We(t), columnCount: o };
          },
          Ye = (e, t) => {
            const o = e.map(e => {
              const { name: o, attributes: c } = e,
                n = Ye(e.innerBlocks);
              return (({ name: e }) => 'woocommerce/product-template' === e)(e)
                ? ((e, t, o) =>
                    (0, r.createBlock)(
                      'core/post-template',
                      {
                        className: 'products-block-post-template',
                        layout: Ue ? ze(o) : void 0,
                        __woocommerceNamespace: 'woocommerce/product-query/product-template',
                        ...e.attributes,
                      },
                      t,
                    ))(e, n, t)
                : (({ name: e, attributes: t }) =>
                    'core/post-title' === e &&
                    'woocommerce/product-collection/product-title' === t.__woocommerceNamespace)(e)
                ? ((e, t) => {
                    const { __woocommerceNamespace: o, ...c } = e.attributes;
                    return (0, r.createBlock)(
                      'core/post-title',
                      {
                        __woocommerceNamespace: 'woocommerce/product-collection/product-title',
                        ...c,
                      },
                      t,
                    );
                  })(e, n)
                : (({ name: e, attributes: t }) =>
                    'core/post-excerpt' === e &&
                    'woocommerce/product-collection/product-summary' === t.__woocommerceNamespace)(
                    e,
                  )
                ? ((e, t) => {
                    const { __woocommerceNamespace: o, ...c } = e.attributes;
                    return (0, r.createBlock)(
                      'core/post-excerpt',
                      {
                        __woocommerceNamespace: 'woocommerce/product-collection/product-summary',
                        ...c,
                      },
                      t,
                    );
                  })(e, n)
                : (0, r.createBlock)(o, c, n);
            });
            return o;
          },
          Je = e => {
            const t = (0, s.select)('core/block-editor').getBlock(e),
              o = ((e, t) => {
                const o = (0, s.select)('core/block-editor').getBlockRootClientId(e) || void 0;
                return (0, s.select)('core/block-editor').canInsertBlockType(t, o);
              })(e, 'core/query');
            if (t && o) {
              const { attributes: o = {}, innerBlocks: c = [] } = t,
                { displayLayout: n, ...l } = o,
                a = (e => {
                  const { query: t, ...o } = e,
                    {
                      woocommerceAttributes: r,
                      woocommerceStockStatus: c,
                      woocommerceOnSale: n,
                      woocommerceHandPickedProducts: l,
                      taxQuery: a,
                      isProductCollectionBlock: s,
                      ...i
                    } = t,
                    m = { ...i };
                  return (
                    l && (m.include = l),
                    n && (m.__woocommerceOnSale = n),
                    a && (m.taxQuery = a),
                    {
                      ...o,
                      namespace: 'woocommerce/product-query',
                      query: {
                        __woocommerceAttributes: r || [],
                        __woocommerceStockStatus: c || [],
                        ...m,
                      },
                    }
                  );
                })(Ue ? l : o),
                i = Ye(c, n),
                m = (0, r.createBlock)('core/query', a, i);
              return (0, s.dispatch)('core/block-editor').replaceBlock(e, m), !0;
            }
            return !1;
          },
          Ze = () => {
            var e;
            Ke({ status: 'reverted', time: Date.now() }),
              ((e = (0, s.select)('core/block-editor').getBlocks()), Ve(e, je)).map(Je);
          },
          Xe = (0, a.createInterpolateElement)(
            (0, i.__)(
              'Products (Beta) block was upgraded to <strongText />, an updated version with new features and simplified settings.',
              'woocommerce',
            ),
            {
              strongText: (0, n.createElement)(
                'strong',
                null,
                (0, i.__)('Product Collection', 'woocommerce'),
              ),
            },
          ),
          et = (0, i.__)('Revert to Products (Beta)', 'woocommerce'),
          tt = ({ revertMigration: e }) => {
            const [t, o] = ((e, t) => {
                const [o, r] = (0, a.useState)(() => {
                  const o = window.localStorage.getItem(e);
                  if (o)
                    try {
                      return JSON.parse(o);
                    } catch {
                      console.error(
                        `Value for key '${e}' could not be retrieved from localStorage because it can't be parsed.`,
                      );
                    }
                  return t;
                });
                return (
                  (0, a.useEffect)(() => {
                    try {
                      window.localStorage.setItem(e, JSON.stringify(o));
                    } catch {
                      console.error(
                        `Value for key '${e}' could not be saved in localStorage because it can't be converted into a string.`,
                      );
                    }
                  }, [e, o]),
                  [o, r]
                );
              })(He, Ge()),
              r = (0, a.useRef)(!0),
              { status: c } = t;
            return (
              (0, a.useEffect)(
                () => () => {
                  r.current &&
                    ((() => {
                      const e = Qe(),
                        t = (0, Le.isNumber)(e.displayCount) ? e.displayCount + 1 : 0;
                      Ke({ ...e, displayCount: t });
                    })(),
                    (r.current = !1));
                },
                [r],
              ),
              'notseen' === c
                ? (0, n.createElement)(
                    m.Notice,
                    {
                      onRemove: () => {
                        o({ status: 'seen', time: Date.now() });
                      },
                    },
                    (0, n.createElement)(n.Fragment, null, Xe, ' '),
                    (0, n.createElement)('br', null),
                    (0, n.createElement)('br', null),
                    (0, n.createElement)(
                      m.Button,
                      {
                        variant: 'link',
                        onClick: () => {
                          e();
                        },
                      },
                      et,
                    ),
                  )
                : null
            );
          },
          ot = (0, i.__)('Columns', 'woocommerce'),
          rt = (0, i.__)('Responsive', 'woocommerce'),
          ct = (0, i.__)(
            'Automatically adjust the number of columns to better fit smaller screens.',
            'woocommerce',
          ),
          nt = e => {
            const { type: t, columns: o, shrinkColumns: r } = e.displayLayout,
              c = 'flex' === t,
              l = j(),
              a = () => {
                e.setAttributes({ displayLayout: l });
              };
            return c
              ? (0, n.createElement)(
                  n.Fragment,
                  null,
                  (0, n.createElement)(
                    m.__experimentalToolsPanelItem,
                    {
                      label: ot,
                      hasValue: () => (null == l ? void 0 : l.columns) !== o,
                      isShownByDefault: !0,
                      onDeselect: a,
                    },
                    (0, n.createElement)(m.RangeControl, {
                      label: ot,
                      onChange: t =>
                        e.setAttributes({ displayLayout: { ...e.displayLayout, columns: t } }),
                      value: o,
                      min: 2,
                      max: Math.max(6, o),
                    }),
                  ),
                  (0, n.createElement)(
                    m.__experimentalToolsPanelItem,
                    {
                      label: rt,
                      hasValue: () => (null == l ? void 0 : l.shrinkColumns) !== r,
                      isShownByDefault: !0,
                      onDeselect: a,
                    },
                    (0, n.createElement)(m.ToggleControl, {
                      checked: !!r,
                      label: rt,
                      help: ct,
                      onChange: t => {
                        e.setAttributes({
                          displayLayout: { ...e.displayLayout, shrinkColumns: t },
                        });
                      },
                    }),
                  ),
                )
              : null;
          },
          lt = (0, i.__)('Sync with current query', 'woocommerce'),
          at = (0, i.__)(
            'Enable to adjust the displayed products based on the current template and any applied filters.',
            'woocommerce',
          ),
          st = (0, i.__)(
            'Enable to adjust the displayed products based on the current category and any applied filters.',
            'woocommerce',
          ),
          it = (0, i.__)(
            'Enable to adjust the displayed products based on the current tag and any applied filters.',
            'woocommerce',
          ),
          mt = (0, i.__)(
            'Enable to adjust the displayed products based on the current attribute and any applied filters.',
            'woocommerce',
          ),
          ut = (0, i.__)(
            'Enable to adjust the displayed products based on the current search and any applied filters.',
            'woocommerce',
          ),
          dt = ({ setQueryAttribute: e, trackInteraction: t, query: o }) => {
            const r = null == o ? void 0 : o.inherit,
              c = (0, s.select)('core/edit-site'),
              l = (function(e, t) {
                const o = (0, a.useRef)();
                return (
                  (0, a.useEffect)(() => {
                    o.current === e || (t && !t(e, o.current)) || (o.current = e);
                  }, [e, t]),
                  o.current
                );
              })(o, e => !1 === (null == e ? void 0 : e.inherit)),
              i = (0, a.useMemo)(() => L(), []);
            if (
              !(e => {
                if (
                  !(e => null === e)((t = e)) &&
                  t instanceof Object &&
                  t.constructor === Object
                ) {
                  const t = e.getEditedPostType();
                  return 'wp_template' === t || 'wp_template_part' === t;
                }
                var t;
                return !1;
              })(c)
            )
              return null;
            const u = (d = c.getEditedPostId()).includes('//taxonomy-product_cat')
              ? st
              : d.includes('//taxonomy-product_tag')
              ? it
              : d.includes('//taxonomy-product_attribute')
              ? mt
              : d.includes('//product-search-results')
              ? ut
              : at;
            var d;
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: lt,
                hasValue: () => r !== i,
                isShownByDefault: !0,
                onDeselect: () => {
                  e({ inherit: i }), t(b.INHERIT);
                },
              },
              (0, n.createElement)(m.ToggleControl, {
                className: 'wc-block-product-collection__inherit-query-control',
                label: lt,
                help: u,
                checked: !!r,
                onChange: o => {
                  e(o ? { ...$, inherit: o } : { ...$, ...l, inherit: o }), t(b.INHERIT);
                },
              }),
            );
          },
          pt = [
            { label: (0, i.__)('A → Z', 'woocommerce'), value: 'title/asc' },
            { label: (0, i.__)('Z → A', 'woocommerce'), value: 'title/desc' },
            { label: (0, i.__)('Newest to oldest', 'woocommerce'), value: 'date/desc' },
            { label: (0, i.__)('Oldest to newest', 'woocommerce'), value: 'date/asc' },
            { value: 'popularity/desc', label: (0, i.__)('Best Selling', 'woocommerce') },
            { value: 'rating/desc', label: (0, i.__)('Top Rated', 'woocommerce') },
          ],
          _t = e => {
            const { query: t, trackInteraction: o, setQueryAttribute: r } = e,
              { order: c, orderBy: l } = t,
              a = G(t),
              s = () => {
                r({ orderBy: a.orderBy }), o(b.ORDER);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Order by', 'woocommerce'),
                hasValue: () =>
                  c !== (null == a ? void 0 : a.order) || l !== (null == a ? void 0 : a.orderBy),
                isShownByDefault: !0,
                onDeselect: s,
                resetAllFilter: s,
              },
              (0, n.createElement)(m.SelectControl, {
                value: `${l}/${c}`,
                options: pt,
                label: (0, i.__)('Order by', 'woocommerce'),
                onChange: e => {
                  const [t, c] = e.split('/');
                  r({ order: c, orderBy: t }), o(b.ORDER);
                },
              }),
            );
          },
          wt = e => {
            const { query: t, trackInteraction: o, setQueryAttribute: r } = e,
              c = () => {
                r({ woocommerceOnSale: V.woocommerceOnSale }), o(b.ON_SALE);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('On Sale', 'woocommerce'),
                hasValue: () => !0 === t.woocommerceOnSale,
                isShownByDefault: !0,
                onDeselect: c,
                resetAllFilter: c,
              },
              (0, n.createElement)(m.ToggleControl, {
                label: (0, i.__)('Show only products on sale', 'woocommerce'),
                checked: t.woocommerceOnSale || !1,
                onChange: e => {
                  r({ woocommerceOnSale: e }), o(b.ON_SALE);
                },
              }),
            );
          };
        function gt(e) {
          var t;
          const o = 'string' == typeof e ? e : e.value;
          return null === (t = Object.entries(F).find(([, e]) => e === o)) || void 0 === t
            ? void 0
            : t[0];
        }
        const bt = e => {
            var t;
            const { query: o, trackInteraction: r, setQueryAttribute: c } = e,
              l = () => {
                c({ woocommerceStockStatus: V.woocommerceStockStatus }), r(b.STOCK_STATUS);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Stock status', 'woocommerce'),
                hasValue: () => !De()(o.woocommerceStockStatus, M()),
                onDeselect: l,
                resetAllFilter: l,
                isShownByDefault: !0,
              },
              (0, n.createElement)(m.FormTokenField, {
                label: (0, i.__)('Stock status', 'woocommerce'),
                onChange: e => {
                  const t = e.map(gt).filter(Boolean);
                  c({ woocommerceStockStatus: t }), r(b.STOCK_STATUS);
                },
                suggestions: Object.values(F),
                validateInput: e => Object.values(F).includes(e),
                value:
                  (null == o || null === (t = o.woocommerceStockStatus) || void 0 === t
                    ? void 0
                    : t.map(e => F[e])) || [],
                __experimentalExpandOnFocus: !0,
                __experimentalShowHowTo: !1,
              }),
            );
          },
          yt = e => {
            const { query: t, trackInteraction: o, setQueryAttribute: r } = e,
              [c, l] = (0, a.useState)(t.search),
              s = (0, Oe.useDebounce)(() => {
                t.search !== c && (r({ search: c }), o(b.KEYWORD));
              }, 250);
            (0, a.useEffect)(() => (s(), s.cancel), [c, s]);
            const u = () => {
              l(''), o(b.KEYWORD);
            };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                hasValue: () => !!c,
                label: (0, i.__)('Keyword', 'woocommerce'),
                onDeselect: u,
                resetAllFilter: u,
              },
              (0, n.createElement)(m.TextControl, {
                label: (0, i.__)('Keyword', 'woocommerce'),
                value: c,
                onChange: l,
              }),
            );
          };
        var ht = o(9019),
          Et = o.n(ht);
        function vt(e, t, o) {
          const r = new Set(t.map(e => e[o]));
          return e.filter(e => !r.has(e[o]));
        }
        const ft = window.wp.htmlEntities,
          kt = {
            clear: (0, i.__)('Clear all selected items', 'woocommerce'),
            noItems: (0, i.__)('No items found.', 'woocommerce'),
            /* Translators: %s search term */
            noResults: (0, i.__)('No results for %s', 'woocommerce'),
            search: (0, i.__)('Search for items', 'woocommerce'),
            selected: e =>
              (0, i.sprintf) /* translators: Number of items selected from list. */(
                /* translators: Number of items selected from list. */
                (0, i._n)('%d item selected', '%d items selected', e, 'woocommerce'),
                e,
              ),
            updated: (0, i.__)('Search results updated.', 'woocommerce'),
          },
          St = (e, t = e) => {
            const o = e.reduce((e, t) => {
                const o = t.parent || 0;
                return e[o] || (e[o] = []), e[o].push(t), e;
              }, {}),
              r = ('id', t.reduce((e, t) => ((e[String(t.id)] = t), e), {}));
            const c = ['0'],
              n = (e = {}) => (e.parent ? [...n(r[e.parent]), e.name] : e.name ? [e.name] : []),
              l = e =>
                e.map(e => {
                  const t = o[e.id];
                  return (
                    c.push('' + e.id),
                    { ...e, breadcrumbs: n(r[e.parent]), children: t && t.length ? l(t) : [] }
                  );
                }),
              a = l(o[0] || []);
            return (
              Object.entries(o).forEach(([e, t]) => {
                c.includes(e) || a.push(...l(t || []));
              }),
              a
            );
          },
          Ct = (e, t) => {
            if (!t) return e;
            const o = new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'ig');
            return e
              .split(o)
              .map((e, t) =>
                o.test(e)
                  ? (0, n.createElement)('strong', { key: t }, e)
                  : (0, n.createElement)(a.Fragment, { key: t }, e),
              );
          },
          At = ({ label: e }) =>
            (0, n.createElement)('span', { className: 'woocommerce-search-list__item-count' }, e),
          It = e => {
            const { item: t, search: o } = e,
              r = t.breadcrumbs && t.breadcrumbs.length;
            return (0, n.createElement)(
              'span',
              { className: 'woocommerce-search-list__item-label' },
              r
                ? (0, n.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__item-prefix' },
                    1 === (c = t.breadcrumbs).length
                      ? c.slice(0, 1).toString()
                      : 2 === c.length
                      ? c.slice(0, 1).toString() + ' › ' + c.slice(-1).toString()
                      : c.slice(0, 1).toString() + ' … ' + c.slice(-1).toString(),
                  )
                : null,
              (0, n.createElement)(
                'span',
                { className: 'woocommerce-search-list__item-name' },
                Ct((0, ft.decodeEntities)(t.name), o),
              ),
            );
            var c;
          },
          Tt = ({
            countLabel: e,
            className: t,
            depth: o = 0,
            controlId: r = '',
            item: c,
            isSelected: l,
            isSingle: s,
            onSelect: i,
            search: u = '',
            selected: d,
            useExpandedPanelId: p,
            ..._
          }) => {
            var w, g;
            const [b, y] = p,
              h = null != e && void 0 !== c.count && null !== c.count,
              E = !(null === (w = c.breadcrumbs) || void 0 === w || !w.length),
              v = !(null === (g = c.children) || void 0 === g || !g.length),
              f = b === c.id,
              k = Et()(['woocommerce-search-list__item', `depth-${o}`, t], {
                'has-breadcrumbs': E,
                'has-children': v,
                'has-count': h,
                'is-expanded': f,
                'is-radio-button': s,
              }),
              S = _.name || `search-list-item-${r}`,
              C = `${S}-${c.id}`,
              A = (0, a.useCallback)(() => {
                y(f ? -1 : Number(c.id));
              }, [f, c.id, y]);
            return v
              ? (0, n.createElement)(
                  'div',
                  {
                    className: k,
                    onClick: A,
                    onKeyDown: e => ('Enter' === e.key || ' ' === e.key ? A() : null),
                    role: 'treeitem',
                    tabIndex: 0,
                  },
                  s
                    ? (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)('input', {
                          type: 'radio',
                          id: C,
                          name: S,
                          value: c.value,
                          onChange: i(c),
                          onClick: e => e.stopPropagation(),
                          checked: l,
                          className: 'woocommerce-search-list__item-input',
                          ..._,
                        }),
                        (0, n.createElement)(It, { item: c, search: u }),
                        h ? (0, n.createElement)(At, { label: e || c.count }) : null,
                      )
                    : (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)(m.CheckboxControl, {
                          className: 'woocommerce-search-list__item-input',
                          checked: l,
                          ...(!l && c.children.some(e => d.find(t => t.id === e.id))
                            ? { indeterminate: !0 }
                            : {}),
                          label: Ct((0, ft.decodeEntities)(c.name), u),
                          onChange: () => {
                            l
                              ? i(vt(d, c.children, 'id'))()
                              : i(
                                  (function(e, t, o) {
                                    const r = vt(t, e, 'id');
                                    return [...e, ...r];
                                  })(d, c.children),
                                )();
                          },
                          onClick: e => e.stopPropagation(),
                        }),
                        h ? (0, n.createElement)(At, { label: e || c.count }) : null,
                      ),
                )
              : (0, n.createElement)(
                  'label',
                  { htmlFor: C, className: k },
                  s
                    ? (0, n.createElement)(
                        n.Fragment,
                        null,
                        (0, n.createElement)('input', {
                          ..._,
                          type: 'radio',
                          id: C,
                          name: S,
                          value: c.value,
                          onChange: i(c),
                          checked: l,
                          className: 'woocommerce-search-list__item-input',
                        }),
                        (0, n.createElement)(It, { item: c, search: u }),
                      )
                    : (0, n.createElement)(m.CheckboxControl, {
                        ..._,
                        id: C,
                        name: S,
                        className: 'woocommerce-search-list__item-input',
                        value: (0, ft.decodeEntities)(c.value),
                        label: Ct((0, ft.decodeEntities)(c.name), u),
                        onChange: i(c),
                        checked: l,
                      }),
                  h ? (0, n.createElement)(At, { label: e || c.count }) : null,
                );
          },
          xt = Tt;
        var Pt = o(2478),
          Nt = o(2370);
        o(6636);
        const Rt = ({
            id: e,
            label: t,
            popoverContents: o,
            remove: r,
            screenReaderLabel: c,
            className: l = '',
          }) => {
            const [s, u] = (0, a.useState)(!1),
              d = (0, Oe.useInstanceId)(Rt);
            if (((c = c || t), !t)) return null;
            t = (0, ft.decodeEntities)(t);
            const p = Et()('woocommerce-tag', l, { 'has-remove': !!r }),
              _ = `woocommerce-tag__label-${d}`,
              w = (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)('span', { className: 'screen-reader-text' }, c),
                (0, n.createElement)('span', { 'aria-hidden': 'true' }, t),
              );
            return (0, n.createElement)(
              'span',
              { className: p },
              o
                ? (0, n.createElement)(
                    m.Button,
                    { className: 'woocommerce-tag__text', id: _, onClick: () => u(!0) },
                    w,
                  )
                : (0, n.createElement)('span', { className: 'woocommerce-tag__text', id: _ }, w),
              o && s && (0, n.createElement)(m.Popover, { onClose: () => u(!1) }, o),
              r &&
                (0, n.createElement)(
                  m.Button,
                  {
                    className: 'woocommerce-tag__remove',
                    onClick: r(e),
                    label: (0, i.sprintf)(
                      // Translators: %s label.
                      // Translators: %s label.
                      (0, i.__)('Remove %s', 'woocommerce'),
                      t,
                    ),
                    'aria-describedby': _,
                  },
                  (0, n.createElement)(y.A, {
                    icon: Nt.A,
                    size: 20,
                    className: 'clear-icon',
                    role: 'img',
                  }),
                ),
            );
          },
          Ot = Rt;
        o(8137);
        const Bt = e => (0, n.createElement)(xt, { ...e }),
          Dt = e => {
            const {
                list: t,
                selected: o,
                renderItem: r,
                depth: c = 0,
                onSelect: l,
                instanceId: s,
                isSingle: i,
                search: m,
                useExpandedPanelId: u,
              } = e,
              [d] = u;
            return t
              ? (0, n.createElement)(
                  a.Fragment,
                  null,
                  t.map(t => {
                    var p, _;
                    const w =
                        null !== (p = t.children) && void 0 !== p && p.length && !i
                          ? t.children.every(({ id: e }) => o.find(t => t.id === e))
                          : !!o.find(({ id: e }) => e === t.id),
                      g =
                        (null === (_ = t.children) || void 0 === _ ? void 0 : _.length) &&
                        d === t.id;
                    return (0, n.createElement)(
                      a.Fragment,
                      { key: t.id },
                      (0, n.createElement)(
                        'li',
                        null,
                        r({
                          item: t,
                          isSelected: w,
                          onSelect: l,
                          isSingle: i,
                          selected: o,
                          search: m,
                          depth: c,
                          useExpandedPanelId: u,
                          controlId: s,
                        }),
                      ),
                      g ? (0, n.createElement)(Dt, { ...e, list: t.children, depth: c + 1 }) : null,
                    );
                  }),
                )
              : null;
          },
          Lt = ({
            isLoading: e,
            isSingle: t,
            selected: o,
            messages: r,
            onChange: c,
            onRemove: l,
          }) => {
            if (e || t || !o) return null;
            const a = o.length;
            return (0, n.createElement)(
              'div',
              { className: 'woocommerce-search-list__selected' },
              (0, n.createElement)(
                'div',
                { className: 'woocommerce-search-list__selected-header' },
                (0, n.createElement)('strong', null, r.selected(a)),
                a > 0
                  ? (0, n.createElement)(
                      m.Button,
                      {
                        variant: 'link',
                        isDestructive: !0,
                        onClick: () => c([]),
                        'aria-label': r.clear,
                      },
                      (0, i.__)('Clear all', 'woocommerce'),
                    )
                  : null,
              ),
              a > 0
                ? (0, n.createElement)(
                    'ul',
                    null,
                    o.map((e, t) =>
                      (0, n.createElement)(
                        'li',
                        { key: t },
                        (0, n.createElement)(Ot, { label: e.name, id: e.id, remove: l }),
                      ),
                    ),
                  )
                : null,
            );
          },
          Ft = ({
            filteredList: e,
            search: t,
            onSelect: o,
            instanceId: r,
            useExpandedPanelId: c,
            ...l
          }) => {
            const { messages: a, renderItem: s, selected: m, isSingle: u } = l,
              d = s || Bt;
            return 0 === e.length
              ? (0, n.createElement)(
                  'div',
                  { className: 'woocommerce-search-list__list is-not-found' },
                  (0, n.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-icon' },
                    (0, n.createElement)(y.A, { icon: Pt.A, role: 'img' }),
                  ),
                  (0, n.createElement)(
                    'span',
                    { className: 'woocommerce-search-list__not-found-text' },
                    t ? (0, i.sprintf)(a.noResults, t) : a.noItems,
                  ),
                )
              : (0, n.createElement)(
                  'ul',
                  { className: 'woocommerce-search-list__list' },
                  (0, n.createElement)(Dt, {
                    useExpandedPanelId: c,
                    list: e,
                    selected: m,
                    renderItem: d,
                    onSelect: o,
                    instanceId: r,
                    isSingle: u,
                    search: t,
                  }),
                );
          },
          qt = e => {
            const {
                className: t = '',
                isCompact: o,
                isHierarchical: r,
                isLoading: c,
                isSingle: l,
                list: s,
                messages: u = kt,
                onChange: d,
                onSearch: p,
                selected: _,
                type: w = 'text',
                debouncedSpeak: g,
              } = e,
              [b, y] = (0, a.useState)(''),
              h = (0, a.useState)(-1),
              E = (0, Oe.useInstanceId)(qt),
              v = (0, a.useMemo)(() => ({ ...kt, ...u }), [u]),
              f = (0, a.useMemo)(
                () =>
                  ((e, t, o) => {
                    if (!t) return o ? St(e) : e;
                    const r = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i'),
                      c = e.map(e => !!r.test(e.name) && e).filter(Boolean);
                    return o ? St(c, e) : c;
                  })(s, b, r),
                [s, b, r],
              );
            (0, a.useEffect)(() => {
              g && g(v.updated);
            }, [g, v]),
              (0, a.useEffect)(() => {
                'function' == typeof p && p(b);
              }, [b, p]);
            const k = (0, a.useCallback)(
                e => () => {
                  l && d([]);
                  const t = _.findIndex(({ id: t }) => t === e);
                  d([..._.slice(0, t), ..._.slice(t + 1)]);
                },
                [l, _, d],
              ),
              S = (0, a.useCallback)(
                e => () => {
                  Array.isArray(e)
                    ? d(e)
                    : -1 === _.findIndex(({ id: t }) => t === e.id)
                    ? d(l ? [e] : [..._, e])
                    : k(e.id)();
                },
                [l, k, d, _],
              ),
              C = (0, a.useCallback)(
                e => {
                  const [t] = _.filter(t => !e.find(e => t.id === e.id));
                  k(t.id)();
                },
                [k, _],
              );
            return (0, n.createElement)(
              'div',
              {
                className: Et()('woocommerce-search-list', t, {
                  'is-compact': o,
                  'is-loading': c,
                  'is-token': 'token' === w,
                }),
              },
              'text' === w && (0, n.createElement)(Lt, { ...e, onRemove: k, messages: v }),
              (0, n.createElement)(
                'div',
                { className: 'woocommerce-search-list__search' },
                'text' === w
                  ? (0, n.createElement)(m.TextControl, {
                      label: v.search,
                      type: 'search',
                      value: b,
                      onChange: e => y(e),
                    })
                  : (0, n.createElement)(m.FormTokenField, {
                      disabled: c,
                      label: v.search,
                      onChange: C,
                      onInputChange: e => y(e),
                      suggestions: [],
                      __experimentalValidateInput: () => !1,
                      value: c
                        ? [(0, i.__)('Loading…', 'woocommerce')]
                        : _.map(e => ({ ...e, value: e.name })),
                      __experimentalShowHowTo: !1,
                    }),
              ),
              c
                ? (0, n.createElement)(
                    'div',
                    { className: 'woocommerce-search-list__list' },
                    (0, n.createElement)(m.Spinner, null),
                  )
                : (0, n.createElement)(Ft, {
                    ...e,
                    search: b,
                    filteredList: f,
                    messages: v,
                    onSelect: S,
                    instanceId: E,
                    useExpandedPanelId: h,
                  }),
            );
          },
          Mt = ((0, m.withSpokenMessages)(qt), window.wp.url),
          $t = window.wp.apiFetch;
        var Ht,
          Gt,
          jt,
          Vt,
          Ut,
          Qt,
          Kt,
          Wt,
          zt,
          Yt,
          Jt = o.n($t);
        const Zt = (0, E.getSetting)('wcBlocksConfig', {
            buildPhase: 1,
            pluginUrl: '',
            productCount: 0,
            defaultAvatar: '',
            restApiRoutes: {},
            wordCountType: 'words',
          }),
          Xt =
            (Zt.pluginUrl,
            Zt.pluginUrl,
            Zt.buildPhase,
            null === (Ht = E.STORE_PAGES.shop) || void 0 === Ht || Ht.permalink,
            null === (Gt = E.STORE_PAGES.checkout) || void 0 === Gt || Gt.id,
            null === (jt = E.STORE_PAGES.checkout) || void 0 === jt || jt.permalink,
            null === (Vt = E.STORE_PAGES.privacy) || void 0 === Vt || Vt.permalink,
            null === (Ut = E.STORE_PAGES.privacy) || void 0 === Ut || Ut.title,
            null === (Qt = E.STORE_PAGES.terms) || void 0 === Qt || Qt.permalink,
            null === (Kt = E.STORE_PAGES.terms) || void 0 === Kt || Kt.title,
            null === (Wt = E.STORE_PAGES.cart) || void 0 === Wt || Wt.id,
            null === (zt = E.STORE_PAGES.cart) || void 0 === zt || zt.permalink,
            null !== (Yt = E.STORE_PAGES.myaccount) && void 0 !== Yt && Yt.permalink
              ? E.STORE_PAGES.myaccount.permalink
              : (0, E.getSetting)('wpLoginUrl', '/wp-login.php'),
            (0, E.getSetting)('localPickupEnabled', !1),
            (0, E.getSetting)('countries', {})),
          eo = (0, E.getSetting)('countryData', {}),
          to =
            (Object.fromEntries(
              Object.keys(eo)
                .filter(e => !0 === eo[e].allowBilling)
                .map(e => [e, Xt[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(eo)
                .filter(e => !0 === eo[e].allowBilling)
                .map(e => [e, eo[e].states || []]),
            ),
            Object.fromEntries(
              Object.keys(eo)
                .filter(e => !0 === eo[e].allowShipping)
                .map(e => [e, Xt[e] || '']),
            ),
            Object.fromEntries(
              Object.keys(eo)
                .filter(e => !0 === eo[e].allowShipping)
                .map(e => [e, eo[e].states || []]),
            ),
            Object.fromEntries(Object.keys(eo).map(e => [e, eo[e].locale || []])),
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
          oo =
            ((0, E.getSetting)('addressFieldsLocations', to).address,
            (0, E.getSetting)('addressFieldsLocations', to).contact,
            (0, E.getSetting)('addressFieldsLocations', to).order,
            (0, E.getSetting)('additionalOrderFields', {}),
            (0, E.getSetting)('additionalContactFields', {}),
            (0, E.getSetting)('additionalAddressFields', {}),
            (e, t) => {
              const o = new Map();
              return e.filter(e => {
                const r = t(e);
                return !o.has(r) && (o.set(r, e), !0);
              });
            }),
          ro = e => Jt()({ path: `wc/store/v1/products/attributes/${e}/terms` });
        const co = window.wp.escapeHtml,
          no = ({ error: e }) =>
            (0, n.createElement)(
              'div',
              { className: 'wc-block-error-message' },
              (({ message: e, type: t }) =>
                e
                  ? 'general' === t
                    ? (0, n.createElement)(
                        'span',
                        null,
                        (0, i.__)('The following error was returned', 'woocommerce'),
                        (0, n.createElement)('br', null),
                        (0, n.createElement)('code', null, (0, co.escapeHTML)(e)),
                      )
                    : 'api' === t
                    ? (0, n.createElement)(
                        'span',
                        null,
                        (0, i.__)('The following error was returned from the API', 'woocommerce'),
                        (0, n.createElement)('br', null),
                        (0, n.createElement)('code', null, (0, co.escapeHTML)(e)),
                      )
                    : e
                  : (0, i.__)(
                      'An error has prevented the block from being updated.',
                      'woocommerce',
                    ))(e),
            ),
          lo = ({
            className: e,
            item: t,
            isSelected: o,
            isLoading: r,
            onSelect: c,
            disabled: l,
            ...a
          }) =>
            (0, n.createElement)(
              n.Fragment,
              null,
              (0, n.createElement)(Tt, {
                ...a,
                key: t.id,
                className: e,
                isSelected: o,
                item: t,
                onSelect: c,
                disabled: l,
              }),
              o &&
                r &&
                (0, n.createElement)(
                  'div',
                  {
                    key: 'loading',
                    className: Et()(
                      'woocommerce-search-list__item',
                      'woocommerce-product-attributes__item',
                      'depth-1',
                      'is-loading',
                      'is-not-active',
                    ),
                  },
                  (0, n.createElement)(m.Spinner, null),
                ),
            ),
          ao =
            ((0, E.getSetting)('attributes', []).reduce((e, t) => {
              const o =
                (r = t) && r.attribute_name
                  ? {
                      id: parseInt(r.attribute_id, 10),
                      name: r.attribute_name,
                      taxonomy: 'pa_' + r.attribute_name,
                      label: r.attribute_label,
                      orderby: r.attribute_orderby,
                    }
                  : null;
              var r;
              return o && o.id && e.push(o), e;
            }, []),
            e => {
              const { count: t, id: o, name: r, parent: c } = e;
              return {
                count: t,
                id: o,
                name: r,
                parent: c,
                breadcrumbs: [],
                children: [],
                value: (0, Le.isAttributeTerm)(e) ? e.attr_slug : '',
              };
            });
        o(2777);
        const so = (0, Oe.withInstanceId)(
            ({
              onChange: e,
              onOperatorChange: t,
              instanceId: o,
              isCompact: r = !1,
              messages: c = {},
              operator: l = 'any',
              selected: s,
              type: u = 'text',
            }) => {
              const {
                  errorLoadingAttributes: d,
                  isLoadingAttributes: p,
                  productsAttributes: _,
                } = (function(e) {
                  const [t, o] = (0, a.useState)(null),
                    [r, c] = (0, a.useState)(!1),
                    [n, l] = (0, a.useState)([]),
                    s = (0, a.useRef)(!1);
                  return (
                    (0, a.useEffect)(() => {
                      if (e && !r && !s.current)
                        return (
                          (async function() {
                            c(!0);
                            try {
                              const e = await Jt()({ path: 'wc/store/v1/products/attributes' }),
                                t = [];
                              for (const o of e) {
                                const e = await ro(o.id);
                                t.push({
                                  ...o,
                                  parent: 0,
                                  terms: e.map(e => ({
                                    ...e,
                                    attr_slug: o.taxonomy,
                                    parent: o.id,
                                  })),
                                });
                              }
                              l(t), (s.current = !0);
                            } catch (e) {
                              e instanceof Error &&
                                o(
                                  await (async e => {
                                    if (!('json' in e))
                                      return { message: e.message, type: e.type || 'general' };
                                    try {
                                      const t = await e.json();
                                      return { message: t.message, type: t.type || 'api' };
                                    } catch (e) {
                                      return { message: e.message, type: 'general' };
                                    }
                                  })(e),
                                );
                            } finally {
                              c(!1);
                            }
                          })(),
                          () => {
                            s.current = !0;
                          }
                        );
                    }, [r, e]),
                    { errorLoadingAttributes: t, isLoadingAttributes: r, productsAttributes: n }
                  );
                })(!0),
                w = _.reduce((e, t) => {
                  const { terms: o, ...r } = t;
                  return [...e, ao(r), ...o.map(ao)];
                }, []);
              return (
                (c = {
                  clear: (0, i.__)('Clear all product attributes', 'woocommerce'),
                  noItems: (0, i.__)(
                    "Your store doesn't have any product attributes.",
                    'woocommerce',
                  ),
                  search: (0, i.__)('Search for product attributes', 'woocommerce'),
                  selected: e =>
                    (0, i.sprintf) /* translators: %d is the count of attributes selected. */(
                      /* translators: %d is the count of attributes selected. */
                      (0, i._n)(
                        '%d attribute selected',
                        '%d attributes selected',
                        e,
                        'woocommerce',
                      ),
                      e,
                    ),
                  updated: (0, i.__)('Product attribute search results updated.', 'woocommerce'),
                  ...c,
                }),
                d
                  ? (0, n.createElement)(no, { error: d })
                  : (0, n.createElement)(
                      n.Fragment,
                      null,
                      (0, n.createElement)(qt, {
                        className: 'woocommerce-product-attributes',
                        isCompact: r,
                        isHierarchical: !0,
                        isLoading: p,
                        isSingle: !1,
                        list: w,
                        messages: c,
                        onChange: e,
                        renderItem: e => {
                          const { item: t, search: r, depth: c = 0 } = e,
                            l = t.count || 0,
                            a = [
                              'woocommerce-product-attributes__item',
                              'woocommerce-search-list__item',
                              {
                                'is-searching': r.length > 0,
                                'is-skip-level': 0 === c && 0 !== t.parent,
                              },
                            ];
                          if (!t.breadcrumbs.length)
                            return (0, n.createElement)(lo, {
                              ...e,
                              className: Et()(a),
                              item: t,
                              isLoading: p,
                              disabled: 0 === t.count,
                              name: `attributes-${o}`,
                              countLabel: (0,
                              i.sprintf) /* translators: %d is the count of terms. */(
                                /* translators: %d is the count of terms. */
                                (0, i._n)('%d term', '%d terms', l, 'woocommerce'),
                                l,
                              ),
                              'aria-label': (0,
                              i.sprintf) /* translators: %1$s is the item name, %2$d is the count of terms for the item. */(
                                /* translators: %1$s is the item name, %2$d is the count of terms for the item. */
                                (0, i._n)(
                                  '%1$s, has %2$d term',
                                  '%1$s, has %2$d terms',
                                  l,
                                  'woocommerce',
                                ),
                                t.name,
                                l,
                              ),
                            });
                          const s = `${t.breadcrumbs[0]}: ${t.name}`;
                          return (0, n.createElement)(Tt, {
                            ...e,
                            name: `terms-${o}`,
                            className: Et()(...a, 'has-count'),
                            countLabel: (0,
                            i.sprintf) /* translators: %d is the count of products. */(
                              /* translators: %d is the count of products. */
                              (0, i._n)('%d product', '%d products', l, 'woocommerce'),
                              l,
                            ),
                            'aria-label': (0,
                            i.sprintf) /* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */(
                              /* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
                              (0, i._n)(
                                '%1$s, has %2$d product',
                                '%1$s, has %2$d products',
                                l,
                                'woocommerce',
                              ),
                              s,
                              l,
                            ),
                          });
                        },
                        selected: s.map(({ id: e }) => w.find(t => t.id === e)).filter(Boolean),
                        type: u,
                      }),
                      !!t &&
                        (0, n.createElement)(
                          'div',
                          { hidden: s.length < 2 },
                          (0, n.createElement)(m.SelectControl, {
                            className: 'woocommerce-product-attributes__operator',
                            label: (0, i.__)('Display products matching', 'woocommerce'),
                            help: (0, i.__)(
                              'Pick at least two attributes to use this setting.',
                              'woocommerce',
                            ),
                            value: l,
                            onChange: t,
                            options: [
                              {
                                label: (0, i.__)('Any selected attributes', 'woocommerce'),
                                value: 'any',
                              },
                              {
                                label: (0, i.__)('All selected attributes', 'woocommerce'),
                                value: 'all',
                              },
                            ],
                          }),
                        ),
                    )
              );
            },
          ),
          io = `${E.ADMIN_URL}edit.php?post_type=product&page=product_attributes`,
          mo = ({ query: e, trackInteraction: t, setQueryAttribute: o }) => {
            const r = e.woocommerceAttributes || [],
              c = null == r ? void 0 : r.map(({ termId: e }) => ({ id: e })),
              l = () => {
                o({ woocommerceAttributes: V.woocommerceAttributes }), t(b.ATTRIBUTES);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Product Attributes', 'woocommerce'),
                hasValue: () => !(null == r || !r.length),
                onDeselect: l,
                resetAllFilter: l,
              },
              (0, n.createElement)(so, {
                messages: { search: (0, i.__)('Attributes', 'woocommerce') },
                selected: c || [],
                onChange: e => {
                  const r = e.map(({ id: e, value: t }) => ({ termId: e, taxonomy: t }));
                  o({ woocommerceAttributes: r }), t(b.ATTRIBUTES);
                },
                operator: 'any',
                isCompact: !0,
                type: 'token',
              }),
              (0, n.createElement)(
                m.ExternalLink,
                {
                  className: 'wc-block-editor-product-collection-panel__manage-attributes-link',
                  href: io,
                },
                (0, i.__)('Manage attributes', 'woocommerce'),
              ),
            );
          },
          uo = { _fields: 'id,name', order: 'asc', orderby: 'name', context: 'view' },
          po = e => {
            var t;
            const o = e.match(/^(?:(.+) )?\(#(\d+)\)$/);
            return (
              !!o && { name: null !== (t = o[1]) && void 0 !== t ? t : '', id: parseInt(o[2], 10) }
            );
          },
          _o = ({ taxonomy: e, termIds: t, onChange: o }) => {
            const { existingTerms: r, isLoadingExistingTerms: c } = (0, s.useSelect)(
                o => {
                  if (!t || !t.length) return { existingTerms: [], isLoadingExistingTerms: !1 };
                  const { getEntityRecords: r, hasFinishedResolution: c } = o('core'),
                    n = ['taxonomy', e.slug, { ...uo, include: t }];
                  return {
                    existingTerms: r(...n),
                    isLoadingExistingTerms: !c('getEntityRecords', n),
                  };
                },
                [e, t],
              ),
              [l, u] = (0, a.useState)(''),
              { searchTerms: d } = (0, s.useSelect)(
                o => {
                  if (l.length <= 1) return { searchTerms: [] };
                  const { getEntityRecords: r } = o('core');
                  return { searchTerms: r('taxonomy', e.slug, { ...uo, exclude: t, search: l }) };
                },
                [e, t, l],
              ),
              p = (0, Oe.useDebounce)(u, 250),
              _ = new Set(),
              w = new Set(),
              g = e => (
                _.has(e.name) && w.add(e.name), _.add(e.name), (e => `${e.name} (#${e.id})`)(e)
              ),
              b = r ? r.map(g) : [],
              y = d ? d.map(g) : [];
            if (r && t.length !== r.length) {
              const e = r.reduce((e, t) => ((e[t.id] = t), e), {});
              t.forEach(t => {
                e[t] || b.push(`(#${t})`);
              });
            }
            return (0, n.createElement)(
              'div',
              { className: 'wc-block-editor-product-collection-inspector__taxonomy-control' },
              (0, n.createElement)(m.FormTokenField, {
                label: e.name,
                value: b,
                onInputChange: p,
                onChange: e => {
                  const t = [];
                  e.forEach(e => {
                    const o = po(e);
                    o && t.push(o.id);
                  }),
                    o(t);
                },
                suggestions: y,
                disabled: c,
                displayTransform: e => {
                  const t = po(e);
                  return (
                    t &&
                      (e = t.name
                        ? w.has(t.name)
                          ? `${t.name} (#${t.id})`
                          : t.name
                        : `(#${t.id} ${(0, i.__)('Missing', 'woocommerce')})`),
                    (0, ft.decodeEntities)(e) || ''
                  );
                },
                __experimentalShowHowTo: !1,
              }),
            );
          },
          wo = function({ setQueryAttribute: e, trackInteraction: t, query: o }) {
            const { taxQuery: r } = o,
              c = (() => {
                const e = (0, s.useSelect)(e => {
                  const { getTaxonomies: t } = e(T.store);
                  return t({ type: 'product', per_page: -1 });
                }, []);
                return (0, a.useMemo)(
                  () =>
                    null == e
                      ? void 0
                      : e.filter(({ visibility: e }) => !(null == e || !e.publicly_queryable)),
                  [e],
                );
              })();
            return c && 0 !== c.length
              ? (0, n.createElement)(
                  n.Fragment,
                  null,
                  c.map(o => {
                    const { slug: c, name: l } = o,
                      a = (null == r ? void 0 : r[c]) || [],
                      s = o => {
                        e({ taxQuery: { ...r, [c]: o } }), t(`${b.TAXONOMY}__${c}`);
                      },
                      i = () => {
                        s([]), t(`${b.TAXONOMY}__${c}`);
                      };
                    return (0, n.createElement)(
                      m.__experimentalToolsPanelItem,
                      {
                        key: c,
                        label: l,
                        hasValue: () => a.length,
                        onDeselect: i,
                        resetAllFilter: i,
                      },
                      (0, n.createElement)(_o, { key: c, taxonomy: o, termIds: a, onChange: s }),
                    );
                  }),
                )
              : null;
          },
          go = ({ query: e, trackInteraction: t, setQueryAttribute: o }) => {
            const r = e.woocommerceHandPickedProducts,
              { productsMap: c, productsList: l } = (function() {
                const [e, t] = (0, a.useState)(new Map()),
                  [o, r] = (0, a.useState)([]);
                return (
                  (0, a.useEffect)(() => {
                    (({ selected: e = [], search: t = '', queryArgs: o = {} }) => {
                      const r = (({ selected: e = [], search: t = '', queryArgs: o = {} }) => {
                        const r = Zt.productCount > 100,
                          c = {
                            per_page: r ? 100 : 0,
                            catalog_visibility: 'any',
                            search: t,
                            orderby: 'title',
                            order: 'asc',
                          },
                          n = [(0, Mt.addQueryArgs)('/wc/store/v1/products', { ...c, ...o })];
                        return (
                          r &&
                            e.length &&
                            n.push(
                              (0, Mt.addQueryArgs)('/wc/store/v1/products', {
                                catalog_visibility: 'any',
                                include: e,
                                per_page: 0,
                              }),
                            ),
                          n
                        );
                      })({ selected: e, search: t, queryArgs: o });
                      return Promise.all(r.map(e => Jt()({ path: e })))
                        .then(e => {
                          const t = e.flat(),
                            o = oo(t, e => e.id);
                          return o.map(e => ({ ...e, parent: 0 }));
                        })
                        .catch(e => {
                          throw e;
                        });
                    })({ selected: [], queryArgs: { per_page: 0 } }).then(e => {
                      const o = new Map();
                      e.forEach(e => {
                        o.set(e.id, e), o.set(e.name, e);
                      }),
                        r(e),
                        t(o);
                    });
                  }, []),
                  { productsMap: e, productsList: o }
                );
              })(),
              s = (0, a.useCallback)(
                e => {
                  const r = e.reduce((e, t) => {
                    const o = c.get(t) || c.get(Number(t));
                    return o && e.add(String(o.id)), e;
                  }, new Set());
                  o({ woocommerceHandPickedProducts: Array.from(r) }), t(b.HAND_PICKED);
                },
                [o, c],
              ),
              u = (0, a.useMemo)(
                () => l.filter(e => !(null != r && r.includes(String(e.id)))).map(e => e.name),
                [l, r],
              ),
              d = () => {
                o({ woocommerceHandPickedProducts: V.woocommerceHandPickedProducts }),
                  t(b.HAND_PICKED);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Hand-picked Products', 'woocommerce'),
                hasValue: () => !(null == r || !r.length),
                onDeselect: d,
                resetAllFilter: d,
              },
              (0, n.createElement)(m.FormTokenField, {
                disabled: !c.size,
                displayTransform: e => {
                  const t = Number(e);
                  if (Number.isNaN(t)) return (0, ft.decodeEntities)(e) || '';
                  const o = c.get(t);
                  return (0, ft.decodeEntities)(null == o ? void 0 : o.name) || '';
                },
                label: (0, i.__)('Hand-picked Products', 'woocommerce'),
                onChange: s,
                suggestions: u,
                __experimentalValidateInput: e => c.has(e),
                value: c.size ? r || [] : [(0, i.__)('Loading…', 'woocommerce')],
                __experimentalExpandOnFocus: !0,
                __experimentalShowHowTo: !1,
              }),
            );
          },
          bo = e => {
            switch (e) {
              case _.GRID:
                return (0, i.__)('Display products using rows and columns.', 'woocommerce');
              case _.STACK:
                return (0, i.__)('Display products in a single column.', 'woocommerce');
              default:
                return '';
            }
          },
          yo = _.GRID,
          ho = e => {
            const { type: t, columns: o, shrinkColumns: r } = e.displayLayout,
              c = t => {
                e.setAttributes({ displayLayout: { type: t, columns: o, shrinkColumns: r } });
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Layout', 'woocommerce'),
                hasValue: () => t !== yo,
                isShownByDefault: !0,
                onDeselect: () => {
                  c(_.GRID);
                },
              },
              (0, n.createElement)(
                m.__experimentalToggleGroupControl,
                {
                  label: (0, i.__)('Layout', 'woocommerce'),
                  isBlock: !0,
                  onChange: e => {
                    c(e);
                  },
                  help: bo(t),
                  value: t,
                },
                (0, n.createElement)(m.__experimentalToggleGroupControlOption, {
                  value: _.STACK,
                  label: (0, i.__)('Stack', 'woocommerce'),
                }),
                (0, n.createElement)(m.__experimentalToggleGroupControlOption, {
                  value: _.GRID,
                  label: (0, i.__)('Grid', 'woocommerce'),
                }),
              ),
            );
          },
          Eo = e => {
            const { query: t, trackInteraction: o, setQueryAttribute: r } = e,
              c = () => {
                r({ featured: V.featured }), o(b.FEATURED);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Featured', 'woocommerce'),
                hasValue: () => !0 === t.featured,
                onDeselect: c,
                resetAllFilter: c,
              },
              (0, n.createElement)(
                m.BaseControl,
                {
                  id: 'product-collection-featured-products-control',
                  label: (0, i.__)('Featured', 'woocommerce'),
                },
                (0, n.createElement)(m.ToggleControl, {
                  label: (0, i.__)('Show only featured products', 'woocommerce'),
                  checked: t.featured || !1,
                  onChange: e => {
                    r({ featured: e }), o(b.FEATURED);
                  },
                }),
              ),
            );
          },
          vo = e => {
            const { query: t, trackInteraction: o, setQueryAttribute: r } = e,
              { timeFrame: c } = t,
              l = () => {
                r({ timeFrame: V.timeFrame }), o(b.CREATED);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Created', 'woocommerce'),
                hasValue: () => (null == c ? void 0 : c.operator) && (null == c ? void 0 : c.value),
                onDeselect: l,
                resetAllFilter: l,
              },
              (0, n.createElement)(
                m.Flex,
                { direction: 'column', gap: 3 },
                (0, n.createElement)(
                  m.FlexItem,
                  null,
                  (0, n.createElement)(
                    m.__experimentalToggleGroupControl,
                    {
                      label: (0, i.__)('Created', 'woocommerce'),
                      isBlock: !0,
                      onChange: e => {
                        r({ timeFrame: { ...c, operator: e } }), o(b.CREATED);
                      },
                      value: (null == c ? void 0 : c.operator) || w.IN,
                    },
                    (0, n.createElement)(m.__experimentalToggleGroupControlOption, {
                      value: w.IN,
                      label: (0, i._x)(
                        'Within',
                        'Product Collection query operator',
                        'woocommerce',
                      ),
                    }),
                    (0, n.createElement)(m.__experimentalToggleGroupControlOption, {
                      value: w.NOT_IN,
                      label: (0, i._x)(
                        'Before',
                        'Product Collection query operator',
                        'woocommerce',
                      ),
                    }),
                  ),
                ),
                (0, n.createElement)(
                  m.FlexItem,
                  null,
                  (0, n.createElement)(m.RadioControl, {
                    onChange: e => {
                      r({ timeFrame: { operator: w.IN, ...c, value: e } }), o(b.CREATED);
                    },
                    options: [
                      { label: 'last 24 hours', value: '-1 day' },
                      { label: 'last 7 days', value: '-7 days' },
                      { label: 'last 30 days', value: '-30 days' },
                      { label: 'last 3 months', value: '-3 months' },
                    ],
                    selected: null == c ? void 0 : c.value,
                  }),
                ),
              ),
            );
          },
          fo = window.wc.priceFormat,
          ko = ({ value: e, onChange: t, label: o }) => {
            const [r, c] = (0, a.useState)(`${e || ''}`),
              l = (0, fo.getCurrency)(),
              s = ((e = '', t) => {
                const o = e
                    .replace(new RegExp(`[^0-9\\${t.decimalSeparator || ''}]`, 'g'), '')
                    .replace(new RegExp(`\\${t.decimalSeparator}`, 'g'), '.'),
                  r = Number(o);
                if ('' !== o && !isNaN(r)) return r < 0 ? 0 : r;
              })(r, l),
              u = ((e, t) => {
                if (void 0 === e || isNaN(e)) return;
                let o = ((e, t) => {
                  const o = Math.pow(10, t.minorUnit),
                    r = '' + Math.round(e * o) / o;
                  let [c, n] = r.split('.');
                  return (
                    t.thousandSeparator &&
                      (c = c.replace(/\B(?=(\d{3})+(?!\d))/g, t.thousandSeparator)),
                    n ? `${c}${t.decimalSeparator || '.'}${n}` : c
                  );
                })(e, t);
                return (
                  null != t && t.prefix && (o = `${t.prefix}${o}`),
                  null != t && t.suffix && (o = `${o}${t.suffix}`),
                  o
                );
              })(s, l);
            return (0, n.createElement)(m.__experimentalInputControl, {
              value: u,
              onChange: e => {
                c(e);
              },
              onBlur: () => {
                t(s);
              },
              onKeyDown: e => {
                'Enter' === e.key && t(s);
              },
              label: o,
              prefix: (0, n.createElement)(m.__experimentalInputControlPrefixWrapper, null, o),
              placeholder: (0, i.__)('Auto', 'woocommerce'),
              hideLabelFromVision: !0,
              type: 'text',
              style: { textAlign: 'right' },
              __next40pxDefaultSize: !0,
            });
          },
          So = e => {
            const { query: t, trackInteraction: o, setQueryAttribute: r } = e,
              c = t.priceRange,
              l = () => {
                r({ priceRange: V.priceRange }), o(b.PRICE_RANGE);
              };
            return (0, n.createElement)(
              m.__experimentalToolsPanelItem,
              {
                label: (0, i.__)('Price Range', 'woocommerce'),
                hasValue: () =>
                  void 0 !== (null == c ? void 0 : c.min) ||
                  void 0 !== (null == c ? void 0 : c.max),
                onDeselect: l,
                resetAllFilter: l,
                className: 'wc-block-product-price-range-control',
              },
              (0, n.createElement)(
                m.BaseControl.VisualLabel,
                null,
                (0, i.__)('PRICE RANGE', 'woocommerce'),
              ),
              (0, n.createElement)(
                m.__experimentalHStack,
                { spacing: '2' },
                (0, n.createElement)(ko, {
                  label: (0, i.__)('MIN', 'woocommerce'),
                  value: null == c ? void 0 : c.min,
                  onChange: e => {
                    r({
                      priceRange: { min: 0 === e ? void 0 : e, max: null == c ? void 0 : c.max },
                    }),
                      o(b.PRICE_RANGE);
                  },
                }),
                (0, n.createElement)(ko, {
                  label: (0, i.__)('MAX', 'woocommerce'),
                  value: null == c ? void 0 : c.max,
                  onChange: e => {
                    const t = 0 === e ? void 0 : e;
                    r({ priceRange: { min: null == c ? void 0 : c.min, max: t } }),
                      o(b.PRICE_RANGE);
                  },
                }),
              ),
            );
          },
          Co = e => {
            const { attributes: t, context: o, setAttributes: r } = e,
              { query: c, collection: s, hideControls: u, displayLayout: d } = t,
              _ = Pe(o.templateSlug),
              w = null == c ? void 0 : c.inherit,
              g = (e => t => !e.includes(t))(u),
              y = !1 === w,
              h = (0, Le.isEmpty)(s) || g(b.INHERIT),
              E = y && g(b.ORDER),
              v = g(b.FEATURED),
              f = g(b.ON_SALE),
              k = { setAttributes: r, displayLayout: d },
              S = {
                setQueryAttribute: (0, a.useMemo)(() => D.bind(null, e), [e]),
                trackInteraction: e =>
                  p('blocks_product_collection_inspector_control_clicked', {
                    collection: t.collection,
                    location: _,
                    filter: e,
                  }),
                query: c,
              };
            return (0, n.createElement)(
              l.InspectorControls,
              null,
              (0, n.createElement)(
                m.__experimentalToolsPanel,
                {
                  label: (0, i.__)('Settings', 'woocommerce'),
                  resetAll: () => {
                    const t = ((o = e.attributes), { displayLayout: j(), query: G(o.query) });
                    var o;
                    e.setAttributes(t);
                  },
                },
                h && (0, n.createElement)(dt, { ...S }),
                (0, n.createElement)(ho, { ...k }),
                (0, n.createElement)(nt, { ...k }),
                E && (0, n.createElement)(_t, { ...S }),
              ),
              y
                ? (0, n.createElement)(
                    m.__experimentalToolsPanel,
                    {
                      label: (0, i.__)('Filters', 'woocommerce'),
                      resetAll: e => {
                        e.forEach(e => {
                          e();
                        });
                      },
                      className: 'wc-block-editor-product-collection-inspector-toolspanel__filters',
                    },
                    f && (0, n.createElement)(wt, { ...S }),
                    (0, n.createElement)(bt, { ...S }),
                    (0, n.createElement)(go, { ...S }),
                    (0, n.createElement)(yt, { ...S }),
                    (0, n.createElement)(mo, { ...S }),
                    (0, n.createElement)(wo, { ...S }),
                    v && (0, n.createElement)(Eo, { ...S }),
                    (0, n.createElement)(vo, { ...S }),
                    (0, n.createElement)(So, { ...S }),
                  )
                : null,
              (0, n.createElement)($e, null),
            );
          };
        (() => {
          if ((0, E.isWpVersion)('6.1', '>=')) {
            const { status: e } = Qe();
          }
        })();
        const Ao = e => {
            const t = e + 2592e5;
            return Date.now() < t;
          },
          Io = (e = 0) => e <= 4;
        (0, I.addFilter)('editor.BlockEdit', c.name, e => t => {
          if (t.name !== c.name) return (0, n.createElement)(e, { ...t });
          const o = (e => {
              const { attributes: t } = e,
                { convertedFromProducts: o } = t,
                { status: r, time: c, displayCount: n } = Qe();
              return o && 'notseen' === r && Ao(c) && Io(n);
            })(t),
            r = (e => {
              const { attributes: t } = e,
                { convertedFromProducts: o } = t,
                { status: r, time: c, displayCount: n } = Qe();
              return o && ('seen' === r || !Ao(c) || !Io(n));
            })(t);
          return (
            r && t.setAttributes({ convertedFromProducts: !1 }),
            (0, n.createElement)(
              n.Fragment,
              null,
              o &&
                (0, n.createElement)(
                  l.InspectorControls,
                  null,
                  (0, n.createElement)(tt, { revertMigration: Ze }),
                ),
              (0, n.createElement)(e, { ...t }),
            )
          );
        });
        const To = ['core/post-content', 'woocommerce/mini-cart', 'woocommerce/featured-product'],
          xo = ['core/', 'woocommerce/'],
          Po = (0, i.__)(
            'Enforce full page reload on certain interactions, like using paginations controls.',
            'woocommerce',
          ),
          No = (0, i.__)(
            "Force page reload can't be disabled because there are non-compatible blocks inside the Product Collection block.",
            'woocommerce',
          ),
          Ro = e => {
            const { clientId: t, forcePageReload: o, setAttributes: r } = e,
              c = (e =>
                (0, s.useSelect)(
                  t => {
                    const { getClientIdsOfDescendants: o, getBlockName: r } = t(l.store);
                    return (
                      o(e).find(e => {
                        var t;
                        return (t = r(e)), !(!To.includes(t) && xo.find(e => t.startsWith(e)));
                      }) || !1
                    );
                  },
                  [e],
                ))(t);
            (0, a.useEffect)(() => {
              !o && c && r({ forcePageReload: !0 });
            }, [o, c, r]);
            const u = c ? No : Po;
            return (0, n.createElement)(m.ToggleControl, {
              label: (0, i.__)('Force Page Reload', 'woocommerce'),
              help: u,
              checked: o,
              onChange: () => r({ forcePageReload: !o }),
              disabled: c,
            });
          };
        function Oo(e) {
          const { clientId: t, attributes: o, setAttributes: r } = e,
            { forcePageReload: c } = o;
          return (0, n.createElement)(
            l.InspectorAdvancedControls,
            null,
            (0, n.createElement)(Ro, { clientId: t, forcePageReload: c, setAttributes: r }),
          );
        }
        var Bo = o(6287);
        const Do = ({ onToggle: e }) =>
            (0, n.createElement)(m.ToolbarButton, {
              icon: Bo.A,
              label: (0, i.__)('Display settings', 'woocommerce'),
              onClick: e,
            }),
          Lo = ({ query: e, setQueryAttribute: t }) => {
            const o = e => {
                const o = Number(e);
                !isNaN(o) && o >= 1 && o <= 100 && t({ perPage: o });
              },
              r = e => {
                const o = Number(e);
                !isNaN(o) && o >= 0 && o <= 100 && t({ offset: o });
              },
              c = e => {
                const o = Number(e);
                !isNaN(o) && o >= 0 && t({ pages: o });
              },
              l = {
                __unstableInputWidth: '60px',
                labelPosition: 'edge',
                step: '1',
                isDragEnabled: !1,
              };
            return (0, n.createElement)(
              m.ToolbarGroup,
              null,
              (0, n.createElement)(m.Dropdown, {
                contentClassName: 'wc-block-editor-product-collection__display-settings',
                renderToggle: ({ onToggle: e }) => (0, n.createElement)(Do, { onToggle: e }),
                renderContent: () =>
                  (0, n.createElement)(
                    n.Fragment,
                    null,
                    (0, n.createElement)(m.__experimentalNumberControl, {
                      ...l,
                      label: (0, i.__)('Items per Page', 'woocommerce'),
                      min: 1,
                      max: 100,
                      onChange: o,
                      value: e.perPage,
                    }),
                    (0, n.createElement)(m.__experimentalNumberControl, {
                      ...l,
                      label: (0, i.__)('Offset', 'woocommerce'),
                      min: 0,
                      max: 100,
                      onChange: r,
                      value: e.offset,
                    }),
                    (0, n.createElement)(
                      m.BaseControl,
                      {
                        help: (0, i.__)(
                          'Limit the pages you want to show, even if the query has more results. To show all pages use 0 (zero).',
                          'woocommerce',
                        ),
                        id: 'woocommerce-products-block__display-settings-pages',
                      },
                      (0, n.createElement)(m.__experimentalNumberControl, {
                        ...l,
                        label: (0, i.__)('Max page to show', 'woocommerce'),
                        min: 0,
                        onChange: c,
                        value: e.pages,
                      }),
                    ),
                  ),
              }),
            );
          };
        var Fo = o(5866),
          qo = o(6554);
        const Mo = e => {
            const { type: t, columns: o, shrinkColumns: r } = e.displayLayout,
              c = t => {
                e.setAttributes({ displayLayout: t });
              },
              l = [
                {
                  icon: Fo.A,
                  title: (0, i.__)('List view', 'woocommerce'),
                  onClick: () => c({ type: _.STACK, columns: o, shrinkColumns: r }),
                  isActive: t === _.STACK,
                },
                {
                  icon: qo.A,
                  title: (0, i.__)('Grid view', 'woocommerce'),
                  onClick: () => c({ type: _.GRID, columns: o, shrinkColumns: r }),
                  isActive: t === _.GRID,
                },
              ];
            return (0, n.createElement)(m.ToolbarGroup, { controls: l });
          },
          $o = e =>
            (0, n.createElement)(
              m.ToolbarGroup,
              null,
              (0, n.createElement)(
                m.ToolbarButton,
                { onClick: e.openCollectionSelectionModal },
                (0, i.__)('Choose collection', 'woocommerce'),
              ),
            );
        function Ho(e) {
          const { attributes: t, openCollectionSelectionModal: o, setAttributes: r } = e,
            { query: c, displayLayout: s } = t,
            i = (0, a.useMemo)(() => D.bind(null, e), [e]);
          return (0, n.createElement)(
            l.BlockControls,
            null,
            (0, n.createElement)($o, { openCollectionSelectionModal: o }),
            !c.inherit &&
              (0, n.createElement)(
                n.Fragment,
                null,
                (0, n.createElement)(Lo, { query: c, setQueryAttribute: i }),
                (0, n.createElement)(Mo, { displayLayout: s, setAttributes: r }),
              ),
          );
        }
        const Go = ({ preview: { setPreviewState: e, initialPreviewState: t } = {}, ...o }) => {
            var r, c, u;
            const d = (0, a.useRef)(!1),
              { clientId: p, attributes: _, setAttributes: w } = o,
              g = ((e, t) => {
                const o = e.templateSlug || '',
                  r = e.postId || null,
                  c = (e => t => e.replace(`${t}-`, ''))(o),
                  n = (e => t => e.includes(t) && e !== t)(o),
                  i = n(P),
                  m = n(N),
                  u = n(R),
                  [d, p] = (0, a.useState)(null),
                  [_, w] = (0, a.useState)(null),
                  [g, b] = (0, a.useState)(null);
                (0, a.useEffect)(() => {
                  if (i) {
                    const e = c(P);
                    O('postType', 'product', e, p);
                  }
                  if (m) {
                    const e = c(N);
                    O('taxonomy', 'product_cat', e, w);
                  }
                  if (u) {
                    const e = c(R);
                    O('taxonomy', 'product_tag', e, b);
                  }
                }, [i, m, u, c]);
                const { isInSingleProductBlock: y, isInSomeCartCheckoutBlock: h } = (0,
                s.useSelect)(
                  e => {
                    const { getBlockParentsByBlockName: o } = e(l.store),
                      r = e => o(t, e).length > 0;
                    return {
                      isInSingleProductBlock: r(['woocommerce/single-product']),
                      isInSomeCartCheckoutBlock: r([
                        'woocommerce/cart',
                        'woocommerce/checkout',
                        'woocommerce/mini-cart-contents',
                      ]),
                    };
                  },
                  [t],
                );
                if (y) return B(x.Product, { productId: r });
                if (h) return B(x.Cart);
                if (i) return B(x.Product, { productId: d });
                const E = (e => t => e === t)(o);
                if (E(P)) return B(x.Product, { productId: null });
                if (m) return B(x.Archive, { taxonomy: 'product_cat', termId: _ });
                if (u) return B(x.Archive, { taxonomy: 'product_tag', termId: g });
                if (E(N)) return B(x.Archive, { taxonomy: 'product_cat', termId: null });
                if (E(R)) return B(x.Archive, { taxonomy: 'product_tag', termId: null });
                if (E('taxonomy-product_attribute'))
                  return B(x.Archive, { taxonomy: null, termId: null });
                if ('page-cart' === o || 'page-checkout' === o) return B(x.Cart);
                const v = E('order-confirmation');
                return B(v ? x.Order : x.Site);
              })(o.context, o.clientId);
            (({ setPreviewState: e, location: t, attributes: o, setAttributes: r }) => {
              var c, n;
              const l = e => {
                r({ __privatePreviewState: { ...o.__privatePreviewState, ...e } });
              };
              (0, a.useLayoutEffect)(() => {
                if (e)
                  return (
                    (null == e ? void 0 : e({ setState: l, location: t, attributes: o })) || void 0
                  );
              }, [e]),
                (0, a.useLayoutEffect)(() => {
                  var c, n;
                  e ||
                    (t.type === x.Archive &&
                      null === (null === (c = t.sourceData) || void 0 === c ? void 0 : c.termId) &&
                      r({
                        __privatePreviewState: {
                          isPreview: !(
                            null == o ||
                            null === (n = o.query) ||
                            void 0 === n ||
                            !n.inherit
                          ),
                          previewMessage: (0, i.__)(
                            'Actual products will vary depending on the page being viewed.',
                            'woocommerce',
                          ),
                        },
                      }));
                }, [
                  null == o || null === (c = o.query) || void 0 === c ? void 0 : c.inherit,
                  null === (n = t.sourceData) || void 0 === n ? void 0 : n.termId,
                  t.type,
                  r,
                  e,
                ]);
            })({ setPreviewState: e, setAttributes: w, location: g, attributes: _ });
            const b = (0, l.useBlockProps)(),
              y = (0, l.useInnerBlocksProps)(b, { template: K }),
              h = ((e, t, o) => {
                const r = (0, Oe.useInstanceId)(o),
                  { getBlockParentsByBlockName: c } = (0, s.useSelect)(l.store);
                let n = r;
                return (
                  (0, a.useMemo)(() => c(e, 'core/block'), [c, e]).length > 0 && (n = t.queryId), n
                );
              })(p, _, Go),
              E = {
                ...H,
                query: { ...H.query, inherit: L() },
                ..._,
                queryId: h,
                ...(!!_.collection && t && { __privatePreviewState: t }),
              };
            (0, a.useEffect)(() => {
              w(E), (d.current = !0);
            }, []);
            const v = (0, s.useSelect)(
              e => {
                const { getSelectedBlockClientId: t, hasSelectedInnerBlock: o } = e(
                    'core/block-editor',
                  ),
                  r = t() === p,
                  c = o(p, !0);
                return r || c;
              },
              [p],
            );
            return 'boolean' !=
              typeof (null == _ || null === (r = _.query) || void 0 === r ? void 0 : r.inherit)
              ? null
              : ((d.current = d.current || De()(_, E)),
                d.current
                  ? (0, n.createElement)(
                      'div',
                      { ...b },
                      (null === (c = _.__privatePreviewState) || void 0 === c
                        ? void 0
                        : c.isPreview) &&
                        v &&
                        (0, n.createElement)(
                          m.Button,
                          {
                            variant: 'primary',
                            size: 'small',
                            showTooltip: !0,
                            label:
                              null === (u = _.__privatePreviewState) || void 0 === u
                                ? void 0
                                : u.previewMessage,
                            className: 'wc-block-product-collection__preview-button',
                            'data-test-id': 'product-collection-preview-button',
                          },
                          'Preview',
                        ),
                      (0, n.createElement)(Co, { ...o }),
                      (0, n.createElement)(Oo, { ...o }),
                      (0, n.createElement)(Ho, { ...o }),
                      (0, n.createElement)('div', { ...y }),
                    )
                  : null);
          },
          jo = Go,
          Vo = e => {
            const { clientId: t, attributes: o } = e,
              { replaceBlock: r } = (0, s.useDispatch)(l.store),
              [c, u] = (0, a.useState)(o.collection);
            return (0, n.createElement)(
              m.Modal,
              {
                overlayClassName: 'wc-blocks-product-collection__modal',
                title: (0, i.__)('Choose a collection', 'woocommerce'),
                onRequestClose: e.closePatternSelectionModal,
                size: 'large',
              },
              (0, n.createElement)(
                'div',
                { className: 'wc-blocks-product-collection__content' },
                (0, n.createElement)(
                  'p',
                  { className: 'wc-blocks-product-collection__subtitle' },
                  (0, i.__)(
                    "Pick what products are shown. Don't worry, you can switch and tweak this collection any time.",
                    'woocommerce',
                  ),
                ),
                (0, n.createElement)(Ae, { chosenCollection: c, onCollectionClick: u }),
                (0, n.createElement)(
                  'div',
                  { className: 'wc-blocks-product-collection__footer' },
                  (0, n.createElement)(
                    m.Button,
                    { variant: 'tertiary', onClick: e.closePatternSelectionModal },
                    (0, i.__)('Cancel', 'woocommerce'),
                  ),
                  (0, n.createElement)(
                    m.Button,
                    {
                      variant: 'primary',
                      onClick: () => {
                        c && Se(c, t, r);
                      },
                    },
                    (0, i.__)('Continue', 'woocommerce'),
                  ),
                ),
              ),
            );
          };
        o(6818);
        var Uo = o(6465);
        const Qo = (0, i.__)('Product Summary', 'woocommerce'),
          Ko =
            ((0, n.createElement)(y.A, {
              icon: Uo.A,
              className: 'wc-block-editor-components-block-icon',
            }),
            (0, i.__)('Display a short description about a product.', 'woocommerce')),
          Wo = `${c.name}/product-summary`;
        (0, r.registerBlockType)(c, {
          icon: Ne,
          edit: e => {
            const { clientId: t, attributes: o } = e,
              [r, c] = (0, a.useState)(!1),
              i = (0, s.useSelect)(e => !!e(l.store).getBlocks(t).length, [t]) ? jo : Re;
            return (0, n.createElement)(
              n.Fragment,
              null,
              (0, n.createElement)(i, { ...e, openCollectionSelectionModal: () => c(!0) }),
              r &&
                (0, n.createElement)(Vo, {
                  clientId: t,
                  attributes: o,
                  closePatternSelectionModal: () => c(!1),
                }),
            );
          },
          save: function({ attributes: { tagName: e = 'div' } }) {
            const t = l.useBlockProps.save(),
              o = l.useInnerBlocksProps.save(t);
            return (0, n.createElement)(e, { ...o });
          },
        }),
          k('core/post-excerpt', {
            blockDescription: Ko,
            blockIcon: (0, n.createElement)(m.Icon, { icon: Uo.A }),
            blockTitle: Qo,
            variationName: Wo,
          }),
          k('core/post-title', {
            blockDescription: C,
            blockIcon: (0, n.createElement)(m.Icon, { icon: f.A }),
            blockTitle: S,
            variationName: A,
          }),
          ke.forEach(e => {
            (({ preview: { setPreviewState: e, initialPreviewState: t } = {}, ...o }) => {
              if (e || t) {
                const r = r => c =>
                  c.attributes.collection !== o.name
                    ? (0, n.createElement)(r, { ...c })
                    : (0, n.createElement)(r, {
                        ...c,
                        preview: { setPreviewState: e, initialPreviewState: t },
                      });
                (0, I.addFilter)('editor.BlockEdit', o.name, r);
              }
              (0, r.registerBlockVariation)(c.name, { ...o });
            })({ isActive: (e, t) => e.collection === t.collection, ...e });
          }),
          (0, E.isWpVersion)('6.1', '>=') &&
            (0, I.addFilter)(
              'blocks.registerBlockType',
              'woocommerce/add-product-collection-block-to-parent-array-of-pagination-block',
              (e, t) =>
                t !== Q
                  ? e
                  : null != e && e.ancestor
                  ? { ...e, ancestor: [...e.ancestor, c.name] }
                  : null != e && e.parent
                  ? { ...e, parent: [...e.parent, c.name] }
                  : e,
            );
      },
      6818: () => {},
      1598: () => {},
      2777: () => {},
      8137: () => {},
      6636: () => {},
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
  function n(e) {
    var t = c[e];
    if (void 0 !== t) return t.exports;
    var o = (c[e] = { exports: {} });
    return r[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = r),
    (e = []),
    (n.O = (t, o, r, c) => {
      if (!o) {
        var l = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, r, c] = e[m], a = !0, s = 0; s < o.length; s++)
            (!1 & c || l >= c) && Object.keys(n.O).every(e => n.O[e](o[s]))
              ? o.splice(s--, 1)
              : ((a = !1), c < l && (l = c));
          if (a) {
            e.splice(m--, 1);
            var i = r();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      c = c || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > c; m--) e[m] = e[m - 1];
      e[m] = [o, r, c];
    }),
    (n.n = e => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (o = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__),
    (n.t = function(e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ('object' == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && 'function' == typeof e.then) return e;
      }
      var c = Object.create(null);
      n.r(c);
      var l = {};
      t = t || [null, o({}), o([]), o(o)];
      for (var a = 2 & r && e; 'object' == typeof a && !~t.indexOf(a); a = o(a))
        Object.getOwnPropertyNames(a).forEach(t => (l[t] = () => e[t]));
      return (l.default = () => e), n.d(c, l), c;
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
    }),
    (n.j = 5201),
    (() => {
      var e = { 5201: 0 };
      n.O.j = t => 0 === e[t];
      var t = (t, o) => {
          var r,
            c,
            [l, a, s] = o,
            i = 0;
          if (l.some(t => 0 !== e[t])) {
            for (r in a) n.o(a, r) && (n.m[r] = a[r]);
            if (s) var m = s(n);
          }
          for (t && t(o); i < l.length; i++) (c = l[i]), n.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return n.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksMainJsonp =
          self.webpackChunkwebpackWcBlocksMainJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var l = n.O(void 0, [94], () => n(1923));
  (l = n.O(l)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {})['product-collection'] = l);
})();
